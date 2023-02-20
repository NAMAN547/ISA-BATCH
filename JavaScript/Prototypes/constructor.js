


// function fun(){

//     this.name = "kartik";

//     console.log(this)
// }

// fun();


// const person = {

//     name: "John Doe",

//     age: 25,

//     isAdult: true,

//     favCar: ["baleno", "audi", "bmw"],

//     print: function(){

//         console.log(this.name)
//     }

// }

// person.print()



// Constructor Function

// function Person(name, age){

//     this.name = name;

//     this.age = age;
    

// }

//  const p1 = new Person("Kartik", 25);

//  const p2 = new Person("Naman", 30);





// function Person(name, age){

//     this.name = "Kartik";

//     return "return this";
// };



//  console.log(new Person().name)

//  const p2 = new Person("Naman", 30);



// explicit binding





const p1 = {

    name: "Sabeel",
    age: 30
}


const p2 = {

    name: "abhishek",
    age:22,
    address: "new delhi",
    printInfo: function(){

        console.log(this)
    }
}


// console.log(p2.printInfo())

// console.log(p2.printInfo.call(p1));


// let f1 = p2.printInfo.bind(p1);

// // console.log(f1())







