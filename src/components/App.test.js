import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    it('should render correctly', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });

    it('should render Search as default', () => {
        const component = shallow(<App />);
        expect(component.find('MainPage')).toHaveLength(1);
        expect(component.find('DetailPage')).toHaveLength(0);
    });

    it('should render Detail when state.pageType is detail', () => {
        const component = shallow(<App />);
        expect(component.find('MainPage')).toHaveLength(1);
        expect(component.find('DetailPage')).toHaveLength(0);
        component.setState({ pageType: 'detail' });
        expect(component.find('MainPage')).toHaveLength(0);
        expect(component.find('DetailPage')).toHaveLength(1);
    });

    it('should render ChangePageButton', () => {
        const component = shallow(<App />);
        expect(component.find('ChangePageButton')).toHaveLength(1);
    });

    it('changePage changes state when called', () => {
        const component = shallow(<App />);

        component.find('ChangePageButton').prop('changePage')();
        expect(component.state('pageType')).toEqual('detailPage');
        component.find('ChangePageButton').prop('changePage')();
        expect(component.state('pageType')).toEqual('mainPage');
    });
});