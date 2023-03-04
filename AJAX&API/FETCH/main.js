const URL = "https://www.fishwatch.gov/api/species"

fetch(URL)
.then((response)=>{

 // we get data in chunkd so we will first wait to get the entire data
 return response.json();


})
.then((result)=>{

     for(fact of result){

        console.log(fact);

     

        let ul = document.getElementById("facts");

        
        let li = document.createElement("li");

        let img = document.createElement("img");

        // img.setAttribute("src" );



    //   document.createAttribute("img","src");

      console.log(img)

        li.appendChild(document.createTextNode(fact["Species Name"]))

        

        ul.append(li);

     }
})