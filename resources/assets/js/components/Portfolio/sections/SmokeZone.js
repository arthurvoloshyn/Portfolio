import React from 'react';

import IMGS from '../../../constants/imgs';
import Pattern from '../parts/Pattern';

const technologiesList = [
  [{ id: 'apache' }, { id: 'javascript' }, { id: 'jq' }],
  [{ id: 'mvc' }, { id: 'mysql' }, { id: 'php' }],
];

const SmokeZone = () => (
  <div className="smoke-zone-bg_outer">
    <div className="smoke-zone-bg_layer">
      <img alt="Smoke Zone" src={IMGS.smokeZone} />
    </div>

    <Pattern
      classname="Smoke_Zone"
      description={() => (
        <div className="description">
          <p>
            I have developed the online store, based on the unique MVC core;
            <span>
              promotion and support; development of a flexible administration panel with content
              management features
            </span>
          </p>
        </div>
      )}
      effectClassIn="flipInX"
      effectClassOut="flipOutX"
      logo={IMGS.hookah}
      logoDescription={() => (
        <p className="header-container">
          <span className="header">SMOKE-ZONE</span>
          <span className="paragraph">online shop selling tobacco for hookah</span>
        </p>
      )}
      technologies={() => (
        <div className="technologies">
          {technologiesList.map((technologiesRow, i) => (
            <div key={`technologiesRow_${i}`}>
              {technologiesRow.map(({ id }) => (
                <div key={id} />
              ))}
            </div>
          ))}
        </div>
      )}
    />
  </div>
);

export default SmokeZone;
