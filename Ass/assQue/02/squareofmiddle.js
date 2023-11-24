//Write a program to find out all the groups of three successive numbers under 1000 that have the property that the
//square of the middle number is greater by unity than the product of the other two numbers (for example, 18^2= 17 × 19 + 1).

const prompt = require('prompt-sync')();

for(let i=1; i<1000;i++){
    let middle = i+1;
    let pow = middle*middle;
    let last =i+2;
    if((pow)==i*last+1){
        console.log(i,middle,last);
    }
    // for(let j=2;j<1000;j++){
    //     for(let k=3;k<1000;k++){
    //         let pow=j*j;
    //         if((pow)=(i*k+1)){
    //             console.log(i,j,k);
    //         }
    //     }
    // }
}