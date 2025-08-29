function add(numbers) {
    if (numbers === "") {
        return 0; // return 0 for empty string
    }
    var delimiter = ",";
    var numArray = numbers.split(delimiter).map(Number);
    console.log(numArray);
    return numArray.reduce(function (sum, num) { return sum + num; }, 0);
}
// --- Examples --- //
console.log(add("1,10")); // Output: 11
console.log(add("")); // Output: 0
