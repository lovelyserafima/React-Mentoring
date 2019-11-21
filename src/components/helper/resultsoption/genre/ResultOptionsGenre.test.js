import React from 'react';
import renderer from 'react-test-renderer';
import ResultsOptions from "./ResultsOptionsGenre";

test('ResultsOptionsSearch renders', () => {
    const component = renderer.create(<ResultsOptions />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});