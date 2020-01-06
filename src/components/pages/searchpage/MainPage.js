import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageName from '../../header/pagename/PageName';
import FormTitle from '../../header/formtitle/FormTitle';
import { HeaderCSSGrid, SearchCSSGrid } from './MainPage.Styles';
import SearchForm from '../../header/searchform/SearchForm';
import ResultsOptions from '../../helper/resultsoption/search/ResultOptions';
import Results from '../../body/results/Results';
import { sortingTypeForDisplay, sortingTypeForSearch } from '../../constants/CommonConstants';
import history from '../../History';
import LoadingWrapper from '../../helper/loading/Loading';
import { getSearchData, updateSearchValue } from '../../../modules/actions';

const mapStateToProps = (state) => ({
  movies: state.movieReducer.movies,
  sortingType: state.searchReducer.sortingType,
  searchOption: state.searchReducer.searchOption,
  isSearching: state.searchReducer.isSearching,
  error: state.searchReducer.isSearching,
  searchValue: state.searchReducer.searchValue,
});

class MainPage extends Component {
  componentDidMount() {
    this.updatePage();
  }

    updatePage = () => {
      const { term } = this.props.match.params; // receiving current search term from URL
      const { searchValue } = this.props; // receiving stored search term
      const {
        sortingType,
        searchOption,
        getSearchData: getSearchDataAction,
        updateSearchValue: updateSearchValueAction,
      } = this.props;
      if (term && term !== searchValue) {
        getSearchDataAction(term, sortingTypeForSearch[sortingType], searchOption);
        updateSearchValueAction(term);
      }
    };

    performSearch = (searchString) => {
      const {
        sortingType, searchOption, getSearchData: getSearchDataAction, error,
      } = this.props;
      getSearchDataAction(
        searchString,
        sortingTypeForSearch[sortingType],
        searchOption,
      );

      updateSearchValue(searchString);
      history.push(`/search/${searchString}`);

      if (error) {
        this.console.log('Search failed');
      }
    };

    render() {
      const { movies, sortingType } = this.props;
      return (
            <SearchCSSGrid>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'} />
                    <FormTitle title={'FIND YOUR MOVIE'} />
                    <SearchForm handleFormSubmit={this.performSearch} />
                </HeaderCSSGrid>
                <ResultsOptions sortingType={sortingTypeForDisplay[sortingType]} />
                {movies === undefined ? (
                    <LoadingWrapper />
                ) : (
                  movies.length !== 0 && <Results results={movies} />
                )}
            </SearchCSSGrid>
      );
    }
}

MainPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      term: PropTypes.string,
    }),
  }),
  searchValue: PropTypes.string,
  sortingType: PropTypes.string,
  searchOption: PropTypes.string,
  getSearchData: PropTypes.func.isRequired,
  updateSearchValue: PropTypes.func.isRequired,
  movies: PropTypes.array,
  error: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { getSearchData, updateSearchValue },
)(MainPage);
