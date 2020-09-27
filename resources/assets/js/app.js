import React from 'react';

import Content from './components/Content/Content';
import Preloader from './components/Preloader/Preloader';
import Menu from './components/Menu/Menu';

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
