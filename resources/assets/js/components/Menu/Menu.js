import React, { Component } from 'react';
import SVGMenu from './lib/SVGMenu';
import { URLS } from './../../constants/urls';
import { connect } from 'react-redux';
import { reloadPage, setPage } from '../../actions/page';
import './scss/Menu.scss';
import PropTypes from 'prop-types';

const ESC = 27;

let styleClasses = {};

const { main, contacts, skills, portfolio, linkful, neocore, compareip, c2corner, smsplaza, factoringvergelijken, abirix, arcbazar, yandex, houses, smokezone, history24, welhome, cherryPick, first_slide } = URLS;

styleClasses[main] = 'effects-normal';
styleClasses[contacts] = 'effects-normal';
styleClasses[skills] = 'effects-normal';

styleClasses[portfolio] = styleClasses[first_slide] = styleClasses[linkful] = 'effects-linkful';

styleClasses[neocore] = 'effects-neocore';
styleClasses[compareip] = 'effects-compareIp';
styleClasses[c2corner] = 'effects-c2corner';
styleClasses[smsplaza] = 'effects-smsplaza';
styleClasses[factoringvergelijken] = 'effects-factoringvergelijken';
styleClasses[abirix] = 'effects-abirix';
styleClasses[arcbazar] = 'effects-arcbazar';
styleClasses[yandex] = 'effects-yandex';
styleClasses[houses] = 'effects-houses';
styleClasses[smokezone] = 'effects-smoke-zone';
styleClasses[history24] = 'effects-history24';
styleClasses[welhome] = 'effects-welhome';

styleClasses[cherryPick] = 'effects-cherry';

const styleStroke = {};

styleStroke[main] = 'stroke-normal';
styleStroke[contacts] = 'stroke-normal';
styleStroke[skills] = 'stroke-normal';

styleStroke[first_slide] = styleStroke[portfolio] = styleStroke[linkful] = 'stroke-linkful';

styleStroke[neocore] = 'stroke-neocore';
styleStroke[compareip] = 'stroke-compareIp';
styleStroke[c2corner] = 'stroke-c2corner';
styleStroke[smsplaza] = 'stroke-smsplaza';
styleStroke[factoringvergelijken] = 'stroke-factoringvergelijken';
styleStroke[abirix] = 'stroke-abirix';
styleStroke[arcbazar] = 'stroke-arcbazar';
styleStroke[yandex] = 'stroke-yandex';
styleStroke[houses] = 'stroke-houses';
styleStroke[smokezone] = 'stroke-smoke-zone';
styleStroke[history24] = 'stroke-history24';
styleStroke[welhome] = 'stroke-welhome';

styleStroke[cherryPick] = 'stroke-cherry';

const mapStateToProps = ({ menu, page, preloader }) => ({
  menu,
  page,
  preloader
});

const matchDispatchToProps = { setPage, reloadPage };

class Menu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      effectStyle: styleClasses[this.props.page.page],
      styleStroke: styleStroke[this.props.page.page]
    };
  }

  componentDidMount () {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escFunction, false);
  }

    clickHandler = page => {
      const { setPage, reloadPage } = this.props;

      setPage(page);
      reloadPage(true);
    };

    escFunction = ({ keyCode }) => {
      if (keyCode === ESC) {
        this.menuStyleHandler();
      }
    };

    menuStyleHandler = () => {
      const { page: { page } } = this.props;

      this.setState({
        effectStyle: styleClasses[page],
        styleStroke: styleStroke[page]
      });
    };

    render () {
      const { effectStyle, styleStroke } = this.state;

      return (
        <nav id='menu' className='menu'>
          <button className='menu__handle' onClick={this.menuStyleHandler}><span>Menu</span>
          </button>
          <div className='inner'>
            <ul className={effectStyle}>

              <li onClick={() => this.clickHandler()}>
                <a>
                  <i className={'icon fas fa-home'}/>
                  <span>Home</span>
                </a>
              </li>

              <li onClick={() => this.clickHandler(portfolio)}>
                <a>
                  <i className={'icon fas fa-trophy'}/>
                  <span>Portfolio</span>
                </a>
              </li>

              <li onClick={() => this.clickHandler(skills)}>
                <a>
                  <i className={'icon fas fa-graduation-cap'}/>
                  <span>Skills</span>
                </a>
              </li>

              <li onClick={() => this.clickHandler(contacts)}>
                <a>
                  <i className={'icon fas fa-envelope'}/>
                  <span>Contact me</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={'morph-shape ' + (this.props.menu.status ? styleStroke : '')}
            data-morph-open='M300-10c0,0,295,164,295,410c0,232-295,410-295,410'
            data-morph-close='M300-10C300-10,5,154,5,400c0,232,295,410,295,410'>
            <svg width='100%' height='100%' viewBox='0 0 600 800' preserveAspectRatio='none'>
              <path fill='none' d='M300-10c0,0,0,164,0,410c0,232,0,410,0,410'/>
            </svg>
          </div>

          <SVGMenu/>

        </nav>
      );
    }
}

Menu.propTypes = {
  page: PropTypes.object,
  setPage: PropTypes.func,
  reloadPage: PropTypes.func,
  menu: PropTypes.object
};

export default connect(mapStateToProps, matchDispatchToProps)(Menu);
