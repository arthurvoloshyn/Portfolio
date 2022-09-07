import React from 'react';

import URLS from '../../../constants/urls';
import Linkful from '../sections/Linkful/Linkful';
import CompareIp from '../sections/CompareIp/CompareIp';
import Smsplaza from '../sections/Smsplaza/Smsplaza';
import FactoringVergelijken from '../sections/FactoringVergelijken';
import Abirix from '../sections/Abirix/Abirix';
import C2Corner from '../sections/C2Corner';
import Neocore from '../sections/Neocore/Neocore';
import Arcbazar from '../sections/Arcbazar';
import Google from '../sections/Google';
import Houses from '../sections/Houses';
import History24 from '../sections/History24';
import WellHome from '../sections/WellHome';
import SmokeZone from '../sections/SmokeZone';
import CherryPick from '../sections/CherryPick';

const sections = {
  [URLS.linkful]: <Linkful />,
  [URLS.compareIp]: <CompareIp />,
  [URLS.smsplaza]: <Smsplaza />,
  [URLS.factoringVergelijken]: <FactoringVergelijken />,
  [URLS.abirix]: <Abirix />,
  [URLS.c2corner]: <C2Corner />,
  [URLS.neocore]: <Neocore />,
  [URLS.arcbazar]: <Arcbazar />,
  [URLS.google]: <Google />,
  [URLS.houses]: <Houses />,
  [URLS.history24]: <History24 />,
  [URLS.welhome]: <WellHome />,
  [URLS.smokeZone]: <SmokeZone />,
  [URLS.cherryPick]: <CherryPick />,
};

export default sections;
