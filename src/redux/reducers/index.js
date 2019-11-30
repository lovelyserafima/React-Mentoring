import {
    FETCH_DEFAULT,
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING, UPDATE_SEARCH_VALUE, SELECT_MOVIE, UN_SELECT_MOVIE
} from '../constants/action-types';
import {sortingTypeForSearch, TITLE} from "../../components/constants/CommonConstants";

const initialState = {
    movies: [],
    sortingType: sortingTypeForSearch["release date"],
    searchOption: TITLE,
    selectedMovie: '',
    isSearching: false,
    error: false,
    searchValue: ''
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DEFAULT:
            return { ...state, movies: action.payload };
        case FETCH_FROM_SEARCH:
            return { ...state, movies: action.payload };
        case CHANGE_SEARCH:
            return { ...state, searchOption: action.payload };
        case CHANGE_SORTING:
            return { ...state, sortingType: action.payload };
        case UPDATE_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case SELECT_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case UN_SELECT_MOVIE:
            return { ...state, selectedMovie: '' };
        default:
            return state;
    }
}

export default rootReducer;