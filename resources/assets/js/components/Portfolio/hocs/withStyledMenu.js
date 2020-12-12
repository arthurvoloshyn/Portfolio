import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import environment from '../../../constants/environment';
import GetDisplayName from '../../../services/GetDisplayName';

const withStyledMenu = ({ sectionPage, sectionClassName }) => WrappedComponent => {
  class WithStyledMenu extends Component {
    static propTypes = {
      page: PropTypes.shape({
        page: PropTypes.string,
      }),
    };

    static defaultProps = {
      page: {
        page: '',
      },
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
      const {
        page: { page },
      } = nextProps;

      const menuItems = document.querySelectorAll('#fp-nav ul li a span');

      menuItems.forEach(menuItem =>
        page === sectionPage
          ? menuItem.classList.add(sectionClassName)
          : menuItem.classList.remove(sectionClassName),
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  !environment.isProd &&
    (WithStyledMenu.displayName = `withStyledMenu(${GetDisplayName(WrappedComponent)})`);

  const mapStateToProps = ({ page }) => ({ page });

  return connect(mapStateToProps)(WithStyledMenu);
};

export default withStyledMenu;
