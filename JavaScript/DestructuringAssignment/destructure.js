

// Array Destructuring

// let arr = ["naman", 26, " new delhi", " tyagi", 1, 2, 3, 4, 5, 6, 7, 8, 9];


// const [ name , age , ...anything ] = arr;

// console.log(name, age, ...anything);

// console.log(anything[0])

// // console.log(name, typeof name);
// // console.log(age, typeof age);

// // console.log(address);

// // console.log(arr);




// Object Destructuring


let person = {

    name: "naman",

    age: " 27",

    address: " USA",
     
    favNum: [1,2,34,5]

}

let { name , age, ...rest } = person;

name = " Sidharth";

// console.log(person)

console.log(name , age, rest.favNum)
