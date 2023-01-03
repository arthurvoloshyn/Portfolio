import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import portfolioLinks from '../constants/portfolioLinks';
import sectionStyles from '../constants/sectionStyles';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const Arcbazar = () => (
  <ParallaxMousemove containerStyle={sectionStyles.outer}>
    <Pattern
      classname="Arcbazar"
      description={() => (
        <div className="description">
          <p className="first">My team and I have developed new features;</p>

          <p>writing backend with PHP, Elasticsearch, and MySQL;</p>

          <p className="last">also working with frontend new features.</p>
        </div>
      )}
      effectClassIn="flipInY"
      effectClassOut="zoomOutUp"
      figure={() => (
        <div>
          <span>View</span>
          <span>Arcbazar</span>
        </div>
      )}
      logo={IMGS.arcbazar}
      logoDescription={() => (
        <p className="paragraph">Create unique interior and landscape design</p>
      )}
      url={portfolioLinks.arcbazar}
    />
  </ParallaxMousemove>
);

const sectionData = {
  sectionClassName: 'arcbazar-bg',
  sectionPage: URLS.arcbazar,
};

export default withSectionData(sectionData)(Arcbazar);
