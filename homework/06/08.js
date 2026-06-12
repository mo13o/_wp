let listA = [1, 2];
let listB = [3, 4];

function process(a, b) {
  // 破壞性修改：透過參照直接改變了外部傳進來的陣列內容
  a.push(99);
  
  // 重新賦值：讓區域變數 b 指向全新的陣列，切斷了與外部 listB 的連結
  b = [100];
}

process(listA, listB);

// 驗證最終結果
console.log("listA 的內容:", listA); // 輸出: [1, 2, 99]
console.log("listB 的內容:", listB); // 輸出: [3, 4]