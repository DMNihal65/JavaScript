//EPOCh TIME
//JAn 01 1970 UTC
//Temporal api in feture 
let mydate= new Date() //Instance
console.log(mydate)//2023-11-29T17:58:05.760Z
console.log(mydate.toString())//Wed Nov 29 2023 23:28:25 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString())//29/11/2023, 11:28:49 pm
console.log(mydate.toLocaleDateString())//29/11/2023
console.log(typeof mydate)//object

let mycreateddate= new Date(2023,0,23)
console.log(mycreateddate.toDateString())//Mon Jan 23 2023

//Times
let mytime= Date.now()
console.log(mytime)//1701280970929

