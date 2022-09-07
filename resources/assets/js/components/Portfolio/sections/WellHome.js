import React from 'react';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import sectionStyles from '../constants/sectionStyles';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const WellHome = () => (
  <div style={sectionStyles.outer}>
    <div className="welhome-bg_layer" />

    <Pattern
      classname="WellHome"
      description={() => (
        <div className="description">
          <p>
            I have developed a CRM system in order to automate business processes in the company
            engaged in the sale of real estate -{' '}
            <b>
              <a href="http://www.welhome.ru/" rel="noopener noreferrer" target="_blank">
                Welhome
              </a>
            </b>
            <span>
              , based on SugarCRM; designed the database and system architecture; integration with
              existing enterprise systems.
            </span>
          </p>
        </div>
      )}
      effectClassIn="lightSpeedIn"
      effectClassOut="lightSpeedOut"
      logo={IMGS.wellHome}
      logoDescription={() => (
        <p className="header-container">
          <span className="paragraph">CRM system for real estate company</span>
        </p>
      )}
    />
  </div>
);

const sectionData = {
  sectionClassName: 'welhome-bg',
  sectionPage: URLS.welhome,
};

export default withSectionData(sectionData)(WellHome);
