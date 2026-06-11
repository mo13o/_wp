function getHighEarners(employees) {
    let result = [];
    for (let i = 0; i < employees.length; i++) {
        // 如果該物件的薪水屬性大於 60000
        if (employees[i].salary > 60000) {
            result.push(employees[i].name);
        }
    }
    return result;
}
const team = [
    { name: "Bob", salary: 45000 },
    { name: "Charlie", salary: 75000 },
    { name: "David", salary: 65000 }
];
console.log("練習 5:", getHighEarners(team)); // 輸出: [ 'Charlie', 'David' ]