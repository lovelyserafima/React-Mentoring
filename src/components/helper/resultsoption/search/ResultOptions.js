import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonsWrapper, Display, ResultsOptionsWrapper } from './ResultOptions.Styles';
import OptionButton from '../../optionbutton/OptionButton';
import { sortingTypeForDisplay } from '../../../constants/CommonConstants';
import { RATING } from './ResultOptions.Constants';
import { changeSorting } from '../../../../modules/actions';

const mapStateToProps = (state) => ({
  sortingType: state.searchReducer.sortingType,
  dataSize: state.movieReducer.movies,
});

export class ResultsOptions extends Component {
    changeSorting = (text) => {
      this.props.changeSorting(text);
    };

    render() {
      const { sortingType, dataSize } = this.props;
      return (
            <ResultsOptionsWrapper>
                {/* <Display>{dataSize} movies found</Display> */}
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

export default connect(
  mapStateToProps,
  { changeSorting },
)(ResultsOptions);
