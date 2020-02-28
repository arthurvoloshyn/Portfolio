import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleStatus, setStatusMenu } from '../../../actions/menu';

/* eslint-disable no-unused-vars */
const UP = 38;
const DOWN = 40;
const ESC = 27;
/* eslint-enable */

class SVGMenu extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      status: PropTypes.bool
    }),
    page: PropTypes.shape({
      statusReload: PropTypes.bool
    }),
    toggleStatus: PropTypes.func,
    setStatus: PropTypes.func
  };

  static defaultProps = {
    menu: {
      status: false
    },
    page: {
      statusReload: false
    },
    toggleStatus: () => {},
    setStatus: () => {}
  };

  path = window.location.href.split('/')[3].split('#');
  keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  componentDidMount() {
    this.init();
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = ({ keyCode }) => {
    if (keyCode === ESC) {
      this.toggle();
    }
  };

  componentDidUpdate(prevProps) {
    const {
      page: { statusReload }
    } = this.props;

    if (statusReload) {
      setTimeout(() => {
        this.close();
      }, 500);
    }
  }

  init = () => {
    const { setStatus } = this.props;

    this.el = document.getElementById('menu');
    this.trigger = this.el.querySelector('button.menu__handle');
    this.triggerBody = document.getElementById('main_container');
    this.shapeEl = this.el.querySelector('div.morph-shape');

    const s = Snap(this.shapeEl.querySelector('svg'));
    this.pathEl = s.select('path');
    this.paths = {
      reset: this.pathEl.attr('d'),
      open: this.shapeEl.getAttribute('data-morph-open'),
      close: this.shapeEl.getAttribute('data-morph-close')
    };

    setStatus(false);
    this.initEvents();
  };

  initEvents = () => {
    this.triggerBody.addEventListener('click', this.toggleBody);
    this.trigger.addEventListener('click', this.toggle);
  };

  toggleBody = () => {
    const {
      menu: { status },
      toggleStatus
    } = this.props;
    const { close, open, reset } = this.paths;
    const { easeout, elastic } = mina;

    if (status) {
      this.enableScroll();

      classie.remove(this.el, 'menu--anim');
      setTimeout(() => {
        classie.remove(this.el, 'menu--open');
      }, 250);

      this.pathEl.stop().animate({ path: status ? close : open }, 350, easeout, () => this.pathEl.stop().animate({ path: reset }, 800, elastic));

      toggleStatus(status);
    }
  };

  toggle = () => {
    const {
      menu: { status },
      toggleStatus
    } = this.props;
    const { close, open, reset } = this.paths;
    const { easeout, elastic } = mina;

    if (status) {
      this.enableScroll();

      classie.remove(this.el, 'menu--anim');
      setTimeout(() => {
        classie.remove(this.el, 'menu--open');
      }, 250);
    } else {
      this.disableScroll();

      classie.add(this.el, 'menu--anim');
      setTimeout(() => {
        classie.add(this.el, 'menu--open');
      }, 250);
    }
    this.pathEl.stop().animate({ path: status ? close : open }, 350, easeout, () => this.pathEl.stop().animate({ path: reset }, 800, elastic));

    toggleStatus(status);
  };

  close = () => {
    const {
      menu: { status },
      toggleStatus
    } = this.props;
    const { close, open, reset } = this.paths;
    const { easeout, elastic } = mina;

    this.enableScroll();

    classie.remove(this.el, 'menu--anim');
    setTimeout(() => {
      classie.remove(this.el, 'menu--open');
    }, 250);

    this.pathEl.stop().animate({ path: status ? close : open }, 350, easeout, () => this.pathEl.stop().animate({ path: reset }, 800, elastic));

    toggleStatus(status);
  };

  preventDefault = e => {
    e = e || window.event;
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.returnValue = false;
  };

  preventDefaultForScrollKeys = e => {
    if (this.keys[e.keyCode]) {
      this.preventDefault(e);
      return false;
    }
  };

  disableScroll = () => {
    if (window.addEventListener) {
      // older FF
      window.addEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove = this.preventDefault; // mobile
    document.onkeydown = this.preventDefaultForScrollKeys;
  };

  enableScroll = () => {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
    }
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  };

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ menu, page }) => ({ menu, page });

const matchDispatchToProps = { setStatus: setStatusMenu, toggleStatus };

export default connect(mapStateToProps, matchDispatchToProps)(SVGMenu);
