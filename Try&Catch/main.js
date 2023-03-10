

// try {


//     setTimeout(()=>{

//         console.log( " first line ")

//         // lines of code with no error

//         sbbsjnjsnjnqs;
      
//           console.log(" last line");
      
//     },1000)
   
   
// }

// catch(err){


//     console.log("error aagya" , err)

// }








    // setTimeout(()=>{

    //     try{


    //         console.log( " first line ")

    //         // lines of code with no error
    
    //         sbbsjnjsnjnqs;
          
    //           console.log(" last line");


    //     }

    //     catch(err){


    //         console.log("error aagya", err.stack);

    //     }

      
    // },1000)


    // let jsonData = { "name" : "john doe" , age : 24}


    //      let user = JSON.parse(jsonData);

    //     console.log(user.age);


    // try{

    //     let user = JSON.parse(jsonData);

    //     console.log(user.age)

    // }

    // catch(err){

    //     console.log("error aagya", err)



    // }

    // console.log(" this line runs after try catch block")
    // console.log(" this line runs after try catch block")
    // console.log(" this line runs after try catch block")
    //  console.log(" this line runs after try catch block")



    // creating our own error


    // let error = new Error(" this is a user defined error");

    // let syntaxError = new SyntaxError("this is a syntax error");

    // let referenceError = new ReferenceError("this is a reference error");

    // throw referenceError

    // throw error;


    let customError = new Error(" this error is thrown because user does not have an address")



        let jsonData = { 

        
            "name" : "john doe" ,
             "age" : 24
            
            }


    try{

          let userJson = JSON.stringify(jsonData);

          let user = JSON.parse(userJson);

          if(!user.address){

            throw customError;

          }


        // console.log(user.age)

    }

    catch(err){

        console.log( err)

    }





