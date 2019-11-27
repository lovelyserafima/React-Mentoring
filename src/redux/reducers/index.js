import {
    FETCH_DEFAULT,
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING
} from '../constants/action-types';
import {sortingTypeForSearch, TITLE} from "../../components/constants/CommonConstants";

const initialState = {
    movies: [],
    sortingType: sortingTypeForSearch["release date"],
    searchOption: TITLE
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
        default:
            return state;
    }
}

export default rootReducer;