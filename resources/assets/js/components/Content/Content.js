import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { URLS } from '../../constants/urls';

import LoadingPage from '../LoadingPage';

import 'leaflet/dist/leaflet.css';

import './scss/Content.scss';

const Skills = lazy(() => import('../Skills/Skills'));
const Contact = lazy(() => import('../Contact/Contact'));
const Portfolio = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => resolve(import('../Portfolio/Portfolio')), 3000);
    })
);
const Home = lazy(() => import('../Home/Home'));

const Loading = <LoadingPage />;

const { url_skills, url_contacts, url_portfolio, url_home } = URLS;

const Content = ({ menu: { status } }) => (
  <div id="main_container" className={status ? 'main-light' : 'main-dark'}>
    <Suspense fallback={Loading}>
      <Route exact path={url_skills} component={Skills} />
      <Route exact path={url_contacts} component={Contact} />
      <Route exact path={url_portfolio} component={Portfolio} />
      <Route exact path={url_home} component={Home} />
    </Suspense>
  </div>
);

const mapStateToProps = ({ menu }) => ({ menu });

Content.propTypes = {
  menu: PropTypes.shape({
    status: PropTypes.bool
  })
};

Content.defaultProps = {
  menu: {
    status: false
  }
};

export default connect(mapStateToProps)(Content);
