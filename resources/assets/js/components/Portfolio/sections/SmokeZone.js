import React from 'react';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import portfolioTechnologiesList from '../constants/portfolioTechnologiesList';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const SmokeZone = () => (
  <div className="smoke-zone-bg_outer">
    <div className="smoke-zone-bg_layer">
      <img alt="Smoke Zone" src={IMGS.smokeZone} />
    </div>

    <Pattern
      classname="Smoke_Zone"
      description={() => (
        <div className="description">
          <p>
            I have developed the online store, based on the unique MVC core;
            <span>
              promotion, and support; development of a flexible administration panel with content
              management features.
            </span>
          </p>
        </div>
      )}
      effectClassIn="flipInX"
      effectClassOut="flipOutX"
      logo={IMGS.hookah}
      logoDescription={() => (
        <p className="header-container">
          <span className="header">SMOKE-ZONE</span>
          <span className="paragraph">Online shop selling tobacco for hookah</span>
        </p>
      )}
      technologies={portfolioTechnologiesList.smokeZone}
    />
  </div>
);

const sectionData = {
  sectionClassName: 'smoke-zone-bg',
  sectionPage: URLS.smokeZone,
};

export default withSectionData(sectionData)(SmokeZone);
