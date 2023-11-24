// Importing prompt-sync module
const prompt = require('prompt-sync')();

// 01
// Write a JavaScript program that calculates the area of a rectangle.
//  The program should take the length and width of the rectangle as input,
//   and then output the area of the rectangle.

let height = prompt("Enter height: ");
let width = prompt("Enter width: ");

let area = height * width;

console.log("Area: " + area);