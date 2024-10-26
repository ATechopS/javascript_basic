// fuction is a pakage which can we use again & again we need to create function onece then we can call that any where anytime by function name

// syntax of function
function function_name(){

}

// here a example
// console.log("a");
// console.log("b");
// console.log("h");
// console.log("i");
// if we need to print this more times then we will need to write this again&again it is a long process but if we will put it in a package means in a function then we can call it eassyly by function name

function Myname(){
    console.log("a");
    console.log("b");
    console.log("h");
    console.log("i"); 
    return 0;
}

// Myname();

// another example

function addtwo_number(num1,num2){//we we are creating function then which input we decide to get that will called parameter
    console.log(num1+num2);
    return num1+num2;
    console.log("abhishek"); //after give return forward code will not work that will called as unreachable code therefor we will give return in the end of function all code
    
}

// and which will give when call any fuction will called arguments
// addtwo_number(52,85) //if we will not give arguments then will get NaN here 

// if we want to store function 
const result=addtwo_number(52,85)
// here we will see when we are doing console.log(result) then we will get undefined cause here function called and function performed but not return anything . so if we will call function then we code will perform which is in function but we will not get anything if we have not told what need to return
console.log(result);
// now we will get function return stored in result variable


// loginuser massage
function loginuser_massage(username){
      return `${username} just logged in`;
}

const userm=
console.log(loginuser_massage("ravi674"))