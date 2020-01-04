import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageName from '../../header/pagename/PageName';
import FormTitle from '../../header/formtitle/FormTitle';
import { HeaderCSSGrid, SearchCSSGrid } from './MainPage.Styles';
import SearchForm from '../../header/searchform/SearchForm';
import ResultsOptions from '../../helper/resultsoption/search/ResultOptions';
import Results from '../../body/results/Results';
import { sortingTypeForDisplay, sortingTypeForSearch } from '../../constants/CommonConstants';
import history from '../../history';
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
        getSearchData,
        updateSearchValue,
      } = this.props;
      if (term && term !== searchValue) {
        getSearchData(term, sortingTypeForSearch[sortingType], searchOption);
        updateSearchValue(term);
      }
    };

    performSearch = (searchString) => {
      const {
        sortingType, searchOption, getSearchData, error,
      } = this.props;
      console.log(sortingType, searchOption, getSearchData, error);
      getSearchData(
        searchString,
        sortingTypeForSearch[sortingType],
        searchOption,
      );

      updateSearchValue(searchString);
      history.push(`/search/${searchString}`);

      if (error) {
        console.log('Search failed');
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

export default MainPage = connect(
  mapStateToProps,
  { getSearchData, updateSearchValue },
)(MainPage);
