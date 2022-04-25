export function addMovieFavorite(movie) {  // película que quiero agregar a favoritos
    return { 
        type: "ADD_MOVIE_FAVORITE", 
        payload: movie 
    };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&s=${titulo}`)
        .then(response => response.json())
        .then(movies => {
            dispatch({ 
              type: "GET_MOVIES", 
              payload: movies 
            });
        });
    };
  }


  export function getMovieDetail (idMovie) {
    return function (dispatch) {
      fetch(`http://www.omdbapi.com/?apikey=d1dcdf9c&i=${idMovie}`)
        .then(response => response.json())
        .then(detail => {
            dispatch({
              type: "GET_MOVIE_DETAILS",
              payload: detail
            })
        }) 
    }
  }


  export function removeMovieFavorite (idMovie) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: idMovie
    }
  }