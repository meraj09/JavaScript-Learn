// ++++++++++++++++ This +++++++++++++++++

const myObj = {
    username:"meraj",
    pass:1234,
    wellcomemassage:function(){
        console.log(`Welcome To My Portal Your User Id : ${this.username} and your pass is ${this.pass}`)
    }
}
myObj.username = "Rahmat"
myObj.wellcomemassage();




// console.log(this)  : its show all window releted function run in console 



// ++++++++++++++++ ARROW +++++++++++++++++