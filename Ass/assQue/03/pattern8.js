// A
// BB
// CCC



const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

let charcter = 65;
// process.stdout.write(String.fromCharCode(charcter)+" ");
for(let i=0;i<=num;i++){
    // charcter++
    for(let j=0;j<=i;j++){
        process.stdout.write(String.fromCharCode(charcter+i)+" ");
    }
    console.log()
}

//or else we can start the i loop with 1 and j with 1 so that the equation for printing the alphabet will be (charcter+i+1)