// we can declear object like this also
const tinderuser= new Object() //sigleton object
// const tinderuser1={  }//non-sigleton object
// //these two objects are same we can declear like these

 tinderuser.id="1325652"
 tinderuser.name="Ravi kumar"
 tinderuser.age=18
 tinderuser.IsLogIn=true

// console.log(tinderuser);

// nested object : means object in object
// declearation
const regularUser={
    email:"Some@gmail.com",
    fullname:{ //fullname is object 
        userfirstName:"abhishek",
        userLastName:"pandey"
    }
}

// we can acces nested object by dot 
// we will use ? if will conect by api response otherwise we will need to use ifelse means if object is availiable then will give output otherwise leave
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userLastName);

// same as array we can combine object also 
const Obj1={a:45,b:67}
const Obj2={c:85,d:35}

// const Obj3={Obj1,Obj2}
// console.log(Obj3);

// we can perform function also as array
const obj3=Object.assign(Obj1,Obj2)//output :{ a: 45, b: 67, c: 85, d: 35 } , first will get target means empaty it will modify target by sorce by merge and will give target as a new object

// Object.assign(target,sorce one or more seprate by commas)
 //all values will combine and new object will get 
// will create a new object as object1,and Object2 
console.log(obj3);
console.log(Obj1);

// one more spread method for combine object  as we done in array
const obj3_={...Obj1,...Obj2} //it is a very simplest way for combine 

// data come from database as many object in array

const data_=[
    {
        username:"avi898",
        password:"6869896"
    },
    {
        username:"dsfji898",
        password:"6869896"
    },
    {
        username:"avinas898",
        password:"6869896"
    }
    ,
    {
    }  
]

// console.log(data_[1].password);//here we written 1 because we all looking from array so we will give index then we will get value from object

// console.log(Object.keys(tinderuser)); //when we will use Object then we need to tell about which object we all talking
// we will get output in array mean now we can put loop on that 
// it is very important

// as we get keys as array we can get value also as array
// console.log(Object.values(tinderuser));


// console.log(Object.entries(tinderuser));// by entries will create each keys and value as a value

// very important in what data user or we are performing loop want we have not then can crash so we will use a property for check is value availiable in Object if will avaliable we will get output true otherwise false

console.log(tinderuser.hasOwnProperty("ru"));


// ******************* D_structuring******************

// here declearing a object which name is course
const course={
    coursename:"python",
    price:898,
    course_teacher:"code_with_harry"
}

// course.course_teacher

// Mostly people use this way 
// value extract from object
const {course_teacher:instructer}=course // we can change name of key also after use : instructer
console.log(instructer); //it d_structuring 
// if anywhere we will see curly braces thenwe  will know there happenig destucturing

// **********************API*************************

// when we will give our work to anyone that is api
// in previous time api call come in xml but now come in json
// json 
// {
//     // its a json
//     // in json keys and value will in string
//    "myname":"ravi",
//   " coursename" : "python in hindi",
//    "price": "50"

// }

// sometimes we will get api in array for in array will see many objects