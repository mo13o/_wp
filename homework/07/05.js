function fetchData(id, callback) {
    // 建立假資料
    const fakeData = { id: id, status: "success" };
    
    // 呼叫 callback，第一個參數 null 代表沒錯誤，第二個參數帶入資料
    callback(null, fakeData);
}

// 測試執行
fetchData(101, (err, data) => {
    if (err) {
        console.log("發生錯誤：" + err);
    } else {
        console.log("成功取得資料：", data); 
    }
});