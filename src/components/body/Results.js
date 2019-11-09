import React from 'react';
import ResultsWrapper from "../../style/body/ResultsWrapper.Styles";
import Movie from "./Movie";

const Results = ({ results }) => (
    <ResultsWrapper>
        {results.map(result => (
            <Movie key={result.id} data={result} />
        ))}
    </ResultsWrapper>
);

export default Results;