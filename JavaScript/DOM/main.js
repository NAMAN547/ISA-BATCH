

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


// for(let i = 0; i< listItem.length; i++){

//     listItem[i].style.backgroundColor = "grey"

// }

// let userInput = document.getElementsByTagName("input");

// console.log(userInput);


/*** QuerySelector ****/

// let targetElement = document.querySelector("#special");

// console.log(targetElement.children[0].children)

// // targetElement.style.backgroundColor = "green"

// // for(let i = 0; i< targetElement.length;i++){

// //     targetElement[i].style.backgroundColor = "yellow"


// // }



// Traversing Elements


// children and childNodes

let list = document.getElementsByClassName("list-group");

// console.log(list[0].childNodes);


// console.log(list[0].parentNode.parentNode.parentNode.parentNode.parentNode);


// console.log(list[0].firstChild)


// let item = document.querySelector("li");

// console.log(item);

// console.log(item.nextElementSibling)



// Creating a New Element

let newHeading = document.createElement("h2")

// console.log(newHeading);

let addedText = document.createTextNode("This is a new heading")


console.log(addedText);

newHeading.appendChild(addedText);

console.log(newHeading);

let heading = document.getElementById("target");
console.log(heading)

let parentDiv = document.getElementById("main");


parentDiv.insertBefore(newHeading,heading);

newHeading.style.color = "red";
































