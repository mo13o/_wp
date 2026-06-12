# 🗂 homework 總目錄

**學生**：黃俞蓁  
**學校**：國立金門大學 資訊工程學系  
**學期**：114 學年下學期 網頁設計

```
C:\Users\user\Desktop\新增資料夾\_wp\homework\
```

---

## 目錄結構

| # | 資料夾 | 對應週次 | 主題 | 核心技術 |
|---|--------|---------|------|---------|
| 1 | [`01/`](#01) | Week 01 | HTML 基礎：個人簡介頁面 | CSS 變數、Flexbox、vh |
| 2 | [`02/`](#02) | Week 02 | HTML 表單設計 | 15+ input 類型、label、驗證 |
| 3 | [`03/`](#03) | Week 03 | JavaScript 入門 | Node.js、console.log |
| 4 | [`04/`](#04) | Week 04 | JavaScript 基礎語法 | if/else、for、while、陣列、物件、JSON |
| 5 | [`05/`](#05) | Week 05 | Node.js + Express 網誌系統 | CRUD、SQLite、Session、bcrypt、EJS |
| 6 | [`06/`](#06) | Week 06 | 進階函數與陣列操作 | Callback、IIFE、Closure、map/filter/reduce |
| 7 | [`07/`](#07) | Week 07 | 物件操作與後端模式 | 解構賦值、Error-First Callback、樣板字串 |
| 8 | [`期中/`](#期中) | 期中考 | ShopStore 一頁式商店 | localStorage、DOM、Modal、評價系統 |
| 9 | [`期末/`](#期末) | 期末考 | 統整筆記 + 總覽頁面 | 01-07 全概念統整、RWD 總覽網站 |

---

## 01/

> **HTML 基礎：個人簡介頁面** — 使用 CSS 變數與 Flexbox 建立置中卡片

| 檔案 | 說明 |
|------|------|
| `aboutme.html` | 個人簡介頁面（姓名、學校、興趣標籤、自我期許） |

**重點語法：** `:root` 變數、`display: flex`、`justify-content: center`、`align-items: center`、`min-height: 100vh`、`transition`、`border-radius`、`box-shadow`

---

## 02/

> **HTML 產品體驗回饋表單** — 涵蓋 15+ 種 input 類型

| 檔案 | 說明 |
|------|------|
| `form.html` | 完整產品回饋表單（文字、Email、電話、密碼、數字、日期、時間、單選、複選、滑桿、顏色、網址、檔案上傳、多行文字） |

**重點語法：** `input` 類型總覽、`label for`、`radio` 互斥、`:focus` 樣式、`box-sizing: border-box`

---

## 03/

> **JavaScript 入門** — Node.js 環境的第一支程式

| 檔案 | 說明 |
|------|------|
| `hello.js` | Hello World 輸出（`console.log('hello 你好')`） |

**執行方式：** `node hello.js`

---

## 04/

> **JavaScript 基礎練習** — 10 個由淺入深的 JS 題目

| 檔案 | 說明 |
|------|------|
| `01.js` ~ `10.js` | 10 個 JS 練習（條件判斷、迴圈、陣列、物件、JSON） |
| `README.md` | 詳細題目說明與執行方式 |

| # | 練習主題 |
|---|---------|
| 01 | 條件判斷：檢查分數是否及格 |
| 02 | 陣列與迴圈：計算陣列總和 |
| 03 | 未知次數迴圈：擲骰子直到出現 6 |
| 04 | 物件操作：建立員工資料物件 |
| 05 | 陣列結合物件：篩選高薪員工 |
| 06 | JSON 解析與轉換：修改 JSON 狀態 |
| 07 | 陣列尋找：while 找第一個負數 |
| 08 | 複雜物件走訪：找管理員名單 |
| 09 | 資料重組：合併為結構化物件陣列 |
| 10 | 綜合挑戰：解析 JSON 日誌與統計 |

---

## 05/

> **DC Blog 網誌系統** — Node.js + Express + SQLite，五版演進

| 檔案 / 資料夾 | 說明 |
|--------------|------|
| `部落格介紹.md` | 用戶面向的版本功能介紹 |
| `代碼細節.md` | 技術架構說明（DB schema、路由表、Middleware） |
| `對話紀錄.md` | 開發過程完整對話紀錄 |
| `blog/` | 基礎版 CRUD（無認證） |
| `blog1/` | 加入會員註冊/登入/登出（bcrypt + session） |
| `blog2/` | Dcard 卡片風格 UI + 導航列 |
| `blog3/` | 作者個人頁面（`/user/:id`） |
| `blog4/` | 板塊分類系統（心情/男女/職業/學生） |
| `node_modules/` | npm 依賴套件（110 個） |

**快速啟動：**
```bash
cd blog4
npm install
npm start
# 開啟 http://localhost:3000
```

**技術棧：** Express.js、SQLite（better-sqlite3）、EJS 模板、bcrypt、express-session

---

## 06/

> **進階 JavaScript 練習** — 10 題函數式與陣列操作

| 檔案 | 說明 |
|------|------|
| `01.js` ~ `10.js` | 10 個進階 JS 練習 |
| `README.md` | 詳細題目說明與執行方式 |

| # | 練習主題 |
|---|---------|
| 01 | Callback 回呼函數基礎 |
| 02 | IIFE 立即呼叫函數 |
| 03 | 箭頭函數 + map |
| 04 | Pass-by-Reference 傳址變異 |
| 05 | 高階函數 / 閉包 |
| 06 | 自訂 filter 回呼 |
| 07 | 箭頭函數 + 物件 |
| 08 | 重新賦值 vs 變異 |
| 09 | setTimeout 回呼 |
| 10 | reduce + 回呼綜合練習 |

> ⚠️ `02,js` 檔名含逗號（`02,js` 而非 `02.js`）— 瀏覽器連結可能失效

---

## 07/

> **物件操作與後端模式練習** — 10 題物件／後端常用模式

| 檔案 | 說明 |
|------|------|
| `01.js` ~ `10.js` | 10 個物件/後端模式練習 |
| `README.md` | 詳細題目說明與執行方式 |

| # | 練習主題 |
|---|---------|
| 01 | 物件屬性存取（點符號 vs 括號） |
| 02 | 物件解構賦值 |
| 03 | forEach + 樣板字串 |
| 04 | 字典 / URL 參數處理 |
| 05 | Error-First Callback |
| 06 | JSON 解析 |
| 07 | 模擬資料庫查詢 |
| 08 | 樣板字串 + 三元運算子 |
| 09 | map + substring |
| 10 | Error-First Callback 綜合 |

---

## 期中/

> **ShopStore 一頁式商店註冊系統** — 期中考專案

| 檔案 | 說明 |
|------|------|
| `store.html` | 一頁式商店（商品列表、搜尋、會員系統、購買、評價、每日獎勵） |
| `readme.md` | 技術筆記（localStorage、DOM 操作、事件監聽等） |

**核心技術：**
- `localStorage` 模擬資料庫（會員、評價、購買紀錄）
- `JSON.stringify / parse` 資料持久化
- `element.innerHTML` 動態渲染
- `element.style.display` 控制 Modal 彈窗
- `classList.add / remove` 星星評分切換
- `Array.filter` 即時搜尋
- `window.onload` 初始化

> 本作業使用 AI（Gemini）輔助開發

---

## 期末/

> **期末統整 + 作業總覽網站**

| 檔案 | 說明 |
|------|------|
| `README.md` | 01-07 全部程式概念統整筆記（493 行） |
| `index.html` | 一頁式作業總覽網站（RWD 卡片式瀏覽） |

**統整筆記涵蓋：**
- 每週主題摘要
- 重要語法表格
- 程式碼範例
- 容易出錯的常見陷阱
- 跨週核心概念對照表

**總覽網站特點：**
- 橫幅式卡片佈局（icon + 內容 + 按鈕）
- 響應式設計（桌機／手機）
- Hover 展開額外程式碼與提示

---

## 索引

| 類型 | 數量 |
|------|------|
| HTML 頁面 | 4（`aboutme.html`、`form.html`、`store.html`、期末 `index.html`） |
| JavaScript 檔案 | 31（`hello.js` + 04/01~10 + 06/01~10 + 07/01~10） |
| Markdown 文件 | 8（04/README、部落格介紹、代碼細節、對話紀錄、06/README、07/README、期中/readme、期末/README） |
| Express 專案 | 5 個版本（blog ~ blog4） |
| 總覽網站 | 1（`index.html`，含 homework/ 與 期末/ 兩份同步版本） |
