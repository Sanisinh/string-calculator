# string-calculator

A simple implementation of the **String Calculator TDD Kata** in JavaScript.

---

## Features
- ✅ Returns `0` for an empty string  
- ✅ Handles one or many numbers separated by commas or new lines  
- ✅ Supports custom delimiters (e.g. `//[;]\n1;2;3`)  
- ✅ Throws an exception when negative numbers are passed  
  - Shows all negative numbers in the error message  

---

## Examples
```js
add("");                 // 0
add("1");                // 1
add("1,2");              // 3
add("1\n2,3");           // 6
add("//[;]\n1;2;3");     // 6
add("//[|]\n7|8|9");     // 24
add("//[-]\n4-5-6");     // 15
// add("1,-2,3");        // throws "negative numbers not allowed: -2"
```
---
## Run Locally
1. Save the code in a file called stringCalculator.js
2.Run using Node.js: cmd => node stringCalculator.js
