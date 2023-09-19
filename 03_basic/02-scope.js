//scope

//1. Global Scope

//2. Block Scope


// ***** nested Scope 

function one() {
    const username = "meraj"

    function two() {
        const website = " Youtube"        
        console.log(username + website)
        console.log(website)
        console.log(username)
    }
    console.log(username)
    // two()
}
// one()
// console.log(username)




//2nd 

if(true){
    const username = "Meraj"
    if(username === "Meraj"){
        const website = " Youtube.com"
        console.log("username and website name",username + website);
    }
    console.log("username 1st scope",username);

}



















// ****** Closer Scope


