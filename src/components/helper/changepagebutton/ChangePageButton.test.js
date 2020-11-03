import React from 'react';
import renderer from 'react-test-renderer';
import ChangePageButton from './ChangePageButton';

test('ChangePageButton renders', () => {
    const component = renderer.create(<ChangePageButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});