/**
 * wordFx.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
import charming from '../common/charming.min';
import anime from '../common/anime.min';

// From https://davidwalsh.name/javascript-debounce-function.
const debounce = (func, wait, immediate) => {
  let timeout;

  return (...args) => {
    const later = () => {
      timeout = null;
      !immediate && func.apply(this, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
    callNow && func.apply(this, args);
  };
};

// From http://snipplr.com/view/37687/random-number-float-generator/
const randomBetween = (minValue, maxValue, precision) => {
  const newPrecision = typeof precision === 'undefined' ? 2 : precision;

  return parseFloat(
    Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(newPrecision),
  );
};

const { innerWidth, innerHeight } = window;
let winSize = { width: innerWidth, height: innerHeight };

class Shape {
  constructor(type, letterRect, options) {
    this.DOM = {};
    this.options = {
      shapeTypes: ['circle', 'rect', 'polygon'],
      shapeColors: ['#e07272', '#0805b5', '#49c6ff', '#8bc34a', '#1e1e21', '#e24e81', '#e0cd24'],
      shapeFill: true,
      shapeStrokeWidth: 1,
    };

    Object.assign(this.options, options);

    const { shapeTypes, types } = this.options;

    this.type = type || shapeTypes[0];
    if (this.type !== 'random' && !types.includes(this.type)) return;
    if (this.type === 'random') this.type = shapeTypes[randomBetween(0, shapeTypes.length - 1, 0)];
    this.letterRect = letterRect;
    this.init();
  }

  init = () => {
    this.DOM.el = document.createElementNS('http://www.w3.org/2000/svg', this.type);
    this.DOM.el.style.opacity = 0;

    this.configureShapeType();

    const { shapeFill, shapeColors, shapeStrokeWidth } = this.options;
    const randomNumber = randomBetween(0, shapeColors.length - 1, 0);

    if (shapeFill) {
      this.DOM.el.setAttribute('fill', shapeColors[randomNumber]);
    } else {
      this.DOM.el.setAttribute('fill', 'none');
      this.DOM.el.setAttribute('stroke-width', shapeStrokeWidth);
      this.DOM.el.setAttribute('stroke', shapeColors[randomNumber]);
    }
  };

  configureShapeType = () => {
    const { left, width, top, height, bottom } = this.letterRect;

    this.DOM.el.style.transformOrigin = `${left + width / 2}px ${top + height / 2}px`;

    if (this.type === 'circle') {
      const r = 0.5 * width;

      this.DOM.el.setAttribute('r', r);
      this.DOM.el.setAttribute('cx', left + width / 2);
      this.DOM.el.setAttribute('cy', top + height / 2);
    } else if (this.type === 'rect') {
      const w = randomBetween(0.05, 0.5, 3) * width;
      const h = randomBetween(0.05, 0.5, 3) * height;

      this.DOM.el.setAttribute('width', w);
      this.DOM.el.setAttribute('height', h);

      this.DOM.el.setAttribute('x', left + (width - w) / 2);
      this.DOM.el.setAttribute('y', top + (height - h) / 2);
    } else if (this.type === 'polygon') {
      this.DOM.el.setAttribute(
        'points',
        `${left} ${top + height}, ${left + width / 2} ${bottom - width}, ${left + width} ${top +
          height}`,
      );
    }
  };

  onResize = letterRect => {
    this.letterRect = letterRect;
    this.configureShapeType();
  };
}

class Letter {
  constructor(el, svg, options) {
    this.DOM = {};
    this.DOM.el = el;
    this.DOM.svg = svg;
    this.options = {
      totalShapes: 10,
    };

    const { totalShapes } = this.options;
    Object.assign(this.options, options);

    this.rect = this.DOM.el.getBoundingClientRect();
    this.totalShapes = totalShapes;
    this.init();
    this.initEvents();
  }

  init = () => {
    this.shapes = [];

    for (let i = 0; i <= this.totalShapes - 1; ++i) {
      const shape = new Shape('random', this.rect, this.options);

      this.shapes.push(shape);
      this.DOM.svg.appendChild(shape.DOM.el);
    }
  };

  initEvents = () => {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.rect = this.DOM.el.getBoundingClientRect();
        for (let i = 0; i <= this.totalShapes - 1; ++i) {
          const shape = this.shapes[i];
          shape.onResize(this.rect);
        }
      }, 20),
    );
  };
}

class Word {
  constructor(el, options) {
    this.DOM = {};
    this.DOM.el = el;
    this.options = {
      shapesOnTop: false,
    };

    Object.assign(this.options, options);

    this.init();
    this.initEvents();
  }

  init = () => {
    this.createSVG();
    charming(this.DOM.el);
    this.letters = [];

    const spanEl = this.DOM.el.querySelectorAll('span');

    Array.from(spanEl).forEach(letter =>
      this.letters.push(new Letter(letter, this.DOM.svg, this.options)),
    );
  };

  initEvents = () => {
    window.addEventListener(
      'resize',
      debounce(() => {
        const { innerWidth, innerHeight } = window;

        winSize = { width: innerWidth, height: innerHeight };
        const { width, height } = winSize;

        this.DOM.svg.setAttribute('width', `${width}px`);
        this.DOM.svg.setAttribute('height', `${width}px`);
        this.DOM.svg.setAttribute('viewbox', `0 0 ${width} ${height}`);
      }, 20),
    );
  };

  createSVG = () => {
    const { width, height } = winSize;
    const { shapesOnTop } = this.options;

    this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    this.DOM.svg.setAttribute('class', 'shapes');
    this.DOM.svg.setAttribute('width', `${width}px`);
    this.DOM.svg.setAttribute('height', `${width}px`);
    this.DOM.svg.setAttribute('viewbox', `0 0 ${width} ${height}`);

    shapesOnTop
      ? this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el.nextSibling)
      : this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el);
  };

  show = config => this.toggle('show', config);

  hide = config => this.toggle('hide', config);

  toggle = (action = 'show', config) =>
    new Promise(resolve => {
      const toggleNow = () => {
        for (let i = 0, len = this.letters.length; i <= len - 1; ++i) {
          this.letters[i].DOM.el.style.opacity = action === 'show' ? 1 : 0;
        }
        resolve();
      };

      const { shapesAnimationOpts, lettersAnimationOpts } = config;

      /* eslint-disable no-param-reassign */
      if (config && Object.keys(config).length !== 0) {
        if (shapesAnimationOpts) {
          for (let i = 0, len = this.letters.length; i <= len - 1; ++i) {
            const letter = this.letters[i];
            setTimeout(
              (letter => () => {
                config.shapesAnimationOpts.targets = letter.shapes.map(({ DOM: { el } }) => el);
                anime.remove(shapesAnimationOpts.targets);
                anime(shapesAnimationOpts);
              })(letter),
              lettersAnimationOpts && lettersAnimationOpts.delay
                ? lettersAnimationOpts.delay(letter.DOM.el, i)
                : 0,
            );
          }
        }
        if (lettersAnimationOpts) {
          config.lettersAnimationOpts.targets = this.letters.map(({ DOM: { el } }) => el);
          config.lettersAnimationOpts.complete = () => {
            if (action === 'hide') {
              for (let i = 0, len = lettersAnimationOpts.targets.length; i <= len - 1; ++i) {
                config.lettersAnimationOpts.targets[i].style.transform = 'none';
              }
            }
            resolve();
          };
          anime(lettersAnimationOpts);
        } else {
          toggleNow();
        }
      } else {
        toggleNow();
      }
      /* eslint-enable */
    });
}

window.Word = Word;

export default randomBetween;
