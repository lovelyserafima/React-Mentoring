import React from 'react';
import MovieTileWrapper from "./Movie.Styles";
import MoviePoster from "../movieposter/MoviePoster";
import MovieInfo from "../movieinfo/MovieInfo";
import MovieGenre from "../moviegenre/MovieGenre";
import { connect } from 'react-redux';
import {selectMovie} from "../../../modules/actions";
import { Link } from 'react-router-dom';

export const Movie = ({
  data,
  data: { poster_path, title, release_date, genres, id },
  selectMovie
}) => (
    <Link onClick={() => selectMovie(data)} to={`/film/${id}`}>
        <MovieTileWrapper>
            <MoviePoster posterImage={poster_path} />
            <MovieInfo title={title} release_date={release_date} />
            <MovieGenre genres={genres} />
        </MovieTileWrapper>
    </Link>

);

export default connect(
    null,
    { selectMovie }
)(Movie);