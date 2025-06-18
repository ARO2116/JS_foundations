// 1. Write a function countToN(n) that prints the numbers from 1 to n.

function countToN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
countToN(7)

// 2. Write a function printMutiples(num, limits) that prints all multiples of num from num to limits

function printMutiples(num, limit){
    for (let i = num; i <=limit; i+=num){
    console.log(i);
    
}
}
printMutiples(2, 12);

// 3. Write a function printTriangle(rows) that prints a right-angled triangle of * with the given number of rows.
// rows
// for( let r = 1; r <= rows; r++){
//     // collumns
//     let asterisks = "";
//     for(let c = 1; c <=r; c++){
//         asterisks = asterisks
//     }
// }

// function printTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         console.log('*'.repeat(i));
//     }
// }  
// printTriangle(4)

function printTriangle(rows) {
    for (let i = 1; i <=rows; i++){
        let line = " ";

        line += " ".repeat(rows -i);

        line += "* ".repeat(i);

        console.log(line);
        
    }
}
// function printTriangle(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = "";
        
//         line += " ".repeat(rows - i);
        
//         line += "* ".repeat(i);
//         console.log(line);
//     }
// }

printTriangle(5)

// 4. Write a function reverseNumber(n) that returns the digits of a number in reverse order.

function reverseNumber(n) {
    let reversed = 0;
    let num = Math.abs(n);
    
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return n < 0 ? -reversed : reversed;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));


// 5. Write a function isaPalindromeNumber(n) that returns true if the number reads the same forward and backward
// A palindrome is number that reads the same forward and in reverse

function isaPalindromeNumber(n) {
    if (n < 0) return false; // Negative numbers can't be palindromes
    let original = n;
    let reversed = 0;
    
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    
    return original === reversed;
}
console.log(isaPalindromeNumber(121));
console.log(isaPalindromeNumber(123));
console.log(isaPalindromeNumber(1221));
console.log(isaPalindromeNumber(-121));

// 6. Sum of a digit
// Write a function sumDigits(n) that returns the sum of all digits in the number
function sumDigits(n){
    n = Math.abs(n);
    let sum = 0;
    while (n > 0){
        sum += n % 10;
        n = Math.floor( n / 10); //(Math.floor rounds of a number to the nearest intiger getting rid of any decimals places)
    }
    return sum;
}
console.log(sumDigits(1523));
console.log(sumDigits(-563));
console.log(sumDigits(10034));

// 7.Count digits. 
// write a function countDigits(n) that returns how many digits are in the n

function countDigits(n) {
    return Math.abs(n).toString (). length;
}
console.log(countDigits(1234567890));
console.log(countDigits(-54378));

// 8. Check for Armstrong number
// An armstrong number is one whose sum of the cube of its digits equals the number itself (e.g.. 153--> ((1^3)+ (5^3)+(3^3))
// Write a function isArmstrong(n) that checks for this condition.

function isArmstrongNumber(n) {
    let original = n;
    let sum = 0;
    const power = Math.floor(Math.log10(n)) + 1;

    while (n > 0) {
        const digit = n % 10;
        sum += Math.pow(digit, power);
        n = Math.floor(n / 10);
    }

    return sum === original;
}
console.log(isArmstrongNumber(370));
console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(129));
console.log(isArmstrongNumber(3461));




