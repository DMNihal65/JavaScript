const prompt = require('prompt-sync')();

//05

//Even Odd

let num = Number(prompt('Enter a number: '));

if(num % 2 == 0){
    console.log("the number is even");
}
else{
    console.log("The Number is odd");
}