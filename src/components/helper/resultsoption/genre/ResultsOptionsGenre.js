import React from 'react';
import { Display, ResultsOptionsWrapper } from '../search/ResultOptions.Styles';

const ResultsOptions = ({ genre }) => (
        <ResultsOptionsWrapper>
            <Display>Films by {genre} genre</Display>
        </ResultsOptionsWrapper>
);

export default ResultsOptions;
