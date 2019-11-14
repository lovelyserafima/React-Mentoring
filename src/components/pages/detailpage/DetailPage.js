import React, { Component } from 'react';
import {fetchById} from "../../../util/dataLoader";
import Detail, {HeaderCSSGrid} from "./DetailPage.Styles";
import MovieDetails from "../../details/MovieDetails";
import PageName from "../../header/pagename/PageName";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import ResultsOptions from "../../helper/resultsoption/genre/ResultsOptionsGenre";

class DetailPage extends Component {
    state = {
        movie: '',
        similarMovies: ''
    };

    componentDidMount = () => {
        fetchById(15).then(data => this.setState(() => ({ movie: data })));
    };

    /*fetchSimilarMovies(genre) {
        fetchById(14).then(data => {this.setState(() => ({similarMovies: data}))})
    }*/

    render() {
        const { movie} = this.state;
        return (
            <div>
                <HeaderCSSGrid>
                    <PageName/>
                    <Detail>
                        {movie ? <MovieDetails details={movie} /> : <p>loading</p>}
                    </Detail>
                    <IconButton onClick={this.props.changePage}>
                        <SearchIcon color="secondary"/>
                    </IconButton>
                </HeaderCSSGrid>
                <ResultsOptions
                    genres={movie.genres}
                />
                {/*{movie ? <Results results={this.state.similarMovies} /> : <p>loading</p>}*/}
            </div>
        );
    }
}

export default DetailPage;