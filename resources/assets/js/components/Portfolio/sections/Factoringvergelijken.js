import React from 'react';

import URLS from '../../../constants/urls';
import portfolioLinksList from '../constants/portfolioLinksList';
import IMGS from '../../../constants/imgs';
import sectionStyles from '../constants/sectionStyles';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const Factoringvergelijken = () => (
  <div style={sectionStyles.outer}>
    <div className="factoringvergelijken-bg_layer" />

    <Pattern
      classname="Factoringvergelijken"
      description={() => (
        <div className="description">
          <p>
            My team and I have developed the application build with JS and PHP. Also, I have made
            and designed some parts of the interface; improved modules in the administration panel.
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
      url={portfolioLinksList.factoringvergelijken}
    />
  </div>
);

const sectionData = {
  sectionClassName: 'factoringvergelijken-bg',
  sectionPage: URLS.factoringvergelijken,
};

export default withSectionData(sectionData)(Factoringvergelijken);
