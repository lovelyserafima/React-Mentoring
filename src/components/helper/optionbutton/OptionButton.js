import React from 'react';
import Button from './OptionButton.Styles';

const OptionButton = ({ changeOption, option, text }) => (
    <Button onClick={() => changeOption(text)} option={option} text={text}>
        {text}
    </Button>
);

export default OptionButton;
