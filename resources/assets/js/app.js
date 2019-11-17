import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import Content from './components/Content/Content';
import Preloader from './components/Preloader/Preloader';
import Menu from './components/Menu/Menu';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

import './app.scss';

require('./bootstrap');

const store = createStore(reducers);

// It would be easier to live if life had source code ...

render(
  <Router>
    <div className="global-wrapper">
      <Provider store={store}>
        <div id="ip-container" className="ip-container">

          <div>
            <Menu/>
            <Preloader/>
          </div>

          <Content/>

        </div>
      </Provider>
    </div>
  </Router>
  ,
  document.getElementById('app')
);
