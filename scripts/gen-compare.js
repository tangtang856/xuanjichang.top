const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');

function buildCompare() {
  const depth = 1;
  const root = getRelativeRoot(depth);

  const content = `
  <div class="container" style="padding: 3rem 1.25rem 4rem 1.25rem;">
    <header style="margin-bottom: 2rem; text-align: center;">
      <span class="badge badge-blue">横向比对利器</span>
      <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">在线机场参数与价格横向对比工具</h1>
      <p style="color: var(--text-muted); max-width: 760px; margin: 0 auto; font-size: 1.05rem;">
        基于选机场网统一数据库，支持勾选 2 到 4 家机场服务商，实时对起步资费、每GB实际成本、线路架构、支持协议、设备限制及AI/流媒体解锁能力进行全维度横向PK。
      </p>
    </header>

    <div id="compare-app">
      <!-- 动态复选框选择区 -->
      <div id="airport-selector-box"></div>

      <!-- 对比表格动态挂载区 -->
      <div id="compare-table-container"></div>
    </div>

    <!-- 补充对比指引与评判维度说明 -->
    <div class="article-content" style="margin-top: 3.5rem; max-width: 900px; margin-left: auto; margin-right: auto;">
      <h2>横向比对维度的核心技术解析</h2>
      <p>
        在进行两家或多家机场的横向对比时，切忌仅凭表面的“价格高低”作出草率决策。请重点关注以下三个关键隐藏参数：
      </p>
      <div class="quick-answer-grid" style="margin-top: 1rem;">
        <div class="quick-item">
          <h4>1. 专线架构 vs 普通中转</h4>
          <p>IEPL专线虽然单价略高，但晚高峰不卡顿且几乎无视外部敏感期封锁；公网中转虽然单价便宜，但在大型节假日需要服务商频繁切换备用入口。</p>
        </div>
        <div class="quick-item">
          <h4>2. 每GB真实单价折算</h4>
          <p>对比两家机场时，务必将套餐总价除以实际可用GB数。如果一家服务商标价便宜但节点倍率普遍为2.0x，其真实单价往往高于明码标价的专线品牌。</p>
        </div>
        <div class="quick-item">
          <h4>3. 原生住宅IP与AI解锁</h4>
          <p>从事跨国AI生产力（如重度使用ChatGPT Plus或Claude 3.5）的用户，必须关注机场是否具备原生干净IP，普通机房广播IP容易遭遇频繁风控拦截。</p>
        </div>
      </div>

      <h2 style="margin-top: 2rem;">常见对比疑问解答</h2>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">
            <span>为什么有的机场按美元计费（如 Just My Socks）？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            部分拥有海外正规IDC资质的服务商（例如搬瓦工旗下的Just My Socks）直接面向全球用户提供外汇结算服务。其优势在于信用背书极强、绝对无跑路风险且支持IP自动切换，但国内用户购买时需留意汇率换算与支付方式。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <span>对比后发现没有一家机场能满足我所有需求怎么办？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            业界资深用户的成熟策略通常是「双机场组合（主力+备用）」：选择一条高品质IEPL专线（如闪电猫或桔子云旗舰版）作为日常办公、跨国会议与AI交互的主力线路；同时搭配一条平价轻量月付机场（如飞鸟云或泡泡狗）作为大流量下载与防失联的应急备用通道。
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  buildPage({
    relPath: 'compare/index.html',
    title: '机场在线横向对比工具 - 价格流量协议节点全维度比对 | 选机场网',
    description: '专业的在线机场横向对比工具。支持2-4家机场服务商自由比选，实时比对套餐资费、每GB成本、专线架构、节点地区、设备限制及ChatGPT/流媒体解锁能力。',
    keywords: '机场对比, 机场横向比较, 机场参数比对, 梯子对比, 性价比机场比对, 机场节点对比',
    canonicalUrl: `${DOMAIN}/compare/`,
    depth,
    activeNav: 'compare',
    breadcrumbs: [{ name: '在线横向比对' }],
    bodyContent: content,
    extraScripts: `
      <script src="${root}data/airports.js"></script>
      <script src="${root}js/compare.js"></script>
    `
  });
}

module.exports = buildCompare;
