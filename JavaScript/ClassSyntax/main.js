

// let user = {


//     name: "kartik",

//     age: 24,

//     city: "delhi"

// }


// function Person(name , age , city){


//     this.name = name;

//     this.age = age;

//     this.city = city


// }

// let p1 = new Person("kartik", 24 , "delhi")

// let p2 = new Person("a ", 24 , "delhi")
// let p3 = new Person("b", 23 , "delhi")
// let p4 = new Person("c", 24 , "delhi")
// let p5 = new Person("d", 24 , "delhi")
// let p6 = new Person("e", 24 , "delhi")

// console.log(p1 ,p2 , p3 , p4)




////// CLASS SYNTAX


class Car{

    constructor(name , price , isCondition){

        this.name = "maruti";
        this.price = "2";
        this.isCondition = false;
    }


   // Normal Method 

    getCarName(){

        console.log(`CAR name : ${this.name}`)
    }

    get getCarPrice(){

      return this.price

    }

    set setCondition(newCondition){

        this.isCondition = newCondition;
    }

    static sayHello(){

        console.log(" hello from car class")
    }




}

const c1 = new Car("Audi" , 10000 , true)

// const c2 = new Car("BMW" , 5000 , false)


class SuperCar extends Car{
    
    constructor( name , price , isCondition ,  color , maxspeed){

        super( name , price , isCondition);  // this will call parent class constructor

        this.maxSpeed = maxspeed;
        this.color = color 


    }

}

const c2 = new SuperCar( "ferrari" , "20000", true ,  "250kmph" , "red" )