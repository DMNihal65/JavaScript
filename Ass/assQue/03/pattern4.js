// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5

const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i = 1; i <= num; i++){
    for(let j=i ;j<=num; j++){
        process.stdout.write(i +" ");
    }
    console.log()

}
