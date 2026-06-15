const fs = require("fs");

const statePath = "work/private/jojo-state.json";
const task = process.argv[2] || "connection";
const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
const settings = state.aiSettings || {};

if (!settings.apiKey) {
  console.log(JSON.stringify({ ok: false, reason: "missing_api_key" }, null, 2));
  process.exit(0);
}

function promptForTask(name) {
  if (name === "candidate") {
    return `你是 Song Notes 的歌曲识别助手。请严格输出 JSON，不要 Markdown，不要代码围栏。
输出格式：{"candidates":[{"id":"stable-id","title":"歌曲名","artist":"歌手","album":"","year":"","language":"English","confidence":0.9,"reason":"原因","searchHint":"搜索提示","lyricsAccessNote":"授权歌词提示"}],"notice":"不要输出完整歌词"}
要求：最多返回 3 个候选；不要输出完整歌词。
用户线索：{"query":"everything will flow","title":"","artist":""}`;
  }
  return `请严格输出 JSON：{"ok":true,"message":"连接成功"}`;
}

async function main() {
  const payload = {
    model: "MiniMax-M3",
    messages: [
      { role: "system", content: "You are a careful assistant for a parent-child learning app. Return strict JSON only. Do not use Markdown." },
      { role: "user", content: promptForTask(task) }
    ],
    temperature: 0.2,
    top_p: 0.95,
    stream: false,
    max_tokens: task === "candidate" ? 1024 : 256
  };

  const started = Date.now();
  const response = await fetch(settings.endpoint || "https://api.minimax.io/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${settings.apiKey}`
    },
    body: JSON.stringify(payload)
  });
  const text = await response.text();
  let parsed = null;
  try {
    parsed = JSON.parse(text);
  } catch {}
  const output = {
    ok: response.ok,
    status: response.status,
    elapsedMs: Date.now() - started,
    endpointHost: (() => {
      try { return new URL(settings.endpoint).host; } catch { return ""; }
    })(),
    mode: settings.mode,
    bodyPreview: text.slice(0, 800)
  };
  if (parsed?.error) output.error = parsed.error;
  if (parsed?.base_resp || parsed?.baseResp) output.baseResp = parsed.base_resp || parsed.baseResp;
  if (parsed?.choices?.[0]?.message?.content) output.choiceContent = parsed.choices[0].message.content.slice(0, 800);
  console.log(JSON.stringify(output, null, 2));
}

main().catch((error) => {
  console.log(JSON.stringify({
    ok: false,
    thrown: error.message,
    name: error.name,
    cause: error.cause?.message || ""
  }, null, 2));
});
