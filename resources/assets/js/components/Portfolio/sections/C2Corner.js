import React from 'react';

import URLS from '../../../constants/urls';
import portfolioLinksList from '../../../constants/portfolioLinksList';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const C2Corner = () => (
  <Pattern
    classname="C2Corner"
    description={() => (
      <div className="description">
        <p>
          My team and I developed this system. The backend is built with Laravel and the frontend
          with TypeScript; a lot of components for API communication with marketplaces and payment
          operations; development and design of new features.
        </p>
      </div>
    )}
    effectClassIn="zoomIn"
    effectClassOut="zoomOut"
    figure={() => (
      <div>
        <span>View</span>
        <span>C2Corner</span>
      </div>
    )}
    logoDescription={() => (
      <p className="paragraph">
        High load platform for wholesalers on the largest marketplaces such as
        Amazon&nbsp;and&nbsp;eBay
      </p>
    )}
    logoText="C2CORNER"
    url={portfolioLinksList.c2corner}
  />
);

const sectionData = {
  sectionClassName: 'c2corner-bg',
  sectionPage: URLS.c2corner,
};

export default withSectionData(sectionData)(C2Corner);
