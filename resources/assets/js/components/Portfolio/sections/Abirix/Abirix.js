import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { URLS } from '../../../../constants/urls';

import { remove, setup } from './lib/coalesce';

class Abirix extends Component {
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

    if (page === URLS.abirix) {
      setup();
      $('#fp-nav ul li a span').addClass('abirix-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('abirix-bg');
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
      <div className="demo-4 abirix">
        <section>
          <div className="frame" />

          <div className="content content--canvas-abirix">
            <div className="abirix-container">
              <div className="header">
                <h2 className="logo">ABIRIX CRM</h2>

                <div className="description">crm system for sales company</div>
              </div>

              <div className={'tech-container ' + (info ? 'd-none' : 'd-flex')}>
                <div className="row">
                  <div className="techs" />
                </div>
              </div>

              <div className={'info-container tzie-small ' + (info ? 'd-flex' : 'd-none')}>
                I have completed writing the crm system in a team as middle developer, designed and wrote the main system components, developed the database. Used TypeScript as the interface
                development tool and Laravel as the backend API; Complete test coverage; Development with strict flow based on Agile princes; Transfer data from legacy systems.
              </div>

              <div className={'arrow ' + (info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Abirix);
