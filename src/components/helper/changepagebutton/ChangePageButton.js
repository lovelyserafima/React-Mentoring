import React from 'react';
import { connect } from 'react-redux';
import { unSelectMovie } from '../../../redux/actions';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom';

export const ChangePageButton = ({ unSelectMovie }) => (
    <Link to="/" onClick={() => unSelectMovie()}>
        <IconButton id="changePageButton">
            <SearchIcon color="secondary"/>
        </IconButton>
    </Link>
);

export default connect(
    null,
    { unSelectMovie }
)(ChangePageButton);