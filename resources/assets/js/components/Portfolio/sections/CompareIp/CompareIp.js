import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Constants from '../../../../constants/constants';
import { URLS } from '../../../../constants/urls';

import Slideshow from './lib/Slideshow';
import './lib/wordFx';

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

  componentDidUpdate(prevProps) {
    const {
      preloader: { preloader },
      page: { page },
    } = this.props;
    const { firstTime } = this.state;
    const {
      preloader: { preloader: prevPropsPreloader },
    } = prevProps;

    if (!preloader && prevPropsPreloader && page === URLS.compareip && firstTime) {
      this.show();
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { firstTime } = this.state;
    const {
      page: { page: nextPropsPage },
    } = nextProps;

    if (nextPropsPage === URLS.compareip) {
      if (firstTime) {
        this.show();
      }

      $('#fp-nav ul li a span').addClass('compareip-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('compareip-bg');
    }
  }

  showDescription = () => {
    this.setState({
      animateClass: 'animated fadeIn',
    });
  };

  show = () => {
    this.slideshow = new Slideshow(this.classSlideshow.current, this.showDescription);
    this.setState({
      firstTime: false,
      visible: true,
    });
  };

  render() {
    const { visible, animateClass } = this.state;

    return (
      <div className="CompareIp">
        <div className="content">
          <div ref={this.classSlideshow} className="slideshow">
            <div className="slide slide--current">
              <div className="slide__bg slide__bg--6" />
              <h2 className="word word--6" style={{ opacity: visible }}>
                CompareIp
              </h2>

              <div className={`description ${animateClass}`}>
                <p className="word--6 small-text">Online service for patenting of inventions</p>

                <div className="img-container" />
                <a
                  className="draw-border"
                  href={Constants.compareIp}
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
