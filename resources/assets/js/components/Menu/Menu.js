import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { URLS } from '../../constants/urls';

import { skillsList } from './utils/menuList';
import { getStylesList } from './utils/getStylesList';

import { reloadPage, setPage } from '../../actions/page';

import SVGMenu from './lib/SVGMenu';

import './scss/Menu.scss';

const ESC = 27;

const {
  main,
  contacts,
  skills,
  portfolio,
  linkful,
  neocore,
  compareip,
  c2corner,
  smsplaza,
  factoringvergelijken,
  abirix,
  arcbazar,
  yandex,
  houses,
  smokezone,
  history24,
  welhome,
  cherryPick,
  first_slide
} = URLS;

const stylesList = Array.of(
  main,
  contacts,
  skills,
  linkful,
  first_slide,
  portfolio,
  neocore,
  compareip,
  c2corner,
  smsplaza,
  factoringvergelijken,
  abirix,
  arcbazar,
  yandex,
  houses,
  smokezone,
  history24,
  welhome,
  cherryPick
);

const styleClasses = getStylesList('effects', stylesList);

const styleStroke = getStylesList('stroke', stylesList);

class Menu extends Component {
  constructor(props) {
    super(props);

    const {
      page: { page }
    } = this.props;

    this.state = {
      effectStyle: styleClasses[page],
      styleStroke: styleStroke[page]
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  clickHandler = page => {
    const { setPage, reloadPage } = this.props;

    setPage(page);
    reloadPage(true);
  };

  escFunction = ({ keyCode }) => {
    if (keyCode === ESC) {
      this.menuStyleHandler();
    }
  };

  menuStyleHandler = () => {
    const {
      page: { page }
    } = this.props;

    this.setState({
      effectStyle: styleClasses[page],
      styleStroke: styleStroke[page]
    });
  };

  render() {
    const { effectStyle, styleStroke } = this.state;
    const {
      menu: { status }
    } = this.props;

    return (
      <nav id="menu" className="menu">
        <button className="menu__handle" onClick={this.menuStyleHandler}>
          <span>Menu</span>
        </button>
        <div className="inner">
          <ul className={effectStyle}>
            {skillsList.map(({ title, icon, page }) => (
              <li key={title} onClick={() => this.clickHandler(page)}>
                <a>
                  <i className={`icon fas fa-${icon}`} />
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={'morph-shape ' + (status ? styleStroke : '')}
          data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410"
          data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410"
        >
          <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410" />
          </svg>
        </div>

        <SVGMenu />
      </nav>
    );
  }
}

const mapStateToProps = ({ menu, page }) => ({ menu, page });

const matchDispatchToProps = { setPage, reloadPage };

Menu.propTypes = {
  page: PropTypes.shape({
    page: PropTypes.string
  }),
  setPage: PropTypes.func,
  reloadPage: PropTypes.func,
  menu: PropTypes.shape({
    status: PropTypes.bool
  })
};

Menu.defaultProps = {
  page: {
    page: ''
  },
  setPage: () => {},
  reloadPage: () => {},
  menu: {
    status: false
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(Menu);
