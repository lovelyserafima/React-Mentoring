import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import store from "./redux/store";
import GlobalStyle from "./components/Global.Styles";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <BrowserRouter>
                <>
                    <GlobalStyle/>
                    <App />
                </>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>,
    document.getElementById('root')
);
