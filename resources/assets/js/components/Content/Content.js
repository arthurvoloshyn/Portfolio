import React, {Component, Suspense} from 'react';
import {URLS} from './../../constants/urls';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingPage from "../LoadingPage";
import '../../../../../node_modules/leaflet/dist/leaflet.css';
import './scss/Content.scss';


const Skills = React.lazy(() => import('./../Skills/Skills'));
const Contact = React.lazy(() => import('./../Contact/Contact'));
const Portfolio = React.lazy(() => {

    return new Promise(resolve => {
        setTimeout(() => resolve(import("./../Portfolio/Portfolio")), 3000);
    });

});
const Home = React.lazy(() => import('./../Home/Home'));

function mapStateToProps (state) {
  return {
    menu: state.menu
  };
}

class Content extends Component {
  render () {
    return (
      <div id="main_container" className={this.props.menu.status ? 'main-light' : 'main-dark'}>

          <Suspense fallback={<LoadingPage/>}>
              <Route exact path={URLS.url_skills} component={Skills}/>
              <Route exact path={URLS.url_contacts} component={Contact}/>
              <Route exact path={URLS.url_portfolio} component={Portfolio}/>
              <Route exact path={URLS.url_home} component={Home}/>
          </Suspense>

      </div>
    );
  }
}

Content.propTypes = {
  menu: PropTypes.object
};

export default connect(mapStateToProps)(Content);
