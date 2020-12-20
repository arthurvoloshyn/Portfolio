import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ENV from '../../../constants/env';
import getDisplayName from '../utils/getDisplayName';
import updateMenuClasses from '../utils/updateMenuClasses';

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

      const isCurrentSection = Array.isArray(sectionPage)
        ? sectionPage.includes(page)
        : page === sectionPage;

      if (isCurrentSection) {
        onEnter && onEnter();
        updateMenuClasses(sectionClassName, true);
      } else {
        onLeave && onLeave();
        updateMenuClasses(sectionClassName);
      }
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

  !ENV.isProd &&
    (WithSectionData.displayName = `WithSectionData(${getDisplayName(WrappedComponent)})`);

  const mapStateToProps = ({ page }) => ({ page });

  return connect(mapStateToProps)(WithSectionData);
};

export default withSectionData;
