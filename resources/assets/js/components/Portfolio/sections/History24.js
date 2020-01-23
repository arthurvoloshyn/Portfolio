import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Constants from '../../../constants/constants';
import { URLS } from '../../../constants/urls';
import { IMGS } from '../../../constants/imgs';

import Pattern from '../parts/Pattern';

const style = {
  outter: {
    backgroundPosition: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    height: '100vh'
  },
  bgLayerStyle: {
    backgroundImage: `url(${IMGS.history})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '100vh',
    bottom: '0px'
  }
};

const { outter, bgLayerStyle } = style;

class History24 extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      page: { page }
    } = nextProps;

    if (page === URLS.history24) {
      $('#fp-nav ul li a span').addClass('history24-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('history24-bg');
    }
  }

  render() {
    return (
      <div style={outter}>
        <div style={bgLayerStyle} />

        <Pattern
          classname="History24"
          logo={IMGS.pantheon}
          url={Constants.history24}
          effectClassIn="zoomIn"
          effectClassOut="zoomOut"
          technologies={() => <div className="technologies" />}
          description={() => (
            <div className="description">
              <p>
                I have build the educational platform, based on the PHP framework - Laravel;
                <span>designed the architecture of the system, wrote the frontend using Bootstrap, Gulp, Jquery and other libraries</span>
              </p>
            </div>
          )}
          figure={() => <div />}
          logoDescription={() => (
            <p className="header-container">
              <span className="header">HISTORY.RF</span>
              <span className="paragraph">Russian portal for online preparation for exams on history</span>
            </p>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

History24.propTypes = {
  page: PropTypes.shape({
    page: PropTypes.string
  })
};

History24.defaultProps = {
  page: {
    page: ''
  }
};

export default connect(mapStateToProps)(History24);
