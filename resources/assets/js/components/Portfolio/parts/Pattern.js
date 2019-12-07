import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pattern extends Component {
  constructor (props) {
    super(props);

    this.clasess = {
      show: 'animated ' + this.props.effectClassIn + ' flex',
      hide: 'animated ' + this.props.effectClassOut + ' none'
    };

    this.state = {
      activeSide: true
    };
  }

  clickHandle = () => {
    this.setState({
      activeSide: !this.state.activeSide
    });
  };

  render () {
    const { classname, technologies, description, figure, url, logo, logoText, logoDescription } = this.props;
    const { activeSide } = this.state;
    const { hide, show } = this.clasess;

    return (
      <div className={'Pattern ' + classname}>
        <div
          className={'technologies-container ' + (activeSide ? hide : show)}>
          {technologies()}
          {description()}
          <a href={url} target={'blank'} className={'rotate_button'}>
            <figure>
              {figure()}
            </figure>
          </a>
          <div className={'arrow hide'} onClick={this.clickHandle}/>
        </div>

        <div className={'logo-container ' + (activeSide ? show : hide)}>

          {logo
            ? <img src={logo} alt={classname}/>
            : <p className={'logoText'}>  {logoText}</p>
          }

          {logoDescription()}

          <div className={'arrow show'} onClick={this.clickHandle}/>

        </div>
      </div>

    );
  }
}

Pattern.propTypes = {
  classname: PropTypes.string,
  logo: PropTypes.string,
  logoText: PropTypes.string,
  url: PropTypes.string,
  effectClassIn: PropTypes.string,
  effectClassOut: PropTypes.string,

  technologies: PropTypes.func,
  description: PropTypes.func,
  figure: PropTypes.func,
  logoDescription: PropTypes.func
};

export default Pattern;
