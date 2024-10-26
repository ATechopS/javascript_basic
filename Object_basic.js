// singleton


// create Object by constrocter method 
// Object.create

// object literals //object declearation

let mysymb=Symbol("key1")

const iam={
    name:"Abhishek",
    age:18,
    "full name":"Abhisek pandey ",
  [mysymb]:"mykey1",//[] we are using for symbol
    email:"abhishek@google.com",
    IsloggedIn:true,
    Last_logindays:["sunday","monday"]

} //this is an object now if we will give value in this then we can acces that value
// in array we can use we can acces valu by position of array but in object we will provide a key for any value and will acesss by key 

// javascript will take key as a string


// how to acces object
// console.log(iam.email);
// console.log(iam["email"]); //there are two way to acces object
// console.log(typeof mysymb);
//here we will neeed to use squre bracket cause here we can not use .full name or ."full name" we can access like this ["full name"]
console.log(iam["full name"])

// change value from object
iam.email="abhitechops@gmail.com"

// freez an object then we can not change object values 
// Object.freeze(iam)
iam.name="abhi"

// for use symbol in object as a symbol we will use squre bracket in key they will can acces key as a symbol

 console.log(iam);

// we can treet function as variable
// it is a way to create a fuction for an object
// iam.greeting=function(){
//     console.log(`hello,${this.name} your age is ${this.age} `);
// }

// we can also create function like this
function greetingg (){
    console.log(`hello ${iam.name} your age is ${iam.age} and your email id is ${iam.email} `);
} 

// here declearing function for a object we can use this for acces object data
iam.greeting = function (){
  console.log(`hello ${this.name} is ${this.age} and your email id is ${this.email} `);
} 
console.log(greetingg());
console.log(iam.greeting());
// console.log(greetingg()); //if we will not give bracket then will get function reference
// but if we want to acces function we need to use bracket 

