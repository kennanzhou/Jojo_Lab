const http = require("http");
const https = require("https");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

const root = __dirname;
const publicDir = path.join(root, "outputs");
const dataDir = path.join(root, "work", "private");
const dataFile = path.join(dataDir, "jojo-state.json");
const cardAssetDir = path.join(dataDir, "card-cottage");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const maxJsonBodyBytes = 32 * 1024 * 1024;
const maxImageUploadBytes = 14 * 1024 * 1024;
const authCookieName = "jojo_lab_auth";
const authSecretFile = path.join(dataDir, "jojo-auth-secret");
const loginPin = /^\d{4}$/.test(process.env.JOJO_LOGIN_PIN || "") ? process.env.JOJO_LOGIN_PIN : "1106";
const demoLoginPin = /^\d{4}$/.test(process.env.JOJO_DEMO_PIN || "") ? process.env.JOJO_DEMO_PIN : "8888";
const loginSessionSeconds = 30 * 24 * 60 * 60;
const loginAttemptWindowMs = 30 * 1000;
const loginAttemptWindowLimit = 18;
const loginFailureResetMs = 10 * 60 * 1000;
const loginFailureLockThreshold = 5;
const loginBaseLockMs = 15 * 1000;
const loginMaxLockMs = 5 * 60 * 1000;
const loginAttempts = new Map();
const demoSessions = new Map();
let authSecretCache = "";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".md": "text/markdown; charset=utf-8"
};

const defaultState = {
  wordProgress: {},
  wordRewards: { smallStars: 0, bigStars: 0 },
  globalRewards: { bigStars: 0, migratedModuleBigStars: false },
  wordBank: "ket-official",
  dailyWordCount: 20,
  dailyWordPlan: null,
  customWordBanks: [],
  deletedWordBanks: [],
  songHistory: [],
  kanaProgress: {},
  kanaRewards: { smallStars: 0, bigStars: 0, masteryCredits: 0, awardedKeys: [] },
  phonicsQuest: { unitIndex: 0, unlocked: 0, stars: 0, completed: [], stepIndex: 0, listenIndex: 0, flashIndex: 0, blendIndex: 0, spellIndex: 0, spelling: [] },
  phonicsRewards: { smallStars: 0, bigStars: 0, awardedUnits: [] },
  cardCottage: { assignments: [], revealed: [], slots: [], defaultSlotsSeeded: false, totalCards: 50 },
  appSettings: { wordRepeatVoEnabled: false },
  kanaScore: 0,
  played: 0,
  artMode: false,
  gallery: null,
  homeBackground: { mode: "preset", preset: "robot-cheer", src: "./assets/jojo-retro-hero-robot-cheer.png" },
  homeBackgroundPresets: [],
  aiSettings: {
    mode: "minimax-openai",
    endpoint: "https://api.minimax.io/v1/chat/completions",
    model: "MiniMax-M3",
    customModel: "",
    apiKey: ""
  },
  ossSettings: {
    provider: "aliyun",
    region: "",
    endpoint: "",
    bucket: "",
    accessKeyId: "",
    accessKeySecret: "",
    customDomain: "",
    prefix: "jojo-site",
    useSsl: true
  }
};

function ensureDataDir() {
  fs.mkdirSync(dataDir, { recursive: true, mode: 0o700 });
}

function ensureCardAssetDir() {
  ensureDataDir();
  fs.mkdirSync(cardAssetDir, { recursive: true, mode: 0o700 });
}

function rewardNumber(value) {
  return Math.max(0, Number(value || 0));
}

function normalizeWordRewards(value = {}) {
  return {
    ...defaultState.wordRewards,
    ...value,
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0
  };
}

function normalizeKanaRewards(value = {}) {
  return {
    ...defaultState.kanaRewards,
    ...value,
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0,
    masteryCredits: rewardNumber(value.masteryCredits),
    awardedKeys: Array.isArray(value.awardedKeys) ? value.awardedKeys.map(String) : []
  };
}

function normalizePhonicsRewards(value = {}) {
  return {
    ...defaultState.phonicsRewards,
    ...value,
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0,
    awardedUnits: Array.isArray(value.awardedUnits) ? value.awardedUnits.map(Number).filter(Number.isFinite) : []
  };
}

function legacyModuleBigStars(state) {
  return ["wordRewards", "kanaRewards", "phonicsRewards"].reduce((total, key) => {
    return total + rewardNumber(state?.[key]?.bigStars);
  }, 0);
}

function normalizeGlobalRewards(value = {}, legacyBigStars = 0) {
  const rewards = {
    ...defaultState.globalRewards,
    ...value,
    bigStars: rewardNumber(value.bigStars),
    migratedModuleBigStars: Boolean(value.migratedModuleBigStars)
  };
  if (!rewards.migratedModuleBigStars) {
    rewards.bigStars += rewardNumber(legacyBigStars);
    rewards.migratedModuleBigStars = true;
  }
  return rewards;
}

function normalizeRewardState(state) {
  const legacyBigStars = legacyModuleBigStars(state);
  const wasMigrated = Boolean(state.globalRewards?.migratedModuleBigStars);
  state.globalRewards = normalizeGlobalRewards(state.globalRewards || {}, legacyBigStars);
  state.wordRewards = normalizeWordRewards(state.wordRewards || {});
  state.kanaRewards = normalizeKanaRewards(state.kanaRewards || {});
  state.phonicsRewards = normalizePhonicsRewards(state.phonicsRewards || {});
  return !wasMigrated || legacyBigStars > 0;
}

function readState() {
  ensureDataDir();
  try {
    const state = { ...defaultState, ...JSON.parse(fs.readFileSync(dataFile, "utf8")) };
    const customBankIds = new Set((state.customWordBanks || []).map((bank) => bank.id));
    if (state.wordBank !== "all" && state.wordBank !== "ket-official" && !customBankIds.has(state.wordBank)) {
      state.wordBank = "ket-official";
    }
    const rewardStateChanged = normalizeRewardState(state);
    state.aiSettings = { ...defaultState.aiSettings, ...(state.aiSettings || {}), model: "MiniMax-M3", customModel: "" };
    state.ossSettings = { ...defaultState.ossSettings, ...(state.ossSettings || {}) };
    state.homeBackground = { ...defaultState.homeBackground, ...(state.homeBackground || {}) };
    state.homeBackgroundPresets = Array.isArray(state.homeBackgroundPresets) ? state.homeBackgroundPresets : [];
    if (rewardStateChanged) writeState(state);
    return state;
  } catch {
    return { ...defaultState };
  }
}

function writeState(state) {
  ensureDataDir();
  fs.writeFileSync(dataFile, JSON.stringify(state, null, 2), { mode: 0o600 });
}

function publicOssSettingsForState(state) {
  const ossSettings = { ...defaultState.ossSettings, ...(state.ossSettings || {}) };
  return {
    provider: ossSettings.provider || "aliyun",
    region: ossSettings.region || process.env.OSS_REGION || "",
    endpoint: ossSettings.endpoint || process.env.OSS_ENDPOINT || "",
    bucket: ossSettings.bucket || process.env.OSS_BUCKET || "",
    customDomain: ossSettings.customDomain || process.env.OSS_CUSTOM_DOMAIN || "",
    prefix: resolveOssPrefix(ossSettings),
    useSsl: ossSettings.useSsl !== false,
    hasAccessKeyId: Boolean(ossSettings.accessKeyId || process.env.OSS_ACCESS_KEY_ID),
    hasAccessKeySecret: Boolean(ossSettings.accessKeySecret || process.env.OSS_ACCESS_KEY_SECRET)
  };
}

function publicState(state, options = {}) {
  const aiSettings = { ...defaultState.aiSettings, ...(state.aiSettings || {}) };
  const hasApiKey = Boolean(aiSettings.apiKey);
  delete aiSettings.apiKey;
  const result = {
    ...state,
    aiSettings: { ...aiSettings, hasApiKey },
    ossSettings: publicOssSettingsForState(state)
  };
  if (options.lite) {
    delete result.gallery;
    delete result.songHistory;
    delete result.wordProgress;
  }
  applySignedOssUrlsToPublicState(result);
  return result;
}

function applyStatePatch(current, patch) {
  const next = { ...current };
  if (patch.wordProgressPatch && typeof patch.wordProgressPatch === "object") {
    next.wordProgress = { ...(current.wordProgress || {}) };
    Object.entries(patch.wordProgressPatch).forEach(([key, value]) => {
      if (value === null) {
        delete next.wordProgress[key];
      } else {
        next.wordProgress[key] = value;
      }
    });
  }
  ["wordProgress", "wordRewards", "globalRewards", "dailyWordPlan", "gallery", "deletedWordBanks", "customWordBanks", "songHistory", "kanaProgress", "kanaRewards", "phonicsQuest", "phonicsRewards", "cardCottage", "appSettings", "homeBackground", "homeBackgroundPresets"].forEach((key) => {
    if (key in patch) next[key] = patch[key];
  });
  ["wordBank", "dailyWordCount", "kanaScore", "played", "artMode"].forEach((key) => {
    if (key in patch) next[key] = patch[key];
  });
  if (patch.aiSettings) {
    const previous = current.aiSettings || {};
    const incoming = patch.aiSettings || {};
    next.aiSettings = {
      ...defaultState.aiSettings,
      ...previous,
      ...incoming,
      apiKey: incoming.apiKey ? incoming.apiKey : previous.apiKey || ""
    };
    if (incoming.clearApiKey) next.aiSettings.apiKey = "";
    delete next.aiSettings.hasApiKey;
    delete next.aiSettings.clearApiKey;
  }
  if (patch.ossSettings) {
    const previous = current.ossSettings || {};
    const incoming = patch.ossSettings || {};
    next.ossSettings = {
      ...defaultState.ossSettings,
      ...previous,
      ...incoming,
      accessKeyId: incoming.accessKeyId ? incoming.accessKeyId : previous.accessKeyId || "",
      accessKeySecret: incoming.accessKeySecret ? incoming.accessKeySecret : previous.accessKeySecret || "",
      useSsl: incoming.useSsl !== false
    };
    if (incoming.clearAccessKeyId) next.ossSettings.accessKeyId = "";
    if (incoming.clearAccessKeySecret) next.ossSettings.accessKeySecret = "";
    delete next.ossSettings.hasAccessKeyId;
    delete next.ossSettings.hasAccessKeySecret;
    delete next.ossSettings.clearAccessKeyId;
    delete next.ossSettings.clearAccessKeySecret;
  }
  normalizeRewardState(next);
  return next;
}

function mergeStatePatch(patch, publicOptions = {}) {
  const next = applyStatePatch(readState(), patch);
  writeState(next);
  return publicState(next, publicOptions);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > maxJsonBodyBytes) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function sendJson(res, status, data, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    ...headers
  });
  res.end(JSON.stringify(data));
}

function sendCorsPreflight(res) {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400"
  });
  res.end();
}

function readOrCreateAuthSecret() {
  if (process.env.JOJO_AUTH_SECRET && String(process.env.JOJO_AUTH_SECRET).length >= 32) {
    return String(process.env.JOJO_AUTH_SECRET);
  }
  if (process.env.JWT_SECRET && String(process.env.JWT_SECRET).length >= 32) {
    return String(process.env.JWT_SECRET);
  }
  if (authSecretCache) return authSecretCache;
  ensureDataDir();
  try {
    const saved = fs.readFileSync(authSecretFile, "utf8").trim();
    if (saved.length >= 32) {
      authSecretCache = saved;
      return authSecretCache;
    }
  } catch {}
  authSecretCache = crypto.randomBytes(32).toString("hex");
  fs.writeFileSync(authSecretFile, authSecretCache, { mode: 0o600 });
  return authSecretCache;
}

function parseCookies(req) {
  const cookies = {};
  String(req.headers.cookie || "").split(";").forEach((part) => {
    const index = part.indexOf("=");
    if (index < 0) return;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (!key) return;
    try {
      cookies[key] = decodeURIComponent(value);
    } catch {
      cookies[key] = value;
    }
  });
  return cookies;
}

function isSecureRequest(req) {
  return req.socket.encrypted || String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim() === "https";
}

function authCookieHeader(req, token, maxAge = loginSessionSeconds) {
  const parts = [
    `${authCookieName}=${encodeURIComponent(token)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`
  ];
  if (isSecureRequest(req)) parts.push("Secure");
  return parts.join("; ");
}

function clearAuthCookieHeader(req) {
  return authCookieHeader(req, "", 0);
}

function signAuthPayload(payload) {
  return crypto.createHmac("sha256", readOrCreateAuthSecret()).update(payload).digest("base64url");
}

function createAuthToken(mode = "full") {
  const expiresAt = Date.now() + loginSessionSeconds * 1000;
  const authMode = mode === "demo" ? "demo" : "full";
  const sessionId = crypto.randomBytes(16).toString("base64url");
  const payload = `${expiresAt}.${authMode}.${sessionId}`;
  return `${payload}.${signAuthPayload(payload)}`;
}

function timingSafeEqualString(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function authInfoFromToken(token) {
  const parts = String(token || "").split(".");
  if (parts.length !== 4) return { authenticated: false, mode: "", sessionId: "", expiresAt: 0 };
  const [expiresAt, mode, sessionId, signature] = parts;
  const expires = Number(expiresAt);
  if (!Number.isFinite(expires) || expires < Date.now() || !["full", "demo"].includes(mode) || !sessionId || !signature) {
    return { authenticated: false, mode: "", sessionId: "", expiresAt: 0 };
  }
  const payload = `${expiresAt}.${mode}.${sessionId}`;
  if (!timingSafeEqualString(signature, signAuthPayload(payload))) {
    return { authenticated: false, mode: "", sessionId: "", expiresAt: 0 };
  }
  return { authenticated: true, mode, sessionId, expiresAt: expires };
}

function authInfo(req) {
  return authInfoFromToken(parseCookies(req)[authCookieName]);
}

function isAuthenticated(req) {
  return authInfo(req).authenticated;
}

function isDemoRequest(req) {
  return authInfo(req).mode === "demo";
}

function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

function createDemoState() {
  const state = cloneState(readState());
  state.wordRewards = { smallStars: 0, bigStars: 0 };
  state.globalRewards = { bigStars: 6, migratedModuleBigStars: true };
  return state;
}

function pruneDemoSessions() {
  const now = Date.now();
  if (demoSessions.size <= 300) return;
  for (const [sessionId, entry] of demoSessions) {
    if (entry.expiresAt < now || now - entry.updatedAt > loginSessionSeconds * 1000) {
      demoSessions.delete(sessionId);
    }
  }
}

function demoStateForAuth(info) {
  pruneDemoSessions();
  let entry = demoSessions.get(info.sessionId);
  if (!entry || entry.expiresAt < Date.now()) {
    entry = {
      state: createDemoState(),
      expiresAt: info.expiresAt,
      updatedAt: Date.now()
    };
    demoSessions.set(info.sessionId, entry);
  }
  entry.updatedAt = Date.now();
  return entry.state;
}

function requestState(req) {
  const info = authInfo(req);
  if (info.mode === "demo") return demoStateForAuth(info);
  return readState();
}

function mergeRequestStatePatch(req, patch, publicOptions = {}) {
  const info = authInfo(req);
  if (info.mode !== "demo") return mergeStatePatch(patch, publicOptions);
  const current = demoStateForAuth(info);
  const next = applyStatePatch(current, patch);
  demoSessions.set(info.sessionId, {
    state: next,
    expiresAt: info.expiresAt,
    updatedAt: Date.now()
  });
  return publicState(next, publicOptions);
}

function demoImageUpload(body) {
  const { mime, buffer } = parseImageDataUrl(body.dataUrl || body.image || "");
  const name = String(body.fileName || body.name || "demo-image").slice(0, 120);
  const src = body.dataUrl || body.image || "";
  return {
    name,
    src,
    url: src,
    objectKey: "",
    storage: "demo",
    mime,
    size: buffer.length,
    updatedAt: new Date().toISOString()
  };
}

function clientLoginKey(req) {
  const forwarded = String(req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown");
  const ip = forwarded.split(",")[0].trim() || "unknown";
  const ua = String(req.headers["user-agent"] || "unknown").slice(0, 96);
  return `${ip}|${ua}`;
}

function loginBucket(req) {
  const key = clientLoginKey(req);
  const now = Date.now();
  let bucket = loginAttempts.get(key);
  if (!bucket) {
    bucket = { failures: 0, lastFailure: 0, lockedUntil: 0, attempts: [] };
    loginAttempts.set(key, bucket);
  }
  bucket.attempts = bucket.attempts.filter((time) => now - time <= loginAttemptWindowMs);
  if (loginAttempts.size > 500) {
    for (const [entryKey, entry] of loginAttempts) {
      if (entry.lockedUntil < now && (!entry.lastFailure || now - entry.lastFailure > loginFailureResetMs)) {
        loginAttempts.delete(entryKey);
      }
    }
  }
  return bucket;
}

function lockPayload(bucket, message = "尝试太快了，稍等一下再输入。") {
  const retryAfterMs = Math.max(0, bucket.lockedUntil - Date.now());
  return {
    ok: false,
    error: message,
    retryAfterMs,
    lockedUntil: retryAfterMs ? new Date(bucket.lockedUntil).toISOString() : ""
  };
}

function publicLoginRateLimit(req) {
  const bucket = loginBucket(req);
  if (bucket.lockedUntil > Date.now()) {
    return { locked: true, ...lockPayload(bucket) };
  }
  return { locked: false, retryAfterMs: 0, lockedUntil: "" };
}

function registerLoginAttempt(req) {
  const bucket = loginBucket(req);
  const now = Date.now();
  bucket.attempts.push(now);
  if (bucket.lockedUntil > now) {
    return { allowed: false, bucket, status: 429, data: lockPayload(bucket, "暂时锁住了。") };
  }
  if (bucket.attempts.length > loginAttemptWindowLimit) {
    bucket.lockedUntil = now + loginBaseLockMs;
    return { allowed: false, bucket, status: 429, data: lockPayload(bucket) };
  }
  return { allowed: true, bucket };
}

function registerLoginFailure(bucket) {
  const now = Date.now();
  if (!bucket.lastFailure || now - bucket.lastFailure > loginFailureResetMs) {
    bucket.failures = 0;
  }
  bucket.failures += 1;
  bucket.lastFailure = now;
  if (bucket.failures >= loginFailureLockThreshold) {
    const exponent = Math.min(bucket.failures - loginFailureLockThreshold, 5);
    bucket.lockedUntil = now + Math.min(loginMaxLockMs, loginBaseLockMs * (2 ** exponent));
    return { status: 429, data: lockPayload(bucket, "暂时锁住了。") };
  }
  return {
    status: 401,
    data: {
      ok: false,
      error: "密码不对。",
      attemptsRemaining: Math.max(0, loginFailureLockThreshold - bucket.failures),
      retryAfterMs: 0
    }
  };
}

function clearLoginFailures(req) {
  loginAttempts.delete(clientLoginKey(req));
}

async function handleAuthLogin(req, res) {
  const attempt = registerLoginAttempt(req);
  if (!attempt.allowed) {
    sendJson(res, attempt.status, attempt.data);
    return;
  }
  const body = await readJson(req);
  const pin = String(body.pin || "");
  let mode = "";
  if (/^\d{4}$/.test(pin)) {
    if (timingSafeEqualString(pin, loginPin)) {
      mode = "full";
    } else if (timingSafeEqualString(pin, demoLoginPin)) {
      mode = "demo";
    }
  }
  if (!mode) {
    const failure = registerLoginFailure(attempt.bucket);
    sendJson(res, failure.status, failure.data);
    return;
  }
  clearLoginFailures(req);
  const token = createAuthToken(mode);
  const info = authInfoFromToken(token);
  if (mode === "demo") demoStateForAuth(info);
  sendJson(res, 200, { ok: true, authenticated: true, mode, demo: mode === "demo", expiresInSeconds: loginSessionSeconds }, {
    "Set-Cookie": authCookieHeader(req, token)
  });
}

function cardAssetPathFromSrc(src) {
  const match = String(src || "").match(/^\/api\/card-cottage\/assets\/([^/?#]+)$/);
  if (!match) return "";
  const fileName = decodeURIComponent(match[1]);
  if (!/^[a-zA-Z0-9._-]+$/.test(fileName)) return "";
  const filePath = path.normalize(path.join(cardAssetDir, fileName));
  return filePath.startsWith(cardAssetDir) ? filePath : "";
}

function deleteCardAssetSrc(src) {
  const filePath = cardAssetPathFromSrc(src);
  if (!filePath) return;
  try {
    fs.unlinkSync(filePath);
  } catch {}
}

function imageExtensionForMime(mime) {
  if (mime === "image/png") return ".png";
  if (mime === "image/webp") return ".webp";
  return ".jpg";
}

function normalizeImageMime(mime) {
  const normalized = String(mime || "").toLowerCase().split(";")[0].trim();
  if (normalized === "image/jpg") return "image/jpeg";
  if (["image/jpeg", "image/png", "image/webp", "image/gif"].includes(normalized)) return normalized;
  return "";
}

function parseImageDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:(image\/(?:jpeg|jpg|png|webp|gif));base64,([A-Za-z0-9+/=]+)$/);
  if (!match) throw new Error("只支持 JPG、PNG、WebP 或 GIF 图片。");
  const mime = normalizeImageMime(match[1]);
  if (!mime) throw new Error("图片格式不支持。");
  const buffer = Buffer.from(match[2], "base64");
  if (!buffer.length) throw new Error("图片数据为空。");
  if (buffer.length > maxImageUploadBytes) throw new Error("图片太大，请控制在 14MB 以内。");
  return { mime, buffer };
}

function safeObjectPart(value, fallback = "image") {
  return String(value || fallback)
    .normalize("NFKD")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || fallback;
}

function cleanOssPrefix(value) {
  return String(value || defaultState.ossSettings.prefix)
    .split("/")
    .map((part) => safeObjectPart(part, "jojo"))
    .filter(Boolean)
    .join("/")
    || defaultState.ossSettings.prefix;
}

function resolveOssPrefix(saved = {}) {
  const savedPrefix = String(saved.prefix || "").trim();
  if (savedPrefix && savedPrefix !== defaultState.ossSettings.prefix) return cleanOssPrefix(savedPrefix);
  return cleanOssPrefix(process.env.OSS_PREFIX || savedPrefix || defaultState.ossSettings.prefix);
}

function normalizeOssHost(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .replace(/\/+$/, "");
}

function localOssConfigCandidates() {
  const home = process.env.HOME || "";
  const customPaths = String(process.env.JOJO_OSS_CONFIG_PATH || process.env.CYNADU_OSS_CONFIG_PATH || "")
    .split(path.delimiter)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((filePath, index) => ({ label: `自定义 OSS 配置 ${index + 1}`, filePath }));
  const builtIns = [
    { label: "Cynadu Prism 设置", filePath: path.join(home, "Cursor", "cynadu-platform", "apps", "prism", "config", "settings.json") },
    { label: "Cynadu Platform 设置", filePath: path.join(home, "Cursor", "cynadu-platform", "apps", "platform", "config", "settings.json") }
  ];
  const seen = new Set();
  return [...customPaths, ...builtIns].filter((candidate) => {
    const normalized = path.normalize(candidate.filePath);
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    candidate.filePath = normalized;
    return true;
  });
}

function normalizeLocalOssSettings(settings = {}) {
  return {
    provider: "aliyun",
    region: String(settings.ossRegion || settings.region || "").trim(),
    endpoint: String(settings.ossEndpoint || settings.endpoint || "").trim(),
    bucket: String(settings.ossBucket || settings.bucket || "").trim(),
    accessKeyId: String(settings.ossAccessKeyId || settings.accessKeyId || "").trim(),
    accessKeySecret: String(settings.ossAccessKeySecret || settings.accessKeySecret || "").trim(),
    customDomain: String(settings.ossCustomDomain || settings.customDomain || "").trim(),
    prefix: cleanOssPrefix(settings.ossPrefix || settings.prefix || defaultState.ossSettings.prefix),
    useSsl: true
  };
}

function publicLocalOssCandidate(candidate) {
  const status = {
    label: candidate.label,
    exists: false,
    readable: false,
    complete: false,
    fields: {
      region: false,
      endpoint: false,
      bucket: false,
      customDomain: false,
      accessKeyId: false,
      accessKeySecret: false
    }
  };
  try {
    status.exists = fs.existsSync(candidate.filePath);
    if (!status.exists) return status;
    const settings = normalizeLocalOssSettings(JSON.parse(fs.readFileSync(candidate.filePath, "utf8")));
    status.readable = true;
    status.fields = {
      region: Boolean(settings.region),
      endpoint: Boolean(settings.endpoint),
      bucket: Boolean(settings.bucket),
      customDomain: Boolean(settings.customDomain),
      accessKeyId: Boolean(settings.accessKeyId),
      accessKeySecret: Boolean(settings.accessKeySecret)
    };
    status.complete = Boolean(settings.bucket && (settings.region || settings.endpoint) && settings.accessKeyId && settings.accessKeySecret);
  } catch {
    status.readable = false;
  }
  return status;
}

function localOssConfigStatus() {
  const candidates = localOssConfigCandidates().map(publicLocalOssCandidate);
  return {
    ok: true,
    importable: candidates.some((candidate) => candidate.complete),
    preferred: candidates.find((candidate) => candidate.complete)?.label || "",
    candidates
  };
}

function importLocalOssConfig() {
  for (const candidate of localOssConfigCandidates()) {
    try {
      if (!fs.existsSync(candidate.filePath)) continue;
      const settings = normalizeLocalOssSettings(JSON.parse(fs.readFileSync(candidate.filePath, "utf8")));
      if (!(settings.bucket && (settings.region || settings.endpoint) && settings.accessKeyId && settings.accessKeySecret)) continue;
      const state = readState();
      const current = state.ossSettings || {};
      state.ossSettings = {
        ...defaultState.ossSettings,
        ...current,
        ...settings,
        prefix: current.prefix || settings.prefix || defaultState.ossSettings.prefix,
        useSsl: true
      };
      writeState(state);
      return {
        ok: true,
        source: candidate.label,
        status: localOssConfigStatus(),
        state: publicState(state, { lite: true })
      };
    } catch {
      continue;
    }
  }
  throw new Error("没有找到完整的本机 Cynadu/Prism OSS 配置。");
}

function getOssConfig() {
  const saved = readState().ossSettings || {};
  const cfg = {
    provider: saved.provider || "aliyun",
    region: saved.region || process.env.OSS_REGION || "",
    endpoint: saved.endpoint || process.env.OSS_ENDPOINT || "",
    bucket: saved.bucket || process.env.OSS_BUCKET || "",
    accessKeyId: saved.accessKeyId || process.env.OSS_ACCESS_KEY_ID || "",
    accessKeySecret: saved.accessKeySecret || process.env.OSS_ACCESS_KEY_SECRET || "",
    customDomain: saved.customDomain || process.env.OSS_CUSTOM_DOMAIN || "",
    prefix: resolveOssPrefix(saved),
    useSsl: saved.useSsl !== false
  };
  if (cfg.provider !== "aliyun") throw new Error("当前只支持阿里云 OSS。");
  if (!cfg.bucket || !cfg.accessKeyId || !cfg.accessKeySecret) {
    throw new Error("OSS 尚未配置完整：请在主页齿轮填写 Bucket、AccessKey ID 和 AccessKey Secret。");
  }
  const regionHost = cfg.region ? `${cfg.region.startsWith("oss-") ? cfg.region : "oss-" + cfg.region}.aliyuncs.com` : "";
  const endpointHost = normalizeOssHost(cfg.endpoint || regionHost);
  if (!endpointHost) throw new Error("OSS 尚未配置 Endpoint 或 Region。");
  const bucketHost = endpointHost.startsWith(`${cfg.bucket}.`) ? endpointHost : `${cfg.bucket}.${endpointHost}`;
  const protocol = cfg.useSsl ? "https" : "http";
  return {
    ...cfg,
    endpointHost,
    bucketHost,
    uploadOrigin: `${protocol}://${bucketHost}`,
    publicOrigin: cfg.customDomain ? `${protocol}://${normalizeOssHost(cfg.customDomain)}` : `${protocol}://${bucketHost}`
  };
}

function encodeOssObjectKey(objectKey) {
  return String(objectKey || "").split("/").map(encodeURIComponent).join("/");
}

function signOssReadUrl(objectKey, config = null, expiresSec = 7 * 24 * 60 * 60) {
  const key = String(objectKey || "").trim();
  if (!key) return "";
  const cfg = config || getOssConfig();
  const expires = Math.floor(Date.now() / 1000) + Math.min(Math.max(Number(expiresSec) || 86400, 60), 7 * 24 * 60 * 60);
  const canonicalResource = `/${cfg.bucket}/${key}`;
  const signature = crypto
    .createHmac("sha1", cfg.accessKeySecret)
    .update(`GET\n\n\n${expires}\n${canonicalResource}`)
    .digest("base64");
  return `${cfg.uploadOrigin}/${encodeOssObjectKey(key)}?OSSAccessKeyId=${encodeURIComponent(cfg.accessKeyId)}&Expires=${expires}&Signature=${encodeURIComponent(signature)}`;
}

function publicOssImageRecord(record, field, config) {
  if (!record || typeof record !== "object") return record;
  if (record.storage !== "oss" || !record.objectKey) return record;
  try {
    return { ...record, [field]: signOssReadUrl(record.objectKey, config) };
  } catch {
    return { ...record };
  }
}

function applySignedOssUrlsToPublicState(state) {
  let config = null;
  try {
    config = getOssConfig();
  } catch {
    return state;
  }
  if (state.homeBackground) {
    state.homeBackground = publicOssImageRecord(state.homeBackground, "src", config);
  }
  if (Array.isArray(state.homeBackgroundPresets)) {
    state.homeBackgroundPresets = state.homeBackgroundPresets.map((preset) => publicOssImageRecord(preset, "src", config));
  }
  if (Array.isArray(state.gallery)) {
    state.gallery = state.gallery.map((art) => publicOssImageRecord(art, "image", config));
  }
  if (state.cardCottage && Array.isArray(state.cardCottage.slots)) {
    state.cardCottage = {
      ...state.cardCottage,
      slots: state.cardCottage.slots.map((slot) => slot ? publicOssImageRecord(slot, "src", config) : slot)
    };
  }
  return state;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableOssError(error) {
  return /ECONNRESET|ETIMEDOUT|EAI_AGAIN|ENOTFOUND|socket|timeout|超时|status -[12]/i.test(error?.message || String(error || ""));
}

function ossRequestOnce(method, objectKey, buffer, mime) {
  const config = getOssConfig();
  const encodedKey = objectKey.split("/").map(encodeURIComponent).join("/");
  const date = new Date().toUTCString();
  const contentType = mime || "";
  const canonicalResource = `/${config.bucket}/${objectKey}`;
  const signature = crypto
    .createHmac("sha1", config.accessKeySecret)
    .update(`${method}\n\n${contentType}\n${date}\n${canonicalResource}`)
    .digest("base64");
  const headers = {
    Date: date,
    Authorization: `OSS ${config.accessKeyId}:${signature}`
  };
  if (contentType) headers["Content-Type"] = contentType;
  if (buffer) {
    headers["Content-Length"] = buffer.length;
    headers["Cache-Control"] = "public, max-age=31536000";
  }
  return new Promise((resolve, reject) => {
    const client = config.useSsl === false ? http : https;
    const request = client.request({
      method,
      hostname: config.bucketHost,
      path: `/${encodedKey}`,
      headers,
      family: 4,
      timeout: 120000
    }, (response) => {
      let text = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        text += chunk;
        if (text.length > 2000) text = text.slice(0, 2000);
      });
      response.on("end", () => {
        if (response.statusCode >= 200 && response.statusCode < 300) {
          resolve({ config, status: response.statusCode });
        } else {
          reject(new Error(`OSS ${method} 返回 ${response.statusCode}: ${text || response.statusMessage || "unknown"}`));
        }
      });
    });
    request.on("timeout", () => request.destroy(new Error("OSS 请求超时。")));
    request.on("error", reject);
    if (buffer) request.write(buffer);
    request.end();
  });
}

async function ossRequest(method, objectKey, buffer, mime) {
  let lastError = null;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    if (attempt > 0) await sleep(600 * attempt);
    try {
      return await ossRequestOnce(method, objectKey, buffer, mime);
    } catch (error) {
      lastError = error;
      if (!isRetryableOssError(error)) break;
    }
  }
  throw lastError || new Error("OSS 请求失败。");
}

async function uploadImageToOss(body) {
  const { mime, buffer } = parseImageDataUrl(body.dataUrl || body.image || "");
  const folder = safeObjectPart(body.folder || "uploads", "uploads");
  const ext = imageExtensionForMime(mime).replace(".", "") || "jpg";
  const stem = safeObjectPart(path.basename(String(body.fileName || body.name || "image"), path.extname(String(body.fileName || body.name || ""))), "image");
  const now = new Date();
  const datePath = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}`;
  const objectKey = `${getOssConfig().prefix}/${folder}/${datePath}/${Date.now()}-${crypto.randomBytes(4).toString("hex")}-${stem}.${ext}`;
  const result = await ossRequest("PUT", objectKey, buffer, mime);
  const url = signOssReadUrl(objectKey, result.config);
  return {
    name: String(body.fileName || body.name || stem).slice(0, 120),
    src: url,
    url,
    objectKey,
    storage: "oss",
    mime,
    size: buffer.length,
    updatedAt: new Date().toISOString()
  };
}

async function deleteOssObject(objectKey) {
  const key = String(objectKey || "").trim();
  if (!key) return { ok: true };
  await ossRequest("DELETE", key, null, "");
  return { ok: true };
}

const homeBackgroundPresetDefaults = [
  { id: "robot-cheer", label: "机器人小巴", src: "./assets/jojo-retro-hero-robot-cheer.png" },
  { id: "storybook", label: "故事小巴", src: "./assets/jojo-retro-hero-with-jojo.png" },
  { id: "ukulele", label: "尤克里里", src: "./assets/jojo-retro-hero-cartoon-ukulele.png" },
  { id: "classic", label: "经典实验室", src: "./assets/jojo-retro-hero.png" }
];

function normalizeHomeBackgroundPresetsForServer(presets = []) {
  const byId = new Map(Array.isArray(presets) ? presets.map((item) => [item?.id, item]) : []);
  return homeBackgroundPresetDefaults.map((fallback) => {
    const saved = byId.get(fallback.id) || {};
    return {
      ...fallback,
      src: saved.src || fallback.src,
      objectKey: saved.objectKey || "",
      storage: saved.storage || (saved.objectKey ? "oss" : "built-in"),
      updatedAt: saved.updatedAt || ""
    };
  });
}

function sourceNeedsOss(src) {
  const value = String(src || "");
  return value.startsWith("data:") || value.startsWith("/api/card-cottage/assets/");
}

function normalizeCardCottageSlotsForServer(slots = []) {
  return Array.from({ length: 50 }, (_, index) => {
    const slot = Array.isArray(slots) ? slots[index] : null;
    if (!slot?.src) return null;
    return {
      name: String(slot.name || `Card ${index + 1}`),
      src: String(slot.src),
      updatedAt: slot.updatedAt || "",
      objectKey: slot.objectKey ? String(slot.objectKey) : "",
      storage: slot.storage ? String(slot.storage) : "",
      mime: slot.mime ? String(slot.mime) : "",
      size: Number(slot.size || 0) || 0
    };
  });
}

function ossMigrationStatusForState(state) {
  const presets = normalizeHomeBackgroundPresetsForServer(state.homeBackgroundPresets);
  const presetPending = presets.filter((preset) => preset.storage !== "oss" || !preset.objectKey).length;
  const galleryItems = Array.isArray(state.gallery) ? state.gallery : [];
  const galleryPending = galleryItems.filter((art) => sourceNeedsOss(art?.image)).length;
  const cardSlots = normalizeCardCottageSlotsForServer(state.cardCottage?.slots).filter((slot) => slot?.src);
  const cardPending = cardSlots.filter((slot) => sourceNeedsOss(slot.src)).length;
  const customBackgroundPending = state.homeBackground?.mode === "custom" && sourceNeedsOss(state.homeBackground.src) ? 1 : 0;
  const pending = presetPending + galleryPending + cardPending + customBackgroundPending;
  return {
    pending,
    presetPending,
    presetTotal: presets.length,
    galleryPending,
    galleryTotal: galleryItems.length,
    cardPending,
    cardTotal: cardSlots.length,
    customBackgroundPending,
    customBackgroundTotal: state.homeBackground?.mode === "custom" ? 1 : 0
  };
}

function deploymentStatusForState(state) {
  const migration = ossMigrationStatusForState(state);
  const ossSettings = publicOssSettingsForState(state);
  const ossConfigured = Boolean(
    ossSettings.bucket
    && (ossSettings.endpoint || ossSettings.region)
    && ossSettings.hasAccessKeyId
    && ossSettings.hasAccessKeySecret
  );
  const songHistory = Array.isArray(state.songHistory) ? state.songHistory.filter((item) => item?.analysis) : [];
  const galleryItems = Array.isArray(state.gallery) ? state.gallery : [];
  const cardSlots = normalizeCardCottageSlotsForServer(state.cardCottage?.slots).filter((slot) => slot?.src);
  const issues = [];
  if (!ossConfigured) issues.push("OSS 尚未配置完整。");
  if (migration.pending) issues.push(`还有 ${migration.pending} 项图片资源需要同步到 OSS。`);
  return {
    ok: true,
    internetReady: ossConfigured && migration.pending === 0,
    checkedAt: new Date().toISOString(),
    state: {
      privateStateFile: fs.existsSync(dataFile),
      songHistoryCount: songHistory.length,
      galleryCount: galleryItems.length,
      cardSlotCount: cardSlots.length
    },
    oss: {
      provider: ossSettings.provider,
      configured: ossConfigured,
      uploadsReady: ossConfigured,
      bucket: ossSettings.bucket,
      region: ossSettings.region,
      endpoint: ossSettings.endpoint,
      prefix: ossSettings.prefix,
      hasCustomDomain: Boolean(ossSettings.customDomain),
      hasAccessKeyId: ossSettings.hasAccessKeyId,
      hasAccessKeySecret: ossSettings.hasAccessKeySecret
    },
    migration,
    issues
  };
}

function dataUrlFromFile(filePath) {
  const normalizedPath = path.normalize(filePath);
  if (!normalizedPath.startsWith(publicDir) && !normalizedPath.startsWith(cardAssetDir)) {
    throw new Error("图片路径不在允许范围内。");
  }
  const data = fs.readFileSync(normalizedPath);
  const mime = mimeTypes[path.extname(normalizedPath)] || "image/jpeg";
  if (!String(mime).startsWith("image/")) throw new Error("文件不是图片。");
  return `data:${String(mime).split(";")[0]};base64,${data.toString("base64")}`;
}

function assetDataUrlFromSrc(src) {
  const value = String(src || "");
  if (/^data:image\/[^;]+;base64,/i.test(value)) return value;
  if (value.startsWith("/api/card-cottage/assets/")) {
    const filePath = cardAssetPathFromSrc(value);
    if (!filePath) throw new Error("Card Cottage 本地图片路径无效。");
    return dataUrlFromFile(filePath);
  }
  const relative = value.replace(/^\.\//, "");
  const filePath = path.normalize(path.join(publicDir, relative));
  if (!filePath.startsWith(publicDir)) throw new Error("内置图片路径无效。");
  return dataUrlFromFile(filePath);
}

async function runOssImageMigration() {
  const state = readState();
  await testOssUpload();
  let migrated = 0;
  let skipped = 0;
  const presets = normalizeHomeBackgroundPresetsForServer(state.homeBackgroundPresets);
  for (let index = 0; index < presets.length; index += 1) {
    const preset = presets[index];
    if (preset.storage === "oss" && preset.objectKey) {
      skipped += 1;
      continue;
    }
    const fallback = homeBackgroundPresetDefaults.find((item) => item.id === preset.id) || preset;
    const upload = await uploadImageToOss({
      dataUrl: assetDataUrlFromSrc(fallback.src),
      fileName: `home-preset-${preset.id}.jpg`,
      folder: "home-backgrounds"
    });
    presets[index] = {
      ...preset,
      src: upload.src,
      objectKey: upload.objectKey,
      storage: "oss",
      updatedAt: upload.updatedAt
    };
    migrated += 1;
  }
  state.homeBackgroundPresets = presets;
  if (state.homeBackground?.mode !== "custom") {
    const activePreset = presets.find((preset) => preset.id === state.homeBackground?.preset) || presets[0];
    state.homeBackground = {
      ...defaultState.homeBackground,
      ...state.homeBackground,
      preset: activePreset.id,
      src: activePreset.src,
      objectKey: activePreset.objectKey || "",
      storage: activePreset.storage || "",
      updatedAt: activePreset.updatedAt || ""
    };
  }

  const galleryItems = Array.isArray(state.gallery) ? state.gallery : [];
  for (const art of galleryItems) {
    if (!sourceNeedsOss(art?.image)) {
      skipped += 1;
      continue;
    }
    const upload = await uploadImageToOss({
      dataUrl: assetDataUrlFromSrc(art.image),
      fileName: `${art.title || "artwork"}.jpg`,
      folder: "art-gallery"
    });
    art.image = upload.src;
    art.objectKey = upload.objectKey;
    art.storage = "oss";
    migrated += 1;
  }
  state.gallery = galleryItems;

  const slots = normalizeCardCottageSlotsForServer(state.cardCottage?.slots);
  for (let index = 0; index < slots.length; index += 1) {
    const slot = slots[index];
    if (!slot?.src || !sourceNeedsOss(slot.src)) continue;
    const previousSrc = slot.src;
    const upload = await uploadImageToOss({
      dataUrl: assetDataUrlFromSrc(slot.src),
      fileName: slot.name || `card-slot-${index + 1}.jpg`,
      folder: "card-cottage"
    });
    slots[index] = { ...slot, ...upload, name: slot.name || upload.name };
    if (previousSrc.startsWith("/api/card-cottage/assets/")) deleteCardAssetSrc(previousSrc);
    migrated += 1;
  }
  state.cardCottage = { ...(state.cardCottage || {}), slots };

  if (state.homeBackground?.mode === "custom" && sourceNeedsOss(state.homeBackground.src)) {
    const upload = await uploadImageToOss({
      dataUrl: assetDataUrlFromSrc(state.homeBackground.src),
      fileName: state.homeBackground.name || "home-background.jpg",
      folder: "home-backgrounds"
    });
    state.homeBackground = {
      ...state.homeBackground,
      src: upload.src,
      objectKey: upload.objectKey,
      storage: "oss",
      mime: upload.mime,
      size: upload.size,
      updatedAt: upload.updatedAt
    };
    migrated += 1;
  }

  writeState(state);
  return {
    ok: true,
    migrated,
    skipped,
    status: ossMigrationStatusForState(state),
    state: publicState(state, { lite: true })
  };
}

function publicUrlReachable(url) {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      resolve(result);
    };
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      finish({ ok: false, status: 0, error: "公网 URL 无效。" });
      return;
    }
    const client = parsed.protocol === "http:" ? http : https;
    const request = client.request({
      method: "GET",
      hostname: parsed.hostname,
      path: `${parsed.pathname}${parsed.search}`,
      headers: { Range: "bytes=0-0" },
      timeout: 15000
    }, (response) => {
      response.resume();
      response.on("end", () => finish({ ok: response.statusCode >= 200 && response.statusCode < 400, status: response.statusCode || 0 }));
    });
    request.on("timeout", () => {
      request.destroy();
      finish({ ok: false, status: 0, error: "公网读取超时。" });
    });
    request.on("error", (error) => finish({ ok: false, status: 0, error: error.message }));
    request.end();
  });
}

async function testOssUpload() {
  const tinyPng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=";
  const upload = await uploadImageToOss({ dataUrl: tinyPng, fileName: "jojo-oss-test.png", folder: "probe" });
  let publicRead = { ok: false, status: 0 };
  try {
    publicRead = await publicUrlReachable(upload.url);
  } finally {
    try {
      await deleteOssObject(upload.objectKey);
    } catch {}
  }
  return {
    ok: true,
    uploadOk: true,
    publicReadable: Boolean(publicRead.ok),
    publicStatus: publicRead.status || 0,
    publicError: publicRead.error || "",
    message: publicRead.ok
      ? "OSS 上传、公开读取和清理测试通过。"
      : `OSS 上传成功，但公开读取失败${publicRead.status ? `（HTTP ${publicRead.status}）` : ""}。请确认 Bucket 读权限或自定义域名/CDN。`
  };
}

function saveCardCottageUpload(body) {
  const slot = Number(body.slot);
  if (!Number.isInteger(slot) || slot < 0 || slot >= 50) throw new Error("Invalid Card Cottage slot.");
  return uploadImageToOss({
    ...body,
    folder: "card-cottage",
    fileName: body.fileName || `card-slot-${String(slot + 1).padStart(2, "0")}`
  }).then((upload) => ({
    ...upload,
    slot,
    name: String(body.fileName || `Card ${slot + 1}`).slice(0, 120)
  }));
}

function serveCardAsset(req, res) {
  ensureCardAssetDir();
  const url = new URL(req.url, `http://${req.headers.host}`);
  const fileName = decodeURIComponent(url.pathname.replace("/api/card-cottage/assets/", ""));
  if (!/^[a-zA-Z0-9._-]+$/.test(fileName)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  const filePath = path.normalize(path.join(cardAssetDir, fileName));
  if (!filePath.startsWith(cardAssetDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*"
    });
    res.end(data);
  });
}

function aiMessages(prompt) {
  return [
    { role: "system", content: "You are a careful assistant for a parent-child learning app. Return strict JSON only. Do not use Markdown." },
    { role: "user", content: prompt }
  ];
}

function quoteCurlConfig(value) {
  return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\r/g, "\\r").replace(/\n/g, "\\n")}"`;
}

function curlPostJson(endpoint, apiKey, payload, options = {}) {
  ensureDataDir();
  const token = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const bodyPath = path.join(dataDir, `minimax-body-${token}.json`);
  const configPath = path.join(dataDir, `minimax-curl-${token}.conf`);
  const marker = "\n__JOJO_HTTP_STATUS__:";
  const maxTime = Number(options.timeoutSeconds || process.env.MINIMAX_CURL_TIMEOUT_SECONDS || 45);
  fs.writeFileSync(bodyPath, JSON.stringify(payload), { mode: 0o600 });
  fs.writeFileSync(configPath, [
    "silent",
    "show-error",
    "location",
    `max-time = ${maxTime}`,
    "request = \"POST\"",
    `url = ${quoteCurlConfig(endpoint)}`,
    "header = \"Content-Type: application/json\"",
    `header = ${quoteCurlConfig(`Authorization: Bearer ${apiKey}`)}`,
    `data-binary = ${quoteCurlConfig(`@${bodyPath}`)}`,
    `write-out = ${quoteCurlConfig(`${marker}%{http_code}`)}`
  ].join("\n"), { mode: 0o600 });
  return new Promise((resolve, reject) => {
    execFile("curl", ["--config", configPath], { maxBuffer: 8 * 1024 * 1024 }, (error, stdout, stderr) => {
      try { fs.unlinkSync(bodyPath); } catch {}
      try { fs.unlinkSync(configPath); } catch {}
      if (error) {
        reject(new Error((stderr || error.message || "curl failed").trim()));
        return;
      }
      const markerIndex = stdout.lastIndexOf(marker);
      if (markerIndex < 0) {
        reject(new Error("curl did not return an HTTP status"));
        return;
      }
      const text = stdout.slice(0, markerIndex);
      const status = Number(stdout.slice(markerIndex + marker.length).trim()) || 0;
      resolve({ ok: status >= 200 && status < 300, status, text, source: "curl" });
    });
  });
}

async function postMinimaxJson(endpoint, apiKey, payload, options = {}) {
  const controller = new AbortController();
  const fetchTimeoutMs = Number(options.fetchTimeoutMs || process.env.MINIMAX_FETCH_TIMEOUT_MS || 45000);
  const timeout = setTimeout(() => controller.abort(), fetchTimeoutMs);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    return { ok: response.ok, status: response.status, text: await response.text(), source: "fetch" };
  } catch (error) {
    const message = error.cause?.message || error.message;
    const timedOut = error.name === "AbortError" || /aborted|timed? out|timeout/i.test(message);
    if (timedOut && options.retryCurlOnFetchTimeout === false) {
      throw new Error(`请求超过 ${Math.round(fetchTimeoutMs / 1000)} 秒仍未返回`);
    }
    try {
      const curlResponse = await curlPostJson(endpoint, apiKey, payload, { timeoutSeconds: options.curlTimeoutSeconds });
      curlResponse.fetchError = message;
      return curlResponse;
    } catch (curlError) {
      throw new Error(`fetch: ${message}; curl: ${curlError.message}`);
    }
  }
  finally {
    clearTimeout(timeout);
  }
}

function isSongAnalysisTask(task) {
  return String(task || "").startsWith("song-analysis");
}

function isSongCandidateTask(task) {
  return String(task || "").startsWith("song-candidates");
}

function minimaxRequestOptions(task) {
  if (isSongAnalysisTask(task)) {
    return { fetchTimeoutMs: 180000, curlTimeoutSeconds: 180, retryCurlOnFetchTimeout: false };
  }
  if (isSongCandidateTask(task)) {
    return { fetchTimeoutMs: 60000, curlTimeoutSeconds: 60 };
  }
  return { fetchTimeoutMs: 45000, curlTimeoutSeconds: 45 };
}

function minimaxMaxTokens(task, requested) {
  if (requested) return requested;
  if (isSongAnalysisTask(task)) return 6144;
  if (isSongCandidateTask(task)) return 2048;
  return 4096;
}

function isMinimaxAuthFailure(value) {
  return /HTTP 40[13]|authorized_error|invalid api key|API secret key|status_code["']?\s*:\s*1004|2049|鉴权|API Key/i.test(value);
}

function isMinimaxTimeoutFailure(value) {
  return /timed out|timeout|aborted|请求超过|Operation was aborted|超时/i.test(value);
}

function buildMinimaxFailureMessage(failures, task) {
  const detail = failures.map((failure) => failure.message).join("；");
  const hasAuthFailure = failures.some((failure) => failure.status === 401 || failure.status === 403 || isMinimaxAuthFailure(failure.message));
  const hasTimeoutFailure = failures.some((failure) => isMinimaxTimeoutFailure(failure.message));
  if (hasAuthFailure && !hasTimeoutFailure) {
    return `MiniMax 鉴权失败：${detail}。请在主页齿轮重新保存与当前端点匹配的 API Key。`;
  }
  if (hasTimeoutFailure && isSongAnalysisTask(task)) {
    return `MiniMax 歌曲分析超时：${detail}。当前 Key 和端点可能可用，但整首歌分析请求较重；请稍后重试，或先选择较浅解释深度。`;
  }
  if (hasAuthFailure && hasTimeoutFailure) {
    return `MiniMax 没有完成：${detail}。401/authorized_error 表示某个端点不接受当前 Key；timeout/aborted 表示另一个端点长时间没有返回。请确认主页齿轮里的 endpoint 与 API Key 属于同一个 MiniMax 控制台。`;
  }
  return `MiniMax 请求失败：${detail}。如果浏览器能联网但这里失败，通常是 Node 本机服务没有走系统代理/VPN，或当前 Key 只支持其中一个 MiniMax 域名。`;
}

async function proxyMinimax(body, req = null) {
  const saved = (req ? requestState(req) : readState()).aiSettings || {};
  const mode = body.mode || saved.mode || defaultState.aiSettings.mode;
  const endpoint = body.endpoint || saved.endpoint || defaultState.aiSettings.endpoint;
  const model = "MiniMax-M3";
  const apiKey = body.apiKey || saved.apiKey;
  const task = body.task || "";
  if (!apiKey) throw new Error("MiniMax API Key 尚未保存在本机服务端。");

  const payload = body.messages ? body : {
    model,
    messages: aiMessages(body.prompt || ""),
    temperature: 0.2,
    top_p: 0.95,
    stream: false,
    max_tokens: minimaxMaxTokens(task, body.max_tokens)
  };

  if (mode === "minimax-v2" && !("tokens_to_generate" in payload)) {
    payload.tokens_to_generate = payload.max_tokens || 4096;
    delete payload.max_tokens;
  }

  const shouldTryOfficialAlternates = process.env.MINIMAX_TRY_ALTERNATE_ENDPOINTS === "1" && mode === "minimax-openai";
  const endpoints = [...new Set([
    endpoint,
    shouldTryOfficialAlternates ? "https://api.minimax.chat/v1/chat/completions" : "",
    shouldTryOfficialAlternates ? "https://api.minimax.io/v1/chat/completions" : ""
  ].filter(Boolean))];
  const failures = [];
  const requestOptions = minimaxRequestOptions(task);
  let response;
  let usedEndpoint = endpoint;
  for (const candidateEndpoint of endpoints) {
    try {
      const candidateResponse = await postMinimaxJson(candidateEndpoint, apiKey, payload, requestOptions);
      if (candidateResponse.ok) {
        response = candidateResponse;
        usedEndpoint = candidateEndpoint;
        break;
      }
      failures.push({
        status: candidateResponse.status,
        message: `${candidateEndpoint}: HTTP ${candidateResponse.status} (${candidateResponse.source || "fetch"}): ${candidateResponse.text.slice(0, 240)}`
      });
    } catch (error) {
      failures.push({ message: `${candidateEndpoint}: ${error.cause?.message || error.message}` });
    }
  }
  if (!response) {
    throw new Error(buildMinimaxFailureMessage(failures, task));
  }
  const text = response.text;
  if (!response.ok) throw new Error(`MiniMax 返回 ${response.status} (${usedEndpoint}, ${response.source || "fetch"}): ${text.slice(0, 300)}`);
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return { text };
  }
  const baseResp = data?.base_resp || data?.baseResp;
  if (baseResp && Number(baseResp.status_code || 0) !== 0) {
    throw new Error(`MiniMax 返回错误 ${baseResp.status_code}: ${baseResp.status_msg || "unknown error"}`);
  }
  return data;
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(publicDir, pathname));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    res.end(data);
  });
}

function sendAuthRequired(res) {
  sendJson(res, 401, { ok: false, authenticated: false, error: "需要先登录。" });
}

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, `http://${req.headers.host}`);
    if (req.method === "OPTIONS") {
      sendCorsPreflight(res);
      return;
    }
    if (requestUrl.pathname === "/api/auth/status" && req.method === "GET") {
      const info = authInfo(req);
      const rateLimit = publicLoginRateLimit(req);
      sendJson(res, 200, {
        ok: true,
        authenticated: info.authenticated,
        mode: info.authenticated ? info.mode : "",
        demo: info.mode === "demo",
        retryAfterMs: rateLimit.retryAfterMs || 0,
        lockedUntil: rateLimit.lockedUntil || ""
      });
      return;
    }
    if (requestUrl.pathname === "/api/auth/login" && req.method === "POST") {
      await handleAuthLogin(req, res);
      return;
    }
    if (requestUrl.pathname === "/api/auth/logout" && req.method === "POST") {
      const info = authInfo(req);
      if (info.mode === "demo") demoSessions.delete(info.sessionId);
      sendJson(res, 200, { ok: true, authenticated: false }, {
        "Set-Cookie": clearAuthCookieHeader(req)
      });
      return;
    }
    if (requestUrl.pathname.startsWith("/api/") && !isAuthenticated(req)) {
      sendAuthRequired(res);
      return;
    }
    if (requestUrl.pathname === "/api/state" && req.method === "GET") {
      sendJson(res, 200, publicState(requestState(req), { lite: requestUrl.searchParams.get("lite") === "1" }));
      return;
    }
    if (requestUrl.pathname === "/api/state" && req.method === "POST") {
      const patch = await readJson(req);
      const data = mergeRequestStatePatch(req, patch, { lite: true });
      const patchKeys = Object.keys(patch);
      if (patch.wordProgressPatch && patchKeys.length === 1) {
        sendJson(res, 200, { wordProgressPatch: patch.wordProgressPatch });
      } else {
        sendJson(res, 200, data);
      }
      return;
    }
    if (requestUrl.pathname === "/api/gallery" && req.method === "GET") {
      sendJson(res, 200, { gallery: publicState(requestState(req)).gallery || [] });
      return;
    }
    if (requestUrl.pathname === "/api/song-history" && req.method === "GET") {
      const songHistory = (publicState(requestState(req)).songHistory || []).filter((item) => item?.analysis).slice(0, 20);
      sendJson(res, 200, { songHistory });
      return;
    }
    if (requestUrl.pathname === "/api/word-progress" && req.method === "GET") {
      sendJson(res, 200, { wordProgress: requestState(req).wordProgress || {} });
      return;
    }
    if (requestUrl.pathname === "/api/deployment/status" && req.method === "GET") {
      sendJson(res, 200, deploymentStatusForState(requestState(req)));
      return;
    }
    if (requestUrl.pathname === "/api/oss/local-configs" && req.method === "GET") {
      sendJson(res, 200, localOssConfigStatus());
      return;
    }
    if (requestUrl.pathname === "/api/oss/import-local-config" && req.method === "POST") {
      if (isDemoRequest(req)) {
        sendJson(res, 200, { ok: true, demo: true, status: localOssConfigStatus(), state: publicState(requestState(req), { lite: true }) });
        return;
      }
      sendJson(res, 200, importLocalOssConfig());
      return;
    }
    if (requestUrl.pathname === "/api/oss/upload-image" && req.method === "POST") {
      const body = await readJson(req);
      sendJson(res, 200, isDemoRequest(req) ? demoImageUpload(body) : await uploadImageToOss(body));
      return;
    }
    if (requestUrl.pathname === "/api/oss/test" && req.method === "POST") {
      if (isDemoRequest(req)) {
        sendJson(res, 200, { ok: true, demo: true, uploadOk: true, publicReadable: true, message: "Demo 模式不会上传到 OSS；正式模式会执行真实测试。" });
        return;
      }
      sendJson(res, 200, await testOssUpload());
      return;
    }
    if (requestUrl.pathname === "/api/oss/migration-status" && req.method === "GET") {
      sendJson(res, 200, ossMigrationStatusForState(requestState(req)));
      return;
    }
    if (requestUrl.pathname === "/api/oss/migrate-images" && req.method === "POST") {
      if (isDemoRequest(req)) {
        sendJson(res, 200, { ok: true, demo: true, migrated: 0, skipped: 0, status: ossMigrationStatusForState(requestState(req)), state: publicState(requestState(req), { lite: true }) });
        return;
      }
      sendJson(res, 200, await runOssImageMigration());
      return;
    }
    if (requestUrl.pathname === "/api/oss/delete" && req.method === "POST") {
      const body = await readJson(req);
      if (isDemoRequest(req)) {
        sendJson(res, 200, { ok: true, demo: true });
        return;
      }
      sendJson(res, 200, await deleteOssObject(body.objectKey));
      return;
    }
    if (req.url.startsWith("/api/minimax/chat") && req.method === "POST") {
      sendJson(res, 200, await proxyMinimax(await readJson(req), req));
      return;
    }
    if (req.url.startsWith("/api/card-cottage/upload") && req.method === "POST") {
      const body = await readJson(req);
      sendJson(res, 200, isDemoRequest(req) ? { ...demoImageUpload(body), slot: Number(body.slot), name: String(body.fileName || `Card ${Number(body.slot) + 1}`).slice(0, 120) } : await saveCardCottageUpload(body));
      return;
    }
    if (req.url.startsWith("/api/card-cottage/delete") && req.method === "POST") {
      const body = await readJson(req);
      if (!isDemoRequest(req)) deleteCardAssetSrc(body.src);
      sendJson(res, 200, { ok: true });
      return;
    }
    if (req.url.startsWith("/api/card-cottage/assets/") && req.method === "GET") {
      serveCardAsset(req, res);
      return;
    }
    serveStatic(req, res);
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
});

server.listen(port, host, () => {
  console.log(`Jojo Wonder Lab: http://${host}:${port}/`);
});
