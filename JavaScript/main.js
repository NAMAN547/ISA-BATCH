


// console.log("hello world");




// function first(){

//     console.log("first")
// }
// function second(){

//     console.log("second")
// }
// function third(){

//     console.log("third")
// }

// first();
// second();
// third();




// alert("hello");
// [1,2].forEach(alert);




/**** Variables in JS ******/


// let message;

// message = "hello world";

// message = "hello my name is naman";

// console.log(message);

// let user = "naman";
// let age = 26;
// let location = "delhi";

// let user = "naman",
//  age = 25,
//  city = "delhi";


//  var username = "naman tyagi";
//  console.log(username);


// var naman-tyagi  = 34;
// console.log(naman-tyagi);



// var apple = 2;
// var APPLE = 2;

// let class = "ISA";
// console.log(class);


// const age = 26;

// age = 27;

// console.log(age);



// Scope of Variables



//global scope

let a = 35;

// console.log(a);


// function scope

function print(){

    // let a = 2;

    // console.log(a);

    newVar = " hello"; 
    console.log(newVar);

    var newVar;

    if(true){

        let b = 3;
        const c = 5;

        var d = 45;

        console.log(b);
        console.log(c);

    }

    // console.log(b)
// console.log(c)
    // console.log(d)


}

print()

// console.log(a);


// Data types in JS


// let n = 12.345;
// console.log(n, typeof n);

// console.log(NaN + 0);

const n = 12344566n;

console.log(n, typeof n);


// String 


// let str = "string";
// let str2 = 'string 2';
// let str3 = `string ${1+1}`;

// console.log(str3, typeof str3)



//Boolean

let isNumberGreater = -4 > 2;

console.log(isNumberGreater);



// Null 

// let name = null; 

// name = naman;

// console.log(name, typeof name)

// Undefined => value is not assigned can be assigned afterwards

// let age;

// age = 100;

// console.log(age);




// Alert, Prompt, Confirm

// alert("hello");

// let age = prompt("what is your age?", 100)

// alert(`your age is ${age} `)


// let isGood = confirm("is kl rahul a good batsman?");

// alert(isGood)