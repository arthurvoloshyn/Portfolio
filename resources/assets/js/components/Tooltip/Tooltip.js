import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './scss/Tooltip.scss';

class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string,
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    style: PropTypes.objectOf(PropTypes.string),
    wrapperClassName: PropTypes.string,
  };

  static defaultProps = {
    content: 'Tooltip content',
    style: {},
    position: 'top',
    wrapperClassName: '',
  };

  state = {
    visible: false,
  };

  show = () => this.setVisibility(true);

  hide = () => this.setVisibility(false);

  setVisibility = visible => this.setState({ visible });

  render() {
    const { visible } = this.state;
    const { children, content, style, position, wrapperClassName } = this.props;

    const classes = classNames('tooltip', position);
    const wrapperClasses = classNames('tooltip-wrapper', wrapperClassName);

    return (
      <span className={wrapperClasses}>
        <span className={classes} style={{ ...style, opacity: +visible }}>
          {content}
        </span>
        <span className="target-element" onMouseEnter={this.show} onMouseLeave={this.hide}>
          {children}
        </span>
      </span>
    );
  }
}

export default Tooltip;
