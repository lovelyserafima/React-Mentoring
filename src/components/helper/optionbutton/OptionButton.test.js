import React from 'react';
import { shallow, mount } from 'enzyme';
import OptionButton from './OptionButton';

describe('OptionButton', () => {
    it('should render correctly', () => {
        const component = shallow(<OptionButton />);

        expect(component).toMatchSnapshot();
    });

    /*it('shoudl handle click', () => {
        const mockCallBack = jest.fn();
        const e = { preventDefault: () => {} };
        const component = mount(<OptionButton changeOption={mockCallBack} />);
        component.find('Button').prop('onClick')(e);
        expect(mockCallBack).toHaveBeenCalled();
    });*/
});