// Importing prompt-sync module
const prompt = require('prompt-sync')();

//02

// Write a JavaScript program that simulates a simple calculator. 
// The program should take two numbers as input and an operator (+, -, *, or /),
//  and then perform the corresponding operation on the numbers.

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator: ");
let result = 0;
switch (operator) {
    case "+":
        result = num1 + num2;
        //result= +num1 + +num2
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid operator");
        break;
}
console.log("Result: " + result);