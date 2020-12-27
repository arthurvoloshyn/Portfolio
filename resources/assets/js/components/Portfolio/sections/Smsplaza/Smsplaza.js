import React from 'react';
import PropTypes from 'prop-types';

import URLS from '../../../../constants/urls';
import portfolioLinksList from '../../constants/portfolioLinksList';
import withSectionData from '../../hocs/withSectionData';
import { remove, setup } from './common/pipeline';

const Smsplaza = ({ info, toggle }) => (
  <div className="demo-5 smsplaza">
    <section>
      <div className="frame" />

      <div className="content content--canvas--smsplaza">
        <div className="smspalza-container">
          <div className="header">
            <a href={portfolioLinksList.smsplaza} rel="noopener noreferrer" target="_blank">
              <h2 className="logo">SMSPLAZA</h2>
            </a>

            <div className="description">
              <a href={portfolioLinksList.smsplaza} rel="noopener noreferrer" target="_blank">
                Receive SMS Online | Verification Service
              </a>
            </div>
          </div>

          <div className={`tech-container ${info ? 'd-none' : 'd-flex'}`}>
            <div className="row">
              <div className="techs" />
            </div>
          </div>

          <div className={`info-container tzie-small ${info ? 'd-flex' : 'd-none'}`}>
            I have been doing development of the application with external SMS bank equipment,
            design architecture, development, and code quality control as well. I used Nuxt.js as a
            frontend tool to build the interface. I also used Laravel as a backend framework for
            building the API, Laravel for building administration panel; Vue.js for building
            individual components. I have done complete coverage tests and developed the
            infrastructure.
          </div>

          <div className={`arrow ${info ? 'arrow-up' : 'arrow-down'}`} onClick={toggle} />

          <a
            className="mt-50 description"
            href={portfolioLinksList.smsplaza}
            rel="noopener noreferrer"
            target="_blank"
          >
            CHECK IT OUT
          </a>
        </div>
      </div>
    </section>
  </div>
);

Smsplaza.propTypes = {
  info: PropTypes.bool,
  toggle: PropTypes.func,
};

Smsplaza.defaultProps = {
  info: false,
  toggle: () => {},
};

const sectionData = {
  sectionClassName: 'smsplaza-bg',
  sectionPage: URLS.smsplaza,
  onEnter: () => setup(),
  onLeave: () => remove(),
};

export default withSectionData(sectionData)(Smsplaza);
