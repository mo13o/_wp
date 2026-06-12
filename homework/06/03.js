const prices = [100, 200, 300, 400];

// 使用單行箭頭函數，隱式回傳打 8 折後的結果
const discountedPrices = prices.map(price => price * 0.8);

console.log(discountedPrices); // 輸出: [80, 160, 240, 320]