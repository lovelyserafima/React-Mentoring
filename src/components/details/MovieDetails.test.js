import React from 'react';
import { shallow } from 'enzyme';

import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
    const details = {
        id: 12,
        title: 'Finding Nemo',
        tagline:
            "There are 3.7 trillion fish in the ocean. They're looking for one.",
        vote_average: 7.7,
        vote_count: 8035,
        release_date: '2003-05-30',
        poster_path:
            'https://image.tmdb.org/t/p/w500/syPWyeeqzTQIxjIUaIFI7d0TyEY.jpg',
        overview:
            "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
        budget: 94000000,
        revenue: 940335536,
        genres: ['Animation', 'Family'],
        runtime: 100
    };
    it('should render correctly', () => {
        const component = shallow(<MovieDetails details={details} />);

        expect(component).toMatchSnapshot();
    });
});