import React, { Component } from 'react';
import {fetchById} from "../../util/dataLoader";
import Detail from "../../style/pages/DetailPage.Styles";
import MovieDetails from "../details/MovieDetails";

class DetailPage extends Component {
    state = {
        movie: ''
    };

    componentDidMount = () => {
        fetchById(11).then(data => this.setState(state => ({ movie: data })));
    };

    render() {
        const { movie } = this.state;
        return (
            <Detail>
                {movie ? <MovieDetails details={movie} /> : <p>loading</p>}
            </Detail>
        );
    }
}

export default DetailPage;