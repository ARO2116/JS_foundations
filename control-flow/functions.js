import greetSpecficStudent from 'greetSpecficStudent';
import greetSpecficStudent from 'greetSpecficStudent';
// By default, code is executed from top to bottom.

// Control flow statements manipulates the default flow of execution.

// 1. FUNCTIONS

// // Definition

// function nameofTheFunction(param1, param2){
//     //Block of code
// }
// const num = 1;
// const num2 = 7;

// const num3 = num + num2;

// function addTwoNumbers(num1, num2){
//     return num1 = num2;
// }

// const num4 = addTwoNumbers(1, 7)

// console.log(num3);

// console.log("Hello");

// callJohn();

// function callJohn(){
//     console.log("John");

// }
// console.log("Wick");

// function addition(){
//     return 2 + 3;
// }
// console.log(addition())
// console.log(addition())

// // 1.Create a function greeting students that returns "hello students"
function greetStudents() {
    return "Hello Students";
}

let greeting = greetStudents();
console.log(greeting);  


// // 2.Create a function greetspecificstudent() that takes the name of the specific student as input and returns the words "Hello name" where name is the name is the name of the student.

function greetSpecificStudent(studentName){
    return `Hello + ${studentName}`;
}
console.log(greetSpecficStudent("Austin"));

// // 3.Create a function calculateperimeter() that takes the the lenth and width as input and returns the perimeter

function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
let length = 10;
let width = 5;
let perimeter = perimeterOfRectangle(length, width);

console.log("Perimeter of rectangle:", perimeter);

// 4.Create a function calculatearea() that takes base and height of a triangle as input and returns the area.

function areaOfTriangle(base, height) {
  return 0.5 * base * height;
}

let base = 10;
let height = 5;
let area = areaOfTriangle(base, height);

console.log("Area of triangle:", area);


