const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

export default function rootReducer (state = initialState, action) {
    switch(action.type) {
        case "ADD_MOVIE_FAVORITE":
            const movieFavoriteExist = state.moviesFavourites.find(movie => movie.id === action.payload.id)
            return {

                ...state,
                moviesFavourites: movieFavoriteExist? state.moviesFavourites : [...state.moviesFavourites, action.payload]
            };
        
        case "GET_MOVIES":
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };

        case "GET_MOVIE_DETAILS":
            return {
                ...state,
                movieDetail: action.payload
            };

        case "REMOVE_MOVIE_FAVORITE":
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(m => m.id !== action.payload)
            };

        default:
            return {...state};
    }
}

