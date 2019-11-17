webpackJsonp([4],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/js/components/Skills/scss/Skills.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Set everything to take full height */\n/* Main slideshow wrapper */\n#Skills_slideshow {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  height: 100vh; }\n  #Skills_slideshow ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n    #Skills_slideshow ul li {\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      float: left;\n      display: block;\n      margin: 0;\n      position: relative;\n      height: 100vh !important; }\n      #Skills_slideshow ul li > svg {\n        position: relative;\n        fill: #161517;\n        z-index: -1; }\n      #Skills_slideshow ul li:nth-child(2) > svg, #Skills_slideshow ul li:nth-child(3) > svg {\n        fill: #161517; }\n      #Skills_slideshow ul li:nth-child(4) > svg {\n        fill: #9D9E94; }\n      #Skills_slideshow ul li:nth-child(6) > svg {\n        fill: #E5B8AD; }\n  #Skills_slideshow > nav span {\n    position: absolute;\n    width: 50px;\n    height: 50px;\n    color: #fff;\n    border-radius: 50%;\n    font-size: 50px;\n    text-align: center;\n    line-height: 47px;\n    cursor: pointer;\n    font-weight: normal;\n    bottom: 30px;\n    opacity: 0.8;\n    font-family: 'Flamenco', Arial, sans-serif;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n    #Skills_slideshow > nav span:hover {\n      opacity: 1; }\n    #Skills_slideshow > nav span.disabled {\n      opacity: 0.2;\n      cursor: default; }\n      #Skills_slideshow > nav span.disabled:hover {\n        opacity: 0.2;\n        cursor: default; }\n    #Skills_slideshow > nav span.next {\n      right: 50%;\n      -webkit-transform: translateX(120%);\n      transform: translateX(120%); }\n    #Skills_slideshow > nav span.prev {\n      left: 50%;\n      -webkit-transform: translateX(-120%);\n      transform: translateX(-120%); }\n\n.slide {\n  position: absolute;\n  top: 0;\n  left: 16%;\n  right: 16%;\n  padding: 1em;\n  white-space: initial;\n  text-align: center; }\n  .slide div {\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .slide div div {\n      width: 100%;\n      height: 25vh;\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between; }\n      .slide div div img {\n        width: 15%; }\n  .slide h1, .slide blockquote {\n    margin: 0;\n    font-weight: 400;\n    font-size: 3em;\n    font-size: 3vw;\n    padding-top: 3%;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n    font-family: 'Flamenco', Arial, sans-serif; }\n  .slide h1 {\n    margin-bottom: 4%; }\n  .slide > p {\n    line-height: 1.5;\n    font-size: 0.85em;\n    font-weight: bold; }\n  .slide blockquote {\n    position: relative;\n    margin: 0;\n    padding: 1em 10% 0; }\n    .slide blockquote::before {\n      content: '\\201C';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      font-size: 3em;\n      color: rgba(43, 65, 77, 0.1);\n      z-index: -1; }\n    .slide blockquote p {\n      margin: 0;\n      line-height: 1.2; }\n    .slide blockquote + p {\n      color: rgba(43, 65, 77, 0.3); }\n\n.icon {\n  display: block;\n  padding-top: 3%;\n  position: relative;\n  margin: 0 auto 50px;\n  width: 50%;\n  max-width: 160px; }\n\n@media screen and (max-width: 32em) {\n  .slide h1, .slide blockquote {\n    font-size: 2em; } }\n\n@media screen and (max-width: 650px) and (orientation: portrait) {\n  .slide {\n    left: 6% !important;\n    right: 6% !important; }\n    .slide div div img {\n      width: 23% !important; } }\n\n@media screen and (max-height: 500px) and (orientation: landscape) {\n  .slide {\n    left: 16%;\n    right: 16%; }\n    .slide div div img {\n      width: 18%; }\n  #Skills_slideshow > nav span {\n    background: none;\n    top: 50%;\n    margin-top: -25px; }\n    #Skills_slideshow > nav span.next {\n      right: 10px;\n      -webkit-transform: translateX(0);\n      transform: translateX(0); }\n    #Skills_slideshow > nav span.prev {\n      left: 10px;\n      -webkit-transform: translateX(0);\n      transform: translateX(0); } }\n", ""]);

// exports


/***/ }),

/***/ "./resources/assets/js/components/Skills/Skills.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _SliderFx = __webpack_require__("./resources/assets/js/components/Skills/lib/SliderFx.js");

var _SliderFx2 = _interopRequireDefault(_SliderFx);

__webpack_require__("./resources/assets/js/components/Skills/scss/Skills.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgPathBack = '../imgs/skills/backand/';
var imgPathFront = '../imgs/skills/frontend/';
var imgPathOther = '../imgs/skills/other/';

var Skills = function (_Component) {
  _inherits(Skills, _Component);

  function Skills() {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).apply(this, arguments));
  }

  _createClass(Skills, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.SliderFx = new _SliderFx2.default(document.getElementById('Skills_slideshow'), {
        easing: 'cubic-bezier(.8,0,.2,1)'
      });
      this.SliderFx.init();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'Skills_slideshow', className: 'for_fade' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'slide' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathBack + 'python1.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'nodejs.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'php1.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'nginx1.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathBack + 'graphql .jpeg' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'mongo.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'mysql1.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'symfony.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathBack + 'laravel3.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'lumen-logo.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'yii2.png' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'express1.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathBack + 'git.png' }),
                  _react2.default.createElement('img', { src: imgPathOther + 'ubuntu.png' }),
                  _react2.default.createElement('img', { src: imgPathOther + 'docker.svg' }),
                  _react2.default.createElement('img', { src: imgPathBack + 'apache.png' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'slide' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'js1.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'vue.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'nuxt.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'vuex.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'ts.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'angular.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'rxjs.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'clarity.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'react.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'redux.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'redux-saga.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'flow.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'sass.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'less.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'yarn.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'webpack.png' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'div',
              { className: 'slide' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'html2.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'css2.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'jquery.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'npm.png' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('img', { src: imgPathFront + 'bootstrap1.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'enzym.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'jest.png' }),
                  _react2.default.createElement('img', { src: imgPathFront + 'eslint.png' })
                ),
                _react2.default.createElement('div', null),
                _react2.default.createElement('div', null)
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Skills;
}(_react.Component);

var _default = Skills;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(imgPathBack, 'imgPathBack', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(imgPathFront, 'imgPathFront', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(imgPathOther, 'imgPathOther', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(Skills, 'Skills', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(imgPathBack, 'imgPathBack', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(imgPathFront, 'imgPathFront', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(imgPathOther, 'imgPathOther', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(Skills, 'Skills', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Skills/Skills.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Skills/lib/SliderFx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderFx = function () {
  _createClass(SliderFx, [{
    key: '_morphSVGs',
    value: function _morphSVGs(callback) {
      var speed = this.options.speed;
      var pathCurvedLeft = this.options.paths.curve.left;
      var pathCurvedRight = this.options.paths.curve.right;
      var pathRectangle = this.options.paths.rect;
      var dir = this.old < this.curr ? 'right' : 'left';

      // morph svg path on exiting slide to "curved"
      this.items[this.old].path.stop().animate({ 'path': dir === 'right' ? pathCurvedLeft : pathCurvedRight }, speed * 0.5, mina.easeout);

      // the slider starts a bit later...
      setTimeout(function () {
        callback.call();
      }, speed * 0.2);

      // change svg path on entering slide to "curved"
      var currItem = this.items[this.curr];
      currItem.querySelector('path').setAttribute('d', dir === 'right' ? pathCurvedLeft : pathCurvedRight);
      // morph svg path on entering slide to "rectangle"
      setTimeout(function () {
        currItem.path.stop().animate({ 'path': pathRectangle }, speed * 3, mina.elastic);
      }, speed * 0.5);
    }
  }]);

  function SliderFx(el, options) {
    _classCallCheck(this, SliderFx);

    this.Modernizr = window.Modernizr;
    window.transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
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
        rect: 'M33,0h41c0,0,0,9.871,0,29.871C74,49.871,74,60,74,60H32.666h-0.125H6c0,0,0-10,0-30S6,0,6,0H33',
        curve: {
          right: 'M33,0h41c0,0,5,9.871,5,29.871C79,49.871,74,60,74,60H32.666h-0.125H6c0,0,5-10,5-30S6,0,6,0H33',
          left: 'M33,0h41c0,0-5,9.871-5,29.871C69,49.871,74,60,74,60H32.666h-0.125H6c0,0-5-10-5-30S6,0,6,0H33'
        }
      }
    };
    this.options = this.extend({}, this.optionsDefault);
    this.extend(this.options, options);
  }

  _createClass(SliderFx, [{
    key: 'extend',
    value: function extend(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }
  }, {
    key: 'init',
    value: function init() {
      this._init();
      this._initEvents();
    }
  }, {
    key: '_init',
    value: function _init() {
      var _this = this;

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
      this.itemsList.style.width = 100 * this.itemsCount + '%';
      // apply the transition
      if (this.support) {
        this.itemsList.style.WebkitTransition = '-webkit-transform ' + this.options.speed + 'ms ' + this.options.easing;
        this.itemsList.style.transition = 'transform ' + this.options.speed + 'ms ' + this.options.easing;
      }
      this.items.forEach(function (item) {
        // each item will have a width of 100 / itemsCount
        item.style.width = 100 / _this.itemsCount + '%';
      });
      // add navigation arrows if there is more than 1 item
      if (this.itemsCount > 1) {
        // add navigation arrows (the previous arrow is not shown initially):
        var nav = document.createElement('nav');
        var addArrow = function addArrow(c, content, disabled) {
          var el = document.createElement('span');
          el.className = c;
          el.innerHTML = content;
          if (disabled) {
            classie.add(el, 'disabled');
          }
          nav.appendChild(el);
          return el;
        };
        var createSvg = function createSvg(html) {
          var frag = document.createDocumentFragment();
          var temp = document.createElement('div');
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
        this.items.forEach(function (item) {
          var svg = createSvg('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none"><path d="' + _this.options.paths.rect + '"/></svg>');
          item.insertBefore(svg, item.childNodes[0]);

          var s = Snap(item.querySelector('svg'));
          item.path = s.select('path');
        });
      }
    }
  }, {
    key: '_initEvents',
    value: function _initEvents() {
      var _this2 = this;

      if (this.itemsCount > 1) {
        this.navPrev.addEventListener('click', function () {
          _this2._navigate('prev');
        });
        this.navNext.addEventListener('click', function () {
          _this2._navigate('next');
        });

        var transitionendfn = function transitionendfn() {
          _this2.isAnimating = false;
        };
        if (this.support) {
          this.itemsList.addEventListener(transEndEventName, transitionendfn);
        } else {
          transitionendfn.call();
        }

        // keyboard navigation events
        document.addEventListener('keydown', function (ev) {
          var keyCode = ev.keyCode || ev.which;
          switch (keyCode) {
            // left key
            case 37:
              _this2._navigate('prev');
              break;
            // right key
            case 39:
              _this2._navigate('next');
              break;
          }
        });
      }
    }
  }, {
    key: '_navigate',
    value: function _navigate(dir) {
      // do nothing if the itemsList is currently moving
      if (this.isAnimating || dir === 'next' && this.curr >= this.itemsCount - 1 || dir === 'prev' && this.curr <= 0) {
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
    }
  }, {
    key: '_slide',
    value: function _slide() {
      var self = this;

      function startSlider() {
        // check which navigation arrows should be shown
        self._toggleNavControls();
        // translate value
        var translateVal = -1 * self.curr * 100 / self.itemsCount;
        self.itemsList.style.WebkitTransform = 'translate3d(' + translateVal + '%,0,0)';
        self.itemsList.style.transform = 'translate3d(' + translateVal + '%,0,0)';
      }

      this._morphSVGs(startSlider);
    }
  }, {
    key: '_toggleNavControls',
    value: function _toggleNavControls() {
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
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SliderFx;
}();

var _default = SliderFx;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliderFx, 'SliderFx', '/var/www/portfolio/resources/assets/js/components/Skills/lib/SliderFx.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Skills/lib/SliderFx.js');
  leaveModule(module);
})();

;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SliderFx, 'SliderFx', '/var/www/portfolio/resources/assets/js/components/Skills/lib/SliderFx.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Skills/lib/SliderFx.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Skills/scss/Skills.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/js/components/Skills/scss/Skills.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./Skills.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./Skills.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});