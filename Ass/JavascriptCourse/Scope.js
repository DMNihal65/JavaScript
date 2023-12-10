//let var const
//Global scope
let a =100
// const b =20
var c =300

//{} -> Scope

if(true){
    let a =10//local scope
    const b =20
    var c =30
    console.log("inner")
    console.log(a)//10

}

console.log(a)//100
// console.log(b)
console.log(c)// Print 30


//Closures

//Nested scope

function one(){
    const user = "Nihal";
    function two(){// can acess the parent variables
        const webiste = "Youtube";
        console.log(user)//can be accessed because in the parent scope
    }
    // console.log(webiste)//cant acess the values out of scope
    two()
}

one()


if(true){
    const user = "Nihal";
    if(user === "Nihal"){
        const webiste = " Youtube";
        console.log(user + webiste)
    }
    // console.log(webiste)//out of scope
}

// console.log(user)//out of scope

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


