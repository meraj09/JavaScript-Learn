// Primitiive
/*
7 types of primitive data

1.number 
2.string
3.boolean
4.null
5.undifined
6.symbol
7.BigInt
*/
//Ex:
const score =100  //number
const scoreValue =100.2  //number (float)

let name = "meraj" //string

let islogedin = true; //boolean

const outsideTemp = null;//null

let userEmail;//undifined

const id = Symbol('123')//symbol
const anotherId = Symbol('123')//symbol

const BigNumber = 12555222556666666n

// Refrence Or non-Primitiive
/*
3 types of primitive data

1. Array
2.Object
3.function


*/
//Ex : Object

let MyObj ={
    name:"meraj",
    age:18,
    address:"sankhe",
    mobile:9199583413
}
// console.log(MyObj);

//Ex : Array

const Hero =["Srk","Krk","Sunil"]

//Ex : Function

function MyFunction(){
    let a=10;
    let b=20;

    let c= a+b;
    // console.log(c);
}




//++++++++++++++++++++++++++ Stack++ & ++  Heap ++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let MyYoutube = "MerajCode"

AnotherYoutube = "AnotherYoutube"
console.log(MyYoutube);
console.log(AnotherYoutube);