// *
// * *
// * * *
// * * * *
// * * * * *


const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i=1 ; i<=num ; i++) {
    for( let j=1; j<=i ; j++ ) {
        process.stdout.write("*" + ' ');
    }
    console.log()
}