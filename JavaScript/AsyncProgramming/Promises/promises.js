

const p = new Promise((resolve , reject)=>{

    


    setTimeout(()=>{

        
    let randomNum = Math.floor(Math.random()*10);

    console.log(randomNum);

    if( randomNum % 2 === 0){

        resolve(randomNum);

    }else{

        reject();
    }

    }, 2000)
})

console.log(p)


p.then((data)=>{

    console.log(data);

     let sum = data + 5;
     

     return sum;

   
})
.then((sum)=>{

    console.log(sum)

}).catch((err)=>{

    console.log(" error")
})








