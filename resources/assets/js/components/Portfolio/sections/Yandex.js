import React from 'react';

import IMGS from '../../../constants/imgs';
import Pattern from '../parts/Pattern';

const Yandex = () => (
  <Pattern
    classname="Yandex"
    description={() => (
      <div className="description">
        <p>
          <b>I</b> have build the game. This is a SPA on jQuery and <b>W</b>
          ebpack
          <br />
          with Ada
          <b>p</b>
          tive <b>I</b>
          nterface
          <br />
          and <b>o</b>
          ptimization of perform
          <b>a</b>
          nce.
        </p>
      </div>
    )}
    effectClassIn="bounceIn"
    effectClassOut="bounceOut"
    logo={IMGS.yandex}
    logoDescription={() => (
      <p>
        <b>S</b>
        imple and relaxing game
        <br />
        In honor of <b>F</b>
        ebruary 23
        <br />
        For <b>Y</b>
        andex maps
      </p>
    )}
  />
);

export default Yandex;
