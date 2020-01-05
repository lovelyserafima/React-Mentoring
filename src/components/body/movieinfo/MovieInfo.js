import React from 'react';
import { MovieInfoWrapper, Title, Year } from './MovieInfo.Styles';

const MovieInfo = ({ title, release_date: releaseDate }) => {
  const releaseDateSliced = releaseDate.slice(0, 4);
  return (
        <MovieInfoWrapper>
            <Title>{title}</Title>
            <Year>{releaseDateSliced}</Year>
        </MovieInfoWrapper>
  );
};

export default MovieInfo;
