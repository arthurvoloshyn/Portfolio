import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getPath from '../../../utils/getPath';
import { updateMenuClasses } from '../../../utils/updateItemClasses';
import { setStatusMenu, toggleStatus } from '../../../state/actions/menu';

/* eslint-disable react/sort-comp */
class SVGMenu extends Component {
  static propTypes = {
    menu: PropTypes.shape({
      status: PropTypes.bool,
    }),
    page: PropTypes.shape({
      statusReload: PropTypes.bool,
    }),
    toggleStatus: PropTypes.func,
    setStatus: PropTypes.func,
  };

  static defaultProps = {
    menu: {
      status: false,
    },
    page: {
      statusReload: false,
    },
    toggleStatus: () => {},
    setStatus: () => {},
  };

  path = getPath();

  scrollKeys = ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'];

  componentDidMount() {
    this.init();
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = ({ key }) => key === 'Escape' && this.toggle();

  componentDidUpdate() {
    const {
      page: { statusReload },
    } = this.props;

    statusReload && setTimeout(() => this.close(), 500);
  }

  init = () => {
    const { setStatus } = this.props;

    this.el = document.getElementById('menu');
    this.trigger = this.el.querySelector('button.menu__handle');
    this.triggerBody = document.getElementById('main_container');
    this.shapeEl = this.el.querySelector('div.morph-shape');

    const svg = this.shapeEl.querySelector('svg');
    const s = window.Snap(svg);

    this.pathEl = s.select('path');
    this.paths = {
      reset: this.pathEl.attr('d'),
      open: this.shapeEl.getAttribute('data-morph-open'),
      close: this.shapeEl.getAttribute('data-morph-close'),
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
    } = this.props;

    status && this.close();
  };

  toggle = () => {
    const {
      menu: { status },
    } = this.props;

    status ? this.removeClass() : this.addClass();

    this.animatePath();
  };

  close = () => {
    this.removeClass();

    this.animatePath();
  };

  removeClass = () => {
    this.enableScroll();

    this.updateMenuStyle();

    this.el.classList.remove('menu--anim');
    setTimeout(() => this.el.classList.remove('menu--open'), 250);
  };

  addClass = () => {
    this.disableScroll();

    this.updateMenuStyle(true);

    this.el.classList.add('menu--anim');
    setTimeout(() => this.el.classList.add('menu--open'), 250);
  };

  updateMenuStyle = withAdding => updateMenuClasses('effect--open', withAdding);

  animatePath = () => {
    const {
      menu: { status },
      toggleStatus,
    } = this.props;
    const { close, open, reset } = this.paths;

    this.pathEl
      .stop()
      .animate({ path: status ? close : open }, 350, window.mina.easeout, () =>
        this.pathEl.stop().animate({ path: reset }, 800, window.mina.elastic),
      );

    toggleStatus(status);
  };

  /* eslint-disable no-param-reassign */
  preventDefault = e => {
    e = e || window.event;

    e.preventDefault && e.preventDefault();

    e.returnValue = false;
  };
  /* eslint-enable */

  preventDefaultForScrollKeys = e => {
    const scrollKeysArr = this.scrollKeys;

    if (scrollKeysArr.includes(e.key)) {
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
    window.removeEventListener &&
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false);

    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  };

  render() {
    return <div />;
  }
}

/* eslint-enable */

const mapStateToProps = ({ menu, page }) => ({ menu, page });

const matchDispatchToProps = { setStatus: setStatusMenu, toggleStatus };

export default connect(mapStateToProps, matchDispatchToProps)(SVGMenu);
