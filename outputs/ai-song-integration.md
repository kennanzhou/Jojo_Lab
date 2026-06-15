# 英文歌大模型精读接入说明

英文歌模块应通过服务端调用大模型。不要把 OpenAI 或其他模型服务的 API Key 放进浏览器。

## 前端请求

`POST /api/analyze-song`

```json
{
  "title": "Song title",
  "artist": "Artist name",
  "depth": "child",
  "targetAudience": "Jojo, a child learning English with a parent",
  "outputLanguage": "zh-CN",
  "tasks": [
    "translate_each_line_to_natural_chinese",
    "explain_each_line_in_child_friendly_chinese",
    "extract_important_words_and_phrases",
    "explain_vocabulary_word_by_word",
    "include_pronunciation_tips",
    "include_parent_follow_up_questions"
  ],
  "lyrics": [
    "First lyric line",
    "Second lyric line"
  ]
}
```

## 后端响应

```json
{
  "title": "Song title",
  "artist": "Artist name",
  "summary": "这首歌整体在表达……",
  "lines": [
    {
      "en": "First lyric line",
      "zh": "自然中文翻译",
      "explanation": "给 Jojo 的中文解释，说明这句在讲什么。",
      "words": [
        {
          "text": "word",
          "meaning": "中文意思",
          "pos": "noun",
          "pronunciationTip": "发音提示",
          "explanation": "这个词在本句里的意思和用法"
        }
      ],
      "parentQuestion": "可以问 Jojo 的一个问题"
    }
  ]
}
```

## 模型提示词建议

系统提示词：

```text
你是一个儿童英语陪读老师。用户会提供英文歌歌词。请用中文给孩子解释，但不要幼稚化。逐句翻译要自然，逐词解释要说明词性、在本句中的含义、发音提示和一个适合孩子理解的小例子。不要评价孩子，不要编造歌词来源。只返回 JSON。
```

用户消息可直接使用前端请求 JSON。

## 内容与版权

前端不内置商业歌曲完整歌词。家长可以粘贴自己拥有、授权使用或合理使用范围内的歌词。服务端可以选择不长期保存歌词，只保存分析结果和词汇卡。
