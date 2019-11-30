import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./MainPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";
import {sortingTypeForDisplay, sortingTypeForSearch} from "../../constants/CommonConstants";
import { connect } from 'react-redux';
import { getSearchData } from '../../../redux/actions';
import LoadingWrapper from '../../Helper/Loading/Loading';

const mapStateToProps = state => ({
    movies: state.movies,
    sortingType: state.sortingType,
    searchOption: state.searchOption,
    isSearching: state.isSearching,
    error: state.isSearching
});

export class MainPage extends Component {

    performSearch = searchString => {
        const { sortingType, searchOption, getSearchData, error } = this.props;
        getSearchData(
            searchString,
            sortingTypeForSearch[sortingType],
            searchOption
        );
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
    { getSearchData }
)(MainPage);