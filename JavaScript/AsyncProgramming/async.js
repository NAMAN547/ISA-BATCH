// setTimeout(()=>{

//     console.log("hello world")

// }, 5000 )


// let a =true;

// setTimeout(()=>{


//     a = false;
// }, 10000)


// while(a){

//     console.log("hello world")

// }


let a = true;


setInterval(()=>{

    if(a){

        console.log("hello world");
    }
}, 1000)



setTimeout(()=>{

    a= false;
    
}, 10500)

