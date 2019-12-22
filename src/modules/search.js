import {
    CHANGE_SEARCH, CHANGE_SORTING, SEARCH_BY_ID_SUCCESS, SEARCH_FAILURE, SEARCH_STARTED,
    UN_SELECT_MOVIE,
    UPDATE_SEARCH_VALUE
} from "../redux/constants/action-types";
import {sortingTypeForDisplay, TITLE} from "../components/constants/CommonConstants";

const initialState = {
    searchOption: TITLE,
    selectedMovie: '',
    searchValue: '',
    isSearching: false,
    error: false,
    sortingType: sortingTypeForDisplay["release date"]
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return { ...state, searchValue: action.payload };
        case CHANGE_SEARCH:
            return { ...state, searchOption: action.payload };
        case CHANGE_SORTING:
            return { ...state, sortingType: action.payload };
        case UN_SELECT_MOVIE:
            return { ...state, selectedMovie: '' };
        case SEARCH_BY_ID_SUCCESS:
            return {
                ...state,
                selectedMovie: action.payload,
                isSearching: false,
                error: false
            };
        case SEARCH_STARTED:
            return { ...state, isSearching: true, error: false };
        case SEARCH_FAILURE:
            return { ...state, isSearching: false, error: true };
        default:
            return state;
    }
}