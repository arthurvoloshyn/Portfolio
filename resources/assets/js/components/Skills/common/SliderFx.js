const defaultPathsOptions = {
  rect:
    'M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33',
  curveRight:
    'M33,0h41c0,0,5,9.871,5,29.871C79,49.871,74,60,74,60H32.666h-0.125H6c0,0,5-10,5-30S6,0,6,0H33',
  curveLeft:
    'M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33',
};

class SliderFx {
  constructor(el, options) {
    this.Modernizr = window.Modernizr;
    window.transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd',
      msTransition: 'MSTransitionEnd',
      transition: 'transitionend',
    };

    const { cssanimations, prefixed } = window.Modernizr;
    const transEndEventName = prefixed('transition');

    window.transEndEventName = window.transEndEventNames[transEndEventName];

    this.support = { cssanimations };
    this.el = el;
    this.optionsDefault = {
      // default transition speed (ms)
      speed: 500,
      // default transition easing
      easing: 'ease',
      // path definitions
      paths: {
        rect: defaultPathsOptions.rect,
        curve: {
          right: defaultPathsOptions.curveRight,
          left: defaultPathsOptions.curveLeft,
        },
      },
    };
    this.options = this.extend({}, this.optionsDefault);
    this.extend(this.options, options);
  }

  _morphSVGs = callback => {
    const {
      paths: {
        rect: pathRectangle,
        curve: { left: pathCurvedLeft, right: pathCurvedRight },
      },
      speed,
    } = this.options;

    const dir = this.old < this.curr ? 'right' : 'left';

    const {
      [this.old]: { path },
      [this.curr]: currItem,
    } = this.items;

    // morph svg path on exiting slide to "curved"
    path
      .stop()
      .animate(
        { path: dir === 'right' ? pathCurvedLeft : pathCurvedRight },
        speed * 0.5,
        mina.easeout,
      );

    // the slider starts a bit later...
    setTimeout(() => callback(), speed * 0.2);

    // change svg path on entering slide to "curved"
    currItem
      .querySelector('path')
      .setAttribute('d', dir === 'right' ? pathCurvedLeft : pathCurvedRight);

    // morph svg path on entering slide to "rectangle"
    setTimeout(
      () => currItem.path.stop().animate({ path: pathRectangle }, speed * 3, mina.elastic),
      speed * 0.5,
    );
  };

  extend = (a, b) => {
    const keys = Object.keys(b);
    const newObj = a;

    keys.forEach(key => Object.prototype.hasOwnProperty.call(b, key) && (newObj[key] = b[key]));
    return newObj;
  };

  init = () => {
    this._init();
    this._initEvents();
  };

  /* eslint-disable no-param-reassign */
  _init = () => {
    // the list of items
    this.itemsList = this.el.querySelector('ul');
    // the items (li elements)
    const listItems = this.itemsList.querySelectorAll('li');
    this.items = [].slice.call(listItems);
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

        disabled && el.classList.add('disabled');

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

      // add SVGs with rectangle path
      this.items.forEach(item => {
        const {
          paths: { rect },
        } = this.options;

        const svg = createSvg(
          `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 80 60"
            preserveAspectRatio="none"
          >
            <path d="${rect}" />
          </svg>`,
        );

        const referenceElement = item.childNodes[0];
        item.insertBefore(svg, referenceElement);
        const svgEl = item.querySelector('svg');

        const s = Snap(svgEl);

        item.path = s.select('path');
      });
    }
  };
  /* eslint-enable */

  _initEvents = () => {
    if (this.itemsCount > 1) {
      this.navPrev.addEventListener('click', () => {
        this._navigate('prev');
      });
      this.navNext.addEventListener('click', () => {
        this._navigate('next');
      });

      const transitionEndFn = () => (this.isAnimating = false);

      this.support
        ? this.itemsList.addEventListener(transEndEventName, transitionEndFn)
        : transitionEndFn();

      // keyboard navigation events
      document.addEventListener('keydown', ({ key: evKey, code: evCode }) => {
        const key = evKey || evCode;

        switch (key) {
          // left key
          case 'ArrowLeft':
            this._navigate('prev');
            break;
          // right key
          case 'ArrowRight':
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
    const startSlider = () => {
      // check which navigation arrows should be shown
      this._toggleNavControls();

      // translate value
      const translateVal = (-1 * this.curr * 100) / this.itemsCount;
      this.itemsList.style.WebkitTransform = `translate3d(${translateVal}%,0,0)`;
      this.itemsList.style.transform = `translate3d(${translateVal}%,0,0)`;
    };

    this._morphSVGs(startSlider);
  };

  _toggleNavControls = () => {
    switch (this.curr) {
      case 0:
        this.navNext.classList.remove('disabled');
        this.navPrev.classList.add('disabled');
        break;
      case this.itemsCount - 1:
        this.navNext.classList.add('disabled');
        this.navPrev.classList.remove('disabled');
        break;
      default:
        this.navNext.classList.remove('disabled');
        this.navPrev.classList.remove('disabled');
        break;
    }
  };
}

export default SliderFx;
