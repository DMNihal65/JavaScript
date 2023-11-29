"hello" + "world"
let name ="Nihal"
let account = 123456789
console.log("hello" + "world") //Outdated sytax

console.log(`Hello my name is ${name} and my account is ${account}`)

const gameName = new String('Thebjk-asin') //Strings in Objects can be itrated

console.log(gameName[0]) //axess the 0th key

console.log(gameName.__proto__) // prototype objects

console.log(gameName.lenght);
console.log(gameName.toUpperCase());//THEBJKASIN
console.log(gameName.charAt(6));//t
console.log(gameName.indexOf('b'))//3

const newstring=gameName.substring(0,5); //start 0 and end of string 5
const new2=gameName.slice(2,4)
console.log(newstring)
console.log(new2)
const new3 = "   asf   "
console.log(new3)//"   asf   "
console.log(new3.trim())//asf remove the spaces

const url = "https://api.github.com%20nihal"
console.log(url.replace("%20", "-"))// https://api.github.com-nihal
console.log(url.includes('https'))//true

const new4 ="nihal-dm-again-nihal"

console.log(new4.split("-"))//[ 'nihal', 'dm', 'again', 'nihal' ]



