const AIRPORTS_DATA = [
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "slug": "breezenet",
    "description": "微风网络Breezenet专注于提供高质量专线体验，以¥8/月超低起步价提供200GB充沛流量，采用IEPL/IPLC主干线路与VLESS协议，是高性价比入门首选。",
    "officialUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "affiliateUrl": "https://edp01.breezenetaff.com/#/?code=h4GlIXwC",
    "coupon": "weifeng90",
    "startingPrice": 8.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "微风入门版",
        "price": 8.0,
        "cycle": "按月计费",
        "traffic": "200 GB",
        "trafficBytesGB": 200,
        "bandwidth": "500 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.040,
        "features": ["IEPL/IPLC主干专线", "200GB超大起始流量", "专属优惠码 weifeng90"]
      },
      {
        "name": "微风进阶版",
        "price": 18.0,
        "cycle": "按月计费",
        "traffic": "500 GB",
        "trafficBytesGB": 500,
        "bandwidth": "1000 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.036,
        "features": ["千兆专线极速直连", "原生IP解锁流媒体与AI", "多设备高并发支持"]
      }
    ],
    "protocols": ["VLESS", "Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "德国"],
    "nodeCount": "50+ 节点",
    "lineType": "IEPL/IPLC",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude 3.5 Sonnet", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K/8K"],
    "advantages": [
      "¥8/月超低起步价，享200GB大流量，单GB成本低至0.04元",
      "全节点采用IEPL/IPLC专线传输，晚高峰网络稳定性表现出众",
      "支持现代高效VLESS协议，客户端连接延迟低且省电"
    ],
    "disadvantages": [
      "入门套餐在高峰期对单IP超大并发下载有合理带宽限制",
      "大促活动期间工单技术支持排队时间稍有延长"
    ],
    "suitableFor": [
      "新手小白入门第一站",
      "日常高清流媒体与AI工具重度使用者"
    ],
    "sources": ["节点推荐网公开数据", "官方订购控制台实测参数"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.5,
    "speedRating": 9.4,
    "stabilityRating": 9.6,
    "valueRating": 9.8
  },
  {
    "id": "muguang",
    "name": "暮光网络",
    "slug": "muguang",
    "description": "暮光网络部署了覆盖亚太及欧美的专线节点，采用先进的VLESS协议体系，为多设备家庭与大流量下载用户提供高稳定、低抖动的网络体验。",
    "officialUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "affiliateUrl": "https://varnexa.twilightaff.com/#/?code=8EtJCnBT",
    "coupon": "",
    "startingPrice": 20.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "专线基础月付",
        "price": 20.0,
        "cycle": "按月计费",
        "traffic": "120 GB",
        "trafficBytesGB": 120,
        "bandwidth": "500 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.167,
        "features": ["专线节点网络架构", "120GB/月充足配额", "VLESS现代协议支持"]
      },
      {
        "name": "海量进阶月付",
        "price": 38.0,
        "cycle": "按月计费",
        "traffic": "300 GB",
        "trafficBytesGB": 300,
        "bandwidth": "1000 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.127,
        "features": ["大流量与多设备并发", "晚高峰无丢包保障", "工单优先响应"]
      }
    ],
    "protocols": ["VLESS", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    "nodeCount": "45+ 节点",
    "lineType": "专线节点",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Midjourney"],
    "streamingSupport": ["YouTube 4K", "Netflix", "Disney+"],
    "advantages": [
      "专线节点网络架构，晚高峰平稳流畅无断连",
      "120GB起步大流量，完全满足全天候视频与办公需求",
      "节点连通率高，客户端规则分流配置友好"
    ],
    "disadvantages": [
      "起步资费为20元，无个位数超低尝鲜套餐",
      "暂不支持老旧 ShadowsocksR 客户端"
    ],
    "suitableFor": [
      "学生党与预算有限的大流量用户",
      "YouTube 4K日常播放与外企办公需求"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.3,
    "speedRating": 9.2,
    "stabilityRating": 9.4,
    "valueRating": 9.1
  },
  {
    "id": "feimaoyun",
    "name": "飞猫云",
    "slug": "feimaoyun",
    "description": "飞猫云采用IEPL/IPLC专线与优质中转混合调度链路，年付折算约¥7/月起即可获得150GB流量。针对新手提供完善的一键导入客户端与专属折扣码。",
    "officialUrl": "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
    "affiliateUrl": "https://flycat1.flycatvipaff.cc/#/?code=MlwqPqcx",
    "coupon": "flycat888",
    "startingPrice": 7.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "特惠年付折算",
        "price": 7.0,
        "cycle": "按月折算",
        "traffic": "150 GB",
        "trafficBytesGB": 150,
        "bandwidth": "400 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.047,
        "features": ["折算约¥7/月起", "150GB大流量配额", "专属优惠码 flycat888"]
      },
      {
        "name": "畅享月付版",
        "price": 16.0,
        "cycle": "按月计费",
        "traffic": "350 GB",
        "trafficBytesGB": 350,
        "bandwidth": "800 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.046,
        "features": ["双线冗余智能调度", "流媒体全区解锁", "千兆高速下载"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan", "Vmess"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "韩国"],
    "nodeCount": "40+ 节点",
    "lineType": "IEPL/IPLC / 优质中转线路",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K"],
    "advantages": [
      "单月成本低至¥7/月，150GB充沛流量性价比极高",
      "采用IEPL专线与中转冗余架构，遇敏感期自动调度",
      "支持一键导入主流Clash、Sing-box与小火箭客户端"
    ],
    "disadvantages": [
      "超低价套餐需年付订购才能享受折算优惠",
      "节点倍率在个别大带宽下载节点上标为1.5x"
    ],
    "suitableFor": [
      "预算有限的学生党与新手入门用户",
      "日常网络浏览与高清视频播放追剧党"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.3,
    "speedRating": 9.1,
    "stabilityRating": 9.3,
    "valueRating": 9.6
  },
  {
    "id": "wuyou",
    "name": "无忧",
    "slug": "wuyou",
    "description": "无忧链接主打稳定真实的IPLC物理专线，起步月付¥19即可享有100GB纯专线配额，支持多协议与优惠码折扣，适合对网络品质有追求的实用派。",
    "officialUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "affiliateUrl": "https://wep01.worryfreeaff.com/#/?code=oGi9FQ0J",
    "coupon": "wuyou666",
    "startingPrice": 19.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "无忧基础版",
        "price": 19.0,
        "cycle": "按月计费",
        "traffic": "100 GB",
        "trafficBytesGB": 100,
        "bandwidth": "400 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.190,
        "features": ["¥19/月真实IPLC专线", "100GB/月高速流量", "优惠码 wuyou666"]
      },
      {
        "name": "无忧进阶版",
        "price": 36.0,
        "cycle": "按月计费",
        "traffic": "260 GB",
        "trafficBytesGB": 260,
        "bandwidth": "800 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.138,
        "features": ["Shadowsocks / V2Ray多协议", "AI与流媒体全解锁", "大流量无忧使用"]
      }
    ],
    "protocols": ["Shadowsocks", "Vmess"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾"],
    "nodeCount": "35+ 节点",
    "lineType": "IPLC",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K"],
    "advantages": [
      "真实IPLC物理专线，不过公网防火墙，晚高峰延迟稳定",
      "起步门槛控制在20元以内，专线产品中具备极高性价比",
      "全节点倍率规范透明，无偷跑扣量套路"
    ],
    "disadvantages": [
      "节点数量相比超大型机场较少，聚焦主流核心地区",
      "不提供免费试用，需购买月付体验"
    ],
    "suitableFor": [
      "预算在20元以内且追求专线质量的用户",
      "轻中度日常办公学习与资料查阅"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.3,
    "speedRating": 9.2,
    "stabilityRating": 9.5,
    "valueRating": 9.2
  },
  {
    "id": "lingmao",
    "name": "灵猫",
    "slug": "lingmao",
    "description": "灵猫机场专为追求高品质专线体验的白领与商务人士设计，全线采用IPLC内网专线与原生IP资源，流媒体与AI工具全绿解锁。",
    "officialUrl": "https://vip02.civetaff.com/#/?code=SXY8qyrG",
    "affiliateUrl": "https://vip02.civetaff.com/#/?code=SXY8qyrG",
    "coupon": "",
    "startingPrice": 25.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "IPLC专线版",
        "price": 25.0,
        "cycle": "按月计费",
        "traffic": "150 GB",
        "trafficBytesGB": 150,
        "bandwidth": "500 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.167,
        "features": ["¥25/月真实IPLC专线", "150GB/月充沛流量", "晚高峰零丢包保障"]
      },
      {
        "name": "旗舰大流量版",
        "price": 48.0,
        "cycle": "按月计费",
        "traffic": "350 GB",
        "trafficBytesGB": 350,
        "bandwidth": "1000 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.137,
        "features": ["全节点原生IP资源", "4K流媒体与ChatGPT解锁", "优先客服响应"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    "nodeCount": "40+ 专线节点",
    "lineType": "IPLC",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT (原生IP)", "Claude 3.5 Sonnet", "Midjourney"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube 4K/8K", "HBO Max"],
    "advantages": [
      "全链路走IPLC物理专线，晚高峰延迟抖动小，零丢包",
      "原生海外住宅/机房IP，对OpenAI及流媒体平台风控抵抗力极强",
      "客服服务专业，订阅解析更新迅速"
    ],
    "disadvantages": [
      "起步价格为25元/月，略高于普通中转机场",
      "禁止BT高带宽P2P下载以维护专线通畅"
    ],
    "suitableFor": [
      "对稳定性有较高要求的白领与外企办公人员",
      "4K超清流媒体追剧迷与重度AI大模型创作者"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.3,
    "speedRating": 9.4,
    "stabilityRating": 9.6,
    "valueRating": 9.0
  },
  {
    "id": "flashleap",
    "name": "闪跃 FlashLeap",
    "slug": "flashleap",
    "description": "闪跃FlashLeap以电竞级IPLC纯专线为卖点，专注于超低延迟与极端抗封锁能力，适合外服联机游戏加速与关键性高频业务交互。",
    "officialUrl": "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
    "affiliateUrl": "https://vip02.flashleapaff.com/#/?code=8ZIV6HQ3",
    "coupon": "shanyue",
    "startingPrice": 24.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "纯专线入门版",
        "price": 24.0,
        "cycle": "按月计费",
        "traffic": "150 GB",
        "trafficBytesGB": 150,
        "bandwidth": "500 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.160,
        "features": ["IPLC纯专线超低延迟", "150GB高速月付配额", "优惠码 shanyue"]
      },
      {
        "name": "纯专线进阶版",
        "price": 46.0,
        "cycle": "按月计费",
        "traffic": "360 GB",
        "trafficBytesGB": 360,
        "bandwidth": "1000 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.128,
        "features": ["低延迟外服游戏加速", "4K流媒体秒开不缓冲", "专属高速专线通道"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "韩国"],
    "nodeCount": "45+ 专线节点",
    "lineType": "IPLC纯专线",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "Twitch"],
    "advantages": [
      "纯正IPLC内网专线，延迟极低，国际游戏联机几乎无丢包",
      "晚高峰（20:00-24:00）表现极度坚挺，无视外部网络敏感期",
      "支持优惠码折扣，折算每GB仅0.16元左右"
    ],
    "disadvantages": [
      "单价高于普通中转梯子，无免费体验",
      "流量策略较为严格，不适合超大批量下载"
    ],
    "suitableFor": [
      "外服联机游戏玩家（Steam/EA/暴雪）",
      "对延迟与晚高峰稳定性极度敏感者"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.4,
    "speedRating": 9.5,
    "stabilityRating": 9.7,
    "valueRating": 9.1
  },
  {
    "id": "firefly",
    "name": "萤火虫 (Firefly)",
    "slug": "firefly",
    "description": "萤火虫机场主打亲民实惠路线，年付折算约¥8/月，支持现代VLESS协议与多平台客户端，非常适合轻度冲浪与备用防失联。",
    "officialUrl": "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
    "affiliateUrl": "https://vip02.fireflyaff.com/#/?code=uTKLkAyC",
    "coupon": "firefly",
    "startingPrice": 8.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "特惠年付折算",
        "price": 8.0,
        "cycle": "按月折算",
        "traffic": "60 GB",
        "trafficBytesGB": 60,
        "bandwidth": "200 Mbps",
        "devices": "3台设备",
        "costPerGB": 0.133,
        "features": ["年付折算约¥8/月", "60GB/月轻量流量", "优惠码 firefly"]
      },
      {
        "name": "标准月付版",
        "price": 16.0,
        "cycle": "按月计费",
        "traffic": "160 GB",
        "trafficBytesGB": 160,
        "bandwidth": "400 Mbps",
        "devices": "5台设备",
        "costPerGB": 0.100,
        "features": ["优质线路与VLESS协议", "支持月付弹性选择", "常规影音流畅播放"]
      }
    ],
    "protocols": ["VLESS", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国"],
    "nodeCount": "30+ 节点",
    "lineType": "优质线路",
    "deviceLimit": "3 - 5台并发",
    "aiSupport": ["ChatGPT (基础网页)", "Copilot"],
    "streamingSupport": ["YouTube 1080P/4K", "Netflix (部分节点)"],
    "advantages": [
      "单月起步低至8元，试错门槛极低，适合轻度冲浪",
      "采用VLESS现代代理协议，网络握手开销小",
      "节点配置简明，支持一键导入主流客户端"
    ],
    "disadvantages": [
      "入门版流量仅60GB，不适合长时间超大流量下载",
      "晚高峰高负载时段个别节点偶有轻微波动"
    ],
    "suitableFor": [
      "轻度上网、查阅资料与日常社交交流",
      "预算有限的学生群体或作为第二备用副梯子"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.2,
    "speedRating": 9.0,
    "stabilityRating": 9.1,
    "valueRating": 9.4
  },
  {
    "id": "kuajiecloud",
    "name": "跨界",
    "slug": "kuajiecloud",
    "description": "跨界云全节点采用全专线网络架构，为跨境电商、涉外运营与跨设备协同打造，支持全平台高速一键连接，稳定可靠。",
    "officialUrl": "https://vip02.kuajieaff.com/#/?code=CpJKZicY",
    "affiliateUrl": "https://vip02.kuajieaff.com/#/?code=CpJKZicY",
    "coupon": "",
    "startingPrice": 20.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "全专线基础版",
        "price": 20.0,
        "cycle": "按月计费",
        "traffic": "120 GB",
        "trafficBytesGB": 120,
        "bandwidth": "500 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.167,
        "features": ["¥20/月全专线架构", "120GB/月月付配置", "跨境电商与多终端支持"]
      },
      {
        "name": "全专线旗舰版",
        "price": 42.0,
        "cycle": "按月计费",
        "traffic": "320 GB",
        "trafficBytesGB": 320,
        "bandwidth": "800 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.131,
        "features": ["全专线Shadowsocks协议", "流媒体AI全解锁", "大流量无感漫游"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "德国"],
    "nodeCount": "40+ 专线节点",
    "lineType": "全专线架构",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Midjourney"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K"],
    "advantages": [
      "纯正全专线架构，不经过公网敏感节点，网络可用率极高",
      "针对跨国电商平台（Amazon/Shopee/Shopify）优化分流",
      "设备并发支持4-6台，适合个人多终端或小团队共用"
    ],
    "disadvantages": [
      "单价偏向中端，无个位数超低价套餐",
      "暂未开放特殊冷门地区节点"
    ],
    "suitableFor": [
      "跨境电商、多任务跨设备办公人员",
      "追求极简轻量连接与网络省心的用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.3,
    "speedRating": 9.3,
    "stabilityRating": 9.5,
    "valueRating": 9.2
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "slug": "yinxingren",
    "description": "隐形人主打企业级IEPL纯专线网络架构，不经公网拥堵节点，晚高峰零丢包。标配144GB大流量月付方案，全节点解锁ChatGPT与主流流媒体平台。",
    "officialUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "affiliateUrl": "https://varnexa.invisibleaff.com/#/?code=5BkMj6bD",
    "coupon": "yxr888",
    "startingPrice": 24.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "纯专线入门版",
        "price": 24.0,
        "cycle": "按月计费",
        "traffic": "144 GB",
        "trafficBytesGB": 144,
        "bandwidth": "500 Mbps",
        "devices": "5台设备",
        "costPerGB": 0.167,
        "features": ["IEPL纯专线网络架构", "144GB/月充沛起步流量", "优惠码 yxr888"]
      },
      {
        "name": "纯专线主力版",
        "price": 48.0,
        "cycle": "按月计费",
        "traffic": "350 GB",
        "trafficBytesGB": 350,
        "bandwidth": "1000 Mbps",
        "devices": "8台设备",
        "costPerGB": 0.137,
        "features": ["千兆专线大带宽", "晚高峰零卡顿保障", "全节点解锁AI与4K"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "英国", "韩国"],
    "nodeCount": "60+ 纯专线节点",
    "lineType": "IEPL纯专线",
    "deviceLimit": "5 - 8台并发",
    "aiSupport": ["ChatGPT (原生IP无风控)", "Claude 3.5 Sonnet", "Gemini Advanced"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube 4K/8K", "HBO Max"],
    "advantages": [
      "全程纯正IEPL物理专线，综合评分高达9.6分，晚高峰零丢包",
      "原生纯净海外IP，对OpenAI及Claude等严苛风控平台支持极佳",
      "允许5-8台设备同时在线，跨国会议与股票交易坚挺不掉线"
    ],
    "disadvantages": [
      "起步资费24元，对于极低预算用户稍有门槛",
      "严格禁止BT/P2P高并发下载以防专线拥塞"
    ],
    "suitableFor": [
      "跨境电商与涉外办公团队、远程会议重度用户",
      "重度依赖ChatGPT与Claude大模型搞生产力的专业人士"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.6,
    "speedRating": 9.6,
    "stabilityRating": 9.8,
    "valueRating": 9.3
  },
  {
    "id": "feiv",
    "name": "飞V",
    "slug": "feiv",
    "description": "飞V以极低门槛和罕见的不限时套餐为核心特色，月付仅需¥4.9起，同时支持按需购买不限时流量，是极度低预算人群与轻度备用用户的福音。",
    "officialUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "affiliateUrl": "https://varnexa.flyvaff.com/#/?code=Ks7qO8qe",
    "coupon": "",
    "startingPrice": 4.9,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "轻量入门版",
        "price": 4.9,
        "cycle": "按月计费",
        "traffic": "100 GB",
        "trafficBytesGB": 100,
        "bandwidth": "200 Mbps",
        "devices": "3台设备",
        "costPerGB": 0.049,
        "features": ["¥4.9/月极低门槛", "100GB可用流量", "每GB仅约0.049元"]
      },
      {
        "name": "不限时海量版",
        "price": 29.0,
        "cycle": "按量不限时",
        "traffic": "200 GB",
        "trafficBytesGB": 200,
        "bandwidth": "400 Mbps",
        "devices": "5台设备",
        "costPerGB": 0.145,
        "features": ["流量永久不清零", "用多少扣多少", "超长周期备用神仙方案"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国"],
    "nodeCount": "30+ 节点",
    "lineType": "优化线路",
    "deviceLimit": "3 - 5台并发",
    "aiSupport": ["ChatGPT (基础网页)", "Copilot"],
    "streamingSupport": ["YouTube 1080P/4K", "Netflix (部分节点)"],
    "advantages": [
      "月付仅需¥4.9起，市面上门槛最低的梯子之一，试错成本接近于零",
      "提供罕见的不限时流量包，流量永久不清零，备用防失联首选",
      "支持主流订阅转换，一键导入使用简明"
    ],
    "disadvantages": [
      "线路为公网优化中转，晚高峰高负荷时个别节点有轻微丢包",
      "设备连接数限制3台并发"
    ],
    "suitableFor": [
      "学生与预算极低人群",
      "需要配置一条极低成本备用网络以防主力断连的用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.1,
    "speedRating": 8.9,
    "stabilityRating": 8.8,
    "valueRating": 9.9
  },
  {
    "id": "laddercloud",
    "name": "梯子云 LadderCloud",
    "slug": "laddercloud",
    "description": "梯子云LadderCloud主打高速优化中转与专线混合链路，大流量套餐充沛，兼顾多设备分享与日常重度音视频流媒体娱乐。",
    "officialUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "affiliateUrl": "https://varnexa.ladderaff.com/#/?code=eC6eLAbq",
    "coupon": "",
    "startingPrice": 25.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "中转基础版",
        "price": 25.0,
        "cycle": "按月计费",
        "traffic": "125 GB",
        "trafficBytesGB": 125,
        "bandwidth": "400 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.200,
        "features": ["¥25/月起步资费", "125GB高速中转流量", "全平台订阅兼容"]
      },
      {
        "name": "海量专线版",
        "price": 48.0,
        "cycle": "按月计费",
        "traffic": "350 GB",
        "trafficBytesGB": 350,
        "bandwidth": "800 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.137,
        "features": ["最高可达500GB方案", "流媒体多区解锁", "大流量下载无忧"]
      }
    ],
    "protocols": ["Shadowsocks", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "英国"],
    "nodeCount": "35+ 节点",
    "lineType": "优化中转/专线",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K"],
    "advantages": [
      "大流量套餐规划合理，支持最高500GB海量方案",
      "优化中转与专线混合调度，日常多媒体影音播放顺畅",
      "全平台客户端适配性良好"
    ],
    "disadvantages": [
      "起步每GB成本约0.2元，中等水平",
      "晚高峰极少数冷门节点偶有延迟增加"
    ],
    "suitableFor": [
      "大流量下载与多设备家庭分享",
      "日常重度音视频与社交平台浏览"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.2,
    "speedRating": 9.1,
    "stabilityRating": 9.2,
    "valueRating": 9.0
  },
  {
    "id": "wavenet",
    "name": "浪网 WaveNet",
    "slug": "wavenet",
    "description": "浪网WaveNet采用自研优化线路与VLESS先进协议，节点带宽储备充沛，专为对高码率视频与重度网络流量有需求的用户提供卓越体验。",
    "officialUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "affiliateUrl": "https://varnexa.wavenetaff.com/#/?code=8fwQQBdy",
    "coupon": "",
    "startingPrice": 30.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "自研优化版",
        "price": 30.0,
        "cycle": "按月计费",
        "traffic": "150 GB",
        "trafficBytesGB": 150,
        "bandwidth": "500 Mbps",
        "devices": "5台设备",
        "costPerGB": 0.200,
        "features": ["¥30/月自研线路", "150GB充沛流量", "VLESS先进协议支持"]
      },
      {
        "name": "自研旗舰版",
        "price": 58.0,
        "cycle": "按月计费",
        "traffic": "360 GB",
        "trafficBytesGB": 360,
        "bandwidth": "1000 Mbps",
        "devices": "8台设备",
        "costPerGB": 0.161,
        "features": ["千兆大带宽吞吐", "8台设备多并发支持", "4K/8K高码率秒开"]
      }
    ],
    "protocols": ["VLESS", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾", "德国"],
    "nodeCount": "40+ 节点",
    "lineType": "自研客户端优化线路",
    "deviceLimit": "5 - 8台并发",
    "aiSupport": ["ChatGPT", "Claude 3.5", "Midjourney"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K/8K"],
    "advantages": [
      "自研优化线路架构，吞吐性能极高，4K/8K超清视频秒开不卡顿",
      "全节点标配VLESS协议，抗干扰能力出众",
      "支持5-8台设备并发，适合多设备大流量极客"
    ],
    "disadvantages": [
      "起步资费为30元/月，偏向进阶级定位",
      "无小额短期测试包"
    ],
    "suitableFor": [
      "高码率超清视频与重度网络使用群体",
      "追求高品质自研线路与大流量充沛保障者"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.4,
    "speedRating": 9.5,
    "stabilityRating": 9.4,
    "valueRating": 8.9
  },
  {
    "id": "lingdongcloud",
    "name": "灵动云",
    "slug": "lingdongcloud",
    "description": "灵动云主打省心均衡的节点配置与Trojan安全协议，为日常办公、查阅文献与轻度影音娱乐用户提供稳定平滑的跨国网络通道。",
    "officialUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "affiliateUrl": "https://varnexa.lingdongaff.com/#/?code=kd4yTgUr",
    "coupon": "",
    "startingPrice": 20.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "均衡基础版",
        "price": 20.0,
        "cycle": "按月计费",
        "traffic": "100 GB",
        "trafficBytesGB": 100,
        "bandwidth": "300 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.200,
        "features": ["¥20/月均衡配置", "100GB/月实用配额", "Trojan协议稳定防封"]
      },
      {
        "name": "畅享月付版",
        "price": 36.0,
        "cycle": "按月计费",
        "traffic": "260 GB",
        "trafficBytesGB": 260,
        "bandwidth": "600 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.138,
        "features": ["大流量支持", "多平台流媒体解锁", "基础工单服务"]
      }
    ],
    "protocols": ["Trojan", "Shadowsocks"],
    "regions": ["香港", "日本", "新加坡", "美国"],
    "nodeCount": "30+ 节点",
    "lineType": "优化节点",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Copilot"],
    "streamingSupport": ["YouTube 4K", "Netflix (主流节点)"],
    "advantages": [
      "全节点配置Trojan协议，TLS伪装抗封锁机制稳定",
      "价格与流量配额均衡，适合日常稳定挂机",
      "导入配置友好，网络拓扑结构清晰"
    ],
    "disadvantages": [
      "节点地区集中在亚太与北美核心区",
      "晚高峰对超高清8K播放稍有缓冲"
    ],
    "suitableFor": [
      "追求简单省心与流量均衡的用户",
      "日常办公、查阅文献与影音轻度娱乐"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.2,
    "speedRating": 9.0,
    "stabilityRating": 9.2,
    "valueRating": 9.1
  },
  {
    "id": "quanqiuyun",
    "name": "全球云",
    "slug": "quanqiuyun",
    "description": "全球云依托成熟的经典中转优化架构与VLESS/Trojan双协议支持，为上班族与学生提供稳定、流畅的高清流媒体与日常浏览服务。",
    "officialUrl": "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
    "affiliateUrl": "https://sswdh.gcvipaff.com/#/?code=9SF0oyg0",
    "coupon": "tt88",
    "startingPrice": 20.0,
    "currency": "CNY",
    "billingCycle": "月付",
    "plans": [
      {
        "name": "中转经典版",
        "price": 20.0,
        "cycle": "按月计费",
        "traffic": "120 GB",
        "trafficBytesGB": 120,
        "bandwidth": "400 Mbps",
        "devices": "4台设备",
        "costPerGB": 0.167,
        "features": ["¥20/月经典中转", "120GB/月可用流量", "优惠码 tt88"]
      },
      {
        "name": "中转海量版",
        "price": 38.0,
        "cycle": "按月计费",
        "traffic": "300 GB",
        "trafficBytesGB": 300,
        "bandwidth": "800 Mbps",
        "devices": "6台设备",
        "costPerGB": 0.127,
        "features": ["VLESS / Trojan双协议", "流媒体解锁多区覆盖", "大流量畅享"]
      }
    ],
    "protocols": ["VLESS", "Trojan"],
    "regions": ["香港", "日本", "新加坡", "美国", "台湾"],
    "nodeCount": "35+ 节点",
    "lineType": "中转优化",
    "deviceLimit": "4 - 6台并发",
    "aiSupport": ["ChatGPT", "Claude", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K"],
    "advantages": [
      "中转优化架构成熟，日常流媒体播放稳定",
      "支持专属优惠码折扣，套餐配置均衡实用",
      "主流VLESS与Trojan双协议，客户端适配极广"
    ],
    "disadvantages": [
      "非全IEPL纯专线，公网波动期偶有重连",
      "起步资费20元，无个位数极低体验包"
    ],
    "suitableFor": [
      "日常网络浏览与音视频流媒体追剧",
      "中等流量使用需求的上班族与学生"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明"],
    "lastVerified": "2026-03",
    "testStatus": "official-data",
    "overallRating": 9.2,
    "speedRating": 9.1,
    "stabilityRating": 9.2,
    "valueRating": 9.2
  }
];

if (typeof window !== 'undefined') {
  window.AIRPORTS_DATA = AIRPORTS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AIRPORTS_DATA;
}
