import React, { Component } from 'react';
import { setup, remove } from './lib/pipeline';
import Constants from '../../../../constants/constants';

import { URLS } from '../../../../constants/urls';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

class Smsplaza extends Component {
  constructor (props) {
    super(props);
    this.state = {
      info: false
    };
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.page.page === URLS.smsplaza) {
      setup();
      $('#fp-nav ul li a span').addClass('smsplaza-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('smsplaza-bg');
    }
  }

    toggle = () => {
      this.setState({
        info: !this.state.info
      });
    };

    render () {
      return (
        <div className="demo-5 smsplaza">

          <main>
            <div className="frame">
            </div>

            <div className="content content--canvas--smsplaza">

              <div className={'smspalza-container'}>

                <div className={'header'}>

                  <a
                    target={'_blank'}
                    href={Constants.smsplaza}
                  >
                    <div className={'logo'}>
                                        SMSPLAZA
                    </div>
                  </a>

                  <div className={'description'}>

                    <a
                      target={'_blank'}
                      href={Constants.smsplaza}
                    >
                                        Receive SMS Online | Verification Service
                    </a>
                  </div>

                </div>

                <div className={'tech-container ' + (this.state.info ? 'd-none' : 'd-flex')}>
                  <div className={'row'}>
                    <div className={'techs'}></div>
                  </div>
                </div>

                <div className={'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none')}>

                                I have been doing development of the application with external smsbank equipment,
                                design architecture, development and code quality control as well.
                                I used Nuxtjs as a frontend tool to build the interface.
                                I also used Laravel as a backend framework for building the API,
                                Laravel for building administration panel;
                                VueJs for building individual components.
                                I have done complete coverage tests and developed the infrastructure.

                </div>

                <div className={'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle}></div>

                <a
                  className={'mt-50 description'}
                  target={'_blank'}
                  href={Constants.smsplaza}
                >
                                CHECK IT OUT
                </a>

              </div>
            </div>

          </main>

        </div>
      );
    }
}

function mapStateToProps (state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Smsplaza.propTypes = {
  page: PropTypes.object
};

export default connect(mapStateToProps, {})(Smsplaza);
