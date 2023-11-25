let score = 22 //number
let score1 = "22" //string
score = "22abc"
let score2 = null
let score3 = undefined
let score4 = true


console.log(typeof score)
console.log(typeof score1)

//conversion into number

//combintion check
let valueinNumber = Number(score)
console.log(typeof valueinNumber)//Number
console.log(valueinNumber) //Nan

//null checking
let valueinNumber1 = Number(score2)
console.log(typeof valueinNumber1) //Number
console.log(valueinNumber1) //0

//Undefined checing
let valueinNumber2 = Number(score3)
console.log(typeof valueinNumber2)//Number
console.log(valueinNumber2) //Nan

//Boolean checking
let valueinNumber3 = Number(score4)
console.log(typeof valueinNumber3)//Number
console.log(valueinNumber3) // true - 1 for fales-0


//"33" => 33
//"34e" => Nan
//true" => 1;

let isLoggedin =1
let isLoggedin1 =""
let isLoggedin2 ="Nihal"

let booleanIsLoggedin = Boolean(isLoggedin)
let booleanIsLoggedin1 = Boolean(isLoggedin1)
let booleanIsLoggedin2 = Boolean(isLoggedin2)
console.log(booleanIsLoggedin) // true
console.log(booleanIsLoggedin1) //false
console.log(booleanIsLoggedin2)//true

//1 => true ; 0 => false
//"string" => true
//"" => false

//More
//String(string)



//********************Operations**********************/

