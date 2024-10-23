// Array
// array is  a object mean typeof a array is object
const firstarr=[2,["abhi","ravi",8],54,7,4,4,4,5,5,2,42,5452,5,455,45,]
// console.log(firstarr[1][1]);

// we can create a array as a object while array is a object see below


// ******Array- Methods

const secarr= new Array(8,3,5,2,3)
// secarr.push(76,7) //will add value in last which we will give as push parameter
// secarr.pop() //will remove value which will stay at last position
// console.log(secarr);

secarr.unshift(89) // will add value in array start postion it's like push but diffrence is start and end 

secarr.shift() // will remove a value from start
// console.log(secarr[0]);

secarr.includes(8) // this method will give us output in boolean type true/false if will exist in  array which parameter we are giving in includes

// console.log(secarr.indexOf(9989)); // if we will ask indexof value which is not in array will return -1 for every
// console.log(secarr.indexOf(8))

// // Now a fuction is join
// // it will change array type into string and will remove sqr bracket 
// let newarr1= secarr.join()
// console.log(secarr);
// console.log(typeof newarr1);
// console.log( newarr1);


// for acces the value of any array which we declear or any we will put a sqr bracket front of array name then will give index number which position value we want to accces 
//we can create array in array means 2d array and for acces value of array in array we will use to sqr bracket 

// console.log(typeof firstarr[2]);

//print array all value by loop
const array1=[4,5,6,7,8,7,6,5]
// for (let i = 0; i < array1.length; i++) {
//     const element = array1[i];
//     console.log(element);
    
// }

//******* Practice question for array******* */

// Qus1: give the average of student Marks data 

/*let students_marks=[52,80,65,65,12,45,85]

// let agerage=students_marks[0]+students_marks[1]
num1=0;
for (let i = 0; i < students_marks.length; i++) {
    
    let element = students_marks[i] + num1;
     num1=element
      
    }

console.log("This is the average of student marks");
console.log(Math.floor(num1/students_marks.length))
// */

/*Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
 All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.*/

// let price= [250, 645, 300, 900, 50]

// for (let i = 0; i < price.length; i++) {
//     const element = price[i];
//    console.log(element-element*10/100);
   
// }


// slice and splice 
// different between slice and splice 
// slice will include last position value also but in splice last position value will include also in output

// main different is between slice and splice that slice will not effect original array but splice will cut value from original array and will modify original array 
/*console.log("A")

Slice( ) : returns a piece of the array
 slice( startIdx, endIdx )

 let newarr=[8,9,6,4,6]
 let slicef=newarr.slice(1,4)
 console.log(slicef);
 console.log(newarr)

 Splice( ) : change original array (add, remove, replace)

 console.log("B")
 let newarr4=[8,9,6,4,6]
 let slicef2= newarr4.splice(1,3)
 console.log(slicef2)
 console.log(newarr4)
*/
// as we can see here splice is modyfing original array means cut value from original array and given us that value as out   

const mynewarr=new Array(2,21,11,45,21,21,25,54)
const mynewarr1=[5,4,5,2,5,4,0,2]

// console.log(mynewarr.push(221));
// console.log(mynewarr.length());

let name =new String("Abhishek")

if(mynewarr.length==name.length
){
    console.log(`it is same and ${mynewarr.length} is good for us`);
    
}
else{
    console.log(`it is not same but name length is ${name.length}`);
    
}


// ****************************PRACTICE QUESTIONS*******************

// QUE.1: Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
//  a. Remove the first company from the array
//  b. Remove Uber & Add Ola in its place
//  c. Add Amazon at the end

const array_companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"]
//  ans:a
// array_companies.shift()
// console.log(array_companies)

// ans:b
// array_companies.splice(2,2,"Ola")
// console.log(array_companies);

// ans:c
array_companies.push("Amazon")
console.log(array_companies);

