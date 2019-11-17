import React from 'react';
import Pattern from './../parts/Pattern';
import Constants from '../../../constants/constants';

const style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    backgroundImage: 'url(../imgs/profil_city.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '0px'

  }
};

export const Factoringvergelijken = () => {
  return (
    <div style={style.outter}>
      <div style={style.bgLayerStyle}/>

      <Pattern

        classname="Factoringvergelijken"
        logo='../imgs/logo_f.png'
        url={Constants.factoringvergelijken}
        effectClassIn='slideInDown'
        effectClassOut='zoomOutUp'
        technologies={() => (

          <div className={'technologies'}>

          </div>
        )}

        description={() => (

          <div className={'description'}>
            <p>
                            My team and I have developed the application build with JS and PHP.
                            Also I have made and designed some parts of the interface;
                            improvement of modules in the administration panel
            </p>
          </div>
        )}

        figure={() => (

          <div>
            <span>View</span>
            <span>factoring</span>
          </div>
        )}

        logoDescription={() => (
          <p className="header-container">
            <span className={'paragraph'}>
                            Online factoring services
            </span>
          </p>
        )}

      />

    </div>
  );
};
