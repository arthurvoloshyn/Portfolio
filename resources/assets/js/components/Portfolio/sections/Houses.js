import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import URLS from '../../../constants/urls';
import Pattern from '../parts/Pattern';

class Houses extends Component {
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
        ? menuItem.classList.add('houses-bg')
        : menuItem.classList.remove('houses-bg'),
    );
  }

  render() {
    return (
      <div className="houses-bg_outer">
        <div className="houses-bg_layer" />
        <Pattern
          classname="Houses"
          description={() => (
            <div className="description">
              <p>
                I have developed the project, including the development of the backend part on
                Laravel, and the frontend on Vue.js; design of architecture; code review of team
                members.
              </p>
            </div>
          )}
          effectClassIn="zoomIn"
          effectClassOut="zoomOut"
          logoDescription={() => (
            <p className="paragraph">
              TThe system for the design and buying a construction project of building
            </p>
          )}
          logoText="HOOMES"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Houses);
