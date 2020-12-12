import React from 'react';
import PropTypes from 'prop-types';

import URLS from '../../../../constants/urls';
import withSectionData from '../../hocs/withSectionData';
import { remove, setup } from './common/swirl';

const Linkful = ({ info, toggle }) => (
  <div className="demo-2 linkful">
    <section>
      <div className="frame" />

      <div className="content content--canvas-linkful">
        <div className="linkful-container">
          <div className="header">
            <div className="logo" />

            <div className="description">
              <span>LINKFUL - A STUNNING WAY TO CREATE A&nbsp;PERFECT ABOUT&nbsp;ME PAGE!</span>
            </div>
          </div>

          <div className={`tech-container ${info ? 'd-none' : 'd-flex'}`}>
            <div className="row">
              <div className="techs" />
            </div>
          </div>

          <div className={`info-container tzie-small ${info ? 'd-flex' : 'd-none'}`}>
            I have created, designed, and developed this project. I built the application using the
            most powerful and popular technologies. The frontend of the user dashboard was built
            using React and Redux and also used Saga to manage the asynchronous actions. The
            administration panel is built with Laravel, and separate components with Vue.js were
            also developed. The backend is based on Laravel, the MySQL, and Mongo databases for
            storing statistics. The system is fully tested. Infrastructure works on the basis of
            Docker and Continues Delivery.
          </div>

          <div className={`arrow ${info ? 'arrow-up' : 'arrow-down'}`} onClick={toggle} />
        </div>
      </div>
    </section>
  </div>
);

Linkful.propTypes = {
  info: PropTypes.bool,
  toggle: PropTypes.func,
};

Linkful.defaultProps = {
  info: false,
  toggle: () => {},
};

const { portfolio: portfolioUrl, first_slide: firstSlideUrl, linkful: linkfulUrl } = URLS;
const sectionData = {
  sectionClassName: 'linkful-bg',
  sectionPage: [portfolioUrl, firstSlideUrl, linkfulUrl],
  onEnter: () => setup(),
  onLeave: () => remove(),
};

export default withSectionData(sectionData)(Linkful);
