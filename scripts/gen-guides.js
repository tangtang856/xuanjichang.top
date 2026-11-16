// scripts/gen-guides.js
// 选机场网 (xuanjichang.top) - 30 篇全平台与客户端实战教程生成器
const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');
const guides = require('./data-tutorials');

function buildGuides() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  guides.forEach((g, idx) => {
    // 上下篇循环导航
    const prevGuide = idx > 0 ? guides[idx - 1] : guides[guides.length - 1];
    const nextGuide = idx < guides.length - 1 ? guides[idx + 1] : guides[0];

    // 侧边栏推荐教程：优先精选核心教程
    const relatedGuides = guides.filter(x => x.slug !== g.slug);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">${g.tag || '实战教程'}</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${g.h1}</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>适配工具：${g.client}</span>
            <span>实测状态：已在最新操作系统环境下实操验证</span>
          </div>
        </header>

        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin-bottom: 1.5rem;">
          ${g.desc}
        </p>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">📌 30秒极速配置核心思路</div>
          <p style="margin-bottom: 0; font-size: 0.95rem;">
            科学上网客户端配置逻辑非常清晰纯粹：<strong>【下载正规正版客户端】&rarr;【在机场用户后台复制订阅URL】&rarr;【在客户端中导入并拉取节点】&rarr;【选择规则分流模式并开启系统代理/VPN】</strong>。整个流程通常仅需 2-3 分钟即可完成。
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
            拥有优秀的客户端是第一步，稳定可靠的节点订阅才是连接全球的核心。若您尚未选定合适的服务商，可以参考以下经过兼容性验证的代表性品牌：
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
            <a href="${root}ranking/overall/index.html" class="btn btn-primary btn-sm">查看综合实力榜</a>
            <a href="${root}ranking/value/index.html" class="btn btn-outline btn-sm">查看高性价比榜</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm">在线横向比选</a>
            <a href="${root}guides/index.html" class="btn btn-outline btn-sm">返回教程中心</a>
          </div>
        </div>

        <!-- 上下一篇教程导航条 (每个教程跳转到下一个教程) -->
        <nav class="article-pagination" aria-label="教程上下篇导航">
          <a href="${root}guides/${prevGuide.slug}/index.html" class="pagination-item prev">
            <span class="pagination-label">&larr; 上一篇教程 · ${prevGuide.client || '客户端教程'}</span>
            <span class="pagination-title">${prevGuide.h1}</span>
          </a>
          <a href="${root}guides/${nextGuide.slug}/index.html" class="pagination-item next">
            <span class="pagination-label">下一篇教程 · ${nextGuide.client || '客户端教程'} &rarr;</span>
            <span class="pagination-title">${nextGuide.h1}</span>
          </a>
        </nav>

        <!-- 延伸推荐教程 -->
        <div class="related-articles-section" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-light);">
          <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--text-main);">🛠️ 延伸推荐相关教程</h3>
          <div class="cards-grid-3">
            ${relatedGuides.slice(0, 3).map(rg => `
              <a href="${root}guides/${rg.slug}/index.html" class="category-card" style="padding: 1.25rem;">
                <span class="badge badge-blue" style="font-size: 0.7rem; align-self: flex-start; margin-bottom: 0.5rem;">${rg.client || '客户端'}</span>
                <h4 style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.35rem; line-height: 1.4;">${rg.h1}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${rg.desc}</p>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">更多核心客户端教程</div>
          <ul class="toc-list">
            ${relatedGuides.map(item => `
              <li><a href="${root}guides/${item.slug}/index.html">${item.h1.replace('客户端安装与订阅配置教程', '').replace('平台客户端配置与节点使用教程', '').replace('平台Shadowrocket与节点导入配置教程', '').replace('平台客户端配置与系统代理设置教程', '').replace('跨平台保姆级使用与规则分流指南', '')}</a></li>
            `).join('')}
          </ul>
          <div style="margin-top: 1rem; text-align: right;">
            <a href="${root}guides/index.html" style="font-size: 0.85rem; color: var(--primary);">查看全部 30 篇教程 &rarr;</a>
          </div>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">网络与技术解密</div>
          <ul class="toc-list">
            <li><a href="${root}glossary/clash/index.html">什么是 Clash 与 Meta 内核？</a></li>
            <li><a href="${root}glossary/shadowrocket/index.html">小火箭核心功能详解</a></li>
            <li><a href="${root}glossary/iplc-iepl/index.html">什么是 IEPL 专线？</a></li>
            <li><a href="${root}blog/how-to-choose-airport/index.html">新手如何挑选适合的机场？</a></li>
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
        <span class="badge badge-blue">全平台指引 · 共30篇</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">科学上网全平台客户端与实战教程中心</h1>
        <p style="color: var(--text-muted); max-width: 750px; margin: 0 auto; font-size: 1.05rem;">
          无论您使用的是 Windows 电脑、Android 安卓手机、iPhone/iPad 苹果设备、Mac 笔记本，还是 Apple TV、软路由网关、游戏主机或开发终端，都能在此找到严谨清晰的高清图文教程。
        </p>
      </header>

      <div class="cards-grid-2">
        ${guides.map(g => `
          <div class="airport-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span class="badge badge-blue">${g.tag || '实战教程'}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">2026-03</span>
            </div>
            <h2 style="font-size: 1.25rem; margin-bottom: 0.5rem; line-height: 1.4;"><a href="${rootIndex}guides/${g.slug}/index.html">${g.h1}</a></h2>
            <div style="font-size: 0.85rem; color: var(--primary); font-weight: 600; margin-bottom: 0.75rem;">适配工具：${g.client}</div>
            <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1.25rem; line-height: 1.6;">${g.desc}</p>
            <div style="margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
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
