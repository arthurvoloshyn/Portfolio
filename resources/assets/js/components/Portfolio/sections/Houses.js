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

    const menuItems = $('#fp-nav ul li a span');

    page === URLS.c2corner ? menuItems.addClass('houses-bg') : menuItems.removeClass('houses-bg');
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
                Laravel, and the frontend on VueJs; design of architecture; code review of team
                members
              </p>
            </div>
          )}
          effectClassIn="zoomIn"
          effectClassOut="zoomOut"
          logoDescription={() => (
            <p className="paragraph">
              The system for design and buying a construction project of building
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
