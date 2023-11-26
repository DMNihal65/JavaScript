// 5 5 5 5 5
// 4 4 4 4
// 3 3 3 
// 2 2
// 1


const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i = 0; i <=num; i++){
    for(let j = i; j <= num; j++){
        
        process.stdout.write(num-i + ' ')
    }
    console.log()
}
