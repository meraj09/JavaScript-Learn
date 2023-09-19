
const jawan_heroes = ["sharukh"," salman","kartik"]

const mirzapur_heroes = ["divendu","pankaj","tripathi"]

//push : not recomant to use to concat two array

// jawan_heroes.push(mirzapur_heroes)
// console.log(jawan_heroes);
// console.log(jawan_heroes[3][1]);

//concat : use to concat to array

// const all_hero = jawan_heroes.concat(mirzapur_heroes)
// console.log(all_hero);

//sprade : use to concate two array its high recommanded

// const allNewHero = [...jawan_heroes,...mirzapur_heroes]
// console.log(allNewHero);

//flat : if you have multiple array in a single array so use flat to bind a single array

const another_arr =[1,2,3,4,[5,6,7],8,[3,5,6,[3,5,6]]]

const new_another_arr = another_arr.flat(Infinity)
// console.log(new_another_arr);

//IsArray : to check is value is an array or not ,its return boolean value


// console.log(Array.isArray("Meraj"));

//from : it is convert string into n array , even object key and value also convert in array but its discuss in leter session
//ex:

// console.log(Array.from("meraj"));
// console.log(Array.from({name:"meraj"}));//intresting : its return empty object

//convert varibles to an array
//of 
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3));
