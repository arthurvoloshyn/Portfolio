import React from 'react';
import Pattern from './../parts/Pattern';

const style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    backgroundImage: 'url(../imgs/Skyline.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '-50px'
  }
};

export const WellHome = () => {
  return (
    <div style={style.outter}>
      <div style={style.bgLayerStyle}/>

      <Pattern

        classname="WellHome"
        logo='../imgs/wh.jpg'
        url={''}
        effectClassIn='lightSpeedIn'
        effectClassOut='lightSpeedOut'
        technologies={_ => (

          <div className={'technologies'}>
          </div>
        )}

        description={() => (

          <div className={'description'}>
            <p>
                            I have developed CRM system in order
                            to automate business processes in the
                            company engaged in the sale of real estate - <b><a href={'http://www.welhome.ru/'}
                target={'blank'}>Welhome</a></b>
              <span>,
                                based on SugarCRM; designed the database and system architecture; integration with
                                existing enterprise systems</span>
            </p>
          </div>
        )}

        figure={() => (

          <div>

          </div>
        )}

        logoDescription={() => (
          <p className="header-container">
            <span className={'paragraph'}>CRM system for real estate company</span>
          </p>
        )}

      />

    </div>
  );
};
