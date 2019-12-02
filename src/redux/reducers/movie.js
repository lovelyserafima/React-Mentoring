import {FETCH_FROM_SEARCH, SELECT_MOVIE, UN_SELECT_MOVIE} from "../constants/action-types";

const initialState = {
    movies: [],
    selectedMovie: ''
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FROM_SEARCH:
            return { ...state, movies: action.payload };
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case UN_SELECT_MOVIE:
            return {...state, selectedMovie: ''};
        default:
            return state;
    }
}