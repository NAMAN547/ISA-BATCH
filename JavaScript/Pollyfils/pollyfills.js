
let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];


// console.log(myArr.map((x)=> x *x))

// console.log(myArr);


// custom function


// function myPollyfillMap(arr, cb){

//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){

//         newArr.push(cb(arr[i]));
//     }

//     return newArr;

// }

// function square(x){

//     return x*x;
// }
// console.log(myPollyfillMap(myArr,square));



// Filter method

// console.log(myArr.filter((x)=> x % 2 === 0))

// console.log(myArr);


// custom function


function myPollyfillFilter(arr, cb){

    let filteredArr = [];

    for(let i = 0; i < arr.length; i++){

        if(cb(arr[i])){

            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

    function isEven(x){

        if( x % 2 === 0){

            return x;
        }
    }


console.log(myPollyfillFilter(myArr, isEven));




// Reduce method





    






