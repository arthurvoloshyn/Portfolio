import React from 'react';
import { connect } from 'react-redux';
import ReactRotatingText from 'react-rotating-text';
import PropTypes from 'prop-types';

import Constants from '../../constants/constants';

import './scss/Home.scss';

const Home = ({ preloader: { preloader } }) => {
  const drawReactRotatingText = () =>
    preloader ? (
      ''
    ) : (
      <ReactRotatingText typingInterval={100} items={['ReactJs', 'VueJs', 'NodeJs']} />
    );

  const { linkedin, git, telegramm } = Constants;

  return (
    <div className="ip-main for_fade">
      <div className="Preivew">
        <div className="Preivew__neon">ARTUR VOLOSHYN</div>
        <div className="Preivew__info">&lt; Software Engineer /&gt;</div>
        <div className="Preivew__info Preivew__label_tech">
          <p>Working with technologies such as {drawReactRotatingText()}</p>
        </div>
      </div>

      <div className="Icons__icon_container">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <div />
        </a>
        <a href={git} target="_blank" rel="noopener noreferrer">
          <div />
        </a>
        <a href={telegramm} target="_blank" rel="noopener noreferrer">
          <div />
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = ({ preloader }) => ({ preloader });

Home.propTypes = {
  preloader: PropTypes.shape({
    preloader: PropTypes.bool
  })
};

Home.defaultProps = {
  preloader: {
    preloader: false
  }
};

export default connect(mapStateToProps)(Home);
