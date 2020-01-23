import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ReactFullpage from '@fullpage/react-fullpage';

import { URLS } from '../../constants/urls';
import Constants from '../../constants/constants';

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
import Neocore from './sections/Neocore/Neocore';

import './scss/Portfolio.scss';

const { linkful, compareip, smsplaza, factoringvergelijken, abirix, c2corner, neocore, arcbazar, yandex, houses, history24, welhome } = URLS;
const { fullPageLicenseKey } = Constants;

const sections = {
  [linkful]: <Linkful />,
  [compareip]: <CompareIp />,
  [smsplaza]: <Smsplaza />,
  [factoringvergelijken]: <Factoringvergelijken />,
  [abirix]: <Abirix />,
  [c2corner]: <C2Corner />,
  [neocore]: <Neocore />,
  [arcbazar]: <Arcbazar />,
  [yandex]: <Yandex />,
  [houses]: <Houses />,
  [history24]: <History24 />,
  [welhome]: <WellHome />
};

const sectionUrls = Object.keys(sections);

const Portfolio = ({ setPage }) => (
  <div>
    <ReactFullpage
      navigation={true}
      keyboardScrolling={true}
      licenseKey={fullPageLicenseKey}
      anchors={sectionUrls}
      onLeave={(origin, { anchor }, direction) => {
        setPage(anchor);
      }}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {Object.values(sections).map((section, key) => (
            <div key={key} className="section">
              {section}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  </div>
);

const matchDispatchToProps = { setPage };

Portfolio.propTypes = {
  setPage: PropTypes.func
};

Portfolio.defaultProps = {
  setPage: () => {}
};

export default connect(null, matchDispatchToProps)(Portfolio);
