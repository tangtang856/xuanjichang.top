const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');

function buildGlossary() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  const terms = [
    {
      slug: 'iplc-iepl',
      title: '什么是IPLC和IEPL专线？专线与公网隧道有什么本质区别？',
      h1: '专业术语科普：什么是IPLC与IEPL内网专线？',
      tag: '网络架构',
      desc: '在机场的套餐说明中，IEPL和IPLC常常作为高端、低延迟与抗封锁的代名词。它们到底是什么？普通隧道与物理专线有着怎样不可逾越的鸿沟？',
      content: `
        <h2>一、术语定义与英文全称</h2>
        <ul>
          <li><strong>IPLC（International Private Leased Circuit）：</strong>国际私有租用线路。指跨国电信运营商在两地之间铺设的完全私有的端到端物理点对点通信线路。</li>
          <li><strong>IEPL（International Ethernet Private Line）：</strong>国际以太网专线。属于 IPLC 的现代化升级版本，基于标准二层以太网协议，具备更高的灵活性与网络调度效率。</li>
        </ul>

        <h2>二、专线的核心杀手锏：不过公网国家防火墙（GFW）</h2>
        <p>
          普通公网中转和直连节点，数据必须经过我国骨干电信网的国际出口公网，因此必然会经过国家级防火墙（GFW）的深层数据包检测（DPI）。一旦遇到敏感时期，大量公网端口和 IP 就会被实施毫秒级封锁或劣化限速。
        </p>
        <p>
          而 <strong>IEPL / IPLC 专线是电信运营商在物理海底光缆中专门划拨出来的独立局域网通道</strong>。数据在深圳/上海/广州等国内入口上车后，直接进入运营商的专线内网传输至香港、日本或新加坡落地。其物理路径根本就不经过公网防火墙，因此具有<strong>绝对的抗封锁能力与近乎为零的丢包率</strong>。
        </p>

        <h2>三、专线的主要缺点与考量</h2>
        <p>
          世界上没有免费的午餐，IEPL 专线的最大痛点就是<strong>贵</strong>。运营商按兆（Mbps）按月计费的专线租金往往是普通公网带宽的十倍以上。因此正规专线机场的套餐单价通常较高，并且绝对禁止用户将其用于 BT、PT 等占用持续超大带宽的 P2P 下载。
        </p>
      `
    },
    {
      slug: 'clash',
      title: '什么是Clash？内核演进、分流规则与流行GUI客户端全解析',
      h1: '术语百科：什么是Clash？规则分流与主流客户端生态',
      tag: '客户端生态',
      desc: 'Clash 是当代科学上网领域最伟大的开源规则代理分流核心。本文全面梳理从原生 Go 内核到 Mihomo (Meta) 的演进，以及 Clash Verge、Clash for Windows 等客户端生态。',
      content: `
        <h2>一、Clash 的核心本质：基于规则的代理内核</h2>
        <p>
          Clash 本质上并不是一个图形界面的“软件”，而是一个由开发者 Dreamacro 使用 Go 语言编写的<strong>无界面命令行代理分流引擎（Core）</strong>。它的最大革命性创新在于引入了强大的 <code>YAML</code> 配置文件与自动化策略组机制。
        </p>

        <h2>二、策略组与智能分流的运行机制</h2>
        <p>
          在 Clash 中，用户可以定义各种规则集（Rule Sets）：
        </p>
        <ul>
          <li><code>DOMAIN-SUFFIX,google.com,PROXY</code>：访问包含 google.com 的域名，自动走代理；</li>
          <li><code>GEOIP,CN,DIRECT</code>：所有位于中国大陆境内的 IP 地址，自动直连；</li>
          <li><code>MATCH,PROXY</code>：所有未被上述规则匹配的兜底流量走代理。</li>
        </ul>
        <p>
          这种机制彻底改变了过去“要么全翻、要么全断”的粗暴模式，实现了国内国外无感混用。
        </p>

        <h2>三、内核停更与 Mihomo (Clash Meta) 的崛起</h2>
        <p>
          2023年下旬，原版 Clash 内核及 Clash for Windows 作者停止了维护。随后开源社区迅速集结，诞生了 <strong>Mihomo（亦称 Clash Meta）</strong> 项目。Mihomo 全面继承并扩充了原版协议，原生支持了 VLESS、Reality、Hysteria 2、TUIC 等新兴尖端协议，成为了当前事实上的行业新标准。目前主流的桌面客户端 <strong>Clash Verge Rev</strong> 即默认基于 Mihomo 内核打造。
        </p>
      `
    },
    {
      slug: 'shadowsocks-trojan',
      title: 'Shadowsocks与Trojan协议科普：TLS伪装与加密传输机制详解',
      h1: '协议百科：Shadowsocks与Trojan的运作原理与TLS伪装机制',
      tag: '加密协议',
      desc: 'Shadowsocks（影梭）是如何开创一个时代的？Trojan 又是如何通过“李代桃僵”将代理流量天衣无缝地伪装成标准 HTTPS 网页通信的？',
      content: `
        <h2>一、Shadowsocks（影梭）：划时代的轻量对称加密</h2>
        <p>
          在 2012 年由著名开发者 clowwindy 开源的 Shadowsocks，彻底改变了翻墙史。在此之前，人们主要依靠复杂的 OpenVPN 或 PPTP。
        </p>
        <p>
          Shadowsocks 的核心理念是<strong>极简对称流加密（如 AEAD ciphers: chacha20-poly1305, aes-256-gcm）</strong>。它将整个数据包打乱成毫无规律的高熵随机密文，使得防火墙无法通过固定的协议特征码来识别它。
        </p>

        <h2>二、Trojan（特洛伊木马）：李代桃僵的 HTTPS 伪装</h2>
        <p>
          随着防火墙升级了针对“未知高熵随机流量”的主动重放探测机制，纯粹的 Shadowsocks 在未经保护的公网直连环境下开始面临封锁。
        </p>
        <p>
          Trojan 协议反其道而行之：它不再尝试发明新的加密格式，而是<strong>直接把代理流量伪装成互联网最常见的 HTTPS (TLS 1.3) 流量</strong>。Trojan 服务端会在海外服务器上申请正规的 SSL 证书，并监听 443 端口。当审查者发起探测请求时，Trojan 服务端会展示一个极其真实的普通静态网站；而只有持有正确密码的客户端连接时，才会静默建立双向代理通道。这种设计让审查者陷入两难境地：除非将所有 HTTPS 网站封锁，否则无法直接针对 Trojan 实施精确打击。
        </p>
      `
    },
    {
      slug: 'shadowrocket',
      title: 'Shadowrocket小火箭百科：功能特性、下载方法与节点导入规则',
      h1: '工具百科：Shadowrocket（小火箭）全面介绍与核心特性',
      tag: 'iOS工具',
      desc: '被称为“小火箭”的 Shadowrocket 是苹果 iOS 平台最流行、普及度最高的网络代理调试工具。本文详细介绍其功能特性、外区下载方法及核心配置策略。',
      content: `
        <h2>一、什么是小火箭（Shadowrocket）？</h2>
        <p>
          Shadowrocket 是一款由开发者 Ligang Pan 开发的运行在 iOS (iPhone / iPad) 上的通用规则代理工具。因为其应用图标是一枚白色背景上的四翼小火箭，所以在中文社区被极其亲切地广泛称为“小火箭”。
        </p>

        <h2>二、为什么小火箭如此受欢迎？</h2>
        <ol>
          <li><strong>协议支持极其全面：</strong>小火箭几乎支持市面上存在的所有代理协议，包括 Shadowsocks、Trojan、Vmess、Vless、Socks5、WireGuard 以及各种自定义插件。</li>
          <li><strong>界面直观，小白极度友好：</strong>相对于 Surge 或 Loon 较为硬核的配置文件编辑，小火箭支持一键扫码添加节点、Safari 一键订阅导入，操作极其简明。</li>
          <li><strong>性能极其轻量省电：</strong>作为原生 iOS 应用程序，在后台运行数小时耗电量极小。</li>
        </ol>

        <h2>三、如何合法正规地下载小火箭？</h2>
        <p>
          受限于苹果官方政策，Shadowrocket 无法在国区 App Store 搜索和上架。用户只需准备一个海外区域（如美区、港区、日区）的 Apple ID，在 App Store 商店内登录该外区账号，搜索“Shadowrocket”（售价通常为 2.99 美元），购买一次即可绑定您的 Apple 账号并享受永久免费更新。
        </p>
      `
    },
    {
      slug: 'rate-multiplier',
      title: '什么是机场节点倍率？0.1倍到5倍节点的真实流量计算方法',
      h1: '流量百科：什么是节点倍率？高倍率与低倍率的流量折算详解',
      tag: '计费规则',
      desc: '为什么看了一个 1GB 的视频，后台却扣了 3GB 流量？机场节点名称后面的 0.5x、1.0x、3.0x 到底是什么意思？本文彻底讲透节点倍率机制。',
      content: `
        <h2>一、什么是节点倍率（Rate Multiplier）？</h2>
        <p>
          节点倍率是机场计费系统中用来<strong>平衡服务器不同带宽成本的一种杠杆系数</strong>。
        </p>
        <p>
          <strong>扣除流量计算公式：</strong><br>
          <code>实际扣除流量 = 本地实际消耗数据传输量 × 节点倍率</code>
        </p>

        <h2>二、常见倍率类型的合理应用场景</h2>
        <ul>
          <li><strong>0.1x - 0.5x 低倍率节点（省流福利节点）：</strong>通常采用闲时公网中转带宽。如果你通过 0.1x 节点下载了 10GB 的大文件，你的套餐账户仅仅会被扣除 <code>1GB</code> 流量！非常适合大文件下载、系统更新等场景。</li>
          <li><strong>1.0x 标准倍率节点（主力日常节点）：</strong>消耗 1GB 扣除 1GB，资费计算最为直观透明，属于机场的主干主力。</li>
          <li><strong>2.0x - 5.0x 高倍率节点（高成本低延迟专线）：</strong>通常为昂贵的纯 IEPL 内网专线、超低延迟游戏加速节点或原生住宅级海外落地 IP。由于服务商采购成本极高，因此通过提高扣量倍率来回收成本。</li>
        </ul>

        <h2>三、警惕不良商家的“全员高倍率”套路</h2>
        <p>
          良心正规的机场，其主力节点（香港、日本、新加坡）大多保持在 <strong>1.0x 标准倍率</strong>，并在节点名称前清晰醒目标注 <code>[1.0x]</code>、<code>[0.5x]</code>。<br>
          需要警惕的是极少数不良商家：套餐以超低标价宣传“1000GB超大容量”，但在节点后台将所有能用的节点全设为 3.0x 甚至 5.0x，甚至偷偷隐藏倍率显示，造成严重的隐形偷跑流量现象。选购机场时务必关注控制台公示的倍率说明！
        </p>
      `
    }
  ];

  terms.forEach((t, idx) => {
    // 上下一条术语循环导航
    const prevTerm = idx > 0 ? terms[idx - 1] : terms[terms.length - 1];
    const nextTerm = idx < terms.length - 1 ? terms[idx + 1] : terms[0];

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">${t.tag}</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${t.h1}</h1>
          <div class="article-meta">
            <span>最后修订：2026-03</span>
            <span>收录机构：选机场网术语百科中心</span>
            <span>分类标签：${t.tag}</span>
          </div>
        </header>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">📖 概念一句话速览</div>
          <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-body);">
            ${t.desc}
          </p>
        </div>

        <article class="article-content" style="margin-top: 2rem;">
          ${t.content}

          <h2 style="margin-top: 2.5rem;">选机场网推荐延伸阅读</h2>
          <p>掌握了核心网络概念后，欢迎通过我们的在线工具与排行榜挑选适配的服务方案：</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <a href="${root}ranking/overall/index.html" class="btn btn-primary btn-sm">综合实力排行榜</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm">在线横向比选</a>
            <a href="${root}guides/index.html" class="btn btn-outline btn-sm">客户端使用教程</a>
          </div>
        </article>

        <!-- 上下一条术语百科导航条 (每个条目跳转到下一个条目) -->
        <nav class="article-pagination" aria-label="术语百科上下篇导航">
          <a href="${root}glossary/${prevTerm.slug}/index.html" class="pagination-item prev">
            <span class="pagination-label">&larr; 上一条术语 · ${prevTerm.tag}</span>
            <span class="pagination-title">${prevTerm.h1}</span>
          </a>
          <a href="${root}glossary/${nextTerm.slug}/index.html" class="pagination-item next">
            <span class="pagination-label">下一条术语 · ${nextTerm.tag} &rarr;</span>
            <span class="pagination-title">${nextTerm.h1}</span>
          </a>
        </nav>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">术语百科全条目</div>
          <ul class="toc-list">
            ${terms.map(item => `
              <li><a href="${root}glossary/${item.slug}/index.html" ${item.slug === t.slug ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${item.h1.replace('专业术语科普：', '').replace('术语百科：', '').replace('协议百科：', '').replace('工具百科：', '').replace('流量百科：', '')}</a></li>
            `).join('')}
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `glossary/${t.slug}/index.html`,
      title: `${t.title} | 选机场网`,
      description: `${t.desc} 选机场网专业术语百科深度解读${t.h1}，理清技术原理与网络架构。`,
      keywords: `${t.tag}, 科学上网术语, 机场百科, IPLC专线, Clash, Shadowsocks, 小火箭, 节点倍率`,
      canonicalUrl: `${DOMAIN}/glossary/${t.slug}/`,
      depth,
      activeNav: 'glossary',
      breadcrumbs: [{ name: '术语百科', url: `${root}glossary/index.html` }, { name: t.h1 }],
      bodyContent: content
    });
  });

  // 百科汇总页 glossary/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">知识词库</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">网络代理与科学上网术语百科中心</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          用通俗严谨的语言解构专业技术名词。从专线网络拓扑、分流内核到加密协议与计费倍率，让复杂的网络概念一目了然。
        </p>
      </header>

      <div class="cards-grid-2">
        ${terms.map(t => `
          <div class="airport-card">
            <span class="badge badge-blue" style="align-self: flex-start; margin-bottom: 0.5rem;">${t.tag}</span>
            <h2 style="font-size: 1.3rem; margin-bottom: 0.5rem;"><a href="${rootIndex}glossary/${t.slug}/index.html">${t.h1}</a></h2>
            <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1.25rem; line-height: 1.6;">${t.desc}</p>
            <div style="margin-top: auto;">
              <a href="${rootIndex}glossary/${t.slug}/index.html" class="btn btn-outline btn-sm">查阅完整百科条目 &rarr;</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'glossary/index.html',
      title: '网络代理与科学上网术语百科大全 - 专业名词深度解析 | 选机场网',
      description: '选机场网科学上网与机场知识百科。详细解读IPLC/IEPL内网专线、Clash内核、Shadowsocks/Trojan协议、小火箭及节点倍率规则。',
      keywords: '科学上网术语, 机场百科, IPLC专线, IEPL专线, Clash原理, Shadowsocks百科, 节点倍率',
      canonicalUrl: `${DOMAIN}/glossary/`,
      depth: depthIndex,
      activeNav: 'glossary',
      breadcrumbs: [{ name: '术语百科' }],
      bodyContent: content
    });
  }
}

module.exports = buildGlossary;
