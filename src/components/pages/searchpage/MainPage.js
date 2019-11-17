import React, { Component } from 'react';
import PageName from "../../header/pagename/PageName";
import FormTitle from "../../header/formtitle/FormTitle";
import {HeaderCSSGrid, SearchCSSGrid} from "./MainPage.Styles";
import SearchForm from "../../header/searchform/SearchForm";
import {fetchDefault} from "../../../util/dataloader/dataLoader";
import {sortingTypeForDisplay} from "../../../util/sortingTypeConstants";
import ResultsOptions from "../../helper/resultsoption/search/ResultOptions";
import Results from "../../body/results/Results";
import {DEFAULT_LIMIT, RELEASE_DATE} from "../../constants/CommonConstants";

class MainPage extends Component {
    state = {
        data: '',
        sortingType: RELEASE_DATE
    };

    componentDidMount = () => {
        fetchDefault(DEFAULT_LIMIT).then(data =>
            this.setState(() => ({ data: data.data }))
        );
    };

    setResults = results => {
        this.setState({data: results})
    };

    render() {
        const { data, sortingType} = this.state;
        return (
            <SearchCSSGrid>
                <HeaderCSSGrid>
                    <PageName name={'netflixroulette'} />
                    <FormTitle title={'FIND YOUR MOVIE'}/>
                    <SearchForm resultsCallback={this.setResults}/>
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