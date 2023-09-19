let MyDate = new Date();
// console.log(MyDate.toString());

// console.log(MyDate.toISOString());

// toLocalString print date & time in local formate
// console.log(MyDate.toLocaleString());

// toLocalStringDate print date only in local formate
// console.log(MyDate.toLocaleDateString());

// print only time in local 
// console.log(MyDate.toLocaleTimeString());

//type of date

// console.log(typeof MyDate);

// let myCreatedDate = new Date(2023,8,6)
// console.log(myCreatedDate.toDateString());

let myNewDate = new Date("10-13-2000")
// console.log(myNewDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());

//find secound value 

console.log(Math.floor(Date.now()/1000));