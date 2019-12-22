import React from 'react';
import { shallow } from 'enzyme';
import FormTitle from './FormTitle';

describe('FormTitle', () => {
    it('should render correctly', () => {
        const component = shallow(<FormTitle />);

        expect(component).toMatchSnapshot();
    });

    it('should render props', () => {
        const component = shallow(<FormTitle title="test" />);

        expect(component.text()).toEqual('test');
    });
});