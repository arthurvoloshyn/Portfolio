import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import routes from '../../constants/routes';
import LoadingPage from '../LoadingPage/LoadingPage';

import 'leaflet/dist/leaflet.css';

import './scss/Content.scss';

const Loading = <LoadingPage />;

const Content = ({ menu: { status } }) => (
  <div className={status ? 'main-light' : 'main-dark'} id="main_container">
    <Suspense fallback={Loading}>
      {routes.map(({ component: Component, exact, path }) => (
        <Route key={path} component={Component} exact={exact} path={path} />
      ))}
    </Suspense>
  </div>
);

const mapStateToProps = ({ menu }) => ({ menu });

Content.propTypes = {
  menu: PropTypes.shape({
    status: PropTypes.bool,
  }),
};

Content.defaultProps = {
  menu: {
    status: false,
  },
};

export default connect(mapStateToProps)(Content);
