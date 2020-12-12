import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import environment from '../../../constants/environment';
import getDisplayName from '../utils/getDisplayName';

const withSectionData = ({
  sectionPage,
  sectionClassName,
  onEnter,
  onLeave,
}) => WrappedComponent => {
  class WithSectionData extends Component {
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

    state = {
      info: false,
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
      const {
        page: { page },
      } = nextProps;

      const menuItems = document.querySelectorAll('#fp-nav ul li a span');
      const isCurrentSection = Array.isArray(sectionPage)
        ? sectionPage.includes(page)
        : page === sectionPage;

      menuItems.forEach(menuItem => {
        if (isCurrentSection) {
          onEnter && onEnter();
          menuItem.classList.add(sectionClassName);
        } else {
          onLeave && onLeave();
          menuItem.classList.remove(sectionClassName);
        }
      });
    }

    toggle = () =>
      this.setState(({ info }) => ({
        info: !info,
      }));

    render() {
      const { info } = this.state;

      return <WrappedComponent info={info} toggle={this.toggle} {...this.props} />;
    }
  }

  !environment.isProd &&
    (WithSectionData.displayName = `WithSectionData(${getDisplayName(WrappedComponent)})`);

  const mapStateToProps = ({ page }) => ({ page });

  return connect(mapStateToProps)(WithSectionData);
};

export default withSectionData;
