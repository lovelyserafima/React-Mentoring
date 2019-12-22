import React from 'react';
import { shallow } from 'enzyme';

import Movie from './Movie';

describe('MovieTile', () => {
    const data = {
        poster_path:
            'https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg',
        release_date: '2013-04-18',
        title: 'Iron Man 3',
        genres: ['Action', 'Adventure', 'Science Fiction']
    };
    it('should render correctly', () => {
        const component = shallow(<Movie data={data} />);

        expect(component).toMatchSnapshot();
    });
});