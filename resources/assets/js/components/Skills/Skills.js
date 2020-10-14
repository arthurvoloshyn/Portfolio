import React, { Component, createRef } from 'react';

import getSkills from '../../utils/skills';
import SliderFx from './lib/SliderFx';

import './scss/Skills.scss';

const skillsList = getSkills();

class Skills extends Component {
  slideshow = createRef();

  SliderFx = null;

  componentDidMount() {
    const { current } = this.slideshow;

    this.SliderFx = new SliderFx(current, {
      easing: 'cubic-bezier(.8,0,.2,1)',
    });

    const { init } = this.SliderFx;

    init();
  }

  render() {
    return (
      <div ref={this.slideshow} className="for_fade" id="Skills_slideshow">
        <ul>
          {skillsList.map((slide, i) => (
            <li key={`skillSlide_${i}`}>
              <div className="slide">
                <div>
                  {slide.map((skills, index) => (
                    <div key={`skillRow_${index}`}>
                      {skills.map(({ src, alt }) => (
                        <img key={alt} alt={alt} src={src} title={alt} />
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
