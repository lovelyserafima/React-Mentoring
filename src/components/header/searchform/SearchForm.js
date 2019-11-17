import React, { Component } from 'react';
import {ButtonsWrapper, Display, InputWrapper, SearchButton, Wrapper} from "./SearchForm.Styles";
import OptionButton from "../../helper/optionbutton/OptionButton";
import {ENTER} from "./SearchForm.Constants";
import {GENRES, TITLE} from "../../constants/CommonConstants";

class SearchForm extends Component {
    state = {
        searchValue: ''
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
        this.props.handleFormSubmit(this.state.searchValue);
    };

    render() {
        const { searchOption, changeSearch } = this.props;
        const { searchValue } = this.state;
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
                                changeOption={changeSearch}
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