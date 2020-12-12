import React from 'react';

import URLS from './urls';
import Linkful from '../components/Portfolio/sections/Linkful/Linkful';
import CompareIp from '../components/Portfolio/sections/CompareIp/CompareIp';
import Smsplaza from '../components/Portfolio/sections/Smsplaza/Smsplaza';
import Factoringvergelijken from '../components/Portfolio/sections/Factoringvergelijken';
import Abirix from '../components/Portfolio/sections/Abirix/Abirix';
import C2Corner from '../components/Portfolio/sections/C2Corner';
import Neocore from '../components/Portfolio/sections/Neocore/Neocore';
import Arcbazar from '../components/Portfolio/sections/Arcbazar';
import Yandex from '../components/Portfolio/sections/Yandex';
import Houses from '../components/Portfolio/sections/Houses';
import History24 from '../components/Portfolio/sections/History24';
import WellHome from '../components/Portfolio/sections/WellHome';

const sections = {
  [URLS.linkful]: <Linkful />,
  [URLS.compareip]: <CompareIp />,
  [URLS.smsplaza]: <Smsplaza />,
  [URLS.factoringvergelijken]: <Factoringvergelijken />,
  [URLS.abirix]: <Abirix />,
  [URLS.c2corner]: <C2Corner />,
  [URLS.neocore]: <Neocore />,
  [URLS.arcbazar]: <Arcbazar />,
  [URLS.yandex]: <Yandex />,
  [URLS.houses]: <Houses />,
  [URLS.history24]: <History24 />,
  [URLS.welhome]: <WellHome />,
};

export default sections;
