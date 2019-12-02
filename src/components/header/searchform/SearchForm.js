import React, { Component } from 'react';
import {ButtonsWrapper, Display, InputWrapper, SearchButton, Wrapper} from "./SearchForm.Styles";
import OptionButton from "../../helper/optionbutton/OptionButton";
import {ENTER} from "./SearchForm.Constants";
import {GENRES, TITLE} from "../../constants/CommonConstants";
import { connect } from 'react-redux';
import {changeSearch, updateSearchValue} from "../../../redux/actions";

const mapStateToProps = state => ({
    searchOption: state.searchReducer.searchOption,
    searchValue: state.searchReducer.searchValue
});

export class SearchForm extends Component {

    changeSearch = text => {
        this.props.changeSearch(text);
    };

    handleInputChange = event => {
        this.props.updateSearchValue(event.target.value);
    };

    handleKeyPress = event => {
        if (event.key === ENTER) {
            this.handleFormSubmit(event);
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.props.searchValue);
    };

    render() {
        const { searchOption, searchValue } = this.props;
        return (
            <Wrapper>
                <form onSubmit={this.handleFormSubmit}>
                    <InputWrapper
                        id="location"
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
                        <SearchButton type="submit">
                            Search
                        </SearchButton>
                    </ButtonsWrapper>
                </form>
            </Wrapper>
        );
    }
}

export default connect(
    mapStateToProps,
    { changeSearch, updateSearchValue }
)(SearchForm);
