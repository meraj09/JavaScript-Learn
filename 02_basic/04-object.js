//singleton object

const tinderUser = {}

tinderUser.Id = "123abc"
tinderUser.name = "meraj"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//object nesting

const regularUser = {
    email:"meraj@gmail.com",
    fullname : {
        userfullname:{
            firstname:"meraj",
            lastname:"siddique"
        }
    }

}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname["firstname"])


// two object merged in single object ........

// const obj1 = {1:"a",1:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3= Object.assign({},obj1,obj2)
// console.log(obj3);

//use sprede operater to add two or more object

// const obj3 = {...obj1,...obj2}
// console.log(obj3);

//a array and they have  multiple object in a single array
//ex:

const users = [
    {
        name:"meraj",
        age:19
    },
    {
        name:"Aman",
        age:16
    },
    {
        name:"Rohit",
        age:18
    },
    {
        name:"raman",
        age:17
    }

]

let data = users[2].name;
// console.log(data);

// key and value extrect in object

// console.log(Object.keys(users[0]))
// console.log(Object.values(users[0]))
// console.log(Object.entries(users[0]))

// check property available in object or not
// console.log(users[1].hasOwnProperty('name'));



//big question
/*
i want to combine object in a single object 
if multiple object in an array
*/

let object1 = users[0]
let object2 = users[1]
let object3 = users[2]
let object4 = users[3]

// let FinalObj = Object.assign({},object1,object2)
// console.log(FinalObj);



//de-structured object

const course = {
    courseName: "js-in-hindi",
    price:999,
    courseIstructer:"Meraj"
}

const {courseIstructer} = course;
const {courseName} = course;
const {price} = course;


console.log(courseName);
console.log(price);
console.log(courseIstructer);

// JSON -- API


[
    {},
    {},
    {}
]