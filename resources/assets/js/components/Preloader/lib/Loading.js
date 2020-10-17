import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import setStatus from '../../../actions/preloader';
import { reloadPage, setPage } from '../../../actions/page';
import { setStatusMenu } from '../../../actions/menu';
import URLS from '../../../constants/urls';
import PathLoader from './PathLoader';

class Loading extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
      statusReload: PropTypes.bool,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }),
    reloadPage: PropTypes.func,
    setStatus: PropTypes.func,
    setStatusMenu: PropTypes.func,
  };

  static defaultProps = {
    page: {
      page: '',
      statusReload: false,
    },
    history: {
      push: () => {},
    },
    setStatus: () => {},
    reloadPage: () => {},
    setStatusMenu: () => {},
  };

  componentDidMount() {
    this.support = { animations: window.Modernizr.cssanimations };
    this.container = document.getElementById('ip-container');
    this.animEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend',
    };
    this.animEndEventName = this.animEndEventNames[window.Modernizr.prefixed('animation')];
    this.header = this.container.querySelector('div.ip-header');

    this.init();
  }

  componentDidUpdate() {
    const {
      page: { statusReload: propsStatusReload, page: propsPage },
      reloadPage,
    } = this.props;

    if (propsStatusReload) {
      const page = propsPage === URLS.main ? '' : propsPage;

      this.reloading(page);

      reloadPage(false);
    }
  }

  init = () => {
    const { setStatus } = this.props;
    const ipLoaderCircle = document.getElementById('ip-loader-circle');

    $('#img_loader').removeClass('transparent');
    $('#img_loader').addClass('show');

    this.loader = new PathLoader(ipLoaderCircle);
    setStatus(true);

    const onEndInitialAnimation = () => {
      const { animations } = this.support;
      const { setStatus: propsSetStatus } = this.props;

      animations &&
        this.container.removeEventListener(this.animEndEventName, onEndInitialAnimation);

      $('.for_fade').css('visibility', 'hidden');

      this.startLoading();

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

    const { animations } = this.support;

    animations
      ? this.container.addEventListener(this.animEndEventName, onEndInitialAnimation)
      : onEndInitialAnimation();
  };

  reloading = page => {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#ip-container').addClass('unloaded');

    setTimeout(() => {
      const { history, setStatusMenu } = this.props;

      $('#ip-container').removeClass('loaded unloaded');

      history.push(page);
      setStatusMenu(false);
      this.init();
    }, 1000);
  };

  startLoading = () => {
    // simulate loading something..
    const simulationFn = ({ setProgress }) => {
      window.loadingFast ? (this.progress = 1) : (this.progress = 0);

      const interval = setInterval(() => {
        this.progress = Math.min(this.progress + Math.random() * 0.1, 1);
        setProgress(this.progress);

        // reached the end
        if (this.progress === 1) {
          window.loadingFast = true;

          const {
            page: { page },
          } = this.props;

          if (page !== URLS.main || $(window).height() < 500) {
            $('#img_loader').addClass('transparent');
            $('#img_loader').removeClass('show');
          }

          classie.remove(this.container, 'loading');
          classie.add(this.container, 'loaded');
          clearInterval(interval);

          const onEndHeaderAnimation = ({ target }) => {
            const { animations } = this.support;

            if (animations) {
              if (target !== this.header) return;
              window.removeEventListener(this.animEndEventName, onEndHeaderAnimation);
            }

            classie.add(document.body, 'layout-switch');
            window.removeEventListener('scroll', this.noscroll);
          };

          const { animations } = this.support;

          animations
            ? this.header.addEventListener(this.animEndEventName, onEndHeaderAnimation)
            : onEndHeaderAnimation();
        }
      }, 10);
    };

    const { setProgressFn } = this.loader;

    setProgressFn(simulationFn);
  };

  noscroll = () => window.scrollTo(0, 0);

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ preloader, page }) => ({ preloader, page });

const matchDispatchToProps = { setStatus, reloadPage, setPage, setStatusMenu };

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Loading));
