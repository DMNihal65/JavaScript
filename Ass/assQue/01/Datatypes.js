//03

const prompt = require('prompt-sync')();

// //Write a JavaScript program that takes two numbers as input and prints their sum, difference, product, and quotient. 
// Use different primitive data types (number, string, boolean) to store the results.

let num1 = Number(prompt('Number 1 : '));
let num2 = Number(prompt("Number 2 : "));

let sum = num1 + num2;
let diff = num1 - num2;
let multiplicaton = num1 * num2;
let Divison = num1 / num2;

console.log("Sum: " +sum);
console.log("Diff: " +diff);
console.log("multiplicaton : " +multiplicaton);
console.log("Divison : " +Divison);