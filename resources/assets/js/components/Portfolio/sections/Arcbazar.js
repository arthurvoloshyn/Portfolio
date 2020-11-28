import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ParallaxMousemove from 'react-parallax-mousemove';

import portfolioLinksList from '../../../constants/portfolioLinksList';
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

    const menuItems = document.querySelectorAll('#fp-nav ul li a span');

    menuItems.forEach(menuItem =>
      page === URLS.arcbazar
        ? menuItem.classList.add('arcbazar-bg')
        : menuItem.classList.remove('arcbazar-bg'),
    );
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
          url={portfolioLinksList.arcbazar}
        />
      </ParallaxMousemove>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Arcbazar);
