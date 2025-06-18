// // If statement
// // if (condition){
// // //  // BLock of code to be executed if the condition evaluates to a truthy vallue
// // }
// let age = 17;

// // check whether this person is eligible to drive according to the laws of kenya

// if (age >=18) {
//     console.log("Eligible");
// } 

// // 2. If...Else
// // lets assume that for you to drive a truck, you need to be 21 and above
// // if you are below 21, you can only drive a small vehicle
// // write some code to represent that.
// // 21 and over (Adults)
// // 18 to 20(Young adults)
// // Below 18 (children)

// if(age >=21){
//     console.log("Truck Driver");
// } else if(age >=18 && ahe <21){
//     console.log("Car/Moorbike Driver/Riders");
// }
// else {
//     console.log("You cannot drive");
// }
// // The switch condition
// // Is a control structure that allows you to execute different code blocks on different conditions.(cases)
// const day = 3; 

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday"); 
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     default:
//         console.log("Weekend or invalid day");
// }

// const fruit = ("Apple")
// switch (fruit){
//     case "Banana":
//         console.log("Yellow and sweet");
//         break;
//     case "Apple":
//         console.log("Red or green and crunchy");
//         break;
//     default:
//         console.log("unknown fruit");
// }

// // traffic
// let colorcode = "green"

// switch(colorcode){
//     case "red":
//         console.log("Stop");
//         break;

//     case "amber":
//         console.log("get ready")
//         break;

//     case "green":
//         console.log("go")
//         break;

//     default:
//         console.log("unknown color code");
        

// }
// // 4.Ternary operator.
// // Its a concise way to write a statement in javascript. Its often used as a shorthand for if-else.

const age = 20;
let message = age >= 18 ? 'Adult' : 'Minor';
console.log(message);

// // Alternatives to ternary operator
// // a) If-else

// let message;
// if ('age' >= 18) {
//     message = 'Adult';
// } else {
//     message = 'Minor';
// }
// console.log(message);


const fruit = 'apple';

const fruitAction = {
    apple: () => 'selected apple',
    banana: () => 'selected banana',
    orange: () => 'selected orange',
    default: () => 'unknown fruit'
};

const result = (fruitAction[fruit] || fruitAction.default)();
console.log(result);


