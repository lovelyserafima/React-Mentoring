import React, { Component } from 'react';
import MainPage from "./pages/searchpage/MainPage";
import DetailPage from "./pages/detailpage/DetailPage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFoundPage from "./pages/notfound/NotFound";

const mapStateToProps = state => ({
    selectedMovie: state.movieReducer.selectedMovie
});

export class App extends Component {

    render() {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/search/:term" component={MainPage} />
                    <Route path="/film/:id" component={DetailPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </>
        );
    }
}

export default connect(mapStateToProps)(App);