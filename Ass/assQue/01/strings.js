//06 07

const prompt = require('prompt-sync')();

//Write a JavaScript program that takes a string as input and converts it to uppercase.

// Write a JavaScript program that takes a string as input and removes all vowels from the string.


let str = String(prompt("Enter the string"));
// let result = str.toUpperCase();

// console.log("The Converted uppercase string : " +result);

// let vowels = "";
const vowels = str.replace(/[aeiou]/gi, '');

// let result = "";
// for(let i =0;i<str.length;i++){
//     if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
//         vowels = str.replace(str.charAt(i),"");
//         if(str.charAt(i) != vowels.charAt(1)){
//             result = str.charAt(i);
//         }
//         // console.log("vowels : "+vowels)
//         // console.log("string : "+str)

//     }
// }

console.log("vowels: " + vowels);
// console.log("Result : "+result)
