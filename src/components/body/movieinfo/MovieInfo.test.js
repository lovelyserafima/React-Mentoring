import React from 'react';
import { shallow } from 'enzyme';

import MovieInfo from './MovieInfo';

describe('MovieInfo', () => {
    const title = 'Finding Nemo';
    const release_date = '2003-05-30-';
    it('should render correctly', () => {
        const component = shallow(
            <MovieInfo title={title} release_date={release_date} />
        );

        expect(component).toMatchSnapshot();
    });
});