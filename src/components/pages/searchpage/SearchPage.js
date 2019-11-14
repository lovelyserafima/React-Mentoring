import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./SeacrhPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import {fetchDefault, fetchFromSearch} from "../../../util/dataLoader";
import {sortingTypeForDisplay, sortingTypeForSearch} from "../../../util/sortingTypeConstants";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";

class SearchPage extends Component {
    state = {
        data: '',
        sortingType: 'release date',
        searchOption: 'title'
    };

    componentDidMount = () => {
        const LIMIT = 12;
        fetchDefault(LIMIT).then(data =>
            this.setState(state => ({ data: data.data }))
        );
    };

    changeSorting = data => {
        this.setState(state => ({ sortingType: data }));
    };

    performSearch = searchString => {
        const { sortingType, searchOption } = this.state;
        fetchFromSearch(
            searchString,
            sortingTypeForSearch[sortingType],
            searchOption
        ).then(data => this.setState(state => ({ data: data.data })));
    };

    changeSearch = data => {
        event.preventDefault();
        this.setState(state => ({ searchOption: data }));
    };

    render() {
        const { data, sortingType, searchOption } = this.state;
        return (
            <SearchCSSGrid>
                <HeaderCSSGrid>
                    <PageName />
                    <FormTitle />
                    <SearchForm
                        handleFormSubmit={this.performSearch}
                        searchOption={searchOption}
                        changeSearch={this.changeSearch}
                    />
                </HeaderCSSGrid>
                <ResultsOptions
                    dataSize={data.length}
                    changeSorting={this.changeSorting}
                    sortingType={sortingTypeForDisplay[sortingType]}
                />
                {data ? <Results results={data} /> : <p>loading</p>}
            </SearchCSSGrid>
        );
    }
}

export default SearchPage;