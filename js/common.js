/* ═══════════════════════════════════════════════
   普術迴綻 · Minecraft 版 共用 JS v2.0
   修正：
   - 苦力怕動畫每次進入頁面皆可重播（移除 sessionStorage 限制）
   - 印記同步：index.html 與 leaderboard 使用同一 key (mc_lb_v1)
   - iOS safe-area Hotbar 已在 CSS 處理
   - 新增 openMaps() 導航輔助
   ═══════════════════════════════════════════════ */

// ── 方塊粒子系統 ──
function initBlockParticles(n=18, color='#4a9a4a') {
  const c = document.getElementById('pts');
  if (!c || c.children.length > 2) return;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const size = 3 + Math.floor(Math.random() * 3) * 2;
    p.style.cssText = [
      `left:${Math.random()*100}%`,
      `width:${size}px`,
      `height:${size}px`,
      `background:${color}`,
      `animation-duration:${8+Math.random()*12}s`,
      `animation-delay:${Math.random()*10}s`,
      `--dx:${(Math.random()-.5)*60}px`,
      `--rot:${Math.floor(Math.random()*4)*90}deg`,
      `image-rendering:pixelated`,
    ].join(';');
    c.appendChild(p);
  }
}

// ── Toast ──
function showToast(msg, type='', dur=2400) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `show${type ? ' '+type : ''}`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), dur);
}

// ── Creeper 進場動畫（每次進入頁面都播放，移除 sessionStorage）──
function initCreeperIntro(onDone) {
  const el = document.getElementById('mc-intro');
  if (!el) return;
  // 直接播放，不再用 sessionStorage 跳過
  setTimeout(() => {
    el.classList.add('fade-out');
    setTimeout(() => {
      el.classList.add('gone');
      if (onDone) onDone();
    }, 700);
  }, 2400);
}

// ── Hotbar 高亮 ──
function initHotbar() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#hotbar .hb-slot').forEach(item => {
    const href = (item.getAttribute('href') || '').split('/').pop();
    item.classList.remove('active');
    if (!href) return;
    if (href === path) item.classList.add('active');
    if ((path === '' || path === 'index.html') && href === 'index.html') item.classList.add('active');
  });
}

// ── HP Hearts 渲染 ──
function renderHearts(score, maxScore, container) {
  const totalHearts = Math.ceil(maxScore / 2);
  const filledHearts = Math.floor(score / 2);
  const halfHeart = score % 2 === 1;
  let html = '';
  for (let i = 0; i < totalHearts; i++) {
    if (i < filledHearts) {
      html += '<span class="hp-heart" aria-hidden="true">❤️</span>';
    } else if (i === filledHearts && halfHeart) {
      html += '<span class="hp-heart half" aria-hidden="true">🩷</span>';
    } else {
      html += '<span class="hp-heart empty" aria-hidden="true">❤️</span>';
    }
  }
  container.innerHTML = html;
}

// ── 物品槽印記更新（從 mc_lb_v1 讀取，與 leaderboard 共用同一資料）──
function updateSeals(seals) {
  const map = { a: 'seal-a', b: 'seal-b', c: 'seal-c', d: 'seal-d' };
  Object.entries(map).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (seals[key]) {
      el.classList.remove('locked');
      el.classList.add('unlocked');
    } else {
      el.classList.remove('unlocked');
      el.classList.add('locked');
    }
  });
}

// ── 開啟地圖導航（Google Maps / Apple Maps fallback）──
function openMaps(query) {
  const encoded = encodeURIComponent(query);
  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);
  const url = isIOS
    ? `maps://maps.apple.com/?q=${encoded}`
    : `https://maps.google.com/?q=${encoded}`;
  window.open(url, '_blank');
}

// ── DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', () => {
  initBlockParticles();
  initHotbar();
});
