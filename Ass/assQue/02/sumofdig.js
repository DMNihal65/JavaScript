//Write a program to find the Sum of the digits of a given number.

const prompt = require('prompt-sync')();

let num = prompt('Enter a number: ');

let arrayofnum = num.split('');
console.log(arrayofnum);
let result=0;

for(let i=0;i<arrayofnum.length;i++) {
    let number = Number(arrayofnum[i]);
    result= result + number;
}
console.log(result)