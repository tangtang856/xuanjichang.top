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

  // 5. 初始化联络我们模态弹窗与复制逻辑
  initContactModal();
});

// 联络我们专业弹窗控制器
function initContactModal() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  const openBtns = document.querySelectorAll('.btn-open-contact');
  const closeBtn = document.getElementById('btn-close-contact');
  const toast = document.getElementById('contact-toast');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openContactModal = openModal;
  window.closeContactModal = closeModal;

  openBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 一键复制支持
  document.querySelectorAll('.btn-copy-contact').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`已成功复制: ${text}`);
        }).catch(() => {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    });
  });

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast(`已成功复制: ${text}`);
    } catch (err) {
      showToast(`复制失败，请手动选择复制`);
    }
    document.body.removeChild(input);
  }

  let toastTimer = null;
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
}

// ==========================================================================
// 选机场网 (xuanjichang.top) - 3D 赛博网络地球动态背景 (Native Canvas 2D)
// 极致拟合真实世界网络拓扑、点阵陆地、网络星座弧线与地平线日出耀斑
// ==========================================================================
function initDynamicBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animId = null;

  // 地球核心参数与旋转状态
  let R = 380;           // 地球基础半径 (自适应扩展)
  let cx = 0;            // 地球中心 X
  let cy = 0;            // 地球中心 Y
  let rotY = -0.55;      // 当前经度自转角
  let rotSpeed = 0.0020; // 稳定匀速自转
  const tiltX = 0.38;    // 地轴真实倾角 (~22度)
  const tiltZ = -0.12;   // 侧倾小角度

  // 鼠标交互微偏移平滑过渡
  const mouse = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    isActive: false
  };

  window.addEventListener('mousemove', (e) => {
    mouse.targetX = (e.clientX - width / 2) * 0.00035;
    mouse.targetY = (e.clientY - height / 2) * 0.00035;
    mouse.isActive = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.targetX = 0;
    mouse.targetY = 0;
    mouse.isActive = false;
  });

  // 1. 全球主要网络枢纽中心 (Airport Hubs)
  const HUBS = [
    { name: 'HK', lat: 22.3, lon: 114.2, color: '#38bdf8' },
    { name: 'Tokyo', lat: 35.7, lon: 139.7, color: '#e879f9' },
    { name: 'SG', lat: 1.3, lon: 103.8, color: '#34d399' },
    { name: 'SiliconValley', lat: 37.4, lon: -122.1, color: '#60a5fa' },
    { name: 'LA', lat: 34.0, lon: -118.2, color: '#a855f7' },
    { name: 'NY', lat: 40.7, lon: -74.0, color: '#f472b6' },
    { name: 'London', lat: 51.5, lon: -0.1, color: '#38bdf8' },
    { name: 'Frankfurt', lat: 50.1, lon: 8.7, color: '#c084fc' },
    { name: 'Seoul', lat: 37.5, lon: 127.0, color: '#22d3ee' },
    { name: 'Taipei', lat: 25.0, lon: 121.5, color: '#818cf8' },
    { name: 'Sydney', lat: -33.9, lon: 151.2, color: '#2dd4bf' },
    { name: 'SaoPaulo', lat: -23.5, lon: -46.6, color: '#fb7185' },
    { name: 'Dubai', lat: 25.2, lon: 55.3, color: '#f59e0b' },
    { name: 'Johannesburg', lat: -26.2, lon: 28.0, color: '#a78bfa' },
    { name: 'Mumbai', lat: 19.1, lon: 72.9, color: '#34d399' }
  ];

  // 2. 悬浮于地表之上的空间网络星座节点 (Orbital Nodes)
  const ORBITAL_NODES = [];
  const orbitalCount = 42; // 增加星座节点数，形成更加丰富的几何多边形网格
  for (let i = 0; i < orbitalCount; i++) {
    const lat = (Math.random() - 0.5) * 140; // -70 ~ 70
    const lon = Math.random() * 360 - 180;
    const altitude = 1.05 + Math.random() * 0.12; // 地表上空 1.05 - 1.17 倍半径
    ORBITAL_NODES.push({
      lat,
      lon,
      altitude,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.012,
      color: Math.random() > 0.45 ? '#e879f9' : '#38bdf8'
    });
  }

  // 3. 专线数据传输脉冲包 (Packets along arcs)
  const PACKETS = [];
  function maybeSpawnPacket(p1, p2) {
    if (PACKETS.length < 15 && Math.random() < 0.04) {
      PACKETS.push({
        p1,
        p2,
        t: 0,
        speed: Math.random() * 0.016 + 0.010,
        color: Math.random() > 0.4 ? '#f472b6' : '#38bdf8'
      });
    }
  }

  // 4. 深空微星背景粒子 (Stars)
  const STARS = [];
  const starCount = 60;
  for (let i = 0; i < starCount; i++) {
    STARS.push({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 1.3 + 0.4,
      baseAlpha: Math.random() * 0.45 + 0.15,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.008,
      color: Math.random() > 0.5 ? 'rgba(192, 132, 252, ' : 'rgba(147, 197, 253, '
    });
  }

  // 陆地散点数据引用
  let landDots = (typeof window !== 'undefined' && window.GLOBE_LAND_DOTS) ? window.GLOBE_LAND_DOTS : [];
  if (!landDots || landDots.length === 0) {
    landDots = [];
    for (let lat = -55; lat <= 70; lat += 3.5) {
      const cosLat = Math.cos(lat * Math.PI / 180);
      const step = 3.5 / Math.max(cosLat, 0.2);
      for (let lon = -180; lon < 180; lon += step) {
        if ((lon > -130 && lon < -60 && lat > -45 && lat < 60) ||
            (lon > -15 && lon < 50 && lat > -35 && lat < 65) ||
            (lon > 60 && lon < 145 && lat > -35 && lat < 65)) {
          landDots.push([lat, lon]);
        }
      }
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // 智能定位：大屏展现气势磅礴的地平线弧度，移动端居中贴合
    if (width >= 1200) {
      R = Math.min(width * 0.44, Math.max(height * 0.54, 420));
      cx = width * 0.48;
      cy = height * 0.50;
    } else if (width >= 768) {
      R = Math.min(width * 0.48, Math.max(height * 0.48, 320));
      cx = width * 0.50;
      cy = height * 0.50;
    } else {
      R = Math.min(width * 0.55, 240);
      cx = width * 0.50;
      cy = height * 0.46;
    }
  }

  // 3D 坐标转换与透视投影核心
  function projectPoint(lat, lon, altitude = 1.0) {
    const phi = (lat * Math.PI) / 180;
    const theta = ((lon + (rotY * 180) / Math.PI) * Math.PI) / 180;
    const curR = R * altitude;

    // 1. 球面直角坐标 (右手系)
    let x0 = curR * Math.cos(phi) * Math.sin(theta);
    let y0 = -curR * Math.sin(phi);
    let z0 = curR * Math.cos(phi) * Math.cos(theta);

    // 2. 地轴 X 轴倾斜
    const effectiveTiltX = tiltX + mouse.y;
    const y1 = y0 * Math.cos(effectiveTiltX) - z0 * Math.sin(effectiveTiltX);
    const z1 = y0 * Math.sin(effectiveTiltX) + z0 * Math.cos(effectiveTiltX);

    // 3. 地轴 Z 轴侧倾
    const effectiveTiltZ = tiltZ + mouse.x;
    const x2 = x0 * Math.cos(effectiveTiltZ) - y1 * Math.sin(effectiveTiltZ);
    const y2 = x0 * Math.sin(effectiveTiltZ) + y1 * Math.cos(effectiveTiltZ);
    const z2 = z1;

    // 4. 透视投影
    const fov = 1200;
    const scale = fov / (fov + z2);
    const screenX = cx + x2 * scale;
    const screenY = cy + y2 * scale;

    return {
      x: x2,
      y: y2,
      z: z2,
      screenX,
      screenY,
      scale,
      isFront: z2 > -15
    };
  }

  // 根据 3D 空间坐标获取拟合参考图的霓虹渐变色彩 (青蓝 -> 亮粉 -> 紫色)
  function getDotColor(p) {
    const t = Math.max(0, Math.min(1, (p.x * 0.65 - p.y * 0.65) / (R * 1.3) + 0.5));
    if (t < 0.35) {
      return '34, 211, 238';  // 电光青 (Cyan)
    } else if (t < 0.70) {
      return '244, 114, 182'; // 亮玫粉 (Hot Pink)
    } else {
      return '168, 85, 247';  // 极客紫 (Neon Violet)
    }
  }

  // 绘制地平线耀斑与大气边缘辉光 (参考图右上角绚丽耀斑)
  function drawAtmosphereAndFlare() {
    const flareAngle = -Math.PI * 0.28;
    const flareDist = R * 0.98;
    const flareX = cx + Math.cos(flareAngle) * flareDist;
    const flareY = cy + Math.sin(flareAngle) * flareDist;

    // 1. 大范围空间紫色/靛蓝暗辉光
    const outerGlow = ctx.createRadialGradient(flareX, flareY, 10, flareX, flareY, R * 0.95);
    outerGlow.addColorStop(0, 'rgba(192, 132, 252, 0.35)');
    outerGlow.addColorStop(0.35, 'rgba(147, 51, 234, 0.18)');
    outerGlow.addColorStop(0.7, 'rgba(59, 130, 246, 0.06)');
    outerGlow.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(flareX, flareY, R * 0.95, 0, Math.PI * 2);
    ctx.fill();

    // 2. 核心玫粉高亮光晕
    const midGlow = ctx.createRadialGradient(flareX, flareY, 3, flareX, flareY, 120);
    midGlow.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
    midGlow.addColorStop(0.18, 'rgba(244, 114, 182, 0.85)');
    midGlow.addColorStop(0.50, 'rgba(192, 132, 252, 0.40)');
    midGlow.addColorStop(1, 'rgba(168, 85, 247, 0)');
    ctx.fillStyle = midGlow;
    ctx.beginPath();
    ctx.arc(flareX, flareY, 120, 0, Math.PI * 2);
    ctx.fill();

    // 3. 耀斑衍射星芒十字长短光芒 (Starburst Spikes)
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 240, 255, 0.75)';
    ctx.lineWidth = 1.4;
    // 水平主芒
    ctx.beginPath();
    ctx.moveTo(flareX - 90, flareY);
    ctx.lineTo(flareX + 90, flareY);
    ctx.stroke();
    // 垂直主芒
    ctx.beginPath();
    ctx.moveTo(flareX, flareY - 90);
    ctx.lineTo(flareX + 90, flareY + 90);
    ctx.stroke();
    // 45度斜芒
    ctx.strokeStyle = 'rgba(244, 114, 182, 0.45)';
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.moveTo(flareX - 50, flareY - 50);
    ctx.lineTo(flareX + 50, flareY + 50);
    ctx.moveTo(flareX - 50, flareY + 50);
    ctx.lineTo(flareX + 50, flareY - 50);
    ctx.stroke();
    ctx.restore();

    // 4. 地球边缘弧形大气发光环 (Rim Light)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R + 1.5, flareAngle - Math.PI * 0.48, flareAngle + Math.PI * 0.48);
    ctx.strokeStyle = 'rgba(192, 132, 252, 0.45)';
    ctx.lineWidth = 3.0;
    ctx.shadowColor = '#e879f9';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.restore();
  }

  // 主循环绘制函数
  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 平滑自转与鼠标交互插值
    rotY += rotSpeed;
    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // 1. 绘制深空微星背景
    for (let i = 0; i < STARS.length; i++) {
      const s = STARS[i];
      s.phase += s.speed;
      const alpha = s.baseAlpha + Math.sin(s.phase) * 0.18;
      ctx.beginPath();
      ctx.arc(s.x * width, s.y * height, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color + Math.max(0.05, alpha) + ')';
      ctx.fill();
    }

    // 2. 绘制地球地平线日出耀斑与大气光晕 (置于底层发光)
    drawAtmosphereAndFlare();

    // 3. 计算并投影所有网络枢纽与空间节点
    const projectedHubs = HUBS.map(h => {
      const p = projectPoint(h.lat, h.lon, 1.01);
      return { ...h, proj: p };
    });

    const projectedOrbitals = ORBITAL_NODES.map(o => {
      const p = projectPoint(o.lat, o.lon, o.altitude);
      return { ...o, proj: p };
    });

    // 4. 绘制陆地散点矩阵 (点阵地球表面)
    for (let i = 0; i < landDots.length; i++) {
      const dot = landDots[i];
      const p = projectPoint(dot[0], dot[1], 1.0);

      let alpha, radius;
      if (p.z > 0) {
        // 正面：靠近视觉中心越亮，立体层次分明
        const zRatio = p.z / R;
        alpha = 0.40 + zRatio * 0.58;
        radius = (1.15 + zRatio * 1.35) * p.scale;
      } else {
        // 背面：弱透明度形成科技全息通透感
        const backRatio = Math.max(0, 1 + p.z / R);
        alpha = 0.09 * backRatio;
        radius = 0.80 * p.scale;
      }

      if (alpha > 0.02) {
        const rgb = getDotColor(p);
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fill();
      }
    }

    // 5. 绘制网络星座拓扑连线 (Constellation Net Arcs)
    ctx.lineWidth = 0.90;
    for (let i = 0; i < projectedHubs.length; i++) {
      const h1 = projectedHubs[i];
      if (h1.proj.z < -R * 0.35) continue;

      // 枢纽之间连线
      for (let j = i + 1; j < projectedHubs.length; j++) {
        const h2 = projectedHubs[j];
        if (h2.proj.z < -R * 0.35) continue;

        const dx = h1.proj.x - h2.proj.x;
        const dy = h1.proj.y - h2.proj.y;
        const dz = h1.proj.z - h2.proj.z;
        const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist3D < R * 1.25) {
          const avgZ = (h1.proj.z + h2.proj.z) / 2;
          const lineAlpha = Math.max(0.06, (avgZ / R + 0.4) * 0.42);
          ctx.beginPath();
          ctx.moveTo(h1.proj.screenX, h1.proj.screenY);
          ctx.lineTo(h2.proj.screenX, h2.proj.screenY);
          ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
          ctx.stroke();

          // 随机触发脉冲流动包
          maybeSpawnPacket(h1.proj, h2.proj);
        }
      }

      // 枢纽与空间星座节点连线
      for (let k = 0; k < projectedOrbitals.length; k++) {
        const o = projectedOrbitals[k];
        if (o.proj.z < -R * 0.3) continue;

        const dx = h1.proj.x - o.proj.x;
        const dy = h1.proj.y - o.proj.y;
        const dist3D = Math.sqrt(dx * dx + dy * dy);

        if (dist3D < R * 0.60) {
          const lineAlpha = Math.max(0.04, (o.proj.z / R + 0.3) * 0.32);
          ctx.beginPath();
          ctx.moveTo(h1.proj.screenX, h1.proj.screenY);
          ctx.lineTo(o.proj.screenX, o.proj.screenY);
          ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha})`;
          ctx.stroke();
        }
      }
    }

    // 空间节点互相连线 (形成参考图特有的多边形星座网络)
    for (let i = 0; i < projectedOrbitals.length; i++) {
      const o1 = projectedOrbitals[i];
      if (o1.proj.z < -R * 0.25) continue;
      for (let j = i + 1; j < projectedOrbitals.length; j++) {
        const o2 = projectedOrbitals[j];
        if (o2.proj.z < -R * 0.25) continue;
        const dx = o1.proj.x - o2.proj.x;
        const dy = o1.proj.y - o2.proj.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < R * 0.42) {
          const lineAlpha = Math.max(0.03, (1 - dist / (R * 0.42)) * 0.26);
          ctx.beginPath();
          ctx.moveTo(o1.proj.screenX, o1.proj.screenY);
          ctx.lineTo(o2.proj.screenX, o2.proj.screenY);
          ctx.strokeStyle = `rgba(192, 132, 252, ${lineAlpha})`;
          ctx.stroke();
        }
      }
    }

    // 6. 绘制空间星座节点 (浮空脉冲小晶体)
    for (let i = 0; i < projectedOrbitals.length; i++) {
      const o = projectedOrbitals[i];
      if (o.proj.z < -R * 0.4) continue;
      o.pulse += o.pulseSpeed;
      const pulseAlpha = 0.4 + Math.sin(o.pulse) * 0.25;
      const alpha = Math.max(0.12, (o.proj.z / R + 0.4) * pulseAlpha);
      const rad = (1.4 + Math.sin(o.pulse) * 0.5) * o.proj.scale;

      ctx.beginPath();
      ctx.arc(o.proj.screenX, o.proj.screenY, rad, 0, Math.PI * 2);
      ctx.fillStyle = o.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    // 7. 绘制主要网络枢纽端点 (带发光光圈)
    for (let i = 0; i < projectedHubs.length; i++) {
      const h = projectedHubs[i];
      if (h.proj.z < -R * 0.25) continue;
      const alpha = Math.max(0.25, (h.proj.z / R + 0.3) * 0.95);

      // 内核亮斑
      ctx.beginPath();
      ctx.arc(h.proj.screenX, h.proj.screenY, 2.6 * h.proj.scale, 0, Math.PI * 2);
      ctx.fillStyle = h.color;
      ctx.globalAlpha = alpha;
      ctx.fill();

      // 外圈光晕
      ctx.beginPath();
      ctx.arc(h.proj.screenX, h.proj.screenY, 5.5 * h.proj.scale, 0, Math.PI * 2);
      ctx.strokeStyle = h.color;
      ctx.globalAlpha = alpha * 0.5;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    }

    // 8. 绘制数据脉冲包 (飞跃网络光子)
    for (let i = PACKETS.length - 1; i >= 0; i--) {
      const pkt = PACKETS[i];
      pkt.t += pkt.speed;
      if (pkt.t >= 1) {
        PACKETS.splice(i, 1);
        continue;
      }
      const curX = pkt.p1.screenX + (pkt.p2.screenX - pkt.p1.screenX) * pkt.t;
      const curY = pkt.p1.screenY + (pkt.p2.screenY - pkt.p1.screenY) * pkt.t;
      const curZ = pkt.p1.z + (pkt.p2.z - pkt.p1.z) * pkt.t;

      if (curZ > -R * 0.2) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      }
    }

    animId = requestAnimationFrame(draw);
  }

  // 页面离开时智能暂停节约资源
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animId) cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(draw);
    }
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  });

  resize();
  draw();
}
