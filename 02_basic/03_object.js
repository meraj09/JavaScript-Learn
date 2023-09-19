//singleton : when u declere object litereal it not makes singleton when object make with constructor its caled singleton
//*********** Non Singleton   ******** */
// object literals: const JsUser = {} => not singleton
// object constructor : Object.create => singleton

//object literals:

//object define with key and value

let mySym = Symbol("key1")


const JsUser = {
    name:"meraj",
    [mySym]: "Mykey1",
    age:18,
    location:"patna",
    email:"meraj@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// object access :
//1.dot notation
//2.square notation

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// change key value :

// JsUser.email = "merajsiddique09@gmail.com"
// console.log(JsUser);

// freezz object : it help to protect to edit value in object

// Object.freeze(JsUser)
// JsUser.age = 20



// add symbol in object and print

// let mySym = Symbol("key1")
// const JsUser = {
//     name:"meraj",
//     [mySym]: "Mykey1",
//     age:18,
//     location:"patna",
//     email:"meraj@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["monday","saturday"]
// }

// console.log(JsUser);

//function in object

JsUser.greeting = function(){
    console.log("hello good morning")
}

JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
