// scripts/gen-blog.js
// 选机场网 (xuanjichang.top) - 100 篇 Bing SEO 深度文章生成器
const { DOMAIN, getRelativeRoot, buildPage } = require('./generate-site');
const articles = require('./data-articles');

function buildBlog() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  articles.forEach((art, idx) => {
    // 上下篇循环导航，方便用户连续阅读
    const prevArticle = idx > 0 ? articles[idx - 1] : articles[articles.length - 1];
    const nextArticle = idx < articles.length - 1 ? articles[idx + 1] : articles[0];

    // 侧边栏：展示同 cluster 或相关精选文章 (8篇)
    const relatedArticles = articles
      .filter(a => a.slug !== art.slug && (a.cluster === art.cluster || a.tag === art.tag))
      .concat(articles.filter(a => a.slug !== art.slug))
      .slice(0, 8);

    const articleBody = art.content.replace(/__ROOT__/g, root);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
            <span class="badge badge-blue">${art.tag}</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">${art.cluster}</span>
          </div>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${art.h1}</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>作者：选机场网编辑部</span>
            <span>实操评测：已核验线路与品牌数据</span>
          </div>
        </header>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">💡 本文核心要点速览</div>
          <p style="margin-bottom: 0; font-size: 0.95rem; color: var(--text-body);">
            ${art.desc}
          </p>
        </div>

        <article class="article-content" style="margin-top: 2rem;">
          ${articleBody}

          <h2 style="margin-top: 2.5rem;">选机场网编辑部中立总结</h2>
          <p>
            科学上网工具的核心价值是<strong>为学术科研、外贸出海、软件开发与全球化数字生活提供高效、透明、稳定的网络桥梁</strong>。多一分对底层网络协议和机房线路的了解，就能少踩无数虚假宣传的坑。
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="${root}ranking/overall/index.html" class="btn btn-primary btn-sm">查看综合实力榜</a>
            <a href="${root}ranking/value/index.html" class="btn btn-outline btn-sm">查看高性价比榜</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm">在线横向比选</a>
            <a href="${root}guides/index.html" class="btn btn-outline btn-sm">查看客户端教程</a>
          </div>
        </article>

        <!-- 上下一篇与内链导航条 (每个文章跳转到下一个文章) -->
        <nav class="article-pagination" aria-label="文章上下篇导航">
          <a href="${root}blog/${prevArticle.slug}/index.html" class="pagination-item prev">
            <span class="pagination-label">&larr; 上一篇 · ${prevArticle.tag || '选购指南'}</span>
            <span class="pagination-title">${prevArticle.h1}</span>
          </a>
          <a href="${root}blog/${nextArticle.slug}/index.html" class="pagination-item next">
            <span class="pagination-label">下一篇 · ${nextArticle.tag || '选购指南'} &rarr;</span>
            <span class="pagination-title">${nextArticle.h1}</span>
          </a>
        </nav>

        <!-- 延伸相关推荐阅读 -->
        <div class="related-articles-section" style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-light);">
          <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--text-main);">🔍 延伸相关推荐阅读</h3>
          <div class="cards-grid-3">
            ${relatedArticles.slice(0, 3).map(ra => `
              <a href="${root}blog/${ra.slug}/index.html" class="category-card" style="padding: 1.25rem;">
                <span class="badge badge-blue" style="font-size: 0.7rem; align-self: flex-start; margin-bottom: 0.5rem;">${ra.tag}</span>
                <h4 style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.35rem; line-height: 1.4;">${ra.h1}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${ra.desc}</p>
              </a>
            `).join('')}
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">相关深度推荐</div>
          <ul class="toc-list">
            ${relatedArticles.map(a => `
              <li><a href="${root}blog/${a.slug}/index.html">${a.h1}</a></li>
            `).join('')}
          </ul>
          <div style="margin-top: 1rem; text-align: right;">
            <a href="${root}blog/index.html" style="font-size: 0.85rem; color: var(--primary);">查看全部 100 篇文章 &rarr;</a>
          </div>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">核心排行榜</div>
          <ul class="toc-list">
            <li><a href="${root}ranking/overall/index.html">2026综合实力榜</a></li>
            <li><a href="${root}ranking/value/index.html">高性价比排行榜</a></li>
            <li><a href="${root}ranking/budget/index.html">平价低预算排行榜</a></li>
            <li><a href="${root}ranking/stable/index.html">稳定专线排行榜</a></li>
          </ul>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">常用客户端教程</div>
          <ul class="toc-list">
            <li><a href="${root}guides/windows/index.html">Windows Clash Verge教程</a></li>
            <li><a href="${root}guides/android/index.html">Android Clash Meta教程</a></li>
            <li><a href="${root}guides/ios/index.html">iOS Shadowrocket小火箭教程</a></li>
            <li><a href="${root}guides/macos/index.html">macOS 客户端配置教程</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `blog/${art.slug}/index.html`,
      title: `${art.title} | 选机场网`,
      description: `${art.desc} 选机场网深度剖析${art.h1}，客观中立，拒绝浮夸宣传。`,
      keywords: `${art.tag}, 机场推荐, 梯子推荐, 翻墙教程, 科学上网指南, vpn对比, 机场节点`,
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

    // 聚合 7 大专题 Cluster
    const clusters = [
      '选购方法论与避坑',
      '专线网络与协议原理',
      'AI大模型与学术加速',
      '4K/8K流媒体与影音娱乐',
      '价格预算与套餐策略',
      '节点地区与全球网络拓扑',
      '安全隐私与对比排查'
    ];

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">知识专栏 · 共100篇</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">科学上网与机场选购深度指南知识专栏</h1>
        <p style="color: var(--text-muted); max-width: 780px; margin: 0 auto; font-size: 1.05rem;">
          坚持实事求是与专业深度，从协议架构、专线机理、价格计算、AI大模型加速到跑路避坑，为您提供清醒理性的翻墙决策支撑。
        </p>

        <!-- 专题快速导航锚点 -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; margin-top: 1.5rem;">
          ${clusters.map((c, i) => `
            <a href="#cluster-${i}" class="btn btn-outline btn-sm" style="font-size: 0.85rem;">${c}</a>
          `).join('')}
        </div>
      </header>

      ${clusters.map((clusterName, clusterIdx) => {
        const clusterArticles = articles.filter(a => a.cluster === clusterName);
        return `
          <section id="cluster-${clusterIdx}" style="margin-bottom: 3.5rem; scroll-margin-top: 2rem;">
            <div style="border-bottom: 2px solid var(--border-light); padding-bottom: 0.75rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: baseline;">
              <h2 style="font-size: 1.6rem; color: var(--text-main); margin: 0;">专题 ${clusterIdx + 1}：${clusterName}</h2>
              <span style="font-size: 0.9rem; color: var(--text-muted);">共 ${clusterArticles.length} 篇</span>
            </div>
            <div class="cards-grid-2">
              ${clusterArticles.map(a => `
                <div class="airport-card">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span class="badge badge-blue">${a.tag}</span>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">2026-03</span>
                  </div>
                  <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; line-height: 1.4;"><a href="${rootIndex}blog/${a.slug}/index.html">${a.h1}</a></h3>
                  <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1.25rem; line-height: 1.6;">${a.desc}</p>
                  <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
                    <span style="font-size: 0.8rem; color: var(--text-muted);">阅读约 5 分钟</span>
                    <a href="${rootIndex}blog/${a.slug}/index.html" class="btn btn-outline btn-sm">阅读全文 &rarr;</a>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }).join('')}
    </div>
    `;

    buildPage({
      relPath: 'blog/index.html',
      title: '科学上网与机场选购深度指南专栏 - 100篇核心文章全集 | 选机场网',
      description: '选机场网知识与选购指南专栏。汇集100篇关于机场推荐、Shadowsocks/Trojan协议解析、晚高峰测速、ChatGPT/Netflix解锁及避坑防跑路的专业指南。',
      keywords: '机场选购指南, 梯子避坑, 翻墙原理, 科学上网博客, vpn技术区别, 机场文章, 机场推荐, 性价比机场',
      canonicalUrl: `${DOMAIN}/blog/`,
      depth: depthIndex,
      activeNav: 'blog',
      breadcrumbs: [{ name: '选购指南' }],
      bodyContent: content
    });
  }
}

module.exports = buildBlog;
