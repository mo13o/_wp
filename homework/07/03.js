const posts = [{id: 1, t: "A"}, {id: 2, t: "B"}];
let html = "";

posts.forEach(post => {
    // 將每個陣列元素的 t 屬性拼接進去
    html += `<div>${post.t}</div>`;
});

console.log(html); 
// 輸出: <div>A</div><div>B</div>