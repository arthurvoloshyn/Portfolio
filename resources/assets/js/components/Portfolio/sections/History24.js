import React from 'react';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import withStyledMenu from '../hocs/withStyledMenu';
import Pattern from '../parts/Pattern';

const History24 = () => (
  <div className="history24-bg_outer">
    <div className="history24-bg_layer" />

    <Pattern
      classname="History24"
      description={() => (
        <div className="description">
          <p>
            I have built the educational platform, based on the PHP framework - Laravel;{' '}
            <span>
              designed the architecture of the system, wrote the frontend using Bootstrap, Gulp,
              jQuery, and other libraries.
            </span>
          </p>
        </div>
      )}
      effectClassIn="zoomIn"
      effectClassOut="zoomOut"
      logo={IMGS.pantheon}
      logoDescription={() => (
        <p className="header-container">
          <span className="header">HISTORY.RF</span>
          <span className="paragraph">
            Russian portal for online preparation for exams on history
          </span>
        </p>
      )}
    />
  </div>
);

const sectionData = {
  sectionClassName: 'history24-bg',
  sectionPage: URLS.history24,
};

export default withStyledMenu(sectionData)(History24);
