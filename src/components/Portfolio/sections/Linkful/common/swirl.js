import SimplexNoise from 'simplex-noise';

import { cos, fadeInOut, lerp, rand, randRange, sin, TAU } from '../../../utils/helpers';
import {
  createSectionCanvas,
  drawParticlePreparation,
  getDrawParticleProps,
  getParticleProps,
  removeCanvas,
  renderGlow,
  renderToScreen,
  resizeCanvas,
  setParticleProps,
} from '../../../utils/canvas';

const particleCount = 400;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 220;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
const backgroundColor = 'hsla(260, 40%, 5%, 1)';

let container;
let canvas;
let ctx;
let center;
let tick;
let simplex;
let particleProps;

const initParticle = i => {
  const { width } = canvas.a;

  const x = rand(width);
  const y = center[1] + randRange(rangeY);

  const vx = 0;
  const vy = 0;

  particleProps = setParticleProps(
    particleProps,
    x,
    y,
    vx,
    vy,
    baseTTL,
    rangeTTL,
    baseSpeed,
    rangeSpeed,
    baseRadius,
    rangeRadius,
    baseHue,
    rangeHue,
    i,
  );
};

const initParticles = () => {
  tick = 0;

  simplex = new SimplexNoise();
  particleProps = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }
};

const drawParticle = (x, y, x2, y2, life, ttl, radius, hue) => {
  ctx.a.save();

  ctx.a.lineCap = 'round';
  ctx.a.lineWidth = radius;
  ctx.a.strokeStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;

  ctx.a.beginPath();
  ctx.a.moveTo(x, y);
  ctx.a.lineTo(x2, y2);
  ctx.a.stroke();
  ctx.a.closePath();
  ctx.a.restore();
};

const checkBounds = (x, y) => {
  const { width, height } = canvas.a;

  return x > width || x < 0 || y > height || y < 0;
};

const updateParticle = i => {
  const { i2, i3, i4, i5, i6, i7, i8, i9, x, y } = getParticleProps(particleProps, i);

  const n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;

  const vx = lerp(particleProps[i3], cos(n), 0.5);
  const vy = lerp(particleProps[i4], sin(n), 0.5);

  const { life: lifeProp, ttl, x2, y2, radiusSize: radius, hue } = getDrawParticleProps(
    particleProps,
    x,
    y,
    vx,
    vy,
    i5,
    i6,
    i7,
    i8,
    i9,
  );

  let life = lifeProp;

  drawParticle(x, y, x2, y2, life, ttl, radius, hue);

  life++;

  particleProps[i] = x2;
  particleProps[i2] = y2;
  particleProps[i3] = vx;
  particleProps[i4] = vy;
  particleProps[i5] = life;

  (checkBounds(x, y) || life > ttl) && initParticle(i);
};

const drawParticles = () => {
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i);
  }
};

const createCanvas = () => {
  const selector = '.content--canvas-linkful';
  const { container: newContainer, canvas: newCanvas, ctx: newCtx } = createSectionCanvas(
    selector,
    container,
    canvas,
    ctx,
  );

  container = newContainer;
  canvas = newCanvas;
  ctx = newCtx;

  center = [];
};

const resize = () => {
  const { canvas: newCanvas, ctx: newCtx, center: newCenter } = resizeCanvas(canvas, ctx, center);

  canvas = newCanvas;
  ctx = newCtx;
  center = newCenter;
};

const draw = () => {
  if (!ctx) return;

  const { tick: newTick, ctx: newCtx } = drawParticlePreparation(
    tick,
    canvas,
    ctx,
    backgroundColor,
  );

  tick = newTick;
  ctx = newCtx;

  drawParticles();

  ctx = renderGlow(ctx, canvas);
  ctx = renderToScreen(ctx, canvas);

  window.requestAnimationFrame(draw);
};

export const remove = () => {
  const selector = '.content--canvas-linkful canvas';
  const [
    newContainer,
    newCanvas,
    newCtx,
    newCenter,
    newTick,
    newSimplex,
    newParticleProps,
  ] = removeCanvas(selector, container, canvas, ctx, center, tick, simplex, particleProps);

  container = newContainer;
  canvas = newCanvas;
  ctx = newCtx;
  center = newCenter;
  tick = newTick;
  simplex = newSimplex;
  particleProps = newParticleProps;
};

export const setup = () => {
  const contentCanvas = document.querySelector('.content--canvas-linkful canvas');

  if (contentCanvas) return;

  createCanvas();
  resize();
  initParticles();
  draw();
};

window.addEventListener('resize', resize);
