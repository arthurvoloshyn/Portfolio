import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Constants from '../../../constants/constants';
import URLS from '../../../constants/urls';

import Pattern from '../parts/Pattern';

class C2Corner extends Component {
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

    if (page === URLS.c2corner) {
      $('#fp-nav ul li a span').addClass('c2corner-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('c2corner-bg');
    }
  }

  render() {
    return (
      <Pattern
        classname="C2Corner"
        description={() => (
          <div className="description">
            <p>
              My team and I developed this system. The backend is build with Laravel and frontend
              with TypeScript; a lot of components for API communication with marketplaces and
              payment operations; development and design of new features
            </p>
          </div>
        )}
        effectClassIn="zoomIn"
        effectClassOut="zoomOut"
        figure={() => (
          <div>
            <span>View</span>
            <span>C2Corner</span>
          </div>
        )}
        logo={null}
        logoDescription={() => (
          <p className="paragraph">
            High load platform for wholesales on the largest marketplaces such as
            Amazon&nbsp;and&nbsp;Ebay
          </p>
        )}
        logoText="C2CORNER"
        technologies={() => <div className="technologies" />}
        url={Constants.c2corner}
      />
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(C2Corner);
