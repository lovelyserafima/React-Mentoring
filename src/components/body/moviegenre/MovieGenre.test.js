import React from 'react';
import { shallow } from 'enzyme';

import MovieGenre from './MovieGenre';

describe('MovieGenre', () => {
    const genres = ['Animation', 'Family'];

    it('should render correctly', () => {
        const component = shallow(<MovieGenre genres={genres} />);

        expect(component).toMatchSnapshot();
    });
});