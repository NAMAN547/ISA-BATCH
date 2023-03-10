

const URL = "https://api.tvmaze.com/search/shows?q=";

const form = document.querySelector("#form");

const result = document.getElementById("container");



const getMovies = (searchText)=>{

    axios.get(`${URL}${searchText}`)
    .then((res)=>{

        const movies = res.data

        // console.log(movies);

        for(let movie of movies){

            if(movie.show.image != null){

                console.log(movie.show.image)

                const image = document.createElement("img");

                image.setAttribute("src",movie.show.image.medium  );

                result.append(image)

            }
        }
    })
}

const removeImage = (parent) =>{

    while(parent.firstChild){

        parent.firstChild.remove();
    }



}


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const searchText = form.children[0].value;

    removeImage(result)

    getMovies(searchText);

    form.children[0].value = ""

})


