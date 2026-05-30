# ⛏ 普術迴綻 · Minecraft Boss 版 v2.0
**115 夏令營 · 地下鐵 Boss 大戰**

---

## 📋 v2.0 改善清單

| # | 問題 | 修正方式 |
|---|------|---------|
| 1 | 苦力怕動畫每次只播一次 | **移除 sessionStorage 限制**，每次進入頁面皆播放 |
| 2 | 印記斷裂（index ↔ leaderboard 不同步） | **兩頁共用 `mc_lb_v1`**，index.html 唯讀顯示，每 10 秒自動同步 |
| 3 | 密碼硬寫前端原始碼 | 加入明顯警告提示，README 說明修改方式 |
| 4 | 地圖沒有真實導航功能 | **每個站點加入導航按鈕**，自動判斷 iOS/Android 開啟 Maps |
| 5 | 緊急集合無一鍵導航 | 新增「🆘 緊急集合：淡水站 1 號出口」按鈕 |
| 6 | iOS Hotbar 被系統手勢條遮住 | **`padding-bottom: max(8px, env(safe-area-inset-bottom))`** |
| 7 | 無障礙缺席 | 加入 `aria-label`、`role`、`aria-pressed`、`aria-live`、`focus-visible` ring |
| 8 | `div` 當按鈕 | 選隊按鈕改為語義 `<button>` |
| 9 | 證書分享在 iOS/桌面失效 | **`navigator.share` → `window.print()` → 截圖** 三層 fallback |
| 10 | 沒有離線支援 | 新增 **Service Worker** + **manifest.json**，所有 HTML/CSS/JS 離線可用 |

---

## 📁 檔案結構

```
/
├── index.html          ← 主任務頁（苦力怕進場 + Hotbar 導覽）
├── rules.html          ← 衛道士手冊 / 行動守則
├── leaderboard.html    ← 豬布林金幣台 / 排行榜（輔導員後台）
├── map.html            ← 界域地圖 + 一鍵導航按鈕
├── certificate.html    ← 終界龍之証 / 冠軍證書
├── manifest.json       ← PWA 設定（可加到主畫面）
├── sw.js               ← Service Worker（離線快取）
├── css/main.css        ← 共用 Minecraft 樣式
├── js/common.js        ← 共用功能
└── assets/             ← 放圖片資源
```

---

## ⚙️ 部署前必改

### 1. 管理員密碼（高優先級！）
`leaderboard.html` 搜尋：
```javascript
const ADMIN_PASS = '115仁愛';
```
改成隊輔知道、學員猜不到的密碼。  
⚠️ 密碼仍存在前端，勿用個人隱私密碼。

### 2. 緊急聯絡電話
`rules.html` 搜尋 `0900-000-001`，換成真實電話。

### 3. Service Worker 路徑
若部署在子目錄（如 `https://你的帳號.github.io/mc-camp/`），
`sw.js` 中的 ASSETS 路徑改為：
```javascript
const ASSETS = [
  '/mc-camp/',
  '/mc-camp/index.html',
  // ...
];
```
並在各 HTML 的 SW 註冊改為：
```javascript
navigator.serviceWorker.register('/mc-camp/sw.js')
```

### 4. PWA 圖示
將 Minecraft 草方塊圖示放在 `assets/icon-192.png` 和 `assets/icon-512.png`。
（暫缺時 manifest 不影響主功能）

---

## 🐛 已知限制（v2.0 未解決）

- **分數多裝置同步**：仍依賴 localStorage，換裝置資料不同步。  
  → 根本解法：需要後端（Google Sheets API 或 Firebase）。
- **管理員密碼安全性**：前端無法真正保護密碼，F12 仍可看到。  
  → 根本解法：後端驗證。
- **字型離線**：Press Start 2P 從 Google Fonts 載入，純離線環境降級為系統 monospace。

---

## 🚀 上傳到 GitHub Pages

1. 解壓縮，取出所有檔案（含 css/ js/ 資料夾）
2. 建立 Public GitHub Repository
3. 上傳所有檔案
4. Settings → Pages → Source 選 `main` branch
5. 等 1-2 分鐘網站上線

---

**普仁青年關懷基金會 115 年夏令營**
