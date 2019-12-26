import React from 'react';
import { shallow, mount } from 'enzyme';

import MainPage from './MainPage';

describe('SearchPage', () => {
    it('should render correctly', () => {
        const component = shallow(<MainPage />);

        expect(component).toMatchSnapshot();
    });

    it('should render loading spinner when no data is in state', () => {
        const component = shallow(<MainPage />);
        expect(component.find('Results')).toHaveLength(0);
    });

    it('should render results when data for movies is in state', () => {
        const component = shallow(<MainPage />);
        expect(component.find('Results')).toHaveLength(0);
        component.setState({ data: 'movies data' });
        expect(component.find('Results')).toHaveLength(1);
    });

    it('changeSorting changes state when called', () => {
        const component = shallow(<MainPage />);

        component.find('ResultsOptions').prop('changeSorting')('sortingOne');
        expect(component.state('sortingType')).toEqual('sortingOne');
    });

    it('changeSearch changes state when called', () => {
        const component = shallow(<MainPage />);

        component.find('SearchForm').prop('changeSearch')('searchingOne');
        expect(component.state('searchOption')).toEqual('searchingOne');
    });
});