import React, { Component } from 'react';
import Constants from '../../../constants/constants';
import Pattern from './../parts/Pattern';
import { connect } from 'react-redux';
import { URLS } from '../../../constants/urls';
import PropTypes from 'prop-types';

class C2Corner extends Component {
  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.page.page === URLS.c2corner) {
      $('#fp-nav ul li a span').addClass('c2corner-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('c2corner-bg');
    }
  }

  render () {
    return (

      <Pattern

        classname="C2Corner"
        logo={null}
        logoText={'C2CORNER'}
        url={Constants.c2corner}
        effectClassIn='zoomIn'
        effectClassOut='zoomOut'
        technologies={_ => (

          <div className={'technologies'}>
          </div>
        )}

        description={_ => (

          <div className={'description'}>
            <p>
                            My team and I developed this system. The backend is build with Laravel and frontend with
                            TypeScript;
                            a lot of components for API communication with marketplaces and payment operations;
                            development and design of new features
            </p>
          </div>
        )}

        figure={() => (

          <div>
            <span>View</span>
            <span>C2Corner</span>
          </div>

        )}

        logoDescription={() => (
          <p className={'paragraph'}>
                        High load platform for wholesales on the largest marketplaces such as
                        Amazon&nbsp;and&nbsp;Ebay</p>
        )}

      />

    );
  }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}
C2Corner.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(C2Corner);
