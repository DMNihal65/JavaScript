//Dimoind Pattern

const prompt = require('prompt-sync')();

let num = Number(prompt('Enter a number: '));

for (let i = 0; i < num; i++) {
    for(let j=i;j<num-1;j++) {
        //spaces
        process.stdout.write(" "+" ");
    }
    for(let k=num-i+1;k<=num+1;k++) {
        //halfstr
        process.stdout.write("*"+" ");
    }
    for(let k=num+1;k<=num+i;k++) {
        //nexthalfstr
        process.stdout.write("*"+" ");
    }
    
    
    console.log()

}



for (let i = num; i < 0; i--) {
    for(let j=i;j<num-1;j++) {
        //spaces
        process.stdout.write(" "+" ");
    }
    for(let k=num-i+1;k<=num+1;k++) {
        //halfstr
        process.stdout.write("*"+" ");
    }
    for(let k=num+1;k<=num+i;k++) {
        //nexthalfstr
        process.stdout.write("*"+" ");
    }
    
    
    console.log()

}
