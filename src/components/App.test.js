import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';

import { App } from './App';

const mockStore = configureStore([]);

describe('App', () => {
    test('should render correctly', () => {
        const component = shallow(<App />);

        expect(component).toMatchSnapshot();
    });

    it('should render MainPage as default', () => {
        const component = mount(<App />);
        expect(component.find('MainPage')).toHaveLength(1);
        component.unmount();
    });

    it('should render Detail when state.pageType is detail', () => {
        const component = mount(<App />);
        expect(component.find('MainPage')).toHaveLength(1);
        expect(component.find('DetailPage')).toHaveLength(0);
        component.setState({ pageType: 'detail' });
        expect(component.find('MainPage')).toHaveLength(0);
        expect(component.find('DetailPage')).toHaveLength(1);
        component.unmount();
    });
});