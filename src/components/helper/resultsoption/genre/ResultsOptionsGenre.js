import React from 'react';
import PropTypes from 'prop-types';
import { Display, ResultsOptionsWrapper } from '../search/ResultOptions.Styles';

const ResultsOptions = ({ genre }) => (
        <ResultsOptionsWrapper>
            <Display>Films by {genre} genre</Display>
        </ResultsOptionsWrapper>
);

ResultsOptions.propTypes = {
  genre: PropTypes.string,
};

export default ResultsOptions;
