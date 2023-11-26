// A A A A A
// B B B B
// C C C
// D D
// E


const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

let charcter = 65;

for(let i=0;i<num;i++) {
    for(let j=i;j<num;j++) {
        process.stdout.write(String.fromCharCode(charcter+i) + ' ');
    }
    console.log()
}