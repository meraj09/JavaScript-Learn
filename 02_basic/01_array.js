const myArr = [1,2,3,4,5,6]

// console.log(myArr[2]);


//shallow copy 
//: a shallow copy of an object is a copy whose properties share the shame ref point of 
// to the same 

//deep copy: properties not share same refrence 


let myHeroes = ['srk','saloman','raman','aman']

let myNewArr = new Array (1,2,3,4,"meraj")

// console.log(myNewArr[4]);

// Array Method :
/*
push: push element in an array, its add value in array

pop : its remove last value in an array

unshift : add value in an array with starting index

shift : remove value in array with starting index , its work like pop

includes : check value in an array ('return value in boolean')

indexOf : show the value related to passed parameter in method

join : use to bind array and convert in string 





*/

//push example:
myArr.push(1);
myArr.push(7);
// console.log(myArr);

//pop example

myArr.pop()
myArr.pop()
// console.log(myArr);

//unshift

myArr.unshift(9)
// console.log(myArr);

//shift example :
myArr.shift()
// console.log(myArr);

//includes example

// console.log(myArr.includes(2));

//indexof exmaple:

// console.log(myArr.indexOf(3));

//when parameter not match its return -1 value 

//join example:

const myNewArray = myArr.join()

// console.log(myNewArray);
// console.log(typeof myNewArray);
// console.log(myArr);



//__________________ slice and splice ___________________________________
/*
slice : return copy section of an array

splice : return a originaly copy of an array value its remove parmamentaly in arry value 
*/
//slice example
console.log("A",myArr);

const myn1 =myArr.slice(1,3)
console.log(myn1);

//splice example
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);

// after splice an array : its change the array value 
console.log("c",myArr)