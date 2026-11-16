// 选机场网 (xuanjichang.top) - 30 篇客户端与平台实战教程全集数据
module.exports = [
  {
    slug: 'windows',
    title: 'Windows电脑科学上网教程 - Clash Verge与v2rayN图文配置',
    h1: 'Windows平台客户端安装与订阅配置教程',
    client: 'Clash Verge Rev / v2rayN',
    tag: '桌面系统',
    desc: '专为Windows 10/11用户编写的高清图文教程。推荐使用现代化开源内核客户端 Clash Verge Rev 或传统经典工具 v2rayN，手把手教您从下载、安装、一键导入订阅到开启系统代理。',
    steps: [
      { title: '步骤一：下载官方正版客户端安装包', content: '请前往开源社区官方 GitHub Release 页面下载 Clash Verge Rev 的 Windows x64 .exe 安装程序，切勿通过未经认证的第三方网盘下载，防止程序被恶意篡改。' },
      { title: '步骤二：在机场用户后台复制订阅链接', content: '登录您选用的机场控制面板，在“订阅管理”或“快速配置”区域找到“Clash订阅”或“一键导入订阅”，点击复制到剪贴板。' },
      { title: '步骤三：导入订阅并拉取节点配置', content: '打开 Clash Verge Rev，点击左侧“订阅（Profiles）”导航，在顶部输入框粘贴订阅 URL，点击“保存并导入（Save）”，客户端将自动下载最新节点拓扑与分流规则。' },
      { title: '步骤四：选择规则模式并开启系统代理', content: '切换到“代理（Proxies）”界面，模式选择“规则（Rule）”，选择延迟较低的低倍率香港或日本节点。在通用设置中打开“系统代理（System Proxy）”开关即可畅游全球。' }
    ],
    faqs: [
      { q: '开启系统代理后国内微信或网页打不开怎么办？', a: '请确保代理模式设置为「规则（Rule）」而不是「全局（Global）」。规则模式下国内直连不耗流量，海外受限网站才走代理。' },
      { q: '更新订阅时提示网络超时或解析错误？', a: '检查本地网络是否通畅，或在机场后台切换备用订阅域名后重新尝试拉取。' }
    ]
  },
  {
    slug: 'android',
    title: 'Android手机科学上网配置教程 - Clash Meta与v2rayNG图文详解',
    h1: 'Android平台客户端配置与节点使用教程',
    client: 'Clash Meta / v2rayNG',
    tag: '移动系统',
    desc: '针对安卓系统（鸿蒙HarmonyOS、小米HyperOS、OPPO、vivo及原生Android）的完整配置指南，推荐使用基于开源Meta内核的 Clash Meta 或 v2rayNG。',
    steps: [
      { title: '步骤一：安装最新开源 APK 客户端', content: '通过官方 GitHub 仓库下载 Clash Meta Android 版本的 .apk 安装包。安装时如遇系统安全管家提示未知来源应用，允许单次安装即可。' },
      { title: '步骤二：一键唤起导入或手动添加配置', content: '使用手机浏览器登录机场后台，点击“一键导入 Clash for Android”，系统将自动唤起应用；亦可复制订阅链接后在客户端“配置”中手动添加。' },
      { title: '步骤三：选择配置文件并启动 VPN 连接', content: '在配置列表中勾选新导入的机场订阅，返回主界面点击右上角的“运行”开关。首次使用系统会弹出 VPN 授权窗口，点击“始终允许”。' },
      { title: '步骤四：配置后台保活与耗电白名单', content: '在安卓手机“应用管理”中将客户端的电池优化设为“无限制”，并在多任务后台给应用加锁，防止锁屏后被系统后台杀进程导致断连。' }
    ],
    faqs: [
      { q: '为什么手机锁屏几分钟后代理就自动断开？', a: '这是国产品牌手机激进的省电机制所致。请在系统设置中允许客户端后台自启动并忽略电池优化。' }
    ]
  },
  {
    slug: 'ios',
    title: 'iOS苹果手机科学上网教程 - Shadowrocket小火箭配置与节点导入',
    h1: 'iOS平台Shadowrocket与节点导入配置教程',
    client: 'Shadowrocket (小火箭) / Loon / Surge',
    tag: '移动系统',
    desc: '由于国区 App Store 政策限制，iOS 用户需使用非国区 Apple ID（美区或港区）下载 Shadowrocket。本教程手把手教您如何获取正版小火箭并一键导入节点。',
    steps: [
      { title: '步骤一：在 App Store 登录外区 Apple ID', content: '打开 App Store 点击右上角头像，滑到最底部退出当前国区账号，登录美区或港区账号（切勿在设置iCloud处登录）。搜索“Shadowrocket”并购买下载。' },
      { title: '步骤二：一键导入机场节点订阅', content: '使用 Safari 浏览器登录您的机场后台，点击“一键导入小火箭”，Safari 将自动唤起 Shadowrocket 并识别订阅中的全部节点。' },
      { title: '步骤三：全局路由模式保持“配置”', content: '在小火箭主界面确保“全局路由”选项设置为“配置（Config）”，切勿选为“代理（Proxy）”，以确保国内应用正常直连。' },
      { title: '步骤四：开启连接并完成系统授权', content: '选择延迟较低的节点，打开顶部第一行的未连接开关。首次启动输入锁屏密码允许添加 VPN 配置即可。' }
    ],
    faqs: [
      { q: '共享的 Apple ID 登录会不会导致手机被锁？', a: '只要严格遵循【只在 App Store 商店内登录，绝不在系统设置 iCloud 处登录】，下载完成后立即退出，就不会产生任何手机被锁风险。' }
    ]
  },
  {
    slug: 'macos',
    title: 'macOS苹果电脑科学上网教程 - Clash Verge与Surge图文配置',
    h1: 'macOS平台客户端配置与系统代理设置教程',
    client: 'Clash Verge Rev (Mac) / Surge for Mac',
    tag: '桌面系统',
    desc: '专为苹果 Mac 电脑（M1/M2/M3/M4 Apple Silicon 芯片及 Intel 架构）打造的科学上网指南。推荐使用原生的 Clash Verge Rev Mac 版，兼具极简美观与高效分流。',
    steps: [
      { title: '步骤一：下载适配芯片架构的 .dmg 安装包', content: 'Apple Silicon（M系列）芯片请下载 aarch64.dmg，Intel 处理器请下载 x64.dmg。双击打开将图标拖入“应用程序”文件夹。' },
      { title: '步骤二：解决 macOS“未知开发者”安全提示', content: '若提示无法验证开发者，请进入 Mac“系统设置 -> 隐私与安全性”，滑到底部点击“仍要打开”。' },
      { title: '步骤三：导入订阅并开启系统代理', content: '在 Clash Verge 中添加订阅并更新成功后，模式选择“规则（Rule）”，在设置中开启“系统代理（System Proxy）”。' },
      { title: '步骤四：开启开机自启与状态栏常驻', content: '在设置中勾选开机自启，客户端将在顶部菜单栏以小猫咪图标常驻，方便随时切换节点和监控网络上传下载速率。' }
    ],
    faqs: [
      { q: 'Mac 终端 Terminal 为什么没有走代理？', a: 'GUI 客户端默认只代理支持系统代理设置的软件。终端环境需在客户端中开启“TUN 模式”，或在终端配置 export http_proxy 环境变量。' }
    ]
  },
  {
    slug: 'clash-verge-tutorial',
    title: 'Clash Verge Rev 保姆级图文教程 - 从安装到规则分流全攻略',
    h1: 'Clash Verge Rev 跨平台保姆级使用与规则分流指南',
    client: 'Clash Verge Rev 全平台',
    tag: '进阶分流',
    desc: '原版 Clash for Windows 停更后，Clash Verge Rev 凭借优雅的 Tauri 框架界面与活跃的开源 Mihomo 内核成为当之无愧的接班主力。本篇详细拆解其高级功能。',
    steps: [
      { title: '1. 内核切换与协议兼容性', content: 'Clash Verge Rev 默认搭载开源 Mihomo (Meta) 内核，原生完美支持 Vless、Reality、Hysteria 2、TUIC 等新兴尖端代理协议。' },
      { title: '2. 虚拟网卡 TUN 模式的开启与应用', content: '在常规设置中开启 TUN 模式，可在操作系统底层接管所有网络流量（包括不支持系统代理的海外游戏客户端、终端命令行以及特定桌面软件）。' },
      { title: '3. 策略组的精细化定制与节点管理', content: '在代理组中，可以为 ChatGPT 设定固定走美国纯净专线，为 Netflix 设定走新加坡节点，国内网站自动直连，互不抢占带宽。' }
    ],
    faqs: [
      { q: '原版 Clash for Windows 还能继续用吗？', a: '原版虽然本地可运行，但因内核长期停更不支持新兴协议且存在安全隐患，强烈建议迁移至 Clash Verge Rev。' }
    ]
  },
  {
    slug: 'v2rayn-windows-guide',
    title: 'v2rayN Windows客户端深度配置教程 - Xray核心与节点测速实操',
    h1: 'v2rayN 电脑客户端新手配置与节点测速教程',
    client: 'v2rayN (Windows)',
    tag: '经典工具',
    desc: '作为 Windows 平台上历史最悠久、更新最勤奋的经典客户端，v2rayN 具备无与伦比的协议支持度。本文教您如何配置 Xray 核心、批量测速与路由分流。',
    steps: [
      { title: '1. 下载包含 Core 核心的完整发行包', content: '在 GitHub 官方仓库下载带有全核心（Core）的压缩包，解压后双击运行 v2rayN.exe。' },
      { title: '2. 订阅分组与一键更新', content: '点击顶部“订阅分组”菜单 -> “订阅分组设置”，添加机场订阅链接，保存后点击“订阅” -> “更新全部订阅（不通过代理）”。' },
      { title: '3. 批量延迟与真实下载测速', content: '全选节点按下 Ctrl + R 进行真实下载速度测试，选择延迟低且速度跑满的优质节点，右键设为活动服务器。' },
      { title: '4. 开启系统代理与分流模式', content: '在屏幕右下角托盘右键 v2rayN 图标，将“系统代理”设为“自动配置系统代理”，路由建议选择“绕过大陆(Whitelist)”。' }
    ],
    faqs: [
      { q: '测试延迟正常但打开浏览器依然打不开网页？', a: '请检查底部路由是否误设为全局阻断，或右下角系统代理图标是否变成了红色（生效状态）。' }
    ]
  },
  {
    slug: 'v2rayng-android-guide',
    title: 'v2rayNG 安卓手机客户端配置教程 - 订阅导入与分流设置',
    h1: 'v2rayNG 安卓手机客户端下载配置与分流教程',
    client: 'v2rayNG (Android)',
    tag: '移动系统',
    desc: 'v2rayNG 是安卓平台上最具代表性的开源网络代理工具，界面干净、内存开销极小。本文详细介绍订阅设置、分应用代理及自启动保活。',
    steps: [
      { title: '1. 下载并安装官方 APK 安装包', content: '在 GitHub Release 下载最新的 v2rayNG .apk 安装包并在手机端完成安装。' },
      { title: '2. 添加订阅分组并更新节点', content: '点击左上角侧边栏 -> “订阅分组设置” -> “+”，粘贴机场订阅链接保存。返回主界面点击右上角三点菜单选择“更新订阅”。' },
      { title: '3. 测试所有节点真实连通性', content: '点击右上角三点菜单 -> “测试全部配置真连接”，绿色延迟数值即为当前可用节点，点击勾选一个节点。' },
      { title: '4. 开启连接与分应用代理', content: '点击右下角的圆形 V 按钮连接。可在侧边栏“设置”中开启“分应用代理”，自定义仅允许特定海外 App 走代理。' }
    ],
    faqs: [
      { q: '为什么测速显示连通，但打开推特仍无反应？', a: '检查分流设置中是否误开启了“全局直连”，应保持为“绕过局域网及大陆地址”。' }
    ]
  },
  {
    slug: 'surge-macos-guide',
    title: 'Surge for Mac 企业级代理与网络调试全面教学',
    h1: 'Surge for Mac 专家级网络代理与分流实战教程',
    client: 'Surge Mac',
    tag: '高端专业',
    desc: 'Surge 作为 macOS 平台性能最强悍、调试功能最专业的代理神器，深受开发者与极客喜爱。本文拆解其配置文件语法、网关模式与增强模式。',
    steps: [
      { title: '1. 订阅转换为 Surge 配置文件托管', content: '在支持 Surge 的机场后台一键复制 Surge 托管配置链接，在 Surge 主菜单选择“Download Profile from Web”。' },
      { title: '2. 开启增强模式（Enhanced Mode）', content: '开启 Enhanced Mode 虚拟网卡接管所有未设置代理的软件流量，彻底消除命令行和跨平台应用的代理死角。' },
      { title: '3. 策略组与子策略精细定制', content: '在 Surge 配置中设置 PROXY、Streaming、AI 等分流策略组，实现不同服务自动走最优专属线路。' }
    ],
    faqs: [
      { q: 'Surge 购买授权费用较高，普通用户有必要买吗？', a: '普通冲浪使用免费开源的 Clash Verge Rev 即可；专业开发者或有多设备旁网关调试需求者推荐购买 Surge。' }
    ]
  },
  {
    slug: 'surge-ios-guide',
    title: 'Surge iOS 脚本、分流规则与模块高级配置教程',
    h1: 'Surge iOS 客户端高级订阅导入与模块定制教程',
    client: 'Surge iOS',
    tag: '高端专业',
    desc: '深入剖析苹果 iOS 顶级调试工具 Surge 的高级玩法，涵盖 Module 模块一键安装、MitM 解密与企业级分流。',
    steps: [
      { title: '1. 安装与外部配置订阅导入', content: '在美区 App Store 下载正版 Surge iOS，通过扫码或 URL 安装机场提供的 Surge 专属配置。' },
      { title: '2. 安装常见去广告与分流 Module 模块', content: '在“模块”界面一键添加社区开源模块，自动实现流媒体增强、广告拦截与重写分流。' },
      { title: '3. 监控与网络诊断排障', content: '利用内置的 Request 实时抓包面板，精准查看每个请求命中的分流规则与真实节点 IP。' }
    ],
    faqs: [
      { q: '开启后耗电量如何？', a: 'Surge 采用了极度优化的底层网络框架，日常规则分流模式下电量损耗微乎其微。' }
    ]
  },
  {
    slug: 'loon-ios-guide',
    title: 'Loon iOS 客户端节点订阅导入与插件脚本教程',
    h1: 'Loon 苹果手机客户端配置与插件生态教程',
    client: 'Loon (iOS)',
    tag: '轻奢神器',
    desc: 'Loon 凭借极高性价比、精美 UI 与极其强大的插件（Plugin）生态，成为小火箭与 Surge 之间的绝佳选择。',
    steps: [
      { title: '1. 订阅管理与节点导入', content: '在 Loon“配置” -> “节点与订阅”中粘贴机场订阅，支持自动去重与定时自动更新。' },
      { title: '2. 插件中心一键武装', content: '利用 Loon 强大的 Plugin 系统，一键安装常见流媒体优化、ChatGPT 解锁修正等热门脚本。' },
      { title: '3. 节点策略组自由编排', content: '自由组合节点并设置自动测速切换策略，晚高峰自动避开拥堵线路。' }
    ],
    faqs: [
      { q: 'Loon 和小火箭有什么区别？', a: 'Loon 的插件和脚本生态更现代化，UI 视觉也更为精致现代，适合进阶用户。' }
    ]
  },
  {
    slug: 'quantumult-x-guide',
    title: 'Quantumult X (圈X) 策略组与分流重写完整教学',
    h1: 'Quantumult X 苹果手机节点导入与分流配置教学',
    client: 'Quantumult X (iOS)',
    tag: '经典极客',
    desc: '人称“圈X”的 Quantumult X 以强大的重写功能和炫酷的仪表盘闻名。本文教您快速导入机场分流与节点引用。',
    steps: [
      { title: '1. 引用机场服务器节点资源', content: '在圈X设置中点击“节点” -> 右上角“+” -> “服务器资源引用”，填入订阅链接并开启“资源解析器”。' },
      { title: '2. 配置分流策略组', content: '在策略组中新增流媒体与常用代理分类，将节点资源分配到对应策略中。' },
      { title: '3. 右下角开关与长按切换策略', content: '打开大风车开关连接，长按策略组图标即可快速手动切换当前使用的国家节点。' }
    ],
    faqs: [
      { q: '导入订阅后提示节点解析失败？', a: '请在资源配置中确保勾选了“资源解析器（Parser）”开关，以便将通用链接转换为圈X专有格式。' }
    ]
  },
  {
    slug: 'singbox-windows-guide',
    title: 'Sing-box Windows 现代通用代理内核配置教学',
    h1: 'Sing-box Windows 客户端图文安装与配置教程',
    client: 'Sing-box (Windows)',
    tag: '下一代核心',
    desc: 'Sing-box 是新一代跨平台通用代理核心，原生支持所有最新加密协议，内存占用极低。本文教您在 Windows 上优雅使用 Sing-box。',
    steps: [
      { title: '1. 下载 Sing-box 图形客户端', content: '前往官方 GitHub 仓库下载 Sing-box GUI 桌面客户端或使用集成界面的发行版。' },
      { title: '2. 导入 JSON 订阅配置', content: '在订阅管理中粘贴机场提供的 Sing-box 原生格式订阅链接，完成节点解析。' },
      { title: '3. 开启 TUN 虚拟网卡模式', content: '在主界面勾选启用 TUN 模式并启动服务，即可体验新一代代理内核带来的毫秒级低延迟响应。' }
    ],
    faqs: [
      { q: '我的机场不提供 Sing-box 订阅链接怎么办？', a: '可以使用开源的 Sub-Store 订阅转换工具将通用 Clash 链接一键转换为 Sing-box 规范。' }
    ]
  },
  {
    slug: 'singbox-android-guide',
    title: 'Sing-box Android 图文教程：新一代跨协议代理实操',
    h1: 'Sing-box 安卓手机客户端下载与节点使用教程',
    client: 'Sing-box (Android)',
    tag: '下一代核心',
    desc: 'Sing-box 官方安卓版在 Google Play 及 GitHub 同步发行，纯 Kotlin 开发，性能极高。本文详细拆解其配置步骤。',
    steps: [
      { title: '1. 安装官方版本', content: '通过 GitHub Release 下载 arm64-v8a 架构的 .apk 并安装。' },
      { title: '2. 添加 Profile 配置', content: '在“Profiles”页面点击右上角“+”，选择“New Profile”，输入名称并在 Source 选择“Remote”，粘贴订阅 URL 保存。' },
      { title: '3. 点击更新并启动连接', content: '点击配置卡片右侧的刷新按钮下载节点，回到 Dashboard 页面轻触启动开关。' }
    ],
    faqs: [
      { q: '支持哪些新协议？', a: '完整原生支持 Hysteria 2、TUIC v5、VLESS Reality 等新协议，且耗电量极低。' }
    ]
  },
  {
    slug: 'singbox-ios-guide',
    title: 'Sing-box iOS 客户端安装与纯净规则配置',
    h1: 'Sing-box 苹果手机客户端配置与订阅教程',
    client: 'Sing-box (iOS)',
    tag: '下一代核心',
    desc: 'Sing-box iOS 版本在海外 App Store 免费上架，无需任何付费即可免费使用强大的新一代协议。',
    steps: [
      { title: '1. 外区 App Store 免费获取', content: '登录美区 Apple ID，在 App Store 免费搜索并安装“Sing-box”。' },
      { title: '2. 导入远端配置 URL', content: '进入 Profiles 菜单点击“+”，选择“Create”，填入机场 Sing-box 订阅链接保存。' },
      { title: '3. 允许 VPN 权限并启动', content: '回到主界面点击 Enabled 开关，输入手机锁屏密码授权系统级 VPN 配置。' }
    ],
    faqs: [
      { q: 'iOS 上 Sing-box 需要花钱购买吗？', a: '不需要，Sing-box iOS 客户端完全开源且免费上架，是极佳的免费高品质替代方案。' }
    ]
  },
  {
    slug: 'openwrt-clash-guide',
    title: 'OpenWrt 软路由配置 OpenClash 全屋科学上网教程',
    h1: 'OpenWrt 软路由安装 OpenClash 全家设备翻墙指南',
    client: 'OpenClash (OpenWrt)',
    tag: '软路由网关',
    desc: '软路由玩家必备神技！本文详解如何在 OpenWrt 路由器上安装 OpenClash 插件，实现全家手机、电脑、电视盒子免客户端透明代理。',
    steps: [
      { title: '1. 安装依赖与 OpenClash ipk 插件', content: '在 OpenWrt 系统中通过软件包管理器安装 luci-app-openclash 及其必备内核。' },
      { title: '2. 配置文件订阅与内核更新', content: '在 OpenClash“配置订阅”中粘贴机场 Clash 订阅链接，并在“插件设置”中下载最新的 Meta/Mihomo 内核。' },
      { title: '3. 运行模式选择 Fake-IP 与混合分流', content: '推荐在常规设置中开启“Fake-IP 混合模式”，兼具极速 DNS 解析与全屋设备自动化分流。' },
      { title: '4. 启动主程序与面板管理', content: '点击“启动 OpenClash”，启动成功后点击“打开面板（Yacd）”即可在浏览器中可视化切换节点。' }
    ],
    faqs: [
      { q: '国内网速会受到影响吗？', a: '在 Fake-IP 混合规则模式下，国内网站自动走本地运营商 DNS 解析与直连，网速不受任何影响。' }
    ]
  },
  {
    slug: 'passwall-openwrt-guide',
    title: 'PassWall 软路由插件节点分流与自动容灾切换',
    h1: 'PassWall 软路由配置教程：主备容灾与多节点分流',
    client: 'PassWall (OpenWrt)',
    tag: '软路由网关',
    desc: 'PassWall 是 OpenWrt 平台另一款轻量级、响应速度极快的代理神器。本文教您配置自动节点故障转移与国内直连。',
    steps: [
      { title: '1. 添加节点订阅', content: '在 PassWall“节点订阅”菜单中添加机场订阅并执行一次更新，获取节点列表。' },
      { title: '2. 设置主节点与备用节点', content: '选择一条高质量专线节点作为 TCP 主节点，设置一条平价中转节点作为故障备用节点。' },
      { title: '3. 开启自动健康检查', content: '开启定时 ping 监测，当主节点发生网络波动时，PassWall 会在毫秒级自动切换到备用节点。' }
    ],
    faqs: [
      { q: 'PassWall 和 OpenClash 哪个好？', a: 'PassWall 资源消耗极小、稳定性高；OpenClash 规则分流与面板控制更强大，可根据路由器 CPU 性能选择。' }
    ]
  },
  {
    slug: 'apple-tv-proxy-guide',
    title: 'Apple TV 配合 tvOS 17 原生小火箭与Surge追剧教程',
    h1: 'Apple TV tvOS 原生代理客户端安装与4K追剧教程',
    client: 'Shadowrocket / Surge (Apple TV)',
    tag: '智能大屏',
    desc: '自从 tvOS 17 正式开放系统级 VPN 接口，Apple TV 终于可以摆脱软路由，原生安装小火箭或 Surge 畅享 4K 影音。',
    steps: [
      { title: '1. 在 Apple TV App Store 下载客户端', content: '在 Apple TV 上登录已购买过小火箭或 Surge 的美区 Apple ID，在 App Store 免费下载对应 tvOS 版本。' },
      { title: '2. 局域网隔空同步配置', content: '打开 iPhone 上的小火箭，在“设置”中选择“隔空推送到 Apple TV”，数秒内即可将手机上的全部节点同步到大屏端。' },
      { title: '3. 开启连接并测试 Netflix 4K HDR', content: '在 Apple TV 界面点击连接，打开 Netflix 或 YouTube 即可畅快秒开 4K/8K 杜比视界片源。' }
    ],
    faqs: [
      { q: '电视遥控器输入订阅太麻烦怎么办？', a: '利用手机同局域网的“隔空投送”或网页扫码功能，1秒钟即可传输配置，完全无需遥控器打字。' }
    ]
  },
  {
    slug: 'android-tv-box-guide',
    title: 'Android TV 电视盒子安装 Clash 与 4K Netflix 解锁配置',
    h1: 'Android TV 电视盒子安装客户端与家庭影音翻墙教程',
    client: 'Clash for Android (TV版)',
    tag: '智能大屏',
    desc: '针对索尼电视、小米电视盒子、Chromecast with Google TV 等安卓大屏设备的科学上网教程，轻松解决遥控器操作难题。',
    steps: [
      { title: '1. 使用 U 盘或局域网快传安装 TV 版 APK', content: '下载专为电视遥控器优化的 Clash for Android TV APK 安装包，通过 U 盘安装到电视中。' },
      { title: '2. 手机扫码导入机场订阅', content: '打开应用选择“从URL导入”，电视屏幕会展示一个专属二维码，用手机微信或浏览器扫码即可输入订阅链接。' },
      { title: '3. 开启系统代理并设置开机自启', content: '用遥控器选中已下载的配置启动连接，并在电视设置中允许悬浮窗与开机自启动。' }
    ],
    faqs: [
      { q: '为什么 Netflix 提示设备不支持？', a: '电视端 Netflix 需要设备具备宽腾（Widevine L1）认证，建议使用 Chromecast、Nvidia Shield 或通过认证的外贸机顶盒。' }
    ]
  },
  {
    slug: 'switch-ps5-game-proxy-guide',
    title: '任天堂 Switch / PS5 主机游戏联机与加速代理教程',
    h1: 'Switch 与 PS5 主机通过电脑局域网代理加速实战',
    client: 'Clash Verge / Switch / PS5',
    tag: '主机游戏',
    desc: 'Switch 商店下载慢、联机报 NAT 错误？PS5 联机频繁掉线？本文教您如何通过电脑端代理客户端开启局域网共享，为主机游戏提供极速加速。',
    steps: [
      { title: '1. 在电脑端开启“允许局域网连接”', content: '在电脑的 Clash Verge 中勾选“Allow LAN（允许局域网连接）”，并记录电脑的局域网 IP（如 192.168.1.100）及代理端口（通常为 7890）。' },
      { title: '2. 在 Switch / PS5 中设置代理服务器', content: '进入主机网络设置 -> 选择当前 WiFi -> 更改设置，将“代理服务器”改为“启用”，填入电脑 IP 及端口 7890。' },
      { title: '3. 测试网络连接与 NAT 类型', content: '主机进行连接测试，下载速度即可达到宽带上限，且 NAT 类型将提升为 A 或 B 级最佳联机状态。' }
    ],
    faqs: [
      { q: '电脑关机后主机还能联网吗？', a: '不能，此方案依赖电脑充当中转网关。如需脱离电脑，建议配置软路由或支持代理的专用路由器。' }
    ]
  },
  {
    slug: 'telegram-proxy-setup-guide',
    title: 'Telegram 电报 MTProto 与 Socks5 专用代理直连配置',
    h1: 'Telegram (电报) 内置代理直连与网络加速教程',
    client: 'Telegram Desktop / Mobile',
    tag: '常用应用',
    desc: '不需要开启全局代理！通过 Telegram 自带的代理设置（Socks5 / MTProto），仅让电报单应用极速连接，不影响其他软件。',
    steps: [
      { title: '1. 获取本地客户端的 Socks5 监听端口', content: '查看您正在运行的 Clash 或 v2rayN 客户端，确认本地 Socks5 监听端口（例如 Clash 默认为 7890）。' },
      { title: '2. 在 Telegram 中进入代理设置', content: '打开 Telegram 设置 -> “数据与存储（Data and Storage）” -> 滑到底部点击“代理设置（Proxy Settings）”。' },
      { title: '3. 添加 Socks5 代理', content: '点击“添加代理”，类型选 SOCKS5，服务器填 127.0.0.1，端口填 7890，保存并勾选“使用代理”。' },
      { title: '4. 验证连通状态', content: '左下角显示“已连接（Connected）”且带有 ping 延迟数值，即可顺畅收发消息与下载大文件视频。' }
    ],
    faqs: [
      { q: '手机端也可以这样设置吗？', a: '可以，如果手机上运行着客户端，填入 127.0.0.1 及对应本地端口同样生效。' }
    ]
  },
  {
    slug: 'chrome-edge-proxy-switchyomega-guide',
    title: '浏览器代理插件 ZeroOmega / SwitchyOmega 规则分流教程',
    h1: '浏览器扩展 ZeroOmega 自动分流与网页极速代理教程',
    client: 'Chrome / Edge 浏览器扩展',
    tag: '浏览器插件',
    desc: '不想开启系统全局代理？通过浏览器插件 ZeroOmega（原 SwitchyOmega 维护版），实现仅浏览器按域名自动切换代理。',
    steps: [
      { title: '1. 安装 ZeroOmega 扩展程序', content: '在 Chrome 网上应用店或 Edge 外接程序商店搜索并安装“ZeroOmega”。' },
      { title: '2. 新建本地代理情景模式', content: '创建名为“本地代理”的情景，协议选 SOCKS5，代理服务器填 127.0.0.1，端口填 7890。' },
      { title: '3. 配置“自动切换”情景模式与规则列表', content: '在自动切换模式下添加 gfwlist 在线规则库，当访问被墙网站时自动走本地代理，访问国内网站自动直连。' }
    ],
    faqs: [
      { q: 'SwitchyOmega 为什么商店提示不兼容？', a: '由于 Chrome 迁移至 Manifest V3 规范，旧版 SwitchyOmega 停更，请认准新版 ZeroOmega 完全兼容 V3。' }
    ]
  },
  {
    slug: 'git-github-terminal-proxy-guide',
    title: 'Git 与终端命令行设置 http_proxy / ssh 代理极速拉取',
    h1: '程序员必看：Git 与命令行终端代理环境配置全攻略',
    client: 'Git / Terminal (macOS/Linux/Windows)',
    tag: '开发加速',
    desc: '解决 git clone 频繁超时、Failed to connect to github.com 报错。教您为 Git 协议与系统终端配置极速代理通道。',
    steps: [
      { title: '1. 为 Git 配置全局 HTTP 代理', content: '在终端执行命令：git config --global http.proxy http://127.0.0.1:7890 及 https.proxy http://127.0.0.1:7890。' },
      { title: '2. 为 SSH 协议克隆配置 ~/.ssh/config', content: '在 ~/.ssh/config 中针对 github.com 增加 ProxyCommand 走本地 Connect 命令转发。' },
      { title: '3. 终端临时环境变量加速', content: '配置 alias proxy="export http_proxy=http://127.0.0.1:7890; export https_proxy=http://127.0.0.1:7890"，随时一键加速。' }
    ],
    faqs: [
      { q: '如何取消 Git 代理设置？', a: '执行 git config --global --unset http.proxy 即可恢复默认直连。' }
    ]
  },
  {
    slug: 'docker-pull-proxy-guide',
    title: 'Docker 配置海外镜像加速与守护进程代理拉取',
    h1: 'Docker Pull 镜像拉取超时解决：配置 Daemon 代理指南',
    client: 'Docker Desktop / Linux Docker',
    tag: '开发加速',
    desc: '国内 Docker Hub 镜像中心受限后，如何为 Docker 守护进程配置正规代理通道，实现海外镜像毫秒级拉取。',
    steps: [
      { title: '1. 修改 /etc/docker/daemon.json 或 systemd 配置', content: '在 /etc/systemd/system/docker.service.d/http-proxy.conf 中写入 HTTP_PROXY 与 HTTPS_PROXY 环境变量。' },
      { title: '2. Docker Desktop 图形化设置', content: '在 Docker Desktop 设置 -> Resources -> Proxies 中开启 Manual proxy configuration，填入本地代理端口。' },
      { title: '3. 重启 Docker 服务验证拉取', content: '执行 systemctl daemon-reload && systemctl restart docker，随后拉取 gcr.io 或 k8s 镜像秒级下载。' }
    ],
    faqs: [
      { q: '容易误代理本地局域网吗？', a: '请在 NO_PROXY 中添加 localhost,127.0.0.1,192.168.0.0/16 避免局域网流量被拦截。' }
    ]
  },
  {
    slug: 'python-pip-conda-proxy-guide',
    title: 'Python pip、conda 与 npm 开发者国内/代理加速设置',
    h1: 'Python pip 与 npm 包管理器命令行代理加速实操',
    client: 'pip / conda / npm',
    tag: '开发加速',
    desc: '开发者安装海外第三方依赖库经常连接失败。本文汇总 pip、conda、npm 配置代理命令与换源备选方案。',
    steps: [
      { title: '1. pip 安装单次走代理', content: '使用 pip install package_name --proxy http://127.0.0.1:7890 临时走代理通道下载。' },
      { title: '2. npm 配置代理命令', content: '执行 npm config set proxy http://127.0.0.1:7890 与 npm config set https-proxy http://127.0.0.1:7890。' },
      { title: '3. Conda 配置文件添加代理', content: '在 ~/.condarc 文件中配置 proxy_servers 字段，无阻下载海外 pytorch/tensorflow 大包。' }
    ],
    faqs: [
      { q: '为什么开了系统代理 pip 还是超时？', a: '因为许多命令行工具不主动读取系统注册表代理，必须显式声明环境变量或命令行参数。' }
    ]
  },
  {
    slug: 'chatgpt-warp-clean-ip-guide',
    title: 'ChatGPT 遇到 Access Denied 报错的自检与清缓存修复流程',
    h1: 'ChatGPT 登录报错 Access Denied 终极排障与修复流程',
    client: '浏览器 / ChatGPT 客户端',
    tag: 'AI实操',
    desc: '手把手教您如何通过切换原生纯净 IP、配置分流规则与清理 IndexedDB 深度缓存，解决 OpenAI 频繁风控报错。',
    steps: [
      { title: '1. 检查当前节点真实落地 IP 类型', content: '访问 ipinfo.io，确认节点所属机构是否为海外家庭宽带或合规专线，避免使用广播机房 IP。' },
      { title: '2. 深度清理浏览器网站数据与 Cookie', content: '在浏览器中打开 openai.com，按 F12 打开开发者工具，清除 Local Storage、Session Storage 与 Cookies。' },
      { title: '3. 固定使用单一国家节点登录', content: '在客户端中将 openai.com 分流规则固定到美国或新加坡专线，严禁短时间内频繁更换多国 IP 登录。' }
    ],
    faqs: [
      { q: '为什么无痕模式可以打开，正常窗口打不开？', a: '说明正常窗口中残留了被 OpenAI 风控标记的 Cookie，彻底清理该域名的 Cookie 即可修复。' }
    ]
  },
  {
    slug: 'subconverter-substore-guide',
    title: '订阅转换 Subconverter 与 Sub-Store 机场节点订阅管理教程',
    h1: 'Sub-Store 订阅聚合与转换教程：打造专属无缝节点流',
    client: 'Sub-Store / Subconverter',
    tag: '进阶极客',
    desc: '拥有多家机场订阅？通过高级订阅管理工具 Sub-Store，实现跨机场节点去重、重命名、自动测速过滤与多格式输出。',
    steps: [
      { title: '1. 部署或打开 Sub-Store Web 面板', content: '通过 Docker 本地部署或直接使用社区认证的安全托管面板。' },
      { title: '2. 添加多个机场订阅源', content: '在“订阅”中将您的 14 家机场订阅导入，设置节点排除正则（如剔除高倍率或失效节点）。' },
      { title: '3. 生成合流订阅 URL', content: '创建“组合订阅（Collection）”，生成一条专属订阅链接填入 Clash 或小火箭，一人管理数十家机场。' }
    ],
    faqs: [
      { q: '使用第三方在线转换网站安全吗？', a: '切勿使用来历不明的公共订阅转换站以防订阅泄露。推荐使用本地运行或自建的 Sub-Store 实例。' }
    ]
  },
  {
    slug: 'tun-mode-troubleshooting-guide',
    title: '虚拟网卡 TUN 模式深度原理与网络冲突排查解决',
    h1: 'Clash TUN 模式运行原理与常见网络冲突排错指南',
    client: 'TUN Mode (全平台)',
    tag: '系统底层',
    desc: 'TUN 模式为什么能代理所有流量？开启后打不开网页或局域网设备无法访问怎么解决？本文深入讲解网络协议栈。',
    steps: [
      { title: '1. 虚拟网卡安装与管理员权限', content: '确认客户端是否以管理员身份运行并成功在网络适配器中生成了名为 Meta 或 wintun 的虚拟网卡。' },
      { title: '2. 解决 DNS 死锁与回路问题', content: '检查 Clash 的 DNS 模块是否开启了 fake-ip-filter，确保国内公共 DNS（如 223.5.5.5）不被循环拦截。' },
      { title: '3. 局域网白名单排除', content: '配置 bypass-rules 排除 192.168.0.0/16 等局域网私网网段，确保局域网打印机与 NAS 访问不受阻。' }
    ],
    faqs: [
      { q: '为什么开启 TUN 模式后电脑无法连接 WiFi 打印机？', a: '因为局域网广播流量被虚拟网卡拦截。在 TUN 配置中添加局域网私有地址白名单即可解决。' }
    ]
  },
  {
    slug: 'dns-leak-test-fix-guide',
    title: 'DNS 泄露检测与防止运营商 DNS 劫持污染防范教程',
    h1: 'DNS 泄露安全检测与加密 DNS (DoH/DoT) 配置实操',
    client: 'DNS 检测 / DoH / DoT',
    tag: '网络安全',
    desc: '即使开启了代理，你的上网记录依然可能通过运营商 DNS 查询暴露！本文教您如何做 DNS 泄露检测并彻底封堵漏洞。',
    steps: [
      { title: '1. 进行权威在线 DNS 泄露检测', content: '连接代理后打开 browserleaks.com/dns，观察检测出来的 DNS 服务器 IP 是否包含中国电信/联通/移动节点。' },
      { title: '2. 开启客户端 DoH (DNS over HTTPS)', content: '在客户端 DNS 配置中启用加密 DoH 服务器（如 Cloudflare: https://1.1.1.1/dns-query），全程加密解析。' },
      { title: '3. 开启 Fake-IP 模式阻断本地解析', content: '使用 Clash 的 Fake-IP 模式，本地直接返回虚拟 IP，真实域名解析在海外落地机上进行，物理杜绝泄露。' }
    ],
    faqs: [
      { q: '检测报告中只显示海外机房 IP 算合格吗？', a: '只要测试列表完全不出现国内三大运营商的 DNS 服务器地址，即代表 DNS 泄露已被完美封堵。' }
    ]
  },
  {
    slug: 'router-merlin-clash-guide',
    title: '华硕梅林路由器固件离线安装 Clash 插件全家翻墙指南',
    h1: '华硕梅林固件路由器安装 Clash 插件透明代理教程',
    client: '梅林 Merlin / 华硕路由器',
    tag: '路由器网关',
    desc: '针对华硕经典路由器（RT-AX86U、RT-AC86U 等）梅林固件的离线安装包配置，打造免开客户端的全屋极速代理。',
    steps: [
      { title: '1. 开启 JFFS 分区与 SSH 连接', content: '在路由器后台系统管理中开启 JFFS 脚本支持与 SSH 访问，插入格式化为 ext4 的 U 盘扩展空间。' },
      { title: '2. 上传并离线安装 Clash 插件包', content: '通过 SCP 或软件中心离线安装插件包，进入插件管理界面。' },
      { title: '3. 导入机场订阅并设置分流', content: '粘贴机场 Clash 订阅链接，模式选择 GFWList 或大陆白名单模式，点击启动。' }
    ],
    faqs: [
      { q: '梅林路由器 CPU 占用高吗？', a: '现代博通四核 ARM 处理器（如 AX86U）运行 Clash 带宽吞吐可达 500Mbps 以上，CPU 负载在 20% 以内。' }
    ]
  },
  {
    slug: 'bypass-lan-ip-split-guide',
    title: '局域网旁路由网关科学上网配置与静态 IP 分流教程',
    h1: '局域网旁路由单网口软路由科学上网网关设置教程',
    client: '旁路由 / 网关模式',
    tag: '路由器网关',
    desc: '不改变家庭主路由器配置！利用单网口微型小主机（如 N1、各类迷你工控机）作为旁路由，仅让需要翻墙的设备指定网关。',
    steps: [
      { title: '1. 设置旁路由静态 IP 与关闭 DHCP', content: '将旁路由 IP 设为主路由同网段（如 192.168.1.2），网关指向主路由（192.168.1.1），务必关闭旁路由 DHCP 服务。' },
      { title: '2. 在旁路由上运行代理插件', content: '启动 PassWall 或 OpenClash，开启全局转发与防火墙自定义伪装规则。' },
      { title: '3. 客户端手动修改网关', content: '需要科学上网的电脑或电视盒子，在网络连接中将“默认网关”与“DNS”手动改成旁路由 IP（192.168.1.2）。' }
    ],
    faqs: [
      { q: '旁路由断电会影响家里其他普通人上网吗？', a: '完全不影响！因为主路由 DHCP 依旧正常运作，其他未修改网关的家人设备依然正常走主路由直连。' }
    ]
  }
];
