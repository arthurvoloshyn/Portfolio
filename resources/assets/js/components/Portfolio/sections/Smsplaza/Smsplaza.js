import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import portfolioLinksList from '../../../../constants/portfolioLinksList';
import URLS from '../../../../constants/urls';
import { setup, remove } from './lib/pipeline';

class Smsplaza extends Component {
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

    menuItems.forEach(menuItem => {
      if (page === URLS.smsplaza) {
        setup();
        menuItem.classList.add('smsplaza-bg');
      } else {
        remove();
        menuItem.classList.remove('smsplaza-bg');
      }
    });
  }

  toggle = () =>
    this.setState(({ info }) => ({
      info: !info,
    }));

  render() {
    const { info } = this.state;

    return (
      <div className="demo-5 smsplaza">
        <section>
          <div className="frame" />

          <div className="content content--canvas--smsplaza">
            <div className="smspalza-container">
              <div className="header">
                <a href={portfolioLinksList.smsplaza} rel="noopener noreferrer" target="_blank">
                  <h2 className="logo">SMSPLAZA</h2>
                </a>

                <div className="description">
                  <a href={portfolioLinksList.smsplaza} rel="noopener noreferrer" target="_blank">
                    Receive SMS Online | Verification Service
                  </a>
                </div>
              </div>

              <div className={`tech-container ${info ? 'd-none' : 'd-flex'}`}>
                <div className="row">
                  <div className="techs" />
                </div>
              </div>

              <div className={`info-container tzie-small ${info ? 'd-flex' : 'd-none'}`}>
                I have been doing development of the application with external smsbank equipment,
                design architecture, development and code quality control as well. I used Nuxtjs as
                a frontend tool to build the interface. I also used Laravel as a backend framework
                for building the API, Laravel for building administration panel; VueJs for building
                individual components. I have done complete coverage tests and developed the
                infrastructure.
              </div>

              <div className={`arrow ${info ? 'arrow-up' : 'arrow-down'}`} onClick={this.toggle} />

              <a
                className="mt-50 description"
                href={portfolioLinksList.smsplaza}
                rel="noopener noreferrer"
                target="_blank"
              >
                CHECK IT OUT
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(Smsplaza);
