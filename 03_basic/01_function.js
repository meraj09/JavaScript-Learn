


function myfunc() {
    console.log("M");
console.log("E");
console.log("R");
console.log("A");
console.log("j");
}

function addTwoNumber(num1,num2){

    let num3 = num1 + num2
    return num3;

}
let res = addTwoNumber(3,5)
// console.log( "result:", res);

function loginUsermassage(usermane) {

    if(usermane === undefined){
       console.log("Please Enter UserNAme");
       return
    }
    return `${usermane}, Just Loged In `
    
}

// console.log(loginUsermassage("Meraj"))

// REST  OPERATOR USE 
function calculateCartPrice(...number1) {
    return number1;
    
}

console.log(calculateCartPrice(100,200,300,400,600))

// =============== 2nd ======================= 
function calculateCartPrice2(var1,var2,...number1) {
    return number1;
    
}

// console.log(calculateCartPrice2(100,200,300,400,600))


// how to use object in function 

let user = {
    name : "Meraj",
    price : 2000
}

function objectHandle(anyObject){

    console.log(`Hii ${anyObject.name} and ${anyObject.price} This Is your Price `)

}


// Object Handler 
//1st method
// objectHandle(user)

//2nd method

//  objectHandle({
//     name:"meraj",
//     price:18
//  })



// array handale using function 

let myNewArr = [100,200,300,400,600]

function ArrayIteration(getArr) {
    return getArr[1]
}

console.log(ArrayIteration(myNewArr))