// A
// AB
// ABC


const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

let charcter = 65;

for(let i=0;i<num;i++){
    for(let j=0;j<i;j++){
        process.stdout.write(String.fromCharCode(charcter+j));
    }
    console.log()
}
