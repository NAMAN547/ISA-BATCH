

// // console.dir(document)

// // console.log(document.URL)

// // console.log(document.title);

// // document.title = "123";

// // console.log(document.title);

// // console.log(document.head)

// // console.log(document.body);
// // console.log(document.all);

// // console.log(document.forms)

// // console.log(document.links)

// // console.log(document.all[20].textContent)

// // document.all[20].textContent = "Hello"



// // Target Element using dom 

// // let mainHeading = document.getElementById("header-title");

// // console.log(mainHeading)

// // console.log(mainHeading.textContent)

// // console.log(mainHeading.innerHTML)

// // mainHeading.textContent = " DOM LIST";

// let topDiv = document.getElementById("top");

// console.log(topDiv);

// // topDiv.textContent = "this is some content"

// // console.log(topDiv);

// topDiv.innerHTML = `"<h1> This is a H1 heading</h1>
// <p> this is a paragraph </p>"`

// console.log(topDiv.all);

// topDiv.style.backgroundColor = "red";


// Object.assign(topDiv.style, {backgroundColor:"red", color:"black",fontSize: "30px"});


// // GetElementByClassName

// let containerDiv = document.getElementsByClassName("list-group-item");

// console.log(containerDiv);


// GetElementsByTagName

// let listItem = document.getElementsByTagName("li");

// console.log(listItem);


// // for(let i = 0; i< listItem.length; i++){

// //     listItem[i].style.backgroundColor = "grey"

// // }

// // let userInput = document.getElementsByTagName("input");

// // console.log(userInput);


// /*** QuerySelector ****/

// // let targetElement = document.querySelector("#special");

// // console.log(targetElement.children[0].children)

// // // targetElement.style.backgroundColor = "green"

// // // for(let i = 0; i< targetElement.length;i++){

// // //     targetElement[i].style.backgroundColor = "yellow"


// // // }



// // Traversing Elements


// // children and childNodes

// let list = document.getElementsByClassName("list-group");

// // console.log(list[0].childNodes);


// // console.log(list[0].parentNode.parentNode.parentNode.parentNode.parentNode);


// // console.log(list[0].firstChild)


// // let item = document.querySelector("li");

// // console.log(item);

// // console.log(item.nextElementSibling)



// // Creating a New Element

// let newHeading = document.createElement("h2")

// // console.log(newHeading);

// let addedText = document.createTextNode("This is a new heading")


// console.log(addedText);

// newHeading.appendChild(addedText);

// console.log(newHeading);

// let heading = document.getElementById("target");
// console.log(heading)

// let parentDiv = document.getElementById("main");


// parentDiv.insertBefore(newHeading,heading);

// newHeading.style.color = "red";



//Events


// let selectElement = document.getElementsByTagName("select");

// console.log(selectElement)


// function listenEvent(x){

//    document.body.style.backgroundColor = x

// }




let btn = document.getElementById("main-button");


btn.addEventListener("click", addEvent)


function addEvent(e){



    // let heading = document.getElementById("header-title");

    // // console.log(heading)

    // heading.innerText = "Changed Heading"


    console.log(e);

    // console.log(e.target)

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX)
    // console.log(e.offsetY)

     console.log(e.ctrlKey);
     console.log(e.altKey);

     console.log(e.value)

}


let inputElement = document.getElementById("item");

// console.log(inputElement)

inputElement.addEventListener("keypress",(e)=>{

    console.log(e.target.value)


})

// let newDiv = document.getElementById("special-div");



// newDiv.addEventListener("mousemove", newEvent);

// // newDiv.addEventListener("mouseout", newEvent);


// function newEvent(e){

//     console.log(e)


//     console.log("Event Name:"+ " " + e.type);

//     console.log("X-Cordinate:" + e.offsetX + "Y-Cordinate:" + e.offsetY )
// }



// let newDiv = document.getElementById("special-div");


// FORM EVENTS

let form = document.querySelector("#addForm")

// console.log(form)

form.addEventListener("submit", newEvent);


function newEvent(e){

    e.preventDefault();

    // console.log(e);

    console.log("Event Name:"+ " " + e.type);

}















































