// ARRAYS.
// Are list-like objects
// let apples = "apples"
// let bananas = "bananas"
// let oranges = "oranges"

let fruits = ["oranges", "apples", "bananas", "watermelons"]
let a = fruits[1];
let b = fruits[fruits.length - 2]
let lengthOfFruitsArray = fruits.length
console.log(lengthOfFruitsArray);
console.log(a);
console.log(b);



// Using string.repeat()
const repeatedStr = "abc".repeat(3);
console.log(repeatedStr);

// Using Array + join()
const repeatedArr = Array(3).fill("abc").join("");
console.log(repeatedArr);
console.log("abc".repeat(3));
console.log(Array(3).fill("abc").join(""));

// 2. Repeat characters in a string
const str = "hello";
console.log([...str].map(c => c.repeat(2)).join(""));

// 3. Performance test
const test = "x";
const n = 1e6;
console.time("string.repeat");
test.repeat(n);
console.timeEnd("string.repeat");

console.time("Array method");
Array(n).fill(test).join("");
console.timeEnd("Array method");

// 4. Custom pattern generation
console.log(["a", "b", "c"].map(c => c.repeat(2) + "-").join(""));
