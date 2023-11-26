

const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i=1;i<=num;i++){
    let row="";
    for(let j=i;j<=num-i-1;j++){
        row+="*"
    }
    console.log(row)
}