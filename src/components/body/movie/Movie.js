import React from 'react';
import MovieTileWrapper from "./Movie.Styles";
import MoviePoster from "../movieposter/MoviePoster";
import MovieInfo from "../movieinfo/MovieInfo";
import MovieGenre from "../moviegenre/MovieGenre";

const Movie = ({ data: { poster_path, title, release_date, genres } }) => (
    <MovieTileWrapper>
        <MoviePoster posterImage={poster_path}/>
        <MovieInfo title={title} release_date={release_date} />
        <MovieGenre genres={genres} />
    </MovieTileWrapper>
);

export default Movie;