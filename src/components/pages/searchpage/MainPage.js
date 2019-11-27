import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./MainPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";
import {DEFAULT_LIMIT, sortingTypeForDisplay, sortingTypeForSearch} from "../../constants/CommonConstants";
import { connect } from 'react-redux';
import { getDefaultData, getSearchData } from '../../../redux/actions';

const mapStateToProps = state => ({
    movies: state.movies,
    sortingType: state.sortingType,
    searchOption: state.searchOption
});

export class MainPage extends Component {

    componentDidMount = () => {
        this.props.getDefaultData(DEFAULT_LIMIT);
    };

    changeSorting = data => {
        this.setState(() => ({ sortingType: data }));
    };

    changeSearch = data => {
        this.setState(() => ({ searchOption: data }));
    };

    performSearch = searchString => {
        const { sortingType, searchOption } = this.props;
        this.props.getSearchData(
            searchString,
            sortingTypeForSearch[sortingType],
            searchOption
        );
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
                {movies ? <Results results={movies} /> : <p>loading</p>}
            </SearchCSSGrid>
        );
    }
}

export default connect(
    mapStateToProps,
    { getDefaultData, getSearchData }
)(MainPage);