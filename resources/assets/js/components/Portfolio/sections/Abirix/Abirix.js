import React, { Component } from 'react';
import { remove, setup } from './lib/coalesce';
import { URLS } from '../../../../constants/urls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Abirix extends Component {
  state = {
    info: false
  };

  UNSAFE_componentWillReceiveProps ({ page: { page } }) {
    if (page === URLS.abirix) {
      setup();
      $('#fp-nav ul li a span').addClass('abirix-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('abirix-bg');
    }
  }

  toggle = () => {
    this.setState({
      info: !this.state.info
    });
  };

  render () {
    const { info } = this.state;

    return (
      <div className='demo-4 abirix'>

        <main>
          <div className='frame'>
          </div>

          <div className='content content--canvas-abirix'>

            <div className={'abirix-container'}>

              <div className={'header'}>

                <div className={'logo'}>
                                  ABIRIX CRM
                </div>

                <div className={'description'}>

                                  crm system for sales company

                </div>

              </div>

              <div className={'tech-container ' + (info ? 'd-none' : 'd-flex')}>
                <div className={'row'}>
                  <div className={'techs'}></div>
                </div>
              </div>

              <div className={'info-container tzie-small ' + (info ? 'd-flex' : 'd-none')}>

                              I have completed writing the crm system in a team,
                              designed and wrote the main system components, developed the database.
                              Used TypeScript as the interface development tool and Laravel as the backend API;
                              Complete test coverage;
                              Development with strict flow based on Agile princes;
                              Transfer data from legacy systems.

              </div>

              <div className={'arrow ' + (info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle}/>

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

Abirix.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(Abirix);
