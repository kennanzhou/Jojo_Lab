const kanaBase = [
  ["あ", "ア", "a"], ["い", "イ", "i"], ["う", "ウ", "u"], ["え", "エ", "e"], ["お", "オ", "o"],
  ["か", "カ", "ka"], ["き", "キ", "ki"], ["く", "ク", "ku"], ["け", "ケ", "ke"], ["こ", "コ", "ko"],
  ["さ", "サ", "sa"], ["し", "シ", "shi"], ["す", "ス", "su"], ["せ", "セ", "se"], ["そ", "ソ", "so"],
  ["た", "タ", "ta"], ["ち", "チ", "chi"], ["つ", "ツ", "tsu"], ["て", "テ", "te"], ["と", "ト", "to"],
  ["な", "ナ", "na"], ["に", "ニ", "ni"], ["ぬ", "ヌ", "nu"], ["ね", "ネ", "ne"], ["の", "ノ", "no"],
  ["は", "ハ", "ha"], ["ひ", "ヒ", "hi"], ["ふ", "フ", "fu"], ["へ", "ヘ", "he"], ["ほ", "ホ", "ho"],
  ["ま", "マ", "ma"], ["み", "ミ", "mi"], ["む", "ム", "mu"], ["め", "メ", "me"], ["も", "モ", "mo"],
  ["や", "ヤ", "ya"], ["ゆ", "ユ", "yu"], ["よ", "ヨ", "yo"],
  ["ら", "ラ", "ra"], ["り", "リ", "ri"], ["る", "ル", "ru"], ["れ", "レ", "re"], ["ろ", "ロ", "ro"],
  ["わ", "ワ", "wa"], ["を", "ヲ", "wo"], ["ん", "ン", "n"]
].map(([hiragana, katakana, romaji]) => ({ hiragana, katakana, romaji }));

const words = [
  {
    "word": "a/an",
    "speakText": "a",
    "spelling": "a",
    "ipa": "/ə; ən/",
    "pos": "det",
    "zh": "一个；一只",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "a"
    ],
    "example": "",
    "distractors": [
      "任何人",
      "海滩；河滩",
      "厌倦的"
    ]
  },
  {
    "word": "able",
    "speakText": "able",
    "spelling": "able",
    "ipa": "/ˈeɪb(ə)l/",
    "pos": "adj",
    "zh": "有能力的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "able"
    ],
    "example": "",
    "distractors": [
      "不再",
      "豆",
      "令人厌倦的；无聊的"
    ]
  },
  {
    "word": "about",
    "speakText": "about",
    "spelling": "about",
    "ipa": "/əˈbaʊt/",
    "pos": "adv / prep",
    "zh": "关于",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "about"
    ],
    "example": "",
    "distractors": [
      "任何人",
      "承载",
      "出生的"
    ]
  },
  {
    "word": "above",
    "speakText": "above",
    "spelling": "above",
    "ipa": "/əˈbəv/",
    "pos": "adv / prep",
    "zh": "在上面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "above"
    ],
    "example": "",
    "distractors": [
      "任何事物",
      "胡须",
      "借"
    ]
  },
  {
    "word": "accident",
    "speakText": "accident",
    "spelling": "accident",
    "ipa": "/ˈæksədnt/",
    "pos": "n",
    "zh": "事故",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "accident"
    ],
    "example": "",
    "distractors": [
      "无论如何",
      "美丽的",
      "老板"
    ]
  },
  {
    "word": "across",
    "speakText": "across",
    "spelling": "across",
    "ipa": "/əˈkrɔs, əˈkrɑs/",
    "pos": "adv / prep",
    "zh": "横穿过",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "across"
    ],
    "example": "",
    "distractors": [
      "在任何地方；去任何地方",
      "因为",
      "两个"
    ]
  },
  {
    "word": "act",
    "speakText": "act",
    "spelling": "act",
    "ipa": "/æk(t)/",
    "pos": "n / v",
    "zh": "行为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "act"
    ],
    "example": "",
    "distractors": [
      "公寓楼",
      "变成；开始变得",
      "打扰"
    ]
  },
  {
    "word": "activity",
    "speakText": "activity",
    "spelling": "activity",
    "ipa": "/ækˈtɪvədi/",
    "pos": "n",
    "zh": "活跃",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "activity"
    ],
    "example": "",
    "distractors": [
      "苹果；苹果树",
      "床",
      "瓶；奶瓶"
    ]
  },
  {
    "word": "actor",
    "speakText": "actor",
    "spelling": "actor",
    "ipa": "/ˈæktər/",
    "pos": "n",
    "zh": "演员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "actor"
    ],
    "example": "",
    "distractors": [
      "约会",
      "卧室；卧室的",
      "底部；山脚"
    ]
  },
  {
    "word": "actually",
    "speakText": "actually",
    "spelling": "actually",
    "ipa": "/ˈæk(t)ʃ(əw)əli/",
    "pos": "adv",
    "zh": "的确",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "actually"
    ],
    "example": "",
    "distractors": [
      "面积；地区",
      "蜜蜂",
      "碗；汤盆"
    ]
  },
  {
    "word": "ad",
    "speakText": "ad",
    "spelling": "ad",
    "ipa": "/æd/",
    "pos": "n",
    "zh": "广告",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ad"
    ],
    "example": "",
    "distractors": [
      "臂",
      "在以前",
      "箱；盒"
    ]
  },
  {
    "word": "add",
    "speakText": "add",
    "spelling": "add",
    "ipa": "/æd/",
    "pos": "v",
    "zh": "补充",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "add"
    ],
    "example": "",
    "distractors": [
      "扶手椅；无实际经验的",
      "开始",
      "男孩"
    ]
  },
  {
    "word": "address",
    "speakText": "address",
    "spelling": "address",
    "ipa": "/ˈæˌdrɛs, əˈdrɛs/",
    "pos": "n",
    "zh": "地址",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "address"
    ],
    "example": "",
    "distractors": [
      "大约",
      "初学者",
      "男朋友"
    ]
  },
  {
    "word": "adult",
    "speakText": "adult",
    "spelling": "adult",
    "ipa": "/əˈdəlt, ˈæˌdəlt/",
    "pos": "adj / n",
    "zh": "成年人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "adult"
    ],
    "example": "",
    "distractors": [
      "到达",
      "起点",
      "脑"
    ]
  },
  {
    "word": "advanced",
    "speakText": "advanced",
    "spelling": "advanced",
    "ipa": "/ədˈvæn(t)st/",
    "pos": "adj",
    "zh": "高级的；高阶的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "advanced"
    ],
    "example": "",
    "distractors": [
      "美术；美术作品",
      "在背后；向后",
      "勇敢的"
    ]
  },
  {
    "word": "adventure",
    "speakText": "adventure",
    "spelling": "adventure",
    "ipa": "/ədˈvɛn(t)ʃər/",
    "pos": "n",
    "zh": "冒险活动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "adventure"
    ],
    "example": "",
    "distractors": [
      "物件",
      "相信",
      "面包"
    ]
  },
  {
    "word": "advertisement",
    "speakText": "advertisement",
    "spelling": "advertisement",
    "ipa": "/ˈædvərˌtaɪzmənt, ədˈvərdəzmənt/",
    "pos": "n",
    "zh": "广告",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "advertisement"
    ],
    "example": "",
    "distractors": [
      "艺术家；画家",
      "属于某人/某物",
      "打破；弄断"
    ]
  },
  {
    "word": "advice",
    "speakText": "advice",
    "spelling": "advice",
    "ipa": "/ədˈvaɪs/",
    "pos": "n",
    "zh": "劝告",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "advice"
    ],
    "example": "",
    "distractors": [
      "作为",
      "在下面；到下面",
      "窗户"
    ]
  },
  {
    "word": "aeroplane",
    "speakText": "aeroplane",
    "spelling": "aeroplane",
    "ipa": "/ˈɛrəˌpleɪn/",
    "pos": "n",
    "zh": "飞机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "aeroplane"
    ],
    "example": "",
    "distractors": [
      "问",
      "腰带；安全带",
      "早饭"
    ]
  },
  {
    "word": "afraid",
    "speakText": "afraid",
    "spelling": "afraid",
    "ipa": "/əˈfreɪd/",
    "pos": "adj",
    "zh": "畏惧的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "afraid"
    ],
    "example": "",
    "distractors": [
      "助手；助理",
      "在旁边",
      "桥梁"
    ]
  },
  {
    "word": "after",
    "speakText": "after",
    "spelling": "after",
    "ipa": "/ˈæftər/",
    "pos": "adv / prep",
    "zh": "在以后",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "after"
    ],
    "example": "",
    "distractors": [
      "也",
      "最好的",
      "鲜艳的"
    ]
  },
  {
    "word": "afternoon",
    "speakText": "afternoon",
    "spelling": "afternoon",
    "ipa": "/ˌæftərˈnun/",
    "pos": "n",
    "zh": "下午",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "afternoon"
    ],
    "example": "",
    "distractors": [
      "在",
      "更好的；更吸引人的",
      "明亮的；鲜艳的"
    ]
  },
  {
    "word": "afterwards",
    "speakText": "afterwards",
    "spelling": "afterwards",
    "ipa": "/ˈæftərwərdz/",
    "pos": "adv",
    "zh": "以后；后来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "afterwards"
    ],
    "example": "",
    "distractors": [
      "在；@符号",
      "在之间",
      "带来"
    ]
  },
  {
    "word": "again",
    "speakText": "again",
    "spelling": "again",
    "ipa": "/əˈɡɛn/",
    "pos": "adv",
    "zh": "再一次",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "again"
    ],
    "example": "",
    "distractors": [
      "漂亮的；动听的",
      "自行车",
      "破碎的；折断的"
    ]
  },
  {
    "word": "against",
    "speakText": "against",
    "spelling": "against",
    "ipa": "/əˈɡɛn(t)st/",
    "pos": "prep",
    "zh": "紧靠着；碰着",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "against"
    ],
    "example": "",
    "distractors": [
      "姑姑；姨母",
      "大的",
      "弟弟；哥哥"
    ]
  },
  {
    "word": "age",
    "speakText": "age",
    "spelling": "age",
    "ipa": "/eɪdʒ/",
    "pos": "n",
    "zh": "年龄",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "age"
    ],
    "example": "",
    "distractors": [
      "秋季",
      "自行车",
      "棕色的"
    ]
  },
  {
    "word": "aged",
    "speakText": "aged",
    "spelling": "aged",
    "ipa": "/eɪdʒd/",
    "pos": "adj",
    "zh": "岁的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "aged"
    ],
    "example": "",
    "distractors": [
      "可获得的",
      "账单",
      "刷子；画笔"
    ]
  },
  {
    "word": "ago",
    "speakText": "ago",
    "spelling": "ago",
    "ipa": "/əˈɡoʊ/",
    "pos": "adv",
    "zh": "以前",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ago"
    ],
    "example": "",
    "distractors": [
      "不在",
      "生物学",
      "建造；筑"
    ]
  },
  {
    "word": "agree",
    "speakText": "agree",
    "spelling": "agree",
    "ipa": "/əˈɡri/",
    "pos": "v",
    "zh": "同意",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "agree"
    ],
    "example": "",
    "distractors": [
      "坏的",
      "鸟",
      "建筑物"
    ]
  },
  {
    "word": "air",
    "speakText": "air",
    "spelling": "air",
    "ipa": "/ɛr/",
    "pos": "n",
    "zh": "空气",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "air"
    ],
    "example": "",
    "distractors": [
      "婴儿",
      "出生",
      "汉堡包"
    ]
  },
  {
    "word": "airport",
    "speakText": "airport",
    "spelling": "airport",
    "ipa": "/ˈɛrˌpɔrt/",
    "pos": "n",
    "zh": "机场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "airport"
    ],
    "example": "",
    "distractors": [
      "背部",
      "生日",
      "公共汽车"
    ]
  },
  {
    "word": "alarm clock",
    "speakText": "alarm clock",
    "spelling": "alarmclock",
    "ipa": "/əˈlɑrm ˌklɑk/",
    "pos": "n",
    "zh": "闹钟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "alarm clock"
    ],
    "example": "",
    "distractors": [
      "背包；背包旅行",
      "饼干",
      "商业"
    ]
  },
  {
    "word": "album",
    "speakText": "album",
    "spelling": "album",
    "ipa": "/ˈælbəm/",
    "pos": "n",
    "zh": "册子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "album"
    ],
    "example": "",
    "distractors": [
      "不愉快的；不好的",
      "一小块",
      "商人"
    ]
  },
  {
    "word": "all",
    "speakText": "all",
    "spelling": "all",
    "ipa": "/ɔl/",
    "pos": "adv, det / pron",
    "zh": "全部",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "all"
    ],
    "example": "",
    "distractors": [
      "差",
      "黑色的",
      "女商人"
    ]
  },
  {
    "word": "all right/alright",
    "speakText": "all right",
    "spelling": "allright",
    "ipa": "/ˌɔːl ˈraɪt/",
    "pos": "adj, adv / exclam",
    "zh": "好的；没问题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "all right"
    ],
    "example": "",
    "distractors": [
      "羽毛球运动",
      "黑板",
      "公共汽车站"
    ]
  },
  {
    "word": "almost",
    "speakText": "almost",
    "spelling": "almost",
    "ipa": "/ˈɔlmoʊst/",
    "pos": "adv",
    "zh": "几乎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "almost"
    ],
    "example": "",
    "distractors": [
      "袋",
      "毯子",
      "公共汽车停靠站"
    ]
  },
  {
    "word": "alone",
    "speakText": "alone",
    "spelling": "alone",
    "ipa": "/əˈloʊn/",
    "pos": "adj / adv",
    "zh": "独自的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "alone"
    ],
    "example": "",
    "distractors": [
      "烘焙",
      "大块；方块",
      "无暇的"
    ]
  },
  {
    "word": "along",
    "speakText": "along",
    "spelling": "along",
    "ipa": "/əˈlɔŋ, əˈlɑŋ/",
    "pos": "prep",
    "zh": "向前",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "along"
    ],
    "example": "",
    "distractors": [
      "球；团",
      "金黄色的；头发金黄的",
      "而"
    ]
  },
  {
    "word": "already",
    "speakText": "already",
    "spelling": "already",
    "ipa": "/ˌɔlˈrɛdi/",
    "pos": "adv",
    "zh": "已经",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "already"
    ],
    "example": "",
    "distractors": [
      "气球",
      "血",
      "黄油"
    ]
  },
  {
    "word": "alright",
    "speakText": "alright",
    "spelling": "alright",
    "ipa": "/ˌɔːl ˈraɪt/",
    "pos": "adj, adv / exclam",
    "zh": "好的；没问题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "alright"
    ],
    "example": "",
    "distractors": [
      "香蕉",
      "女衬衫；军装上衣",
      "买"
    ]
  },
  {
    "word": "also",
    "speakText": "also",
    "spelling": "also",
    "ipa": "/ˈɔlsoʊ/",
    "pos": "adv",
    "zh": "也",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "also"
    ],
    "example": "",
    "distractors": [
      "乐队；一帮人",
      "蓝色的",
      "被"
    ]
  },
  {
    "word": "always",
    "speakText": "always",
    "spelling": "always",
    "ipa": "/ˈɔlˌweɪz/",
    "pos": "adv",
    "zh": "总是",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "always"
    ],
    "example": "",
    "distractors": [
      "绷带；用绷带包扎",
      "木板；公告牌",
      "再见"
    ]
  },
  {
    "word": "a.m.",
    "speakText": "a.m.",
    "spelling": "am",
    "ipa": "/ˌeɪ ˈem/",
    "pos": "adv",
    "zh": "上午",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "a.m."
    ],
    "example": "",
    "distractors": [
      "岸；堆",
      "棋盘游戏",
      "储藏柜；陈列柜"
    ]
  },
  {
    "word": "amazing",
    "speakText": "amazing",
    "spelling": "amazing",
    "ipa": "/əˈmeɪzɪŋ/",
    "pos": "adj",
    "zh": "使人十分惊奇的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "amazing"
    ],
    "example": "",
    "distractors": [
      "户外烧烤；烤架",
      "小船",
      "小餐馆；酒吧"
    ]
  },
  {
    "word": "ambulance",
    "speakText": "ambulance",
    "spelling": "ambulance",
    "ipa": "/ˈæmbjələn(t)s/",
    "pos": "n",
    "zh": "救护车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ambulance"
    ],
    "example": "",
    "distractors": [
      "棒球运动；棒球",
      "身体",
      "自助餐厅；自助食堂"
    ]
  },
  {
    "word": "among",
    "speakText": "among",
    "spelling": "among",
    "ipa": "/əˈməŋ/",
    "pos": "prep",
    "zh": "在中",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "among"
    ],
    "example": "",
    "distractors": [
      "篮球运动；篮球",
      "沸腾；开",
      "蛋糕"
    ]
  },
  {
    "word": "an",
    "speakText": "an",
    "spelling": "an",
    "ipa": "/ən/",
    "pos": "det",
    "zh": "一个；一只",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "an"
    ],
    "example": "",
    "distractors": [
      "球板；球棒",
      "煮沸的；煮熟的",
      "历法；日历"
    ]
  },
  {
    "word": "and",
    "speakText": "and",
    "spelling": "and",
    "ipa": "/æn(d), (ə)n(d)/",
    "pos": "conj",
    "zh": "和",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "and"
    ],
    "example": "",
    "distractors": [
      "洗澡；洗澡水",
      "书",
      "给取名；称呼"
    ]
  },
  {
    "word": "angry",
    "speakText": "angry",
    "spelling": "angry",
    "ipa": "/ˈæŋɡri/",
    "pos": "adj",
    "zh": "发怒的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "angry"
    ],
    "example": "",
    "distractors": [
      "游泳衣",
      "书架",
      "骆驼"
    ]
  },
  {
    "word": "animal",
    "speakText": "animal",
    "spelling": "animal",
    "ipa": "/ˈænəm(ə)l/",
    "pos": "n",
    "zh": "动物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "animal"
    ],
    "example": "",
    "distractors": [
      "浴室；洗手间",
      "书架",
      "照相机；摄影机"
    ]
  },
  {
    "word": "another",
    "speakText": "another",
    "spelling": "another",
    "ipa": "/əˈnəðər/",
    "pos": "det / pron",
    "zh": "再一的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "another"
    ],
    "example": "",
    "distractors": [
      "澡盆；浴缸",
      "书店",
      "营地"
    ]
  },
  {
    "word": "answer",
    "speakText": "answer",
    "spelling": "answer",
    "ipa": "/ˈæn(t)sər/",
    "pos": "n / v",
    "zh": "回答",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "answer"
    ],
    "example": "",
    "distractors": [
      "电池",
      "书店",
      "野营"
    ]
  },
  {
    "word": "any",
    "speakText": "any",
    "spelling": "any",
    "ipa": "/ˈɛni/",
    "pos": "det / pron",
    "zh": "一些；丝毫的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "any"
    ],
    "example": "",
    "distractors": [
      "表明属性",
      "靴子",
      "野营地"
    ]
  },
  {
    "word": "anybody",
    "speakText": "anybody",
    "spelling": "anybody",
    "ipa": "/ˈɛniˌbɑdi, ˈɛnibədi/",
    "pos": "pron",
    "zh": "任何人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anybody"
    ],
    "example": "",
    "distractors": [
      "海滩；河滩",
      "厌倦的",
      "便帽；制服帽"
    ]
  },
  {
    "word": "anymore",
    "speakText": "anymore",
    "spelling": "anymore",
    "ipa": "/ˌeniˈmɔːr/",
    "pos": "adv",
    "zh": "不再",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anymore"
    ],
    "example": "",
    "distractors": [
      "豆",
      "令人厌倦的；无聊的",
      "大写字母"
    ]
  },
  {
    "word": "anyone",
    "speakText": "anyone",
    "spelling": "anyone",
    "ipa": "/ˈɛniˌwən/",
    "pos": "pron",
    "zh": "任何人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anyone"
    ],
    "example": "",
    "distractors": [
      "承载",
      "出生的",
      "能；可以"
    ]
  },
  {
    "word": "anything",
    "speakText": "anything",
    "spelling": "anything",
    "ipa": "/ˈɛniˌθɪŋ/",
    "pos": "pron",
    "zh": "任何事物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anything"
    ],
    "example": "",
    "distractors": [
      "胡须",
      "借",
      "糖果"
    ]
  },
  {
    "word": "anyway",
    "speakText": "anyway",
    "spelling": "anyway",
    "ipa": "/ˈɛniˌweɪ/",
    "pos": "adv",
    "zh": "无论如何",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anyway"
    ],
    "example": "",
    "distractors": [
      "美丽的",
      "老板",
      "不能"
    ]
  },
  {
    "word": "anywhere",
    "speakText": "anywhere",
    "spelling": "anywhere",
    "ipa": "/ˈɛniˌwɛr/",
    "pos": "adv",
    "zh": "在任何地方；去任何地方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "anywhere"
    ],
    "example": "",
    "distractors": [
      "因为",
      "两个",
      "汽车；车厢"
    ]
  },
  {
    "word": "apartment",
    "speakText": "apartment",
    "spelling": "apartment",
    "ipa": "/əˈpɑrtmənt/",
    "pos": "n",
    "zh": "公寓套间；宫殿或豪华住宅的套间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "apartment"
    ],
    "example": "",
    "distractors": [
      "变成；开始变得",
      "打扰",
      "卡片纸；明信片"
    ]
  },
  {
    "word": "apartment building",
    "speakText": "apartment building",
    "spelling": "apartmentbuilding",
    "ipa": "/əˈpɑːrtmənt ˈbɪldɪŋ/",
    "pos": "n",
    "zh": "公寓楼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "apartment building"
    ],
    "example": "",
    "distractors": [
      "床",
      "瓶；奶瓶",
      "职业"
    ]
  },
  {
    "word": "apple",
    "speakText": "apple",
    "spelling": "apple",
    "ipa": "/ˈæp(ə)l/",
    "pos": "n",
    "zh": "苹果；苹果树",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "apple"
    ],
    "example": "",
    "distractors": [
      "卧室；卧室的",
      "底部；山脚",
      "谨慎的；小心的"
    ]
  },
  {
    "word": "appointment",
    "speakText": "appointment",
    "spelling": "appointment",
    "ipa": "/əˈpɔɪntmənt/",
    "pos": "n",
    "zh": "约会",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "appointment"
    ],
    "example": "",
    "distractors": [
      "蜜蜂",
      "碗；汤盆",
      "小心地；谨慎地"
    ]
  },
  {
    "word": "area",
    "speakText": "area",
    "spelling": "area",
    "ipa": "/ˈɛriə/",
    "pos": "n",
    "zh": "面积；地区",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "area"
    ],
    "example": "",
    "distractors": [
      "在以前",
      "箱；盒",
      "停车场"
    ]
  },
  {
    "word": "arm",
    "speakText": "arm",
    "spelling": "arm",
    "ipa": "/ɑrm/",
    "pos": "n",
    "zh": "臂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "arm"
    ],
    "example": "",
    "distractors": [
      "开始",
      "男孩",
      "地毯"
    ]
  },
  {
    "word": "armchair",
    "speakText": "armchair",
    "spelling": "armchair",
    "ipa": "/ˈɑrmˌtʃɛr/",
    "pos": "n",
    "zh": "扶手椅；无实际经验的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "armchair"
    ],
    "example": "",
    "distractors": [
      "初学者",
      "男朋友",
      "胡萝卜"
    ]
  },
  {
    "word": "around",
    "speakText": "around",
    "spelling": "around",
    "ipa": "/əˈraʊnd/",
    "pos": "adv / prep",
    "zh": "大约",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "around"
    ],
    "example": "",
    "distractors": [
      "起点",
      "脑",
      "抱；拿"
    ]
  },
  {
    "word": "arrive",
    "speakText": "arrive",
    "spelling": "arrive",
    "ipa": "/əˈraɪv/",
    "pos": "v",
    "zh": "到达",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "arrive"
    ],
    "example": "",
    "distractors": [
      "在背后；向后",
      "勇敢的",
      "动画片；漫画"
    ]
  },
  {
    "word": "art",
    "speakText": "art",
    "spelling": "art",
    "ipa": "/ɑrt/",
    "pos": "n",
    "zh": "美术；美术作品",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "art"
    ],
    "example": "",
    "distractors": [
      "相信",
      "面包",
      "事例"
    ]
  },
  {
    "word": "article",
    "speakText": "article",
    "spelling": "article",
    "ipa": "/ˈɑrdək(ə)l/",
    "pos": "n",
    "zh": "物件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "article"
    ],
    "example": "",
    "distractors": [
      "属于某人/某物",
      "打破；弄断",
      "城堡"
    ]
  },
  {
    "word": "artist",
    "speakText": "artist",
    "spelling": "artist",
    "ipa": "/ˈɑrdəst/",
    "pos": "n",
    "zh": "艺术家；画家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "artist"
    ],
    "example": "",
    "distractors": [
      "在下面；到下面",
      "窗户",
      "猫"
    ]
  },
  {
    "word": "as",
    "speakText": "as",
    "spelling": "as",
    "ipa": "/æz, əz/",
    "pos": "conj / prep",
    "zh": "作为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "as"
    ],
    "example": "",
    "distractors": [
      "腰带；安全带",
      "早饭",
      "接住；捕获"
    ]
  },
  {
    "word": "ask",
    "speakText": "ask",
    "spelling": "ask",
    "ipa": "/æsk/",
    "pos": "v",
    "zh": "问",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ask"
    ],
    "example": "",
    "distractors": [
      "在旁边",
      "桥梁",
      "教区总教堂"
    ]
  },
  {
    "word": "assistant",
    "speakText": "assistant",
    "spelling": "assistant",
    "ipa": "/əˈsɪstnt/",
    "pos": "n",
    "zh": "助手；助理",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "assistant"
    ],
    "example": "",
    "distractors": [
      "最好的",
      "鲜艳的",
      "光盘"
    ]
  },
  {
    "word": "as well",
    "speakText": "as well",
    "spelling": "aswell",
    "ipa": "/æz wel/",
    "pos": "adv",
    "zh": "也",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "as well"
    ],
    "example": "",
    "distractors": [
      "更好的；更吸引人的",
      "明亮的；鲜艳的",
      "CD播放器"
    ]
  },
  {
    "word": "at",
    "speakText": "at",
    "spelling": "at",
    "ipa": "/æt, ət/",
    "pos": "prep",
    "zh": "在",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "at"
    ],
    "example": "",
    "distractors": [
      "在之间",
      "带来",
      "天花板"
    ]
  },
  {
    "word": "at / @",
    "speakText": "at",
    "spelling": "at",
    "ipa": "/æt/",
    "pos": "prep",
    "zh": "在；@符号",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "at"
    ],
    "example": "",
    "distractors": [
      "自行车",
      "破碎的；折断的",
      "手机"
    ]
  },
  {
    "word": "attractive",
    "speakText": "attractive",
    "spelling": "attractive",
    "ipa": "/əˈtræktɪv/",
    "pos": "adj",
    "zh": "漂亮的；动听的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "attractive"
    ],
    "example": "",
    "distractors": [
      "大的",
      "弟弟；哥哥",
      "分；一分硬币"
    ]
  },
  {
    "word": "aunt",
    "speakText": "aunt",
    "spelling": "aunt",
    "ipa": "/ænt, ɑnt/",
    "pos": "n",
    "zh": "姑姑；姨母",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "aunt"
    ],
    "example": "",
    "distractors": [
      "自行车",
      "棕色的",
      "正中"
    ]
  },
  {
    "word": "autumn",
    "speakText": "autumn",
    "spelling": "autumn",
    "ipa": "/ˈɔdəm/",
    "pos": "n",
    "zh": "秋季",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "autumn"
    ],
    "example": "",
    "distractors": [
      "账单",
      "刷子；画笔",
      "一百年；世纪"
    ]
  },
  {
    "word": "available",
    "speakText": "available",
    "spelling": "available",
    "ipa": "/əˈveɪləb(ə)l/",
    "pos": "adj",
    "zh": "可获得的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "available"
    ],
    "example": "",
    "distractors": [
      "生物学",
      "建造；筑",
      "谷物；谷类植物"
    ]
  },
  {
    "word": "away",
    "speakText": "away",
    "spelling": "away",
    "ipa": "/əˈweɪ/",
    "pos": "adv",
    "zh": "不在",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "away"
    ],
    "example": "",
    "distractors": [
      "鸟",
      "建筑物",
      "链条"
    ]
  },
  {
    "word": "awful",
    "speakText": "awful",
    "spelling": "awful",
    "ipa": "/ˈɔf(ə)l/",
    "pos": "adj",
    "zh": "坏的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "awful"
    ],
    "example": "",
    "distractors": [
      "出生",
      "汉堡包",
      "椅子；单人沙发"
    ]
  },
  {
    "word": "baby",
    "speakText": "baby",
    "spelling": "baby",
    "ipa": "/ˈbeɪbi/",
    "pos": "n",
    "zh": "婴儿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "baby"
    ],
    "example": "",
    "distractors": [
      "生日",
      "公共汽车",
      "改变；零钱"
    ]
  },
  {
    "word": "back",
    "speakText": "back",
    "spelling": "back",
    "ipa": "/bæk/",
    "pos": "n, adv / adj",
    "zh": "背部",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "back"
    ],
    "example": "",
    "distractors": [
      "饼干",
      "商业",
      "电视台"
    ]
  },
  {
    "word": "backpack",
    "speakText": "backpack",
    "spelling": "backpack",
    "ipa": "/ˈbækˌpæk/",
    "pos": "n",
    "zh": "背包；背包旅行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "backpack"
    ],
    "example": "",
    "distractors": [
      "一小块",
      "商人",
      "聊天"
    ]
  },
  {
    "word": "bad",
    "speakText": "bad",
    "spelling": "bad",
    "ipa": "/bæd/",
    "pos": "adj",
    "zh": "不愉快的；不好的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bad"
    ],
    "example": "",
    "distractors": [
      "黑色的",
      "女商人",
      "聊天室"
    ]
  },
  {
    "word": "badly",
    "speakText": "badly",
    "spelling": "badly",
    "ipa": "/ˈbædli/",
    "pos": "adv",
    "zh": "差",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "badly"
    ],
    "example": "",
    "distractors": [
      "黑板",
      "公共汽车站",
      "便宜的"
    ]
  },
  {
    "word": "badminton",
    "speakText": "badminton",
    "spelling": "badminton",
    "ipa": "/ˈbædˌmɪntn/",
    "pos": "n",
    "zh": "羽毛球运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "badminton"
    ],
    "example": "",
    "distractors": [
      "毯子",
      "公共汽车停靠站",
      "查明"
    ]
  },
  {
    "word": "bag",
    "speakText": "bag",
    "spelling": "bag",
    "ipa": "/bæɡ/",
    "pos": "n",
    "zh": "袋",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bag"
    ],
    "example": "",
    "distractors": [
      "大块；方块",
      "无暇的",
      "奶酪"
    ]
  },
  {
    "word": "bake",
    "speakText": "bake",
    "spelling": "bake",
    "ipa": "/beɪk/",
    "pos": "v",
    "zh": "烘焙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bake"
    ],
    "example": "",
    "distractors": [
      "金黄色的；头发金黄的",
      "而",
      "厨师；主厨"
    ]
  },
  {
    "word": "ball",
    "speakText": "ball",
    "spelling": "ball",
    "ipa": "/bɔl/",
    "pos": "n",
    "zh": "球；团",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ball"
    ],
    "example": "",
    "distractors": [
      "血",
      "黄油",
      "药剂师；药商"
    ]
  },
  {
    "word": "balloon",
    "speakText": "balloon",
    "spelling": "balloon",
    "ipa": "/bəˈlun/",
    "pos": "n",
    "zh": "气球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "balloon"
    ],
    "example": "",
    "distractors": [
      "女衬衫；军装上衣",
      "买",
      "化学"
    ]
  },
  {
    "word": "banana",
    "speakText": "banana",
    "spelling": "banana",
    "ipa": "/bəˈnænə/",
    "pos": "n",
    "zh": "香蕉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "banana"
    ],
    "example": "",
    "distractors": [
      "蓝色的",
      "被",
      "支票"
    ]
  },
  {
    "word": "band",
    "speakText": "band",
    "spelling": "band",
    "ipa": "/bænd/",
    "pos": "n",
    "zh": "乐队；一帮人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "band"
    ],
    "example": "",
    "distractors": [
      "木板；公告牌",
      "再见",
      "国际象棋"
    ]
  },
  {
    "word": "bandage",
    "speakText": "bandage",
    "spelling": "bandage",
    "ipa": "/ˈbændɪdʒ/",
    "pos": "n",
    "zh": "绷带；用绷带包扎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bandage"
    ],
    "example": "",
    "distractors": [
      "棋盘游戏",
      "储藏柜；陈列柜",
      "鸡"
    ]
  },
  {
    "word": "bank",
    "speakText": "bank",
    "spelling": "bank",
    "ipa": "/bæŋk/",
    "pos": "n",
    "zh": "银行；河岸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bank"
    ],
    "example": "",
    "distractors": [
      "小船",
      "小餐馆；酒吧",
      "儿童；小孩"
    ]
  },
  {
    "word": "barbecue",
    "speakText": "barbecue",
    "spelling": "barbecue",
    "ipa": "/ˈbɑrbəˌkju/",
    "pos": "n",
    "zh": "户外烧烤；烤架",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "barbecue"
    ],
    "example": "",
    "distractors": [
      "身体",
      "自助餐厅；自助食堂",
      "辣椒"
    ]
  },
  {
    "word": "baseball",
    "speakText": "baseball",
    "spelling": "baseball",
    "ipa": "/ˈbeɪsˌbɔl/",
    "pos": "n",
    "zh": "棒球运动；棒球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "baseball"
    ],
    "example": "",
    "distractors": [
      "沸腾；开",
      "蛋糕",
      "碎片"
    ]
  },
  {
    "word": "basketball",
    "speakText": "basketball",
    "spelling": "basketball",
    "ipa": "/ˈbæskətˌbɔl, ˈbæskətˌbɑl/",
    "pos": "n",
    "zh": "篮球运动；篮球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "basketball"
    ],
    "example": "",
    "distractors": [
      "煮沸的；煮熟的",
      "历法；日历",
      "巧克力"
    ]
  },
  {
    "word": "bat",
    "speakText": "bat",
    "spelling": "bat",
    "ipa": "/bæt/",
    "pos": "n",
    "zh": "球板；球棒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bat"
    ],
    "example": "",
    "distractors": [
      "书",
      "给取名；称呼",
      "选择"
    ]
  },
  {
    "word": "bath",
    "speakText": "bath",
    "spelling": "bath",
    "ipa": "/bæθ/",
    "pos": "n",
    "zh": "洗澡；洗澡水",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bath"
    ],
    "example": "",
    "distractors": [
      "书架",
      "骆驼",
      "电影院"
    ]
  },
  {
    "word": "bathing suit",
    "speakText": "bathing suit",
    "spelling": "bathingsuit",
    "ipa": "/ˈbeɪðɪŋ ˌsut/",
    "pos": "n",
    "zh": "游泳衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bathing suit"
    ],
    "example": "",
    "distractors": [
      "书架",
      "照相机；摄影机",
      "圆"
    ]
  },
  {
    "word": "bathroom",
    "speakText": "bathroom",
    "spelling": "bathroom",
    "ipa": "/ˈbæθˌrum, ˈbæθˌrʊm/",
    "pos": "n",
    "zh": "浴室；洗手间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bathroom"
    ],
    "example": "",
    "distractors": [
      "书店",
      "营地",
      "马戏"
    ]
  },
  {
    "word": "bathtub",
    "speakText": "bathtub",
    "spelling": "bathtub",
    "ipa": "/ˈbæθˌtəb/",
    "pos": "n",
    "zh": "澡盆；浴缸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bathtub"
    ],
    "example": "",
    "distractors": [
      "书店",
      "野营",
      "城市"
    ]
  },
  {
    "word": "battery",
    "speakText": "battery",
    "spelling": "battery",
    "ipa": "/ˈbædəri/",
    "pos": "n",
    "zh": "电池",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "battery"
    ],
    "example": "",
    "distractors": [
      "靴子",
      "野营地",
      "类别；等级"
    ]
  },
  {
    "word": "be",
    "speakText": "be",
    "spelling": "be",
    "ipa": "/bi/",
    "pos": "av / v",
    "zh": "表明属性",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "be"
    ],
    "example": "",
    "distractors": [
      "厌倦的",
      "便帽；制服帽",
      "同班同学"
    ]
  },
  {
    "word": "beach",
    "speakText": "beach",
    "spelling": "beach",
    "ipa": "/bitʃ/",
    "pos": "n",
    "zh": "海滩；河滩",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beach"
    ],
    "example": "",
    "distractors": [
      "令人厌倦的；无聊的",
      "大写字母",
      "教室"
    ]
  },
  {
    "word": "bean",
    "speakText": "bean",
    "spelling": "bean",
    "ipa": "/bin/",
    "pos": "n",
    "zh": "豆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bean"
    ],
    "example": "",
    "distractors": [
      "出生的",
      "能；可以",
      "干净的"
    ]
  },
  {
    "word": "bear",
    "speakText": "bear",
    "spelling": "bear",
    "ipa": "/bɛr/",
    "pos": "n",
    "zh": "承载",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bear"
    ],
    "example": "",
    "distractors": [
      "借",
      "糖果",
      "清洁工；清洁机"
    ]
  },
  {
    "word": "beard",
    "speakText": "beard",
    "spelling": "beard",
    "ipa": "/bɪrd/",
    "pos": "n",
    "zh": "胡须",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beard"
    ],
    "example": "",
    "distractors": [
      "老板",
      "不能",
      "透明的；清澈的"
    ]
  },
  {
    "word": "beautiful",
    "speakText": "beautiful",
    "spelling": "beautiful",
    "ipa": "/ˈbjudəfəl/",
    "pos": "adj",
    "zh": "美丽的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beautiful"
    ],
    "example": "",
    "distractors": [
      "两个",
      "汽车；车厢",
      "清楚地"
    ]
  },
  {
    "word": "because",
    "speakText": "because",
    "spelling": "because",
    "ipa": "/bəˈkəz, bəˈkɔz, bəˈkɑz/",
    "pos": "conj",
    "zh": "因为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "because"
    ],
    "example": "",
    "distractors": [
      "打扰",
      "卡片纸；明信片",
      "聪明的"
    ]
  },
  {
    "word": "become",
    "speakText": "become",
    "spelling": "become",
    "ipa": "/bəˈkəm/",
    "pos": "v",
    "zh": "变成；开始变得",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "become"
    ],
    "example": "",
    "distractors": [
      "瓶；奶瓶",
      "职业",
      "发出咔嗒声"
    ]
  },
  {
    "word": "bed",
    "speakText": "bed",
    "spelling": "bed",
    "ipa": "/bɛd/",
    "pos": "n",
    "zh": "床",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bed"
    ],
    "example": "",
    "distractors": [
      "底部；山脚",
      "谨慎的；小心的",
      "攀登"
    ]
  },
  {
    "word": "bedroom",
    "speakText": "bedroom",
    "spelling": "bedroom",
    "ipa": "/ˈbɛdˌrum, ˈbɛdˌrʊm/",
    "pos": "n",
    "zh": "卧室；卧室的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bedroom"
    ],
    "example": "",
    "distractors": [
      "碗；汤盆",
      "小心地；谨慎地",
      "登山运动；攀缘的"
    ]
  },
  {
    "word": "bee",
    "speakText": "bee",
    "spelling": "bee",
    "ipa": "/bi/",
    "pos": "n",
    "zh": "蜜蜂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bee"
    ],
    "example": "",
    "distractors": [
      "箱；盒",
      "停车场",
      "钟"
    ]
  },
  {
    "word": "before",
    "speakText": "before",
    "spelling": "before",
    "ipa": "/bəˈfɔr/",
    "pos": "adv, conj / prep",
    "zh": "在以前",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "before"
    ],
    "example": "",
    "distractors": [
      "男孩",
      "地毯",
      "近的"
    ]
  },
  {
    "word": "begin",
    "speakText": "begin",
    "spelling": "begin",
    "ipa": "/bəˈɡɪn/",
    "pos": "v",
    "zh": "开始",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "begin"
    ],
    "example": "",
    "distractors": [
      "男朋友",
      "胡萝卜",
      "接近；靠近"
    ]
  },
  {
    "word": "beginner",
    "speakText": "beginner",
    "spelling": "beginner",
    "ipa": "/bəˈɡɪnər/",
    "pos": "n",
    "zh": "初学者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beginner"
    ],
    "example": "",
    "distractors": [
      "脑",
      "抱；拿",
      "关闭的；闭着的"
    ]
  },
  {
    "word": "beginning",
    "speakText": "beginning",
    "spelling": "beginning",
    "ipa": "/bəˈɡɪnɪŋ/",
    "pos": "n",
    "zh": "起点",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beginning"
    ],
    "example": "",
    "distractors": [
      "勇敢的",
      "动画片；漫画",
      "衣服"
    ]
  },
  {
    "word": "behind",
    "speakText": "behind",
    "spelling": "behind",
    "ipa": "/bəˈhaɪnd/",
    "pos": "adv / prep",
    "zh": "在背后；向后",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "behind"
    ],
    "example": "",
    "distractors": [
      "面包",
      "事例",
      "云"
    ]
  },
  {
    "word": "believe",
    "speakText": "believe",
    "spelling": "believe",
    "ipa": "/bəˈliv/",
    "pos": "v",
    "zh": "相信",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "believe"
    ],
    "example": "",
    "distractors": [
      "打破；弄断",
      "城堡",
      "多云的；阴天的"
    ]
  },
  {
    "word": "belong",
    "speakText": "belong",
    "spelling": "belong",
    "ipa": "/bəˈlɔŋ, bəˈlɑŋ/",
    "pos": "v",
    "zh": "属于某人/某物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "belong"
    ],
    "example": "",
    "distractors": [
      "窗户",
      "猫",
      "小丑；喜剧演员"
    ]
  },
  {
    "word": "below",
    "speakText": "below",
    "spelling": "below",
    "ipa": "/bəˈloʊ/",
    "pos": "adv / prep",
    "zh": "在下面；到下面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "below"
    ],
    "example": "",
    "distractors": [
      "早饭",
      "接住；捕获",
      "俱乐部"
    ]
  },
  {
    "word": "belt",
    "speakText": "belt",
    "spelling": "belt",
    "ipa": "/bɛlt/",
    "pos": "n",
    "zh": "腰带；安全带",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "belt"
    ],
    "example": "",
    "distractors": [
      "桥梁",
      "教区总教堂",
      "长途汽车；火车车厢"
    ]
  },
  {
    "word": "beside",
    "speakText": "beside",
    "spelling": "beside",
    "ipa": "/bəˈsaɪd/",
    "pos": "prep",
    "zh": "在旁边",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "beside"
    ],
    "example": "",
    "distractors": [
      "鲜艳的",
      "光盘",
      "外套"
    ]
  },
  {
    "word": "best",
    "speakText": "best",
    "spelling": "best",
    "ipa": "/bɛst/",
    "pos": "adj / adv",
    "zh": "最好的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "best"
    ],
    "example": "",
    "distractors": [
      "明亮的；鲜艳的",
      "CD播放器",
      "咖啡；一杯咖啡"
    ]
  },
  {
    "word": "better",
    "speakText": "better",
    "spelling": "better",
    "ipa": "/ˈbɛdər/",
    "pos": "adj / adv",
    "zh": "更好的；更吸引人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "better"
    ],
    "example": "",
    "distractors": [
      "带来",
      "天花板",
      "可乐"
    ]
  },
  {
    "word": "between",
    "speakText": "between",
    "spelling": "between",
    "ipa": "/bəˈtwin/",
    "pos": "prep",
    "zh": "在之间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "between"
    ],
    "example": "",
    "distractors": [
      "破碎的；折断的",
      "手机",
      "寒冷的；冷的"
    ]
  },
  {
    "word": "bicycle",
    "speakText": "bicycle",
    "spelling": "bicycle",
    "ipa": "/ˈbaɪsəkəl/",
    "pos": "n",
    "zh": "自行车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bicycle"
    ],
    "example": "",
    "distractors": [
      "弟弟；哥哥",
      "分；一分硬币",
      "同事"
    ]
  },
  {
    "word": "big",
    "speakText": "big",
    "spelling": "big",
    "ipa": "/bɪɡ/",
    "pos": "adj",
    "zh": "大的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "big"
    ],
    "example": "",
    "distractors": [
      "棕色的",
      "正中",
      "收集；采集"
    ]
  },
  {
    "word": "bike",
    "speakText": "bike",
    "spelling": "bike",
    "ipa": "/baɪk/",
    "pos": "n",
    "zh": "自行车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bike"
    ],
    "example": "",
    "distractors": [
      "刷子；画笔",
      "一百年；世纪",
      "学院；大学"
    ]
  },
  {
    "word": "bill",
    "speakText": "bill",
    "spelling": "bill",
    "ipa": "/bɪl/",
    "pos": "n",
    "zh": "账单",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bill"
    ],
    "example": "",
    "distractors": [
      "建造；筑",
      "谷物；谷类植物",
      "颜色"
    ]
  },
  {
    "word": "biology",
    "speakText": "biology",
    "spelling": "biology",
    "ipa": "/baɪˈɑlədʒi/",
    "pos": "n",
    "zh": "生物学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "biology"
    ],
    "example": "",
    "distractors": [
      "建筑物",
      "链条",
      "梳子；压发梳"
    ]
  },
  {
    "word": "bird",
    "speakText": "bird",
    "spelling": "bird",
    "ipa": "/bərd/",
    "pos": "n",
    "zh": "鸟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bird"
    ],
    "example": "",
    "distractors": [
      "汉堡包",
      "椅子；单人沙发",
      "来"
    ]
  },
  {
    "word": "birth",
    "speakText": "birth",
    "spelling": "birth",
    "ipa": "/bərθ/",
    "pos": "n",
    "zh": "出生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "birth"
    ],
    "example": "",
    "distractors": [
      "公共汽车",
      "改变；零钱",
      "舒适的"
    ]
  },
  {
    "word": "birthday",
    "speakText": "birthday",
    "spelling": "birthday",
    "ipa": "/ˈbərθˌdeɪ/",
    "pos": "n",
    "zh": "生日",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "birthday"
    ],
    "example": "",
    "distractors": [
      "商业",
      "电视台",
      "滑稽的；喜剧的"
    ]
  },
  {
    "word": "biscuit",
    "speakText": "biscuit",
    "spelling": "biscuit",
    "ipa": "/ˈbɪskət/",
    "pos": "n",
    "zh": "饼干",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "biscuit"
    ],
    "example": "",
    "distractors": [
      "商人",
      "聊天",
      "公司；剧团"
    ]
  },
  {
    "word": "bit",
    "speakText": "bit",
    "spelling": "bit",
    "ipa": "/bɪt/",
    "pos": "n",
    "zh": "一小块",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bit"
    ],
    "example": "",
    "distractors": [
      "女商人",
      "聊天室",
      "竞争"
    ]
  },
  {
    "word": "black",
    "speakText": "black",
    "spelling": "black",
    "ipa": "/blæk/",
    "pos": "adj / n",
    "zh": "黑色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "black"
    ],
    "example": "",
    "distractors": [
      "公共汽车站",
      "便宜的",
      "全部的；完整的"
    ]
  },
  {
    "word": "blackboard",
    "speakText": "blackboard",
    "spelling": "blackboard",
    "ipa": "/ˈblækˌbɔrd/",
    "pos": "n",
    "zh": "黑板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blackboard"
    ],
    "example": "",
    "distractors": [
      "公共汽车停靠站",
      "查明",
      "计算机"
    ]
  },
  {
    "word": "blanket",
    "speakText": "blanket",
    "spelling": "blanket",
    "ipa": "/ˈblæŋkət/",
    "pos": "n",
    "zh": "毯子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blanket"
    ],
    "example": "",
    "distractors": [
      "无暇的",
      "奶酪",
      "音乐会"
    ]
  },
  {
    "word": "block",
    "speakText": "block",
    "spelling": "block",
    "ipa": "/blɑk/",
    "pos": "n",
    "zh": "大块；方块",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "block"
    ],
    "example": "",
    "distractors": [
      "而",
      "厨师；主厨",
      "祝贺"
    ]
  },
  {
    "word": "blond(e)",
    "speakText": "blond",
    "spelling": "blond",
    "ipa": "/blɑnd/",
    "pos": "adj",
    "zh": "金黄色的；头发金黄的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blond"
    ],
    "example": "",
    "distractors": [
      "黄油",
      "药剂师；药商",
      "接触"
    ]
  },
  {
    "word": "blood",
    "speakText": "blood",
    "spelling": "blood",
    "ipa": "/bləd/",
    "pos": "n",
    "zh": "血",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blood"
    ],
    "example": "",
    "distractors": [
      "买",
      "化学",
      "谈话"
    ]
  },
  {
    "word": "blouse",
    "speakText": "blouse",
    "spelling": "blouse",
    "ipa": "/blaʊs/",
    "pos": "n",
    "zh": "女衬衫；军装上衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blouse"
    ],
    "example": "",
    "distractors": [
      "被",
      "支票",
      "做；烹制"
    ]
  },
  {
    "word": "blue",
    "speakText": "blue",
    "spelling": "blue",
    "ipa": "/blu/",
    "pos": "adj / n",
    "zh": "蓝色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "blue"
    ],
    "example": "",
    "distractors": [
      "再见",
      "国际象棋",
      "炉灶"
    ]
  },
  {
    "word": "board",
    "speakText": "board",
    "spelling": "board",
    "ipa": "/bɔrd/",
    "pos": "n",
    "zh": "木板；公告牌",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "board"
    ],
    "example": "",
    "distractors": [
      "储藏柜；陈列柜",
      "鸡",
      "曲奇饼"
    ]
  },
  {
    "word": "board game",
    "speakText": "board game",
    "spelling": "boardgame",
    "ipa": "/ˈbɔrd ˌɡeɪm/",
    "pos": "n",
    "zh": "棋盘游戏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "board game"
    ],
    "example": "",
    "distractors": [
      "小餐馆；酒吧",
      "儿童；小孩",
      "烹饪"
    ]
  },
  {
    "word": "boat",
    "speakText": "boat",
    "spelling": "boat",
    "ipa": "/boʊt/",
    "pos": "n",
    "zh": "小船",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boat"
    ],
    "example": "",
    "distractors": [
      "自助餐厅；自助食堂",
      "辣椒",
      "凉的；凉快的"
    ]
  },
  {
    "word": "body",
    "speakText": "body",
    "spelling": "body",
    "ipa": "/ˈbɑdi/",
    "pos": "n",
    "zh": "身体",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "body"
    ],
    "example": "",
    "distractors": [
      "蛋糕",
      "碎片",
      "复制品；仿制品"
    ]
  },
  {
    "word": "boil",
    "speakText": "boil",
    "spelling": "boil",
    "ipa": "/bɔɪl/",
    "pos": "v",
    "zh": "沸腾；开",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boil"
    ],
    "example": "",
    "distractors": [
      "历法；日历",
      "巧克力",
      "角；角落"
    ]
  },
  {
    "word": "boiled",
    "speakText": "boiled",
    "spelling": "boiled",
    "ipa": "/bɔɪld/",
    "pos": "adj",
    "zh": "煮沸的；煮熟的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boiled"
    ],
    "example": "",
    "distractors": [
      "给取名；称呼",
      "选择",
      "正确的"
    ]
  },
  {
    "word": "book",
    "speakText": "book",
    "spelling": "book",
    "ipa": "/bʊk/",
    "pos": "n / v",
    "zh": "书",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "book"
    ],
    "example": "",
    "distractors": [
      "骆驼",
      "电影院",
      "价钱为"
    ]
  },
  {
    "word": "bookcase",
    "speakText": "bookcase",
    "spelling": "bookcase",
    "ipa": "/ˈbʊkˌkeɪs/",
    "pos": "n",
    "zh": "书架",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bookcase"
    ],
    "example": "",
    "distractors": [
      "照相机；摄影机",
      "圆",
      "服装"
    ]
  },
  {
    "word": "bookshelf",
    "speakText": "bookshelf",
    "spelling": "bookshelf",
    "ipa": "/ˈbʊkˌʃɛlf/",
    "pos": "n",
    "zh": "书架",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bookshelf"
    ],
    "example": "",
    "distractors": [
      "营地",
      "马戏",
      "能；可以"
    ]
  },
  {
    "word": "bookshop",
    "speakText": "bookshop",
    "spelling": "bookshop",
    "ipa": "/ˈbʊkˌʃɑp/",
    "pos": "n",
    "zh": "书店",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bookshop"
    ],
    "example": "",
    "distractors": [
      "野营",
      "城市",
      "国家"
    ]
  },
  {
    "word": "bookstore",
    "speakText": "bookstore",
    "spelling": "bookstore",
    "ipa": "/ˈbʊkˌʃɑp/",
    "pos": "n",
    "zh": "书店",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bookstore"
    ],
    "example": "",
    "distractors": [
      "野营地",
      "类别；等级",
      "乡下"
    ]
  },
  {
    "word": "boot",
    "speakText": "boot",
    "spelling": "boot",
    "ipa": "/but/",
    "pos": "n",
    "zh": "靴子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boot"
    ],
    "example": "",
    "distractors": [
      "便帽；制服帽",
      "同班同学",
      "进程"
    ]
  },
  {
    "word": "bored",
    "speakText": "bored",
    "spelling": "bored",
    "ipa": "/bɔrd/",
    "pos": "adj",
    "zh": "厌倦的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bored"
    ],
    "example": "",
    "distractors": [
      "大写字母",
      "教室",
      "堂兄；堂弟"
    ]
  },
  {
    "word": "boring",
    "speakText": "boring",
    "spelling": "boring",
    "ipa": "/ˈbɔrɪŋ/",
    "pos": "adj",
    "zh": "令人厌倦的；无聊的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boring"
    ],
    "example": "",
    "distractors": [
      "能；可以",
      "干净的",
      "遮盖；遮挡"
    ]
  },
  {
    "word": "born",
    "speakText": "born",
    "spelling": "born",
    "ipa": "/bɔrn/",
    "pos": "v",
    "zh": "出生的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "born"
    ],
    "example": "",
    "distractors": [
      "糖果",
      "清洁工；清洁机",
      "母牛"
    ]
  },
  {
    "word": "borrow",
    "speakText": "borrow",
    "spelling": "borrow",
    "ipa": "/ˈbɑroʊ, ˈbɔroʊ/",
    "pos": "v",
    "zh": "借",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "borrow"
    ],
    "example": "",
    "distractors": [
      "不能",
      "透明的；清澈的",
      "发疯的"
    ]
  },
  {
    "word": "boss",
    "speakText": "boss",
    "spelling": "boss",
    "ipa": "/bɔs/",
    "pos": "n",
    "zh": "老板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boss"
    ],
    "example": "",
    "distractors": [
      "汽车；车厢",
      "清楚地",
      "奶油；护肤霜"
    ]
  },
  {
    "word": "both",
    "speakText": "both",
    "spelling": "both",
    "ipa": "/boʊθ/",
    "pos": "pron / det",
    "zh": "两个",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "both"
    ],
    "example": "",
    "distractors": [
      "卡片纸；明信片",
      "聪明的",
      "信用卡"
    ]
  },
  {
    "word": "bother",
    "speakText": "bother",
    "spelling": "bother",
    "ipa": "/ˈbɑðər/",
    "pos": "v",
    "zh": "打扰",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bother"
    ],
    "example": "",
    "distractors": [
      "职业",
      "发出咔嗒声",
      "蟋蟀"
    ]
  },
  {
    "word": "bottle",
    "speakText": "bottle",
    "spelling": "bottle",
    "ipa": "/ˈbɑd(ə)l/",
    "pos": "n",
    "zh": "瓶；奶瓶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bottle"
    ],
    "example": "",
    "distractors": [
      "谨慎的；小心的",
      "攀登",
      "叉形；叉"
    ]
  },
  {
    "word": "bottom",
    "speakText": "bottom",
    "spelling": "bottom",
    "ipa": "/ˈbɑdəm/",
    "pos": "n",
    "zh": "底部；山脚",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bottom"
    ],
    "example": "",
    "distractors": [
      "小心地；谨慎地",
      "登山运动；攀缘的",
      "横渡"
    ]
  },
  {
    "word": "bowl",
    "speakText": "bowl",
    "spelling": "bowl",
    "ipa": "/boʊl/",
    "pos": "n",
    "zh": "碗；汤盆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bowl"
    ],
    "example": "",
    "distractors": [
      "停车场",
      "钟",
      "人群；一堆"
    ]
  },
  {
    "word": "box",
    "speakText": "box",
    "spelling": "box",
    "ipa": "/bɑks/",
    "pos": "n",
    "zh": "箱；盒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "box"
    ],
    "example": "",
    "distractors": [
      "地毯",
      "近的",
      "拥挤的；人满为患的"
    ]
  },
  {
    "word": "boy",
    "speakText": "boy",
    "spelling": "boy",
    "ipa": "/bɔɪ/",
    "pos": "n",
    "zh": "男孩",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boy"
    ],
    "example": "",
    "distractors": [
      "胡萝卜",
      "接近；靠近",
      "哭；流泪"
    ]
  },
  {
    "word": "boyfriend",
    "speakText": "boyfriend",
    "spelling": "boyfriend",
    "ipa": "/ˈbɔɪˌfrɛnd/",
    "pos": "n",
    "zh": "男朋友",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "boyfriend"
    ],
    "example": "",
    "distractors": [
      "抱；拿",
      "关闭的；闭着的",
      "杯子；一杯"
    ]
  },
  {
    "word": "brain",
    "speakText": "brain",
    "spelling": "brain",
    "ipa": "/breɪn/",
    "pos": "n",
    "zh": "脑",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brain"
    ],
    "example": "",
    "distractors": [
      "动画片；漫画",
      "衣服",
      "橱柜"
    ]
  },
  {
    "word": "brave",
    "speakText": "brave",
    "spelling": "brave",
    "ipa": "/breɪv/",
    "pos": "adj",
    "zh": "勇敢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brave"
    ],
    "example": "",
    "distractors": [
      "事例",
      "云",
      "咖喱菜肴"
    ]
  },
  {
    "word": "bread",
    "speakText": "bread",
    "spelling": "bread",
    "ipa": "/brɛd/",
    "pos": "n",
    "zh": "面包",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bread"
    ],
    "example": "",
    "distractors": [
      "城堡",
      "多云的；阴天的",
      "窗帘；门帘"
    ]
  },
  {
    "word": "break",
    "speakText": "break",
    "spelling": "break",
    "ipa": "/breɪk/",
    "pos": "n / v",
    "zh": "打破；弄断",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "break"
    ],
    "example": "",
    "distractors": [
      "猫",
      "小丑；喜剧演员",
      "顾客"
    ]
  },
  {
    "word": "breakfast",
    "speakText": "breakfast",
    "spelling": "breakfast",
    "ipa": "/ˈbrɛkfəst/",
    "pos": "n",
    "zh": "早饭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "breakfast"
    ],
    "example": "",
    "distractors": [
      "教区总教堂",
      "长途汽车；火车车厢",
      "循环"
    ]
  },
  {
    "word": "bridge",
    "speakText": "bridge",
    "spelling": "bridge",
    "ipa": "/brɪdʒ/",
    "pos": "n",
    "zh": "桥梁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bridge"
    ],
    "example": "",
    "distractors": [
      "光盘",
      "外套",
      "骑自行车；自行车运动"
    ]
  },
  {
    "word": "bright",
    "speakText": "bright",
    "spelling": "bright",
    "ipa": "/braɪt/",
    "pos": "adj",
    "zh": "鲜艳的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bright"
    ],
    "example": "",
    "distractors": [
      "CD播放器",
      "咖啡；一杯咖啡",
      "爸爸；老头"
    ]
  },
  {
    "word": "brilliant",
    "speakText": "brilliant",
    "spelling": "brilliant",
    "ipa": "/ˈbrɪljənt/",
    "pos": "adj",
    "zh": "明亮的；鲜艳的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brilliant"
    ],
    "example": "",
    "distractors": [
      "天花板",
      "可乐",
      "每日的"
    ]
  },
  {
    "word": "bring",
    "speakText": "bring",
    "spelling": "bring",
    "ipa": "/brɪŋ/",
    "pos": "v",
    "zh": "带来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bring"
    ],
    "example": "",
    "distractors": [
      "手机",
      "寒冷的；冷的",
      "跳舞"
    ]
  },
  {
    "word": "broken",
    "speakText": "broken",
    "spelling": "broken",
    "ipa": "/ˈbroʊkən/",
    "pos": "adj",
    "zh": "破碎的；折断的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "broken"
    ],
    "example": "",
    "distractors": [
      "分；一分硬币",
      "同事",
      "舞蹈演员；跳舞者"
    ]
  },
  {
    "word": "brother",
    "speakText": "brother",
    "spelling": "brother",
    "ipa": "/ˈbrəðər/",
    "pos": "n",
    "zh": "弟弟；哥哥",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brother"
    ],
    "example": "",
    "distractors": [
      "正中",
      "收集；采集",
      "舞蹈"
    ]
  },
  {
    "word": "brown",
    "speakText": "brown",
    "spelling": "brown",
    "ipa": "/braʊn/",
    "pos": "adj / n",
    "zh": "棕色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brown"
    ],
    "example": "",
    "distractors": [
      "一百年；世纪",
      "学院；大学",
      "危险"
    ]
  },
  {
    "word": "brush",
    "speakText": "brush",
    "spelling": "brush",
    "ipa": "/brəʃ/",
    "pos": "n / v",
    "zh": "刷子；画笔",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "brush"
    ],
    "example": "",
    "distractors": [
      "谷物；谷类植物",
      "颜色",
      "危险的"
    ]
  },
  {
    "word": "build",
    "speakText": "build",
    "spelling": "build",
    "ipa": "/bɪld/",
    "pos": "v",
    "zh": "建造；筑",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "build"
    ],
    "example": "",
    "distractors": [
      "链条",
      "梳子；压发梳",
      "黑暗的"
    ]
  },
  {
    "word": "building",
    "speakText": "building",
    "spelling": "building",
    "ipa": "/ˈbɪldɪŋ/",
    "pos": "n",
    "zh": "建筑物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "building"
    ],
    "example": "",
    "distractors": [
      "椅子；单人沙发",
      "来",
      "日期"
    ]
  },
  {
    "word": "burger",
    "speakText": "burger",
    "spelling": "burger",
    "ipa": "/ˈbərɡər/",
    "pos": "n",
    "zh": "汉堡包",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "burger"
    ],
    "example": "",
    "distractors": [
      "改变；零钱",
      "舒适的",
      "女儿；产物"
    ]
  },
  {
    "word": "bus",
    "speakText": "bus",
    "spelling": "bus",
    "ipa": "/bəs/",
    "pos": "n",
    "zh": "公共汽车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bus"
    ],
    "example": "",
    "distractors": [
      "电视台",
      "滑稽的；喜剧的",
      "一天"
    ]
  },
  {
    "word": "business",
    "speakText": "business",
    "spelling": "business",
    "ipa": "/ˈbɪznəs/",
    "pos": "n",
    "zh": "商业",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "business"
    ],
    "example": "",
    "distractors": [
      "聊天",
      "公司；剧团",
      "死的；凋谢的"
    ]
  },
  {
    "word": "businessman",
    "speakText": "businessman",
    "spelling": "businessman",
    "ipa": "/ˈbɪznəsˌmæn/",
    "pos": "n",
    "zh": "商人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "businessman"
    ],
    "example": "",
    "distractors": [
      "聊天室",
      "竞争",
      "珍爱的"
    ]
  },
  {
    "word": "businesswoman",
    "speakText": "businesswoman",
    "spelling": "businesswoman",
    "ipa": "/ˈbɪznəsˌwʊmən/",
    "pos": "n",
    "zh": "女商人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "businesswoman"
    ],
    "example": "",
    "distractors": [
      "便宜的",
      "全部的；完整的",
      "决定"
    ]
  },
  {
    "word": "bus station",
    "speakText": "bus station",
    "spelling": "busstation",
    "ipa": "/ˈbəs ˌsteɪʃən/",
    "pos": "n",
    "zh": "公共汽车站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bus station"
    ],
    "example": "",
    "distractors": [
      "查明",
      "计算机",
      "深的"
    ]
  },
  {
    "word": "bus stop",
    "speakText": "bus stop",
    "spelling": "busstop",
    "ipa": "/ˈbəs ˌstɑp/",
    "pos": "n",
    "zh": "公共汽车停靠站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bus stop"
    ],
    "example": "",
    "distractors": [
      "奶酪",
      "音乐会",
      "度"
    ]
  },
  {
    "word": "busy",
    "speakText": "busy",
    "spelling": "busy",
    "ipa": "/ˈbɪzi/",
    "pos": "adj",
    "zh": "无暇的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "busy"
    ],
    "example": "",
    "distractors": [
      "厨师；主厨",
      "祝贺",
      "推迟"
    ]
  },
  {
    "word": "but",
    "speakText": "but",
    "spelling": "but",
    "ipa": "/bət/",
    "pos": "conj",
    "zh": "而",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "but"
    ],
    "example": "",
    "distractors": [
      "药剂师；药商",
      "接触",
      "小时"
    ]
  },
  {
    "word": "butter",
    "speakText": "butter",
    "spelling": "butter",
    "ipa": "/ˈbədər/",
    "pos": "n",
    "zh": "黄油",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "butter"
    ],
    "example": "",
    "distractors": [
      "化学",
      "谈话",
      "牙科医生"
    ]
  },
  {
    "word": "buy",
    "speakText": "buy",
    "spelling": "buy",
    "ipa": "/baɪ/",
    "pos": "v",
    "zh": "买",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "buy"
    ],
    "example": "",
    "distractors": [
      "支票",
      "做；烹制",
      "部门；局"
    ]
  },
  {
    "word": "by",
    "speakText": "by",
    "spelling": "by",
    "ipa": "/baɪ/",
    "pos": "prep",
    "zh": "被",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "by"
    ],
    "example": "",
    "distractors": [
      "国际象棋",
      "炉灶",
      "百货公司"
    ]
  },
  {
    "word": "bye",
    "speakText": "bye",
    "spelling": "bye",
    "ipa": "/baɪ/",
    "pos": "exclam",
    "zh": "再见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "bye"
    ],
    "example": "",
    "distractors": [
      "鸡",
      "曲奇饼",
      "描述；形容"
    ]
  },
  {
    "word": "cabinet",
    "speakText": "cabinet",
    "spelling": "cabinet",
    "ipa": "/ˈkæb(ə)nət/",
    "pos": "n",
    "zh": "储藏柜；陈列柜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cabinet"
    ],
    "example": "",
    "distractors": [
      "儿童；小孩",
      "烹饪",
      "抛弃；遗弃"
    ]
  },
  {
    "word": "cafe/café",
    "speakText": "cafe",
    "spelling": "cafe",
    "ipa": "/kæˈfeɪ/",
    "pos": "n",
    "zh": "小餐馆；酒吧",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cafe"
    ],
    "example": "",
    "distractors": [
      "辣椒",
      "凉的；凉快的",
      "课桌；办公桌"
    ]
  },
  {
    "word": "cafeteria",
    "speakText": "cafeteria",
    "spelling": "cafeteria",
    "ipa": "/ˌkæfəˈtɪriə/",
    "pos": "n",
    "zh": "自助餐厅；自助食堂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cafeteria"
    ],
    "example": "",
    "distractors": [
      "碎片",
      "复制品；仿制品",
      "饭后；甜点"
    ]
  },
  {
    "word": "cake",
    "speakText": "cake",
    "spelling": "cake",
    "ipa": "/keɪk/",
    "pos": "n",
    "zh": "蛋糕",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cake"
    ],
    "example": "",
    "distractors": [
      "巧克力",
      "角；角落",
      "细节；详情"
    ]
  },
  {
    "word": "calendar",
    "speakText": "calendar",
    "spelling": "calendar",
    "ipa": "/ˈkæləndər/",
    "pos": "n",
    "zh": "历法；日历",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "calendar"
    ],
    "example": "",
    "distractors": [
      "选择",
      "正确的",
      "记事簿"
    ]
  },
  {
    "word": "call",
    "speakText": "call",
    "spelling": "call",
    "ipa": "/kɔl/",
    "pos": "n / v",
    "zh": "给取名；称呼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "call"
    ],
    "example": "",
    "distractors": [
      "电影院",
      "价钱为",
      "词典"
    ]
  },
  {
    "word": "camel",
    "speakText": "camel",
    "spelling": "camel",
    "ipa": "/ˈkæm(ə)l/",
    "pos": "n",
    "zh": "骆驼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "camel"
    ],
    "example": "",
    "distractors": [
      "圆",
      "服装",
      "死亡"
    ]
  },
  {
    "word": "camera",
    "speakText": "camera",
    "spelling": "camera",
    "ipa": "/ˈkæm(ə)rə/",
    "pos": "n",
    "zh": "照相机；摄影机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "camera"
    ],
    "example": "",
    "distractors": [
      "马戏",
      "能；可以",
      "差别"
    ]
  },
  {
    "word": "camp",
    "speakText": "camp",
    "spelling": "camp",
    "ipa": "/kæmp/",
    "pos": "v",
    "zh": "营地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "camp"
    ],
    "example": "",
    "distractors": [
      "城市",
      "国家",
      "不同的"
    ]
  },
  {
    "word": "camping",
    "speakText": "camping",
    "spelling": "camping",
    "ipa": "/ˈkæmpɪŋ/",
    "pos": "n",
    "zh": "野营",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "camping"
    ],
    "example": "",
    "distractors": [
      "类别；等级",
      "乡下",
      "困难的"
    ]
  },
  {
    "word": "campsite",
    "speakText": "campsite",
    "spelling": "campsite",
    "ipa": "/ˈkæmpˌsaɪt/",
    "pos": "n",
    "zh": "野营地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "campsite"
    ],
    "example": "",
    "distractors": [
      "同班同学",
      "进程",
      "数字的；数码的"
    ]
  },
  {
    "word": "cap",
    "speakText": "cap",
    "spelling": "cap",
    "ipa": "/kæp/",
    "pos": "n",
    "zh": "便帽；制服帽",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cap"
    ],
    "example": "",
    "distractors": [
      "教室",
      "堂兄；堂弟",
      "数码相机"
    ]
  },
  {
    "word": "capital",
    "speakText": "capital",
    "spelling": "capital",
    "ipa": "/ˈkæpədl/",
    "pos": "n",
    "zh": "首都；大写字母",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "capital"
    ],
    "example": "",
    "distractors": [
      "干净的",
      "遮盖；遮挡",
      "餐厅"
    ]
  },
  {
    "word": "can",
    "speakText": "can",
    "spelling": "can",
    "ipa": "/kæn/",
    "pos": "n / mv",
    "zh": "能；可以",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "can"
    ],
    "example": "",
    "distractors": [
      "清洁工；清洁机",
      "母牛",
      "正餐；晚餐"
    ]
  },
  {
    "word": "candy",
    "speakText": "candy",
    "spelling": "candy",
    "ipa": "/ˈkændi/",
    "pos": "n",
    "zh": "糖果",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "candy"
    ],
    "example": "",
    "distractors": [
      "透明的；清澈的",
      "发疯的",
      "恐龙；落伍的人"
    ]
  },
  {
    "word": "cannot",
    "speakText": "cannot",
    "spelling": "cannot",
    "ipa": "/ˈkænɑːt/",
    "pos": "mv",
    "zh": "不能",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cannot"
    ],
    "example": "",
    "distractors": [
      "清楚地",
      "奶油；护肤霜",
      "毕业文凭"
    ]
  },
  {
    "word": "car",
    "speakText": "car",
    "spelling": "car",
    "ipa": "/kɑr/",
    "pos": "n",
    "zh": "汽车；车厢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "car"
    ],
    "example": "",
    "distractors": [
      "聪明的",
      "信用卡",
      "肮脏的；邋遢的"
    ]
  },
  {
    "word": "card",
    "speakText": "card",
    "spelling": "card",
    "ipa": "/kɑrd/",
    "pos": "n",
    "zh": "卡片纸；明信片",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "card"
    ],
    "example": "",
    "distractors": [
      "发出咔嗒声",
      "蟋蟀",
      "迪斯科舞会"
    ]
  },
  {
    "word": "career",
    "speakText": "career",
    "spelling": "career",
    "ipa": "/kəˈrɪr/",
    "pos": "n",
    "zh": "职业",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "career"
    ],
    "example": "",
    "distractors": [
      "攀登",
      "叉形；叉",
      "折扣"
    ]
  },
  {
    "word": "careful",
    "speakText": "careful",
    "spelling": "careful",
    "ipa": "/ˈkɛrf(ə)l/",
    "pos": "adj",
    "zh": "谨慎的；小心的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "careful"
    ],
    "example": "",
    "distractors": [
      "登山运动；攀缘的",
      "横渡",
      "讨论"
    ]
  },
  {
    "word": "carefully",
    "speakText": "carefully",
    "spelling": "carefully",
    "ipa": "/ˈkɛrf(ə)li/",
    "pos": "adv",
    "zh": "小心地；谨慎地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "carefully"
    ],
    "example": "",
    "distractors": [
      "钟",
      "人群；一堆",
      "盘子；一盘"
    ]
  },
  {
    "word": "car park",
    "speakText": "car park",
    "spelling": "carpark",
    "ipa": "/ˈkɑr ˌpɑrk/",
    "pos": "n",
    "zh": "停车场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "car park"
    ],
    "example": "",
    "distractors": [
      "近的",
      "拥挤的；人满为患的",
      "做"
    ]
  },
  {
    "word": "carpet",
    "speakText": "carpet",
    "spelling": "carpet",
    "ipa": "/ˈkɑrpət/",
    "pos": "n",
    "zh": "地毯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "carpet"
    ],
    "example": "",
    "distractors": [
      "接近；靠近",
      "哭；流泪",
      "医生"
    ]
  },
  {
    "word": "carrot",
    "speakText": "carrot",
    "spelling": "carrot",
    "ipa": "/ˈkɛrət/",
    "pos": "n",
    "zh": "胡萝卜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "carrot"
    ],
    "example": "",
    "distractors": [
      "关闭的；闭着的",
      "杯子；一杯",
      "文件"
    ]
  },
  {
    "word": "carry",
    "speakText": "carry",
    "spelling": "carry",
    "ipa": "/ˈkɛri/",
    "pos": "v",
    "zh": "抱；拿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "carry"
    ],
    "example": "",
    "distractors": [
      "衣服",
      "橱柜",
      "狗"
    ]
  },
  {
    "word": "cartoon",
    "speakText": "cartoon",
    "spelling": "cartoon",
    "ipa": "/kɑrˈtun/",
    "pos": "n",
    "zh": "动画片；漫画",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cartoon"
    ],
    "example": "",
    "distractors": [
      "云",
      "咖喱菜肴",
      "玩偶"
    ]
  },
  {
    "word": "case",
    "speakText": "case",
    "spelling": "case",
    "ipa": "/keɪs/",
    "pos": "n",
    "zh": "事例",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "case"
    ],
    "example": "",
    "distractors": [
      "多云的；阴天的",
      "窗帘；门帘",
      "元；美元"
    ]
  },
  {
    "word": "castle",
    "speakText": "castle",
    "spelling": "castle",
    "ipa": "/ˈkæs(ə)l/",
    "pos": "n",
    "zh": "城堡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "castle"
    ],
    "example": "",
    "distractors": [
      "小丑；喜剧演员",
      "顾客",
      "海豚"
    ]
  },
  {
    "word": "cat",
    "speakText": "cat",
    "spelling": "cat",
    "ipa": "/kæt/",
    "pos": "n",
    "zh": "猫",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cat"
    ],
    "example": "",
    "distractors": [
      "俱乐部",
      "切；剪",
      "门；门道"
    ]
  },
  {
    "word": "catch",
    "speakText": "catch",
    "spelling": "catch",
    "ipa": "/kɛtʃ, kætʃ/",
    "pos": "v",
    "zh": "接住；捕获",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "catch"
    ],
    "example": "",
    "distractors": [
      "长途汽车；火车车厢",
      "循环",
      "小圆点"
    ]
  },
  {
    "word": "cathedral",
    "speakText": "cathedral",
    "spelling": "cathedral",
    "ipa": "/kəˈθidrəl/",
    "pos": "n",
    "zh": "教区总教堂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cathedral"
    ],
    "example": "",
    "distractors": [
      "外套",
      "骑自行车；自行车运动",
      "供两者用的"
    ]
  },
  {
    "word": "CD",
    "speakText": "CD",
    "spelling": "cd",
    "ipa": "/ˌsiː ˈdiː/",
    "pos": "n",
    "zh": "光盘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "CD"
    ],
    "example": "",
    "distractors": [
      "咖啡；一杯咖啡",
      "爸爸；老头",
      "向下；向楼下"
    ]
  },
  {
    "word": "CD player",
    "speakText": "CD player",
    "spelling": "cdplayer",
    "ipa": "/ˌsiː ˈdiː ˈpleɪər/",
    "pos": "n",
    "zh": "CD播放器",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "CD player"
    ],
    "example": "",
    "distractors": [
      "可乐",
      "每日的",
      "下载；下载的文件"
    ]
  },
  {
    "word": "ceiling",
    "speakText": "ceiling",
    "spelling": "ceiling",
    "ipa": "/ˈsilɪŋ/",
    "pos": "n",
    "zh": "天花板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ceiling"
    ],
    "example": "",
    "distractors": [
      "寒冷的；冷的",
      "跳舞",
      "互联网"
    ]
  },
  {
    "word": "cell phone",
    "speakText": "cell phone",
    "spelling": "cellphone",
    "ipa": "/ˈsel foʊn/",
    "pos": "n",
    "zh": "手机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cell phone"
    ],
    "example": "",
    "distractors": [
      "同事",
      "舞蹈演员；跳舞者",
      "在楼下；往楼下"
    ]
  },
  {
    "word": "cent",
    "speakText": "cent",
    "spelling": "cent",
    "ipa": "/sɛnt/",
    "pos": "n",
    "zh": "分；一分硬币",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cent"
    ],
    "example": "",
    "distractors": [
      "收集；采集",
      "舞蹈",
      "医生；博士"
    ]
  },
  {
    "word": "centre/center",
    "speakText": "centre",
    "spelling": "centre",
    "ipa": "/ˈsɛn(t)ər/",
    "pos": "n",
    "zh": "正中",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "centre"
    ],
    "example": "",
    "distractors": [
      "学院；大学",
      "危险",
      "画；描绘"
    ]
  },
  {
    "word": "century",
    "speakText": "century",
    "spelling": "century",
    "ipa": "/ˈsɛn(t)ʃ(ə)ri/",
    "pos": "n",
    "zh": "一百年；世纪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "century"
    ],
    "example": "",
    "distractors": [
      "颜色",
      "危险的",
      "抽屉"
    ]
  },
  {
    "word": "cereal",
    "speakText": "cereal",
    "spelling": "cereal",
    "ipa": "/ˈsɪriəl/",
    "pos": "n",
    "zh": "谷物；谷类植物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cereal"
    ],
    "example": "",
    "distractors": [
      "梳子；压发梳",
      "黑暗的",
      "图画"
    ]
  },
  {
    "word": "chain",
    "speakText": "chain",
    "spelling": "chain",
    "ipa": "/tʃeɪn/",
    "pos": "n",
    "zh": "链条",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chain"
    ],
    "example": "",
    "distractors": [
      "来",
      "日期",
      "梦"
    ]
  },
  {
    "word": "chair",
    "speakText": "chair",
    "spelling": "chair",
    "ipa": "/tʃɛr/",
    "pos": "n",
    "zh": "椅子；单人沙发",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chair"
    ],
    "example": "",
    "distractors": [
      "舒适的",
      "女儿；产物",
      "连衣裙；连衣裙的"
    ]
  },
  {
    "word": "change",
    "speakText": "change",
    "spelling": "change",
    "ipa": "/tʃeɪndʒ/",
    "pos": "v / n",
    "zh": "改变；零钱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "change"
    ],
    "example": "",
    "distractors": [
      "滑稽的；喜剧的",
      "一天",
      "连衣裙；连衣裙的"
    ]
  },
  {
    "word": "channel",
    "speakText": "channel",
    "spelling": "channel",
    "ipa": "/ˈtʃæn(ə)l/",
    "pos": "n",
    "zh": "电视台",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "channel"
    ],
    "example": "",
    "distractors": [
      "公司；剧团",
      "死的；凋谢的",
      "喝"
    ]
  },
  {
    "word": "chat",
    "speakText": "chat",
    "spelling": "chat",
    "ipa": "/tʃæt/",
    "pos": "n",
    "zh": "聊天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chat"
    ],
    "example": "",
    "distractors": [
      "竞争",
      "珍爱的",
      "开；开车送"
    ]
  },
  {
    "word": "chatroom",
    "speakText": "chatroom",
    "spelling": "chatroom",
    "ipa": "/ˈtʃæt ˌrum, ˈtʃæt rʊm/",
    "pos": "n",
    "zh": "聊天室",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chatroom"
    ],
    "example": "",
    "distractors": [
      "全部的；完整的",
      "决定",
      "驾驶员"
    ]
  },
  {
    "word": "cheap",
    "speakText": "cheap",
    "spelling": "cheap",
    "ipa": "/tʃip/",
    "pos": "adj",
    "zh": "便宜的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cheap"
    ],
    "example": "",
    "distractors": [
      "计算机",
      "深的",
      "驾驶执照"
    ]
  },
  {
    "word": "check",
    "speakText": "check",
    "spelling": "check",
    "ipa": "/tʃɛk/",
    "pos": "v",
    "zh": "查明",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "check"
    ],
    "example": "",
    "distractors": [
      "音乐会",
      "度",
      "药房"
    ]
  },
  {
    "word": "cheese",
    "speakText": "cheese",
    "spelling": "cheese",
    "ipa": "/tʃiz/",
    "pos": "n",
    "zh": "奶酪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cheese"
    ],
    "example": "",
    "distractors": [
      "祝贺",
      "推迟",
      "鼓"
    ]
  },
  {
    "word": "chef",
    "speakText": "chef",
    "spelling": "chef",
    "ipa": "/ʃɛf/",
    "pos": "n",
    "zh": "厨师；主厨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chef"
    ],
    "example": "",
    "distractors": [
      "接触",
      "小时",
      "干的；干燥的"
    ]
  },
  {
    "word": "chemist",
    "speakText": "chemist",
    "spelling": "chemist",
    "ipa": "/ˈkɛməst/",
    "pos": "n",
    "zh": "药店；药剂师",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chemist"
    ],
    "example": "",
    "distractors": [
      "谈话",
      "牙科医生",
      "鸭"
    ]
  },
  {
    "word": "chemistry",
    "speakText": "chemistry",
    "spelling": "chemistry",
    "ipa": "/ˈkɛməstri/",
    "pos": "n",
    "zh": "化学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chemistry"
    ],
    "example": "",
    "distractors": [
      "做；烹制",
      "部门；局",
      "在期间"
    ]
  },
  {
    "word": "cheque",
    "speakText": "cheque",
    "spelling": "cheque",
    "ipa": "/tʃɛk/",
    "pos": "n",
    "zh": "支票",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cheque"
    ],
    "example": "",
    "distractors": [
      "炉灶",
      "百货公司",
      "DVD光盘"
    ]
  },
  {
    "word": "chess",
    "speakText": "chess",
    "spelling": "chess",
    "ipa": "/tʃɛs/",
    "pos": "n",
    "zh": "国际象棋",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chess"
    ],
    "example": "",
    "distractors": [
      "曲奇饼",
      "描述；形容",
      "DVD播放器"
    ]
  },
  {
    "word": "chicken",
    "speakText": "chicken",
    "spelling": "chicken",
    "ipa": "/ˈtʃɪkən/",
    "pos": "n",
    "zh": "鸡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chicken"
    ],
    "example": "",
    "distractors": [
      "烹饪",
      "抛弃；遗弃",
      "每个的"
    ]
  },
  {
    "word": "child",
    "speakText": "child",
    "spelling": "child",
    "ipa": "/tʃaɪld/",
    "pos": "n",
    "zh": "儿童；小孩",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "child"
    ],
    "example": "",
    "distractors": [
      "凉的；凉快的",
      "课桌；办公桌",
      "耳朵"
    ]
  },
  {
    "word": "chilli",
    "speakText": "chilli",
    "spelling": "chilli",
    "ipa": "/ˈtʃɪli/",
    "pos": "n",
    "zh": "辣椒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chilli"
    ],
    "example": "",
    "distractors": [
      "复制品；仿制品",
      "饭后；甜点",
      "提早的"
    ]
  },
  {
    "word": "chips",
    "speakText": "chips",
    "spelling": "chips",
    "ipa": "/tʃɪps/",
    "pos": "n pl",
    "zh": "炸薯条；薯片",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chips"
    ],
    "example": "",
    "distractors": [
      "角；角落",
      "细节；详情",
      "挣得"
    ]
  },
  {
    "word": "chocolate",
    "speakText": "chocolate",
    "spelling": "chocolate",
    "ipa": "/ˈtʃɑk(ə)lət/",
    "pos": "n",
    "zh": "巧克力",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "chocolate"
    ],
    "example": "",
    "distractors": [
      "正确的",
      "记事簿",
      "耳环"
    ]
  },
  {
    "word": "choose",
    "speakText": "choose",
    "spelling": "choose",
    "ipa": "/tʃuz/",
    "pos": "v",
    "zh": "选择",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "choose"
    ],
    "example": "",
    "distractors": [
      "价钱为",
      "词典",
      "容易地"
    ]
  },
  {
    "word": "cinema",
    "speakText": "cinema",
    "spelling": "cinema",
    "ipa": "/ˈsɪnəmə/",
    "pos": "n",
    "zh": "电影院",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cinema"
    ],
    "example": "",
    "distractors": [
      "服装",
      "死亡",
      "东；东方"
    ]
  },
  {
    "word": "circle",
    "speakText": "circle",
    "spelling": "circle",
    "ipa": "/ˈsərk(ə)l/",
    "pos": "n",
    "zh": "圆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "circle"
    ],
    "example": "",
    "distractors": [
      "能；可以",
      "差别",
      "容易的；简单的"
    ]
  },
  {
    "word": "circus",
    "speakText": "circus",
    "spelling": "circus",
    "ipa": "/ˈsərkəs/",
    "pos": "n",
    "zh": "马戏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "circus"
    ],
    "example": "",
    "distractors": [
      "国家",
      "不同的",
      "吃"
    ]
  },
  {
    "word": "city",
    "speakText": "city",
    "spelling": "city",
    "ipa": "/ˈsɪdi/",
    "pos": "n",
    "zh": "城市",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "city"
    ],
    "example": "",
    "distractors": [
      "乡下",
      "困难的",
      "蛋；卵"
    ]
  },
  {
    "word": "class",
    "speakText": "class",
    "spelling": "class",
    "ipa": "/klæs/",
    "pos": "n",
    "zh": "类别；等级",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "class"
    ],
    "example": "",
    "distractors": [
      "进程",
      "数字的；数码的",
      "用电的"
    ]
  },
  {
    "word": "classmate",
    "speakText": "classmate",
    "spelling": "classmate",
    "ipa": "/ˈklæsˌmeɪt/",
    "pos": "n",
    "zh": "同班同学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "classmate"
    ],
    "example": "",
    "distractors": [
      "堂兄；堂弟",
      "数码相机",
      "电"
    ]
  },
  {
    "word": "classroom",
    "speakText": "classroom",
    "spelling": "classroom",
    "ipa": "/ˈklæsˌrum, ˈklæsˌrʊm/",
    "pos": "n",
    "zh": "教室",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "classroom"
    ],
    "example": "",
    "distractors": [
      "遮盖；遮挡",
      "餐厅",
      "大象"
    ]
  },
  {
    "word": "clean",
    "speakText": "clean",
    "spelling": "clean",
    "ipa": "/klin/",
    "pos": "adj / v",
    "zh": "干净的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clean"
    ],
    "example": "",
    "distractors": [
      "母牛",
      "正餐；晚餐",
      "电梯；起重机"
    ]
  },
  {
    "word": "cleaner",
    "speakText": "cleaner",
    "spelling": "cleaner",
    "ipa": "/ˈklinər/",
    "pos": "n",
    "zh": "清洁工；清洁机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cleaner"
    ],
    "example": "",
    "distractors": [
      "发疯的",
      "恐龙；落伍的人",
      "其他"
    ]
  },
  {
    "word": "clear",
    "speakText": "clear",
    "spelling": "clear",
    "ipa": "/klɪr/",
    "pos": "adj",
    "zh": "透明的；清澈的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clear"
    ],
    "example": "",
    "distractors": [
      "奶油；护肤霜",
      "毕业文凭",
      "电子邮件"
    ]
  },
  {
    "word": "clearly",
    "speakText": "clearly",
    "spelling": "clearly",
    "ipa": "/ˈklɪrli/",
    "pos": "adv",
    "zh": "清楚地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clearly"
    ],
    "example": "",
    "distractors": [
      "信用卡",
      "肮脏的；邋遢的",
      "空的；空白的"
    ]
  },
  {
    "word": "clever",
    "speakText": "clever",
    "spelling": "clever",
    "ipa": "/ˈklɛvər/",
    "pos": "adj",
    "zh": "聪明的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clever"
    ],
    "example": "",
    "distractors": [
      "蟋蟀",
      "迪斯科舞会",
      "末尾"
    ]
  },
  {
    "word": "click",
    "speakText": "click",
    "spelling": "click",
    "ipa": "/klɪk/",
    "pos": "n / v",
    "zh": "发出咔嗒声",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "click"
    ],
    "example": "",
    "distractors": [
      "叉形；叉",
      "折扣",
      "发动机；火车头"
    ]
  },
  {
    "word": "climb",
    "speakText": "climb",
    "spelling": "climb",
    "ipa": "/klaɪm/",
    "pos": "v",
    "zh": "攀登",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "climb"
    ],
    "example": "",
    "distractors": [
      "横渡",
      "讨论",
      "工程师"
    ]
  },
  {
    "word": "climbing",
    "speakText": "climbing",
    "spelling": "climbing",
    "ipa": "/ˈklaɪmɪŋ/",
    "pos": "n",
    "zh": "登山运动；攀缘的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "climbing"
    ],
    "example": "",
    "distractors": [
      "人群；一堆",
      "盘子；一盘",
      "享受"
    ]
  },
  {
    "word": "clock",
    "speakText": "clock",
    "spelling": "clock",
    "ipa": "/klɑk/",
    "pos": "n",
    "zh": "钟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clock"
    ],
    "example": "",
    "distractors": [
      "拥挤的；人满为患的",
      "做",
      "足够的"
    ]
  },
  {
    "word": "close",
    "speakText": "close",
    "spelling": "close",
    "ipa": "/kloʊs/",
    "pos": "adj / v",
    "zh": "近的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "close"
    ],
    "example": "",
    "distractors": [
      "哭；流泪",
      "医生",
      "进来；进去"
    ]
  },
  {
    "word": "close to",
    "speakText": "close to",
    "spelling": "closeto",
    "ipa": "/kloʊs tuː/",
    "pos": "prep phr",
    "zh": "接近；靠近",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "close to"
    ],
    "example": "",
    "distractors": [
      "杯子；一杯",
      "文件",
      "入口；进入"
    ]
  },
  {
    "word": "closed",
    "speakText": "closed",
    "spelling": "closed",
    "ipa": "/kloʊzd/",
    "pos": "adj",
    "zh": "关闭的；闭着的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "closed"
    ],
    "example": "",
    "distractors": [
      "橱柜",
      "狗",
      "信封"
    ]
  },
  {
    "word": "clothes",
    "speakText": "clothes",
    "spelling": "clothes",
    "ipa": "/kloʊ(ð)z/",
    "pos": "n pl",
    "zh": "衣服",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clothes"
    ],
    "example": "",
    "distractors": [
      "咖喱菜肴",
      "玩偶",
      "橡皮擦；黑板擦"
    ]
  },
  {
    "word": "cloud",
    "speakText": "cloud",
    "spelling": "cloud",
    "ipa": "/klaʊd/",
    "pos": "n",
    "zh": "云",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cloud"
    ],
    "example": "",
    "distractors": [
      "窗帘；门帘",
      "元；美元",
      "尤其"
    ]
  },
  {
    "word": "cloudy",
    "speakText": "cloudy",
    "spelling": "cloudy",
    "ipa": "/ˈklaʊdi/",
    "pos": "adj",
    "zh": "多云的；阴天的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cloudy"
    ],
    "example": "",
    "distractors": [
      "顾客",
      "海豚",
      "欧元"
    ]
  },
  {
    "word": "clown",
    "speakText": "clown",
    "spelling": "clown",
    "ipa": "/klaʊn/",
    "pos": "n",
    "zh": "小丑；喜剧演员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "clown"
    ],
    "example": "",
    "distractors": [
      "切；剪",
      "门；门道",
      "竟然"
    ]
  },
  {
    "word": "club",
    "speakText": "club",
    "spelling": "club",
    "ipa": "/kləb/",
    "pos": "n",
    "zh": "俱乐部",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "club"
    ],
    "example": "",
    "distractors": [
      "循环",
      "小圆点",
      "晚上"
    ]
  },
  {
    "word": "coach",
    "speakText": "coach",
    "spelling": "coach",
    "ipa": "/koʊtʃ/",
    "pos": "n",
    "zh": "长途汽车；火车车厢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "coach"
    ],
    "example": "",
    "distractors": [
      "骑自行车；自行车运动",
      "供两者用的",
      "在任何时候；从来"
    ]
  },
  {
    "word": "coat",
    "speakText": "coat",
    "spelling": "coat",
    "ipa": "/koʊt/",
    "pos": "n",
    "zh": "外套",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "coat"
    ],
    "example": "",
    "distractors": [
      "爸爸；老头",
      "向下；向楼下",
      "每一个"
    ]
  },
  {
    "word": "coffee",
    "speakText": "coffee",
    "spelling": "coffee",
    "ipa": "/ˈkɔfi, ˈkɑfi/",
    "pos": "n",
    "zh": "咖啡；一杯咖啡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "coffee"
    ],
    "example": "",
    "distractors": [
      "每日的",
      "下载；下载的文件",
      "每个人"
    ]
  },
  {
    "word": "cola",
    "speakText": "cola",
    "spelling": "cola",
    "ipa": "/ˈkoʊlə/",
    "pos": "n",
    "zh": "可乐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cola"
    ],
    "example": "",
    "distractors": [
      "跳舞",
      "互联网",
      "每个人"
    ]
  },
  {
    "word": "cold",
    "speakText": "cold",
    "spelling": "cold",
    "ipa": "/koʊld/",
    "pos": "adj / n",
    "zh": "寒冷的；冷的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cold"
    ],
    "example": "",
    "distractors": [
      "舞蹈演员；跳舞者",
      "在楼下；往楼下",
      "每件东西；每件事"
    ]
  },
  {
    "word": "colleague",
    "speakText": "colleague",
    "spelling": "colleague",
    "ipa": "/ˈkɑliɡ/",
    "pos": "n",
    "zh": "同事",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "colleague"
    ],
    "example": "",
    "distractors": [
      "舞蹈",
      "医生；博士",
      "各处"
    ]
  },
  {
    "word": "collect",
    "speakText": "collect",
    "spelling": "collect",
    "ipa": "/kəˈlɛk(t)/",
    "pos": "v",
    "zh": "收集；采集",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "collect"
    ],
    "example": "",
    "distractors": [
      "危险",
      "画；描绘",
      "确切地"
    ]
  },
  {
    "word": "college",
    "speakText": "college",
    "spelling": "college",
    "ipa": "/ˈkɑlɪdʒ/",
    "pos": "n",
    "zh": "学院；大学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "college"
    ],
    "example": "",
    "distractors": [
      "危险的",
      "抽屉",
      "考试"
    ]
  },
  {
    "word": "colour",
    "speakText": "colour",
    "spelling": "colour",
    "ipa": "/ˈkələr/",
    "pos": "n / v",
    "zh": "颜色",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "colour"
    ],
    "example": "",
    "distractors": [
      "黑暗的",
      "图画",
      "例子"
    ]
  },
  {
    "word": "comb",
    "speakText": "comb",
    "spelling": "comb",
    "ipa": "/koʊm/",
    "pos": "n",
    "zh": "梳子；压发梳",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "comb"
    ],
    "example": "",
    "distractors": [
      "日期",
      "梦",
      "极好的；极高的"
    ]
  },
  {
    "word": "come",
    "speakText": "come",
    "spelling": "come",
    "ipa": "/kəm/",
    "pos": "v",
    "zh": "来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "come"
    ],
    "example": "",
    "distractors": [
      "女儿；产物",
      "连衣裙；连衣裙的",
      "除外"
    ]
  },
  {
    "word": "comfortable",
    "speakText": "comfortable",
    "spelling": "comfortable",
    "ipa": "/ˈkəmfərdəb(ə)l, ˈkəmftərb(ə)l/",
    "pos": "adj",
    "zh": "舒适的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "comfortable"
    ],
    "example": "",
    "distractors": [
      "一天",
      "连衣裙；连衣裙的",
      "兴奋的；激动的"
    ]
  },
  {
    "word": "comic",
    "speakText": "comic",
    "spelling": "comic",
    "ipa": "/ˈkɑmɪk/",
    "pos": "n",
    "zh": "滑稽的；喜剧的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "comic"
    ],
    "example": "",
    "distractors": [
      "死的；凋谢的",
      "喝",
      "令人激动的；使人兴奋的"
    ]
  },
  {
    "word": "company",
    "speakText": "company",
    "spelling": "company",
    "ipa": "/ˈkəmp(ə)ni/",
    "pos": "n",
    "zh": "公司；剧团",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "company"
    ],
    "example": "",
    "distractors": [
      "珍爱的",
      "开；开车送",
      "借口"
    ]
  },
  {
    "word": "competition",
    "speakText": "competition",
    "spelling": "competition",
    "ipa": "/ˌkɑmpəˈtɪʃən/",
    "pos": "n",
    "zh": "竞争",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "competition"
    ],
    "example": "",
    "distractors": [
      "决定",
      "驾驶员",
      "锻炼"
    ]
  },
  {
    "word": "complete",
    "speakText": "complete",
    "spelling": "complete",
    "ipa": "/kəmˈplit/",
    "pos": "v",
    "zh": "全部的；完整的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "complete"
    ],
    "example": "",
    "distractors": [
      "深的",
      "驾驶执照",
      "展览"
    ]
  },
  {
    "word": "computer",
    "speakText": "computer",
    "spelling": "computer",
    "ipa": "/kəmˈpjudər/",
    "pos": "n",
    "zh": "计算机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "computer"
    ],
    "example": "",
    "distractors": [
      "度",
      "药房",
      "出口；安全门"
    ]
  },
  {
    "word": "concert",
    "speakText": "concert",
    "spelling": "concert",
    "ipa": "/ˈkɑn(t)sərt/",
    "pos": "n",
    "zh": "音乐会",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "concert"
    ],
    "example": "",
    "distractors": [
      "推迟",
      "鼓",
      "昂贵的；奢侈的"
    ]
  },
  {
    "word": "congratulations!",
    "speakText": "congratulations!",
    "spelling": "congratulations",
    "ipa": "/kənˌɡrætʃuˈleɪʃənz/",
    "pos": "exclam",
    "zh": "祝贺",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "congratulations!"
    ],
    "example": "",
    "distractors": [
      "小时",
      "干的；干燥的",
      "解释；说明"
    ]
  },
  {
    "word": "contact",
    "speakText": "contact",
    "spelling": "contact",
    "ipa": "/ˈkɑntæk(t)/",
    "pos": "n / v",
    "zh": "接触",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "contact"
    ],
    "example": "",
    "distractors": [
      "牙科医生",
      "鸭",
      "勘察"
    ]
  },
  {
    "word": "conversation",
    "speakText": "conversation",
    "spelling": "conversation",
    "ipa": "/ˌkɑnvərˈseɪʃən/",
    "pos": "n",
    "zh": "谈话",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "conversation"
    ],
    "example": "",
    "distractors": [
      "部门；局",
      "在期间",
      "探险者"
    ]
  },
  {
    "word": "cook",
    "speakText": "cook",
    "spelling": "cook",
    "ipa": "/kʊk/",
    "pos": "n / v",
    "zh": "做；烹制",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cook"
    ],
    "example": "",
    "distractors": [
      "百货公司",
      "DVD光盘",
      "额外的"
    ]
  },
  {
    "word": "cooker",
    "speakText": "cooker",
    "spelling": "cooker",
    "ipa": "/ˈkʊkər/",
    "pos": "n",
    "zh": "炉灶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cooker"
    ],
    "example": "",
    "distractors": [
      "描述；形容",
      "DVD播放器",
      "眼睛"
    ]
  },
  {
    "word": "cookie",
    "speakText": "cookie",
    "spelling": "cookie",
    "ipa": "/ˈkʊki/",
    "pos": "n",
    "zh": "曲奇饼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cookie"
    ],
    "example": "",
    "distractors": [
      "抛弃；遗弃",
      "每个的",
      "脸"
    ]
  },
  {
    "word": "cooking",
    "speakText": "cooking",
    "spelling": "cooking",
    "ipa": "/ˈkʊkɪŋ/",
    "pos": "n",
    "zh": "烹饪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cooking"
    ],
    "example": "",
    "distractors": [
      "课桌；办公桌",
      "耳朵",
      "事实"
    ]
  },
  {
    "word": "cool",
    "speakText": "cool",
    "spelling": "cool",
    "ipa": "/kul/",
    "pos": "adj / exclam",
    "zh": "凉的；凉快的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cool"
    ],
    "example": "",
    "distractors": [
      "饭后；甜点",
      "提早的",
      "工厂"
    ]
  },
  {
    "word": "copy",
    "speakText": "copy",
    "spelling": "copy",
    "ipa": "/ˈkɑpi/",
    "pos": "v",
    "zh": "复制品；仿制品",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "copy"
    ],
    "example": "",
    "distractors": [
      "细节；详情",
      "挣得",
      "失败"
    ]
  },
  {
    "word": "corner",
    "speakText": "corner",
    "spelling": "corner",
    "ipa": "/ˈkɔrnər/",
    "pos": "n",
    "zh": "角；角落",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "corner"
    ],
    "example": "",
    "distractors": [
      "记事簿",
      "耳环",
      "公正的"
    ]
  },
  {
    "word": "correct",
    "speakText": "correct",
    "spelling": "correct",
    "ipa": "/kəˈrɛk(t)/",
    "pos": "adj",
    "zh": "正确的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "correct"
    ],
    "example": "",
    "distractors": [
      "词典",
      "容易地",
      "落下"
    ]
  },
  {
    "word": "cost",
    "speakText": "cost",
    "spelling": "cost",
    "ipa": "/kɔst, kɑst/",
    "pos": "n / v",
    "zh": "价钱为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cost"
    ],
    "example": "",
    "distractors": [
      "死亡",
      "东；东方",
      "家庭"
    ]
  },
  {
    "word": "costume",
    "speakText": "costume",
    "spelling": "costume",
    "ipa": "/ˈkɑsˌtum/",
    "pos": "n",
    "zh": "服装",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "costume"
    ],
    "example": "",
    "distractors": [
      "差别",
      "容易的；简单的",
      "著名的"
    ]
  },
  {
    "word": "could",
    "speakText": "could",
    "spelling": "could",
    "ipa": "/kʊd/",
    "pos": "mv",
    "zh": "能；可以",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "could"
    ],
    "example": "",
    "distractors": [
      "不同的",
      "吃",
      "风扇；粉丝"
    ]
  },
  {
    "word": "country",
    "speakText": "country",
    "spelling": "country",
    "ipa": "/ˈkəntri/",
    "pos": "n",
    "zh": "国家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "country"
    ],
    "example": "",
    "distractors": [
      "困难的",
      "蛋；卵",
      "非常棒的；荒唐的"
    ]
  },
  {
    "word": "countryside",
    "speakText": "countryside",
    "spelling": "countryside",
    "ipa": "/ˈkəntriˌsaɪd/",
    "pos": "n",
    "zh": "乡下",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "countryside"
    ],
    "example": "",
    "distractors": [
      "数字的；数码的",
      "用电的",
      "远"
    ]
  },
  {
    "word": "course",
    "speakText": "course",
    "spelling": "course",
    "ipa": "/kɔrs/",
    "pos": "n",
    "zh": "进程",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "course"
    ],
    "example": "",
    "distractors": [
      "数码相机",
      "电",
      "农场"
    ]
  },
  {
    "word": "cousin",
    "speakText": "cousin",
    "spelling": "cousin",
    "ipa": "/ˈkəzn/",
    "pos": "n",
    "zh": "堂兄；堂弟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cousin"
    ],
    "example": "",
    "distractors": [
      "餐厅",
      "大象",
      "农场主；农民"
    ]
  },
  {
    "word": "cover",
    "speakText": "cover",
    "spelling": "cover",
    "ipa": "/ˈkəvər/",
    "pos": "v",
    "zh": "遮盖；遮挡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cover"
    ],
    "example": "",
    "distractors": [
      "正餐；晚餐",
      "电梯；起重机",
      "时尚"
    ]
  },
  {
    "word": "cow",
    "speakText": "cow",
    "spelling": "cow",
    "ipa": "/kaʊ/",
    "pos": "n",
    "zh": "母牛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cow"
    ],
    "example": "",
    "distractors": [
      "恐龙；落伍的人",
      "其他",
      "快的"
    ]
  },
  {
    "word": "crazy",
    "speakText": "crazy",
    "spelling": "crazy",
    "ipa": "/ˈkreɪzi/",
    "pos": "adj",
    "zh": "发疯的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "crazy"
    ],
    "example": "",
    "distractors": [
      "毕业文凭",
      "电子邮件",
      "快餐"
    ]
  },
  {
    "word": "cream",
    "speakText": "cream",
    "spelling": "cream",
    "ipa": "/krim/",
    "pos": "adj / n",
    "zh": "奶油；护肤霜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cream"
    ],
    "example": "",
    "distractors": [
      "肮脏的；邋遢的",
      "空的；空白的",
      "脂肪"
    ]
  },
  {
    "word": "credit card",
    "speakText": "credit card",
    "spelling": "creditcard",
    "ipa": "/ˈkrɛdət ˌkɑrd/",
    "pos": "n",
    "zh": "信用卡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "credit card"
    ],
    "example": "",
    "distractors": [
      "迪斯科舞会",
      "末尾",
      "父亲"
    ]
  },
  {
    "word": "cricket",
    "speakText": "cricket",
    "spelling": "cricket",
    "ipa": "/ˈkrɪkɪt/",
    "pos": "n",
    "zh": "蟋蟀",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cricket"
    ],
    "example": "",
    "distractors": [
      "折扣",
      "发动机；火车头",
      "最喜欢的"
    ]
  },
  {
    "word": "cross",
    "speakText": "cross",
    "spelling": "cross",
    "ipa": "/krɔs, krɑs/",
    "pos": "n / v",
    "zh": "叉形；叉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cross"
    ],
    "example": "",
    "distractors": [
      "讨论",
      "工程师",
      "触摸"
    ]
  },
  {
    "word": "crossing",
    "speakText": "crossing",
    "spelling": "crossing",
    "ipa": "/ˈkrɔsɪŋ, ˈkrɑsɪŋ/",
    "pos": "n",
    "zh": "横渡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "crossing"
    ],
    "example": "",
    "distractors": [
      "盘子；一盘",
      "享受",
      "节日；艺术节"
    ]
  },
  {
    "word": "crowd",
    "speakText": "crowd",
    "spelling": "crowd",
    "ipa": "/kraʊd/",
    "pos": "n",
    "zh": "人群；一堆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "crowd"
    ],
    "example": "",
    "distractors": [
      "做",
      "足够的",
      "极少的"
    ]
  },
  {
    "word": "crowded",
    "speakText": "crowded",
    "spelling": "crowded",
    "ipa": "/ˈkraʊdəd/",
    "pos": "adj",
    "zh": "拥挤的；人满为患的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "crowded"
    ],
    "example": "",
    "distractors": [
      "医生",
      "进来；进去",
      "田地；牧场"
    ]
  },
  {
    "word": "cry",
    "speakText": "cry",
    "spelling": "cry",
    "ipa": "/kraɪ/",
    "pos": "v",
    "zh": "哭；流泪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cry"
    ],
    "example": "",
    "distractors": [
      "文件",
      "入口；进入",
      "锉刀；指甲锉"
    ]
  },
  {
    "word": "cup",
    "speakText": "cup",
    "spelling": "cup",
    "ipa": "/kəp/",
    "pos": "n",
    "zh": "杯子；一杯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cup"
    ],
    "example": "",
    "distractors": [
      "狗",
      "信封",
      "装满"
    ]
  },
  {
    "word": "cupboard",
    "speakText": "cupboard",
    "spelling": "cupboard",
    "ipa": "/ˈkəbərd/",
    "pos": "n",
    "zh": "橱柜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cupboard"
    ],
    "example": "",
    "distractors": [
      "玩偶",
      "橡皮擦；黑板擦",
      "填写"
    ]
  },
  {
    "word": "curry",
    "speakText": "curry",
    "spelling": "curry",
    "ipa": "/ˈkəri/",
    "pos": "n",
    "zh": "咖喱菜肴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "curry"
    ],
    "example": "",
    "distractors": [
      "元；美元",
      "尤其",
      "电影"
    ]
  },
  {
    "word": "curtain",
    "speakText": "curtain",
    "spelling": "curtain",
    "ipa": "/ˈkərtn/",
    "pos": "n",
    "zh": "窗帘；门帘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "curtain"
    ],
    "example": "",
    "distractors": [
      "海豚",
      "欧元",
      "最后的；最终的"
    ]
  },
  {
    "word": "customer",
    "speakText": "customer",
    "spelling": "customer",
    "ipa": "/ˈkəstəmər/",
    "pos": "n",
    "zh": "顾客",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "customer"
    ],
    "example": "",
    "distractors": [
      "门；门道",
      "竟然",
      "最后；终于"
    ]
  },
  {
    "word": "cut",
    "speakText": "cut",
    "spelling": "cut",
    "ipa": "/kət/",
    "pos": "v",
    "zh": "切；剪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cut"
    ],
    "example": "",
    "distractors": [
      "小圆点",
      "晚上",
      "偶然发现"
    ]
  },
  {
    "word": "cycle",
    "speakText": "cycle",
    "spelling": "cycle",
    "ipa": "/ˈsaɪkəl/",
    "pos": "v",
    "zh": "循环",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cycle"
    ],
    "example": "",
    "distractors": [
      "供两者用的",
      "在任何时候；从来",
      "偶然发现"
    ]
  },
  {
    "word": "cycling",
    "speakText": "cycling",
    "spelling": "cycling",
    "ipa": "/ˈsaɪk(ə)lɪŋ/",
    "pos": "n",
    "zh": "骑自行车；自行车运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "cycling"
    ],
    "example": "",
    "distractors": [
      "向下；向楼下",
      "每一个",
      "罚款"
    ]
  },
  {
    "word": "dad",
    "speakText": "dad",
    "spelling": "dad",
    "ipa": "/dæd/",
    "pos": "n",
    "zh": "爸爸；老头",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dad"
    ],
    "example": "",
    "distractors": [
      "下载；下载的文件",
      "每个人",
      "手指"
    ]
  },
  {
    "word": "daily",
    "speakText": "daily",
    "spelling": "daily",
    "ipa": "/ˈdeɪli/",
    "pos": "adj / adv",
    "zh": "每日的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "daily"
    ],
    "example": "",
    "distractors": [
      "互联网",
      "每个人",
      "结束；完成"
    ]
  },
  {
    "word": "dance",
    "speakText": "dance",
    "spelling": "dance",
    "ipa": "/dæn(t)s/",
    "pos": "n / v",
    "zh": "跳舞",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dance"
    ],
    "example": "",
    "distractors": [
      "在楼下；往楼下",
      "每件东西；每件事",
      "火"
    ]
  },
  {
    "word": "dancer",
    "speakText": "dancer",
    "spelling": "dancer",
    "ipa": "/ˈdæn(t)sər/",
    "pos": "n",
    "zh": "舞蹈演员；跳舞者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dancer"
    ],
    "example": "",
    "distractors": [
      "医生；博士",
      "各处",
      "第一的；最早的"
    ]
  },
  {
    "word": "dancing",
    "speakText": "dancing",
    "spelling": "dancing",
    "ipa": "/ˈdæn(t)sɪŋ/",
    "pos": "n",
    "zh": "舞蹈",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dancing"
    ],
    "example": "",
    "distractors": [
      "画；描绘",
      "确切地",
      "名字"
    ]
  },
  {
    "word": "danger",
    "speakText": "danger",
    "spelling": "danger",
    "ipa": "/ˈdeɪndʒər/",
    "pos": "n",
    "zh": "危险",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "danger"
    ],
    "example": "",
    "distractors": [
      "抽屉",
      "考试",
      "鱼"
    ]
  },
  {
    "word": "dangerous",
    "speakText": "dangerous",
    "spelling": "dangerous",
    "ipa": "/ˈdeɪndʒ(ə)rəs/",
    "pos": "adj",
    "zh": "危险的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dangerous"
    ],
    "example": "",
    "distractors": [
      "图画",
      "例子",
      "捕鱼；钓鱼"
    ]
  },
  {
    "word": "dark",
    "speakText": "dark",
    "spelling": "dark",
    "ipa": "/dɑrk/",
    "pos": "adj",
    "zh": "黑暗的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dark"
    ],
    "example": "",
    "distractors": [
      "梦",
      "极好的；极高的",
      "健康的"
    ]
  },
  {
    "word": "date",
    "speakText": "date",
    "spelling": "date",
    "ipa": "/deɪt/",
    "pos": "n",
    "zh": "日期",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "date"
    ],
    "example": "",
    "distractors": [
      "连衣裙；连衣裙的",
      "除外",
      "水平的；平坦的"
    ]
  },
  {
    "word": "daughter",
    "speakText": "daughter",
    "spelling": "daughter",
    "ipa": "/ˈdɔdər, ˈdɑdər/",
    "pos": "n",
    "zh": "女儿；产物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "daughter"
    ],
    "example": "",
    "distractors": [
      "连衣裙；连衣裙的",
      "兴奋的；激动的",
      "飞"
    ]
  },
  {
    "word": "day",
    "speakText": "day",
    "spelling": "day",
    "ipa": "/deɪ/",
    "pos": "n",
    "zh": "一天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "day"
    ],
    "example": "",
    "distractors": [
      "喝",
      "令人激动的；使人兴奋的",
      "地面"
    ]
  },
  {
    "word": "dead",
    "speakText": "dead",
    "spelling": "dead",
    "ipa": "/dɛd/",
    "pos": "adj",
    "zh": "死的；凋谢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dead"
    ],
    "example": "",
    "distractors": [
      "开；开车送",
      "借口",
      "花"
    ]
  },
  {
    "word": "dear",
    "speakText": "dear",
    "spelling": "dear",
    "ipa": "/dɪr/",
    "pos": "adj",
    "zh": "珍爱的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dear"
    ],
    "example": "",
    "distractors": [
      "驾驶员",
      "锻炼",
      "飞；消失"
    ]
  },
  {
    "word": "decide",
    "speakText": "decide",
    "spelling": "decide",
    "ipa": "/dəˈsaɪd/",
    "pos": "v",
    "zh": "决定",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "decide"
    ],
    "example": "",
    "distractors": [
      "驾驶执照",
      "展览",
      "雾"
    ]
  },
  {
    "word": "deep",
    "speakText": "deep",
    "spelling": "deep",
    "ipa": "/dip/",
    "pos": "adj",
    "zh": "深的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "deep"
    ],
    "example": "",
    "distractors": [
      "药房",
      "出口；安全门",
      "有雾的"
    ]
  },
  {
    "word": "degree",
    "speakText": "degree",
    "spelling": "degree",
    "ipa": "/dəˈɡri/",
    "pos": "n",
    "zh": "度",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "degree"
    ],
    "example": "",
    "distractors": [
      "鼓",
      "昂贵的；奢侈的",
      "跟随"
    ]
  },
  {
    "word": "delay",
    "speakText": "delay",
    "spelling": "delay",
    "ipa": "/dəˈleɪ/",
    "pos": "n / v",
    "zh": "推迟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "delay"
    ],
    "example": "",
    "distractors": [
      "干的；干燥的",
      "解释；说明",
      "食物；养料"
    ]
  },
  {
    "word": "dentist",
    "speakText": "dentist",
    "spelling": "dentist",
    "ipa": "/ˈdɛn(t)əst/",
    "pos": "n",
    "zh": "牙科医生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dentist"
    ],
    "example": "",
    "distractors": [
      "在期间",
      "探险者",
      "足球运动；橄榄球运动"
    ]
  },
  {
    "word": "department",
    "speakText": "department",
    "spelling": "department",
    "ipa": "/dəˈpɑrtmənt/",
    "pos": "n",
    "zh": "部门；局",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "department"
    ],
    "example": "",
    "distractors": [
      "DVD光盘",
      "额外的",
      "足球运动员；橄榄球运动员"
    ]
  },
  {
    "word": "department store",
    "speakText": "department store",
    "spelling": "departmentstore",
    "ipa": "/dəˈpɑrtmənt ˌstɔr/",
    "pos": "n",
    "zh": "百货公司",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "department store"
    ],
    "example": "",
    "distractors": [
      "DVD播放器",
      "眼睛",
      "给；为"
    ]
  },
  {
    "word": "describe",
    "speakText": "describe",
    "spelling": "describe",
    "ipa": "/dəˈskraɪb/",
    "pos": "v",
    "zh": "描述；形容",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "describe"
    ],
    "example": "",
    "distractors": [
      "每个的",
      "脸",
      "外国的；在国外的"
    ]
  },
  {
    "word": "desert",
    "speakText": "desert",
    "spelling": "desert",
    "ipa": "/dəˈzərt/",
    "pos": "n",
    "zh": "抛弃；遗弃",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "desert"
    ],
    "example": "",
    "distractors": [
      "耳朵",
      "事实",
      "森林；一丛"
    ]
  },
  {
    "word": "desk",
    "speakText": "desk",
    "spelling": "desk",
    "ipa": "/dɛsk/",
    "pos": "n",
    "zh": "课桌；办公桌",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "desk"
    ],
    "example": "",
    "distractors": [
      "提早的",
      "工厂",
      "记不起来"
    ]
  },
  {
    "word": "dessert",
    "speakText": "dessert",
    "spelling": "dessert",
    "ipa": "/dəˈzərt/",
    "pos": "n",
    "zh": "饭后；甜点",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dessert"
    ],
    "example": "",
    "distractors": [
      "挣得",
      "失败",
      "餐叉；叉"
    ]
  },
  {
    "word": "detail",
    "speakText": "detail",
    "spelling": "detail",
    "ipa": "/dəˈteɪl, ˈdiˌteɪl/",
    "pos": "n",
    "zh": "细节；详情",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "detail"
    ],
    "example": "",
    "distractors": [
      "耳环",
      "公正的",
      "形状；体型"
    ]
  },
  {
    "word": "diary",
    "speakText": "diary",
    "spelling": "diary",
    "ipa": "/ˈdaɪ(ə)ri/",
    "pos": "n",
    "zh": "记事簿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "diary"
    ],
    "example": "",
    "distractors": [
      "容易地",
      "落下",
      "未受困的；未受缚的"
    ]
  },
  {
    "word": "dictionary",
    "speakText": "dictionary",
    "spelling": "dictionary",
    "ipa": "/ˈdɪkʃəˌnɛri/",
    "pos": "n",
    "zh": "词典",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dictionary"
    ],
    "example": "",
    "distractors": [
      "东；东方",
      "家庭",
      "炸薯条"
    ]
  },
  {
    "word": "die",
    "speakText": "die",
    "spelling": "die",
    "ipa": "/daɪ/",
    "pos": "v",
    "zh": "死亡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "die"
    ],
    "example": "",
    "distractors": [
      "容易的；简单的",
      "著名的",
      "新鲜的"
    ]
  },
  {
    "word": "difference",
    "speakText": "difference",
    "spelling": "difference",
    "ipa": "/ˈdɪf(ə)rən(t)s/",
    "pos": "n",
    "zh": "差别",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "difference"
    ],
    "example": "",
    "distractors": [
      "吃",
      "风扇；粉丝",
      "冰箱"
    ]
  },
  {
    "word": "different",
    "speakText": "different",
    "spelling": "different",
    "ipa": "/ˈdɪf(ə)rənt/",
    "pos": "adj",
    "zh": "不同的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "different"
    ],
    "example": "",
    "distractors": [
      "蛋；卵",
      "非常棒的；荒唐的",
      "油炸的"
    ]
  },
  {
    "word": "difficult",
    "speakText": "difficult",
    "spelling": "difficult",
    "ipa": "/ˈdɪfəkəlt/",
    "pos": "adj",
    "zh": "困难的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "difficult"
    ],
    "example": "",
    "distractors": [
      "用电的",
      "远",
      "朋友"
    ]
  },
  {
    "word": "digital",
    "speakText": "digital",
    "spelling": "digital",
    "ipa": "/ˈdɪdʒədl/",
    "pos": "adj",
    "zh": "数字的；数码的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "digital"
    ],
    "example": "",
    "distractors": [
      "电",
      "农场",
      "友好的"
    ]
  },
  {
    "word": "digital camera",
    "speakText": "digital camera",
    "spelling": "digitalcamera",
    "ipa": "/ˌdɪdʒɪtl ˈkæmərə/",
    "pos": "n",
    "zh": "数码相机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "digital camera"
    ],
    "example": "",
    "distractors": [
      "大象",
      "农场主；农民",
      "来自"
    ]
  },
  {
    "word": "dining room",
    "speakText": "dining room",
    "spelling": "diningroom",
    "ipa": "/ˈdaɪnɪŋ ˌrum, ˈdaɪnɪŋ ˌrʊm/",
    "pos": "n",
    "zh": "餐厅",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dining room"
    ],
    "example": "",
    "distractors": [
      "电梯；起重机",
      "时尚",
      "前面；正面"
    ]
  },
  {
    "word": "dinner",
    "speakText": "dinner",
    "spelling": "dinner",
    "ipa": "/ˈdɪnər/",
    "pos": "n",
    "zh": "正餐；晚餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dinner"
    ],
    "example": "",
    "distractors": [
      "其他",
      "快的",
      "水果"
    ]
  },
  {
    "word": "dinosaur",
    "speakText": "dinosaur",
    "spelling": "dinosaur",
    "ipa": "/ˈdaɪnəˌsɔr/",
    "pos": "n",
    "zh": "恐龙；落伍的人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dinosaur"
    ],
    "example": "",
    "distractors": [
      "电子邮件",
      "快餐",
      "装满的；挤满人的"
    ]
  },
  {
    "word": "diploma",
    "speakText": "diploma",
    "spelling": "diploma",
    "ipa": "/dəˈploʊmə/",
    "pos": "n",
    "zh": "毕业文凭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "diploma"
    ],
    "example": "",
    "distractors": [
      "空的；空白的",
      "脂肪",
      "乐趣"
    ]
  },
  {
    "word": "dirty",
    "speakText": "dirty",
    "spelling": "dirty",
    "ipa": "/ˈdərdi/",
    "pos": "adj",
    "zh": "肮脏的；邋遢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dirty"
    ],
    "example": "",
    "distractors": [
      "末尾",
      "父亲",
      "滑稽的"
    ]
  },
  {
    "word": "disco",
    "speakText": "disco",
    "spelling": "disco",
    "ipa": "/ˈdɪskoʊ/",
    "pos": "n",
    "zh": "迪斯科舞会",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "disco"
    ],
    "example": "",
    "distractors": [
      "发动机；火车头",
      "最喜欢的",
      "家具"
    ]
  },
  {
    "word": "discount",
    "speakText": "discount",
    "spelling": "discount",
    "ipa": "/ˈdɪsˌkaʊnt/",
    "pos": "n",
    "zh": "折扣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "discount"
    ],
    "example": "",
    "distractors": [
      "工程师",
      "触摸",
      "更远"
    ]
  },
  {
    "word": "discuss",
    "speakText": "discuss",
    "spelling": "discuss",
    "ipa": "/dəˈskəs/",
    "pos": "v",
    "zh": "讨论",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "discuss"
    ],
    "example": "",
    "distractors": [
      "享受",
      "节日；艺术节",
      "将来"
    ]
  },
  {
    "word": "dish",
    "speakText": "dish",
    "spelling": "dish",
    "ipa": "/dɪʃ/",
    "pos": "n",
    "zh": "盘子；一盘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dish"
    ],
    "example": "",
    "distractors": [
      "足够的",
      "极少的",
      "游戏"
    ]
  },
  {
    "word": "do",
    "speakText": "do",
    "spelling": "do",
    "ipa": "/du/",
    "pos": "av / v",
    "zh": "做",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "do"
    ],
    "example": "",
    "distractors": [
      "进来；进去",
      "田地；牧场",
      "车库；加油站"
    ]
  },
  {
    "word": "doctor",
    "speakText": "doctor",
    "spelling": "doctor",
    "ipa": "/ˈdɑktər/",
    "pos": "n",
    "zh": "医生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "doctor"
    ],
    "example": "",
    "distractors": [
      "入口；进入",
      "锉刀；指甲锉",
      "花园"
    ]
  },
  {
    "word": "document",
    "speakText": "document",
    "spelling": "document",
    "ipa": "/ˈdɑkjəmənt/",
    "pos": "n",
    "zh": "文件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "document"
    ],
    "example": "",
    "distractors": [
      "信封",
      "装满",
      "大蒜"
    ]
  },
  {
    "word": "dog",
    "speakText": "dog",
    "spelling": "dog",
    "ipa": "/dɔɡ/",
    "pos": "n",
    "zh": "狗",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dog"
    ],
    "example": "",
    "distractors": [
      "橡皮擦；黑板擦",
      "填写",
      "气体；燃气"
    ]
  },
  {
    "word": "doll",
    "speakText": "doll",
    "spelling": "doll",
    "ipa": "/dɑl/",
    "pos": "n",
    "zh": "玩偶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "doll"
    ],
    "example": "",
    "distractors": [
      "尤其",
      "电影",
      "加油站"
    ]
  },
  {
    "word": "dollar",
    "speakText": "dollar",
    "spelling": "dollar",
    "ipa": "/ˈdɑlər/",
    "pos": "n",
    "zh": "元；美元",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dollar"
    ],
    "example": "",
    "distractors": [
      "欧元",
      "最后的；最终的",
      "大门；城门"
    ]
  },
  {
    "word": "dolphin",
    "speakText": "dolphin",
    "spelling": "dolphin",
    "ipa": "/ˈdɑlfən/",
    "pos": "n",
    "zh": "海豚",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dolphin"
    ],
    "example": "",
    "distractors": [
      "竟然",
      "最后；终于",
      "地理学"
    ]
  },
  {
    "word": "door",
    "speakText": "door",
    "spelling": "door",
    "ipa": "/dɔr/",
    "pos": "n",
    "zh": "门；门道",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "door"
    ],
    "example": "",
    "distractors": [
      "晚上",
      "偶然发现",
      "得到；收到"
    ]
  },
  {
    "word": "dot",
    "speakText": "dot",
    "spelling": "dot",
    "ipa": "/dɑt/",
    "pos": "n",
    "zh": "小圆点",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dot"
    ],
    "example": "",
    "distractors": [
      "在任何时候；从来",
      "偶然发现",
      "变健康"
    ]
  },
  {
    "word": "double",
    "speakText": "double",
    "spelling": "double",
    "ipa": "/ˈdəb(ə)l/",
    "pos": "adj",
    "zh": "供两者用的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "double"
    ],
    "example": "",
    "distractors": [
      "每一个",
      "罚款",
      "得到；收到"
    ]
  },
  {
    "word": "down",
    "speakText": "down",
    "spelling": "down",
    "ipa": "/daʊn/",
    "pos": "adv / prep",
    "zh": "向下；向楼下",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "down"
    ],
    "example": "",
    "distractors": [
      "每个人",
      "手指",
      "得到；收到"
    ]
  },
  {
    "word": "download",
    "speakText": "download",
    "spelling": "download",
    "ipa": "/ˈdaʊnˌloʊd/",
    "pos": "n / v",
    "zh": "下载；下载的文件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "download"
    ],
    "example": "",
    "distractors": [
      "每个人",
      "结束；完成",
      "穿戴"
    ]
  },
  {
    "word": "downstairs",
    "speakText": "downstairs",
    "spelling": "downstairs",
    "ipa": "/ˌdaʊnˈsterz/",
    "pos": "adv",
    "zh": "在楼下；往楼下",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "downstairs"
    ],
    "example": "",
    "distractors": [
      "各处",
      "第一的；最早的",
      "女孩子"
    ]
  },
  {
    "word": "Dr",
    "speakText": "Dr",
    "spelling": "dr",
    "ipa": "/ˈdɑːktər/",
    "pos": "n",
    "zh": "医生；博士",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Dr"
    ],
    "example": "",
    "distractors": [
      "确切地",
      "名字",
      "女朋友；女性朋友"
    ]
  },
  {
    "word": "draw",
    "speakText": "draw",
    "spelling": "draw",
    "ipa": "/drɔ/",
    "pos": "v",
    "zh": "画；描绘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "draw"
    ],
    "example": "",
    "distractors": [
      "考试",
      "鱼",
      "给"
    ]
  },
  {
    "word": "drawer",
    "speakText": "drawer",
    "spelling": "drawer",
    "ipa": "/drɔr/",
    "pos": "n",
    "zh": "抽屉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drawer"
    ],
    "example": "",
    "distractors": [
      "例子",
      "捕鱼；钓鱼",
      "高兴的"
    ]
  },
  {
    "word": "drawing",
    "speakText": "drawing",
    "spelling": "drawing",
    "ipa": "/ˈdrɔɪŋ, ˈdrɑɪŋ/",
    "pos": "n",
    "zh": "图画",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drawing"
    ],
    "example": "",
    "distractors": [
      "极好的；极高的",
      "健康的",
      "玻璃"
    ]
  },
  {
    "word": "dream",
    "speakText": "dream",
    "spelling": "dream",
    "ipa": "/drim/",
    "pos": "n / v",
    "zh": "梦",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dream"
    ],
    "example": "",
    "distractors": [
      "除外",
      "水平的；平坦的",
      "玻璃"
    ]
  },
  {
    "word": "dress",
    "speakText": "dress",
    "spelling": "dress",
    "ipa": "/drɛs/",
    "pos": "n / v",
    "zh": "连衣裙；穿衣服",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dress"
    ],
    "example": "",
    "distractors": [
      "兴奋的；激动的",
      "飞",
      "手套"
    ]
  },
  {
    "word": "dressed",
    "speakText": "dressed",
    "spelling": "dressed",
    "ipa": "/drɛs/",
    "pos": "adj",
    "zh": "连衣裙；连衣裙的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dressed"
    ],
    "example": "",
    "distractors": [
      "令人激动的；使人兴奋的",
      "地面",
      "去"
    ]
  },
  {
    "word": "drink",
    "speakText": "drink",
    "spelling": "drink",
    "ipa": "/drɪŋk/",
    "pos": "n / v",
    "zh": "喝",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drink"
    ],
    "example": "",
    "distractors": [
      "借口",
      "花",
      "球门；球篮"
    ]
  },
  {
    "word": "drive",
    "speakText": "drive",
    "spelling": "drive",
    "ipa": "/draɪv/",
    "pos": "v",
    "zh": "开；开车送",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drive"
    ],
    "example": "",
    "distractors": [
      "锻炼",
      "飞；消失",
      "黄金"
    ]
  },
  {
    "word": "driver",
    "speakText": "driver",
    "spelling": "driver",
    "ipa": "/ˈdraɪvər/",
    "pos": "n",
    "zh": "驾驶员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "driver"
    ],
    "example": "",
    "distractors": [
      "展览",
      "雾",
      "金色的"
    ]
  },
  {
    "word": "driving licence",
    "speakText": "driving licence",
    "spelling": "drivinglicence",
    "ipa": "/ˈdraɪvɪŋ laɪsn(t)s/",
    "pos": "n",
    "zh": "驾驶执照",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "driving licence"
    ],
    "example": "",
    "distractors": [
      "出口；安全门",
      "有雾的",
      "高尔夫球"
    ]
  },
  {
    "word": "drugstore",
    "speakText": "drugstore",
    "spelling": "drugstore",
    "ipa": "/ˈdrəɡˌstɔr/",
    "pos": "n",
    "zh": "药房",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drugstore"
    ],
    "example": "",
    "distractors": [
      "昂贵的；奢侈的",
      "跟随",
      "好的；愉快的"
    ]
  },
  {
    "word": "drum",
    "speakText": "drum",
    "spelling": "drum",
    "ipa": "/drəm/",
    "pos": "n",
    "zh": "鼓",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "drum"
    ],
    "example": "",
    "distractors": [
      "解释；说明",
      "食物；养料",
      "下午好；再见"
    ]
  },
  {
    "word": "dry",
    "speakText": "dry",
    "spelling": "dry",
    "ipa": "/draɪ/",
    "pos": "adj / v",
    "zh": "干的；干燥的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "dry"
    ],
    "example": "",
    "distractors": [
      "勘察",
      "脚",
      "再见"
    ]
  },
  {
    "word": "duck",
    "speakText": "duck",
    "spelling": "duck",
    "ipa": "/dək/",
    "pos": "n",
    "zh": "鸭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "duck"
    ],
    "example": "",
    "distractors": [
      "探险者",
      "足球运动；橄榄球运动",
      "晚上好；再见"
    ]
  },
  {
    "word": "during",
    "speakText": "during",
    "spelling": "during",
    "ipa": "/ˈdʊrɪŋ/",
    "pos": "prep",
    "zh": "在期间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "during"
    ],
    "example": "",
    "distractors": [
      "额外的",
      "足球运动员；橄榄球运动员",
      "好看的"
    ]
  },
  {
    "word": "DVD",
    "speakText": "DVD",
    "spelling": "dvd",
    "ipa": "/ˌdiː viː ˈdiː/",
    "pos": "n",
    "zh": "DVD光盘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "DVD"
    ],
    "example": "",
    "distractors": [
      "眼睛",
      "给；为",
      "早上好；再见"
    ]
  },
  {
    "word": "DVD player",
    "speakText": "DVD player",
    "spelling": "dvdplayer",
    "ipa": "/ˌdiː viː ˈdiː ˈpleɪər/",
    "pos": "n",
    "zh": "DVD播放器",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "DVD player"
    ],
    "example": "",
    "distractors": [
      "脸",
      "外国的；在国外的",
      "晚安"
    ]
  },
  {
    "word": "each",
    "speakText": "each",
    "spelling": "each",
    "ipa": "/itʃ/",
    "pos": "det / pron",
    "zh": "每个的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "each"
    ],
    "example": "",
    "distractors": [
      "事实",
      "森林；一丛",
      "去"
    ]
  },
  {
    "word": "ear",
    "speakText": "ear",
    "spelling": "ear",
    "ipa": "/ɪr/",
    "pos": "n",
    "zh": "耳朵",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ear"
    ],
    "example": "",
    "distractors": [
      "工厂",
      "记不起来",
      "等级"
    ]
  },
  {
    "word": "early",
    "speakText": "early",
    "spelling": "early",
    "ipa": "/ˈərli/",
    "pos": "adj / adv",
    "zh": "提早的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "early"
    ],
    "example": "",
    "distractors": [
      "失败",
      "餐叉；叉",
      "克"
    ]
  },
  {
    "word": "earn",
    "speakText": "earn",
    "spelling": "earn",
    "ipa": "/ərn/",
    "pos": "v",
    "zh": "挣得",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "earn"
    ],
    "example": "",
    "distractors": [
      "公正的",
      "形状；体型",
      "孙子；孙女"
    ]
  },
  {
    "word": "earring",
    "speakText": "earring",
    "spelling": "earring",
    "ipa": "/ˈɪrˌrɪŋ/",
    "pos": "n",
    "zh": "耳环",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "earring"
    ],
    "example": "",
    "distractors": [
      "落下",
      "未受困的；未受缚的",
      "外公；爷爷"
    ]
  },
  {
    "word": "easily",
    "speakText": "easily",
    "spelling": "easily",
    "ipa": "/ˈiz(ə)li/",
    "pos": "adv",
    "zh": "容易地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "easily"
    ],
    "example": "",
    "distractors": [
      "家庭",
      "炸薯条",
      "孙女；外孙女"
    ]
  },
  {
    "word": "east",
    "speakText": "east",
    "spelling": "east",
    "ipa": "/ist/",
    "pos": "n, adj / adv",
    "zh": "东；东方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "east"
    ],
    "example": "",
    "distractors": [
      "著名的",
      "新鲜的",
      "外祖父；祖父"
    ]
  },
  {
    "word": "easy",
    "speakText": "easy",
    "spelling": "easy",
    "ipa": "/ˈizi/",
    "pos": "adj",
    "zh": "容易的；简单的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "easy"
    ],
    "example": "",
    "distractors": [
      "风扇；粉丝",
      "冰箱",
      "外婆；奶奶"
    ]
  },
  {
    "word": "eat",
    "speakText": "eat",
    "spelling": "eat",
    "ipa": "/it/",
    "pos": "v",
    "zh": "吃",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eat"
    ],
    "example": "",
    "distractors": [
      "非常棒的；荒唐的",
      "油炸的",
      "外婆；奶奶"
    ]
  },
  {
    "word": "egg",
    "speakText": "egg",
    "spelling": "egg",
    "ipa": "/ɛɡ/",
    "pos": "n",
    "zh": "蛋；卵",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "egg"
    ],
    "example": "",
    "distractors": [
      "远",
      "朋友",
      "外公；爷爷"
    ]
  },
  {
    "word": "electric",
    "speakText": "electric",
    "spelling": "electric",
    "ipa": "/əˈlɛktrɪk/",
    "pos": "adj",
    "zh": "用电的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "electric"
    ],
    "example": "",
    "distractors": [
      "农场",
      "友好的",
      "外祖父；外祖母"
    ]
  },
  {
    "word": "electricity",
    "speakText": "electricity",
    "spelling": "electricity",
    "ipa": "/əˌlɛkˈtrɪsədi/",
    "pos": "n",
    "zh": "电",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "electricity"
    ],
    "example": "",
    "distractors": [
      "农场主；农民",
      "来自",
      "孙子；外孙"
    ]
  },
  {
    "word": "elephant",
    "speakText": "elephant",
    "spelling": "elephant",
    "ipa": "/ˈɛləfənt/",
    "pos": "n",
    "zh": "大象",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "elephant"
    ],
    "example": "",
    "distractors": [
      "时尚",
      "前面；正面",
      "外婆；奶奶"
    ]
  },
  {
    "word": "elevator",
    "speakText": "elevator",
    "spelling": "elevator",
    "ipa": "/ˈɛləˌveɪdər/",
    "pos": "n",
    "zh": "电梯；起重机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "elevator"
    ],
    "example": "",
    "distractors": [
      "快的",
      "水果",
      "葡萄"
    ]
  },
  {
    "word": "else",
    "speakText": "else",
    "spelling": "else",
    "ipa": "/ɛls/",
    "pos": "adv",
    "zh": "其他",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "else"
    ],
    "example": "",
    "distractors": [
      "快餐",
      "装满的；挤满人的",
      "草"
    ]
  },
  {
    "word": "email",
    "speakText": "email",
    "spelling": "email",
    "ipa": "/ˈiˌmeɪl/",
    "pos": "n / v",
    "zh": "电子邮件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "email"
    ],
    "example": "",
    "distractors": [
      "脂肪",
      "乐趣",
      "大的；高的"
    ]
  },
  {
    "word": "empty",
    "speakText": "empty",
    "spelling": "empty",
    "ipa": "/ˈɛm(p)ti/",
    "pos": "adj",
    "zh": "空的；空白的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "empty"
    ],
    "example": "",
    "distractors": [
      "父亲",
      "滑稽的",
      "绿色的"
    ]
  },
  {
    "word": "end",
    "speakText": "end",
    "spelling": "end",
    "ipa": "/ɛnd/",
    "pos": "v / n",
    "zh": "末尾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "end"
    ],
    "example": "",
    "distractors": [
      "最喜欢的",
      "家具",
      "灰色的；苍白的"
    ]
  },
  {
    "word": "engine",
    "speakText": "engine",
    "spelling": "engine",
    "ipa": "/ˈɛndʒən/",
    "pos": "n",
    "zh": "发动机；火车头",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "engine"
    ],
    "example": "",
    "distractors": [
      "触摸",
      "更远",
      "烤炙的"
    ]
  },
  {
    "word": "engineer",
    "speakText": "engineer",
    "spelling": "engineer",
    "ipa": "/ˌɛndʒəˈnɪr/",
    "pos": "n",
    "zh": "工程师",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "engineer"
    ],
    "example": "",
    "distractors": [
      "节日；艺术节",
      "将来",
      "杂货店"
    ]
  },
  {
    "word": "enjoy",
    "speakText": "enjoy",
    "spelling": "enjoy",
    "ipa": "/ɪnˈdʒɔɪ, ɛnˈdʒɔɪ/",
    "pos": "v",
    "zh": "享受",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "enjoy"
    ],
    "example": "",
    "distractors": [
      "极少的",
      "游戏",
      "群"
    ]
  },
  {
    "word": "enough",
    "speakText": "enough",
    "spelling": "enough",
    "ipa": "/ɪˈnəf/",
    "pos": "adv, det / pron",
    "zh": "足够的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "enough"
    ],
    "example": "",
    "distractors": [
      "田地；牧场",
      "车库；加油站",
      "生长"
    ]
  },
  {
    "word": "enter",
    "speakText": "enter",
    "spelling": "enter",
    "ipa": "/ˈɛn(t)ər/",
    "pos": "v",
    "zh": "进来；进去",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "enter"
    ],
    "example": "",
    "distractors": [
      "锉刀；指甲锉",
      "花园",
      "生长"
    ]
  },
  {
    "word": "entrance",
    "speakText": "entrance",
    "spelling": "entrance",
    "ipa": "/ˈɛntrən(t)s/",
    "pos": "n",
    "zh": "入口；进入",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "entrance"
    ],
    "example": "",
    "distractors": [
      "装满",
      "大蒜",
      "猜测"
    ]
  },
  {
    "word": "envelope",
    "speakText": "envelope",
    "spelling": "envelope",
    "ipa": "/ˈɛnvəˌloʊp, ˈɑnvəˌloʊp/",
    "pos": "n",
    "zh": "信封",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "envelope"
    ],
    "example": "",
    "distractors": [
      "填写",
      "气体；燃气",
      "客人；访客"
    ]
  },
  {
    "word": "eraser",
    "speakText": "eraser",
    "spelling": "eraser",
    "ipa": "/əˈreɪsər/",
    "pos": "n",
    "zh": "橡皮擦；黑板擦",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eraser"
    ],
    "example": "",
    "distractors": [
      "电影",
      "加油站",
      "宾馆；家庭旅馆"
    ]
  },
  {
    "word": "especially",
    "speakText": "especially",
    "spelling": "especially",
    "ipa": "/əsˈpɛʃəli, ɛsˈpɛʃəli/",
    "pos": "adv",
    "zh": "尤其",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "especially"
    ],
    "example": "",
    "distractors": [
      "最后的；最终的",
      "大门；城门",
      "向导；导游"
    ]
  },
  {
    "word": "euro",
    "speakText": "euro",
    "spelling": "euro",
    "ipa": "/ˈjʊroʊ/",
    "pos": "n",
    "zh": "欧元",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "euro"
    ],
    "example": "",
    "distractors": [
      "最后；终于",
      "地理学",
      "指南"
    ]
  },
  {
    "word": "even",
    "speakText": "even",
    "spelling": "even",
    "ipa": "/ˈivən/",
    "pos": "adv",
    "zh": "竟然",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "even"
    ],
    "example": "",
    "distractors": [
      "偶然发现",
      "得到；收到",
      "吉他"
    ]
  },
  {
    "word": "evening",
    "speakText": "evening",
    "spelling": "evening",
    "ipa": "/ˈivnɪŋ/",
    "pos": "n",
    "zh": "晚上",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "evening"
    ],
    "example": "",
    "distractors": [
      "偶然发现",
      "变健康",
      "家伙"
    ]
  },
  {
    "word": "ever",
    "speakText": "ever",
    "spelling": "ever",
    "ipa": "/ˈɛvər/",
    "pos": "adv",
    "zh": "在任何时候；从来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ever"
    ],
    "example": "",
    "distractors": [
      "罚款",
      "得到；收到",
      "体操馆；体操"
    ]
  },
  {
    "word": "every",
    "speakText": "every",
    "spelling": "every",
    "ipa": "/ˈɛv(ə)ri/",
    "pos": "det",
    "zh": "每一个",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "every"
    ],
    "example": "",
    "distractors": [
      "手指",
      "得到；收到",
      "头发；毛"
    ]
  },
  {
    "word": "everybody",
    "speakText": "everybody",
    "spelling": "everybody",
    "ipa": "/ˈɛvribədi, ˈɛvriˌbɑdi/",
    "pos": "pron",
    "zh": "每个人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "everybody"
    ],
    "example": "",
    "distractors": [
      "结束；完成",
      "穿戴",
      "一半"
    ]
  },
  {
    "word": "everyone",
    "speakText": "everyone",
    "spelling": "everyone",
    "ipa": "/ˈevriwʌn/",
    "pos": "pron",
    "zh": "每个人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "everyone"
    ],
    "example": "",
    "distractors": [
      "火",
      "礼物",
      "半价"
    ]
  },
  {
    "word": "everything",
    "speakText": "everything",
    "spelling": "everything",
    "ipa": "/ˈɛv(ə)riˌθɪŋ/",
    "pos": "pron",
    "zh": "每件东西；每件事",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "everything"
    ],
    "example": "",
    "distractors": [
      "第一的；最早的",
      "女孩子",
      "门厅；走廊"
    ]
  },
  {
    "word": "everywhere",
    "speakText": "everywhere",
    "spelling": "everywhere",
    "ipa": "/ˈɛvriˌwɛr/",
    "pos": "adv",
    "zh": "各处",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "everywhere"
    ],
    "example": "",
    "distractors": [
      "名字",
      "女朋友；女性朋友",
      "手"
    ]
  },
  {
    "word": "exactly",
    "speakText": "exactly",
    "spelling": "exactly",
    "ipa": "/ɪɡˈzæk(t)li, ɛɡˈzæk(t)li/",
    "pos": "adv",
    "zh": "确切地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "exactly"
    ],
    "example": "",
    "distractors": [
      "鱼",
      "给",
      "手提包；臭骂"
    ]
  },
  {
    "word": "examination/exam",
    "speakText": "examination",
    "spelling": "examination",
    "ipa": "/ɪɡˌzæməˈneɪʃən/",
    "pos": "n",
    "zh": "考试",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "examination"
    ],
    "example": "",
    "distractors": [
      "捕鱼；钓鱼",
      "高兴的",
      "发生"
    ]
  },
  {
    "word": "example",
    "speakText": "example",
    "spelling": "example",
    "ipa": "/ɪɡˈzæmpəl, ɛɡˈzæmpəl/",
    "pos": "n",
    "zh": "例子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "example"
    ],
    "example": "",
    "distractors": [
      "健康的",
      "玻璃",
      "快乐的"
    ]
  },
  {
    "word": "excellent",
    "speakText": "excellent",
    "spelling": "excellent",
    "ipa": "/ˈɛks(ə)lənt/",
    "pos": "adj",
    "zh": "极好的；极高的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "excellent"
    ],
    "example": "",
    "distractors": [
      "水平的；平坦的",
      "玻璃",
      "困难的"
    ]
  },
  {
    "word": "except",
    "speakText": "except",
    "spelling": "except",
    "ipa": "/ɪkˈsɛpt, ɛkˈsɛpt/",
    "pos": "conj / prep",
    "zh": "除外",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "except"
    ],
    "example": "",
    "distractors": [
      "飞",
      "手套",
      "帽子"
    ]
  },
  {
    "word": "excited",
    "speakText": "excited",
    "spelling": "excited",
    "ipa": "/ɪkˈsaɪdəd, ɛkˈsaɪdəd/",
    "pos": "adj",
    "zh": "兴奋的；激动的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "excited"
    ],
    "example": "",
    "distractors": [
      "地面",
      "去",
      "憎恶；恨"
    ]
  },
  {
    "word": "exciting",
    "speakText": "exciting",
    "spelling": "exciting",
    "ipa": "/ɪkˈsaɪdɪŋ, ɛkˈsaɪdɪŋ/",
    "pos": "adj",
    "zh": "令人激动的；使人兴奋的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "exciting"
    ],
    "example": "",
    "distractors": [
      "花",
      "球门；球篮",
      "有；吃喝"
    ]
  },
  {
    "word": "excuse",
    "speakText": "excuse",
    "spelling": "excuse",
    "ipa": "/ɪkˈskjus, ɛkˈskjus/",
    "pos": "v",
    "zh": "借口",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "excuse"
    ],
    "example": "",
    "distractors": [
      "飞；消失",
      "黄金",
      "必须；不得不"
    ]
  },
  {
    "word": "exercise",
    "speakText": "exercise",
    "spelling": "exercise",
    "ipa": "/ˈɛksərˌsaɪz/",
    "pos": "n / v",
    "zh": "锻炼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "exercise"
    ],
    "example": "",
    "distractors": [
      "雾",
      "金色的",
      "必须；不得不"
    ]
  },
  {
    "word": "exhibition",
    "speakText": "exhibition",
    "spelling": "exhibition",
    "ipa": "/ˌɛksəˈbɪʃən/",
    "pos": "n",
    "zh": "展览",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "exhibition"
    ],
    "example": "",
    "distractors": [
      "有雾的",
      "高尔夫球",
      "他"
    ]
  },
  {
    "word": "exit",
    "speakText": "exit",
    "spelling": "exit",
    "ipa": "/ˈɛɡzət, ˈɛksət/",
    "pos": "n",
    "zh": "出口；安全门",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "exit"
    ],
    "example": "",
    "distractors": [
      "跟随",
      "好的；愉快的",
      "头"
    ]
  },
  {
    "word": "expensive",
    "speakText": "expensive",
    "spelling": "expensive",
    "ipa": "/ɪkˈspɛn(t)sɪv/",
    "pos": "adj",
    "zh": "昂贵的；奢侈的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "expensive"
    ],
    "example": "",
    "distractors": [
      "食物；养料",
      "下午好；再见",
      "帮助"
    ]
  },
  {
    "word": "explain",
    "speakText": "explain",
    "spelling": "explain",
    "ipa": "/ɪkˈspleɪn/",
    "pos": "v",
    "zh": "解释；说明",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "explain"
    ],
    "example": "",
    "distractors": [
      "脚",
      "再见",
      "她"
    ]
  },
  {
    "word": "explore",
    "speakText": "explore",
    "spelling": "explore",
    "ipa": "/ɪkˈsplɔr/",
    "pos": "v",
    "zh": "勘察",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "explore"
    ],
    "example": "",
    "distractors": [
      "足球运动；橄榄球运动",
      "晚上好；再见",
      "在这里"
    ]
  },
  {
    "word": "explorer",
    "speakText": "explorer",
    "spelling": "explorer",
    "ipa": "/ɪkˈsplɔrər/",
    "pos": "n",
    "zh": "探险者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "explorer"
    ],
    "example": "",
    "distractors": [
      "足球运动员；橄榄球运动员",
      "好看的",
      "她的"
    ]
  },
  {
    "word": "extra",
    "speakText": "extra",
    "spelling": "extra",
    "ipa": "/ˈɛkstrə/",
    "pos": "adj",
    "zh": "额外的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "extra"
    ],
    "example": "",
    "distractors": [
      "给；为",
      "早上好；再见",
      "她自己"
    ]
  },
  {
    "word": "eye",
    "speakText": "eye",
    "spelling": "eye",
    "ipa": "/aɪ/",
    "pos": "n",
    "zh": "眼睛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eye"
    ],
    "example": "",
    "distractors": [
      "外国的；在国外的",
      "晚安",
      "嗨"
    ]
  },
  {
    "word": "face",
    "speakText": "face",
    "spelling": "face",
    "ipa": "/feɪs/",
    "pos": "n",
    "zh": "脸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "face"
    ],
    "example": "",
    "distractors": [
      "森林；一丛",
      "去",
      "嗨"
    ]
  },
  {
    "word": "fact",
    "speakText": "fact",
    "spelling": "fact",
    "ipa": "/fæk(t)/",
    "pos": "n",
    "zh": "事实",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fact"
    ],
    "example": "",
    "distractors": [
      "记不起来",
      "等级",
      "高的"
    ]
  },
  {
    "word": "factory",
    "speakText": "factory",
    "spelling": "factory",
    "ipa": "/ˈfækt(ə)ri/",
    "pos": "n",
    "zh": "工厂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "factory"
    ],
    "example": "",
    "distractors": [
      "餐叉；叉",
      "克",
      "小山"
    ]
  },
  {
    "word": "fail",
    "speakText": "fail",
    "spelling": "fail",
    "ipa": "/feɪl/",
    "pos": "v",
    "zh": "失败",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fail"
    ],
    "example": "",
    "distractors": [
      "形状；体型",
      "孙子；孙女",
      "他；它"
    ]
  },
  {
    "word": "fair",
    "speakText": "fair",
    "spelling": "fair",
    "ipa": "/fɛr/",
    "pos": "adj",
    "zh": "公正的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fair"
    ],
    "example": "",
    "distractors": [
      "未受困的；未受缚的",
      "外公；爷爷",
      "他自己"
    ]
  },
  {
    "word": "fall",
    "speakText": "fall",
    "spelling": "fall",
    "ipa": "/fɔl/",
    "pos": "v / n",
    "zh": "落下；秋天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fall"
    ],
    "example": "",
    "distractors": [
      "炸薯条",
      "孙女；外孙女",
      "嘻哈音乐"
    ]
  },
  {
    "word": "family",
    "speakText": "family",
    "spelling": "family",
    "ipa": "/ˈfæm(ə)li/",
    "pos": "n",
    "zh": "家庭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "family"
    ],
    "example": "",
    "distractors": [
      "新鲜的",
      "外祖父；祖父",
      "他的"
    ]
  },
  {
    "word": "famous",
    "speakText": "famous",
    "spelling": "famous",
    "ipa": "/ˈfeɪməs/",
    "pos": "adj",
    "zh": "著名的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "famous"
    ],
    "example": "",
    "distractors": [
      "冰箱",
      "外婆；奶奶",
      "历史学"
    ]
  },
  {
    "word": "fan",
    "speakText": "fan",
    "spelling": "fan",
    "ipa": "/fæn/",
    "pos": "n",
    "zh": "风扇；粉丝",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fan"
    ],
    "example": "",
    "distractors": [
      "油炸的",
      "外婆；奶奶",
      "击"
    ]
  },
  {
    "word": "fantastic",
    "speakText": "fantastic",
    "spelling": "fantastic",
    "ipa": "/fænˈtæstɪk/",
    "pos": "adj",
    "zh": "非常棒的；荒唐的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fantastic"
    ],
    "example": "",
    "distractors": [
      "朋友",
      "外公；爷爷",
      "业余爱好"
    ]
  },
  {
    "word": "far",
    "speakText": "far",
    "spelling": "far",
    "ipa": "/fɑr/",
    "pos": "adv",
    "zh": "远",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "far"
    ],
    "example": "",
    "distractors": [
      "友好的",
      "外祖父；外祖母",
      "曲棍球"
    ]
  },
  {
    "word": "farm",
    "speakText": "farm",
    "spelling": "farm",
    "ipa": "/fɑrm/",
    "pos": "n",
    "zh": "农场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "farm"
    ],
    "example": "",
    "distractors": [
      "来自",
      "孙子；外孙",
      "握着；抱着"
    ]
  },
  {
    "word": "farmer",
    "speakText": "farmer",
    "spelling": "farmer",
    "ipa": "/ˈfɑrmər/",
    "pos": "n",
    "zh": "农场主；农民",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "farmer"
    ],
    "example": "",
    "distractors": [
      "前面；正面",
      "外婆；奶奶",
      "假期"
    ]
  },
  {
    "word": "fashion",
    "speakText": "fashion",
    "spelling": "fashion",
    "ipa": "/ˈfæʃən/",
    "pos": "n",
    "zh": "时尚",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fashion"
    ],
    "example": "",
    "distractors": [
      "水果",
      "葡萄",
      "家"
    ]
  },
  {
    "word": "fast",
    "speakText": "fast",
    "spelling": "fast",
    "ipa": "/fæst/",
    "pos": "adj / adv",
    "zh": "快的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fast"
    ],
    "example": "",
    "distractors": [
      "装满的；挤满人的",
      "草",
      "家庭作业；准备工作"
    ]
  },
  {
    "word": "fast food",
    "speakText": "fast food",
    "spelling": "fastfood",
    "ipa": "/ˈfæst ˌfud/",
    "pos": "n",
    "zh": "快餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fast food"
    ],
    "example": "",
    "distractors": [
      "乐趣",
      "大的；高的",
      "头痛"
    ]
  },
  {
    "word": "fat",
    "speakText": "fat",
    "spelling": "fat",
    "ipa": "/fæt/",
    "pos": "adj",
    "zh": "脂肪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fat"
    ],
    "example": "",
    "distractors": [
      "滑稽的",
      "绿色的",
      "校长"
    ]
  },
  {
    "word": "father",
    "speakText": "father",
    "spelling": "father",
    "ipa": "/ˈfɑðər/",
    "pos": "n",
    "zh": "父亲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "father"
    ],
    "example": "",
    "distractors": [
      "家具",
      "灰色的；苍白的",
      "健康状况"
    ]
  },
  {
    "word": "favourite",
    "speakText": "favourite",
    "spelling": "favourite",
    "ipa": "/ˈfeɪv(ə)rət/",
    "pos": "adj",
    "zh": "最喜欢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "favourite"
    ],
    "example": "",
    "distractors": [
      "更远",
      "烤炙的",
      "健康的；茁壮的"
    ]
  },
  {
    "word": "feel",
    "speakText": "feel",
    "spelling": "feel",
    "ipa": "/fil/",
    "pos": "v",
    "zh": "触摸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "feel"
    ],
    "example": "",
    "distractors": [
      "将来",
      "杂货店",
      "听到"
    ]
  },
  {
    "word": "festival",
    "speakText": "festival",
    "spelling": "festival",
    "ipa": "/ˈfɛstəv(ə)l/",
    "pos": "n",
    "zh": "节日；艺术节",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "festival"
    ],
    "example": "",
    "distractors": [
      "游戏",
      "群",
      "心脏"
    ]
  },
  {
    "word": "few",
    "speakText": "few",
    "spelling": "few",
    "ipa": "/fju/",
    "pos": "det / adj",
    "zh": "极少的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "few"
    ],
    "example": "",
    "distractors": [
      "车库；加油站",
      "生长",
      "暖气设备；供暖系统"
    ]
  },
  {
    "word": "field",
    "speakText": "field",
    "spelling": "field",
    "ipa": "/fild/",
    "pos": "n",
    "zh": "田地；牧场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "field"
    ],
    "example": "",
    "distractors": [
      "花园",
      "生长",
      "重的"
    ]
  },
  {
    "word": "file",
    "speakText": "file",
    "spelling": "file",
    "ipa": "/faɪl/",
    "pos": "n",
    "zh": "锉刀；指甲锉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "file"
    ],
    "example": "",
    "distractors": [
      "大蒜",
      "猜测",
      "直升机"
    ]
  },
  {
    "word": "fill",
    "speakText": "fill",
    "spelling": "fill",
    "ipa": "/fɪl/",
    "pos": "v",
    "zh": "装满",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fill"
    ],
    "example": "",
    "distractors": [
      "气体；燃气",
      "客人；访客",
      "问候；你好"
    ]
  },
  {
    "word": "fill in",
    "speakText": "fill in",
    "spelling": "fillin",
    "ipa": "/fɪl ɪn/",
    "pos": "phrasal verb",
    "zh": "填写",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fill in"
    ],
    "example": "",
    "distractors": [
      "加油站",
      "宾馆；家庭旅馆",
      "蜂蜜；甜蜜"
    ]
  },
  {
    "word": "film",
    "speakText": "film",
    "spelling": "film",
    "ipa": "/fɪlm/",
    "pos": "n / v",
    "zh": "电影",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "film"
    ],
    "example": "",
    "distractors": [
      "大门；城门",
      "向导；导游",
      "希望"
    ]
  },
  {
    "word": "final",
    "speakText": "final",
    "spelling": "final",
    "ipa": "/ˈfaɪn(ə)l/",
    "pos": "adj",
    "zh": "最后的；最终的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "final"
    ],
    "example": "",
    "distractors": [
      "地理学",
      "指南",
      "令人恐惧的；骇人听闻的"
    ]
  },
  {
    "word": "finally",
    "speakText": "finally",
    "spelling": "finally",
    "ipa": "/ˈfaɪnəli/",
    "pos": "adv",
    "zh": "最后；终于",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "finally"
    ],
    "example": "",
    "distractors": [
      "得到；收到",
      "吉他",
      "马"
    ]
  },
  {
    "word": "find",
    "speakText": "find",
    "spelling": "find",
    "ipa": "/faɪnd/",
    "pos": "v",
    "zh": "偶然发现",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "find"
    ],
    "example": "",
    "distractors": [
      "变健康",
      "家伙",
      "医院"
    ]
  },
  {
    "word": "find out",
    "speakText": "find out",
    "spelling": "findout",
    "ipa": "/faɪnd/",
    "pos": "phrasal verb",
    "zh": "偶然发现",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "find out"
    ],
    "example": "",
    "distractors": [
      "得到；收到",
      "体操馆；体操",
      "热的；感觉热的"
    ]
  },
  {
    "word": "fine",
    "speakText": "fine",
    "spelling": "fine",
    "ipa": "/faɪn/",
    "pos": "adj",
    "zh": "罚款",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fine"
    ],
    "example": "",
    "distractors": [
      "得到；收到",
      "头发；毛",
      "旅馆"
    ]
  },
  {
    "word": "finger",
    "speakText": "finger",
    "spelling": "finger",
    "ipa": "/ˈfɪŋɡər/",
    "pos": "n",
    "zh": "手指",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "finger"
    ],
    "example": "",
    "distractors": [
      "穿戴",
      "一半",
      "小时"
    ]
  },
  {
    "word": "finish",
    "speakText": "finish",
    "spelling": "finish",
    "ipa": "/ˈfɪnəʃ/",
    "pos": "v",
    "zh": "结束；完成",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "finish"
    ],
    "example": "",
    "distractors": [
      "礼物",
      "半价",
      "房子"
    ]
  },
  {
    "word": "fire",
    "speakText": "fire",
    "spelling": "fire",
    "ipa": "/ˈfaɪ(ə)r/",
    "pos": "n",
    "zh": "火",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fire"
    ],
    "example": "",
    "distractors": [
      "女孩子",
      "门厅；走廊",
      "家庭主妇"
    ]
  },
  {
    "word": "first",
    "speakText": "first",
    "spelling": "first",
    "ipa": "/fərst/",
    "pos": "adv / adj",
    "zh": "第一的；最早的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "first"
    ],
    "example": "",
    "distractors": [
      "女朋友；女性朋友",
      "手",
      "如何"
    ]
  },
  {
    "word": "first name",
    "speakText": "first name",
    "spelling": "firstname",
    "ipa": "/ˌfərs(t) ˈneɪm/",
    "pos": "n",
    "zh": "名字",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "first name"
    ],
    "example": "",
    "distractors": [
      "给",
      "手提包；臭骂",
      "然而"
    ]
  },
  {
    "word": "fish",
    "speakText": "fish",
    "spelling": "fish",
    "ipa": "/fɪʃ/",
    "pos": "n / v",
    "zh": "鱼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fish"
    ],
    "example": "",
    "distractors": [
      "高兴的",
      "发生",
      "饥饿的"
    ]
  },
  {
    "word": "fishing",
    "speakText": "fishing",
    "spelling": "fishing",
    "ipa": "/ˈfɪʃɪŋ/",
    "pos": "n",
    "zh": "捕鱼；钓鱼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fishing"
    ],
    "example": "",
    "distractors": [
      "玻璃",
      "快乐的",
      "急忙"
    ]
  },
  {
    "word": "fit",
    "speakText": "fit",
    "spelling": "fit",
    "ipa": "/fɪt/",
    "pos": "adj",
    "zh": "健康的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fit"
    ],
    "example": "",
    "distractors": [
      "玻璃",
      "困难的",
      "使受伤"
    ]
  },
  {
    "word": "flat",
    "speakText": "flat",
    "spelling": "flat",
    "ipa": "/flæt/",
    "pos": "n / adj",
    "zh": "公寓；平坦的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "flat"
    ],
    "example": "",
    "distractors": [
      "手套",
      "帽子",
      "丈夫"
    ]
  },
  {
    "word": "flight",
    "speakText": "flight",
    "spelling": "flight",
    "ipa": "/flaɪt/",
    "pos": "n",
    "zh": "飞",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "flight"
    ],
    "example": "",
    "distractors": [
      "去",
      "憎恶；恨",
      "冰；冰层"
    ]
  },
  {
    "word": "floor",
    "speakText": "floor",
    "spelling": "floor",
    "ipa": "/flɔr/",
    "pos": "n",
    "zh": "地面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "floor"
    ],
    "example": "",
    "distractors": [
      "球门；球篮",
      "有；吃喝",
      "冰激凌；一份冰激凌"
    ]
  },
  {
    "word": "flower",
    "speakText": "flower",
    "spelling": "flower",
    "ipa": "/ˈflaʊər/",
    "pos": "n",
    "zh": "花",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "flower"
    ],
    "example": "",
    "distractors": [
      "黄金",
      "必须；不得不",
      "溜冰"
    ]
  },
  {
    "word": "fly",
    "speakText": "fly",
    "spelling": "fly",
    "ipa": "/flaɪ/",
    "pos": "v",
    "zh": "飞；消失",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fly"
    ],
    "example": "",
    "distractors": [
      "金色的",
      "必须；不得不",
      "身份"
    ]
  },
  {
    "word": "fog",
    "speakText": "fog",
    "spelling": "fog",
    "ipa": "/fɔɡ, fɑɡ/",
    "pos": "n",
    "zh": "雾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fog"
    ],
    "example": "",
    "distractors": [
      "高尔夫球",
      "他",
      "身份证；证件"
    ]
  },
  {
    "word": "foggy",
    "speakText": "foggy",
    "spelling": "foggy",
    "ipa": "/ˈfɔɡi, ˈfɑɡi/",
    "pos": "adj",
    "zh": "有雾的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "foggy"
    ],
    "example": "",
    "distractors": [
      "好的；愉快的",
      "头",
      "主意"
    ]
  },
  {
    "word": "follow",
    "speakText": "follow",
    "spelling": "follow",
    "ipa": "/ˈfɑloʊ/",
    "pos": "v",
    "zh": "跟随",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "follow"
    ],
    "example": "",
    "distractors": [
      "下午好；再见",
      "帮助",
      "辨认；鉴定"
    ]
  },
  {
    "word": "food",
    "speakText": "food",
    "spelling": "food",
    "ipa": "/fud/",
    "pos": "n",
    "zh": "食物；养料",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "food"
    ],
    "example": "",
    "distractors": [
      "再见",
      "她",
      "假如"
    ]
  },
  {
    "word": "foot",
    "speakText": "foot",
    "spelling": "foot",
    "ipa": "/fʊt/",
    "pos": "n",
    "zh": "脚",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "foot"
    ],
    "example": "",
    "distractors": [
      "晚上好；再见",
      "在这里",
      "有病的"
    ]
  },
  {
    "word": "football",
    "speakText": "football",
    "spelling": "football",
    "ipa": "/ˈfʊtˌbɔl/",
    "pos": "n",
    "zh": "足球运动；橄榄球运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "football"
    ],
    "example": "",
    "distractors": [
      "好看的",
      "她的",
      "立刻"
    ]
  },
  {
    "word": "footballer",
    "speakText": "footballer",
    "spelling": "footballer",
    "ipa": "/ˈfʊtˌbɔlər/",
    "pos": "n",
    "zh": "足球运动员；橄榄球运动员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "footballer"
    ],
    "example": "",
    "distractors": [
      "早上好；再见",
      "她自己",
      "重要的"
    ]
  },
  {
    "word": "for",
    "speakText": "for",
    "spelling": "for",
    "ipa": "/fɔr, fər/",
    "pos": "prep",
    "zh": "给；为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "for"
    ],
    "example": "",
    "distractors": [
      "晚安",
      "嗨",
      "改善"
    ]
  },
  {
    "word": "foreign",
    "speakText": "foreign",
    "spelling": "foreign",
    "ipa": "/ˈfɔrən, ˈfɑrən/",
    "pos": "adj",
    "zh": "外国的；在国外的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "foreign"
    ],
    "example": "",
    "distractors": [
      "去",
      "嗨",
      "在里；在上"
    ]
  },
  {
    "word": "forest",
    "speakText": "forest",
    "spelling": "forest",
    "ipa": "/ˈfɔrəst, ˈfɑrəst/",
    "pos": "n",
    "zh": "森林；一丛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "forest"
    ],
    "example": "",
    "distractors": [
      "等级",
      "高的",
      "包括"
    ]
  },
  {
    "word": "forget",
    "speakText": "forget",
    "spelling": "forget",
    "ipa": "/fərˈɡɛt/",
    "pos": "v",
    "zh": "记不起来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "forget"
    ],
    "example": "",
    "distractors": [
      "克",
      "小山",
      "包括"
    ]
  },
  {
    "word": "fork",
    "speakText": "fork",
    "spelling": "fork",
    "ipa": "/fɔrk/",
    "pos": "n",
    "zh": "餐叉；叉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fork"
    ],
    "example": "",
    "distractors": [
      "孙子；孙女",
      "他；它",
      "室内的"
    ]
  },
  {
    "word": "form",
    "speakText": "form",
    "spelling": "form",
    "ipa": "/fɔrm/",
    "pos": "n",
    "zh": "形状；体型",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "form"
    ],
    "example": "",
    "distractors": [
      "外公；爷爷",
      "他自己",
      "往室内；在室内"
    ]
  },
  {
    "word": "free",
    "speakText": "free",
    "spelling": "free",
    "ipa": "/fri/",
    "pos": "adj / adv",
    "zh": "未受困的；未受缚的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "free"
    ],
    "example": "",
    "distractors": [
      "孙女；外孙女",
      "嘻哈音乐",
      "消息"
    ]
  },
  {
    "word": "French fries",
    "speakText": "French fries",
    "spelling": "frenchfries",
    "ipa": "/ˌfrentʃ ˈfraɪz/",
    "pos": "n",
    "zh": "炸薯条",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "French fries"
    ],
    "example": "",
    "distractors": [
      "外祖父；祖父",
      "他的",
      "在……前面"
    ]
  },
  {
    "word": "fresh",
    "speakText": "fresh",
    "spelling": "fresh",
    "ipa": "/frɛʃ/",
    "pos": "adj",
    "zh": "新鲜的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fresh"
    ],
    "example": "",
    "distractors": [
      "外婆；奶奶",
      "历史学",
      "昆虫；爬虫"
    ]
  },
  {
    "word": "fridge",
    "speakText": "fridge",
    "spelling": "fridge",
    "ipa": "/frɪdʒ/",
    "pos": "n",
    "zh": "冰箱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fridge"
    ],
    "example": "",
    "distractors": [
      "外婆；奶奶",
      "击",
      "里面"
    ]
  },
  {
    "word": "fried",
    "speakText": "fried",
    "spelling": "fried",
    "ipa": "/fraɪd/",
    "pos": "adj",
    "zh": "油炸的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fried"
    ],
    "example": "",
    "distractors": [
      "外公；爷爷",
      "业余爱好",
      "作为替代"
    ]
  },
  {
    "word": "friend",
    "speakText": "friend",
    "spelling": "friend",
    "ipa": "/frɛnd/",
    "pos": "n",
    "zh": "朋友",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "friend"
    ],
    "example": "",
    "distractors": [
      "外祖父；外祖母",
      "曲棍球",
      "教导"
    ]
  },
  {
    "word": "friendly",
    "speakText": "friendly",
    "spelling": "friendly",
    "ipa": "/ˈfrɛn(d)li/",
    "pos": "adj",
    "zh": "友好的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "friendly"
    ],
    "example": "",
    "distractors": [
      "孙子；外孙",
      "握着；抱着",
      "器械"
    ]
  },
  {
    "word": "from",
    "speakText": "from",
    "spelling": "from",
    "ipa": "/frəm/",
    "pos": "prep",
    "zh": "来自",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "from"
    ],
    "example": "",
    "distractors": [
      "外婆；奶奶",
      "假期",
      "感兴趣的"
    ]
  },
  {
    "word": "front",
    "speakText": "front",
    "spelling": "front",
    "ipa": "/frənt/",
    "pos": "n",
    "zh": "前面；正面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "front"
    ],
    "example": "",
    "distractors": [
      "葡萄",
      "家",
      "有趣的"
    ]
  },
  {
    "word": "fruit",
    "speakText": "fruit",
    "spelling": "fruit",
    "ipa": "/frut/",
    "pos": "n",
    "zh": "水果",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fruit"
    ],
    "example": "",
    "distractors": [
      "草",
      "家庭作业；准备工作",
      "国际的"
    ]
  },
  {
    "word": "full",
    "speakText": "full",
    "spelling": "full",
    "ipa": "/fʊl/",
    "pos": "adj",
    "zh": "装满的；挤满人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "full"
    ],
    "example": "",
    "distractors": [
      "大的；高的",
      "头痛",
      "互联网"
    ]
  },
  {
    "word": "fun",
    "speakText": "fun",
    "spelling": "fun",
    "ipa": "/fən/",
    "pos": "adj / n",
    "zh": "乐趣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fun"
    ],
    "example": "",
    "distractors": [
      "绿色的",
      "校长",
      "到里"
    ]
  },
  {
    "word": "funny",
    "speakText": "funny",
    "spelling": "funny",
    "ipa": "/ˈfəni/",
    "pos": "adj",
    "zh": "滑稽的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "funny"
    ],
    "example": "",
    "distractors": [
      "灰色的；苍白的",
      "健康状况",
      "邀请"
    ]
  },
  {
    "word": "furniture",
    "speakText": "furniture",
    "spelling": "furniture",
    "ipa": "/ˈfərnətʃər/",
    "pos": "n",
    "zh": "家具",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "furniture"
    ],
    "example": "",
    "distractors": [
      "烤炙的",
      "健康的；茁壮的",
      "邀请"
    ]
  },
  {
    "word": "further",
    "speakText": "further",
    "spelling": "further",
    "ipa": "/ˈfərðər/",
    "pos": "adj",
    "zh": "更远",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "further"
    ],
    "example": "",
    "distractors": [
      "杂货店",
      "听到",
      "岛屿"
    ]
  },
  {
    "word": "future",
    "speakText": "future",
    "spelling": "future",
    "ipa": "/ˈfjutʃər/",
    "pos": "n",
    "zh": "将来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "future"
    ],
    "example": "",
    "distractors": [
      "群",
      "心脏",
      "它；它是"
    ]
  },
  {
    "word": "game",
    "speakText": "game",
    "spelling": "game",
    "ipa": "/ɡeɪm/",
    "pos": "n",
    "zh": "游戏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "game"
    ],
    "example": "",
    "distractors": [
      "生长",
      "暖气设备；供暖系统",
      "它的"
    ]
  },
  {
    "word": "garage",
    "speakText": "garage",
    "spelling": "garage",
    "ipa": "/ɡəˈrɑʒ/",
    "pos": "n",
    "zh": "车库；加油站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "garage"
    ],
    "example": "",
    "distractors": [
      "生长",
      "重的",
      "它自己"
    ]
  },
  {
    "word": "garden",
    "speakText": "garden",
    "spelling": "garden",
    "ipa": "/ˈɡɑrdən/",
    "pos": "n",
    "zh": "花园",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "garden"
    ],
    "example": "",
    "distractors": [
      "猜测",
      "直升机",
      "夹克"
    ]
  },
  {
    "word": "garlic",
    "speakText": "garlic",
    "spelling": "garlic",
    "ipa": "/ˈɡɑrlɪk/",
    "pos": "n",
    "zh": "大蒜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "garlic"
    ],
    "example": "",
    "distractors": [
      "客人；访客",
      "问候；你好",
      "拥挤；堵塞"
    ]
  },
  {
    "word": "gas",
    "speakText": "gas",
    "spelling": "gas",
    "ipa": "/ɡæs/",
    "pos": "n",
    "zh": "气体；燃气",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gas"
    ],
    "example": "",
    "distractors": [
      "宾馆；家庭旅馆",
      "蜂蜜；甜蜜",
      "爵士乐；热情奔放"
    ]
  },
  {
    "word": "gas station",
    "speakText": "gas station",
    "spelling": "gasstation",
    "ipa": "/ˈɡæs steɪʃən/",
    "pos": "n",
    "zh": "加油站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gas station"
    ],
    "example": "",
    "distractors": [
      "向导；导游",
      "希望",
      "牛仔裤"
    ]
  },
  {
    "word": "gate",
    "speakText": "gate",
    "spelling": "gate",
    "ipa": "/ɡeɪt/",
    "pos": "n",
    "zh": "大门；城门",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gate"
    ],
    "example": "",
    "distractors": [
      "指南",
      "令人恐惧的；骇人听闻的",
      "珠宝"
    ]
  },
  {
    "word": "geography",
    "speakText": "geography",
    "spelling": "geography",
    "ipa": "/dʒiˈɑɡrəfi/",
    "pos": "n",
    "zh": "地理学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "geography"
    ],
    "example": "",
    "distractors": [
      "吉他",
      "马",
      "工作"
    ]
  },
  {
    "word": "get",
    "speakText": "get",
    "spelling": "get",
    "ipa": "/ɡɛt/",
    "pos": "v",
    "zh": "得到；收到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "get"
    ],
    "example": "",
    "distractors": [
      "家伙",
      "医院",
      "连接"
    ]
  },
  {
    "word": "get fit",
    "speakText": "get fit",
    "spelling": "getfit",
    "ipa": "/ɡet fɪt/",
    "pos": "v",
    "zh": "变健康",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "get fit"
    ],
    "example": "",
    "distractors": [
      "体操馆；体操",
      "热的；感觉热的",
      "新闻记者"
    ]
  },
  {
    "word": "get off",
    "speakText": "get off",
    "spelling": "getoff",
    "ipa": "/ɡɛt/",
    "pos": "phrasal verb",
    "zh": "得到；收到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "get off"
    ],
    "example": "",
    "distractors": [
      "头发；毛",
      "旅馆",
      "旅行"
    ]
  },
  {
    "word": "get on",
    "speakText": "get on",
    "spelling": "geton",
    "ipa": "/ɡɛt/",
    "pos": "phrasal verb",
    "zh": "得到；收到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "get on"
    ],
    "example": "",
    "distractors": [
      "一半",
      "小时",
      "果汁；蔬菜汁"
    ]
  },
  {
    "word": "get up",
    "speakText": "get up",
    "spelling": "getup",
    "ipa": "/ˈɡɛdəp/",
    "pos": "phrasal verb",
    "zh": "穿戴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "get up"
    ],
    "example": "",
    "distractors": [
      "半价",
      "房子",
      "跳"
    ]
  },
  {
    "word": "gift",
    "speakText": "gift",
    "spelling": "gift",
    "ipa": "/ɡɪft/",
    "pos": "n",
    "zh": "礼物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gift"
    ],
    "example": "",
    "distractors": [
      "门厅；走廊",
      "家庭主妇",
      "套头毛衣"
    ]
  },
  {
    "word": "girl",
    "speakText": "girl",
    "spelling": "girl",
    "ipa": "/ɡərl/",
    "pos": "n",
    "zh": "女孩子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "girl"
    ],
    "example": "",
    "distractors": [
      "手",
      "如何",
      "恰好"
    ]
  },
  {
    "word": "girlfriend",
    "speakText": "girlfriend",
    "spelling": "girlfriend",
    "ipa": "/ˈɡərlˌfrɛnd/",
    "pos": "n",
    "zh": "女朋友；女性朋友",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "girlfriend"
    ],
    "example": "",
    "distractors": [
      "手提包；臭骂",
      "然而",
      "使保持"
    ]
  },
  {
    "word": "give",
    "speakText": "give",
    "spelling": "give",
    "ipa": "/ɡɪv/",
    "pos": "v",
    "zh": "给",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "give"
    ],
    "example": "",
    "distractors": [
      "发生",
      "饥饿的",
      "钥匙"
    ]
  },
  {
    "word": "glad",
    "speakText": "glad",
    "spelling": "glad",
    "ipa": "/ɡlæd/",
    "pos": "adj",
    "zh": "高兴的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "glad"
    ],
    "example": "",
    "distractors": [
      "快乐的",
      "急忙",
      "键盘；乐器键盘"
    ]
  },
  {
    "word": "glass",
    "speakText": "glass",
    "spelling": "glass",
    "ipa": "/ɡlæs/",
    "pos": "n",
    "zh": "玻璃；玻璃杯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "glass"
    ],
    "example": "",
    "distractors": [
      "困难的",
      "使受伤",
      "踢"
    ]
  },
  {
    "word": "glasses",
    "speakText": "glasses",
    "spelling": "glasses",
    "ipa": "/ˈɡlæsəz/",
    "pos": "n pl",
    "zh": "眼镜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "glasses"
    ],
    "example": "",
    "distractors": [
      "帽子",
      "丈夫",
      "种类"
    ]
  },
  {
    "word": "glove",
    "speakText": "glove",
    "spelling": "glove",
    "ipa": "/ɡləv/",
    "pos": "n",
    "zh": "手套",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "glove"
    ],
    "example": "",
    "distractors": [
      "憎恶；恨",
      "冰；冰层",
      "国王"
    ]
  },
  {
    "word": "go",
    "speakText": "go",
    "spelling": "go",
    "ipa": "/ɡoʊ/",
    "pos": "v",
    "zh": "去",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "go"
    ],
    "example": "",
    "distractors": [
      "有；吃喝",
      "冰激凌；一份冰激凌",
      "亲吻"
    ]
  },
  {
    "word": "goal",
    "speakText": "goal",
    "spelling": "goal",
    "ipa": "/ɡoʊl/",
    "pos": "n",
    "zh": "球门；球篮",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "goal"
    ],
    "example": "",
    "distractors": [
      "必须；不得不",
      "溜冰",
      "成套工具"
    ]
  },
  {
    "word": "gold",
    "speakText": "gold",
    "spelling": "gold",
    "ipa": "/ɡoʊld/",
    "pos": "n / adj",
    "zh": "黄金",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gold"
    ],
    "example": "",
    "distractors": [
      "必须；不得不",
      "身份",
      "厨房"
    ]
  },
  {
    "word": "golden",
    "speakText": "golden",
    "spelling": "golden",
    "ipa": "/ˈɡoʊldən/",
    "pos": "adj",
    "zh": "金色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "golden"
    ],
    "example": "",
    "distractors": [
      "他",
      "身份证；证件",
      "风筝"
    ]
  },
  {
    "word": "golf",
    "speakText": "golf",
    "spelling": "golf",
    "ipa": "/ɡɔlf, ɡɑlf/",
    "pos": "n",
    "zh": "高尔夫球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "golf"
    ],
    "example": "",
    "distractors": [
      "头",
      "主意",
      "刀"
    ]
  },
  {
    "word": "good",
    "speakText": "good",
    "spelling": "good",
    "ipa": "/ɡʊd/",
    "pos": "adj",
    "zh": "好的；愉快的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good"
    ],
    "example": "",
    "distractors": [
      "帮助",
      "辨认；鉴定",
      "知道"
    ]
  },
  {
    "word": "good afternoon",
    "speakText": "good afternoon",
    "spelling": "goodafternoon",
    "ipa": "/ˌɡʊd ˌæftərˈnun/",
    "pos": "exclam",
    "zh": "下午好；再见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good afternoon"
    ],
    "example": "",
    "distractors": [
      "她",
      "假如",
      "湖"
    ]
  },
  {
    "word": "goodbye",
    "speakText": "goodbye",
    "spelling": "goodbye",
    "ipa": "/ˌɡʊdˈbaɪ/",
    "pos": "exclam",
    "zh": "再见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "goodbye"
    ],
    "example": "",
    "distractors": [
      "在这里",
      "有病的",
      "灯"
    ]
  },
  {
    "word": "good evening",
    "speakText": "good evening",
    "spelling": "goodevening",
    "ipa": "/ˌɡʊd ˈiv(ə)nɪŋ/",
    "pos": "exclam",
    "zh": "晚上好；再见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good evening"
    ],
    "example": "",
    "distractors": [
      "她的",
      "立刻",
      "语言"
    ]
  },
  {
    "word": "good-looking",
    "speakText": "good-looking",
    "spelling": "goodlooking",
    "ipa": "/ˌɡʊdˈlʊkɪŋ/",
    "pos": "adj",
    "zh": "好看的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good-looking"
    ],
    "example": "",
    "distractors": [
      "她自己",
      "重要的",
      "大的"
    ]
  },
  {
    "word": "good morning",
    "speakText": "good morning",
    "spelling": "goodmorning",
    "ipa": "/ˌɡʊd ˈmɔrnɪŋ/",
    "pos": "exclam",
    "zh": "早上好；再见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good morning"
    ],
    "example": "",
    "distractors": [
      "嗨",
      "改善",
      "最后的"
    ]
  },
  {
    "word": "good night",
    "speakText": "good night",
    "spelling": "goodnight",
    "ipa": "/ˌɡʊdˈnaɪt/",
    "pos": "exclam",
    "zh": "晚安",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "good night"
    ],
    "example": "",
    "distractors": [
      "嗨",
      "在里；在上",
      "晚的"
    ]
  },
  {
    "word": "go out",
    "speakText": "go out",
    "spelling": "goout",
    "ipa": "/ɡoʊ/",
    "pos": "phrasal verb",
    "zh": "去",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "go out"
    ],
    "example": "",
    "distractors": [
      "高的",
      "包括",
      "稍后"
    ]
  },
  {
    "word": "grade",
    "speakText": "grade",
    "spelling": "grade",
    "ipa": "/ɡreɪd/",
    "pos": "n",
    "zh": "等级",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grade"
    ],
    "example": "",
    "distractors": [
      "小山",
      "包括",
      "最新消息"
    ]
  },
  {
    "word": "gram(me)",
    "speakText": "gram",
    "spelling": "gram",
    "ipa": "/ɡræm/",
    "pos": "n",
    "zh": "克",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gram"
    ],
    "example": "",
    "distractors": [
      "他；它",
      "室内的",
      "笑"
    ]
  },
  {
    "word": "grandchild",
    "speakText": "grandchild",
    "spelling": "grandchild",
    "ipa": "/ˈɡræn(d)ˌtʃaɪld/",
    "pos": "n",
    "zh": "孙子；孙女",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandchild"
    ],
    "example": "",
    "distractors": [
      "他自己",
      "往室内；在室内",
      "懒惰的；懒洋洋的"
    ]
  },
  {
    "word": "grand(d)ad",
    "speakText": "grandad",
    "spelling": "grandad",
    "ipa": "/ˈɡrandad/",
    "pos": "n",
    "zh": "外公；爷爷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandad"
    ],
    "example": "",
    "distractors": [
      "嘻哈音乐",
      "消息",
      "学习"
    ]
  },
  {
    "word": "granddaughter",
    "speakText": "granddaughter",
    "spelling": "granddaughter",
    "ipa": "/ˈɡrænˌdɔdər/",
    "pos": "n",
    "zh": "孙女；外孙女",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "granddaughter"
    ],
    "example": "",
    "distractors": [
      "他的",
      "在……前面",
      "最小的；最少的"
    ]
  },
  {
    "word": "grandfather",
    "speakText": "grandfather",
    "spelling": "grandfather",
    "ipa": "/ˈɡræn(d)ˌfɑðər/",
    "pos": "n",
    "zh": "外祖父；祖父",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandfather"
    ],
    "example": "",
    "distractors": [
      "历史学",
      "昆虫；爬虫",
      "皮革；皮革的"
    ]
  },
  {
    "word": "grandma",
    "speakText": "grandma",
    "spelling": "grandma",
    "ipa": "/ˈɡræn(d)ˌmɑ/",
    "pos": "n",
    "zh": "外婆；奶奶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandma"
    ],
    "example": "",
    "distractors": [
      "击",
      "里面",
      "离开"
    ]
  },
  {
    "word": "grandmother",
    "speakText": "grandmother",
    "spelling": "grandmother",
    "ipa": "/ˈɡræn(d)ˌməðər/",
    "pos": "n",
    "zh": "外婆；奶奶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandmother"
    ],
    "example": "",
    "distractors": [
      "业余爱好",
      "作为替代",
      "左边"
    ]
  },
  {
    "word": "grandpa",
    "speakText": "grandpa",
    "spelling": "grandpa",
    "ipa": "/ˈɡræn(d)ˌpɑ/",
    "pos": "n",
    "zh": "外公；爷爷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandpa"
    ],
    "example": "",
    "distractors": [
      "曲棍球",
      "教导",
      "左边的"
    ]
  },
  {
    "word": "grandparent",
    "speakText": "grandparent",
    "spelling": "grandparent",
    "ipa": "/ˈɡræn(d)ˌpɛrənt/",
    "pos": "n",
    "zh": "外祖父；外祖母",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandparent"
    ],
    "example": "",
    "distractors": [
      "握着；抱着",
      "器械",
      "腿"
    ]
  },
  {
    "word": "grandson",
    "speakText": "grandson",
    "spelling": "grandson",
    "ipa": "/ˈɡræn(d)ˌsən/",
    "pos": "n",
    "zh": "孙子；外孙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grandson"
    ],
    "example": "",
    "distractors": [
      "假期",
      "感兴趣的",
      "柠檬；柠檬的"
    ]
  },
  {
    "word": "granny",
    "speakText": "granny",
    "spelling": "granny",
    "ipa": "/ˈɡræni/",
    "pos": "n",
    "zh": "外婆；奶奶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "granny"
    ],
    "example": "",
    "distractors": [
      "家",
      "有趣的",
      "柠檬汽水；柠檬汁饮料"
    ]
  },
  {
    "word": "grape",
    "speakText": "grape",
    "spelling": "grape",
    "ipa": "/ɡreɪp/",
    "pos": "n",
    "zh": "葡萄",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grape"
    ],
    "example": "",
    "distractors": [
      "家庭作业；准备工作",
      "国际的",
      "借出"
    ]
  },
  {
    "word": "grass",
    "speakText": "grass",
    "spelling": "grass",
    "ipa": "/ɡræs/",
    "pos": "n",
    "zh": "草",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grass"
    ],
    "example": "",
    "distractors": [
      "头痛",
      "互联网",
      "较少的"
    ]
  },
  {
    "word": "great",
    "speakText": "great",
    "spelling": "great",
    "ipa": "/ɡreɪt/",
    "pos": "adj",
    "zh": "大的；高的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "great"
    ],
    "example": "",
    "distractors": [
      "校长",
      "到里",
      "一节课"
    ]
  },
  {
    "word": "green",
    "speakText": "green",
    "spelling": "green",
    "ipa": "/ɡrin/",
    "pos": "adj",
    "zh": "绿色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "green"
    ],
    "example": "",
    "distractors": [
      "健康状况",
      "邀请",
      "允许"
    ]
  },
  {
    "word": "grey",
    "speakText": "grey",
    "spelling": "grey",
    "ipa": "/ɡreɪ/",
    "pos": "adj / n",
    "zh": "灰色的；苍白的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grey"
    ],
    "example": "",
    "distractors": [
      "健康的；茁壮的",
      "邀请",
      "信；字母"
    ]
  },
  {
    "word": "grilled",
    "speakText": "grilled",
    "spelling": "grilled",
    "ipa": "/ɡrɪld/",
    "pos": "adj",
    "zh": "烤炙的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grilled"
    ],
    "example": "",
    "distractors": [
      "听到",
      "岛屿",
      "水平的；平坦的"
    ]
  },
  {
    "word": "grocery store",
    "speakText": "grocery store",
    "spelling": "grocerystore",
    "ipa": "/ˈɡroʊsəri stɔːr/",
    "pos": "n",
    "zh": "杂货店",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grocery store"
    ],
    "example": "",
    "distractors": [
      "心脏",
      "它；它是",
      "图书馆；图书馆的"
    ]
  },
  {
    "word": "group",
    "speakText": "group",
    "spelling": "group",
    "ipa": "/ɡrup/",
    "pos": "n",
    "zh": "群",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "group"
    ],
    "example": "",
    "distractors": [
      "暖气设备；供暖系统",
      "它的",
      "许可证"
    ]
  },
  {
    "word": "grow",
    "speakText": "grow",
    "spelling": "grow",
    "ipa": "/ɡroʊ/",
    "pos": "v",
    "zh": "生长",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grow"
    ],
    "example": "",
    "distractors": [
      "重的",
      "它自己",
      "小憩"
    ]
  },
  {
    "word": "grow up",
    "speakText": "grow up",
    "spelling": "growup",
    "ipa": "/ɡroʊ/",
    "pos": "phrasal verb",
    "zh": "生长",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "grow up"
    ],
    "example": "",
    "distractors": [
      "直升机",
      "夹克",
      "生命；生存"
    ]
  },
  {
    "word": "guess",
    "speakText": "guess",
    "spelling": "guess",
    "ipa": "/ɡɛs/",
    "pos": "v",
    "zh": "猜测",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guess"
    ],
    "example": "",
    "distractors": [
      "问候；你好",
      "拥挤；堵塞",
      "拿起；抱起"
    ]
  },
  {
    "word": "guest",
    "speakText": "guest",
    "spelling": "guest",
    "ipa": "/ɡɛst/",
    "pos": "n",
    "zh": "客人；访客",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guest"
    ],
    "example": "",
    "distractors": [
      "蜂蜜；甜蜜",
      "爵士乐；热情奔放",
      "光亮；光线"
    ]
  },
  {
    "word": "guest-house",
    "speakText": "guest-house",
    "spelling": "guesthouse",
    "ipa": "/ˈɡest haʊs/",
    "pos": "n",
    "zh": "宾馆；家庭旅馆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guest-house"
    ],
    "example": "",
    "distractors": [
      "希望",
      "牛仔裤",
      "喜欢；像"
    ]
  },
  {
    "word": "guide",
    "speakText": "guide",
    "spelling": "guide",
    "ipa": "/ɡaɪd/",
    "pos": "n",
    "zh": "向导；导游",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guide"
    ],
    "example": "",
    "distractors": [
      "令人恐惧的；骇人听闻的",
      "珠宝",
      "线；纹"
    ]
  },
  {
    "word": "guidebook",
    "speakText": "guidebook",
    "spelling": "guidebook",
    "ipa": "/ˈɡaɪdˌbʊk/",
    "pos": "n",
    "zh": "指南",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guidebook"
    ],
    "example": "",
    "distractors": [
      "马",
      "工作",
      "狮子"
    ]
  },
  {
    "word": "guitar",
    "speakText": "guitar",
    "spelling": "guitar",
    "ipa": "/ɡəˈtɑr/",
    "pos": "n",
    "zh": "吉他",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guitar"
    ],
    "example": "",
    "distractors": [
      "医院",
      "连接",
      "名单；清单"
    ]
  },
  {
    "word": "guy",
    "speakText": "guy",
    "spelling": "guy",
    "ipa": "/ɡaɪ/",
    "pos": "n",
    "zh": "家伙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "guy"
    ],
    "example": "",
    "distractors": [
      "热的；感觉热的",
      "新闻记者",
      "听"
    ]
  },
  {
    "word": "gym",
    "speakText": "gym",
    "spelling": "gym",
    "ipa": "/dʒɪm/",
    "pos": "n",
    "zh": "体操馆；体操",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "gym"
    ],
    "example": "",
    "distractors": [
      "旅馆",
      "旅行",
      "升；一升容量的"
    ]
  },
  {
    "word": "hair",
    "speakText": "hair",
    "spelling": "hair",
    "ipa": "/hɛr/",
    "pos": "n",
    "zh": "头发；毛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hair"
    ],
    "example": "",
    "distractors": [
      "小时",
      "果汁；蔬菜汁",
      "小的"
    ]
  },
  {
    "word": "half",
    "speakText": "half",
    "spelling": "half",
    "ipa": "/hæf/",
    "pos": "det, n / pron",
    "zh": "一半",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "half"
    ],
    "example": "",
    "distractors": [
      "房子",
      "跳",
      "过"
    ]
  },
  {
    "word": "half-price",
    "speakText": "half-price",
    "spelling": "halfprice",
    "ipa": "/ˌhæf ˈpraɪs/",
    "pos": "adj",
    "zh": "半价",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "half-price"
    ],
    "example": "",
    "distractors": [
      "家庭主妇",
      "套头毛衣",
      "起居室"
    ]
  },
  {
    "word": "hall",
    "speakText": "hall",
    "spelling": "hall",
    "ipa": "/hɔl/",
    "pos": "n",
    "zh": "门厅；走廊",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hall"
    ],
    "example": "",
    "distractors": [
      "如何",
      "恰好",
      "长的"
    ]
  },
  {
    "word": "hand",
    "speakText": "hand",
    "spelling": "hand",
    "ipa": "/hænd/",
    "pos": "n",
    "zh": "手",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hand"
    ],
    "example": "",
    "distractors": [
      "然而",
      "使保持",
      "看"
    ]
  },
  {
    "word": "handbag",
    "speakText": "handbag",
    "spelling": "handbag",
    "ipa": "/ˈhæn(d)ˌbæɡ/",
    "pos": "n",
    "zh": "手提包；臭骂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "handbag"
    ],
    "example": "",
    "distractors": [
      "饥饿的",
      "钥匙",
      "看"
    ]
  },
  {
    "word": "happen",
    "speakText": "happen",
    "spelling": "happen",
    "ipa": "/ˈhæpən/",
    "pos": "v",
    "zh": "发生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "happen"
    ],
    "example": "",
    "distractors": [
      "急忙",
      "键盘；乐器键盘",
      "看"
    ]
  },
  {
    "word": "happy",
    "speakText": "happy",
    "spelling": "happy",
    "ipa": "/ˈhæpi/",
    "pos": "adj",
    "zh": "快乐的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "happy"
    ],
    "example": "",
    "distractors": [
      "使受伤",
      "踢",
      "看"
    ]
  },
  {
    "word": "hard",
    "speakText": "hard",
    "spelling": "hard",
    "ipa": "/hɑrd/",
    "pos": "adj / adv",
    "zh": "困难的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hard"
    ],
    "example": "",
    "distractors": [
      "丈夫",
      "种类",
      "留神观察"
    ]
  },
  {
    "word": "hat",
    "speakText": "hat",
    "spelling": "hat",
    "ipa": "/hæt/",
    "pos": "n",
    "zh": "帽子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hat"
    ],
    "example": "",
    "distractors": [
      "冰；冰层",
      "国王",
      "卡车"
    ]
  },
  {
    "word": "hate",
    "speakText": "hate",
    "spelling": "hate",
    "ipa": "/heɪt/",
    "pos": "v",
    "zh": "憎恶；恨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hate"
    ],
    "example": "",
    "distractors": [
      "冰激凌；一份冰激凌",
      "亲吻",
      "丢失；弄丢"
    ]
  },
  {
    "word": "have",
    "speakText": "have",
    "spelling": "have",
    "ipa": "/hæv, (h)əv, (ə)v/",
    "pos": "av / v",
    "zh": "有；吃喝",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "have"
    ],
    "example": "",
    "distractors": [
      "溜冰",
      "成套工具",
      "遗失的；走失的"
    ]
  },
  {
    "word": "have got to",
    "speakText": "have got to",
    "spelling": "havegotto",
    "ipa": "/hæv ɡɑːt tuː/",
    "pos": "mv",
    "zh": "必须；不得不",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "have got to"
    ],
    "example": "",
    "distractors": [
      "身份",
      "厨房",
      "很多"
    ]
  },
  {
    "word": "have to",
    "speakText": "have to",
    "spelling": "haveto",
    "ipa": "/hæv tuː/",
    "pos": "mv",
    "zh": "必须；不得不",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "have to"
    ],
    "example": "",
    "distractors": [
      "身份证；证件",
      "风筝",
      "声音巨大的；大声的"
    ]
  },
  {
    "word": "he",
    "speakText": "he",
    "spelling": "he",
    "ipa": "/hiː/",
    "pos": "pron",
    "zh": "他",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "he"
    ],
    "example": "",
    "distractors": [
      "主意",
      "刀",
      "爱；喜欢"
    ]
  },
  {
    "word": "head",
    "speakText": "head",
    "spelling": "head",
    "ipa": "/hɛd/",
    "pos": "n",
    "zh": "头",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "head"
    ],
    "example": "",
    "distractors": [
      "辨认；鉴定",
      "知道",
      "美丽的；可爱的"
    ]
  },
  {
    "word": "help",
    "speakText": "help",
    "spelling": "help",
    "ipa": "/hɛlp/",
    "pos": "v",
    "zh": "帮助",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "help"
    ],
    "example": "",
    "distractors": [
      "假如",
      "湖",
      "低的；低矮的"
    ]
  },
  {
    "word": "her",
    "speakText": "her",
    "spelling": "her",
    "ipa": "/hər, (h)ər/",
    "pos": "det / pron",
    "zh": "她",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "her"
    ],
    "example": "",
    "distractors": [
      "有病的",
      "灯",
      "运气"
    ]
  },
  {
    "word": "here",
    "speakText": "here",
    "spelling": "here",
    "ipa": "/hɪr/",
    "pos": "adv",
    "zh": "在这里",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "here"
    ],
    "example": "",
    "distractors": [
      "立刻",
      "语言",
      "幸运的"
    ]
  },
  {
    "word": "hers",
    "speakText": "hers",
    "spelling": "hers",
    "ipa": "/hərz/",
    "pos": "pron",
    "zh": "她的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hers"
    ],
    "example": "",
    "distractors": [
      "重要的",
      "大的",
      "行李"
    ]
  },
  {
    "word": "herself",
    "speakText": "herself",
    "spelling": "herself",
    "ipa": "/hərˈsɛlf, (h)ərˈsɛlf/",
    "pos": "pron",
    "zh": "她自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "herself"
    ],
    "example": "",
    "distractors": [
      "改善",
      "最后的",
      "午餐"
    ]
  },
  {
    "word": "hey",
    "speakText": "hey",
    "spelling": "hey",
    "ipa": "/heɪ/",
    "pos": "exclam",
    "zh": "嗨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hey"
    ],
    "example": "",
    "distractors": [
      "在里；在上",
      "晚的",
      "午餐时间"
    ]
  },
  {
    "word": "hi",
    "speakText": "hi",
    "spelling": "hi",
    "ipa": "/haɪ/",
    "pos": "exclam",
    "zh": "嗨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hi"
    ],
    "example": "",
    "distractors": [
      "包括",
      "稍后",
      "机器"
    ]
  },
  {
    "word": "high",
    "speakText": "high",
    "spelling": "high",
    "ipa": "/haɪ/",
    "pos": "adj",
    "zh": "高的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "high"
    ],
    "example": "",
    "distractors": [
      "包括",
      "最新消息",
      "生气的；发疯的"
    ]
  },
  {
    "word": "hill",
    "speakText": "hill",
    "spelling": "hill",
    "ipa": "/hɪl/",
    "pos": "n",
    "zh": "小山",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hill"
    ],
    "example": "",
    "distractors": [
      "室内的",
      "笑",
      "杂志"
    ]
  },
  {
    "word": "him",
    "speakText": "him",
    "spelling": "him",
    "ipa": "/hɪm, ɪm/",
    "pos": "pron",
    "zh": "他；它",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "him"
    ],
    "example": "",
    "distractors": [
      "往室内；在室内",
      "懒惰的；懒洋洋的",
      "邮递"
    ]
  },
  {
    "word": "himself",
    "speakText": "himself",
    "spelling": "himself",
    "ipa": "/hɪmˈsɛlf, ɪmˈsɛlf/",
    "pos": "pron",
    "zh": "他自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "himself"
    ],
    "example": "",
    "distractors": [
      "消息",
      "学习",
      "主菜"
    ]
  },
  {
    "word": "hip hop",
    "speakText": "hip hop",
    "spelling": "hiphop",
    "ipa": "/ˈhɪp hɑːp/",
    "pos": "n",
    "zh": "嘻哈音乐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hip hop"
    ],
    "example": "",
    "distractors": [
      "在……前面",
      "最小的；最少的",
      "制作；使得"
    ]
  },
  {
    "word": "his",
    "speakText": "his",
    "spelling": "his",
    "ipa": "/hɪz, ɪz/",
    "pos": "det / pron",
    "zh": "他的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "his"
    ],
    "example": "",
    "distractors": [
      "昆虫；爬虫",
      "皮革；皮革的",
      "化妆品"
    ]
  },
  {
    "word": "history",
    "speakText": "history",
    "spelling": "history",
    "ipa": "/ˈhɪst(ə)ri/",
    "pos": "n",
    "zh": "历史学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "history"
    ],
    "example": "",
    "distractors": [
      "里面",
      "离开",
      "男人"
    ]
  },
  {
    "word": "hit",
    "speakText": "hit",
    "spelling": "hit",
    "ipa": "/hɪt/",
    "pos": "v",
    "zh": "击",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hit"
    ],
    "example": "",
    "distractors": [
      "作为替代",
      "左边",
      "经理；经纪人"
    ]
  },
  {
    "word": "hobby",
    "speakText": "hobby",
    "spelling": "hobby",
    "ipa": "/ˈhɑbi/",
    "pos": "n",
    "zh": "业余爱好",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hobby"
    ],
    "example": "",
    "distractors": [
      "教导",
      "左边的",
      "芒果；芒果树"
    ]
  },
  {
    "word": "hockey",
    "speakText": "hockey",
    "spelling": "hockey",
    "ipa": "/ˈhɑki/",
    "pos": "n",
    "zh": "曲棍球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hockey"
    ],
    "example": "",
    "distractors": [
      "器械",
      "腿",
      "许多的"
    ]
  },
  {
    "word": "hold",
    "speakText": "hold",
    "spelling": "hold",
    "ipa": "/hoʊld/",
    "pos": "v",
    "zh": "握着；抱着",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hold"
    ],
    "example": "",
    "distractors": [
      "感兴趣的",
      "柠檬；柠檬的",
      "地图"
    ]
  },
  {
    "word": "holiday",
    "speakText": "holiday",
    "spelling": "holiday",
    "ipa": "/ˈhɑləˌdeɪ/",
    "pos": "n",
    "zh": "假期",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "holiday"
    ],
    "example": "",
    "distractors": [
      "有趣的",
      "柠檬汽水；柠檬汁饮料",
      "斑点；斑痕"
    ]
  },
  {
    "word": "home",
    "speakText": "home",
    "spelling": "home",
    "ipa": "/hoʊm/",
    "pos": "n / adv",
    "zh": "家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "home"
    ],
    "example": "",
    "distractors": [
      "国际的",
      "借出",
      "市场"
    ]
  },
  {
    "word": "homework",
    "speakText": "homework",
    "spelling": "homework",
    "ipa": "/ˈhoʊmˌwərk/",
    "pos": "n",
    "zh": "家庭作业；准备工作",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "homework"
    ],
    "example": "",
    "distractors": [
      "互联网",
      "较少的",
      "已婚的"
    ]
  },
  {
    "word": "headache",
    "speakText": "headache",
    "spelling": "headache",
    "ipa": "/ˈhɛdˌeɪk/",
    "pos": "n",
    "zh": "头痛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "headache"
    ],
    "example": "",
    "distractors": [
      "到里",
      "一节课",
      "比赛"
    ]
  },
  {
    "word": "headteacher",
    "speakText": "headteacher",
    "spelling": "headteacher",
    "ipa": "/ˌhɛd ˈtiːtʃə/",
    "pos": "n",
    "zh": "校长",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "headteacher"
    ],
    "example": "",
    "distractors": [
      "邀请",
      "允许",
      "数学"
    ]
  },
  {
    "word": "health",
    "speakText": "health",
    "spelling": "health",
    "ipa": "/hɛlθ/",
    "pos": "n",
    "zh": "健康状况",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "health"
    ],
    "example": "",
    "distractors": [
      "邀请",
      "信；字母",
      "事情"
    ]
  },
  {
    "word": "healthy",
    "speakText": "healthy",
    "spelling": "healthy",
    "ipa": "/ˈhɛlθi/",
    "pos": "adj",
    "zh": "健康的；茁壮的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "healthy"
    ],
    "example": "",
    "distractors": [
      "岛屿",
      "水平的；平坦的",
      "可能"
    ]
  },
  {
    "word": "hear",
    "speakText": "hear",
    "spelling": "hear",
    "ipa": "/hɪr/",
    "pos": "v",
    "zh": "听到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hear"
    ],
    "example": "",
    "distractors": [
      "它；它是",
      "图书馆；图书馆的",
      "也许"
    ]
  },
  {
    "word": "heart",
    "speakText": "heart",
    "spelling": "heart",
    "ipa": "/hɑrt/",
    "pos": "n",
    "zh": "心脏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "heart"
    ],
    "example": "",
    "distractors": [
      "它的",
      "许可证",
      "我"
    ]
  },
  {
    "word": "heating",
    "speakText": "heating",
    "spelling": "heating",
    "ipa": "/ˈhidɪŋ/",
    "pos": "n",
    "zh": "暖气设备；供暖系统",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "heating"
    ],
    "example": "",
    "distractors": [
      "它自己",
      "小憩",
      "一餐"
    ]
  },
  {
    "word": "heavy",
    "speakText": "heavy",
    "spelling": "heavy",
    "ipa": "/ˈhɛvi/",
    "pos": "adj",
    "zh": "重的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "heavy"
    ],
    "example": "",
    "distractors": [
      "夹克",
      "生命；生存",
      "表示的意思"
    ]
  },
  {
    "word": "helicopter",
    "speakText": "helicopter",
    "spelling": "helicopter",
    "ipa": "/ˈhɛləˌkɑptər/",
    "pos": "n",
    "zh": "直升机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "helicopter"
    ],
    "example": "",
    "distractors": [
      "拥挤；堵塞",
      "拿起；抱起",
      "食用的肉"
    ]
  },
  {
    "word": "hello",
    "speakText": "hello",
    "spelling": "hello",
    "ipa": "/həˈloʊ, hɛˈloʊ/",
    "pos": "exclam",
    "zh": "问候；你好",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hello"
    ],
    "example": "",
    "distractors": [
      "爵士乐；热情奔放",
      "光亮；光线",
      "技工"
    ]
  },
  {
    "word": "honey",
    "speakText": "honey",
    "spelling": "honey",
    "ipa": "/ˈhəni/",
    "pos": "n",
    "zh": "蜂蜜；甜蜜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "honey"
    ],
    "example": "",
    "distractors": [
      "牛仔裤",
      "喜欢；像",
      "医学"
    ]
  },
  {
    "word": "hope",
    "speakText": "hope",
    "spelling": "hope",
    "ipa": "/hoʊp/",
    "pos": "v",
    "zh": "希望",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hope"
    ],
    "example": "",
    "distractors": [
      "珠宝",
      "线；纹",
      "遇见；和会面"
    ]
  },
  {
    "word": "horrible",
    "speakText": "horrible",
    "spelling": "horrible",
    "ipa": "/ˈhɔrəb(ə)l/",
    "pos": "adj",
    "zh": "令人恐惧的；骇人听闻的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "horrible"
    ],
    "example": "",
    "distractors": [
      "工作",
      "狮子",
      "会议"
    ]
  },
  {
    "word": "horse",
    "speakText": "horse",
    "spelling": "horse",
    "ipa": "/hɔrs/",
    "pos": "n",
    "zh": "马",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "horse"
    ],
    "example": "",
    "distractors": [
      "连接",
      "名单；清单",
      "瓜；瓜类植物"
    ]
  },
  {
    "word": "hospital",
    "speakText": "hospital",
    "spelling": "hospital",
    "ipa": "/ˈhɑˌspɪd(ə)l/",
    "pos": "n",
    "zh": "医院",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hospital"
    ],
    "example": "",
    "distractors": [
      "新闻记者",
      "听",
      "成员"
    ]
  },
  {
    "word": "hot",
    "speakText": "hot",
    "spelling": "hot",
    "ipa": "/hɑt/",
    "pos": "adj",
    "zh": "热的；感觉热的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hot"
    ],
    "example": "",
    "distractors": [
      "旅行",
      "升；一升容量的",
      "记忆力"
    ]
  },
  {
    "word": "hotel",
    "speakText": "hotel",
    "spelling": "hotel",
    "ipa": "/hoʊˈtɛl/",
    "pos": "n",
    "zh": "旅馆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hotel"
    ],
    "example": "",
    "distractors": [
      "果汁；蔬菜汁",
      "小的",
      "菜单"
    ]
  },
  {
    "word": "hour",
    "speakText": "hour",
    "spelling": "hour",
    "ipa": "/ˈaʊ(ə)r/",
    "pos": "n",
    "zh": "小时",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hour"
    ],
    "example": "",
    "distractors": [
      "跳",
      "过",
      "信息"
    ]
  },
  {
    "word": "house",
    "speakText": "house",
    "spelling": "house",
    "ipa": "/haʊs/",
    "pos": "n",
    "zh": "房子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "house"
    ],
    "example": "",
    "distractors": [
      "套头毛衣",
      "起居室",
      "米；格律"
    ]
  },
  {
    "word": "housewife",
    "speakText": "housewife",
    "spelling": "housewife",
    "ipa": "/ˈhaʊsˌwaɪf,  ˈhəzəf/",
    "pos": "n",
    "zh": "家庭主妇",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "housewife"
    ],
    "example": "",
    "distractors": [
      "恰好",
      "长的",
      "正午；中午"
    ]
  },
  {
    "word": "how",
    "speakText": "how",
    "spelling": "how",
    "ipa": "/haʊ/",
    "pos": "adv",
    "zh": "如何",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "how"
    ],
    "example": "",
    "distractors": [
      "使保持",
      "看",
      "中间"
    ]
  },
  {
    "word": "however",
    "speakText": "however",
    "spelling": "however",
    "ipa": "/haʊˈɛvər/",
    "pos": "adv",
    "zh": "然而",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "however"
    ],
    "example": "",
    "distractors": [
      "钥匙",
      "看",
      "午夜"
    ]
  },
  {
    "word": "hungry",
    "speakText": "hungry",
    "spelling": "hungry",
    "ipa": "/ˈhəŋɡri/",
    "pos": "adj",
    "zh": "饥饿的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hungry"
    ],
    "example": "",
    "distractors": [
      "键盘；乐器键盘",
      "看",
      "可能"
    ]
  },
  {
    "word": "hurry",
    "speakText": "hurry",
    "spelling": "hurry",
    "ipa": "/ˈhəri/",
    "pos": "v",
    "zh": "急忙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hurry"
    ],
    "example": "",
    "distractors": [
      "踢",
      "看",
      "奶"
    ]
  },
  {
    "word": "hurt",
    "speakText": "hurt",
    "spelling": "hurt",
    "ipa": "/hərt/",
    "pos": "v",
    "zh": "使受伤",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hurt"
    ],
    "example": "",
    "distractors": [
      "种类",
      "留神观察",
      "一百万"
    ]
  },
  {
    "word": "husband",
    "speakText": "husband",
    "spelling": "husband",
    "ipa": "/ˈhəzb(ə)n(d)/",
    "pos": "n",
    "zh": "丈夫",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "husband"
    ],
    "example": "",
    "distractors": [
      "国王",
      "卡车",
      "头脑"
    ]
  },
  {
    "word": "I",
    "speakText": "I",
    "spelling": "i",
    "ipa": "/aɪ/",
    "pos": "pron",
    "zh": "我",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "I"
    ],
    "example": "",
    "distractors": [
      "你；你们",
      "他",
      "她"
    ]
  },
  {
    "word": "ice",
    "speakText": "ice",
    "spelling": "ice",
    "ipa": "/aɪs/",
    "pos": "n",
    "zh": "冰；冰层",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ice"
    ],
    "example": "",
    "distractors": [
      "成套工具",
      "遗失的；走失的",
      "矿泉水"
    ]
  },
  {
    "word": "ice cream",
    "speakText": "ice cream",
    "spelling": "icecream",
    "ipa": "/ˈaɪs ˌkrim, ˌaɪs ˈkrim/",
    "pos": "n",
    "zh": "冰激凌；一份冰激凌",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ice cream"
    ],
    "example": "",
    "distractors": [
      "厨房",
      "很多",
      "减去"
    ]
  },
  {
    "word": "ice skating",
    "speakText": "ice skating",
    "spelling": "iceskating",
    "ipa": "/ˈaɪs ˌskeɪdɪŋ/",
    "pos": "n",
    "zh": "溜冰",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ice skating"
    ],
    "example": "",
    "distractors": [
      "风筝",
      "声音巨大的；大声的",
      "分"
    ]
  },
  {
    "word": "ID",
    "speakText": "ID",
    "spelling": "id",
    "ipa": "/ˌaɪˈdi/",
    "pos": "n",
    "zh": "身份",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ID"
    ],
    "example": "",
    "distractors": [
      "刀",
      "爱；喜欢",
      "镜子"
    ]
  },
  {
    "word": "ID card",
    "speakText": "ID card",
    "spelling": "idcard",
    "ipa": "/ˌaɪ ˈdiː kɑːrd/",
    "pos": "n",
    "zh": "身份证；证件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ID card"
    ],
    "example": "",
    "distractors": [
      "知道",
      "美丽的；可爱的",
      "未击中；未接住"
    ]
  },
  {
    "word": "idea",
    "speakText": "idea",
    "spelling": "idea",
    "ipa": "/aɪˈdiə/",
    "pos": "n",
    "zh": "主意",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "idea"
    ],
    "example": "",
    "distractors": [
      "湖",
      "低的；低矮的",
      "丢失的"
    ]
  },
  {
    "word": "identification",
    "speakText": "identification",
    "spelling": "identification",
    "ipa": "/aɪˌdɛn(t)əfəˈkeɪʃən/",
    "pos": "n",
    "zh": "辨认；鉴定",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "identification"
    ],
    "example": "",
    "distractors": [
      "灯",
      "运气",
      "错误；误解"
    ]
  },
  {
    "word": "if",
    "speakText": "if",
    "spelling": "if",
    "ipa": "/ɪf/",
    "pos": "conj",
    "zh": "假如",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "if"
    ],
    "example": "",
    "distractors": [
      "语言",
      "幸运的",
      "使混合"
    ]
  },
  {
    "word": "ill",
    "speakText": "ill",
    "spelling": "ill",
    "ipa": "/ɪl/",
    "pos": "adj",
    "zh": "有病的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ill"
    ],
    "example": "",
    "distractors": [
      "大的",
      "行李",
      "模型"
    ]
  },
  {
    "word": "immediately",
    "speakText": "immediately",
    "spelling": "immediately",
    "ipa": "/ɪˈmiːdiətli/",
    "pos": "adv",
    "zh": "立刻",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "immediately"
    ],
    "example": "",
    "distractors": [
      "最后的",
      "午餐",
      "当今的；近代的"
    ]
  },
  {
    "word": "important",
    "speakText": "important",
    "spelling": "important",
    "ipa": "/ɪmˈpɔrt(ə)nt/",
    "pos": "adj",
    "zh": "重要的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "important"
    ],
    "example": "",
    "distractors": [
      "晚的",
      "午餐时间",
      "片刻"
    ]
  },
  {
    "word": "improve",
    "speakText": "improve",
    "spelling": "improve",
    "ipa": "/ɪmˈpruv/",
    "pos": "v",
    "zh": "改善",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "improve"
    ],
    "example": "",
    "distractors": [
      "稍后",
      "机器",
      "钱"
    ]
  },
  {
    "word": "in",
    "speakText": "in",
    "spelling": "in",
    "ipa": "/ɪn/",
    "pos": "adv / prep",
    "zh": "在里；在上",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "in"
    ],
    "example": "",
    "distractors": [
      "最新消息",
      "生气的；发疯的",
      "猴子"
    ]
  },
  {
    "word": "include",
    "speakText": "include",
    "spelling": "include",
    "ipa": "/ɪnˈklud, ɪŋˈklud/",
    "pos": "v",
    "zh": "包括",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "include"
    ],
    "example": "",
    "distractors": [
      "笑",
      "杂志",
      "月"
    ]
  },
  {
    "word": "including",
    "speakText": "including",
    "spelling": "including",
    "ipa": "/ɪnˈkludɪŋ, ɪŋˈkludɪŋ/",
    "pos": "prep",
    "zh": "包括",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "including"
    ],
    "example": "",
    "distractors": [
      "懒惰的；懒洋洋的",
      "邮递",
      "每月一次的"
    ]
  },
  {
    "word": "indoor",
    "speakText": "indoor",
    "spelling": "indoor",
    "ipa": "/ˌɪnˈdɔr, ˈɪnˌdɔr/",
    "pos": "adj",
    "zh": "室内的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "indoor"
    ],
    "example": "",
    "distractors": [
      "学习",
      "主菜",
      "月球"
    ]
  },
  {
    "word": "indoors",
    "speakText": "indoors",
    "spelling": "indoors",
    "ipa": "/ˈɪnˌdɔrz, ɪnˈdɔrz/",
    "pos": "adv",
    "zh": "往室内；在室内",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "indoors"
    ],
    "example": "",
    "distractors": [
      "最小的；最少的",
      "制作；使得",
      "更多的"
    ]
  },
  {
    "word": "information",
    "speakText": "information",
    "spelling": "information",
    "ipa": "/ˌɪnfərˈmeɪʃən/",
    "pos": "n",
    "zh": "消息",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "information"
    ],
    "example": "",
    "distractors": [
      "皮革；皮革的",
      "化妆品",
      "上午；早晨"
    ]
  },
  {
    "word": "in front of",
    "speakText": "in front of",
    "spelling": "infrontof",
    "ipa": "/ɪn frʌnt əv/",
    "pos": "prep phr",
    "zh": "在……前面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "in front of"
    ],
    "example": "",
    "distractors": [
      "离开",
      "男人",
      "大多数的"
    ]
  },
  {
    "word": "insect",
    "speakText": "insect",
    "spelling": "insect",
    "ipa": "/ˈɪnˌsɛk(t)/",
    "pos": "n",
    "zh": "昆虫；爬虫",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "insect"
    ],
    "example": "",
    "distractors": [
      "左边",
      "经理；经纪人",
      "母亲"
    ]
  },
  {
    "word": "inside",
    "speakText": "inside",
    "spelling": "inside",
    "ipa": "/ɪnˈsaɪd/",
    "pos": "adv / prep",
    "zh": "里面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "inside"
    ],
    "example": "",
    "distractors": [
      "左边的",
      "芒果；芒果树",
      "摩托车；机动自行车"
    ]
  },
  {
    "word": "instead",
    "speakText": "instead",
    "spelling": "instead",
    "ipa": "/ɪnˈstɛd/",
    "pos": "adv",
    "zh": "作为替代",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "instead"
    ],
    "example": "",
    "distractors": [
      "腿",
      "许多的",
      "高速公路；高速公路的"
    ]
  },
  {
    "word": "instructions",
    "speakText": "instructions",
    "spelling": "instructions",
    "ipa": "/ɪnˈstrəkʃən/",
    "pos": "n pl",
    "zh": "教导",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "instructions"
    ],
    "example": "",
    "distractors": [
      "柠檬；柠檬的",
      "地图",
      "山"
    ]
  },
  {
    "word": "instrument",
    "speakText": "instrument",
    "spelling": "instrument",
    "ipa": "/ˈɪn(t)strəmənt/",
    "pos": "n",
    "zh": "器械",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "instrument"
    ],
    "example": "",
    "distractors": [
      "柠檬汽水；柠檬汁饮料",
      "斑点；斑痕",
      "鼠"
    ]
  },
  {
    "word": "interested",
    "speakText": "interested",
    "spelling": "interested",
    "ipa": "/ˈɪnt(ə)rəstəd, ˈɪnˌtrɛstəd/",
    "pos": "adj",
    "zh": "感兴趣的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "interested"
    ],
    "example": "",
    "distractors": [
      "借出",
      "市场",
      "嘴"
    ]
  },
  {
    "word": "interesting",
    "speakText": "interesting",
    "spelling": "interesting",
    "ipa": "/ˈɪnt(ə)rəstɪŋ, ˈɪnˌtrɛstɪŋ/",
    "pos": "adj",
    "zh": "有趣的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "interesting"
    ],
    "example": "",
    "distractors": [
      "较少的",
      "已婚的",
      "移动；转动"
    ]
  },
  {
    "word": "international",
    "speakText": "international",
    "spelling": "international",
    "ipa": "/ˌɪn(t)ərˈnæʃ(ə)nəl/",
    "pos": "adj",
    "zh": "国际的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "international"
    ],
    "example": "",
    "distractors": [
      "一节课",
      "比赛",
      "电影"
    ]
  },
  {
    "word": "internet",
    "speakText": "internet",
    "spelling": "internet",
    "ipa": "/ˈɪntərnet/",
    "pos": "n",
    "zh": "互联网",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "internet"
    ],
    "example": "",
    "distractors": [
      "允许",
      "数学",
      "电影院"
    ]
  },
  {
    "word": "into",
    "speakText": "into",
    "spelling": "into",
    "ipa": "/ˈɪntu, ˈɪntə/",
    "pos": "prep",
    "zh": "到里",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "into"
    ],
    "example": "",
    "distractors": [
      "信；字母",
      "事情",
      "电影明星"
    ]
  },
  {
    "word": "invitation",
    "speakText": "invitation",
    "spelling": "invitation",
    "ipa": "/ˌɪnvəˈteɪʃən/",
    "pos": "n",
    "zh": "邀请",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "invitation"
    ],
    "example": "",
    "distractors": [
      "水平的；平坦的",
      "可能",
      "播放器"
    ]
  },
  {
    "word": "invite",
    "speakText": "invite",
    "spelling": "invite",
    "ipa": "/ɪnˈvaɪt/",
    "pos": "v",
    "zh": "邀请",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "invite"
    ],
    "example": "",
    "distractors": [
      "图书馆；图书馆的",
      "也许",
      "先生"
    ]
  },
  {
    "word": "island",
    "speakText": "island",
    "spelling": "island",
    "ipa": "/ˈaɪlənd/",
    "pos": "n",
    "zh": "岛屿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "island"
    ],
    "example": "",
    "distractors": [
      "许可证",
      "我",
      "夫人"
    ]
  },
  {
    "word": "it",
    "speakText": "it",
    "spelling": "it",
    "ipa": "/ɪt/",
    "pos": "pron",
    "zh": "它；它是",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "it"
    ],
    "example": "",
    "distractors": [
      "小憩",
      "一餐",
      "女士"
    ]
  },
  {
    "word": "its",
    "speakText": "its",
    "spelling": "its",
    "ipa": "/ɪts/",
    "pos": "det",
    "zh": "它的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "its"
    ],
    "example": "",
    "distractors": [
      "生命；生存",
      "表示的意思",
      "很多的"
    ]
  },
  {
    "word": "itself",
    "speakText": "itself",
    "spelling": "itself",
    "ipa": "/ɪtˈsɛlf/",
    "pos": "pron",
    "zh": "它自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "itself"
    ],
    "example": "",
    "distractors": [
      "拿起；抱起",
      "食用的肉",
      "有柄大杯；一大杯"
    ]
  },
  {
    "word": "jacket",
    "speakText": "jacket",
    "spelling": "jacket",
    "ipa": "/ˈdʒækət/",
    "pos": "n",
    "zh": "夹克",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jacket"
    ],
    "example": "",
    "distractors": [
      "光亮；光线",
      "技工",
      "妈妈"
    ]
  },
  {
    "word": "jam",
    "speakText": "jam",
    "spelling": "jam",
    "ipa": "/dʒæm/",
    "pos": "n",
    "zh": "拥挤；堵塞",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jam"
    ],
    "example": "",
    "distractors": [
      "喜欢；像",
      "医学",
      "博物馆"
    ]
  },
  {
    "word": "jazz",
    "speakText": "jazz",
    "spelling": "jazz",
    "ipa": "/dʒæz/",
    "pos": "n",
    "zh": "爵士乐；热情奔放",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jazz"
    ],
    "example": "",
    "distractors": [
      "线；纹",
      "遇见；和会面",
      "蘑菇"
    ]
  },
  {
    "word": "jeans",
    "speakText": "jeans",
    "spelling": "jeans",
    "ipa": "/dʒinz/",
    "pos": "n pl",
    "zh": "牛仔裤",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jeans"
    ],
    "example": "",
    "distractors": [
      "狮子",
      "会议",
      "音乐"
    ]
  },
  {
    "word": "jewellery",
    "speakText": "jewellery",
    "spelling": "jewellery",
    "ipa": "/ˈdʒu(ə)lri/",
    "pos": "n",
    "zh": "珠宝",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jewellery"
    ],
    "example": "",
    "distractors": [
      "名单；清单",
      "瓜；瓜类植物",
      "音乐的；有音乐天赋的"
    ]
  },
  {
    "word": "job",
    "speakText": "job",
    "spelling": "job",
    "ipa": "/dʒɑb/",
    "pos": "n",
    "zh": "工作",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "job"
    ],
    "example": "",
    "distractors": [
      "听",
      "成员",
      "音乐家"
    ]
  },
  {
    "word": "join",
    "speakText": "join",
    "spelling": "join",
    "ipa": "/dʒɔɪn/",
    "pos": "v",
    "zh": "连接",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "join"
    ],
    "example": "",
    "distractors": [
      "升；一升容量的",
      "记忆力",
      "必须"
    ]
  },
  {
    "word": "journalist",
    "speakText": "journalist",
    "spelling": "journalist",
    "ipa": "/ˈdʒərnələst/",
    "pos": "n",
    "zh": "新闻记者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "journalist"
    ],
    "example": "",
    "distractors": [
      "小的",
      "菜单",
      "我的"
    ]
  },
  {
    "word": "journey",
    "speakText": "journey",
    "spelling": "journey",
    "ipa": "/ˈdʒərni/",
    "pos": "n",
    "zh": "旅行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "journey"
    ],
    "example": "",
    "distractors": [
      "过",
      "信息",
      "我自己"
    ]
  },
  {
    "word": "juice",
    "speakText": "juice",
    "spelling": "juice",
    "ipa": "/dʒus/",
    "pos": "n",
    "zh": "果汁；蔬菜汁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "juice"
    ],
    "example": "",
    "distractors": [
      "起居室",
      "米；格律",
      "名字"
    ]
  },
  {
    "word": "jump",
    "speakText": "jump",
    "spelling": "jump",
    "ipa": "/dʒəmp/",
    "pos": "v",
    "zh": "跳",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jump"
    ],
    "example": "",
    "distractors": [
      "长的",
      "正午；中午",
      "国家的；民族的"
    ]
  },
  {
    "word": "jumper",
    "speakText": "jumper",
    "spelling": "jumper",
    "ipa": "/ˈdʒʌmpər/",
    "pos": "n",
    "zh": "套头毛衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "jumper"
    ],
    "example": "",
    "distractors": [
      "看",
      "中间",
      "国籍"
    ]
  },
  {
    "word": "just",
    "speakText": "just",
    "spelling": "just",
    "ipa": "/dʒəst/",
    "pos": "adv",
    "zh": "恰好",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "just"
    ],
    "example": "",
    "distractors": [
      "看",
      "午夜",
      "本质"
    ]
  },
  {
    "word": "keep",
    "speakText": "keep",
    "spelling": "keep",
    "ipa": "/kip/",
    "pos": "v",
    "zh": "使保持",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "keep"
    ],
    "example": "",
    "distractors": [
      "看",
      "可能",
      "附近"
    ]
  },
  {
    "word": "key",
    "speakText": "key",
    "spelling": "key",
    "ipa": "/ki/",
    "pos": "n",
    "zh": "钥匙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "key"
    ],
    "example": "",
    "distractors": [
      "看",
      "奶",
      "几乎"
    ]
  },
  {
    "word": "keyboard",
    "speakText": "keyboard",
    "spelling": "keyboard",
    "ipa": "/ˈkiˌbɔrd/",
    "pos": "n",
    "zh": "键盘；乐器键盘",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "keyboard"
    ],
    "example": "",
    "distractors": [
      "留神观察",
      "一百万",
      "脖子"
    ]
  },
  {
    "word": "kick",
    "speakText": "kick",
    "spelling": "kick",
    "ipa": "/kɪk/",
    "pos": "n / v",
    "zh": "踢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kick"
    ],
    "example": "",
    "distractors": [
      "卡车",
      "头脑",
      "项链；项圈"
    ]
  },
  {
    "word": "kind",
    "speakText": "kind",
    "spelling": "kind",
    "ipa": "/kaɪnd/",
    "pos": "n / adj",
    "zh": "种类；友善的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kind"
    ],
    "example": "",
    "distractors": [
      "丢失；弄丢",
      "我的",
      "必须"
    ]
  },
  {
    "word": "king",
    "speakText": "king",
    "spelling": "king",
    "ipa": "/kɪŋ/",
    "pos": "n",
    "zh": "国王",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "king"
    ],
    "example": "",
    "distractors": [
      "遗失的；走失的",
      "矿泉水",
      "邻居"
    ]
  },
  {
    "word": "kiss",
    "speakText": "kiss",
    "spelling": "kiss",
    "ipa": "/kɪs/",
    "pos": "n / v",
    "zh": "亲吻",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kiss"
    ],
    "example": "",
    "distractors": [
      "很多",
      "减去",
      "网；球网"
    ]
  },
  {
    "word": "kit",
    "speakText": "kit",
    "spelling": "kit",
    "ipa": "/kɪt/",
    "pos": "n",
    "zh": "成套工具",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kit"
    ],
    "example": "",
    "distractors": [
      "声音巨大的；大声的",
      "分",
      "从不"
    ]
  },
  {
    "word": "kitchen",
    "speakText": "kitchen",
    "spelling": "kitchen",
    "ipa": "/ˈkɪtʃ(ə)n/",
    "pos": "n",
    "zh": "厨房",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kitchen"
    ],
    "example": "",
    "distractors": [
      "爱；喜欢",
      "镜子",
      "新的"
    ]
  },
  {
    "word": "kite",
    "speakText": "kite",
    "spelling": "kite",
    "ipa": "/kaɪt/",
    "pos": "n",
    "zh": "风筝",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "kite"
    ],
    "example": "",
    "distractors": [
      "美丽的；可爱的",
      "未击中；未接住",
      "消息；新闻"
    ]
  },
  {
    "word": "knife",
    "speakText": "knife",
    "spelling": "knife",
    "ipa": "/naɪf/",
    "pos": "n",
    "zh": "刀",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "knife"
    ],
    "example": "",
    "distractors": [
      "低的；低矮的",
      "丢失的",
      "报纸"
    ]
  },
  {
    "word": "know",
    "speakText": "know",
    "spelling": "know",
    "ipa": "/noʊ/",
    "pos": "v",
    "zh": "知道",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "know"
    ],
    "example": "",
    "distractors": [
      "运气",
      "错误；误解",
      "紧接着的"
    ]
  },
  {
    "word": "lake",
    "speakText": "lake",
    "spelling": "lake",
    "ipa": "/leɪk/",
    "pos": "n",
    "zh": "湖",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lake"
    ],
    "example": "",
    "distractors": [
      "幸运的",
      "使混合",
      "在……旁边"
    ]
  },
  {
    "word": "lamp",
    "speakText": "lamp",
    "spelling": "lamp",
    "ipa": "/læmp/",
    "pos": "n",
    "zh": "灯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lamp"
    ],
    "example": "",
    "distractors": [
      "行李",
      "模型",
      "令人愉快的"
    ]
  },
  {
    "word": "language",
    "speakText": "language",
    "spelling": "language",
    "ipa": "/ˈlæŋɡwɪdʒ/",
    "pos": "n",
    "zh": "语言",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "language"
    ],
    "example": "",
    "distractors": [
      "午餐",
      "当今的；近代的",
      "夜晚"
    ]
  },
  {
    "word": "large",
    "speakText": "large",
    "spelling": "large",
    "ipa": "/lɑrdʒ/",
    "pos": "adj",
    "zh": "大的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "large"
    ],
    "example": "",
    "distractors": [
      "午餐时间",
      "片刻",
      "不"
    ]
  },
  {
    "word": "last",
    "speakText": "last",
    "spelling": "last",
    "ipa": "/læst/",
    "pos": "adj / det",
    "zh": "最后的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "last"
    ],
    "example": "",
    "distractors": [
      "机器",
      "钱",
      "没有人"
    ]
  },
  {
    "word": "late",
    "speakText": "late",
    "spelling": "late",
    "ipa": "/leɪt/",
    "pos": "adv / adj",
    "zh": "晚的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "late"
    ],
    "example": "",
    "distractors": [
      "生气的；发疯的",
      "猴子",
      "声音"
    ]
  },
  {
    "word": "later",
    "speakText": "later",
    "spelling": "later",
    "ipa": "/ˈleɪdər/",
    "pos": "adv",
    "zh": "稍后",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "later"
    ],
    "example": "",
    "distractors": [
      "杂志",
      "月",
      "喧闹的"
    ]
  },
  {
    "word": "latest",
    "speakText": "latest",
    "spelling": "latest",
    "ipa": "/ˈleɪdəst/",
    "pos": "adj",
    "zh": "最新消息",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "latest"
    ],
    "example": "",
    "distractors": [
      "邮递",
      "每月一次的",
      "中午；正午"
    ]
  },
  {
    "word": "laugh",
    "speakText": "laugh",
    "spelling": "laugh",
    "ipa": "/læf/",
    "pos": "v",
    "zh": "笑",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "laugh"
    ],
    "example": "",
    "distractors": [
      "主菜",
      "月球",
      "没有人"
    ]
  },
  {
    "word": "lazy",
    "speakText": "lazy",
    "spelling": "lazy",
    "ipa": "/ˈleɪzi/",
    "pos": "adj",
    "zh": "懒惰的；懒洋洋的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lazy"
    ],
    "example": "",
    "distractors": [
      "制作；使得",
      "更多的",
      "通常的"
    ]
  },
  {
    "word": "learn",
    "speakText": "learn",
    "spelling": "learn",
    "ipa": "/lərn/",
    "pos": "v",
    "zh": "学习",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "learn"
    ],
    "example": "",
    "distractors": [
      "化妆品",
      "上午；早晨",
      "北；北方"
    ]
  },
  {
    "word": "least",
    "speakText": "least",
    "spelling": "least",
    "ipa": "/list/",
    "pos": "adv",
    "zh": "最小的；最少的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "least"
    ],
    "example": "",
    "distractors": [
      "男人",
      "大多数的",
      "鼻子"
    ]
  },
  {
    "word": "leather",
    "speakText": "leather",
    "spelling": "leather",
    "ipa": "/ˈlɛðər/",
    "pos": "n / adj",
    "zh": "皮革；皮革的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "leather"
    ],
    "example": "",
    "distractors": [
      "经理；经纪人",
      "母亲",
      "不"
    ]
  },
  {
    "word": "leave",
    "speakText": "leave",
    "spelling": "leave",
    "ipa": "/liv/",
    "pos": "v",
    "zh": "离开",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "leave"
    ],
    "example": "",
    "distractors": [
      "芒果；芒果树",
      "摩托车；机动自行车",
      "笔记"
    ]
  },
  {
    "word": "left",
    "speakText": "left",
    "spelling": "left",
    "ipa": "/lɛft/",
    "pos": "adj, adv / n",
    "zh": "左边",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "left"
    ],
    "example": "",
    "distractors": [
      "许多的",
      "高速公路；高速公路的",
      "笔记本；笔记本电脑"
    ]
  },
  {
    "word": "left-hand",
    "speakText": "left-hand",
    "spelling": "lefthand",
    "ipa": "/ˌlɛftˈhænd/",
    "pos": "adj",
    "zh": "左边的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "left-hand"
    ],
    "example": "",
    "distractors": [
      "地图",
      "山",
      "没有什么"
    ]
  },
  {
    "word": "leg",
    "speakText": "leg",
    "spelling": "leg",
    "ipa": "/lɛɡ/",
    "pos": "n",
    "zh": "腿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "leg"
    ],
    "example": "",
    "distractors": [
      "斑点；斑痕",
      "鼠",
      "布告；启事"
    ]
  },
  {
    "word": "lemon",
    "speakText": "lemon",
    "spelling": "lemon",
    "ipa": "/ˈlɛmən/",
    "pos": "n",
    "zh": "柠檬；柠檬的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lemon"
    ],
    "example": "",
    "distractors": [
      "市场",
      "嘴",
      "现在"
    ]
  },
  {
    "word": "lemonade",
    "speakText": "lemonade",
    "spelling": "lemonade",
    "ipa": "/ˌlɛməˈneɪd, ˈlɛməˌneɪd/",
    "pos": "n",
    "zh": "柠檬汽水；柠檬汁饮料",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lemonade"
    ],
    "example": "",
    "distractors": [
      "已婚的",
      "移动；转动",
      "数字"
    ]
  },
  {
    "word": "lend",
    "speakText": "lend",
    "spelling": "lend",
    "ipa": "/lɛnd/",
    "pos": "v",
    "zh": "借出",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lend"
    ],
    "example": "",
    "distractors": [
      "比赛",
      "电影",
      "护士"
    ]
  },
  {
    "word": "less",
    "speakText": "less",
    "spelling": "less",
    "ipa": "/lɛs/",
    "pos": "adj, det / pron",
    "zh": "较少的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "less"
    ],
    "example": "",
    "distractors": [
      "数学",
      "电影院",
      "居住"
    ]
  },
  {
    "word": "lesson",
    "speakText": "lesson",
    "spelling": "lesson",
    "ipa": "/ˈlɛsən/",
    "pos": "n",
    "zh": "一节课",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lesson"
    ],
    "example": "",
    "distractors": [
      "事情",
      "电影明星",
      "点钟"
    ]
  },
  {
    "word": "let",
    "speakText": "let",
    "spelling": "let",
    "ipa": "/lɛt/",
    "pos": "v",
    "zh": "允许",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "let"
    ],
    "example": "",
    "distractors": [
      "可能",
      "播放器",
      "的"
    ]
  },
  {
    "word": "letter",
    "speakText": "letter",
    "spelling": "letter",
    "ipa": "/ˈletər/",
    "pos": "n",
    "zh": "信；字母",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "letter"
    ],
    "example": "",
    "distractors": [
      "也许",
      "先生",
      "离开"
    ]
  },
  {
    "word": "level",
    "speakText": "level",
    "spelling": "level",
    "ipa": "/ˈlɛv(ə)l/",
    "pos": "n",
    "zh": "水平的；平坦的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "level"
    ],
    "example": "",
    "distractors": [
      "我",
      "夫人",
      "提出"
    ]
  },
  {
    "word": "library",
    "speakText": "library",
    "spelling": "library",
    "ipa": "/ˈlaɪˌbrɛri/",
    "pos": "n",
    "zh": "图书馆；图书馆的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "library"
    ],
    "example": "",
    "distractors": [
      "一餐",
      "女士",
      "办公室；办公楼"
    ]
  },
  {
    "word": "licence",
    "speakText": "licence",
    "spelling": "licence",
    "ipa": "/ˈlaɪsn(t)s/",
    "pos": "n",
    "zh": "许可证",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "licence"
    ],
    "example": "",
    "distractors": [
      "表示的意思",
      "很多的",
      "经常"
    ]
  },
  {
    "word": "lie down",
    "speakText": "lie down",
    "spelling": "liedown",
    "ipa": "/ˌlaɪˈdaʊn/",
    "pos": "phrasal verb",
    "zh": "小憩",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lie down"
    ],
    "example": "",
    "distractors": [
      "食用的肉",
      "有柄大杯；一大杯",
      "啊"
    ]
  },
  {
    "word": "life",
    "speakText": "life",
    "spelling": "life",
    "ipa": "/laɪf/",
    "pos": "n",
    "zh": "生命；生存",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "life"
    ],
    "example": "",
    "distractors": [
      "技工",
      "妈妈",
      "石油"
    ]
  },
  {
    "word": "lift",
    "speakText": "lift",
    "spelling": "lift",
    "ipa": "/lɪft/",
    "pos": "n / v",
    "zh": "电梯；举起",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lift"
    ],
    "example": "",
    "distractors": [
      "医学",
      "博物馆",
      "表示同意或接受"
    ]
  },
  {
    "word": "light",
    "speakText": "light",
    "spelling": "light",
    "ipa": "/laɪt/",
    "pos": "n / adj",
    "zh": "灯；光；轻的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "light"
    ],
    "example": "",
    "distractors": [
      "遇见；和会面",
      "蘑菇",
      "老的"
    ]
  },
  {
    "word": "like",
    "speakText": "like",
    "spelling": "like",
    "ipa": "/laɪk/",
    "pos": "adv, prep / v",
    "zh": "喜欢；像",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "like"
    ],
    "example": "",
    "distractors": [
      "会议",
      "音乐",
      "煎蛋；煎蛋卷"
    ]
  },
  {
    "word": "line",
    "speakText": "line",
    "spelling": "line",
    "ipa": "/laɪn/",
    "pos": "n",
    "zh": "线；纹",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "line"
    ],
    "example": "",
    "distractors": [
      "瓜；瓜类植物",
      "音乐的；有音乐天赋的",
      "在上"
    ]
  },
  {
    "word": "lion",
    "speakText": "lion",
    "spelling": "lion",
    "ipa": "/ˈlaɪən/",
    "pos": "n",
    "zh": "狮子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lion"
    ],
    "example": "",
    "distractors": [
      "成员",
      "音乐家",
      "一次"
    ]
  },
  {
    "word": "list",
    "speakText": "list",
    "spelling": "list",
    "ipa": "/lɪst/",
    "pos": "n",
    "zh": "名单；清单",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "list"
    ],
    "example": "",
    "distractors": [
      "记忆力",
      "必须",
      "一"
    ]
  },
  {
    "word": "listen",
    "speakText": "listen",
    "spelling": "listen",
    "ipa": "/ˈlɪsn/",
    "pos": "v",
    "zh": "听",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "listen"
    ],
    "example": "",
    "distractors": [
      "菜单",
      "我的",
      "洋葱"
    ]
  },
  {
    "word": "litre",
    "speakText": "litre",
    "spelling": "litre",
    "ipa": "/ˈlidər/",
    "pos": "n",
    "zh": "升；一升容量的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "litre"
    ],
    "example": "",
    "distractors": [
      "信息",
      "我自己",
      "网上的"
    ]
  },
  {
    "word": "little",
    "speakText": "little",
    "spelling": "little",
    "ipa": "/ˈlɪd(ə)l/",
    "pos": "adj",
    "zh": "小的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "little"
    ],
    "example": "",
    "distractors": [
      "米；格律",
      "名字",
      "仅仅"
    ]
  },
  {
    "word": "live",
    "speakText": "live",
    "spelling": "live",
    "ipa": "/lɪv/",
    "pos": "v",
    "zh": "过",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "live"
    ],
    "example": "",
    "distractors": [
      "正午；中午",
      "国家的；民族的",
      "开着的；翻开的"
    ]
  },
  {
    "word": "living room",
    "speakText": "living room",
    "spelling": "livingroom",
    "ipa": "/ˈlɪvɪŋ ˌrum/",
    "pos": "n",
    "zh": "起居室",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "living room"
    ],
    "example": "",
    "distractors": [
      "中间",
      "国籍",
      "歌剧艺术；歌剧"
    ]
  },
  {
    "word": "long",
    "speakText": "long",
    "spelling": "long",
    "ipa": "/lɔːŋ/",
    "pos": "adj",
    "zh": "长的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "long"
    ],
    "example": "",
    "distractors": [
      "午夜",
      "本质",
      "对立面"
    ]
  },
  {
    "word": "look",
    "speakText": "look",
    "spelling": "look",
    "ipa": "/lʊk/",
    "pos": "v",
    "zh": "看",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "look"
    ],
    "example": "",
    "distractors": [
      "可能",
      "附近",
      "或者"
    ]
  },
  {
    "word": "look after",
    "speakText": "look after",
    "spelling": "lookafter",
    "ipa": "/lʊk/",
    "pos": "phrasal verb",
    "zh": "看",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "look after"
    ],
    "example": "",
    "distractors": [
      "奶",
      "几乎",
      "橙子"
    ]
  },
  {
    "word": "look at",
    "speakText": "look at",
    "spelling": "lookat",
    "ipa": "/lʊk/",
    "pos": "phrasal verb",
    "zh": "看",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "look at"
    ],
    "example": "",
    "distractors": [
      "一百万",
      "脖子",
      "条理"
    ]
  },
  {
    "word": "look for",
    "speakText": "look for",
    "spelling": "lookfor",
    "ipa": "/lʊk/",
    "pos": "phrasal verb",
    "zh": "看",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "look for"
    ],
    "example": "",
    "distractors": [
      "头脑",
      "项链；项圈",
      "其他的"
    ]
  },
  {
    "word": "look out",
    "speakText": "look out",
    "spelling": "lookout",
    "ipa": "/ˈlʊkˌaʊt/",
    "pos": "phrasal verb",
    "zh": "留神观察",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "look out"
    ],
    "example": "",
    "distractors": [
      "我的",
      "必须",
      "我们的"
    ]
  },
  {
    "word": "lorry",
    "speakText": "lorry",
    "spelling": "lorry",
    "ipa": "/ˈlɔri/",
    "pos": "n",
    "zh": "卡车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lorry"
    ],
    "example": "",
    "distractors": [
      "矿泉水",
      "邻居",
      "我们的"
    ]
  },
  {
    "word": "lose",
    "speakText": "lose",
    "spelling": "lose",
    "ipa": "/luz/",
    "pos": "v",
    "zh": "丢失；弄丢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lose"
    ],
    "example": "",
    "distractors": [
      "减去",
      "网；球网",
      "我们自己"
    ]
  },
  {
    "word": "lost",
    "speakText": "lost",
    "spelling": "lost",
    "ipa": "/lɔst, lɑst/",
    "pos": "adj",
    "zh": "遗失的；走失的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lost"
    ],
    "example": "",
    "distractors": [
      "分",
      "从不",
      "在外面"
    ]
  },
  {
    "word": "lots / a lot",
    "speakText": "lots",
    "spelling": "lots",
    "ipa": "/lɑt/",
    "pos": "n",
    "zh": "很多",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lots"
    ],
    "example": "",
    "distractors": [
      "镜子",
      "新的",
      "在露天；在户外"
    ]
  },
  {
    "word": "loud",
    "speakText": "loud",
    "spelling": "loud",
    "ipa": "/laʊd/",
    "pos": "adj",
    "zh": "声音巨大的；大声的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "loud"
    ],
    "example": "",
    "distractors": [
      "未击中；未接住",
      "消息；新闻",
      "从……出来；离开"
    ]
  },
  {
    "word": "love",
    "speakText": "love",
    "spelling": "love",
    "ipa": "/lʌv/",
    "pos": "n / v",
    "zh": "爱；喜欢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "love"
    ],
    "example": "",
    "distractors": [
      "丢失的",
      "报纸",
      "外面；在外面"
    ]
  },
  {
    "word": "lovely",
    "speakText": "lovely",
    "spelling": "lovely",
    "ipa": "/ˈləvli/",
    "pos": "adj",
    "zh": "美丽的；可爱的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lovely"
    ],
    "example": "",
    "distractors": [
      "错误；误解",
      "紧接着的",
      "在上方"
    ]
  },
  {
    "word": "low",
    "speakText": "low",
    "spelling": "low",
    "ipa": "/loʊ/",
    "pos": "adj",
    "zh": "低的；低矮的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "low"
    ],
    "example": "",
    "distractors": [
      "使混合",
      "在……旁边",
      "自己的"
    ]
  },
  {
    "word": "luck",
    "speakText": "luck",
    "spelling": "luck",
    "ipa": "/lək/",
    "pos": "n",
    "zh": "运气",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "luck"
    ],
    "example": "",
    "distractors": [
      "模型",
      "令人愉快的",
      "盒"
    ]
  },
  {
    "word": "lucky",
    "speakText": "lucky",
    "spelling": "lucky",
    "ipa": "/ˈləki/",
    "pos": "adj",
    "zh": "幸运的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lucky"
    ],
    "example": "",
    "distractors": [
      "当今的；近代的",
      "夜晚",
      "页"
    ]
  },
  {
    "word": "luggage",
    "speakText": "luggage",
    "spelling": "luggage",
    "ipa": "/ˈləɡɪdʒ/",
    "pos": "n",
    "zh": "行李",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "luggage"
    ],
    "example": "",
    "distractors": [
      "片刻",
      "不",
      "痛苦"
    ]
  },
  {
    "word": "lunch",
    "speakText": "lunch",
    "spelling": "lunch",
    "ipa": "/lən(t)ʃ/",
    "pos": "n",
    "zh": "午餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lunch"
    ],
    "example": "",
    "distractors": [
      "钱",
      "没有人",
      "油漆"
    ]
  },
  {
    "word": "lunchtime",
    "speakText": "lunchtime",
    "spelling": "lunchtime",
    "ipa": "/ˈlən(t)ʃˌtaɪm/",
    "pos": "n",
    "zh": "午餐时间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "lunchtime"
    ],
    "example": "",
    "distractors": [
      "猴子",
      "声音",
      "画家"
    ]
  },
  {
    "word": "machine",
    "speakText": "machine",
    "spelling": "machine",
    "ipa": "/məˈʃin/",
    "pos": "n",
    "zh": "机器",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "machine"
    ],
    "example": "",
    "distractors": [
      "月",
      "喧闹的",
      "绘画"
    ]
  },
  {
    "word": "mad",
    "speakText": "mad",
    "spelling": "mad",
    "ipa": "/mæd/",
    "pos": "adj",
    "zh": "生气的；发疯的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mad"
    ],
    "example": "",
    "distractors": [
      "每月一次的",
      "中午；正午",
      "苍白的；白皙的"
    ]
  },
  {
    "word": "magazine",
    "speakText": "magazine",
    "spelling": "magazine",
    "ipa": "/ˈmæɡəˌzin, ˌmæɡəˈzin/",
    "pos": "n",
    "zh": "杂志",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "magazine"
    ],
    "example": "",
    "distractors": [
      "月球",
      "没有人",
      "一双；一对"
    ]
  },
  {
    "word": "mail",
    "speakText": "mail",
    "spelling": "mail",
    "ipa": "/meɪl/",
    "pos": "n",
    "zh": "邮递",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mail"
    ],
    "example": "",
    "distractors": [
      "更多的",
      "通常的",
      "纸"
    ]
  },
  {
    "word": "main course",
    "speakText": "main course",
    "spelling": "maincourse",
    "ipa": "/ˌmeɪn ˈkɔːrs/",
    "pos": "n",
    "zh": "主菜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "main course"
    ],
    "example": "",
    "distractors": [
      "上午；早晨",
      "北；北方",
      "原谅"
    ]
  },
  {
    "word": "make",
    "speakText": "make",
    "spelling": "make",
    "ipa": "/meɪk/",
    "pos": "v",
    "zh": "制作；使得",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "make"
    ],
    "example": "",
    "distractors": [
      "大多数的",
      "鼻子",
      "父亲；母亲"
    ]
  },
  {
    "word": "make-up",
    "speakText": "make-up",
    "spelling": "makeup",
    "ipa": "/ˈmeɪˌkəp/",
    "pos": "n",
    "zh": "化妆品",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "make-up"
    ],
    "example": "",
    "distractors": [
      "母亲",
      "不",
      "公园；园区"
    ]
  },
  {
    "word": "man",
    "speakText": "man",
    "spelling": "man",
    "ipa": "/mæn/",
    "pos": "n",
    "zh": "男人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "man"
    ],
    "example": "",
    "distractors": [
      "摩托车；机动自行车",
      "笔记",
      "停车场"
    ]
  },
  {
    "word": "manager",
    "speakText": "manager",
    "spelling": "manager",
    "ipa": "/ˈmænɪdʒər/",
    "pos": "n",
    "zh": "经理；经纪人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "manager"
    ],
    "example": "",
    "distractors": [
      "高速公路；高速公路的",
      "笔记本；笔记本电脑",
      "部分"
    ]
  },
  {
    "word": "mango",
    "speakText": "mango",
    "spelling": "mango",
    "ipa": "/ˈmæŋɡoʊ/",
    "pos": "n",
    "zh": "芒果；芒果树",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mango"
    ],
    "example": "",
    "distractors": [
      "山",
      "没有什么",
      "合伙人"
    ]
  },
  {
    "word": "many",
    "speakText": "many",
    "spelling": "many",
    "ipa": "/ˈmɛni/",
    "pos": "det / pron",
    "zh": "许多的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "many"
    ],
    "example": "",
    "distractors": [
      "鼠",
      "布告；启事",
      "聚会"
    ]
  },
  {
    "word": "map",
    "speakText": "map",
    "spelling": "map",
    "ipa": "/mæp/",
    "pos": "n",
    "zh": "地图",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "map"
    ],
    "example": "",
    "distractors": [
      "嘴",
      "现在",
      "通过"
    ]
  },
  {
    "word": "mark",
    "speakText": "mark",
    "spelling": "mark",
    "ipa": "/mɑrk/",
    "pos": "n",
    "zh": "斑点；斑痕",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mark"
    ],
    "example": "",
    "distractors": [
      "移动；转动",
      "数字",
      "旅客；闲散人员"
    ]
  },
  {
    "word": "market",
    "speakText": "market",
    "spelling": "market",
    "ipa": "/ˈmɑrkət/",
    "pos": "n",
    "zh": "市场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "market"
    ],
    "example": "",
    "distractors": [
      "电影",
      "护士",
      "护照；途径"
    ]
  },
  {
    "word": "married",
    "speakText": "married",
    "spelling": "married",
    "ipa": "/ˈmɛrid/",
    "pos": "adj",
    "zh": "已婚的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "married"
    ],
    "example": "",
    "distractors": [
      "电影院",
      "居住",
      "过"
    ]
  },
  {
    "word": "match",
    "speakText": "match",
    "spelling": "match",
    "ipa": "/mætʃ/",
    "pos": "n",
    "zh": "比赛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "match"
    ],
    "example": "",
    "distractors": [
      "电影明星",
      "点钟",
      "意大利面食"
    ]
  },
  {
    "word": "maths/mathematics",
    "speakText": "maths",
    "spelling": "maths",
    "ipa": "/mæθs/",
    "pos": "n",
    "zh": "数学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "maths"
    ],
    "example": "",
    "distractors": [
      "播放器",
      "的",
      "小路"
    ]
  },
  {
    "word": "matter",
    "speakText": "matter",
    "spelling": "matter",
    "ipa": "/ˈmædər/",
    "pos": "n / v",
    "zh": "事情",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "matter"
    ],
    "example": "",
    "distractors": [
      "先生",
      "离开",
      "付费"
    ]
  },
  {
    "word": "may",
    "speakText": "may",
    "spelling": "may",
    "ipa": "/meɪ/",
    "pos": "mv",
    "zh": "可能",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "may"
    ],
    "example": "",
    "distractors": [
      "夫人",
      "提出",
      "梨；梨树"
    ]
  },
  {
    "word": "maybe",
    "speakText": "maybe",
    "spelling": "maybe",
    "ipa": "/ˈmeɪbi/",
    "pos": "adv",
    "zh": "也许",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "maybe"
    ],
    "example": "",
    "distractors": [
      "女士",
      "办公室；办公楼",
      "钢笔"
    ]
  },
  {
    "word": "me",
    "speakText": "me",
    "spelling": "me",
    "ipa": "/miː/",
    "pos": "pron",
    "zh": "我",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "me"
    ],
    "example": "",
    "distractors": [
      "很多的",
      "经常",
      "便士"
    ]
  },
  {
    "word": "meal",
    "speakText": "meal",
    "spelling": "meal",
    "ipa": "/mil/",
    "pos": "n",
    "zh": "一餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "meal"
    ],
    "example": "",
    "distractors": [
      "有柄大杯；一大杯",
      "啊",
      "铅笔；铅芯"
    ]
  },
  {
    "word": "mean",
    "speakText": "mean",
    "spelling": "mean",
    "ipa": "/min/",
    "pos": "v",
    "zh": "表示的意思",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mean"
    ],
    "example": "",
    "distractors": [
      "妈妈",
      "石油",
      "铅笔盒"
    ]
  },
  {
    "word": "meat",
    "speakText": "meat",
    "spelling": "meat",
    "ipa": "/mit/",
    "pos": "n",
    "zh": "食用的肉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "meat"
    ],
    "example": "",
    "distractors": [
      "博物馆",
      "表示同意或接受",
      "笔友"
    ]
  },
  {
    "word": "mechanic",
    "speakText": "mechanic",
    "spelling": "mechanic",
    "ipa": "/məˈkænɪk/",
    "pos": "n",
    "zh": "技工",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mechanic"
    ],
    "example": "",
    "distractors": [
      "蘑菇",
      "老的",
      "便士"
    ]
  },
  {
    "word": "medicine",
    "speakText": "medicine",
    "spelling": "medicine",
    "ipa": "/ˈmɛdəs(ə)n/",
    "pos": "n",
    "zh": "医学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "medicine"
    ],
    "example": "",
    "distractors": [
      "音乐",
      "煎蛋；煎蛋卷",
      "人民；民族"
    ]
  },
  {
    "word": "meet",
    "speakText": "meet",
    "spelling": "meet",
    "ipa": "/mit/",
    "pos": "v",
    "zh": "遇见；和会面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "meet"
    ],
    "example": "",
    "distractors": [
      "音乐的；有音乐天赋的",
      "在上",
      "胡椒粉；甜椒"
    ]
  },
  {
    "word": "meeting",
    "speakText": "meeting",
    "spelling": "meeting",
    "ipa": "/ˈmidɪŋ/",
    "pos": "n",
    "zh": "会议",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "meeting"
    ],
    "example": "",
    "distractors": [
      "音乐家",
      "一次",
      "每一"
    ]
  },
  {
    "word": "melon",
    "speakText": "melon",
    "spelling": "melon",
    "ipa": "/ˈmɛlən/",
    "pos": "n",
    "zh": "瓜；瓜类植物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "melon"
    ],
    "example": "",
    "distractors": [
      "必须",
      "一",
      "完美的"
    ]
  },
  {
    "word": "member",
    "speakText": "member",
    "spelling": "member",
    "ipa": "/ˈmɛmbər/",
    "pos": "n",
    "zh": "成员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "member"
    ],
    "example": "",
    "distractors": [
      "我的",
      "洋葱",
      "香水；芳香"
    ]
  },
  {
    "word": "memory",
    "speakText": "memory",
    "spelling": "memory",
    "ipa": "/ˈmɛm(ə)ri/",
    "pos": "n",
    "zh": "记忆力",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "memory"
    ],
    "example": "",
    "distractors": [
      "我自己",
      "网上的",
      "或许"
    ]
  },
  {
    "word": "menu",
    "speakText": "menu",
    "spelling": "menu",
    "ipa": "/ˈmɛnju/",
    "pos": "n",
    "zh": "菜单",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "menu"
    ],
    "example": "",
    "distractors": [
      "名字",
      "仅仅",
      "人"
    ]
  },
  {
    "word": "message",
    "speakText": "message",
    "spelling": "message",
    "ipa": "/ˈmɛsɪdʒ/",
    "pos": "n",
    "zh": "信息",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "message"
    ],
    "example": "",
    "distractors": [
      "国家的；民族的",
      "开着的；翻开的",
      "宠物；宠儿"
    ]
  },
  {
    "word": "metre",
    "speakText": "metre",
    "spelling": "metre",
    "ipa": "/ˈmidər/",
    "pos": "n",
    "zh": "米；格律",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "metre"
    ],
    "example": "",
    "distractors": [
      "国籍",
      "歌剧艺术；歌剧",
      "汽油"
    ]
  },
  {
    "word": "midday",
    "speakText": "midday",
    "spelling": "midday",
    "ipa": "/ˈmɪdˌdeɪ, ˌmɪdˈdeɪ/",
    "pos": "n",
    "zh": "正午；中午",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "midday"
    ],
    "example": "",
    "distractors": [
      "本质",
      "对立面",
      "加油站"
    ]
  },
  {
    "word": "middle",
    "speakText": "middle",
    "spelling": "middle",
    "ipa": "/ˈmɪd(ə)l/",
    "pos": "n",
    "zh": "中间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "middle"
    ],
    "example": "",
    "distractors": [
      "附近",
      "或者",
      "药房；药剂学"
    ]
  },
  {
    "word": "midnight",
    "speakText": "midnight",
    "spelling": "midnight",
    "ipa": "/ˈmɪdˌnaɪt/",
    "pos": "n",
    "zh": "午夜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "midnight"
    ],
    "example": "",
    "distractors": [
      "几乎",
      "橙子",
      "电话"
    ]
  },
  {
    "word": "might",
    "speakText": "might",
    "spelling": "might",
    "ipa": "/maɪt/",
    "pos": "mv",
    "zh": "可能",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "might"
    ],
    "example": "",
    "distractors": [
      "脖子",
      "条理",
      "照片的"
    ]
  },
  {
    "word": "mile",
    "speakText": "mile",
    "spelling": "mile",
    "ipa": "/maɪl/",
    "pos": "n",
    "zh": "英里",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mile"
    ],
    "example": "",
    "distractors": [
      "项链；项圈",
      "其他的",
      "摄影师"
    ]
  },
  {
    "word": "milk",
    "speakText": "milk",
    "spelling": "milk",
    "ipa": "/mɪlk/",
    "pos": "n",
    "zh": "奶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "milk"
    ],
    "example": "",
    "distractors": [
      "必须",
      "我们的",
      "摄影术；摄影"
    ]
  },
  {
    "word": "million",
    "speakText": "million",
    "spelling": "million",
    "ipa": "/ˈmɪljən/",
    "pos": "n",
    "zh": "一百万",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "million"
    ],
    "example": "",
    "distractors": [
      "邻居",
      "我们的",
      "物理学；物理特性"
    ]
  },
  {
    "word": "mind",
    "speakText": "mind",
    "spelling": "mind",
    "ipa": "/maɪnd/",
    "pos": "v",
    "zh": "头脑",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mind"
    ],
    "example": "",
    "distractors": [
      "网；球网",
      "我们自己",
      "钢琴"
    ]
  },
  {
    "word": "mine",
    "speakText": "mine",
    "spelling": "mine",
    "ipa": "/maɪn/",
    "pos": "pron",
    "zh": "我的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mine"
    ],
    "example": "",
    "distractors": [
      "从不",
      "在外面",
      "轻型货车；好转"
    ]
  },
  {
    "word": "mineral water",
    "speakText": "mineral water",
    "spelling": "mineralwater",
    "ipa": "/ˈmɪn(ə)r(ə)l ˌwɔdər, ˈmɪn(ə)r(ə)l ˌwɑdər/",
    "pos": "n",
    "zh": "矿泉水",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mineral water"
    ],
    "example": "",
    "distractors": [
      "新的",
      "在露天；在户外",
      "野餐"
    ]
  },
  {
    "word": "minus",
    "speakText": "minus",
    "spelling": "minus",
    "ipa": "/ˈmaɪnəs/",
    "pos": "prep",
    "zh": "减去",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "minus"
    ],
    "example": "",
    "distractors": [
      "消息；新闻",
      "从……出来；离开",
      "图画"
    ]
  },
  {
    "word": "minute",
    "speakText": "minute",
    "spelling": "minute",
    "ipa": "/ˈmɪnət/",
    "pos": "n",
    "zh": "分",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "minute"
    ],
    "example": "",
    "distractors": [
      "报纸",
      "外面；在外面",
      "块"
    ]
  },
  {
    "word": "mirror",
    "speakText": "mirror",
    "spelling": "mirror",
    "ipa": "/ˈmɪrər/",
    "pos": "n",
    "zh": "镜子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mirror"
    ],
    "example": "",
    "distractors": [
      "紧接着的",
      "在上方",
      "枕头；垫子"
    ]
  },
  {
    "word": "Miss",
    "speakText": "Miss",
    "spelling": "miss",
    "ipa": "/mɪs/",
    "pos": "n",
    "zh": "未击中；未接住",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Miss"
    ],
    "example": "",
    "distractors": [
      "在……旁边",
      "自己的",
      "飞行员"
    ]
  },
  {
    "word": "missing",
    "speakText": "missing",
    "spelling": "missing",
    "ipa": "/ˈmɪsɪŋ/",
    "pos": "adj",
    "zh": "丢失的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "missing"
    ],
    "example": "",
    "distractors": [
      "令人愉快的",
      "盒",
      "粉红色的；绯红的"
    ]
  },
  {
    "word": "mistake",
    "speakText": "mistake",
    "spelling": "mistake",
    "ipa": "/məˈsteɪk/",
    "pos": "n",
    "zh": "错误；误解",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mistake"
    ],
    "example": "",
    "distractors": [
      "夜晚",
      "页",
      "同情"
    ]
  },
  {
    "word": "mix",
    "speakText": "mix",
    "spelling": "mix",
    "ipa": "/mɪks/",
    "pos": "v",
    "zh": "使混合",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mix"
    ],
    "example": "",
    "distractors": [
      "不",
      "痛苦",
      "比萨饼"
    ]
  },
  {
    "word": "model",
    "speakText": "model",
    "spelling": "model",
    "ipa": "/ˈmɑd(ə)l/",
    "pos": "n",
    "zh": "模型",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "model"
    ],
    "example": "",
    "distractors": [
      "没有人",
      "油漆",
      "地点；地方"
    ]
  },
  {
    "word": "modern",
    "speakText": "modern",
    "spelling": "modern",
    "ipa": "/ˈmɑdərn/",
    "pos": "adj",
    "zh": "当今的；近代的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "modern"
    ],
    "example": "",
    "distractors": [
      "声音",
      "画家",
      "计划；规划"
    ]
  },
  {
    "word": "moment",
    "speakText": "moment",
    "spelling": "moment",
    "ipa": "/ˈmoʊm(ə)nt/",
    "pos": "n",
    "zh": "片刻",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "moment"
    ],
    "example": "",
    "distractors": [
      "喧闹的",
      "绘画",
      "飞机"
    ]
  },
  {
    "word": "money",
    "speakText": "money",
    "spelling": "money",
    "ipa": "/ˈməni/",
    "pos": "n",
    "zh": "钱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "money"
    ],
    "example": "",
    "distractors": [
      "中午；正午",
      "苍白的；白皙的",
      "植物"
    ]
  },
  {
    "word": "monkey",
    "speakText": "monkey",
    "spelling": "monkey",
    "ipa": "/ˈməŋki/",
    "pos": "n",
    "zh": "猴子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "monkey"
    ],
    "example": "",
    "distractors": [
      "没有人",
      "一双；一对",
      "塑料；信用卡"
    ]
  },
  {
    "word": "month",
    "speakText": "month",
    "spelling": "month",
    "ipa": "/mən(t)θ/",
    "pos": "n",
    "zh": "月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "month"
    ],
    "example": "",
    "distractors": [
      "通常的",
      "纸",
      "盘子；碟子"
    ]
  },
  {
    "word": "monthly",
    "speakText": "monthly",
    "spelling": "monthly",
    "ipa": "/ˈmən(t)θli/",
    "pos": "adj / adv",
    "zh": "每月一次的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "monthly"
    ],
    "example": "",
    "distractors": [
      "北；北方",
      "原谅",
      "舞台；讲台"
    ]
  },
  {
    "word": "moon",
    "speakText": "moon",
    "spelling": "moon",
    "ipa": "/mun/",
    "pos": "n",
    "zh": "月球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "moon"
    ],
    "example": "",
    "distractors": [
      "鼻子",
      "父亲；母亲",
      "玩耍"
    ]
  },
  {
    "word": "more",
    "speakText": "more",
    "spelling": "more",
    "ipa": "/mɔr/",
    "pos": "adj, adv, det / pron",
    "zh": "更多的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "more"
    ],
    "example": "",
    "distractors": [
      "不",
      "公园；园区",
      "运动员；球员"
    ]
  },
  {
    "word": "morning",
    "speakText": "morning",
    "spelling": "morning",
    "ipa": "/ˈmɔrnɪŋ/",
    "pos": "n",
    "zh": "上午；早晨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "morning"
    ],
    "example": "",
    "distractors": [
      "笔记",
      "停车场",
      "游乐场"
    ]
  },
  {
    "word": "most",
    "speakText": "most",
    "spelling": "most",
    "ipa": "/moʊst/",
    "pos": "adj, adv, det / pron",
    "zh": "大多数的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "most"
    ],
    "example": "",
    "distractors": [
      "笔记本；笔记本电脑",
      "部分",
      "悦耳的；悦目的"
    ]
  },
  {
    "word": "mother",
    "speakText": "mother",
    "spelling": "mother",
    "ipa": "/ˈməðər/",
    "pos": "n",
    "zh": "母亲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mother"
    ],
    "example": "",
    "distractors": [
      "没有什么",
      "合伙人",
      "请"
    ]
  },
  {
    "word": "motorbike",
    "speakText": "motorbike",
    "spelling": "motorbike",
    "ipa": "/ˈmoʊdərˌbaɪk/",
    "pos": "n",
    "zh": "摩托车；机动自行车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "motorbike"
    ],
    "example": "",
    "distractors": [
      "布告；启事",
      "聚会",
      "高兴的"
    ]
  },
  {
    "word": "motorway",
    "speakText": "motorway",
    "spelling": "motorway",
    "ipa": "/ˈmoʊdərˌweɪ/",
    "pos": "n",
    "zh": "高速公路；高速公路的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "motorway"
    ],
    "example": "",
    "distractors": [
      "现在",
      "通过",
      "加"
    ]
  },
  {
    "word": "mountain",
    "speakText": "mountain",
    "spelling": "mountain",
    "ipa": "/ˈmaʊnt(ə)n/",
    "pos": "n",
    "zh": "山",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mountain"
    ],
    "example": "",
    "distractors": [
      "数字",
      "旅客；闲散人员",
      "下午；午后"
    ]
  },
  {
    "word": "mouse",
    "speakText": "mouse",
    "spelling": "mouse",
    "ipa": "/maʊs/",
    "pos": "n",
    "zh": "鼠",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mouse"
    ],
    "example": "",
    "distractors": [
      "护士",
      "护照；途径",
      "衣袋"
    ]
  },
  {
    "word": "mouth",
    "speakText": "mouth",
    "spelling": "mouth",
    "ipa": "/maʊθ/",
    "pos": "n",
    "zh": "嘴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mouth"
    ],
    "example": "",
    "distractors": [
      "居住",
      "过",
      "尖；尖头"
    ]
  },
  {
    "word": "move",
    "speakText": "move",
    "spelling": "move",
    "ipa": "/muv/",
    "pos": "v",
    "zh": "移动；转动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "move"
    ],
    "example": "",
    "distractors": [
      "点钟",
      "意大利面食",
      "警察部门"
    ]
  },
  {
    "word": "movie",
    "speakText": "movie",
    "spelling": "movie",
    "ipa": "/ˈmuvi/",
    "pos": "n",
    "zh": "电影",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "movie"
    ],
    "example": "",
    "distractors": [
      "的",
      "小路",
      "警车"
    ]
  },
  {
    "word": "movie theater",
    "speakText": "movie theater",
    "spelling": "movietheater",
    "ipa": "/ˈmuːvi ˌθiːətər/",
    "pos": "n",
    "zh": "电影院",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "movie theater"
    ],
    "example": "",
    "distractors": [
      "离开",
      "付费",
      "警察"
    ]
  },
  {
    "word": "movie star",
    "speakText": "movie star",
    "spelling": "moviestar",
    "ipa": "/ˈmuːvi stɑːr/",
    "pos": "n",
    "zh": "电影明星",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "movie star"
    ],
    "example": "",
    "distractors": [
      "提出",
      "梨；梨树",
      "警察局"
    ]
  },
  {
    "word": "MP3 player",
    "speakText": "MP3 player",
    "spelling": "mpplayer",
    "ipa": "/ɛmpiˈθri ˌpleɪər/",
    "pos": "n",
    "zh": "播放器",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "MP3 player"
    ],
    "example": "",
    "distractors": [
      "办公室；办公楼",
      "钢笔",
      "有礼貌的"
    ]
  },
  {
    "word": "Mr",
    "speakText": "Mr",
    "spelling": "mr",
    "ipa": "/ˈmɪstər/",
    "pos": "n",
    "zh": "先生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Mr"
    ],
    "example": "",
    "distractors": [
      "经常",
      "便士",
      "池塘；水潭"
    ]
  },
  {
    "word": "Mrs",
    "speakText": "Mrs",
    "spelling": "mrs",
    "ipa": "/ˈmɪsəz/",
    "pos": "n",
    "zh": "夫人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Mrs"
    ],
    "example": "",
    "distractors": [
      "啊",
      "铅笔；铅芯",
      "贫穷的；不足的"
    ]
  },
  {
    "word": "Ms",
    "speakText": "Ms",
    "spelling": "ms",
    "ipa": "/mɪz, məz/",
    "pos": "n",
    "zh": "女士",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Ms"
    ],
    "example": "",
    "distractors": [
      "石油",
      "铅笔盒",
      "砰"
    ]
  },
  {
    "word": "much",
    "speakText": "much",
    "spelling": "much",
    "ipa": "/mətʃ/",
    "pos": "adj, adv, det / pron",
    "zh": "很多的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "much"
    ],
    "example": "",
    "distractors": [
      "表示同意或接受",
      "笔友",
      "受欢迎的；讨人喜欢的"
    ]
  },
  {
    "word": "mug",
    "speakText": "mug",
    "spelling": "mug",
    "ipa": "/məɡ/",
    "pos": "n",
    "zh": "有柄大杯；一大杯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mug"
    ],
    "example": "",
    "distractors": [
      "老的",
      "便士",
      "能做到的"
    ]
  },
  {
    "word": "mum",
    "speakText": "mum",
    "spelling": "mum",
    "ipa": "/məm/",
    "pos": "n",
    "zh": "妈妈",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mum"
    ],
    "example": "",
    "distractors": [
      "煎蛋；煎蛋卷",
      "人民；民族",
      "也许"
    ]
  },
  {
    "word": "museum",
    "speakText": "museum",
    "spelling": "museum",
    "ipa": "/mjuˈziəm/",
    "pos": "n",
    "zh": "博物馆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "museum"
    ],
    "example": "",
    "distractors": [
      "在上",
      "胡椒粉；甜椒",
      "柱；标志杆"
    ]
  },
  {
    "word": "mushroom",
    "speakText": "mushroom",
    "spelling": "mushroom",
    "ipa": "/ˈməʃˌrum, ˈməʃˌrʊm/",
    "pos": "n",
    "zh": "蘑菇",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "mushroom"
    ],
    "example": "",
    "distractors": [
      "一次",
      "每一",
      "明信片"
    ]
  },
  {
    "word": "music",
    "speakText": "music",
    "spelling": "music",
    "ipa": "/ˈmjuzɪk/",
    "pos": "n",
    "zh": "音乐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "music"
    ],
    "example": "",
    "distractors": [
      "一",
      "完美的",
      "海报"
    ]
  },
  {
    "word": "musical",
    "speakText": "musical",
    "spelling": "musical",
    "ipa": "/ˈmjuzək(ə)l/",
    "pos": "adj",
    "zh": "音乐的；有音乐天赋的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "musical"
    ],
    "example": "",
    "distractors": [
      "洋葱",
      "香水；芳香",
      "邮局"
    ]
  },
  {
    "word": "musician",
    "speakText": "musician",
    "spelling": "musician",
    "ipa": "/mjuˈzɪʃən/",
    "pos": "n",
    "zh": "音乐家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "musician"
    ],
    "example": "",
    "distractors": [
      "网上的",
      "或许",
      "土豆；马铃薯"
    ]
  },
  {
    "word": "must",
    "speakText": "must",
    "spelling": "must",
    "ipa": "/məst/",
    "pos": "mv",
    "zh": "必须",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "must"
    ],
    "example": "",
    "distractors": [
      "仅仅",
      "人",
      "实践"
    ]
  },
  {
    "word": "my",
    "speakText": "my",
    "spelling": "my",
    "ipa": "/maɪ/",
    "pos": "det",
    "zh": "我的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "my"
    ],
    "example": "",
    "distractors": [
      "开着的；翻开的",
      "宠物；宠儿",
      "练习"
    ]
  },
  {
    "word": "myself",
    "speakText": "myself",
    "spelling": "myself",
    "ipa": "/maɪˈsɛlf, məˈsɛlf/",
    "pos": "pron",
    "zh": "我自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "myself"
    ],
    "example": "",
    "distractors": [
      "歌剧艺术；歌剧",
      "汽油",
      "较喜欢"
    ]
  },
  {
    "word": "name",
    "speakText": "name",
    "spelling": "name",
    "ipa": "/neɪm/",
    "pos": "n",
    "zh": "名字",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "name"
    ],
    "example": "",
    "distractors": [
      "对立面",
      "加油站",
      "准备；布置"
    ]
  },
  {
    "word": "national",
    "speakText": "national",
    "spelling": "national",
    "ipa": "/ˈnæʃən(ə)l, ˈnæʃn(ə)l/",
    "pos": "adj",
    "zh": "国家的；民族的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "national"
    ],
    "example": "",
    "distractors": [
      "或者",
      "药房；药剂学",
      "礼物；现在的"
    ]
  },
  {
    "word": "nationality",
    "speakText": "nationality",
    "spelling": "nationality",
    "ipa": "/ˌnæʃəˈnælədi/",
    "pos": "n",
    "zh": "国籍",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nationality"
    ],
    "example": "",
    "distractors": [
      "橙子",
      "电话",
      "漂亮的；悦耳的"
    ]
  },
  {
    "word": "nature",
    "speakText": "nature",
    "spelling": "nature",
    "ipa": "/ˈneɪtʃər/",
    "pos": "n",
    "zh": "本质",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nature"
    ],
    "example": "",
    "distractors": [
      "条理",
      "照片的",
      "价格"
    ]
  },
  {
    "word": "near",
    "speakText": "near",
    "spelling": "near",
    "ipa": "/nɪr/",
    "pos": "adv / prep",
    "zh": "附近",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "near"
    ],
    "example": "",
    "distractors": [
      "其他的",
      "摄影师",
      "字体"
    ]
  },
  {
    "word": "nearly",
    "speakText": "nearly",
    "spelling": "nearly",
    "ipa": "/ˈnɪrli/",
    "pos": "adv",
    "zh": "几乎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nearly"
    ],
    "example": "",
    "distractors": [
      "我们的",
      "摄影术；摄影",
      "打印机；印刷工人"
    ]
  },
  {
    "word": "neck",
    "speakText": "neck",
    "spelling": "neck",
    "ipa": "/nɛk/",
    "pos": "n",
    "zh": "脖子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "neck"
    ],
    "example": "",
    "distractors": [
      "我们的",
      "物理学；物理特性",
      "奖品；奖"
    ]
  },
  {
    "word": "necklace",
    "speakText": "necklace",
    "spelling": "necklace",
    "ipa": "/ˈnɛkləs/",
    "pos": "n",
    "zh": "项链；项圈",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "necklace"
    ],
    "example": "",
    "distractors": [
      "我们自己",
      "钢琴",
      "很可能"
    ]
  },
  {
    "word": "need",
    "speakText": "need",
    "spelling": "need",
    "ipa": "/nid/",
    "pos": "v",
    "zh": "必须",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "need"
    ],
    "example": "",
    "distractors": [
      "在外面",
      "轻型货车；好转",
      "问题"
    ]
  },
  {
    "word": "neighbour",
    "speakText": "neighbour",
    "spelling": "neighbour",
    "ipa": "/ˈneɪbər/",
    "pos": "n",
    "zh": "邻居",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "neighbour"
    ],
    "example": "",
    "distractors": [
      "在露天；在户外",
      "野餐",
      "程序"
    ]
  },
  {
    "word": "net",
    "speakText": "net",
    "spelling": "net",
    "ipa": "/nɛt/",
    "pos": "n",
    "zh": "网；球网",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "net"
    ],
    "example": "",
    "distractors": [
      "从……出来；离开",
      "图画",
      "计划；日程"
    ]
  },
  {
    "word": "never",
    "speakText": "never",
    "spelling": "never",
    "ipa": "/ˈnɛvər/",
    "pos": "adv",
    "zh": "从不",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "never"
    ],
    "example": "",
    "distractors": [
      "外面；在外面",
      "块",
      "项目；方案"
    ]
  },
  {
    "word": "new",
    "speakText": "new",
    "spelling": "new",
    "ipa": "/nu/",
    "pos": "adj",
    "zh": "新的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "new"
    ],
    "example": "",
    "distractors": [
      "在上方",
      "枕头；垫子",
      "拉"
    ]
  },
  {
    "word": "news",
    "speakText": "news",
    "spelling": "news",
    "ipa": "/nuz/",
    "pos": "n",
    "zh": "消息；新闻",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "news"
    ],
    "example": "",
    "distractors": [
      "自己的",
      "飞行员",
      "小学生"
    ]
  },
  {
    "word": "newspaper",
    "speakText": "newspaper",
    "spelling": "newspaper",
    "ipa": "/ˈnuzˌpeɪpər/",
    "pos": "n",
    "zh": "报纸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "newspaper"
    ],
    "example": "",
    "distractors": [
      "盒",
      "粉红色的；绯红的",
      "紫色的"
    ]
  },
  {
    "word": "next",
    "speakText": "next",
    "spelling": "next",
    "ipa": "/nɛkst/",
    "pos": "adj / adv",
    "zh": "紧接着的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "next"
    ],
    "example": "",
    "distractors": [
      "页",
      "同情",
      "手提包"
    ]
  },
  {
    "word": "next to",
    "speakText": "next to",
    "spelling": "nextto",
    "ipa": "/nekst tuː/",
    "pos": "prep",
    "zh": "在……旁边",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "next to"
    ],
    "example": "",
    "distractors": [
      "痛苦",
      "比萨饼",
      "推"
    ]
  },
  {
    "word": "nice",
    "speakText": "nice",
    "spelling": "nice",
    "ipa": "/naɪs/",
    "pos": "adj",
    "zh": "令人愉快的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nice"
    ],
    "example": "",
    "distractors": [
      "油漆",
      "地点；地方",
      "安置；放"
    ]
  },
  {
    "word": "night",
    "speakText": "night",
    "spelling": "night",
    "ipa": "/naɪt/",
    "pos": "n",
    "zh": "夜晚",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "night"
    ],
    "example": "",
    "distractors": [
      "画家",
      "计划；规划",
      "安置；放"
    ]
  },
  {
    "word": "no",
    "speakText": "no",
    "spelling": "no",
    "ipa": "/noʊ/",
    "pos": "adv, det / pron",
    "zh": "不",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "no"
    ],
    "example": "",
    "distractors": [
      "绘画",
      "飞机",
      "谜"
    ]
  },
  {
    "word": "nobody",
    "speakText": "nobody",
    "spelling": "nobody",
    "ipa": "/ˈnoʊˌbɑdi, ˈnoʊbədi/",
    "pos": "pron",
    "zh": "没有人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nobody"
    ],
    "example": "",
    "distractors": [
      "苍白的；白皙的",
      "植物",
      "四分之一"
    ]
  },
  {
    "word": "noise",
    "speakText": "noise",
    "spelling": "noise",
    "ipa": "/nɔɪz/",
    "pos": "n",
    "zh": "声音",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "noise"
    ],
    "example": "",
    "distractors": [
      "一双；一对",
      "塑料；信用卡",
      "女王；王后"
    ]
  },
  {
    "word": "noisy",
    "speakText": "noisy",
    "spelling": "noisy",
    "ipa": "/ˈnɔɪzi/",
    "pos": "adj",
    "zh": "喧闹的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "noisy"
    ],
    "example": "",
    "distractors": [
      "纸",
      "盘子；碟子",
      "问题"
    ]
  },
  {
    "word": "noon",
    "speakText": "noon",
    "spelling": "noon",
    "ipa": "/nun/",
    "pos": "n",
    "zh": "中午；正午",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "noon"
    ],
    "example": "",
    "distractors": [
      "原谅",
      "舞台；讲台",
      "快的"
    ]
  },
  {
    "word": "no one",
    "speakText": "no one",
    "spelling": "noone",
    "ipa": "/noʊ wʌn/",
    "pos": "pron",
    "zh": "没有人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "no one"
    ],
    "example": "",
    "distractors": [
      "父亲；母亲",
      "玩耍",
      "快速地"
    ]
  },
  {
    "word": "normal",
    "speakText": "normal",
    "spelling": "normal",
    "ipa": "/ˈnɔrm(ə)l/",
    "pos": "adj",
    "zh": "通常的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "normal"
    ],
    "example": "",
    "distractors": [
      "公园；园区",
      "运动员；球员",
      "安静的；轻声的"
    ]
  },
  {
    "word": "north",
    "speakText": "north",
    "spelling": "north",
    "ipa": "/nɔrθ/",
    "pos": "n, adj / adv",
    "zh": "北；北方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "north"
    ],
    "example": "",
    "distractors": [
      "停车场",
      "游乐场",
      "比较"
    ]
  },
  {
    "word": "nose",
    "speakText": "nose",
    "spelling": "nose",
    "ipa": "/noʊz/",
    "pos": "n",
    "zh": "鼻子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nose"
    ],
    "example": "",
    "distractors": [
      "部分",
      "悦耳的；悦目的",
      "知识竞赛"
    ]
  },
  {
    "word": "not",
    "speakText": "not",
    "spelling": "not",
    "ipa": "/nɑt/",
    "pos": "adv",
    "zh": "不",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "not"
    ],
    "example": "",
    "distractors": [
      "合伙人",
      "请",
      "兔；兔皮"
    ]
  },
  {
    "word": "note",
    "speakText": "note",
    "spelling": "note",
    "ipa": "/noʊt/",
    "pos": "n / v",
    "zh": "笔记",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "note"
    ],
    "example": "",
    "distractors": [
      "聚会",
      "高兴的",
      "速度竞赛"
    ]
  },
  {
    "word": "notebook",
    "speakText": "notebook",
    "spelling": "notebook",
    "ipa": "/ˈnoʊtˌbʊk/",
    "pos": "n",
    "zh": "笔记本；笔记本电脑",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "notebook"
    ],
    "example": "",
    "distractors": [
      "通过",
      "加",
      "停止；车站"
    ]
  },
  {
    "word": "nothing",
    "speakText": "nothing",
    "spelling": "nothing",
    "ipa": "/ˈnəθɪŋ/",
    "pos": "pron",
    "zh": "没有什么",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nothing"
    ],
    "example": "",
    "distractors": [
      "旅客；闲散人员",
      "下午；午后",
      "球拍"
    ]
  },
  {
    "word": "notice",
    "speakText": "notice",
    "spelling": "notice",
    "ipa": "/ˈnoʊdəs/",
    "pos": "n",
    "zh": "布告；启事",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "notice"
    ],
    "example": "",
    "distractors": [
      "护照；途径",
      "衣袋",
      "无线电"
    ]
  },
  {
    "word": "now",
    "speakText": "now",
    "spelling": "now",
    "ipa": "/naʊ/",
    "pos": "adv",
    "zh": "现在",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "now"
    ],
    "example": "",
    "distractors": [
      "过",
      "尖；尖头",
      "铁路"
    ]
  },
  {
    "word": "number",
    "speakText": "number",
    "spelling": "number",
    "ipa": "/ˈnəmbər/",
    "pos": "n",
    "zh": "数字",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "number"
    ],
    "example": "",
    "distractors": [
      "意大利面食",
      "警察部门",
      "雨"
    ]
  },
  {
    "word": "nurse",
    "speakText": "nurse",
    "spelling": "nurse",
    "ipa": "/nərs/",
    "pos": "n",
    "zh": "护士",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nurse"
    ],
    "example": "",
    "distractors": [
      "小路",
      "警车",
      "雨衣"
    ]
  },
  {
    "word": "occupation",
    "speakText": "occupation",
    "spelling": "occupation",
    "ipa": "/ˌɑkjəˈpeɪʃən/",
    "pos": "n",
    "zh": "居住",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "occupation"
    ],
    "example": "",
    "distractors": [
      "付费",
      "警察",
      "敲；敲打"
    ]
  },
  {
    "word": "o'clock",
    "speakText": "o'clock",
    "spelling": "oclock",
    "ipa": "/əˈklɑk/",
    "pos": "adv",
    "zh": "点钟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "o'clock"
    ],
    "example": "",
    "distractors": [
      "梨；梨树",
      "警察局",
      "读；读的作品"
    ]
  },
  {
    "word": "of",
    "speakText": "of",
    "spelling": "of",
    "ipa": "/əv, ə(v)/",
    "pos": "prep",
    "zh": "的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "of"
    ],
    "example": "",
    "distractors": [
      "钢笔",
      "有礼貌的",
      "阅读"
    ]
  },
  {
    "word": "off",
    "speakText": "off",
    "spelling": "off",
    "ipa": "/ɔf, ɑf/",
    "pos": "adv",
    "zh": "离开",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "off"
    ],
    "example": "",
    "distractors": [
      "便士",
      "池塘；水潭",
      "准备好的"
    ]
  },
  {
    "word": "offer",
    "speakText": "offer",
    "spelling": "offer",
    "ipa": "/ˈɔfər, ˈɑfər/",
    "pos": "n / v",
    "zh": "提出",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "offer"
    ],
    "example": "",
    "distractors": [
      "铅笔；铅芯",
      "贫穷的；不足的",
      "实际存在的"
    ]
  },
  {
    "word": "office",
    "speakText": "office",
    "spelling": "office",
    "ipa": "/ˈɔfəs, ˈɑfəs/",
    "pos": "n",
    "zh": "办公室；办公楼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "office"
    ],
    "example": "",
    "distractors": [
      "铅笔盒",
      "砰",
      "真正地"
    ]
  },
  {
    "word": "often",
    "speakText": "often",
    "spelling": "often",
    "ipa": "/ˈɔf(ə)n, ˈɑft(ə)n/",
    "pos": "adv",
    "zh": "经常",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "often"
    ],
    "example": "",
    "distractors": [
      "笔友",
      "受欢迎的；讨人喜欢的",
      "原因；理由"
    ]
  },
  {
    "word": "oh",
    "speakText": "oh",
    "spelling": "oh",
    "ipa": "/oʊ/",
    "pos": "exclam",
    "zh": "啊",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "oh"
    ],
    "example": "",
    "distractors": [
      "便士",
      "能做到的",
      "收据"
    ]
  },
  {
    "word": "oil",
    "speakText": "oil",
    "spelling": "oil",
    "ipa": "/ɔɪl/",
    "pos": "n",
    "zh": "石油",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "oil"
    ],
    "example": "",
    "distractors": [
      "人民；民族",
      "也许",
      "收到；接到"
    ]
  },
  {
    "word": "OK/okay",
    "speakText": "OK",
    "spelling": "ok",
    "ipa": "/ˌoʊˈkeɪ/",
    "pos": "exclam",
    "zh": "表示同意或接受",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "OK"
    ],
    "example": "",
    "distractors": [
      "胡椒粉；甜椒",
      "柱；标志杆",
      "接待员"
    ]
  },
  {
    "word": "old",
    "speakText": "old",
    "spelling": "old",
    "ipa": "/oʊld/",
    "pos": "adj",
    "zh": "老的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "old"
    ],
    "example": "",
    "distractors": [
      "每一",
      "明信片",
      "记录；记载"
    ]
  },
  {
    "word": "omelette",
    "speakText": "omelette",
    "spelling": "omelette",
    "ipa": "/ˈɑmlət/",
    "pos": "n",
    "zh": "煎蛋；煎蛋卷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "omelette"
    ],
    "example": "",
    "distractors": [
      "完美的",
      "海报",
      "红色的"
    ]
  },
  {
    "word": "on",
    "speakText": "on",
    "spelling": "on",
    "ipa": "/ɔn, ɑn/",
    "pos": "prep / adv",
    "zh": "在上",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "on"
    ],
    "example": "",
    "distractors": [
      "香水；芳香",
      "邮局",
      "冰箱；冷库"
    ]
  },
  {
    "word": "once",
    "speakText": "once",
    "spelling": "once",
    "ipa": "/wən(t)s/",
    "pos": "adv",
    "zh": "一次",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "once"
    ],
    "example": "",
    "distractors": [
      "或许",
      "土豆；马铃薯",
      "记得"
    ]
  },
  {
    "word": "one",
    "speakText": "one",
    "spelling": "one",
    "ipa": "/wən/",
    "pos": "det / pron",
    "zh": "一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "one"
    ],
    "example": "",
    "distractors": [
      "人",
      "实践",
      "租金"
    ]
  },
  {
    "word": "onion",
    "speakText": "onion",
    "spelling": "onion",
    "ipa": "/ˈənj(ə)n/",
    "pos": "n",
    "zh": "洋葱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "onion"
    ],
    "example": "",
    "distractors": [
      "宠物；宠儿",
      "练习",
      "修理；整修"
    ]
  },
  {
    "word": "online",
    "speakText": "online",
    "spelling": "online",
    "ipa": "/ˌɑnˈlaɪn/",
    "pos": "adj / adv",
    "zh": "网上的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "online"
    ],
    "example": "",
    "distractors": [
      "汽油",
      "较喜欢",
      "重复说；重复写"
    ]
  },
  {
    "word": "only",
    "speakText": "only",
    "spelling": "only",
    "ipa": "/ˈoʊnli/",
    "pos": "adv / adj",
    "zh": "仅仅",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "only"
    ],
    "example": "",
    "distractors": [
      "加油站",
      "准备；布置",
      "休息"
    ]
  },
  {
    "word": "open",
    "speakText": "open",
    "spelling": "open",
    "ipa": "/ˈoʊp(ə)n/",
    "pos": "adj / v",
    "zh": "开着的；翻开的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "open"
    ],
    "example": "",
    "distractors": [
      "药房；药剂学",
      "礼物；现在的",
      "餐馆"
    ]
  },
  {
    "word": "opera",
    "speakText": "opera",
    "spelling": "opera",
    "ipa": "/ˈɑp(ə)rə/",
    "pos": "n",
    "zh": "歌剧艺术；歌剧",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "opera"
    ],
    "example": "",
    "distractors": [
      "电话",
      "漂亮的；悦耳的",
      "返回；回家"
    ]
  },
  {
    "word": "opposite",
    "speakText": "opposite",
    "spelling": "opposite",
    "ipa": "/ˈɑpəzət/",
    "pos": "prep",
    "zh": "对立面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "opposite"
    ],
    "example": "",
    "distractors": [
      "照片的",
      "价格",
      "书；预订"
    ]
  },
  {
    "word": "or",
    "speakText": "or",
    "spelling": "or",
    "ipa": "/ɔr, ər/",
    "pos": "conj",
    "zh": "或者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "or"
    ],
    "example": "",
    "distractors": [
      "摄影师",
      "字体",
      "水稻"
    ]
  },
  {
    "word": "orange",
    "speakText": "orange",
    "spelling": "orange",
    "ipa": "/ˈɔr(ə)ndʒ, ˈɑr(ə)ndʒ/",
    "pos": "adj / n",
    "zh": "橙子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "orange"
    ],
    "example": "",
    "distractors": [
      "摄影术；摄影",
      "打印机；印刷工人",
      "富有的"
    ]
  },
  {
    "word": "order",
    "speakText": "order",
    "spelling": "order",
    "ipa": "/ˈɔrdər/",
    "pos": "n",
    "zh": "条理",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "order"
    ],
    "example": "",
    "distractors": [
      "物理学；物理特性",
      "奖品；奖",
      "骑；骑参赛"
    ]
  },
  {
    "word": "other",
    "speakText": "other",
    "spelling": "other",
    "ipa": "/ˈəðər/",
    "pos": "det / pron",
    "zh": "其他的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "other"
    ],
    "example": "",
    "distractors": [
      "钢琴",
      "很可能",
      "正当"
    ]
  },
  {
    "word": "our",
    "speakText": "our",
    "spelling": "our",
    "ipa": "/ˈaʊ(ə)r, ɑr/",
    "pos": "det",
    "zh": "我们的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "our"
    ],
    "example": "",
    "distractors": [
      "轻型货车；好转",
      "问题",
      "右手"
    ]
  },
  {
    "word": "ours",
    "speakText": "ours",
    "spelling": "ours",
    "ipa": "/ˈaʊ(ə)rz, ɑrz/",
    "pos": "pron",
    "zh": "我们的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ours"
    ],
    "example": "",
    "distractors": [
      "野餐",
      "程序",
      "戒指；趾环"
    ]
  },
  {
    "word": "ourselves",
    "speakText": "ourselves",
    "spelling": "ourselves",
    "ipa": "/aʊrˈsɛlvz, ɑrˈsɛlvz/",
    "pos": "pron",
    "zh": "我们自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ourselves"
    ],
    "example": "",
    "distractors": [
      "图画",
      "计划；日程",
      "河流"
    ]
  },
  {
    "word": "out",
    "speakText": "out",
    "spelling": "out",
    "ipa": "/aʊt/",
    "pos": "adv",
    "zh": "在外面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "out"
    ],
    "example": "",
    "distractors": [
      "块",
      "项目；方案",
      "道路"
    ]
  },
  {
    "word": "outdoors",
    "speakText": "outdoors",
    "spelling": "outdoors",
    "ipa": "/ˌaʊtˈdɔrz/",
    "pos": "adv",
    "zh": "在露天；在户外",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "outdoors"
    ],
    "example": "",
    "distractors": [
      "枕头；垫子",
      "拉",
      "烤；烘焙"
    ]
  },
  {
    "word": "out of",
    "speakText": "out of",
    "spelling": "outof",
    "ipa": "/aʊt əv/",
    "pos": "prep",
    "zh": "从……出来；离开",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "out of"
    ],
    "example": "",
    "distractors": [
      "飞行员",
      "小学生",
      "岩石"
    ]
  },
  {
    "word": "outside",
    "speakText": "outside",
    "spelling": "outside",
    "ipa": "/ˌaʊtˈsaɪd/",
    "pos": "prep / adv",
    "zh": "外面；在外面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "outside"
    ],
    "example": "",
    "distractors": [
      "粉红色的；绯红的",
      "紫色的",
      "屋顶；车顶"
    ]
  },
  {
    "word": "over",
    "speakText": "over",
    "spelling": "over",
    "ipa": "/ˈoʊvər/",
    "pos": "prep / adv",
    "zh": "在上方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "over"
    ],
    "example": "",
    "distractors": [
      "同情",
      "手提包",
      "房间"
    ]
  },
  {
    "word": "own",
    "speakText": "own",
    "spelling": "own",
    "ipa": "/oʊn/",
    "pos": "adj",
    "zh": "自己的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "own"
    ],
    "example": "",
    "distractors": [
      "比萨饼",
      "推",
      "圆形的"
    ]
  },
  {
    "word": "pack",
    "speakText": "pack",
    "spelling": "pack",
    "ipa": "/pæk/",
    "pos": "v",
    "zh": "盒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pack"
    ],
    "example": "",
    "distractors": [
      "地点；地方",
      "安置；放",
      "旋转木马；旋转平台"
    ]
  },
  {
    "word": "page",
    "speakText": "page",
    "spelling": "page",
    "ipa": "/peɪdʒ/",
    "pos": "n",
    "zh": "页",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "page"
    ],
    "example": "",
    "distractors": [
      "计划；规划",
      "安置；放",
      "橡胶"
    ]
  },
  {
    "word": "pain",
    "speakText": "pain",
    "spelling": "pain",
    "ipa": "/peɪn/",
    "pos": "n",
    "zh": "痛苦",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pain"
    ],
    "example": "",
    "distractors": [
      "飞机",
      "谜",
      "统治者；直尺"
    ]
  },
  {
    "word": "paint",
    "speakText": "paint",
    "spelling": "paint",
    "ipa": "/peɪnt/",
    "pos": "v / n",
    "zh": "油漆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "paint"
    ],
    "example": "",
    "distractors": [
      "植物",
      "四分之一",
      "跑；经营"
    ]
  },
  {
    "word": "painter",
    "speakText": "painter",
    "spelling": "painter",
    "ipa": "/ˈpeɪn(t)ər/",
    "pos": "n",
    "zh": "画家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "painter"
    ],
    "example": "",
    "distractors": [
      "塑料；信用卡",
      "女王；王后",
      "奔跑的人；奔跑的动物"
    ]
  },
  {
    "word": "painting",
    "speakText": "painting",
    "spelling": "painting",
    "ipa": "/ˈpeɪn(t)ɪŋ/",
    "pos": "n",
    "zh": "绘画",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "painting"
    ],
    "example": "",
    "distractors": [
      "盘子；碟子",
      "问题",
      "跑步"
    ]
  },
  {
    "word": "pale",
    "speakText": "pale",
    "spelling": "pale",
    "ipa": "/peɪl/",
    "pos": "adj",
    "zh": "苍白的；白皙的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pale"
    ],
    "example": "",
    "distractors": [
      "舞台；讲台",
      "快的",
      "悲伤的"
    ]
  },
  {
    "word": "pair",
    "speakText": "pair",
    "spelling": "pair",
    "ipa": "/pɛr/",
    "pos": "n",
    "zh": "一双；一对",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pair"
    ],
    "example": "",
    "distractors": [
      "玩耍",
      "快速地",
      "平安的"
    ]
  },
  {
    "word": "paper",
    "speakText": "paper",
    "spelling": "paper",
    "ipa": "/ˈpeɪpər/",
    "pos": "n / adj",
    "zh": "纸",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "paper"
    ],
    "example": "",
    "distractors": [
      "运动员；球员",
      "安静的；轻声的",
      "帆"
    ]
  },
  {
    "word": "pardon",
    "speakText": "pardon",
    "spelling": "pardon",
    "ipa": "/ˈpɑrd(ə)n/",
    "pos": "exclam",
    "zh": "原谅",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pardon"
    ],
    "example": "",
    "distractors": [
      "游乐场",
      "比较",
      "帆船运动；帆船航行"
    ]
  },
  {
    "word": "parent",
    "speakText": "parent",
    "spelling": "parent",
    "ipa": "/ˈpɛr(ə)nt/",
    "pos": "n",
    "zh": "父亲；母亲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "parent"
    ],
    "example": "",
    "distractors": [
      "悦耳的；悦目的",
      "知识竞赛",
      "色拉"
    ]
  },
  {
    "word": "park",
    "speakText": "park",
    "spelling": "park",
    "ipa": "/pɑrk/",
    "pos": "n / v",
    "zh": "公园；园区",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "park"
    ],
    "example": "",
    "distractors": [
      "请",
      "兔；兔皮",
      "出售"
    ]
  },
  {
    "word": "parking lot",
    "speakText": "parking lot",
    "spelling": "parkinglot",
    "ipa": "/ˈpɑrkɪŋ ˌlɑt/",
    "pos": "n",
    "zh": "停车场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "parking lot"
    ],
    "example": "",
    "distractors": [
      "高兴的",
      "速度竞赛",
      "食盐"
    ]
  },
  {
    "word": "part",
    "speakText": "part",
    "spelling": "part",
    "ipa": "/pɑrt/",
    "pos": "n",
    "zh": "部分",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "part"
    ],
    "example": "",
    "distractors": [
      "加",
      "停止；车站",
      "同一的；相同的"
    ]
  },
  {
    "word": "partner",
    "speakText": "partner",
    "spelling": "partner",
    "ipa": "/ˈpɑrtnər/",
    "pos": "n",
    "zh": "合伙人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "partner"
    ],
    "example": "",
    "distractors": [
      "下午；午后",
      "球拍",
      "三明治；夹心蛋糕"
    ]
  },
  {
    "word": "party",
    "speakText": "party",
    "spelling": "party",
    "ipa": "/ˈpɑrdi/",
    "pos": "n",
    "zh": "聚会",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "party"
    ],
    "example": "",
    "distractors": [
      "衣袋",
      "无线电",
      "调味汁"
    ]
  },
  {
    "word": "pass",
    "speakText": "pass",
    "spelling": "pass",
    "ipa": "/pæs/",
    "pos": "v",
    "zh": "通过",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pass"
    ],
    "example": "",
    "distractors": [
      "尖；尖头",
      "铁路",
      "香肠"
    ]
  },
  {
    "word": "passenger",
    "speakText": "passenger",
    "spelling": "passenger",
    "ipa": "/ˈpæsndʒər/",
    "pos": "n",
    "zh": "旅客；闲散人员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "passenger"
    ],
    "example": "",
    "distractors": [
      "警察部门",
      "雨",
      "挽救"
    ]
  },
  {
    "word": "passport",
    "speakText": "passport",
    "spelling": "passport",
    "ipa": "/ˈpæsˌpɔrt/",
    "pos": "n",
    "zh": "护照；途径",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "passport"
    ],
    "example": "",
    "distractors": [
      "警车",
      "雨衣",
      "说"
    ]
  },
  {
    "word": "past",
    "speakText": "past",
    "spelling": "past",
    "ipa": "/pæst/",
    "pos": "prep",
    "zh": "过",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "past"
    ],
    "example": "",
    "distractors": [
      "警察",
      "敲；敲打",
      "头巾；围巾"
    ]
  },
  {
    "word": "pasta",
    "speakText": "pasta",
    "spelling": "pasta",
    "ipa": "/ˈpɑstə/",
    "pos": "n",
    "zh": "意大利面食",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pasta"
    ],
    "example": "",
    "distractors": [
      "警察局",
      "读；读的作品",
      "未成年人上的学校"
    ]
  },
  {
    "word": "path",
    "speakText": "path",
    "spelling": "path",
    "ipa": "/pæθ/",
    "pos": "n",
    "zh": "小路",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "path"
    ],
    "example": "",
    "distractors": [
      "有礼貌的",
      "阅读",
      "学童"
    ]
  },
  {
    "word": "pay",
    "speakText": "pay",
    "spelling": "pay",
    "ipa": "/peɪ/",
    "pos": "v",
    "zh": "付费",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pay"
    ],
    "example": "",
    "distractors": [
      "池塘；水潭",
      "准备好的",
      "科学"
    ]
  },
  {
    "word": "pear",
    "speakText": "pear",
    "spelling": "pear",
    "ipa": "/pɛr/",
    "pos": "n",
    "zh": "梨；梨树",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pear"
    ],
    "example": "",
    "distractors": [
      "贫穷的；不足的",
      "实际存在的",
      "剪刀"
    ]
  },
  {
    "word": "pen",
    "speakText": "pen",
    "spelling": "pen",
    "ipa": "/pen/",
    "pos": "n",
    "zh": "钢笔",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pen"
    ],
    "example": "",
    "distractors": [
      "砰",
      "真正地",
      "踏板车；滑板车"
    ]
  },
  {
    "word": "pence",
    "speakText": "pence",
    "spelling": "pence",
    "ipa": "/pens/",
    "pos": "n",
    "zh": "便士",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pence"
    ],
    "example": "",
    "distractors": [
      "受欢迎的；讨人喜欢的",
      "原因；理由",
      "屏风；围屏"
    ]
  },
  {
    "word": "pencil",
    "speakText": "pencil",
    "spelling": "pencil",
    "ipa": "/ˈpɛn(t)s(ə)l/",
    "pos": "n",
    "zh": "铅笔；铅芯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pencil"
    ],
    "example": "",
    "distractors": [
      "能做到的",
      "收据",
      "海"
    ]
  },
  {
    "word": "pencil case",
    "speakText": "pencil case",
    "spelling": "pencilcase",
    "ipa": "/ˈpɛn(t)səlˌkeɪs/",
    "pos": "n",
    "zh": "铅笔盒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pencil case"
    ],
    "example": "",
    "distractors": [
      "也许",
      "收到；接到",
      "椅子；座椅"
    ]
  },
  {
    "word": "penfriend",
    "speakText": "penfriend",
    "spelling": "penfriend",
    "ipa": "/ˈpɛnˌfrɛnd/",
    "pos": "n",
    "zh": "笔友",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "penfriend"
    ],
    "example": "",
    "distractors": [
      "柱；标志杆",
      "接待员",
      "第二的"
    ]
  },
  {
    "word": "penny",
    "speakText": "penny",
    "spelling": "penny",
    "ipa": "/ˈpɛni/",
    "pos": "n",
    "zh": "便士",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "penny"
    ],
    "example": "",
    "distractors": [
      "明信片",
      "记录；记载",
      "秘书；干事"
    ]
  },
  {
    "word": "people",
    "speakText": "people",
    "spelling": "people",
    "ipa": "/ˈpip(ə)l/",
    "pos": "n pl",
    "zh": "人民；民族",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "people"
    ],
    "example": "",
    "distractors": [
      "海报",
      "红色的",
      "看见"
    ]
  },
  {
    "word": "pepper",
    "speakText": "pepper",
    "spelling": "pepper",
    "ipa": "/ˈpɛpər/",
    "pos": "n",
    "zh": "胡椒粉；甜椒",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pepper"
    ],
    "example": "",
    "distractors": [
      "邮局",
      "冰箱；冷库",
      "卖"
    ]
  },
  {
    "word": "per",
    "speakText": "per",
    "spelling": "per",
    "ipa": "/pər/",
    "pos": "prep",
    "zh": "每一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "per"
    ],
    "example": "",
    "distractors": [
      "土豆；马铃薯",
      "记得",
      "发送"
    ]
  },
  {
    "word": "perfect",
    "speakText": "perfect",
    "spelling": "perfect",
    "ipa": "/ˈpərfək(t)/",
    "pos": "adj",
    "zh": "完美的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "perfect"
    ],
    "example": "",
    "distractors": [
      "实践",
      "租金",
      "句子"
    ]
  },
  {
    "word": "perfume",
    "speakText": "perfume",
    "spelling": "perfume",
    "ipa": "/ˌpərˈfjum, ˈpərˌfjum/",
    "pos": "n",
    "zh": "香水；芳香",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "perfume"
    ],
    "example": "",
    "distractors": [
      "练习",
      "修理；整修",
      "伺候；为效力"
    ]
  },
  {
    "word": "perhaps",
    "speakText": "perhaps",
    "spelling": "perhaps",
    "ipa": "/pərˈ(h)æps/",
    "pos": "adv",
    "zh": "或许",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "perhaps"
    ],
    "example": "",
    "distractors": [
      "较喜欢",
      "重复说；重复写",
      "放置；安置"
    ]
  },
  {
    "word": "person",
    "speakText": "person",
    "spelling": "person",
    "ipa": "/ˈpərs(ə)n/",
    "pos": "n",
    "zh": "人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "person"
    ],
    "example": "",
    "distractors": [
      "准备；布置",
      "休息",
      "几个"
    ]
  },
  {
    "word": "pet",
    "speakText": "pet",
    "spelling": "pet",
    "ipa": "/pɛt/",
    "pos": "n",
    "zh": "宠物；宠儿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pet"
    ],
    "example": "",
    "distractors": [
      "礼物；现在的",
      "餐馆",
      "将"
    ]
  },
  {
    "word": "petrol",
    "speakText": "petrol",
    "spelling": "petrol",
    "ipa": "/ˈpɛtrəl/",
    "pos": "n",
    "zh": "汽油",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "petrol"
    ],
    "example": "",
    "distractors": [
      "漂亮的；悦耳的",
      "返回；回家",
      "羞愧感"
    ]
  },
  {
    "word": "petrol station",
    "speakText": "petrol station",
    "spelling": "petrolstation",
    "ipa": "/ˈpɛtr(ə)l steɪʃn/",
    "pos": "n",
    "zh": "加油站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "petrol station"
    ],
    "example": "",
    "distractors": [
      "价格",
      "书；预订",
      "洗发剂；洗涤剂"
    ]
  },
  {
    "word": "pharmacy",
    "speakText": "pharmacy",
    "spelling": "pharmacy",
    "ipa": "/ˈfɑrməsi/",
    "pos": "n",
    "zh": "药房；药剂学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pharmacy"
    ],
    "example": "",
    "distractors": [
      "字体",
      "水稻",
      "一份"
    ]
  },
  {
    "word": "phone",
    "speakText": "phone",
    "spelling": "phone",
    "ipa": "/foʊn/",
    "pos": "v / n",
    "zh": "电话",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "phone"
    ],
    "example": "",
    "distractors": [
      "打印机；印刷工人",
      "富有的",
      "她"
    ]
  },
  {
    "word": "photo(graph)",
    "speakText": "photo",
    "spelling": "photo",
    "ipa": "/ˈfoʊdoʊ/",
    "pos": "n",
    "zh": "照片的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "photo"
    ],
    "example": "",
    "distractors": [
      "奖品；奖",
      "骑；骑参赛",
      "羊"
    ]
  },
  {
    "word": "photographer",
    "speakText": "photographer",
    "spelling": "photographer",
    "ipa": "/fəˈtɑɡrəfər/",
    "pos": "n",
    "zh": "摄影师",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "photographer"
    ],
    "example": "",
    "distractors": [
      "很可能",
      "正当",
      "床单"
    ]
  },
  {
    "word": "photography",
    "speakText": "photography",
    "spelling": "photography",
    "ipa": "/fəˈtɑɡrəfi/",
    "pos": "n",
    "zh": "摄影术；摄影",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "photography"
    ],
    "example": "",
    "distractors": [
      "问题",
      "右手",
      "架子；搁板"
    ]
  },
  {
    "word": "physics",
    "speakText": "physics",
    "spelling": "physics",
    "ipa": "/ˈfɪzɪks/",
    "pos": "n",
    "zh": "物理学；物理特性",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "physics"
    ],
    "example": "",
    "distractors": [
      "程序",
      "戒指；趾环",
      "轮船"
    ]
  },
  {
    "word": "piano",
    "speakText": "piano",
    "spelling": "piano",
    "ipa": "/piˈænoʊ/",
    "pos": "n",
    "zh": "钢琴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "piano"
    ],
    "example": "",
    "distractors": [
      "计划；日程",
      "河流",
      "衬衫"
    ]
  },
  {
    "word": "pick up",
    "speakText": "pick up",
    "spelling": "pickup",
    "ipa": "/ˈpɪkˌəp/",
    "pos": "phrasal verb",
    "zh": "轻型货车；好转",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pick up"
    ],
    "example": "",
    "distractors": [
      "项目；方案",
      "道路",
      "鞋"
    ]
  },
  {
    "word": "picnic",
    "speakText": "picnic",
    "spelling": "picnic",
    "ipa": "/ˈpɪkˌnɪk/",
    "pos": "n",
    "zh": "野餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "picnic"
    ],
    "example": "",
    "distractors": [
      "拉",
      "烤；烘焙",
      "商店"
    ]
  },
  {
    "word": "picture",
    "speakText": "picture",
    "spelling": "picture",
    "ipa": "/ˈpɪk(t)ʃər/",
    "pos": "n",
    "zh": "图画",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "picture"
    ],
    "example": "",
    "distractors": [
      "小学生",
      "岩石",
      "店员"
    ]
  },
  {
    "word": "piece",
    "speakText": "piece",
    "spelling": "piece",
    "ipa": "/pis/",
    "pos": "n",
    "zh": "块",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "piece"
    ],
    "example": "",
    "distractors": [
      "紫色的",
      "屋顶；车顶",
      "购物"
    ]
  },
  {
    "word": "pillow",
    "speakText": "pillow",
    "spelling": "pillow",
    "ipa": "/ˈpɪloʊ/",
    "pos": "n",
    "zh": "枕头；垫子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pillow"
    ],
    "example": "",
    "distractors": [
      "手提包",
      "房间",
      "短的"
    ]
  },
  {
    "word": "pilot",
    "speakText": "pilot",
    "spelling": "pilot",
    "ipa": "/ˈpaɪlət/",
    "pos": "n",
    "zh": "飞行员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pilot"
    ],
    "example": "",
    "distractors": [
      "推",
      "圆形的",
      "短裤；男式内裤"
    ]
  },
  {
    "word": "pink",
    "speakText": "pink",
    "spelling": "pink",
    "ipa": "/pɪŋk/",
    "pos": "adj",
    "zh": "粉红色的；绯红的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pink"
    ],
    "example": "",
    "distractors": [
      "安置；放",
      "旋转木马；旋转平台",
      "应该"
    ]
  },
  {
    "word": "pity",
    "speakText": "pity",
    "spelling": "pity",
    "ipa": "/ˈpɪdi/",
    "pos": "n",
    "zh": "同情",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pity"
    ],
    "example": "",
    "distractors": [
      "安置；放",
      "橡胶",
      "大喊"
    ]
  },
  {
    "word": "pizza",
    "speakText": "pizza",
    "spelling": "pizza",
    "ipa": "/ˈpitsə/",
    "pos": "n",
    "zh": "比萨饼",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pizza"
    ],
    "example": "",
    "distractors": [
      "谜",
      "统治者；直尺",
      "出示；上映"
    ]
  },
  {
    "word": "place",
    "speakText": "place",
    "spelling": "place",
    "ipa": "/pleɪs/",
    "pos": "n",
    "zh": "地点；地方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "place"
    ],
    "example": "",
    "distractors": [
      "四分之一",
      "跑；经营",
      "阵雨"
    ]
  },
  {
    "word": "plan",
    "speakText": "plan",
    "spelling": "plan",
    "ipa": "/plæn/",
    "pos": "n / v",
    "zh": "计划；规划",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plan"
    ],
    "example": "",
    "distractors": [
      "女王；王后",
      "奔跑的人；奔跑的动物",
      "关上；合上"
    ]
  },
  {
    "word": "plane",
    "speakText": "plane",
    "spelling": "plane",
    "ipa": "/pleɪn/",
    "pos": "n",
    "zh": "飞机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plane"
    ],
    "example": "",
    "distractors": [
      "问题",
      "跑步",
      "有病的"
    ]
  },
  {
    "word": "plant",
    "speakText": "plant",
    "spelling": "plant",
    "ipa": "/plænt/",
    "pos": "n",
    "zh": "植物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plant"
    ],
    "example": "",
    "distractors": [
      "快的",
      "悲伤的",
      "边；一侧"
    ]
  },
  {
    "word": "plastic",
    "speakText": "plastic",
    "spelling": "plastic",
    "ipa": "/ˈplæstɪk/",
    "pos": "n / adj",
    "zh": "塑料；信用卡",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plastic"
    ],
    "example": "",
    "distractors": [
      "快速地",
      "平安的",
      "观光"
    ]
  },
  {
    "word": "plate",
    "speakText": "plate",
    "spelling": "plate",
    "ipa": "/pleɪt/",
    "pos": "n",
    "zh": "盘子；碟子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plate"
    ],
    "example": "",
    "distractors": [
      "安静的；轻声的",
      "帆",
      "符号；公告"
    ]
  },
  {
    "word": "platform",
    "speakText": "platform",
    "spelling": "platform",
    "ipa": "/ˈplætˌfɔrm/",
    "pos": "n",
    "zh": "舞台；讲台",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "platform"
    ],
    "example": "",
    "distractors": [
      "比较",
      "帆船运动；帆船航行",
      "银；银色"
    ]
  },
  {
    "word": "play",
    "speakText": "play",
    "spelling": "play",
    "ipa": "/pleɪ/",
    "pos": "v / n",
    "zh": "玩耍",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "play"
    ],
    "example": "",
    "distractors": [
      "知识竞赛",
      "色拉",
      "简单的"
    ]
  },
  {
    "word": "player",
    "speakText": "player",
    "spelling": "player",
    "ipa": "/ˈpleɪər/",
    "pos": "n",
    "zh": "运动员；球员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "player"
    ],
    "example": "",
    "distractors": [
      "兔；兔皮",
      "出售",
      "自以来"
    ]
  },
  {
    "word": "playground",
    "speakText": "playground",
    "spelling": "playground",
    "ipa": "/ˈpleɪˌɡraʊnd/",
    "pos": "n",
    "zh": "游乐场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "playground"
    ],
    "example": "",
    "distractors": [
      "速度竞赛",
      "食盐",
      "唱"
    ]
  },
  {
    "word": "pleasant",
    "speakText": "pleasant",
    "spelling": "pleasant",
    "ipa": "/ˈplɛznt/",
    "pos": "adj",
    "zh": "悦耳的；悦目的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pleasant"
    ],
    "example": "",
    "distractors": [
      "停止；车站",
      "同一的；相同的",
      "歌手"
    ]
  },
  {
    "word": "please",
    "speakText": "please",
    "spelling": "please",
    "ipa": "/pliz/",
    "pos": "v / exclam",
    "zh": "请",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "please"
    ],
    "example": "",
    "distractors": [
      "球拍",
      "三明治；夹心蛋糕",
      "唱歌；歌声"
    ]
  },
  {
    "word": "pleased",
    "speakText": "pleased",
    "spelling": "pleased",
    "ipa": "/plizd/",
    "pos": "adj",
    "zh": "高兴的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pleased"
    ],
    "example": "",
    "distractors": [
      "无线电",
      "调味汁",
      "仅有一个的"
    ]
  },
  {
    "word": "plus",
    "speakText": "plus",
    "spelling": "plus",
    "ipa": "/pləs/",
    "pos": "prep",
    "zh": "加",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "plus"
    ],
    "example": "",
    "distractors": [
      "铁路",
      "香肠",
      "下沉"
    ]
  },
  {
    "word": "p.m.",
    "speakText": "p.m.",
    "spelling": "pm",
    "ipa": "/ˌpiː ˈem/",
    "pos": "adv",
    "zh": "下午；午后",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "p.m."
    ],
    "example": "",
    "distractors": [
      "雨",
      "挽救",
      "姐姐；妹妹"
    ]
  },
  {
    "word": "pocket",
    "speakText": "pocket",
    "spelling": "pocket",
    "ipa": "/ˈpɑkət/",
    "pos": "n",
    "zh": "衣袋",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pocket"
    ],
    "example": "",
    "distractors": [
      "雨衣",
      "说",
      "坐"
    ]
  },
  {
    "word": "point",
    "speakText": "point",
    "spelling": "point",
    "ipa": "/pɔɪnt/",
    "pos": "v",
    "zh": "尖；尖头",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "point"
    ],
    "example": "",
    "distractors": [
      "敲；敲打",
      "头巾；围巾",
      "坐下休息；静坐抗议"
    ]
  },
  {
    "word": "police",
    "speakText": "police",
    "spelling": "police",
    "ipa": "/pəˈlis/",
    "pos": "n",
    "zh": "警察部门",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "police"
    ],
    "example": "",
    "distractors": [
      "读；读的作品",
      "未成年人上的学校",
      "工地"
    ]
  },
  {
    "word": "police car",
    "speakText": "police car",
    "spelling": "policecar",
    "ipa": "/pəˈliːs kɑːr/",
    "pos": "n",
    "zh": "警车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "police car"
    ],
    "example": "",
    "distractors": [
      "阅读",
      "学童",
      "起居室"
    ]
  },
  {
    "word": "police officer",
    "speakText": "police officer",
    "spelling": "policeofficer",
    "ipa": "/pəˈlis ɔfəsər/",
    "pos": "n",
    "zh": "警察",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "police officer"
    ],
    "example": "",
    "distractors": [
      "准备好的",
      "科学",
      "尺寸；尺码"
    ]
  },
  {
    "word": "police station",
    "speakText": "police station",
    "spelling": "policestation",
    "ipa": "/pəˈlis ˌsteɪʃən/",
    "pos": "n",
    "zh": "警察局",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "police station"
    ],
    "example": "",
    "distractors": [
      "实际存在的",
      "剪刀",
      "冰鞋"
    ]
  },
  {
    "word": "polite",
    "speakText": "polite",
    "spelling": "polite",
    "ipa": "/pəˈlaɪt/",
    "pos": "adj",
    "zh": "有礼貌的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "polite"
    ],
    "example": "",
    "distractors": [
      "真正地",
      "踏板车；滑板车",
      "滑板；踩滑板"
    ]
  },
  {
    "word": "pool",
    "speakText": "pool",
    "spelling": "pool",
    "ipa": "/pul/",
    "pos": "n",
    "zh": "池塘；水潭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pool"
    ],
    "example": "",
    "distractors": [
      "原因；理由",
      "屏风；围屏",
      "滑板运动"
    ]
  },
  {
    "word": "poor",
    "speakText": "poor",
    "spelling": "poor",
    "ipa": "/pʊr, pɔr/",
    "pos": "adj",
    "zh": "贫穷的；不足的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "poor"
    ],
    "example": "",
    "distractors": [
      "收据",
      "海",
      "滑冰；滑轮滑旱冰"
    ]
  },
  {
    "word": "pop",
    "speakText": "pop",
    "spelling": "pop",
    "ipa": "/pɑp/",
    "pos": "n",
    "zh": "砰",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pop"
    ],
    "example": "",
    "distractors": [
      "收到；接到",
      "椅子；座椅",
      "滑雪板"
    ]
  },
  {
    "word": "popular",
    "speakText": "popular",
    "spelling": "popular",
    "ipa": "/ˈpɑpjələr/",
    "pos": "adj",
    "zh": "受欢迎的；讨人喜欢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "popular"
    ],
    "example": "",
    "distractors": [
      "接待员",
      "第二的",
      "滑雪；滑雪运动"
    ]
  },
  {
    "word": "possible",
    "speakText": "possible",
    "spelling": "possible",
    "ipa": "/ˈpɑsəb(ə)l/",
    "pos": "adj",
    "zh": "能做到的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "possible"
    ],
    "example": "",
    "distractors": [
      "记录；记载",
      "秘书；干事",
      "裙子"
    ]
  },
  {
    "word": "possibly",
    "speakText": "possibly",
    "spelling": "possibly",
    "ipa": "/ˈpɑsəbli/",
    "pos": "adv",
    "zh": "也许",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "possibly"
    ],
    "example": "",
    "distractors": [
      "红色的",
      "看见",
      "天空"
    ]
  },
  {
    "word": "post",
    "speakText": "post",
    "spelling": "post",
    "ipa": "/poʊst/",
    "pos": "v / n",
    "zh": "柱；标志杆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "post"
    ],
    "example": "",
    "distractors": [
      "冰箱；冷库",
      "卖",
      "睡着"
    ]
  },
  {
    "word": "postcard",
    "speakText": "postcard",
    "spelling": "postcard",
    "ipa": "/ˈpoʊs(t)ˌkɑrd/",
    "pos": "n",
    "zh": "明信片",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "postcard"
    ],
    "example": "",
    "distractors": [
      "记得",
      "发送",
      "薄片"
    ]
  },
  {
    "word": "poster",
    "speakText": "poster",
    "spelling": "poster",
    "ipa": "/ˈpoʊstər/",
    "pos": "n",
    "zh": "海报",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "poster"
    ],
    "example": "",
    "distractors": [
      "租金",
      "句子",
      "苗条的；纤细的"
    ]
  },
  {
    "word": "post office",
    "speakText": "post office",
    "spelling": "postoffice",
    "ipa": "/ˈpoʊst ˌɔfəs/",
    "pos": "n",
    "zh": "邮局",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "post office"
    ],
    "example": "",
    "distractors": [
      "修理；整修",
      "伺候；为效力",
      "耗时的；缓慢的"
    ]
  },
  {
    "word": "potato",
    "speakText": "potato",
    "spelling": "potato",
    "ipa": "/pəˈteɪdoʊ/",
    "pos": "n",
    "zh": "土豆；马铃薯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "potato"
    ],
    "example": "",
    "distractors": [
      "重复说；重复写",
      "放置；安置",
      "慢悠悠地"
    ]
  },
  {
    "word": "practice",
    "speakText": "practice",
    "spelling": "practice",
    "ipa": "/ˈpræktəs/",
    "pos": "n",
    "zh": "实践",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "practice"
    ],
    "example": "",
    "distractors": [
      "休息",
      "几个",
      "小的；矮小的"
    ]
  },
  {
    "word": "practise",
    "speakText": "practise",
    "spelling": "practise",
    "ipa": "/ˈpræktəs/",
    "pos": "v",
    "zh": "练习",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "practise"
    ],
    "example": "",
    "distractors": [
      "餐馆",
      "将",
      "烟"
    ]
  },
  {
    "word": "prefer",
    "speakText": "prefer",
    "spelling": "prefer",
    "ipa": "/priˈfər/",
    "pos": "v",
    "zh": "较喜欢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "prefer"
    ],
    "example": "",
    "distractors": [
      "返回；回家",
      "羞愧感",
      "吸烟"
    ]
  },
  {
    "word": "prepare",
    "speakText": "prepare",
    "spelling": "prepare",
    "ipa": "/priˈpɛr/",
    "pos": "v",
    "zh": "准备；布置",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "prepare"
    ],
    "example": "",
    "distractors": [
      "书；预订",
      "洗发剂；洗涤剂",
      "快餐"
    ]
  },
  {
    "word": "present",
    "speakText": "present",
    "spelling": "present",
    "ipa": "/ˈprezənt/",
    "pos": "n / adj",
    "zh": "礼物；现在的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "present"
    ],
    "example": "",
    "distractors": [
      "水稻",
      "一份",
      "雪"
    ]
  },
  {
    "word": "pretty",
    "speakText": "pretty",
    "spelling": "pretty",
    "ipa": "/ˈprɪdi/",
    "pos": "adj",
    "zh": "漂亮的；悦耳的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pretty"
    ],
    "example": "",
    "distractors": [
      "富有的",
      "她",
      "滑雪板；用滑雪板滑雪"
    ]
  },
  {
    "word": "price",
    "speakText": "price",
    "spelling": "price",
    "ipa": "/praɪs/",
    "pos": "n",
    "zh": "价格",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "price"
    ],
    "example": "",
    "distractors": [
      "骑；骑参赛",
      "羊",
      "滑雪板运动"
    ]
  },
  {
    "word": "print",
    "speakText": "print",
    "spelling": "print",
    "ipa": "/prɪnt/",
    "pos": "v",
    "zh": "字体",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "print"
    ],
    "example": "",
    "distractors": [
      "正当",
      "床单",
      "如此"
    ]
  },
  {
    "word": "printer",
    "speakText": "printer",
    "spelling": "printer",
    "ipa": "/ˈprɪn(t)ər/",
    "pos": "n",
    "zh": "打印机；印刷工人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "printer"
    ],
    "example": "",
    "distractors": [
      "右手",
      "架子；搁板",
      "这样说"
    ]
  },
  {
    "word": "prize",
    "speakText": "prize",
    "spelling": "prize",
    "ipa": "/praɪz/",
    "pos": "n",
    "zh": "奖品；奖",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "prize"
    ],
    "example": "",
    "distractors": [
      "戒指；趾环",
      "轮船",
      "肥皂；用肥皂洗"
    ]
  },
  {
    "word": "probably",
    "speakText": "probably",
    "spelling": "probably",
    "ipa": "/ˈprɑbəbli/",
    "pos": "adv",
    "zh": "很可能",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "probably"
    ],
    "example": "",
    "distractors": [
      "河流",
      "衬衫",
      "足球运动"
    ]
  },
  {
    "word": "problem",
    "speakText": "problem",
    "spelling": "problem",
    "ipa": "/ˈprɑbləm/",
    "pos": "n",
    "zh": "问题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "problem"
    ],
    "example": "",
    "distractors": [
      "道路",
      "鞋",
      "短袜"
    ]
  },
  {
    "word": "program",
    "speakText": "program",
    "spelling": "program",
    "ipa": "/ˈproʊˌɡræm/",
    "pos": "n",
    "zh": "程序",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "program"
    ],
    "example": "",
    "distractors": [
      "烤；烘焙",
      "商店",
      "长沙发"
    ]
  },
  {
    "word": "programme",
    "speakText": "programme",
    "spelling": "programme",
    "ipa": "/ˈproʊˌɡræm/",
    "pos": "n",
    "zh": "计划；日程",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "programme"
    ],
    "example": "",
    "distractors": [
      "岩石",
      "店员",
      "软的"
    ]
  },
  {
    "word": "project",
    "speakText": "project",
    "spelling": "project",
    "ipa": "/ˈprɑˌdʒɛk(t)/",
    "pos": "n",
    "zh": "项目；方案",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "project"
    ],
    "example": "",
    "distractors": [
      "屋顶；车顶",
      "购物",
      "软件"
    ]
  },
  {
    "word": "pull",
    "speakText": "pull",
    "spelling": "pull",
    "ipa": "/pʊl/",
    "pos": "v",
    "zh": "拉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pull"
    ],
    "example": "",
    "distractors": [
      "房间",
      "短的",
      "一些"
    ]
  },
  {
    "word": "pupil",
    "speakText": "pupil",
    "spelling": "pupil",
    "ipa": "/ˈpjup(ə)l/",
    "pos": "n",
    "zh": "小学生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "pupil"
    ],
    "example": "",
    "distractors": [
      "圆形的",
      "短裤；男式内裤",
      "某人"
    ]
  },
  {
    "word": "purple",
    "speakText": "purple",
    "spelling": "purple",
    "ipa": "/ˈpərp(ə)l/",
    "pos": "adj",
    "zh": "紫色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "purple"
    ],
    "example": "",
    "distractors": [
      "旋转木马；旋转平台",
      "应该",
      "某人"
    ]
  },
  {
    "word": "purse",
    "speakText": "purse",
    "spelling": "purse",
    "ipa": "/pərs/",
    "pos": "n",
    "zh": "手提包",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "purse"
    ],
    "example": "",
    "distractors": [
      "橡胶",
      "大喊",
      "某事物"
    ]
  },
  {
    "word": "push",
    "speakText": "push",
    "spelling": "push",
    "ipa": "/pʊʃ/",
    "pos": "v",
    "zh": "推",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "push"
    ],
    "example": "",
    "distractors": [
      "统治者；直尺",
      "出示；上映",
      "有时"
    ]
  },
  {
    "word": "put",
    "speakText": "put",
    "spelling": "put",
    "ipa": "/pʊt/",
    "pos": "v",
    "zh": "安置；放",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "put"
    ],
    "example": "",
    "distractors": [
      "跑；经营",
      "阵雨",
      "在某处"
    ]
  },
  {
    "word": "put on",
    "speakText": "put on",
    "spelling": "puton",
    "ipa": "/pʊt/",
    "pos": "phrasal verb",
    "zh": "安置；放",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "put on"
    ],
    "example": "",
    "distractors": [
      "奔跑的人；奔跑的动物",
      "关上；合上",
      "儿子"
    ]
  },
  {
    "word": "puzzle",
    "speakText": "puzzle",
    "spelling": "puzzle",
    "ipa": "/ˈpəz(ə)l/",
    "pos": "n",
    "zh": "谜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "puzzle"
    ],
    "example": "",
    "distractors": [
      "跑步",
      "有病的",
      "歌曲"
    ]
  },
  {
    "word": "quarter",
    "speakText": "quarter",
    "spelling": "quarter",
    "ipa": "/ˈkwɔrdər/",
    "pos": "n",
    "zh": "四分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quarter"
    ],
    "example": "",
    "distractors": [
      "悲伤的",
      "边；一侧",
      "不久"
    ]
  },
  {
    "word": "queen",
    "speakText": "queen",
    "spelling": "queen",
    "ipa": "/kwin/",
    "pos": "n",
    "zh": "女王；王后",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "queen"
    ],
    "example": "",
    "distractors": [
      "平安的",
      "观光",
      "抱歉的"
    ]
  },
  {
    "word": "question",
    "speakText": "question",
    "spelling": "question",
    "ipa": "/ˈkwɛstʃ(ə)n/",
    "pos": "n",
    "zh": "问题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "question"
    ],
    "example": "",
    "distractors": [
      "帆",
      "符号；公告",
      "种类"
    ]
  },
  {
    "word": "quick",
    "speakText": "quick",
    "spelling": "quick",
    "ipa": "/kwɪk/",
    "pos": "adj",
    "zh": "快的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quick"
    ],
    "example": "",
    "distractors": [
      "帆船运动；帆船航行",
      "银；银色",
      "声响"
    ]
  },
  {
    "word": "quickly",
    "speakText": "quickly",
    "spelling": "quickly",
    "ipa": "/ˈkwɪkli/",
    "pos": "adv",
    "zh": "快速地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quickly"
    ],
    "example": "",
    "distractors": [
      "色拉",
      "简单的",
      "汤"
    ]
  },
  {
    "word": "quiet",
    "speakText": "quiet",
    "spelling": "quiet",
    "ipa": "/ˈkwaɪət/",
    "pos": "adj",
    "zh": "安静的；轻声的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quiet"
    ],
    "example": "",
    "distractors": [
      "出售",
      "自以来",
      "南；南方"
    ]
  },
  {
    "word": "quite",
    "speakText": "quite",
    "spelling": "quite",
    "ipa": "/kwaɪt/",
    "pos": "adv",
    "zh": "比较",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quite"
    ],
    "example": "",
    "distractors": [
      "食盐",
      "唱",
      "空间"
    ]
  },
  {
    "word": "quiz",
    "speakText": "quiz",
    "spelling": "quiz",
    "ipa": "/kwɪz/",
    "pos": "n",
    "zh": "知识竞赛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "quiz"
    ],
    "example": "",
    "distractors": [
      "同一的；相同的",
      "歌手",
      "闲置的；不用的"
    ]
  },
  {
    "word": "rabbit",
    "speakText": "rabbit",
    "spelling": "rabbit",
    "ipa": "/ˈræbət/",
    "pos": "n",
    "zh": "兔；兔皮",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rabbit"
    ],
    "example": "",
    "distractors": [
      "三明治；夹心蛋糕",
      "唱歌；歌声",
      "说话"
    ]
  },
  {
    "word": "race",
    "speakText": "race",
    "spelling": "race",
    "ipa": "/reɪs/",
    "pos": "n / v",
    "zh": "速度竞赛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "race"
    ],
    "example": "",
    "distractors": [
      "调味汁",
      "仅有一个的",
      "发言者"
    ]
  },
  {
    "word": "racket",
    "speakText": "racket",
    "spelling": "racket",
    "ipa": "/ˈrækət/",
    "pos": "n",
    "zh": "球拍",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "racket"
    ],
    "example": "",
    "distractors": [
      "挽救",
      "姐姐；妹妹",
      "咒语"
    ]
  },
  {
    "word": "radio",
    "speakText": "radio",
    "spelling": "radio",
    "ipa": "/ˈreɪdioʊ/",
    "pos": "n",
    "zh": "无线电",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "radio"
    ],
    "example": "",
    "distractors": [
      "说",
      "坐",
      "拼写"
    ]
  },
  {
    "word": "railway",
    "speakText": "railway",
    "spelling": "railway",
    "ipa": "/ˈreɪlˌweɪ/",
    "pos": "n",
    "zh": "铁路",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "railway"
    ],
    "example": "",
    "distractors": [
      "头巾；围巾",
      "坐下休息；静坐抗议",
      "花"
    ]
  },
  {
    "word": "rain",
    "speakText": "rain",
    "spelling": "rain",
    "ipa": "/reɪn/",
    "pos": "n / v",
    "zh": "雨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rain"
    ],
    "example": "",
    "distractors": [
      "未成年人上的学校",
      "工地",
      "匙"
    ]
  },
  {
    "word": "raincoat",
    "speakText": "raincoat",
    "spelling": "raincoat",
    "ipa": "/ˈreɪnˌkoʊt/",
    "pos": "n",
    "zh": "雨衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "raincoat"
    ],
    "example": "",
    "distractors": [
      "学童",
      "起居室",
      "运动"
    ]
  },
  {
    "word": "rap",
    "speakText": "rap",
    "spelling": "rap",
    "ipa": "/ræp/",
    "pos": "n",
    "zh": "敲；敲打",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rap"
    ],
    "example": "",
    "distractors": [
      "科学",
      "尺寸；尺码",
      "体育中心"
    ]
  },
  {
    "word": "read",
    "speakText": "read",
    "spelling": "read",
    "ipa": "/rid/",
    "pos": "v",
    "zh": "读；读的作品",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "read"
    ],
    "example": "",
    "distractors": [
      "剪刀",
      "冰鞋",
      "春天"
    ]
  },
  {
    "word": "reading",
    "speakText": "reading",
    "spelling": "reading",
    "ipa": "/ˈridɪŋ/",
    "pos": "n",
    "zh": "阅读",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "reading"
    ],
    "example": "",
    "distractors": [
      "踏板车；滑板车",
      "滑板；踩滑板",
      "正方形"
    ]
  },
  {
    "word": "ready",
    "speakText": "ready",
    "spelling": "ready",
    "ipa": "/ˈrɛdi/",
    "pos": "adj",
    "zh": "准备好的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ready"
    ],
    "example": "",
    "distractors": [
      "屏风；围屏",
      "滑板运动",
      "体育场"
    ]
  },
  {
    "word": "real",
    "speakText": "real",
    "spelling": "real",
    "ipa": "/ri(ə)l/",
    "pos": "adj",
    "zh": "实际存在的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "real"
    ],
    "example": "",
    "distractors": [
      "海",
      "滑冰；滑轮滑旱冰",
      "全体职员"
    ]
  },
  {
    "word": "really",
    "speakText": "really",
    "spelling": "really",
    "ipa": "/ˈri(ə)li/",
    "pos": "adv",
    "zh": "真正地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "really"
    ],
    "example": "",
    "distractors": [
      "椅子；座椅",
      "滑雪板",
      "舞台；讲台"
    ]
  },
  {
    "word": "reason",
    "speakText": "reason",
    "spelling": "reason",
    "ipa": "/ˈriz(ə)n/",
    "pos": "n",
    "zh": "原因；理由",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "reason"
    ],
    "example": "",
    "distractors": [
      "第二的",
      "滑雪；滑雪运动",
      "梯级"
    ]
  },
  {
    "word": "receipt",
    "speakText": "receipt",
    "spelling": "receipt",
    "ipa": "/rəˈsit/",
    "pos": "n",
    "zh": "收据",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "receipt"
    ],
    "example": "",
    "distractors": [
      "秘书；干事",
      "裙子",
      "邮票"
    ]
  },
  {
    "word": "receive",
    "speakText": "receive",
    "spelling": "receive",
    "ipa": "/rəˈsiv/",
    "pos": "v",
    "zh": "收到；接到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "receive"
    ],
    "example": "",
    "distractors": [
      "看见",
      "天空",
      "站立"
    ]
  },
  {
    "word": "receptionist",
    "speakText": "receptionist",
    "spelling": "receptionist",
    "ipa": "/rəˈsɛpʃənəst/",
    "pos": "n",
    "zh": "接待员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "receptionist"
    ],
    "example": "",
    "distractors": [
      "卖",
      "睡着",
      "星"
    ]
  },
  {
    "word": "record",
    "speakText": "record",
    "spelling": "record",
    "ipa": "/ˈrɛkərd/",
    "pos": "v",
    "zh": "记录；记载",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "record"
    ],
    "example": "",
    "distractors": [
      "发送",
      "薄片",
      "开始"
    ]
  },
  {
    "word": "red",
    "speakText": "red",
    "spelling": "red",
    "ipa": "/rɛd/",
    "pos": "adj",
    "zh": "红色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "red"
    ],
    "example": "",
    "distractors": [
      "句子",
      "苗条的；纤细的",
      "火车站；地铁站"
    ]
  },
  {
    "word": "refrigerator",
    "speakText": "refrigerator",
    "spelling": "refrigerator",
    "ipa": "/rəˈfrɪdʒəˌreɪdər/",
    "pos": "n",
    "zh": "冰箱；冷库",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "refrigerator"
    ],
    "example": "",
    "distractors": [
      "伺候；为效力",
      "耗时的；缓慢的",
      "停留"
    ]
  },
  {
    "word": "remember",
    "speakText": "remember",
    "spelling": "remember",
    "ipa": "/rəˈmɛmbər/",
    "pos": "v",
    "zh": "记得",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "remember"
    ],
    "example": "",
    "distractors": [
      "放置；安置",
      "慢悠悠地",
      "牛排；肉块"
    ]
  },
  {
    "word": "rent",
    "speakText": "rent",
    "spelling": "rent",
    "ipa": "/rɛnt/",
    "pos": "v",
    "zh": "租金",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rent"
    ],
    "example": "",
    "distractors": [
      "几个",
      "小的；矮小的",
      "偷"
    ]
  },
  {
    "word": "repair",
    "speakText": "repair",
    "spelling": "repair",
    "ipa": "/rəˈpɛr/",
    "pos": "v",
    "zh": "修理；整修",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "repair"
    ],
    "example": "",
    "distractors": [
      "将",
      "烟",
      "仍然"
    ]
  },
  {
    "word": "repeat",
    "speakText": "repeat",
    "spelling": "repeat",
    "ipa": "/rəˈpit/",
    "pos": "v",
    "zh": "重复说；重复写",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "repeat"
    ],
    "example": "",
    "distractors": [
      "羞愧感",
      "吸烟",
      "胃"
    ]
  },
  {
    "word": "rest",
    "speakText": "rest",
    "spelling": "rest",
    "ipa": "/rɛst/",
    "pos": "n / v",
    "zh": "休息",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rest"
    ],
    "example": "",
    "distractors": [
      "洗发剂；洗涤剂",
      "快餐",
      "胃痛"
    ]
  },
  {
    "word": "restaurant",
    "speakText": "restaurant",
    "spelling": "restaurant",
    "ipa": "/ˈrɛst(ə)rənt, ˈrɛstəˌrɑnt, ˈrɛˌstrɑnt/",
    "pos": "n",
    "zh": "餐馆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "restaurant"
    ],
    "example": "",
    "distractors": [
      "一份",
      "雪",
      "停住"
    ]
  },
  {
    "word": "return",
    "speakText": "return",
    "spelling": "return",
    "ipa": "/rəˈtərn/",
    "pos": "n / v",
    "zh": "返回；回家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "return"
    ],
    "example": "",
    "distractors": [
      "她",
      "滑雪板；用滑雪板滑雪",
      "大型百货商店；商店"
    ]
  },
  {
    "word": "rice",
    "speakText": "rice",
    "spelling": "rice",
    "ipa": "/raɪs/",
    "pos": "n",
    "zh": "水稻",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rice"
    ],
    "example": "",
    "distractors": [
      "床单",
      "如此",
      "故事"
    ]
  },
  {
    "word": "rich",
    "speakText": "rich",
    "spelling": "rich",
    "ipa": "/rɪtʃ/",
    "pos": "adj",
    "zh": "富有的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rich"
    ],
    "example": "",
    "distractors": [
      "架子；搁板",
      "这样说",
      "直的"
    ]
  },
  {
    "word": "ride",
    "speakText": "ride",
    "spelling": "ride",
    "ipa": "/raɪd/",
    "pos": "n / v",
    "zh": "骑；骑参赛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ride"
    ],
    "example": "",
    "distractors": [
      "轮船",
      "肥皂；用肥皂洗",
      "奇怪的；奇特的"
    ]
  },
  {
    "word": "right",
    "speakText": "right",
    "spelling": "right",
    "ipa": "/raɪt/",
    "pos": "n / adj / adv",
    "zh": "右边；正确的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "right"
    ],
    "example": "",
    "distractors": [
      "衬衫",
      "足球运动",
      "街道"
    ]
  },
  {
    "word": "right hand",
    "speakText": "right hand",
    "spelling": "righthand",
    "ipa": "/ˌraɪt ˈhænd/",
    "pos": "adj",
    "zh": "右手",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "right hand"
    ],
    "example": "",
    "distractors": [
      "鞋",
      "短袜",
      "强壮的；强劲的"
    ]
  },
  {
    "word": "ring",
    "speakText": "ring",
    "spelling": "ring",
    "ipa": "/rɪŋ/",
    "pos": "n / v",
    "zh": "戒指；铃响；打电话",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ring"
    ],
    "example": "",
    "distractors": [
      "商店",
      "长沙发",
      "大学生"
    ]
  },
  {
    "word": "river",
    "speakText": "river",
    "spelling": "river",
    "ipa": "/ˈrɪvər/",
    "pos": "n",
    "zh": "河流",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "river"
    ],
    "example": "",
    "distractors": [
      "店员",
      "软的",
      "学习"
    ]
  },
  {
    "word": "road",
    "speakText": "road",
    "spelling": "road",
    "ipa": "/roʊd/",
    "pos": "n",
    "zh": "道路",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "road"
    ],
    "example": "",
    "distractors": [
      "购物",
      "软件",
      "学习"
    ]
  },
  {
    "word": "roast",
    "speakText": "roast",
    "spelling": "roast",
    "ipa": "/roʊst/",
    "pos": "v / adj",
    "zh": "烤；烘焙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "roast"
    ],
    "example": "",
    "distractors": [
      "短的",
      "一些",
      "主题"
    ]
  },
  {
    "word": "rock",
    "speakText": "rock",
    "spelling": "rock",
    "ipa": "/rɑk/",
    "pos": "n",
    "zh": "岩石",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rock"
    ],
    "example": "",
    "distractors": [
      "短裤；男式内裤",
      "某人",
      "那样的；这样的"
    ]
  },
  {
    "word": "roof",
    "speakText": "roof",
    "spelling": "roof",
    "ipa": "/ruf, rʊf/",
    "pos": "n",
    "zh": "屋顶；车顶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "roof"
    ],
    "example": "",
    "distractors": [
      "应该",
      "某人",
      "突然地"
    ]
  },
  {
    "word": "room",
    "speakText": "room",
    "spelling": "room",
    "ipa": "/rum, rʊm/",
    "pos": "n",
    "zh": "房间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "room"
    ],
    "example": "",
    "distractors": [
      "大喊",
      "某事物",
      "植物所含的糖"
    ]
  },
  {
    "word": "round",
    "speakText": "round",
    "spelling": "round",
    "ipa": "/raʊnd/",
    "pos": "adj",
    "zh": "圆形的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "round"
    ],
    "example": "",
    "distractors": [
      "出示；上映",
      "有时",
      "套装"
    ]
  },
  {
    "word": "roundabout",
    "speakText": "roundabout",
    "spelling": "roundabout",
    "ipa": "/ˈraʊndəˌbaʊt/",
    "pos": "n",
    "zh": "旋转木马；旋转平台",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "roundabout"
    ],
    "example": "",
    "distractors": [
      "阵雨",
      "在某处",
      "旅行用的手提箱"
    ]
  },
  {
    "word": "rubber",
    "speakText": "rubber",
    "spelling": "rubber",
    "ipa": "/ˈrəbər/",
    "pos": "n",
    "zh": "橡皮；橡胶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rubber"
    ],
    "example": "",
    "distractors": [
      "关上；合上",
      "儿子",
      "夏天"
    ]
  },
  {
    "word": "rugby",
    "speakText": "rugby",
    "spelling": "rugby",
    "ipa": "/ˈrʌɡbi/",
    "pos": "n",
    "zh": "英式橄榄球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "rugby"
    ],
    "example": "",
    "distractors": [
      "有病的",
      "歌曲",
      "太阳"
    ]
  },
  {
    "word": "ruler",
    "speakText": "ruler",
    "spelling": "ruler",
    "ipa": "/ˈrulər/",
    "pos": "n",
    "zh": "直尺",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ruler"
    ],
    "example": "",
    "distractors": [
      "边；一侧",
      "不久",
      "墨镜"
    ]
  },
  {
    "word": "run",
    "speakText": "run",
    "spelling": "run",
    "ipa": "/rʌn/",
    "pos": "v",
    "zh": "跑；经营",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "run"
    ],
    "example": "",
    "distractors": [
      "观光",
      "抱歉的",
      "阳光充足的"
    ]
  },
  {
    "word": "runner",
    "speakText": "runner",
    "spelling": "runner",
    "ipa": "/ˈrənər/",
    "pos": "n",
    "zh": "奔跑的人；奔跑的动物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "runner"
    ],
    "example": "",
    "distractors": [
      "符号；公告",
      "种类",
      "超市"
    ]
  },
  {
    "word": "running",
    "speakText": "running",
    "spelling": "running",
    "ipa": "/ˈrənɪŋ/",
    "pos": "n",
    "zh": "跑步",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "running"
    ],
    "example": "",
    "distractors": [
      "银；银色",
      "声响",
      "晚饭"
    ]
  },
  {
    "word": "sad",
    "speakText": "sad",
    "spelling": "sad",
    "ipa": "/sæd/",
    "pos": "adj",
    "zh": "悲伤的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sad"
    ],
    "example": "",
    "distractors": [
      "简单的",
      "汤",
      "认为"
    ]
  },
  {
    "word": "safe",
    "speakText": "safe",
    "spelling": "safe",
    "ipa": "/seɪf/",
    "pos": "adj",
    "zh": "平安的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "safe"
    ],
    "example": "",
    "distractors": [
      "自以来",
      "南；南方",
      "确信的"
    ]
  },
  {
    "word": "sail",
    "speakText": "sail",
    "spelling": "sail",
    "ipa": "/seɪl/",
    "pos": "v",
    "zh": "帆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sail"
    ],
    "example": "",
    "distractors": [
      "唱",
      "空间",
      "拍岸浪花"
    ]
  },
  {
    "word": "sailing",
    "speakText": "sailing",
    "spelling": "sailing",
    "ipa": "/ˈseɪlɪŋ/",
    "pos": "n",
    "zh": "帆船运动；帆船航行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sailing"
    ],
    "example": "",
    "distractors": [
      "歌手",
      "闲置的；不用的",
      "冲浪板"
    ]
  },
  {
    "word": "salad",
    "speakText": "salad",
    "spelling": "salad",
    "ipa": "/ˈsæləd/",
    "pos": "n",
    "zh": "色拉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "salad"
    ],
    "example": "",
    "distractors": [
      "唱歌；歌声",
      "说话",
      "冲浪运动"
    ]
  },
  {
    "word": "sale",
    "speakText": "sale",
    "spelling": "sale",
    "ipa": "/seɪl/",
    "pos": "n",
    "zh": "出售",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sale"
    ],
    "example": "",
    "distractors": [
      "仅有一个的",
      "发言者",
      "姓"
    ]
  },
  {
    "word": "salt",
    "speakText": "salt",
    "spelling": "salt",
    "ipa": "/sɔlt/",
    "pos": "n",
    "zh": "食盐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "salt"
    ],
    "example": "",
    "distractors": [
      "下沉",
      "特别的",
      "意想不到的事物"
    ]
  },
  {
    "word": "same",
    "speakText": "same",
    "spelling": "same",
    "ipa": "/seɪm/",
    "pos": "adj / pron",
    "zh": "同一的；相同的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "same"
    ],
    "example": "",
    "distractors": [
      "姐姐；妹妹",
      "咒语",
      "惊讶的"
    ]
  },
  {
    "word": "sandwich",
    "speakText": "sandwich",
    "spelling": "sandwich",
    "ipa": "/ˈsænˌ(d)wɪtʃ/",
    "pos": "n",
    "zh": "三明治；夹心蛋糕",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sandwich"
    ],
    "example": "",
    "distractors": [
      "坐",
      "拼写",
      "毛衣"
    ]
  },
  {
    "word": "sauce",
    "speakText": "sauce",
    "spelling": "sauce",
    "ipa": "/sɔs/",
    "pos": "n",
    "zh": "调味汁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sauce"
    ],
    "example": "",
    "distractors": [
      "坐下休息；静坐抗议",
      "花",
      "含糖的；甜的"
    ]
  },
  {
    "word": "sausage",
    "speakText": "sausage",
    "spelling": "sausage",
    "ipa": "/ˈsɔsɪdʒ, ˈsɑsɪdʒ/",
    "pos": "n",
    "zh": "香肠",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sausage"
    ],
    "example": "",
    "distractors": [
      "工地",
      "匙",
      "游泳"
    ]
  },
  {
    "word": "save",
    "speakText": "save",
    "spelling": "save",
    "ipa": "/seɪv/",
    "pos": "v",
    "zh": "挽救",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "save"
    ],
    "example": "",
    "distractors": [
      "起居室",
      "运动",
      "游泳"
    ]
  },
  {
    "word": "say",
    "speakText": "say",
    "spelling": "say",
    "ipa": "/seɪ/",
    "pos": "v",
    "zh": "说",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "say"
    ],
    "example": "",
    "distractors": [
      "尺寸；尺码",
      "体育中心",
      "泳衣"
    ]
  },
  {
    "word": "scarf",
    "speakText": "scarf",
    "spelling": "scarf",
    "ipa": "/skɑrf/",
    "pos": "n",
    "zh": "头巾；围巾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "scarf"
    ],
    "example": "",
    "distractors": [
      "冰鞋",
      "春天",
      "游泳池；游泳馆"
    ]
  },
  {
    "word": "school",
    "speakText": "school",
    "spelling": "school",
    "ipa": "/skul/",
    "pos": "n",
    "zh": "未成年人上的学校",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "school"
    ],
    "example": "",
    "distractors": [
      "滑板；踩滑板",
      "正方形",
      "游泳衣"
    ]
  },
  {
    "word": "schoolchild",
    "speakText": "schoolchild",
    "spelling": "schoolchild",
    "ipa": "/ˈskulˌtʃaɪld/",
    "pos": "n",
    "zh": "学童",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "schoolchild"
    ],
    "example": "",
    "distractors": [
      "滑板运动",
      "体育场",
      "桌子"
    ]
  },
  {
    "word": "science",
    "speakText": "science",
    "spelling": "science",
    "ipa": "/ˈsaɪən(t)s/",
    "pos": "n",
    "zh": "科学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "science"
    ],
    "example": "",
    "distractors": [
      "滑冰；滑轮滑旱冰",
      "全体职员",
      "乒乓球运动"
    ]
  },
  {
    "word": "scissors",
    "speakText": "scissors",
    "spelling": "scissors",
    "ipa": "/ˈsɪzərz/",
    "pos": "n pl",
    "zh": "剪刀",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "scissors"
    ],
    "example": "",
    "distractors": [
      "滑雪板",
      "舞台；讲台",
      "携带；带领"
    ]
  },
  {
    "word": "scooter",
    "speakText": "scooter",
    "spelling": "scooter",
    "ipa": "/ˈskudər/",
    "pos": "n",
    "zh": "踏板车；滑板车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "scooter"
    ],
    "example": "",
    "distractors": [
      "滑雪；滑雪运动",
      "梯级",
      "起飞"
    ]
  },
  {
    "word": "screen",
    "speakText": "screen",
    "spelling": "screen",
    "ipa": "/skrin/",
    "pos": "n",
    "zh": "屏风；围屏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "screen"
    ],
    "example": "",
    "distractors": [
      "裙子",
      "邮票",
      "谈话"
    ]
  },
  {
    "word": "sea",
    "speakText": "sea",
    "spelling": "sea",
    "ipa": "/si/",
    "pos": "n",
    "zh": "海",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sea"
    ],
    "example": "",
    "distractors": [
      "天空",
      "站立",
      "高的"
    ]
  },
  {
    "word": "seat",
    "speakText": "seat",
    "spelling": "seat",
    "ipa": "/sit/",
    "pos": "n",
    "zh": "椅子；座椅",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seat"
    ],
    "example": "",
    "distractors": [
      "睡着",
      "星",
      "出租车"
    ]
  },
  {
    "word": "second",
    "speakText": "second",
    "spelling": "second",
    "ipa": "/ˈsɛkənd/",
    "pos": "adj, det / n",
    "zh": "第二的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "second"
    ],
    "example": "",
    "distractors": [
      "薄片",
      "开始",
      "茶"
    ]
  },
  {
    "word": "secretary",
    "speakText": "secretary",
    "spelling": "secretary",
    "ipa": "/ˈsɛkrəˌtɛri/",
    "pos": "n",
    "zh": "秘书；干事",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "secretary"
    ],
    "example": "",
    "distractors": [
      "苗条的；纤细的",
      "火车站；地铁站",
      "教"
    ]
  },
  {
    "word": "see",
    "speakText": "see",
    "spelling": "see",
    "ipa": "/si/",
    "pos": "v",
    "zh": "看见",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "see"
    ],
    "example": "",
    "distractors": [
      "耗时的；缓慢的",
      "停留",
      "教师"
    ]
  },
  {
    "word": "sell",
    "speakText": "sell",
    "spelling": "sell",
    "ipa": "/sɛl/",
    "pos": "v",
    "zh": "卖",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sell"
    ],
    "example": "",
    "distractors": [
      "慢悠悠地",
      "牛排；肉块",
      "队"
    ]
  },
  {
    "word": "send",
    "speakText": "send",
    "spelling": "send",
    "ipa": "/sɛnd/",
    "pos": "v",
    "zh": "发送",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "send"
    ],
    "example": "",
    "distractors": [
      "小的；矮小的",
      "偷",
      "青少年"
    ]
  },
  {
    "word": "sentence",
    "speakText": "sentence",
    "spelling": "sentence",
    "ipa": "/ˈsɛntn(t)s, ˈsɛn(t)ən(t)s/",
    "pos": "n",
    "zh": "句子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sentence"
    ],
    "example": "",
    "distractors": [
      "烟",
      "仍然",
      "电话；电话机"
    ]
  },
  {
    "word": "serve",
    "speakText": "serve",
    "spelling": "serve",
    "ipa": "/sərv/",
    "pos": "v",
    "zh": "伺候；为效力",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "serve"
    ],
    "example": "",
    "distractors": [
      "吸烟",
      "胃",
      "讲；告诉"
    ]
  },
  {
    "word": "set",
    "speakText": "set",
    "spelling": "set",
    "ipa": "/sɛt/",
    "pos": "n",
    "zh": "放置；安置",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "set"
    ],
    "example": "",
    "distractors": [
      "快餐",
      "胃痛",
      "温度"
    ]
  },
  {
    "word": "several",
    "speakText": "several",
    "spelling": "several",
    "ipa": "/ˈsɛv(ə)rəl/",
    "pos": "det / pron",
    "zh": "几个",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "several"
    ],
    "example": "",
    "distractors": [
      "雪",
      "停住",
      "网球"
    ]
  },
  {
    "word": "shall",
    "speakText": "shall",
    "spelling": "shall",
    "ipa": "/ʃæl/",
    "pos": "mv",
    "zh": "将",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shall"
    ],
    "example": "",
    "distractors": [
      "滑雪板；用滑雪板滑雪",
      "大型百货商店；商店",
      "帐篷"
    ]
  },
  {
    "word": "shame",
    "speakText": "shame",
    "spelling": "shame",
    "ipa": "/ʃeɪm/",
    "pos": "n",
    "zh": "羞愧感",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shame"
    ],
    "example": "",
    "distractors": [
      "滑雪板运动",
      "暴风雨；暴风雪",
      "任期；期限"
    ]
  },
  {
    "word": "shampoo",
    "speakText": "shampoo",
    "spelling": "shampoo",
    "ipa": "/ʃæmˈpu/",
    "pos": "n / v",
    "zh": "洗发剂；洗涤剂",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shampoo"
    ],
    "example": "",
    "distractors": [
      "如此",
      "故事",
      "可怕的；严重的"
    ]
  },
  {
    "word": "share",
    "speakText": "share",
    "spelling": "share",
    "ipa": "/ʃɛr/",
    "pos": "v",
    "zh": "一份",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "share"
    ],
    "example": "",
    "distractors": [
      "这样说",
      "直的",
      "试验"
    ]
  },
  {
    "word": "she",
    "speakText": "she",
    "spelling": "she",
    "ipa": "/ʃiː/",
    "pos": "pron",
    "zh": "她",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "she"
    ],
    "example": "",
    "distractors": [
      "肥皂；用肥皂洗",
      "奇怪的；奇特的",
      "文本；文档"
    ]
  },
  {
    "word": "sheep",
    "speakText": "sheep",
    "spelling": "sheep",
    "ipa": "/ʃip/",
    "pos": "n",
    "zh": "羊",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sheep"
    ],
    "example": "",
    "distractors": [
      "足球运动",
      "街道",
      "课本；规范的"
    ]
  },
  {
    "word": "sheet",
    "speakText": "sheet",
    "spelling": "sheet",
    "ipa": "/ʃit/",
    "pos": "n",
    "zh": "床单",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sheet"
    ],
    "example": "",
    "distractors": [
      "短袜",
      "强壮的；强劲的",
      "短信息"
    ]
  },
  {
    "word": "shelf",
    "speakText": "shelf",
    "spelling": "shelf",
    "ipa": "/ʃɛlf/",
    "pos": "n",
    "zh": "架子；搁板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shelf"
    ],
    "example": "",
    "distractors": [
      "长沙发",
      "大学生",
      "比"
    ]
  },
  {
    "word": "ship",
    "speakText": "ship",
    "spelling": "ship",
    "ipa": "/ʃɪp/",
    "pos": "n",
    "zh": "轮船",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ship"
    ],
    "example": "",
    "distractors": [
      "软的",
      "学习",
      "感谢"
    ]
  },
  {
    "word": "shirt",
    "speakText": "shirt",
    "spelling": "shirt",
    "ipa": "/ʃərt/",
    "pos": "n",
    "zh": "衬衫",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shirt"
    ],
    "example": "",
    "distractors": [
      "软件",
      "学习",
      "感谢"
    ]
  },
  {
    "word": "shoe",
    "speakText": "shoe",
    "spelling": "shoe",
    "ipa": "/ʃu/",
    "pos": "n",
    "zh": "鞋",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shoe"
    ],
    "example": "",
    "distractors": [
      "一些",
      "主题",
      "谢谢你"
    ]
  },
  {
    "word": "shop",
    "speakText": "shop",
    "spelling": "shop",
    "ipa": "/ʃɑp/",
    "pos": "n / v",
    "zh": "商店",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shop"
    ],
    "example": "",
    "distractors": [
      "某人",
      "那样的；这样的",
      "那（个）"
    ]
  },
  {
    "word": "shop assistant",
    "speakText": "shop assistant",
    "spelling": "shopassistant",
    "ipa": "/ˈʃɒp əsɪst(ə)nt/",
    "pos": "n",
    "zh": "店员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shop assistant"
    ],
    "example": "",
    "distractors": [
      "某人",
      "突然地",
      "剧场"
    ]
  },
  {
    "word": "shopping",
    "speakText": "shopping",
    "spelling": "shopping",
    "ipa": "/ˈʃɑpɪŋ/",
    "pos": "n",
    "zh": "购物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shopping"
    ],
    "example": "",
    "distractors": [
      "某事物",
      "植物所含的糖",
      "他们的；她们的"
    ]
  },
  {
    "word": "short",
    "speakText": "short",
    "spelling": "short",
    "ipa": "/ʃɔrt/",
    "pos": "adj",
    "zh": "短的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "short"
    ],
    "example": "",
    "distractors": [
      "有时",
      "套装",
      "他们的；她们的"
    ]
  },
  {
    "word": "shorts",
    "speakText": "shorts",
    "spelling": "shorts",
    "ipa": "/ʃɔrts/",
    "pos": "n pl",
    "zh": "短裤",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shorts"
    ],
    "example": "",
    "distractors": [
      "在某处",
      "旅行用的手提箱",
      "他们；她们"
    ]
  },
  {
    "word": "should",
    "speakText": "should",
    "spelling": "should",
    "ipa": "/ʃʊd/",
    "pos": "mv",
    "zh": "应该",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "should"
    ],
    "example": "",
    "distractors": [
      "儿子",
      "夏天",
      "他们自己；她们自己"
    ]
  },
  {
    "word": "shout",
    "speakText": "shout",
    "spelling": "shout",
    "ipa": "/ʃaʊt/",
    "pos": "v",
    "zh": "大喊",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shout"
    ],
    "example": "",
    "distractors": [
      "歌曲",
      "太阳",
      "当时；到那时"
    ]
  },
  {
    "word": "show",
    "speakText": "show",
    "spelling": "show",
    "ipa": "/ʃoʊ/",
    "pos": "v / n",
    "zh": "出示；上映",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "show"
    ],
    "example": "",
    "distractors": [
      "不久",
      "墨镜",
      "那里；在那里"
    ]
  },
  {
    "word": "shower",
    "speakText": "shower",
    "spelling": "shower",
    "ipa": "/ˈʃaʊ(ə)r/",
    "pos": "n",
    "zh": "阵雨",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shower"
    ],
    "example": "",
    "distractors": [
      "抱歉的",
      "阳光充足的",
      "这些"
    ]
  },
  {
    "word": "shut",
    "speakText": "shut",
    "spelling": "shut",
    "ipa": "/ʃət/",
    "pos": "v",
    "zh": "关上；合上",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "shut"
    ],
    "example": "",
    "distractors": [
      "种类",
      "超市",
      "他们；她们"
    ]
  },
  {
    "word": "sick",
    "speakText": "sick",
    "spelling": "sick",
    "ipa": "/sɪk/",
    "pos": "adj",
    "zh": "有病的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sick"
    ],
    "example": "",
    "distractors": [
      "声响",
      "晚饭",
      "瘦的"
    ]
  },
  {
    "word": "side",
    "speakText": "side",
    "spelling": "side",
    "ipa": "/saɪd/",
    "pos": "n",
    "zh": "边；一侧",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "side"
    ],
    "example": "",
    "distractors": [
      "汤",
      "认为",
      "东西"
    ]
  },
  {
    "word": "sightseeing",
    "speakText": "sightseeing",
    "spelling": "sightseeing",
    "ipa": "/ˈsaɪtˌsiɪŋ/",
    "pos": "n",
    "zh": "观光",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sightseeing"
    ],
    "example": "",
    "distractors": [
      "南；南方",
      "确信的",
      "有思考能力"
    ]
  },
  {
    "word": "sign",
    "speakText": "sign",
    "spelling": "sign",
    "ipa": "/saɪn/",
    "pos": "n",
    "zh": "符号；公告",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sign"
    ],
    "example": "",
    "distractors": [
      "空间",
      "拍岸浪花",
      "口渴的"
    ]
  },
  {
    "word": "silver",
    "speakText": "silver",
    "spelling": "silver",
    "ipa": "/ˈsɪlvər/",
    "pos": "n / adj",
    "zh": "银；银色",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "silver"
    ],
    "example": "",
    "distractors": [
      "闲置的；不用的",
      "冲浪板",
      "这（个）"
    ]
  },
  {
    "word": "simple",
    "speakText": "simple",
    "spelling": "simple",
    "ipa": "/ˈsɪmpəl/",
    "pos": "adj",
    "zh": "简单的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "simple"
    ],
    "example": "",
    "distractors": [
      "说话",
      "冲浪运动",
      "那些"
    ]
  },
  {
    "word": "since",
    "speakText": "since",
    "spelling": "since",
    "ipa": "/sɪn(t)s/",
    "pos": "prep",
    "zh": "自以来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "since"
    ],
    "example": "",
    "distractors": [
      "发言者",
      "姓",
      "穿过"
    ]
  },
  {
    "word": "sing",
    "speakText": "sing",
    "spelling": "sing",
    "ipa": "/sɪŋ/",
    "pos": "v",
    "zh": "唱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sing"
    ],
    "example": "",
    "distractors": [
      "特别的",
      "意想不到的事物",
      "投掷"
    ]
  },
  {
    "word": "singer",
    "speakText": "singer",
    "spelling": "singer",
    "ipa": "/ˈsɪŋər/",
    "pos": "n",
    "zh": "歌手",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "singer"
    ],
    "example": "",
    "distractors": [
      "咒语",
      "惊讶的",
      "雷暴"
    ]
  },
  {
    "word": "singing",
    "speakText": "singing",
    "spelling": "singing",
    "ipa": "/ˈsɪŋɪŋ/",
    "pos": "n",
    "zh": "唱歌；歌声",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "singing"
    ],
    "example": "",
    "distractors": [
      "拼写",
      "毛衣",
      "票"
    ]
  },
  {
    "word": "single",
    "speakText": "single",
    "spelling": "single",
    "ipa": "/ˈsɪŋɡ(ə)l/",
    "pos": "adj",
    "zh": "仅有一个的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "single"
    ],
    "example": "",
    "distractors": [
      "花",
      "含糖的；甜的",
      "整洁的；有条理的"
    ]
  },
  {
    "word": "sink",
    "speakText": "sink",
    "spelling": "sink",
    "ipa": "/sɪŋk/",
    "pos": "n",
    "zh": "下沉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sink"
    ],
    "example": "",
    "distractors": [
      "匙",
      "游泳",
      "收拾"
    ]
  },
  {
    "word": "sister",
    "speakText": "sister",
    "spelling": "sister",
    "ipa": "/ˈsɪstər/",
    "pos": "n",
    "zh": "姐姐；妹妹",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sister"
    ],
    "example": "",
    "distractors": [
      "运动",
      "游泳",
      "领带；系"
    ]
  },
  {
    "word": "sit",
    "speakText": "sit",
    "spelling": "sit",
    "ipa": "/sɪt/",
    "pos": "v",
    "zh": "坐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sit"
    ],
    "example": "",
    "distractors": [
      "体育中心",
      "泳衣",
      "老虎"
    ]
  },
  {
    "word": "sit down",
    "speakText": "sit down",
    "spelling": "sitdown",
    "ipa": "/ˈsɪtˌdaʊn/",
    "pos": "phrasal verb",
    "zh": "坐下休息；静坐抗议",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sit down"
    ],
    "example": "",
    "distractors": [
      "春天",
      "游泳池；游泳馆",
      "连裤袜"
    ]
  },
  {
    "word": "site",
    "speakText": "site",
    "spelling": "site",
    "ipa": "/saɪt/",
    "pos": "n",
    "zh": "工地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "site"
    ],
    "example": "",
    "distractors": [
      "正方形",
      "游泳衣",
      "直到"
    ]
  },
  {
    "word": "sitting room",
    "speakText": "sitting room",
    "spelling": "sittingroom",
    "ipa": "/ˈsɪdɪŋ ˌrum/",
    "pos": "n",
    "zh": "起居室",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sitting room"
    ],
    "example": "",
    "distractors": [
      "体育场",
      "桌子",
      "时间"
    ]
  },
  {
    "word": "size",
    "speakText": "size",
    "spelling": "size",
    "ipa": "/saɪz/",
    "pos": "n",
    "zh": "尺寸；尺码",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "size"
    ],
    "example": "",
    "distractors": [
      "全体职员",
      "乒乓球运动",
      "时间表；日程表"
    ]
  },
  {
    "word": "skate",
    "speakText": "skate",
    "spelling": "skate",
    "ipa": "/skeɪt/",
    "pos": "v",
    "zh": "冰鞋",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skate"
    ],
    "example": "",
    "distractors": [
      "舞台；讲台",
      "携带；带领",
      "疲劳的"
    ]
  },
  {
    "word": "skateboard",
    "speakText": "skateboard",
    "spelling": "skateboard",
    "ipa": "/ˈskeɪtˌbɔrd/",
    "pos": "n",
    "zh": "滑板；踩滑板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skateboard"
    ],
    "example": "",
    "distractors": [
      "梯级",
      "起飞",
      "去"
    ]
  },
  {
    "word": "skateboarding",
    "speakText": "skateboarding",
    "spelling": "skateboarding",
    "ipa": "/ˈskeɪtˌbɔrdɪŋ/",
    "pos": "n",
    "zh": "滑板运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skateboarding"
    ],
    "example": "",
    "distractors": [
      "邮票",
      "谈话",
      "烤面包片"
    ]
  },
  {
    "word": "skating",
    "speakText": "skating",
    "spelling": "skating",
    "ipa": "/ˈskeɪdɪŋ/",
    "pos": "n",
    "zh": "滑冰；滑轮滑旱冰",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skating"
    ],
    "example": "",
    "distractors": [
      "站立",
      "高的",
      "在今天"
    ]
  },
  {
    "word": "ski",
    "speakText": "ski",
    "spelling": "ski",
    "ipa": "/ski/",
    "pos": "v",
    "zh": "滑雪板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ski"
    ],
    "example": "",
    "distractors": [
      "星",
      "出租车",
      "脚趾"
    ]
  },
  {
    "word": "skiing",
    "speakText": "skiing",
    "spelling": "skiing",
    "ipa": "/ˈskiɪŋ/",
    "pos": "n",
    "zh": "滑雪；滑雪运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skiing"
    ],
    "example": "",
    "distractors": [
      "开始",
      "茶",
      "一起；共同"
    ]
  },
  {
    "word": "skirt",
    "speakText": "skirt",
    "spelling": "skirt",
    "ipa": "/skərt/",
    "pos": "n",
    "zh": "裙子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "skirt"
    ],
    "example": "",
    "distractors": [
      "火车站；地铁站",
      "教",
      "抽水马桶"
    ]
  },
  {
    "word": "sky",
    "speakText": "sky",
    "spelling": "sky",
    "ipa": "/skaɪ/",
    "pos": "n",
    "zh": "天空",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sky"
    ],
    "example": "",
    "distractors": [
      "停留",
      "教师",
      "番茄"
    ]
  },
  {
    "word": "sleep",
    "speakText": "sleep",
    "spelling": "sleep",
    "ipa": "/slip/",
    "pos": "v",
    "zh": "睡着",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sleep"
    ],
    "example": "",
    "distractors": [
      "牛排；肉块",
      "队",
      "在明天"
    ]
  },
  {
    "word": "slice",
    "speakText": "slice",
    "spelling": "slice",
    "ipa": "/slaɪs/",
    "pos": "n",
    "zh": "薄片",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "slice"
    ],
    "example": "",
    "distractors": [
      "偷",
      "青少年",
      "今夜"
    ]
  },
  {
    "word": "slim",
    "speakText": "slim",
    "spelling": "slim",
    "ipa": "/slɪm/",
    "pos": "adj",
    "zh": "苗条的；纤细的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "slim"
    ],
    "example": "",
    "distractors": [
      "仍然",
      "电话；电话机",
      "太"
    ]
  },
  {
    "word": "slow",
    "speakText": "slow",
    "spelling": "slow",
    "ipa": "/sloʊ/",
    "pos": "adj",
    "zh": "耗时的；缓慢的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "slow"
    ],
    "example": "",
    "distractors": [
      "胃",
      "讲；告诉",
      "牙齿"
    ]
  },
  {
    "word": "slowly",
    "speakText": "slowly",
    "spelling": "slowly",
    "ipa": "/ˈsloʊli/",
    "pos": "adv",
    "zh": "慢悠悠地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "slowly"
    ],
    "example": "",
    "distractors": [
      "胃痛",
      "温度",
      "牙刷"
    ]
  },
  {
    "word": "small",
    "speakText": "small",
    "spelling": "small",
    "ipa": "/smɔl/",
    "pos": "adj",
    "zh": "小的；矮小的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "small"
    ],
    "example": "",
    "distractors": [
      "停住",
      "网球",
      "顶；顶端"
    ]
  },
  {
    "word": "smoke",
    "speakText": "smoke",
    "spelling": "smoke",
    "ipa": "/smoʊk/",
    "pos": "v",
    "zh": "烟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "smoke"
    ],
    "example": "",
    "distractors": [
      "大型百货商店；商店",
      "帐篷",
      "总数"
    ]
  },
  {
    "word": "smoking",
    "speakText": "smoking",
    "spelling": "smoking",
    "ipa": "/ˈsmoʊkɪŋ/",
    "pos": "n",
    "zh": "吸烟",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "smoking"
    ],
    "example": "",
    "distractors": [
      "暴风雨；暴风雪",
      "任期；期限",
      "旅行"
    ]
  },
  {
    "word": "snack",
    "speakText": "snack",
    "spelling": "snack",
    "ipa": "/snæk/",
    "pos": "n",
    "zh": "快餐",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "snack"
    ],
    "example": "",
    "distractors": [
      "故事",
      "可怕的；严重的",
      "导游"
    ]
  },
  {
    "word": "snow",
    "speakText": "snow",
    "spelling": "snow",
    "ipa": "/snoʊ/",
    "pos": "n / v",
    "zh": "雪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "snow"
    ],
    "example": "",
    "distractors": [
      "直的",
      "试验",
      "旅游者"
    ]
  },
  {
    "word": "snowboard",
    "speakText": "snowboard",
    "spelling": "snowboard",
    "ipa": "/ˈsnoʊˌbɔrd/",
    "pos": "n",
    "zh": "滑雪板；用滑雪板滑雪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "snowboard"
    ],
    "example": "",
    "distractors": [
      "奇怪的；奇特的",
      "文本；文档",
      "游客信息中心"
    ]
  },
  {
    "word": "snowboarding",
    "speakText": "snowboarding",
    "spelling": "snowboarding",
    "ipa": "/ˈsnoʊˌbɔrdɪŋ/",
    "pos": "n",
    "zh": "滑雪板运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "snowboarding"
    ],
    "example": "",
    "distractors": [
      "街道",
      "课本；规范的",
      "毛巾；纸巾"
    ]
  },
  {
    "word": "so",
    "speakText": "so",
    "spelling": "so",
    "ipa": "/soʊ/",
    "pos": "conj / adv",
    "zh": "如此",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "so"
    ],
    "example": "",
    "distractors": [
      "强壮的；强劲的",
      "短信息",
      "城镇"
    ]
  },
  {
    "word": "soap",
    "speakText": "soap",
    "spelling": "soap",
    "ipa": "/soʊp/",
    "pos": "n",
    "zh": "肥皂；用肥皂洗",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "soap"
    ],
    "example": "",
    "distractors": [
      "学习",
      "感谢",
      "交通；来往的车辆"
    ]
  },
  {
    "word": "soccer",
    "speakText": "soccer",
    "spelling": "soccer",
    "ipa": "/ˈsɑkər/",
    "pos": "n",
    "zh": "足球运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "soccer"
    ],
    "example": "",
    "distractors": [
      "学习",
      "感谢",
      "红绿灯"
    ]
  },
  {
    "word": "sock",
    "speakText": "sock",
    "spelling": "sock",
    "ipa": "/sɑk/",
    "pos": "n",
    "zh": "短袜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sock"
    ],
    "example": "",
    "distractors": [
      "主题",
      "谢谢你",
      "火车；地铁"
    ]
  },
  {
    "word": "sofa",
    "speakText": "sofa",
    "spelling": "sofa",
    "ipa": "/ˈsoʊfə/",
    "pos": "n",
    "zh": "长沙发",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sofa"
    ],
    "example": "",
    "distractors": [
      "那样的；这样的",
      "那（个）",
      "教练员；驯马师"
    ]
  },
  {
    "word": "soft",
    "speakText": "soft",
    "spelling": "soft",
    "ipa": "/sɔft/",
    "pos": "adj",
    "zh": "软的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "soft"
    ],
    "example": "",
    "distractors": [
      "突然地",
      "剧场",
      "有轨电车"
    ]
  },
  {
    "word": "software",
    "speakText": "software",
    "spelling": "software",
    "ipa": "/ˈsɔf(t)ˌwɛr/",
    "pos": "n",
    "zh": "软件",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "software"
    ],
    "example": "",
    "distractors": [
      "植物所含的糖",
      "他们的；她们的",
      "旅行"
    ]
  },
  {
    "word": "some",
    "speakText": "some",
    "spelling": "some",
    "ipa": "/səm/",
    "pos": "det / pron",
    "zh": "一些",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "some"
    ],
    "example": "",
    "distractors": [
      "套装",
      "他们的；她们的",
      "树木"
    ]
  },
  {
    "word": "somebody",
    "speakText": "somebody",
    "spelling": "somebody",
    "ipa": "/ˈsəmbədi/",
    "pos": "pron",
    "zh": "某人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "somebody"
    ],
    "example": "",
    "distractors": [
      "旅行用的手提箱",
      "他们；她们",
      "旅行"
    ]
  },
  {
    "word": "someone",
    "speakText": "someone",
    "spelling": "someone",
    "ipa": "/ˈsʌmwʌn/",
    "pos": "pron",
    "zh": "某人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "someone"
    ],
    "example": "",
    "distractors": [
      "夏天",
      "他们自己；她们自己",
      "问题"
    ]
  },
  {
    "word": "something",
    "speakText": "something",
    "spelling": "something",
    "ipa": "/ˈsəmˌθɪŋ/",
    "pos": "pron",
    "zh": "某事物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "something"
    ],
    "example": "",
    "distractors": [
      "太阳",
      "当时；到那时",
      "裤子"
    ]
  },
  {
    "word": "sometimes",
    "speakText": "sometimes",
    "spelling": "sometimes",
    "ipa": "/ˈsəmˌtaɪmz/",
    "pos": "adv",
    "zh": "有时",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sometimes"
    ],
    "example": "",
    "distractors": [
      "墨镜",
      "那里；在那里",
      "真实的；如实的"
    ]
  },
  {
    "word": "somewhere",
    "speakText": "somewhere",
    "spelling": "somewhere",
    "ipa": "/ˈsəmˌ(h)wɛr/",
    "pos": "adv",
    "zh": "在某处",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "somewhere"
    ],
    "example": "",
    "distractors": [
      "阳光充足的",
      "这些",
      "尝试"
    ]
  },
  {
    "word": "son",
    "speakText": "son",
    "spelling": "son",
    "ipa": "/sən/",
    "pos": "n",
    "zh": "儿子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "son"
    ],
    "example": "",
    "distractors": [
      "超市",
      "他们；她们",
      "试穿"
    ]
  },
  {
    "word": "song",
    "speakText": "song",
    "spelling": "song",
    "ipa": "/sɔːŋ/",
    "pos": "n",
    "zh": "歌曲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "song"
    ],
    "example": "",
    "distractors": [
      "晚饭",
      "瘦的",
      "恤衫"
    ]
  },
  {
    "word": "soon",
    "speakText": "soon",
    "spelling": "soon",
    "ipa": "/sun/",
    "pos": "adv",
    "zh": "不久",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "soon"
    ],
    "example": "",
    "distractors": [
      "认为",
      "东西",
      "转动"
    ]
  },
  {
    "word": "sorry",
    "speakText": "sorry",
    "spelling": "sorry",
    "ipa": "/ˈsɔri, ˈsɑri/",
    "pos": "adj",
    "zh": "抱歉的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sorry"
    ],
    "example": "",
    "distractors": [
      "确信的",
      "有思考能力",
      "支路"
    ]
  },
  {
    "word": "sort",
    "speakText": "sort",
    "spelling": "sort",
    "ipa": "/sɔrt/",
    "pos": "n",
    "zh": "种类",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sort"
    ],
    "example": "",
    "distractors": [
      "拍岸浪花",
      "口渴的",
      "两次"
    ]
  },
  {
    "word": "sound",
    "speakText": "sound",
    "spelling": "sound",
    "ipa": "/saʊnd/",
    "pos": "v",
    "zh": "声响",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sound"
    ],
    "example": "",
    "distractors": [
      "冲浪板",
      "这（个）",
      "类型"
    ]
  },
  {
    "word": "soup",
    "speakText": "soup",
    "spelling": "soup",
    "ipa": "/sup/",
    "pos": "n",
    "zh": "汤",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "soup"
    ],
    "example": "",
    "distractors": [
      "冲浪运动",
      "那些",
      "轮胎"
    ]
  },
  {
    "word": "south",
    "speakText": "south",
    "spelling": "south",
    "ipa": "/saʊθ/",
    "pos": "n, adj / adv",
    "zh": "南；南方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "south"
    ],
    "example": "",
    "distractors": [
      "姓",
      "穿过",
      "伞"
    ]
  },
  {
    "word": "space",
    "speakText": "space",
    "spelling": "space",
    "ipa": "/speɪs/",
    "pos": "n",
    "zh": "空间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "space"
    ],
    "example": "",
    "distractors": [
      "意想不到的事物",
      "投掷",
      "伯父；叔父"
    ]
  },
  {
    "word": "spare",
    "speakText": "spare",
    "spelling": "spare",
    "ipa": "/spɛr/",
    "pos": "adj",
    "zh": "闲置的；不用的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spare"
    ],
    "example": "",
    "distractors": [
      "惊讶的",
      "雷暴",
      "在下面；到下面"
    ]
  },
  {
    "word": "speak",
    "speakText": "speak",
    "spelling": "speak",
    "ipa": "/spik/",
    "pos": "v",
    "zh": "说话",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "speak"
    ],
    "example": "",
    "distractors": [
      "毛衣",
      "票",
      "地下的"
    ]
  },
  {
    "word": "speaker",
    "speakText": "speaker",
    "spelling": "speaker",
    "ipa": "/ˈspikər/",
    "pos": "n",
    "zh": "发言者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "speaker"
    ],
    "example": "",
    "distractors": [
      "含糖的；甜的",
      "整洁的；有条理的",
      "懂；了解"
    ]
  },
  {
    "word": "special",
    "speakText": "special",
    "spelling": "special",
    "ipa": "/ˈspɛʃ(ə)l/",
    "pos": "adj",
    "zh": "特别的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "special"
    ],
    "example": "",
    "distractors": [
      "游泳",
      "收拾",
      "不幸地"
    ]
  },
  {
    "word": "spell",
    "speakText": "spell",
    "spelling": "spell",
    "ipa": "/spɛl/",
    "pos": "v",
    "zh": "咒语",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spell"
    ],
    "example": "",
    "distractors": [
      "游泳",
      "领带；系",
      "痛苦的"
    ]
  },
  {
    "word": "spelling",
    "speakText": "spelling",
    "spelling": "spelling",
    "ipa": "/ˈspɛlɪŋ/",
    "pos": "n",
    "zh": "拼写",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spelling"
    ],
    "example": "",
    "distractors": [
      "泳衣",
      "老虎",
      "制服"
    ]
  },
  {
    "word": "spend",
    "speakText": "spend",
    "spelling": "spend",
    "ipa": "/spɛnd/",
    "pos": "v",
    "zh": "花",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spend"
    ],
    "example": "",
    "distractors": [
      "游泳池；游泳馆",
      "连裤袜",
      "大学"
    ]
  },
  {
    "word": "spoon",
    "speakText": "spoon",
    "spelling": "spoon",
    "ipa": "/spun/",
    "pos": "n",
    "zh": "匙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spoon"
    ],
    "example": "",
    "distractors": [
      "游泳衣",
      "直到",
      "健康的"
    ]
  },
  {
    "word": "sport",
    "speakText": "sport",
    "spelling": "sport",
    "ipa": "/spɔrt/",
    "pos": "n",
    "zh": "运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sport"
    ],
    "example": "",
    "distractors": [
      "桌子",
      "时间",
      "不寻常的"
    ]
  },
  {
    "word": "sports centre",
    "speakText": "sports centre",
    "spelling": "sportscentre",
    "ipa": "/ˈspɔːrts ˌsentər/",
    "pos": "n",
    "zh": "体育中心",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sports centre"
    ],
    "example": "",
    "distractors": [
      "乒乓球运动",
      "时间表；日程表",
      "在上面"
    ]
  },
  {
    "word": "spring",
    "speakText": "spring",
    "spelling": "spring",
    "ipa": "/sprɪŋ/",
    "pos": "n",
    "zh": "春天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "spring"
    ],
    "example": "",
    "distractors": [
      "携带；带领",
      "疲劳的",
      "使苦恼；使生气"
    ]
  },
  {
    "word": "square",
    "speakText": "square",
    "spelling": "square",
    "ipa": "/skwɛr/",
    "pos": "n / adj",
    "zh": "正方形",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "square"
    ],
    "example": "",
    "distractors": [
      "起飞",
      "去",
      "在楼上；往楼上"
    ]
  },
  {
    "word": "stadium",
    "speakText": "stadium",
    "spelling": "stadium",
    "ipa": "/ˈsteɪdiəm/",
    "pos": "n",
    "zh": "体育场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stadium"
    ],
    "example": "",
    "distractors": [
      "谈话",
      "烤面包片",
      "我们"
    ]
  },
  {
    "word": "staff",
    "speakText": "staff",
    "spelling": "staff",
    "ipa": "/stæf/",
    "pos": "n",
    "zh": "全体职员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "staff"
    ],
    "example": "",
    "distractors": [
      "高的",
      "在今天",
      "使用；被使用"
    ]
  },
  {
    "word": "stage",
    "speakText": "stage",
    "spelling": "stage",
    "ipa": "/steɪdʒ/",
    "pos": "n",
    "zh": "舞台；讲台",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stage"
    ],
    "example": "",
    "distractors": [
      "出租车",
      "脚趾",
      "有用的"
    ]
  },
  {
    "word": "stairs",
    "speakText": "stairs",
    "spelling": "stairs",
    "ipa": "/stɛr/",
    "pos": "n pl",
    "zh": "梯级",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stairs"
    ],
    "example": "",
    "distractors": [
      "茶",
      "一起；共同",
      "通常的"
    ]
  },
  {
    "word": "stamp",
    "speakText": "stamp",
    "spelling": "stamp",
    "ipa": "/stæmp/",
    "pos": "n",
    "zh": "邮票",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stamp"
    ],
    "example": "",
    "distractors": [
      "教",
      "抽水马桶",
      "通常"
    ]
  },
  {
    "word": "stand",
    "speakText": "stand",
    "spelling": "stand",
    "ipa": "/stænd/",
    "pos": "v",
    "zh": "站立",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stand"
    ],
    "example": "",
    "distractors": [
      "教师",
      "番茄",
      "对；与……相比"
    ]
  },
  {
    "word": "star",
    "speakText": "star",
    "spelling": "star",
    "ipa": "/stɑr/",
    "pos": "n / v",
    "zh": "星",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "star"
    ],
    "example": "",
    "distractors": [
      "队",
      "在明天",
      "多样化"
    ]
  },
  {
    "word": "start",
    "speakText": "start",
    "spelling": "start",
    "ipa": "/stɑrt/",
    "pos": "v",
    "zh": "开始",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "start"
    ],
    "example": "",
    "distractors": [
      "青少年",
      "今夜",
      "许多的"
    ]
  },
  {
    "word": "station",
    "speakText": "station",
    "spelling": "station",
    "ipa": "/ˈsteɪʃən/",
    "pos": "n",
    "zh": "火车站；地铁站",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "station"
    ],
    "example": "",
    "distractors": [
      "电话；电话机",
      "太",
      "蔬菜；蔬菜的"
    ]
  },
  {
    "word": "stay",
    "speakText": "stay",
    "spelling": "stay",
    "ipa": "/steɪ/",
    "pos": "v",
    "zh": "停留",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stay"
    ],
    "example": "",
    "distractors": [
      "讲；告诉",
      "牙齿",
      "很"
    ]
  },
  {
    "word": "steak",
    "speakText": "steak",
    "spelling": "steak",
    "ipa": "/steɪk/",
    "pos": "n",
    "zh": "牛排；肉块",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "steak"
    ],
    "example": "",
    "distractors": [
      "温度",
      "牙刷",
      "录像"
    ]
  },
  {
    "word": "steal",
    "speakText": "steal",
    "spelling": "steal",
    "ipa": "/stil/",
    "pos": "v",
    "zh": "偷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "steal"
    ],
    "example": "",
    "distractors": [
      "网球",
      "顶；顶端",
      "电子游戏"
    ]
  },
  {
    "word": "still",
    "speakText": "still",
    "spelling": "still",
    "ipa": "/stɪl/",
    "pos": "adv",
    "zh": "仍然",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "still"
    ],
    "example": "",
    "distractors": [
      "帐篷",
      "总数",
      "观点"
    ]
  },
  {
    "word": "stomach",
    "speakText": "stomach",
    "spelling": "stomach",
    "ipa": "/ˈstəmək/",
    "pos": "n",
    "zh": "胃",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stomach"
    ],
    "example": "",
    "distractors": [
      "任期；期限",
      "旅行",
      "村庄"
    ]
  },
  {
    "word": "stomach ache",
    "speakText": "stomach ache",
    "spelling": "stomachache",
    "ipa": "/ˈstəmək ˌeɪk/",
    "pos": "n",
    "zh": "胃痛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stomach ache"
    ],
    "example": "",
    "distractors": [
      "可怕的；严重的",
      "导游",
      "小提琴"
    ]
  },
  {
    "word": "stop",
    "speakText": "stop",
    "spelling": "stop",
    "ipa": "/stɑp/",
    "pos": "n / v",
    "zh": "停住",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "stop"
    ],
    "example": "",
    "distractors": [
      "试验",
      "旅游者",
      "访问"
    ]
  },
  {
    "word": "store",
    "speakText": "store",
    "spelling": "store",
    "ipa": "/stɔr/",
    "pos": "n",
    "zh": "大型百货商店；商店",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "store"
    ],
    "example": "",
    "distractors": [
      "文本；文档",
      "游客信息中心",
      "来客；不速之客"
    ]
  },
  {
    "word": "storm",
    "speakText": "storm",
    "spelling": "storm",
    "ipa": "/stɔrm/",
    "pos": "n",
    "zh": "暴风雨；暴风雪",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "storm"
    ],
    "example": "",
    "distractors": [
      "课本；规范的",
      "毛巾；纸巾",
      "词汇"
    ]
  },
  {
    "word": "story",
    "speakText": "story",
    "spelling": "story",
    "ipa": "/ˈstɔri/",
    "pos": "n",
    "zh": "故事",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "story"
    ],
    "example": "",
    "distractors": [
      "短信息",
      "城镇",
      "排球"
    ]
  },
  {
    "word": "straight",
    "speakText": "straight",
    "spelling": "straight",
    "ipa": "/streɪt/",
    "pos": "adj / adv",
    "zh": "直的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "straight"
    ],
    "example": "",
    "distractors": [
      "比",
      "玩具",
      "等候"
    ]
  },
  {
    "word": "strange",
    "speakText": "strange",
    "spelling": "strange",
    "ipa": "/streɪndʒ/",
    "pos": "adj",
    "zh": "奇怪的；奇特的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "strange"
    ],
    "example": "",
    "distractors": [
      "感谢",
      "交通；来往的车辆",
      "餐馆的男服务员"
    ]
  },
  {
    "word": "street",
    "speakText": "street",
    "spelling": "street",
    "ipa": "/strit/",
    "pos": "n",
    "zh": "街道",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "street"
    ],
    "example": "",
    "distractors": [
      "感谢",
      "红绿灯",
      "餐馆的女服务员"
    ]
  },
  {
    "word": "strong",
    "speakText": "strong",
    "spelling": "strong",
    "ipa": "/strɔŋ/",
    "pos": "adj",
    "zh": "强壮的；强劲的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "strong"
    ],
    "example": "",
    "distractors": [
      "谢谢你",
      "火车；地铁",
      "醒来"
    ]
  },
  {
    "word": "student",
    "speakText": "student",
    "spelling": "student",
    "ipa": "/ˈstud(ə)nt/",
    "pos": "n",
    "zh": "大学生",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "student"
    ],
    "example": "",
    "distractors": [
      "那（个）",
      "教练员；驯马师",
      "醒来"
    ]
  },
  {
    "word": "studies",
    "speakText": "studies",
    "spelling": "studies",
    "ipa": "/ˈstədi/",
    "pos": "n pl",
    "zh": "学习",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "studies"
    ],
    "example": "",
    "distractors": [
      "剧场",
      "有轨电车",
      "走；步行"
    ]
  },
  {
    "word": "study",
    "speakText": "study",
    "spelling": "study",
    "ipa": "/ˈstədi/",
    "pos": "v",
    "zh": "学习",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "study"
    ],
    "example": "",
    "distractors": [
      "他们的；她们的",
      "旅行",
      "步行；竞走"
    ]
  },
  {
    "word": "subject",
    "speakText": "subject",
    "spelling": "subject",
    "ipa": "/səbˈdʒɛk(t)/",
    "pos": "n",
    "zh": "主题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "subject"
    ],
    "example": "",
    "distractors": [
      "他们的；她们的",
      "树木",
      "墙壁"
    ]
  },
  {
    "word": "such",
    "speakText": "such",
    "spelling": "such",
    "ipa": "/sətʃ/",
    "pos": "det",
    "zh": "那样的；这样的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "such"
    ],
    "example": "",
    "distractors": [
      "他们；她们",
      "旅行",
      "皮夹；腰包"
    ]
  },
  {
    "word": "suddenly",
    "speakText": "suddenly",
    "spelling": "suddenly",
    "ipa": "/ˈsəd(ə)nli/",
    "pos": "adv",
    "zh": "突然地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "suddenly"
    ],
    "example": "",
    "distractors": [
      "他们自己；她们自己",
      "问题",
      "要"
    ]
  },
  {
    "word": "sugar",
    "speakText": "sugar",
    "spelling": "sugar",
    "ipa": "/ˈʃʊɡər/",
    "pos": "n",
    "zh": "植物所含的糖",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sugar"
    ],
    "example": "",
    "distractors": [
      "当时；到那时",
      "裤子",
      "温暖的"
    ]
  },
  {
    "word": "suit",
    "speakText": "suit",
    "spelling": "suit",
    "ipa": "/sut/",
    "pos": "n",
    "zh": "套装",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "suit"
    ],
    "example": "",
    "distractors": [
      "那里；在那里",
      "真实的；如实的",
      "给洗澡；洗"
    ]
  },
  {
    "word": "suitcase",
    "speakText": "suitcase",
    "spelling": "suitcase",
    "ipa": "/ˈsutˌkeɪs/",
    "pos": "n",
    "zh": "旅行用的手提箱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "suitcase"
    ],
    "example": "",
    "distractors": [
      "这些",
      "尝试",
      "洗衣机"
    ]
  },
  {
    "word": "summer",
    "speakText": "summer",
    "spelling": "summer",
    "ipa": "/ˈsəmər/",
    "pos": "n",
    "zh": "夏天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "summer"
    ],
    "example": "",
    "distractors": [
      "他们；她们",
      "试穿",
      "洗餐具"
    ]
  },
  {
    "word": "sun",
    "speakText": "sun",
    "spelling": "sun",
    "ipa": "/sʌn/",
    "pos": "n",
    "zh": "太阳",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sun"
    ],
    "example": "",
    "distractors": [
      "瘦的",
      "恤衫",
      "给洗澡；洗"
    ]
  },
  {
    "word": "sunglasses",
    "speakText": "sunglasses",
    "spelling": "sunglasses",
    "ipa": "/ˈsənˌɡlæsəz/",
    "pos": "n pl",
    "zh": "太阳镜；墨镜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sunglasses"
    ],
    "example": "",
    "distractors": [
      "东西",
      "转动",
      "手表；怀表"
    ]
  },
  {
    "word": "sunny",
    "speakText": "sunny",
    "spelling": "sunny",
    "ipa": "/ˈsəni/",
    "pos": "adj",
    "zh": "阳光充足的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sunny"
    ],
    "example": "",
    "distractors": [
      "有思考能力",
      "支路",
      "水"
    ]
  },
  {
    "word": "supermarket",
    "speakText": "supermarket",
    "spelling": "supermarket",
    "ipa": "/ˈsupərˌmɑrkət/",
    "pos": "n",
    "zh": "超市",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "supermarket"
    ],
    "example": "",
    "distractors": [
      "口渴的",
      "两次",
      "方式"
    ]
  },
  {
    "word": "supper",
    "speakText": "supper",
    "spelling": "supper",
    "ipa": "/ˈsəpər/",
    "pos": "n",
    "zh": "晚饭",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "supper"
    ],
    "example": "",
    "distractors": [
      "这（个）",
      "类型",
      "我们；咱们"
    ]
  },
  {
    "word": "suppose",
    "speakText": "suppose",
    "spelling": "suppose",
    "ipa": "/səˈpoʊz/",
    "pos": "v",
    "zh": "认为",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "suppose"
    ],
    "example": "",
    "distractors": [
      "那些",
      "轮胎",
      "穿着；戴着"
    ]
  },
  {
    "word": "sure",
    "speakText": "sure",
    "spelling": "sure",
    "ipa": "/ʃʊr, ʃər, ʃɔr/",
    "pos": "adj",
    "zh": "确信的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sure"
    ],
    "example": "",
    "distractors": [
      "穿过",
      "伞",
      "天气"
    ]
  },
  {
    "word": "surf",
    "speakText": "surf",
    "spelling": "surf",
    "ipa": "/sərf/",
    "pos": "v",
    "zh": "拍岸浪花",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surf"
    ],
    "example": "",
    "distractors": [
      "投掷",
      "伯父；叔父",
      "蜘蛛网；错综复杂的事物"
    ]
  },
  {
    "word": "surfboard",
    "speakText": "surfboard",
    "spelling": "surfboard",
    "ipa": "/ˈsərfˌbɔrd/",
    "pos": "n",
    "zh": "冲浪板",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surfboard"
    ],
    "example": "",
    "distractors": [
      "雷暴",
      "在下面；到下面",
      "网页"
    ]
  },
  {
    "word": "surfing",
    "speakText": "surfing",
    "spelling": "surfing",
    "ipa": "/ˈsərfɪŋ/",
    "pos": "n",
    "zh": "冲浪运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surfing"
    ],
    "example": "",
    "distractors": [
      "票",
      "地下的",
      "网址"
    ]
  },
  {
    "word": "surname",
    "speakText": "surname",
    "spelling": "surname",
    "ipa": "/ˈsərˌneɪm/",
    "pos": "n",
    "zh": "姓",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surname"
    ],
    "example": "",
    "distractors": [
      "整洁的；有条理的",
      "懂；了解",
      "星期"
    ]
  },
  {
    "word": "surprise",
    "speakText": "surprise",
    "spelling": "surprise",
    "ipa": "/sə(r)ˈpraɪz/",
    "pos": "n",
    "zh": "意想不到的事物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surprise"
    ],
    "example": "",
    "distractors": [
      "收拾",
      "不幸地",
      "周日"
    ]
  },
  {
    "word": "surprised",
    "speakText": "surprised",
    "spelling": "surprised",
    "ipa": "/sə(r)ˈpraɪzd/",
    "pos": "adj",
    "zh": "惊讶的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "surprised"
    ],
    "example": "",
    "distractors": [
      "领带；系",
      "痛苦的",
      "周末"
    ]
  },
  {
    "word": "sweater",
    "speakText": "sweater",
    "spelling": "sweater",
    "ipa": "/ˈswɛdər/",
    "pos": "n",
    "zh": "毛衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sweater"
    ],
    "example": "",
    "distractors": [
      "老虎",
      "制服",
      "每周一次的"
    ]
  },
  {
    "word": "sweet",
    "speakText": "sweet",
    "spelling": "sweet",
    "ipa": "/swit/",
    "pos": "n / adj",
    "zh": "含糖的；甜的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sweet"
    ],
    "example": "",
    "distractors": [
      "连裤袜",
      "大学",
      "欢迎"
    ]
  },
  {
    "word": "swim",
    "speakText": "swim",
    "spelling": "swim",
    "ipa": "/swɪm/",
    "pos": "v",
    "zh": "游泳",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "swim"
    ],
    "example": "",
    "distractors": [
      "直到",
      "健康的",
      "酸奶；一盒酸奶"
    ]
  },
  {
    "word": "swimming",
    "speakText": "swimming",
    "spelling": "swimming",
    "ipa": "/ˈswɪmɪŋ/",
    "pos": "n",
    "zh": "游泳",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "swimming"
    ],
    "example": "",
    "distractors": [
      "时间",
      "不寻常的",
      "著名的；众所周知的"
    ]
  },
  {
    "word": "swimming costume",
    "speakText": "swimming costume",
    "spelling": "swimmingcostume",
    "ipa": "/ˈswɪmɪŋ kɑːstuːm/",
    "pos": "n",
    "zh": "泳衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "swimming costume"
    ],
    "example": "",
    "distractors": [
      "时间表；日程表",
      "在上面",
      "西；西方"
    ]
  },
  {
    "word": "swimming pool",
    "speakText": "swimming pool",
    "spelling": "swimmingpool",
    "ipa": "/ˈswɪmɪŋ ˌpul/",
    "pos": "n",
    "zh": "游泳池；游泳馆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "swimming pool"
    ],
    "example": "",
    "distractors": [
      "疲劳的",
      "使苦恼；使生气",
      "湿的"
    ]
  },
  {
    "word": "swimsuit",
    "speakText": "swimsuit",
    "spelling": "swimsuit",
    "ipa": "/ˈswɪmˌsut/",
    "pos": "n",
    "zh": "游泳衣",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "swimsuit"
    ],
    "example": "",
    "distractors": [
      "去",
      "在楼上；往楼上",
      "什么"
    ]
  },
  {
    "word": "table",
    "speakText": "table",
    "spelling": "table",
    "ipa": "/ˈteɪb(ə)l/",
    "pos": "n",
    "zh": "桌子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "table"
    ],
    "example": "",
    "distractors": [
      "烤面包片",
      "我们",
      "车轮；轮子"
    ]
  },
  {
    "word": "table tennis",
    "speakText": "table tennis",
    "spelling": "tabletennis",
    "ipa": "/ˈteɪbəl ˌtɛnəs/",
    "pos": "n",
    "zh": "乒乓球运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "table tennis"
    ],
    "example": "",
    "distractors": [
      "在今天",
      "使用；被使用",
      "什么时候"
    ]
  },
  {
    "word": "take",
    "speakText": "take",
    "spelling": "take",
    "ipa": "/teɪk/",
    "pos": "v",
    "zh": "携带；带领",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "take"
    ],
    "example": "",
    "distractors": [
      "脚趾",
      "有用的",
      "在哪里"
    ]
  },
  {
    "word": "take off",
    "speakText": "take off",
    "spelling": "takeoff",
    "ipa": "/ˈteɪkˌɔf/",
    "pos": "phrasal verb",
    "zh": "起飞",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "take off"
    ],
    "example": "",
    "distractors": [
      "一起；共同",
      "通常的",
      "哪一个；哪一些"
    ]
  },
  {
    "word": "talk",
    "speakText": "talk",
    "spelling": "talk",
    "ipa": "/tɔk/",
    "pos": "n / v",
    "zh": "谈话",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "talk"
    ],
    "example": "",
    "distractors": [
      "抽水马桶",
      "通常",
      "在期间"
    ]
  },
  {
    "word": "tall",
    "speakText": "tall",
    "spelling": "tall",
    "ipa": "/tɔl/",
    "pos": "adj",
    "zh": "高的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tall"
    ],
    "example": "",
    "distractors": [
      "番茄",
      "对；与……相比",
      "白的"
    ]
  },
  {
    "word": "taxi",
    "speakText": "taxi",
    "spelling": "taxi",
    "ipa": "/ˈtæksi/",
    "pos": "n",
    "zh": "出租车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "taxi"
    ],
    "example": "",
    "distractors": [
      "在明天",
      "多样化",
      "谁"
    ]
  },
  {
    "word": "tea",
    "speakText": "tea",
    "spelling": "tea",
    "ipa": "/ti/",
    "pos": "n",
    "zh": "茶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tea"
    ],
    "example": "",
    "distractors": [
      "今夜",
      "许多的",
      "全部的；整个的"
    ]
  },
  {
    "word": "teach",
    "speakText": "teach",
    "spelling": "teach",
    "ipa": "/titʃ/",
    "pos": "v",
    "zh": "教",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "teach"
    ],
    "example": "",
    "distractors": [
      "太",
      "蔬菜；蔬菜的",
      "为什么"
    ]
  },
  {
    "word": "teacher",
    "speakText": "teacher",
    "spelling": "teacher",
    "ipa": "/ˈtitʃər/",
    "pos": "n",
    "zh": "教师",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "teacher"
    ],
    "example": "",
    "distractors": [
      "牙齿",
      "很",
      "宽阔的；宽松的"
    ]
  },
  {
    "word": "team",
    "speakText": "team",
    "spelling": "team",
    "ipa": "/tim/",
    "pos": "n",
    "zh": "队",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "team"
    ],
    "example": "",
    "distractors": [
      "牙刷",
      "录像",
      "妻子"
    ]
  },
  {
    "word": "teenager",
    "speakText": "teenager",
    "spelling": "teenager",
    "ipa": "/ˈtiˌneɪdʒər/",
    "pos": "n",
    "zh": "青少年",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "teenager"
    ],
    "example": "",
    "distractors": [
      "顶；顶端",
      "电子游戏",
      "野生的"
    ]
  },
  {
    "word": "telephone",
    "speakText": "telephone",
    "spelling": "telephone",
    "ipa": "/ˈtɛləˌfoʊn/",
    "pos": "n / v",
    "zh": "电话；电话机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "telephone"
    ],
    "example": "",
    "distractors": [
      "总数",
      "观点",
      "获胜"
    ]
  },
  {
    "word": "tell",
    "speakText": "tell",
    "spelling": "tell",
    "ipa": "/tɛl/",
    "pos": "v",
    "zh": "讲；告诉",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tell"
    ],
    "example": "",
    "distractors": [
      "旅行",
      "村庄",
      "风"
    ]
  },
  {
    "word": "temperature",
    "speakText": "temperature",
    "spelling": "temperature",
    "ipa": "/ˈtɛmpə(rə)tʃər, ˈtɛmp(ə)rəˌtʃʊr/",
    "pos": "n",
    "zh": "温度",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "temperature"
    ],
    "example": "",
    "distractors": [
      "导游",
      "小提琴",
      "窗；窗玻璃"
    ]
  },
  {
    "word": "tennis",
    "speakText": "tennis",
    "spelling": "tennis",
    "ipa": "/ˈtɛnəs/",
    "pos": "n",
    "zh": "网球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tennis"
    ],
    "example": "",
    "distractors": [
      "旅游者",
      "访问",
      "帆板运动"
    ]
  },
  {
    "word": "tent",
    "speakText": "tent",
    "spelling": "tent",
    "ipa": "/tɛnt/",
    "pos": "n",
    "zh": "帐篷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tent"
    ],
    "example": "",
    "distractors": [
      "游客信息中心",
      "来客；不速之客",
      "多风的；风大的"
    ]
  },
  {
    "word": "term",
    "speakText": "term",
    "spelling": "term",
    "ipa": "/tərm/",
    "pos": "n",
    "zh": "任期；期限",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "term"
    ],
    "example": "",
    "distractors": [
      "毛巾；纸巾",
      "词汇",
      "获胜者"
    ]
  },
  {
    "word": "terrible",
    "speakText": "terrible",
    "spelling": "terrible",
    "ipa": "/ˈtɛrəb(ə)l/",
    "pos": "adj",
    "zh": "可怕的；严重的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "terrible"
    ],
    "example": "",
    "distractors": [
      "城镇",
      "排球",
      "冬天"
    ]
  },
  {
    "word": "test",
    "speakText": "test",
    "spelling": "test",
    "ipa": "/tɛst/",
    "pos": "n",
    "zh": "试验",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "test"
    ],
    "example": "",
    "distractors": [
      "玩具",
      "等候",
      "希望"
    ]
  },
  {
    "word": "text",
    "speakText": "text",
    "spelling": "text",
    "ipa": "/tɛkst/",
    "pos": "n / v",
    "zh": "文本；文档",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "text"
    ],
    "example": "",
    "distractors": [
      "交通；来往的车辆",
      "餐馆的男服务员",
      "和一起"
    ]
  },
  {
    "word": "textbook",
    "speakText": "textbook",
    "spelling": "textbook",
    "ipa": "/ˈtɛks(t)ˌbʊk/",
    "pos": "n",
    "zh": "课本；规范的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "textbook"
    ],
    "example": "",
    "distractors": [
      "红绿灯",
      "餐馆的女服务员",
      "没有"
    ]
  },
  {
    "word": "text message",
    "speakText": "text message",
    "spelling": "textmessage",
    "ipa": "/ˈtɛks(t) ˌmɛsɪdʒ/",
    "pos": "n",
    "zh": "短信息",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "text message"
    ],
    "example": "",
    "distractors": [
      "火车；地铁",
      "醒来",
      "成年女子；女人"
    ]
  },
  {
    "word": "than",
    "speakText": "than",
    "spelling": "than",
    "ipa": "/ðæn, ðən/",
    "pos": "prep / conj",
    "zh": "比",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "than"
    ],
    "example": "",
    "distractors": [
      "教练员；驯马师",
      "醒来",
      "令人赞叹的；了不起的"
    ]
  },
  {
    "word": "thank",
    "speakText": "thank",
    "spelling": "thank",
    "ipa": "/θæŋk/",
    "pos": "v",
    "zh": "感谢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thank"
    ],
    "example": "",
    "distractors": [
      "有轨电车",
      "走；步行",
      "木头"
    ]
  },
  {
    "word": "thanks",
    "speakText": "thanks",
    "spelling": "thanks",
    "ipa": "/θæŋks/",
    "pos": "exclam",
    "zh": "感谢",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thanks"
    ],
    "example": "",
    "distractors": [
      "旅行",
      "步行；竞走",
      "木制的"
    ]
  },
  {
    "word": "thank you",
    "speakText": "thank you",
    "spelling": "thankyou",
    "ipa": "/ˈθæŋk juː/",
    "pos": "exclam",
    "zh": "谢谢你",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thank you"
    ],
    "example": "",
    "distractors": [
      "树木",
      "墙壁",
      "羊毛"
    ]
  },
  {
    "word": "that",
    "speakText": "that",
    "spelling": "that",
    "ipa": "/ðæt/",
    "pos": "conj / pron",
    "zh": "那（个）",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "that"
    ],
    "example": "",
    "distractors": [
      "旅行",
      "皮夹；腰包",
      "单词"
    ]
  },
  {
    "word": "the",
    "speakText": "the",
    "spelling": "the",
    "ipa": "/ði, ðə/",
    "pos": "det",
    "zh": "指已提及或已知的；人或事物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "the"
    ],
    "example": "",
    "distractors": [
      "问题",
      "要",
      "工作；劳动"
    ]
  },
  {
    "word": "theatre",
    "speakText": "theatre",
    "spelling": "theatre",
    "ipa": "/ˈθiədər/",
    "pos": "n",
    "zh": "剧场",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "theatre"
    ],
    "example": "",
    "distractors": [
      "裤子",
      "温暖的",
      "工作者"
    ]
  },
  {
    "word": "their",
    "speakText": "their",
    "spelling": "their",
    "ipa": "/ðɛr, ðər/",
    "pos": "det",
    "zh": "他们的；她们的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "their"
    ],
    "example": "",
    "distractors": [
      "真实的；如实的",
      "给洗澡；洗",
      "世界"
    ]
  },
  {
    "word": "theirs",
    "speakText": "theirs",
    "spelling": "theirs",
    "ipa": "/ðɛrz/",
    "pos": "pron",
    "zh": "他们的；她们的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "theirs"
    ],
    "example": "",
    "distractors": [
      "尝试",
      "洗衣机",
      "发愁的"
    ]
  },
  {
    "word": "them",
    "speakText": "them",
    "spelling": "them",
    "ipa": "/ðɛm, ðəm/",
    "pos": "pron",
    "zh": "他们；她们",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "them"
    ],
    "example": "",
    "distractors": [
      "试穿",
      "洗餐具",
      "担心"
    ]
  },
  {
    "word": "themselves",
    "speakText": "themselves",
    "spelling": "themselves",
    "ipa": "/ðəmˈsɛlvz/",
    "pos": "pron",
    "zh": "他们自己；她们自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "themselves"
    ],
    "example": "",
    "distractors": [
      "恤衫",
      "给洗澡；洗",
      "更坏的"
    ]
  },
  {
    "word": "then",
    "speakText": "then",
    "spelling": "then",
    "ipa": "/ðɛn/",
    "pos": "adv",
    "zh": "当时；到那时",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "then"
    ],
    "example": "",
    "distractors": [
      "转动",
      "手表；怀表",
      "最坏的"
    ]
  },
  {
    "word": "there",
    "speakText": "there",
    "spelling": "there",
    "ipa": "/ðɛr, ðər/",
    "pos": "adv",
    "zh": "那里；在那里",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "there"
    ],
    "example": "",
    "distractors": [
      "支路",
      "水",
      "将"
    ]
  },
  {
    "word": "these",
    "speakText": "these",
    "spelling": "these",
    "ipa": "/ðiːz/",
    "pos": "det / pron",
    "zh": "这些",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "these"
    ],
    "example": "",
    "distractors": [
      "两次",
      "方式",
      "哇；表示惊讶或钦佩"
    ]
  },
  {
    "word": "they",
    "speakText": "they",
    "spelling": "they",
    "ipa": "/ðeɪ/",
    "pos": "pron",
    "zh": "他们；她们",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "they"
    ],
    "example": "",
    "distractors": [
      "类型",
      "我们；咱们",
      "写；谱写"
    ]
  },
  {
    "word": "thin",
    "speakText": "thin",
    "spelling": "thin",
    "ipa": "/θɪn/",
    "pos": "adj",
    "zh": "瘦的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thin"
    ],
    "example": "",
    "distractors": [
      "轮胎",
      "穿着；戴着",
      "写；谱写"
    ]
  },
  {
    "word": "thing",
    "speakText": "thing",
    "spelling": "thing",
    "ipa": "/θɪŋ/",
    "pos": "n",
    "zh": "东西",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thing"
    ],
    "example": "",
    "distractors": [
      "伞",
      "天气",
      "作者；作家"
    ]
  },
  {
    "word": "think",
    "speakText": "think",
    "spelling": "think",
    "ipa": "/θɪŋk/",
    "pos": "v",
    "zh": "有思考能力",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "think"
    ],
    "example": "",
    "distractors": [
      "伯父；叔父",
      "蜘蛛网；错综复杂的事物",
      "书写；文字"
    ]
  },
  {
    "word": "thirsty",
    "speakText": "thirsty",
    "spelling": "thirsty",
    "ipa": "/ˈθərsti/",
    "pos": "adj",
    "zh": "口渴的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirsty"
    ],
    "example": "",
    "distractors": [
      "在下面；到下面",
      "网页",
      "错的"
    ]
  },
  {
    "word": "this",
    "speakText": "this",
    "spelling": "this",
    "ipa": "/ðɪs, ðəs/",
    "pos": "det / pron",
    "zh": "这（个）",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "this"
    ],
    "example": "",
    "distractors": [
      "地下的",
      "网址",
      "是的"
    ]
  },
  {
    "word": "those",
    "speakText": "those",
    "spelling": "those",
    "ipa": "/ðoʊz/",
    "pos": "det / pron",
    "zh": "那些",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "those"
    ],
    "example": "",
    "distractors": [
      "懂；了解",
      "星期",
      "年；年度"
    ]
  },
  {
    "word": "through",
    "speakText": "through",
    "spelling": "through",
    "ipa": "/θru/",
    "pos": "prep",
    "zh": "穿过",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "through"
    ],
    "example": "",
    "distractors": [
      "不幸地",
      "周日",
      "黄色的"
    ]
  },
  {
    "word": "throw",
    "speakText": "throw",
    "spelling": "throw",
    "ipa": "/θroʊ/",
    "pos": "v",
    "zh": "投掷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "throw"
    ],
    "example": "",
    "distractors": [
      "痛苦的",
      "周末",
      "是"
    ]
  },
  {
    "word": "thunderstorm",
    "speakText": "thunderstorm",
    "spelling": "thunderstorm",
    "ipa": "/ˈθəndərˌstɔrm/",
    "pos": "n",
    "zh": "雷暴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thunderstorm"
    ],
    "example": "",
    "distractors": [
      "制服",
      "每周一次的",
      "昨天"
    ]
  },
  {
    "word": "ticket",
    "speakText": "ticket",
    "spelling": "ticket",
    "ipa": "/ˈtɪkət/",
    "pos": "n",
    "zh": "票",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ticket"
    ],
    "example": "",
    "distractors": [
      "大学",
      "欢迎",
      "还"
    ]
  },
  {
    "word": "tidy",
    "speakText": "tidy",
    "spelling": "tidy",
    "ipa": "/ˈtaɪdi/",
    "pos": "adj / v",
    "zh": "整洁的；有条理的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tidy"
    ],
    "example": "",
    "distractors": [
      "直到",
      "健康的",
      "酸奶；一盒酸奶"
    ]
  },
  {
    "word": "tidy up",
    "speakText": "tidy up",
    "spelling": "tidyup",
    "ipa": "/ˈtaɪdiˌaʊt/",
    "pos": "v",
    "zh": "收拾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tidy up"
    ],
    "example": "",
    "distractors": [
      "不寻常的",
      "著名的；众所周知的",
      "你；你们"
    ]
  },
  {
    "word": "tie",
    "speakText": "tie",
    "spelling": "tie",
    "ipa": "/taɪ/",
    "pos": "n",
    "zh": "领带；系",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tie"
    ],
    "example": "",
    "distractors": [
      "在上面",
      "西；西方",
      "年轻的；幼小的"
    ]
  },
  {
    "word": "tiger",
    "speakText": "tiger",
    "spelling": "tiger",
    "ipa": "/ˈtaɪɡər/",
    "pos": "n",
    "zh": "老虎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tiger"
    ],
    "example": "",
    "distractors": [
      "使苦恼；使生气",
      "湿的",
      "你的"
    ]
  },
  {
    "word": "tights",
    "speakText": "tights",
    "spelling": "tights",
    "ipa": "/taɪts/",
    "pos": "n pl",
    "zh": "连裤袜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tights"
    ],
    "example": "",
    "distractors": [
      "在楼上；往楼上",
      "什么",
      "你的"
    ]
  },
  {
    "word": "till",
    "speakText": "till",
    "spelling": "till",
    "ipa": "/tɪl/",
    "pos": "prep",
    "zh": "直到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "till"
    ],
    "example": "",
    "distractors": [
      "我们",
      "车轮；轮子",
      "你自己"
    ]
  },
  {
    "word": "time",
    "speakText": "time",
    "spelling": "time",
    "ipa": "/taɪm/",
    "pos": "n",
    "zh": "时间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "time"
    ],
    "example": "",
    "distractors": [
      "使用；被使用",
      "什么时候",
      "零"
    ]
  },
  {
    "word": "timetable",
    "speakText": "timetable",
    "spelling": "timetable",
    "ipa": "/ˈtaɪmˌteɪb(ə)l/",
    "pos": "n",
    "zh": "时间表；日程表",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "timetable"
    ],
    "example": "",
    "distractors": [
      "有用的",
      "在哪里",
      "动物园；混乱"
    ]
  },
  {
    "word": "tired",
    "speakText": "tired",
    "spelling": "tired",
    "ipa": "/ˈtaɪ(ə)rd/",
    "pos": "adj",
    "zh": "疲劳的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tired"
    ],
    "example": "",
    "distractors": [
      "通常的",
      "哪一个；哪一些",
      "二"
    ]
  },
  {
    "word": "to",
    "speakText": "to",
    "spelling": "to",
    "ipa": "/tu, tə/",
    "pos": "prep",
    "zh": "去",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "to"
    ],
    "example": "",
    "distractors": [
      "通常",
      "在期间",
      "三"
    ]
  },
  {
    "word": "toast",
    "speakText": "toast",
    "spelling": "toast",
    "ipa": "/toʊst/",
    "pos": "n",
    "zh": "烤面包片",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "toast"
    ],
    "example": "",
    "distractors": [
      "对；与……相比",
      "白的",
      "四"
    ]
  },
  {
    "word": "today",
    "speakText": "today",
    "spelling": "today",
    "ipa": "/təˈdeɪ/",
    "pos": "n / adv",
    "zh": "在今天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "today"
    ],
    "example": "",
    "distractors": [
      "多样化",
      "谁",
      "五"
    ]
  },
  {
    "word": "toe",
    "speakText": "toe",
    "spelling": "toe",
    "ipa": "/toʊ/",
    "pos": "n",
    "zh": "脚趾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "toe"
    ],
    "example": "",
    "distractors": [
      "许多的",
      "全部的；整个的",
      "六"
    ]
  },
  {
    "word": "together",
    "speakText": "together",
    "spelling": "together",
    "ipa": "/təˈɡɛðər/",
    "pos": "adv",
    "zh": "一起；共同",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "together"
    ],
    "example": "",
    "distractors": [
      "蔬菜；蔬菜的",
      "为什么",
      "七"
    ]
  },
  {
    "word": "toilet",
    "speakText": "toilet",
    "spelling": "toilet",
    "ipa": "/ˈtɔɪlət/",
    "pos": "n",
    "zh": "抽水马桶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "toilet"
    ],
    "example": "",
    "distractors": [
      "很",
      "宽阔的；宽松的",
      "八"
    ]
  },
  {
    "word": "tomato",
    "speakText": "tomato",
    "spelling": "tomato",
    "ipa": "/təˈmeɪdoʊ/",
    "pos": "n",
    "zh": "番茄",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tomato"
    ],
    "example": "",
    "distractors": [
      "录像",
      "妻子",
      "九"
    ]
  },
  {
    "word": "tomorrow",
    "speakText": "tomorrow",
    "spelling": "tomorrow",
    "ipa": "/təˈmɔroʊ/",
    "pos": "n / adv",
    "zh": "在明天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tomorrow"
    ],
    "example": "",
    "distractors": [
      "电子游戏",
      "野生的",
      "十"
    ]
  },
  {
    "word": "tonight",
    "speakText": "tonight",
    "spelling": "tonight",
    "ipa": "/təˈnaɪt/",
    "pos": "n / adv",
    "zh": "今夜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tonight"
    ],
    "example": "",
    "distractors": [
      "观点",
      "获胜",
      "十一"
    ]
  },
  {
    "word": "too",
    "speakText": "too",
    "spelling": "too",
    "ipa": "/tu/",
    "pos": "adv",
    "zh": "太",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "too"
    ],
    "example": "",
    "distractors": [
      "村庄",
      "风",
      "十二"
    ]
  },
  {
    "word": "tooth",
    "speakText": "tooth",
    "spelling": "tooth",
    "ipa": "/tuθ/",
    "pos": "n",
    "zh": "牙齿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tooth"
    ],
    "example": "",
    "distractors": [
      "小提琴",
      "窗；窗玻璃",
      "十三；十三的"
    ]
  },
  {
    "word": "toothbrush",
    "speakText": "toothbrush",
    "spelling": "toothbrush",
    "ipa": "/ˈtuθˌbrəʃ/",
    "pos": "n",
    "zh": "牙刷",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "toothbrush"
    ],
    "example": "",
    "distractors": [
      "访问",
      "帆板运动",
      "十四"
    ]
  },
  {
    "word": "top",
    "speakText": "top",
    "spelling": "top",
    "ipa": "/tɑp/",
    "pos": "n",
    "zh": "顶；顶端",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "top"
    ],
    "example": "",
    "distractors": [
      "来客；不速之客",
      "多风的；风大的",
      "十六；十六的"
    ]
  },
  {
    "word": "total",
    "speakText": "total",
    "spelling": "total",
    "ipa": "/ˈtoʊd(ə)l/",
    "pos": "adj / n",
    "zh": "总数",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "total"
    ],
    "example": "",
    "distractors": [
      "词汇",
      "获胜者",
      "十七；十七的"
    ]
  },
  {
    "word": "tour",
    "speakText": "tour",
    "spelling": "tour",
    "ipa": "/tʊr/",
    "pos": "n",
    "zh": "旅行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tour"
    ],
    "example": "",
    "distractors": [
      "排球",
      "冬天",
      "十八；十八的"
    ]
  },
  {
    "word": "tour guide",
    "speakText": "tour guide",
    "spelling": "tourguide",
    "ipa": "/ˈtʊr ɡaɪd/",
    "pos": "n",
    "zh": "导游",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tour guide"
    ],
    "example": "",
    "distractors": [
      "等候",
      "希望",
      "十九"
    ]
  },
  {
    "word": "tourist",
    "speakText": "tourist",
    "spelling": "tourist",
    "ipa": "/ˈtʊrəst/",
    "pos": "n",
    "zh": "旅游者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tourist"
    ],
    "example": "",
    "distractors": [
      "餐馆的男服务员",
      "和一起",
      "二十"
    ]
  },
  {
    "word": "tourist information centre",
    "speakText": "tourist information centre",
    "spelling": "touristinformationcentre",
    "ipa": "/ˈtʊrɪst ˌɪnfərˈmeɪʃən ˈsentər/",
    "pos": "n",
    "zh": "游客信息中心",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tourist information centre"
    ],
    "example": "",
    "distractors": [
      "餐馆的女服务员",
      "没有",
      "三十"
    ]
  },
  {
    "word": "towel",
    "speakText": "towel",
    "spelling": "towel",
    "ipa": "/ˈtaʊ(ə)l/",
    "pos": "n",
    "zh": "毛巾；纸巾",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "towel"
    ],
    "example": "",
    "distractors": [
      "醒来",
      "成年女子；女人",
      "四十"
    ]
  },
  {
    "word": "town",
    "speakText": "town",
    "spelling": "town",
    "ipa": "/taʊn/",
    "pos": "n",
    "zh": "城镇",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "town"
    ],
    "example": "",
    "distractors": [
      "醒来",
      "令人赞叹的；了不起的",
      "五十"
    ]
  },
  {
    "word": "toy",
    "speakText": "toy",
    "spelling": "toy",
    "ipa": "/tɔɪ/",
    "pos": "n",
    "zh": "玩具",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "toy"
    ],
    "example": "",
    "distractors": [
      "走；步行",
      "木头",
      "六十"
    ]
  },
  {
    "word": "traffic",
    "speakText": "traffic",
    "spelling": "traffic",
    "ipa": "/ˈtræfɪk/",
    "pos": "n",
    "zh": "交通；来往的车辆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "traffic"
    ],
    "example": "",
    "distractors": [
      "步行；竞走",
      "木制的",
      "七十"
    ]
  },
  {
    "word": "traffic light",
    "speakText": "traffic light",
    "spelling": "trafficlight",
    "ipa": "/ˈtræfɪk laɪt/",
    "pos": "n",
    "zh": "红绿灯",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "traffic light"
    ],
    "example": "",
    "distractors": [
      "墙壁",
      "羊毛",
      "八十"
    ]
  },
  {
    "word": "train",
    "speakText": "train",
    "spelling": "train",
    "ipa": "/treɪn/",
    "pos": "n",
    "zh": "火车；地铁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "train"
    ],
    "example": "",
    "distractors": [
      "皮夹；腰包",
      "单词",
      "九十"
    ]
  },
  {
    "word": "trainer",
    "speakText": "trainer",
    "spelling": "trainer",
    "ipa": "/ˈtreɪnər/",
    "pos": "n",
    "zh": "运动鞋；教练",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "trainer"
    ],
    "example": "",
    "distractors": [
      "要",
      "工作；劳动",
      "一百"
    ]
  },
  {
    "word": "tram",
    "speakText": "tram",
    "spelling": "tram",
    "ipa": "/træm/",
    "pos": "n",
    "zh": "有轨电车",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tram"
    ],
    "example": "",
    "distractors": [
      "温暖的",
      "工作者",
      "一千"
    ]
  },
  {
    "word": "travel",
    "speakText": "travel",
    "spelling": "travel",
    "ipa": "/ˈtræv(ə)l/",
    "pos": "v",
    "zh": "旅行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "travel"
    ],
    "example": "",
    "distractors": [
      "给洗澡；洗",
      "世界",
      "第三；三分之一"
    ]
  },
  {
    "word": "tree",
    "speakText": "tree",
    "spelling": "tree",
    "ipa": "/tri/",
    "pos": "n",
    "zh": "树木",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tree"
    ],
    "example": "",
    "distractors": [
      "洗衣机",
      "发愁的",
      "第四；四分之一"
    ]
  },
  {
    "word": "trip",
    "speakText": "trip",
    "spelling": "trip",
    "ipa": "/trɪp/",
    "pos": "n",
    "zh": "旅行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "trip"
    ],
    "example": "",
    "distractors": [
      "洗餐具",
      "担心",
      "第五；五分之一"
    ]
  },
  {
    "word": "trouble",
    "speakText": "trouble",
    "spelling": "trouble",
    "ipa": "/ˈtrəb(ə)l/",
    "pos": "n",
    "zh": "问题",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "trouble"
    ],
    "example": "",
    "distractors": [
      "给洗澡；洗",
      "更坏的",
      "第六；六分之一"
    ]
  },
  {
    "word": "trousers",
    "speakText": "trousers",
    "spelling": "trousers",
    "ipa": "/ˈtraʊzərz/",
    "pos": "n pl",
    "zh": "裤子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "trousers"
    ],
    "example": "",
    "distractors": [
      "手表；怀表",
      "最坏的",
      "第七；七分之一"
    ]
  },
  {
    "word": "true",
    "speakText": "true",
    "spelling": "true",
    "ipa": "/tru/",
    "pos": "adj",
    "zh": "真实的；如实的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "true"
    ],
    "example": "",
    "distractors": [
      "水",
      "将",
      "第八；八分之一"
    ]
  },
  {
    "word": "try",
    "speakText": "try",
    "spelling": "try",
    "ipa": "/traɪ/",
    "pos": "v",
    "zh": "尝试",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "try"
    ],
    "example": "",
    "distractors": [
      "方式",
      "哇；表示惊讶或钦佩",
      "第九；九分之一"
    ]
  },
  {
    "word": "try on",
    "speakText": "try on",
    "spelling": "tryon",
    "ipa": "/traɪ ɑːn/",
    "pos": "phrasal verb",
    "zh": "试穿",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "try on"
    ],
    "example": "",
    "distractors": [
      "我们；咱们",
      "写；谱写",
      "第十；十分之一"
    ]
  },
  {
    "word": "T-shirt",
    "speakText": "T-shirt",
    "spelling": "tshirt",
    "ipa": "/ˈtiˌʃərt/",
    "pos": "n",
    "zh": "恤衫",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "T-shirt"
    ],
    "example": "",
    "distractors": [
      "穿着；戴着",
      "写；谱写",
      "第十一个；十一分之一"
    ]
  },
  {
    "word": "turn",
    "speakText": "turn",
    "spelling": "turn",
    "ipa": "/tərn/",
    "pos": "v",
    "zh": "转动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "turn"
    ],
    "example": "",
    "distractors": [
      "天气",
      "作者；作家",
      "第十二个"
    ]
  },
  {
    "word": "turn off",
    "speakText": "turn off",
    "spelling": "turnoff",
    "ipa": "/ˈtərnˌɑf/",
    "pos": "phrasal verb",
    "zh": "支路",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "turn off"
    ],
    "example": "",
    "distractors": [
      "蜘蛛网；错综复杂的事物",
      "书写；文字",
      "第十三个；十三分之一"
    ]
  },
  {
    "word": "turn on",
    "speakText": "turn on",
    "spelling": "turnon",
    "ipa": "/ˈtərnˌɔn, ˈtərnˌɑn/",
    "pos": "phrasal verb",
    "zh": "令人兴奋的事物；令人兴奋的人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "turn on"
    ],
    "example": "",
    "distractors": [
      "网页",
      "错的",
      "第十四个"
    ]
  },
  {
    "word": "twice",
    "speakText": "twice",
    "spelling": "twice",
    "ipa": "/twaɪs/",
    "pos": "adv",
    "zh": "两次",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "twice"
    ],
    "example": "",
    "distractors": [
      "网址",
      "是的",
      "第十五个；十五分之一"
    ]
  },
  {
    "word": "type",
    "speakText": "type",
    "spelling": "type",
    "ipa": "/taɪp/",
    "pos": "n",
    "zh": "类型",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "type"
    ],
    "example": "",
    "distractors": [
      "星期",
      "年；年度",
      "第十六个；十六分之一"
    ]
  },
  {
    "word": "tyre",
    "speakText": "tyre",
    "spelling": "tyre",
    "ipa": "/ˈtaɪ(ə)r/",
    "pos": "n",
    "zh": "轮胎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tyre"
    ],
    "example": "",
    "distractors": [
      "周日",
      "黄色的",
      "第十七个；十七分之一"
    ]
  },
  {
    "word": "umbrella",
    "speakText": "umbrella",
    "spelling": "umbrella",
    "ipa": "/ˌəmˈbrɛlə/",
    "pos": "n",
    "zh": "伞",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "umbrella"
    ],
    "example": "",
    "distractors": [
      "周末",
      "是",
      "第十八个；十八分之一"
    ]
  },
  {
    "word": "uncle",
    "speakText": "uncle",
    "spelling": "uncle",
    "ipa": "/ˈəŋkəl/",
    "pos": "n",
    "zh": "伯父；叔父",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "uncle"
    ],
    "example": "",
    "distractors": [
      "每周一次的",
      "昨天",
      "第十九个；十九分之一"
    ]
  },
  {
    "word": "under",
    "speakText": "under",
    "spelling": "under",
    "ipa": "/ˈəndər/",
    "pos": "prep",
    "zh": "在下面；到下面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "under"
    ],
    "example": "",
    "distractors": [
      "欢迎",
      "还",
      "第二十个；二十分之一"
    ]
  },
  {
    "word": "underground",
    "speakText": "underground",
    "spelling": "underground",
    "ipa": "/ˈəndərˌɡraʊnd/",
    "pos": "n / adj",
    "zh": "地铁；地下的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "underground"
    ],
    "example": "",
    "distractors": [
      "健康的",
      "酸奶；一盒酸奶",
      "第三十个；三十分之一"
    ]
  },
  {
    "word": "understand",
    "speakText": "understand",
    "spelling": "understand",
    "ipa": "/ˌəndərˈstænd/",
    "pos": "v",
    "zh": "懂；了解",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "understand"
    ],
    "example": "",
    "distractors": [
      "著名的；众所周知的",
      "你；你们",
      "第三十一"
    ]
  },
  {
    "word": "unfortunately",
    "speakText": "unfortunately",
    "spelling": "unfortunately",
    "ipa": "/ˌənˈfɔrtʃ(ə)nətli/",
    "pos": "adj",
    "zh": "不幸地",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "unfortunately"
    ],
    "example": "",
    "distractors": [
      "西；西方",
      "年轻的；幼小的",
      "星期一"
    ]
  },
  {
    "word": "unhappy",
    "speakText": "unhappy",
    "spelling": "unhappy",
    "ipa": "/ˌənˈhæpi/",
    "pos": "n",
    "zh": "痛苦的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "unhappy"
    ],
    "example": "",
    "distractors": [
      "湿的",
      "你的",
      "星期二"
    ]
  },
  {
    "word": "uniform",
    "speakText": "uniform",
    "spelling": "uniform",
    "ipa": "/ˈjunəˌfɔrm/",
    "pos": "n",
    "zh": "制服",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "uniform"
    ],
    "example": "",
    "distractors": [
      "什么",
      "你的",
      "星期三"
    ]
  },
  {
    "word": "university",
    "speakText": "university",
    "spelling": "university",
    "ipa": "/ˌjunəˈvərsədi/",
    "pos": "n",
    "zh": "大学",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "university"
    ],
    "example": "",
    "distractors": [
      "车轮；轮子",
      "你自己",
      "星期四"
    ]
  },
  {
    "word": "until",
    "speakText": "until",
    "spelling": "until",
    "ipa": "/ˌənˈtɪl, ənˈtɪl/",
    "pos": "prep",
    "zh": "直到",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "until"
    ],
    "example": "",
    "distractors": [
      "什么时候",
      "零",
      "星期五"
    ]
  },
  {
    "word": "unusual",
    "speakText": "unusual",
    "spelling": "unusual",
    "ipa": "/ˌənˈjuʒ(əw)əl/",
    "pos": "adj",
    "zh": "不寻常的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "unusual"
    ],
    "example": "",
    "distractors": [
      "在哪里",
      "动物园；混乱",
      "星期六"
    ]
  },
  {
    "word": "up",
    "speakText": "up",
    "spelling": "up",
    "ipa": "/əp/",
    "pos": "prep / adv",
    "zh": "在上面",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "up"
    ],
    "example": "",
    "distractors": [
      "哪一个；哪一些",
      "二",
      "星期日"
    ]
  },
  {
    "word": "upset",
    "speakText": "upset",
    "spelling": "upset",
    "ipa": "/ˌəpˈsɛt/",
    "pos": "adj",
    "zh": "使苦恼；使生气",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "upset"
    ],
    "example": "",
    "distractors": [
      "在期间",
      "三",
      "一月"
    ]
  },
  {
    "word": "upstairs",
    "speakText": "upstairs",
    "spelling": "upstairs",
    "ipa": "/ˌəpˈstɛrz/",
    "pos": "adv",
    "zh": "在楼上；往楼上",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "upstairs"
    ],
    "example": "",
    "distractors": [
      "白的",
      "四",
      "二月"
    ]
  },
  {
    "word": "us",
    "speakText": "us",
    "spelling": "us",
    "ipa": "/əs/",
    "pos": "pron",
    "zh": "我们",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "us"
    ],
    "example": "",
    "distractors": [
      "谁",
      "五",
      "三月"
    ]
  },
  {
    "word": "use",
    "speakText": "use",
    "spelling": "use",
    "ipa": "/jus/",
    "pos": "v",
    "zh": "使用；被使用",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "use"
    ],
    "example": "",
    "distractors": [
      "全部的；整个的",
      "六",
      "四月"
    ]
  },
  {
    "word": "useful",
    "speakText": "useful",
    "spelling": "useful",
    "ipa": "/ˈjusf(ə)l/",
    "pos": "adj",
    "zh": "有用的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "useful"
    ],
    "example": "",
    "distractors": [
      "为什么",
      "七",
      "六月"
    ]
  },
  {
    "word": "usual",
    "speakText": "usual",
    "spelling": "usual",
    "ipa": "/ˈjuʒ(əw)əl/",
    "pos": "adj",
    "zh": "通常的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "usual"
    ],
    "example": "",
    "distractors": [
      "宽阔的；宽松的",
      "八",
      "七月"
    ]
  },
  {
    "word": "usually",
    "speakText": "usually",
    "spelling": "usually",
    "ipa": "/ˈjuʒ(əw)əli/",
    "pos": "adv",
    "zh": "通常",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "usually"
    ],
    "example": "",
    "distractors": [
      "妻子",
      "九",
      "八月"
    ]
  },
  {
    "word": "v/versus",
    "speakText": "v",
    "spelling": "v",
    "ipa": "/ˈvɜːrsəs/",
    "pos": "prep",
    "zh": "对；与……相比",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "v"
    ],
    "example": "",
    "distractors": [
      "野生的",
      "十",
      "九月"
    ]
  },
  {
    "word": "variety",
    "speakText": "variety",
    "spelling": "variety",
    "ipa": "/vəˈraɪədi/",
    "pos": "n",
    "zh": "多样化",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "variety"
    ],
    "example": "",
    "distractors": [
      "获胜",
      "十一",
      "十月"
    ]
  },
  {
    "word": "various",
    "speakText": "various",
    "spelling": "various",
    "ipa": "/ˈvɛriəs/",
    "pos": "adj",
    "zh": "许多的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "various"
    ],
    "example": "",
    "distractors": [
      "风",
      "十二",
      "十一月"
    ]
  },
  {
    "word": "vegetable",
    "speakText": "vegetable",
    "spelling": "vegetable",
    "ipa": "/ˈvɛdʒtəbəl, ˈvɛdʒədəbəl/",
    "pos": "n",
    "zh": "蔬菜；蔬菜的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "vegetable"
    ],
    "example": "",
    "distractors": [
      "窗；窗玻璃",
      "十三；十三的",
      "十二月"
    ]
  },
  {
    "word": "very",
    "speakText": "very",
    "spelling": "very",
    "ipa": "/ˈvɛri/",
    "pos": "adv",
    "zh": "很",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "very"
    ],
    "example": "",
    "distractors": [
      "帆板运动",
      "十四",
      "巴西"
    ]
  },
  {
    "word": "video",
    "speakText": "video",
    "spelling": "video",
    "ipa": "/ˈvɪdioʊ/",
    "pos": "n",
    "zh": "录像",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "video"
    ],
    "example": "",
    "distractors": [
      "多风的；风大的",
      "十六；十六的",
      "巴西的；巴西人的"
    ]
  },
  {
    "word": "video game",
    "speakText": "video game",
    "spelling": "videogame",
    "ipa": "/ˈvɪdioʊ ˌɡeɪm/",
    "pos": "n",
    "zh": "电子游戏",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "video game"
    ],
    "example": "",
    "distractors": [
      "获胜者",
      "十七；十七的",
      "加拿大"
    ]
  },
  {
    "word": "view",
    "speakText": "view",
    "spelling": "view",
    "ipa": "/vju/",
    "pos": "n",
    "zh": "观点",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "view"
    ],
    "example": "",
    "distractors": [
      "冬天",
      "十八；十八的",
      "加拿大的；加拿大人的"
    ]
  },
  {
    "word": "village",
    "speakText": "village",
    "spelling": "village",
    "ipa": "/ˈvɪlɪdʒ/",
    "pos": "n",
    "zh": "村庄",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "village"
    ],
    "example": "",
    "distractors": [
      "希望",
      "十九",
      "中国"
    ]
  },
  {
    "word": "violin",
    "speakText": "violin",
    "spelling": "violin",
    "ipa": "/ˌvaɪəˈlɪn/",
    "pos": "n",
    "zh": "小提琴",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "violin"
    ],
    "example": "",
    "distractors": [
      "和一起",
      "二十",
      "中国的"
    ]
  },
  {
    "word": "visit",
    "speakText": "visit",
    "spelling": "visit",
    "ipa": "/ˈvɪzət/",
    "pos": "v",
    "zh": "访问",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "visit"
    ],
    "example": "",
    "distractors": [
      "没有",
      "三十",
      "法国"
    ]
  },
  {
    "word": "visitor",
    "speakText": "visitor",
    "spelling": "visitor",
    "ipa": "/ˈvɪzədər/",
    "pos": "n",
    "zh": "来客；不速之客",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "visitor"
    ],
    "example": "",
    "distractors": [
      "成年女子；女人",
      "四十",
      "法国的；法国人的"
    ]
  },
  {
    "word": "vocabulary",
    "speakText": "vocabulary",
    "spelling": "vocabulary",
    "ipa": "/voʊˈkæbjəˌlɛri/",
    "pos": "n",
    "zh": "词汇",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "vocabulary"
    ],
    "example": "",
    "distractors": [
      "令人赞叹的；了不起的",
      "五十",
      "爱尔兰"
    ]
  },
  {
    "word": "volleyball",
    "speakText": "volleyball",
    "spelling": "volleyball",
    "ipa": "/ˈvɑliˌbɔl, ˈvɑliˌbɑl/",
    "pos": "n",
    "zh": "排球",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "volleyball"
    ],
    "example": "",
    "distractors": [
      "木头",
      "六十",
      "爱尔兰的；爱尔兰人的"
    ]
  },
  {
    "word": "wait",
    "speakText": "wait",
    "spelling": "wait",
    "ipa": "/weɪt/",
    "pos": "v",
    "zh": "等候",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wait"
    ],
    "example": "",
    "distractors": [
      "木制的",
      "七十",
      "印度"
    ]
  },
  {
    "word": "waiter",
    "speakText": "waiter",
    "spelling": "waiter",
    "ipa": "/ˈweɪdər/",
    "pos": "n",
    "zh": "餐馆的男服务员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "waiter"
    ],
    "example": "",
    "distractors": [
      "羊毛",
      "八十",
      "印度的；印第安人的"
    ]
  },
  {
    "word": "waitress",
    "speakText": "waitress",
    "spelling": "waitress",
    "ipa": "/ˈweɪtrəs/",
    "pos": "n",
    "zh": "餐馆的女服务员",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "waitress"
    ],
    "example": "",
    "distractors": [
      "单词",
      "九十",
      "意大利"
    ]
  },
  {
    "word": "wake",
    "speakText": "wake",
    "spelling": "wake",
    "ipa": "/weɪk/",
    "pos": "v",
    "zh": "醒来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wake"
    ],
    "example": "",
    "distractors": [
      "工作；劳动",
      "一百",
      "意大利的；意大利人的"
    ]
  },
  {
    "word": "wake up",
    "speakText": "wake up",
    "spelling": "wakeup",
    "ipa": "/weɪk/",
    "pos": "phrasal verb",
    "zh": "醒来",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wake up"
    ],
    "example": "",
    "distractors": [
      "工作者",
      "一千",
      "西班牙"
    ]
  },
  {
    "word": "walk",
    "speakText": "walk",
    "spelling": "walk",
    "ipa": "/wɔk/",
    "pos": "v",
    "zh": "走；步行",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "walk"
    ],
    "example": "",
    "distractors": [
      "世界",
      "第三；三分之一",
      "西班牙的；西班牙人的"
    ]
  },
  {
    "word": "walking",
    "speakText": "walking",
    "spelling": "walking",
    "ipa": "/ˈwɔkɪŋ/",
    "pos": "n",
    "zh": "步行；竞走",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "walking"
    ],
    "example": "",
    "distractors": [
      "发愁的",
      "第四；四分之一",
      "非洲"
    ]
  },
  {
    "word": "wall",
    "speakText": "wall",
    "spelling": "wall",
    "ipa": "/wɔl/",
    "pos": "n",
    "zh": "墙壁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wall"
    ],
    "example": "",
    "distractors": [
      "担心",
      "第五；五分之一",
      "澳大利亚；澳大利亚洲"
    ]
  },
  {
    "word": "wallet",
    "speakText": "wallet",
    "spelling": "wallet",
    "ipa": "/ˈwɑlət, ˈwɔlət/",
    "pos": "n",
    "zh": "皮夹；腰包",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wallet"
    ],
    "example": "",
    "distractors": [
      "更坏的",
      "第六；六分之一",
      "北美洲"
    ]
  },
  {
    "word": "want",
    "speakText": "want",
    "spelling": "want",
    "ipa": "/wɑnt, wɔnt/",
    "pos": "v",
    "zh": "要",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "want"
    ],
    "example": "",
    "distractors": [
      "最坏的",
      "第七；七分之一",
      "南美洲"
    ]
  },
  {
    "word": "warm",
    "speakText": "warm",
    "spelling": "warm",
    "ipa": "/wɔrm/",
    "pos": "adj",
    "zh": "温暖的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "warm"
    ],
    "example": "",
    "distractors": [
      "将",
      "第八；八分之一",
      "亚洲"
    ]
  },
  {
    "word": "wash",
    "speakText": "wash",
    "spelling": "wash",
    "ipa": "/wɔʃ, wɑʃ/",
    "pos": "v",
    "zh": "给洗澡；洗",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wash"
    ],
    "example": "",
    "distractors": [
      "哇；表示惊讶或钦佩",
      "第九；九分之一",
      "南极洲"
    ]
  },
  {
    "word": "washing machine",
    "speakText": "washing machine",
    "spelling": "washingmachine",
    "ipa": "/ˈwɔʃɪŋ məˌʃin/",
    "pos": "n",
    "zh": "洗衣机",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "washing machine"
    ],
    "example": "",
    "distractors": [
      "写；谱写",
      "第十；十分之一",
      "欧洲；欧洲大陆"
    ]
  },
  {
    "word": "washing-up",
    "speakText": "washing-up",
    "spelling": "washingup",
    "ipa": "/wɑʃɪŋˈəp/",
    "pos": "n",
    "zh": "洗餐具",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "washing-up"
    ],
    "example": "",
    "distractors": [
      "写；谱写",
      "第十一个；十一分之一",
      "一个；一只"
    ]
  },
  {
    "word": "wash up",
    "speakText": "wash up",
    "spelling": "washup",
    "ipa": "/wɔʃ, wɑʃ/",
    "pos": "phrasal verb",
    "zh": "给洗澡；洗",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wash up"
    ],
    "example": "",
    "distractors": [
      "作者；作家",
      "第十二个",
      "有能力的"
    ]
  },
  {
    "word": "watch",
    "speakText": "watch",
    "spelling": "watch",
    "ipa": "/wɑtʃ, wɔtʃ/",
    "pos": "n / v",
    "zh": "手表；观看",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "watch"
    ],
    "example": "",
    "distractors": [
      "书写；文字",
      "第十三个；十三分之一",
      "关于"
    ]
  },
  {
    "word": "water",
    "speakText": "water",
    "spelling": "water",
    "ipa": "/ˈwɔdər, ˈwɑdər/",
    "pos": "n",
    "zh": "水",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "water"
    ],
    "example": "",
    "distractors": [
      "错的",
      "第十四个",
      "在上面"
    ]
  },
  {
    "word": "way",
    "speakText": "way",
    "spelling": "way",
    "ipa": "/weɪ/",
    "pos": "n",
    "zh": "方式",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "way"
    ],
    "example": "",
    "distractors": [
      "是的",
      "第十五个；十五分之一",
      "事故"
    ]
  },
  {
    "word": "we",
    "speakText": "we",
    "spelling": "we",
    "ipa": "/wi/",
    "pos": "pron",
    "zh": "我们；咱们",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "we"
    ],
    "example": "",
    "distractors": [
      "年；年度",
      "第十六个；十六分之一",
      "横穿过"
    ]
  },
  {
    "word": "wear",
    "speakText": "wear",
    "spelling": "wear",
    "ipa": "/wɛr/",
    "pos": "v",
    "zh": "穿着；戴着",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wear"
    ],
    "example": "",
    "distractors": [
      "黄色的",
      "第十七个；十七分之一",
      "行为"
    ]
  },
  {
    "word": "weather",
    "speakText": "weather",
    "spelling": "weather",
    "ipa": "/ˈwɛðər/",
    "pos": "n",
    "zh": "天气",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "weather"
    ],
    "example": "",
    "distractors": [
      "是",
      "第十八个；十八分之一",
      "活跃"
    ]
  },
  {
    "word": "web",
    "speakText": "web",
    "spelling": "web",
    "ipa": "/wɛb/",
    "pos": "n",
    "zh": "蜘蛛网；错综复杂的事物",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "web"
    ],
    "example": "",
    "distractors": [
      "昨天",
      "第十九个；十九分之一",
      "演员"
    ]
  },
  {
    "word": "web page",
    "speakText": "web page",
    "spelling": "webpage",
    "ipa": "/ˈwɛb ˌpeɪdʒ/",
    "pos": "n",
    "zh": "网页",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "web page"
    ],
    "example": "",
    "distractors": [
      "还",
      "第二十个；二十分之一",
      "的确"
    ]
  },
  {
    "word": "website",
    "speakText": "website",
    "spelling": "website",
    "ipa": "/ˈwɛbˌsaɪt/",
    "pos": "n",
    "zh": "网址",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "website"
    ],
    "example": "",
    "distractors": [
      "酸奶；一盒酸奶",
      "第三十个；三十分之一",
      "广告"
    ]
  },
  {
    "word": "week",
    "speakText": "week",
    "spelling": "week",
    "ipa": "/wik/",
    "pos": "n",
    "zh": "星期",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "week"
    ],
    "example": "",
    "distractors": [
      "你；你们",
      "第三十一",
      "补充"
    ]
  },
  {
    "word": "weekday",
    "speakText": "weekday",
    "spelling": "weekday",
    "ipa": "/ˈwikˌdeɪ/",
    "pos": "n",
    "zh": "周日",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "weekday"
    ],
    "example": "",
    "distractors": [
      "年轻的；幼小的",
      "星期一",
      "地址"
    ]
  },
  {
    "word": "weekend",
    "speakText": "weekend",
    "spelling": "weekend",
    "ipa": "/ˈwikˌɛnd/",
    "pos": "n",
    "zh": "周末",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "weekend"
    ],
    "example": "",
    "distractors": [
      "你的",
      "星期二",
      "成年人"
    ]
  },
  {
    "word": "weekly",
    "speakText": "weekly",
    "spelling": "weekly",
    "ipa": "/ˈwikli/",
    "pos": "adj / adv",
    "zh": "每周一次的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "weekly"
    ],
    "example": "",
    "distractors": [
      "你的",
      "星期三",
      "高级的；高阶的"
    ]
  },
  {
    "word": "welcome",
    "speakText": "welcome",
    "spelling": "welcome",
    "ipa": "/ˈwɛlkəm/",
    "pos": "adj / exclam",
    "zh": "欢迎",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "welcome"
    ],
    "example": "",
    "distractors": [
      "你自己",
      "星期四",
      "冒险活动"
    ]
  },
  {
    "word": "well",
    "speakText": "well",
    "spelling": "well",
    "ipa": "/wɛl/",
    "pos": "adv / adj",
    "zh": "健康的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "well"
    ],
    "example": "",
    "distractors": [
      "零",
      "星期五",
      "广告"
    ]
  },
  {
    "word": "well known",
    "speakText": "well known",
    "spelling": "wellknown",
    "ipa": "/ˌwɛlˈnoʊn/",
    "pos": "adj",
    "zh": "著名的；众所周知的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "well known"
    ],
    "example": "",
    "distractors": [
      "动物园；混乱",
      "星期六",
      "劝告"
    ]
  },
  {
    "word": "west",
    "speakText": "west",
    "spelling": "west",
    "ipa": "/wɛst/",
    "pos": "n, adj / adv",
    "zh": "西；西方",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "west"
    ],
    "example": "",
    "distractors": [
      "二",
      "星期日",
      "飞机"
    ]
  },
  {
    "word": "wet",
    "speakText": "wet",
    "spelling": "wet",
    "ipa": "/wɛt/",
    "pos": "adj",
    "zh": "湿的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wet"
    ],
    "example": "",
    "distractors": [
      "三",
      "一月",
      "畏惧的"
    ]
  },
  {
    "word": "what",
    "speakText": "what",
    "spelling": "what",
    "ipa": "/(h)wət, (h)wɑt/",
    "pos": "det / pron",
    "zh": "什么",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "what"
    ],
    "example": "",
    "distractors": [
      "四",
      "二月",
      "在以后"
    ]
  },
  {
    "word": "wheel",
    "speakText": "wheel",
    "spelling": "wheel",
    "ipa": "/(h)wil/",
    "pos": "n",
    "zh": "车轮；轮子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wheel"
    ],
    "example": "",
    "distractors": [
      "五",
      "三月",
      "下午"
    ]
  },
  {
    "word": "when",
    "speakText": "when",
    "spelling": "when",
    "ipa": "/(h)wɛn/",
    "pos": "adv",
    "zh": "什么时候",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "when"
    ],
    "example": "",
    "distractors": [
      "六",
      "四月",
      "以后；后来"
    ]
  },
  {
    "word": "where",
    "speakText": "where",
    "spelling": "where",
    "ipa": "/(h)wɛr/",
    "pos": "adv",
    "zh": "在哪里",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "where"
    ],
    "example": "",
    "distractors": [
      "七",
      "六月",
      "再一次"
    ]
  },
  {
    "word": "which",
    "speakText": "which",
    "spelling": "which",
    "ipa": "/(h)wɪtʃ/",
    "pos": "det / pron",
    "zh": "哪一个；哪一些",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "which"
    ],
    "example": "",
    "distractors": [
      "八",
      "七月",
      "紧靠着；碰着"
    ]
  },
  {
    "word": "while",
    "speakText": "while",
    "spelling": "while",
    "ipa": "/(h)waɪl/",
    "pos": "conj",
    "zh": "在期间",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "while"
    ],
    "example": "",
    "distractors": [
      "九",
      "八月",
      "年龄"
    ]
  },
  {
    "word": "white",
    "speakText": "white",
    "spelling": "white",
    "ipa": "/(h)waɪt/",
    "pos": "adj",
    "zh": "白的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "white"
    ],
    "example": "",
    "distractors": [
      "十",
      "九月",
      "岁的"
    ]
  },
  {
    "word": "who",
    "speakText": "who",
    "spelling": "who",
    "ipa": "/huː/",
    "pos": "pron",
    "zh": "谁",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "who"
    ],
    "example": "",
    "distractors": [
      "十一",
      "十月",
      "以前"
    ]
  },
  {
    "word": "whole",
    "speakText": "whole",
    "spelling": "whole",
    "ipa": "/hoʊl/",
    "pos": "adj / n",
    "zh": "全部的；整个的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "whole"
    ],
    "example": "",
    "distractors": [
      "十二",
      "十一月",
      "同意"
    ]
  },
  {
    "word": "why",
    "speakText": "why",
    "spelling": "why",
    "ipa": "/(h)waɪ/",
    "pos": "adv",
    "zh": "为什么",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "why"
    ],
    "example": "",
    "distractors": [
      "十三；十三的",
      "十二月",
      "空气"
    ]
  },
  {
    "word": "wide",
    "speakText": "wide",
    "spelling": "wide",
    "ipa": "/waɪd/",
    "pos": "adj",
    "zh": "宽阔的；宽松的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wide"
    ],
    "example": "",
    "distractors": [
      "十四",
      "巴西",
      "机场"
    ]
  },
  {
    "word": "wife",
    "speakText": "wife",
    "spelling": "wife",
    "ipa": "/waɪf/",
    "pos": "n",
    "zh": "妻子",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wife"
    ],
    "example": "",
    "distractors": [
      "十六；十六的",
      "巴西的；巴西人的",
      "闹钟"
    ]
  },
  {
    "word": "wild",
    "speakText": "wild",
    "spelling": "wild",
    "ipa": "/waɪld/",
    "pos": "adj",
    "zh": "野生的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wild"
    ],
    "example": "",
    "distractors": [
      "十七；十七的",
      "加拿大",
      "册子"
    ]
  },
  {
    "word": "win",
    "speakText": "win",
    "spelling": "win",
    "ipa": "/wɪn/",
    "pos": "v",
    "zh": "获胜",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "win"
    ],
    "example": "",
    "distractors": [
      "十八；十八的",
      "加拿大的；加拿大人的",
      "全部"
    ]
  },
  {
    "word": "wind",
    "speakText": "wind",
    "spelling": "wind",
    "ipa": "/wɪnd/",
    "pos": "n",
    "zh": "风",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wind"
    ],
    "example": "",
    "distractors": [
      "十九",
      "中国",
      "好的；没问题"
    ]
  },
  {
    "word": "window",
    "speakText": "window",
    "spelling": "window",
    "ipa": "/ˈwɪndoʊ/",
    "pos": "n",
    "zh": "窗；窗玻璃",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "window"
    ],
    "example": "",
    "distractors": [
      "二十",
      "中国的",
      "几乎"
    ]
  },
  {
    "word": "windsurfing",
    "speakText": "windsurfing",
    "spelling": "windsurfing",
    "ipa": "/ˈwɪn(d)ˌsərfɪŋ/",
    "pos": "n",
    "zh": "帆板运动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "windsurfing"
    ],
    "example": "",
    "distractors": [
      "三十",
      "法国",
      "独自的"
    ]
  },
  {
    "word": "windy",
    "speakText": "windy",
    "spelling": "windy",
    "ipa": "/ˈwɪndi/",
    "pos": "adj",
    "zh": "多风的；风大的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "windy"
    ],
    "example": "",
    "distractors": [
      "四十",
      "法国的；法国人的",
      "向前"
    ]
  },
  {
    "word": "winner",
    "speakText": "winner",
    "spelling": "winner",
    "ipa": "/ˈwɪnər/",
    "pos": "n",
    "zh": "获胜者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "winner"
    ],
    "example": "",
    "distractors": [
      "五十",
      "爱尔兰",
      "已经"
    ]
  },
  {
    "word": "winter",
    "speakText": "winter",
    "spelling": "winter",
    "ipa": "/ˈwɪn(t)ər/",
    "pos": "n",
    "zh": "冬天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "winter"
    ],
    "example": "",
    "distractors": [
      "六十",
      "爱尔兰的；爱尔兰人的",
      "好的；没问题"
    ]
  },
  {
    "word": "wish",
    "speakText": "wish",
    "spelling": "wish",
    "ipa": "/wɪʃ/",
    "pos": "n",
    "zh": "希望",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wish"
    ],
    "example": "",
    "distractors": [
      "七十",
      "印度",
      "也"
    ]
  },
  {
    "word": "with",
    "speakText": "with",
    "spelling": "with",
    "ipa": "/wɪð, wɪθ/",
    "pos": "prep",
    "zh": "和一起",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "with"
    ],
    "example": "",
    "distractors": [
      "八十",
      "印度的；印第安人的",
      "总是"
    ]
  },
  {
    "word": "without",
    "speakText": "without",
    "spelling": "without",
    "ipa": "/wəˈðaʊt, wəˈθaʊt/",
    "pos": "prep",
    "zh": "没有",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "without"
    ],
    "example": "",
    "distractors": [
      "九十",
      "意大利",
      "上午"
    ]
  },
  {
    "word": "woman",
    "speakText": "woman",
    "spelling": "woman",
    "ipa": "/ˈwʊmən/",
    "pos": "n",
    "zh": "成年女子；女人",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "woman"
    ],
    "example": "",
    "distractors": [
      "一百",
      "意大利的；意大利人的",
      "使人十分惊奇的"
    ]
  },
  {
    "word": "wonderful",
    "speakText": "wonderful",
    "spelling": "wonderful",
    "ipa": "/ˈwəndərf(ə)l/",
    "pos": "adj",
    "zh": "令人赞叹的；了不起的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wonderful"
    ],
    "example": "",
    "distractors": [
      "一千",
      "西班牙",
      "救护车"
    ]
  },
  {
    "word": "wood",
    "speakText": "wood",
    "spelling": "wood",
    "ipa": "/wʊd/",
    "pos": "n",
    "zh": "木头",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wood"
    ],
    "example": "",
    "distractors": [
      "第三；三分之一",
      "西班牙的；西班牙人的",
      "在中"
    ]
  },
  {
    "word": "wooden",
    "speakText": "wooden",
    "spelling": "wooden",
    "ipa": "/ˈwʊd(ə)n/",
    "pos": "adj",
    "zh": "木制的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wooden"
    ],
    "example": "",
    "distractors": [
      "第四；四分之一",
      "非洲",
      "一个；一只"
    ]
  },
  {
    "word": "wool",
    "speakText": "wool",
    "spelling": "wool",
    "ipa": "/wʊl/",
    "pos": "n",
    "zh": "羊毛",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wool"
    ],
    "example": "",
    "distractors": [
      "第五；五分之一",
      "澳大利亚；澳大利亚洲",
      "和"
    ]
  },
  {
    "word": "word",
    "speakText": "word",
    "spelling": "word",
    "ipa": "/wərd/",
    "pos": "n",
    "zh": "单词",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "word"
    ],
    "example": "",
    "distractors": [
      "第六；六分之一",
      "北美洲",
      "发怒的"
    ]
  },
  {
    "word": "work",
    "speakText": "work",
    "spelling": "work",
    "ipa": "/wərk/",
    "pos": "n / v",
    "zh": "工作；劳动",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "work"
    ],
    "example": "",
    "distractors": [
      "第七；七分之一",
      "南美洲",
      "动物"
    ]
  },
  {
    "word": "worker",
    "speakText": "worker",
    "spelling": "worker",
    "ipa": "/ˈwərkər/",
    "pos": "n",
    "zh": "工作者",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "worker"
    ],
    "example": "",
    "distractors": [
      "第八；八分之一",
      "亚洲",
      "再一的"
    ]
  },
  {
    "word": "world",
    "speakText": "world",
    "spelling": "world",
    "ipa": "/wərld/",
    "pos": "n",
    "zh": "世界",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "world"
    ],
    "example": "",
    "distractors": [
      "第九；九分之一",
      "南极洲",
      "回答"
    ]
  },
  {
    "word": "worried",
    "speakText": "worried",
    "spelling": "worried",
    "ipa": "/ˈwərid/",
    "pos": "adj",
    "zh": "发愁的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "worried"
    ],
    "example": "",
    "distractors": [
      "第十；十分之一",
      "欧洲；欧洲大陆",
      "一些；丝毫的"
    ]
  },
  {
    "word": "worry",
    "speakText": "worry",
    "spelling": "worry",
    "ipa": "/ˈwəri/",
    "pos": "v",
    "zh": "担心",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "worry"
    ],
    "example": "",
    "distractors": [
      "第十一个；十一分之一",
      "一个；一只",
      "任何人"
    ]
  },
  {
    "word": "worse",
    "speakText": "worse",
    "spelling": "worse",
    "ipa": "/wərs/",
    "pos": "adj",
    "zh": "更坏的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "worse"
    ],
    "example": "",
    "distractors": [
      "第十二个",
      "有能力的",
      "不再"
    ]
  },
  {
    "word": "worst",
    "speakText": "worst",
    "spelling": "worst",
    "ipa": "/wərst/",
    "pos": "adj",
    "zh": "最坏的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "worst"
    ],
    "example": "",
    "distractors": [
      "第十三个；十三分之一",
      "关于",
      "任何人"
    ]
  },
  {
    "word": "would",
    "speakText": "would",
    "spelling": "would",
    "ipa": "/wʊd/",
    "pos": "mv",
    "zh": "将",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "would"
    ],
    "example": "",
    "distractors": [
      "第十四个",
      "在上面",
      "任何事物"
    ]
  },
  {
    "word": "wow",
    "speakText": "wow",
    "spelling": "wow",
    "ipa": "/waʊ/",
    "pos": "exclam",
    "zh": "哇；表示惊讶或钦佩",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wow"
    ],
    "example": "",
    "distractors": [
      "第十五个；十五分之一",
      "事故",
      "无论如何"
    ]
  },
  {
    "word": "write",
    "speakText": "write",
    "spelling": "write",
    "ipa": "/raɪt/",
    "pos": "v",
    "zh": "写；谱写",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "write"
    ],
    "example": "",
    "distractors": [
      "第十六个；十六分之一",
      "横穿过",
      "在任何地方；去任何地方"
    ]
  },
  {
    "word": "write down",
    "speakText": "write down",
    "spelling": "writedown",
    "ipa": "/raɪt/",
    "pos": "phrasal verb",
    "zh": "写；谱写",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "write down"
    ],
    "example": "",
    "distractors": [
      "第十七个；十七分之一",
      "行为",
      "公寓楼"
    ]
  },
  {
    "word": "writer",
    "speakText": "writer",
    "spelling": "writer",
    "ipa": "/ˈraɪdər/",
    "pos": "n",
    "zh": "作者；作家",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "writer"
    ],
    "example": "",
    "distractors": [
      "第十八个；十八分之一",
      "活跃",
      "苹果；苹果树"
    ]
  },
  {
    "word": "writing",
    "speakText": "writing",
    "spelling": "writing",
    "ipa": "/ˈraɪdɪŋ/",
    "pos": "n",
    "zh": "书写；文字",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "writing"
    ],
    "example": "",
    "distractors": [
      "第十九个；十九分之一",
      "演员",
      "约会"
    ]
  },
  {
    "word": "wrong",
    "speakText": "wrong",
    "spelling": "wrong",
    "ipa": "/rɔŋ/",
    "pos": "adj",
    "zh": "错的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "wrong"
    ],
    "example": "",
    "distractors": [
      "第二十个；二十分之一",
      "的确",
      "面积；地区"
    ]
  },
  {
    "word": "yeah",
    "speakText": "yeah",
    "spelling": "yeah",
    "ipa": "/jɛ/",
    "pos": "exclam",
    "zh": "是的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yeah"
    ],
    "example": "",
    "distractors": [
      "第三十个；三十分之一",
      "广告",
      "臂"
    ]
  },
  {
    "word": "year",
    "speakText": "year",
    "spelling": "year",
    "ipa": "/jɪr/",
    "pos": "n",
    "zh": "年；年度",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "year"
    ],
    "example": "",
    "distractors": [
      "第三十一",
      "补充",
      "扶手椅；无实际经验的"
    ]
  },
  {
    "word": "yellow",
    "speakText": "yellow",
    "spelling": "yellow",
    "ipa": "/ˈjɛloʊ/",
    "pos": "adj",
    "zh": "黄色的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yellow"
    ],
    "example": "",
    "distractors": [
      "星期一",
      "地址",
      "大约"
    ]
  },
  {
    "word": "yes",
    "speakText": "yes",
    "spelling": "yes",
    "ipa": "/jɛs/",
    "pos": "adv",
    "zh": "是",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yes"
    ],
    "example": "",
    "distractors": [
      "星期二",
      "成年人",
      "到达"
    ]
  },
  {
    "word": "yesterday",
    "speakText": "yesterday",
    "spelling": "yesterday",
    "ipa": "/ˈjɛstərˌdeɪ, ˈjɛstərdi/",
    "pos": "adv",
    "zh": "昨天",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yesterday"
    ],
    "example": "",
    "distractors": [
      "星期三",
      "高级的；高阶的",
      "美术；美术作品"
    ]
  },
  {
    "word": "yet",
    "speakText": "yet",
    "spelling": "yet",
    "ipa": "/jɛt/",
    "pos": "adv",
    "zh": "还",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yet"
    ],
    "example": "",
    "distractors": [
      "星期四",
      "冒险活动",
      "物件"
    ]
  },
  {
    "word": "yoghurt",
    "speakText": "yoghurt",
    "spelling": "yoghurt",
    "ipa": "/ˈjoʊɡərt/",
    "pos": "n",
    "zh": "酸奶；一盒酸奶",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yoghurt"
    ],
    "example": "",
    "distractors": [
      "星期五",
      "广告",
      "艺术家；画家"
    ]
  },
  {
    "word": "you",
    "speakText": "you",
    "spelling": "you",
    "ipa": "/juː/",
    "pos": "pron",
    "zh": "你；你们",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "you"
    ],
    "example": "",
    "distractors": [
      "星期六",
      "劝告",
      "作为"
    ]
  },
  {
    "word": "young",
    "speakText": "young",
    "spelling": "young",
    "ipa": "/jəŋ/",
    "pos": "adj",
    "zh": "年轻的；幼小的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "young"
    ],
    "example": "",
    "distractors": [
      "星期日",
      "飞机",
      "问"
    ]
  },
  {
    "word": "your",
    "speakText": "your",
    "spelling": "your",
    "ipa": "/jʊr, jɔr, jər/",
    "pos": "det",
    "zh": "你的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "your"
    ],
    "example": "",
    "distractors": [
      "一月",
      "畏惧的",
      "助手；助理"
    ]
  },
  {
    "word": "yours",
    "speakText": "yours",
    "spelling": "yours",
    "ipa": "/jɔrz, jʊrz/",
    "pos": "pron",
    "zh": "你的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yours"
    ],
    "example": "",
    "distractors": [
      "二月",
      "在以后",
      "也"
    ]
  },
  {
    "word": "yourself",
    "speakText": "yourself",
    "spelling": "yourself",
    "ipa": "/jərˈsɛlf/",
    "pos": "pron",
    "zh": "你自己",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "yourself"
    ],
    "example": "",
    "distractors": [
      "三月",
      "下午",
      "在"
    ]
  },
  {
    "word": "zero",
    "speakText": "zero",
    "spelling": "zero",
    "ipa": "/ˈzɪroʊ, ˈziroʊ/",
    "pos": "n",
    "zh": "零",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "zero"
    ],
    "example": "",
    "distractors": [
      "四月",
      "以后；后来",
      "在；@符号"
    ]
  },
  {
    "word": "zoo",
    "speakText": "zoo",
    "spelling": "zoo",
    "ipa": "/zu/",
    "pos": "n",
    "zh": "动物园；混乱",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "zoo"
    ],
    "example": "",
    "distractors": [
      "六月",
      "再一次",
      "漂亮的；动听的"
    ]
  },
  {
    "word": "two",
    "speakText": "two",
    "spelling": "two",
    "ipa": "/tu/",
    "pos": "number",
    "zh": "二",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "two"
    ],
    "example": "",
    "distractors": [
      "七月",
      "紧靠着；碰着",
      "姑姑；姨母"
    ]
  },
  {
    "word": "three",
    "speakText": "three",
    "spelling": "three",
    "ipa": "/θri/",
    "pos": "number",
    "zh": "三",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "three"
    ],
    "example": "",
    "distractors": [
      "八月",
      "年龄",
      "秋季"
    ]
  },
  {
    "word": "four",
    "speakText": "four",
    "spelling": "four",
    "ipa": "/fɔr/",
    "pos": "number",
    "zh": "四",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "four"
    ],
    "example": "",
    "distractors": [
      "九月",
      "岁的",
      "可获得的"
    ]
  },
  {
    "word": "five",
    "speakText": "five",
    "spelling": "five",
    "ipa": "/faɪv/",
    "pos": "number",
    "zh": "五",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "five"
    ],
    "example": "",
    "distractors": [
      "十月",
      "以前",
      "不在"
    ]
  },
  {
    "word": "six",
    "speakText": "six",
    "spelling": "six",
    "ipa": "/sɪks/",
    "pos": "number",
    "zh": "六",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "six"
    ],
    "example": "",
    "distractors": [
      "十一月",
      "同意",
      "坏的"
    ]
  },
  {
    "word": "seven",
    "speakText": "seven",
    "spelling": "seven",
    "ipa": "/ˈsɛvən/",
    "pos": "number",
    "zh": "七",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seven"
    ],
    "example": "",
    "distractors": [
      "十二月",
      "空气",
      "婴儿"
    ]
  },
  {
    "word": "eight",
    "speakText": "eight",
    "spelling": "eight",
    "ipa": "/eɪt/",
    "pos": "number",
    "zh": "八",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eight"
    ],
    "example": "",
    "distractors": [
      "巴西",
      "机场",
      "背部"
    ]
  },
  {
    "word": "nine",
    "speakText": "nine",
    "spelling": "nine",
    "ipa": "/naɪn/",
    "pos": "number",
    "zh": "九",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nine"
    ],
    "example": "",
    "distractors": [
      "巴西的；巴西人的",
      "闹钟",
      "背包；背包旅行"
    ]
  },
  {
    "word": "ten",
    "speakText": "ten",
    "spelling": "ten",
    "ipa": "/tɛn/",
    "pos": "number",
    "zh": "十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ten"
    ],
    "example": "",
    "distractors": [
      "加拿大",
      "册子",
      "不愉快的；不好的"
    ]
  },
  {
    "word": "eleven",
    "speakText": "eleven",
    "spelling": "eleven",
    "ipa": "/əˈlɛv(ə)n/",
    "pos": "number",
    "zh": "十一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eleven"
    ],
    "example": "",
    "distractors": [
      "加拿大的；加拿大人的",
      "全部",
      "差"
    ]
  },
  {
    "word": "twelve",
    "speakText": "twelve",
    "spelling": "twelve",
    "ipa": "/twɛlv/",
    "pos": "number",
    "zh": "十二",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "twelve"
    ],
    "example": "",
    "distractors": [
      "中国",
      "好的；没问题",
      "羽毛球运动"
    ]
  },
  {
    "word": "thirteen",
    "speakText": "thirteen",
    "spelling": "thirteen",
    "ipa": "/ˌθərˈtin, ˈθərˌtin/",
    "pos": "number",
    "zh": "十三；十三的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirteen"
    ],
    "example": "",
    "distractors": [
      "中国的",
      "几乎",
      "袋"
    ]
  },
  {
    "word": "fourteen",
    "speakText": "fourteen",
    "spelling": "fourteen",
    "ipa": "/ˌfɔrˈtin, ˈfɔrˌtin/",
    "pos": "number",
    "zh": "十四",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fourteen"
    ],
    "example": "",
    "distractors": [
      "法国",
      "独自的",
      "烘焙"
    ]
  },
  {
    "word": "fifteen",
    "speakText": "fifteen",
    "spelling": "fifteen",
    "ipa": "/ˌfɪfˈtin, ˈfɪfˌtin/",
    "pos": "number",
    "zh": "十五；十五人组成的橄榄球队",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fifteen"
    ],
    "example": "",
    "distractors": [
      "法国的；法国人的",
      "向前",
      "球；团"
    ]
  },
  {
    "word": "sixteen",
    "speakText": "sixteen",
    "spelling": "sixteen",
    "ipa": "/ˌsɪkˈstin, ˈsɪkˌstin/",
    "pos": "number",
    "zh": "十六；十六的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sixteen"
    ],
    "example": "",
    "distractors": [
      "爱尔兰",
      "已经",
      "气球"
    ]
  },
  {
    "word": "seventeen",
    "speakText": "seventeen",
    "spelling": "seventeen",
    "ipa": "/ˌsɛvənˈtin, ˈsɛvənˌtin/",
    "pos": "number",
    "zh": "十七；十七的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seventeen"
    ],
    "example": "",
    "distractors": [
      "爱尔兰的；爱尔兰人的",
      "好的；没问题",
      "香蕉"
    ]
  },
  {
    "word": "eighteen",
    "speakText": "eighteen",
    "spelling": "eighteen",
    "ipa": "/ˌeɪˈtin, ˈeɪˌtin/",
    "pos": "number",
    "zh": "十八；十八的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eighteen"
    ],
    "example": "",
    "distractors": [
      "印度",
      "也",
      "乐队；一帮人"
    ]
  },
  {
    "word": "nineteen",
    "speakText": "nineteen",
    "spelling": "nineteen",
    "ipa": "/ˌnaɪnˈtin, ˈnaɪnˌtin/",
    "pos": "number",
    "zh": "十九",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nineteen"
    ],
    "example": "",
    "distractors": [
      "印度的；印第安人的",
      "总是",
      "绷带；用绷带包扎"
    ]
  },
  {
    "word": "twenty",
    "speakText": "twenty",
    "spelling": "twenty",
    "ipa": "/ˈtwɛn(t)i/",
    "pos": "number",
    "zh": "二十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "twenty"
    ],
    "example": "",
    "distractors": [
      "意大利",
      "上午",
      "岸；堆"
    ]
  },
  {
    "word": "thirty",
    "speakText": "thirty",
    "spelling": "thirty",
    "ipa": "/ˈθərdi/",
    "pos": "number",
    "zh": "三十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirty"
    ],
    "example": "",
    "distractors": [
      "意大利的；意大利人的",
      "使人十分惊奇的",
      "户外烧烤；烤架"
    ]
  },
  {
    "word": "forty",
    "speakText": "forty",
    "spelling": "forty",
    "ipa": "/ˈfɔrdi/",
    "pos": "number",
    "zh": "四十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "forty"
    ],
    "example": "",
    "distractors": [
      "西班牙",
      "救护车",
      "棒球运动；棒球"
    ]
  },
  {
    "word": "fifty",
    "speakText": "fifty",
    "spelling": "fifty",
    "ipa": "/ˈfɪfti/",
    "pos": "number",
    "zh": "五十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fifty"
    ],
    "example": "",
    "distractors": [
      "西班牙的；西班牙人的",
      "在中",
      "篮球运动；篮球"
    ]
  },
  {
    "word": "sixty",
    "speakText": "sixty",
    "spelling": "sixty",
    "ipa": "/ˈsɪksti/",
    "pos": "number",
    "zh": "六十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sixty"
    ],
    "example": "",
    "distractors": [
      "非洲",
      "一个；一只",
      "球板；球棒"
    ]
  },
  {
    "word": "seventy",
    "speakText": "seventy",
    "spelling": "seventy",
    "ipa": "/ˈsɛvən(t)i/",
    "pos": "number",
    "zh": "七十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seventy"
    ],
    "example": "",
    "distractors": [
      "澳大利亚；澳大利亚洲",
      "和",
      "洗澡；洗澡水"
    ]
  },
  {
    "word": "eighty",
    "speakText": "eighty",
    "spelling": "eighty",
    "ipa": "/ˈeɪdi/",
    "pos": "number",
    "zh": "八十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eighty"
    ],
    "example": "",
    "distractors": [
      "北美洲",
      "发怒的",
      "游泳衣"
    ]
  },
  {
    "word": "ninety",
    "speakText": "ninety",
    "spelling": "ninety",
    "ipa": "/ˈnaɪn(t)i/",
    "pos": "number",
    "zh": "九十",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ninety"
    ],
    "example": "",
    "distractors": [
      "南美洲",
      "动物",
      "浴室；洗手间"
    ]
  },
  {
    "word": "hundred",
    "speakText": "hundred",
    "spelling": "hundred",
    "ipa": "/ˈhəndrəd/",
    "pos": "number",
    "zh": "一百",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "hundred"
    ],
    "example": "",
    "distractors": [
      "亚洲",
      "再一的",
      "澡盆；浴缸"
    ]
  },
  {
    "word": "thousand",
    "speakText": "thousand",
    "spelling": "thousand",
    "ipa": "/ˈθaʊz(ə)n(d)/",
    "pos": "number",
    "zh": "一千",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thousand"
    ],
    "example": "",
    "distractors": [
      "南极洲",
      "回答",
      "电池"
    ]
  },
  {
    "word": "third",
    "speakText": "third",
    "spelling": "third",
    "ipa": "/θərd/",
    "pos": "ordinal",
    "zh": "第三；三分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "third"
    ],
    "example": "",
    "distractors": [
      "欧洲；欧洲大陆",
      "一些；丝毫的",
      "表明属性"
    ]
  },
  {
    "word": "fourth",
    "speakText": "fourth",
    "spelling": "fourth",
    "ipa": "/fɔrθ/",
    "pos": "ordinal",
    "zh": "第四；四分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fourth"
    ],
    "example": "",
    "distractors": [
      "一个；一只",
      "任何人",
      "海滩；河滩"
    ]
  },
  {
    "word": "fifth",
    "speakText": "fifth",
    "spelling": "fifth",
    "ipa": "/fɪ(f)θ/",
    "pos": "ordinal",
    "zh": "第五；五分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fifth"
    ],
    "example": "",
    "distractors": [
      "有能力的",
      "不再",
      "豆"
    ]
  },
  {
    "word": "sixth",
    "speakText": "sixth",
    "spelling": "sixth",
    "ipa": "/sɪksθ/",
    "pos": "ordinal",
    "zh": "第六；六分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sixth"
    ],
    "example": "",
    "distractors": [
      "关于",
      "任何人",
      "承载"
    ]
  },
  {
    "word": "seventh",
    "speakText": "seventh",
    "spelling": "seventh",
    "ipa": "/ˈsɛvən(t)θ/",
    "pos": "ordinal",
    "zh": "第七；七分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seventh"
    ],
    "example": "",
    "distractors": [
      "在上面",
      "任何事物",
      "胡须"
    ]
  },
  {
    "word": "eighth",
    "speakText": "eighth",
    "spelling": "eighth",
    "ipa": "/eɪ(t)θ/",
    "pos": "ordinal",
    "zh": "第八；八分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eighth"
    ],
    "example": "",
    "distractors": [
      "事故",
      "无论如何",
      "美丽的"
    ]
  },
  {
    "word": "ninth",
    "speakText": "ninth",
    "spelling": "ninth",
    "ipa": "/naɪn(t)θ/",
    "pos": "ordinal",
    "zh": "第九；九分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "ninth"
    ],
    "example": "",
    "distractors": [
      "横穿过",
      "在任何地方；去任何地方",
      "因为"
    ]
  },
  {
    "word": "tenth",
    "speakText": "tenth",
    "spelling": "tenth",
    "ipa": "/tɛn(t)θ/",
    "pos": "ordinal",
    "zh": "第十；十分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "tenth"
    ],
    "example": "",
    "distractors": [
      "行为",
      "公寓楼",
      "变成；开始变得"
    ]
  },
  {
    "word": "eleventh",
    "speakText": "eleventh",
    "spelling": "eleventh",
    "ipa": "/əˈlɛvən(t)θ/",
    "pos": "ordinal",
    "zh": "第十一个；十一分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eleventh"
    ],
    "example": "",
    "distractors": [
      "活跃",
      "苹果；苹果树",
      "床"
    ]
  },
  {
    "word": "twelfth",
    "speakText": "twelfth",
    "spelling": "twelfth",
    "ipa": "/twɛl(f)θ/",
    "pos": "ordinal",
    "zh": "第十二个",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "twelfth"
    ],
    "example": "",
    "distractors": [
      "演员",
      "约会",
      "卧室；卧室的"
    ]
  },
  {
    "word": "thirteenth",
    "speakText": "thirteenth",
    "spelling": "thirteenth",
    "ipa": "/ˌθərˈtin(t)θ, ˈθərˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十三个；十三分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirteenth"
    ],
    "example": "",
    "distractors": [
      "的确",
      "面积；地区",
      "蜜蜂"
    ]
  },
  {
    "word": "fourteenth",
    "speakText": "fourteenth",
    "spelling": "fourteenth",
    "ipa": "/ˌfɔrˈtin(t)θ, ˈfɔrˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十四个",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fourteenth"
    ],
    "example": "",
    "distractors": [
      "广告",
      "臂",
      "在以前"
    ]
  },
  {
    "word": "fifteenth",
    "speakText": "fifteenth",
    "spelling": "fifteenth",
    "ipa": "/ˌfɪfˈtin(t)θ, ˈfɪfˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十五个；十五分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "fifteenth"
    ],
    "example": "",
    "distractors": [
      "补充",
      "扶手椅；无实际经验的",
      "开始"
    ]
  },
  {
    "word": "sixteenth",
    "speakText": "sixteenth",
    "spelling": "sixteenth",
    "ipa": "/ˌsɪkˈstin(t)θ, ˈsɪkˌstin(t)θ/",
    "pos": "ordinal",
    "zh": "第十六个；十六分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "sixteenth"
    ],
    "example": "",
    "distractors": [
      "地址",
      "大约",
      "初学者"
    ]
  },
  {
    "word": "seventeenth",
    "speakText": "seventeenth",
    "spelling": "seventeenth",
    "ipa": "/ˌsɛvənˈtin(t)θ, ˈsɛvənˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十七个；十七分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "seventeenth"
    ],
    "example": "",
    "distractors": [
      "成年人",
      "到达",
      "起点"
    ]
  },
  {
    "word": "eighteenth",
    "speakText": "eighteenth",
    "spelling": "eighteenth",
    "ipa": "/ˌeɪ(t)ˈtin(t)θ, ˈeɪ(t)ˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十八个；十八分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "eighteenth"
    ],
    "example": "",
    "distractors": [
      "高级的；高阶的",
      "美术；美术作品",
      "在背后；向后"
    ]
  },
  {
    "word": "nineteenth",
    "speakText": "nineteenth",
    "spelling": "nineteenth",
    "ipa": "/ˌnaɪnˈtin(t)θ, ˈnaɪnˌtin(t)θ/",
    "pos": "ordinal",
    "zh": "第十九个；十九分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "nineteenth"
    ],
    "example": "",
    "distractors": [
      "冒险活动",
      "物件",
      "相信"
    ]
  },
  {
    "word": "twentieth",
    "speakText": "twentieth",
    "spelling": "twentieth",
    "ipa": "/ˈtwɛn(t)iəθ/",
    "pos": "ordinal",
    "zh": "第二十个；二十分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "twentieth"
    ],
    "example": "",
    "distractors": [
      "广告",
      "艺术家；画家",
      "属于某人/某物"
    ]
  },
  {
    "word": "thirtieth",
    "speakText": "thirtieth",
    "spelling": "thirtieth",
    "ipa": "/ˈθərdiəθ/",
    "pos": "ordinal",
    "zh": "第三十个；三十分之一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirtieth"
    ],
    "example": "",
    "distractors": [
      "劝告",
      "作为",
      "在下面；到下面"
    ]
  },
  {
    "word": "thirty-first",
    "speakText": "thirty-first",
    "spelling": "thirtyfirst",
    "ipa": "/ˌθɜːrti ˈfɜːrst/",
    "pos": "ordinal",
    "zh": "第三十一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "thirty-first"
    ],
    "example": "",
    "distractors": [
      "飞机",
      "问",
      "腰带；安全带"
    ]
  },
  {
    "word": "Monday",
    "speakText": "Monday",
    "spelling": "monday",
    "ipa": "/ˈmənˌdeɪ, ˈməndi/",
    "pos": "day",
    "zh": "星期一",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Monday"
    ],
    "example": "",
    "distractors": [
      "畏惧的",
      "助手；助理",
      "在旁边"
    ]
  },
  {
    "word": "Tuesday",
    "speakText": "Tuesday",
    "spelling": "tuesday",
    "ipa": "/ˈtuzˌdeɪ, ˈtuzdi/",
    "pos": "day",
    "zh": "星期二",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Tuesday"
    ],
    "example": "",
    "distractors": [
      "在以后",
      "也",
      "最好的"
    ]
  },
  {
    "word": "Wednesday",
    "speakText": "Wednesday",
    "spelling": "wednesday",
    "ipa": "/ˈwɛnzˌdeɪ, ˈwɛnzdi/",
    "pos": "day",
    "zh": "星期三",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Wednesday"
    ],
    "example": "",
    "distractors": [
      "下午",
      "在",
      "更好的；更吸引人的"
    ]
  },
  {
    "word": "Thursday",
    "speakText": "Thursday",
    "spelling": "thursday",
    "ipa": "/ˈθərzˌdeɪ, ˈθərzdi/",
    "pos": "day",
    "zh": "星期四",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Thursday"
    ],
    "example": "",
    "distractors": [
      "以后；后来",
      "在；@符号",
      "在之间"
    ]
  },
  {
    "word": "Friday",
    "speakText": "Friday",
    "spelling": "friday",
    "ipa": "/ˈfraɪˌdeɪ, ˈfraɪdi/",
    "pos": "day",
    "zh": "星期五",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Friday"
    ],
    "example": "",
    "distractors": [
      "再一次",
      "漂亮的；动听的",
      "自行车"
    ]
  },
  {
    "word": "Saturday",
    "speakText": "Saturday",
    "spelling": "saturday",
    "ipa": "/ˈsædərˌdeɪ, ˈsædərdi/",
    "pos": "day",
    "zh": "星期六",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Saturday"
    ],
    "example": "",
    "distractors": [
      "紧靠着；碰着",
      "姑姑；姨母",
      "大的"
    ]
  },
  {
    "word": "Sunday",
    "speakText": "Sunday",
    "spelling": "sunday",
    "ipa": "/ˈsənˌdeɪ, ˈsəndi/",
    "pos": "day",
    "zh": "星期日",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Sunday"
    ],
    "example": "",
    "distractors": [
      "年龄",
      "秋季",
      "自行车"
    ]
  },
  {
    "word": "January",
    "speakText": "January",
    "spelling": "january",
    "ipa": "/ˈdʒænjəˌwɛri/",
    "pos": "month",
    "zh": "一月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "January"
    ],
    "example": "",
    "distractors": [
      "岁的",
      "可获得的",
      "账单"
    ]
  },
  {
    "word": "February",
    "speakText": "February",
    "spelling": "february",
    "ipa": "/ˈfɛb(j)əˌwɛri, ˈfɛbrəˌwɛri/",
    "pos": "month",
    "zh": "二月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "February"
    ],
    "example": "",
    "distractors": [
      "以前",
      "不在",
      "生物学"
    ]
  },
  {
    "word": "March",
    "speakText": "March",
    "spelling": "march",
    "ipa": "/mɑrtʃ/",
    "pos": "month",
    "zh": "三月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "March"
    ],
    "example": "",
    "distractors": [
      "同意",
      "坏的",
      "鸟"
    ]
  },
  {
    "word": "April",
    "speakText": "April",
    "spelling": "april",
    "ipa": "/ˈeɪprəl/",
    "pos": "month",
    "zh": "四月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "April"
    ],
    "example": "",
    "distractors": [
      "空气",
      "婴儿",
      "出生"
    ]
  },
  {
    "word": "June",
    "speakText": "June",
    "spelling": "june",
    "ipa": "/dʒun/",
    "pos": "month",
    "zh": "六月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "June"
    ],
    "example": "",
    "distractors": [
      "机场",
      "背部",
      "生日"
    ]
  },
  {
    "word": "July",
    "speakText": "July",
    "spelling": "july",
    "ipa": "/dʒəˈlaɪ/",
    "pos": "month",
    "zh": "七月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "July"
    ],
    "example": "",
    "distractors": [
      "闹钟",
      "背包；背包旅行",
      "饼干"
    ]
  },
  {
    "word": "August",
    "speakText": "August",
    "spelling": "august",
    "ipa": "/ˈɔɡəst/",
    "pos": "month",
    "zh": "八月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "August"
    ],
    "example": "",
    "distractors": [
      "册子",
      "不愉快的；不好的",
      "一小块"
    ]
  },
  {
    "word": "September",
    "speakText": "September",
    "spelling": "september",
    "ipa": "/sɛpˈtɛmbər/",
    "pos": "month",
    "zh": "九月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "September"
    ],
    "example": "",
    "distractors": [
      "全部",
      "差",
      "黑色的"
    ]
  },
  {
    "word": "October",
    "speakText": "October",
    "spelling": "october",
    "ipa": "/ɑkˈtoʊbər/",
    "pos": "month",
    "zh": "十月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "October"
    ],
    "example": "",
    "distractors": [
      "好的；没问题",
      "羽毛球运动",
      "黑板"
    ]
  },
  {
    "word": "November",
    "speakText": "November",
    "spelling": "november",
    "ipa": "/noʊˈvɛmbər/",
    "pos": "month",
    "zh": "十一月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "November"
    ],
    "example": "",
    "distractors": [
      "几乎",
      "袋",
      "毯子"
    ]
  },
  {
    "word": "December",
    "speakText": "December",
    "spelling": "december",
    "ipa": "/diˈsɛmbər/",
    "pos": "month",
    "zh": "十二月",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "December"
    ],
    "example": "",
    "distractors": [
      "独自的",
      "烘焙",
      "大块；方块"
    ]
  },
  {
    "word": "Brazil",
    "speakText": "Brazil",
    "spelling": "brazil",
    "ipa": "/brəˈzɪl/",
    "pos": "country",
    "zh": "巴西",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Brazil"
    ],
    "example": "",
    "distractors": [
      "向前",
      "球；团",
      "金黄色的；头发金黄的"
    ]
  },
  {
    "word": "Brazilian",
    "speakText": "Brazilian",
    "spelling": "brazilian",
    "ipa": "/brəˈzɪljən/",
    "pos": "nationality",
    "zh": "巴西的；巴西人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Brazilian"
    ],
    "example": "",
    "distractors": [
      "已经",
      "气球",
      "血"
    ]
  },
  {
    "word": "Canada",
    "speakText": "Canada",
    "spelling": "canada",
    "ipa": "/ˈkænədə/",
    "pos": "country",
    "zh": "加拿大",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Canada"
    ],
    "example": "",
    "distractors": [
      "好的；没问题",
      "香蕉",
      "女衬衫；军装上衣"
    ]
  },
  {
    "word": "Canadian",
    "speakText": "Canadian",
    "spelling": "canadian",
    "ipa": "/kəˈneɪdiən/",
    "pos": "nationality",
    "zh": "加拿大的；加拿大人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Canadian"
    ],
    "example": "",
    "distractors": [
      "也",
      "乐队；一帮人",
      "蓝色的"
    ]
  },
  {
    "word": "China",
    "speakText": "China",
    "spelling": "china",
    "ipa": "/ˈtʃaɪnə/",
    "pos": "country",
    "zh": "中国",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "China"
    ],
    "example": "",
    "distractors": [
      "总是",
      "绷带；用绷带包扎",
      "木板；公告牌"
    ]
  },
  {
    "word": "Chinese",
    "speakText": "Chinese",
    "spelling": "chinese",
    "ipa": "/ˌtʃaɪˈniz/",
    "pos": "language/nationality",
    "zh": "中国的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Chinese"
    ],
    "example": "",
    "distractors": [
      "上午",
      "岸；堆",
      "棋盘游戏"
    ]
  },
  {
    "word": "France",
    "speakText": "France",
    "spelling": "france",
    "ipa": "/fræn(t)s/",
    "pos": "country",
    "zh": "法国",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "France"
    ],
    "example": "",
    "distractors": [
      "使人十分惊奇的",
      "户外烧烤；烤架",
      "小船"
    ]
  },
  {
    "word": "French",
    "speakText": "French",
    "spelling": "french",
    "ipa": "/frɛn(t)ʃ/",
    "pos": "language/nationality",
    "zh": "法国的；法国人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "French"
    ],
    "example": "",
    "distractors": [
      "救护车",
      "棒球运动；棒球",
      "身体"
    ]
  },
  {
    "word": "Ireland",
    "speakText": "Ireland",
    "spelling": "ireland",
    "ipa": "/ˈaɪ(ə)rlən(d)/",
    "pos": "country",
    "zh": "爱尔兰",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Ireland"
    ],
    "example": "",
    "distractors": [
      "在中",
      "篮球运动；篮球",
      "沸腾；开"
    ]
  },
  {
    "word": "Irish",
    "speakText": "Irish",
    "spelling": "irish",
    "ipa": "/ˈaɪrɪʃ/",
    "pos": "language/nationality",
    "zh": "爱尔兰的；爱尔兰人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Irish"
    ],
    "example": "",
    "distractors": [
      "一个；一只",
      "球板；球棒",
      "煮沸的；煮熟的"
    ]
  },
  {
    "word": "India",
    "speakText": "India",
    "spelling": "india",
    "ipa": "/ˈɪndiə/",
    "pos": "country",
    "zh": "印度",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "India"
    ],
    "example": "",
    "distractors": [
      "和",
      "洗澡；洗澡水",
      "书"
    ]
  },
  {
    "word": "Indian",
    "speakText": "Indian",
    "spelling": "indian",
    "ipa": "/ˈɪndiən/",
    "pos": "nationality",
    "zh": "印度的；印第安人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Indian"
    ],
    "example": "",
    "distractors": [
      "发怒的",
      "游泳衣",
      "书架"
    ]
  },
  {
    "word": "Italy",
    "speakText": "Italy",
    "spelling": "italy",
    "ipa": "/ˈɪdəli/",
    "pos": "country",
    "zh": "意大利",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Italy"
    ],
    "example": "",
    "distractors": [
      "动物",
      "浴室；洗手间",
      "书架"
    ]
  },
  {
    "word": "Italian",
    "speakText": "Italian",
    "spelling": "italian",
    "ipa": "/ɪˈtæljən/",
    "pos": "language/nationality",
    "zh": "意大利的；意大利人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Italian"
    ],
    "example": "",
    "distractors": [
      "再一的",
      "澡盆；浴缸",
      "书店"
    ]
  },
  {
    "word": "Spain",
    "speakText": "Spain",
    "spelling": "spain",
    "ipa": "/speɪn/",
    "pos": "country",
    "zh": "西班牙",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Spain"
    ],
    "example": "",
    "distractors": [
      "回答",
      "电池",
      "书店"
    ]
  },
  {
    "word": "Spanish",
    "speakText": "Spanish",
    "spelling": "spanish",
    "ipa": "/ˈspænɪʃ/",
    "pos": "language/nationality",
    "zh": "西班牙的；西班牙人的",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Spanish"
    ],
    "example": "",
    "distractors": [
      "一些；丝毫的",
      "表明属性",
      "靴子"
    ]
  },
  {
    "word": "Africa",
    "speakText": "Africa",
    "spelling": "africa",
    "ipa": "/ˈæfrəkə/",
    "pos": "continent",
    "zh": "非洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Africa"
    ],
    "example": "",
    "distractors": [
      "任何人",
      "海滩；河滩",
      "厌倦的"
    ]
  },
  {
    "word": "Australia",
    "speakText": "Australia",
    "spelling": "australia",
    "ipa": "/ɔˈstreɪljə, ɑˈstreɪljə/",
    "pos": "continent/country",
    "zh": "澳大利亚；澳大利亚洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Australia"
    ],
    "example": "",
    "distractors": [
      "不再",
      "豆",
      "令人厌倦的；无聊的"
    ]
  },
  {
    "word": "North America",
    "speakText": "North America",
    "spelling": "northamerica",
    "ipa": "/ˌnɔrθ əˈmɛrəkə/",
    "pos": "continent",
    "zh": "北美洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "North America"
    ],
    "example": "",
    "distractors": [
      "任何人",
      "承载",
      "出生的"
    ]
  },
  {
    "word": "South America",
    "speakText": "South America",
    "spelling": "southamerica",
    "ipa": "/ˌsaʊθ əˈmɛrəkə/",
    "pos": "continent",
    "zh": "南美洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "South America"
    ],
    "example": "",
    "distractors": [
      "任何事物",
      "胡须",
      "借"
    ]
  },
  {
    "word": "Asia",
    "speakText": "Asia",
    "spelling": "asia",
    "ipa": "/ˈeɪʒə/",
    "pos": "continent",
    "zh": "亚洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Asia"
    ],
    "example": "",
    "distractors": [
      "无论如何",
      "美丽的",
      "老板"
    ]
  },
  {
    "word": "Antarctica",
    "speakText": "Antarctica",
    "spelling": "antarctica",
    "ipa": "/æntˈɑrktəkə, æn(t)ˈɑrdəkə/",
    "pos": "continent",
    "zh": "南极洲",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Antarctica"
    ],
    "example": "",
    "distractors": [
      "在任何地方；去任何地方",
      "因为",
      "两个"
    ]
  },
  {
    "word": "Europe",
    "speakText": "Europe",
    "spelling": "europe",
    "ipa": "/ˈjʊrəp/",
    "pos": "continent",
    "zh": "欧洲；欧洲大陆",
    "banks": [
      "ket-official"
    ],
    "emoji": "",
    "phonics": [],
    "syllables": [
      "Europe"
    ],
    "example": "",
    "distractors": [
      "公寓楼",
      "变成；开始变得",
      "打扰"
    ]
  }
];

const phonicsSets = {
  "short-a": { word: "cat", slots: ["c", "a", "t"], sound: "short a", pairs: ["cat", "cap", "can", "map"] },
  "long-a": { word: "cake", slots: ["c", "a", "k", "e"], sound: "long a with silent e", pairs: ["cake", "make", "lake", "name"] },
  sh: { word: "ship", slots: ["sh", "i", "p"], sound: "sh blend", pairs: ["ship", "shop", "shell", "fish"] },
  ch: { word: "chair", slots: ["ch", "air"], sound: "ch blend", pairs: ["chair", "cheese", "chat", "lunch"] },
  th: { word: "thin", slots: ["th", "i", "n"], sound: "th blend", pairs: ["thin", "three", "thumb", "bath"] }
};

const sampleArt = [
  {
    title: "星星火车",
    date: "2024-05-18",
    note: "火车开去月亮旁边。",
    image: svgDataUri("星星火车", "#ddefff", "#e14848"),
    ai: "画面把交通工具和天空放在一起，说明 Jojo 正在把日常物体放进想象场景。可以鼓励他继续补充目的地、乘客和故事顺序。"
  },
  {
    title: "彩色机器人",
    date: "2024-08-02",
    note: "机器人会帮我收玩具。",
    image: svgDataUri("机器人", "#dff7ed", "#3478d4"),
    ai: "作品有明显主体和功能设定，带有工程想象。评价时可以问：机器人有几个按钮？每个按钮做什么？"
  }
];

const defaultAiSettings = {
  mode: "minimax-openai",
  endpoint: "https://api.minimax.io/v1/chat/completions",
  model: "MiniMax-M3",
  customModel: "",
  apiKey: ""
};

const localApiOrigin = "http://127.0.0.1:4173";

function apiUrl(path) {
  if (/^https?:\/\//i.test(path)) return path;
  return location.protocol === "file:" ? `${localApiOrigin}${path}` : path;
}

function appAssetUrl(src) {
  if (String(src || "").startsWith("/api/")) return apiUrl(src);
  return src;
}

const defaultAppSettings = {
  wordRepeatVoEnabled: false,
  wordBankTitleOverrides: {}
};

const defaultOssSettings = {
  provider: "aliyun",
  region: "",
  endpoint: "",
  bucket: "",
  accessKeyId: "",
  accessKeySecret: "",
  customDomain: "",
  prefix: "jojo-site",
  useSsl: true,
  hasAccessKeyId: false,
  hasAccessKeySecret: false
};

const homeBackgroundPresets = [
  { id: "robot-cheer", label: "机器人小巴", src: "./assets/jojo-retro-hero-robot-cheer.png" },
  { id: "storybook", label: "故事小巴", src: "./assets/jojo-retro-hero-with-jojo.png" },
  { id: "ukulele", label: "尤克里里", src: "./assets/jojo-retro-hero-cartoon-ukulele.png" },
  { id: "classic", label: "经典实验室", src: "./assets/jojo-retro-hero.png" }
];

const defaultHomeBackground = {
  mode: "preset",
  preset: "robot-cheer",
  src: homeBackgroundPresets[0].src
};

const cardCottagePhotoSources = Array.from({ length: 19 }, (_, index) => `./assets/card-cottage/fronts/jojo-front-${String(index + 1).padStart(2, "0")}.jpg`);
const cardCottageFrameSrc = "./assets/card-cottage/gold-frame.png";
const cardCottageDefaultTotal = 50;
const cardCottageSlotTotal = 50;
const cardCottageMinTotal = 1;
const cardCottageMaxTotal = 100;
const cardCottageUploadMaxEdge = 1800;

function defaultCardCottageSlots() {
  return Array.from({ length: cardCottageSlotTotal }, (_, index) => {
    const src = cardCottagePhotoSources[index];
    return src ? {
      name: `Jojo Photo ${String(index + 1).padStart(2, "0")}`,
      src,
      updatedAt: "built-in"
    } : null;
  });
}

let serverPersistenceAvailable = false;
let syncTimer = null;
let pendingSharedPatch = null;
let wordProgressStorageTimer = null;
let galleryPersistenceReady = false;
let latestOssImageStorageStatus = null;
let latestDeploymentStatus = null;
let armedHomeTileHref = "";
let wordRepeatRecognizer = null;
let pendingArtFile = null;
let appBooted = false;
let authMode = "locked";
let demoMode = false;
let loginSubmitting = false;
let loginDigits = [];
let loginCountdownTimer = null;
const demoLocalStore = new Map();
const selectedWordBankIds = new Set();
const selectedSongBankIds = new Set();
let activeTopbarAction = null;
const maxProgressRows = 6;
const minWordsPerBank = 10;
const wordSmallStarsPerBig = 20;
const difficultWordBankId = "difficult-words";
const difficultWordBankTitle = "重难点词库";
const kanaMasteriesPerSmallStar = 2;
const kanaSmallStarsPerBig = 12;
const phonicsSmallStarsPerChallenge = 2;
const phonicsSmallStarsPerBig = 6;

const baseWordBankLabels = {
  "ket-official": "KET 官方词汇表",
  all: "全部词库"
};
const wordBankLabels = { ...baseWordBankLabels };

function saveLocalItem(key, value) {
  if (demoMode) {
    demoLocalStore.set(String(key), String(value));
    return;
  }
  localStorage.setItem(key, value);
}

function removeLocalItem(key) {
  if (demoMode) {
    demoLocalStore.delete(String(key));
    return;
  }
  localStorage.removeItem(key);
}

const wordImportGuideText = `请把词汇表整理成一个 JSON 对象，方便导入 Jojo LAB 的 Word Camp。

顶层字段：
1. title：词库名称，必填，例如“KET Unit 1”。
2. id：词库 ID，可选。只能使用英文小写、数字和连字符；不填时系统会自动生成。
3. source：来源说明，可选，例如“学校教材第 3 单元”。
4. words：词条数组，必填，建议至少 10 个词。

每个词条必填字段：
1. word：英文单词或短语。
2. zh：中文释义，给孩子看的自然中文，不要只写机器直译。
3. ipa：音标。英式或美式都可以；如果原表没有，请尽量补充。

每个词条推荐字段：
1. pos：词性，例如 noun、verb、adjective、phrase。
2. speakText：朗读文本。遇到 a/an、TV、带括号或斜杠的词时，用这里指定真实朗读内容。
3. spelling：拼写练习用的纯字母答案。短语可去空格，例如 ice cream -> icecream。
4. example：适合孩子理解的英文例句。
5. phonics：自然拼读要点数组，例如 ["sh", "short a"]。
6. syllables：音节拆分数组，例如 ["ap", "ple"]。
7. distractors：中文干扰项数组，建议 3 个，不能和正确释义太接近。

要求：
- 输出必须是纯 JSON，不要 Markdown，不要注释。
- 不要把多个词义塞得太长；优先保留 KET/儿童学习阶段最常见的意思。
- 同一个词库中的 word 不要重复。
- 每个词库单独输出，不要把不同来源混在一起。`;

const wordImportGuideExample = {
  title: "示例词库 Unit 1",
  id: "sample-unit-1",
  source: "示例",
  words: [
    {
      word: "apple",
      zh: "苹果",
      ipa: "/ˈæpəl/",
      pos: "noun",
      speakText: "apple",
      spelling: "apple",
      example: "Jojo eats an apple.",
      phonics: ["short a", "final le"],
      syllables: ["ap", "ple"],
      distractors: ["香蕉", "椅子", "火车"]
    }
  ]
};

const phonicsQuestUnits = [
  {
    title: "短元音起步",
    goal: "先学最常用的声音，再立刻拼成 CVC 小词。",
    sounds: ["s", "a", "t", "p", "i", "n", "m", "d"],
    words: ["sat", "pin", "map", "dad", "tin", "sip", "mat", "tap", "sad", "nap", "pan", "dim"],
    listen: [
      { sound: "/s/", answer: "sun", choices: ["sun", "map", "tin", "dad"] },
      { sound: "/m/", answer: "map", choices: ["pin", "tap", "map", "sat"] },
      { sound: "/t/", answer: "tin", choices: ["dad", "tin", "sip", "map"] }
    ],
    story: ["Sam sat.", "Pat is in a pit.", "Dad sat in it."]
  },
  {
    title: "CVC 自动化",
    goal: "补齐更多辅音，把短元音词读稳。",
    sounds: ["g", "o", "c", "k", "e", "u", "r", "h", "b", "f", "l"],
    words: ["hot", "cup", "bed", "run", "log", "fan", "rub", "hen", "bug", "leg", "hog", "fin"],
    listen: [
      { sound: "/h/", answer: "hot", choices: ["cup", "hot", "log", "bed"] },
      { sound: "/r/", answer: "run", choices: ["run", "fan", "hen", "cup"] },
      { sound: "/l/", answer: "log", choices: ["bed", "rub", "log", "hot"] }
    ],
    story: ["Bob had a red cup.", "The cup is hot.", "Run, Bob, run."]
  },
  {
    title: "连续辅音",
    goal: "练习开头和结尾的连续辅音，不漏音。",
    sounds: ["st", "bl", "tr", "sn", "fl", "ck", "ll", "ss", "ff"],
    words: ["stop", "black", "trip", "snip", "flap", "lock", "bell", "mess", "stack", "fill", "snack", "trust"],
    listen: [
      { sound: "/st/", answer: "stop", choices: ["trip", "stop", "bell", "lock"] },
      { sound: "/fl/", answer: "flap", choices: ["mess", "black", "flap", "snip"] },
      { sound: "/sn/", answer: "snip", choices: ["lock", "snip", "stop", "bell"] }
    ],
    story: ["Stan can stop.", "A black bell fell.", "Fran can fix the lock."]
  },
  {
    title: "双字母音",
    goal: "一个声音可以由两个字母表示。",
    sounds: ["sh", "ch", "th", "wh", "ng", "nk"],
    words: ["ship", "chin", "thin", "when", "ring", "pink", "shop", "thick", "sing", "shell", "thank", "bench"],
    listen: [
      { sound: "/sh/", answer: "ship", choices: ["thin", "ship", "ring", "pink"] },
      { sound: "/ch/", answer: "chin", choices: ["when", "shop", "chin", "thick"] },
      { sound: "/ng/", answer: "ring", choices: ["ring", "ship", "pink", "thin"] }
    ],
    story: ["Shan has a pink ring.", "Chip can shop.", "When will this ring fit?"]
  },
  {
    title: "长元音入门",
    goal: "比较短元音和长元音，开始读 magic e 和常见元音组合。",
    sounds: ["a_e", "i_e", "o_e", "u_e", "ee", "ai", "oa"],
    words: ["cape", "kite", "hope", "cube", "seed", "rain", "boat", "make", "game", "time", "home", "green"],
    listen: [
      { sound: "/ai/", answer: "rain", choices: ["seed", "boat", "rain", "cube"] },
      { sound: "/ee/", answer: "seed", choices: ["cape", "seed", "hope", "kite"] },
      { sound: "/oa/", answer: "boat", choices: ["boat", "make", "rain", "cube"] }
    ],
    story: ["Kate can make a kite.", "The boat is in rain.", "I hope to see it."]
  },
  {
    title: "R-Controlled",
    goal: "学会 ar, or, er/ir/ur 这类被 r 影响的元音。",
    sounds: ["ar", "or", "er", "ir", "ur"],
    words: ["car", "star", "corn", "fork", "her", "bird", "turn", "burn", "park", "born", "fern", "curl"],
    listen: [
      { sound: "/ar/", answer: "car", choices: ["fork", "car", "bird", "turn"] },
      { sound: "/or/", answer: "corn", choices: ["star", "burn", "corn", "her"] },
      { sound: "/ur/", answer: "turn", choices: ["turn", "car", "fork", "bird"] }
    ],
    story: ["Mark has a red car.", "The bird can turn.", "Her fork is on the cart."]
  }
];

const phonicsQuestSteps = ["listen", "flash", "blend", "spell", "read"];

const phonicsWordMeanings = {
  sat: "坐下了", pin: "别针", map: "地图", dad: "爸爸", tin: "罐头；锡", sip: "小口喝", mat: "垫子", tap: "轻拍；水龙头", sad: "伤心的", nap: "小睡", pan: "平底锅", dim: "昏暗的",
  hot: "热的", cup: "杯子", bed: "床", run: "跑", log: "木头", fan: "风扇；粉丝", rub: "摩擦", hen: "母鸡", bug: "小虫", leg: "腿", hog: "猪", fin: "鱼鳍",
  stop: "停止", black: "黑色的", trip: "旅行；绊倒", snip: "剪一下", flap: "拍动", lock: "锁", bell: "铃", mess: "混乱", stack: "堆叠", fill: "装满", snack: "零食", trust: "信任",
  ship: "船", chin: "下巴", thin: "薄的", when: "什么时候", ring: "戒指；铃声", pink: "粉色的", shop: "商店", thick: "厚的", sing: "唱歌", shell: "贝壳", thank: "感谢", bench: "长椅",
  cape: "披风", kite: "风筝", hope: "希望", cube: "立方体", seed: "种子", rain: "雨", boat: "船", make: "制作", game: "游戏", time: "时间", home: "家", green: "绿色的",
  car: "汽车", star: "星星", corn: "玉米", fork: "叉子", her: "她的", bird: "鸟", turn: "转弯；轮到", burn: "燃烧", park: "公园", born: "出生", fern: "蕨类植物", curl: "卷曲"
};


const state = {
  kana: null,
  kanaScore: Number(localStorage.getItem("jojoKanaScore") || 0),
  kanaProgress: loadKanaProgress(),
  kanaRewards: loadKanaRewards(),
  word: null,
  spelling: { missing: [], answer: [] },
  phonicsKey: "short-a",
  phonicsStreak: 0,
  phonicsQuest: loadPhonicsQuestState(),
  phonicsRewards: loadPhonicsRewards(),
  played: Number(localStorage.getItem("jojoPlayed") || 0),
  wordBank: localStorage.getItem("jojoWordBank") || "ket-official",
  dailyWordCount: normalizeDailyWordCount(localStorage.getItem("jojoDailyWordCount") || 20),
  dailyWordPlan: loadDailyWordPlan(),
  wordProgress: loadWordProgress(),
  globalRewards: loadGlobalRewards(),
  wordRewards: loadWordRewards(),
  customWordBanks: loadCustomWordBanks(),
  deletedWordBanks: JSON.parse(localStorage.getItem("jojoDeletedWordBanks") || "[]"),
  artMode: localStorage.getItem("jojoArtMode") === "true",
  gallery: JSON.parse(localStorage.getItem("jojoGallery") || "null") || sampleArt,
  cardCottage: loadCardCottageState(),
  appSettings: loadAppSettings(),
  aiSettings: loadAiSettings(),
  ossSettings: loadOssSettings(),
  homeBackground: loadHomeBackground(),
  homeBackgroundPresets: loadHomeBackgroundPresets(),
  songCandidates: [],
  selectedSong: null,
  songAnalysis: null,
  activeSongHistoryId: "",
  songWorkflowVersion: 0,
  songHistory: loadSongHistory()
};

let wordCacheVersion = 0;
let cachedCustomWords = null;
let cachedAllWords = null;
let selectedBankCache = { key: "", words: [] };
let wordNextQuestionTimer = null;
let wordAnswerLocked = false;
let wordQuestionToken = 0;
let optionRenderSerial = 0;
let lastWordQuestionText = "";
let galleryHydrated = false;
let cardCottageHydrated = false;
let songHistoryHydrated = false;

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function bindTouchPress(element, handler) {
  let suppressNextClick = false;
  const run = (event) => {
    if (element.disabled) return;
    handler(event);
  };
  const suppressClickBriefly = () => {
    suppressNextClick = true;
    window.setTimeout(() => {
      suppressNextClick = false;
    }, 420);
  };
  if (window.PointerEvent) {
    element.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" || event.isPrimary === false || event.button > 0) return;
      event.preventDefault();
      suppressClickBriefly();
      run(event);
    });
  } else {
    element.addEventListener("touchstart", (event) => {
      event.preventDefault();
      suppressClickBriefly();
      run(event);
    }, { passive: false });
  }
  element.addEventListener("click", (event) => {
    if (suppressNextClick) {
      event.preventDefault();
      return;
    }
    run(event);
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

let speechVoices = [];

function refreshSpeechVoices() {
  if (!("speechSynthesis" in window)) return;
  speechVoices = speechSynthesis.getVoices();
}

function pickVoice(lang) {
  refreshSpeechVoices();
  if (!speechVoices.length) return null;
  const normalized = lang.toLowerCase();
  const preferredNames = ["samantha", "ava", "allison", "daniel", "karen", "serena", "google us english", "google uk english"];
  return speechVoices.find((voice) => voice.lang.toLowerCase() === normalized && preferredNames.some((name) => voice.name.toLowerCase().includes(name)))
    || speechVoices.find((voice) => voice.lang.toLowerCase() === normalized)
    || speechVoices.find((voice) => voice.lang.toLowerCase().startsWith(normalized.slice(0, 2)))
    || null;
}

function speak(text, lang = "en-US") {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.voice = pickVoice(lang);
  utterance.rate = lang.startsWith("en") ? 0.72 : 0.82;
  utterance.pitch = lang.startsWith("en") ? 1 : 1.05;
  speechSynthesis.speak(utterance);
}

function speakAsync(text, lang = "en-US") {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      window.setTimeout(resolve, 600);
      return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.voice = pickVoice(lang);
    utterance.rate = lang.startsWith("en") ? 0.72 : 0.82;
    utterance.pitch = lang.startsWith("en") ? 1 : 1.05;
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };
    utterance.onend = finish;
    utterance.onerror = finish;
    speechSynthesis.speak(utterance);
    window.setTimeout(finish, Math.max(1500, String(text).length * 140));
  });
}

function speechRecognitionClass() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

function normalizeSpeechText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z\s'-]/g, " ")
    .replace(/\b(a|an|the)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function spokenWordMatches(transcript, word) {
  const expected = normalizeSpeechText(word);
  const heard = normalizeSpeechText(transcript);
  if (!expected || !heard) return false;
  const expectedCompact = expected.replace(/[\s'-]/g, "");
  const heardTokens = heard.split(/\s+/).map((token) => token.replace(/[\s'-]/g, ""));
  return heardTokens.includes(expectedCompact) || heard.replace(/[\s'-]/g, "").includes(expectedCompact);
}

function listenForSpeechOnce() {
  const Recognition = speechRecognitionClass();
  if (!Recognition) return Promise.resolve({ supported: false, transcript: "" });
  if (wordRepeatRecognizer) {
    try {
      wordRepeatRecognizer.abort();
    } catch {}
  }
  return new Promise((resolve) => {
    const recognition = new Recognition();
    wordRepeatRecognizer = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 4;
    let settled = false;
    const finish = (result) => {
      if (settled) return;
      settled = true;
      if (wordRepeatRecognizer === recognition) wordRepeatRecognizer = null;
      resolve({ supported: true, transcript: "", ...result });
    };
    recognition.onresult = (event) => {
      const transcripts = Array.from(event.results?.[0] || []).map((item) => item.transcript).join(" ");
      finish({ transcript: transcripts });
    };
    recognition.onerror = (event) => finish({ transcript: "", error: event?.error || "speech-error" });
    recognition.onend = () => finish({ transcript: "" });
    try {
      recognition.start();
    } catch {
      finish({ transcript: "" });
    }
  });
}

function playCue(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }
  const notes = type === "good" ? [523.25, 659.25, 783.99] : [220, 164.81];
  notes.forEach((frequency, index) => {
    const start = context.currentTime + index * 0.09;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type === "good" ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(type === "good" ? 0.12 : 0.09, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.14);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.16);
  });
  window.setTimeout(() => context.close(), 520);
}

function playStarCue(type = "small") {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const notes = type === "big" ? [523.25, 659.25, 783.99, 1046.5, 1318.51] : [659.25, 783.99, 987.77];
  notes.forEach((frequency, index) => {
    const start = context.currentTime + index * 0.075;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(type === "big" ? 0.15 : 0.1, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.18);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.2);
  });
  window.setTimeout(() => context.close(), 700);
}

let toastTimer = null;

function showToast(message, type = "good") {
  const toast = $("#appToast");
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.className = `app-toast show ${type}`;
  toastTimer = window.setTimeout(() => {
    toast.className = "app-toast";
  }, 2600);
}

function incrementPlayed() {
  state.played += 1;
  saveLocalItem("jojoPlayed", String(state.played));
  $("#playedCount").textContent = state.played;
  saveSharedState({ played: state.played });
}

function loadWordProgress() {
  try {
    const progress = JSON.parse(localStorage.getItem("jojoWordProgress") || "{}") || {};
    Object.keys(progress).forEach((key) => {
      if (key.split(":").length < 3) delete progress[key];
    });
    saveLocalItem("jojoWordProgress", JSON.stringify(progress));
    return progress;
  } catch {
    return {};
  }
}

function normalizeDailyWordCount(value) {
  const count = Math.round(Number(value || 20) / 10) * 10;
  return Math.max(10, Math.min(100, count || 20));
}

function loadDailyWordPlan() {
  try {
    return JSON.parse(localStorage.getItem("jojoDailyWordPlan") || "null") || null;
  } catch {
    return null;
  }
}

function wordDayKey(date = new Date()) {
  const shifted = new Date(date.getTime() - 60 * 60 * 1000);
  const year = shifted.getFullYear();
  const month = String(shifted.getMonth() + 1).padStart(2, "0");
  const day = String(shifted.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function saveWordProgressLocal(immediate = false) {
  window.clearTimeout(wordProgressStorageTimer);
  const write = () => saveLocalItem("jojoWordProgress", JSON.stringify(state.wordProgress));
  if (immediate) {
    write();
  } else {
    wordProgressStorageTimer = window.setTimeout(write, 350);
  }
}

window.addEventListener("pagehide", () => {
  if (wordProgressStorageTimer) {
    window.clearTimeout(wordProgressStorageTimer);
    saveLocalItem("jojoWordProgress", JSON.stringify(state.wordProgress));
  }
});

function persistWordProgress(changedKey = "") {
  saveWordProgressLocal(!changedKey);
  if (changedKey && state.wordProgress[changedKey]) {
    saveSharedState({ wordProgressPatch: { [changedKey]: state.wordProgress[changedKey] } });
  } else {
    saveSharedState({ wordProgress: state.wordProgress });
  }
}

function readLocalJson(key, fallback = {}) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return value && typeof value === "object" ? value : fallback;
  } catch {
    return fallback;
  }
}

function rewardNumber(value) {
  return Math.max(0, Number(value || 0));
}

function legacyModuleBigStars(...items) {
  return items.reduce((total, item) => total + rewardNumber(item?.bigStars), 0);
}

function normalizeGlobalRewards(value = {}, legacyBigStars = 0) {
  value = value && typeof value === "object" ? value : {};
  const rewards = {
    bigStars: rewardNumber(value.bigStars),
    migratedModuleBigStars: Boolean(value.migratedModuleBigStars)
  };
  if (!rewards.migratedModuleBigStars) {
    rewards.bigStars += rewardNumber(legacyBigStars);
    rewards.migratedModuleBigStars = true;
  }
  return rewards;
}

function loadGlobalRewards() {
  const stored = readLocalJson("jojoGlobalRewards", {});
  const legacyBigStars = legacyModuleBigStars(
    readLocalJson("jojoWordRewards", {}),
    readLocalJson("jojoKanaRewards", {}),
    readLocalJson("jojoPhonicsRewards", {})
  );
  return normalizeGlobalRewards(stored, legacyBigStars);
}

function persistGlobalRewards() {
  state.globalRewards = normalizeGlobalRewards(state.globalRewards, 0);
  saveLocalItem("jojoGlobalRewards", JSON.stringify(state.globalRewards));
  saveSharedState({ globalRewards: state.globalRewards });
}

function normalizeWordRewards(value = {}) {
  return {
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0
  };
}

function loadWordRewards() {
  try {
    return normalizeWordRewards(JSON.parse(localStorage.getItem("jojoWordRewards") || "{}"));
  } catch {
    return normalizeWordRewards();
  }
}

function persistWordRewards() {
  state.wordRewards = normalizeWordRewards(state.wordRewards);
  saveLocalItem("jojoWordRewards", JSON.stringify(state.wordRewards));
  saveSharedState({ wordRewards: state.wordRewards });
}

function loadAppSettings() {
  try {
    return { ...defaultAppSettings, ...JSON.parse(localStorage.getItem("jojoAppSettings") || "{}") };
  } catch {
    return { ...defaultAppSettings };
  }
}

function saveAppSettings() {
  state.appSettings = {
    ...defaultAppSettings,
    ...state.appSettings,
    wordRepeatVoEnabled: Boolean($("#wordRepeatVoEnabled")?.checked),
    wordBankTitleOverrides: { ...(state.appSettings.wordBankTitleOverrides || {}) }
  };
  saveLocalItem("jojoAppSettings", JSON.stringify(state.appSettings));
  saveSharedState({ appSettings: state.appSettings });
}

function saveAppSettingsState() {
  state.appSettings = {
    ...defaultAppSettings,
    ...state.appSettings,
    wordBankTitleOverrides: { ...(state.appSettings.wordBankTitleOverrides || {}) }
  };
  saveLocalItem("jojoAppSettings", JSON.stringify(state.appSettings));
  saveSharedState({ appSettings: state.appSettings });
}

function fillAppSettingsForm() {
  const checkbox = $("#wordRepeatVoEnabled");
  if (checkbox) checkbox.checked = Boolean(state.appSettings.wordRepeatVoEnabled);
}

function loadKanaProgress() {
  try {
    const progress = JSON.parse(localStorage.getItem("jojoKanaProgress") || "{}") || {};
    return typeof progress === "object" ? progress : {};
  } catch {
    return {};
  }
}

function persistKanaProgress() {
  saveLocalItem("jojoKanaProgress", JSON.stringify(state.kanaProgress));
  saveSharedState({ kanaProgress: state.kanaProgress });
}

function normalizeKanaRewards(value = {}) {
  return {
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0,
    masteryCredits: Math.max(0, Math.min(kanaMasteriesPerSmallStar - 1, Number(value.masteryCredits || 0))),
    awardedKeys: Array.isArray(value.awardedKeys) ? value.awardedKeys.map(String) : []
  };
}

function loadKanaRewards() {
  try {
    return normalizeKanaRewards(JSON.parse(localStorage.getItem("jojoKanaRewards") || "{}"));
  } catch {
    return normalizeKanaRewards();
  }
}

function persistKanaRewards() {
  state.kanaRewards = normalizeKanaRewards(state.kanaRewards);
  saveLocalItem("jojoKanaRewards", JSON.stringify(state.kanaRewards));
  saveSharedState({ kanaRewards: state.kanaRewards });
}

function kanaProgressItems() {
  return kanaBase.flatMap((item) => [
    { key: `hiragana:${item.romaji}`, label: item.hiragana, romaji: item.romaji, script: "平" },
    { key: `katakana:${item.romaji}`, label: item.katakana, romaji: item.romaji, script: "片" }
  ]);
}

function peekKanaRecord(key) {
  return state.kanaProgress[key] || { score: 0, wrongStreak: 0, purpleCorrect: 0 };
}

function kanaRecord(key) {
  if (!state.kanaProgress[key]) {
    state.kanaProgress[key] = { score: 0, wrongStreak: 0, purpleCorrect: 0 };
  }
  return state.kanaProgress[key];
}

function kanaLevel(key) {
  const record = peekKanaRecord(key);
  return record.wrongStreak >= 3 ? "N" : String(Math.max(0, Math.min(3, record.score || 0)));
}

function isKanaMastered(key) {
  const record = peekKanaRecord(key);
  return record.wrongStreak < 3 && Number(record.score || 0) >= 3;
}

function wordRecordKey(word, bank = currentWordBank(), mode = $("#wordMode")?.value || "meaning") {
  return `${mode}:${bank}:${word.word}`;
}

function currentWordRecordKey(word) {
  return wordRecordKey(word, currentWordBank(), $("#wordMode")?.value || "meaning");
}

function peekWordRecord(word, bank = currentWordBank(), mode = $("#wordMode")?.value || "meaning") {
  return state.wordProgress[wordRecordKey(word, bank, mode)] || { score: 0, wrongStreak: 0, purpleCorrect: 0 };
}

function wordRecord(word) {
  const key = currentWordRecordKey(word);
  if (!state.wordProgress[key]) {
    state.wordProgress[key] = { score: 0, wrongStreak: 0, purpleCorrect: 0 };
  }
  return state.wordProgress[key];
}

function wordLevel(word) {
  const record = peekWordRecord(word);
  return record.wrongStreak >= 3 ? "N" : String(Math.max(0, Math.min(3, record.score || 0)));
}

function isWordMastered(word, bank = currentWordBank(), mode = $("#wordMode")?.value || "meaning") {
  const record = peekWordRecord(word, bank, mode);
  return record.wrongStreak < 3 && Number(record.score || 0) >= 3;
}

function persistDailyWordPlan() {
  saveLocalItem("jojoDailyWordPlan", JSON.stringify(state.dailyWordPlan));
  saveSharedState({ dailyWordCount: state.dailyWordCount, dailyWordPlan: state.dailyWordPlan });
}

function eligibleDailyWords() {
  const bank = currentWordBank();
  const mode = $("#wordMode")?.value || "meaning";
  return wordsForSelectedBank().filter((word) => !isWordMastered(word, bank, mode));
}

function ensureDailyWordPlan() {
  repairCurrentWordBank();
  const bank = currentWordBank();
  const mode = $("#wordMode")?.value || "meaning";
  const day = wordDayKey();
  const count = normalizeDailyWordCount(state.dailyWordCount);
  const eligible = eligibleDailyWords();
  const bankWordSet = new Set(wordsForSelectedBank().map((word) => word.word));
  const plan = state.dailyWordPlan;
  const stillValid = plan
    && plan.day === day
    && plan.bank === bank
    && plan.mode === mode
    && plan.count === count
    && Array.isArray(plan.words)
    && (plan.words.length ? plan.words.every((word) => bankWordSet.has(word)) : eligible.length === 0);
  if (!stillValid) {
    state.dailyWordPlan = {
      day,
      bank,
      mode,
      count,
      createdAt: new Date().toISOString(),
      words: sample(eligible, Math.min(count, eligible.length)).map((word) => word.word)
    };
    persistDailyWordPlan();
  } else {
    const filtered = plan.words.filter((word) => bankWordSet.has(word));
    if (filtered.length !== plan.words.length) {
      state.dailyWordPlan = { ...plan, words: filtered };
      persistDailyWordPlan();
    }
  }
  return state.dailyWordPlan;
}

function dailyWords() {
  const plan = ensureDailyWordPlan();
  const planSet = new Set(plan.words || []);
  return wordsForSelectedBank().filter((word) => planSet.has(word.word));
}

function globalBigStars() {
  return rewardNumber(state.globalRewards?.bigStars);
}

function renderBigStarTray(selector) {
  const tray = $(selector);
  if (!tray) return;
  const bigStars = globalBigStars();
  const visibleBigStars = Math.min(bigStars, 4);
  tray.innerHTML = bigStars
    ? `${Array.from({ length: visibleBigStars }, () => `<img src="./assets/gold-star-reward.png" alt="大星星">`).join("")}${bigStars > visibleBigStars ? `<span class="star-more">+${bigStars - visibleBigStars}</span>` : ""}`
    : "";
  tray.setAttribute("aria-label", `全局大星星 ${bigStars} 颗`);
}

function renderGlobalRewards() {
  ["#wordBigStarTray", "#kanaBigStarTray", "#phonicsBigStarTray"].forEach(renderBigStarTray);
  const bigStars = globalBigStars();
  if ($("#cardhouseBigStarCount")) $("#cardhouseBigStarCount").textContent = String(bigStars);
  if ($(".cardhouse-star-bank")) $(".cardhouse-star-bank").setAttribute("aria-label", `当前全局大金星 ${bigStars} 颗`);
}

function renderStarRewards(rewards, smallTraySelector, bigTraySelector, smallStarsPerBig) {
  const smallTray = $(smallTraySelector);
  const bigTray = $(bigTraySelector);
  if (!smallTray || !bigTray) return;
  const smallStars = Math.max(0, Math.min(smallStarsPerBig - 1, Number(rewards?.smallStars || 0)));
  smallTray.innerHTML = `${Array.from({ length: smallStars }, () => `
    <img src="./assets/gold-star-reward-small.png" alt="小星星">
  `).join("")}<span class="star-progress-text">${smallStars}/${smallStarsPerBig}</span>`;
  renderBigStarTray(bigTraySelector);
}

function renderWordRewards() {
  state.wordRewards = normalizeWordRewards(state.wordRewards);
  renderStarRewards(state.wordRewards, "#wordSmallStarTray", "#wordBigStarTray", wordSmallStarsPerBig);
  renderGlobalRewards();
}

function renderKanaRewards() {
  state.kanaRewards = normalizeKanaRewards(state.kanaRewards);
  renderStarRewards(state.kanaRewards, "#kanaSmallStarTray", "#kanaBigStarTray", kanaSmallStarsPerBig);
  renderGlobalRewards();
}

function renderPhonicsRewards() {
  state.phonicsRewards = normalizePhonicsRewards(state.phonicsRewards);
  renderStarRewards(state.phonicsRewards, "#phonicsSmallStarTray", "#phonicsBigStarTray", phonicsSmallStarsPerBig);
  renderGlobalRewards();
}

function addGlobalBigStars(amount = 1) {
  state.globalRewards = normalizeGlobalRewards(state.globalRewards, 0);
  state.globalRewards.bigStars += rewardNumber(amount);
  state.globalRewards.migratedModuleBigStars = true;
}

function awardSmallStars(rewards, amount, smallStarsPerBig) {
  rewards.smallStars = Math.max(0, Number(rewards.smallStars || 0)) + amount;
  rewards.bigStars = 0;
  let earned = amount > 0 ? "small" : "";
  while (rewards.smallStars >= smallStarsPerBig) {
    rewards.smallStars -= smallStarsPerBig;
    addGlobalBigStars(1);
    earned = "big";
  }
  return earned;
}

function animateLearningStarReward(panelSelector, sourceSelector, type) {
  const panel = $(panelSelector);
  const source = $(sourceSelector);
  if (!panel || !source) return;
  const start = source.getBoundingClientRect();
  const end = panel.getBoundingClientRect();
  const star = document.createElement("img");
  star.src = "./assets/gold-star-reward-small.png";
  star.alt = "";
  star.className = `reward-star-float ${type === "big" ? "big" : "small"}`;
  const size = type === "big" ? 82 : 54;
  star.style.left = `${start.left + start.width / 2 - size / 2}px`;
  star.style.top = `${start.top + start.height / 2 - size / 2}px`;
  star.style.width = `${size}px`;
  const targetX = end.left + end.width * (type === "big" ? 0.72 : 0.5) - (start.left + start.width / 2);
  const targetY = end.top + end.height / 2 - (start.top + start.height / 2);
  star.style.setProperty("--star-x", `${targetX}px`);
  star.style.setProperty("--star-y", `${targetY}px`);
  document.body.appendChild(star);
  star.addEventListener("animationend", () => star.remove(), { once: true });
}

function animateWordStarReward(type) {
  animateLearningStarReward("#wordStarPanel", "#wordPrompt", type);
}

function animateKanaStarReward(type) {
  animateLearningStarReward("#kanaStarPanel", "#kanaPrompt", type);
}

function animatePhonicsStarReward(type) {
  animateLearningStarReward("#phonicsRewardPanel", ".phonics-quest-card:not([hidden])", type);
}

function awardWordMasteryReward() {
  state.wordRewards = normalizeWordRewards(state.wordRewards);
  const earned = awardSmallStars(state.wordRewards, 1, wordSmallStarsPerBig);
  persistWordRewards();
  if (earned === "big") persistGlobalRewards();
  renderWordRewards();
  playStarCue(earned);
  animateWordStarReward(earned);
  showToast(earned === "big" ? "20 颗 Word Camp 小星合成 1 颗全局大星！" : "单词达到 3 分，获得 1 颗 Word Camp 小星！", "good");
}

function awardKanaMasteryReward(progressKey) {
  state.kanaRewards = normalizeKanaRewards(state.kanaRewards);
  if (state.kanaRewards.awardedKeys.includes(progressKey)) return;
  state.kanaRewards.awardedKeys.push(progressKey);
  state.kanaRewards.masteryCredits += 1;
  let earned = "";
  if (state.kanaRewards.masteryCredits >= kanaMasteriesPerSmallStar) {
    state.kanaRewards.masteryCredits -= kanaMasteriesPerSmallStar;
    earned = awardSmallStars(state.kanaRewards, 1, kanaSmallStarsPerBig);
  }
  persistKanaRewards();
  if (earned === "big") persistGlobalRewards();
  renderKanaRewards();
  if (earned) {
    playStarCue(earned);
    animateKanaStarReward(earned);
    showToast(earned === "big" ? "Kana 12 颗小星合成 1 颗全局大星！" : "新掌握 2 个假名，获得 1 颗 Kana 小星！", "good");
  } else {
    showToast("新掌握 1 个假名，再掌握 1 个换小星。", "good");
  }
}

function awardPhonicsChallengeReward(unitIndex) {
  state.phonicsRewards = normalizePhonicsRewards(state.phonicsRewards);
  if (state.phonicsRewards.awardedUnits.includes(unitIndex)) return;
  state.phonicsRewards.awardedUnits.push(unitIndex);
  const earned = awardSmallStars(state.phonicsRewards, phonicsSmallStarsPerChallenge, phonicsSmallStarsPerBig);
  persistPhonicsRewards();
  if (earned === "big") persistGlobalRewards();
  renderPhonicsRewards();
  playStarCue(earned);
  animatePhonicsStarReward(earned);
  showToast(earned === "big" ? "Phonics 6 颗小星合成 1 颗全局大星！" : "完成单元挑战，获得 2 颗 Phonics 小星！", "good");
}


function loadCustomWordBanks() {
  try {
    const banks = JSON.parse(localStorage.getItem("jojoCustomWordBanks") || "[]");
    return Array.isArray(banks) ? banks : [];
  } catch {
    return [];
  }
}

function saveCustomWordBanks() {
  saveLocalItem("jojoCustomWordBanks", JSON.stringify(state.customWordBanks));
  invalidateWordCaches();
  saveSharedState({ customWordBanks: state.customWordBanks, wordBank: state.wordBank });
}

function normalizedWordText(word) {
  return String(word?.word || "").trim().toLowerCase();
}

function ensureDifficultWordBank() {
  let bank = state.customWordBanks.find((item) => item.id === difficultWordBankId);
  if (!bank) {
    bank = {
      id: difficultWordBankId,
      title: difficultWordBankTitle,
      source: "Word Camp",
      importedAt: new Date().toISOString(),
      words: []
    };
    state.customWordBanks.push(bank);
  }
  bank.title = bank.title || difficultWordBankTitle;
  bank.source = bank.source || "Word Camp";
  bank.words = Array.isArray(bank.words) ? bank.words : [];
  state.deletedWordBanks = state.deletedWordBanks.filter((id) => id !== difficultWordBankId);
  wordBankLabels[difficultWordBankId] = bank.title;
  return bank;
}

function wordInDifficultBank(word = state.word) {
  const key = normalizedWordText(word);
  if (!key) return false;
  const bank = state.customWordBanks.find((item) => item.id === difficultWordBankId);
  return Array.isArray(bank?.words) && bank.words.some((item) => normalizedWordText(item) === key);
}

function updateDifficultWordButton() {
  const button = $("#markDifficultWord");
  if (!button) return;
  const hasWord = Boolean(state.word?.word);
  const card = $("#words .word-card");
  const isStatus = Boolean(card?.classList.contains("word-card-status"));
  const isAdded = hasWord && wordInDifficultBank(state.word);
  button.hidden = !hasWord || isStatus;
  button.disabled = !hasWord || isStatus;
  button.classList.toggle("is-added", Boolean(isAdded));
  button.setAttribute("aria-pressed", String(Boolean(isAdded)));
  button.textContent = isAdded ? "×" : "!";
  button.setAttribute("aria-label", isAdded ? "从重难点词库移除" : "加入重难点词库");
  button.title = isAdded ? "从重难点词库移除" : "加入重难点词库";
}

function toggleCurrentWordDifficulty() {
  if (!state.word?.word) return;
  const bank = ensureDifficultWordBank();
  const key = normalizedWordText(state.word);
  const existingIndex = bank.words.findIndex((word) => normalizedWordText(word) === key);
  const removed = existingIndex >= 0;
  const wasViewingDifficultBank = currentWordBank() === difficultWordBankId;
  if (removed) {
    bank.words.splice(existingIndex, 1);
  } else {
    bank.words.push({
      ...cloneWordForCustomBank(state.word),
      addedAt: new Date().toISOString()
    });
  }
  persistWordBankCatalog();
  updateDifficultWordButton();
  showToast(removed ? `已移出重难点词库：${state.word.word}` : `已加入重难点词库：${state.word.word}`, "good");
  if (removed && wasViewingDifficultBank) {
    newWordQuestion();
  }
}

function installCustomWordBankLabels() {
  Object.keys(wordBankLabels).forEach((bank) => delete wordBankLabels[bank]);
  Object.assign(wordBankLabels, baseWordBankLabels);
  state.customWordBanks.forEach((bank) => {
    wordBankLabels[bank.id] = bank.title;
  });
  Object.entries(state.appSettings.wordBankTitleOverrides || {}).forEach(([bank, title]) => {
    if (wordBankLabels[bank] && String(title || "").trim()) wordBankLabels[bank] = String(title).trim();
  });
}

function invalidateWordCaches() {
  wordCacheVersion += 1;
  cachedCustomWords = null;
  cachedAllWords = null;
  selectedBankCache = { key: "", words: [] };
}

function customWords() {
  if (!cachedCustomWords) {
    cachedCustomWords = state.customWordBanks.flatMap((bank) => bank.words.map((word) => ({ ...word, banks: [bank.id] })));
  }
  return cachedCustomWords;
}

function hasUsableMeaning(word) {
  return Boolean(word?.word && word?.zh && !String(word.zh).startsWith("KET官方词汇："));
}

function allWords() {
  if (!cachedAllWords) {
    cachedAllWords = [...words, ...customWords()].filter(hasUsableMeaning);
  }
  return cachedAllWords;
}

function slugifyWordBankId(value) {
  const slug = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return slug || `word-bank-${Date.now()}`;
}

function loadSongHistory() {
  try {
    const history = JSON.parse(localStorage.getItem("jojoSongHistory") || "[]");
    return Array.isArray(history) ? history.filter((item) => item?.analysis).slice(0, 20) : [];
  } catch {
    return [];
  }
}

function normalizeCardCottageTotal(value = cardCottageDefaultTotal) {
  const total = Math.round(Number(value));
  if (!Number.isFinite(total)) return cardCottageDefaultTotal;
  return Math.max(cardCottageMinTotal, Math.min(cardCottageMaxTotal, total));
}

function currentCardCottageTotal() {
  return normalizeCardCottageTotal(state?.cardCottage?.totalCards);
}

function normalizeCardCottageSlots(slots = []) {
  const normalized = Array.from({ length: cardCottageSlotTotal }, (_, index) => {
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
  return normalized;
}

function filledCardCottageSlotIndexes(slots = state?.cardCottage?.slots) {
  const normalized = normalizeCardCottageSlots(slots);
  return normalized.map((slot, index) => slot?.src ? index : -1).filter((index) => index >= 0);
}

function shuffledCardAssignments(slots = state?.cardCottage?.slots, totalCards = cardCottageDefaultTotal) {
  const total = normalizeCardCottageTotal(totalCards);
  const uploadedSlots = filledCardCottageSlotIndexes(slots);
  const sourceIndexes = uploadedSlots.length ? uploadedSlots : cardCottagePhotoSources.map((_, index) => index);
  const pool = [];
  while (pool.length < total) {
    sourceIndexes.forEach((index) => pool.push(index));
  }
  const assignments = pool.slice(0, total);
  for (let index = assignments.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [assignments[index], assignments[swapIndex]] = [assignments[swapIndex], assignments[index]];
  }
  return assignments;
}

function normalizeCardCottageState(value = {}) {
  const totalCards = normalizeCardCottageTotal(value.totalCards);
  const rawSlots = normalizeCardCottageSlots(value.slots);
  const hasAnySlot = rawSlots.some((slot) => slot?.src);
  const shouldSeedDefaultSlots = !value.defaultSlotsSeeded && !hasAnySlot;
  const slots = shouldSeedDefaultSlots ? defaultCardCottageSlots() : rawSlots;
  const validSources = new Set(filledCardCottageSlotIndexes(slots));
  if (!validSources.size) {
    cardCottagePhotoSources.forEach((_, index) => validSources.add(index));
  }
  const incomingAssignments = Array.isArray(value.assignments)
    ? value.assignments.map((item) => Number(item)).filter((item) => validSources.has(item)).slice(0, totalCards)
    : [];
  const assignments = incomingAssignments.length === totalCards
    ? incomingAssignments
    : [...incomingAssignments, ...shuffledCardAssignments(slots, totalCards - incomingAssignments.length)];
  const revealed = Array.isArray(value.revealed)
    ? value.revealed.map(Number).filter((item) => item >= 0 && item < totalCards)
    : [];
  return { assignments, revealed: [...new Set(revealed)], slots, defaultSlotsSeeded: true, totalCards };
}

function loadCardCottageState() {
  try {
    const cardState = normalizeCardCottageState(JSON.parse(localStorage.getItem("jojoCardCottage") || "{}"));
    saveLocalItem("jojoCardCottage", JSON.stringify(cardState));
    return cardState;
  } catch {
    const cardState = normalizeCardCottageState();
    saveLocalItem("jojoCardCottage", JSON.stringify(cardState));
    return cardState;
  }
}

function saveCardCottageState() {
  saveLocalItem("jojoCardCottage", JSON.stringify(state.cardCottage));
  saveSharedState({ cardCottage: state.cardCottage });
  invalidateOssImageStorageStatus();
}

function saveSongHistory() {
  state.songHistory = state.songHistory.filter((item) => item?.analysis).slice(0, 20);
  saveLocalItem("jojoSongHistory", JSON.stringify(state.songHistory));
  saveSharedState({ songHistory: state.songHistory });
  renderSongHistory();
}

function makeSongHistoryEntry(analysis, payload) {
  const title = analysis.title || payload.title || payload.selectedSong?.title || "Song Notes";
  const artist = analysis.artist || payload.artist || payload.selectedSong?.artist || "";
  return {
    id: slugifyWordBankId(`song-${artist || "unknown"}-${title}`),
    title,
    artist,
    depth: payload.depth,
    query: payload.query,
    selectedSong: payload.selectedSong,
    lyrics: payload.lyrics,
    analysis,
    analyzedAt: new Date().toISOString()
  };
}

function persistSongAnalysis(analysis, payload) {
  const entry = makeSongHistoryEntry(analysis, payload);
  state.activeSongHistoryId = entry.id;
  state.songHistory = [entry, ...state.songHistory.filter((item) => item.id !== entry.id)].slice(0, 20);
  saveSongHistory();
}

function songTitleFromPayload(payload) {
  return payload.title || payload.selectedSong?.title || payload.query || "新歌曲";
}

function songArtistFromPayload(payload) {
  return payload.artist || payload.selectedSong?.artist || "";
}

function beginSongWorkflow({ clearSelectedSong = false } = {}) {
  state.songWorkflowVersion += 1;
  clearSongCandidates({ clearSelectedSong });
  return state.songWorkflowVersion;
}

function isCurrentSongWorkflow(version) {
  return version === state.songWorkflowVersion;
}

function clearSongCandidates({ clearSelectedSong = false } = {}) {
  state.songCandidates = [];
  if (clearSelectedSong) state.selectedSong = null;
  const candidateContainer = $("#songCandidates");
  if (candidateContainer) candidateContainer.innerHTML = "";
}

function normalizeImportedWord(raw, bankId, index, zhPool) {
  const word = String(raw.word || raw.english || "").trim();
  const zh = String(raw.zh || raw.chinese || raw.meaning || "").trim();
  if (!word || !zh || zh.startsWith("KET官方词汇：")) return null;
  const speakText = String(raw.speakText || raw.audioText || word).trim();
  const spelling = String(raw.spelling || speakText).toLowerCase().replace(/[^a-z]/g, "");
  const distractors = Array.isArray(raw.distractors) ? raw.distractors.map(String).filter(Boolean).slice(0, 3) : [];
  let offset = 1;
  while (distractors.length < 3 && zhPool.length > 1) {
    const candidate = zhPool[(index + offset * 7) % zhPool.length];
    if (candidate && candidate !== zh && !distractors.includes(candidate)) distractors.push(candidate);
    offset += 1;
  }
  return {
    word,
    speakText,
    spelling,
    ipa: String(raw.ipa || raw.phonetic || raw.pronunciation || "待补充").trim(),
    pos: String(raw.pos || raw.partOfSpeech || "word").trim(),
    zh,
    banks: [bankId],
    emoji: String(raw.emoji || ""),
    phonics: Array.isArray(raw.phonics) ? raw.phonics.map(String) : [],
    syllables: Array.isArray(raw.syllables) && raw.syllables.length ? raw.syllables.map(String) : [speakText],
    example: String(raw.example || raw.sentence || `Use "${word}" in a sentence.`).trim(),
    distractors
  };
}

function parseImportedWordBank() {
  const rawText = $("#importWordBankJson").value.trim();
  if (!rawText) throw new Error("请先粘贴词汇表 JSON。");
  let payload;
  try {
    payload = JSON.parse(rawText);
  } catch {
    throw new Error("JSON 格式不正确。请确认没有 Markdown 代码围栏、注释或多余逗号。");
  }
  const wordsPayload = Array.isArray(payload) ? payload : payload.words;
  if (!Array.isArray(wordsPayload)) throw new Error("JSON 必须包含 words 数组。");
  const title = ($("#importBankTitle").value.trim() || payload.title || "Imported Word Bank").trim();
  const bankId = slugifyWordBankId($("#importBankId").value.trim() || payload.id || title);
  const zhPool = wordsPayload.map((item) => String(item.zh || item.chinese || item.meaning || "").trim()).filter(Boolean);
  const importedWords = wordsPayload
    .map((item, index) => normalizeImportedWord(item, bankId, index, zhPool))
    .filter(Boolean);
  const seen = new Set();
  const uniqueWords = importedWords.filter((item) => {
    const key = item.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (uniqueWords.length < minWordsPerBank) {
    throw new Error(`这个词库只有 ${uniqueWords.length} 个有效词条。请至少导入 ${minWordsPerBank} 个词。`);
  }
  return {
    id: bankId,
    title,
    source: String(payload.source || "").trim(),
    importedAt: new Date().toISOString(),
    words: uniqueWords.map(({ banks, ...word }) => word)
  };
}

function importWordBankFromForm() {
  try {
    const bank = parseImportedWordBank();
    state.customWordBanks = state.customWordBanks.filter((item) => item.id !== bank.id);
    state.customWordBanks.push(bank);
    wordBankLabels[bank.id] = bank.title;
    state.deletedWordBanks = state.deletedWordBanks.filter((id) => id !== bank.id);
    state.wordBank = bank.id;
    saveLocalItem("jojoDeletedWordBanks", JSON.stringify(state.deletedWordBanks));
    saveLocalItem("jojoWordBank", state.wordBank);
    saveCustomWordBanks();
    syncWordBankSelect();
    renderWordStudyState({ library: true, syncSelect: true });
    newWordQuestion();
    $("#importWordBankStatus").textContent = `已导入“${bank.title}”，共 ${bank.words.length} 个词。`;
    $("#importWordBankStatus").className = "fine-print feedback good";
    showToast(`已导入词库：${bank.title}`, "good");
  } catch (error) {
    $("#importWordBankStatus").textContent = error.message;
    $("#importWordBankStatus").className = "fine-print feedback bad";
  }
}

function openImportGuide() {
  $("#importGuideText").textContent = wordImportGuideText;
  $("#importGuideExample").textContent = JSON.stringify(wordImportGuideExample, null, 2);
  $("#importGuideDialog").showModal();
}

function closeImportGuide() {
  $("#importGuideDialog").close();
}

function openImportWordBankDialog() {
  $("#importWordDialog").showModal();
}

function closeImportWordBankDialog() {
  $("#importWordDialog").close();
}

function currentWordBank() {
  return state.wordBank || "ket-official";
}

function rawWordBankSize(bank) {
  if (bank === "all") return allWords().length;
  return allWords().filter((word) => word.banks.includes(bank)).length;
}

function repairCurrentWordBank() {
  const bank = currentWordBank();
  if (bank === "all") return bank;
  const usable = wordBankLabels[bank] && !isWordBankDeleted(bank) && isValidWordBank(bank);
  if (usable) return bank;
  state.wordBank = wordBankLabels["ket-official"] && rawWordBankSize("ket-official") >= minWordsPerBank ? "ket-official" : "all";
  saveLocalItem("jojoWordBank", state.wordBank);
  saveSharedState({ wordBank: state.wordBank });
  return state.wordBank;
}

function isWordBankDeleted(bank) {
  return state.deletedWordBanks.includes(bank);
}

function wordBankSize(bank) {
  if (bank === "all") return allWords().filter((word) => word.banks.some((item) => isValidWordBank(item))).length;
  return rawWordBankSize(bank);
}

function isDifficultWordBank(bank) {
  return bank === difficultWordBankId;
}

function isValidWordBank(bank) {
  if (isDifficultWordBank(bank)) return rawWordBankSize(bank) > 0;
  return bank === "all" || wordBankSize(bank) >= minWordsPerBank;
}

function availableWordBankKeys() {
  return Object.keys(wordBankLabels).filter((bank) => bank === "all" || (isValidWordBank(bank) && !isWordBankDeleted(bank)));
}

function syncWordBankSelect() {
  const select = $("#settingsWordBank");
  if (!select) return;
  installCustomWordBankLabels();
  repairCurrentWordBank();
  const availableBanks = availableWordBankKeys();
  select.innerHTML = availableBanks.map((bank) => `<option value="${escapeHtml(bank)}">${escapeHtml(wordBankLabels[bank] || bank)}</option>`).join("");
  if (!availableBanks.includes(currentWordBank())) {
    state.wordBank = availableBanks.find((bank) => bank !== "all") || "all";
    saveLocalItem("jojoWordBank", state.wordBank);
  }
  select.value = currentWordBank();
}

function wordBankManagementKeys(scope = "word") {
  installCustomWordBankLabels();
  return Object.keys(wordBankLabels)
    .filter((bank) => bank !== "all" && !isWordBankDeleted(bank))
    .filter((bank) => scope !== "song" || isSongWordBank(bank));
}

function isSongWordBank(bank) {
  const customBank = state.customWordBanks.find((item) => item.id === bank);
  return String(bank || "").startsWith("song-")
    || String(customBank?.title || "").startsWith("Song:")
    || String(customBank?.source || "").toLowerCase().includes("song");
}

function selectedBankSet(scope = "word") {
  return scope === "song" ? selectedSongBankIds : selectedWordBankIds;
}

function bankManagerElements(scope = "word") {
  return scope === "song"
    ? {
        checklist: $("#songBankChecklist"),
        summary: $("#songBankSelectionSummary"),
        nameInput: $("#songBankNameInput"),
        status: $("#songSettingsDialog .fine-print")
      }
    : {
        checklist: $("#wordBankChecklist"),
        summary: $("#wordBankSelectionSummary"),
        nameInput: $("#wordBankNameInput"),
        status: $("#wordSettingsStatus")
      };
}

function setBankManagerStatus(scope, message, className = "feedback good") {
  const target = scope === "song" ? $("#songBankSelectionSummary") : $("#wordSettingsStatus");
  if (!target) return;
  target.textContent = message;
  target.className = scope === "song" ? "" : className;
}

function wordBankTypeLabel(bank) {
  return state.customWordBanks.some((item) => item.id === bank) ? "自定义" : "内置";
}

function bankWords(bank) {
  return allWords().filter((word) => word.banks.includes(bank));
}

function renderWordEntryBankSelect() {
  const select = $("#wordEntryBankSelect");
  if (!select) return;
  const banks = wordBankManagementKeys("word");
  select.innerHTML = banks.map((bank) => `<option value="${escapeHtml(bank)}">${escapeHtml(wordBankLabels[bank] || bank)}</option>`).join("");
  const preferred = currentWordBank() !== "all" && banks.includes(currentWordBank()) ? currentWordBank() : banks[0];
  if (preferred) select.value = preferred;
}

function renderBankManager(scope = "word") {
  const elements = bankManagerElements(scope);
  if (!elements.checklist) return;
  const keys = wordBankManagementKeys(scope);
  const selected = selectedBankSet(scope);
  [...selected].forEach((bank) => {
    if (!keys.includes(bank)) selected.delete(bank);
  });
  elements.summary.textContent = selected.size ? `已选择 ${selected.size} 个词库` : "未选择词库";
  elements.checklist.innerHTML = keys.length ? keys.map((bank) => `
    <label class="word-bank-check">
      <input type="checkbox" data-bank="${escapeHtml(bank)}" ${selected.has(bank) ? "checked" : ""}>
      <span>
        <strong>${escapeHtml(wordBankLabels[bank] || bank)}</strong>
        <small>${wordBankTypeLabel(bank)} · ${bankWords(bank).length} 词</small>
      </span>
    </label>
  `).join("") : `<p class="fine-print">${scope === "song" ? "还没有 Song Notes 自动生成的词库。" : "还没有可管理的词库。"}</p>`;
  elements.checklist.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) selected.add(input.dataset.bank);
      else selected.delete(input.dataset.bank);
      renderBankManager(scope);
    });
  });
}

function renderWordBankManagers() {
  renderBankManager("word");
  renderBankManager("song");
  renderWordEntryBankSelect();
}

function uniqueWordBankId(base) {
  const root = slugifyWordBankId(base);
  let id = root;
  let index = 2;
  while (wordBankLabels[id] || state.customWordBanks.some((bank) => bank.id === id)) {
    id = `${root}-${index}`;
    index += 1;
  }
  return id;
}

function persistWordBankCatalog(options = {}) {
  invalidateWordCaches();
  installCustomWordBankLabels();
  repairCurrentWordBank();
  saveLocalItem("jojoDeletedWordBanks", JSON.stringify(state.deletedWordBanks));
  saveLocalItem("jojoWordBank", state.wordBank);
  saveCustomWordBanks();
  saveAppSettingsState();
  if (options.progress) persistWordProgress();
  saveSharedState({
    deletedWordBanks: state.deletedWordBanks,
    wordBank: state.wordBank,
    ...(options.progress ? { wordProgress: state.wordProgress } : {})
  });
  syncWordBankSelect();
  renderWordBankManagers();
  renderWordStudyState({ library: true, syncSelect: true });
}

function renameSelectedBanks(scope = "word") {
  const selected = [...selectedBankSet(scope)];
  const name = bankManagerElements(scope).nameInput?.value.trim();
  if (selected.length !== 1) {
    setBankManagerStatus(scope, "请选择 1 个词库再改名。", "feedback bad");
    return;
  }
  if (!name) {
    setBankManagerStatus(scope, "请输入新的词库名称。", "feedback bad");
    return;
  }
  const bankId = selected[0];
  const customBank = state.customWordBanks.find((bank) => bank.id === bankId);
  if (customBank) customBank.title = name;
  else state.appSettings.wordBankTitleOverrides = { ...(state.appSettings.wordBankTitleOverrides || {}), [bankId]: name };
  wordBankLabels[bankId] = name;
  persistWordBankCatalog();
  setBankManagerStatus(scope, `已改名为“${name}”。`);
}

function clearWordProgressForBank(bank) {
  bankWords(bank).forEach((word) => {
    ["meaning", "sound", "spelling"].forEach((mode) => {
      delete state.wordProgress[`${mode}:${bank}:${word.word}`];
      delete state.wordProgress[`${mode}:${word.word}`];
    });
  });
}

function deleteSelectedBanks(scope = "word") {
  const selected = [...selectedBankSet(scope)].filter((bank) => bank !== "all");
  if (!selected.length) {
    setBankManagerStatus(scope, "请选择要删除的词库。", "feedback bad");
    return;
  }
  const labels = selected.map((bank) => wordBankLabels[bank] || bank).join("、");
  if (!window.confirm(`确认删除这些词库吗？\n${labels}`)) return;
  selected.forEach((bank) => {
    clearWordProgressForBank(bank);
    const customIndex = state.customWordBanks.findIndex((item) => item.id === bank);
    if (customIndex >= 0) state.customWordBanks.splice(customIndex, 1);
    else state.deletedWordBanks = Array.from(new Set([...state.deletedWordBanks, bank]));
    delete wordBankLabels[bank];
    if (state.appSettings.wordBankTitleOverrides) delete state.appSettings.wordBankTitleOverrides[bank];
    selectedWordBankIds.delete(bank);
    selectedSongBankIds.delete(bank);
  });
  state.wordBank = availableWordBankKeys().find((key) => key !== "all" && !selected.includes(key)) || "all";
  persistWordBankCatalog({ progress: true });
  newWordQuestion();
  setBankManagerStatus(scope, `已删除 ${selected.length} 个词库。`);
}

function cloneWordForCustomBank(word) {
  const { banks, ...payload } = word;
  return { ...payload };
}

function mergeSelectedBanks(scope = "word") {
  const selected = [...selectedBankSet(scope)];
  if (selected.length < 2) {
    setBankManagerStatus(scope, "请选择至少 2 个词库再合并。", "feedback bad");
    return;
  }
  const typedName = bankManagerElements(scope).nameInput?.value.trim();
  const title = typedName || selected.map((bank) => wordBankLabels[bank] || bank).join(" + ");
  const id = uniqueWordBankId(`${scope === "song" ? "song-" : ""}merged-${title}`);
  const seen = new Set();
  const mergedWords = selected.flatMap(bankWords).filter((word) => {
    const key = String(word.word || "").toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map(cloneWordForCustomBank);
  if (mergedWords.length < minWordsPerBank) {
    setBankManagerStatus(scope, `合并后只有 ${mergedWords.length} 个有效词条，少于 ${minWordsPerBank} 个。`, "feedback bad");
    return;
  }
  const removedCustomIds = new Set(state.customWordBanks.filter((bank) => selected.includes(bank.id)).map((bank) => bank.id));
  state.customWordBanks = state.customWordBanks.filter((bank) => !selected.includes(bank.id));
  state.customWordBanks.push({
    id,
    title,
    source: selected.map((bank) => wordBankLabels[bank] || bank).join(" + "),
    importedAt: new Date().toISOString(),
    words: mergedWords
  });
  selected.forEach((bank) => {
    if (state.appSettings.wordBankTitleOverrides) delete state.appSettings.wordBankTitleOverrides[bank];
    if (removedCustomIds.has(bank)) delete wordBankLabels[bank];
    selectedWordBankIds.delete(bank);
    selectedSongBankIds.delete(bank);
  });
  wordBankLabels[id] = title;
  state.wordBank = id;
  selectedBankSet(scope).add(id);
  persistWordBankCatalog();
  newWordQuestion();
  setBankManagerStatus(scope, `已合并为“${title}”，共 ${mergedWords.length} 个词。`);
}

function editableWordBankId(bank) {
  const customBank = state.customWordBanks.find((item) => item.id === bank);
  if (customBank) return customBank.id;
  const title = `${wordBankLabels[bank] || bank} · 自定义副本`;
  const id = uniqueWordBankId(`${bank}-manual`);
  state.customWordBanks.push({
    id,
    title,
    source: wordBankLabels[bank] || bank,
    importedAt: new Date().toISOString(),
    words: bankWords(bank).map(cloneWordForCustomBank)
  });
  wordBankLabels[id] = title;
  state.wordBank = id;
  return id;
}

function upsertWordEntryFromForm() {
  const targetBank = $("#wordEntryBankSelect").value;
  const wordText = $("#wordEntryWordInput").value.trim();
  const zh = $("#wordEntryZhInput").value.trim();
  if (!targetBank || targetBank === "all") {
    $("#wordSettingsStatus").textContent = "请选择一个具体词库。";
    $("#wordSettingsStatus").className = "feedback bad";
    return;
  }
  if (!wordText || !zh) {
    $("#wordSettingsStatus").textContent = "英文和中文释义都要填写。";
    $("#wordSettingsStatus").className = "feedback bad";
    return;
  }
  const editableBank = editableWordBankId(targetBank);
  const bank = state.customWordBanks.find((item) => item.id === editableBank);
  const normalized = normalizeImportedWord({
    word: wordText,
    zh,
    ipa: $("#wordEntryIpaInput").value.trim() || "待补充",
    pos: $("#wordEntryPosInput").value.trim() || "word",
    speakText: wordText,
    spelling: wordText.toLowerCase().replace(/[^a-z]/g, ""),
    example: "",
    phonics: [],
    syllables: [],
    distractors: []
  }, editableBank, bank.words.length, [zh]);
  if (!normalized) return;
  const existingIndex = bank.words.findIndex((item) => String(item.word || "").toLowerCase() === normalized.word.toLowerCase());
  const { banks, ...wordPayload } = normalized;
  if (existingIndex >= 0) bank.words[existingIndex] = wordPayload;
  else bank.words.push(wordPayload);
  persistWordBankCatalog();
  $("#wordEntryBankSelect").value = editableBank;
  $("#wordSettingsStatus").textContent = existingIndex >= 0 ? `已修改“${wordPayload.word}”。` : `已新增“${wordPayload.word}”。`;
  $("#wordSettingsStatus").className = "feedback good";
}

function fillWordEntryEditor(wordText) {
  const bank = currentWordBank() !== "all" ? currentWordBank() : ($("#wordEntryBankSelect").value || wordBankManagementKeys("word")[0]);
  const word = bankWords(bank).find((item) => item.word === wordText) || allWords().find((item) => item.word === wordText);
  if (!word) return;
  $("#wordEntryBankSelect").value = bank;
  $("#wordEntryWordInput").value = word.word || "";
  $("#wordEntryZhInput").value = word.zh || "";
  $("#wordEntryIpaInput").value = word.ipa || "";
  $("#wordEntryPosInput").value = word.pos || "";
  $("#wordSettingsStatus").textContent = `正在编辑“${word.word}”。`;
  $("#wordSettingsStatus").className = "feedback";
}

function wordsForSelectedBank() {
  repairCurrentWordBank();
  const bank = currentWordBank();
  const cacheKey = `${wordCacheVersion}:${bank}:${state.deletedWordBanks.join("|")}`;
  if (selectedBankCache.key === cacheKey) return selectedBankCache.words;
  const activeWords = allWords().filter((word) => word.banks.some((item) => isValidWordBank(item) && !isWordBankDeleted(item)));
  const bankWords = bank === "all" ? activeWords : activeWords.filter((word) => word.banks.includes(bank) && isValidWordBank(bank) && !isWordBankDeleted(bank));
  selectedBankCache = { key: cacheKey, words: bankWords };
  return bankWords;
}

function loadAiSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem("jojoAiSettings") || "{}");
    delete stored.apiKey;
    return { ...defaultAiSettings, ...stored, apiKey: "" };
  } catch {
    return { ...defaultAiSettings };
  }
}

function loadOssSettings() {
  try {
    const stored = JSON.parse(localStorage.getItem("jojoOssSettings") || "{}");
    delete stored.accessKeyId;
    delete stored.accessKeySecret;
    return { ...defaultOssSettings, ...stored, accessKeyId: "", accessKeySecret: "" };
  } catch {
    return { ...defaultOssSettings };
  }
}

function loadHomeBackground() {
  try {
    return { ...defaultHomeBackground, ...JSON.parse(localStorage.getItem("jojoHomeBackground") || "{}") };
  } catch {
    return { ...defaultHomeBackground };
  }
}

function normalizeHomeBackgroundPresets(presets = []) {
  const byId = new Map(Array.isArray(presets) ? presets.map((item) => [item?.id, item]) : []);
  return homeBackgroundPresets.map((fallback) => {
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

function loadHomeBackgroundPresets() {
  try {
    return normalizeHomeBackgroundPresets(JSON.parse(localStorage.getItem("jojoHomeBackgroundPresets") || "[]"));
  } catch {
    return normalizeHomeBackgroundPresets();
  }
}

function storeOssSettingsPublic(settings) {
  state.ossSettings = { ...defaultOssSettings, ...state.ossSettings, ...settings, accessKeyId: "", accessKeySecret: "" };
  saveLocalItem("jojoOssSettings", JSON.stringify({
    provider: state.ossSettings.provider,
    region: state.ossSettings.region,
    endpoint: state.ossSettings.endpoint,
    bucket: state.ossSettings.bucket,
    customDomain: state.ossSettings.customDomain,
    prefix: state.ossSettings.prefix,
    useSsl: state.ossSettings.useSsl !== false,
    hasAccessKeyId: Boolean(state.ossSettings.hasAccessKeyId),
    hasAccessKeySecret: Boolean(state.ossSettings.hasAccessKeySecret)
  }));
}

function ossUploadReady() {
  if (demoMode) return true;
  const settings = state.ossSettings || {};
  return Boolean(
    serverPersistenceAvailable
    && settings.bucket
    && (settings.endpoint || settings.region)
    && settings.hasAccessKeyId
    && settings.hasAccessKeySecret
  );
}

function ossUploadBlockerMessage() {
  if (demoMode) return "Demo 模式不会上传到 OSS。";
  const settings = state.ossSettings || {};
  if (!serverPersistenceAvailable) return "本机共享服务未连接，无法上传到 OSS。";
  if (!settings.bucket) return "请先在主页齿轮填写 OSS Bucket。";
  if (!settings.endpoint && !settings.region) return "请先填写 OSS Endpoint 或 Region。";
  if (!settings.hasAccessKeyId || !settings.hasAccessKeySecret) return "请先保存 OSS AccessKey ID 和 AccessKey Secret。";
  return "OSS 配置尚未准备好。";
}

function assertOssUploadReady() {
  if (!ossUploadReady()) throw new Error(`${ossUploadBlockerMessage()} 图片不会保存到本机或服务器目录。`);
}

function setOssStatus(message, tone = "") {
  const status = $("#ossSettingsStatus");
  if (!status) return;
  status.textContent = message;
  status.className = `feedback ${tone}`.trim();
}

function ossImageStorageStatus() {
  const presets = normalizeHomeBackgroundPresets(state.homeBackgroundPresets);
  const presetPending = presets.filter((preset) => preset.storage !== "oss" || !preset.objectKey).length;
  const galleryItems = Array.isArray(state.gallery) ? state.gallery : [];
  const galleryPending = galleryItems.filter((art) => imageSourceNeedsOss(art.image)).length;
  const cardSlots = normalizeCardCottageSlots(state.cardCottage?.slots).filter((slot) => slot?.src);
  const cardPending = cardSlots.filter((slot) => imageSourceNeedsOss(slot.src)).length;
  const customBackgroundPending = state.homeBackground?.mode === "custom" && imageSourceNeedsOss(state.homeBackground.src) ? 1 : 0;
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

function invalidateOssImageStorageStatus() {
  latestOssImageStorageStatus = null;
  latestDeploymentStatus = null;
  renderDeploymentStatus();
}

function renderDeploymentStatus(statusOverride = null) {
  const list = $("#deploymentStatusList");
  const summary = $("#deploymentStatusSummary");
  if (!list || !summary) return;
  const status = statusOverride || latestDeploymentStatus;
  if (!status) {
    summary.textContent = serverPersistenceAvailable ? "正在检查公网运行状态..." : "本机共享服务未连接。";
    list.innerHTML = "";
    return;
  }
  const rows = [
    ["共享状态", status.state?.privateStateFile ? "已连接" : "待初始化", Boolean(status.state?.privateStateFile)],
    ["Song Notes", `${status.state?.songHistoryCount || 0} 首历史可恢复`, true],
    ["OSS", status.oss?.configured ? "配置完整" : "待配置", Boolean(status.oss?.configured)],
    ["新图片上传", status.oss?.uploadsReady || status.oss?.configured ? "保存到 OSS" : "待 OSS 配置", Boolean(status.oss?.uploadsReady || status.oss?.configured)],
    ["图片存储", status.migration?.pending ? `${status.migration.pending} 项待同步` : "已就绪", !status.migration?.pending]
  ];
  summary.textContent = status.internetReady
    ? "当前状态已满足公网运行的图片存储要求。"
    : status.migration?.pending
      ? `还有 ${status.migration.pending} 项图片需要同步到 OSS。`
      : (status.issues || []).join(" ") || "还有公网运行检查项需要处理。";
  list.innerHTML = rows.map(([label, value, clear]) => `
    <li class="${clear ? "is-clear" : ""}">
      <span>${escapeHtml(label)}</span>
      <b>${escapeHtml(value)}</b>
    </li>
  `).join("");
}

async function refreshDeploymentStatus() {
  if (!serverPersistenceAvailable) {
    latestDeploymentStatus = null;
    renderDeploymentStatus();
    return null;
  }
  try {
    const response = await fetch(apiUrl("/api/deployment/status"), { cache: "no-store" });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.error) throw new Error(result.error || `部署状态接口返回 ${response.status}`);
    latestDeploymentStatus = result;
    renderDeploymentStatus(result);
    return result;
  } catch {
    latestDeploymentStatus = null;
    renderDeploymentStatus();
    return null;
  }
}

async function runOssStorageCheck() {
  try {
    if (!serverPersistenceAvailable) throw new Error("本机服务未连接，无法检查图片存储。");
    setOssStatus("正在测试 OSS 上传、公网读取，并同步已有图片...", "good");
    const response = await fetch(apiUrl("/api/oss/migrate-images"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.error) {
      throw new Error(result.error || `OSS 图片存储接口返回 ${response.status}`);
    }
    if (result.state) applySharedState(result.state);
    latestOssImageStorageStatus = result.status || null;
    galleryPersistenceReady = false;
    await loadSharedGallery();
    renderHomeBackgroundSettings();
    renderGallery({ persist: false });
    renderCardCottage();
    refreshDeploymentStatus();
    const pending = result.status?.pending ?? ossImageStorageStatus().pending;
    if (pending) {
      setOssStatus(`已同步 ${result.migrated || 0} 张图片，但仍有 ${pending} 项需要检查。`, "bad");
    } else {
      const skippedText = result.skipped ? `，跳过 ${result.skipped} 项已就绪资源` : "";
      setOssStatus(`OSS 测试通过，图片存储已就绪${result.migrated ? `，本次同步 ${result.migrated} 张图片` : ""}${skippedText}。`, "good");
    }
  } catch (error) {
    setOssStatus(`OSS 图片存储检查失败：${error.message}`, "bad");
    refreshDeploymentStatus();
  }
}

async function saveOssSettingsFromForm() {
  if (!serverPersistenceAvailable && location.protocol === "file:") {
    await loadSharedState();
  }
  if (!serverPersistenceAvailable && location.protocol === "file:") {
    setOssStatus(`本机服务没有连接，无法安全保存 OSS Key。请先运行本程序服务，再用 ${localApiOrigin}/ 打开。`, "bad");
    throw new Error("本机服务未启动，无法保存 OSS 配置。");
  }
  const accessKeyId = $("#ossAccessKeyId").value.trim();
  const accessKeySecret = $("#ossAccessKeySecret").value.trim();
  const next = {
    provider: "aliyun",
    region: $("#ossRegion").value.trim(),
    endpoint: $("#ossEndpoint").value.trim(),
    bucket: $("#ossBucket").value.trim(),
    accessKeyId,
    accessKeySecret,
    customDomain: $("#ossCustomDomain").value.trim(),
    prefix: $("#ossPrefix").value.trim() || defaultOssSettings.prefix,
    useSsl: true,
    hasAccessKeyId: accessKeyId ? true : Boolean(state.ossSettings.hasAccessKeyId),
    hasAccessKeySecret: accessKeySecret ? true : Boolean(state.ossSettings.hasAccessKeySecret)
  };
  if (!next.bucket || (!next.region && !next.endpoint)) {
    setOssStatus("请至少填写 Bucket，并填写 Endpoint 或 Region。", "bad");
    throw new Error("OSS 配置不完整。");
  }
  storeOssSettingsPublic(next);
  if (serverPersistenceAvailable) {
    await postSharedStatePatch({ ossSettings: next });
  }
  $("#ossAccessKeyId").value = "";
  $("#ossAccessKeySecret").value = "";
  fillOssSettingsForm();
  setOssStatus("OSS 设置已保存，正在做真实上传测试...", "good");
  showToast("OSS 设置已保存", "good");
  await runOssStorageCheck();
}

function fillOssSettingsForm() {
  if (!$("#ossBucket")) return;
  $("#ossRegion").value = state.ossSettings.region || "";
  $("#ossEndpoint").value = state.ossSettings.endpoint || "";
  $("#ossBucket").value = state.ossSettings.bucket || "";
  $("#ossAccessKeyId").value = "";
  $("#ossAccessKeySecret").value = "";
  $("#ossAccessKeyId").placeholder = state.ossSettings.hasAccessKeyId ? "已保存在本机私有存档；留空则继续使用" : "OSS AccessKey ID";
  $("#ossAccessKeySecret").placeholder = state.ossSettings.hasAccessKeySecret ? "已保存在本机私有存档；留空则继续使用" : "OSS AccessKey Secret";
  $("#ossCustomDomain").value = state.ossSettings.customDomain || "";
  $("#ossPrefix").value = state.ossSettings.prefix || defaultOssSettings.prefix;
  setOssStatus(state.ossSettings.bucket ? "OSS 将用于 Card Cottage、Art Gallery 和首页背景图上传。" : "配置 OSS 后，公网访问不会再依赖服务器保存图片。");
}

function homeBackgroundPreset(id) {
  return (state.homeBackgroundPresets || []).find((item) => item.id === id)
    || homeBackgroundPresets.find((item) => item.id === id)
    || homeBackgroundPresets[0];
}

function homeBackgroundSrc(background = state.homeBackground) {
  if (background?.mode === "custom" && background.src) return background.src;
  return homeBackgroundPreset(background?.preset).src;
}

function applyHomeBackground() {
  const image = $("#homeHeroImage") || $("#home .hero-poster > img");
  if (!image) return;
  image.src = homeBackgroundSrc();
}

function setHomeBackgroundStatus(message, tone = "") {
  const status = $("#homeBackgroundStatus");
  if (!status) return;
  status.textContent = message;
  status.className = `feedback ${tone}`.trim();
}

function persistHomeBackground() {
  state.homeBackground = { ...defaultHomeBackground, ...state.homeBackground, src: homeBackgroundSrc(state.homeBackground) };
  saveLocalItem("jojoHomeBackground", JSON.stringify(state.homeBackground));
  saveSharedState({ homeBackground: state.homeBackground });
  applyHomeBackground();
  renderHomeBackgroundSettings();
  invalidateOssImageStorageStatus();
}

function renderHomeBackgroundSettings() {
  const grid = $("#homeBackgroundPresetGrid");
  if (!grid) return;
  const presets = normalizeHomeBackgroundPresets(state.homeBackgroundPresets);
  state.homeBackgroundPresets = presets;
  grid.innerHTML = presets.map((preset) => `
    <button class="home-bg-choice ${state.homeBackground.mode !== "custom" && state.homeBackground.preset === preset.id ? "is-active" : ""}" type="button" data-home-bg-preset="${preset.id}">
      <img src="${preset.src}" alt="">
      <span>${escapeHtml(preset.label)}${preset.storage === "oss" ? " · OSS" : ""}</span>
    </button>
  `).join("");
  $all("[data-home-bg-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = homeBackgroundPreset(button.dataset.homeBgPreset);
      state.homeBackground = {
        mode: "preset",
        preset: preset.id,
        src: preset.src,
        objectKey: preset.objectKey || "",
        storage: preset.storage || "",
        updatedAt: preset.updatedAt || ""
      };
      persistHomeBackground();
      setHomeBackgroundStatus(`首页背景已切换为：${preset.label}。`, "good");
    });
  });
  const preview = $("#homeBackgroundPreview");
  if (preview) preview.src = homeBackgroundSrc();
}

async function uploadHomeBackgroundFile(file) {
  if (!file) return;
  try {
    setHomeBackgroundStatus(demoMode ? "正在载入 Demo 首页背景..." : "正在上传首页背景到 OSS...", "good");
    const upload = await uploadImageFileToOss(file, "home-backgrounds");
    state.homeBackground = {
      mode: "custom",
      preset: "",
      src: upload.src,
      objectKey: upload.objectKey,
      storage: upload.storage || "oss",
      name: upload.name || file.name,
      mime: upload.mime,
      size: upload.size,
      updatedAt: upload.updatedAt
    };
    persistHomeBackground();
    setHomeBackgroundStatus(demoMode ? "Demo 首页背景已更新，本次操作不会保存。" : "首页背景已上传到 OSS 并保存。", "good");
  } catch (error) {
    setHomeBackgroundStatus(error.message || "首页背景上传失败。", "bad");
  }
}

function installHomeBackgroundUpload() {
  const dropzone = $("#homeBackgroundDropzone");
  const input = $("#homeBackgroundFile");
  if (!dropzone || !input) return;
  dropzone.addEventListener("click", (event) => {
    if (event.target !== input) input.click();
  });
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) uploadHomeBackgroundFile(file);
    input.value = "";
  });
  ["dragenter", "dragover"].forEach((type) => {
    dropzone.addEventListener(type, (event) => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach((type) => {
    dropzone.addEventListener(type, (event) => {
      event.preventDefault();
      if (type === "dragleave" && dropzone.contains(event.relatedTarget)) return;
      dropzone.classList.remove("is-dragging");
    });
  });
  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("is-dragging");
    const file = event.dataTransfer?.files?.[0];
    if (file) uploadHomeBackgroundFile(file);
  });
}

function dataUrlMime(dataUrl) {
  const match = String(dataUrl || "").match(/^data:([^;]+);base64,/);
  return match ? match[1] : "";
}

async function uploadImageDataUrlToOss(dataUrl, fileName, folder) {
  assertOssUploadReady();
  const response = await fetch(apiUrl("/api/oss/upload-image"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dataUrl, fileName, folder })
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.error) {
    throw new Error(result.error || `OSS 上传接口返回 ${response.status}`);
  }
  return result;
}

async function uploadImageFileToOss(file, folder) {
  if (!file?.type?.startsWith("image/")) throw new Error("请选择图片文件。");
  assertOssUploadReady();
  const dataUrl = await readFileAsDataUrl(file);
  return uploadImageDataUrlToOss(dataUrl, file.name || "image", folder);
}

async function testSavedOssSettings() {
  if (!serverPersistenceAvailable) throw new Error("本机服务未连接，无法测试 OSS。");
  const response = await fetch(apiUrl("/api/oss/test"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{}"
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.error) {
    throw new Error(result.error || `OSS 测试接口返回 ${response.status}`);
  }
  return result;
}

function imageSourceNeedsOss(src) {
  const value = String(src || "");
  return value.startsWith("data:") || value.startsWith("/api/card-cottage/assets/");
}

async function saveAiSettingsFromForm() {
  const model = "MiniMax-M3";
  const apiKey = $("#aiApiKey").value.trim();
  if (!serverPersistenceAvailable && location.protocol === "file:") {
    await loadSharedState();
  }
  if (!serverPersistenceAvailable && location.protocol === "file:") {
    $("#aiSettingsStatus").textContent = `本机服务没有连接，无法安全保存 API Key。请先运行本程序服务，再用 ${localApiOrigin}/ 打开。`;
    $("#aiSettingsStatus").className = "feedback bad";
    throw new Error("本机服务未启动，无法保存 API Key。");
  }
  state.aiSettings = {
    mode: $("#aiMode").value,
    endpoint: $("#aiEndpoint").value.trim() || defaultAiSettings.endpoint,
    model,
    customModel: "",
    apiKey: serverPersistenceAvailable ? "" : apiKey,
    hasApiKey: apiKey ? true : Boolean(state.aiSettings.hasApiKey)
  };
  saveLocalItem("jojoAiSettings", JSON.stringify({
    mode: state.aiSettings.mode,
    endpoint: state.aiSettings.endpoint,
    model: state.aiSettings.model,
    customModel: "",
    hasApiKey: state.aiSettings.hasApiKey
  }));
  if (serverPersistenceAvailable) await postSharedStatePatch({
    aiSettings: {
      mode: state.aiSettings.mode,
      endpoint: state.aiSettings.endpoint,
      model: state.aiSettings.model,
      customModel: "",
      apiKey
    }
  });
  $("#aiApiKey").value = "";
  $("#aiSettingsStatus").textContent = serverPersistenceAvailable ? "设置已保存在本机私有存档；API Key 不会回显。" : "设置已保存在当前浏览器；建议使用本机服务端保存 Key。";
  $("#aiSettingsStatus").className = "feedback good";
  showToast("MiniMax-M3 设置已保存", "good");
}

function fillAiSettingsForm() {
  $("#aiMode").value = state.aiSettings.mode;
  $("#aiEndpoint").value = state.aiSettings.endpoint;
  $("#aiModel").value = "MiniMax-M3";
  $("#aiApiKey").value = "";
  $("#aiApiKey").placeholder = state.aiSettings.hasApiKey ? "已保存在本机私有存档；留空则继续使用" : "只保存在本机私有存档";
  if (location.protocol === "file:" && !serverPersistenceAvailable) {
    $("#aiSettingsStatus").textContent = `当前是 file:// 打开，本机服务未连接。请启动本程序服务并用 ${localApiOrigin}/ 打开，否则 API Key 不能安全保存，Song Notes 也无法走本机代理。`;
    $("#aiSettingsStatus").className = "feedback bad";
  } else {
    $("#aiSettingsStatus").textContent = state.aiSettings.hasApiKey ? "MiniMax Key 已保存在本机私有存档，不会回显。" : "MiniMax 配置可用于英文歌和画廊分析。";
    $("#aiSettingsStatus").className = "feedback";
  }
}

async function saveWordSettingsFromForm() {
  const selectedWordBank = $("#settingsWordBank")?.value || state.wordBank;
  const previousWordBank = state.wordBank;
  const previousDailyWordCount = normalizeDailyWordCount(state.dailyWordCount);
  state.wordBank = selectedWordBank;
  saveLocalItem("jojoWordBank", state.wordBank);
  state.dailyWordCount = normalizeDailyWordCount($("#dailyWordCount").value);
  saveLocalItem("jojoDailyWordCount", String(state.dailyWordCount));
  if (state.dailyWordCount !== previousDailyWordCount || state.wordBank !== previousWordBank) {
    state.dailyWordPlan = null;
    removeLocalItem("jojoDailyWordPlan");
  }
  saveAppSettings();
  if (serverPersistenceAvailable) await postSharedStatePatch({
    wordBank: state.wordBank,
    dailyWordCount: state.dailyWordCount,
    dailyWordPlan: state.dailyWordPlan,
    appSettings: state.appSettings
  });
  $("#wordSettingsStatus").textContent = "Word Camp 设置已保存。";
  $("#wordSettingsStatus").className = "feedback good";
  showToast("Word Camp 设置已保存", "good");
  renderWordStudyState({ syncSelect: true, library: true });
  newWordQuestion();
}

function fillWordSettingsForm() {
  $("#dailyWordCount").value = String(normalizeDailyWordCount(state.dailyWordCount));
  fillAppSettingsForm();
  syncWordBankSelect();
  renderWordBankManagers();
  renderWordLibrary();
  $("#wordSettingsStatus").textContent = "Word Camp 设置会跨终端共享。";
  $("#wordSettingsStatus").className = "feedback";
}

function openSettings() {
  fillAiSettingsForm();
  fillOssSettingsForm();
  renderHomeBackgroundSettings();
  renderDeploymentStatus();
  $("#settingsDialog").showModal();
  refreshDeploymentStatus();
}

function openWordSettings() {
  fillWordSettingsForm();
  $("#wordSettingsDialog").showModal();
}

function openModuleDialog(dialogId) {
  const dialog = $(`#${dialogId}`);
  if (dialogId === "songSettingsDialog") renderBankManager("song");
  if (dialog) dialog.showModal();
}

function openActiveViewSettings() {
  const dialogByView = {
    home: "settingsDialog",
    kana: "kanaSettingsDialog",
    words: "wordSettingsDialog",
    phonics: "phonicsSettingsDialog",
    songs: "songSettingsDialog",
    gallery: "gallerySettingsDialog",
    cardhouse: "cardhouseSettingsDialog"
  };
  const viewId = currentViewId();
  if (viewId === "words") {
    openWordSettings();
    return;
  }
  if (viewId === "home") {
    openSettings();
    return;
  }
  openModuleDialog(dialogByView[viewId] || "settingsDialog");
}

function applyIncomingRewardMigration(data) {
  const hasRewardData = data.globalRewards || data.wordRewards || data.kanaRewards || data.phonicsRewards;
  if (!hasRewardData) return;
  state.globalRewards = normalizeGlobalRewards(
    data.globalRewards || state.globalRewards,
    legacyModuleBigStars(data.wordRewards, data.kanaRewards, data.phonicsRewards)
  );
  saveLocalItem("jojoGlobalRewards", JSON.stringify(state.globalRewards));
}

function applySharedState(data) {
  if (!data || typeof data !== "object") return;
  applyIncomingRewardMigration(data);
  if (data.wordProgressPatch && typeof data.wordProgressPatch === "object") {
    state.wordProgress = { ...state.wordProgress, ...data.wordProgressPatch };
  }
  if (data.wordProgress) state.wordProgress = data.wordProgress;
  if (data.wordBank) {
    state.wordBank = data.wordBank;
    saveLocalItem("jojoWordBank", state.wordBank);
  }
  if (Array.isArray(data.deletedWordBanks)) {
    state.deletedWordBanks = data.deletedWordBanks;
    saveLocalItem("jojoDeletedWordBanks", JSON.stringify(state.deletedWordBanks));
    selectedBankCache = { key: "", words: [] };
  }
  if (typeof data.kanaScore === "number") {
    state.kanaScore = data.kanaScore;
    saveLocalItem("jojoKanaScore", String(state.kanaScore));
  }
  if (data.kanaProgress && typeof data.kanaProgress === "object") {
    state.kanaProgress = data.kanaProgress;
    saveLocalItem("jojoKanaProgress", JSON.stringify(state.kanaProgress));
  }
  if (data.kanaRewards && typeof data.kanaRewards === "object") {
    state.kanaRewards = normalizeKanaRewards(data.kanaRewards);
    saveLocalItem("jojoKanaRewards", JSON.stringify(state.kanaRewards));
  }
  if (typeof data.played === "number") {
    state.played = data.played;
    saveLocalItem("jojoPlayed", String(state.played));
  }
  if (typeof data.dailyWordCount === "number") {
    state.dailyWordCount = normalizeDailyWordCount(data.dailyWordCount);
    saveLocalItem("jojoDailyWordCount", String(state.dailyWordCount));
  }
  if ("dailyWordPlan" in data) {
    state.dailyWordPlan = data.dailyWordPlan;
    if (state.dailyWordPlan) {
      saveLocalItem("jojoDailyWordPlan", JSON.stringify(state.dailyWordPlan));
    } else {
      removeLocalItem("jojoDailyWordPlan");
    }
  }
  if (data.wordRewards) {
    state.wordRewards = normalizeWordRewards(data.wordRewards);
    saveLocalItem("jojoWordRewards", JSON.stringify(state.wordRewards));
  }
  if (typeof data.artMode === "boolean") {
    state.artMode = data.artMode;
    saveLocalItem("jojoArtMode", String(state.artMode));
  }
  if (Array.isArray(data.gallery)) {
    state.gallery = data.gallery;
    saveLocalItem("jojoGallery", JSON.stringify(state.gallery));
  }
  if (data.homeBackground && typeof data.homeBackground === "object") {
    state.homeBackground = { ...defaultHomeBackground, ...data.homeBackground };
    saveLocalItem("jojoHomeBackground", JSON.stringify(state.homeBackground));
    applyHomeBackground();
  }
  if (Array.isArray(data.homeBackgroundPresets)) {
    state.homeBackgroundPresets = normalizeHomeBackgroundPresets(data.homeBackgroundPresets);
    saveLocalItem("jojoHomeBackgroundPresets", JSON.stringify(state.homeBackgroundPresets));
    applyHomeBackground();
    renderHomeBackgroundSettings();
  }
  if (data.appSettings && typeof data.appSettings === "object") {
    state.appSettings = { ...defaultAppSettings, ...data.appSettings };
    saveLocalItem("jojoAppSettings", JSON.stringify(state.appSettings));
    fillAppSettingsForm();
  }
  if (Array.isArray(data.songHistory)) {
    state.songHistory = data.songHistory.filter((item) => item?.analysis).slice(0, 20);
    saveLocalItem("jojoSongHistory", JSON.stringify(state.songHistory));
  }
  if (Array.isArray(data.customWordBanks)) {
    state.customWordBanks = data.customWordBanks;
    saveLocalItem("jojoCustomWordBanks", JSON.stringify(state.customWordBanks));
    invalidateWordCaches();
    installCustomWordBankLabels();
  }
  if (data.aiSettings) {
    state.aiSettings = { ...state.aiSettings, ...data.aiSettings, model: "MiniMax-M3", customModel: "", apiKey: "" };
    saveLocalItem("jojoAiSettings", JSON.stringify({
      mode: state.aiSettings.mode,
      endpoint: state.aiSettings.endpoint,
      model: "MiniMax-M3",
      customModel: "",
      hasApiKey: state.aiSettings.hasApiKey
    }));
  }
  if (data.ossSettings) {
    storeOssSettingsPublic(data.ossSettings);
    fillOssSettingsForm();
  }
  if (data.phonicsQuest && typeof data.phonicsQuest === "object") {
    state.phonicsQuest = { ...loadPhonicsQuestState(), ...data.phonicsQuest };
    saveLocalItem("jojoPhonicsQuestState", JSON.stringify(state.phonicsQuest));
  }
  if (data.phonicsRewards && typeof data.phonicsRewards === "object") {
    state.phonicsRewards = normalizePhonicsRewards(data.phonicsRewards);
    saveLocalItem("jojoPhonicsRewards", JSON.stringify(state.phonicsRewards));
  }
  if (data.cardCottage && typeof data.cardCottage === "object") {
    state.cardCottage = normalizeCardCottageState(data.cardCottage);
    saveLocalItem("jojoCardCottage", JSON.stringify(state.cardCottage));
  }
  if (data.globalRewards || data.wordRewards || data.kanaRewards || data.phonicsRewards) {
    renderWordRewards();
    renderKanaRewards();
    renderPhonicsRewards();
  }
  updateDifficultWordButton();
}

async function loadSharedState() {
  try {
    const response = await fetch(apiUrl("/api/state?lite=1"), {
      cache: "no-store"
    });
    if (!response.ok) throw new Error("state unavailable");
    serverPersistenceAvailable = true;
    applySharedState(await response.json());
  } catch {
    serverPersistenceAvailable = false;
  }
}

async function loadSharedGallery() {
  if (!serverPersistenceAvailable) {
    galleryPersistenceReady = true;
    return;
  }
  try {
    const response = await fetch(apiUrl("/api/gallery"), { cache: "no-store" });
    if (!response.ok) throw new Error("gallery unavailable");
    const data = await response.json();
    if (Array.isArray(data.gallery)) {
      state.gallery = data.gallery;
      saveLocalItem("jojoGallery", JSON.stringify(state.gallery));
      galleryPersistenceReady = true;
      renderGallery({ persist: false });
    }
  } catch {
    galleryPersistenceReady = true;
  }
}

async function loadSharedSongHistory({ restoreLatest = false } = {}) {
  if (!serverPersistenceAvailable) {
    renderSongHistory();
    return;
  }
  try {
    const response = await fetch(apiUrl("/api/song-history"), { cache: "no-store" });
    if (!response.ok) throw new Error("song history unavailable");
    const data = await response.json();
    if (Array.isArray(data.songHistory)) {
      state.songHistory = data.songHistory.filter((item) => item?.analysis).slice(0, 20);
      saveLocalItem("jojoSongHistory", JSON.stringify(state.songHistory));
      if (restoreLatest && state.songHistory.some((item) => item?.analysis)) {
        restoreSongHistory(0);
      } else {
        renderSongHistory();
      }
    }
  } catch {
    renderSongHistory();
  }
}

async function loadSharedWordProgress() {
  if (!serverPersistenceAvailable) return;
  try {
    const response = await fetch(apiUrl("/api/word-progress"), { cache: "no-store" });
    if (!response.ok) throw new Error("word progress unavailable");
    const data = await response.json();
    if (data.wordProgress && typeof data.wordProgress === "object") {
      state.wordProgress = data.wordProgress;
      saveLocalItem("jojoWordProgress", JSON.stringify(state.wordProgress));
      renderWordStudyState({ syncSelect: true, library: currentViewId() === "words" });
    }
  } catch {}
}

async function saveSharedState(patch = {}) {
  if (!serverPersistenceAvailable) return;
  pendingSharedPatch = mergeSharedPatch(pendingSharedPatch, patch);
  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(async () => {
    const nextPatch = pendingSharedPatch || {};
    pendingSharedPatch = null;
    try {
      await postSharedStatePatch(nextPatch);
    } catch {
      serverPersistenceAvailable = false;
    }
  }, 160);
}

function mergeSharedPatch(previous, incoming) {
  if (!previous) return { ...incoming };
  const merged = { ...previous, ...incoming };
  if (previous.wordProgressPatch || incoming.wordProgressPatch) {
    merged.wordProgressPatch = { ...(previous.wordProgressPatch || {}), ...(incoming.wordProgressPatch || {}) };
  }
  if (incoming.wordProgress) delete merged.wordProgressPatch;
  return merged;
}

async function postSharedStatePatch(patch = {}) {
  const response = await fetch(apiUrl("/api/state"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(patch)
  });
  if (!response.ok) throw new Error(`state save failed: ${response.status}`);
  applySharedState(await response.json());
}

function closeSettings() {
  $("#settingsDialog").close();
}

function closeWordSettings() {
  $("#wordSettingsDialog").close();
}

function currentViewId() {
  const raw = location.hash.replace("#", "").split("?")[0].trim();
  return /^[a-z][a-z0-9-]*$/i.test(raw) ? raw : "home";
}

function updateBrandAction() {
  const brand = $("#openSettings");
  const viewId = currentViewId();
  const activeView = document.getElementById(viewId)?.classList.contains("view") ? document.getElementById(viewId) : document.getElementById("home");
  const title = activeView?.id === "home"
    ? "JOJO LAB"
    : (activeView?.querySelector("h2")?.textContent || "JOJO LAB").trim().toUpperCase();
  $("#topbarTitle").textContent = title;
  brand.setAttribute("aria-label", "回到首页");
  brand.classList.toggle("brand-home-action", activeView?.id !== "home");
  document.body.classList.toggle("subprogram-active", activeView?.id !== "home");
}

function updateActiveSettingsButton() {
  const button = $("#activeViewSettings");
  if (!button) return;
  const names = {
    home: "主页",
    kana: "Kana Quest",
    words: "Word Camp",
    phonics: "Phonics Quest",
    songs: "Song Notes",
    gallery: "Art Gallery",
    cardhouse: "Card Cottage"
  };
  const label = `打开${names[currentViewId()] || "当前程序"}设置`;
  button.setAttribute("aria-label", label);
  button.title = label;
}

function applyArtMode() {
  document.body.classList.toggle("art-mode", state.artMode);
  $("#artModeToggle").setAttribute("aria-pressed", String(state.artMode));
  $("#artModeToggle").title = state.artMode ? "显示程序按钮" : "欣赏主图";
}

function toggleArtMode() {
  state.artMode = !state.artMode;
  saveLocalItem("jojoArtMode", String(state.artMode));
  saveSharedState({ artMode: state.artMode });
  applyArtMode();
}

function handleBrandClick() {
  closeSettings();
  if ($("#wordSettingsDialog")?.open) closeWordSettings();
  location.hash = "home";
}

function restoreTopbarAction() {
  if (!activeTopbarAction) return;
  const { node, placeholder } = activeTopbarAction;
  if (placeholder?.parentNode) placeholder.parentNode.insertBefore(node, placeholder);
  placeholder?.remove();
  node.classList.remove("is-in-topbar");
  activeTopbarAction = null;
}

function moveActiveViewActionToTopbar(id) {
  restoreTopbarAction();
  const target = $("#topbarModuleActions");
  if (!target || id === "home") {
    if (target) target.hidden = true;
    return;
  }
  const view = document.getElementById(id);
  const actionNode = view?.querySelector(".section-head .section-actions, .section-head .cardhouse-counter");
  if (!actionNode) {
    target.hidden = true;
    return;
  }
  const placeholder = document.createComment(`topbar-action:${id}`);
  actionNode.parentNode.insertBefore(placeholder, actionNode);
  actionNode.classList.add("is-in-topbar");
  target.appendChild(actionNode);
  target.hidden = false;
  activeTopbarAction = { node: actionNode, placeholder };
}

function hydrateMediaForView(id) {
  if (id === "songs" && !songHistoryHydrated) {
    songHistoryHydrated = true;
    if (state.songHistory.some((item) => item?.analysis)) {
      restoreSongHistory(0);
    } else {
      renderSongEmpty();
    }
    void loadSharedSongHistory({ restoreLatest: true });
  }
  if (id === "gallery") {
    if (!galleryHydrated) {
      galleryHydrated = true;
      renderGallery({ persist: false });
      void loadSharedGallery();
    } else {
      renderGallery({ persist: false });
    }
  }
  if (id === "cardhouse") {
    if (!cardCottageHydrated) {
      cardCottageHydrated = true;
      renderCardCottage();
    } else {
      updateCardCottageSummary();
    }
  }
}

function setView() {
  const requestedId = currentViewId();
  const requestedView = document.getElementById(requestedId);
  const id = requestedView?.classList.contains("view") ? requestedId : "home";
  const resetScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  $all(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  moveActiveViewActionToTopbar(id);
  updateBrandAction();
  updateActiveSettingsButton();
  resetScroll();
  requestAnimationFrame(resetScroll);
  setTimeout(resetScroll, 0);
  setTimeout(resetScroll, 80);
  hydrateMediaForView(id);
}

function clearHomeTileSelection() {
  armedHomeTileHref = "";
  $all("#home .module-tile").forEach((tile) => {
    tile.classList.remove("home-tile-armed");
    const meaning = tile.querySelector(".module-meaning");
    if (meaning) meaning.textContent = "";
  });
}

function handleHomeTileClick(event) {
  const tile = event.currentTarget;
  const href = tile.getAttribute("href") || "";
  event.preventDefault();
  speak(tile.dataset.speak || tile.textContent.trim());
  location.hash = href;
}

function renderHomeTileMeanings() {
  $all("#home .module-tile").forEach((tile) => {
    const meaning = tile.querySelector(".module-meaning");
    if (meaning) meaning.textContent = tile.dataset.zh || "";
  });
}

function newKanaQuestion() {
  const mode = $("#kanaMode").value;
  const questionType = $("#kanaQuestionType").value;
  const item = sample(kanaBase, 1)[0];
  const displayKana = mode === "katakana" ? item.katakana : mode === "mixed" && Math.random() > 0.5 ? item.katakana : item.hiragana;
  const displayScript = displayKana === item.katakana ? "katakana" : "hiragana";
  const progressKey = `${displayScript}:${item.romaji}`;
  state.kana = { item, displayKana, displayScript, progressKey, questionType };

  if (questionType === "romaji") {
    $("#kanaPrompt").textContent = displayKana;
    $("#kanaHint").textContent = "选择正确罗马音";
    const options = shuffle([item.romaji, ...sample(kanaBase.filter((x) => x.romaji !== item.romaji), 3).map((x) => x.romaji)]);
    renderOptions("#kanaOptions", options, item.romaji, handleKanaAnswer);
  } else {
    $("#kanaPrompt").textContent = item.romaji;
    $("#kanaHint").textContent = "选择正确假名";
    const key = mode === "katakana" ? "katakana" : "hiragana";
    const correct = mode === "mixed" ? displayKana : item[key];
    const options = shuffle([correct, ...sample(kanaBase.filter((x) => x.romaji !== item.romaji), 3).map((x) => mode === "katakana" ? x.katakana : x.hiragana)]);
    renderOptions("#kanaOptions", options, correct, handleKanaAnswer);
  }
  $("#kanaFeedback").textContent = "";
  $("#kanaFeedback").className = "feedback";
}

function handleKanaAnswer(isCorrect, correct) {
  const feedback = $("#kanaFeedback");
  const record = kanaRecord(state.kana.progressKey);
  const wasMastered = isKanaMastered(state.kana.progressKey);
  if (isCorrect) {
    $all("#kanaOptions button").forEach((button) => {
      button.disabled = true;
    });
    playCue("good");
    incrementPlayed();
    if (record.wrongStreak >= 3) {
      record.purpleCorrect = (record.purpleCorrect || 0) + 1;
      if (record.purpleCorrect >= 3) {
        record.score = 0;
        record.wrongStreak = 0;
        record.purpleCorrect = 0;
      }
    } else {
      record.score = Math.min(3, (record.score || 0) + 1);
      record.wrongStreak = 0;
      record.purpleCorrect = 0;
    }
    persistKanaProgress();
    renderKanaProgress();
    if (!wasMastered && isKanaMastered(state.kana.progressKey)) {
      awardKanaMasteryReward(state.kana.progressKey);
    }
    state.kanaScore += 1;
    saveLocalItem("jojoKanaScore", String(state.kanaScore));
    $("#kanaScore").textContent = state.kanaScore;
    feedback.textContent = "答对了。下一题来了。";
    feedback.className = "feedback good";
    speak(state.kana.displayKana, "ja-JP");
    window.setTimeout(newKanaQuestion, 850);
  } else {
    playCue("bad");
    record.score = Math.max(0, (record.score || 0) - 1);
    record.wrongStreak = (record.wrongStreak || 0) + 1;
    record.purpleCorrect = 0;
    persistKanaProgress();
    renderKanaProgress();
    feedback.textContent = "再试一次，这一题还不换。";
    feedback.className = "feedback bad";
  }
}

function renderKanaProgress() {
  const items = kanaProgressItems();
  const mastered = items.filter((item) => isKanaMastered(item.key)).length;
  const rows = Math.min(maxProgressRows, Math.max(1, Math.ceil(Math.sqrt(items.length / 3))));
  const columns = Math.max(1, Math.ceil(items.length / rows));
  $("#kanaProgressSummary").textContent = `${mastered} / ${items.length}`;
  $("#kanaProgressStrip").style.setProperty("--progress-rows", rows);
  $("#kanaProgressStrip").style.setProperty("--progress-columns", columns);
  $("#kanaProgressStrip").innerHTML = items.map((item) => {
    const level = kanaLevel(item.key);
    return `<span class="progress-tick level-${level.toLowerCase()}" title="${escapeHtml(item.label)} · ${escapeHtml(item.romaji)} · ${item.script} · ${level}"></span>`;
  }).join("");
}

function renderOptions(selector, options, correct, handler) {
  const container = $(selector);
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  const renderId = String(++optionRenderSerial);
  container.dataset.optionRenderId = renderId;
  container.classList.remove("has-selection");
  container.classList.add("suppress-option-highlight");
  container.innerHTML = options.map((option) => `<button type="button" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("");
  const restoreOptionHighlight = () => {
    if (container.dataset.optionRenderId !== renderId) return;
    container.classList.remove("suppress-option-highlight");
    container.onpointermove = null;
    container.onpointerdown = null;
    container.onkeydown = null;
  };
  container.onpointermove = restoreOptionHighlight;
  container.onpointerdown = restoreOptionHighlight;
  container.onkeydown = restoreOptionHighlight;
  $all(`${selector} button`).forEach((button) => {
    button.classList.remove("is-active", "is-correct", "is-wrong");
    button.disabled = false;
    bindTouchPress(button, () => {
      button.blur();
      container.classList.add("has-selection");
      handler(button.dataset.answer === correct, correct);
    });
  });
  requestAnimationFrame(() => {
    if (container.contains(document.activeElement) && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
}

function clearWordNextQuestionTimer() {
  if (!wordNextQuestionTimer) return;
  window.clearTimeout(wordNextQuestionTimer);
  wordNextQuestionTimer = null;
}

function scheduleWordNextQuestion(delay = 850) {
  clearWordNextQuestionTimer();
  const token = wordQuestionToken;
  wordNextQuestionTimer = window.setTimeout(() => {
    wordNextQuestionTimer = null;
    if (token !== wordQuestionToken) return;
    newWordQuestion();
  }, delay);
}

function filteredWords() {
  return dailyWords().filter((word) => {
    const record = peekWordRecord(word);
    return record.wrongStreak >= 3 || record.score < 3;
  });
}

function progressTickGroups(bankWords, maxTicks = 240) {
  if (bankWords.length <= maxTicks) {
    return bankWords.map((word) => ({ level: wordLevel(word).toLowerCase(), title: `${word.word} · ${wordLevel(word)}` }));
  }
  const groupSize = Math.ceil(bankWords.length / maxTicks);
  const groups = [];
  for (let index = 0; index < bankWords.length; index += groupSize) {
    const group = bankWords.slice(index, index + groupSize);
    const levels = group.map((word) => wordLevel(word));
    let level = "0";
    if (levels.includes("N")) {
      level = "n";
    } else if (levels.every((item) => item === "3")) {
      level = "3";
    } else {
      const average = levels.reduce((sum, item) => sum + (Number(item) || 0), 0) / Math.max(1, levels.length);
      level = String(Math.max(0, Math.min(3, Math.round(average))));
    }
    groups.push({
      level,
      title: `${group[0].word} - ${group[group.length - 1].word}`
    });
  }
  return groups;
}

function renderWordProgress() {
  const bank = currentWordBank();
  const bankWords = wordsForSelectedBank();
  const todayWords = dailyWords();
  const mastered = bankWords.filter((word) => isWordMastered(word)).length;
  const todayMastered = todayWords.filter((word) => isWordMastered(word)).length;
  const overallTicks = progressTickGroups(bankWords);
  const rows = Math.min(maxProgressRows, Math.max(1, Math.ceil(Math.sqrt(overallTicks.length / 3))));
  const columns = Math.max(1, Math.ceil(overallTicks.length / rows));
  const modeLabel = $("#wordMode").selectedOptions[0]?.textContent || "练习";
  $("#wordProgressTitle").textContent = `总体完成量`;
  $("#wordProgressSummary").textContent = `${mastered} / ${bankWords.length}`;
  $("#wordProgressStrip").style.setProperty("--progress-rows", rows);
  $("#wordProgressStrip").style.setProperty("--progress-columns", columns);
  $("#wordProgressStrip").innerHTML = overallTicks.map((tick) => {
    return `<span class="progress-tick level-${tick.level}" title="${escapeHtml(tick.title)}"></span>`;
  }).join("");
  const dailyRows = Math.min(4, Math.max(1, Math.ceil(Math.sqrt(Math.max(1, todayWords.length) / 2))));
  const dailyColumns = Math.max(1, Math.ceil(Math.max(1, todayWords.length) / dailyRows));
  $("#wordDailyTitle").textContent = `今日${modeLabel}`;
  $("#wordDailySummary").textContent = `${todayMastered} / ${todayWords.length}`;
  $("#wordDailyStrip").style.setProperty("--progress-rows", dailyRows);
  $("#wordDailyStrip").style.setProperty("--progress-columns", dailyColumns);
  $("#wordDailyStrip").innerHTML = todayWords.map((word) => {
    const level = wordLevel(word).toLowerCase();
    return `<span class="progress-tick level-${level}" title="${escapeHtml(word.word)} · ${wordLevel(word)}"></span>`;
  }).join("");
}

function masteryLabel(word) {
  const level = wordLevel(word);
  const record = wordRecord(word);
  if (level === "N") return `N · 连错 ${record.wrongStreak}`;
  return `${level} / 3`;
}

function masteryButtonsHtml(word, level) {
  const wordText = escapeHtml(word.word);
  return ["0", "1", "2", "3", "N"].map((value) => `
    <button
      class="mastery-button level-${value.toLowerCase()}${value === level ? " is-active" : ""}"
      type="button"
      data-word="${wordText}"
      data-level="${value}"
      aria-pressed="${value === level ? "true" : "false"}"
    >${value}</button>
  `).join("");
}

function renderWordLibrary() {
  const bank = currentWordBank();
  const bankWords = wordsForSelectedBank();
  $("#wordLibraryTitle").textContent = `${wordBankLabels[bank] || "词库"} · ${bankWords.length} 词`;
  $("#wordLibraryRows").innerHTML = bankWords.map((word) => {
    const level = wordLevel(word);
    return `
      <tr class="word-row level-${level.toLowerCase()}">
        <td><button class="word-speak-mini" type="button" data-word="${escapeHtml(word.word)}">${escapeHtml(word.word)}</button></td>
        <td>${escapeHtml(word.ipa)}</td>
        <td>${escapeHtml(word.zh)}</td>
        <td>
          <div class="mastery-button-group" role="group" aria-label="${escapeHtml(word.word)} 掌握程度">
            ${masteryButtonsHtml(word, level)}
          </div>
        </td>
        <td><button class="ghost-btn word-edit-mini" type="button" data-word="${escapeHtml(word.word)}">编辑</button></td>
      </tr>
    `;
  }).join("");
  $all(".word-speak-mini").forEach((button) => {
    button.addEventListener("click", () => speak(button.dataset.word));
  });
  $all(".mastery-button").forEach((button) => {
    button.addEventListener("click", () => {
      setWordMastery(button.dataset.word, button.dataset.level);
    });
  });
  $all(".word-edit-mini").forEach((button) => {
    button.addEventListener("click", () => fillWordEntryEditor(button.dataset.word));
  });
}

function renderWordStudyState(options = {}) {
  const shouldRenderSettings = options.library || $("#wordSettingsDialog")?.open;
  if (options.syncSelect || shouldRenderSettings) syncWordBankSelect();
  ensureDailyWordPlan();
  renderWordProgress();
  if (shouldRenderSettings) renderWordLibrary();
}

function setWordMastery(wordText, level) {
  const word = allWords().find((item) => item.word === wordText);
  if (!word) return;
  const progressKey = currentWordRecordKey(word);
  const record = wordRecord(word);
  const wasMastered = record.wrongStreak < 3 && Number(record.score || 0) >= 3;
  if (level === "N") {
    record.score = 0;
    record.wrongStreak = 3;
    record.purpleCorrect = 0;
  } else {
    record.score = Number(level);
    record.wrongStreak = 0;
    record.purpleCorrect = 0;
  }
  persistWordProgress(progressKey);
  const isNowMastered = record.wrongStreak < 3 && Number(record.score || 0) >= 3;
  if (!wasMastered && isNowMastered) awardWordMasteryReward();
  renderWordStudyState({ library: true, syncSelect: true });
}

function resetCurrentWordBank() {
  const bank = currentWordBank();
  const targetWords = bank === "all" ? allWords() : wordsForSelectedBank();
  targetWords.forEach((word) => {
    const targetBanks = bank === "all" ? [...new Set([...(word.banks || []), "all"])] : [bank];
    ["meaning", "sound", "spelling"].forEach((mode) => {
      delete state.wordProgress[`${mode}:${word.word}`];
      targetBanks.forEach((targetBank) => {
        delete state.wordProgress[`${mode}:${targetBank}:${word.word}`];
      });
    });
  });
  state.dailyWordPlan = null;
  removeLocalItem("jojoDailyWordPlan");
  persistWordProgress();
  saveSharedState({ dailyWordPlan: state.dailyWordPlan });
  renderWordStudyState({ library: true, syncSelect: true });
  newWordQuestion();
  showToast("当前词库学习进度已复位，星星保留", "good");
}

function resetWordStars() {
  if (!window.confirm("确认复位 Word Camp 小星吗？\n这个操作只清空 Word Camp 的小星进度，不会影响全局大星和词库学习进度。")) return;
  state.wordRewards = { smallStars: 0, bigStars: 0 };
  persistWordRewards();
  renderWordRewards();
  showToast("Word Camp 小星已复位", "good");
}

function deleteCurrentWordBank() {
  const bank = currentWordBank();
  if (bank === "all") {
    window.alert("不能删除“全部词库”。请先选择一个具体词库。");
    return;
  }
  const label = wordBankLabels[bank] || bank;
  if (!window.confirm(`确认删除词库“${label}”吗？\n删除后这个词库会从当前家庭存档里隐藏，并清除它的学习进度。`)) return;
  allWords().filter((word) => word.banks.includes(bank)).forEach((word) => {
    ["meaning", "sound", "spelling"].forEach((mode) => {
      delete state.wordProgress[`${mode}:${bank}:${word.word}`];
      delete state.wordProgress[`${mode}:${word.word}`];
    });
  });
  const isCustomBank = state.customWordBanks.some((item) => item.id === bank);
  if (isCustomBank) {
    state.customWordBanks = state.customWordBanks.filter((item) => item.id !== bank);
    delete wordBankLabels[bank];
    saveCustomWordBanks();
  } else {
    state.deletedWordBanks = Array.from(new Set([...state.deletedWordBanks, bank]));
    selectedBankCache = { key: "", words: [] };
  }
  state.wordBank = availableWordBankKeys().find((key) => key !== "all" && key !== bank) || "all";
  saveLocalItem("jojoDeletedWordBanks", JSON.stringify(state.deletedWordBanks));
  saveLocalItem("jojoWordBank", state.wordBank);
  persistWordProgress();
  saveSharedState({ deletedWordBanks: state.deletedWordBanks, wordBank: state.wordBank, wordProgress: state.wordProgress });
  renderWordStudyState({ library: true, syncSelect: true });
  newWordQuestion();
}

function spellingGapCount(word) {
  if (word.length <= 3) return Math.min(2, word.length);
  if (word.length <= 6) return 2;
  return 3;
}

function spellingGapCombos(length, count) {
  const combos = [];
  for (let first = 0; first < length; first += 1) {
    if (count === 1) {
      combos.push([first]);
      continue;
    }
    for (let second = first + 1; second < length; second += 1) {
      if (count === 2) {
        combos.push([first, second]);
        continue;
      }
      for (let third = second + 1; third < length; third += 1) {
        combos.push([first, second, third]);
      }
    }
  }
  return combos;
}

function adjacentGapCount(positions) {
  return positions.reduce((total, position, index) => (
    index > 0 && position - positions[index - 1] === 1 ? total + 1 : total
  ), 0);
}

function pickSpellingGapPositions(letters, count) {
  const combos = spellingGapCombos(letters.length, count);
  if (!combos.length) return [];
  const scored = combos.map((positions) => ({
    positions,
    adjacent: adjacentGapCount(positions),
    vowelPenalty: positions.some((index) => "aeiou".includes(letters[index])) ? 0 : 1
  }));
  const leastAdjacent = Math.min(...scored.map((item) => item.adjacent));
  const leastVowelPenalty = Math.min(...scored.filter((item) => item.adjacent === leastAdjacent).map((item) => item.vowelPenalty));
  const best = scored.filter((item) => item.adjacent === leastAdjacent && item.vowelPenalty === leastVowelPenalty);
  return sample(best, 1)[0].positions;
}

function setWordCardMode(mode) {
  const card = $("#words .word-card");
  if (!card) return;
  card.classList.toggle("word-card-spelling", mode === "spelling");
  card.classList.toggle("word-card-status", mode === "status");
}

function buildSpellingPuzzle(word) {
  const letters = (word.spelling || word.word).toLowerCase().replace(/[^a-z]/g, "").split("");
  const count = Math.min(spellingGapCount(letters.join("")), letters.length);
  const positions = pickSpellingGapPositions(letters, count);
  state.spelling = { missing: positions, answer: [] };
  renderSpellingPuzzle();
}

function renderSpellingPuzzle() {
  const letters = (state.word.spelling || state.word.word).toLowerCase().replace(/[^a-z]/g, "").split("");
  const slots = letters.map((letter, index) => {
    const gapIndex = state.spelling.missing.indexOf(index);
    if (gapIndex === -1) return `<span class="spelling-fixed">${escapeHtml(letter)}</span>`;
    return `<span class="spelling-gap">${escapeHtml(state.spelling.answer[gapIndex] || "")}</span>`;
  }).join("");
  $("#spellingAnswer").innerHTML = slots;
  renderSpellingKeyboard();
}

function renderSpellingKeyboard() {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  $("#spellingKeyboard").innerHTML = rows.map((row) => `
    <div class="keyboard-row">
      ${row.split("").map((letter) => `<button type="button" data-letter="${letter}">${letter}</button>`).join("")}
    </div>
  `).join("") + `
    <div class="keyboard-row keyboard-tools">
      <button type="button" data-action="backspace">退格</button>
      <button type="button" data-action="clear">清空</button>
    </div>
  `;
  $all("#spellingKeyboard button").forEach((button) => {
    bindTouchPress(button, () => handleSpellingKey(button.dataset.letter, button.dataset.action));
  });
}

function handleSpellingKey(letter, action) {
  if (wordAnswerLocked) return;
  if (action === "backspace") state.spelling.answer.pop();
  if (action === "clear") state.spelling.answer = [];
  if (letter && state.spelling.answer.length < state.spelling.missing.length) state.spelling.answer.push(letter);
  renderSpellingPuzzle();
  if (state.spelling.answer.length === state.spelling.missing.length) checkSpelling();
}

function meaningChoicesFor(word) {
  const choices = [word.zh];
  const selectedSourceWords = wordsForSelectedBank().filter((item) => item.zh && item.zh !== word.zh && !String(item.zh).startsWith("KET官方词汇："));
  const fallbackWords = allWords().filter((item) => item.zh && item.zh !== word.zh && !String(item.zh).startsWith("KET官方词汇："));
  const sourceWords = selectedSourceWords.length >= 3 ? selectedSourceWords : [...selectedSourceWords, ...fallbackWords];
  const candidates = sample(sourceWords, Math.min(36, sourceWords.length)).map((item) => item.zh);
  candidates.forEach((meaning) => {
    if (choices.length < 4 && !choices.includes(meaning)) choices.push(meaning);
  });
  return shuffle(choices);
}

function pickNextWord(pool) {
  const previous = String(lastWordQuestionText || "").toLowerCase();
  const candidates = pool.length > 1 ? pool.filter((word) => String(word.word || "").toLowerCase() !== previous) : pool;
  return sample(candidates.length ? candidates : pool, 1)[0];
}

function newWordQuestion() {
  clearWordNextQuestionTimer();
  wordAnswerLocked = false;
  wordQuestionToken += 1;
  ensureDailyWordPlan();
  const pool = filteredWords();
  if (!pool.length) {
    const bankWords = wordsForSelectedBank();
    const todayWords = dailyWords();
    const first = bankWords[0] || allWords()[0];
    const allMastered = bankWords.length > 0 && bankWords.every((word) => isWordMastered(word));
    state.word = first;
    setWordCardMode("status");
    $("#wordPrompt").textContent = todayWords.length ? "今日完成" : "完成";
    $("#wordMeta").textContent = `${wordBankLabels[currentWordBank()] || "词库"} · ${todayWords.length ? "今日任务" : "已掌握"}`;
    $("#wordExample").textContent = todayWords.length
      ? "今天这组单词都已经达到 3 分。凌晨 1 点后会生成新的日课。"
      : (allMastered ? "这个词库的单词都已经达到 3 分。" : "当前设置下没有可选的新单词。");
    $("#wordOptions").innerHTML = "";
    $("#spellingBox").classList.add("hidden");
    $("#wordFeedback").textContent = todayWords.length ? "太棒了，今天的 Word Camp 完成了。" : "可以换一个词库，或者调整每日单词数量。";
    $("#wordFeedback").className = "feedback good";
    updateDifficultWordButton();
    renderWordStudyState();
    return;
  }
  const word = pickNextWord(pool);
  const mode = $("#wordMode").value;
  state.word = word;
  lastWordQuestionText = word.word || "";
  setWordCardMode(mode);
  $("#wordMeta").textContent = `${word.ipa} · ${word.pos} · ${word.accent || "US"} · ${word.banks.join(" / ")}`;
  $("#wordExample").textContent = word.example;
  $("#wordFeedback").textContent = "";
  $("#wordFeedback").className = "feedback";
  $("#spellingBox").classList.toggle("hidden", mode !== "spelling");
  $("#wordOptions").classList.toggle("hidden", mode === "spelling");
  $("#spellingAnswer").innerHTML = "";
  $("#spellingKeyboard").innerHTML = "";
  updateDifficultWordButton();

  if (mode === "meaning") {
    $("#wordPrompt").textContent = word.word;
    renderOptions("#wordOptions", meaningChoicesFor(word), word.zh, handleWordAnswer);
    if (state.appSettings.wordRepeatVoEnabled) {
      window.setTimeout(() => speak(word.speakText || word.word), 180);
    }
  }
  if (mode === "sound") {
    $("#wordPrompt").textContent = word.zh;
    renderOptions("#wordOptions", shuffle([word.word, ...sample(allWords().filter((x) => x.word !== word.word), 3).map((x) => x.word)]), word.word, handleWordAnswer);
    speak(word.speakText || word.word);
  }
  if (mode === "spelling") {
    $("#wordPrompt").textContent = word.zh;
    buildSpellingPuzzle(word);
  }
  renderWordStudyState();
}

function shouldUseWordRepeatGate() {
  return Boolean(state.appSettings.wordRepeatVoEnabled && $("#wordMode").value === "meaning" && state.word?.word);
}

function finishCorrectWordAnswer(progressKey, record, wasMastered, options = {}) {
  playCue("good");
  incrementPlayed();
  if (record.wrongStreak >= 3) {
    record.purpleCorrect = (record.purpleCorrect || 0) + 1;
    if (record.purpleCorrect >= 3) {
      record.score = 0;
      record.wrongStreak = 0;
      record.purpleCorrect = 0;
    }
  } else {
    record.score = Math.min(3, (record.score || 0) + 1);
    record.wrongStreak = 0;
    record.purpleCorrect = 0;
  }
  persistWordProgress(progressKey);
  const isNowMastered = record.wrongStreak < 3 && Number(record.score || 0) >= 3;
  if (!wasMastered && isNowMastered) awardWordMasteryReward();
  renderWordProgress();
  $("#wordFeedback").textContent = "正确。下一题来了。";
  $("#wordFeedback").className = "feedback good";
  if (options.speak !== false) speak(state.word.speakText || state.word.word);
  scheduleWordNextQuestion();
}

async function runWordRepeatGate(progressKey, record, wasMastered) {
  const wordText = state.word.speakText || state.word.word;
  const feedback = $("#wordFeedback");
  $all("#wordOptions button").forEach((button) => {
    button.disabled = true;
  });
  feedback.textContent = `选对了。先听官方发音，然后请 Jojo 跟读：${state.word.word}`;
  feedback.className = "feedback";
  let attempts = 0;
  while (state.word && (state.word.speakText || state.word.word) === wordText) {
    attempts += 1;
    await speakAsync(wordText);
    feedback.textContent = `请跟读：${state.word.word}`;
    const result = await listenForSpeechOnce();
    if (!result.supported || ["not-allowed", "service-not-allowed", "audio-capture"].includes(result.error)) {
      feedback.textContent = "当前浏览器不能使用语音识别，已按普通模式完成这一题。";
      finishCorrectWordAnswer(progressKey, record, wasMastered);
      return;
    }
    if (spokenWordMatches(result.transcript, wordText)) {
      feedback.textContent = `跟读正确：${result.transcript}`;
      finishCorrectWordAnswer(progressKey, record, wasMastered, { speak: false });
      return;
    }
    feedback.textContent = result.transcript
      ? `听到的是“${result.transcript}”。再听一次官方发音，然后重新跟读。`
      : "还没有听清。再听一次官方发音，然后重新跟读。";
    feedback.className = "feedback bad";
    if (attempts > 12) attempts = 0;
  }
}

function handleWordAnswer(isCorrect, correct) {
  if (wordAnswerLocked) return;
  const feedback = $("#wordFeedback");
  const progressKey = currentWordRecordKey(state.word);
  const record = wordRecord(state.word);
  const wasMastered = record.wrongStreak < 3 && Number(record.score || 0) >= 3;
  if (isCorrect) {
    wordAnswerLocked = true;
    if (shouldUseWordRepeatGate()) {
      runWordRepeatGate(progressKey, record, wasMastered);
    } else {
      finishCorrectWordAnswer(progressKey, record, wasMastered);
    }
  } else {
    playCue("bad");
    record.score = Math.max(0, (record.score || 0) - 1);
    record.wrongStreak = (record.wrongStreak || 0) + 1;
    record.purpleCorrect = 0;
    persistWordProgress(progressKey);
    renderWordProgress();
    feedback.textContent = "再试一次，这一题还不换。";
    feedback.className = "feedback bad";
  }
}

function checkSpelling() {
  const letters = (state.word.spelling || state.word.word).toLowerCase().replace(/[^a-z]/g, "").split("");
  const correct = state.spelling.missing.map((index) => letters[index]).join("");
  const answer = state.spelling.answer.join("");
  handleWordAnswer(answer === correct, correct);
}

function loadPhonicsQuestState() {
  const fallback = { unitIndex: 0, unlocked: 0, stars: 0, completed: [], stepIndex: 0, listenIndex: 0, flashIndex: 0, blendIndex: 0, spellIndex: 0, spelling: [] };
  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem("jojoPhonicsQuestState") || "{}") };
  } catch {
    return fallback;
  }
}

function normalizePhonicsRewards(value = {}) {
  return {
    smallStars: rewardNumber(value.smallStars),
    bigStars: 0,
    awardedUnits: Array.isArray(value.awardedUnits) ? value.awardedUnits.map(Number).filter(Number.isFinite) : []
  };
}

function loadPhonicsRewards() {
  try {
    return normalizePhonicsRewards(JSON.parse(localStorage.getItem("jojoPhonicsRewards") || "{}"));
  } catch {
    return normalizePhonicsRewards();
  }
}

function persistPhonicsRewards() {
  state.phonicsRewards = normalizePhonicsRewards(state.phonicsRewards);
  saveLocalItem("jojoPhonicsRewards", JSON.stringify(state.phonicsRewards));
  saveSharedState({ phonicsRewards: state.phonicsRewards });
}

function savePhonicsQuestState() {
  saveLocalItem("jojoPhonicsQuestState", JSON.stringify(state.phonicsQuest));
  saveSharedState({ phonicsQuest: state.phonicsQuest });
}

function activePhonicsUnit() {
  return phonicsQuestUnits[state.phonicsQuest.unitIndex] || phonicsQuestUnits[0];
}

function renderPhonics() {
  const unit = activePhonicsUnit();
  $("#phonicsUnitTitle").textContent = unit.title;
  $("#phonicsQuestGoal").textContent = unit.goal;
  $("#phonicsStarCount").textContent = state.phonicsQuest.stars;
  $("#phonicsStarFill").style.width = `${Math.min(100, (state.phonicsQuest.stars / 30) * 100)}%`;
  $("#phonicsChallengeStatus").textContent = state.phonicsQuest.stars >= 30 ? "可以挑战" : `还需要 ${30 - state.phonicsQuest.stars} 点`;
  $("#phonicsChallengeButton").disabled = state.phonicsQuest.stars < 30;
  renderPhonicsRewards();
  renderPhonicsUnits();
  renderPhonicsListen();
  renderPhonicsFlash();
  renderPhonicsBlend();
  renderPhonicsSpell();
  renderPhonicsStory();
  renderPhonicsStep();
}

function renderPhonicsStep() {
  const activeStep = phonicsQuestSteps[state.phonicsQuest.stepIndex] || "listen";
  const stepCards = {
    listen: 0,
    flash: 1,
    blend: 2,
    spell: 3,
    read: 4
  };
  $all(".phonics-quest-card").forEach((card, index) => {
    card.hidden = index !== stepCards[activeStep];
  });
}

function advancePhonicsStep() {
  state.phonicsQuest.stepIndex = (state.phonicsQuest.stepIndex + 1) % phonicsQuestSteps.length;
  savePhonicsQuestState();
  renderPhonicsStep();
}

function renderPhonicsUnits() {
  $("#phonicsUnitList").innerHTML = phonicsQuestUnits.map((unit, index) => {
    const locked = index > state.phonicsQuest.unlocked;
    const done = state.phonicsQuest.completed.includes(index);
    return `
      <button class="phonics-unit-button${index === state.phonicsQuest.unitIndex ? " active" : ""}" type="button" data-unit="${index}"${locked ? " disabled" : ""}>
        <span class="phonics-unit-index">${index + 1}</span>
        <span>
          <span class="phonics-unit-name">${escapeHtml(unit.title)}</span>
          <span class="phonics-unit-meta">${escapeHtml(unit.sounds.slice(0, 5).join(" · "))}${unit.sounds.length > 5 ? "..." : ""}</span>
        </span>
        <span aria-hidden="true">${done ? "✓" : ""}</span>
      </button>
    `;
  }).join("");
  $all(".phonics-unit-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.phonicsQuest.unitIndex = Number(button.dataset.unit);
      resetPhonicsRound();
      savePhonicsQuestState();
      renderPhonics();
    });
  });
}

function renderPhonicsListen() {
  const unit = activePhonicsUnit();
  const item = unit.listen[state.phonicsQuest.listenIndex % unit.listen.length];
  $("#phonicsListenPrompt").textContent = `找一个以 ${item.sound} 开头的词。`;
  $("#phonicsListenChoices").innerHTML = item.choices.map((choice) => `<button class="phonics-choice" type="button" data-choice="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join("");
  $all("#phonicsListenChoices .phonics-choice").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.choice === item.answer;
      button.classList.add(correct ? "good" : "bad");
      if (correct) {
        playCue("good");
        awardPhonicsStars(1);
        state.phonicsQuest.listenIndex += 1;
        window.setTimeout(() => {
          renderPhonicsListen();
          advancePhonicsStep();
        }, 260);
      } else {
        playCue("bad");
      }
      savePhonicsQuestState();
    });
  });
}

function renderPhonicsFlash() {
  const unit = activePhonicsUnit();
  $("#phonicsFlashCard").textContent = unit.sounds[state.phonicsQuest.flashIndex % unit.sounds.length];
}

function renderPhonicsBlend() {
  const unit = activePhonicsUnit();
  const word = unit.words[state.phonicsQuest.blendIndex % unit.words.length];
  $("#phonicsBlendWord").textContent = word;
  $("#phonicsBlendSlots").innerHTML = splitPhonicsWord(word).map((part) => `<span class="letter-slot">${escapeHtml(part)}</span>`).join("");
}

function renderPhonicsSpell() {
  const unit = activePhonicsUnit();
  const word = unit.words[state.phonicsQuest.spellIndex % unit.words.length];
  state.phonicsQuest.spelling = [];
  $("#phonicsSpellMeaning").textContent = phonicsWordMeanings[word] || "听声音拼出这个词";
  $("#phonicsTileBank").innerHTML = renderPhonicsKeyboard();
  $("#phonicsSpellBox").innerHTML = "";
  $all("#phonicsTileBank .phonics-key").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "backspace") state.phonicsQuest.spelling.pop();
      if (button.dataset.action === "clear") state.phonicsQuest.spelling = [];
      if (button.dataset.letter) state.phonicsQuest.spelling.push(button.dataset.letter);
      renderPhonicsSpelling();
      savePhonicsQuestState();
    });
  });
}

function renderPhonicsKeyboard() {
  return ["qwertyuiop", "asdfghjkl", "zxcvbnm"].map((row) => `
    <div class="phonics-key-row">
      ${row.split("").map((letter) => `<button class="phonics-key" type="button" data-letter="${letter}">${letter}</button>`).join("")}
    </div>
  `).join("") + `
    <div class="phonics-key-row phonics-key-tools">
      <button class="phonics-key" type="button" data-action="backspace">退格</button>
      <button class="phonics-key" type="button" data-action="clear">清空</button>
    </div>
  `;
}

function renderPhonicsSpelling() {
  $("#phonicsSpellBox").innerHTML = state.phonicsQuest.spelling.map((letter) => `<span class="phonics-spell-letter">${escapeHtml(letter)}</span>`).join("");
}

function renderPhonicsStory() {
  $("#phonicsStoryText").innerHTML = activePhonicsUnit().story.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
  $("#phonicsFeedback").textContent = "";
  $("#phonicsFeedback").className = "feedback";
}

function awardPhonicsStars(amount) {
  state.phonicsQuest.stars += amount;
  savePhonicsQuestState();
  $("#phonicsStarCount").textContent = state.phonicsQuest.stars;
  $("#phonicsStarFill").style.width = `${Math.min(100, (state.phonicsQuest.stars / 30) * 100)}%`;
  $("#phonicsChallengeStatus").textContent = state.phonicsQuest.stars >= 30 ? "可以挑战" : `还需要 ${30 - state.phonicsQuest.stars} 点`;
  $("#phonicsChallengeButton").disabled = state.phonicsQuest.stars < 30;
}

function resetPhonicsRound() {
  state.phonicsQuest.stepIndex = 0;
  state.phonicsQuest.listenIndex = 0;
  state.phonicsQuest.flashIndex = 0;
  state.phonicsQuest.blendIndex = 0;
  state.phonicsQuest.spellIndex = 0;
  state.phonicsQuest.spelling = [];
}

function completePhonicsChallenge() {
  const unit = activePhonicsUnit();
  const mystery = makePhonicsMysteryWords(unit).join(" · ");
  const ok = window.confirm(`30-Star Challenge\n\n读 8 张音卡：${unit.sounds.slice(0, 8).join(" · ")}\n拼 6 个词：${unit.words.slice(0, 6).join(" · ")}\n读 3 个神秘词：${mystery}\n读 2 句小文本：${unit.story.slice(0, 2).join(" ")}\n\n完成了吗？`);
  if (!ok) return;
  playCue("good");
  incrementPlayed();
  const completedBefore = state.phonicsQuest.completed.includes(state.phonicsQuest.unitIndex);
  if (!completedBefore) {
    state.phonicsQuest.completed.push(state.phonicsQuest.unitIndex);
    awardPhonicsChallengeReward(state.phonicsQuest.unitIndex);
  }
  state.phonicsQuest.stars = Math.max(0, state.phonicsQuest.stars - 30);
  state.phonicsQuest.unlocked = Math.min(phonicsQuestUnits.length - 1, Math.max(state.phonicsQuest.unlocked, state.phonicsQuest.unitIndex + 1));
  state.phonicsQuest.unitIndex = Math.min(phonicsQuestUnits.length - 1, state.phonicsQuest.unitIndex + 1);
  resetPhonicsRound();
  savePhonicsQuestState();
  renderPhonics();
}

function splitPhonicsWord(word) {
  const magicE = { a: "a_e", i: "i_e", o: "o_e", u: "u_e" };
  if (word.length >= 4 && word.endsWith("e")) {
    const vowelIndex = word.length - 3;
    const vowel = word[vowelIndex];
    if (magicE[vowel]) return [...word.slice(0, vowelIndex), magicE[vowel], ...word.slice(vowelIndex + 1, -1)];
  }
  const chunks = ["sh", "ch", "th", "wh", "ng", "nk", "ck", "ll", "ss", "ff", "ar", "or", "er", "ir", "ur", "ee", "ai", "oa"];
  const result = [];
  for (let index = 0; index < word.length;) {
    const rest = word.slice(index);
    const chunk = chunks.find((item) => rest.startsWith(item));
    if (chunk) {
      result.push(chunk);
      index += chunk.length;
    } else {
      result.push(word[index]);
      index += 1;
    }
  }
  return result;
}

function makePhonicsMysteryWords(unit) {
  const initials = ["s", "m", "t", "p", "f", "l", "r", "b", "sh", "ch", "st"];
  const vowels = ["a", "i", "o", "u", "e", "ai", "ee", "oa", "ar"];
  const finals = ["t", "p", "n", "m", "ck", "sh", "ng", "r"];
  const allowed = new Set([...unit.sounds, ...phonicsQuestUnits.slice(0, state.phonicsQuest.unitIndex).flatMap((item) => item.sounds)]);
  const words = [];
  let guard = 0;
  while (words.length < 3 && guard < 80) {
    const parts = [sample(initials, 1)[0], sample(vowels, 1)[0], sample(finals, 1)[0]];
    if (parts.every((part) => allowed.has(part) || part.length === 1)) words.push(parts.join(""));
    guard += 1;
  }
  return words.length ? words : ["lat", "mip", "shog"];
}

function shakeElement(element) {
  element?.animate([
    { transform: "translateX(0)" },
    { transform: "translateX(-6px)" },
    { transform: "translateX(6px)" },
    { transform: "translateX(0)" }
  ], { duration: 180 });
}

function getSongPayload() {
  const rawLyrics = $("#songLyrics").value.trim();
  const lines = rawLyrics.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  return {
    query: $("#songQuery").value.trim(),
    title: $("#songTitle").value.trim(),
    artist: $("#songArtist").value.trim(),
    depth: $("#songDepth").value,
    selectedSong: state.selectedSong,
    targetAudience: "Jojo, a child learning English with a parent",
    outputLanguage: "zh-CN",
    tasks: [
      "introduce_the_song_at_multiple_depths",
      "proofread_user_pasted_lyrics_against_selected_song_metadata",
      "report_lyric_format_or_spelling_issues_without_reproducing_full_lyrics",
      "translate_each_line_to_natural_chinese",
      "explain_each_line_in_child_friendly_chinese",
      "extract_every_unique_lyric_word_plus_phrases_and_slang",
      "lemmatize_surface_forms_to_base_forms",
      "include_pronunciation_tips",
      "include_parent_follow_up_questions",
      "prepare_word_camp_bank"
    ],
    lyrics: lines
  };
}

function buildSongCandidatePrompt(payload) {
  return `你是 Song Notes 的歌曲识别助手。用户只会提供歌曲的大概线索，你要给出可能匹配的候选歌曲，方便家长选择。
请严格输出 JSON，不要 Markdown，不要代码围栏。
输出格式：
{
  "candidates": [
    {
      "id": "稳定英文小写短 ID",
      "title": "歌曲名",
      "artist": "歌手或来源",
      "album": "专辑/电影/节目，可空",
      "year": "年份，可空",
      "language": "语言",
      "confidence": 0.0,
      "reason": "为什么可能是这首",
      "searchHint": "可复制到搜索引擎核对的短查询",
      "lyricsAccessNote": "建议从官方、授权或用户拥有的来源获取歌词"
    }
  ],
  "notice": "不要输出完整歌词；只给候选歌曲信息。"
}
要求：
- 最多返回 6 个候选，按可信度从高到低。
- 不要输出任何完整歌词，也不要补写歌词。
- 如果线索太少，也要给出如何补充线索的建议。
用户线索：${JSON.stringify({
    query: payload.query,
    title: payload.title,
    artist: payload.artist
  }, null, 2)}`;
}

function buildSongPrompt(payload) {
  return `你是给儿童和家长讲英文歌的英语老师。请严格输出 JSON，不要输出 Markdown。
输出格式：
{
  "title": "歌曲名",
  "artist": "歌手或来源",
  "intro": {
    "quick": "一句话介绍这首歌",
    "guided": "适合家长带孩子看的介绍",
    "deep": "更深入的背景、主题、语言风格介绍"
  },
  "interpretation": {
    "child": "给孩子听得懂的整体解释",
    "parent": "家长陪读版解释",
    "deep": "语法、文化、表达层面的深入解释"
  },
  "lyricsReview": {
    "status": "ok 或 needs_attention",
    "summary": "对用户粘贴歌词格式和内容可靠性的简短校对结论",
    "issues": [
      {
        "line": 1,
        "type": "spelling / line_break / possible_misheard_word / duplicate_or_missing_seeming_line / metadata_mismatch",
        "excerpt": "最多 12 个英文词的短摘录，不要输出整段歌词",
        "suggestion": "建议家长如何核对或修正；不要补写缺失歌词"
      }
    ]
  },
  "lines": [
    {
      "en": "英文原句",
      "zh": "自然中文翻译",
      "explanation": "给孩子听得懂的解释",
      "words": [
        { "text": "原句中出现的词或短语", "lemma": "原型", "meaning": "中文意思", "pos": "词性", "isSlang": false, "slangNote": "", "explanation": "这句里怎么理解", "pronunciationTip": "发音提示" }
      ],
      "parentQuestion": "可以问 Jojo 的一个问题"
    }
  ],
  "vocabulary": [
    {
      "word": "进入词库的英文词或短语；歌词中出现的每个有语义价值的唯一英文词都必须有词条，短语保留空格",
      "surfaceForms": ["歌词中出现过的形式"],
      "zh": "适合孩子的中文释义",
      "ipa": "/音标/",
      "pos": "noun / verb / phrase / slang 等",
      "isPhrase": false,
      "isSlang": false,
      "slangNote": "如果是俚语，说明语气、场景和是否适合孩子使用；不是俚语则留空",
      "meaningInSong": "在这首歌里的意思",
      "example": "一个新的、非歌词原句的儿童友好英文例句",
      "sourceLines": [1],
      "distractors": ["中文干扰项1", "中文干扰项2", "中文干扰项3"]
    }
  ]
}
要求：
- 只输出一个 JSON 对象，第一字符必须是 {，最后一个字符必须是 }。不要代码围栏，不要注释，不要尾随逗号，不要在 JSON 前后写任何解释。
- 只能分析用户提供的 lyrics，不要生成、补全或续写歌词。
- lines.en 必须来自用户提供的 lyrics 原句。
- 如果用户已选择候选歌曲或填写歌名/歌手，请先校对用户粘贴的歌词格式和内容：检查明显拼写错误、可疑断行、重复/缺失迹象、歌名歌手不匹配、记述错误。不要调用外部搜索，不要编造官方歌词，不要把缺失歌词补出来；只在 lyricsReview.issues 里给短摘录和核对建议。
- 不要因为校对而改写 lines.en；lines.en 必须保持用户粘贴的原句。
- vocabulary 必须覆盖 lyrics 中出现过的每一个不重复、有语义价值的英文词，包括基础但有画面或动作含义的词、重复副歌中的核心词，以及名词复数、动词时态、比较级等表层形式；不要因为 sun / day / run 这类词简单而跳过。
- 超基础功能词不要进入词库，例如 a / an / the / and / or / but / is / am / are / was / were / be / to / of / in / on / at / for / with / from / by / as / that / i / you / will / oh 等；这些词如果出现在固定搭配中，可以保留在短语词条里，但不单独建词条。
- 词组、固定搭配、俚语和歌词中特别重要的表达要作为额外词条加入，例如 early morning / jet plane / sleep away；这些短语不能替代其中单个词的词条。
- 俚语必须 isSlang=true 并写 slangNote。
- example 必须是新写的短句，不能复制歌词原句。
- 中文使用简洁亲子陪读语气。
歌曲资料：${JSON.stringify(payload, null, 2)}`;
}

function buildCompactSongPrompt(payload) {
  return `你是 Song Notes 的英文歌学习助手。上一次输出没有被程序解析，请这次只输出一个严格 JSON 对象。
重要规则：
- 第一字符必须是 {，最后一个字符必须是 }。
- 不要 Markdown、不要代码围栏、不要 <think>、不要解释。
- 不要补写、续写或改写歌词；lines.en 只能使用用户提供的 lyrics 原句。
- vocabulary 要覆盖歌词中有语义价值的唯一英文词；跳过 a/an/the/and/or/but/is/am/are/to/of/in/on/at/for/with/from/by/as/that/i/you/will/oh 等超基础功能词。

输出格式必须是：
{
  "title": "歌曲名",
  "artist": "歌手或来源",
  "intro": { "quick": "一句话介绍", "guided": "亲子陪读介绍", "deep": "背景或风格补充" },
  "interpretation": { "child": "孩子版整体解释", "parent": "家长陪读版", "deep": "语言和文化解释" },
  "lyricsReview": { "status": "ok", "summary": "歌词格式简短校对", "issues": [] },
  "lines": [
    { "en": "用户提供的原句", "zh": "自然中文翻译", "explanation": "给孩子听得懂的解释", "words": [], "parentQuestion": "一个陪读问题" }
  ],
  "vocabulary": [
    { "word": "英文词或短语", "surfaceForms": ["出现形式"], "zh": "中文释义", "ipa": "待补充", "pos": "word", "isPhrase": false, "isSlang": false, "slangNote": "", "meaningInSong": "歌中意思", "example": "A new short sentence.", "sourceLines": [1], "distractors": ["干扰项1", "干扰项2", "干扰项3"] }
  ]
}

歌曲资料：${JSON.stringify({
    title: payload.title,
    artist: payload.artist,
    selectedSong: payload.selectedSong,
    depth: payload.depth,
    lyrics: payload.lyrics
  }, null, 2)}`;
}

const songFallbackStopwords = new Set("a an the and or but is am are was were be been being to of in on at for with from by as that this these those i me my mine you your yours he him his she her hers it its we us our they them their will would can could should may might must do does did have has had not no yes oh o".split(" "));

function fallbackSongVocabulary(payload) {
  const seen = new Map();
  payload.lyrics.forEach((line, lineIndex) => {
    String(line).toLowerCase().match(/[a-z][a-z'-]*/g)?.forEach((raw) => {
      const word = raw.replace(/^'+|'+$/g, "");
      if (!word || songFallbackStopwords.has(word)) return;
      const current = seen.get(word) || { word, surfaceForms: new Set(), sourceLines: new Set() };
      current.surfaceForms.add(raw);
      current.sourceLines.add(lineIndex + 1);
      seen.set(word, current);
    });
  });
  return Array.from(seen.values()).slice(0, 80).map((item) => ({
    word: item.word,
    surfaceForms: Array.from(item.surfaceForms),
    zh: "待补充",
    ipa: "待补充",
    pos: "word",
    isPhrase: false,
    isSlang: false,
    slangNote: "",
    meaningInSong: "MiniMax 返回非结构化内容，暂待补充",
    example: `I can read the word ${item.word}.`,
    sourceLines: Array.from(item.sourceLines),
    distractors: ["待补充", "动作", "画面"]
  }));
}

function buildFallbackSongAnalysis(payload, reason) {
  const title = songTitleFromPayload(payload);
  const artist = songArtistFromPayload(payload);
  return {
    title,
    artist,
    isFallbackDraft: true,
    intro: {
      quick: "MiniMax 返回了非结构化内容，已先保留一张临时学习卡。",
      guided: "这张卡先保存歌曲信息和原句，方便稍后重新分析。",
      deep: reason
    },
    interpretation: {
      child: "先把歌词按句子放好，等 MiniMax 成功返回 JSON 后再补充完整解释。",
      parent: "可以稍后重试分析，或减少歌词量/选择较浅解释深度。",
      deep: "当前不是歌词内容问题，而是模型输出没有形成可解析 JSON。"
    },
    lyricsReview: {
      status: "needs_attention",
      summary: "模型没有返回结构化分析；原句已保留，未改写歌词。",
      issues: []
    },
    lines: payload.lyrics.map((line) => ({
      en: line,
      zh: "等待 MiniMax 补充翻译",
      explanation: "这句先保留原文；稍后重新分析后会补充亲子讲解。",
      words: [],
      parentQuestion: "这句里你认识哪个英文词？"
    })),
    vocabulary: fallbackSongVocabulary(payload)
  };
}

function buildArtPrompt(art) {
  return `你是儿童艺术启发老师。请严格输出 JSON，不要输出 Markdown。
输出格式：
{ "analysis": "一段中文分析，先描述画面，再评价想象力、颜色/线条/构图，并给家长一个温柔的追问。" }
作品信息：${JSON.stringify({
    title: art.title,
    date: art.date,
    note: art.note || "",
    hasImage: Boolean(art.image)
  }, null, 2)}`;
}

function textFromAiContent(content) {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map((part) => {
      if (typeof part === "string") return part;
      return part?.text || part?.content || "";
    }).filter(Boolean).join("\n");
  }
  if (content && typeof content === "object") return content.text || content.content || JSON.stringify(content);
  return "";
}

function extractAiText(data) {
  if (typeof data === "string") return data;
  if (data?.analysis || data?.lines) return JSON.stringify(data);
  const nested = data?.data || data?.result || data?.response;
  if (nested && nested !== data) {
    const nestedText = extractAiText(nested);
    if (nestedText && nestedText !== "{}") return nestedText;
  }
  const choice = Array.isArray(data?.choices) ? data.choices[0] : null;
  if (choice) {
    const choiceText = textFromAiContent(choice.message?.content || choice.delta?.content || choice.text || choice.content);
    if (choiceText) return choiceText;
  }
  if (data?.reply) return typeof data.reply === "string" ? data.reply : JSON.stringify(data.reply);
  if (data?.text) return typeof data.text === "string" ? data.text : JSON.stringify(data.text);
  if (data?.output_text) return data.output_text;
  if (data?.output?.text) return data.output.text;
  if (Array.isArray(data?.messages)) {
    const last = [...data.messages].reverse().find((message) => message?.content || message?.text);
    if (last) return textFromAiContent(last.content || last.text);
  }
  return JSON.stringify(data);
}

function assertAiServiceOk(data) {
  const baseResp = data?.base_resp || data?.baseResp;
  if (baseResp && Number(baseResp.status_code || 0) !== 0) {
    throw new Error(`MiniMax 返回错误 ${baseResp.status_code}: ${baseResp.status_msg || "unknown error"}`);
  }
  if (data?.error) {
    const message = typeof data.error === "string" ? data.error : data.error.message;
    throw new Error(message || "MiniMax 返回错误");
  }
}

function removeJsonTrailingCommas(text) {
  return String(text).replace(/,\s*([}\]])/g, "$1");
}

function stripAiReasoning(text) {
  return String(text)
    .replace(/<think>[\s\S]*?<\/think>/gi, "")
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function extractBalancedJson(text) {
  const source = String(text);
  const start = source.search(/[\[{]/);
  if (start < 0) return "";
  const stack = [];
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }
    if (char === "\"") {
      inString = true;
      continue;
    }
    if (char === "{" || char === "[") {
      stack.push(char);
      continue;
    }
    if (char === "}" || char === "]") {
      const open = stack.pop();
      if ((char === "}" && open !== "{") || (char === "]" && open !== "[")) break;
      if (!stack.length) return source.slice(start, index + 1);
    }
  }
  return source.slice(start);
}

function parseJsonText(text) {
  const cleaned = stripAiReasoning(text);
  const fenced = [...cleaned.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi)].map((match) => match[1].trim());
  const candidates = [...fenced, extractBalancedJson(cleaned), cleaned]
    .map((candidate) => candidate && candidate.trim())
    .filter(Boolean)
    .filter((candidate, index, list) => list.indexOf(candidate) === index);
  if (!candidates.length) {
    throw new Error("大模型没有返回 JSON 对象，可能返回了空内容或说明文字。");
  }
  let lastError;
  for (const candidate of candidates) {
    try {
      return JSON.parse(removeJsonTrailingCommas(candidate));
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`大模型返回的 JSON 格式不完整或不合法：${lastError?.message || "未找到完整 JSON 对象"}`);
}

function selectedAiModel() {
  return "MiniMax-M3";
}

function endpointForMode(mode) {
  if (mode === "minimax-openai") return "https://api.minimax.io/v1/chat/completions";
  if (mode === "minimax-v2") return "https://api.minimax.chat/v1/text/chatcompletion_v2";
  return "/api/minimax/chat";
}

function syncEndpointForMode() {
  const mode = $("#aiMode").value;
  const endpoint = $("#aiEndpoint").value.trim();
  const knownEndpoints = [
    defaultAiSettings.endpoint,
    "https://api.minimax.chat/v1/chat/completions",
    "https://api.minimax.io/v1/chat/completions",
    "https://api.minimax.chat/v1/text/chatcompletion_v2",
    "/api/minimax/chat"
  ];
  if (!endpoint || knownEndpoints.includes(endpoint)) {
    $("#aiEndpoint").value = endpointForMode(mode);
  }
}

function minimaxMessages(prompt) {
  return [
    { role: "system", content: "You are a careful assistant for a parent-child learning app. Return strict JSON only. Do not use Markdown." },
    { role: "user", content: prompt }
  ];
}

function minimaxOfficialBody(prompt) {
  return {
    model: selectedAiModel(),
    messages: minimaxMessages(prompt),
    temperature: 0.2,
    top_p: 0.95,
    stream: false,
    max_tokens: 8192
  };
}

function minimaxV2Body(prompt) {
  return {
    model: selectedAiModel(),
    messages: minimaxMessages(prompt),
    temperature: 0.2,
    top_p: 0.9,
    stream: false,
    tokens_to_generate: 4096
  };
}

function normalizeEndpoint(endpoint, mode) {
  const value = endpoint || defaultAiSettings.endpoint;
  if (mode === "minimax-openai") return value || "https://api.minimax.io/v1/chat/completions";
  if (mode === "minimax-v2") return value || "https://api.minimax.chat/v1/text/chatcompletion_v2";
  return value;
}

async function callAiJson(task, prompt, payload = {}) {
  const settings = state.aiSettings;
  if (location.protocol === "file:" && !serverPersistenceAvailable && !settings.apiKey) {
    throw new Error(`当前页面是 file:// 打开，且本机服务未启动。请运行本程序服务并打开 ${localApiOrigin}/，否则无法使用已保存的 MiniMax Key。`);
  }
  if (!settings.endpoint) throw new Error("请先点击左上角 Jojo，填写 MiniMax 接口。");

  const postPrompt = async (nextPrompt, nextTask = task, nextPayload = payload) => {
    const headers = { "Content-Type": "application/json" };
    let body;

    if (serverPersistenceAvailable && settings.hasApiKey) {
      body = {
        mode: settings.mode,
        endpoint: normalizeEndpoint(settings.endpoint, settings.mode),
        model: selectedAiModel(),
        task: nextTask,
        prompt: nextPrompt,
        payload: nextPayload
      };
    } else if (settings.mode === "minimax-openai") {
      if (!settings.apiKey) throw new Error("浏览器直连需要填写 API Key。");
      headers.Authorization = `Bearer ${settings.apiKey}`;
      body = minimaxOfficialBody(nextPrompt);
    } else if (settings.mode === "minimax-v2") {
      if (!settings.apiKey) throw new Error("MiniMax 官方接口需要填写 API Key。");
      headers.Authorization = `Bearer ${settings.apiKey}`;
      body = minimaxV2Body(nextPrompt);
    } else {
      body = {
        provider: "minimax",
        model: selectedAiModel(),
        task: nextTask,
        prompt: nextPrompt,
        payload: nextPayload
      };
    }

    const requestUrl = serverPersistenceAvailable && settings.hasApiKey ? apiUrl("/api/minimax/chat") : normalizeEndpoint(settings.endpoint, settings.mode);
    const response = await fetch(requestUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    if (!response.ok) {
      let detail = "";
      try {
        const errorBody = await response.clone().json();
        detail = errorBody?.error || errorBody?.message || "";
      } catch {
        try {
          detail = await response.text();
        } catch {}
      }
      throw new Error(detail ? `接口返回 ${response.status}: ${detail}` : `接口返回 ${response.status}`);
    }
    const data = await response.json();
    assertAiServiceOk(data);
    return data;
  };

  const data = await postPrompt(prompt);
  const aiText = extractAiText(data);
  try {
    return parseJsonText(aiText);
  } catch (parseError) {
    if (task === "song-analysis") {
      let compactText = "";
      try {
        const compact = await postPrompt(buildCompactSongPrompt(payload), "song-analysis-compact", payload);
        compactText = extractAiText(compact);
        return parseJsonText(compactText);
      } catch (compactError) {
        if (compactText) {
          try {
            const compactRepairPrompt = `请把下面内容修复为严格 JSON 对象，只输出 JSON，不要 Markdown。必须保留 Song Notes schema，不要新增或补写歌词。\n\n${compactText.slice(0, 12000)}`;
            const compactRepaired = await postPrompt(compactRepairPrompt, "song-analysis-compact-json-repair", payload);
            return parseJsonText(extractAiText(compactRepaired));
          } catch {}
        }
      }
    }
    const repairPrompt = `你刚才返回的内容不是合法 JSON。请把下面内容修复为一个严格 JSON 对象，只输出 JSON，不要 Markdown、解释、注释或尾随逗号。不要新增歌词，不要补写歌词；保留原有分析信息和 schema。\n\n原始 schema 和要求：\n${prompt}\n\n需要修复的模型返回：\n${aiText.slice(0, 24000)}`;
    const repaired = await postPrompt(repairPrompt, `${task}-json-repair`, { task });
    try {
      return parseJsonText(extractAiText(repaired));
    } catch {
      throw parseError;
    }
  }
}

function renderSongHistory() {
  const container = $("#songHistoryPanel");
  if (!container) return;
  const history = state.songHistory.filter((item) => item?.analysis);
  if (!history.length) {
    container.innerHTML = "";
    return;
  }
  const activeIndex = Math.max(0, history.findIndex((item) => item.id === state.activeSongHistoryId));
  container.innerHTML = `
    <label class="song-history-select-label">历史歌曲
      <select id="songHistorySelect">
        ${history.map((item, index) => `
          <option value="${index}"${index === activeIndex ? " selected" : ""}>
            ${escapeHtml([item.title || "Song Notes", item.artist, formatSongHistoryDate(item.analyzedAt)].filter(Boolean).join(" · "))}
          </option>
        `).join("")}
      </select>
    </label>
  `;
  $("#songHistorySelect")?.addEventListener("change", (event) => {
    restoreSongHistory(Number(event.target.value));
  });
}

function formatSongHistoryDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function restoreSongHistory(index) {
  const history = state.songHistory.filter((item) => item?.analysis);
  const entry = history[index];
  if (!entry?.analysis) return;
  beginSongWorkflow();
  state.activeSongHistoryId = entry.id;
  state.selectedSong = entry.selectedSong || null;
  $("#songQuery").value = entry.query || "";
  $("#songTitle").value = entry.title || "";
  $("#songArtist").value = entry.artist || "";
  $("#songDepth").value = entry.depth || "child";
  $("#songLyrics").value = Array.isArray(entry.lyrics) ? entry.lyrics.join("\n") : "";
  $("#songStatus").textContent = "已恢复保存的歌曲分析。";
  $("#songStatus").className = "feedback good";
  renderSongAnalysis(entry.analysis);
  renderSongHistory();
}

function renderSongEmpty() {
  $("#songStatus").textContent = "";
  $("#songStatus").className = "feedback";
  clearSongCandidates({ clearSelectedSong: true });
  renderSongHistory();
  $("#songLines").innerHTML = `
    <article class="song-line-card">
      <strong class="lyric-line">先输入歌曲线索，或直接粘贴歌词</strong>
      <p class="translation-line">可以先让 MiniMax-M3 给出候选歌曲；选中后粘贴你拥有或授权使用的歌词，再生成介绍、逐句解释和 Word Camp 词库。</p>
    </article>
  `;
}

function renderSongAnalysisProgress(payload, stage = "正在分析歌曲", options = {}) {
  const title = songTitleFromPayload(payload);
  const artist = songArtistFromPayload(payload);
  const lyricCount = Array.isArray(payload.lyrics) ? payload.lyrics.length : 0;
  const metaSuffix = options.metaSuffix || "Song Notes 正在生成";
  const detail = options.detail || "正在整理歌曲介绍、逐句解释和 Word Camp 词库。";
  const steps = Array.isArray(options.steps) && options.steps.length
    ? options.steps
    : ["歌曲信息", "逐句解释", "自动同步词库"];
  const lyricLabel = lyricCount ? `${lyricCount} 句歌词 · ` : "";
  state.songAnalysis = null;
  state.activeSongHistoryId = "";
  $("#songStudyTitle").textContent = title;
  $("#songStudyMeta").textContent = `${artist ? artist + " · " : ""}${lyricLabel}${metaSuffix}`;
  clearSongCandidates({ clearSelectedSong: options.clearSelectedSong === true });
  $("#songStatus").textContent = stage;
  $("#songStatus").className = "feedback";
  renderSongHistory();
  $("#songLines").innerHTML = `
    <article class="song-line-card song-progress-card" aria-live="polite">
      <strong>${escapeHtml(title)}</strong>
      <p class="translation-line">${escapeHtml(stage)}。${escapeHtml(detail)}</p>
      <div class="song-progress-track" aria-hidden="true">
        <span class="song-progress-fill"></span>
      </div>
      <div class="song-progress-steps">
        ${steps.map((step) => `<span>${escapeHtml(step)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderSongCandidateResult(payload, candidates, notice = "") {
  const title = songTitleFromPayload(payload);
  const artist = songArtistFromPayload(payload);
  const found = candidates.length;
  $("#songStudyTitle").textContent = title;
  $("#songStudyMeta").textContent = `${artist ? artist + " · " : ""}${found ? `找到 ${found} 个候选` : "候选搜索未命中"}`;
  $("#songLines").innerHTML = `
    <article class="song-line-card">
      <strong class="lyric-line">${found ? "选择候选歌曲" : "还没有明确候选"}</strong>
      <p class="translation-line">${escapeHtml(found ? "请在上方候选卡片里选择正确歌曲，再粘贴你拥有或授权使用的歌词进行分析。" : (notice || "可以补充更多歌曲线索、歌名或歌手后再试一次。"))}</p>
    </article>
  `;
}

function renderSongCandidates(candidates = []) {
  state.songCandidates = candidates;
  if (!candidates.length) {
    $("#songCandidates").innerHTML = "";
    return;
  }
  $("#songCandidates").innerHTML = `
    <div class="song-candidate-grid">
      ${candidates.map((candidate, index) => `
        <button class="song-candidate${state.selectedSong?.id === candidate.id ? " active" : ""}" type="button" data-song-index="${index}">
          <strong>${escapeHtml(candidate.title || "未知歌曲")}</strong>
          <small>${escapeHtml([candidate.artist, candidate.year, candidate.album].filter(Boolean).join(" · ") || "候选歌曲")}</small>
          <span>${escapeHtml(candidate.reason || candidate.searchHint || "")}</span>
        </button>
      `).join("")}
    </div>
  `;
  $all(".song-candidate").forEach((button) => {
    button.addEventListener("click", () => selectSongCandidate(Number(button.dataset.songIndex)));
  });
}

function selectSongCandidate(index) {
  const candidate = state.songCandidates[index];
  if (!candidate) return;
  state.selectedSong = candidate;
  $("#songTitle").value = candidate.title || "";
  $("#songArtist").value = candidate.artist || "";
  $("#songStudyTitle").textContent = candidate.title || "已选择歌曲";
  $("#songStudyMeta").textContent = [candidate.artist, candidate.year, candidate.album].filter(Boolean).join(" · ") || "已选择候选歌曲";
  $("#songStatus").textContent = "已选择候选歌曲。请粘贴你拥有或授权使用的歌词，然后点击“分析已选歌曲”。";
  $("#songStatus").className = "feedback good";
  renderSongCandidates(state.songCandidates);
}

function renderSongInsightBlock(title, items) {
  const rows = items.filter((item) => item.value);
  if (!rows.length) return "";
  return `
    <article class="song-line-card song-insight-card">
      <strong>${escapeHtml(title)}</strong>
      ${rows.map((item) => `
        <p class="translation-line"><b>${escapeHtml(item.label)}：</b>${escapeHtml(item.value)}</p>
      `).join("")}
    </article>
  `;
}

function renderLyricsReviewBlock(review) {
  if (!review || (!review.summary && !Array.isArray(review.issues))) return "";
  const issues = Array.isArray(review.issues) ? review.issues : [];
  return `
    <article class="song-line-card song-insight-card lyrics-review-card">
      <strong>歌词校对</strong>
      ${review.summary ? `<p class="translation-line">${escapeHtml(review.summary)}</p>` : ""}
      ${issues.length ? `
        <div class="lyrics-review-list">
          ${issues.slice(0, 12).map((issue) => `
            <p class="translation-line">
              <b>${issue.line ? `Line ${escapeHtml(issue.line)} · ` : ""}${escapeHtml(issue.type || "提示")}：</b>
              ${issue.excerpt ? `<span>${escapeHtml(issue.excerpt)}</span> · ` : ""}
              ${escapeHtml(issue.suggestion || "")}
            </p>
          `).join("")}
        </div>
      ` : `<p class="translation-line">未发现明显的拼写、断行或记述问题。仍建议家长用授权来源做最后核对。</p>`}
    </article>
  `;
}

function normalizeSongTerm(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’`]/g, "'")
    .replace(/[^a-z0-9'\s-]+/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function songVocabularyAliases(item) {
  const aliases = [
    item?.text,
    item?.word,
    item?.lemma,
    ...(Array.isArray(item?.surfaceForms) ? item.surfaceForms : [])
  ];
  return [...new Set(aliases.map(normalizeSongTerm).filter(Boolean))];
}

function songLineHasAlias(lineText, alias) {
  const line = ` ${normalizeSongTerm(lineText)} `;
  const term = ` ${normalizeSongTerm(alias)} `;
  return term.trim() && line.includes(term);
}

function songLineAliasIndex(lineText, aliases) {
  const line = ` ${normalizeSongTerm(lineText)} `;
  const indexes = aliases
    .map((alias) => line.indexOf(` ${alias} `))
    .filter((index) => index >= 0);
  return indexes.length ? Math.min(...indexes) : Number.MAX_SAFE_INTEGER;
}

function songSourceLineMatches(item, lineNumber) {
  const sourceLines = Array.isArray(item?.sourceLines) ? item.sourceLines : [];
  return sourceLines.some((value) => Number(value) === lineNumber);
}

let cachedSongWordLookupVersion = -1;
let cachedSongWordLookup = null;

function songWordLookup() {
  if (cachedSongWordLookup && cachedSongWordLookupVersion === wordCacheVersion) return cachedSongWordLookup;
  const lookup = new Map();
  allWords().forEach((word) => {
    [word.word, word.spelling, word.speakText].forEach((value) => {
      const key = normalizeSongTerm(value);
      if (key && !lookup.has(key)) lookup.set(key, word);
    });
  });
  cachedSongWordLookupVersion = wordCacheVersion;
  cachedSongWordLookup = lookup;
  return lookup;
}

function songFallbackTermForms(term) {
  const normalized = normalizeSongTerm(term);
  const forms = new Set([normalized]);
  const addTrimmedSuffix = (suffix, replacements = [""]) => {
    if (!normalized.endsWith(suffix) || normalized.length <= suffix.length + 2) return;
    const stem = normalized.slice(0, -suffix.length);
    replacements.forEach((replacement) => forms.add(stem + replacement));
    if (stem.length > 2 && stem[stem.length - 1] === stem[stem.length - 2]) forms.add(stem.slice(0, -1));
  };
  if (normalized.endsWith("'s")) forms.add(normalized.slice(0, -2));
  if (normalized.endsWith("ies") && normalized.length > 4) forms.add(`${normalized.slice(0, -3)}y`);
  addTrimmedSuffix("es");
  addTrimmedSuffix("s");
  addTrimmedSuffix("ing", ["", "e"]);
  addTrimmedSuffix("ed", ["", "e"]);
  addTrimmedSuffix("est", ["", "e"]);
  addTrimmedSuffix("er", ["", "e"]);
  return [...forms].filter(Boolean);
}

function isSongLineCardStopword(term) {
  const normalized = normalizeSongTerm(term);
  const root = normalized.split("'")[0];
  return !normalized || normalized.length <= 2 || songFallbackStopwords.has(normalized) || songFallbackStopwords.has(root);
}

function songFallbackWordsFromLine(lineText) {
  const lookup = songWordLookup();
  const tokens = String(lineText || "").match(/[A-Za-z][A-Za-z'’-]*/g) || [];
  const seen = new Set();
  return tokens.flatMap((raw) => {
    const normalized = normalizeSongTerm(raw);
    if (seen.has(normalized) || isSongLineCardStopword(normalized)) return [];
    seen.add(normalized);
    const source = songFallbackTermForms(normalized).map((term) => lookup.get(term)).find(Boolean);
    if (!source) return [];
    return [{
      text: raw.replace(/[’`]/g, "'"),
      lemma: source.word,
      meaning: source.zh,
      pos: source.pos || "",
      isSlang: false,
      explanation: source.example || "",
      pronunciationTip: source.ipa || ""
    }];
  });
}

function songVocabularyChipFromItem(item, lineText) {
  const aliases = songVocabularyAliases(item);
  const matchingAlias = aliases.find((alias) => songLineHasAlias(lineText, alias));
  const displayText = matchingAlias || item?.word || item?.lemma || item?.text || "";
  return {
    text: displayText,
    lemma: item?.lemma || item?.word || item?.text || displayText,
    meaning: item?.meaning || item?.zh || item?.meaningInSong || "",
    pos: item?.pos || "",
    isSlang: Boolean(item?.isSlang),
    explanation: item?.explanation || item?.meaningInSong || item?.example || "",
    pronunciationTip: item?.pronunciationTip || item?.ipa || "",
    slangNote: item?.slangNote || "",
    order: songLineAliasIndex(lineText, matchingAlias ? [matchingAlias] : aliases)
  };
}

function addSongWordChip(target, item, lineText, seenAliases) {
  const aliases = songVocabularyAliases(item);
  if (!aliases.length || aliases.some((alias) => seenAliases.has(alias))) return;
  aliases.forEach((alias) => seenAliases.add(alias));
  target.push(songVocabularyChipFromItem(item, lineText));
}

function songWordsForLine(line, index, vocabulary) {
  const lineText = line?.en || "";
  const lineNumber = index + 1;
  const words = [];
  const seenAliases = new Set();
  (Array.isArray(line?.words) ? line.words : []).forEach((item) => {
    addSongWordChip(words, item, lineText, seenAliases);
  });
  (Array.isArray(vocabulary) ? vocabulary : []).forEach((item) => {
    const aliases = songVocabularyAliases(item);
    const belongsToLine = songSourceLineMatches(item, lineNumber) || aliases.some((alias) => songLineHasAlias(lineText, alias));
    if (belongsToLine) addSongWordChip(words, item, lineText, seenAliases);
  });
  songFallbackWordsFromLine(lineText).forEach((item) => {
    addSongWordChip(words, item, lineText, seenAliases);
  });
  return words.sort((a, b) => a.order - b.order);
}

function renderSongAnalysis(data) {
  const title = data.title || $("#songTitle").value.trim() || "英文歌精读";
  const artist = data.artist || $("#songArtist").value.trim();
  const lines = Array.isArray(data.lines) ? data.lines : [];
  const vocabulary = Array.isArray(data.vocabulary) ? data.vocabulary : [];
  const isFallbackDraft = Boolean(data.isFallbackDraft);
  state.songAnalysis = data;
  $("#songStudyTitle").textContent = title;
  $("#songStudyMeta").textContent = `${artist ? artist + " · " : ""}${lines.length} 句 · ${isFallbackDraft ? "临时学习卡" : `${vocabulary.length} 个词库词条`}`;

  if (!lines.length) {
    renderSongEmpty();
    return;
  }

  const intro = data.intro || {};
  const interpretation = data.interpretation || {};
  const insightHtml = [
    isFallbackDraft ? renderSongInsightBlock("临时状态", [
      { label: "说明", value: "MiniMax 没有返回可解析 JSON，系统先保留歌曲和逐句占位，方便你稍后重试。" }
    ]) : "",
    renderLyricsReviewBlock(data.lyricsReview),
    renderSongInsightBlock("歌曲介绍", [
      { label: "一句话", value: intro.quick },
      { label: "陪读", value: intro.guided },
      { label: "深入", value: intro.deep }
    ]),
    renderSongInsightBlock("歌曲解释", [
      { label: "孩子版", value: interpretation.child },
      { label: "家长版", value: interpretation.parent },
      { label: "深讲", value: interpretation.deep }
    ])
  ].join("");

  const lineHtml = lines.map((line, index) => {
    const wordsInLine = songWordsForLine(line, index, vocabulary);
    return `
      <article class="song-line-card">
        <div class="song-line-head">
          <div>
            <span class="prompt-label">Line ${index + 1}</span>
            <strong class="lyric-line">${escapeHtml(line.en || "")}</strong>
            <p class="translation-line song-translation">${escapeHtml(line.zh || "")}</p>
            <p class="translation-line">${escapeHtml(line.explanation || "")}</p>
          </div>
          <button class="ghost-btn speak-line" type="button" data-line="${escapeHtml(line.en || "")}">朗读</button>
        </div>
        <div class="word-chip-grid">
          ${wordsInLine.map((item) => `
            <button class="word-chip" type="button" data-word="${escapeHtml(item.text || "")}">
              <strong>${escapeHtml(item.text || "")}</strong>
              <small>${escapeHtml(item.meaning || "")}${item.pos ? " · " + escapeHtml(item.pos) : ""}</small>
              <small>${item.isSlang ? "俚语 · " : ""}${escapeHtml(item.explanation || item.pronunciationTip || item.slangNote || "")}</small>
            </button>
          `).join("")}
        </div>
        ${line.parentQuestion ? `<p class="translation-line"><b>陪读问题：</b>${escapeHtml(line.parentQuestion)}</p>` : ""}
      </article>
    `;
  }).join("");

  const vocabularyHtml = vocabulary.length ? `
    <article class="song-line-card song-vocab-card">
      <strong>Word Camp 词库词条</strong>
      <p class="translation-line">${vocabulary.length} 个不重复词条；分析完成后会自动同步到 Word Camp。</p>
      <div class="word-chip-grid">
        ${vocabulary.map((item) => `
          <button class="word-chip" type="button" data-word="${escapeHtml(item.word || item.lemma || "")}">
            <strong>${escapeHtml(item.word || item.lemma || "")}</strong>
            <small>${escapeHtml(item.zh || item.meaningInSong || "")}${item.pos ? " · " + escapeHtml(item.pos) : ""}</small>
            <small>${item.isSlang ? "俚语 · " : ""}${escapeHtml(item.slangNote || item.meaningInSong || "")}</small>
          </button>
        `).join("")}
      </div>
    </article>
  ` : "";

  $("#songLines").innerHTML = insightHtml + lineHtml + vocabularyHtml;

  bindSongPlayback();
}

function renderSongPending(payload, errorMessage) {
  $("#songStudyTitle").textContent = payload.title || "英文歌精读";
  $("#songStudyMeta").textContent = `${payload.lyrics.length} 句歌词 · 分析未完成`;
  const detail = String(errorMessage || "");
  const authHint = /401|403|authorized_error|invalid api key|API secret key|1004|2049|鉴权|API Key/i.test(detail)
    ? " 当前更像是 MiniMax API Key 与 endpoint 不匹配，或 Key 已失效；请在主页齿轮重新保存对应控制台生成的 Key。"
    : "";
  const timeoutHint = !authHint && /timed out|timeout|aborted|请求超过|Operation was aborted|超时/i.test(detail)
    ? " 当前更像是整首歌分析请求耗时过长；可以稍后重试，或先选择较浅解释深度。"
    : "";
  const networkHint = !authHint && !timeoutHint && /ENOTFOUND|network|网络连接失败|fetch failed|Could not resolve|DNS|代理|VPN/i.test(detail)
    ? " 当前更像是本机服务到 MiniMax 的网络/DNS/代理问题，不是歌曲内容问题。请确认运行服务的 Terminal 能访问 MiniMax 域名，或让 Node/curl 走同一个代理/VPN。"
    : "";
  const hint = authHint || timeoutHint || networkHint;
  $("#songStatus").textContent = (errorMessage || "MiniMax 分析没有完成。请检查主页齿轮里的 API Key、端点和额度后重试。") + hint;
  $("#songStatus").className = "feedback bad";
  const songLabel = [payload.title || payload.selectedSong?.title, payload.artist || payload.selectedSong?.artist].filter(Boolean).join(" · ");
  $("#songLines").innerHTML = `
    <article class="song-line-card">
      <strong class="lyric-line">分析没有完成</strong>
      <p class="translation-line">${escapeHtml((errorMessage || "MiniMax 暂时没有返回可用分析。") + hint)}</p>
      <p class="translation-line">已收到 ${payload.lyrics.length} 句歌词${songLabel ? ` · ${escapeHtml(songLabel)}` : ""}。请修正 API 或模型返回后重试。</p>
    </article>
  `;
}

function bindSongPlayback() {
  $all(".speak-line").forEach((button) => {
    button.addEventListener("click", () => button.dataset.line && speak(button.dataset.line));
  });
  $all(".word-chip").forEach((button) => {
    button.addEventListener("click", () => button.dataset.word && speak(button.dataset.word));
  });
}

async function requestSongCandidates() {
  const payload = getSongPayload();
  if (!payload.query && !payload.title && !payload.artist) {
    $("#songStatus").textContent = "请先输入歌曲线索、歌曲名或歌手。";
    $("#songStatus").className = "feedback bad";
    return;
  }
  const workflowVersion = beginSongWorkflow({ clearSelectedSong: true });
  renderSongAnalysisProgress(payload, "正在搜索候选歌曲", {
    detail: "正在根据歌曲线索匹配可能的歌名、歌手和来源。",
    metaSuffix: "正在搜索候选",
    steps: ["歌曲线索", "候选匹配", "等待选择"],
    clearSelectedSong: true
  });
  try {
    const data = await callAiJson("song-candidates", buildSongCandidatePrompt(payload), payload);
    if (!isCurrentSongWorkflow(workflowVersion)) return;
    const candidates = Array.isArray(data.candidates) ? data.candidates.map((candidate, index) => ({
      id: slugifyWordBankId(candidate.id || `${candidate.title || "song"}-${candidate.artist || index}`),
      title: String(candidate.title || "").trim(),
      artist: String(candidate.artist || "").trim(),
      album: String(candidate.album || "").trim(),
      year: String(candidate.year || "").trim(),
      language: String(candidate.language || "").trim(),
      confidence: Number(candidate.confidence || 0),
      reason: String(candidate.reason || "").trim(),
      searchHint: String(candidate.searchHint || "").trim(),
      lyricsAccessNote: String(candidate.lyricsAccessNote || "").trim()
    })).filter((candidate) => candidate.title) : [];
    renderSongCandidates(candidates);
    renderSongCandidateResult(payload, candidates, data.notice);
    $("#songStatus").textContent = candidates.length ? `找到 ${candidates.length} 个候选。请选择具体歌曲。` : (data.notice || "没有找到明确候选，请补充更多线索。");
    $("#songStatus").className = candidates.length ? "feedback good" : "feedback bad";
  } catch (error) {
    if (!isCurrentSongWorkflow(workflowVersion)) return;
    $("#songStatus").textContent = `候选搜索失败：${error.message}`;
    $("#songStatus").className = "feedback bad";
  }
}

function songVocabularyToWordBank() {
  const analysis = state.songAnalysis;
  const vocabulary = Array.isArray(analysis?.vocabulary) ? analysis.vocabulary : [];
  if (!vocabulary.length) throw new Error("还没有可同步到词库的词条。请先分析歌曲。");
  const title = analysis.title || $("#songTitle").value.trim() || "Song Notes";
  const artist = analysis.artist || $("#songArtist").value.trim();
  const bankId = slugifyWordBankId(`song-${artist || "unknown"}-${title}`);
  const zhPool = vocabulary.map((item) => String(item.zh || item.meaning || item.meaningInSong || "").trim()).filter(Boolean);
  const seen = new Set();
  const wordsPayload = vocabulary.map((item) => ({
    word: item.word || item.lemma || item.text,
    zh: item.zh || item.meaningInSong || item.meaning,
    ipa: item.ipa || item.pronunciation || "待补充",
    pos: item.isSlang ? `slang${item.pos ? " / " + item.pos : ""}` : (item.pos || (item.isPhrase ? "phrase" : "word")),
    speakText: item.speakText || item.word || item.lemma || item.text,
    spelling: item.spelling || String(item.word || item.lemma || item.text || "").toLowerCase().replace(/[^a-z]/g, ""),
    example: item.example || "",
    phonics: Array.isArray(item.phonics) ? item.phonics : [],
    syllables: Array.isArray(item.syllables) ? item.syllables : [],
    distractors: Array.isArray(item.distractors) ? item.distractors : [],
    sourceNote: item.isSlang ? `俚语：${item.slangNote || "注意语气和使用场景"}` : (item.meaningInSong || "")
  })).map((item, index) => normalizeImportedWord(item, bankId, index, zhPool)).filter(Boolean).filter((item) => {
    const key = item.word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (wordsPayload.length < minWordsPerBank) {
    throw new Error(`这首歌只提取到 ${wordsPayload.length} 个有效词条，少于 ${minWordsPerBank} 个，暂不加入 Word Camp。`);
  }
  return {
    id: bankId,
    title: `Song: ${title}`,
    source: [title, artist].filter(Boolean).join(" - "),
    importedAt: new Date().toISOString(),
    words: wordsPayload.map(({ banks, ...word }) => word)
  };
}

function upsertSongAnalysisWordBank() {
  const bank = songVocabularyToWordBank();
  const existingIndex = state.customWordBanks.findIndex((item) => item.id === bank.id);
  if (existingIndex >= 0) {
    state.customWordBanks[existingIndex] = bank;
  } else {
    state.customWordBanks.push(bank);
  }
  wordBankLabels[bank.id] = bank.title;
  state.deletedWordBanks = state.deletedWordBanks.filter((id) => id !== bank.id);
  state.wordBank = bank.id;
  saveLocalItem("jojoDeletedWordBanks", JSON.stringify(state.deletedWordBanks));
  saveLocalItem("jojoWordBank", state.wordBank);
  saveCustomWordBanks();
  syncWordBankSelect();
  renderWordStudyState({ library: true, syncSelect: true });
  newWordQuestion();
  return { bank, updated: existingIndex >= 0 };
}

async function requestSongAnalysis() {
  const payload = getSongPayload();
  if (!payload.lyrics.length) {
    renderSongEmpty();
    $("#songStatus").textContent = "请先粘贴你拥有或授权使用的歌词。";
    $("#songStatus").className = "feedback bad";
    return;
  }

  incrementPlayed();
  const workflowVersion = beginSongWorkflow({ clearSelectedSong: true });
  renderSongAnalysisProgress(payload, "正在请求 MiniMax-M3 分析", { clearSelectedSong: true });

  try {
    const data = await callAiJson("song-analysis", buildSongPrompt(payload), payload);
    if (!isCurrentSongWorkflow(workflowVersion)) return;
    $("#songStatus").textContent = "大模型分析完成。";
    $("#songStatus").className = "feedback good";
    renderSongAnalysis(data);
    persistSongAnalysis(data, payload);
    try {
      const { bank, updated } = upsertSongAnalysisWordBank();
      $("#songStatus").textContent = updated
        ? `大模型分析完成，已更新 Word Camp：“${bank.title}”，共 ${bank.words.length} 个词条。`
        : `大模型分析完成，已自动加入 Word Camp：“${bank.title}”，共 ${bank.words.length} 个词条。`;
      $("#songStatus").className = "feedback good";
    } catch (error) {
      $("#songStatus").textContent = `大模型分析完成，但自动加入词库失败：${error.message}`;
      $("#songStatus").className = "feedback bad";
    }
  } catch (error) {
    if (!isCurrentSongWorkflow(workflowVersion)) return;
    if (/没有返回 JSON|JSON 格式|JSON 对象|not valid JSON|Unexpected end/i.test(error.message)) {
      const fallback = buildFallbackSongAnalysis(payload, error.message);
      $("#songStatus").textContent = "MiniMax 返回了非结构化内容，已先生成临时学习卡。请稍后重试完整分析。";
      $("#songStatus").className = "feedback bad";
      renderSongAnalysis(fallback);
      renderSongHistory();
      return;
    }
    renderSongPending(payload, `接口暂未可用：${error.message}`);
  }
}

async function testAiSettings() {
  $("#aiSettingsStatus").textContent = "正在测试 MiniMax 连接...";
  $("#aiSettingsStatus").className = "feedback";
  try {
    await saveAiSettingsFromForm();
    const result = await callAiJson("connection-test", "请严格输出 JSON：{\"ok\":true,\"message\":\"连接成功\"}", {});
    $("#aiSettingsStatus").textContent = result.message || "MiniMax-M3 连接成功。";
    $("#aiSettingsStatus").className = "feedback good";
    showToast("MiniMax-M3 连接成功", "good");
  } catch (error) {
    $("#aiSettingsStatus").textContent = `连接失败：${error.message}`;
    $("#aiSettingsStatus").className = "feedback bad";
    showToast("MiniMax-M3 连接失败", "bad");
  }
}

function speakSongAll() {
  const lines = $("#songLyrics").value.trim().split(/\n+/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return;
  speak(lines.join(". "));
  incrementPlayed();
}

function svgDataUri(title, background, accent) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${background}"/>
    <rect x="120" y="160" width="560" height="300" rx="30" fill="white" stroke="#1f2937" stroke-width="12"/>
    <circle cx="250" cy="310" r="70" fill="${accent}" opacity=".92"/>
    <path d="M350 365 L435 220 L530 365 Z" fill="#f2b84b" stroke="#1f2937" stroke-width="10"/>
    <text x="400" y="520" text-anchor="middle" font-family="Arial" font-size="52" font-weight="700" fill="#1f2937">${title}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function analyzeArt(title, note) {
  const clues = [];
  if (/机器人|车|飞船|机器|火车/.test(title + note)) clues.push("有工程和结构想象");
  if (/星|月|太阳|天空|云/.test(title + note)) clues.push("把自然元素当作故事舞台");
  if (/家|妈妈|爸爸|朋友/.test(title + note)) clues.push("包含亲密关系和生活经验");
  if (!clues.length) clues.push("有自由探索的视觉表达");
  return `模拟AI分析：这件作品${clues.join("，")}。建议评价时先描述你看到的线条、颜色和主体，再问 Jojo：这里正在发生什么？下一秒会怎样？`;
}

function persistGallery() {
  saveLocalItem("jojoGallery", JSON.stringify(state.gallery));
  $("#galleryCount").textContent = state.gallery.length;
  if (galleryPersistenceReady) saveSharedState({ gallery: state.gallery });
  invalidateOssImageStorageStatus();
}

function gallerySortValue(art) {
  return new Date(art.createdAt || art.date || 0).getTime() || 0;
}

function galleryAspectRatio(art) {
  const width = Number(art.width || 0);
  const height = Number(art.height || 0);
  if (width > 0 && height > 0) return Math.max(0.35, Math.min(3.5, width / height));
  return 4 / 3;
}

function galleryTileWidthForRatio(ratio) {
  return Math.max(120, Math.min(520, Math.round(ratio * 240)));
}

function renderGallery(options = {}) {
  const items = state.gallery
    .map((art, index) => ({ ...art, __index: index }))
    .sort((a, b) => gallerySortValue(b) - gallerySortValue(a) || String(b.date || "").localeCompare(String(a.date || "")));
  $("#artGrid").innerHTML = items.map((art) => {
    const ratio = galleryAspectRatio(art);
    const tileWidth = galleryTileWidthForRatio(ratio);
    return `
    <article class="art-card" role="button" tabindex="0" data-art-index="${art.__index}" style="--art-ratio:${ratio};--art-width:${tileWidth}px">
      <img src="${art.image}" alt="${escapeHtml(art.title)}" loading="lazy">
      <span class="art-date-badge">${escapeHtml(art.date || "")}</span>
      <span class="art-title-badge">${escapeHtml(art.title || "Untitled")}</span>
    </article>
  `;
  }).join("");
  $all(".art-card[data-art-index]").forEach((card) => {
    card.addEventListener("click", () => openArtPreview(card.dataset.artIndex));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openArtPreview(card.dataset.artIndex);
      }
    });
    const image = card.querySelector("img");
    image?.addEventListener("load", () => repairGalleryArtworkRatio(card, image), { once: true });
  });
  if (options.persist !== false) persistGallery();
}

function repairGalleryArtworkRatio(card, image) {
  const index = Number(card.dataset.artIndex);
  const art = state.gallery[index];
  if (!art || !image.naturalWidth || !image.naturalHeight) return;
  if (Number(art.width) === image.naturalWidth && Number(art.height) === image.naturalHeight) return;
  art.width = image.naturalWidth;
  art.height = image.naturalHeight;
  const ratio = galleryAspectRatio(art);
  card.style.setProperty("--art-ratio", ratio);
  card.style.setProperty("--art-width", `${galleryTileWidthForRatio(ratio)}px`);
  persistGallery();
}

async function analyzeArtworkWithAi(index) {
  const art = state.gallery[index];
  if (!art) return;
  art.ai = "正在调用 MiniMax 分析这件作品...";
  renderGallery();
  try {
    const result = await callAiJson("art-analysis", buildArtPrompt(art), {
      title: art.title,
      date: art.date,
      note: art.note,
      image: art.image
    });
    art.ai = result.analysis || extractAiText(result);
  } catch (error) {
    art.ai = `${analyzeArt(art.title, art.note)}（MiniMax 暂未可用：${error.message}）`;
  }
  renderGallery();
}

function imageDimensions(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve({ width: image.naturalWidth || 0, height: image.naturalHeight || 0 });
    image.onerror = () => resolve({ width: 0, height: 0 });
    image.src = src;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

async function previewArtFile(file) {
  if (!file?.type?.startsWith("image/")) return;
  pendingArtFile = file;
  const dataUrl = await readFileAsDataUrl(file);
  $("#artPreviewImage").src = dataUrl;
  $("#artPreviewName").textContent = file.name || "待加入画廊的作品";
  $("#artUploadPreview").hidden = false;
}

function clearArtUploadPreview() {
  pendingArtFile = null;
  $("#artPreviewImage").removeAttribute("src");
  $("#artPreviewName").textContent = "";
  $("#artUploadPreview").hidden = true;
}

function openArtPreview(index) {
  const art = state.gallery[Number(index)];
  const dialog = $("#artPreviewDialog");
  const image = $("#artPreviewFullImage");
  if (!art || !dialog || !image) return;
  image.src = art.image;
  image.alt = art.title || "作品全屏预览";
  dialog.showModal();
}

function closeArtPreview() {
  const dialog = $("#artPreviewDialog");
  if (dialog?.open) dialog.close();
}

async function addArtwork(event) {
  event.preventDefault();
  const file = $("#artFile").files[0] || pendingArtFile;
  if (!file) {
    showToast("请先拖入或选择一张作品图片", "bad");
    return;
  }
  try {
    if (!galleryPersistenceReady) await loadSharedGallery();
    assertOssUploadReady();
    const dataUrl = await readFileAsDataUrl(file);
    const dimensions = await imageDimensions(dataUrl);
    showToast(demoMode ? "Demo 正在载入作品..." : "正在上传作品到 OSS...", "good");
    const upload = await uploadImageDataUrlToOss(dataUrl, file.name || "artwork", "art-gallery");
    const title = $("#artTitle").value.trim();
    const note = $("#artNote").value.trim();
    state.gallery.push({
      title,
      date: $("#artDate").value,
      createdAt: new Date().toISOString(),
      note,
      image: upload.src,
      objectKey: upload.objectKey,
      storage: upload.storage || "oss",
      width: dimensions.width,
      height: dimensions.height,
      ai: analyzeArt(title, note)
    });
    const newIndex = state.gallery.length - 1;
    $("#artForm").reset();
    $("#artDate").valueAsDate = new Date();
    clearArtUploadPreview();
    renderGallery();
    analyzeArtworkWithAi(newIndex);
  } catch (error) {
    showToast(error.message || "作品图片读取失败", "bad");
  }
}

function exportGallery() {
  const blob = new Blob([JSON.stringify(state.gallery, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "jojo-gallery.json";
  link.click();
  URL.revokeObjectURL(url);
}

function installArtUploadInteractions() {
  const dropzone = $("#artDropzone");
  const input = $("#artFile");
  if (!dropzone || !input) return;
  dropzone.addEventListener("click", (event) => {
    if (event.target !== input) input.click();
  });
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (file) previewArtFile(file);
  });
  ["dragenter", "dragover"].forEach((type) => {
    dropzone.addEventListener(type, (event) => {
      event.preventDefault();
      dropzone.classList.add("is-dragging");
    });
  });
  ["dragleave", "drop"].forEach((type) => {
    dropzone.addEventListener(type, (event) => {
      event.preventDefault();
      if (type === "dragleave" && dropzone.contains(event.relatedTarget)) return;
      dropzone.classList.remove("is-dragging");
    });
  });
  dropzone.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    pendingArtFile = file;
    try {
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
    } catch {}
    previewArtFile(file);
  });
}

function renderCardCottage() {
  const grid = $("#cardhouseGrid");
  if (!grid) return;
  state.cardCottage = normalizeCardCottageState(state.cardCottage);
  const totalCards = currentCardCottageTotal();
  const revealed = new Set(state.cardCottage.revealed);
  grid.innerHTML = Array.from({ length: totalCards }, (_, index) => {
    const photoIndex = state.cardCottage.assignments[index] || 0;
    const isRevealed = revealed.has(index);
    const photoSrc = cardCottagePhotoSourceForAssignment(photoIndex);
    return `
      <button class="reward-card ${isRevealed ? "is-revealed" : "locked"}" type="button" data-card-index="${index}" aria-label="第 ${index + 1} 张${isRevealed ? "已翻开奖励卡" : "待翻开奖励卡"}">
        <span class="reward-card-inner">
          <span class="reward-card-face reward-card-back" aria-hidden="true"></span>
          <span class="reward-card-face reward-card-front">
            <img class="reward-card-photo" src="${escapeHtml(photoSrc)}" alt="Jojo 奖励卡照片">
            <img class="reward-card-frame" src="${cardCottageFrameSrc}" alt="">
          </span>
        </span>
      </button>
    `;
  }).join("");
  $all(".reward-card").forEach((card) => {
    card.addEventListener("click", () => revealCardCottageCard(card));
  });
  updateCardCottageSummary();
  renderCardCottageSettings();
}

function updateCardCottageSummary() {
  const totalCards = currentCardCottageTotal();
  const revealedCount = Math.max(0, Math.min(totalCards, state.cardCottage.revealed.length));
  const remainingCount = Math.max(0, totalCards - revealedCount);
  const bigStars = globalBigStars();
  if ($("#cardhouseBigStarCount")) $("#cardhouseBigStarCount").textContent = String(bigStars);
  if ($(".cardhouse-star-bank")) $(".cardhouse-star-bank").setAttribute("aria-label", `当前全局大金星 ${bigStars} 颗`);
  if ($("#cardhouseProgressCount")) $("#cardhouseProgressCount").textContent = `${revealedCount}/${totalCards}`;
  if ($(".cardhouse-progress-pill")) $(".cardhouse-progress-pill").setAttribute("aria-label", `已翻开 ${revealedCount} / ${totalCards}`);
  if ($("#cardhouseBoard")) $("#cardhouseBoard").setAttribute("aria-label", `${totalCards} 张奖励卡`);
  if ($("#cardSettingsProgressCount")) $("#cardSettingsProgressCount").textContent = `${revealedCount}/${totalCards}`;
  if ($("#cardSettingsRemainingCount")) $("#cardSettingsRemainingCount").textContent = String(remainingCount);
  if ($("#cardSettingsFilledSlotCount")) $("#cardSettingsFilledSlotCount").textContent = String(filledCardCottageSlotIndexes().length);
  if ($("#cardCottageTotalInput")) {
    $("#cardCottageTotalInput").min = String(cardCottageMinTotal);
    $("#cardCottageTotalInput").max = String(cardCottageMaxTotal);
    $("#cardCottageTotalInput").value = String(totalCards);
  }
}

function resetCardCottage() {
  const totalCards = currentCardCottageTotal();
  state.cardCottage = normalizeCardCottageState({ ...state.cardCottage, assignments: shuffledCardAssignments(state.cardCottage?.slots, totalCards), revealed: [], totalCards });
  saveCardCottageState();
  renderCardCottage();
  const status = $("#cardhouseSettingsStatus");
  if (status) {
    status.textContent = "卡牌已复位，并重新随机分配照片。";
    status.className = "feedback good";
  }
  showToast("Card Cottage 已复位", "good");
}

function cardCottagePhotoSourceForAssignment(sourceIndex) {
  const slots = normalizeCardCottageSlots(state.cardCottage?.slots);
  const uploadedSlotIndexes = filledCardCottageSlotIndexes(slots);
  if (uploadedSlotIndexes.length) {
    return appAssetUrl(slots[sourceIndex]?.src || slots[uploadedSlotIndexes[0]]?.src || cardCottagePhotoSources[0]);
  }
  return cardCottagePhotoSources[sourceIndex] || cardCottagePhotoSources[0];
}

function cardCottagePhotoForIndex(index) {
  const photoIndex = state.cardCottage.assignments[index] || 0;
  return cardCottagePhotoSourceForAssignment(photoIndex);
}

function openCardPreview(index) {
  const dialog = $("#cardPreviewDialog");
  const image = $("#cardPreviewImage");
  if (!dialog || !image) return;
  image.src = cardCottagePhotoForIndex(index);
  image.alt = `Jojo 奖励卡大图 ${index + 1}`;
  dialog.showModal();
}

function closeCardPreview() {
  const dialog = $("#cardPreviewDialog");
  if (dialog?.open) dialog.close();
}

function spendCardCottageBigStar() {
  state.globalRewards = normalizeGlobalRewards(state.globalRewards, 0);
  if (state.globalRewards.bigStars < 1) {
    playCue("bad");
    showToast("需要 1 颗全局大金星才能翻开奖励卡。先去任意练习里攒大星！", "bad");
    updateCardCottageSummary();
    return false;
  }
  state.globalRewards.bigStars -= 1;
  persistGlobalRewards();
  renderGlobalRewards();
  updateCardCottageSummary();
  return true;
}

function setCardSettingsStatus(message, tone = "good") {
  const status = $("#cardhouseSettingsStatus");
  if (!status) return;
  status.textContent = message;
  status.className = `feedback ${tone}`;
}

function rerollCardCottageAssignments() {
  const totalCards = currentCardCottageTotal();
  state.cardCottage = normalizeCardCottageState({
    ...state.cardCottage,
    assignments: shuffledCardAssignments(state.cardCottage?.slots, totalCards),
    totalCards
  });
}

function saveCardCottageTotalFromForm() {
  const input = $("#cardCottageTotalInput");
  const previousTotal = currentCardCottageTotal();
  const nextTotal = normalizeCardCottageTotal(input?.value);
  if (input) input.value = String(nextTotal);
  if (nextTotal === previousTotal) {
    setCardSettingsStatus(`卡片总数已经是 ${nextTotal}。`, "good");
    return;
  }
  state.cardCottage = normalizeCardCottageState({
    ...state.cardCottage,
    totalCards: nextTotal
  });
  saveCardCottageState();
  renderCardCottage();
  setCardSettingsStatus(`卡片总数已更新为 ${nextTotal}。`, "good");
}

function renderCardCottageSettings() {
  const grid = $("#cardSlotGrid");
  if (!grid) return;
  const slots = normalizeCardCottageSlots(state.cardCottage?.slots);
  state.cardCottage.slots = slots;
  if ($("#cardSettingsFilledSlotCount")) {
    $("#cardSettingsFilledSlotCount").textContent = String(filledCardCottageSlotIndexes(slots).length);
  }
  grid.innerHTML = slots.map((slot, index) => {
    const slotNumber = String(index + 1).padStart(2, "0");
    return `
      <article class="card-slot ${slot?.src ? "has-image" : ""}" data-card-slot="${index}">
        <input class="card-slot-input" id="cardSlotInput${index}" type="file" accept="image/png,image/jpeg,image/webp" data-card-slot-input="${index}">
        <button class="card-slot-drop" type="button" data-card-slot-pick="${index}" aria-label="${slot?.src ? `替换第 ${index + 1} 个卡槽图片` : `上传第 ${index + 1} 个卡槽图片`}">
          ${slot?.src ? `<img src="${escapeHtml(slot.src)}" alt="第 ${index + 1} 个卡槽图片">` : `<span>+</span>`}
          <strong>Slot ${slotNumber}</strong>
          <small>${slot?.src ? "点击或拖放替换" : "点击或拖放上传"}</small>
        </button>
        <div class="card-slot-actions">
          <button class="ghost-btn" type="button" data-card-slot-pick="${index}">${slot?.src ? "替换" : "上传"}</button>
          <button class="ghost-btn danger-btn" type="button" data-card-slot-delete="${index}" ${slot?.src ? "" : "disabled"}>删除</button>
        </div>
      </article>
    `;
  }).join("");
  bindCardSlotEvents();
}

function readImageFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("图片读取失败"));
    reader.readAsDataURL(file);
  });
}

function loadImageFromDataUrl(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("图片格式无法识别"));
    image.src = dataUrl;
  });
}

async function resizeCardImageFile(file) {
  if (!file?.type?.startsWith("image/")) throw new Error("请选择图片文件。");
  const rawDataUrl = await readImageFileAsDataUrl(file);
  const image = await loadImageFromDataUrl(rawDataUrl);
  const scale = Math.min(1, cardCottageUploadMaxEdge / Math.max(image.naturalWidth, image.naturalHeight));
  const width = Math.max(1, Math.round(image.naturalWidth * scale));
  const height = Math.max(1, Math.round(image.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", 0.88);
}

async function uploadCardCottageSlot(slotIndex, file) {
  const index = Number(slotIndex);
  if (!Number.isInteger(index) || index < 0 || index >= cardCottageSlotTotal || !file) return;
  try {
    setCardSettingsStatus(`正在处理 Slot ${String(index + 1).padStart(2, "0")} 的图片...`, "good");
    assertOssUploadReady();
    const dataUrl = await resizeCardImageFile(file);
    let slot;
    if (serverPersistenceAvailable) {
      const response = await fetch(apiUrl("/api/card-cottage/upload"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot: index, fileName: file.name, dataUrl })
      });
      slot = await response.json();
      if (!response.ok || slot.error) throw new Error(slot.error || `上传接口返回 ${response.status}`);
    } else {
      throw new Error("请先用本机服务打开应用，并在主页设置里配置 OSS。");
    }
    state.cardCottage.slots[index] = slot;
    rerollCardCottageAssignments();
    saveCardCottageState();
    renderCardCottage();
    setCardSettingsStatus(`Slot ${String(index + 1).padStart(2, "0")} 已更新，卡牌已重新随机分配。`, "good");
  } catch (error) {
    setCardSettingsStatus(error.message || "图片上传失败。", "bad");
  }
}

async function deleteCardCottageSlot(slotIndex) {
  const index = Number(slotIndex);
  if (!Number.isInteger(index) || index < 0 || index >= cardCottageSlotTotal) return;
  const slot = state.cardCottage?.slots?.[index];
  if (!slot?.src) return;
  if (serverPersistenceAvailable && slot.objectKey) {
    try {
      await fetch(apiUrl("/api/oss/delete"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ objectKey: slot.objectKey })
      });
    } catch {}
  } else if (serverPersistenceAvailable && slot.src.startsWith("/api/card-cottage/assets/")) {
    try {
      await fetch(apiUrl("/api/card-cottage/delete"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ src: slot.src })
      });
    } catch {}
  }
  state.cardCottage.slots[index] = null;
  rerollCardCottageAssignments();
  saveCardCottageState();
  renderCardCottage();
  setCardSettingsStatus(`Slot ${String(index + 1).padStart(2, "0")} 已删除，卡牌已重新随机分配。`, "good");
}

function bindCardSlotEvents() {
  $all("[data-card-slot-pick]").forEach((button) => {
    button.addEventListener("click", () => {
      $(`#cardSlotInput${button.dataset.cardSlotPick}`)?.click();
    });
  });
  $all("[data-card-slot-input]").forEach((input) => {
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (file) uploadCardCottageSlot(input.dataset.cardSlotInput, file);
      input.value = "";
    });
  });
  $all("[data-card-slot-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteCardCottageSlot(button.dataset.cardSlotDelete));
  });
  $all("[data-card-slot]").forEach((slot) => {
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("is-dragging");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("is-dragging"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("is-dragging");
      const file = event.dataTransfer?.files?.[0];
      if (file) uploadCardCottageSlot(slot.dataset.cardSlot, file);
    });
  });
}

async function revealCardCottageCard(card) {
  const index = Number(card.dataset.cardIndex);
  if (!Number.isFinite(index) || card.classList.contains("is-revealing")) return;
  if (state.cardCottage.revealed.includes(index)) {
    openCardPreview(index);
    return;
  }
  if (!spendCardCottageBigStar()) return;
  state.cardCottage.revealed = [...new Set([...state.cardCottage.revealed, index])].sort((a, b) => a - b);
  saveCardCottageState();
  updateCardCottageSummary();
  const rect = card.getBoundingClientRect();
  const flyer = card.cloneNode(true);
  flyer.classList.add("reward-card-flyer");
  flyer.style.left = `${rect.left}px`;
  flyer.style.top = `${rect.top}px`;
  flyer.style.width = `${rect.width}px`;
  flyer.style.height = `${rect.height}px`;
  flyer.style.setProperty("--fly-x", `${window.innerWidth / 2 - rect.left - rect.width / 2}px`);
  flyer.style.setProperty("--fly-y", `${window.innerHeight / 2 - rect.top - rect.height / 2}px`);
  document.body.appendChild(flyer);
  card.classList.add("is-revealing", "is-revealing-source");
  window.setTimeout(() => {
    flyer.classList.add("is-revealed");
  }, 360);
  const animation = flyer.animate([
    { transform: "translate3d(0, 0, 0) rotateZ(0deg) rotateY(0deg) scale(1)", offset: 0 },
    { transform: "translate3d(var(--fly-x), var(--fly-y), 0) rotateZ(10deg) rotateY(92deg) scale(2.35)", offset: 0.45 },
    { transform: "translate3d(var(--fly-x), var(--fly-y), 0) rotateZ(370deg) rotateY(0deg) scale(2.35)", offset: 0.72 },
    { transform: "translate3d(0, 0, 0) rotateZ(0deg) rotateY(0deg) scale(1)", offset: 1 }
  ], {
    duration: 1050,
    easing: "cubic-bezier(.2,.8,.2,1)",
    fill: "forwards"
  });
  try {
    await animation.finished;
  } catch {}
  card.classList.remove("locked", "is-revealing", "is-revealing-source");
  card.classList.add("is-revealed");
  card.setAttribute("aria-label", `第 ${index + 1} 张已翻开奖励卡`);
  flyer.remove();
  updateCardCottageSummary();
}

function bindEvents() {
  window.addEventListener("hashchange", setView);
  if ("speechSynthesis" in window) {
    refreshSpeechVoices();
    speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
  }
  $("#openSettings").addEventListener("click", handleBrandClick);
  $("#artModeToggle").addEventListener("click", toggleArtMode);
  $("#activeViewSettings").addEventListener("click", openActiveViewSettings);
  $("#closeCardPreview").addEventListener("click", closeCardPreview);
  $("#cardPreviewDialog").addEventListener("click", (event) => {
    if (event.target === $("#cardPreviewDialog")) closeCardPreview();
  });
  $all("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => $(`#${button.dataset.closeDialog}`)?.close());
  });
  $all(".module-info-dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
  $all("#home .module-tile").forEach((tile) => {
    tile.addEventListener("click", handleHomeTileClick);
  });
  $("#closeSettings").addEventListener("click", closeSettings);
  $("#closeWordSettings").addEventListener("click", closeWordSettings);
  $("#aiMode").addEventListener("change", syncEndpointForMode);
  $("#saveAiSettings").addEventListener("click", saveAiSettingsFromForm);
  $("#saveOssSettings").addEventListener("click", saveOssSettingsFromForm);
  $("#saveWordSettings").addEventListener("click", saveWordSettingsFromForm);
  $("#saveCardCottageTotal").addEventListener("click", saveCardCottageTotalFromForm);
  $("#cardCottageTotalInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveCardCottageTotalFromForm();
    }
  });
  $("#resetCardCottage").addEventListener("click", resetCardCottage);
  $("#testAiSettings").addEventListener("click", testAiSettings);
  $("#settingsDialog").addEventListener("click", (event) => {
    if (event.target === $("#settingsDialog")) closeSettings();
  });
  $("#wordSettingsDialog").addEventListener("click", (event) => {
    if (event.target === $("#wordSettingsDialog")) closeWordSettings();
  });
  $("#newKanaQuestion").addEventListener("click", newKanaQuestion);
  $("#speakKana").addEventListener("click", () => state.kana && speak(state.kana.displayKana, "ja-JP"));
  $("#newWordQuestion").addEventListener("click", newWordQuestion);
  $("#speakWord").addEventListener("click", () => state.word && speak(state.word.speakText || state.word.word));
  $("#markDifficultWord").addEventListener("click", toggleCurrentWordDifficulty);
  $("#wordPrompt").addEventListener("click", () => state.word && speak(state.word.speakText || state.word.word));
  $("#wordPrompt").addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && state.word) {
      event.preventDefault();
      speak(state.word.speakText || state.word.word);
    }
  });
  $("#settingsWordBank").addEventListener("change", () => {
    state.wordBank = $("#settingsWordBank").value;
    saveLocalItem("jojoWordBank", state.wordBank);
    saveSharedState({ wordBank: state.wordBank });
    renderWordStudyState({ library: true, syncSelect: true });
    newWordQuestion();
  });
  $("#resetWordBank").addEventListener("click", resetCurrentWordBank);
  $("#resetWordStars").addEventListener("click", resetWordStars);
  $("#deleteWordBank").addEventListener("click", deleteCurrentWordBank);
  $("#renameSelectedBank").addEventListener("click", () => renameSelectedBanks("word"));
  $("#mergeSelectedBanks").addEventListener("click", () => mergeSelectedBanks("word"));
  $("#deleteSelectedBanks").addEventListener("click", () => deleteSelectedBanks("word"));
  $("#renameSelectedSongBank").addEventListener("click", () => renameSelectedBanks("song"));
  $("#mergeSelectedSongBanks").addEventListener("click", () => mergeSelectedBanks("song"));
  $("#deleteSelectedSongBanks").addEventListener("click", () => deleteSelectedBanks("song"));
  $("#upsertWordEntry").addEventListener("click", upsertWordEntryFromForm);
  $("#openImportGuide").addEventListener("click", openImportGuide);
  $("#closeImportGuide").addEventListener("click", closeImportGuide);
  $("#importGuideDialog").addEventListener("click", (event) => {
    if (event.target === $("#importGuideDialog")) closeImportGuide();
  });
  $("#openImportWordBank").addEventListener("click", openImportWordBankDialog);
  $("#closeImportWordBank").addEventListener("click", closeImportWordBankDialog);
  $("#importWordDialog").addEventListener("click", (event) => {
    if (event.target === $("#importWordDialog")) closeImportWordBankDialog();
  });
  $("#importWordBank").addEventListener("click", importWordBankFromForm);
  $("#clearImportWordBank").addEventListener("click", () => {
    $("#importBankTitle").value = "";
    $("#importBankId").value = "";
    $("#importWordBankJson").value = "";
    $("#importWordBankStatus").textContent = "每次导入都会保存为一个独立词库，可在上方切换、复位或删除。";
    $("#importWordBankStatus").className = "fine-print";
  });
  $("#wordMode").addEventListener("change", newWordQuestion);
  $("#phonicsFlashWrong").addEventListener("click", () => {
    playCue("bad");
    shakeElement($("#phonicsFlashCard"));
  });
  $("#phonicsFlashRight").addEventListener("click", () => {
    playCue("good");
    awardPhonicsStars(1);
    state.phonicsQuest.flashIndex += 1;
    savePhonicsQuestState();
    renderPhonicsFlash();
    advancePhonicsStep();
  });
  $("#phonicsFlashCard").addEventListener("click", () => {
    playCue("good");
    awardPhonicsStars(1);
    state.phonicsQuest.flashIndex += 1;
    savePhonicsQuestState();
    renderPhonicsFlash();
    advancePhonicsStep();
  });
  $("#phonicsBlendWrong").addEventListener("click", () => {
    playCue("bad");
    shakeElement($("#phonicsBlendSlots"));
  });
  $("#phonicsBlendRight").addEventListener("click", () => {
    const unit = activePhonicsUnit();
    const word = unit.words[state.phonicsQuest.blendIndex % unit.words.length];
    playCue("good");
    awardPhonicsStars(2);
    speak(word);
    state.phonicsQuest.blendIndex += 1;
    savePhonicsQuestState();
    renderPhonicsBlend();
    advancePhonicsStep();
  });
  $("#phonicsSpellSpeak").addEventListener("click", () => {
    const unit = activePhonicsUnit();
    const word = unit.words[state.phonicsQuest.spellIndex % unit.words.length];
    speak(word);
  });
  $("#phonicsSpellClear").addEventListener("click", () => {
    state.phonicsQuest.spelling = [];
    savePhonicsQuestState();
    renderPhonicsSpelling();
  });
  $("#phonicsSpellCheck").addEventListener("click", () => {
    const unit = activePhonicsUnit();
    const word = unit.words[state.phonicsQuest.spellIndex % unit.words.length];
    if (state.phonicsQuest.spelling.join("") === word) {
      playCue("good");
      awardPhonicsStars(2);
      speak(word);
      state.phonicsQuest.spellIndex += 1;
      savePhonicsQuestState();
      renderPhonicsSpell();
      advancePhonicsStep();
    } else {
      playCue("bad");
      shakeElement($("#phonicsSpellBox"));
    }
  });
  $("#phonicsStoryWrong").addEventListener("click", () => {
    const unit = activePhonicsUnit();
    const word = unit.words[state.phonicsQuest.blendIndex % unit.words.length];
    playCue("bad");
    $("#phonicsFeedback").textContent = `${word}: ${splitPhonicsWord(word).join(" - ")} → ${word}`;
    $("#phonicsFeedback").className = "feedback bad";
  });
  $("#phonicsStoryRight").addEventListener("click", () => {
    playCue("good");
    awardPhonicsStars(5);
    incrementPlayed();
    $("#phonicsFeedback").textContent = "读完了。可以继续攒 stars，或者挑战下一单元。";
    $("#phonicsFeedback").className = "feedback good";
    advancePhonicsStep();
  });
  $("#phonicsChallengeButton").addEventListener("click", completePhonicsChallenge);
  $("#findSongCandidates").addEventListener("click", requestSongCandidates);
  $("#analyzeSong").addEventListener("click", requestSongAnalysis);
  $("#speakSongAll").addEventListener("click", speakSongAll);
  $("#artForm").addEventListener("submit", addArtwork);
  installArtUploadInteractions();
  installHomeBackgroundUpload();
  $("#exportGallery").addEventListener("click", exportGallery);
  $("#closeArtPreview").addEventListener("click", closeArtPreview);
  $("#artPreviewDialog").addEventListener("click", (event) => {
    if (event.target === $("#artPreviewDialog")) closeArtPreview();
  });
}

function loginElements() {
  return {
    gate: $("#loginGate"),
    card: $(".login-card"),
    stars: $all("#loginStars span"),
    starBox: $("#loginStars"),
    status: $("#loginStatus"),
    buttons: $all("#loginKeypad button")
  };
}

function setAuthMode(mode = "") {
  authMode = mode === "demo" ? "demo" : "full";
  demoMode = authMode === "demo";
  document.body.classList.toggle("demo-mode", demoMode);
}

function updateLoginStars() {
  const { stars, starBox } = loginElements();
  stars.forEach((star, index) => {
    const digit = loginDigits[index] || "";
    const filled = Boolean(digit);
    const digitNode = star.querySelector(".login-star-digit");
    if (digitNode) digitNode.textContent = digit;
    star.classList.toggle("filled", filled);
    if (!filled) star.classList.remove("shattering");
  });
  if (starBox) starBox.setAttribute("aria-label", `已输入 ${loginDigits.length} 位`);
}

function triggerLoginStarBreak(index) {
  const star = loginElements().stars[index];
  if (!star) return;
  star.classList.remove("shattering");
  void star.offsetWidth;
  star.classList.add("shattering");
  window.setTimeout(() => star.classList.remove("shattering"), 560);
}

function playLoginSound(type = "digit") {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }
  const patterns = {
    digit: { notes: [523.25, 783.99], duration: 0.12, gap: 0.045, gain: 0.055, wave: "sine" },
    backspace: { notes: [392, 293.66], duration: 0.1, gap: 0.04, gain: 0.045, wave: "triangle" },
    error: { notes: [220, 185], duration: 0.15, gap: 0.055, gain: 0.07, wave: "triangle" },
    success: { notes: [659.25, 783.99, 1046.5, 1318.51], duration: 0.16, gap: 0.07, gain: 0.075, wave: "sine" }
  };
  const pattern = patterns[type] || patterns.digit;
  pattern.notes.forEach((frequency, index) => {
    const start = context.currentTime + index * pattern.gap;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = pattern.wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(pattern.gain, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + pattern.duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + pattern.duration + 0.02);
  });
  window.setTimeout(() => context.close(), Math.max(360, pattern.notes.length * pattern.gap * 1000 + 260));
}

function setLoginStatus(message, tone = "", label = "") {
  const { status } = loginElements();
  if (!status) return;
  status.textContent = message;
  status.className = `login-status ${tone}`.trim();
  if (label) {
    status.setAttribute("aria-label", label);
  } else {
    status.removeAttribute("aria-label");
  }
}

function setLoginButtonsDisabled(disabled) {
  loginElements().buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

function clearLoginDigits() {
  loginDigits = [];
  updateLoginStars();
}

function shakeLoginCard() {
  const { card } = loginElements();
  if (!card) return;
  card.classList.remove("shake");
  void card.offsetWidth;
  card.classList.add("shake");
}

function resetLoginDissolveState() {
  const { gate, card } = loginElements();
  gate?.classList.remove("is-unlocking");
  card?.classList.remove("is-dissolving");
  document.body.classList.remove("auth-unlocking");
}

function dissolveLoginGate() {
  const { gate, card } = loginElements();
  if (!gate) return Promise.resolve();
  document.body.classList.add("auth-unlocking");
  gate.classList.add("is-unlocking");
  card?.classList.add("is-dissolving");
  return new Promise((resolve) => {
    window.setTimeout(resolve, 980);
  });
}

function setLoginCooldown(ms = 0, message = "暂时锁住了。") {
  window.clearInterval(loginCountdownTimer);
  const until = Date.now() + Math.max(0, Number(ms || 0));
  if (until <= Date.now()) {
    setLoginButtonsDisabled(false);
    return;
  }
  clearLoginDigits();
  setLoginButtonsDisabled(true);
  const tick = () => {
    const remaining = Math.ceil((until - Date.now()) / 1000);
    if (remaining <= 0) {
      window.clearInterval(loginCountdownTimer);
      setLoginButtonsDisabled(false);
      setLoginStatus("", "", "可以继续输入");
      return;
    }
    setLoginStatus(String(remaining), "bad", `${message} ${remaining} 秒后再试`);
  };
  tick();
  loginCountdownTimer = window.setInterval(tick, 500);
}

async function beginAuthenticatedSession(data = {}, options = {}) {
  setAuthMode(data.mode || "full");
  setLoginButtonsDisabled(true);
  setLoginStatus("…", "good", demoMode ? "正在打开 Demo 模式" : "正在打开 Jojo LAB");
  if (options.animate !== false) playLoginSound("success");
  await startApp();
  const { gate } = loginElements();
  if (options.animate !== false) {
    await dissolveLoginGate();
  }
  document.body.classList.remove("auth-locked", "auth-checking", "auth-unlocking");
  if (gate) gate.hidden = true;
  resetLoginDissolveState();
  if (demoMode) showToast("Demo 模式已开启：6 颗大星星，操作不会保存。", "good");
}

async function submitLoginPin() {
  if (loginSubmitting || loginDigits.length !== 4) return;
  loginSubmitting = true;
  setLoginButtonsDisabled(true);
  setLoginStatus("…", "good", "正在确认");
  try {
    const response = await fetch(apiUrl("/api/auth/login"), {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin: loginDigits.join("") })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.authenticated) {
      const wait = Number(data.retryAfterMs || 0);
      if (wait > 0) {
        playLoginSound("error");
        setLoginCooldown(wait, data.error || "暂时锁住了。");
      } else {
        playLoginSound("error");
        setLoginStatus("×", "bad", data.error || "密码不对");
        shakeLoginCard();
        clearLoginDigits();
        setLoginButtonsDisabled(false);
      }
      return;
    }
    await beginAuthenticatedSession(data);
  } catch {
    playLoginSound("error");
    setLoginStatus("!", "bad", "本机服务还没有准备好");
    shakeLoginCard();
    clearLoginDigits();
    setLoginButtonsDisabled(false);
  } finally {
    loginSubmitting = false;
  }
}

function handleLoginDigit(digit) {
  if (loginSubmitting || loginDigits.length >= 4) return;
  const index = loginDigits.length;
  playLoginSound("digit");
  loginDigits.push(String(digit));
  updateLoginStars();
  triggerLoginStarBreak(index);
  if (loginDigits.length === 4) submitLoginPin();
}

function installLoginGate() {
  updateLoginStars();
  $all("[data-login-digit]").forEach((button) => {
    bindTouchPress(button, () => handleLoginDigit(button.dataset.loginDigit));
  });
  $all("[data-login-action='backspace']").forEach((button) => {
    bindTouchPress(button, () => {
      if (loginSubmitting) return;
      playLoginSound("backspace");
      loginDigits.pop();
      updateLoginStars();
      setLoginStatus("", "", loginDigits.length ? "继续输入" : "等待输入");
    });
  });
  window.addEventListener("keydown", (event) => {
    if (!document.body.classList.contains("auth-locked")) return;
    if (/^\d$/.test(event.key)) {
      event.preventDefault();
      handleLoginDigit(event.key);
    } else if (event.key === "Backspace") {
      event.preventDefault();
      playLoginSound("backspace");
      loginDigits.pop();
      updateLoginStars();
    }
  });
}

async function checkAuthStatus() {
  try {
    const response = await fetch(apiUrl("/api/auth/status"), {
      cache: "no-store",
      credentials: "include"
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data.authenticated) {
      await beginAuthenticatedSession(data, { animate: false });
      return;
    }
    document.body.classList.add("auth-locked");
    document.body.classList.remove("auth-checking");
    loginElements().gate.hidden = false;
    setLoginButtonsDisabled(false);
    if (Number(data.retryAfterMs || 0) > 0) {
      setLoginCooldown(Number(data.retryAfterMs), "暂时锁住了。");
    } else {
      setLoginStatus("", "", "等待输入");
    }
  } catch {
    document.body.classList.add("auth-locked");
    document.body.classList.remove("auth-checking");
    if (loginElements().gate) loginElements().gate.hidden = false;
    setLoginButtonsDisabled(true);
    setLoginStatus("!", "bad", "本机服务未连接");
  }
}

async function startApp() {
  if (appBooted) return;
  appBooted = true;
  await loadSharedState();
  $("#kanaScore").textContent = state.kanaScore;
  $("#playedCount").textContent = state.played;
  renderKanaProgress();
  renderKanaRewards();
  renderWordRewards();
  renderPhonicsRewards();
  renderGlobalRewards();
  $("#artDate").valueAsDate = new Date();
  installCustomWordBankLabels();
  syncWordBankSelect();
  fillAiSettingsForm();
  fillOssSettingsForm();
  state.cardCottage = normalizeCardCottageState(state.cardCottage);
  saveLocalItem("jojoCardCottage", JSON.stringify(state.cardCottage));
  applyArtMode();
  applyHomeBackground();
  renderHomeBackgroundSettings();
  renderHomeTileMeanings();
  bindEvents();
  setView();
  newKanaQuestion();
  newWordQuestion();
  renderPhonics();
  loadSharedWordProgress();
}

async function init() {
  installLoginGate();
  await checkAuthStatus();
}

init();
