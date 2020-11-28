import SimplexNoise from 'simplex-noise';

import DetectBrowser from '../../../../../services/DetectBrowser';
import { cos, fadeInOut, lerp, rand, randRange, sin, TAU } from '../../utils/utils';

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

  const life = 0;

  const ttl = baseTTL + rand(rangeTTL);
  const speed = baseSpeed + rand(rangeSpeed);
  const radius = baseRadius + rand(rangeRadius);
  const hue = baseHue + rand(rangeHue);

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
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

  const n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;

  const vx = lerp(particleProps[i3], cos(n), 0.5);
  const vy = lerp(particleProps[i4], sin(n), 0.5);

  let life = particleProps[i5];
  const ttl = particleProps[i6];
  const speed = particleProps[i7];

  const x2 = x + vx * speed;
  const y2 = y + vy * speed;

  const radius = particleProps[i8];
  const hue = particleProps[i9];

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
  container = document.querySelector('.content--canvas-linkful');
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
  center = [];
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

  if (canvas && canvas.a) {
    const { width, height } = canvas.a;

    center[0] = 0.5 * width;
    center[1] = 0.5 * height;
  }
};

const renderGlow = () => {
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
};

const renderToScreen = () => {
  ctx.b.save();

  ctx.b.globalCompositeOperation = 'lighter';

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
};

const draw = () => {
  if (!ctx) return;

  const { width, height } = canvas.a;

  tick++;

  ctx.a.clearRect(0, 0, width, height);

  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, width, height);

  drawParticles();
  renderGlow();
  renderToScreen();

  window.requestAnimationFrame(draw);
};

export const remove = () => {
  const contentCanvas = document.querySelector('.content--canvas-linkful canvas');

  contentCanvas && contentCanvas.remove();

  container = null;
  canvas = null;
  ctx = null;
  center = null;
  tick = null;
  simplex = null;
  particleProps = null;
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
