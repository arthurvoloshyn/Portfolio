import React from 'react';
import Constants from '../../../constants/constants';
import Pattern from './../parts/Pattern';

const style = {
  outter: {
    background: 'black',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    position: 'absolute',
    height: '100%'
  }
};

export const Smoke_Zone = () => {
  return (
    <div style={style.outter}>
      <div style={style.bgLayerStyle}>
        <img src={'../imgs/2.png'}></img>
      </div>

      <Pattern

        classname="Smoke_Zone"
        logo='../imgs/hookah3.svg'
        url={Constants.smokeZone}
        effectClassIn='flipInX'
        effectClassOut='flipOutX'
        technologies={_ => (

          <div className={'technologies'}>
            <div>
              <div/>
              <div/>
              <div/>
            </div>
            <div>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
        )}

        description={() => (

          <div className={'description'}>
            <p>
                            I have developed the online store, based on the unique MVC
                            core;
              <span>
                                    promotion and support;
                                   development of a flexible administration panel with content management features
              </span>
            </p>
          </div>
        )}

        figure={() => (

          <div>

          </div>
        )}

        logoDescription={() => (
          <p className="header-container">
            <span className={'header'}>SMOKE-ZONE</span>
            <span className={'paragraph'}>online shop selling tobacco for hookah</span>
          </p>
        )}

      />

    </div>
  );
};
