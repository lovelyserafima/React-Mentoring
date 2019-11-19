import React from 'react';
import ResultsWrapper from "./ResultsWrapper.Styles";
import Movie from "../movie/Movie";

const Results = ({ results }) => (
    <ResultsWrapper>
        {results.map(result => (
            <Movie key={result.id} data={result}/>
        ))}
    </ResultsWrapper>
);

export default Results;