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
