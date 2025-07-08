// // // // // // // for loops
// // // function loopMeIn(){
// //     console.log("Before the loop");
    
// //     for (let i = 0; i < 7; i++) {
// //     if(i % 2 ===0){
// //         console.log(i);
// //     }
// //     }
// //     console.log("After the loop");
// // // }
// //     loopMeIn();

// // // while loop

// //     let i = 0;
// //     while (i < 5) {
// //         console.log(i);
// //         i++;
// //     }

// // do...while loop

//     // let i = 0;
//     // do {
//     //     console.log(i);
//     //     i++;
//     // } while (i < 7);

// // create a function printEvenInRange(num1, num2) that takes a number num1 and num2 and prints even numbers FROM num1 to num2
// function printEvenInRange(num1, num2) {
//     for (i = num1; i <= num2; i++) {
//     if (i % 2 === 0){
//         console.log(i);
        
//         }
//     }
// }
// printEvenInRange(7, 17);

// USING LOOPS WITH ARRAYS

// create a function printElements(arr) that takes an array an arguement and prints each of the elements in that array

function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printElements(["apple", "banana", "watermelon", "cherry"]);
printElements(["hello", "world"]);
printElements(["1", "2", "3", "4", "5"]);

//ARRAYS WITH LOOPS
//1. Find the sum of numbers in an array
// write a function sumArray(arr) tha returns the sum of al numbers in the array.

function sumArray(arr) {
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum
}
console.log(sumArray([1, 2, 9, 3]));
console.log(sumArray([-17, 3, 9]));
console.log(sumArray([100, -154, 83]));

// 2.FIND THE LARGEST NUMBER IN AN ARRAY
// Write a function findMax(arr) that returns the largest number in an array.
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([3, 9, 10, ]));
console.log(findMax([-3, -7, -12,]));

// 3. COUNT EVEN NUMBERS
// Write an function countEven(arr) that returns the number of arrays numbers in an array.

function countEven(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) count++;
    }
    return count;
}
console.log(countEven([2.0, 2.1, 3.14, 4, 4.2]));




