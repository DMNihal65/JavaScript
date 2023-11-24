const prompt = require('prompt-sync')();

//Electric Ass

// An board charges the following rates to domestic users to discourage large consumption of energy:
// For the first 100 units electricity - ₹65 per unit
// For the next 200 units - ₹110 per unit
// Beyond 300 units - ₹140 per unit
// All users are charged a minimum of ₹ 500
// If the total cost is more than ₹2000, then an additional surcharge of 3% of the total cost is added to the total cost to determine the final bill.
// Write a program to find the total bill, give the account of units consumed.

let units =  Number(prompt("Enter the units of electricity consumned: "));
let totalbill =1;
if(units < 100){
    let bill = units * 65;
    // console.log("The bill is: " + bill);
    totalbill = 500 + bill;
}
else if(units < 300){
    let tempbill = units-100;
    let bill = (100 * 65) + (tempbill * 110);
    // let bill = units * 110;
    // console.log("The bill is: " + bill);
    totalbill = 500 + bill;
}
else{
    // let temp = units - 100;
    let tempbill = units - 200;

    let bill = (100 * 65) + (100 * 110) + (tempbill * 140);
    // console.log("The bill is: " + bill);
    totalbill = 500 + bill;
}

// if(totalbill > 2000){
//     let surcharge = totalbill * 0.03;
//     console.log("The bill is: " + totalbill + " + " + surcharge + " = " + (totalbill + surcharge));
// }


console.log("The bill is: " + totalbill);