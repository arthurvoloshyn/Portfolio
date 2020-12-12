import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactFullPage from '@fullpage/react-fullpage';

import environment from '../../constants/environment';
import sections from './constants/sections';
import { setPage } from '../../actions/page';

import './scss/Portfolio.scss';

const Portfolio = ({ setPage }) => {
  const { Wrapper: ReactFullPageWrapper } = ReactFullPage;

  const sectionUrls = Object.keys(sections);
  const sectionComponents = Object.values(sections);

  const onLeave = (_, { anchor }) => setPage(anchor);
  const onRender = () => (
    <ReactFullPageWrapper>
      {sectionComponents.map((section, key) => (
        <div key={key} className="section">
          {section}
        </div>
      ))}
    </ReactFullPageWrapper>
  );

  return (
    <div>
      <ReactFullPage
        anchors={sectionUrls}
        keyboardScrolling
        licenseKey={environment.fullPageLicenseKey}
        navigation
        onLeave={onLeave}
        render={onRender}
      />
    </div>
  );
};

const matchDispatchToProps = { setPage };

Portfolio.propTypes = {
  setPage: PropTypes.func,
};

Portfolio.defaultProps = {
  setPage: () => {},
};

export default connect(null, matchDispatchToProps)(Portfolio);
