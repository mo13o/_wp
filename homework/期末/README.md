# 01-07 程式概念統整

> 學生：黃俞蓁 | 國立金門大學 資訊工程學系

這個資料夾包含網頁設計相關作業、練習、範例和專案作品，主要用於紀錄課程實作內容與提交作品，且全都由AI完成。
本學期作業大部分使用gemini加上opencode完成，我主要是在對AI敘述內容並對AI指令做調整。

---

## 目錄

1. [Week 01 — HTML 基礎：個人簡介頁面](#week-01--html-基礎個人簡介頁面)
2. [Week 02 — HTML 表單](#week-02--html-表單)
3. [Week 03 — JavaScript 入門](#week-03--javascript-入門)
4. [Week 04 — JavaScript 基礎語法](#week-04--javascript-基礎語法)
5. [Week 05 — Node.js + Express 網誌系統](#week-05--nodejs--express-網誌系統)
6. [Week 06 — JavaScript 進階函數與陣列操作](#week-06--javascript-進階函數與陣列操作)
7. [Week 07 — JavaScript 物件操作與後端模式](#week-07--javascript-物件操作與後端模式)

---

## Week 01 — HTML 基礎：個人簡介頁面

**主題**：使用 HTML + CSS 設計個人簡介頁面，練習現代 CSS 排版與設計技巧。

### 重要語法

| 語法 | 說明 |
|------|------|
| `:root { --變數名稱: 值; }` | CSS 自訂屬性（變數），方便統一管理顏色與主題 |
| `var(--變數名稱)` | 在 CSS 中使用自訂變數 |
| `display: flex;` | Flexbox 排版，讓子元素自動排列 |
| `justify-content: center;` | Flexbox 水平置中 |
| `align-items: center;` | Flexbox 垂直置中 |
| `min-height: 100vh;` | 設定最小高度為整個視窗高度 |
| `box-shadow` | 設定區塊陰影，增加立體感 |
| `transition: property 時間 ease` | 設定 CSS 動畫過渡效果 |
| `border-radius: 15px;` | 圓角邊框 |
| `letter-spacing` | 文字間距 |
| `hover` 偽類 | 滑鼠移入時觸發樣式改變 |

### 範例說明

```css
:root {
    --primary-color: #2c3e50;
    --accent-color: #3498db;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.container:hover {
    transform: translateY(-5px);
}
```

### 容易出錯的地方

- `min-height: 100vh` 忘記設定時，body 可能無法滿版置中
- CSS 變數名稱需以 `--` 開頭，取值用 `var(--name)`
- Flexbox 的 `justify-content` 與 `align-items` 方向容易搞混

---

## Week 02 — HTML 表單

**主題**：使用各種 HTML 表單元件建立產品回饋表單。

### 重要語法

| 語法 | 說明 |
|------|------|
| `<form action="#" method="POST">` | 表單容器，action 為送出目標 |
| `<label for="id">` | 標籤，for 對應 input 的 id |
| `<input type="text">` | 單行文字輸入 |
| `<input type="email">` | 電子郵件（瀏覽器自動驗證格式） |
| `<input type="tel">` | 電話號碼 |
| `<input type="password">` | 密碼輸入（內容隱藏） |
| `<input type="number">` | 數字輸入（可設 min/max） |
| `<input type="date">` / `type="time"` | 日期 / 時間選取器 |
| `<input type="radio">` | 單選按鈕（同 name 為一組） |
| `<input type="checkbox">` | 複選框 |
| `<input type="range">` | 滑桿（可設 min/max/step） |
| `<input type="color">` | 顏色選取器 |
| `<input type="url">` | 網址輸入（瀏覽器自動驗證） |
| `<input type="file">` | 檔案上傳 |
| `<textarea>` | 多行文字輸入區 |
| `<select>` / `<option>` | 下拉選單 |
| `<input type="submit">` / `type="reset"` | 送出 / 重設按鈕 |
| `:focus` 偽類 | 表單元件取得焦點時的樣式 |
| `box-sizing: border-box` | 讓 padding 與 border 包含在 width 內 |

### 範例說明

```html
<form action="#" method="POST">
    <label for="email">電子郵件</label>
    <input type="email" id="email" name="email" required>

    <label>滿意度</label>
    <input type="radio" name="satisfaction" value="good"> 滿意
    <input type="radio" name="satisfaction" value="poor"> 不滿意

    <input type="submit" value="送出">
</form>
```

### 容易出錯的地方

- `label` 的 `for` 屬性需對應 `input` 的 `id`（不是 name）
- 同組 radio 必須有相同的 `name` 才能互斥
- `required` 屬性可做基本驗證，但後端仍須檢查
- `box-sizing: border-box` 忘記設定時，寬度計算容易跑版

---

## Week 03 — JavaScript 入門

**主題**：Node.js 環境基本輸出。

### 重要語法

| 語法 | 說明 |
|------|------|
| `console.log('訊息')` | 在終端機輸出文字 |

### 範例說明

```javascript
console.log('hello 你好')
```

### 容易出錯的地方

- Node.js 中沒有瀏覽器的 `document` 或 `window` 物件
- 字串可用單引號 `'`、雙引號 `"` 或反引號 `` ` ``

---

## Week 04 — JavaScript 基礎語法

**主題**：條件判斷、迴圈、陣列、物件、JSON 處理。

### 重要語法

| 語法 | 說明 |
|------|------|
| `if (條件) { ... } else { ... }` | 條件判斷 |
| `for (let i = 0; i < n; i++)` | 計次迴圈 |
| `while (條件) { ... }` | 條件式迴圈 |
| `function 名稱(參數) { ... }` | 函式宣告 |
| `Array.push(元素)` | 在陣列末端加入元素 |
| `Array.length` | 陣列長度 |
| `for (let key in obj)` | 走訪物件的所有鍵 |
| `JSON.parse(字串)` | 將 JSON 字串轉為 JavaScript 物件 |
| `JSON.stringify(物件)` | 將 JavaScript 物件轉為 JSON 字串 |
| `Math.random()` | 產生 0~1 之間的亂數 |
| `Math.floor()` | 無條件捨去小數 |

### 範例說明

**if/else 條件判斷：**
```javascript
function checkScore(score) {
    if (score >= 60) {
        return "及格";
    } else {
        return "不及格";
    }
}
```

**for 迴圈加總陣列：**
```javascript
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
```

**while 迴圈（擲骰子直到出現 6）：**
```javascript
function rollUntilSix() {
    let count = 0, dice = 0;
    while (dice !== 6) {
        dice = Math.floor(Math.random() * 6) + 1;
        count++;
    }
    return count;
}
```

**JSON 解析與轉換：**
```javascript
function updateJsonData(jsonString) {
    let userObj = JSON.parse(jsonString);
    userObj.isActive = true;
    return JSON.stringify(userObj);
}
```

**for-in 物件走訪：**
```javascript
function printRoles(rolesObj) {
    let admins = [];
    for (let user in rolesObj) {
        if (rolesObj[user] === "admin") {
            admins.push(user);
        }
    }
    return admins;
}
```

### 容易出錯的地方

- `for` 迴圈的 `i < array.length` 條件容易寫成 `<=` 導致索引超出範圍
- `while` 迴圈容易忘記更新條件變數而形成無窮迴圈
- `JSON.parse()` 要求字串必須是合法的 JSON 格式（鍵名需用雙引號）
- `for...in` 走訪的是物件的**鍵名**（字串），不是值
- `Math.floor(Math.random() * 6) + 1` 才能產生 1~6 的整數亂數

---

## Week 05 — Node.js + Express 網誌系統

**主題**：使用 Express + SQLite + EJS 建立具會員系統的網誌平台（5 個版本逐步進化）。

### 重要語法

| 語法 | 說明 |
|------|------|
| `express()` | 建立 Express 應用程式 |
| `app.set('view engine', 'ejs')` | 設定 EJS 模板引擎 |
| `app.use(express.urlencoded({ extended: true }))` | 解析表單資料 |
| `app.use(session({...}))` | 啟用 session 管理 |
| `app.get('/path', (req, res) => { ... })` | 定義 GET 路由 |
| `app.post('/path', (req, res) => { ... })` | 定義 POST 路由 |
| `res.render('view', { data })` | 渲染 EJS 視圖並傳遞資料 |
| `res.redirect('/path')` | 重新導向 |
| `db.prepare(sql).run(params)` | 執行 SQL（寫入） |
| `db.prepare(sql).get(params)` | 查詢單筆資料 |
| `db.prepare(sql).all(params)` | 查詢多筆資料 |
| `bcrypt.hash(密碼, saltRounds)` | 密碼雜湊 |
| `bcrypt.compare(密碼, hash)` | 密碼比對驗證 |
| `req.session.userId` | session 中儲存使用者 ID |
| `res.locals` | 在 middleware 中傳遞變數到所有視圖 |

### 版本演進

| 版本 | 新增功能 |
|------|----------|
| blog | 基礎 CRUD（新增/列表/檢視/編輯/刪除文章） |
| blog1 | 會員系統（註冊/登入/登出） |
| blog2 | Dcard 卡片風格 UI + 作者個人頁面 |
| blog3 | 板塊分類系統（心情/男生/女生/職業/學生） |
| blog4 | 同 blog3，穩定版本 |

### 資料庫結構

```sql
-- users 表
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- posts 表
CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER REFERENCES users(id),
    board_id INTEGER REFERENCES boards(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- boards 表（blog3+）
CREATE TABLE boards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    label TEXT NOT NULL
);
```

### Middleware 範例

```javascript
function requireAuth(req, res, next) {
    if (!req.session.userId) return res.redirect('/login');
    next();
}
```

### 容易出錯的地方

- `express.urlencoded` 必須設定才能讀取表單 `req.body`
- `better-sqlite3` 是同步操作，不需 `async/await`
- session secret 應使用環境變數，不該寫在程式中
- 編輯/刪除文章時需檢查 `author_id` 是否為當前使用者
- EJS 中若 `user` 為 `null` 直接存取 `user.name` 會報錯
- `updated_at` 欄位需在更新時手動設定 `CURRENT_TIMESTAMP`

---

## Week 06 — JavaScript 進階函數與陣列操作

**主題**：回呼函數、箭頭函數、高階函數、閉包、傳址觀念。

### 重要語法

| 語法 | 說明 |
|------|------|
| `function(a, b, callback) { callback(result); }` | 回呼函數（Callback） |
| `(function() { ... })()` | IIFE（立即執行函數表達式） |
| `(參數) => 表達式` | 箭頭函數（單行可省略 return） |
| `arr.map(x => x * 2)` | 對每個元素轉換，回傳新陣列 |
| `arr.filter(x => x > 5)` | 篩選符合條件的元素 |
| `arr.reduce((acc, cur) => acc + cur, 0)` | 將陣列歸納為單一值 |
| `arr.forEach(x => ...)` | 遍歷陣列（不回傳新陣列） |
| `function outer(x) { return (n) => n * x; }` | 高階函數 + 閉包 |
| `arr.pop()` | 移除陣列最後一個元素（破壞性） |
| `arr.unshift(值)` | 在陣列最前方加入元素（破壞性） |
| `setTimeout(callback, 毫秒)` | 延遲執行回呼 |
| `` `${變數}` `` | 樣板字串（Template Literals） |

### 範例說明

**Callback 基礎：**
```javascript
function mathTool(num1, num2, action) {
    return action(num1, num2);
}
const sumResult = mathTool(10, 5, (a, b) => a + b);
```

**IIFE（立即執行函數）：**
```javascript
(function() {
    let count = 100;
    console.log(`Count is: ${count}`);
})();
// count 在此無法存取（封閉作用域）
```

**箭頭函數 + map：**
```javascript
const prices = [100, 200, 300, 400];
const discounted = prices.map(price => price * 0.8);
// 結果：[80, 160, 240, 320]
```

**高階函數 + 閉包（closure）：**
```javascript
function multiplier(factor) {
    return (n) => n * factor;
}
const double = multiplier(2);   // double 記住 factor = 2
const triple = multiplier(3);   // triple 記住 factor = 3
console.log(double(10));        // 20
console.log(triple(10));        // 30
```

**傳址陷阱：修改 vs 重新賦值：**
```javascript
let listA = [1, 2];
let listB = [3, 4];

function process(a, b) {
    a.push(99);    // 修改原陣列 → listA 變成 [1, 2, 99]
    b = [100];     // 重新賦值 → 切斷參照，listB 不受影響
}
process(listA, listB);
console.log(listA); // [1, 2, 99]
console.log(listB); // [3, 4]
```

### 容易出錯的地方

- 箭頭函數的 `{}` 與 `return`：單行可省略，多行必須寫 `return`
- `forEach` 不會回傳新陣列（不同於 `map`）
- IIFE 內的變數無法從外部存取（作用域封閉）
- **傳址 vs 重新賦值**：`push/pop/unshift` 會改原陣列；`b = [100]` 不會
- `setTimeout` 的第一個參數是**函數本身**，不是呼叫結果
- `reduce` 若未提供初始值（第二個參數），第一次迭代會以索引 0 為 acc

---

## Week 07 — JavaScript 物件操作與後端模式

**主題**：物件屬性存取、解構賦值、樣板字串、Error-First Callback、JSON 處理、模擬資料庫操作。

### 重要語法

| 語法 | 說明 |
|------|------|
| `obj.key` / `obj["key"]` | 點符號與中括號存取物件屬性 |
| `const { a, b } = obj` | 物件解構賦值，一次取出多個屬性 |
| `` `<tag>${expr}</tag>` `` | 樣板字串嵌入表達式 |
| `arr.forEach(item => ...)` | 遍歷陣列 |
| `arr.map(item => ...)` | 陣列轉換 |
| `str.substring(0, n)` | 字串擷取前 n 個字元 |
| `JSON.parse(字串)` | JSON 字串 → JS 物件 |
| `callback(null, data)` | Error-First Callback（第一參數為錯誤） |
| `if (err) return ...` | 錯誤優先處理模式 |
| `條件 ? 真值 : 假值` | 三元運算子 |

### 範例說明

**物件屬性存取：**
```javascript
const post = { id: 1, title: "Hello" };
console.log(post.title);     // 點符號
console.log(post["title"]);  // 中括號（變數或含特殊字元時使用）
```

**物件解構賦值：**
```javascript
const req = { body: { title: "JS教學", content: "內容在此" } };
const { title, content } = req.body;
// 一行即可取出 title 與 content
```

**Error-First Callback 模式：**
```javascript
function fetchData(id, callback) {
    const fakeData = { id: id, status: "success" };
    callback(null, fakeData);  // 第一個參數是錯誤（null=無誤）
}

fetchData(101, (err, data) => {
    if (err) {
        console.log("錯誤：" + err);
    } else {
        console.log("成功取得資料：", data);
    }
});
```

**樣板字串 + 三元運算子：**
```javascript
const user = "Guest";
const html = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;
// 輸出：<h1>Welcome, Guest</h1>
```

**模擬資料庫查詢：**
```javascript
function fakeGet(sql, params, callback) {
    const fakeRow = { id: 1, title: "JS 函數教學", content: "Callback 文章..." };
    callback(null, fakeRow);
}
```

### 容易出錯的地方

- 點符號後面的名稱是**字面屬性名**，無法使用變數；中括號內可以是變數或字串表達式
- 解構賦值時變數名稱需與物件屬性名稱相同（除非用 `{ 原名: 新名 }` 語法）
- `${}` 內可放任何表達式（三元、函數呼叫），但不可放陳述式（如 `if`）
- `if (err) return` 必須寫在 callback 的第一行，確保錯誤優先處理
- `substring(0, 10)` 取的是索引 0~9 的字元（不含索引 10）
- 樣板字串使用反引號 `` ` ``，不是單引號 `'`

---

## 跨週核心概念對照

| 概念 | 出現週次 | 說明 |
|------|----------|------|
| 變數與型別 | 03, 04 | `let` / `const`，JS 動態型別 |
| 條件判斷 | 04, 07 | `if/else`、三元運算子 |
| 迴圈 | 04, 06, 07 | `for`、`while`、`forEach`、`map`、`filter` |
| 函式 | 04, 06 | 一般函式、箭頭函式、回呼函式 |
| 陣列操作 | 04, 06, 07 | `push`、`pop`、`map`、`filter`、`reduce`、`forEach` |
| 物件操作 | 04, 07 | 點符號、中括號、解構賦值、`for...in` |
| JSON | 04, 07 | `JSON.parse`、`JSON.stringify` |
| 樣板字串 | 06, 07 | `` `${}` `` |
| 非同步模式 | 06, 07 | `setTimeout`、Callback、Error-First Callback |
| 後端開發 | 05, 07 | Express 路由、資料庫查詢模擬 |

---

> 本統整筆記涵蓋 `aboutme.html`（個人簡介）、`form.html`（表單）、`hello.js`（入門）、10 個 JS 基礎練習（04）、完整網誌系統（05，含 blog~blog4 五個版本）、10 個進階函數練習（06）與 10 個物件/後端模式練習（07）。
