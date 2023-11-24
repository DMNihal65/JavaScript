// // Write a program to  determine and print the minimum number of currency notes of the denominations: ₹1, ₹5, ₹10, ₹20, ₹50, ₹100, ₹500 and ₹1000 
// // required to pay any given amount.

// const prompt = require('prompt-sync')();

// let num = prompt("Please enter the amount");

// let rem=num;
// let count1000,count500,count100,count50,count20,count10,count5,count1 = 0;

// while(rem>0){

// if((rem/1000)>1){
//      count1000 = rem%1000;
//      rem = rem%1000;
//      console.log("Number of 1000 notes: "+count1000);
// }
// else if((rem/500)>1){
//     count500 = rem%500;
//     rem = rem%500;
//     console.log("Number of 500 notes: "+count500);
// }
// else if((rem/100)>1){
//     count100 = rem%100;
//     rem = rem%100;
//     console.log("Number of 100 notes: "+count100);
// }
// else if ((rem/50)>1){
//     count50 = rem%50;
//     rem = rem%50;
// }
// else if ((rem/20)>1){
//     count20 = rem%20;
//     rem = rem%20;
// }
// else if((rem/10)>1){
//     count10 = rem%10;
//     rem = rem%10;
// }
// else if((rem/5)>1){
//     count5 = rem%5;
//     rem = rem%5;
// }
// else {
//     count1 = rem%1;
//     rem = rem%1;
// }
// }



// console.log("Number of 100 notes: "+count100);
// console.log("Number of 50 notes: "+count50);
// console.log("Number of 20 notes: "+count20);
// console.log("Number of 10 notes: "+count10);
// console.log("Number of 5 notes: "+count5);
// console.log("Number of 1 notes: "+count1);



const prompt = require('prompt-sync')();

let num = prompt("Please enter the amount");


const deno = [1000,500,100,50,20,10,5,1];

for(let i =0;i<deno.length;i++){
    // console.log(deno[i])
    let count = Math.floor(num/deno[i]);

    if(count>0){
        console.log(`${deno[i]}:${count}`)
    }
    num=num%deno[i];

    
}