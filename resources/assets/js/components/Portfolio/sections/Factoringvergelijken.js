import React from 'react';

import Constants from '../../../constants/constants';
import IMGS from '../../../constants/imgs';

import Pattern from '../parts/Pattern';

const style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  bgLayerStyle: {
    backgroundImage: `url(${IMGS.profilCity})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '0px',
  },
};

const { outter, bgLayerStyle } = style;

export const Factoringvergelijken = () => (
  <div style={outter}>
    <div style={bgLayerStyle} />

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
      technologies={() => <div className="technologies" />}
      url={Constants.factoringvergelijken}
    />
  </div>
);
