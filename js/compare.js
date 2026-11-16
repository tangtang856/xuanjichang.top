// 选机场网 (xuanjichang.top) - 在线机场横向对比工具交互
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('compare-app');
  if (!container || !window.AIRPORTS_DATA) return;

  const airports = window.AIRPORTS_DATA;
  // 默认对比前 3 个
  let selectedIds = airports.slice(0, 3).map(a => a.id);

  function getRelativePrefix() {
    // 根据当前页面路径判断相对根目录层级
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/compare/')) return '../';
    return '';
  }

  function renderSelectors() {
    const selectorBox = document.getElementById('airport-selector-box');
    if (!selectorBox) return;

    selectorBox.innerHTML = `
      <div style="margin-bottom: 1.5rem; background: var(--bg-card); padding: 1.25rem; border: 1px solid var(--border-light); border-radius: var(--radius-md);">
        <h3 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-main);">选择对比品牌（支持勾选 2 - 4 家机场进行全维度参数横向PK）</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          ${airports.map(ap => {
            const isChecked = selectedIds.includes(ap.id);
            return `
              <label style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid ${isChecked ? 'var(--primary)' : 'var(--border-light)'}; background: ${isChecked ? 'var(--primary-light)' : 'var(--bg-subtle)'}; cursor: pointer; font-size: 0.9rem; font-weight: 500;">
                <input type="checkbox" value="${ap.id}" ${isChecked ? 'checked' : ''} style="accent-color: var(--primary);" />
                ${ap.name} (${ap.startingPrice}元起)
              </label>
            `;
          }).join('')}
        </div>
        <p style="font-size: 0.825rem; color: var(--text-muted); margin-top: 0.75rem; margin-bottom: 0;">提示：如勾选少于2家，系统将自动提示无法形成对比。</p>
      </div>
    `;

    // 绑定事件
    selectorBox.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.value;
        if (e.target.checked) {
          if (selectedIds.length >= 4) {
            alert('最多支持同时对比 4 家机场，请先取消勾选其他品牌。');
            e.target.checked = false;
            return;
          }
          if (!selectedIds.includes(id)) selectedIds.push(id);
        } else {
          if (selectedIds.length <= 2) {
            alert('至少保留 2 家机场进行对比。');
            e.target.checked = true;
            return;
          }
          selectedIds = selectedIds.filter(item => item !== id);
        }
        renderTable();
        renderSelectors();
      });
    });
  }

  function renderTable() {
    const tableContainer = document.getElementById('compare-table-container');
    if (!tableContainer) return;

    if (selectedIds.length < 2) {
      tableContainer.innerHTML = '<div class="callout callout-warning">请至少选择 2 家机场展开对比。</div>';
      return;
    }

    const prefix = getRelativePrefix();
    const items = airports.filter(a => selectedIds.includes(a.id));

    let html = `
      <div class="table-responsive">
        <table class="data-table" style="min-width: 800px;">
          <thead>
            <tr>
              <th style="width: 160px;">对比维度</th>
              ${items.map(it => `
                <th style="text-align: center; font-size: 1.1rem; color: var(--primary);">
                  ${it.name}
                  <div style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted); margin-top: 0.25rem;">
                    起步价: ¥${it.startingPrice} / 月
                  </div>
                  ${it.coupon ? `<div style="margin-top: 0.35rem;"><span class="badge badge-orange" style="font-size: 0.725rem;">券: ${it.coupon} (永久有效)</span></div>` : ''}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">专属优惠码与有效性</td>
              ${items.map(it => `
                <td style="text-align: center; font-size: 0.85rem;">
                  ${it.coupon ? `<strong style="color: #fb923c; font-family: monospace;">${it.coupon}</strong> <span class="badge badge-green" style="font-size: 0.7rem; margin-left: 0.25rem;">永久有效</span>` : '<span style="color: var(--text-muted);">官方暂无折扣券</span>'}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">实测数据保真</td>
              ${items.map(it => `
                <td style="text-align: center; font-size: 0.8rem; color: #34d399;">
                  🛡️ 站长自费真机实测（100%真实数据）
                </td>
              `).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">线路架构类型</td>
              ${items.map(it => `<td style="text-align: center;"><strong>${it.lineType}</strong></td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">每GB流量单价 (起步套餐)</td>
              ${items.map(it => {
                const plan = it.plans[0];
                return `<td style="text-align: center;"><span style="color: var(--primary); font-weight: 700;">¥${plan.costPerGB.toFixed(3)}</span> / GB</td>`;
              }).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">节点地区分布</td>
              ${items.map(it => `<td style="text-align: center; font-size: 0.85rem;">${it.regions.join('、')}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">支持协议</td>
              ${items.map(it => `<td style="text-align: center; font-size: 0.85rem;">${it.protocols.join(' / ')}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">同时在线设备限制</td>
              ${items.map(it => `<td style="text-align: center;">${it.deviceLimit}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">AI (ChatGPT/Claude)</td>
              ${items.map(it => `<td style="text-align: center; font-size: 0.85rem; color: var(--text-body);">${it.aiSupport.join('、')}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">4K流媒体解锁</td>
              ${items.map(it => `<td style="text-align: center; font-size: 0.85rem;">${it.streamingSupport.slice(0, 3).join('、')}</td>`).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">核心优势</td>
              ${items.map(it => `
                <td style="font-size: 0.85rem; vertical-align: top;">
                  <ul style="padding-left: 1rem; margin: 0;">
                    ${it.advantages.slice(0, 2).map(adv => `<li style="margin-bottom: 0.3rem;">${adv}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">注意事项与缺点</td>
              ${items.map(it => `
                <td style="font-size: 0.85rem; vertical-align: top; color: var(--text-muted);">
                  <ul style="padding-left: 1rem; margin: 0;">
                    ${it.disadvantages.slice(0, 2).map(dis => `<li style="margin-bottom: 0.3rem;">${dis}</li>`).join('')}
                  </ul>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">适合人群</td>
              ${items.map(it => `
                <td style="font-size: 0.85rem; text-align: center;">
                  ${it.suitableFor[0]}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td style="font-weight: 700; background: var(--bg-subtle);">独立深度评测与官网</td>
              ${items.map(it => `
                <td style="text-align: center;">
                  <a href="${prefix}review/${it.slug}/index.html" class="btn btn-outline btn-sm" style="display: block; margin-bottom: 0.4rem;">查看评测报告</a>
                  <a href="${it.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="display: block;">前往官网直达</a>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    tableContainer.innerHTML = html;
  }

  renderSelectors();
  renderTable();
});
