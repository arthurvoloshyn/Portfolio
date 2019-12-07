import React, { Component } from 'react';
import ParallaxMousemove from 'react-parallax-mousemove';
import Pattern from './../parts/Pattern';
import Constants from '../../../constants/constants';
import { URLS } from '../../../constants/urls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  }
};

class Arcbazar extends Component {
  UNSAFE_componentWillReceiveProps ({ page: { page } }) {
    if (page === URLS.arcbazar) {
      $('#fp-nav ul li a span').addClass('arcbazar-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('arcbazar-bg');
    }
  }

  render () {
    return (
      <ParallaxMousemove containerStyle={style.outter}>
        <Pattern
          classname='Arcbazar'
          logo='../imgs/arcbazar_logo.png'
          url={Constants.arcbazr}
          effectClassIn='flipInY'
          effectClassOut='zoomOutUp'
          technologies={_ => (

            <div className={'technologies'}>
            </div>
          )}

          description={() => (

            <div className={'description'}>
              <p className={'first'}>
                                My team and I have developed new features;
              </p>

              <p>
                                writing backend with PHP, Elasticsearch and MySQL;
              </p>

              <p className={'last'}>
                                also working with frontend new features
              </p>
            </div>
          )}

          figure={() => (

            <div>
              <span>View</span>
              <span>Arcbazar</span>
            </div>
          )}

          logoDescription={() => (

            <p className={'paragraph'}>Create unique interie and landscape design</p>

          )}

        />

      </ParallaxMousemove>
    );
  }
}

const mapStateToProps = ({ page, preloader }) => ({
  page,
  preloader
});

Arcbazar.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(Arcbazar);
