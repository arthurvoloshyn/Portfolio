import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReactFullpage from '@fullpage/react-fullpage';

import Constants from '../../constants/constants';

import { setPage } from '../../actions/page';

import { sections, sectionUrls } from './utils/getSections';

import './scss/Portfolio.scss';

const Portfolio = ({ setPage }) => (
  <div>
    <ReactFullpage
      navigation={true}
      keyboardScrolling={true}
      licenseKey={Constants.fullPageLicenseKey}
      anchors={sectionUrls}
      onLeave={(origin, { anchor }, direction) => {
        setPage(anchor);
      }}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {Object.values(sections).map((section, key) => (
            <div key={key} className="section">
              {section}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  </div>
);

const matchDispatchToProps = { setPage };

Portfolio.propTypes = {
  setPage: PropTypes.func
};

Portfolio.defaultProps = {
  setPage: () => {}
};

export default connect(null, matchDispatchToProps)(Portfolio);
