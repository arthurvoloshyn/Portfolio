import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactRotatingText from 'react-rotating-text';
import Constants from '../../constants/constants';
import PropTypes from 'prop-types';
import './scss/Home.scss';

const mapStateToProps = ({ preloader }) => ({ preloader });

class Home extends Component {
    drawReactRotatingText = () => {
      return this.props.preloader.preloader
        ? ''
        : <ReactRotatingText
          typingInterval={100}
          items={['ReactJs', 'VueJs', 'NodeJs']}
        />;
    }

    render () {
      const { vk, git, telegramm } = Constants;

      return (
        <div className='ip-main for_fade'>

          <div className={'Preivew'}>
            <div className='Preivew__neon'>ARTUR VOLOSHYN</div>
            <div className='Preivew__info'>&lt; Software Engineer /&gt;</div>
            <div className='Preivew__info Preivew__label_tech'>

              <p>Working with technologies such as {this.drawReactRotatingText()}</p>

            </div>
          </div>

          <div className='Icons__icon_container'>

            <a href={vk} target='_blank' rel='noopener noreferrer'>
              <div
              />
            </a>
            <a href={git} target='_blank' rel='noopener noreferrer'>
              <div
              />
            </a>
            <a href={telegramm} target='_blank' rel='noopener noreferrer'>
              <div
              />
            </a>

          </div>

        </div>
      );
    }
}

Home.propTypes = {
  preloader: PropTypes.object
};

export default connect(mapStateToProps)(Home);
