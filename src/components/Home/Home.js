import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRotatingText from 'react-rotating-text';

import socialNetworkList from './constants/socialNetworkList';

import './scss/Home.scss';

const Home = ({ preloader: { preloader } }) => {
  const drawReactRotatingText = () =>
    preloader ? (
      ''
    ) : (
      <ReactRotatingText
        items={['JavaScript', 'TypeScript', 'React', 'React Native']}
        typingInterval={100}
      />
    );

  return (
    <div className="ip-main for_fade">
      <div className="Preview">
        <div className="Preview__neon">ARTUR VOLOSHYN</div>
        <div className="Preview__info">&lt; Software Engineer /&gt;</div>
        <div className="Preview__info Preview__label_tech">
          <p>Working with technologies such as {drawReactRotatingText()}</p>
        </div>
      </div>

      <div className="Icons__icon_container">
        {socialNetworkList.map(({ id, link, target }) => (
          <a key={id} className={id} href={link} rel="noopener noreferrer" target={target}>
            <div />
          </a>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ preloader }) => ({ preloader });

Home.propTypes = {
  preloader: PropTypes.shape({
    preloader: PropTypes.bool,
  }),
};

Home.defaultProps = {
  preloader: {
    preloader: false,
  },
};

export default connect(mapStateToProps)(Home);
