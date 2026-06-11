function checkScore(score) {
    // 使用 if 判斷分數是否達標
    if (score >= 60) {
        return "及格";
    } else {
        return "不及格";
    }
}
console.log("練習 1:", checkScore(75)); // 輸出: 及格
console.log("練習 1:", checkScore(40)); // 輸出: 不及格