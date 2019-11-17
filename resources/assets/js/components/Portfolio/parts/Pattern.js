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
      return (
        <div className={'Pattern ' + this.props.classname}>
          <div
            className={'technologies-container ' + (this.state.activeSide ? this.clasess.hide : this.clasess.show)}>
            {this.props.technologies()}
            {this.props.description()}
            <a href={this.props.url} target={'blank'} className={'rotate_button'}>
              <figure>
                {this.props.figure()}
              </figure>
            </a>
            <div className={'arrow hide'} onClick={this.clickHandle}/>
          </div>

          <div className={'logo-container ' + (this.state.activeSide ? this.clasess.show : this.clasess.hide)}>

            {this.props.logo
              ? <img src={this.props.logo} alt={this.props.classname}/>
              : <p className={'logoText'}>  {this.props.logoText}</p>
            }

            {this.props.logoDescription()}

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
