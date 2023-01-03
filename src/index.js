import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { homepage } from '../package.json';
import * as serviceWorker from './serviceWorker';
import store from './state/store';
import App from './App';

import './scss/index.scss';

const relativePath = homepage.split('/')[3];

ReactDOM.render(
  <Router basename={`/${relativePath}/`}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.register();
