


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

// let isNumberGreater = -4 > 2;

// console.log(isNumberGreater);



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


// Lecture 2


// let age = prompt("please enter your age?", 30);

// console.log(age, typeof age)


// let realAge = Number(age);

// console.log(realAge, typeof realAge);



// let x, y , z;


// x = String(3.14);
// console.log(x, typeof x);



//  y = Boolean(1);
//  console.log(y, typeof y)


// function print(){

//     let password = document.getElementById("userinput").value;

//     console.log(+password, typeof +password);

//     // let c = Number(password);

//     // console.log(c, typeof c);

// }


// Basic Operators and math operations

// let x = 1;

// x = -x;

// console.log(x)


// let  z = 2, y = 5;

// console.log( z + y);



// string concatenation

// let str1 = "first string";

// let str2 = 2;

// let str3 = str1 + " "+ str2;

// console.log( str3 , typeof str3);


// alert( 34 + 56 + "1");

// alert( '1' + 2 + 4);

// alert( 6 * '2');


// alert(+"");
// alert(+true);
// alert(+null);


// Assignment operator

// let x = 1;
// let y = 2;

// let z = 5 - (x = y +3);

// console.log(x);
// console.log(y);
// console.log(z);



// Increment Operator


// let counter = 0;

// ++counter;
// counter++;

// alert(counter);

// alert(counter++);
// alert(++counter);


//  Comparison operator


// console.log( 2 > 1);
// console.log( 'Z' > 'T');
// console.log( "JOHN" > "HARY");
// console.log("CITY" > "CIT")
// console.log("A" > "a");


// alert( "2" === 2)

// console.log( null === undefined);

// console.log( null == undefined);

// console.log(null > 0);
// console.log(null < 0);

// console.log(null == 0);

// console.log( null >= 0);
// console.log(null <= 0);

// alert(undefined == null);


// If statements



// let age = prompt("enter you age", 30);

// if( ){

//     console.log("you are underage")


// }else{

//     console.log("you are an adult")
// }


// let sum = 0;

// while(true){

//     let value = prompt("enter the values", '');


//     if(!value) break;

//     sum += Number(value);
// }

// alert(sum);



// for(let i = 0; i < 3; i++){

//     console.log(i);


// }


// Functions


// function declaration



// print(2,3);

// function print(a,b){

//     console.log( a+ b);

//     return


// }





// function expression



// print(2,3);

// let print = function (a,b){

//     console.log( a + b)



// }


// Arrow function 

// 1. Makes syntax easy and clear


// let print = (a,b,c) => expression ; 



// let multiply = n => {

//     console.log("hello world");

//     return n *3;
// }

// console.log(multiply(3));











