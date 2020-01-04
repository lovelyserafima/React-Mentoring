import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import searchReducer from './search';
import movieReducer from './movie';
import { moviesSaga } from './actions';


const rootReducer = combineReducers({
  searchReducer,
  movieReducer,
});

function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}

export { rootReducer, rootSaga };
