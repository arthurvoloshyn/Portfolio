import React from 'react';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import withSectionData from '../hocs/withSectionData';
import Pattern from '../parts/Pattern';

const Google = () => (
  <Pattern
    classname="Google"
    description={() => (
      <div className="description">
        <p>
          <b>I</b> have build the game. This is a SPA on jQuery and <b>W</b>
          ebpack
          <br />
          with Ada
          <b>p</b>
          tive <b>I</b>
          nterface
          <br />
          and <b>o</b>
          ptimization of perform
          <b>a</b>
          nce.
        </p>
      </div>
    )}
    effectClassIn="bounceIn"
    effectClassOut="bounceOut"
    logo={IMGS.google}
    logoDescription={() => (
      <p>
        <b>S</b>
        imple and relaxing game
        <br />
        In honor of <b>F</b>
        ebruary 23
        <br />
        For <b>G</b>
        oogle maps
      </p>
    )}
  />
);

const sectionData = {
  sectionClassName: 'google-bg',
  sectionPage: URLS.google,
};

export default withSectionData(sectionData)(Google);
