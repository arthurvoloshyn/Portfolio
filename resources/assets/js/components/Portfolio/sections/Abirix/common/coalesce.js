import { angle, cos, fadeInOut, HALF_PI, lerp, rand, sin } from '../../../utils/utils';
import {
  createSectionCanvas,
  getParticleProps,
  getDrawParticleProps,
  setParticleProps,
  drawParticlePreparation,
  resizeCanvas,
  renderGlow,
  renderToScreen,
  removeCanvas,
} from '../../../utils/common';

const particleCount = 75;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const baseTTL = 100;
const rangeTTL = 500;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseSize = 2;
const rangeSize = 10;
const baseHue = 10;
const rangeHue = 100;
const backgroundColor = 'hsla(60, 50%, 3%, 1)';

/* eslint-disable no-unused-vars */
let container;
let canvas;
let ctx;
let center;
let tick;
let particleProps;
/* eslint-enable */

const initParticle = i => {
  const { width, height } = canvas.a;

  const x = rand(width);
  const y = rand(height);

  const theta = angle(x, y, center[0], center[1]);

  const vx = cos(theta) * 6;
  const vy = sin(theta) * 6;

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
    baseSize,
    rangeSize,
    baseHue,
    rangeHue,
    i,
  );
};

const initParticles = () => {
  tick = 0;
  particleProps = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }
};

const drawParticle = (x, y, theta, life, ttl, size, hue) => {
  const xRel = x - 0.5 * size;
  const yRel = y - 0.5 * size;

  ctx.a.save();

  ctx.a.lineCap = 'round';
  ctx.a.lineWidth = 1;
  ctx.a.strokeStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;

  ctx.a.beginPath();
  ctx.a.translate(xRel, yRel);
  ctx.a.rotate(theta);
  ctx.a.translate(-xRel, -yRel);
  ctx.a.strokeRect(xRel, yRel, size, size);
  ctx.a.closePath();
  ctx.a.restore();
};

const updateParticle = i => {
  const { i2, i3, i4, i5, i6, i7, i8, i9, x, y } = getParticleProps(particleProps, i);

  const theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;

  const vx = lerp(particleProps[i3], 2 * cos(theta), 0.05);
  const vy = lerp(particleProps[i4], 2 * sin(theta), 0.05);

  const { life: lifeProp, ttl, x2, y2, radiusSize: size, hue } = getDrawParticleProps(
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

  drawParticle(x, y, theta, life, ttl, size, hue);

  life++;

  particleProps[i] = x2;
  particleProps[i2] = y2;
  particleProps[i3] = vx;
  particleProps[i4] = vy;
  particleProps[i5] = life;

  life > ttl && initParticle(i);
};

const drawParticles = () => {
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i);
  }
};

const createCanvas = () => {
  const selector = '.content--canvas-abirix';
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

window.addEventListener('resize', resize);

export const setup = () => {
  const contentCanvas = document.querySelector('.content--canvas-abirix canvas');

  if (contentCanvas) return;

  createCanvas();
  resize();
  initParticles();
  draw();
};

export const remove = () => {
  const selector = '.content--canvas-abirix canvas';
  const [newContainer, newCanvas, newCtx, newCenter, newTick, newParticleProps] = removeCanvas(
    selector,
    container,
    canvas,
    ctx,
    center,
    tick,
    particleProps,
  );

  container = newContainer;
  canvas = newCanvas;
  ctx = newCtx;
  center = newCenter;
  tick = newTick;
  particleProps = newParticleProps;
};

export default setup;
