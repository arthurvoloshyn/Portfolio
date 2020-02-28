import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setStatus } from '../../../actions/preloader';
import { reloadPage, setPage } from '../../../actions/page';
import { setStatusMenu } from '../../../actions/menu';

import { URLS } from '../../../constants/urls';

import PathLoader from './PathLoader';

class Loading extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
      statusReload: PropTypes.bool
    }),
    history: PropTypes.shape({
      push: PropTypes.func
    }),
    reloadPage: PropTypes.func,
    setStatus: PropTypes.func,
    setStatusMenu: PropTypes.func
  };

  static defaultProps = {
    page: {
      page: '',
      statusReload: false
    },
    history: {
      push: () => {}
    },
    setStatus: () => {},
    reloadPage: () => {},
    setStatusMenu: () => {}
  };

  componentDidMount() {
    this.support = { animations: window.Modernizr.cssanimations };
    this.container = document.getElementById('ip-container');
    this.animEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend'
    };
    this.animEndEventName = this.animEndEventNames[window.Modernizr.prefixed('animation')];
    this.header = this.container.querySelector('div.ip-header');

    this.init();
  }

  componentDidUpdate() {
    const {
      page: { statusReload: propsStatusReload, page: propsPage },
      reloadPage
    } = this.props;

    if (propsStatusReload) {
      const page = propsPage === URLS.main ? '' : propsPage;

      this.reloading(page);

      reloadPage(false);
    }
  }

  init = () => {
    const { setStatus } = this.props;

    $('#img_loader').removeClass('transparent');
    $('#img_loader').addClass('show');

    this.loader = new PathLoader(document.getElementById('ip-loader-circle'));
    setStatus(true);

    let self = this;

    const onEndInitialAnimation = () => {
      const { animations } = self.support;
      const { setStatus: propsSetStatus } = self.props;

      if (animations) {
        self.container.removeEventListener(self.animEndEventName, onEndInitialAnimation);
      }

      $('.for_fade').css('visibility', 'hidden');

      self.startLoading();

      setTimeout(() => {
        $('.for_fade').css('visibility', 'visible');
        $('.for_fade').addClass('animated fadeIn');

        propsSetStatus(false);
      }, 1000);
    };

    // disable scrolling
    window.addEventListener('scroll', this.noscroll);

    // initial animation
    classie.add(this.container, 'loading');

    const { animations } = self.support;

    if (animations) {
      this.container.addEventListener(this.animEndEventName, onEndInitialAnimation);
    } else {
      onEndInitialAnimation();
    }
  };

  reloading = page => {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#ip-container').addClass('unloaded');

    setTimeout(() => {
      const {
        history: { push },
        setStatusMenu
      } = this.props;

      $('#ip-container').removeClass('loaded unloaded');

      push(page);
      setStatusMenu(false);
      this.init();
    }, 1000);
  };

  startLoading = () => {
    // simulate loading something..

    let self = this;

    const simulationFn = ({ setProgress }) => {
      window.loadingFast ? (self.progress = 1) : (self.progress = 0);

      const interval = setInterval(() => {
        // self.progress = Math.min(self.progress + Math.random() * 0.1, 1);
        self.progress = 1;
        setProgress(self.progress);

        // reached the end
        if (self.progress === 1) {
          window.loadingFast = true;

          const {
            page: { page }
          } = self.props;

          if (page !== URLS.main || $(window).height() < 500) {
            $('#img_loader').addClass('transparent');
            $('#img_loader').removeClass('show');
          }

          classie.remove(self.container, 'loading');
          classie.add(self.container, 'loaded');
          clearInterval(interval);

          const onEndHeaderAnimation = ({ target }) => {
            const { animations } = self.support;

            if (animations) {
              if (target !== self.header) return;
              window.removeEventListener(self.animEndEventName, onEndHeaderAnimation);
            }

            classie.add(document.body, 'layout-switch');
            window.removeEventListener('scroll', self.noscroll);
          };

          const { animations } = self.support;

          if (animations) {
            self.header.addEventListener(self.animEndEventName, onEndHeaderAnimation);
          } else {
            onEndHeaderAnimation();
          }
        }
      }, 80);
    };

    const { setProgressFn } = this.loader;

    setProgressFn(simulationFn);
  };

  noscroll = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ preloader, page }) => ({ preloader, page });

const matchDispatchToProps = { setStatus, reloadPage, setPage, setStatusMenu };

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Loading));
