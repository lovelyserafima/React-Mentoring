import React from 'react';
import ReactDOM from "react-dom";
import element from "./components/reactCreateElementComponent";
import ReactComponent from "./components/reactComponent";
import ReactPureComponent from "./components/reactPureComponent";
import FunctionalComponent from "./components/functionalComponent";

ReactDOM.render(element, document.getElementById('React.createElement'));
ReactDOM.render(<ReactComponent/>, document.getElementById('React.Component'));
ReactDOM.render(<ReactPureComponent/>, document.getElementById('React.PureComponent'));
ReactDOM.render(FunctionalComponent, document.getElementById("Functional component"));