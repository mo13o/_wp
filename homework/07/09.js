const arr = [
    "Very long content here", 
    "Another Very long content here", 
    "3rd Very long content here"
];

// 使用 map 產生一個新的陣列，將每個字串切片並加上 "..."
const result = arr.map(text => text.substring(0, 10) + "...");

console.log(result);
// 輸出: [ 'Very long ...', 'Another Ve...', '3rd Very l...' ]