import React, {Component} from 'react';
import ResultsWrapper from "./ResultsWrapper.Styles";
import Movie from "../movie/Movie";

class Results extends Component {

    render() {
        const genres = this.props.genres;
        return (
            <ResultsWrapper>
                {genres.length ? genres.map(result => (
                    <Movie key={result.id} data={result}/>
                )) : <p>No Films Found</p>}
            </ResultsWrapper>
        )
    }
}

export default Results;