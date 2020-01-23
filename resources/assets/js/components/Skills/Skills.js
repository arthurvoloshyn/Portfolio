import React, { Component, createRef } from 'react';

import { getSkills } from './utils/getSkills';

import SliderFx from './lib/SliderFx';

import './scss/Skills.scss';

const skillsList = getSkills();

class Skills extends Component {
  slideshow = createRef();

  componentDidMount() {
    this.SliderFx = new SliderFx(this.slideshow.current, {
      easing: 'cubic-bezier(.8,0,.2,1)'
    });
    this.SliderFx.init();
  }

  render() {
    return (
      <div id="Skills_slideshow" ref={this.slideshow} className="for_fade">
        <ul>
          {skillsList.map((slide, i) => (
            <li key={i}>
              <div className="slide">
                <div>
                  {slide.map((skills, index) => (
                    <div key={index}>
                      {skills.map(({ src, alt }) => (
                        <img src={src} alt={alt} key={alt} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Skills;
