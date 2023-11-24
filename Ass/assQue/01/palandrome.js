const prompt = require('prompt-sync')();
//04

//Palandrome

let str = String(prompt('Enter a string: '));
let cleanstring = str.toLowerCase();

let length = cleanstring.length;

if(length!=0){
    for(let i = 0; i < length; i++){
        if(cleanstring[i] === cleanstring[length-1-i]){
            
            console.log('The string is a palindrome');
            process.exit();
            
        }
        else{
            console.log('The string is not a palindrome');
            process.exit();
        }
    }
}