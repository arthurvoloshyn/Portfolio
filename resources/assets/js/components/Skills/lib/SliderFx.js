class SliderFx {
  constructor(el, options) {
    this.Modernizr = window.Modernizr;
    window.transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd',
      msTransition: 'MSTransitionEnd',
      transition: 'transitionend'
    };
    window.transEndEventName = window.transEndEventNames[this.Modernizr.prefixed('transition')];
    this.support = { csstransitions: this.Modernizr.csstransitions };
    this.el = el;
    this.optionsDefault = {
      // default transition speed (ms)
      speed: 500,
      // default transition easing
      easing: 'ease',
      // path definitions
      paths: {
        rect:
          'M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33',
        curve: {
          right:
            'M33,0h41c0,0,5,9.871,5,29.871C79,49.871,74,60,74,60H32.666h-0.125H6c0,0,5-10,5-30S6,0,6,0H33',
          left:
            'M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33'
        }
      }
    };
    this.options = this.extend({}, this.optionsDefault);
    this.extend(this.options, options);
  }

  _morphSVGs = callback => {
    const {
      paths: {
        rect: optionsRect,
        curve: { left: optionsLeft, right: optionsRight }
      },
      speed: optionsSpeed
    } = this.options;
    const { easeout, elastic } = mina;

    let speed = optionsSpeed;
    let pathCurvedLeft = optionsLeft;
    let pathCurvedRight = optionsRight;
    let pathRectangle = optionsRect;
    let dir = this.old < this.curr ? 'right' : 'left';

    // morph svg path on exiting slide to "curved"
    this.items[this.old].path
      .stop()
      .animate({ path: dir === 'right' ? pathCurvedLeft : pathCurvedRight }, speed * 0.5, easeout);

    // the slider starts a bit later...
    setTimeout(() => {
      callback.call();
    }, speed * 0.2);

    // change svg path on entering slide to "curved"
    let currItem = this.items[this.curr];
    currItem
      .querySelector('path')
      .setAttribute('d', dir === 'right' ? pathCurvedLeft : pathCurvedRight);
    // morph svg path on entering slide to "rectangle"
    setTimeout(() => {
      currItem.path.stop().animate({ path: pathRectangle }, speed * 3, elastic);
    }, speed * 0.5);
  };

  extend = (a, b) => {
    for (const key in b) {
      if (Object.prototype.hasOwnProperty.call(b, key)) {
        a[key] = b[key];
      }
    }
    return a;
  };

  init = () => {
    this._init();
    this._initEvents();
  };

  _init = () => {
    // the list of items
    this.itemsList = this.el.querySelector('ul');
    // the items (li elements)
    this.items = [].slice.call(this.itemsList.querySelectorAll('li'));
    // total number of items
    this.itemsCount = this.items.length;
    // current and old item´s index
    this.curr = this.old = 0;
    // check if it's currently animating
    this.isAnimating = false;
    // the itemsList (ul) will have a width of 100% x itemsCount
    this.itemsList.style.width = `${100 * this.itemsCount}%`;
    // apply the transition
    if (this.support) {
      const { speed, easing } = this.options;
      this.itemsList.style.WebkitTransition = `-webkit-transform ${speed}ms ${easing}`;
      this.itemsList.style.transition = `transform ${speed}ms ${easing}`;
    }
    this.items.forEach(item => {
      // each item will have a width of 100 / itemsCount
      item.style.width = `${100 / this.itemsCount}%`;
    });
    // add navigation arrows if there is more than 1 item
    if (this.itemsCount > 1) {
      // add navigation arrows (the previous arrow is not shown initially):
      const nav = document.createElement('nav');
      const addArrow = (c, content, disabled) => {
        const el = document.createElement('span');

        el.className = c;
        el.innerHTML = content;

        if (disabled) {
          classie.add(el, 'disabled');
        }

        nav.appendChild(el);

        return el;
      };

      const createSvg = html => {
        const frag = document.createDocumentFragment();
        const temp = document.createElement('div');

        temp.innerHTML = html;
        while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
        }

        return frag;
      };

      this.navPrev = addArrow('prev', '&lt;', true);
      this.navNext = addArrow('next', '&gt;');
      this.el.appendChild(nav);

      // add svgs with rectangle path
      this.items.forEach(item => {
        const {
          paths: { rect }
        } = this.options;
        const svg = createSvg(
          `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none"><path d="${rect}"/></svg>`
        );

        item.insertBefore(svg, item.childNodes[0]);

        const s = Snap(item.querySelector('svg'));
        item.path = s.select('path');
      });
    }
  };

  _initEvents = () => {
    if (this.itemsCount > 1) {
      this.navPrev.addEventListener('click', () => {
        this._navigate('prev');
      });
      this.navNext.addEventListener('click', () => {
        this._navigate('next');
      });

      const transitionendfn = () => {
        this.isAnimating = false;
      };

      if (this.support) {
        this.itemsList.addEventListener(transEndEventName, transitionendfn);
      } else {
        transitionendfn.call();
      }

      // keyboard navigation events
      document.addEventListener('keydown', ({ keyCode: evKeyCode, which: evWhich }) => {
        const keyCode = evKeyCode || evWhich;

        switch (keyCode) {
          // left key
          case 37:
            this._navigate('prev');
            break;
          // right key
          case 39:
            this._navigate('next');
            break;
          default:
            break;
        }
      });
    }
  };

  _navigate = dir => {
    // do nothing if the itemsList is currently moving
    if (
      this.isAnimating ||
      (dir === 'next' && this.curr >= this.itemsCount - 1) ||
      (dir === 'prev' && this.curr <= 0)
    ) {
      return false;
    }
    this.isAnimating = true;
    this.direction = dir;
    // update old and current values
    this.old = this.curr;
    if (dir === 'next' && this.curr < this.itemsCount - 1) {
      ++this.curr;
    } else if (dir === 'prev' && this.curr > 0) {
      --this.curr;
    }
    // slide
    this._slide();
  };

  _slide = () => {
    let self = this;

    const startSlider = () => {
      // check which navigation arrows should be shown
      self._toggleNavControls();
      // translate value
      const translateVal = (-1 * self.curr * 100) / self.itemsCount;
      self.itemsList.style.WebkitTransform = `translate3d(${translateVal}%,0,0)`;
      self.itemsList.style.transform = `translate3d(${translateVal}%,0,0)`;
    };

    this._morphSVGs(startSlider);
  };

  _toggleNavControls = () => {
    switch (this.curr) {
      case 0:
        classie.remove(this.navNext, 'disabled');
        classie.add(this.navPrev, 'disabled');
        break;
      case this.itemsCount - 1:
        classie.add(this.navNext, 'disabled');
        classie.remove(this.navPrev, 'disabled');
        break;
      default:
        classie.remove(this.navNext, 'disabled');
        classie.remove(this.navPrev, 'disabled');
        break;
    }
  };
}

export default SliderFx;
