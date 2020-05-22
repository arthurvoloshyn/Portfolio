import React from 'react';
import { URLS } from '../../../constants/urls';
import Linkful from '../sections/Linkful/Linkful';
import CompareIp from '../sections/CompareIp/CompareIp';
import Smsplaza from '../sections/Smsplaza/Smsplaza';
import { Factoringvergelijken } from '../sections/Factoringvergelijken';
import Abirix from '../sections/Abirix/Abirix';
import C2Corner from '../sections/C2Corner';
import Neocore from '../sections/Neocore/Neocore';
import Arcbazar from '../sections/Arcbazar';
import { Yandex } from '../sections/Yandex';
import Houses from '../sections/Houses';
import History24 from '../sections/History24';
import { WellHome } from '../sections/WellHome';

export const sections = {
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
  [URLS.welhome]: <WellHome />
};

export const sectionUrls = Object.keys(sections);
