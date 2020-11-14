import DetectBrowser from '../../../../../services/DetectBrowser';
import { cos, fadeInOut, HALF_PI, rand, round, sin, TAU, TO_RAD } from '../../common/util';

const pipeCount = 15;
const pipePropCount = 8;
const pipePropsLength = pipeCount * pipePropCount;
const turnCount = 8;
const turnAmount = (360 / turnCount) * TO_RAD;
const turnChanceRange = 58;
const baseSpeed = 0.5;
const rangeSpeed = 1;
const baseTTL = 100;
const rangeTTL = 300;
const baseWidth = 2;
const rangeWidth = 4;
const baseHue = 180;
const rangeHue = 60;
const backgroundColor = 'hsla(150, 80%, 1%, 1)';

let container;
let canvas;
let ctx;
let center;
let tick;
let pipeProps;

const initPipe = i => {
  const { width: canvasWidth } = canvas.a;

  const x = rand(canvasWidth);
  const y = center[1];

  const direction = round(rand(1)) ? HALF_PI : TAU - HALF_PI;
  const speed = baseSpeed + rand(rangeSpeed);

  const life = 0;

  const ttl = baseTTL + rand(rangeTTL);
  const width = baseWidth + rand(rangeWidth);
  const hue = baseHue + rand(rangeHue);

  pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
};

const initPipes = () => {
  pipeProps = new Float32Array(pipePropsLength);

  for (let i = 0; i < pipePropsLength; i += pipePropCount) {
    initPipe(i);
  }
};

const drawPipe = (x, y, life, ttl, width, hue) => {
  ctx.a.save();

  ctx.a.strokeStyle = `hsla(${hue}, 75%, 50%, ${fadeInOut(life, ttl) * 0.125})`;

  ctx.a.beginPath();
  ctx.a.arc(x, y, width, 0, TAU);
  ctx.a.stroke();
  ctx.a.closePath();
  ctx.a.restore();
};

const checkBounds = (x, y) => {
  const { width, height } = canvas.a;

  /* eslint-disable no-param-reassign */
  x > width && (x = 0);
  x < 0 && (x = width);

  y > height && (y = 0);
  y < 0 && (y = height);
  /* eslint-enable */
};

const updatePipe = i => {
  const i2 = 1 + i;
  const i3 = 2 + i;
  const i4 = 3 + i;
  const i5 = 4 + i;
  const i6 = 5 + i;
  const i7 = 6 + i;
  const i8 = 7 + i;

  let x = pipeProps[i];
  let y = pipeProps[i2];

  let direction = pipeProps[i3];
  const speed = pipeProps[i4];

  let life = pipeProps[i5];
  const ttl = pipeProps[i6];
  const width = pipeProps[i7];
  const hue = pipeProps[i8];

  drawPipe(x, y, life, ttl, width, hue);

  life++;

  x += cos(direction) * speed;
  y += sin(direction) * speed;

  const turnChance = !(tick % round(rand(turnChanceRange))) && (!(round(x) % 6) || !(round(y) % 6));
  const turnBias = round(rand(1)) ? -1 : 1;

  direction += turnChance ? turnAmount * turnBias : 0;

  pipeProps[i] = x;
  pipeProps[i2] = y;
  pipeProps[i3] = direction;
  pipeProps[i5] = life;

  checkBounds(x, y);

  life > ttl && initPipe(i);
};

const updatePipes = () => {
  if (!pipeProps) return;

  tick++;

  for (let i = 0; i < pipePropsLength; i += pipePropCount) {
    updatePipe(i);
  }
};

const createCanvas = () => {
  container = document.querySelector('.content--canvas--smsplaza');
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
  tick = 0;
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

const render = () => {
  if (!ctx) return;

  const { width, height } = canvas.b;

  ctx.b.save();

  ctx.b.fillStyle = backgroundColor;

  ctx.b.fillRect(0, 0, width, height);
  ctx.b.restore();
  ctx.b.save();

  !DetectBrowser.isFirefox() && (ctx.b.filter = 'blur(12px)');

  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  ctx.b.save();
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
};

const draw = () => {
  updatePipes();
  render();

  window.requestAnimationFrame(draw);
};

window.addEventListener('resize', resize);

export const setup = () => {
  const contentCanvas = document.querySelector('.content--canvas--smsplaza canvas');

  if (contentCanvas) return;

  createCanvas();
  resize();
  initPipes();
  draw();
};

export const remove = () => {
  const contentCanvas = document.querySelector('.content--canvas--smsplaza canvas');

  contentCanvas && contentCanvas.remove();

  container = null;
  canvas = null;
  ctx = null;
  center = null;
  tick = null;
  pipeProps = null;
};
