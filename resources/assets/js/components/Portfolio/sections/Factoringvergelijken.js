import React from 'react';

import Constants from '../../../constants/constants';
import IMGS from '../../../constants/imgs';
import sectionStyles from '../../../constants/sectionStyles';
import Pattern from '../parts/Pattern';

const Factoringvergelijken = () => (
  <div style={sectionStyles.outer}>
    <div className="factoringvergelijken-bg_layer" />

    <Pattern
      classname="Factoringvergelijken"
      description={() => (
        <div className="description">
          <p>
            My team and I have developed the application build with JS and PHP. Also I have made and
            designed some parts of the interface; improvement of modules in the administration panel
          </p>
        </div>
      )}
      effectClassIn="slideInDown"
      effectClassOut="zoomOutUp"
      figure={() => (
        <div>
          <span>View</span>
          <span>factoring</span>
        </div>
      )}
      logo={IMGS.factoringvergelijken}
      logoDescription={() => (
        <p className="header-container">
          <span className="paragraph">Online factoring services</span>
        </p>
      )}
      url={Constants.factoringvergelijken}
    />
  </div>
);

export default Factoringvergelijken;
