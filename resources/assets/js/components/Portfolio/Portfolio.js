import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';
import { URLS } from './../../constants/urls';
import './scss/Portfolio.scss';
import { setPage } from '../../actions/page';
import { Factoringvergelijken } from './sections/Factoringvergelijken';
import Linkful from './sections/Linkful/Linkful';
import CompareIp from './sections/CompareIp/CompareIp';
import Smsplaza from './sections/Smsplaza/Smsplaza';
import C2Corner from './sections/C2Corner';
import Abirix from './sections/Abirix/Abirix';
import Arcbazar from './sections/Arcbazar';
import { Yandex } from './sections/Yandex';
import Houses from './sections/Houses';
import History24 from './sections/History24';
import { WellHome } from './sections/WellHome';
import PropTypes from 'prop-types';
import Neocore from './sections/Neocore/Neocore';

const sections = {};

const { linkful, compareip, smsplaza, factoringvergelijken, abirix, c2corner, neocore, arcbazar, yandex, houses, history24, welhome } = URLS;

sections[linkful] = <Linkful/>;
sections[compareip] = <CompareIp/>;
sections[smsplaza] = <Smsplaza/>;
sections[factoringvergelijken] = <Factoringvergelijken/>;
sections[abirix] = <Abirix/>;
sections[c2corner] = <C2Corner/>;
sections[neocore] = <Neocore/>;
sections[arcbazar] = <Arcbazar/>;
sections[yandex] = <Yandex/>;
sections[houses] = <Houses/>;
sections[history24] = <History24/>;
sections[welhome] = <WellHome/>;

const sectionUrls = Object.keys(sections);

class Portfolio extends Component {
  setSlide = page => {
    this.props.setPage(page);
  };

  render () {
    return (
      <div>
        <ReactFullpage
          navigation={true}
          keyboardScrolling={true}
          anchors={sectionUrls}
          onLeave={(origin, { anchor }, direction) => {
            this.setSlide(anchor);
          }}

          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              {
                Object.values(sections).map((section, key) => (
                  <div key={key} className='section'>{section}</div>
                ))
              }
            </ReactFullpage.Wrapper>
          )}
        />

      </div>

    );
  }
}

const mapStateToProps = ({ page, preloader }) => ({
  page,
  preloader
});

const matchDispatchToProps = { setPage };

Portfolio.propTypes = {
  setPage: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(Portfolio);
