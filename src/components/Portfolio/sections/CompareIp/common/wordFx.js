import { debounce } from '../../../utils/helpers';
import charming from '../libs/charming.min';
import anime from '../libs/anime.min';
import Letter from './Letter';

const randomBetween = (minValue, maxValue, precision) => {
  const newPrecision = typeof precision === 'undefined' ? 2 : precision;

  return parseFloat(
    Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(newPrecision),
  );
};

const { innerWidth, innerHeight } = window;
let winSize = { width: innerWidth, height: innerHeight };

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

    const { el } = this.DOM;

    shapesOnTop
      ? this.DOM.el.parentNode.insertBefore(this.DOM.svg, el.nextSibling)
      : this.DOM.el.parentNode.insertBefore(this.DOM.svg, el);
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
