/* eslint-disable import/no-mutable-exports */
// because error  Exporting mutable 'let' binding, use 'const' instead  import/no-mutable-exports
import { createBrowserHistory } from 'history';

let history;

if (typeof document !== 'undefined') {
  history = createBrowserHistory();
}

export default history;
