import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { reloadPage, setPage } from '../../actions/page';
import menuList from './constants/menuList';
import stylesList from './constants/stylesList';
import getStylesList from './utils/getStylesList';
import SVGMenu from './common/SVGMenu';

import './scss/Menu.scss';

class Menu extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string,
    }),
    setPage: PropTypes.func,
    reloadPage: PropTypes.func,
    menu: PropTypes.shape({
      status: PropTypes.bool,
    }),
  };

  static defaultProps = {
    page: {
      page: '',
    },
    setPage: () => {},
    reloadPage: () => {},
    menu: {
      status: false,
    },
  };

  constructor(props) {
    super(props);

    stylesList.forEach(({ prop, value }) => (this[prop] = getStylesList(value)));
  }

  clickHandler = page => {
    const { setPage, reloadPage } = this.props;

    setPage(page);
    reloadPage(true);
  };

  render() {
    const {
      menu: { status },
      page: { page },
    } = this.props;

    const effectStyle = this.styleClasses[page];
    const styleStroke = this.styleStroke[page];
    const styleMenu = this.styleMenu[page];

    const morphShapeClasses = classNames('morph-shape', { [styleStroke]: status });

    return (
      <nav className="menu" data-section={styleMenu} id="menu">
        <button className="menu__handle">
          <span>Menu</span>
        </button>
        <div className="inner">
          <ul className={effectStyle}>
            {menuList.map(({ title, icon, page }) => {
              const menuHandler = () => this.clickHandler(page);

              return (
                <li key={title}>
                  <a onClick={menuHandler}>
                    <i className={`icon fas fa-${icon}`} />
                    <span>{title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={morphShapeClasses}
          data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410"
          data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410"
        >
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 600 800" width="100%">
            <path d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410" fill="none" />
          </svg>
        </div>

        <SVGMenu />
      </nav>
    );
  }
}

const mapStateToProps = ({ menu, page }) => ({ menu, page });

const matchDispatchToProps = { setPage, reloadPage };

export default connect(mapStateToProps, matchDispatchToProps)(Menu);
