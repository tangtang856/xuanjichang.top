// 选机场网 (xuanjichang.top) - 通用交互脚本 (Native Vanilla JS)
document.addEventListener('DOMContentLoaded', () => {
  // 1. 移动端菜单切换
  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuBtn && siteNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = siteNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  }

  // 2. FAQ 折叠面板交互
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = answer.style.display !== 'none';
        answer.style.display = isOpen ? 'none' : 'block';
        const indicator = question.querySelector('.faq-indicator');
        if (indicator) {
          indicator.textContent = isOpen ? '+' : '−';
        }
      });
    }
  });

  // 3. 页面滚动目录自动高亮 (如有)
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.style.color = 'var(--primary)';
              link.style.fontWeight = 'bold';
            } else {
              link.style.color = '';
              link.style.fontWeight = '';
            }
          });
        }
      });
    }, { rootMargin: '0px 0px -70% 0px' });

    document.querySelectorAll('.article-content h2, .article-content h3').forEach(heading => {
      if (heading.id) observer.observe(heading);
    });
  }
});
