const score= 45;
// console.log(score);

const balance = new Number(700) // here we are creating a object and telling object type is a number output will come as "Number: 700"

// we can see more prototype/fuction of object
// console.log(balance);

// console.log( balance.toString().length);
// console.log( balance.toFixed(3)); // tofixed wil do fixed chararacter of number how many we will give in prompt (as given 2) according to thats number will put zero after decimal

// we will use tofixed more in create e-chomerce wesites 

const othernum= 345.6546
// console.log(othernum.toFixed(3)); // output : 345.655
// console.log(othernum.toPrecision(3)); //

const newnum=400000
// console.log(newnum.toLocaleString('en-IN')); // it will change formate by use commas 
//en-IN and using this for use formate as using in india default is as US


// ************************ maths ***************************************

// console.log(Math);
// console.log(Math.abs(-4)); // we want to change sign - to + we can use this abs but if we will give + value then it will not change sign in - // <:>

//its fuction not property

// console.log(Math.round(4.6)); // for if want value without decimal in upper or lower
//but if we want to give we want upper or lower then we can  use different fuctions
// console.log(Math.ceil(4.2)); //ceil mean top
// console.log(Math.floor(4.9)); //floor mean down

// console.log(Math.sqrt(25))
// console.log(Math.max(7,8,9));
// console.log(Math.min(7,8,9));

// console.log(Math.random());//math.random will give number always between 0 and 1

// console.log((Math.random()*10)+1) // value can be as 0.05 then we will got 0.87 after multiply 10 but  we can avoid it by do +1 and doing multiply by 10 cause we avoid decimal

// console.log(Math.floor(Math.random()*10)+1) // by using Math.floor we will value after round below

// for get minimum or max strictly in math we can use a formula add min
//as
const min=5
const max=50
// console.log(Math.floor(Math.random()*(max-min+1))+min);

const value= Math.random()*100;


//  if (value<=0) {
//     console.log(value+1);
    
// // }
// else if (value >=100){
//     console.log(value-1);
    
// }
// else {
//     console.log(value);
    
// }


