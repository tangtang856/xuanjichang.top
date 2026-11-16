const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');

function buildTrust() {
  const depth = 1;
  const root = getRelativeRoot(depth);

  // 1. 关于我们 (about/index.html)
  {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">平台介绍</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">关于选机场网：我们的使命、团队原则与评估体系</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>官方域名：xuanjichang.top</span>
          </div>
        </header>

        <div class="article-content">
          <h2>我们是谁？</h2>
          <p>
            <strong>选机场网（xuanjichang.top）</strong>是一个专注于中文网络代理工具、机场节点评测与跨境科学上网指南的独立技术资讯门户。
          </p>
          <p>
            在当今互联网上，搜索“机场推荐”或“梯子推荐”充斥着大量虚假刷单、夸大跑分、甚至故意诱导购买劣质跑路年付套餐的垃圾营销站。面对这一行业乱象，我们建立选机场网的初衷极其纯粹：<strong>实事求是、数据透明、拒绝虚构</strong>。
          </p>

          <h2>我们的三大核心原则</h2>
          <ol>
            <li><strong>拒绝虚构测速截图：</strong>单次千兆测速图毫无意义。我们坚决不把特定测试环境下的峰值当做全天候常态，所有评价均基于长期网络连通率、专线物理拓扑及公开资费标准。</li>
            <li><strong>真实每GB单价透明化：</strong>严格折算节点倍率与可用流量，坚决揭发高倍率暗扣流量与虚高超卖套路。</li>
            <li><strong>安全防跑路优先：</strong>对所有收录品牌坚持“优先月付体验”倡导，提醒用户规避不可控的运营与外部网络封锁风险。</li>
          </ol>

          <h2>为谁服务？</h2>
          <p>
            我们致力于为以下群体提供清醒、理性的数字连接工具参考：
          </p>
          <ul>
            <li>从事跨境电商、外贸出海业务的营销与运营人员；</li>
            <li>需要查阅 arXiv、Google 学术、IEEE 论文的在校师生与科研学者；</li>
            <li>需要连接海外代码仓库（GitHub、GitLab）与云计算平台的软件工程师；</li>
            <li>需要访问海外流媒体（Netflix、YouTube）或大语言模型（OpenAI ChatGPT、Claude）的泛科技爱好者。</li>
          </ul>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">关于与合规</div>
          <ul class="toc-list">
            <li><a href="${root}about/index.html" style="color: var(--primary); font-weight: bold;">关于选机场网</a></li>
            <li><a href="${root}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html">免责与服务条款</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: 'about/index.html',
      title: '关于选机场网 - 独立客观的中文网络工具与节点资讯站 | 选机场网',
      description: '了解选机场网的平台宗旨、评估原则与使命。坚持实事求是、拒绝虚假测速与浮夸宣传，为您提供靠谱的机场推荐与科学上网节点指南。',
      keywords: '关于选机场网, 选机场网介绍, 独立机场评测, 科学上网导航, 网站使命',
      canonicalUrl: `${DOMAIN}/about/`,
      depth,
      activeNav: 'about',
      breadcrumbs: [{ name: '关于我们' }],
      bodyContent: content
    });
  }

  // 2. 编辑政策与评测标准 (editorial-policy/index.html)
  {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">规范准则</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">编辑政策：数据来源标准、评测规范与联盟推广披露</h1>
          <div class="article-meta">
            <span>生效日期：2026-03</span>
            <span>合规声明：全站执行透明公示原则</span>
          </div>
        </header>

        <div class="article-content">
          <h2>一、数据收集与事实核验标准</h2>
          <p>
            选机场网对所有文章和评测报告中的数据来源实施明确分类与标注：
          </p>
          <ul>
            <li><strong>官方公开资料：</strong>来自服务商官网公开价目表、套餐说明及服务协议。此类数据由编辑定期复查校对；</li>
            <li><strong>编辑实测数据：</strong>由编辑组在标准宽带环境（中国电信/联通/移动主流家庭宽带）下进行的多时段连通测试与协议抓包；</li>
            <li><strong>未核实资料：</strong>若某项特性缺乏充分公开资料或长期连通支撑，我们直接标注为“尚未核实”，严禁虚构或脑补。</li>
          </ul>

          <h2>二、评测与排名中立性声明</h2>
          <p>
            本站的排行榜与推荐位<strong>绝不售卖给无真实线路支撑的劣质机场</strong>。无论服务商开出多高的佣金，若其线路晚高峰丢包率过高、存在恶意扣费记录或出现跑路迹象，均会一票否决并将其移出推荐名单。
          </p>

          <h2>三、联盟推广（Affiliate）披露声明</h2>
          <div class="callout callout-info">
            <strong>透明公示：</strong>为了维持网站的基础服务器租用、网络监测节点维护以及内容更新成本，本站的部分外链可能包含联盟推广标识（Affiliate Links）。当您通过本站链接购买服务时，服务商可能会支付少许推广提成，但这<strong>绝不会增加您的实际购买资费</strong>，甚至往往能享受独家优惠折扣。这种商业合作绝不影响我们对产品优缺点的客观陈述。
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">关于与合规</div>
          <ul class="toc-list">
            <li><a href="${root}about/index.html">关于选机场网</a></li>
            <li><a href="${root}editorial-policy/index.html" style="color: var(--primary); font-weight: bold;">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html">免责与服务条款</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: 'editorial-policy/index.html',
      title: '编辑政策与评测标准 - 选机场网独立内容创作规范 | 选机场网',
      description: '选机场网编辑政策与评测标准。明确公开数据来源、排行依据、更新核验机制及联盟推广关系披露，确保所有推荐客观中立。',
      keywords: '编辑政策, 评测标准, 联盟推广披露, 数据来源声明, 选机场网规范',
      canonicalUrl: `${DOMAIN}/editorial-policy/`,
      depth,
      activeNav: 'editorial',
      breadcrumbs: [{ name: '编辑政策' }],
      bodyContent: content
    });
  }

  // 3. 联系我们 (contact/index.html)
  {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">沟通渠道</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">联系选机场网：意见反馈、数据纠错与沟通渠道</h1>
          <div class="article-meta">
            <span>官方联系邮箱：contact@xuanjichang.top</span>
          </div>
        </header>

        <div class="article-content">
          <h2>欢迎您的监督与反馈</h2>
          <p>
            由于机场服务商的套餐资费、节点拓扑及促销政策可能随时发生动态调整，如果您在浏览本站时发现任何数据错误、失效链接或需要补充的事实细节，欢迎随时与我们取得联系。
          </p>

          <div class="callout callout-info" style="margin: 2rem 0;">
            <h3 style="margin-top: 0; color: #1e40af;">官方沟通邮箱</h3>
            <p style="margin-bottom: 0.5rem;">电子邮箱：<strong>contact@xuanjichang.top</strong></p>
            <p style="margin-bottom: 0; font-size: 0.9rem; color: var(--text-muted);">
              我们在收到邮件后的 48 小时内完成核实与回复。涉及数据勘误的邮件请附带官方截图或可公开查验的依据。
            </p>
          </div>

          <h2>商务合作与收录申请准则</h2>
          <p>
            如果您是优质机场服务商希望申请收录评测，请在邮件中提供以下材料：
          </p>
          <ul>
            <li>品牌运营年限与公开主域名；</li>
            <li>底层网络拓扑说明（明确是纯内网IEPL、公网隧道中转还是其他架构）；</li>
            <li>公开套餐资费表与退款/售后服务承诺；</li>
            <li>严禁劣质超卖或存在跑路风险的项目投递，此类邮件一律不予受理。</li>
          </ul>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">关于与合规</div>
          <ul class="toc-list">
            <li><a href="${root}about/index.html">关于选机场网</a></li>
            <li><a href="${root}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html" style="color: var(--primary); font-weight: bold;">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html">免责与服务条款</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: 'contact/index.html',
      title: '联系我们 - 选机场网意见反馈、数据勘误与商务合作 | 选机场网',
      description: '联系选机场网编辑部。我们欢迎用户的真实反馈、数据勘误与合规商务沟通，共同打造客观靠谱的中文机场节点资讯平台。',
      keywords: '联系选机场网, 意见反馈, 机场评测纠错, 商务合作, 选机场网邮箱',
      canonicalUrl: `${DOMAIN}/contact/`,
      depth,
      activeNav: 'contact',
      breadcrumbs: [{ name: '联系我们' }],
      bodyContent: content
    });
  }

  // 4. 隐私政策 (privacy-policy/index.html)
  {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">隐私保护</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">隐私政策：个人信息保护与无痕浏览保障</h1>
          <div class="article-meta">
            <span>最后修订：2026-03</span>
            <span>保护原则：零个人身份信息收集</span>
          </div>
        </header>

        <div class="article-content">
          <h2>一、我们的隐私承诺</h2>
          <p>
            选机场网（xuanjichang.top）极度重视访问者的隐私安全。作为一个纯静态的内容资讯网站，<strong>我们不设立用户注册系统、不收集用户手机号或姓名、不强制索取任何个人身份隐私数据</strong>。
          </p>

          <h2>二、网络日志与匿名分析</h2>
          <p>
            当您访问本站时，托管服务商（如 Cloudflare Pages）可能会自动记录标准的匿名 Web 访问日志，包括您的 IP 地址、浏览器类型、请求时间及访问页面。此类信息仅用于保障网站的防 DDoS 攻击安全与服务器负载分析，绝不用于追踪个人身份。
          </p>

          <h2>三、第三方链接提示</h2>
          <p>
            本站包含指向第三方机场官网或开源软件仓库（如 GitHub）的外部超链接。当您点击跳转离开本站后，第三方平台的隐私保护政策由该第三方自行负责，建议您在向任何第三方平台输入信息前仔细阅读其隐私条款。
          </p>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">关于与合规</div>
          <ul class="toc-list">
            <li><a href="${root}about/index.html">关于选机场网</a></li>
            <li><a href="${root}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html" style="color: var(--primary); font-weight: bold;">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html">免责与服务条款</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: 'privacy-policy/index.html',
      title: '隐私政策 - 选机场网用户隐私与Cookie使用声明 | 选机场网',
      description: '选机场网隐私政策声明。我们承诺不收集用户个人身份信息，保障纯静态无痕浏览安全，严格保护访问者数据隐私。',
      keywords: '隐私政策, 隐私声明, 用户隐私保护, 无痕浏览, 选机场网隐私',
      canonicalUrl: `${DOMAIN}/privacy-policy/`,
      depth,
      activeNav: 'privacy',
      breadcrumbs: [{ name: '隐私政策' }],
      bodyContent: content
    });
  }

  // 5. 免责声明 (disclaimer/index.html)
  {
    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-orange">法律与合规</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">免责声明：技术研究与合规使用声明</h1>
          <div class="article-meta">
            <span>最后生效：2026-03</span>
            <span>合规要求：请严格遵守所在国家法律法规</span>
          </div>
        </header>

        <div class="article-content">
          <h2>一、技术研究与教育科普性质</h2>
          <p>
            选机场网（xuanjichang.top）所刊载的所有文章、协议科普、客户端配置教学及网络拓扑评测，<strong>仅用于网络技术交流、学术科研探讨、国际互联通信原理研究及出海业务合规参考</strong>。
          </p>

          <h2>二、网络合规与法律责任</h2>
          <p>
            访问者在使用任何网络代理或连接工具时，<strong>必须严格遵守所在国家与地区的法律法规与行业监管政策</strong>。任何人不得利用本站介绍的工具从事任何危害国家安全、侵犯他人合法权益、散布违规信息或从事其他非法活动。如访问者违反法律规定，由此产生的全部法律责任由行为人自行承担，本站概不承担任何法律连带责任。
          </p>

          <h2>三、第三方商业交易免责</h2>
          <p>
            本站仅提供客观的资讯整理与参数对比，<strong>本站本身并不经营、售卖任何节点或代理服务</strong>。用户与任何第三方机场服务商之间产生的订购、支付、退款、服务中断等商业纠纷，均应依据用户与该服务商签署的服务协议处理，本站不承担任何担保或民事赔偿责任。
          </p>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">关于与合规</div>
          <ul class="toc-list">
            <li><a href="${root}about/index.html">关于选机场网</a></li>
            <li><a href="${root}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html" style="color: var(--primary); font-weight: bold;">免责与服务条款</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: 'disclaimer/index.html',
      title: '免责声明与服务条款 - 选机场网内容使用规范 | 选机场网',
      description: '选机场网免责声明与服务条款。明确本站内容仅用于技术学术研究，使用者须遵守当地法律法规，理性合规使用网络工具。',
      keywords: '免责声明, 法律合规声明, 服务条款, 科学上网合规提示, 选机场网条款',
      canonicalUrl: `${DOMAIN}/disclaimer/`,
      depth,
      activeNav: 'disclaimer',
      breadcrumbs: [{ name: '免责声明' }],
      bodyContent: content
    });
  }

  // 6. 404 页面 (404.html)
  {
    const depth404 = 0;
    const root404 = getRelativeRoot(depth404);

    const content = `
    <div class="container" style="padding: 5rem 1.25rem; text-align: center;">
      <span class="badge badge-orange" style="font-size: 1.1rem; padding: 0.4rem 1rem;">404 NOT FOUND</span>
      <h1 style="font-size: 2.8rem; margin: 1.5rem 0 1rem 0; color: var(--text-main);">抱歉，您访问的页面不存在或已被移除</h1>
      <p style="color: var(--text-muted); max-width: 600px; margin: 0 auto 2.5rem auto; font-size: 1.1rem; line-height: 1.7;">
        您可能输入了错误的网址，或者该页面链接已更新。请点击下方按钮返回首页，或浏览我们的热门推荐与排行榜。
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="${root404}index.html" class="btn btn-primary" style="padding: 0.75rem 1.75rem;">返回网站首页</a>
        <a href="${root404}ranking/overall/index.html" class="btn btn-outline" style="padding: 0.75rem 1.75rem;">查看综合排行榜</a>
        <a href="${root404}compare/index.html" class="btn btn-outline" style="padding: 0.75rem 1.75rem;">在线参数比对</a>
      </div>
    </div>
    `;

    buildPage({
      relPath: '404.html',
      title: '404 - 页面未找到 | 选机场网',
      description: '您访问的页面不存在，请返回选机场网首页查看最新机场推荐与科学上网节点导航。',
      keywords: '404, 页面未找到, 选机场网',
      canonicalUrl: `${DOMAIN}/404.html`,
      depth: depth404,
      activeNav: '',
      breadcrumbs: [{ name: '404 页面未找到' }],
      bodyContent: content
    });
  }
}

module.exports = buildTrust;
