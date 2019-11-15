import React from 'react';
import {ButtonsWrapper, Display, ResultsOptionsWrapper} from "./ResultOptions.Styles";
import OptionButton from "../../optionbutton/OptionButton";
import Constants from "../../../constants/Constants";

const ResultsOptions = ({ dataSize, changeSorting, sortingType }) => (
    <ResultsOptionsWrapper>
        <Display>{dataSize} movies found</Display>
        <ButtonsWrapper>
            <Display>Sort by:</Display>
            {[Constants.RELEASE_DATE, Constants.RATING].map(title => (
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