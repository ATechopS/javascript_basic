let score = NaN//we know the value
console.log(typeof score);
//const {score} = req.body //we don't know which value will come in this variable 

// console.log(typeof score);
// console.log(typeof (score));

let ValueInNumber= Number(score)
console.log(typeof ValueInNumber);
console.log( ValueInNumber);


// "434" => 434
// null => NaN
// "453ffsfd" =>NaN but here type of NaN is a number

// true => 1 , false =>0

// conversion in boolean
let isloggedIn = "Abhishek"
let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof isloggedIn);

// 1=> True , 0 => False
// "" => false
// "Abhishek" => true
 
// conversion in String
let somenumber= 45
let Instring= Object(somenumber)

// console.log(typeof Instring);
// console.log(Instring);

// if we will do conversion in object then we will get value like [type:value]


// ****************** Operations **************

let value = 5
let negvalue = -value
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power 2 of
// console.log(2/2);
// console.log(2%2); //rimender more usable in cryptography

let str1="abhishek"
let str2=" pandey"

// console.log(str1+str2);

// console.log("abhishek"+1+6)
// console.log(1+"abhishek"+6)
// console.log(6+1+"abhishek")

// console.log(4+4+"avjdjf"+65+5);

// console.log(34-53-"abhi")

let gamecounter=50
++gamecounter;
console.log(gamecounter);


// wueg0641