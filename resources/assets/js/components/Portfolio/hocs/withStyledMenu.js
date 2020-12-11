import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import environment from '../../../constants/environment';
import GetDisplayName from '../../../services/GetDisplayName';

const withStyledMenu = View => {
  class WithStyledMenu extends Component {
    static propTypes = {
      page: PropTypes.shape({
        page: PropTypes.string,
      }),
      sectionPage: PropTypes.string,
      sectionClassName: PropTypes.string,
    };

    static defaultProps = {
      page: {
        page: '',
      },
      sectionPage: '',
      sectionClassName: '',
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
      const { sectionPage, sectionClassName } = this.props;
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
      return <View {...this.props} />;
    }
  }

  !environment.isProd && (WithStyledMenu.displayName = `withStyledMenu(${GetDisplayName(View)})`);

  const mapStateToProps = ({ page }) => ({ page });

  return connect(mapStateToProps)(WithStyledMenu);
};

export default withStyledMenu;
