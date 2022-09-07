import React from 'react';

import Content from './components/Content/Content';
import Menu from './components/Menu/Menu';
import Preloader from './components/Preloader/Preloader';

const App = () => (
  <div className="global-wrapper">
    <div className="ip-container" id="ip-container">
      <div>
        <Menu />
        <Preloader />
      </div>

      <Content />
    </div>
  </div>
);

export default App;
