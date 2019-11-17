import React, { Component } from 'react';
import { remove, setup } from './lib/shift';
import { URLS } from '../../../../constants/urls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Neocore extends Component {
  constructor (props) {
    super(props);
    this.state = {
      info: false
    };
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.page.page === URLS.neocore) {
      setup();
      $('#fp-nav ul li a span').addClass('neocore-bg');
    } else {
      remove();
      $('#fp-nav ul li a span').removeClass('neocore-bg');
    }
  }

    toggle= () => {
      this.setState({
        info: !this.state.info
      });
    };

    render () {
      return (
        <div className="demo-4 neocore">

          <main>
            <div className="frame">
            </div>

            <div className="content content--canvas-neocore">

              <div className={'neocore-container'}>

                <div className={'header'}>

                  <div className={'logo'}>

                  </div>

                  <div className={'description'}>

                      online casino network

                  </div>

                </div>

                <div className={'tech-container ' + (this.state.info ? 'd-none' : 'd-flex')}>
                  <div className={'row'}>
                    <div className={'techs'}></div>
                  </div>
                </div>

                <div className={'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none')}>

                    Created a new various functionality, also covered with tests.
                    Optimized queries to the MongoDB database, added indexes.

                </div>

                <div className={'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down')} onClick={this.toggle}/>

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

Neocore.propTypes = {
  page: PropTypes.object,
  preloader: PropTypes.object
};

export default connect(mapStateToProps, {})(Neocore);
