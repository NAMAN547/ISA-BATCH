


// JSON DATATYPES

 // BASONN => BOOLEAN , ARRAYS , STRING , OBJECT , NULL , NUMBERS

 // KEY: VALUE PAIR


 // JSON EXAMPLE


 const objectData = {

   name : "naman",

    age: 24, 

    favColor : ["red", "green ", "blue"],

    isTeacher : true,

    address: { 

        country: "India",

         city : "new delhi"
    
    }
 }



 const person = JSON.stringify(objectData);

 console.log(person);


 let newData = JSON.parse(person);

 console.log(newData);



 

//  console.log(objectData, typeof objectData)




