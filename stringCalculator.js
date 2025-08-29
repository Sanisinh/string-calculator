const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}


const add = (numbers) => {
    if (numbers === "") {
        return 0; // return 0 for empty string
    }
    let delimiter = /,|\n/; //

    if (numbers.startsWith("//")) {
        const [firstSection, rest] = numbers.split("\n", 2);

        // extract delimiter between [ and ]
        const match = firstSection.match(/\[(.+)\]/);
        if (match) {
            delimiter = new RegExp(escapeRegex(match[1]));
        } else {
            delimiter = new RegExp(escapeRegex(firstSection.slice(2)));
        }

        numbers = rest;
    }

    let numbersArray = numbers
        .split(delimiter)
        .filter(Boolean) // remove empty strings
        .map(Number);

    return numbersArray.reduce((sum, num) => sum + num, 0);
}
// --- Examples --- //
console.log(add("1,2,3"));          // 6
console.log(add("1\n2,3"));         // 6
console.log(add("//[;]\n1;2;3"));   // 6
console.log(add("//[|]\n7|8|9"));   // 24
console.log(add("//[-]\n4-5-6"));   // 15
console.log(add("//[***]\n1***2***3")); // 6
