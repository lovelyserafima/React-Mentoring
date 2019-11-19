import React from 'react';
import {Display, ResultsOptionsWrapper} from "../search/ResultOptions.Styles";

const ResultsOptions = ({ genre }) => {
    return (
        <ResultsOptionsWrapper>
            <Display>Films by {genre} genre</Display>
        </ResultsOptionsWrapper>
    );
};

export default ResultsOptions;
