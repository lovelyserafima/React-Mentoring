import React from 'react';
import Button from "../../style/helper/ChangePageButton.Styles";

const ChangePageButton = ({ changePage }) => (
    <Button onClick={changePage}>change page</Button>
);

export default ChangePageButton;