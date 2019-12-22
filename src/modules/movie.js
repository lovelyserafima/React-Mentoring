import {
    FETCH_FROM_SEARCH,
    FETCH_SIMILAR_MOVIES_BY_GENRE,
    SELECT_MOVIE,
    UN_SELECT_MOVIE
} from "../redux/constants/action-types";

const initialState = {
    movies: [],
    similarMovies: [],
    selectedMovie: ''
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FROM_SEARCH:
            return { ...state, movies: action.payload };
        case FETCH_SIMILAR_MOVIES_BY_GENRE:
            return { ...state, similarMovies: action.payload};
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case UN_SELECT_MOVIE:
            return {...state, selectedMovie: ''};
        default:
            return state;
    }
}