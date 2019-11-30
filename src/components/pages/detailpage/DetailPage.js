import React, { Component } from 'react';
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";
import Results from "../../body/results/Results";
import {fetchByGenres, fetchById} from "../../../util/dataloader/dataLoader";
import {connect} from "react-redux";
import ChangePageButton from "../../helper/changepagebutton/ChangePageButton";

const mapStateToProps = state => ({
    selectedMovie: state.selectedMovie
});

class DetailPage extends Component {
    state = {
        similarMovies: '',
        selectedGenre: ''
    };

    componentDidMount = () => {
        fetchById(this.props.selectedMovie.id).then(data => {
            this.setState(() => ({ movie: data }));
            this.fetchSimilarMovies(data.genres[0]);
        });
    };

    fetchSimilarMovies(genre) {
        fetchByGenres(genre)
            .then(response => {
                this.setState({
                    similarMovies: response.data,
                    selectedGenre: genre
                });
            });
    }

    render() {
        const { movie, similarMovies, selectedGenre} = this.state;
        return (
            <div>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'}/>
                    <Detail>
                        {movie ? <MovieDetails details={movie} /> : <p>loading</p>}
                    </Detail>
                    <ChangePageButton />
                </HeaderCSSGrid>
                <ResultsOptions
                    genre={selectedGenre}
                />
                {similarMovies ? <Results results={this.state.similarMovies} /> : <p>loading</p>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(DetailPage);