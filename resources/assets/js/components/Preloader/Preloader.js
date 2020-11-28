import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import URLS from '../../constants/urls';
import IMGS from '../../constants/imgs';
import Loading from './common/Loading';

import './scss/Preloader.scss';

/* eslint-disable max-len */
const Preloader = ({ page: { page }, menu: { status } }) => (
  <div className="ip-header" id="preloader_container">
    <h1 className="ip-logo">
      <img
        alt="loader"
        className={`ip-inner ${status && URLS.main === page ? 'main-light' : 'main-dark'}`}
        id="img_loader"
        src={IMGS.preloader}
      />
    </h1>
    <div className="ip-loader">
      <svg className="ip-inner" height="60px" viewBox="0 0 80 80" width="60px">
        <path
          className="ip-loader-circlebg"
          d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
        />
        <path
          className="ip-loader-circle"
          d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
          id="ip-loader-circle"
        />
      </svg>
    </div>
    <Loading />
  </div>
);
/* eslint-enable */

const mapStateToProps = ({ page, menu }) => ({ page, menu });

Preloader.propTypes = {
  page: PropTypes.shape({
    page: PropTypes.string,
  }),
  menu: PropTypes.shape({
    status: PropTypes.bool,
  }),
};

Preloader.defaultProps = {
  page: {
    page: '',
  },
  menu: {
    status: false,
  },
};

export default connect(mapStateToProps)(Preloader);
