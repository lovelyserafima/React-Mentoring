import {
    FETCH_FROM_SEARCH,
    CHANGE_SEARCH,
    CHANGE_SORTING,
    UPDATE_SEARCH_VALUE, SELECT_MOVIE,
    UN_SELECT_MOVIE, RECEIVED_MOVIES, VIEW_MOVIE
} from './constants/action-types';
import {all, call, put, takeLatest} from "redux-saga/effects";

//Action creators
export const receivedMovies = (json) => ({
    type: RECEIVED_MOVIES,
    payload: json.data
});

export function changeSearch(text) {
    return { type: CHANGE_SEARCH, payload: text };
}

export function changeSorting(text) {
    return { type: CHANGE_SORTING, payload: text };
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

export const viewMovieById = id => ({
    type: VIEW_MOVIE,
    payload: id
});

export const getSearchData = (searchString, sortingType, searchOption) => ({
    type: FETCH_FROM_SEARCH,
    searchString: searchString,
    sortingType: sortingType,
    searchOption: searchOption
});

//Sagas

export function* watchGetSearchData() {
    yield takeLatest(FETCH_FROM_SEARCH, getSearchDataAsync);
}

export function* getSearchDataAsync(action) {
    console.log("sortingType = " + action.sortingType);
    const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${action.searchString}&sortBy=${action.sortingType}&searchBy=${action.searchOption}`);
    const movies = yield response.json();

    yield put(receivedMovies(movies));
}

export function* getMovieById(action) {
    const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${action.payload}`);
    //console.log("movie = " + movie);
    const movie = yield response.json();

    console.log("sdaasd");
    console.log(movie.genres[0]);
    const moviesByGenreResponse = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${movie.genres[0]}&sortBy=release_date&searchBy=genres`);
    const moviesByGenre = yield moviesByGenreResponse.json();

    //yield put(receivedMovieInfo(movie));
    console.log("2sdaasd");
    yield put(selectMovie(movie));
    yield put(receivedMovies(moviesByGenre));
}

export function* watchMovieById() {
    yield takeLatest(VIEW_MOVIE, getMovieById);
}

export function* moviesSaga() {
    yield all([
        watchGetSearchData(),
        watchMovieById()
    ]);
}