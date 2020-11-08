import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParallaxMousemove from 'react-parallax-mousemove';

import Constants from '../../../constants/constants';
import URLS from '../../../constants/urls';
import IMGS from '../../../constants/imgs';
import sectionStyles from '../../../constants/sectionStyles';
import Pattern from '../parts/Pattern';

class Arcbazar extends Component {
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

    page === URLS.arcbazar
      ? menuItems.addClass('arcbazar-bg')
      : menuItems.removeClass('arcbazar-bg');
  }

  render() {
    return (
      <ParallaxMousemove containerStyle={sectionStyles.outer}>
        <Pattern
          classname="Arcbazar"
          description={() => (
            <div className="description">
              <p className="first">My team and I have developed new features;</p>

              <p>writing backend with PHP, Elasticsearch and MySQL;</p>

              <p className="last">also working with frontend new features</p>
            </div>
          )}
          effectClassIn="flipInY"
          effectClassOut="zoomOutUp"
          figure={() => (
            <div>
              <span>View</span>
              <span>Arcbazar</span>
            </div>
          )}
          logo={IMGS.arcbazar}
          logoDescription={() => (
            <p className="paragraph">Create unique interie and landscape design</p>
          )}
          url={Constants.arcbazar}
        />
      </ParallaxMousemove>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Arcbazar);
