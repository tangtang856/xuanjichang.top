const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');

function buildBlog() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  const articles = [
    {
      slug: 'how-to-choose-airport',
      title: '新手如何选择适合自己的机场？2026年保姆级选购决策指南',
      h1: '新手如何科学挑选适合自己的机场？完整决策评估指南',
      tag: '核心决策',
      desc: '面对网络上成百上千家机场推荐，小白往往不知所措。本文从明确使用需求、算清真实每GB价格、看懂线路类型（IEPL与BGP）及防跑路避坑五大步骤，帮您建立清晰的决策框架。',
      content: `
        <h2>引言：为什么绝大多数人第一次买机场都会“踩雷”？</h2>
        <p>
          在翻墙与科学上网领域，很多刚入门的新手经常犯两个典型错误：要么在网上随手买了个只要几块钱一年的超低价年付套餐，结果用了一个月服务商就关门跑路；要么花大价钱买了一家号称“万兆IEPL专线”的昂贵机场，结果发现晚高峰看4K视频依然卡顿不堪。
        </p>
        <p>
          造成这种现象的根源在于：绝大多数所谓的测评网站只是一味地堆砌推广返利链接，却从未向用户讲透<strong>机场背后的线路技术原理、网络运营商拓扑以及真实的成本模型</strong>。今天，选机场网编辑部将通过这份保姆级指南，彻底解构科学挑选机场的完整评估步骤。
        </p>

        <h2>第一步：精准量化您自己的真实网络需求</h2>
        <p>
          世界上不存在所谓“适合所有人”的万能机场。在掏钱之前，请先问自己以下四个关键问题：
        </p>
        <ul>
          <li><strong>您的核心用途是什么？</strong>是查阅 Google 学术和维基百科等网页文字？还是高码率 4K YouTube 追剧？或者是需要使用 OpenAI ChatGPT / Claude 处理紧急工作？</li>
          <li><strong>您对“晚高峰延迟与稳定性”有多敏感？</strong>如果断线几分钟会导致您的股票外汇交易无法平仓或远程外企视频会议中断，您必须选择 IEPL 专线；如果您只是轻度浏览，普通公网中转即可满足。</li>
          <li><strong>您每月实际消耗多少 GB 流量？</strong>普通文字浏览每月 20-50GB 绰绰有余；日常超清追剧通常需要 150-300GB；大批量下载海外游戏数据包则需要 500GB 以上。</li>
          <li><strong>您有多少台终端设备需要同时在线？</strong>单人手机+电脑通常需要 2-3 台并发；家庭共享或多设备用户需要 5-8 台甚至不限设备并发。</li>
        </ul>

        <h2>第二步：读懂线路架构——专线、公网中转与直连的区别</h2>
        <p>
          不同线路架构的成本差异高达数十倍，这直接决定了机场的使用体验：
        </p>
        <ol>
          <li><strong>纯内网专线（IEPL / IPLC）：</strong>中国大陆端与海外端走的是完全独立的物理内网光缆通信。数据完全不经过国家公网防火墙（GFW），因此在物理上根本不存在被封锁截断的可能，晚高峰零丢包、低延迟，是预算充裕者的首选。</li>
          <li><strong>BGP / 优质公网隧道中转：</strong>国内入口采用BGP多线机房接收用户流量，然后通过加密隧道传输到海外落地机房。性价比高，但遇国家防火墙大规模升级时偶有波动。</li>
          <li><strong>直连节点（普通VPS搭建）：</strong>用户客户端直接向海外服务器公网IP发送请求，封锁期极易整组IP被墙，目前成熟正规机场已基本淘汰此类架构。</li>
        </ol>

        <h2>第三步：计算真实每GB单价，拆穿虚假流量陷阱</h2>
        <p>
          千万不要被“5元 500G”这种夸张广告蒙蔽。部分不良商家为了吸引眼球，虽然标称给了500GB，但后台所有节点全设为 3.0x 甚至 5.0x 倍率。这意味着你每看一个 1GB 的视频，实际扣除 3GB 流量，实际可用流量缩水为原来的三分之一！
        </p>
        <p>
          <strong>选机场网建议的科学折算公式：</strong><br>
          <code>实际每GB使用成本 = 套餐总价 / (标称总流量 × 默认常用节点平均倍率)</code>
        </p>

        <h2>第四步：必须遵循的避坑四大法则</h2>
        <div class="callout callout-warning">
          <strong>新手防坑红线：</strong><br>
          1. <strong>绝不首次购买大额年付套餐：</strong>无论客服承诺多么动听，首次体验请严格选择「月付」。稳定使用3个月后，确认晚高峰与售后可靠，再考虑季度或半年付款。<br>
          2. <strong>远离任何宣称“永久免费”或“永久买断”的项目：</strong>服务器机房每月都需要向电信联通缴纳巨额带宽租金，永久买断在经济学模型上纯属骗局。<br>
          3. <strong>准备两条不同服务商线路：</strong>主力专线用于办公与追剧，平价月付备用梯子放在客户端中随时备用，彻底杜绝单点故障失联。
        </div>
      `
    },
    {
      slug: 'airport-vs-traditional-vpn',
      title: '机场与传统VPN有什么区别？技术原理与选购防坑深度对比',
      h1: '机场与传统VPN有什么区别？技术原理、速度与安全性深度剖析',
      tag: '技术解密',
      desc: '为什么 ExpressVPN、NordVPN 等享誉全球的传统大厂在国内频频失效、连不上甚至极度卡顿？本文深度揭示传统通用VPN与现代翻墙代理“机场”在协议特征、加密机制与路由分流上的本质差异。',
      content: `
        <h2>引言：为什么享誉全球的国际VPN大厂在中文互联网水土不服？</h2>
        <p>
          许多出海企业员工或初次翻墙的朋友，在搜索引擎上搜索“VPN推荐”时，常常会看到大量英文科技媒体推荐 ExpressVPN、NordVPN、Surfshark 等国际知名商业公司。然而一旦花了几百元购买并回到国内使用，往往会发现：软件频繁转圈连接失败、就算连上速度也极其缓慢，甚至几天之内就全线瘫痪。
        </p>
        <p>
          反观国内科技圈常说的“机场”，不仅秒开4K视频，而且在敏感期依然坚挺稳定。这到底是为什么？本文带您拆解底层的技术代差。
        </p>

        <h2>一、协议特性的代差：传统VPN的“透明特征”与代理协议的“隐蔽伪装”</h2>
        <p>
          传统国际商业VPN最初的设计初衷是为了<strong>企业员工远程接入内部局域网加密通信（例如 OpenVPN、IPsec、WireGuard）</strong>。这些协议的设计哲学是「数据绝对加密」，但完全没有考虑过「对抗主动探测与特征审查」。
        </p>
        <p>
          在现代深度包检测（DPI）防火墙面前，OpenVPN 的数据包头部具有极其鲜明的协议指纹特征。防火墙甚至不需要解密你的内容，只要发现流量特征符合 OpenVPN，就会在毫秒级执行 TCP Reset 阻断或封锁 IP。
        </p>
        <p>
          而现代“机场”采用的 Shadowsocks、Trojan、VLESS 等专用代理协议，从诞生之初就是为了应对严苛的流量审查而设计。以 Trojan 协议为例，它直接将代理流量完全伪装成全球最普遍的 HTTPS (TLS 1.3) 网站加密流量。在防火墙看来，你的流量与正常访问一家海外电商或科技资讯网站毫无二致，无法进行有效的特征提取。
        </p>

        <h2>二、路由分流机制对比：全局劫持 vs 智能规则分流</h2>
        <p>
          传统VPN在操作系统中采用的是<strong>全局虚拟网卡（TUN/TAP）</strong>接管所有网络数据。一旦开启VPN，你访问国内的百度、微信、网易云音乐甚至淘宝，流量都要跨过太平洋绕到海外机房再绕回国内。这不仅导致国内应用极其卡顿，还极易触发银行和社交软件的异地异国登录风控。
        </p>
        <p>
          现代机场配合 Clash、Surge 或 Shadowrocket 客户端，具备强大的<strong>白名单与规则分流引擎</strong>：
        </p>
        <ul>
          <li>访问国内网站（.cn、微信、哔哩哔哩、国内直连IP）&rarr; 自动本地直连，极速秒开且不消耗机场流量；</li>
          <li>访问国外受限网站（Google、YouTube、GitHub）&rarr; 自动走代理加密隧道；</li>
          <li>访问特定 AI 与流媒体（OpenAI、Netflix）&rarr; 精准分流至拥有原生住宅IP的特定优化节点。</li>
        </ul>

        <h2>三、对比结论：我应该选择谁？</h2>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>对比维度</th>
                <th>现代机场代理 (Shadowsocks/Trojan/IEPL)</th>
                <th>传统国际商业VPN (OpenVPN/WireGuard)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>国内可用性</strong></td>
                <td>极高（具备专用抗封锁伪装与内网专线）</td>
                <td>极低（特征明显，频繁被墙，节点极少可用）</td>
              </tr>
              <tr>
                <td><strong>晚高峰速度与延迟</strong></td>
                <td>专线延迟 30-50ms，4K秒开不缓冲</td>
                <td>跨海公网直连，延迟通常 > 200ms，丢包率高</td>
              </tr>
              <tr>
                <td><strong>国内应用体验</strong></td>
                <td>智能规则分流，微信百度正常直连</td>
                <td>全局绕道，国内应用严重减速或报错</td>
              </tr>
              <tr>
                <td><strong>计费模式</strong></td>
                <td>按月付流量计费，灵活透明</td>
                <td>强制捆绑一年/两年长周期大额付款</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      slug: 'protocol-comparison-shadowsocks-trojan-vless-hysteria2',
      title: 'Shadowsocks/Trojan/VLESS/Hysteria2协议深度对比与选型指南',
      h1: '常用翻墙代理协议深度对比：SS、Trojan、VLESS与Hysteria 2',
      tag: '协议技术',
      desc: '从初代 Shadowsocks 到如今风头正劲的 VLESS (Reality) 与 基于 UDP 的 Hysteria 2，翻墙代理协议经历了怎样的演进？普通用户选购机场时应该优先关注哪种协议？',
      content: `
        <h2>引言：协议演进背后的攻防对抗史</h2>
        <p>
          翻墙代理技术的演进史，本质上就是一部与网络防火墙深度包检测（DPI）持续博弈的攻防对抗史。很多用户在查看机场的节点列表时，经常会看到 SS、Trojan、Vmess、Vless、Hys2 等各种英文缩写，它们各自代表了什么技术特性？我们应该如何选择？
        </p>

        <h2>一、主流协议核心特性全景对比</h2>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>协议名称</th>
                <th>传输层基础</th>
                <th>伪装机制与核心原理</th>
                <th>客户端兼容性</th>
                <th>主要应用场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Shadowsocks (SS)</strong></td>
                <td>TCP / UDP</td>
                <td>对称流加密，开销小、性能极佳</td>
                <td>全平台100%全兼容（老设备友好）</td>
                <td>IEPL纯内网专线首选（因内网无需防墙）</td>
              </tr>
              <tr>
                <td><strong>Trojan</strong></td>
                <td>TCP + TLS</td>
                <td>将流量完全伪装成正规网站HTTPS通信</td>
                <td>几乎所有现代客户端原生支持</td>
                <td>公网中转与跨国穿透的主力军</td>
              </tr>
              <tr>
                <td><strong>VLESS (Reality)</strong></td>
                <td>TCP + TLS</td>
                <td>借用真实海外大厂证书（无证书偷窥破绽）</td>
                <td>需较新的 Xray / Sing-box / Meta 内核</td>
                <td>高压敏感时期极高抗封锁能力</td>
              </tr>
              <tr>
                <td><strong>Hysteria 2</strong></td>
                <td>UDP (QUIC)</td>
                <td>基于魔改拥塞控制，恶劣网络暴力加速</td>
                <td>需要新版内核客户端支持</td>
                <td>高丢包公网弱网直连超神神器</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>二、为什么全IEPL内网专线依然最喜欢用 Shadowsocks？</h2>
        <p>
          很多技术发烧友会有疑问：既然 Trojan 和 Reality 伪装能力更强，为什么顶级高端机场（如闪电猫）的主力专线节点依然广泛采用经典的 Shadowsocks 协议？
        </p>
        <p>
          答案在于<strong>网络边界</strong>：IEPL 专线走的是内网专线物理光缆，用户连接国内入口服务器之后，跨国传输全程在专线内部进行，压根就不会经过公网的 GFW 防火墙！因此专线完全不需要进行沉重复杂的 TLS 伪装。Shadowsocks 的协议开销最小、加解密损耗最低、延迟最高效，在专线环境下反而拥有无与伦比的性能与兼容性优势。
        </p>

        <h2>三、协议选型与客户端建议</h2>
        <p>
          选购机场时，不用过分迷信单一某种“最新协议”。对于普通用户：
        </p>
        <ul>
          <li>如果您购买的是<strong>IEPL/IPLC物理专线</strong>，选择标准的 <strong>Shadowsocks</strong> 延迟最低最稳定；</li>
          <li>如果您使用的是<strong>普通公网中转或公网直连</strong>，优先选择支持 <strong>Trojan</strong> 或 <strong>VLESS</strong> 的节点，抗封锁效果最佳；</li>
          <li>客户端建议全平台统一迁移至搭载最新 <strong>Mihomo (Meta) 内核的客户端</strong>（如 Windows/Mac 上的 Clash Verge Rev，安卓上的 Clash Meta），即可无缝兼顾所有协议。</li>
        </ul>
      `
    },
    {
      slug: 'how-to-test-speed-and-avoid-pitfalls',
      title: '如何科学测试机场晚高峰速度？辨别虚假宣传与跑路风险防坑指南',
      h1: '如何科学测试机场晚高峰真实速度与辨识跑路风险',
      tag: '防坑指南',
      desc: '单次测速跑几百兆就代表好用吗？为什么很多人测速好看用起来却奇卡无比？本文教您一套科学严谨的晚高峰实测方法，并梳理识别垃圾机场与跑路风险的六大信号。',
      content: `
        <h2>引言：别被花花绿绿的测速图给骗了！</h2>
        <p>
          在各大电报群、论坛与贴吧中，我们经常能看到推广人员发出的“千兆跑满、全绿测速”截图。然而当你自己掏钱买下之后，到了晚上八九点，连一个 1080P 的 YouTube 视频都转圈卡死。为什么实测与宣传会有如此巨大的鸿沟？
        </p>

        <h2>一、揭秘虚假测速的三大黑幕</h2>
        <ol>
          <li><strong>测速节点针对性提速：</strong>部分小作坊机场为了制造好看的测速图，会在测速服务器（如 Speedtest / Fast.com）的路由策略上开放极高优先级 QoS，而对普通网页浏览与海外流媒体限速严重。</li>
          <li><strong>非晚高峰错峰测试：</strong>在凌晨三四点、整个网络骨干网空闲时进行测速，当然人人都能跑满千兆；但真正的考验在晚上 20:00 - 23:30 这个全网流量高峰期。</li>
          <li><strong>单点瞬时带宽不等于持续稳定性：</strong>打开测速软件跑几十秒的短时突发带宽，无法反映长连接的丢包率与延迟抖动。持续丢包哪怕只有 5%，网页打开速度就会出现肉眼可见的断崖式下跌。</li>
        </ol>

        <h2>二、如何进行科学客观的本地实测？</h2>
        <p>
          推荐您按照以下规范步骤测试任何一家新购买的机场：
        </p>
        <ul>
          <li><strong>选定晚高峰测试时段：</strong>必须在 20:30 - 22:30 之间进行测试，此时才是骨干网拥挤的极限压力环境。</li>
          <li><strong>测试实际业务载荷：</strong>直接打开 YouTube 搜索并播放一段 <code>4K 60FPS</code> 或 <code>8K HDR</code> 的风景视频，右键打开“详细统计信息（Stats for nerds）”，观察 <strong>Connection Speed</strong> 能否稳定保持在 <code>50,000 Kbps (50Mbps)</code> 以上，缓冲健康值（Buffer Health）能否稳定在 15-20 秒。</li>
          <li><strong>长 Ping 丢包率探测：</strong>使用本地终端对节点进行持续 100 次 Ping 测试，观察丢包率是否低于 1%。IEPL 专线应达到 0% 丢包。</li>
        </ul>

        <h2>三、识别劣质机场与跑路风险的六大预警信号</h2>
        <div class="callout callout-warning">
          <strong>当一家机场出现以下情况，请立刻提高警惕，绝不续费年付：</strong><br>
          1. <strong>只提供大额年付套餐，完全下架或关闭月付选项；</strong><br>
          2. <strong>管理团队匿名度极高、运营时间不足半年且频繁更换域名与品牌名；</strong><br>
          3. <strong>官方电报交流群开启全员禁言，只留管理员单向发通知；</strong><br>
          4. <strong>工单系统数天无人回复，或者直接自动关闭工单；</strong><br>
          5. <strong>搞超低价活动（如50元包永久、买一年送一年），企图在跑路前疯狂卷款；</strong><br>
          6. <strong>节点大面积红色超时超过 48 小时且无任何故障通报。</strong>
        </div>
      `
    },
    {
      slug: 'chatgpt-streaming-unlock-guide',
      title: 'ChatGPT与流媒体解锁原理揭秘：原生IP、广播IP与DNS解锁注意事项',
      h1: 'ChatGPT与Netflix流媒体解锁原理全揭秘与选购注意事项',
      tag: '解锁深度',
      desc: '为什么有的机场节点能看 YouTube 却无法使用 ChatGPT？为什么 Netflix 只能看自制剧？本文全面解析原生IP、广播IP、住宅IP与DNS流媒体解锁的技术机制。',
      content: `
        <h2>引言：海外主流平台严苛的风控体系</h2>
        <p>
          很多用户在选购机场时最常问的一个问题就是：“这个节点支持 ChatGPT 吗？能看奈飞（Netflix）吗？”很多时候，同一个机场的节点，访问普通网页极速秒开，但一旦打开 OpenAI 或 Netflix，就会弹出红色的“Access Denied（访问被拒绝）”或“您似乎在使用代理解除限制”的警告。
        </p>
        <p>
          这背后的根源在于：像 OpenAI、Anthropic、Netflix、Disney+ 这样的海外巨头，采购了极其专业的<strong>商业 IP 风险评估数据库（如 MaxMind、IPinfo、Cloudflare Radar）</strong>。
        </p>

        <h2>一、什么是机房广播 IP 与原生住宅 IP？</h2>
        <ul>
          <li><strong>广播 IP（数据中心 IDC IP）：</strong>服务器实际物理位置在A国，但服务商通过 BGP 宣告将其划归为B国使用；或者IP直接登记在机房机架（如 AWS、DigitalOcean、Vultr）名下。此类 IP 天生带有“机房数据中心”标签，是各大风控系统重点拦截的对象。</li>
          <li><strong>原生 IP（Native IP）：</strong>IP的注册归属地、Whois 信息与服务器物理落地机房完全一致，真实度较高。</li>
          <li><strong>住宅 IP（ISP 住宅宽带 IP）：</strong>IP在数据库中登记为海外正规民用宽带运营商（如美国的 Comcast、AT&T，日本的 NTT、Softbank）。这类 IP 在 OpenAI 和 Netflix 眼中属于“真实海外家庭用户”，风控信任等级最高。</li>
        </ul>

        <h2>二、为什么有的节点只能看 Netflix“自制剧”？</h2>
        <p>
          Netflix 的版权控制机制非常精细：
        </p>
        <p>
          Netflix 投资拍摄的全球自制剧（如《怪奇物语》《鱿鱼游戏》），因为拥有全球分发版权，所以只要用户拥有有效会员，哪怕判定该 IP 是机房代理，也会宽容允许播放；<br>
          但是，对于那些<strong>从传统影视制片厂购买了特定国家/地区版权的非自制剧集</strong>，Netflix 必须严格履行区域限制。一旦检测到你的节点是公共数据中心 IP，就会立刻屏蔽该剧集的搜索结果与播放入口。这就是常说的“非全解锁/只能看自制剧”。
        </p>

        <h2>三、针对 AI 与流媒体解锁的选购与配置黄金法则</h2>
        <ol>
          <li><strong>选购明确标注解锁的专线品牌：</strong>如闪电猫或桔子云等成熟品牌，它们会专门采购成本高昂的住宅级原生落地IP或搭建专用的 DNS 解锁分流集群，保证核心流媒体与 AI 的长期稳定。</li>
          <li><strong>固定节点避免频繁跳国家：</strong>使用 ChatGPT 时，切忌在数分钟内从香港节点瞬间跳到美国或日本节点登录。这种跨国超距跳跃极易触发 OpenAI 的反作弊封号机制。</li>
          <li><strong>定期清理浏览器 Cookie 与 DNS 缓存：</strong>遇到 Access Denied 时，不要盲目怀疑节点挂了，先尝试开启浏览器无痕隐身窗口，通常即可顺利登录。</li>
        </ol>
      `
    }
  ];

  articles.forEach(art => {
    const otherArticles = articles.filter(a => a.slug !== art.slug);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">${art.tag}</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${art.h1}</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>作者：选机场网编辑部</span>
            <span>阅读时长：约 6 分钟</span>
          </div>
        </header>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">💡 本文核心要点速览</div>
          <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-body);">
            ${art.desc}
          </p>
        </div>

        <article class="article-content" style="margin-top: 2rem;">
          ${art.content}

          <h2 style="margin-top: 2.5rem;">选机场网编辑部总结</h2>
          <p>
            科学上网工具的核心价值是<strong>为科研学术、外贸开发与个人全球化生活提供高效、透明、稳定的数字桥梁</strong>。多一分对底层网络原理的了解，就能少踩无数虚假宣传的坑。
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="${root}ranking/overall/index.html" class="btn btn-primary btn-sm">查看综合实力榜</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm">在线横向比选</a>
            <a href="${root}guides/index.html" class="btn btn-outline btn-sm">查看配置教程</a>
          </div>
        </article>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">更多选购深度指南</div>
          <ul class="toc-list">
            ${articles.map(a => `
              <li><a href="${root}blog/${a.slug}/index.html" ${a.slug === art.slug ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${a.h1}</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">相关排行榜</div>
          <ul class="toc-list">
            <li><a href="${root}ranking/overall/index.html">2026综合实力榜</a></li>
            <li><a href="${root}ranking/value/index.html">高性价比排行榜</a></li>
            <li><a href="${root}ranking/stable/index.html">稳定专线排行榜</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `blog/${art.slug}/index.html`,
      title: `${art.title} | 选机场网`,
      description: `${art.desc} 选机场网深度剖析${art.h1}，客观中立，拒绝浮夸宣传。`,
      keywords: `${art.tag}, 机场推荐, 梯子推荐, 翻墙教程, 科学上网指南, vpn对比`,
      canonicalUrl: `${DOMAIN}/blog/${art.slug}/`,
      depth,
      activeNav: 'blog',
      breadcrumbs: [{ name: '选购指南', url: `${root}blog/index.html` }, { name: art.h1 }],
      bodyContent: content
    });
  });

  // 博客中心总览页 blog/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">深度文章</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">选购认知与防坑深度指南专栏</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          坚持实事求是与专业深度，从协议架构、专线机理、价格计算到跑路避坑，为您提供清醒理性的翻墙决策支撑。
        </p>
      </header>

      <div class="cards-grid-2">
        ${articles.map(a => `
          <div class="airport-card">
            <span class="badge badge-blue" style="align-self: flex-start; margin-bottom: 0.5rem;">${a.tag}</span>
            <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem;"><a href="${rootIndex}blog/${a.slug}/index.html">${a.h1}</a></h2>
            <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1.25rem; line-height: 1.6;">${a.desc}</p>
            <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
              <span style="font-size: 0.8rem; color: var(--text-muted);">更新于 2026-03</span>
              <a href="${rootIndex}blog/${a.slug}/index.html" class="btn btn-outline btn-sm">阅读全文 &rarr;</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'blog/index.html',
      title: '科学上网与机场选购深度指南专栏 - 避坑与技术原理 | 选机场网',
      description: '选机场网知识与选购指南专栏。汇集机场与传统VPN对比、Shadowsocks/Trojan协议深度解析、晚高峰科学测速及ChatGPT/流媒体解锁原理。',
      keywords: '机场选购指南, 梯子避坑, 翻墙原理, 科学上网博客, vpn技术区别, 机场文章',
      canonicalUrl: `${DOMAIN}/blog/`,
      depth: depthIndex,
      activeNav: 'blog',
      breadcrumbs: [{ name: '选购指南' }],
      bodyContent: content
    });
  }
}

module.exports = buildBlog;
