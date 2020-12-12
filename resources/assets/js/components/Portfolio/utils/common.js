import { rand } from './utils';

export const setParticleProps = (
  particleProps,
  x,
  y,
  vx,
  vy,
  baseTTL,
  rangeTTL,
  baseSpeed,
  rangeSpeed,
  baseRadiusSize,
  rangeRadiusSize,
  baseHue,
  rangeHue,
  i,
) => {
  const life = 0;

  const ttl = baseTTL + rand(rangeTTL);
  const speed = baseSpeed + rand(rangeSpeed);
  const size = baseRadiusSize + rand(rangeRadiusSize);
  const hue = baseHue + rand(rangeHue);

  particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);

  return particleProps;
};

export const getParticleProps = (particleProps, i) => {
  const i2 = 1 + i;
  const i3 = 2 + i;
  const i4 = 3 + i;
  const i5 = 4 + i;
  const i6 = 5 + i;
  const i7 = 6 + i;
  const i8 = 7 + i;
  const i9 = 8 + i;

  const x = particleProps[i];
  const y = particleProps[i2];

  return {
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    x,
    y,
  };
};

/* eslint-disable no-param-reassign */
export const createSectionCanvas = (selector, container, canvas, ctx) => {
  container = document.querySelector(selector);
  canvas = {
    a: document.createElement('canvas'),
    b: document.createElement('canvas'),
  };

  canvas.b.style = `
		position: fixed;
		left: 0;
		width: 100%;
	`;

  container.appendChild(canvas.b);

  ctx = {
    a: canvas.a.getContext('2d'),
    b: canvas.b.getContext('2d'),
  };

  return {
    container,
    canvas,
    ctx,
  };
};
/* eslint-enable */
