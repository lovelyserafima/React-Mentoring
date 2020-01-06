import React from 'react';
import PropTypes from 'prop-types';
import { Img, PosterWrapper } from './MoviePoster.Styles';

const MoviePoster = ({ posterImage }) => (
    <PosterWrapper>
        <Img src={posterImage} />
    </PosterWrapper>
);

MoviePoster.propTypes = {
  posterImage: PropTypes.string,
};

export default MoviePoster;
