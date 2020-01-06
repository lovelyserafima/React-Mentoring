import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieTileWrapper from './Movie.Styles';
import MoviePoster from '../movieposter/MoviePoster';
import MovieInfo from '../movieinfo/MovieInfo';
import MovieGenre from '../moviegenre/MovieGenre';
import { selectMovie } from '../../../modules/actions';

const Movie = ({
  data,
  data: {
    poster_path: posterPath, title, release_date: releaseDate, genres, id,
  },
  selectMovie: selectMovieAction,
}) => (
    <Link onClick={() => selectMovieAction(data)} to={`/film/${id}`}>
        <MovieTileWrapper>
            <MoviePoster posterImage={posterPath} />
            <MovieInfo title={title} release_date={releaseDate} />
            <MovieGenre genres={genres} />
        </MovieTileWrapper>
    </Link>

);

Movie.propTypes = {
  data: PropTypes.object.isRequired,
  selectMovie: PropTypes.func,
};

export default connect(
  null,
  { selectMovie },
)(Movie);
