import randomBetween from './wordFx';

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

export default Shape;
