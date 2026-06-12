const words = ["Task", "Completed"];

setTimeout(() => {
  console.log(words.join(" "));
}, 2000); 

// 預期：兩秒後在控制台印出 "Task Completed"