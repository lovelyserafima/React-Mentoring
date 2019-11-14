import React from 'react';
import {Display, ResultsOptionsWrapper} from "../search/ResultOptions.Styles";

const ResultsOptions = ({ genres }) => {
    return (
        <ResultsOptionsWrapper>
            {!!genres && <Display>Films movies by {genres.map(genre =>
                <span key={genre}>{genre}, </span>
            )}</Display>}
        </ResultsOptionsWrapper>
    );
};

export default ResultsOptions;
