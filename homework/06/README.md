# JavaScript 進階函數與陣列操作：實作挑戰題解與摘要

使用gemini輔助解題:https://gemini.google.com/share/042d431a8549

本專案收錄了 10 題 JavaScript 進階函數、回呼函數 (Callback)、陣列操作、閉包 (Closure) 以及傳址特性 (Pass by Reference) 的實作挑戰題解。每題皆包含**核心概念摘要（答案）**與**完整實作程式碼**，適合用於複習 JavaScript 的核心觀念。

---

## 目錄
1. [Callback 基礎實作](#1-callback-基礎實作)
2. [匿名函數與立即執行 (IIFE)](#2-匿名函數與立即執行-iife)
3. [箭頭函數與陣列轉換](#3-箭頭函數與陣列轉換)
4. [陣列參數的破壞性修改](#4-陣列參數的破壞性修改)
5. [函數回傳函數 (Higher-Order Function)](#5-函數回傳函數-higher-order-function)
6. [Callback 篩選器](#6-callback-篩選器)
7. [箭頭函數處理物件](#7-箭頭函數處理物件)
8. [參數傳址陷阱：重新賦值-vs-修改](#8-參數傳址陷阱重新賦值-vs-修改)
9. [延遲執行的-callback](#9-延遲執行的-callback)
10. [綜合應用：計算總價](#10-綜合應用計算總價)

---

### 1. Callback 基礎實作
* **概念摘要 (答案)**：將函數作為參數（Callback）傳遞給另一個函數。這樣做可以將「邏輯的控制權」交給呼叫者，大幅提升 `mathTool` 函數的靈活性與複用性。
* **實作程式碼**：
    ```javascript
    function mathTool(num1, num2, action) {
      return action(num1, num2);
    }

    // 傳入相加的匿名函數
    const sumResult = mathTool(10, 5, function(a, b) {
      return a + b;
    });
    console.log("相加結果:", sumResult); // 輸出: 15

    // 傳入相減的匿名箭頭函數
    const subResult = mathTool(10, 5, (a, b) => a - b);
    console.log("相減結果:", subResult); // 輸出: 5
    ```

---

### 2. 匿名函數與立即執行 (IIFE)
* **概念摘要 (答案)**：IIFE (Immediately Invoked Function Expression) 是一種定義完隨即執行的 JavaScript 函數。其最主要的目的在於**建立一個獨立的區域作用域**，保護內部的 `count` 變數不被外層存取或污染，達到封裝的效果。
* **實作程式碼**：
    ```javascript
    (function() {
      let count = 100;
      console.log(`Count is: ${count}`); // 執行時直接印出
    })();

    // 驗證：在外部嘗試存取會報錯
    // console.log(count); // ReferenceError: count is not defined
    ```

---

### 3. 箭頭函數與陣列轉換
* **概念摘要 (答案)**：使用 `map()` 方法遍歷原陣列並產生一個長度相同的新陣列。搭配 ES6 的**單行箭頭函數**語法，可以省略大括號 `{}` 與 `return` 關鍵字（即隱式回傳 Implicit Return），讓程式碼精簡至單行。
* **實作程式碼**：
    ```javascript
    const prices = [100, 200, 300, 400];

    // 使用單行箭頭函數產生打 8 折後的新陣列
    const discountedPrices = prices.map(price => price * 0.8);

    console.log("打折後的價格:", discountedPrices); // 輸出: [80, 160, 240, 320]
    ```

---

### 4. 陣列參數的「破壞性修改」
* **概念摘要 (答案)**：在 JavaScript 中，物件與陣列都是透過**傳址 (Pass by Reference)** 的方式傳遞。當把 `myData` 傳入 `cleanData(arr)` 時，函數內的 `arr` 運作的是同一個記憶體位址。使用 `pop()` 與 `unshift()` 等變更原陣列的方法時，會直接修改（破壞）外部的原始陣列。
* **實作程式碼**：
    ```javascript
    function cleanData(arr) {
      arr.pop();           // 移除最後一個元素
      arr.unshift("Start"); // 在最前面加上 "Start"
    }

    let myData = [1, 2, 3];
    cleanData(myData);

    console.log("執行 cleanData 後的 myData:", myData); // 輸出: ["Start", 1, 2]
    ```

---

### 5. 函數回傳函數 (Higher-Order Function)
* **概念摘要 (答案)**：高階函數與**閉包 (Closure)** 的經典應用。`multiplier` 函數執行後回傳一個內層函數，這個被回傳的內層箭頭函數會「記住」外層函數被呼叫時傳入的 `factor` 變數，從而實現動態產生特定邏輯函數的功能。
* **實作程式碼**：
    ```javascript
    function multiplier(factor) {
      // 回傳另一個箭頭函數，該函數接收參數 n 並與 factor 相乘
      return (n) => n * factor;
    }

    const double = multiplier(2);
    console.log("double(10) 輸出:", double(10)); // 預期輸出: 20

    const triple = multiplier(3);
    console.log("triple(10) 輸出:", triple(10)); // 預期輸出: 30
    ```

---

### 6. Callback 篩選器
* **概念摘要 (答案)**：本題為手動模擬原生 `Array.prototype.filter()` 的運作機制。透過迴圈遍歷輸入的陣列，並將每個元素依序丟進 `callback` 條件函數中測試，當 `callback(item)` 回傳值為真值 (`true`) 時，才將其推入新宣告的 `result` 陣列中。
* **實作程式碼**：
    ```javascript
    function myFilter(arr, callback) {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        // 如果符合回呼函數的條件，則推入新陣列
        if (callback(arr[i])) {
          result.push(arr[i]);
        }
      }
      return result;
    }

    // 測試：篩選出大於 7 的數字
    const testArray = [1, 5, 8, 12];
    const filteredResult = myFilter(testArray, item => item > 7);

    console.log("篩選後大於 7 的數字:", filteredResult); // 輸出: [8, 12]
    ```

---

### 7. 箭頭函數處理物件
* **概念摘要 (答案)**：這是實務開發上處理 API 物件陣列最常見的操作。使用內建的 `filter()` 方法結合簡潔的箭頭函數，在每次迭代中讀取物件的屬性值（如 `user.age`），並篩選出符合門檻（大於或等於 18）的完整物件群組。
* **實作程式碼**：
    ```javascript
    const users = [
      { name: "Alice", age: 25 }, 
      { name: "Bob", age: 17 }
    ];

    // 篩選 age >= 18 的使用者
    const adults = users.filter(user => user.age >= 18);

    console.log("成年人列表:", adults); 
    // 輸出: [ { name: 'Alice', age: 25 } ]
    ```

---

### 8. 參數傳址陷阱：重新賦值 vs 修改
* **概念摘要 (答案)**：
    * `listA` 的結果為：`[1, 2, 99]`。因為 `a.push(99)` 是**修改**操作，它透過傳進來的記憶體指標直接操作原陣列的記憶體內容，屬於破壞性修改。
    * `listB` 的結果為：`[3, 4]`。因為 `b = [100]` 是**重新賦值**操作。它會讓區域變數 `b` 指向一個全新建立的記憶體位址（新陣列），這會**直接切斷**它與原本外部 `listB` 之間的參照連結，因此外部的 `listB` 絲毫不受影響。
* **實作程式碼**：
    ```javascript
    let listA = [1, 2];
    let listB = [3, 4];

    function process(a, b) {
      a.push(99);   // 傳址修改 (影響外部 listA)
      b = [100];    // 重新賦值 (不影響外部 listB)
    }

    process(listA, listB);

    console.log("listA 的最終內容:", listA); // 輸出: [1, 2, 99]
    console.log("listB 的最終內容:", listB); // 輸出: [3, 4]
    ```

---

### 9. 延遲執行的 Callback
* **概念摘要 (答案)**：利用非同步 Web API `setTimeout()` 來達成延遲執行的效果。第一個參數傳入箭頭函數作為 Callback，並於第二個參數指定毫秒數 (2000ms = 2秒)。搭配陣列的 `join(" ")` 方法，可以將陣列中的各個字串以空格串接起來。
* **實作程式碼**：
    ```javascript
    const taskWords = ["Task", "Completed"];

    // 兩秒 (2000毫秒) 後執行箭頭函數
    setTimeout(() => {
      console.log(taskWords.join(" "));
    }, 2000);

    // 預期兩秒後控制台印出: "Task Completed"
    ```

---

### 10. 綜合應用：計算總價
* **概念摘要 (答案)**：這題結合了高階陣列方法與回呼函數。在 `calculateTotal` 內，我們首先使用 `reduce()` 方法對 `cart` 價格陣列進行加總（設定初始累加值為 0）。取得總和後，再將此數據傳遞給作為參數傳入的 `discountFunc` 回呼函數，由其處理並回傳最終扣除折扣後的金額。
* **實作程式碼**：
    ```javascript
    function calculateTotal(cart, discountFunc) {
      // 步驟一：使用 reduce 將購物車內的商品價格加總
      const totalSum = cart.reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
      
      // 步驟二：將加總後的總價傳入折扣 callback 處理並回傳
      return discountFunc(totalSum);
    }

    // 測試資料
    const myCart = [100, 200, 300]; // 總和 600

    // 呼叫函數，傳入匿名函數計算扣除 50 元後的 final 價格
    const finalPrice = calculateTotal(myCart, total => total - 50);

    console.log("折扣後的最終總價:", finalPrice); // 預期輸出: 550
    ```