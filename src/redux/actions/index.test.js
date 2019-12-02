import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import * as types from '../constants/action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('call to changeSearch should return change movie action', () => {
        const payload = 'title';
        const expectedAction = {
            type: types.CHANGE_SEARCH,
            payload
        };
        expect(actions.changeSearch(payload)).toEqual(expectedAction);
    });

    it('call to changeSorting should return change sorting action', () => {
        const payload = 'rating';
        const expectedAction = {
            type: types.CHANGE_SORTING,
            payload
        };
        expect(actions.changeSorting(payload)).toEqual(expectedAction);
    });
});