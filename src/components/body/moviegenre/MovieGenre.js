import PropTypes from 'prop-types';
import React from 'react';
import MovieGenreWrapper from './MovieGenre.Styles';

const MovieGenre = ({ genres }) => (
    <MovieGenreWrapper>
        {genres.map((genre) => (
            <span key={genre}>{`${genre} `}</span>
        ))}
    </MovieGenreWrapper>
);

MovieGenre.propTypes = {
  genres: PropTypes.array,
};

export default MovieGenre;
