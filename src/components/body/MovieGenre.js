import React from 'react';
import MovieGenreWrapper from "../../style/body/MovieGenre.Styles";

const MovieGenre = ({ genres }) => (
    <MovieGenreWrapper>
        {genres.map(genre => (
            <span key={genre}>{`${genre} `}</span>
        ))}
    </MovieGenreWrapper>
);

export default MovieGenre;