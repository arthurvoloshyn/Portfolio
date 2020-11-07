import React from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';

import IMGS from '../../../constants/imgs';
import sectionStyles from '../../../constants/sectionStyles';
import Pattern from '../parts/Pattern';

const CherryPick = () => (
  <ParallaxMousemove containerStyle={sectionStyles.outer}>
    <Pattern
      classname="CherryPick"
      description={() => (
        <div className="description">
          <p>
            Development of a portal for job search in the French area. Designing and writing the
            backend of the project. Building a restful API, with documentation on Swagger. Automatic
            functional tests
          </p>
        </div>
      )}
      effectClassIn="jello"
      effectClassOut="zoomOutUp"
      logo={IMGS.cherries}
      logoDescription={() => (
        <p className="header-container">
          <p className="header">CherryPick</p>
          <p className="paragraph">A platform for job search and job posting</p>
        </p>
      )}
      technologies={() => (
        <div className="technologies">
          <div>
            <div />
            <div />
            <div />
          </div>
          <div>
            <div />
            <div />
          </div>
        </div>
      )}
    />
  </ParallaxMousemove>
);

export default CherryPick;
