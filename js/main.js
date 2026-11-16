// 选机场网 (xuanjichang.top) - 通用交互与暗夜赛博网络动态背景脚本 (Native Vanilla JS)
document.addEventListener('DOMContentLoaded', () => {
  // 1. 初始化全屏暗夜赛博专线网络动态背景
  initDynamicBackground();

  // 2. 移动端菜单切换
  const menuBtn = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuBtn && siteNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = siteNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  }

  // 3. FAQ 折叠面板交互
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

  // 4. 页面滚动目录自动高亮 (如有)
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.style.color = '#60a5fa';
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

// 全屏暗夜赛博专线节点动态网络背景
function initDynamicBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let packets = [];
  let animId = null;

  // 鼠标交互状态
  const mouse = {
    x: -9999,
    y: -9999,
    isActive: false,
    radius: 160
  };

  const colors = [
    'rgba(59, 130, 246, ',   // primary blue
    'rgba(96, 165, 250, ',   // light blue
    'rgba(56, 189, 248, ',   // sky blue
    'rgba(16, 185, 129, ',   // emerald green
    'rgba(129, 140, 248, '   // indigo/purple
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置矩阵
    ctx.scale(dpr, dpr);

    // 智能根据屏幕尺寸适配节点数
    const count = Math.max(25, Math.min(Math.floor(width / 26), 68));
    if (particles.length === 0) {
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    } else if (particles.length < count) {
      while (particles.length < count) particles.push(createParticle());
    } else if (particles.length > count) {
      particles.length = count;
    }
  }

  function createParticle() {
    const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * (width || window.innerWidth),
      y: Math.random() * (height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      radius: Math.random() * 1.5 + 1.2,
      color: colorPrefix,
      baseAlpha: Math.random() * 0.35 + 0.45,
      pulseSpeed: Math.random() * 0.02 + 0.012,
      pulseVal: Math.random() * Math.PI * 2
    };
  }

  // 生成专线数据脉冲包
  function maybeSpawnPacket(p1, p2) {
    if (packets.length < 7 && Math.random() < 0.025) {
      packets.push({
        startX: p1.x,
        startY: p1.y,
        targetX: p2.x,
        targetY: p2.y,
        progress: 0,
        speed: Math.random() * 0.022 + 0.012,
        color: p1.color
      });
    }
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const maxDist = width < 768 ? 105 : 140;

    // 1. 遍历更新与绘制节点
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // 屏幕边界循环无缝穿透
      if (p.x < -15) p.x = width + 15;
      else if (p.x > width + 15) p.x = -15;
      if (p.y < -15) p.y = height + 15;
      else if (p.y > height + 15) p.y = -15;

      // 呼吸发光微动态
      p.pulseVal += p.pulseSpeed;
      const alpha = p.baseAlpha + Math.sin(p.pulseVal) * 0.18;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0.2, Math.min(alpha, 0.95)) + ')';
      ctx.fill();

      // 鼠标附近交互引力连线
      if (mouse.isActive) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const mAlpha = (1 - dist / mouse.radius) * 0.4;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${mAlpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // 2. 节点与节点之间的专线物理连线
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

          maybeSpawnPacket(p, p2);
        }
      }
    }

    // 3. 绘制沿专线传输的光速数据包
    for (let k = packets.length - 1; k >= 0; k--) {
      const pkt = packets[k];
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) {
        packets.splice(k, 1);
        continue;
      }
      const curX = pkt.startX + (pkt.targetX - pkt.startX) * pkt.progress;
      const curY = pkt.startY + (pkt.targetY - pkt.startY) * pkt.progress;

      ctx.beginPath();
      ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = '#60a5fa';
      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0; // 重置发光
    }

    animId = requestAnimationFrame(draw);
  }

  // 页面切换标签页时智能暂停，省电且避免后台堆叠
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animId) cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(draw);
    }
  });

  resize();
  draw();
}
