import React from 'react';
import PropTypes from 'prop-types';
import Button from './OptionButton.Styles';

const OptionButton = ({ changeOption, option, text }) => (
    <Button onClick={() => changeOption(text)} option={option} text={text}>
        {text}
    </Button>
);

OptionButton.propTypes = {
  changeOption: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default OptionButton;
