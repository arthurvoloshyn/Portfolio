import React, { Component } from 'react';
import { remove, setup } from './lib/swirl';
import Constants from '../../../../constants/constants';

import { URLS } from '../../../../constants/urls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const { portfolio, first_slide, linkful } = URLS;

class Linkful extends Component {
  state = {
    info: false
  };

  UNSAFE_componentWillReceiveProps ({ page: { page } }) {
    if (page === portfolio || page === first_slide || page === linkful) {
      setup();
      $('#fp-nav ul li a span').addClass('linkful-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('linkful-bg');
    }
  }

  toggle = () => {
    this.setState({
      info: !this.state.info
    });
  }

  render () {
    const { info } = this.state;
    const { linksfulUrl } = Constants;

    return (
      <div className='demo-2 linkful'>

        <main>
          <div className='frame'>
          </div>

          <div className='content content--canvas-linkful'>

            <div className={'linkful-container'}>

              <div className={'header'}>

                <a
                  target={'_blank'}
                  href={linksfulUrl}
                >
                  <div className={'logo'}></div>
                </a>

                <div className={'description'}>

                  <a
                    target={'_blank'}
                    href={linksfulUrl}
                  >
                                      LINKFUL - A STUNNING WAY TO CREATE A&nbsp;PERFECT ABOUT&nbsp;ME PAGE!
                  </a>
                </div>

              </div>

              <div className={'tech-container ' + (info ? 'd-none' : 'd-flex')}>
                <div className={'row'}>
                  <div className={'techs'}></div>
                </div>
              </div>

              <div className={'info-container tzie-small ' + (info ? 'd-flex' : 'd-none')}>

                              I have created, designed and developed this project.
                              I built the application using the most powerful and popular technologies.
                              The frontend of the user dashboard was built using React and Redux,
                              and also used Saga to manage the asynchronous actions.
                              The administration panel is built with Laravel,
                              and separate components with Vue were also developed.
                              The backend is based on Laravel,
                              the Mysql database for storing statistics.
                              The system is fully tested.

              </div>

              <div className={'arrow ' + (info ? 'arrow-up' : 'arrow-down')}
                onClick={this.toggle}></div>

              <a
                className={'mt-50 description'}
                target={'_blank'}
                href={linksfulUrl}
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

const mapStateToProps = ({ page, preloader }) => ({
  page,
  preloader
});

Linkful.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(Linkful);
