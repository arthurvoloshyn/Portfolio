import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './store';
import App from './App';

import './scss/index.scss';

ReactDOM.render(
  <Router basename="/Portfolio/">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.register();
