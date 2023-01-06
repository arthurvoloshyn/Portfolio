import React, { Component, createRef } from 'react';

import getSkills from './presenters/getSkills';
import SliderFx from './common/SliderFx';
import Tooltip from '../Tooltip/Tooltip';

import './scss/Skills.scss';

const skillList = getSkills();

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
          {skillList.map((slide, i) => (
            <li key={`skillSlide_${i}`}>
              <div className="slide">
                <div>
                  {slide.map((skills, index) => (
                    <div key={`skillRow_${index}`}>
                      {skills.map(({ src, alt }) => (
                        <Tooltip
                          key={alt}
                          content={alt}
                          position={index === 0 ? 'bottom' : 'top'}
                          wrapperClassName="slide-item"
                        >
                          <img alt={alt} className="slide-img" src={src} />
                        </Tooltip>
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
