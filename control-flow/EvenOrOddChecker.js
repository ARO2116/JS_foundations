// write a function is evenOrodd(num) that returns "Even" if the number is even, or "Odd" if the number is odd
function checkEvenOdd (num){
    if (num % 2 === 0 ) {
        return "Even";
    }else {
        return "Odd"
    }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));


