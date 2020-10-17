class PathLoader {
  constructor(el) {
    this.el = el;
    this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
  }

  _draw = val => (this.el.style.strokeDashoffset = this.el.getTotalLength() * (1 - val));

  setProgress = (val, callback) => {
    this._draw(val);

    callback && typeof callback === 'function' && setTimeout(callback, 200);
  };

  setProgressFn = fn => typeof fn === 'function' && fn(this);
}

export default PathLoader;
