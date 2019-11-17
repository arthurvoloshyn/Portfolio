export const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
export const HALF_PI = 0.5 * PI;
export const TAU = 2 * PI;
export const TO_RAD = PI / 180;
export const floor = n => n | 0;
export const rand = n => n * random();
export const randIn = (min, max) => rand(max - min) + min;
export const randRange = n => n - rand(2 * n);
export const fadeIn = (t, m) => t / m;
export const fadeOut = (t, m) => (m - t) / m;
export const fadeInOut = (t, m) => {
  let hm = 0.5 * m;
  return abs((t + hm) % m - hm) / (hm);
};
export const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
export const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);
export const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
