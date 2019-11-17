import React, { Component } from 'react';
import {ButtonsWrapper, Display, InputWrapper, SearchButton, Wrapper} from "./SearchForm.Styles";
import OptionButton from "../../helper/optionbutton/OptionButton";
import {ENTER} from "./SearchForm.Constants";
import {GENRES, RELEASE_DATE, TITLE} from "../../constants/CommonConstants";
import {fetchFromSearch} from "../../../util/dataloader/dataLoader";
import {sortingTypeForSearch} from "../../../util/sortingTypeConstants";

class SearchForm extends Component {
    state = {
        searchValue: '',
        searchOption: TITLE,
        sortingType: RELEASE_DATE
    };

    performSearch = searchString => {
        const { sortingType, searchOption } = this.state;
        fetchFromSearch(
            searchString,
            sortingTypeForSearch(sortingType),
            searchOption
        ).then(data => {
            this.props.resultsCallback(data.data);
        })
    };

    changeSearch = (data, event) => {
        event.preventDefault();
        this.setState(({ searchOption: data }));
    };

    handleInputChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleKeyPress = event => {
        if (event.key === ENTER) {
            this.handleFormSubmit();
        }
    };

    handleFormSubmit = () => {
        this.performSearch(this.state.searchValue);
    };

    render() {
        const { searchValue, searchOption } = this.state;
        return (
            <Wrapper>
                <form onSubmit={this.handleFormSubmit}>
                    <InputWrapper
                        placeholder="type something"
                        value={searchValue}
                        onChange={this.handleInputChange}
                        onKeyPress={this.handleKeyPress}
                    />

                    <ButtonsWrapper>
                        <Display>Search by: </Display>
                        {[TITLE, GENRES].map(searchTitle => (
                            <OptionButton
                                text={searchTitle}
                                changeOption={this.changeSearch}
                                option={searchOption}
                                key={searchTitle}
                            />
                        ))}
                        <SearchButton onClick={this.handleFormSubmit} type="button">
                            Search
                        </SearchButton>
                    </ButtonsWrapper>
                </form>
            </Wrapper>
        );
    }
}

export default SearchForm;