import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import URLS from '../../../../constants/urls';
import portfolioLinks from '../../constants/portfolioLinks';
import { updateMenuClasses } from '../../../../utils/updateItemClasses';
import Slideshow from './common/Slideshow';

import './common/wordFx';

class CompareIp extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
    }),
    preloader: PropTypes.shape({
      preloader: PropTypes.bool,
    }),
  };

  static defaultProps = {
    page: {
      page: '',
    },
    preloader: {
      preloader: false,
    },
  };

  classSlideshow = createRef();

  state = {
    visible: 0,
    animateClass: 'hide',
    firstTime: true,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { firstTime } = this.state;
    const {
      page: { page: nextPage },
    } = nextProps;

    const sectionClassName = 'compareIp-bg';

    if (nextPage === URLS.compareIp) {
      firstTime && this.show();
      updateMenuClasses(sectionClassName, true);
    } else {
      updateMenuClasses(sectionClassName);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      preloader: { preloader },
      page: { page },
    } = this.props;
    const { firstTime } = this.state;
    const {
      preloader: { preloader: prevPreloader },
    } = prevProps;

    if (!preloader && prevPreloader && page === URLS.compareIp && firstTime) {
      this.show();
    }
  }

  showDescription = () =>
    this.setState({
      animateClass: 'animated fadeIn',
    });

  show = () => {
    const { current } = this.classSlideshow;

    this.slideshow = new Slideshow(current, this.showDescription);

    this.setState({
      firstTime: false,
      visible: true,
    });
  };

  render() {
    const { visible, animateClass } = this.state;
    const logoStyles = { opacity: visible };

    return (
      <div className="CompareIp">
        <div className="content">
          <div ref={this.classSlideshow} className="slideshow">
            <div className="slide slide--current">
              <div className="slide__bg slide__bg--6" />
              <h2 className="word word--6" style={logoStyles}>
                CompareIp
              </h2>

              <div className={`description ${animateClass}`}>
                <p className="word--6 small-text">Online service for patenting of inventions</p>

                <div className="img-container" />
                <a
                  className="draw-border"
                  href={portfolioLinks.compareIp}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ page, preloader }) => ({ page, preloader });

export default connect(mapStateToProps)(CompareIp);
