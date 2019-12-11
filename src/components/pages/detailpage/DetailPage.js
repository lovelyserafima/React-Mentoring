import React, { Component } from 'react';
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";
import Results from "../../body/results/Results";
import {connect} from "react-redux";
import ChangePageButton from "../../helper/changepagebutton/ChangePageButton";
import {getMoviesByGenre} from "../../../redux/actions";

const mapStateToProps = state => ({
    selectedMovie: state.movieReducer.selectedMovie,
    similarMovies: state.movieReducer.similarMovies,
    error: state.searchReducer.isSearching
});

export class DetailPage extends Component {

    componentDidMount = () => {
        const { getMoviesByGenre, selectedMovie } = this.props;
        getMoviesByGenre(
            selectedMovie.genres[0]
        );
    };

    render() {
        const { selectedMovie, similarMovies} = this.props;
        console.log("in render"  + similarMovies);
        return (
            <div>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'}/>
                    <Detail>
                        {selectedMovie ? <MovieDetails details={selectedMovie} /> : <p>loading</p>}
                    </Detail>
                    <ChangePageButton />
                </HeaderCSSGrid>
                <ResultsOptions
                    genre={selectedMovie.genres[0]}
                />
                {similarMovies ? <Results results={similarMovies} /> : <p>loading</p>}
            </div>
        );
    }
}

export const DetailPageContainer =  connect(mapStateToProps, { getMoviesByGenre })(DetailPage);