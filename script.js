const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b06a9d9aef912064dcd63368aca59cb&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=6b06a9d9aef912064dcd63368aca59cb&query="

const main = document.getElementById('section');
const form = document.getElementById('form');
const search = document.getElementById('query');

returnMovie(APILINK)
function returnMovie(url){
    fetch(url).then(res => res.json()).then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');

            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row');

            const div_column = document.createElement('div');
            div_column.setAttribute('class', 'column');
            
            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path; 
            //IMG_PATH + element.poster_path concat the IMG_PATH address which will redirect to the image poster

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            //above code is written in order to append the elements in the correct order
            // with the html file code written
            main.appendChild(div_row);
            //append the code to main section with the div_row which already has all the elements
        });
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = " ";

    const searchItem = search.value;
    if(searchItem){
        returnMovie(SEARCHAPI + searchItem);
        search.value = " ";
    }
});