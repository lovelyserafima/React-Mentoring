import React from 'react';
import PropTypes from 'prop-types';
import H1 from './PageName.Styles';

const PageName = (props) => <H1>{props.name}</H1>;

PageName.propTypes = {
  name: PropTypes.string,
};

export default PageName;
