const heros=["thor","docter strange","avengesrs"]
const dc_heros=["superman","batman","flash"]


// if we will push any array in any array then which array we are pushing that wiil take as a array element will create 2d array means in array a array at a position of first array

// heros.push(dc_heros)


// by use flat prototype we can 

// console.log(heros.flat(1));

// we could also use concate for merge array 
let newarr = heros.concat(dc_heros)
 console.log(newarr);

// here we learn push will work on  existing array and will return after work but concat will give us new array after work

// one method is also 
const newarr1=[...dc_heros,...heros]
// console.log(newarr1);

const mynewarr=[4,6,454,343,34,[54,64,54,546,[5,4,7,1,[544,58,61,3,]]]]
const allnewarray=mynewarr.flat(1) //we can give infinity
// console.log(allnewarray);

// flat will return all array in flat by recursive way how many depth need to we need to give 
console.log(Array.isArray("abhishek")) // here we asked this is an array then we got output false means this is not an array 

// now we can convert array to any string 
console.log(Array.from("213262"))
// if it will not convert then will give us empty array

// now if we want to convert variables in array we will use "of" 

let run1=7
let run2=96
let run3=52

console.log(Array.of(run1,run2,run3));
