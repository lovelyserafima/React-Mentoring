import {
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING,
    UPDATE_SEARCH_VALUE, SELECT_MOVIE,
    UN_SELECT_MOVIE, FETCH_SIMILAR_MOVIES_BY_GENRE
} from '../constants/action-types';
import {fetchByGenres, fetchById, fetchFromSearch} from '../../util/dataloader/dataLoader';

export function changeSearch(text) {
    return { type: CHANGE_SEARCH, payload: text };
}

export function changeSorting(text) {
    return { type: CHANGE_SORTING, payload: text };
}

export function getSearchData(searchString, sortingType, searchOption) {
    return dispatch => {
        return fetchFromSearch(searchString, sortingType, searchOption).then(
            json => {
                dispatch({ type: FETCH_FROM_SEARCH, payload: json.data });
            }
        );
    };
}

export function getMoviesByGenre(genre) {
    return dispatch => {
        return fetchByGenres(genre).then(
            json => {
                dispatch({ type: FETCH_SIMILAR_MOVIES_BY_GENRE, payload: json.data})
            }
        )
    }
}

export function getMovieDataById(id) {
    return dispatch => {
        return fetchById(id).then(
            json => {
                dispatch({ type: SELECT_MOVIE, payload: json});
                return json;
            }
        )
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