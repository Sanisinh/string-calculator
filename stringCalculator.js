const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const add = (numbers) => {

  try {

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

    const numbersArray = numbers
      .split(delimiter)
      .filter(Boolean) // remove empty strings
      .map(Number);

    const negativesNumbers = numbersArray.filter((n) => n < 0);
    if (negativesNumbers.length > 0) {
      throw new Error("negative numbers not allowed: " + negativesNumbers.join(","));
    }

    return numbersArray.reduce((sum, num) => sum + num, 0);
  } catch (error) {
    return error.message; // or handle the error as needed
  }
};


// 1. Empty string -> 0
console.log(add("")); // 0

// 2. Single number
console.log(add("5")); // 5

// 3. Two numbers with comma
console.log(add("1,2")); // 3

// 4. Multiple numbers with comma
console.log(add("1,2,3,4")); // 10

// 5. New line as delimiter
console.log(add("1\n2,3")); // 6

// 6. Custom delimiter (single char)
console.log(add("//[;]\n1;2;3")); // 6
console.log(add("//[-]\n4-5-6")); // 15

// 7. Custom delimiter (special regex chars)
console.log(add("//[|]\n7|8|9")); // 24
console.log(add("//[.]\n1.2.3")); // 6

// 8. Negative numbers -> throw error
console.log(add("1,-2,3"));
console.log(add("//[;]\n-1;2;-3"));

// 9. Consecutive delimiters (should ignore empties)
console.log(add("1,,2\n\n3")); // 6
