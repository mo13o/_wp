function printRoles(rolesObj) {
    let admins = [];
    // 走訪物件中的每一個 key
    for (let user in rolesObj) {
        if (rolesObj[user] === "admin") {
            admins.push(user);
        }
    }
    return admins;
}
const systemRoles = { "John": "user", "Sara": "admin", "Mike": "user", "Nina": "admin" };
console.log("練習 8: 系統管理員有", printRoles(systemRoles)); // 輸出: [ 'Sara', 'Nina' ]