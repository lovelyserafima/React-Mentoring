import React from 'react';
import {Img, PosterWrapper} from "../../style/body/MoviePoster.Styles";

const MoviePoster = ({ posterImage }) => (
    <PosterWrapper>
        <Img src={posterImage} />
    </PosterWrapper>
);

export default MoviePoster;