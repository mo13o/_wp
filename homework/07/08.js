const user = "Guest"; // 試著改成 null 或空字串來測試

// 使用三元運算子判斷 user 是否有值
const html = `<h1>Welcome, ${user ? user : "Stranger"}</h1>`;

// (另一種寫法：使用邏輯 OR 運算子)
// const html = `<h1>Welcome, ${user || "Stranger"}</h1>`;

console.log(html); 
// 輸出: <h1>Welcome, Guest</h1>