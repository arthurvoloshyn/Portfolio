import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import portfolioTechnologiesList from '../constants/portfolioTechnologiesList';
import sectionStyles from '../constants/sectionStyles';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const CherryPick = () => (
  <ParallaxMousemove containerStyle={sectionStyles.outer}>
    <Pattern
      classname="CherryPick"
      description={() => (
        <div className="description">
          <p>
            Development of a portal for a job search in the French area. Designing and writing of
            the frontend and backend of the project. Building a RESTful API, with documentation on
            Swagger. Automatic functional tests.
          </p>
        </div>
      )}
      effectClassIn="jello"
      effectClassOut="zoomOutUp"
      logo={IMGS.cherries}
      logoDescription={() => (
        <p className="header-container">
          <span className="header">CherryPick</span>
          <span className="paragraph">A platform for job search and job posting</span>
        </p>
      )}
      technologies={portfolioTechnologiesList.cherryPick}
    />
  </ParallaxMousemove>
);

const sectionData = {
  sectionClassName: 'cherry-pick-bg',
  sectionPage: URLS.cherryPick,
};

export default withSectionData(sectionData)(CherryPick);
