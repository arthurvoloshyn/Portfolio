import React from 'react';
import Pattern from './../parts/Pattern';

export const Yandex = () => (
  <Pattern
    classname='Yandex'
    logo='../imgs/yandex/logo.png'
    url={''}
    effectClassIn='bounceIn'
    effectClassOut='bounceOut'
    technologies={_ => (

      <div className={'technologies'}>
      </div>
    )}

    description={() => (

      <div className={'description'}>
        <p>
          <b>I</b> have build the game. This is SPA on jquery and <b>w</b>ebpack

          <br/>
                      with Ada<b>p</b>tive <b>I</b>nterface

          <br/>
                      and <b>o</b>ptimization of perform<b>a</b>nce
        </p>
      </div>
    )}

    figure={() => (

      <div>

      </div>
    )}

    logoDescription={ () => (
      <p>
        <b>S</b>imple and relaxing game
        <br/>
                  In honor of <b>F</b>ebruary 23
        <br/>
                  For <b>Y</b>andex maps
      </p>
    )}

  />

);
