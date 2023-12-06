//singleton
//litrals- non singleton
//construtor- singleton

//object litrals
Object.create //singleton

//Symbol
const mysm = Symbol("key1")

const jsuser = {
    name : "nihal", //key :value,
    [mysm] : "mykey1",//using symbol in the object
    age:15,
    location : "Banglaore",
    email: "Nihal@gmail.com",
    isloggedin : false

} //object

console.log(jsuser.email)// Acessing the object Nihal@gmail.com
//Another method
console.log(jsuser["email"])//Nihal@gmail.com

//accessing th symbol
console.log(jsuser[mysm])//mykey1

jsuser.email = "changed@email.com"
// Object.freeze(jsuser)//fressing the object
jsuser.email = "freezed@email.com"
console.log(jsuser.email)//changed@email.com


//Object nad Function
jsuser.greating = function(){
    console.log("Hello user!");
}

console.log(jsuser.greating)//undefined
console.log(jsuser.greating())//Hello user!    undefined

console.log(jsuser)// greating: [Function (anonymous)],

//Using "this"

jsuser.greating2 = function(){
    console.log(`Hello user! ${this.name}`);
}
console.log(jsuser.greating2())//Hello user! nihal


//"""""""""""""""""""""""""""""""""""""""""""""""""

//using Consructor

const tinderuser = new Object() //Singleton object

const tinderuser2 = {} //non singleton

tinderuser.id = "123abc"
tinderuser.name ="nihaltinder"
tinderuser.isloggedin = false

const regularuser = {
    email : "Nihal@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Nihal",
            lastname : "DM"
        }
    }
}

console.log(regularuser.fullname)//{ userfullname: { firstname: 'Nihal', lastname: 'DM' } }
console.log(regularuser.fullname.userfullname.firstname)//Nihal
console.log(regularuser.fullname?.userfullname.firstname)//? used for the protection if the data is there in the repsonse api the only the data is furter ftehced or else go for if else loop

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    1:"d"
}

const obj3 = {obj1,obj2}
console.log(obj3)  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'd', '3': 'c' } }

const obj4 = Object.assign({},obj1,obj2) // Object.assign to target object and return if more than 3 object then use {}-target and obj1,obj2 are the source 
console.log(obj4)//{ '1': 'd', '2': 'b', '3': 'c' }

//spred opeartor

const spred = {...obj1,...obj2} //{ '1': 'd', '2': 'b', '3': 'c' }


//oprating the objects from the database

console.log(tinderuser)//{ id: '123abc', name: 'nihaltinder', isloggedin: false }

console.log(Object.keys(tinderuser))//[ 'id', 'name', 'isloggedin' ]
console.log(Object.values(tinderuser))//[ '123abc', 'nihaltinder', false ]

console.log(tinderuser.hasOwnProperty('isloggedin')) //true



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//APIS And  Destrutring

const course = {
    coursename : "Nihal course",
    price : "999",
    courseteacher:"Nihal"
}

const{courseteacher} = course
console.log(courseteacher)//Nihal
//de-structure
const {coursename : nameofcourse}=course
console.log(nameofcourse)//Nihal course


//Destruting in REACT
const navbar = ({company}) =>{

}
navbar(company = "nihalcomp")




//APIS

//Erlier the Data wold be in the  XML format
//Now the data is in the json fomrat 

// //{
//     "name" : "nihal",
//     "place" : "bangalore"
// }


//data in the form of array
//random user api smaple response

// [
//     {

//     },
//     {

//     },
// ]










