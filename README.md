# ⛏ 普術迴綻 · Minecraft Boss 版
**115 夏令營 · 地下鐵 Boss 大戰**

---

## 📁 檔案結構

```
/
├── index.html          ← 主任務頁（苦力怕進場 + Hotbar 導覽）
├── rules.html          ← 衛道士手冊 / 行動守則
├── leaderboard.html    ← 豬布林金幣台 / 排行榜
├── map.html            ← 界域地圖 / Boss 據點
├── certificate.html    ← 終界龍之証 / 冠軍證書
├── css/main.css        ← 共用 Minecraft 樣式
├── js/common.js        ← 共用功能
└── assets/             ← 放圖片資源（可選）
```

---

## 🎮 Boss 對應

| Boss | 頁面 | 站點 | 功能 |
|------|------|------|------|
| 💚 苦力怕 | index.html | R28 淡水 | 開場動畫 + 主任務 |
| 🪓 衛道士 | rules.html | R27 紅樹林 | 掠奪者手冊守則 |
| 💀 凋零怪 | map.html | R26 竹圍 | Boss 據點地圖 |
| 🐗 豬布林 | leaderboard.html | 15:00 逆轉 | 金幣台排行榜 |
| 💨 凋零 | index.html | R25 關渡 | 終極 Boss 關卡 |
| 🐲 終界龍 | certificate.html | 19:00 頒獎 | 龍之証證書 |

---

## 🚀 上傳到 GitHub Pages

1. 解壓縮，取出所有檔案（含 css/ js/ 資料夾）
2. 建立 Public GitHub Repository
3. 上傳所有檔案
4. Settings → Pages → Source 選 `main` branch
5. 等 1-2 分鐘網站上線

---

## ⚙️ 需要修改的地方

### 1. 緊急聯絡電話
`rules.html` 搜尋 `0900-000-001`，換成真實電話。

### 2. 管理員密碼
`leaderboard.html` 搜尋：
```javascript
const ADMIN_PASS = '115仁愛';
```
改成你要的密碼。

### 3. 字型載入（Press Start 2P）
已在 `css/main.css` 透過 Google Fonts 載入，需要網路連線。

---

## 🎨 設計特色

- **Press Start 2P** 像素字型（標題/按鈕）
- **VT323** 復古終端字型（內文）
- **Hotbar** 物品欄底部導覽
- **方塊粒子**背景特效
- **苦力怕像素臉**開場動畫
- **附魔台**管理員面板
- **HP 愛心**積分系統
- **物品槽**印記格子
- **石頭紋路**格線背景

---

**普仁青年關懷基金會 115 年夏令營**
