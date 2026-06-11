function sumArray(numbers) {
    let total = 0;
    // 使用 for 迴圈走訪整個陣列
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log("練習 2:", sumArray([10, 20, 30])); // 輸出: 60