import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from '../body/movieposter/MoviePoster';
import {
  DetailsWrapper,
  InfoWrapper,
  MovieData,
  MovieRating,
  MovieSummary,
  MovieTitle,
} from './MovieDetails.Styles';

const MovieDetails = ({ details }) => {
  const releaseDate = details.release_date.slice(0, 4);
  return (
        <DetailsWrapper>
            <MoviePoster posterImage={details.poster_path} />
            <InfoWrapper>
                <MovieTitle>{details.title}</MovieTitle>
                <MovieRating>Rating: {details.vote_average}</MovieRating>
                <MovieData>
                    {releaseDate} - {details.runtime}min
                </MovieData>
                <MovieSummary> {details.overview} </MovieSummary>
            </InfoWrapper>
        </DetailsWrapper>
  );
};

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default MovieDetails;
