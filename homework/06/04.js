function cleanData(arr) {
  arr.pop();           // 移除最後一個元素
  arr.unshift("Start"); // 在陣列最前面新增元素
}

let myData = [1, 2, 3];
cleanData(myData);

console.log(myData); // 輸出: ["Start", 1, 2]