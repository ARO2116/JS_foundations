// create a basic calculator(a, b, operator) that performs an operation ("+", "-", "*", "/")

function calculator(num1, operator, num2) {
    switch (operator) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
        return num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
    default:
        return "Error: Invalid operator!";
    }
}

// Examples
console.log(calculator(5, '+', 3)); 
console.log(calculator(10, '-', 4));
console.log(calculator(7, '*', 2)); 
console.log(calculator(8, '/', 2)); 
console.log(calculator(5, '/', 0));
console.log(calculator(3, '%', 2));