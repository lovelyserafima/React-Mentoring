import React, { Component } from 'react';
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";
import Results from "../../body/results/Results";
import {fetchByGenres, fetchById} from "../../../util/dataLoader";

class DetailPage extends Component {
    state = {
        movie: '',
        similarMovies: '',
        selectedGenre: ''
    };

    componentDidMount = () => {
        fetchById(15).then(data => {
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
                    <IconButton onClick={this.props.changePage}>
                        <SearchIcon color="secondary"/>
                    </IconButton>
                </HeaderCSSGrid>
                <ResultsOptions
                    genre={selectedGenre}
                />
                {similarMovies ? <Results results={this.state.similarMovies} /> : <p>loading</p>}
            </div>
        );
    }
}

export default DetailPage;