import {
  FETCH_FROM_SEARCH,
  FETCH_SIMILAR_MOVIES_BY_GENRE, RECEIVED_MOVIES,
  SELECT_MOVIE,
  UN_SELECT_MOVIE,
} from './constants/action-types';

const initialState = {
  movies: [],
  similarMovies: [],
  selectedMovie: '',
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FROM_SEARCH:
      return { ...state, movies: action.payload };
    case FETCH_SIMILAR_MOVIES_BY_GENRE:
      return { ...state, similarMovies: action.payload };
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.payload };
    case UN_SELECT_MOVIE:
      return { ...state, selectedMovie: '' };
    case RECEIVED_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}
