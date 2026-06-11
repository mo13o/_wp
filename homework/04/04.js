function createEmployee(name, department, salary) {
    // 建立並回傳一個物件
    const employee = {
        name: name,
        department: department,
        salary: salary
    };
    return employee;
}
const emp1 = createEmployee("Alice", "Engineering", 50000);
console.log("練習 4:", emp1.name, "在", emp1.department, "部門");