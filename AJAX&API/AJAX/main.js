
// yeh object bnaya hai ajax request bhejne ke liye

const xhr = new XMLHttpRequest();

xhr.onload = function(){

    let ul = document.getElementById("facts");

    // console.log(xhr)

    // console.log("request successful hai toh show: ", this.response);

    let jsonData = this .response;

    // console.log(jsonData);

    let catFacts = JSON.parse(jsonData);

    console.log(catFacts);

    for(let fact of catFacts){

        let li = document.createElement("li");

        li.appendChild(document.createTextNode(fact.text))

        ul.append(li);

    }
}

xhr.onerror = function(){

    console.log("error aagya");

}


// request kis url pe bhejni hai usse set kro

xhr.open("GET", "https://cat-fact.herokuapp.com/facts");


let btn = document.querySelector("#btn");

btn.addEventListener("click",(e)=>{

    xhr.send();

})








