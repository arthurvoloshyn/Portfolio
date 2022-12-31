import React from 'react';

import URLS from '../../../constants/urls';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const Houses = () => (
  <div className="houses-bg_outer">
    <div className="houses-bg_layer" />
    <Pattern
      classname="Houses"
      description={() => (
        <div className="description">
          <p>
            I have developed the project, including the development of the backend part on Laravel,
            and the frontend on Vue.js; design of architecture; code review of team members.
          </p>
        </div>
      )}
      effectClassIn="zoomIn"
      effectClassOut="zoomOut"
      logoDescription={() => (
        <p className="paragraph">
          The system for the design and buying a construction project of building
        </p>
      )}
      logoText="HOMES"
    />
  </div>
);

const sectionData = {
  sectionClassName: 'houses-bg',
  sectionPage: URLS.houses,
};

export default withSectionData(sectionData)(Houses);
