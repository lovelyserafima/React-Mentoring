import React from 'react';
import { Img, PosterWrapper } from './MoviePoster.Styles';

const MoviePoster = ({ posterImage }) => (
    <PosterWrapper>
        <Img src={posterImage} />
    </PosterWrapper>
);

export default MoviePoster;
