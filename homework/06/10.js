function calculateTotal(cart, discountFunc) {
  // 將陣列內的值加總 (初始值為 0)
  const totalSum = cart.reduce((acc, curr) => acc + curr, 0);
  
  // 將總和丟給 callback 計算最終折扣價格
  return discountFunc(totalSum);
}

// 測試資料
const myCart = [100, 200, 300]; // 總和為 600

// 傳入陣列，並透過匿名函數將總價扣除 50 元
const finalPrice = calculateTotal(myCart, total => total - 50);

console.log(finalPrice); // 預期輸出: 550