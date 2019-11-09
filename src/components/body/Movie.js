import React from 'react';
import MovieTileWrapper from "../../style/body/Movie.Styles";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import MovieGenre from "./MovieGenre";

const Movie = ({ data: { poster_path, title, release_date, genres } }) => (
    <MovieTileWrapper>
        <MoviePoster posterImage={poster_path} />
        <MovieInfo title={title} release_date={release_date} />
        <MovieGenre genres={genres} />
    </MovieTileWrapper>
);

export default Movie;