# 全方位 JavaScript 實作挑戰：從基礎到後端邏輯（答案與程式碼摘要）

本文件收錄了十道針對 JavaScript 與 Node.js 後端開發核心觀念的實作挑戰題目、答案解析及程式碼摘要，專為理解 Express 框架與非同步操作設計。

---

## 1. 物件屬性存取 (Object Property Access)
* **目標**：理解 `post.title` 的運作。
* **題目**：宣告一個名為 `post` 的物件，包含 `id: 1`、`title: "Hello World"` 和 `content: "Markdown content"`。請練習用兩種方式印出 `title`：點符號 (Dot notation) 與中括號 (Bracket notation)。
* **答案摘要**：點符號使用 `.屬性名`，中括號使用 `["屬性名"]`（屬性名需為字串）。
* **範例程式碼**：
```javascript
const post = { id: 1, title: "Hello World", content: "Markdown content" };

// 點符號 (Dot notation)
console.log(post.title); 

// 中括號 (Bracket notation)
console.log(post["title"]); 

```

---

## 2. 物件解構賦值 (Object Destructuring)

* **目標**：理解程式中 `const { title, content } = req.body;` 的寫法。
* **題目**：從 `req.body` 中用一行程式碼取出 `title` 和 `content` 并宣告為同名常數。
* **答案摘要**：使用大括號 `{}` 包裹欲提取的屬性名稱進行解構賦值。
* **範例程式碼**：

```javascript
const req = { body: { title: "JS教學", content: "內容在此", author: "Gemini" } };

// 一行程式碼解構賦值
const { title, content } = req.body;

console.log(title);   // 輸出: JS教學
console.log(content); // 輸出: 內容在此

```

---

## 3. 陣列的遍歷與字串拼接 (Array forEach & Template Literals)

* **目標**：理解部落格首頁如何產生文章列表。
* **題目**：給定陣列 `const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}]`，將每個物件轉為 `<div>A</div>` 的格式拼接到 `html` 字串中。
* **答案摘要**：利用 `forEach` 遍歷陣列，並用反引號 (`) 樣板字串配合 `+=` 進行字串動態拼接。
* **範例程式碼**：

```javascript
const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";

posts.forEach(post => {
    html += `<div>${post.t}</div>`;
});

console.log(html); // 輸出: <div>A</div><div>B</div>

```

---

## 4. 字典與動態參數 (URL Params / Dictionary)

* **目標**：理解 `req.params.id` 的來源。
* **題目**：建立一個名為 `params` 的物件，動態新增一個鍵為 `"id"`，值為 `99` 的屬性，然後印出此物件。
* **答案摘要**：JavaScript 物件即為字典，可直接透過點符號或中括號動態指派新欄位與值。
* **範例程式碼**：

```javascript
const params = {};

// 動態新增屬性
params.id = 99; 

console.log(params); // 輸出: { id: 99 }

```

---

## 5. Callback 函數傳參 (Error-First Callback)

* **目標**：理解 `getPost(id, callback)` 的非同步設計與資料如何透過 Callback 傳出。
* **題目**：撰寫一個函數 `fetchData(id, callback)`，內部宣告 `fakeData` 物件，並遵循 Node.js 慣例呼叫 `callback(null, fakeData)`。
* **答案摘要**：非同步函式常將 `callback` 作為最後一個參數，並在內部處理完畢後呼叫它，第一個參數帶入 `null` 代表無錯誤。
* **範例程式碼**：

```javascript
function fetchData(id, callback) {
    const fakeData = { id: id, status: "success" };
    // 第一個參數為錯誤（無則傳 null），第二個參數為回傳資料
    callback(null, fakeData);
}

// 執行與測試
fetchData(101, (err, data) => {
    if (err) {
        console.log("發生錯誤：" + err);
    } else {
        console.log("成功取得資料：", data); 
    }
});

```

---

## 6. JSON 處理 (Parsing JSON)

* **目標**：理解 `app.use(express.json())` 在處理什麼。
* **題目**：將 JSON 字串 `jsonStr` 轉換成 JavaScript 物件，並印出 `tags` 陣列中的第二個元素。
* **答案摘要**：使用 `JSON.parse()` 轉成物件，再利用索引值 `[1]` 取得陣列的第二個元素。
* **範例程式碼**：

```javascript
const jsonStr = '{"title": "Post 1", "tags": ["js", "node"]}';

// 將 JSON 字串轉回 JS 物件
let obj = JSON.parse(jsonStr);

// 存取 tags 陣列中的第二個元素
console.log(obj.tags[1]); // 輸出: node

```

---

## 7. 模擬資料庫查詢 (Simulating DB Queries)

* **目標**：理解 `db.get(sql, params, callback)` 的結構與運作流程。
* **題目**：實作模擬資料庫查詢的函數 `fakeGet`，並在測試呼叫的 Callback 中印出文章標題。
* **答案摘要**：模擬資料庫底層拋出資料的行為，將結果行（row）帶入匿名回呼函式中供後續操作。
* **範例程式碼**：

```javascript
function fakeGet(sql, params, callback) {
    const fakeRow = { 
        id: 1, 
        title: "掌握 JavaScript 函數", 
        content: "這是一篇關於 Callback 的文章..." 
    };
    callback(null, fakeRow);
}

const query = "SELECT * FROM posts WHERE id = ?";
const inputParams = [1];

fakeGet(query, inputParams, (err, row) => {
    if (err) {
        console.error("查詢失敗");
    } else {
        // 印出文章標題
        console.log("抓到的文章標題是：", row.title);
    }
});

```

---

## 8. 樣板字串中的邏輯運算 (Template Literals with Logic)

* **目標**：理解網頁 HTML 模板的產生。
* **題目**：宣告變數 `user = "Guest"`。請使用反引號建立 HTML 字串，其中 `${}` 內判斷：如果 `user` 有值就顯示 `user`，否則顯示 `"Stranger"`。
* **答案摘要**：在樣板字串 `${}` 內可以放入三元運算子（`條件 ? 真值 : 假值`）或邏輯 OR（`||`）來處理條件邏輯。
* **範例程式碼**：

```javascript
const user = "Guest";

// 使用三元運算子進行判斷
const html = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;

console.log(html); // 輸出: <h1>Welcome, Guest</h1>

```

---

## 9. 陣列物件的排序與切片 (Sort & Substring)

* **目標**：理解 SQL 語法在 JS 端的預習邏輯（例如字串長度限制）。
* **題目**：給定一個含有多個長字串的陣列，取出每個字串的前 10 個字元，並在後方加上 `...`。
* **答案摘要**：利用陣列的 `map()` 方法遍歷，並搭配 `substring(0, 10)` 方法擷取字串。
* **範例程式碼**：

```javascript
const arr = [
    "Very long content here", 
    "Another Very long content here", 
    "3rd Very long content here"
];

// 使用 map 遍歷並對每個字串做切片處理
const result = arr.map(text => text.substring(0, 10) + "...");

console.log(result);
// 輸出: [ 'Very long ...', 'Another Ve...', '3rd Very l...' ]

```

---

## 10. 錯誤優先回呼模式 (Error-First Callback Pattern)

* **目標**：理解程式中不斷出現的 `if (err) return ...`。
* **題目**：寫一個函數 `checkAdmin(role, callback)`，若非 admin 則呼叫 `callback("Access Denied")`，若是則呼叫 `callback(null, "Welcome")`，並測試兩種狀況。
* **答案摘要**：利用 `if (err)` 優先攔截錯誤並中斷執行（`return`），能讓後續的主邏輯程式碼更乾淨、不嵌套。
* **範例程式碼**：

```javascript
function checkAdmin(role, callback) {
    if (role !== "admin") {
        callback("Access Denied");
    } else {
        callback(null, "Welcome");
    }
}

// 測試狀況一：非 admin 觸發錯誤
checkAdmin("guest", (err, message) => {
    if (err) return console.log("阻擋：", err);
    console.log("通行：", message);
});

// 測試狀況二：是 admin 順利通過
checkAdmin("admin", (err, message) => {
    if (err) return console.log("阻擋：", err);
    console.log("通行：", message);
});

```

```

```