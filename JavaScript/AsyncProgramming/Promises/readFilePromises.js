const fs = require("fs");


//  let readFilePromises = fs.promises.readFile("index.html", "utf-8");
 
//  // here fs.promises.readFile  promise

//  console.log(readFilePromises);

//  readFilePromises.then((data)=>{

//     console.log(data);

//     console.log("I ran first")


//  })




// Promise.all()


let p1 = fs.promises.readFile("abcd.html", "utf-8").then((data)=>{

    console.log("promise p1 resolved");

  

}).catch((err)=>{

    console.log("error from first promise")
})


let p2 = fs.promises.readFile("qjj.html", "utf-8").then((data)=>{

    console.log("promise p2 resolved");

    return data;

}).catch((err)=>{



    console.log("error from second promise")
})


let combinedPromise = Promise.all([p1,p2]);

combinedPromise.then((data)=>{


    console.log(data);

    console.log(" both promise combined resolved")



}).catch((err)=>{

    console.log(err)

    console.log("error in reading the file")
})














