import React from 'react';

import { IMGS } from '../../../constants/imgs';

import Pattern from '../parts/Pattern';

const style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    backgroundImage: `url(${IMGS.skyline})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '-50px'
  }
};

const { outter, bgLayerStyle } = style;

export const WellHome = () => (
  <div style={outter}>
    <div style={bgLayerStyle} />

    <Pattern
      classname="WellHome"
      logo={IMGS.wellHome}
      url=""
      effectClassIn="lightSpeedIn"
      effectClassOut="lightSpeedOut"
      technologies={() => <div className="technologies" />}
      description={() => (
        <div className="description">
          <p>
            I have developed CRM system in order to automate business processes in the company
            engaged in the sale of real estate -{' '}
            <b>
              <a href="http://www.welhome.ru/" target="_blank" rel="noopener noreferrer">
                Welhome
              </a>
            </b>
            <span>
              , based on SugarCRM; designed the database and system architecture; integration with
              existing enterprise systems
            </span>
          </p>
        </div>
      )}
      figure={() => <div />}
      logoDescription={() => (
        <p className="header-container">
          <span className="paragraph">CRM system for real estate company</span>
        </p>
      )}
    />
  </div>
);
