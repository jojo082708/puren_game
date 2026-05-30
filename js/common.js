/* ═══════════════════════════════════════════════
   普術迴綻 · Minecraft 版 共用 JS
   ═══════════════════════════════════════════════ */

// ── 方塊粒子系統 ──
function initBlockParticles(n=18, color='#4a9a4a') {
  const c = document.getElementById('pts');
  if (!c || c.children.length > 2) return;
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const size = 3 + Math.floor(Math.random() * 3) * 2; // 3,5,7px – pixel sizes
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

// ── Creeper 進場動畫 ──
function initCreeperIntro(onDone) {
  const el = document.getElementById('mc-intro');
  if (!el) return;
  if (sessionStorage.getItem('mcIntroShown')) {
    el.classList.add('gone');
    if (onDone) onDone();
    return;
  }
  setTimeout(() => {
    el.classList.add('fade-out');
    sessionStorage.setItem('mcIntroShown', '1');
    setTimeout(() => {
      el.classList.add('gone');
      if (onDone) onDone();
    }, 700);
  }, 2600);
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
      html += '<span class="hp-heart">❤️</span>';
    } else if (i === filledHearts && halfHeart) {
      html += '<span class="hp-heart half">🩷</span>';
    } else {
      html += '<span class="hp-heart empty">❤️</span>';
    }
  }
  container.innerHTML = html;
}

// ── 物品槽印記更新 ──
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

// ── DOMContentLoaded ──
document.addEventListener('DOMContentLoaded', () => {
  initBlockParticles();
  initHotbar();
});
