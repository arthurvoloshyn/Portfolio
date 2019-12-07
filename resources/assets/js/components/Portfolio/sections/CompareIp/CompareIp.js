import React, { Component } from 'react';
import Slideshow from './lib/Slideshow';
import Constants from '../../../../constants/constants';
import './lib/wordFx';
import { connect } from 'react-redux';
import { URLS } from '../../../../constants/urls';
import PropTypes from 'prop-types';

const { compareip } = URLS;

class CompareIp extends Component {
  state = {
    visible: 0,
    animateClass: 'hide',
    firstTime: true
  };

  showDescription = _ => {
    this.setState(
      {
        animateClass: 'animated fadeIn'
      }
    );
  };

  componentDidUpdate (prevProps) {
    const { preloader: { preloader }, page: { page } } = this.props;

    if (!preloader && prevProps.preloader.preloader && page === compareip && this.state.firstTime) {
      this.show();
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    const { page: { page } } = this.props;

    if (page !== compareip && nextProps.page.page === compareip && this.state.firstTime) {
      this.show();
    }

    if (page !== compareip && nextProps.page.page === compareip) {
      $('#fp-nav ul li a span').addClass('compareip-bg');
    } else {
      $('#fp-nav ul li a span').removeClass('compareip-bg');
    }
  }

  show () {
    this.slideshow = new Slideshow(document.querySelector('.slideshow'), this.showDescription);
    this.setState(
      {
        firstTime: false,
        visible: true
      }
    );
  }

  render () {
    const { visible, animateClass } = this.state;

    return (
      <div className={'CompareIp'}>
        <div className={'content'}>
          <div className={'slideshow'}>
            <div className={'slide slide--current'}>
              <div className={'slide__bg slide__bg--6'}></div>
              <h2 style={{ opacity: visible }} className={'word word--6'}>CompareIp</h2>

              <div className={'description ' + animateClass}>
                <p className={'word--6 small-text'}>
                                    Online service for patenting of inventions
                </p>

                <div className={'img-container'}>
                </div>
                <a href={Constants.compareIp} target='_blank' rel='noopener noreferrer'>
                  <button className='draw-border'>Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ page, preloader }) => ({
  page,
  preloader
});

CompareIp.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(CompareIp);
