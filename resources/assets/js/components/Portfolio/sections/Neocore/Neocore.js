import React from 'react';
import PropTypes from 'prop-types';

import URLS from '../../../../constants/urls';
import withSectionData from '../../hocs/withSectionData';
import { remove, setup } from './common/shift';

const Neocore = ({ info, toggle }) => (
  <div className="demo-4 neocore">
    <section>
      <div className="frame" />

      <div className="content content--canvas-neocore">
        <div className="neocore-container">
          <div className="header">
            <div className="logo" />

            <div className="description">online casino network</div>
          </div>

          <div className={`tech-container ${info ? 'd-none' : 'd-flex'}`}>
            <div className="row">
              <div className="techs" />
            </div>
          </div>

          <div className={`info-container tzie-small ${info ? 'd-flex' : 'd-none'}`}>
            Developed GraphQL API for complex enterprise systems. Created a new various
            functionality, also covered with tests. Optimized queries to the MongoDB database, added
            indexes.
          </div>

          <div className={`arrow ${info ? 'arrow-up' : 'arrow-down'}`} onClick={toggle} />
        </div>
      </div>
    </section>
  </div>
);

Neocore.propTypes = {
  info: PropTypes.bool,
  toggle: PropTypes.func,
};

Neocore.defaultProps = {
  info: false,
  toggle: () => {},
};

const sectionData = {
  sectionClassName: 'neocore-bg',
  sectionPage: URLS.neocore,
  onEnter: () => setup(),
  onLeave: () => remove(),
};

export default withSectionData(sectionData)(Neocore);
