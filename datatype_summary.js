// ******* based on memory allocation that how data will save in mermory there are categrize two type of datatype.

// primitive datatype


// 7 types : string , Number ,Boolean , null, undefined, symbol,BigInt

const score= 200
const scorevalue= 200.5 //these two will consider in Number type here is not float

const IsLoggedin= false 
const outsidetem= null
let userpas; //we can not use const here cause const will need any value but we can write like below here is no value in variable but accept by const variable
const useremail= undefined;
// console.log(useremail);
const Id=Symbol("34")
const idanother= Symbol("34")
// console.log(idanother);
// console.log(Id==idanother);

const bigNumber=687668786896966995667n
// console.log(typeof bigNumber);


// string is not changable , if we will make a any change in string that will create a copy of string

// BigInt using for big scienctific value calculation

// in undefined variable crated and a memory space allocated but not assign value in mermory // and null is fully empaty not 0

// javascript is a dynamic language that mean we are not need to tell about datatype to javascript during create a variable javascript will hold diffrent type of data during runtime 

// **2 reference type (non primitive type)

// Array, Objects, functions

const heros=["krish","saktiman","ironman","thor","captain_america"]//array

let myobs= {
    name:"Abhishek",
    age: 19
} //Object

const myfirstfun= function(){
 console.log(6+9);
 
} //function

const myobsf= Object("abhi")
// console.log(typeof myfirstfun);
// console.log(typeof Id);


// *************************** Memory****************
// stack(premitive),heap(non-premitive)
// in stack memory what we will change we will get a copy of that 
// in heap changing will apply in original data

const myname="abhishek"

let myothername= myname
myothername= "khushiyal"
 console.log(myothername);
 console.log(myname);

//  in uper case myname variable will give a copy of value to myothername not will give original or reference so if we will change myothername value in future then "myname" variable value will not change  

let mydetails={
    name:"abhishek",
    age:19
}

let user2=mydetails

user2.name="ajay"

console.log(user2);
console.log(mydetails); //then we can see output that if in reference will change any value so in original will also change . because here working reference not giving valye copy
