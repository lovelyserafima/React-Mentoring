import React from 'react';
import MovieGenreWrapper from './MovieGenre.Styles';

const MovieGenre = ({ genres }) => (
    <MovieGenreWrapper>
        {genres.map((genre) => (
            <span key={genre}>{`${genre} `}</span>
        ))}
    </MovieGenreWrapper>
);

export default MovieGenre;
