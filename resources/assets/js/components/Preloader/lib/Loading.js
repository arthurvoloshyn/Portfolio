import PathLoader from './PathLoader';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setStatus } from '../../../actions/preloader';
import { reloadPage, setPage } from '../../../actions/page';
import { setStatusMenu } from '../../../actions/menu';
import { withRouter } from 'react-router-dom';
import { URLS } from './../../../constants/urls';
import PropTypes from 'prop-types';

function mapStateToProps (state) {
  return {
    preloader: state.preloader,
    page: state.page
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ setStatus, reloadPage, setPage, setStatusMenu }, dispatch);
}

class Loading extends Component {
  componentDidMount () {
    this.support = { animations: window.Modernizr.cssanimations };
    this.container = document.getElementById('ip-container');
    this.animEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    };
    this.animEndEventName = this.animEndEventNames[window.Modernizr.prefixed('animation')];
    this.header = this.container.querySelector('div.ip-header');

    this.init();
  }

  componentDidUpdate () {
    if (this.props.page.statusReload) {
      const page = this.props.page.page === URLS.main ? '' : this.props.page.page;

      this.reloading(page);

      this.props.reloadPage(false);
    }
  }

  init () {
    $('#img_loader').removeClass('transparent');
    $('#img_loader').addClass('show');

    this.loader = new PathLoader(document.getElementById('ip-loader-circle'));
    this.props.setStatus(true);

    let self = this;

    function onEndInitialAnimation () {
      if (self.support.animations) {
        self.container.removeEventListener(self.animEndEventName, onEndInitialAnimation);
      }

      $('.for_fade').css('visibility', 'hidden');

      self.startLoading();

      setTimeout(_ => {
        $('.for_fade').css('visibility', 'visible');
        $('.for_fade').addClass('animated fadeIn');

        self.props.setStatus(false);
      }, 1000);
    };

    // disable scrolling
    window.addEventListener('scroll', this.noscroll);

    // initial animation
    classie.add(this.container, 'loading');

    if (this.support.animations) {
      this.container.addEventListener(this.animEndEventName, onEndInitialAnimation);
    } else {
      onEndInitialAnimation();
    }
  }

  reloading (page) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#ip-container').addClass('unloaded');

    setTimeout(() => {
      $('#ip-container').removeClass('loaded unloaded');

      this.props.history.push(page);
      this.props.setStatusMenu(false);
      this.init();
    }, 1000);
  }

  startLoading () {
    // simulate loading something..

    let self = this;

    function simulationFn (instance) {
      window.loadingFast ? self.progress = 1 : self.progress = 0;

      var interval = setInterval(function () {
        // self.progress = Math.min(self.progress + Math.random() * 0.1, 1);
        self.progress = 1;
        instance.setProgress(self.progress);

        // reached the end
        if (self.progress === 1) {
          window.loadingFast = true;

          if (self.props.page.page !== URLS.main || $(window).height() < 500) {
            $('#img_loader').addClass('transparent');
            $('#img_loader').removeClass('show');
          }
          classie.remove(self.container, 'loading');
          classie.add(self.container, 'loaded');
          clearInterval(interval);

          let onEndHeaderAnimation = (ev) => {
            if (self.support.animations) {
              if (ev.target !== self.header) return;
              window.removeEventListener(self.animEndEventName, onEndHeaderAnimation);
            }

            classie.add(document.body, 'layout-switch');
            window.removeEventListener('scroll', self.noscroll);
          };

          if (self.support.animations) {
            self.header.addEventListener(self.animEndEventName, onEndHeaderAnimation);
          } else {
            onEndHeaderAnimation();
          }
        }
      }, 80);
    };

    this.loader.setProgressFn(simulationFn);
  }

  noscroll () {
    window.scrollTo(0, 0);
  }

  render () {
    return <div></div>;
  }
}

Loading.propTypes = {
  page: PropTypes.object,
  history: PropTypes.object,
  reloadPage: PropTypes.func,
  setStatus: PropTypes.func,
  setStatusMenu: PropTypes.func
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Loading));
