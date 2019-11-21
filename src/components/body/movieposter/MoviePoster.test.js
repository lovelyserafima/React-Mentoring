import React from 'react';
import renderer from 'react-test-renderer';
import MoviePoster from './MoviePoster';

test('MoviePoster renders', () => {
    const component = renderer.create(<MoviePoster />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});