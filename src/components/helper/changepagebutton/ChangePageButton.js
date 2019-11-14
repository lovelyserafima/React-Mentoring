import React from 'react';
import Button from "./ChangePageButton.Styles";

const ChangePageButton = ({ changePage }) => (
    <Button onClick={changePage}>change page</Button>
);

export default ChangePageButton;