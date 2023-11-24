const prompt = require('prompt-sync')();

//Write a program to find the sum of a given number of terms (N) for a given value of x in the following mathematical series:
//X + ((X^2)/2) + ((X^3)/3) + ...... upto N terms

let n = prompt("enter the sum of a given number of terms : ");
let x = prompt("enter the value of x : ");
let sum=0;
for(let i = 1; i < n; i++){
    sum = sum + (x*(i+1))/(i+1)

}

console.log("the sum of a given number of terms : "+sum);
