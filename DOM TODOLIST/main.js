let form = document.getElementById("addForm");


let itemList = document.getElementById("items");

// let removeBtn = document.getElementsByClassName("delete")
// console.log(removeBtn);

// for(let i = 0;i <removeBtn.length; i++){

//     removeBtn[i].addEventListener("click", removeLi)


// function removeLi(e){

//     console.log(e.target);

// //     let ul = e.target.parentElement.parentElement;

//     let li = e.target.parentElement;

// //   ul.removeChild(li)

// li.remove()

// }
// }




form.addEventListener("submit", addItem)

itemList.addEventListener("click", removeItem)



function addItem(e){

    e.preventDefault();


  let item = document.getElementById("item");

  let newItem = document.createElement("li");

  newItem.className = "list-group-item";

  newItem.appendChild(document.createTextNode(item.value));


  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";



  deleteBtn.appendChild(document.createTextNode("X"));

  newItem.appendChild(deleteBtn)

  itemList.append(newItem);

}


// Remove items from Dom


function removeItem(e){


       console.log(e.target.classList);

    if(e.target.classList.contains("delete")){
        
        if(confirm("Are you sure you want to remove Item?")){

            let btnParent = e.target.parentElement;

            itemList.removeChild(btnParent)

        }
    }

}