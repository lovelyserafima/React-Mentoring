import React from 'react';
import MovieTileWrapper from "./Movie.Styles";
import MoviePoster from "../movieposter/MoviePoster";
import MovieInfo from "../movieinfo/MovieInfo";
import MovieGenre from "../moviegenre/MovieGenre";
import { connect } from 'react-redux';
import {selectMovie} from "../../../redux/actions";

export const Movie = ({
  data,
  data: { poster_path, title, release_date, genres },
  selectMovie
}) => (
    <MovieTileWrapper onClick={() => {selectMovie(data)}}>
        <MoviePoster posterImage={poster_path} />
        <MovieInfo title={title} release_date={release_date} />
        <MovieGenre genres={genres} />
    </MovieTileWrapper>
);

export default connect(
    null,
    { selectMovie }
)(Movie);