import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./MainPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";
import {sortingTypeForDisplay, sortingTypeForSearch} from "../../constants/CommonConstants";
import { connect } from 'react-redux';
import { getSearchData, updateSearchValue } from '../../../redux/actions';
import LoadingWrapper from '../../Helper/Loading/Loading';
import history from '../../history';

const mapStateToProps = state => ({
    movies: state.movieReducer.movies,
    sortingType: state.searchReducer.sortingType,
    searchOption: state.searchReducer.searchOption,
    isSearching: state.searchReducer.isSearching,
    error: state.searchReducer.isSearching,
    searchValue: state.searchReducer.searchValue
});

export class MainPage extends Component {

    state = {};

    static getDerivedStateFromProps(props, state) {
        const { term } = props.match.params; // receiving current search term from URL
        const { searchValue } = props; // receiving stored search term
        const {
            sortingType,
            searchOption,
            getSearchData,
            updateSearchValue
        } = props;
        if (term && term !== searchValue) {
            getSearchData(term, sortingTypeForSearch[sortingType], searchOption);
            updateSearchValue(term);
        }
        return state;
    }

    performSearch = searchString => {
        const { sortingType, searchOption, getSearchData, error } = this.props;
        console.log(sortingType, searchOption, getSearchData, error);
        getSearchData(
            searchString,
            sortingTypeForSearch[sortingType],
            searchOption
        );

        history.push(`/search/${searchString}`);
        updateSearchValue(searchString);

        if (error) {
            console.log('Search failed');
        }
    };

    render() {
        const { movies, sortingType, isSearching } = this.props;
        return (
            <SearchCSSGrid>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'} />
                    <FormTitle title={'FIND YOUR MOVIE'} />
                    <SearchForm handleFormSubmit={this.performSearch} />
                </HeaderCSSGrid>
                <ResultsOptions sortingType={sortingTypeForDisplay[sortingType]} />
                {isSearching ? (
                    <LoadingWrapper />
                ) : (
                    movies.length !== 0 && <Results results={movies} />
                )}
            </SearchCSSGrid>
        );
    }
}

export default connect(
    mapStateToProps,
    { getSearchData, updateSearchValue }
)(MainPage);