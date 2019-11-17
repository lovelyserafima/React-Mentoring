import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./MainPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import {fetchDefault, fetchFromSearch} from "../../../util/dataloader/dataLoader";
import {sortingTypeForDisplay, sortingTypeForSearch} from "../../../util/sortingTypeConstants";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";
import {DEFAULT_LIMIT, RELEASE_DATE, TITLE} from "../../constants/CommonConstants";

class MainPage extends Component {
    state = {
        data: '',
        sortingType: RELEASE_DATE,
        searchOption: TITLE
    };

    componentDidMount = () => {
        fetchDefault(DEFAULT_LIMIT).then(data =>
            this.setState(() => ({ data: data.data }))
        );
    };

    changeSorting = data => {
        this.setState(() => ({ sortingType: data }));
    };

    performSearch = searchString => {
        const { sortingType, searchOption } = this.state;
        fetchFromSearch(
            searchString,
            sortingTypeForSearch[sortingType],
            searchOption
        ).then(data => this.setState(() => ({ data: data.data })));
    };

    changeSearch = data => {
        this.setState(() => ({ searchOption: data }));
    };

    render() {
        const { data, sortingType, searchOption } = this.state;
        return (
            <SearchCSSGrid>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'} />
                    <FormTitle title={'FIND YOUR MOVIE'}/>
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

export default MainPage;