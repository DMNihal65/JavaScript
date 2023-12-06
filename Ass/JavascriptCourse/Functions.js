
function savemyname(){
    console.log("nihal")
    console.log("inside the function")
}

savemyname()//caliing function

function addnum(num1,num2){//Parametres
    console.log(num1+num2)
    
}

addnum(10,20)//passing the values aurguments
addnum(3,"a")//3a
//store in the valerable using the return in the function

function add2num(num1,num2){//Parametres
    // console.log(num1+num2)
    return num1+num2
}

const result = add2num(10,30)
console.log(result)


function loginuser(username,password){
    if(username === "nihal" && password === "nihal@123"){
        return `${username} just logged in`
    }else{
        return "Invalid Credentials"
    }
    
}

console.log(loginuser("nihal","niha@123"))




function calaculatePrice(...num1){//rest opertor return the vales in array
    return num1//[ 2, 6, 7, 8, 9 ]
}

console.log(calaculatePrice(2,6,7,8,9))



function calaculate2Price(val1,val2,...num1){//rest opertor return the vales in array
    console.log(val1)//2
    console.log(val2)//6
    return num1//[ 7, 8, 9 ]

}

console.log(calaculate2Price(2,6,7,8,9))


//Function with the objects

function users(anyobject){
    console.log(`Usernames: ${anyobject.username}and password: ${anyobject.password}`)

}

const cred = {
    username:"Nihal",
    password:"nihal@123"
}

users(cred)