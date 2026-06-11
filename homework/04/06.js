function updateJsonData(jsonString) {
    // 1. 將 JSON 字串解析為 JavaScript 物件
    let userObj = JSON.parse(jsonString);
    
    // 2. 修改物件屬性
    userObj.isActive = true;
    
    // 3. 將物件轉回 JSON 字串
    return JSON.stringify(userObj);
}
const rawData = '{"username": "admin", "isActive": false}';
console.log("練習 6:", updateJsonData(rawData)); 
// 輸出: {"username":"admin","isActive":true}