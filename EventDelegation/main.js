

// let elements = document.querySelectorAll("div")

// console.log(elements);


//  const elementsArr = Array.from(elements);

//  console.log(elementsArr);

//  for(let ele of elementsArr){

//     ele.addEventListener("click", e => alert(`${ele.textContent}`), {capture:true})

//     ele.addEventListener("click", e => alert(`${ele.textContent}`))


//  }


let mainElement = document.getElementsByTagName("main");

console.log(mainElement)


mainElement[0].addEventListener("click", (e)=>{

    console.log(e.target)

})


