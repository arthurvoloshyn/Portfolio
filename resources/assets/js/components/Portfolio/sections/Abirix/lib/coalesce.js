/* eslint-disable no-unused-vars */
'use strict';

import {angle, cos, fadeInOut, HALF_PI, lerp, rand, sin} from '../../common/util';
import {DetectBrowser} from '../../../../../services/DetectBrowser';

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
const backgroundColor = 'hsla(60,50%,3%,1)';

let container;
let canvas;
let ctx;
let center;
let tick;
let particleProps;


function initParticles() {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    let i;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
    }
}

function initParticle(i) {
    let theta, x, y, vx, vy, life, ttl, speed, size, hue;

    x = rand(canvas.a.width);
    y = rand(canvas.a.height);
    theta = angle(x, y, center[0], center[1]);
    vx = cos(theta) * 6;
    vy = sin(theta) * 6;
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    speed = baseSpeed + rand(rangeSpeed);
    size = baseSize + rand(rangeSize);
    hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
}

function drawParticles() {
    let i;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
    }
}

function updateParticle(i) {
    let i2 = 1 + i;
    let i3 = 2 + i;
    let i4 = 3 + i;
    let i5 = 4 + i;
    let i6 = 5 + i;
    let i7 = 6 + i;
    let i8 = 7 + i;
    let i9 = 8 + i;
    let x, y, theta, vx, vy, life, ttl, speed, x2, y2, size, hue;

    x = particleProps[i];
    y = particleProps[i2];
    theta = angle(x, y, center[0], center[1]) + 0.75 * HALF_PI;
    vx = lerp(particleProps[i3], 2 * cos(theta), 0.05);
    vy = lerp(particleProps[i4], 2 * sin(theta), 0.05);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    size = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, theta, life, ttl, size, hue);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    life > ttl && initParticle(i);
}

function drawParticle(x, y, theta, life, ttl, size, hue) {
    let xRel = x - (0.5 * size);
    let yRel = y - (0.5 * size);

    ctx.a.save();
    ctx.a.lineCap = 'round';
    ctx.a.lineWidth = 1;
    ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.a.beginPath();
    ctx.a.translate(xRel, yRel);
    ctx.a.rotate(theta);
    ctx.a.translate(-xRel, -yRel);
    ctx.a.strokeRect(xRel, yRel, size, size);
    ctx.a.closePath();
    ctx.a.restore();
}

function createCanvas() {
    container = document.querySelector('.content--canvas-abirix');
    canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
    };
    canvas.b.style = `
		position: fixed;
		left: 0;
		width: 100%;
	`;
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d')
    };
    center = [];
}

function resize() {
    const {innerWidth, innerHeight} = window;

    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;

    ctx.a.drawImage(canvas.b, 0, 0);

    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);

    center[0] = 0.5 * canvas.a.width;
    center[1] = 0.5 * canvas.a.height;
}

function renderGlow() {
    ctx.b.save();

    if (!DetectBrowser.isFirefox()) {
        ctx.b.filter = 'blur(8px) brightness(200%)';
    }

    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();

    ctx.b.save();
    if (!DetectBrowser.isFirefox()) {
        ctx.b.filter = 'blur(4px) brightness(200%)';
    }
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function render() {
    ctx.b.save();
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function draw() {
    if (!ctx) {
        return
    }
    tick++;

    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

    drawParticles();
    renderGlow();
    render();

    window.requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);

export function setup() {
    if (document.querySelector('.content--canvas-abirix canvas')) {
        return;
    }

    createCanvas();
    resize();
    initParticles();
    draw();
}

export function remove() {
    if (document.querySelector('.content--canvas-abirix canvas')) {
        document.querySelector('.content--canvas-abirix canvas').remove();
    }
    container = null;
    canvas = null;
    ctx = null;
    center = null;
    tick = null;
    particleProps = null;
}

export default setup;
