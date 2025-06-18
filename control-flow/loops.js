// // // // // // for loops
// // function loopMeIn(){
//     console.log("Before the loop");
    
//     for (let i = 0; i < 7; i++) {
//     if(i % 2 ===0){
//         console.log(i);
//     }
//     }
//     console.log("After the loop");
// // }
//     loopMeIn();

// // while loop

//     let i = 0;
//     while (i < 5) {
//         console.log(i);
//         i++;
//     }

// do...while loop

    // let i = 0;
    // do {
    //     console.log(i);
    //     i++;
    // } while (i < 7);

// create a function printEvenInRange(num1, num2) that takes a number num1 and num2 and prints even numbers FROM num1 to num2
function printEvenInRange(num1, num2) {
    for (i = num1; i <= num2; i++) {
    if (i % 2 === 0){
        console.log(i);
        
        }
    }
}
printEvenInRange(7, 17);
