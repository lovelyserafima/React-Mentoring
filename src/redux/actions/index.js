import {
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING,
    UPDATE_SEARCH_VALUE, SELECT_MOVIE,
    UN_SELECT_MOVIE
} from '../constants/action-types';
import { fetchFromSearch} from '../../util/dataloader/dataLoader';

export function changeSearch(text) {
    return { type: CHANGE_SEARCH, payload: text };
}

export function changeSorting(text) {
    return { type: CHANGE_SORTING, payload: text };
}

//maybe will be useful in the future
/*export function getDefaultData(limit) {
    return dispatch => {
        return fetchDefault(limit).then(json => {
            dispatch({ type: FETCH_DEFAULT, payload: json.data });
        });
    };
}*/

export function getSearchData(searchString, sortingType, searchOption) {
    return dispatch => {
        return fetchFromSearch(searchString, sortingType, searchOption).then(
            json => {
                dispatch({ type: FETCH_FROM_SEARCH, payload: json.data });
            }
        );
    };
}

export function updateSearchValue(searchValue) {
    return { type: UPDATE_SEARCH_VALUE, payload: searchValue };
}

export function selectMovie(movieData) {
    return { type: SELECT_MOVIE, payload: movieData };
}

export function unSelectMovie() {
    return { type: UN_SELECT_MOVIE };
}