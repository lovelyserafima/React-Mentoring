import React from 'react';
import { shallow } from 'enzyme';

import Results from './Results';

describe('Results', () => {
    const results = [
        {
            id: 68721,
            title: 'Iron Man 3',
            tagline: 'Unleash the power behind the armor.',
            vote_average: 6.8,
            vote_count: 10461,
            release_date: '2013-04-18',
            poster_path:
                'https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg',
            overview:
                "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
            budget: 200000000,
            revenue: 1215439994,
            genres: ['Action', 'Adventure', 'Science Fiction'],
            runtime: 130
        },
        {
            id: 1726,
            title: 'Iron Man',
            tagline: "Heroes aren't born. They're built.",
            vote_average: 7.4,
            vote_count: 10926,
            release_date: '2008-04-30',
            poster_path:
                'https://image.tmdb.org/t/p/w500/848chlIWVT41VtAAgyh9bWymAYb.jpg',
            overview:
                'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
            budget: 140000000,
            revenue: 585174222,
            genres: ['Action', 'Science Fiction', 'Adventure'],
            runtime: 126
        }
    ];
    it('should render correctly', () => {
        const component = shallow(<Results results={results} />);

        expect(component).toMatchSnapshot();
    });
});