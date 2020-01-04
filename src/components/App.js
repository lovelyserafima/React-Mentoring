/* eslint-disable class-methods-use-this */
// because of  Expected 'this' to be used by class method 'render'  class-methods-use-this
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/searchpage/MainPage';
import DetailPage from './pages/detailpage/DetailPage';
import NotFoundPage from './pages/notfound/NotFound';

export default class App extends Component {
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
