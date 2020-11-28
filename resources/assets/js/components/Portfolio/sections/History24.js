import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import Pattern from '../parts/Pattern';

class History24 extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
    }),
  };

  static defaultProps = {
    page: {
      page: '',
    },
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      page: { page },
    } = nextProps;

    const menuItems = document.querySelectorAll('#fp-nav ul li a span');

    menuItems.forEach(menuItem =>
      page === URLS.c2corner
        ? menuItem.classList.add('history24-bg')
        : menuItem.classList.remove('history24-bg'),
    );
  }

  render() {
    return (
      <div className="history24-bg_outer">
        <div className="history24-bg_layer" />

        <Pattern
          classname="History24"
          description={() => (
            <div className="description">
              <p>
                I have build the educational platform, based on the PHP framework - Laravel;
                <span>
                  designed the architecture of the system, wrote the frontend using Bootstrap, Gulp,
                  Jquery and other libraries
                </span>
              </p>
            </div>
          )}
          effectClassIn="zoomIn"
          effectClassOut="zoomOut"
          logo={IMGS.pantheon}
          logoDescription={() => (
            <p className="header-container">
              <span className="header">HISTORY.RF</span>
              <span className="paragraph">
                Russian portal for online preparation for exams on history
              </span>
            </p>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(History24);
