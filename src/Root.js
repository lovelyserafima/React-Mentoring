import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import ErrorBoundary from "./components/ErrorBoundary";
import {MainPage} from "./components/pages/searchpage/MainPage";
import DetailPage from "./components/pages/detailpage/DetailPage";
import NotFoundPage from "./components/pages/notfound/NotFound";
import { connect } from 'react-redux';

const Root = ({Router, location, context, store}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <ErrorBoundary>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/search/:term" component={MainPage} />
                    <Route path="/film/:id" component={DetailPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </ErrorBoundary>
        </Router>
    </Provider>
);

//export default connect(mapStateToProps)(Root);
export default hot(module)(Root);