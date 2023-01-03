import React from 'react';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import portfolioLinks from '../constants/portfolioLinks';
import sectionStyles from '../constants/sectionStyles';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const FactoringVergelijken = () => (
  <div style={sectionStyles.outer}>
    <div className="factoringVergelijken-bg_layer" />

    <Pattern
      classname="FactoringVergelijken"
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
      logo={IMGS.factoringVergelijken}
      logoDescription={() => (
        <p className="header-container">
          <span className="paragraph">Online factoring services</span>
        </p>
      )}
      url={portfolioLinks.factoringVergelijken}
    />
  </div>
);

const sectionData = {
  sectionClassName: 'factoringVergelijken-bg',
  sectionPage: URLS.factoringVergelijken,
};

export default withSectionData(sectionData)(FactoringVergelijken);
