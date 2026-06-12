function mathTool(num1, num2, action) {
  return action(num1, num2);
}

// 傳入相加的匿名函數
const sumResult = mathTool(10, 5, function(a, b) {
  return a + b;
});
console.log(sumResult); // 輸出: 15

// 傳入相減的匿名函數 (此處示範使用箭頭函數寫法)
const subResult = mathTool(10, 5, (a, b) => a - b);
console.log(subResult); // 輸出: 5