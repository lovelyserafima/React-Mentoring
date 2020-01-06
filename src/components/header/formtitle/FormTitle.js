import React from 'react';
import PropTypes from 'prop-types';
import H2 from './FormTitle.Styles';

const FormTitle = (props) => <H2>{props.title}</H2>;

FormTitle.propTypes = {
  title: PropTypes.string,
};
export default FormTitle;
