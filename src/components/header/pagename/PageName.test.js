import React from 'react';
import renderer from 'react-test-renderer';
import PageName from './PageName';

test('PageName renders', () => {
    const component = renderer.create(<PageName />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});