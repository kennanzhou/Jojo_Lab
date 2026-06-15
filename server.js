const http = require("http");
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
  wordBank: "ket-official",
  dailyWordCount: 20,
  dailyWordPlan: null,
  customWordBanks: [],
  deletedWordBanks: [],
  songHistory: [],
  kanaProgress: {},
  phonicsQuest: { unitIndex: 0, unlocked: 0, stars: 0, completed: [], stepIndex: 0, listenIndex: 0, flashIndex: 0, blendIndex: 0, spellIndex: 0, spelling: [] },
  cardCottage: { assignments: [], revealed: [], slots: [], defaultSlotsSeeded: false, totalCards: 50 },
  appSettings: { wordRepeatVoEnabled: false },
  kanaScore: 0,
  played: 0,
  artMode: false,
  gallery: null,
  aiSettings: {
    mode: "minimax-openai",
    endpoint: "https://api.minimax.io/v1/chat/completions",
    model: "MiniMax-M3",
    customModel: "",
    apiKey: ""
  }
};

function ensureDataDir() {
  fs.mkdirSync(dataDir, { recursive: true, mode: 0o700 });
}

function ensureCardAssetDir() {
  ensureDataDir();
  fs.mkdirSync(cardAssetDir, { recursive: true, mode: 0o700 });
}

function readState() {
  ensureDataDir();
  try {
    const state = { ...defaultState, ...JSON.parse(fs.readFileSync(dataFile, "utf8")) };
    const customBankIds = new Set((state.customWordBanks || []).map((bank) => bank.id));
    if (state.wordBank !== "all" && state.wordBank !== "ket-official" && !customBankIds.has(state.wordBank)) {
      state.wordBank = "ket-official";
    }
    state.aiSettings = { ...defaultState.aiSettings, ...(state.aiSettings || {}), model: "MiniMax-M3", customModel: "" };
    return state;
  } catch {
    return { ...defaultState };
  }
}

function writeState(state) {
  ensureDataDir();
  fs.writeFileSync(dataFile, JSON.stringify(state, null, 2), { mode: 0o600 });
}

function publicState(state) {
  const aiSettings = { ...defaultState.aiSettings, ...(state.aiSettings || {}) };
  const hasApiKey = Boolean(aiSettings.apiKey);
  delete aiSettings.apiKey;
  return { ...state, aiSettings: { ...aiSettings, hasApiKey } };
}

function mergeStatePatch(patch) {
  const current = readState();
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
  ["wordProgress", "wordRewards", "dailyWordPlan", "gallery", "deletedWordBanks", "customWordBanks", "songHistory", "kanaProgress", "phonicsQuest", "cardCottage", "appSettings"].forEach((key) => {
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
  writeState(next);
  return publicState(next);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 20 * 1024 * 1024) {
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

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
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

function saveCardCottageUpload(body) {
  ensureCardAssetDir();
  const slot = Number(body.slot);
  if (!Number.isInteger(slot) || slot < 0 || slot >= 50) throw new Error("Invalid Card Cottage slot.");
  const dataUrl = String(body.dataUrl || "");
  const match = dataUrl.match(/^data:(image\/(?:jpeg|jpg|png|webp));base64,([A-Za-z0-9+/=]+)$/);
  if (!match) throw new Error("只支持 JPG、PNG 或 WebP 图片。");
  const mime = match[1] === "image/jpg" ? "image/jpeg" : match[1];
  const buffer = Buffer.from(match[2], "base64");
  if (!buffer.length || buffer.length > 12 * 1024 * 1024) throw new Error("图片太大，请换一张较小的图片。");

  const state = readState();
  const previousSlot = Array.isArray(state.cardCottage?.slots) ? state.cardCottage.slots[slot] : null;
  deleteCardAssetSrc(previousSlot?.src);

  const fileName = `slot-${String(slot + 1).padStart(2, "0")}-${Date.now()}${imageExtensionForMime(mime)}`;
  const filePath = path.join(cardAssetDir, fileName);
  fs.writeFileSync(filePath, buffer, { mode: 0o600 });
  return {
    slot,
    name: String(body.fileName || `Card ${slot + 1}`).slice(0, 120),
    src: `/api/card-cottage/assets/${encodeURIComponent(fileName)}`,
    updatedAt: new Date().toISOString()
  };
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
  return `"${String(value).replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`;
}

function curlPostJson(endpoint, apiKey, payload) {
  ensureDataDir();
  const token = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const bodyPath = path.join(dataDir, `minimax-body-${token}.json`);
  const configPath = path.join(dataDir, `minimax-curl-${token}.conf`);
  const marker = "\n__JOJO_HTTP_STATUS__:";
  fs.writeFileSync(bodyPath, JSON.stringify(payload), { mode: 0o600 });
  fs.writeFileSync(configPath, [
    "silent",
    "show-error",
    "location",
    "max-time = 90",
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

async function postMinimaxJson(endpoint, apiKey, payload) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });
    return { ok: response.ok, status: response.status, text: await response.text(), source: "fetch" };
  } catch (error) {
    try {
      const curlResponse = await curlPostJson(endpoint, apiKey, payload);
      curlResponse.fetchError = error.cause?.message || error.message;
      return curlResponse;
    } catch (curlError) {
      throw new Error(`fetch: ${error.cause?.message || error.message}; curl: ${curlError.message}`);
    }
  }
}

async function proxyMinimax(body) {
  const saved = readState().aiSettings || {};
  const mode = body.mode || saved.mode || defaultState.aiSettings.mode;
  const endpoint = body.endpoint || saved.endpoint || defaultState.aiSettings.endpoint;
  const model = "MiniMax-M3";
  const apiKey = body.apiKey || saved.apiKey;
  if (!apiKey) throw new Error("MiniMax API Key 尚未保存在本机服务端。");

  const payload = body.messages ? body : {
    model,
    messages: aiMessages(body.prompt || ""),
    temperature: 0.2,
    top_p: 0.95,
    stream: false,
    max_tokens: body.max_tokens || 8192
  };

  if (mode === "minimax-v2" && !("tokens_to_generate" in payload)) {
    payload.tokens_to_generate = payload.max_tokens || 4096;
    delete payload.max_tokens;
  }

  const endpoints = [...new Set([
    endpoint,
    mode === "minimax-openai" ? "https://api.minimax.chat/v1/chat/completions" : "",
    mode === "minimax-openai" ? "https://api.minimax.io/v1/chat/completions" : ""
  ].filter(Boolean))];
  const failures = [];
  let response;
  let usedEndpoint = endpoint;
  for (const candidateEndpoint of endpoints) {
    try {
      response = await postMinimaxJson(candidateEndpoint, apiKey, payload);
      usedEndpoint = candidateEndpoint;
      break;
    } catch (error) {
      failures.push(`${candidateEndpoint}: ${error.cause?.message || error.message}`);
    }
  }
  if (!response) {
    throw new Error(`MiniMax 网络连接失败：${failures.join("；")}。如果浏览器能联网但这里失败，通常是 Node 本机服务没有走系统代理/VPN。`);
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

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "OPTIONS") {
      sendCorsPreflight(res);
      return;
    }
    if (req.url.startsWith("/api/state") && req.method === "GET") {
      sendJson(res, 200, publicState(readState()));
      return;
    }
    if (req.url.startsWith("/api/state") && req.method === "POST") {
      const patch = await readJson(req);
      const data = mergeStatePatch(patch);
      const patchKeys = Object.keys(patch);
      if (patch.wordProgressPatch && patchKeys.length === 1) {
        sendJson(res, 200, { wordProgressPatch: patch.wordProgressPatch });
      } else {
        sendJson(res, 200, data);
      }
      return;
    }
    if (req.url.startsWith("/api/minimax/chat") && req.method === "POST") {
      sendJson(res, 200, await proxyMinimax(await readJson(req)));
      return;
    }
    if (req.url.startsWith("/api/card-cottage/upload") && req.method === "POST") {
      sendJson(res, 200, saveCardCottageUpload(await readJson(req)));
      return;
    }
    if (req.url.startsWith("/api/card-cottage/delete") && req.method === "POST") {
      const body = await readJson(req);
      deleteCardAssetSrc(body.src);
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
