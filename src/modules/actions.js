import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import {
  FETCH_FROM_SEARCH,
  CHANGE_SEARCH,
  CHANGE_SORTING,
  UPDATE_SEARCH_VALUE, SELECT_MOVIE,
  UN_SELECT_MOVIE, RECEIVED_MOVIES, VIEW_MOVIE,
} from './constants/action-types';

// Action creators
export const receivedMovies = (json) => ({
  type: RECEIVED_MOVIES,
  payload: json.data,
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

export const viewMovieById = (id) => ({
  type: VIEW_MOVIE,
  payload: id,
});

export const getSearchData = (searchString, sortingType, searchOption) => ({
  type: FETCH_FROM_SEARCH,
  searchString,
  sortingType,
  searchOption,
});

// Sagas

export function* watchGetSearchData() {
  yield takeLatest(FETCH_FROM_SEARCH, getSearchDataAsync);
}

export function* getSearchDataAsync(action) {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${action.searchString}&sortBy=${action.sortingType}&searchBy=${action.searchOption}&sortOrder=desc&limit=12`);
  const movies = yield response.json();

  yield put(receivedMovies(movies));
}

export function* getMovieById(action) {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies/${action.payload}`);
  const movie = yield response.json();

  const moviesByGenreResponse = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=${movie.genres[0]}&sortBy=release_date&searchBy=genres&sortOrder=desclimit=12`);
  const moviesByGenre = yield moviesByGenreResponse.json();

  yield put(selectMovie(movie));
  yield put(receivedMovies(moviesByGenre));
}

export function* watchMovieById() {
  yield takeLatest(VIEW_MOVIE, getMovieById);
}

export function* moviesSaga() {
  yield all([
    watchGetSearchData(),
    watchMovieById(),
  ]);
}
