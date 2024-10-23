let mydate=Date()
// console.log(mydate.toString());

// //  console.log(mydate.getfullyear());
// console.log(typeof mydate); //date is a Object //here confusion because when we will create any date by ourself then that will show their typeof as object but if we will check type of like this (typeof Date())) then will see String in output
// my conclusion saying that when we are writing Date() and want output then that will give us output of date as a String
// we can see result in line 14 and 15

// // console.log(mydate.toDateString());

// define a custom date 
let mycustomdate= new Date(2024,5,14)
// console.log(mycustomdate.toDateString())
// console.log(typeof mycustomdate);
// console.log(typeof mydate);

// console.log(mycustomdate.toLocaleString())
// console.log(`today's date and time are here ${Date().toUpperCase()} and this is new way or mordern way to write string and fuction togather `);

// console.log( typeof mydate);

// console.log(mycustomdate)
// console.log(mycustomdate);

// let newdate= new Date()
// // console.log(newdate.toLocaleString());
//  console.log(newdate.toISOString());
// console.log(newdate.toString());
// console.log(newdate.toTimeString());
// // console.log(newdate.);

let adate= new  Date("01/01/2024") //we can create any date object like this way 
// console.log(adate.toDateString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(adate.getTime());
// console.log(Math.floor(Date.now()/1000));

let new1stdate= new Date();
// console.log(new1stdate.getDate()+1);
 
// console.log(`${new1stdate.getFullYear()} this is full month by date object`)

console.log(new1stdate.toLocaleString('default',{
    weekday:"short",
    day:"numeric"
   
    
}))