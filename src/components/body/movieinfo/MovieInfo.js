import PropTypes from 'prop-types';
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

MovieInfo.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.string,
};

export default MovieInfo;
