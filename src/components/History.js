import { createBrowserHistory } from 'history';
// export default createBrowserHistory();

const history = createBrowserHistory();

// Get the current location.
// Listen for changes to the current location.
history.listen(() => {

});

export default history;