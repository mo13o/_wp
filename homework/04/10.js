function processSystemLog(jsonLogs) {
    // 1. JSON parse 轉為陣列 (Array)
    let logsArray = JSON.parse(jsonLogs);
    
    let successLogs = [];
    let i = 0;
    
    // 2. 使用 while 與 if 進行過濾
    while (i < logsArray.length) {
        let currentLog = logsArray[i]; // currentLog 是一個物件 (Object)
        if (currentLog.status === "success") {
            successLogs.push(currentLog);
        }
        i++;
    }
    
    // 3. 使用 for 迴圈進行計算 (假設每個 success 日誌算 1 次有效操作)
    let totalSuccessCount = 0;
    for (let j = 0; j < successLogs.length; j++) {
        totalSuccessCount++;
    }
    
    // 4. 包裝成新物件
    let resultObj = {
        totalRecords: logsArray.length,
        successCount: totalSuccessCount,
        successRate: (totalSuccessCount / logsArray.length) * 100 + "%"
    };
    
    // 5. 轉回 JSON 字串
    return JSON.stringify(resultObj);
}

const mockLogs = '[{"id":1, "status":"success"}, {"id":2, "status":"failed"}, {"id":3, "status":"success"}]';
console.log("練習 10:", processSystemLog(mockLogs)); 
// 輸出: {"totalRecords":3,"successCount":2,"successRate":"66.66666666666666%"}