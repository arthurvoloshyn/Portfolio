import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import store from './store';

import Content from './components/Content/Content';
import Preloader from './components/Preloader/Preloader';
import Menu from './components/Menu/Menu';

import './bootstrap';

import './app.scss';

// It would be easier to live if life had source code ...

render(
  <Router>
    <div className="global-wrapper">
      <Provider store={store}>
        <div className="ip-container" id="ip-container">
          <div>
            <Menu />
            <Preloader />
          </div>

          <Content />
        </div>
      </Provider>
    </div>
  </Router>,
  document.getElementById('app'),
);

serviceWorker.register();
