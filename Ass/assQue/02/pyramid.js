const prompt = require('prompt-sync')();

// Create a pyramid of numbers consisting of a given number of lines. For example, if the given number is 5, then we should see the following:

//                 1
//               1 2 1
//             1 2 3 2 1
//            1 2 3 4 3 2 1
//          1 2 3 4 5 4 3 2 1
//        1 2 3 4 5 6 5 4 3 2 1


let n = prompt('Enter number of lines: ');
// let n=num.length;
let k=n
for(let r=0;r<n;r++){
    let c=1;
    for(let j=0;j<k;j++){
        if(j<n-r-1){
            console.log("*");

        }
        else if(j<=n-1){
            console.log(c);
            c++;
        }
        else if(j==n){
            c=c-2
            console.log(c);
            c--;
        }
        else {
            console.log(c);
            c--;
        }
    }
    
}

// for(let i=0; i<num-i;i++){
//     for(let j=0; j<num; j++){
//         //stars
//         // for(let r=0; r<num-r; r++){
//         //     for(let c=0; c<num;c++){
//                 console.log("*")
//         //     }
//         // }
        
//     }
//     console.log(" ");
// }
