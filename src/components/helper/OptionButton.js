import React from 'react';
import Button from "../../style/helper/OptionButton.Styles";

const OptionButton = ({ changeOption, option, text }) => (
    <Button onClick={() => changeOption(text)} option={option} text={text}>
        {text}
    </Button>
);

export default OptionButton;