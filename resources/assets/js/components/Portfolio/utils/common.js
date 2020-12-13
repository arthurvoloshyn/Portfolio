import DetectBrowser from '../../../services/DetectBrowser';
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

export const getDrawParticleProps = (particleProps, x, y, vx, vy, i5, i6, i7, i8, i9) => {
  const life = particleProps[i5];
  const ttl = particleProps[i6];
  const speed = particleProps[i7];

  const x2 = x + vx * speed;
  const y2 = y + vy * speed;

  const radiusSize = particleProps[i8];
  const hue = particleProps[i9];

  return {
    life,
    ttl,
    x2,
    y2,
    radiusSize,
    hue,
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

export const drawParticlePreparation = (tick, canvas, ctx, backgroundColor) => {
  tick++;

  const { width, height } = canvas.a;

  ctx.a.clearRect(0, 0, width, height);

  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, width, height);

  return {
    tick,
    ctx,
  };
};

export const resizeCanvas = (canvas, ctx, center) => {
  const { innerWidth, innerHeight } = window;

  if (canvas && canvas.a) {
    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;
  }

  ctx && ctx.a && ctx.a.drawImage(canvas.b, 0, 0);

  if (canvas && canvas.b) {
    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;
  }

  ctx && ctx.b && ctx.b.drawImage(canvas.a, 0, 0);

  if (center && canvas && canvas.a) {
    const { width, height } = canvas.a;

    center[0] = 0.5 * width;
    center[1] = 0.5 * height;
  }

  return {
    canvas,
    ctx,
    center,
  };
};

export const renderGlow = (ctx, canvas) => {
  ctx.b.save();

  !DetectBrowser.isFirefox() && (ctx.b.filter = 'blur(8px) brightness(200%)');

  ctx.b.globalCompositeOperation = 'lighter';

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
  ctx.b.save();

  !DetectBrowser.isFirefox() && (ctx.b.filter = 'blur(4px) brightness(200%)');

  ctx.b.globalCompositeOperation = 'lighter';

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  return ctx;
};

export const renderToScreen = (ctx, canvas) => {
  ctx.b.save();

  ctx.b.globalCompositeOperation = 'lighter';

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  return ctx;
};
/* eslint-enable */

export const updateFigure = (figureProps, i) => {
  const i2 = 1 + i;
  const i3 = 2 + i;
  const i4 = 3 + i;
  const i5 = 4 + i;
  const i6 = 5 + i;
  const i7 = 6 + i;
  const i8 = 7 + i;

  const x = figureProps[i];
  const y = figureProps[i2];

  const vx = figureProps[i3];
  const vy = figureProps[i4];

  const life = figureProps[i5];
  const ttl = figureProps[i6];
  const radiusWidth = figureProps[i7];
  const hue = figureProps[i8];

  return {
    x,
    y,
    vx,
    vy,
    life,
    ttl,
    radiusWidth,
    hue,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
  };
};

export const removeCanvas = (selector, ...args) => {
  const contentCanvas = document.querySelector(selector);

  contentCanvas && contentCanvas.remove();

  return new Array(args.length).fill(null);
};
