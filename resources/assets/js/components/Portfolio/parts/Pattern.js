import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pattern extends Component {
  constructor(props) {
    super(props);

    const { effectClassIn, effectClassOut } = this.props;

    this.clasess = {
      show: `animated ${effectClassIn} flex`,
      hide: `animated ${effectClassOut} none`
    };

    this.state = {
      activeSide: true
    };
  }

  clickHandle = () => {
    this.setState(({ activeSide }) => ({
      activeSide: !activeSide
    }));
  };

  render() {
    const { classname, technologies, description, figure, url, logo, logoText, logoDescription } = this.props;
    const { activeSide } = this.state;
    const { hide, show } = this.clasess;

    return (
      <div className={`Pattern ${classname}`}>
        <div className={'technologies-container ' + (activeSide ? hide : show)}>
          {technologies()}
          {description()}
          <a href={url} target="_blank" rel="noopener noreferrer" className="rotate_button">
            <figure>{figure()}</figure>
          </a>
          <div className="arrow hide" onClick={this.clickHandle} />
        </div>

        <div className={'logo-container ' + (activeSide ? show : hide)}>
          {logo ? <img src={logo} alt={classname} /> : <p className="logoText"> {logoText}</p>}

          {logoDescription()}

          <div className="arrow show" onClick={this.clickHandle} />
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

Pattern.defaultProps = {
  classname: '',
  logo: '',
  logoText: '',
  url: '#',
  effectClassIn: 'zoomIn',
  effectClassOut: 'zoomOut',

  technologies: () => {},
  description: () => {},
  figure: () => {},
  logoDescription: () => {}
};

export default Pattern;
