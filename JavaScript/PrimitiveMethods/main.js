

// Primitive data types method


// // let num = 1e-4;

// // console.log(num);


// // let num  = 255;

// // console.log(num.toString(36))

// let num = 23.58;

// // console.log(Math.round(num))


// // console.log(num.toFixed(1));


// // console.log(isFinite(Infinity));


// // console.log(isNaN("this is a string"));


// // let str = "100px";


// // console.log(parseInt(str, 2))

// // console.log(parseFloat("12.567 em"))


// // console.log(Math.random()*100)


// // console.log(Math.max(1,2,3,-5,100,38));

// // console.log(Math.min(1,2,34,575));


// console.log(Math.pow(10,5)) // 10e5



// String


// let str = "This is a string";

// console.log(str.length);

// console.log(str[-1])

// console.log(str.at(-1))

// for(let char of str){

//     console.log(char);
// } 


// let str1 = "hello";

// str1[0] = "H";

// console.log(str1[0]);

// console.log(str[1].toUpperCase())



// let str = "This a string";


// // console.log(str.lastIndexOf("is"))



// // console.log(str.includes("is"));

// console.log(str.slice(7, 10 ));

// // console.log(str.slice(-3,-1));

// // console.log(str.substring(10,7))


// console.log(str.substr(-4,2))






// Arrays in Javascript


// let arr = new Array(10);

// let arr1 = [10];


let fruits = ["apple", "oranges", "grapes"];

console.log(fruits[1]);


fruits[0] = "banana";

fruits[3] = "apple";

// console.log(fruit);

// console.log(fruit.length);

// console.log(fruit[fruit.length - 1]);

// console.log(frui);

console.log(fruits.push("pineapple", "kiwi"))

// console.log(fruit.pop())

// console.log(fruit)



console.log(fruits.unshift("newFruit", "newfruit2"));


// console.log(fruit.shift())
// console.log(fruit);


// for(let fruit of fruits){

//     console.log(fruit);
// }

// for(let fruit in fruits){
//     console.log(fruits[fruit])
// }


// fruits.forEach(alert)


// ["virat kohli", "ms dhoni", "rohit sharma"].forEach((element,index,array)=>{

//     alert(` ${element} is at ${index}th index of the array  ${array}`);


// })


// Arrays Methods



let numbers = [ 1, 2, 3, 4, 5, 6,10,13, 7,9 ];

//  delete numbers[2];

//  console.log(numbers);

 
//  numbers.splice(3, 4 );

//  console.log(numbers);


// let newArr = numbers.slice(0, 4)

// console.log(numbers)

// console.log(newArr);




// console.log(numbers.concat([8,9,10], [11,12,113]))

// console.log(numbers)


// console.log(numbers.indexOf(10));

// console.log(numbers.includes(3));

let users = [

    {

        name:"naman",
        age: "26",
        id: 0
    },

    {

        name:"sabeel",
        age: "27",
        id: 1
    },

    {

        name:"kartik",
        age: "28",
        id: 2
    }

]

// console.log(users.filter((item)=> item.id < 2));

// console.log(users);


console.log(numbers.map( x => x*2))

console.log(numbers);

// let newArr = [

//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]

// ]

// console.log(newArr[1][1])


// console.log(numbers.sort((a,b)=> b -a));


// let str = " I love coding blocks";

// console.log(str.split(" ").join("$"));



// let number = [1,2,3,4,5,6,7];
// console.log(number.reduce((sum,element)=> sum + element,0 ));



// // Objects

// // let person = new Object();

// let person  = {

//     name: "naman",
//     2: " this is string",

//     "age": 24,
//     "this is a key": true,

//     fun: function(){

//         console.log("hello world");

//     },

//     colors: [ "red", "blue", "green"]
// };


// // console.log(person["this is a key"]);

// // console.log(person.colors[1]);

// // console.log(Object.keys(person));

// // console.log(Object.values
// //     // (person));

    
//     // for(let key in person){

//     //     console.log(person[key])
//     // }


//     person.address = "new delhi";

//     console.log(person);

//     person.address = "chandigarh";



let person1 = {

    name: "sabeel",

    age : 25
}



let person2 = person1; // copied by reference

delete person1.name;

person2.address = "new delhi"

console.log(person1);

console.log(person2);

console.log(  person1 === person2)

console.log(person1 = null);

console.log(person1)

console.log(person2);

let a = {};

let b = {};

console.log( a === b);












































































