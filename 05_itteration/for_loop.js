// for loop:

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    // console.log(element);
}


// for (let i = 0; i <= 10; i++) {
//     console.log((`outer loop value : ${i}`));
//     for (let j = 0; j < 10; j++) {
//         console.log(`outer loop values : ${i} and inner loop values ${j}`);
        
//     }
// }

// Table print Using Loop 
// for (let i = 2; i <=10; i++) {
//     console.log(`Table Of : ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + "*" + j +"=" + i*j);
//     }
// }

// array iteration using for loop :

let myHeroes = ["salmon","shahrukh","amitabh","pankaj"]

for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    // console.log(element);
}


//some keyword using in loop :
// break and continue

// break

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("detected 5");
//         break;
//     }
//     console.log(`value of i is ${i}`);
    
// }

// continue:

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
    
}