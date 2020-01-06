import React from 'react';
import PropTypes from 'prop-types';
import ResultsWrapper from './ResultsWrapper.Styles';
import Movie from '../movie/Movie';

const Results = ({ results }) => (
    <ResultsWrapper>
        {results.map((result) => (
            <Movie key={result.id} data={result}/>
        ))}
    </ResultsWrapper>
);

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
