import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

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
        <div id="ip-container" className="ip-container">
          <div>
            <Menu />
            <Preloader />
          </div>

          <Content />
        </div>
      </Provider>
    </div>
  </Router>,
  document.getElementById('app')
);
