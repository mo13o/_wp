function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 將每個元素丟進 callback 測試，若為 true 則加入新陣列
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 測試：篩選大於 7 的數字
const numbers = [1, 5, 8, 12];
const filteredNumbers = myFilter(numbers, item => item > 7);

console.log(filteredNumbers); // 輸出: [8, 12]