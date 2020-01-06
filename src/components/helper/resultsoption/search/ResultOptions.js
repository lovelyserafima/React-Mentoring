import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonsWrapper, Display, ResultsOptionsWrapper } from './ResultOptions.Styles';
import OptionButton from '../../optionbutton/OptionButton';
import { sortingTypeForDisplay } from '../../../constants/CommonConstants';
import RATING from './ResultOptions.Constants';
import { changeSorting } from '../../../../modules/actions';

const mapStateToProps = (state) => ({
  sortingType: state.searchReducer.sortingType,
  movies: state.movieReducer.movies,
});

class ResultsOptions extends Component {
    changeSorting = (text) => {
      this.props.changeSorting(text);
    };

    render() {
      const { sortingType, movies } = this.props;
      return (
            <ResultsOptionsWrapper>
                {movies !== undefined ? <Display>{movies.length} movies found</Display> : '' }
                <ButtonsWrapper>
                    <Display>Sort by:</Display>
                    {[sortingTypeForDisplay['release date'], RATING].map((title) => (
                        <OptionButton
                            text={title}
                            changeOption={this.changeSorting}
                            option={sortingTypeForDisplay[sortingType]}
                            key={title}
                        />
                    ))}
                </ButtonsWrapper>
            </ResultsOptionsWrapper>
      );
    }
}

ResultsOptions.propTypes = {
  sortingType: PropTypes.string,
  changeSorting: PropTypes.func.isRequired,
  movies: PropTypes.array,
};

export default connect(
  mapStateToProps,
  { changeSorting },
)(ResultsOptions);
