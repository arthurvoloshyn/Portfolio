import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { URLS } from '../../../../constants/urls';

import { remove, setup } from './lib/shift';

class Neocore extends Component {
  static propTypes = {
    page: PropTypes.shape({
      page: PropTypes.string
    })
  };

  static defaultProps = {
    page: {
      page: ''
    }
  };

  state = {
    info: false
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      page: { page }
    } = nextProps;

    if (page === URLS.neocore) {
      setup();
      $('#fp-nav ul li a span').addClass('neocore-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('neocore-bg');
    }
  }

  toggle = () => {
    this.setState(({ info }) => ({
      info: !info
    }));
  };

  render() {
    const { info } = this.state;

    return (
      <div className="demo-4 neocore">
        <section>
          <div className="frame" />

          <div className="content content--canvas-neocore">
            <div className="neocore-container">
              <div className="header">
                <div className="logo" />

                <div className="description">online casino network</div>
              </div>

              <div className={'tech-container ' + (info ? 'd-none' : 'd-flex')}>
                <div className="row">
                  <div className="techs" />
                </div>
              </div>

              <div className={'info-container tzie-small ' + (info ? 'd-flex' : 'd-none')}>
                Developed GraphQL API for complex enterprise systems. Created a new various
                functionality, also covered with tests. Optimized queries to the MongoDB database,
                added indexes.
              </div>

              <div
                className={'arrow ' + (info ? 'arrow-up' : 'arrow-down')}
                onClick={this.toggle}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Neocore);
