const fs = require("fs")


// async function print(){

//     console.log("hello");

//     return "abc";
// }

// let temp = print();

// console.log(temp)



// function print(){

// //     return new Promise((res,rej)=>{

// //         console.log("hello");

// //         res("abc");

// //     })
// // }

// // let temp = print();

// // console.log(temp);



/****Await Keyword ****/


//  async function print(){

//     let p1 = new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             resolve("this promise has been resolved")

//         },5000)
//     })

//     let result = await p1;

//     console.log(result);


 
// }

// print();



/** ReadFile promises using async await */



 function abc(){

    return new Promise((res, rej)=>{

     fs.promises.readFile("index.html", "utf-8").then((data)=>{

        console.log(data);  // this line will run when our promise has been resolved
        res(" promise resolved")

     })
    })
}


abc().then((data)=>{

    console.log(data)
})
.catch((err)=>{

    console.log(err)
})

