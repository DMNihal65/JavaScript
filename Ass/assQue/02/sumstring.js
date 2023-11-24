const prompt = require('prompt-sync')();

let option = Number(prompt("Enter the option 1-string , 2-threeNumbers  ,3- revers"));

if(option == 1){
    console.log(sumstring());
    console.log(typeof(sumstring));
}
else if (option == 2){
    console.log(largest());
}
else{
    console.log(reverse());
}

// Write a function that takes two numbers as input and returns the sum of the two numbers as a string.

function sumstring(){
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));

    let sum = String(num1 + num2);
    console.log(typeof(sum))
    return sum;
}

// Write a JavaScript program that takes three numbers as input and outputs the largest of the three numbers.


function largest(){
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    let num3 = Number(prompt("Enter the third number"));

    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num3 && num2 > num1){
        return num2;
    }
    else{
        return num3;
    }

    // let largestNumber = Math.max(num1, num2, num3);
    // // console.log(largestNumber);
    // return largestNumber;
   
}

// Write a JavaScript program that takes a string as input and outputs the string in reverse order.

function reverse(){

    let str = String(prompt("Enter a string"));
    let cleanstr = str.split("");
    // cleanstr.reverse();
    let len =cleanstr.length;
    //0 1 2 3 4
    //n i h a l
    for(let i = 0;i<len-1;i++){
        // console.log("----"+cleanstr)
        let temp = cleanstr[len-i-1];
        cleanstr[len-i-1] = cleanstr[i];
        cleanstr[i] = temp;
        // console.log(cleanstr)
    }
    // cleanstr.join("");
    console.log("Reversed string : " +cleanstr)
    cleanstr.join("");
    return cleanstr;
    // let str = prompt("Enter a string");
    // let reverseString = str.split("").reverse().join("");
    // console.log(reverseString);
}