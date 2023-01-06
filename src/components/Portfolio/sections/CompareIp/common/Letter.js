import { debounce } from '../../../utils/helpers';
import Shape from './Shape';

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
    const { el: domEl } = this.DOM;

    this.rect = domEl.getBoundingClientRect();
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
        const { el } = this.DOM;
        this.rect = el.getBoundingClientRect();

        for (let i = 0; i <= this.totalShapes - 1; ++i) {
          const shape = this.shapes[i];
          shape.onResize(this.rect);
        }
      }, 20),
    );
  };
}

export default Letter;
