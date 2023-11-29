let value =3
let negvalue =-3
// console.log(negvalue)

// console.log(2+2) //4
// console.log(2-2)//0
// console.log(2*2)//4
// console.log(2**3)//8
// console.log(2/2)//1 (questiont)
// console.log(2%2)//0 (reminder)

//string Concatination

// let str1 ="hello"
// let str2 =" world"

// let str3 = str1+str2
// console.log(str3) //hello world

// console.log("1"+2);//12
// console.log(1+"2")//12
// console.log("1"+2+2)//122
// console.log(1 + 2 +"2")//32

console.log(true) //true
console.log(+true) //1


//***********Comparison******** */

console.log(undefined > 0)
console.log(undefined < 0 )
console.log(undefined == 0)


//Strcit Check

console.log("2" === 2) //false

//++++++++++++++++++++++++++++++++++++++++++++/

//Stacks and heap

// Stack(Premtive) copy
// Heap(Non-Premtive) Reffrence


//Stack (Copy)
let myname ="Nihal"
let anothername=myname
anothername="changed"

console.log(anothername) //changed
console.log(myname) //Nihal



//Heap (Reffrence)
let user ={
    email:"user@gmail.com",
    upi:1234
}

let user2 = user

user2.email = "changed@email.com"

console.log(user.email)//"changed@email.com"
console.log(user2.email)//"changed@email.com"




