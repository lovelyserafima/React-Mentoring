import React, { Component } from 'react';
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";
import Results from "../../body/results/Results";
import {connect} from "react-redux";
import ChangePageButton from "../../helper/changepagebutton/ChangePageButton";
import {getMoviesByGenre, getMovieDataById} from "../../../redux/actions";
import LoadingWrapper from "../../helper/loading/Loading";

const mapStateToProps = state => ({
    selectedMovie: state.movieReducer.selectedMovie,
    similarMovies: state.movieReducer.similarMovies,
    error: state.searchReducer.isSearching
});

class DetailPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        const { getMovieDataById, getMoviesByGenre, selectedMovie } = this.props;
        if (!selectedMovie) {
            getMovieDataById(id).then(
                movie => {
                    getMoviesByGenre(movie.genres[0])
                }
            );
        } else {
            getMoviesByGenre(selectedMovie.genres[0]);
        }
    }

    render() {
        const { selectedMovie, similarMovies} = this.props;
        return (
            <div>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'}/>
                    <Detail>
                        {selectedMovie ? <MovieDetails details={selectedMovie} /> : <LoadingWrapper />}
                    </Detail>
                    <ChangePageButton />
                </HeaderCSSGrid>
                {!selectedMovie ? <LoadingWrapper/> : <ResultsOptions genre={ selectedMovie.genres[0] } />}
                {similarMovies ? <Results results={similarMovies} /> : <LoadingWrapper/>}
            </div>
        );
    }
}

export default DetailPage = connect(mapStateToProps, { getMoviesByGenre, getMovieDataById })(DetailPage);