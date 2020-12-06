import SimplexNoise from 'simplex-noise';

import { cos, fadeInOut, rand, sin, TAU } from '../../../utils/utils';

const circleCount = 10;
const circlePropCount = 8;
const circlePropsLength = circleCount * circlePropCount;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseTTL = 150;
const rangeTTL = 200;
const baseRadius = 100;
const rangeRadius = 200;
const rangeHue = 60;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;
const backgroundColor = 'hsla(0, 0%, 5%, 1)';

/* eslint-disable no-unused-vars */
let container;
let canvas;
let ctx;
let circles;
let circleProps;
let simplex;
let baseHue;
/* eslint-enable */

const initCircle = i => {
  const { width, height } = canvas.a;

  const x = rand(width);
  const y = rand(height);

  const n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);

  const t = rand(TAU);
  const speed = baseSpeed + rand(rangeSpeed);

  const vx = speed * cos(t);
  const vy = speed * sin(t);

  const life = 0;

  const ttl = baseTTL + rand(rangeTTL);
  const radius = baseRadius + rand(rangeRadius);
  const hue = baseHue + n * rangeHue;

  circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
};

const initCircles = () => {
  circleProps = new Float32Array(circlePropsLength);
  simplex = new SimplexNoise();

  baseHue = 220;

  initCircle(0);

  for (let i = 0; i < circlePropsLength; i += circlePropCount) {
    initCircle(i);
  }
};

const drawCircle = (x, y, life, ttl, radius, hue) => {
  ctx.a.save();

  ctx.a.fillStyle = `hsla(${hue}, 60%, 30%, ${fadeInOut(life, ttl)})`;

  ctx.a.beginPath();
  ctx.a.arc(x, y, radius, 0, TAU);
  ctx.a.fill();
  ctx.a.closePath();
  ctx.a.restore();
};

const checkBounds = (x, y, radius) => {
  const { width, height } = canvas.a;

  return x < -radius || x > width + radius || y < -radius || y > height + radius;
};

const updateCircle = i => {
  const i2 = 1 + i;
  const i3 = 2 + i;
  const i4 = 3 + i;
  const i5 = 4 + i;
  const i6 = 5 + i;
  const i7 = 6 + i;
  const i8 = 7 + i;

  const x = circleProps[i];
  const y = circleProps[i2];

  const vx = circleProps[i3];
  const vy = circleProps[i4];

  let life = circleProps[i5];
  const ttl = circleProps[i6];
  const radius = circleProps[i7];
  const hue = circleProps[i8];

  drawCircle(x, y, life, ttl, radius, hue);

  life++;

  circleProps[i] = x + vx;
  circleProps[i2] = y + vy;
  circleProps[i5] = life;

  (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
};

const updateCircles = () => {
  baseHue++;

  for (let i = 0; i < circlePropsLength; i += circlePropCount) {
    updateCircle(i);
  }
};

const createCanvas = () => {
  container = document.querySelector('.content--canvas-neocore');
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
};

const resize = () => {
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
};

const render = () => {
  ctx.b.save();

  ctx.b.filter = 'blur(50px)';

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
};

const draw = () => {
  if (!ctx) return;

  const { a, b } = canvas;

  ctx.a.clearRect(0, 0, a.width, a.height);

  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, b.width, b.height);

  updateCircles();
  render();

  window.requestAnimationFrame(draw);
};

window.addEventListener('resize', resize);

export const setup = () => {
  const contentCanvas = document.querySelector('.content--canvas-neocore canvas');

  if (contentCanvas) return;

  createCanvas();
  resize();
  initCircles();
  draw();
};

export const remove = () => {
  const contentCanvas = document.querySelector('.content--canvas-neocore canvas');

  contentCanvas && contentCanvas.remove();

  container = null;
  canvas = null;
  ctx = null;
  circles = null;
  circleProps = null;
  simplex = null;
  baseHue = null;
};

export default setup;
