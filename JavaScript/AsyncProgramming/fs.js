const fs = require("fs"); 

// function cb(err, data){

//     if(!err){

//         console.log(data)
//     }else{

//         console.log(err)
//     }
// }

// fs.readFile("q1.html","utf-8", cb)


/******* Serial Read files *****/


// let count = 0;


// function cb( err, data){

//     count += 1;

//     if(count <= 5){

//         if(!err){

//             console.log(data)
//         }
//     }

//     fs.readFile( "q" + (count + 1) + ".html", "utf-8" , cb)
// }



// fs.readFile("q1.html", "utf-8", cb);





/*** Parallel files read */



// function cb(err,data){

//     if(!err){

//         console.log(data)
//     }else{

//         console.log(err)
//     }
// }

// for(let i = 1; i <= 5; i++){

//     fs.readFile( "q" + i + ".html", "utf-8", cb)
// }









/** closure property */

function outer() {
    console.log("outer is running")
    console.log("I am outer");
    console.log("outer is returning something");
    return function inner() {
        console.log("I am inner")
    }
}
let innerRef = outer();
innerRef();
function firstName(fname) {
    console.log("Your first Name is", fname)
    return function lastname(lName) {
        console.log(fname + " " + lName);
    }
}
let lastNameFnRef = firstName("Naman");
console.log("`````````````````````````");
lastNameFnRef("Tyagi");














