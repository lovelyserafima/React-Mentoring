import React from 'react';
import {ButtonsWrapper, Display, ResultsOptionsWrapper} from "./ResultOptions.Styles";
import OptionButton from "../../optionbutton/OptionButton";
import {sortingTypeForDisplay} from "../../../constants/CommonConstants";
import {RATING} from "./ResultOptions.Constants";

const ResultsOptions = ({ dataSize, changeSorting, sortingType }) => (
    <ResultsOptionsWrapper>
        <Display>{dataSize} movies found</Display>
        <ButtonsWrapper>
            <Display>Sort by:</Display>
            {[sortingTypeForDisplay["release date"], RATING].map(title => (
                <OptionButton
                    text={title}
                    changeOption={changeSorting}
                    option={sortingType}
                    key={title}
                />
            ))}
        </ButtonsWrapper>
    </ResultsOptionsWrapper>
);

export default ResultsOptions;