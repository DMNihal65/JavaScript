

// A
// BC
// DEF


const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

let charcter = 65;

for(let i=1;i<=num;i++) {
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(charcter)+" ");
        charcter++;
    }
    console.log()
}