function checkAdmin(role, callback) {
    if (role !== "admin") {
        // 第一個參數帶入錯誤訊息
        callback("Access Denied");
    } else {
        // 沒有錯誤，第一個參數帶入 null，第二個參數帶入成功訊息
        callback(null, "Welcome");
    }
}

// 測試：不是 admin 的狀況
checkAdmin("guest", (err, message) => {
    if (err) return console.log("阻擋：", err);
    console.log("通行：", message);
});

// 測試：是 admin 的狀況
checkAdmin("admin", (err, message) => {
    if (err) return console.log("阻擋：", err);
    console.log("通行：", message);
});