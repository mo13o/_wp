function formatData(names, ages) {
    let result = [];
    for (let i = 0; i < names.length; i++) {
        if (ages[i] >= 0) {
            result.push({
                name: names[i],
                age: ages[i]
            });
        }
    }
    return result;
}
console.log("練習 9:", formatData(["Tom", "Jerry", "Spike"], [12, -5, 15])); 
// 輸出: [ { name: 'Tom', age: 12 }, { name: 'Spike', age: 15 } ]