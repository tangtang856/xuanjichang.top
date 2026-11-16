const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');

function buildRecommends() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  const categories = [
    {
      slug: 'budget',
      title: '低预算便宜机场推荐专题 - 极致性价比与月付方案',
      h1: '平价低预算机场选购方案与推荐专题',
      badge: '低预算方案',
      desc: '专为在校学生党、轻度查资料用户及多设备应急备用设计的低价方案，重点关注月付10元以内起步套餐，灵活弹性不捆绑。',
      filter: (a) => a.startingPrice <= 20,
      tips: [
        '预算有限时务必优先选择「月付」模式，切忌被超低年付诱惑导致因跑路遭受全额损失。',
        '低预算套餐通常限制同时在线设备为2-3台，日常使用时注意避免同时在过多设备上连接。',
        '建议选择节点倍率标注透明的品牌（如0.2倍率到1.0倍率规范公示），避开暗扣流量套路。'
      ]
    },
    {
      slug: 'premium',
      title: '高端IEPL专线机场推荐专题 - 晚高峰低延迟抗封锁专线',
      h1: '高端IEPL/IPLC专线机场推荐专题',
      badge: '高端专线',
      desc: '基于纯正IEPL/IPLC内网物理光缆专线，不经过公网GFW审查，具备晚高峰零丢包、超低延迟抖动与高抗封锁能力。',
      filter: (a) => a.lineType.includes('专线') || a.startingPrice >= 25,
      tips: [
        'IEPL专线走的是点对点内网传输，即使在重大节假日或敏感期，连接依然极度稳定。',
        '专线机房带宽成本极高，因此套餐单价通常在30元/月以上，严禁用于P2P大流量BT下载。',
        '适合跨国远程办公（Slack、Zoom会议）、外汇期货高频交易以及追求极速4K/8K秒开的进阶用户。'
      ]
    },
    {
      slug: 'beginner',
      title: '新手入门机场推荐专题 - 一键导入与中文全平台客户端',
      h1: '新手小白入门机场推荐专题',
      badge: '新手无门槛',
      desc: '面向首次接触科学上网的小白用户，提供全中文管理后台、主流客户端（Clash、小火箭）一键导入订阅及图文保姆级教程。',
      filter: (a) => true,
      tips: [
        '新手切勿自行从百度或不明搜索引擎下载被篡改的所谓“破解版”客户端，务必认准官方开源仓库。',
        '购买后在用户后台直接点击“一键导入Clash”或“一键导入Shadowrocket”，几秒钟即可完成所有节点配置。',
        '遇到节点连不上时，首先在客户端中点击“更新订阅”，90%的节点配置失效问题均能自动修复。'
      ]
    },
    {
      slug: 'stable',
      title: '稳定优先抗封锁机场推荐专题 - 多入口BGP容灾解析',
      h1: '稳定优先抗封锁机场推荐专题',
      badge: '抗封锁高可用',
      desc: '采用多线BGP入口智能解析与内网容灾链路，单一入口故障自动秒级切换备用链路，确保全天候不断连。',
      filter: (a) => a.stabilityRating >= 9.0,
      tips: [
        '单线直连节点只要被防火墙封锁IP就会瞬间全军覆没，而BGP多入口架构能在后台秒级调度备用IP。',
        '建议在客户端中开启“自动故障转移（Fallback）”或“延迟自动测速选择（URL-Test）”策略组。',
        '重要工作建议准备两条不同服务商的节点订阅，形成双重冗余保障。'
      ]
    },
    {
      slug: 'ai',
      title: 'ChatGPT与Claude专用AI机场推荐 - 原生纯净住宅IP精选',
      h1: 'AI大模型专用机场推荐（原生纯净IP解锁）',
      badge: 'AI模型专属',
      desc: '专为OpenAI ChatGPT、Anthropic Claude、Midjourney及Google Gemini打造，精选拥有海外原生纯净住宅级IP的节点。',
      filter: (a) => a.aiSupport.some(ai => ai.includes('ChatGPT')),
      tips: [
        'OpenAI与Claude具备严格的IP反作弊与数据中心黑名单机制，普通机房广播IP容易遭遇“Access Denied”或封号。',
        '使用AI服务时，建议选择美国、英国、日本或新加坡的专用原生节点，并保持固定节点登录。',
        '如果在客户端使用分流，请确保配置规则将 openai.com 与 anthropic.com 强制走代理通道。'
      ]
    },
    {
      slug: 'streaming',
      title: '4K流媒体解锁机场推荐 - Netflix与YouTube超清专线',
      h1: 'Netflix与Disney+ 4K流媒体专用机场推荐',
      badge: '超清追剧',
      desc: '针对Netflix跨区解锁、Disney+、YouTube Premium、HBO Max及日韩本地流媒体深度优化，原生DNS解锁秒开4K/8K。',
      filter: (a) => a.streamingSupport.length >= 3,
      tips: [
        'Netflix会对IDC数据中心IP进行大范围封锁，仅允许展示非版权限制的自制剧；本专题精选可完整解锁全区非自制剧的节点。',
        '追剧建议选择物理距离较近的香港、台湾、日本、新加坡节点，物理传输延迟更低，4K拖动进度条不缓冲。',
        '配合Apple TV、Android TV电视盒子使用时，选择支持大流量与多设备并发的套餐更划算。'
      ]
    }
  ];

  categories.forEach(cat => {
    const list = airports.filter(cat.filter);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">${cat.badge}</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${cat.h1}</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>适配场景：${cat.badge}</span>
            <span>真实核验：选机场网编辑部</span>
          </div>
        </header>

        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin-bottom: 1.5rem;">
          ${cat.desc}
        </p>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">💡 本专题核心选购与避坑建议</div>
          <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.925rem; color: var(--text-body);">
            ${cat.tips.map(t => `<li style="margin-bottom: 0.4rem;">${t}</li>`).join('')}
          </ul>
        </div>

        <h2 style="font-size: 1.5rem; margin: 2rem 0 1rem 0;">符合本专题标准的精选机场清单</h2>
        <div class="cards-grid-2">
          ${list.map(ap => `
            <div class="airport-card">
              <div class="card-top">
                <div>
                  <h3 class="airport-brand-title">${ap.name}</h3>
                  <span class="airport-tag">${ap.lineType}</span>
                </div>
                <span class="badge badge-blue">¥${ap.startingPrice} / 月起</span>
              </div>
              <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1rem;">${ap.description}</p>
              <ul class="card-features-list">
                <li><span class="icon-check">✓</span> <span>起步套餐：${ap.plans[0].name} (${ap.plans[0].traffic})</span></li>
                <li><span class="icon-check">✓</span> <span>特性：${ap.advantages[0]}</span></li>
                <li><span class="icon-info">ℹ</span> <span>适配：${ap.suitableFor[0]}</span></li>
              </ul>
              <div class="card-actions">
                <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">查看评测</a>
                <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网</a>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="article-content" style="margin-top: 2.5rem;">
          <h2>为什么按场景定制选购比盲目跟风更重要？</h2>
          <p>
            很多用户在寻找“梯子推荐”或“机场推荐”时，经常会陷入一个误区：寻找一个“绝对最好”的全能机场。然而在现实网络拓扑中，<strong>没有任何单一架构能在超低价格、超大流量、极低游戏延迟和AI纯净IP之间全部达到极致</strong>。
          </p>
          <p>
            例如：纯正的 IEPL 专线为了确保晚高峰零丢包与低延迟，其带宽成本极其高昂，因此套餐流量通常偏小，并不适合无节制下载TB级BT资源；而平价大流量中转虽然单价实惠，但难免在敏感期遭遇短暂网络波动。明确自己的第一核心诉求，才是最明智的选购路径。
          </p>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">全部分类专题导航</div>
          <ul class="toc-list">
            ${categories.map(c => `
              <li><a href="${root}recommend/${c.slug}/index.html" ${c.slug === cat.slug ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${c.h1.replace('推荐专题', '')}</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">实用工具</div>
          <ul class="toc-list">
            <li><a href="${root}compare/index.html">机场参数在线比对工具</a></li>
            <li><a href="${root}ranking/overall/index.html">2026综合实力榜</a></li>
            <li><a href="${root}guides/index.html">客户端图文教程</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `recommend/${cat.slug}/index.html`,
      title: `${cat.title} | 选机场网`,
      description: `${cat.desc} 选机场网为您整理${cat.badge}场景下的精选机场与梯子节点推荐，资费透明，支持月付。`,
      keywords: `${cat.badge}, 机场推荐, 梯子推荐, 性价比机场, 机场节点, vpn推荐`,
      canonicalUrl: `${DOMAIN}/recommend/${cat.slug}/`,
      depth,
      activeNav: 'recommend',
      breadcrumbs: [{ name: '机场推荐', url: `${root}recommend/index.html` }, { name: cat.h1 }],
      bodyContent: content
    });
  });

  // 推荐汇总页 recommend/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const scenarioArticles = [
      {
        slug: 'budget',
        icon: '💰',
        badge: '低预算入门',
        title: '低预算入门：用极低试错成本满足基础科研与冲浪',
        article: '对于在校大学生、学术科研人员以及仅需偶尔查阅海外文献、克隆 GitHub 代码仓库的轻度冲浪用户而言，高昂的月付或年付专线往往造成算力与带宽的闲置浪费。低预算方案的核心选购逻辑在于<strong>“月付起步、控制试错成本”</strong>，将月度支出控制在 5~15 元以内。这既能充分满足日常学术检索、Google 学术、维基百科查阅与基础网页浏览需求，又能在服务商遇到不可抗力线路调整时避免大额损失。在挑选低预算机场时，切勿盲目相信“几元不限时”或“超大TB流量”的虚标宣传，务必重点甄别节点倍率是否透明（严防 2.0x 以上暗扣流量），并优先选择提供 2~3 个常用地区节点、具备晚高峰基础可用性的平价中转方案。建议采用“一条平价主力 + 一条备用免费/签到节点”的弹性双保险策略。',
        highlights: ['月付5-10元弹性选购，拒绝大额年付绑架', '节点倍率规范透明，拒绝高倍率扣费陷阱', '满足Google学术、GitHub代码下载与轻度查资料'],
        targetAudience: '学生群体、学术科研工作者、多设备应急备用防失联'
      },
      {
        slug: 'premium',
        icon: '🚀',
        badge: '高端专线',
        title: '高端专线：晚高峰零丢包与超低延迟的企业级网络生命线',
        article: '高端专线通常采用纯正的 <strong>IEPL（国际以太网私网专线）</strong> 或 <strong>IPLC（国际私有租用线路）</strong> 物理内网光缆直连，底层拓扑完全绕过公网 GFW 防火墙设备。这意味着在重大敏感时期或晚间用网高峰期，专线依然具备毫秒级超低延迟抖动（通常小于 5ms）与近乎零丢包的高可用表现。对于跨国企业协同办公（Slack 实时沟通、Zoom 国际高清视频会议）、境外云主机远程运维与代码推送、以及美股、港股和加密货币高频量化交易者而言，网络的哪怕单次偶发抖动都可能带来巨大的工作延误与财务风险，高端专线是保障生产力不可妥协的生命线。建议配合客户端分流规则，关键业务走专线通道，以实现带宽效能最大化。',
        highlights: ['纯正IEPL/IPLC内网物理专线，不过防火墙审查', '晚高峰延迟抖动<5ms，零丢包超强抗拥塞表现', '完美胜任跨国视频会议、外贸办公与股票期货交易'],
        targetAudience: '外贸跨国企业、远程办公团队、美股/港股/加密货币交易者、追求极速的进阶极客'
      },
      {
        slug: 'beginner',
        icon: '🔰',
        badge: '新手入门',
        title: '新手入门：零基础免配置，一键导入与全平台中文支持',
        article: '首次接触网络代理的小白用户，最容易在客户端配置、订阅链接导入、节点规则分流以及内核驱动安装上遇到阻碍，甚至可能因在不明搜索引擎下载被恶意篡改的“破解版客户端”而导致财产与隐私风险。优质的新手友好型机场必须具备两大核心特质：一是提供全中文、交互直观的管理后台，并配备面向 Windows（Clash Verge / v2rayN）、Android（v2rayNG）、iOS（Shadowrocket 小火箭 / Loon）以及 macOS 的保姆级图文教程；二是全面支持<strong>“一键导入订阅”</strong>功能，购买后仅需点击一次按钮即可将全部节点同步至客户端，无需手动复制长链接或编写复杂配置文件。若遇偶发断连，通常只需在客户端点击“更新订阅”即可自动恢复，真正实现零门槛省心上手。',
        highlights: ['支持全平台主流客户端一键导入，5秒完成全量配置', '提供图文/视频保姆级指引，避开非官方恶意软件风险', '遇到失联一键更新订阅即可自动修复，售后响应及时'],
        targetAudience: '网络代理零基础小白、不愿折腾复杂规则的用户、苹果/安卓新手'
      },
      {
        slug: 'stable',
        icon: '🛡️',
        badge: '稳定优先',
        title: '稳定优先：多入口BGP智能容灾与自适应故障转移架构',
        article: '“全天候稳定不断连”是绝大多数用户对网络代理最核心的刚性诉求。传统的单入口直连节点一旦遭遇防火墙封锁 IP，整条线路便会瞬间瘫痪；而稳定优先型机场通常采用<strong>多线 BGP 入口智能解析与多机房容灾热备架构</strong>。当监测系统发现某一入口延迟激增或发生丢包时，后端会在秒级内自动完成流量重路由与入口热备切换，用户在前端几乎感知不到网络波动。对于追求极致稳定的日常主力用户，建议在客户端中开启“自动故障转移（Fallback）”或“延迟自动测速（URL-Test）”策略组，由客户端内核自动探活并切换至最优节点，同时可搭配一主一备两条不同服务商的订阅，彻底告别频繁手动测试节点的繁琐困扰。',
        highlights: ['多线BGP入口智能解析，单一机房故障秒级自动热备切换', '配合Fallback与URL-Test策略组，全自动优选延迟最低链路', '重大节假日与敏感敏感期依然保持高连通可用性'],
        targetAudience: '全天候依赖海外网络的主力冲浪者、跨境电商运营、高可靠网络需求者'
      },
      {
        slug: 'ai',
        icon: '🤖',
        badge: 'AI服务适配',
        title: 'AI服务适配：原生纯净住宅IP深度适配，杜绝风控与封号',
        article: '随着以 OpenAI ChatGPT（GPT-4o）、Anthropic Claude 3.5 Sonnet、Google Gemini 及 Midjourney 为代表的 AI 工具深度融入日常工作，AI 场景对网络节点的品质提出了前所未有的苛刻要求。这些前沿 AI 服务商普遍部署了全球最严格的 IP 信用评级与反作弊风控体系，普通的机房数据中心（IDC 广播 IP）极易被判定为机房流量而遭遇频繁的“Access Denied”、“Unable to load conversation”甚至直接封禁账号。专业的 AI 适配机场专门精选了<strong>海外本地原生 IP（双 ISP / 纯净住宅级 IP）</strong>，并对针对 Claude 等敏感域名的 DNS 劫持防护与 TLS 客户端指纹伪装进行了底层深度优化，确保对话长效不中断、API 调用不限速、海外银行卡充值订阅零风控。',
        highlights: ['精选海外原生纯净住宅IP，彻底解决Access Denied报错', '深度针对Claude 3.5与ChatGPT风控机制优化，杜绝无端封号', '支持API高频请求与第三方AI客户端长连接，稳定高效'],
        targetAudience: 'AI重度工作者、Prompt工程师、ChatGPT Plus/Claude Pro订阅用户、海外模型开发者'
      },
      {
        slug: 'streaming',
        icon: '🎬',
        badge: '流媒体解锁',
        title: '流媒体解锁：4K/8K超清秒开，全区Netflix与Disney+原生分流',
        article: '海外主流流媒体平台（Netflix 网飞、Disney+、YouTube Premium、HBO Max、BBC iPlayer 等）因复杂的全球版权分销协议，对跨国访问实施了极其严格的区域阻断与机房 IP 封锁。普通代理节点在访问 Netflix 时往往只能观看无版权限制的自制剧，甚至直接弹出“您似乎使用了代理或解锁工具”的报错警告。优质的流媒体专用机场通过部署<strong>海外本土原生住宅 DNS 分流或全原生 IP 池技术</strong>，使流媒体服务器将用户的访问识别为合法的本地家庭宽带，从而完美解锁全区所有版权影视剧与特定本地片单。此外，流媒体对单线程突发带宽与持续码率有很高要求，专业专线能提供稳定 50Mbps 以上的下行吞吐，确保 4K HDR、Dolby Vision 及 8K 超清视频随拖随播、杜绝画质降级。',
        highlights: ['原生DNS与原生IP分流解锁Netflix全区非自制剧、Disney+与HBO', '晚高峰单线程带宽充裕，4K HDR/8K拖拽进度条不卡顿不缓冲', '全面兼容Apple TV、Android TV电视盒子与游戏主机大屏追剧'],
        targetAudience: '海外影视追剧爱好者、4K/8K极清影音发烧友、电视盒子家庭共享用户'
      }
    ];

    const content = `
    <div class="container" style="padding: 2.5rem 1.25rem 4rem 1.25rem;">
      <header class="article-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="badge badge-blue">场景化分类指引</span>
        <h1 style="font-size: 2.2rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">机场场景化专题推荐中心</h1>
        <p style="color: var(--text-muted); max-width: 780px; margin: 0 auto; font-size: 1.05rem; line-height: 1.7;">
          根据您的实际应用场景、预算承受力及网络用途，选机场网为您系统拆解六大核心使用场景的选购逻辑与避坑建议，助您快速锁定最契合的机场方案。
        </p>
      </header>

      <!-- 顶部快速场景直达导航条 -->
      <div class="ranking-nav-tabs" style="justify-content: center; margin-bottom: 2.5rem;">
        <a href="#scenario-budget" class="ranking-tab">💰 低预算入门</a>
        <a href="#scenario-premium" class="ranking-tab">🚀 高端专线</a>
        <a href="#scenario-beginner" class="ranking-tab">🔰 新手入门</a>
        <a href="#scenario-stable" class="ranking-tab">🛡️ 稳定优先</a>
        <a href="#scenario-ai" class="ranking-tab">🤖 AI服务适配</a>
        <a href="#scenario-streaming" class="ranking-tab">🎬 流媒体解锁</a>
      </div>

      <!-- 六大核心场景文章专区 (每个都有一小段文章) -->
      <div style="display: flex; flex-direction: column; gap: 1.75rem; margin-bottom: 3.5rem;">
        ${scenarioArticles.map((s, idx) => `
          <div id="scenario-${s.slug}" class="ranking-item-card" style="margin-bottom: 0;">
            <div class="ranking-card-header">
              <div class="ranking-card-title-group">
                <span style="font-size: 1.4rem;">${s.icon}</span>
                <h2 style="margin: 0; font-size: 1.3rem; font-weight: 700; color: var(--text-main);">${idx + 1}. ${s.title}</h2>
                <span class="badge badge-blue">${s.badge}</span>
              </div>
              <div>
                <a href="${rootIndex}recommend/${s.slug}/index.html" class="btn btn-primary btn-sm">进入${s.badge}专题 &rarr;</a>
              </div>
            </div>

            <div style="margin: 1rem 0; font-size: 0.975rem; line-height: 1.8; color: var(--text-body);">
              <p style="margin-bottom: 0.75rem;">${s.article}</p>
            </div>

            <div class="ranking-features-grid">
              <div style="background: var(--bg-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                <strong style="color: var(--success); font-size: 0.875rem;">✓ 选购核心要点：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  ${s.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>
              <div style="background: var(--bg-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
                <strong style="color: #60a5fa; font-size: 0.875rem;">🎯 适合人群与场景：</strong>
                <p style="margin: 0.4rem 0 0 0; font-size: 0.85rem; line-height: 1.6; color: var(--text-muted);">${s.targetAudience}</p>
                <div style="margin-top: 0.5rem;">
                  <a href="${rootIndex}recommend/${s.slug}/index.html" style="font-size: 0.85rem; color: var(--primary); font-weight: 600;">查看${s.badge}精选机场评测与套餐列表 &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- 场景化专题卡片快速入口 -->
      <div style="margin-top: 3.5rem;">
        <div style="text-align: center; margin-bottom: 1.75rem;">
          <h2 style="font-size: 1.6rem; color: var(--text-main);">六大场景专题独立入口</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">点击卡片可直接进入专题详情页，查看符合各场景标准的精选机场完整测评与资费对比</p>
        </div>
        <div class="cards-grid-3">
          ${categories.map(c => `
            <a href="${rootIndex}recommend/${c.slug}/index.html" class="category-card">
              <div class="cat-icon">${c.slug === 'budget' ? '💰' : c.slug === 'premium' ? '🚀' : c.slug === 'beginner' ? '🔰' : c.slug === 'stable' ? '🛡️' : c.slug === 'ai' ? '🤖' : '🎬'}</div>
              <h3 class="cat-title">${c.h1}</h3>
              <p class="cat-desc">${c.desc}</p>
              <div class="cat-footer">进入专题查看精选方案 &rarr;</div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
    `;

    buildPage({
      relPath: 'recommend/index.html',
      title: '机场专题推荐导航 - 按场景与需求精准挑选优质节点 | 选机场网',
      description: '选机场网场景化推荐汇总专区。包含低预算、高端IEPL专线、小白新手入门、稳定优先抗封锁、AI大模型及4K流媒体专用机场节点专题。',
      keywords: '机场推荐, 梯子推荐, 性价比机场, 机场节点, 场景选购, 科学上网推荐',
      canonicalUrl: `${DOMAIN}/recommend/`,
      depth: depthIndex,
      activeNav: 'recommend',
      breadcrumbs: [{ name: '机场推荐' }],
      bodyContent: content
    });
  }
}

module.exports = buildRecommends;
