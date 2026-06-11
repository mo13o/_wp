function rollUntilSix() {
    let count = 0;
    let dice = 0;
    // 當骰子點數不是 6 時，繼續執行
    while (dice !== 6) {
        dice = Math.floor(Math.random() * 6) + 1; // 產生 1~6 的隨機整數
        count++;
    }
    return count;
}
console.log("練習 3: 總共擲了", rollUntilSix(), "次才出現 6");