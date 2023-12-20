const title = document.getElementById("title");
const extraName = document.getElementById("extra-name");
const extraValue = document.getElementById("extra-value");
//  console.log(title);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovie = (filter ='') => {
  const list = document.getElementById("movie-list");
  if (movies.length === 0) {
    list.classList.remove("visible");
    return;
  } else {
    list.classList.add("visible");
  }
  list.innerHTML = ' ';
  
    const filteredMovies = !filter
  ? movies
  : movies.filter(movie => movie.info.title.includes(filter));
  // console.log(filteredMovies);

  filteredMovies.forEach((movies) => {
       let newEl = document.createElement("li");
      const{title:moviesTitle} = movies.info;
      // console.log(title);
      let {getFormatedTitle} = movies;
      // getFormatedTitle = getFormatedTitle.bind(movies)
      // console.log(getFormatedTitle());


      let text = `${movies.info.title} - `;
      for (const key in movies.info) {
          if (key != "title" && key != "_title") {
        text = text + `${key}:${movies.info[key]}`;
      }
    }
    newEl.innerText = text;
    list.append(newEl);
  });

};
const clearUI = () => {
  (title.value = " "), (extraName.value = " "), (extraValue.value = " ");
};

const addMovieHandler = () => {
  //  console.log(extraName);
  //  console.log(extraValue);
  const mTitle = title.value;
  const mExtraName = extraName.value;
  const mExtraValue = extraValue.value;

  if (
    mExtraName.trim() === "" ||
    mExtraValue.trim() === ""
  ) {
    console.log("Wrong import Enter valid Name!!!!");
    return;
  }
  console.log(mTitle);
  const newMovie = {
    info: { 
      set title(val){
        if(val.trim ===''){
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      }, 
      get title(){
        return this._title.toUpperCase();
      },
      [mExtraName]: mExtraValue },
    id: Math.random()
    // getFormatedTitle(){
    //   return this.info.title.toUpperCase();
    // }
  };
  
  newMovie.info.title = mTitle;
  movies.push(newMovie);
  console.log(newMovie);
  renderMovie();
  clearUI();
};
const filterEl = document.getElementById("filter-title");
const searchMovie = (fil) => {
  const filter =filterEl.value;
  renderMovie(filter);
  console.log(filter);
};

addMovieBtn.addEventListener("click", addMovieHandler);
filterEl.addEventListener("input", searchMovie.bind(null,filterEl));



// const person ={
//   name:'uche',
//   hobbies:['Cooking','Sports','Eating'],
//   age:20
// }

// const anotherPerson ={...person, hobbies:[...person.hobbies]};
// person.age = 12;
// anotherPerson.age =13;

// console.log(anotherPerson);