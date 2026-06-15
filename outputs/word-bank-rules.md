# Jojo 英语词库生成规则

每个单词用一条 JSON 记录。目标是让同一个词可以被“看词识义、听音识词、看图识词、拼写、自然拼读拆解、例句理解”多种方式复用。

## 必填字段

```json
{
  "word": "apple",
  "ipa": "/ˈæpəl/",
  "audio": "audio/apple-us.mp3",
  "accent": "US",
  "pos": "noun",
  "zh": "苹果",
  "banks": ["jojo-core", "cambridge-a1"],
  "emoji": "🍎",
  "image": "images/apple.webp",
  "phonics": ["short a", "final le"],
  "syllables": ["ap", "ple"],
  "morphemes": ["apple"],
  "example": "I eat an apple.",
  "exampleZh": "我吃一个苹果。",
  "distractors": ["香蕉", "椅子", "火车"],
  "recognition": ["meaning", "sound", "image", "spelling", "phonics"]
}
```

## 发音规则

1. `audio` 必须指向真人或高质量 TTS 的标准发音文件，优先使用美音 `US`，必要时可另加 `audioUk`。
2. `ipa` 使用标准 IPA，和音频口音保持一致。
3. 每个词都要能被浏览器 SpeechSynthesis 兜底朗读，但正式词库最好配独立 mp3。

## 识读方式

1. `meaning`：显示英文，选中文释义。
2. `sound`：播放音频，选英文单词。
3. `image`：显示图片，选英文单词。
4. `spelling`：显示中文或图片，输入英文拼写。
5. `phonics`：显示音素或字母组合，让孩子拼合发音。
6. `sentence`：显示例句缺词，让孩子选择合适单词。

## 干扰项规则

1. `distractors` 至少 3 个。
2. 初级阶段用不同类别干扰，降低挫败感。
3. 进阶阶段加入相近发音或相近拼写，例如 `ship/sheep`、`cap/cup`。
4. 不要把同义词作为早期干扰项，避免孩子觉得“两个都对”。

## 分级建议

站内不再用“主题”作为主要出题入口，而是用“题库”：

1. `jojo-core`：Jojo 先学词，家庭、身体、颜色、数字、玩具、常见动作。
2. `cambridge-a1`：Cambridge A1 过渡词，承接 Pre A1 / A1 级别。
3. `ket-a2-core`：KET / A2 Key 核心词，优先放高频名词、动词、形容词。
4. `ket-a2-plus`：KET / A2 Key 拓展词，放多音节词、抽象词、考试常见场景词。

KET 现在官方名称是 Cambridge English `A2 Key`，本身对应 CEFR A2。严格来说它不是“很多等级”的考试；站内的不同题库是为了给 Jojo 逐步练习而拆出来的学习层级。

## 官方词库来源

1. Cambridge English A2 Key preparation 页面提供 `A2 Key for Schools and A2 Key vocabulary list`。
2. Cambridge English young learners 页面提供 Pre A1 Starters、A1 Movers、A2 Flyers 的练习与词汇路径，可作为 KET 前置词库。
3. 生成正式词库时，应优先从 Cambridge 官方 PDF 抽取词条，再补充中文释义、IPA、音频、例句、干扰项和识读方式。

## 质量检查

1. 单词拼写必须小写，专有名词除外。
2. `example` 控制在 4 到 8 个词，孩子能一口气读完。
3. 图片必须表现词义本身，不要只用抽象装饰图。
4. 每新增 20 个词，至少覆盖 4 个主题，避免词库单一。
5. 每个词都要有一个“成功提示语”和一个“再试一次提示语”，后续可以扩展为字段。
