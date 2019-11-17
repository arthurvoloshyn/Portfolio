import React, {Component} from 'react';
import SVGMenu from './lib/SVGMenu';
import {URLS} from './../../constants/urls';
import {connect} from 'react-redux';
import {reloadPage, setPage} from '../../actions/page';
import {bindActionCreators} from 'redux';
import './scss/Menu.scss';
import PropTypes from 'prop-types';

const ESC = 27;

let styleClasses = {};

styleClasses[URLS.main] = 'effects-normal';
styleClasses[URLS.contacts] = 'effects-normal';
styleClasses[URLS.skills] = 'effects-normal';

styleClasses[URLS.portfolio] = styleClasses[URLS.first_slide] = styleClasses[URLS.linkful] = 'effects-linkful';

styleClasses[URLS.neocore] = 'effects-neocore';
styleClasses[URLS.compareip] = 'effects-compareIp';
styleClasses[URLS.c2corner] = 'effects-c2corner';
styleClasses[URLS.smsplaza] = 'effects-smsplaza';
styleClasses[URLS.factoringvergelijken] = 'effects-factoringvergelijken';
styleClasses[URLS.abirix] = 'effects-abirix';
styleClasses[URLS.arcbazar] = 'effects-arcbazar';
styleClasses[URLS.yandex] = 'effects-yandex';
styleClasses[URLS.houses] = 'effects-houses';
styleClasses[URLS.smokezone] = 'effects-smoke-zone';
styleClasses[URLS.history24] = 'effects-history24';
styleClasses[URLS.welhome] = 'effects-welhome';

styleClasses[URLS.cherryPick] = 'effects-cherry';

const styleStroke = {};

styleStroke[URLS.main] = 'stroke-normal';
styleStroke[URLS.contacts] = 'stroke-normal';
styleStroke[URLS.skills] = 'stroke-normal';

styleStroke[URLS.first_slide] = styleStroke[URLS.portfolio] = styleStroke[URLS.linkful] = 'stroke-linkful';

styleStroke[URLS.neocore] = 'stroke-neocore';
styleStroke[URLS.compareip] = 'stroke-compareIp';
styleStroke[URLS.c2corner] = 'stroke-c2corner';
styleStroke[URLS.smsplaza] = 'stroke-smsplaza';
styleStroke[URLS.factoringvergelijken] = 'stroke-factoringvergelijken';
styleStroke[URLS.abirix] = 'stroke-abirix';
styleStroke[URLS.arcbazar] = 'stroke-arcbazar';
styleStroke[URLS.yandex] = 'stroke-yandex';
styleStroke[URLS.houses] = 'stroke-houses';
styleStroke[URLS.smokezone] = 'stroke-smoke-zone';
styleStroke[URLS.history24] = 'stroke-history24';
styleStroke[URLS.welhome] = 'stroke-welhome';

styleStroke[URLS.cherryPick] = 'stroke-cherry';

function mapStateToProps(state) {
    return {
        menu: state.menu,
        page: state.page,
        preloader: state.preloader
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setPage: setPage, reloadPage: reloadPage}, dispatch);
}

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            effectStyle: styleClasses[this.props.page.page],
            styleStroke: styleStroke[this.props.page.page]
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.escFunction, false);
    }

    clickHandler = page => {
        this.props.setPage(page);
        this.props.reloadPage(true);
    };

    escFunction = event => {
        if (event.keyCode === ESC) {
            this.menuStyleHandler();
        }
    };

    menuStyleHandler = () => {
        this.setState({
            effectStyle: styleClasses[this.props.page.page],
            styleStroke: styleStroke[this.props.page.page]
        });
    };

    render() {
        return (
            <nav id="menu" className="menu">
                <button className="menu__handle" onClick={this.menuStyleHandler}><span>Menu</span>
                </button>
                <div className="inner">
                    <ul className={this.state.effectStyle}>

                        <li onClick={() => this.clickHandler()}>
                            <a>
                                <i className={'icon fas fa-home'}/>
                                <span>Home</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.portfolio)}>
                            <a>
                                <i className={'icon fas fa-trophy'}/>
                                <span>Portfolio</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.skills)}>
                            <a>
                                <i className={'icon fas fa-graduation-cap'}/>
                                <span>Skills</span>
                            </a>
                        </li>

                        <li onClick={() => this.clickHandler(URLS.contacts)}>
                            <a>
                                <i className={'icon fas fa-envelope'}/>
                                <span>Contact me</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={'morph-shape ' + (this.props.menu.status ? this.state.styleStroke : '')}
                     data-morph-open="M300-10c0,0,295,164,295,410c0,232-295,410-295,410"
                     data-morph-close="M300-10C300-10,5,154,5,400c0,232,295,410,295,410">
                    <svg width="100%" height="100%" viewBox="0 0 600 800" preserveAspectRatio="none">
                        <path fill="none" d="M300-10c0,0,0,164,0,410c0,232,0,410,0,410"/>
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
