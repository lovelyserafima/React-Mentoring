import React from 'react';
import { connect } from 'react-redux';
import { unSelectMovie } from '../../../redux/actions';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

export const ChangePageButton = ({ unSelectMovie }) => (
    <IconButton onClick={() => unSelectMovie()}>
        <SearchIcon color="secondary"/>
    </IconButton>
);

export default connect(
    null,
    { unSelectMovie }
)(ChangePageButton);