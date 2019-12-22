import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import configureStore from './modules/configureStore';

const store = configureStore(window.PRELOADED_STATE);
console.log("window " + window.PRELOADED_STATE);
console.log("store in client = " + store);

const root = (
    <Root
        Router={BrowserRouter}
        store={store}
    />
);

hydrate(root, document.getElementById('root'));