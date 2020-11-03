import {
    CHANGE_SEARCH, CHANGE_SORTING,
    UN_SELECT_MOVIE,
    UPDATE_SEARCH_VALUE
} from "../constants/action-types";
import {sortingTypeForSearch, TITLE} from "../../components/constants/CommonConstants";

const initialState = {
    searchOption: TITLE,
    selectedMovie: '',
    searchValue: '',
    isSearching: false,
    error: false,
    sortingType: sortingTypeForSearch["release date"]
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
        default:
            return state;
    }
}