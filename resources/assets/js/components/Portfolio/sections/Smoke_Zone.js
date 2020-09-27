import React from 'react';

import IMGS from '../../../constants/imgs';
import Constants from '../../../constants/constants';

import Pattern from '../parts/Pattern';

const style = {
  outter: {
    background: '#000000',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  bgLayerStyle: {
    position: 'absolute',
    height: '100%',
  },
};

const { outter, bgLayerStyle } = style;

export const Smoke_Zone = () => (
  <div style={outter}>
    <div style={bgLayerStyle}>
      <img alt="Smoke Zone" src={IMGS.smokeZone} />
    </div>

    <Pattern
      classname="Smoke_Zone"
      description={() => (
        <div className="description">
          <p>
            I have developed the online store, based on the unique MVC core;
            <span>
              promotion and support; development of a flexible administration panel with content
              management features
            </span>
          </p>
        </div>
      )}
      effectClassIn="flipInX"
      effectClassOut="flipOutX"
      figure={() => <div />}
      logo={IMGS.hookah}
      logoDescription={() => (
        <p className="header-container">
          <span className="header">SMOKE-ZONE</span>
          <span className="paragraph">online shop selling tobacco for hookah</span>
        </p>
      )}
      technologies={() => (
        <div className="technologies">
          <div>
            <div />
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      url={Constants.smokeZone}
    />
  </div>
);
