import React from 'react';
import {MovieInfoWrapper, Title, Year} from "./MovieInfo.Styles";

const MovieInfo = ({ title, release_date }) => {
    const releaseDate = release_date.slice(0, 4);
    return (
        <MovieInfoWrapper>
            <Title>{title}</Title>
            <Year>{releaseDate}</Year>
        </MovieInfoWrapper>
    );
};

export default MovieInfo;