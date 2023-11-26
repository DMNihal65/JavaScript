//Dimoind Pattern

const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for(let i=1;i<=num;i++) {
    let row=''
    for(let j=1;j<=num-i;j++){
        row+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row +="*"
    }
    console.log(row);
}


for(let i=num;i>=1;i--) {
    let row=''
    for(let j=1;j<=num-i;j++){
        row+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row +="*"
    }
    console.log(row);
}