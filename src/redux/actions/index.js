import {
    FETCH_DEFAULT,
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING
} from '../constants/action-types';
import { fetchFromSearch, fetchDefault } from '../../util/dataloader/dataLoader';

export function changeSearch(text) {
    return { type: CHANGE_SEARCH, payload: text };
}

export function changeSorting(text) {
    return { type: CHANGE_SORTING, payload: text };
}

export function getDefaultData(limit) {
    return function thunk(dispatch) {
        return fetchDefault(limit).then(json => {
            dispatch({ type: FETCH_DEFAULT, payload: json.data });
        });
    };
}

export function getSearchData(searchString, sortingType, searchOption) {
    return function thunk(dispatch) {
        return fetchFromSearch(searchString, sortingType, searchOption).then(
            json => {
                dispatch({ type: FETCH_FROM_SEARCH, payload: json.data });
            }
        );
    };
}