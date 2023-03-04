let form = document.getElementById("addForm");


let itemList = document.getElementById("items");

let filterSearch = document.getElementById("filter");


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

filterSearch.addEventListener("keyup", filterItem)



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



//Items kaise filter kre

function filterItem(e){

    let text = e.target.value.toLowerCase();

    let items = document.getElementsByTagName("li");


    Array.from(items).forEach((item)=>{

        let itemText = item.firstChild.textContent;

        if(itemText.toLowerCase().indexOf(text) != -1){

            item.style.display = 'block';

          
        }
        else{

            item.style.display = 'none';
        }
    })
}




/********* Theme Changer ********/



const themeColor = document.querySelectorAll("input[name='theme']");

 const themeColorsArr = Array.from(themeColor);


 // storeTheme


 function storeTheme(themeColor){

   localStorage.setItem("theme", themeColor )


 }

 // applyTheme

 function applyTheme(){0

    let selectedTheme = localStorage.getItem("theme");

    themeColorsArr.forEach((themeOption)=>{

        if(selectedTheme === themeOption.id){

            themeOption.checked = true;
    
        }
    })
 }


 themeColorsArr.forEach((themeOption)=>{


    themeOption.addEventListener("click", ()=>{

        // console.log(themeOption)

        // console.log(themeOption.id)

        storeTheme(themeOption.id);

    })
 })

 document.onload = applyTheme();












