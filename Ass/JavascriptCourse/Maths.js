const score=400
console.log(score)
console.log(typeof score)

const balance= new Number(100)
console.log(balance)//[Number: 100]

console.log(balance.toString().length)//3
console.log(typeof balance)//object
console.log(balance.toFixed(2))//100.00

const num= 23.7823
const num2=123.56
const num3=123.26


console.log(num.toPrecision(3))//23.8
console.log(num2.toPrecision(3))//124
console.log(num3.toPrecision(3))//123

const hun= 1000000

console.log(hun.toLocaleString())//10,00,000

//++++++++++++++++++++++++++++++++++++++++++++++++
//MATHS 

console.log(Math.abs(-4))//4
console.log(Math.round(34.5))//35
console.log(Math.ceil(34.5))//35
console.log(Math.floor(34.5))//34
console.log(Math.max(2,3,4,5))//5
console.log(Math.min(2,3,4,5))//2

console.log(Math.random())//Random value between 0-1
console.log((Math.random()*10)+1)//min value is 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max-min +1)+min)) //FORMULA FOR Gerating th erandodm values between the min and max
