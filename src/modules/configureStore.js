import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware, {END} from 'redux-saga';
import {rootReducer, rootSaga} from './reducer';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
};