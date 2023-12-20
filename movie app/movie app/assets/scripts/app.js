const modalElement = document.getElementById('add-modal');
const backdropElement = document.getElementById('backdrop');
const startAddMovieBtneElement = document.getElementById('start-add-movie');
const cancelMovieBtnElement = document.getElementById('cancel-movie');
const addMovieElement = document.getElementById('add-movie');
const textElement = document.getElementById('entry-text');
const inputElement = document.querySelectorAll('input');
const deleteModalElement = document.getElementById('delete-modal');

const cancelMovieDeleteBtn = deleteModalElement.querySelector('.btn--passive');
let confirmDeleteMovieBtn = deleteModalElement.querySelector('.btn--danger');







const movies = [];



function removeElementhanduler(movieId){
    console.log(movieId);
    let movieIndex = 0;
    for (const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;
    }
    console.log(movieIndex);
    movies.splice(movieIndex,1);
    const listRoot = document.getElementById('movie-list');
    // console.log(listRoot.children[movieIndex]);
    // listRoot.children[movieIndex].remove();
    listRoot.removeChild(listRoot.children[movieIndex]);
    closeModalHandular();
    updateUi();
}

function startDeleteMovie(movieId){
    // console.log(movieId);
    deleteModalElement.classList.add('visible');
    toggleBackDrop();

    confirmDeleteMovieBtn.replaceWith(confirmDeleteMovieBtn.cloneNode(true));

    cancelMovieBtnElement.removeEventListener('click', closeModalHandular);
    confirmDeleteMovieBtn = deleteModalElement.querySelector('.btn--danger');

    cancelMovieDeleteBtn.addEventListener('click',closeModalHandular);
    confirmDeleteMovieBtn.addEventListener('click',removeElementhanduler.bind(null,movieId));
}
     

function createMovieElement(id,title, image,rating){
const newMovieElement = document.createElement('li'); 
 newMovieElement.className = 'movie-element';
 newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${image}" alt= "${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
 `
 newMovieElement.addEventListener('click',startDeleteMovie.bind(null,id)); 
 const listRoot = document.getElementById('movie-list');
 listRoot.append(newMovieElement);
}

function updateUi(){
    if(movies.length === 0){
        textElement.style.display = 'block';
    }else{
      textElement.style.display = 'none';
    }
}

function toggleBackDrop(){
    backdropElement.classList.add('visible');
}
function openModalhandular(){
    modalElement.classList.add('visible');
    toggleBackDrop();
    clearUserInput();
}

function closeModalHandular(){
    modalElement.classList.remove('visible');
    backdropElement.classList.remove('visible');
    deleteModalElement.classList.remove('visible');    
}

function backdropHandular(){
   closeModalHandular();
}


function clearUserInput(){
    const userInputs = inputElement;
  for(const userInput of userInputs){
     userInput.value = '';
  }
}

function startAddMovie(){
    const title = inputElement[0].value;
    const imgUrl = inputElement[1].value;
    const rating = inputElement[2].value;
    if(title.trim() ===" "||
        imgUrl.trim() === " "||
        rating.trim() === " "||
        +rating < 1||
        +rating > 5
    ){
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: title,
        imgUrl:imgUrl,
        rating:rating
    }
   movies.push(newMovie);
   console.log(movies);
   closeModalHandular();
   clearUserInput();
   createMovieElement(newMovie.id,newMovie.title, newMovie.imgUrl,newMovie.rating);
   updateUi();
//    removeElementhanduler(newMovie.id);
}

startAddMovieBtneElement.addEventListener('click',openModalhandular);
cancelMovieBtnElement.addEventListener('click',closeModalHandular);
backdropElement.addEventListener('click',backdropHandular);
addMovieElement.addEventListener('click',startAddMovie);



