function findFirstNegative(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            return arr[i]; // 找到負數立即回傳
        }
        i++;
    }
    return null; // 跑完迴圈都沒找到
}
console.log("練習 7:", findFirstNegative([3, 5, -2, 8, -1])); // 輸出: -2