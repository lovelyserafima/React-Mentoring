import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { unSelectMovie } from '../../../modules/actions';

const ChangePageButton = ({ unSelectMovie: unSelectMovieAction }) => (
    <Link to="/" onClick={() => unSelectMovieAction()}>
        <IconButton id="changePageButton">
            <SearchIcon color="secondary"/>
        </IconButton>
    </Link>
);

ChangePageButton.propTypes = {
  unSelectMovie: PropTypes.func.isRequired,
};

export default connect(
  null,
  { unSelectMovie },
)(ChangePageButton);
