//Arrow Functions

const user ={
    username : "Nihal",
    price : 99,
    welcommessege : function (){
        //for reffrenceing the current context use the THIS keyword
        console.log(`${this.username},welcome to website`);
        // console.log(this)
    }

}

// user.welcommessege();

// user.username ="sam";//context has been changed

// user.welcommessege();//sam,welcome to website


console.log(this)//{} empty object
//in browser the golbal object will be used i.e window


function chai(){
    let username = "Nihal";
    console.log(this.username)//undefined
}

chai();


//Arrow Function
const chai2 = () => {
    let username = "Nihal";
    console.log(this.username)//undefined
}
chai2()

//Explicit return
const addtwo = (num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(10,20))//30

//Implict Return
const addtwo2 = (num1,num2)=> num1+num2;

const addtwo3 = (num1,num2)=> (num1+num2)


const addtwo4 = (num1,num2)=> ({username:"nihal"})//Returning object in arrowe function
