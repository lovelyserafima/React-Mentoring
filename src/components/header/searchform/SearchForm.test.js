import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
    it('should render correctly', () => {
        const component = shallow(<SearchForm />);

        expect(component).toMatchSnapshot();
    });

    /*it('InputWrapper onChange updates state', () => {
        const component = shallow(<SearchForm />);
        const eventData = {
            target: {
                value: 'test'
            }
        };
        component.find('InputWrapper').prop('onChange')(eventData);
        expect(component.state('searchValue')).toEqual('test');
    });*/

    it('InputWrapper onKeyPress calls handleFormSubmit', () => {
        const component = shallow(<SearchForm />);
        const eventData = {
            key: 'Enter'
        };

        const handleFormSubmitMock = jest.fn();
        component.instance().handleFormSubmit = handleFormSubmitMock;
        component.update();
        component.instance().handleKeyPress(eventData);
        expect(handleFormSubmitMock).toBeCalled();
    });
});