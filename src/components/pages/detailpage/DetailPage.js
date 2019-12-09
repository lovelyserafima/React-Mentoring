import React, { Component } from 'react';
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";
import Results from "../../body/results/Results";
import {fetchByGenres, fetchById} from "../../../util/dataloader/dataLoader";
import {connect} from "react-redux";
import ChangePageButton from "../../helper/changepagebutton/ChangePageButton";
import { getMovieDataById } from '../../../redux/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    selectedMovie: state.movieReducer.selectedMovie
});

export class DetailPage extends Component {
    state = {
        similarMovies: '',
        selectedGenre: ''
    };

    static getDerivedStateFromProps(props, state) {
        const { id } = props.match.params;
        const { getMovieDataById, selectedMovie } = props;
        if (!selectedMovie) {
            getMovieDataById(id);
        }
        return state;
    }

    componentDidMount = () => {
        fetchById(this.props.selectedMovie.id).then(data => {
            this.setState(() => ({ selectedMovie: data }));
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
        const { selectedMovie, similarMovies, selectedGenre} = this.state;
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
                    genre={selectedGenre}
                />
                {similarMovies ? <Results results={this.state.similarMovies} /> : <p>loading</p>}
            </div>
        );
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { getMovieDataById }
    )(DetailPage)
);