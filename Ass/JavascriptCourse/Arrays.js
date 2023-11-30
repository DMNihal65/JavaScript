//arrays

const myarr = [0,1,3,4,5,"true",]//any types can be inserted into single varibale
//resisable

console.log(myarr[0])//0 acesseing

//shallow copy - reffrence in the arrays

const myheros = new Array(1,2,3,4,5)
console.log(myheros.length)//5

myheros.push(6)
myheros.pop()//[ 1, 2, 3, 4, 5 ]
console.log(myheros)//[ 1, 2, 3, 4, 5, 6 ]

myheros.unshift(9)//   [ 9, 1, 2, 3, 4, 5 ] Added into the first of the elemtent
myheros.shift(9)//[ 1, 2, 3, 4, 5 ]
console.log(myheros)

console.log(myarr.includes(4))//true
console.log(myarr.indexOf(4))//3


const newarray = myarr.join() //adds the new array to the myarr
console.log(newarray)//0,1,3,4,5,true
console.log(typeof newarray)//string


//SLICE AND SPLICE

//slice - dont include and dont alter the original array
//splice - includes and alos remove the spliced from the original array

console.log('a',myheros);//a [ 1, 2, 3, 4, 5 ]

const myn1 = myheros.slice(1,4)//[ 2, 3, 4 ]

console.log(myn1)//[ 2, 3, 4 ]
console.log("b",myheros)//b [ 1, 2, 3, 4, 5 ]


const myn2 = myheros.splice(1,4)//[ 2, 3, 4, 5 ]

console.log(myn2)//[ 2, 3, 4, 5 ]
console.log("c",myheros)// b [ 1 ] altered the original array



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const marvel =["thor","ironman","spiderman"]

const dc = ["superman","flash","batman"]

// marvel.push(dc)

//array inside array
console.log(marvel)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel[3])//[ 'superman', 'flash', 'batman' ]

const all=marvel.concat(dc)
console.log(all)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//Spred operator
const allheros = [...marvel,...dc]
console.log(allheros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another = [1,2,3,[1,2,[3,4,5[4,3,2]]]]
const real_another = another.flat(Infinity)
console.log(real_another)//[ 1, 2, 3, 1, 2, 3, 4, undefined ]


console.log(Array.isArray("hetatsh"))//false
console.log(Array.from("nihal"))//[ 'n', 'i', 'h', 'a', 'l' ]
console.log(Array.from({name : "nihal"}))//[]  intressing

let score1 = 100
let score1a = 200
let score1b = 300

console.log(Array.of(score1,score1a,score1b))//[ 100, 200, 300 ]

