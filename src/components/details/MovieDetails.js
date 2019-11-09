import React from 'react';
import MoviePoster from "../body/MoviePoster";
import {
    DetailsWrapper,
    InfoWrapper,
    MovieData,
    MovieRating,
    MovieSummary,
    MovieTitle
} from "../../style/details/MovieDetails.Styles";

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

export default MovieDetails;