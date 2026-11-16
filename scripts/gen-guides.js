const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');

function buildGuides() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  const guides = [
    {
      slug: 'windows',
      title: 'Windows电脑科学上网教程 - Clash Verge与v2rayN图文配置',
      h1: 'Windows平台客户端安装与订阅配置教程',
      desc: '专为Windows 10/11用户编写的高清图文教程。推荐使用现代化开源内核客户端 Clash Verge Rev 或传统经典工具 v2rayN，手把手教您从下载、安装、一键导入订阅到开启系统代理。',
      client: 'Clash Verge Rev / v2rayN',
      steps: [
        {
          title: '步骤一：下载官方正版客户端',
          content: '请认准开源社区官方 GitHub Release 页面下载（如 Clash Verge Rev 的 .exe 安装包），切勿通过来历不明的第三方网盘或所谓“汉化破解站”下载，防止被植入后门程序。'
        },
        {
          title: '步骤二：复制机场订阅链接',
          content: '登录您的机场用户管理后台，在“便捷导入”区域找到“Clash订阅”或“一键复制订阅链接”，将其复制到剪贴板。'
        },
        {
          title: '步骤三：导入订阅并拉取节点',
          content: '打开 Clash Verge Rev，进入“订阅（Profiles）”界面，在输入框粘贴刚刚复制的订阅链接，点击“保存并导入（Save）”。软件将自动从远端服务器下载最新的节点列表与分流规则。'
        },
        {
          title: '步骤四：选择节点并开启系统代理',
          content: '进入“代理（Proxies）”界面，选择“规则分流（Rule）”模式，并在节点列表中选择一个低延迟节点（如香港或日本节点）。最后在“设置”中勾选“系统代理（System Proxy）”，即可顺畅浏览全球网络。'
        }
      ],
      faqs: [
        { q: '开启系统代理后国内微信或网页打不开怎么办？', a: '请确保代理模式设置为「规则（Rule）」而不是「全局（Global）」。在规则模式下，国内网站流量直连不耗费节点流量，只有海外受限域名才会走代理。' },
        { q: '更新订阅时提示网络错误或超时？', a: '可能当前本地网络访问该机场订阅转换服务器稍慢。可在机场后台切换“备用订阅链接”或更换网络连接后重试。' }
      ]
    },
    {
      slug: 'android',
      title: 'Android手机科学上网配置教程 - Clash Meta与v2rayNG图文详解',
      h1: 'Android平台客户端配置与节点使用教程',
      desc: '针对安卓系统（华为鸿蒙、小米HyperOS、OPPO ColorOS、vivo OriginOS及原生Android）的完整配置指南，推荐使用基于开源Meta内核的 Clash Meta (Clash for Android) 或 v2rayNG。',
      client: 'Clash Meta / v2rayNG',
      steps: [
        {
          title: '步骤一：安装客户端 APK 文件',
          content: '通过官方 GitHub 仓库下载最新的 release .apk 安装包。安装时如遇系统提示“未知来源应用”，允许一次性安装即可。'
        },
        {
          title: '步骤二：一键导入或手动添加配置',
          content: '登录机场后台，点击“一键导入 Clash for Android”，系统将自动唤起客户端并下载配置；若未自动唤起，可手动复制订阅 URL，在客户端“配置”中点击右上角“+”号选择“从URL导入”。'
        },
        {
          title: '步骤三：选择配置文件并启动 VPN 服务',
          content: '在配置列表中勾选刚刚下载的配置方案，返回主界面点击右上角的“运行/已停止”开关。系统将弹出系统级 VPN 授权提示框，点击“允许”即可。'
        },
        {
          title: '步骤四：设置应用分流与后台保活',
          content: '在安卓手机设置中将客户端的“电池优化”设置为“无限制/允许后台高耗电”，防止系统因省电策略在锁屏后自动杀死客户端进程。'
        }
      ],
      faqs: [
        { q: '为什么手机锁屏几分钟后代理就自动断开了？', a: '这是各大国产品牌手机强大的“系统级省电策略”所致。请在手机“电池与性能”设置中，将客户端加入后台白名单，并锁定后台多任务卡片。' }
      ]
    },
    {
      slug: 'ios',
      title: 'iOS苹果手机科学上网教程 - Shadowrocket小火箭配置与节点导入',
      h1: 'iOS平台Shadowrocket与节点导入配置教程',
      desc: '由于国区 App Store 限制，iOS 平台需使用非国区 Apple ID（美区或港区）下载 Shadowrocket（俗称小火箭）。本教程手把手教您如何获取外区账号、下载正版小火箭并一键导入节点。',
      client: 'Shadowrocket (小火箭) / Loon / Surge',
      steps: [
        {
          title: '步骤一：准备非国区 Apple ID 并下载小火箭',
          content: '在 App Store 中退出当前国区账号，登录美区或港区 Apple ID，搜索并购买下载“Shadowrocket”（开发者为 Shadow Launch Technology）。切勿在“设置-iCloud”处登录外区账号，仅在“App Store”登录即可。'
        },
        {
          title: '步骤二：一键导入节点订阅',
          content: '使用苹果 Safari 浏览器登录机场后台，点击“一键导入小火箭”，Safari 将自动唤起 Shadowrocket 并自动识别订阅中的全部节点。'
        },
        {
          title: '步骤三：全局路由选择与规则更新',
          content: '在小火箭主界面将“全局路由”保持为默认的“配置（Config）”模式（智能分流），切忌直接选择“代理（全局）”。'
        },
        {
          title: '步骤四：连接开启 VPN',
          content: '在节点列表中选择延迟较低的节点，打开顶部第一行的未连接开关。首次启动时系统会弹出“添加 VPN 配置”授权，输入锁屏密码即完成连接。'
        }
      ],
      faqs: [
        { q: '网上租用或共享的 Apple ID 登录会不会导致手机被锁？', a: '只要严格遵循【只在 App Store 商店内登录，绝不在系统设置 iCloud 处登录】，且下载完毕后立即退出外区账号，就不会产生任何手机被锁风险。' }
      ]
    },
    {
      slug: 'macos',
      title: 'macOS苹果电脑科学上网教程 - Clash Verge与Surge图文配置',
      h1: 'macOS平台客户端配置与系统代理设置教程',
      desc: '专为苹果 Mac 电脑（M1/M2/M3/M4 Apple Silicon 芯片及 Intel 架构）打造的科学上网指南。推荐使用原生的 Clash Verge Rev Mac 版，兼具极简美观与高效分流。',
      client: 'Clash Verge Rev (Mac) / Surge for Mac',
      steps: [
        {
          title: '步骤一：下载适配您芯片架构的安装包',
          content: '根据您的 Mac 处理器架构下载对应版本：Apple Silicon（M1/M2/M3/M4）下载 aarch64.dmg；旧款 Intel 处理器下载 x64.dmg。将应用拖入“应用程序”文件夹。'
        },
        {
          title: '步骤二：解决“已损坏”或“未知开发者”提示',
          content: 'macOS 安全机制可能会提示无法验证开发者。请进入 Mac 的“系统设置 -> 隐私与安全性”，找到底部“仍要打开”按钮并允许运行。'
        },
        {
          title: '步骤三：导入订阅并配置智能分流',
          content: '在 Clash Verge 中添加订阅链接并更新成功后，模式建议选择“规则（Rule）”，并在设置中开启“系统代理（System Proxy）”。'
        },
        {
          title: '步骤四：配置开机自启与静默托盘运行',
          content: '在通用设置中勾选“开机自启动”和“最小化到状态栏”，Mac 电脑在顶部菜单栏即常驻小图标，方便随时切换节点与查看网络上传下载速率。'
        }
      ],
      faqs: [
        { q: 'Terminal终端或命令行为什么没有走代理？', a: 'GUI 客户端默认只代理支持系统代理设置的浏览器及常用应用。终端环境需在 Clash Verge 中开启“TUN 模式”，或在终端配置 export http_proxy 环境变量。' }
      ]
    },
    {
      slug: 'clash-verge-tutorial',
      title: 'Clash Verge Rev 保姆级图文教程 - 从安装到规则分流全攻略',
      h1: 'Clash Verge Rev 跨平台保姆级使用与规则分流指南',
      desc: '由于原版 Clash for Windows 停更，Clash Verge Rev 凭借现代优雅的界面与活跃的开源 Meta/Mihomo 内核成为当之无愧的接班主力。本篇详细拆解其高级功能。',
      client: 'Clash Verge Rev 全平台',
      steps: [
        {
          title: '1. 内核选择与安装配置',
          content: 'Clash Verge Rev 默认搭载 Mihomo (Clash Meta) 内核，具备更强大的协议兼容性（完美支持 Vless、Reality、Hysteria 2 等现代新一代协议）。'
        },
        {
          title: '2. TUN 虚拟网卡模式的魔力',
          content: 'TUN 模式可以在操作系统底层接管所有网络流量（包括不支持系统代理的海外游戏客户端、终端命令行以及特定桌面软件），实现真正的全局透明代理。'
        },
        {
          title: '3. 节点分流策略组的精细化调整',
          content: '在代理组中，您可以为 ChatGPT 设定固定走美国住宅节点，为 Netflix 设定走新加坡节点，而国内网站自动直连，互不干扰且互不抢占带宽。'
        }
      ],
      faqs: [
        { q: '原版 Clash for Windows 还能继续用吗？', a: '虽然本地已安装的原版依然可以运行，但由于其内核与主程序已长期停更，无法支持新兴的加密协议且存在潜在已知安全隐患，强烈建议迁移至 Clash Verge Rev。' }
      ]
    }
  ];

  guides.forEach(g => {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">平台专属教程</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${g.h1}</h1>
          <div class="article-meta">
            <span>更新时间：2026-03</span>
            <span>适配客户端：${g.client}</span>
            <span>实操验证：已在最新系统环境下测试通过</span>
          </div>
        </header>

        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin-bottom: 1.5rem;">
          ${g.desc}
        </p>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">📌 30秒极速上手速记</div>
          <p style="margin-bottom: 0; font-size: 0.95rem;">
            配置科学上网的通用逻辑非常纯粹：<strong>【下载正规客户端】&rarr;【在机场后台复制订阅URL】&rarr;【在客户端中导入并拉取节点】&rarr;【选择规则分流模式并开启系统代理】</strong>。全过程通常仅需 2-3 分钟。
          </p>
        </div>

        <div class="article-content" style="margin-top: 2rem;">
          <h2>详细步骤分解图文教学</h2>
          ${g.steps.map((st, i) => `
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.5rem; margin: 1.5rem 0;">
              <h3 style="margin-top: 0; font-size: 1.25rem; color: var(--primary);">${st.title}</h3>
              <p style="font-size: 0.95rem; color: var(--text-body); margin-bottom: 0; line-height: 1.7;">
                ${st.content}
              </p>
            </div>
          `).join('')}

          <h2>常见故障排查与使用问答 (FAQ)</h2>
          <div class="faq-list">
            ${g.faqs.map(f => `
              <div class="faq-item">
                <div class="faq-question">
                  <span>${f.q}</span>
                  <span class="faq-indicator">+</span>
                </div>
                <div class="faq-answer" style="display: none;">
                  ${f.a}
                </div>
              </div>
            `).join('')}
          </div>

          <h2 style="margin-top: 2.5rem;">推荐搭配的高兼容性机场</h2>
          <p>
            拥有良好的客户端软件只是第一步，稳定可靠的节点订阅才是连接全球的核心。若您尚未选定合适的服务商，可以参考以下经过兼容性验证的代表性品牌：
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <a href="${root}ranking/overall/index.html" class="btn btn-primary btn-sm">查看综合实力榜</a>
            <a href="${root}ranking/value/index.html" class="btn btn-outline btn-sm">查看高性价比榜</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm">在线横向比选</a>
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">全平台客户端教程</div>
          <ul class="toc-list">
            ${guides.map(item => `
              <li><a href="${root}guides/${item.slug}/index.html" ${item.slug === g.slug ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${item.h1.replace('客户端安装与订阅配置教程', '').replace('平台客户端配置与节点使用教程', '').replace('平台Shadowrocket与节点导入配置教程', '').replace('平台客户端配置与系统代理设置教程', '').replace('跨平台保姆级使用与规则分流指南', '')}</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">知识科普</div>
          <ul class="toc-list">
            <li><a href="${root}glossary/clash/index.html">什么是Clash与Meta内核？</a></li>
            <li><a href="${root}glossary/shadowrocket/index.html">小火箭核心功能详解</a></li>
            <li><a href="${root}glossary/iplc-iepl/index.html">什么是IEPL专线？</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `guides/${g.slug}/index.html`,
      title: `${g.title} | 选机场网`,
      description: `${g.desc} 选机场网为您整理${g.client}的详细安装与节点订阅导入图文步骤，小白也能轻松上手。`,
      keywords: `${g.client}, 科学上网教程, 机场客户端, 翻墙教程, 节点导入, 订阅链接配置`,
      canonicalUrl: `${DOMAIN}/guides/${g.slug}/`,
      depth,
      activeNav: 'guides',
      breadcrumbs: [{ name: '使用教程', url: `${root}guides/index.html` }, { name: g.h1 }],
      bodyContent: content
    });
  });

  // 教程中心总览页 guides/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">全平台指引</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">科学上网全平台客户端教程中心</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          无论您使用的是 Windows 电脑、Android 安卓手机、iPhone/iPad 苹果设备还是 Mac 笔记本，都能在此找到权威清晰的配置图文教学。
        </p>
      </header>

      <div class="cards-grid-2">
        ${guides.map(g => `
          <div class="airport-card">
            <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem;"><a href="${rootIndex}guides/${g.slug}/index.html">${g.h1}</a></h2>
            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 0.75rem;">适配工具：${g.client}</div>
            <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1.25rem; line-height: 1.6;">${g.desc}</p>
            <div style="margin-top: auto;">
              <a href="${rootIndex}guides/${g.slug}/index.html" class="btn btn-outline btn-sm">阅读完整图文教程 &rarr;</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'guides/index.html',
      title: '科学上网与客户端使用教程中心 - Windows/Android/iOS/Mac全覆盖 | 选机场网',
      description: '选机场网全平台客户端配置教程中心。提供Windows Clash Verge、Android Clash Meta、iOS Shadowrocket小火箭及macOS客户端的保姆级安装与订阅导入指南。',
      keywords: '科学上网教程, 客户端配置, Clash教程, 小火箭教程, Shadowrocket配置, 机场节点导入',
      canonicalUrl: `${DOMAIN}/guides/`,
      depth: depthIndex,
      activeNav: 'guides',
      breadcrumbs: [{ name: '使用教程' }],
      bodyContent: content
    });
  }
}

module.exports = buildGuides;
