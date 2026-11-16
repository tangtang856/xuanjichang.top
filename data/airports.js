const AIRPORTS_DATA = [
  {
    "id": "breezenet",
    "name": "微风网络 Breezenet",
    "slug": "breezenet",
    "description": "微风网络Breezenet专注于提供高质量专线体验，以¥8/月超低起步价提供200GB充沛流量，采用上海与广州多线BGP入口直连IEPL/IPLC主干专线，全面适配现代化VLESS-XTLS协议体系，是2026年全网高性价比入门首选品牌。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "Google Gemini"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube 4K/8K"],
    "advantages": [
      "¥8/月超低起步价，享200GB大流量，单GB成本低至0.040元，性价比冠绝行业",
      "全节点采用IEPL/IPLC物理专线传输，BGP多入口容灾，晚高峰实测丢包率低于0.1%",
      "支持现代高效VLESS-XTLS-Reality协议，消除二次加密冗余，客户端低延迟且极度省电",
      "配备高纯净度海外原生IP资源池，ChatGPT 4o与Netflix全区非自制剧全绿解锁"
    ],
    "disadvantages": [
      "入门¥8套餐在高峰期对单IP突发超大线程P2P/BT下载有公平带宽限制",
      "大促活动期间技术客服工单排队响应偶有延长至1-2小时",
      "节点资源高度集中在东亚与欧美核心区，暂未涵盖极端冷门小众国家"
    ],
    "suitableFor": [
      "新手小白与预算有限的学生党入门第一站",
      "日常高清4K流媒体追剧与AI工具（ChatGPT/Claude）重度使用者",
      "外贸出海沟通与跨国日常学术科研文献检索"
    ],
    "sources": ["节点推荐网公开数据", "官方订购控制台实测参数", "晚高峰72小时连续压力监测报告"],
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
    "description": "暮光网络部署了覆盖亚太及欧美的专线节点，采用自适应多路径中继负载均衡与先进的VLESS协议体系，为多设备家庭与大流量办公用户提供高稳定、低抖动的网络体验，晚高峰断流免疫口碑出众。",
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
    "aiSupport": ["ChatGPT", "Claude 3.5 Sonnet", "Midjourney"],
    "streamingSupport": ["YouTube 4K", "Netflix", "Disney+", "HBO Max"],
    "advantages": [
      "专线节点网络架构配合华东华南双BGP入口，晚高峰平稳流畅无断连",
      "120GB起步大流量，完全满足全天候视频会议与高频跨国办公需求",
      "全节点严格执行1.0x真实倍率，计费透明规范，绝不暗中扣量",
      "全节点配备原生解锁策略，Netflix 4K与Disney+全区畅快观影"
    ],
    "disadvantages": [
      "起步资费为20元/月，无个位数超低小额尝鲜体验套餐",
      "为了保障传输安全，已全面弃用旧版ShadowsocksR (SSR)客户端",
      "全网节点保持在45+左右走精品路线，未刻意堆砌低质量冷门节点"
    ],
    "suitableFor": [
      "涉外远程办公、外企白领与跨国Zoom/Teams视频会议重度用户",
      "家庭多终端协同与YouTube 4K日常原画追剧爱好者",
      "看重网络全天候平滑不折腾的省心派用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "外企网络可用性SLA监测"],
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
    "description": "飞猫云采用IEPL专线与优质多线中转混合双冗余调度架构，特惠年付折算约¥7/月起即可获得150GB充沛流量。标配专属优惠码flycat888，针对新手提供完善的一键导入客户端与专属客服支持。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5", "Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "动画疯"],
    "advantages": [
      "单月成本低至¥7/月起，150GB充沛流量，单GB仅合0.047元，性价比极高",
      "采用IEPL专线与中转双轨混合容灾架构，遇外部公网敏感期自动毫秒级切换",
      "支持一键导入主流Clash、Sing-box与小火箭客户端，节点命名与分组科学",
      "官方专属优惠码flycat888赋能，在亲民价位上进一步让利消费者"
    ],
    "disadvantages": [
      "¥7超低价格需通过特惠年付方案享受，单月购买起步价为16元/月（配额350GB）",
      "个别大带宽下载专用节点标注为1.5x倍率，日常建议优先选用1.0x主力节点",
      "节点主要覆盖亚太核心区，不提供偏远亚非拉国家长尾节点"
    ],
    "suitableFor": [
      "预算有限的学生党与科学上网初学者",
      "看重性价比与容灾双保险的精明冲浪用户",
      "日常网络浏览与高清视频追剧大流量爱好者"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "双向容灾切换实测日志"],
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
    "description": "无忧主打真实纯正的物理IPLC内网专线，数据传输全程不过公网防火墙。起步月付¥19即可享有100GB纯专线配额，标配专属优惠码wuyou666，拒绝一切虚标扣量，是追求真实物理专线的硬核务实派代表。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "HBO Max"],
    "advantages": [
      "真实IPLC物理专属光纤，不过公网防火墙，晚高峰连续实测0.00%零丢包",
      "起步门槛控制在20元以内，在纯正物理专线生态中极具性价比与诚意",
      "全节点严格执行1.0x真实倍率，绝不暗中扣量，所买即所得",
      "超低延迟抖动（Jitter < 1.5ms），极度适合外服网游联机与语音开黑"
    ],
    "disadvantages": [
      "节点数量聚焦在港、日、新、美核心区，不铺设极偏门小众国家",
      "不设免费试用机制，以防黑产与高并发滥用影响专线纯净度",
      "高峰期对挂载大文件P2P/BT下载有着严格的限制机制"
    ],
    "suitableFor": [
      "预算在20元左右且对网络稳定性有严苛要求的实用派用户",
      "轻度外服游戏玩家（Steam/Apex）与日常跨国办公学习群体",
      "受够了廉价中转机场频繁断流抽搐的换代升级用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "物理专线ICMP打点实测"],
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
    "description": "灵猫专为追求高品质专线体验的商务人士、外企白领与AI极客打造。全链路采用纯正IPLC物理专线与海外原生高纯净度住宅IP池，流媒体与Claude 3.5 Sonnet全绿解锁，晚高峰平滑零断连。",
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
    "aiSupport": ["ChatGPT (原生住宅IP)", "Claude 3.5 Sonnet", "Midjourney"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube 4K/8K", "HBO Max", "BBC iPlayer"],
    "advantages": [
      "全链路顶级IPLC物理专线，晚高峰延迟抖动小于1.0ms，工业级零丢包",
      "海外原生住宅/企业级独立IP池，对OpenAI及Claude严苛风控抵抗力极强",
      "千兆大带宽吞吐，YouTube实测连接速度稳定超220,000 Kbps，秒开4K/8K",
      "专属技术客服响应迅速，平均工单回复耗时在15分钟以内"
    ],
    "disadvantages": [
      "起步资费为25元/月，略高于普通中转类科学上网工具",
      "严苛禁止挂载BT/PT高并发下载以维护原生IP信誉与专线畅通",
      "不提供无门槛的免费测试，实行付费准入保障全网环境"
    ],
    "suitableFor": [
      "外企白领、科研学者与涉外企业远程会议重度从业者",
      "重度依赖ChatGPT与Claude 3.5大模型进行生产力创作的专业极客",
      "追求Netflix非自制剧全区全绿点亮与杜比视界高规格影音迷"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "AI模型防封稳定性跟踪"],
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
    "description": "闪跃FlashLeap以电竞级IPLC纯专线为卖点，专注于超低往返时延（RTT）与极端抗封锁能力。香港节点延迟低至22ms，全节点支持UDP Full Cone NAT，配合专属优惠码shanyue，是国际网游联机与高频业务利器。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "Twitch"],
    "advantages": [
      "电竞级IPLC纯专线架构，香港延迟低至22ms，日本50ms，外服游戏无感延迟",
      "全节点原生支持UDP Full Cone NAT，彻底打通游戏联机与即时语音卡顿堵点",
      "晚高峰（20:00-24:00）表现极度坚挺，无视外部网络敏感期与海缆故障",
      "官方专属优惠码shanyue赋能，折算每GB仅约0.16元，专线性价比出色"
    ],
    "disadvantages": [
      "单价高于普通中转产品，起步月付24元，无几元极廉价套餐",
      "流量额度相对严密，不适合超大规模长时间BT挂机下载",
      "节点专注于东亚与北美低延迟通道，未覆盖偏门小众国家"
    ],
    "suitableFor": [
      "外服联机网络游戏玩家（Steam/Apex/CS2/暴雪/Riot国际服）",
      "实时量化交易、高频外汇及对网络延迟毫秒级敏感者",
      "需要稳定平替昂贵商业游戏加速器的极客用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "外服电竞联机实测报告"],
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
    "description": "萤火虫机场主打亲民实惠路线，特惠年付折算约¥8/月即可获得60GB实用配额。全节点标配现代化VLESS协议体系，能耗极低，标配专属优惠码firefly，非常适合轻度冲浪、文献查阅与常驻防失联备用。",
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
    "aiSupport": ["ChatGPT (网页版)", "Microsoft Copilot", "Google Gemini"],
    "streamingSupport": ["YouTube 1080P/4K", "Netflix (主流节点)", "Spotify"],
    "advantages": [
      "年付折算单月仅需8元，试错门槛极低，适合轻度冲浪与学生群体",
      "全面采用现代VLESS轻量化协议，移动端握手开销极低，省电且不发烫",
      "节点结构简明清晰，主流客户端一键导入即用，零配置学习成本",
      "天然绝佳的“第二防失联备用副梯”，花极少成本确保网络永不失联"
    ],
    "disadvantages": [
      "入门版每月配额为60GB，不适合长时间挂载4K/8K视频狂刷",
      "优化公网中转架构在极端网络管制日晚高峰偶有轻微波动",
      "流媒体非自制剧与严苛AI大模型解锁率稍弱于顶级高端专线"
    ],
    "suitableFor": [
      "预算极低的学生党与日常以文字、查资料、查文献为主的轻度用户",
      "已经有主力高端专线、需要储备一条超低成本备用防失联梯子的精明用户",
      "偶尔上推特、看海外资讯的轻量化移动设备用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "轻量化能耗对比测试"],
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
    "description": "跨界云全节点采用纯正全专线网络架构，为跨境电商多店铺运营、涉外商务沟通与多终端办公团队量身打造。针对Amazon、Shopify与PayPal深度分流优化，支持4-6台设备稳定高并发，月付¥20提供120GB专线配额。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "Midjourney"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "TikTok 国际版"],
    "advantages": [
      "纯正全专线物理隔离网络架构，不经公网敏感节点，可用率高达99.9%",
      "针对跨国电商平台（Amazon/Shopify/PayPal）长连接保活深度优化，防风控频繁登出",
      "设备并发支持4-6台同时在线，完美契合个人多设备协同或小团队共用",
      "全节点严格1.0x真实透明倍率，账单分明，所标流量即真实可用流量"
    ],
    "disadvantages": [
      "定位中端商用办公，起步月付为20元，无个位数极廉价体验档位",
      "节点紧密贴合外贸核心枢纽，暂未开放偏门亚非拉冷门地区",
      "严禁挂载大流量BT/P2P种子下载以维护商用专线通畅"
    ],
    "suitableFor": [
      "跨境电商卖家（Amazon/Shopee/独立站）与外贸业务多店铺操作者",
      "涉外远程办公白领、跨国协作小微团队与多终端设备协同用户",
      "追求网络省心、长连接不掉线的商业运营人士"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "跨境电商平台保活压测"],
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
    "description": "隐形人是本站独立测评历史上综合稳定性评分冠军（9.8分标杆）。底层标配金融级IEPL物理纯专线，双向独享光纤通道，晚高峰绝对零丢包。全线配备海外原生纯净住宅IP池，专为严苛AI科研、海外高价值资产交易与大型涉外团队保驾护航。",
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
    "aiSupport": ["ChatGPT (原生住宅IP无风控)", "Claude 3.5 Sonnet", "Gemini Advanced", "Perplexity Pro"],
    "streamingSupport": ["Netflix 全区", "Disney+", "YouTube 4K/8K", "HBO Max", "Apple TV+"],
    "advantages": [
      "本站综合稳定性评分冠军（9.8分），全线金融级IEPL纯物理专线，晚高峰实测0.00%零丢包",
      "海外原生纯净住宅IP池，对OpenAI及Claude等严苛风控平台支持全网拔尖，防封天花板",
      "千兆大带宽吞吐，YouTube实测速度超260,000 Kbps，8K原盘超高清秒开不缓冲",
      "允许5-8台设备同时在线，跨国远程桌面、量化交易与商务会议坚挺不掉线",
      "专属优惠码yxr888长期赋能，全节点1.0x真实透明倍率，服务体验无可挑剔"
    ],
    "disadvantages": [
      "起步资费为24元/月，定位高端专业人群，对极低预算用户稍有门槛",
      "严格禁止任何形式的BT/P2P高并发刷流下载以维护专线信道与原生IP信誉",
      "不设免费测试体验包，严格实行付费准入机制"
    ],
    "suitableFor": [
      "AI深度研发者、大模型科学家与重度依赖ChatGPT 4o/Claude写作科研者",
      "涉外企业核心团队、海外高价值资产交易者与跨国高频视频会议商务人士",
      "对网络断网“零容忍”、追求终极稳定品质的极客发烧友"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "7x24小时全天候SLA压力监测系统"],
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
    "description": "飞V以极低门槛和罕见的不限时永久有效套餐为核心特色。月付仅需¥4.9起即可获得100GB实用流量，折算每GB成本仅约0.049元；更提供流量永久不清零的不限时套餐，是极度低预算人群与轻度备用用户的绝对福音。",
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
    "aiSupport": ["ChatGPT (网页版)", "Microsoft Copilot", "Google Gemini"],
    "streamingSupport": ["YouTube 1080P/4K", "Netflix (主流节点)", "Spotify"],
    "advantages": [
      "月付仅需¥4.9起，市面上门槛最低的梯子之一，试错成本接近于零，彻底击穿底价",
      "提供罕见的不限时流量包（¥29/200GB），流量永久不清零，用多少扣多少，备用神仙方案",
      "全节点严格1.0x真实倍率，低价不低质，扣量规范透明，账面流量真实可用",
      "全平台客户端一键导入，界面极简干净，新手小白一分钟快速上手"
    ],
    "disadvantages": [
      "线路为公网优化中转，晚高峰高负荷时个别节点偶有轻微丢包（1.2%-2.0%）",
      "入门版设备连接数限制为3台并发，不适合多终端设备合租共用",
      "流媒体非自制剧与严苛AI大模型解锁能力弱于昂贵的高端专线"
    ],
    "suitableFor": [
      "预算极低的学生党与科研查阅文献轻度冲浪者",
      "需要配置一条极低成本备用网络以防主力断连失联的精明老手",
      "偶尔翻墙查阅资料、看推特的低频轻量用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "长周期不限时扣量实测"],
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
    "description": "梯子云LadderCloud主打高速优化中转与专线混合调度链路，大流量套餐储备极其充沛。起步月付¥25享有125GB流量，支持最高达500GB的海量方案，兼顾多设备分享与日常重度音视频流媒体娱乐。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5", "Microsoft Copilot"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "Twitch", "HBO Max"],
    "advantages": [
      "大流量套餐规划充沛，支持最高500GB海量方案，彻底治愈流量见底焦虑",
      "优化中转与专线混合调度，晚高峰实测YouTube 4K速率逼近200,000 Kbps，观影极速丝滑",
      "多设备并发支持完善，支持4-6台设备同时在线，适合个人全家桶与室友合租",
      "全平台主流开源客户端无缝兼容，规则分流完善，导入使用零门槛"
    ],
    "disadvantages": [
      "起步每GB成本约0.2元，处于中等水平，更适合看重大流量充沛储备者",
      "晚高峰极少数冷门偏远中转节点偶有延迟增加",
      "不提供短周期微额试用包，以月付起步"
    ],
    "suitableFor": [
      "家庭多终端与宿舍室友合租用户（多人平摊性价比极高）",
      "日常重度音视频流媒体追剧迷与大容量学术数据下载者",
      "看重大流量充沛储备、不想时刻提心吊胆看流量计费的用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "大带宽多线程吞吐压测"],
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
    "description": "浪网WaveNet采用自研优化线路与VLESS先进协议，底层魔改内核级拥塞控制算法，节点带宽储备极其充沛。月付¥30提供150GB自研优化配额，专为对高码率4K/8K超清视频与重度网络吞吐有极致追求的极客发烧友提供卓越体验。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5 Sonnet", "Midjourney"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K/8K", "Twitch"],
    "advantages": [
      "自研优化线路架构，底层深度调优TCP BBRv3拥塞算法，实测YouTube连接速度破300,000 Kbps",
      "全节点标配现代化VLESS协议，抗干扰能力出众，手机移动端解密能耗极低",
      "支持5-8台设备并发在线，满足极客用户多台电脑、手机、平板及电视盒子的全场景覆盖",
      "全节点1.0x真实透明倍率，千兆大带宽管道真实不虚标"
    ],
    "disadvantages": [
      "起步资费为30元/月，偏向进阶级极客定位，不适合超低预算用户",
      "不设小额短期测试包，建议订购单月套餐实测体验",
      "偏远冷门小众国家节点储备较少，专注于打磨高频高带宽骨干网"
    ],
    "suitableFor": [
      "4K/8K高码率超清视频与重度网络使用群体，千兆入户宽带发烧友",
      "追求高品质自研线路、大文件高速下载与大流量充沛保障者",
      "拥有多台终端设备、需要高并发同时高速在线的极客工作室"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "8K超高码率实测跑分"],
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
    "description": "灵动云主打省心均衡的节点配置与Trojan安全协议体系。全节点标配TLS高强度伪装抗封锁机制，月付¥20提供100GB实用配额，为日常办公、查阅文献与轻度影音娱乐用户提供稳定平滑的跨国网络通道。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Microsoft Copilot", "Google Gemini"],
    "streamingSupport": ["YouTube 4K", "Netflix (主流节点)", "Disney+"],
    "advantages": [
      "全节点配置Trojan协议，标准HTTPS流量伪装，抗深度包检测（DPI）与敏感期封锁机制出众",
      "资费与流量配额均衡合理，月付20元享有100GB，非常适合日常稳定办公与文献检索",
      "导入配置极其友好，全平台开源客户端一键配置，网络拓扑结构清晰",
      "全节点1.0x真实透明倍率，账目清清楚楚，拒绝任何暗扣套路"
    ],
    "disadvantages": [
      "节点地区集中在亚太与北美核心区，不盲目追求虚高节点数量",
      "晚高峰对极端发烧级8K超清视频播放稍显缓冲，定位于实用级4K体验",
      "不设免费体验包，新用户建议订购单月套餐实测"
    ],
    "suitableFor": [
      "追求简单省心与流量均衡的在校高校师生与科研学者（查阅Google Scholar/文献）",
      "日常外企轻度办公、涉外邮件交互与日常影音轻度娱乐",
      "看重Trojan高隐蔽安全协议、不愿频繁折腾配置的务实派用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "学术文献数据库访问评测"],
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
    "description": "全球云依托成熟的经典中转优化架构与VLESS/Trojan双现代协议支持，为上班族与学生提供稳定、流畅的高清流媒体与日常浏览服务。标配专属优惠码tt88，月付¥20提供120GB可用流量，流媒体解锁多区覆盖。",
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
    "aiSupport": ["ChatGPT (GPT-4o)", "Claude 3.5", "Google Gemini"],
    "streamingSupport": ["Netflix", "Disney+", "YouTube 4K", "Spotify"],
    "advantages": [
      "三大运营商BGP智能就近接入中转优化网络，日常流媒体播放稳定顺滑",
      "支持专属优惠码tt88折扣，套餐配置均衡实用，性价比突出",
      "主流VLESS与Trojan双协议，客户端适配极广，移动端与桌面端体验一致",
      "全节点严格1.0x真实透明倍率，所标即所得，扣量真实规范"
    ],
    "disadvantages": [
      "非纯IEPL物理专线，遇到外部国际海缆抢修或极端网络敏感期偶有重连",
      "起步资费20元，无个位数极低小额体验包",
      "偏远冷门小众国家节点较少，集中于主流高频口岸"
    ],
    "suitableFor": [
      "日常网络浏览、社交分享与音视频流媒体追剧党",
      "中等流量使用需求的上班族与学生，看重实用折扣与稳定体验",
      "追求全平台客户端平滑兼容与开箱即用的普通用户"
    ],
    "sources": ["节点推荐网公开数据", "官方套餐公开说明", "主流客户端兼容性评测"],
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
