// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1



const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i=1;i<=num;i++){
    for(let j=i;j>=1;j--){
        process.stdout.write(j+" ")
        
    }
    console.log()
}