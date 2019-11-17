import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';
import {URLS} from './../../constants/urls';
import './scss/Portfolio.scss';
import {bindActionCreators} from 'redux';
import {setPage} from '../../actions/page';
import {Factoringvergelijken} from './sections/Factoringvergelijken';
import Linkful from './sections/Linkful/Linkful';
import CompareIp from './sections/CompareIp/CompareIp';
import Smsplaza from './sections/Smsplaza/Smsplaza';
import C2Corner from './sections/C2Corner';
import Abirix from './sections/Abirix/Abirix';
import Arcbazar from './sections/Arcbazar';
import {Yandex} from './sections/Yandex';
import Houses from './sections/Houses';
import History24 from './sections/History24';
import {WellHome} from './sections/WellHome';
import PropTypes from 'prop-types';
import Neocore from "./sections/Neocore/Neocore";

const sections = {};

sections[URLS.linkful] = <Linkful/>;
sections[URLS.compareip] = <CompareIp/>;
sections[URLS.smsplaza] = <Smsplaza/>;
sections[URLS.factoringvergelijken] = <Factoringvergelijken/>;
sections[URLS.abirix] = <Abirix/>;
sections[URLS.c2corner] = <C2Corner/>;
sections[URLS.neocore] = <Neocore/>;
sections[URLS.arcbazar] = <Arcbazar/>;
sections[URLS.yandex] = <Yandex/>;
sections[URLS.houses] = <Houses/>;
sections[URLS.history24] = <History24/>;
sections[URLS.welhome] = <WellHome/>;

const sectionUrls = Object.keys(sections);

class Portfolio extends Component {
    setSlide = page => {
        this.props.setPage(page);
    };

    render() {
        return (
            <div>
                <ReactFullpage
                    navigation={true}
                    keyboardScrolling={true}
                    anchors={sectionUrls}
                    onLeave={(origin, destination, direction) => {
                        this.setSlide(destination.anchor);
                    }}

                    render={({state, fullpageApi}) => {
                        return (
                            <ReactFullpage.Wrapper>
                                {
                                    Object.values(sections).map((section, key) => <div key={key}
                                                                                       className="section">{section}</div>)
                                }
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />

            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        preloader: state.preloader
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setPage: setPage}, dispatch);
}

Portfolio.propTypes = {
    setPage: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
