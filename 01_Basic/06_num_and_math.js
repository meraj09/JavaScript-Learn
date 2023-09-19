const number = 100;
// console.log(number);
// console.log(typeof number);

const balance = new Number (200)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

//presision :- 
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));


const hundred = 1000000
// console.log(hundred.toLocaleString("en-IN"));



//+++++++++++++++ Math ++++++++++++++++++++++++++++++++

//<Math Liberaries in By defult in javascript

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 5, 8, 6));
// console.log(Math.max(4, 5, 8, 6));


// console.log(Math.floor((Math.random()*20)+1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
