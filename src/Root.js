import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './components/Global.Styles';
import App from './components/App';

const Root = ({
  Router, location, context, store,
}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <ErrorBoundary>
                <>
                    <GlobalStyle/>
                    <App />
                </>
            </ErrorBoundary>
        </Router>
    </Provider>
);

Root.propTypes = {
  Router: PropTypes.func,
  location: PropTypes.string,
  context: PropTypes.object,
  store: PropTypes.object,
};

export default hot(module)(Root);
