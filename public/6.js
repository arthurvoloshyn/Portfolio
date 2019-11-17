webpackJsonp([6],{

/***/ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @fullpage/react-fullpage 0.1.13
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(13);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__("./node_modules/react/index.js");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_SLIDE; });
var MAIN_SELECTOR='fullpage';var ID_SELECTOR="#".concat(MAIN_SELECTOR);var DEFAULT_SECTION='.section';var DEFAULT_SLIDE='.SLIDE';

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(38);
var defined = __webpack_require__(27);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(28);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(39);
var enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(13)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(12).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(12);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(14);
var ctx = __webpack_require__(40);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(27);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(13);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(12);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(29);
var step = __webpack_require__(64);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(63)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(39);
var hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(18);
var dPs = __webpack_require__(69);
var enumBugKeys = __webpack_require__(23);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(45)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(68).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(37);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(37);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(71)(false);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(74);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(14);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(26);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(13);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(42);
var wksDefine = __webpack_require__(43);
var enumKeys = __webpack_require__(72);
var isArray = __webpack_require__(33);
var anObject = __webpack_require__(18);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(28);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(67);
var $GOPD = __webpack_require__(66);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(11);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(31).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(12);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(42);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(45)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(77);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){if(typeof window==='undefined'){return false;}try{var env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(75).default;}else{// NOTE: SSR support
exported=__webpack_require__(48).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.4 - Extensions 0.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(Vt,Zt){"use strict";var Gt="fullpage-wrapper",Ft="."+Gt,Ut="fp-responsive",_t="fp-notransition",Qt="fp-destroyed",Jt="fp-enabled",Kt="fp-viewing",qt="active",$t="."+qt,en="fp-completely",tn="fp-section",nn="."+tn,on=nn+$t,rn="fp-tableCell",ln="."+rn,an="fp-auto-height",sn="fp-normal-scroll",cn="fp-nav",un="#"+cn,fn="fp-tooltip",dn="fp-slide",vn="."+dn,pn=vn+$t,hn="fp-slides",gn="."+hn,mn="fp-slidesContainer",Sn="."+mn,bn="fp-table",wn="fp-slidesNav",yn="."+wn,En=yn+" a",e="fp-controlArrow",xn="."+e,An="fp-prev",Ln=xn+".fp-prev",Mn=xn+".fp-next";function Tn(e,t){Vt.console&&Vt.console[e]&&Vt.console[e]("fullPage: "+t)}function On(e,t){return(t=1<arguments.length?t:Zt)?t.querySelectorAll(e):null}function kn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=kn(e[r],o[r]))}return e}function Cn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Hn(){return"innerHeight"in Vt?Vt.innerHeight:Zt.documentElement.offsetHeight}function Rn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!to(o,t);)o=o[n];return o}function In(e,t){return n(e,t,"previousElementSibling")}function zn(e,t){return n(e,t,"nextElementSibling")}function Bn(e,t){if(null==t)return e.previousElementSibling;var n=Bn(e);return n&&to(n,t)?n:null}function Nn(e,t){if(null==t)return e.nextElementSibling;var n=Nn(e);return n&&to(n,t)?n:null}function jn(e){return e[e.length-1]}function Pn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?On(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Yn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Dn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Wn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Xn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function Vn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Zt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function Zn(e,t){o(e,t,!0)}function Gn(e,t){for("string"==typeof t&&(t=oo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Fn(e){for(var t=Zt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Un(e,t){return e&&1===e.nodeType?to(e,t)?e:Un(e.parentNode,t):null}function _n(e,t){r(e,e.nextSibling,t)}function Qn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=oo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Jn(){var e=Zt.documentElement;return(Vt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Kn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function qn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function $n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function eo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Vt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Zt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function to(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function no(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function oo(e){var t=Zt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function ro(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(to(o,t)||null==t)&&r.push(o),o=o[n];return r}function io(e,t){return a(e,t,"nextElementSibling")}function lo(e,t){return a(e,t,"previousElementSibling")}function ao(e,t){e.insertBefore(t,e.firstChild)}return Vt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Vt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Vt.fp_utils={$:On,deepExtend:kn,hasClass:Cn,getWindowHeight:Hn,css:Rn,until:n,prevUntil:In,nextUntil:zn,prev:Bn,next:Nn,last:jn,index:Pn,getList:l,hide:Yn,show:Dn,isArrayOrList:i,addClass:Wn,removeClass:Xn,appendTo:Vn,wrap:o,wrapAll:Zn,wrapInner:Gn,unwrap:Fn,closest:Un,after:_n,before:Qn,insertBefore:r,getScrollTop:Jn,siblings:Kn,preventDefault:qn,isFunction:$n,trigger:eo,matches:to,toggle:no,createElementFromHTML:oo,remove:ro,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:io,prevAll:lo,showError:Tn,prependTo:ao,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Cn(e,t);o&&null==n||!n?Xn(e,t):(!o&&null==n||n)&&Wn(e,t)}}},function(e,g){var t=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<Zt.domain.indexOf("alvarotrigo.com");if(!Cn(On("html"),Jt)){var r=On("html, body"),m=On("body")[0],S={};g=kn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Vt.fp_scrolloverflow?Vt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,i,c,u,a=!1,n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),o="ontouchstart"in Vt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?On(e)[0]:e,y=Hn(),E=!1,l=!0,x=!0,f=[],d={m:{up:!0,down:!0,left:!0,right:!0}};d.k=kn({},d.m);var v,s,p,h,A,L,M,T,O,k=Lt(),C={touchmove:"ontouchmove"in Vt?"touchmove":k.move,touchstart:"ontouchstart"in Vt?"touchstart":k.down},H=!1,R='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',I=kn({},g),z=!1,B={};jt(),Vt.fp_easings=kn(Vt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.2",S.setAutoScrolling=_,S.setRecordHistory=Q,S.setScrollingSpeed=J,S.setFitToSection=K,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=q,S.setAllowScrolling=$,S.setKeyboardScrolling=te,S.moveSectionUp=ne,S.moveSectionDown=oe,S.silentMoveTo=re,S.moveTo=ie,S.moveSlideRight=le,S.moveSlideLeft=ae,S.fitToSection=be,S.reBuild=se,S.setResponsive=ce,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:d,getDestinationPosition:ke,isTouch:o,c:Fe,getXmovement:pt,removeAnimation:ft,getTransforms:kt,lazyLoad:je,addAnimation:ut,performHorizontalMove:at,landscapeScroll:rt,silentLandscapeScroll:Tt,keepSlidesPosition:Oe,silentScroll:Ot,styleSlides:pe,scrollHandler:Se,getEventsPage:Mt,getMSPointer:Lt,isReallyTouch:xe,usingExtension:Rt,toggleControlArrows:it,touchStartHandler:Ae,touchMoveHandler:Ee}}},S.destroy=function(e){eo(w,"destroy",e),_(!1,"internal"),$(!0),ee(!1),te(!1),Wn(w,Qt),clearTimeout(h),clearTimeout(p),clearTimeout(s),clearTimeout(A),clearTimeout(L),Vt.removeEventListener("scroll",Se),Vt.removeEventListener("hashchange",Qe),Vt.removeEventListener("resize",st),Zt.removeEventListener("keydown",Ke),Zt.removeEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.removeEventListener(e,ue)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Zt.removeEventListener(e,de,!0)}),Rt("dragAndMove")&&S.dragAndMove.destroy(),clearTimeout(h),clearTimeout(p),e&&(Ot(0),On("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Ne(e,"src")}),On("img[data-srcset]").forEach(function(e){Ne(e,"srcset")}),ro(On(un+", "+yn+", "+xn)),Rn(On(nn),{height:"","background-color":"",padding:""}),Rn(On(vn),{width:""}),Rn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Rn(r,{overflow:"",height:""}),Xn(On("html"),Jt),Xn(m,Ut),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(Kt)&&Xn(m,e)}),On(nn+", "+vn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),Xn(e,bn+" "+qt+" "+en);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Cn(e,tn)&&!z&&e.removeAttribute("data-anchor")}),Ht(w),[ln,Sn,gn].forEach(function(e){On(e,w).forEach(function(e){Fn(e)})}),Vt.scrollTo(0,0),[tn,dn,mn].forEach(function(e){Xn(On("."+e),e)}))},S.getActiveSection=function(){return new Wt(On(on)[0])},S.getActiveSlide=function(){return Ie(On(pn,On(on)[0])[0])},S.landscapeScroll=rt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:_},S.shared={afterRenderActions:me},Vt.fullpage_api=S,ve("continuousHorizontal"),ve("scrollHorizontally"),ve("resetSliders"),ve("interlockedSlides"),ve("responsiveSlides"),ve("fadingEffect"),ve("dragAndMove"),ve("offsetSections"),ve("scrollOverflowReset"),ve("parallax"),Rt("dragAndMove")&&S.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=Zt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",Zt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Vt.getComputedStyle(t).getPropertyValue(n[o]));return Zt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=On(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(z=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var e="[data-tooltip]",n=On(g.sectionSelector.split(",").join(e+",")+e,w);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Rn(w,{height:"100%",position:"relative"}),Wn(w,Gt),Wn(On("html"),Jt),y=Hn(),Xn(w,Qt),Wn(On(g.sectionSelector,w),tn),Wn(On(g.slideSelector,w),dn),It("parallax","init");for(var e=On(nn),t=0;t<e.length;t++){var n=t,o=e[t],r=On(vn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=On(on)[0]||Wn(s,qt),u=On(on)[0],Rn(s,{height:he(s)+"px"}),g.paddingTop&&Rn(s,{"padding-top":g.paddingTop}),g.paddingBottom&&Rn(s,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[c]&&Rn(s,{"background-color":g.sectionsColor[c]}),void 0!==g.anchors[c]&&s.setAttribute("data-anchor",g.anchors[c]),l=o,a=n,void 0!==g.anchors[a]&&Cn(l,qt)&&dt(g.anchors[a],a),g.menu&&g.css3&&null!=Un(On(g.menu)[0],Ft)&&m.appendChild(On(g.menu)[0]),0<i?pe(o,r,i):g.verticalCentered&&ht(o)}var l,a,s,c;g.fixedElements&&g.css3&&On(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=Zt.createElement("div");e.setAttribute("id",cn);var t=Zt.createElement("ul");e.appendChild(t),Vn(e,m);var n=On(un)[0];Wn(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&Wn(n,"fp-show-active");for(var o="",r=0;r<On(nn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ge(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+fn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}On("ul",n)[0].innerHTML=o,Rn(On(un),{"margin-top":"-"+On(un)[0].offsetHeight/2+"px"}),Wn(On("a",On("li",On(un)[0])[Pn(On(on)[0],nn)]),qt)}(),On('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),g.fadingEffect&&S.fadingEffect&&S.fadingEffect.apply(),g.scrollOverflow&&(v=g.scrollOverflowHandler.init(g))}(),$(!0),ee(!0),_(g.autoScrolling,"internal"),ct(),At(),"complete"===Zt.readyState&&_e(),Vt.addEventListener("load",_e),g.scrollOverflow||me(),Vt.addEventListener("scroll",Se),Vt.addEventListener("hashchange",Qe),Vt.addEventListener("blur",nt),Vt.addEventListener("resize",st),Zt.addEventListener("keydown",Ke),Zt.addEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.addEventListener(e,ue)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){fe(e,!1)}),["mouseleave","touchend"].forEach(function(e){fe(e,!0)})),Rt("dragAndMove")&&S.dragAndMove.turnOffTouch());var N,j,P,Y=!1,D=0,W=0,X=0,V=0,Z=(new Date).getTime(),G=0,F=0,U=y;return S}function _(e,t){e||Ot(0),Nt("autoScrolling",e,t);var n=On(on)[0];if(g.autoScrolling&&!g.scrollBar)Rn(r,{overflow:"hidden",height:"100%"}),Q(I.recordHistory,"internal"),Rn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Ot(n.offsetTop);else if(Rn(r,{overflow:"visible",height:"initial"}),Q(!1,"internal"),Rn(w,{"-ms-touch-action":"","touch-action":""}),Ht(w),null!=n){var o=ze(n.offsetTop);o.element.scrollTo(0,o.options)}eo(w,"setAutoScrolling",e)}function Q(e,t){Nt("recordHistory",e,t)}function J(e,t){"internal"!==t&&g.fadingEffect&&S.fadingEffect&&S.fadingEffect.update(e),Nt("scrollingSpeed",e,t)}function K(e,t){Nt("fitToSection",e,t)}function q(e){e?(function(){var e,t="";Vt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Zt.createElement("div")?"wheel":void 0!==Zt.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==n?Zt[e](t+"MozMousePixelScroll",Me,!1):Zt[e](t+n,Me,!1)}(),w.addEventListener("mousedown",$e),w.addEventListener("mouseup",et)):(Zt.addEventListener?(Zt.removeEventListener("mousewheel",Me,!1),Zt.removeEventListener("wheel",Me,!1),Zt.removeEventListener("MozMousePixelScroll",Me,!1)):Zt.detachEvent("onmousewheel",Me),w.removeEventListener("mousedown",$e),w.removeEventListener("mouseup",et))}function $(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"m")}):Ct(t,"all","m"),eo(w,"setAllowScrolling",{value:t,directions:e})}function ee(e){e?(q(!0),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,ye,{passive:!1}),m.addEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}),e.addEventListener(C.touchstart,Ae),e.addEventListener(C.touchmove,Ee,{passive:!1}))}}()):(q(!1),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,Ee,{passive:!1}),m.removeEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}))}}())}function te(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"k")}):(Ct(t,"all","k"),g.keyboardScrolling=t)}function ne(){var e=In(On(on)[0],nn);e||!g.loopTop&&!g.continuousVertical||(e=jn(On(nn))),null!=e&&Ce(e,null,!0)}function oe(){var e=zn(On(on)[0],nn);e||!g.loopBottom&&!g.continuousVertical||(e=On(nn)[0]),null!=e&&Ce(e,null,!1)}function re(e,t){J(0,"internal"),ie(e,t),J(I.scrollingSpeed,"internal")}function ie(e,t){var n=St(e);void 0!==t?bt(e,t):null!=n&&Ce(n)}function le(e){Te("right",e)}function ae(e){Te("left",e)}function se(e){if(!Cn(w,Qt)){E=!0,y=Hn();for(var t=On(nn),n=0;n<t.length;++n){var o=t[n],r=On(gn,o)[0],i=On(vn,o);g.verticalCentered&&Rn(On(ln,o),{height:gt(o)+"px"}),Rn(o,{height:he(o)+"px"}),1<i.length&&rt(r,On(pn,r)[0])}g.scrollOverflow&&v.createScrollBarForAll();var l=Pn(On(on)[0],nn);l&&!Rt("fadingEffect")&&re(l+1),E=!1,$n(g.afterResize)&&e&&g.afterResize.call(w,Vt.innerWidth,Vt.innerHeight),$n(g.afterReBuild)&&!e&&g.afterReBuild.call(w),eo(w,"afterRebuild")}}function ce(e){var t=Cn(m,Ut);e?t||(_(!1,"internal"),K(!1,"internal"),Yn(On(un)),Wn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSections(),eo(w,"afterResponsive",e),g.scrollOverflow&&v.createScrollBarForAll()):t&&(_(I.autoScrolling,"internal"),K(I.autoScrolling,"internal"),Dn(On(un)),Xn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSlides(),eo(w,"afterResponsive",e))}function ue(e){var t=e.target;t&&Un(t,un+" a")?function(e){qn(e);var t=Pn(Un(this,un+" li"));Ce(On(nn)[t])}.call(t,e):to(t,".fp-tooltip")?function(){eo(Bn(this),"click")}.call(t):to(t,xn)?function(){var e=Un(this,nn);Cn(this,An)?d.m.left&&ae(e):d.m.right&&le(e)}.call(t,e):to(t,En)||null!=Un(t,En)?function(e){qn(e);var t=On(gn,Un(this,nn))[0],n=On(vn,t)[Pn(Un(this,"li"))];rt(t,n)}.call(t,e):Un(t,g.menu+" [data-menuanchor]")&&function(e){!On(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(qn(e),ie(this.getAttribute("data-menuanchor")))}.call(t,e)}function fe(e,t){Zt["fp_"+e]=t,Zt.addEventListener(e,de,!0)}function de(t){t.target!=Zt&&g.normalScrollElements.split(",").forEach(function(e){null!=Un(t.target,e)&&ee(Zt["fp_"+t.type])})}function ve(e){var t="fp_"+e+"Extension";B[e]=g[e+"Key"],S[e]=void 0!==Vt[t]?new Vt[t]:null,S[e]&&S[e].c(e)}function pe(e,t,n){var o=100*n,r=100/n,i=Zt.createElement("div");i.className=hn,Zn(t,i);var l,a,s=Zt.createElement("div");s.className=mn,Zn(t,s),Rn(On(Sn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[oo('<div class="fp-controlArrow fp-prev"></div>'),oo('<div class="fp-controlArrow fp-next"></div>')],_n(On(gn,l)[0],a),"#fff"!==g.controlArrowColor&&(Rn(On(Mn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Rn(On(Ln,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||Yn(On(Ln,l))),g.slidesNavigation&&function(e,t){Vn(oo('<div class="'+wn+'"><ul></ul></div>'),e);var n=On(yn,e)[0];Wn(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)Vn(oo('<li><a href="#"><span class="fp-sr-only">'+ge(o,"Slide")+"</span><span></span></a></li>"),On("ul",n)[0]);Rn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Wn(On("a",On("li",n)[0]),qt)}(e,n)),t.forEach(function(e){Rn(e,{width:r+"%"}),g.verticalCentered&&ht(e)});var c=On(pn,e)[0];null!=c&&(0!==Pn(On(on),nn)||0===Pn(On(on),nn)&&0!==Pn(c))?(Tt(c,"internal"),Wn(c,"fp-initial")):Wn(t[0],qt)}function he(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Hn()}function ge(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function me(){var e,t=On(on)[0];Wn(t,en),je(t),Pe(t),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),(!(e=St(Je().section))||void 0!==e&&Pn(e)===Pn(u))&&$n(g.afterLoad)&&He("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:Pn(t,nn)}),$n(g.afterRender)&&He("afterRender"),eo(w,"afterRender")}function Se(){var e;if(eo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Rt("dragAndMove"))&&!Bt()){var t=Rt("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):Jn(),n=0,o=t+Hn()/2,r=(Rt("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Hn())===t,i=On(nn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Cn(e=i[n],qt)){Y=!0;var a,s,c=On(on)[0],u=Pn(c,nn)+1,f=vt(e),d=e.getAttribute("data-anchor"),v=Pn(e,nn)+1,p=On(pn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=Pn(p)),x&&(Wn(e,qt),Xn(Kn(e),qt),It("parallax","afterLoad"),$n(g.onLeave)&&He("onLeave",h),$n(g.afterLoad)&&He("afterLoad",h),g.resetSliders&&S.resetSliders&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),De(c),je(e),Pe(e),dt(d,v-1),g.anchors.length&&(b=d),yt(a,s,d)),clearTimeout(A),A=setTimeout(function(){Y=!1},100)}g.fitToSection&&(clearTimeout(L),L=setTimeout(function(){g.fitToSection&&On(on)[0].offsetHeight<=y&&be()},g.fitToSectionDelay))}}function be(){x&&(E=!0,Ce(On(on)[0]),E=!1)}function we(e){if(d.m[e]){var t="down"===e?oe:ne;if(S.scrollHorizontally&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(On(on)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ye(e){g.autoScrolling&&xe(e)&&qn(e)}function Ee(e){var t=Un(e.target,nn);if(xe(e)){g.autoScrolling&&qn(e);var n=Mt(e);X=n.y,V=n.x,On(gn,t).length&&Math.abs(W-V)>Math.abs(D-X)?!a&&Math.abs(W-V)>Vt.innerWidth/100*g.touchSensitivity&&(V<W?d.m.right&&le(t):d.m.left&&ae(t)):g.autoScrolling&&x&&Math.abs(D-X)>Vt.innerHeight/100*g.touchSensitivity&&(X<D?we("down"):D<X&&we("up"))}}function xe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ae(e){if(g.fitToSection&&(O=!1),xe(e)){var t=Mt(e);D=t.y,W=t.x}}function Le(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Me(e){var t=(new Date).getTime(),n=Cn(On(".fp-completely")[0],sn);if(!d.m.down&&!d.m.up)return qn(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||Vt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<f.length&&f.shift(),f.push(Math.abs(o)),g.scrollBar&&qn(e);var a=t-Z;if(Z=t,200<a&&(f=[]),x&&!zt()){var s=Le(f,10);Le(f,70)<=s&&l&&we(r<0?"down":"up")}return!1}g.fitToSection&&(O=!1)}function Te(e,t){var n=null==t?On(on)[0]:t,o=On(gn,n)[0];if(!(null==o||zt()||a||On(vn,o).length<2)){var r=On(pn,o)[0],i=null;if(null==(i="left"===e?In(r,vn):zn(r,vn))){if(!g.loopHorizontal)return;var l=Kn(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,rt(o,i,e)}}function Oe(){for(var e=On(pn),t=0;t<e.length;t++)Tt(e[t],"internal")}function ke(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Rt("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():G<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==Nn(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),G=o}function Ce(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:ke(e),yMovement:vt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Pn(e,nn),activeSlide:On(pn,e)[0],activeSection:On(on)[0],leavingSection:Pn(On(on),nn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&Jn()===i.dtop&&!Cn(e,an))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=Pn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,$n(g.onLeave)&&!1===He("onLeave",i))return}var a;It("parallax","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?Qn(On(on)[0],io(s.activeSection,nn)):_n(On(on)[0],lo(s.activeSection,nn).reverse()),Ot(On(on)[0].offsetTop),Oe(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=vt(s.element),s.leavingSection=Pn(s.activeSection,nn)+1,s.sectionIndex=Pn(s.element,nn),eo(On(Ft)[0],"onContinuousVertical",s),i=s),Rt("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||De(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),Wn(e,qt),Xn(Kn(e),qt),je(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,yt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";mt(t,!0),g.scrollingSpeed?(clearTimeout(p),p=setTimeout(function(){Be(e)},g.scrollingSpeed)):Be(e)}else{var n=ze(e.dtop);S.test.top=-e.dtop+"px",Pt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Be(e)},30):Be(e)})}}(i),b=i.anchorLink,dt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?On(nn).length-1:0)}}var s}function He(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Re(On(on)[0]),slide:Ie(On(pn,On(on)[0])[0])}},onLeave:function(){return{origin:Re(r.activeSection),destination:Re(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Re(r.section),origin:Ie(r.prevSlide),destination:Ie(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(eo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Re(e){return e?new Wt(e):null}function Ie(e){return e?new Xt(e):null}function ze(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=On(Ft)[0]):(t.options=e,t.element=Vt),t}function Be(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Qn(On(nn)[0],t.wrapAroundElements):_n(On(nn)[On(nn).length-1],t.wrapAroundElements),Ot(On(on)[0].offsetTop),Oe(),t.sectionIndex=Pn(t.element,nn),t.leavingSection=Pn(t.activeSection,nn)+1),$n(g.afterLoad)&&!e.localIsResizing&&He("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),It("parallax","afterLoad"),Rt("scrollOverflowReset")&&S.scrollOverflowReset.reset(),Rt("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||Pe(e.element),Wn(e.element,en),Xn(Kn(e.element),en),x=!0,$n(e.callback)&&e.callback()}function Ne(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function je(e){g.lazyLoading&&On("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",We(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Ne(n,e)}),to(n,"source")){var e=Un(n,"video, audio");e&&e.load()}})}function Pe(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ye(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ye(e)}})}function Ye(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function De(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function We(e){var t=On(pn,e);return t.length&&(e=t[0]),e}function Xe(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function Ve(e){var t=function(){if(Zt.domain.length){for(var e=Zt.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=Xe(n[0]),r=Xe(n[1]),i=Xe(n[2]),l=Xe(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length,s=void 0!==B[e]&&B[e].length;if(!s&&a)return!1;var c=s?Xe(B[e]):"",u=1<(c=c.split("_")).length&&-1<c[1].indexOf(e,c[1].length-e.length);return!(c[0].indexOf(t,c[0].length-t.length)<0&&a&&l!=c[0])&&u||!a}function Ze(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(j)&&(clearTimeout(P),P=setTimeout(Ge,900))})}function Ge(){H=!1}function Fe(e){j=Zt.createElement("div"),N=Xe("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),j.innerHTML=N,j=j.firstChild,"MutationObserver"in Vt&&new MutationObserver(Ze).observe(Zt.body,{childList:!0,subtree:!1}),Rt(e)&&S[e]&&(Ve(e)||(Ue(),setInterval(Ue,2e3)))}function Ue(){j&&(H||(Math.random()<.5?ao(m,j):Vn(j,m),H=!0),j.setAttribute("style",Xe("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Xe("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function _e(){var e=Je(),t=e.section,n=e.slide;t&&(g.animateAnchor?bt(t,n):re(t,n))}function Qe(){if(!Y&&!g.lockAnchors){var e=Je(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;t&&t.length&&(t&&t!==b&&!o||r||!a&&i!=n)&&bt(t,n)}}function Je(){var e,t,n=Vt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ke(e){clearTimeout(M);var t=Zt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=Zt.activeElement,u=tt(We(On(on)[0]));function f(e){return qn(e),u[0]?u[0].focus():null}(t=e,n=tt(Zt),o=n.indexOf(Zt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ie(Un(i,vn)),a=Re(Un(i,nn)),l||a)&&(c?null==Un(c,on+","+on+" "+pn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&qn(e))}(e):to(t,"textarea")||to(t,"input")||to(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&qn(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey;if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:d.k.up&&ne();break;case 32:if(t&&d.k.up){ne();break}case 40:case 34:d.k.down&&oe();break;case 36:d.k.up&&ie(1);break;case 35:d.k.down&&ie(On(nn).length);break;case 37:d.k.left&&ae();break;case 39:d.k.right&&le()}}(e)},150))}function qe(e){l&&(c=e.ctrlKey)}function $e(e){2==e.which&&(F=e.pageY,w.addEventListener("mousemove",ot))}function et(e){2==e.which&&w.removeEventListener("mousemove",ot)}function tt(e){return[].slice.call(On(R,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){c=l=!1}function ot(e){x&&(e.pageY<F&&d.m.up?ne():e.pageY>F&&d.m.down&&oe()),F=e.pageY}function rt(e,t,n){var o=Un(e,nn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Pn(t),section:o,sectionIndex:Pn(o,nn),anchorLink:o.getAttribute("data-anchor"),slidesNav:On(yn,o)[0],slideAnchor:xt(t),prevSlide:On(pn,o)[0],prevSlideIndex:Pn(On(pn,o)[0]),localIsResizing:E};r.xMovement=pt(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(x=!1),It("parallax","applyHorizontal",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&$n(g.onSlideLeave)&&!1===He("onSlideLeave",r)?a=!1:(Wn(t,qt),Xn(Kn(t),qt),r.localIsResizing||(De(r.prevSlide),je(t)),it(r),Cn(o,qt)&&!r.localIsResizing&&yt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Bt()?lt(r):at(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Rt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function it(e){!g.loopHorizontal&&g.controlArrows&&(no(On(Ln,e.section),0!==e.slideIndex),no(On(Mn,e.section),null!=Nn(e.destiny)))}function lt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(Xn(On($t,t),qt),Wn(On("a",On("li",t)[n]),qt)),e.localIsResizing||(It("parallax","afterSlideLoads"),$n(g.afterSlideLoad)&&He("afterSlideLoad",e),x=!0,Pe(e.destiny)),a=!1,Rt("interlockedSlides")&&S.interlockedSlides.apply(e)}function at(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Rn(ut(On(Sn,e)),kt(r)),h=setTimeout(function(){n&&lt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),Pt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&lt(t)})}function st(){if(eo(w,"onResize"),ct(),n){var e=Zt.activeElement;if(!to(e,"textarea")&&!to(e,"input")&&!to(e,"select")){var t=Hn();Math.abs(t-U)>20*Math.max(U,t)/100&&(s=setTimeout(function(){se(!0),U=t},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(s),s=setTimeout(function(){se(!0)},350)}function ct(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&Vt.innerWidth<e,o=t&&Vt.innerHeight<t;e&&t?ce(n||o):e?ce(n):t&&ce(o)}function ut(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return Xn(e,_t),Rn(e,{"-webkit-transition":t,transition:t})}function ft(e){return Wn(e,_t)}function dt(e,t){var n,o,r,i;n=e,o=On(g.menu)[0],g.menu&&null!=o&&(Xn(On($t,o),qt),Wn(On('[data-menuanchor="'+n+'"]',o),qt)),r=e,i=t,g.navigation&&null!=On(un)[0]&&(Xn(On($t,On(un)[0]),qt),Wn(r?On('a[href="#'+r+'"]',On(un)[0]):On("a",On("li",On(un)[0])[i]),qt))}function vt(e){var t=Pn(On(on)[0],nn),n=Pn(e,nn);return t==n?"none":n<t?"up":"down"}function pt(e,t){return e==t?"none":t<e?"left":"right"}function ht(e){if(!Cn(e,bn)){var t=Zt.createElement("div");t.className=rn,t.style.height=gt(e)+"px",Wn(e,bn),Gn(e,t)}}function gt(e){var t=he(e);if(g.paddingTop||g.paddingBottom){var n=e;Cn(n,tn)||(n=Un(e,nn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function mt(e,t){t?ut(w):ft(w),clearTimeout(T),Rn(w,kt(e)),S.test.translate3d=e,T=setTimeout(function(){Xn(w,_t)},10)}function St(e){var t=On(nn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=On(nn)[n]}return t}function bt(e,t){var n=St(e);if(null!=n){var o,r,i,l=(null==(i=On(vn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=On(vn,r)[o]),i);xt(n)===b||Cn(n,qt)?wt(l):Ce(n,function(){wt(l)})}}function wt(e){null!=e&&rt(Un(e,gn),e)}function yt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Et(r+"/"+(i=t))):(null!=e&&(i=t),Et(n))),At()}function Et(e){if(g.recordHistory)location.hash=e;else if(n||o)Vt.history.replaceState(void 0,void 0,"#"+e);else{var t=Vt.location.href.split("#")[0];Vt.location.replace(t+"#"+e)}}function xt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Pn(e);return null==t&&(t=n),t}function At(){var e=On(on)[0],t=On(pn,e)[0],n=xt(e),o=xt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Kt+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),Wn(m,Kt+"-"+r)}function Lt(){return Vt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Mt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,o&&xe(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Tt(e,t){J(0,"internal"),void 0!==t&&(E=!0),rt(Un(e,gn),e),void 0!==t&&(E=!1),J(I.scrollingSpeed,"internal")}function Ot(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)mt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Rn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=ze(t);Yt(n.element,n.options)}}function kt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ct(t,e,n){"all"!==e?d[n][e]=t:Object.keys(d[n]).forEach(function(e){d[n][e]=t})}function Ht(e){return Rn(e,{"-webkit-transition":"none",transition:"none"})}function Rt(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function It(e,t,n){if(Rt(e))return S[e][t](n)}function zt(){return Rt("dragAndMove")&&S.dragAndMove.isAnimating}function Bt(){return Rt("dragAndMove")&&S.dragAndMove.isGrabbing}function Nt(e,t,n){g[e]=t,"internal"!==n&&(I[e]=t)}function jt(){t||(Tn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Tn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Cn(On("html"),Jt)?Tn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Tn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Tn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Tn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Tn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(On("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(On("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(Tn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&Tn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&Tn("error",'"'+t+'" is is being used by another element `name` property'))}))}function Pt(t,n,o,r){var e,i=(e=t).self!=Vt&&Cn(e,hn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?Jn():e.offsetTop,l=n-i,a=0;O=!0;var s=function(){if(O){var e=n;a+=20,o&&(e=Vt.fp_easings[g.easing](a,i,l,o)),Yt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Yt(e,t){!g.autoScrolling||g.scrollBar||e.self!=Vt&&Cn(e,hn)?e.self!=Vt&&Cn(e,hn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Dt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Pn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Wt(e){Dt.call(this,e,nn)}function Xt(e){Dt.call(this,e,vn)}jt()}}),window.jQuery&&window.fullpage&&function(n,o){"use strict";n&&o?n.fn.fullpage=function(e){var t=new o(this[0],e);Object.keys(t).forEach(function(e){n.fn.fullpage[e]=t[e]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 50 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(50);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.0.4\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;margin-top:-32px;top:50%;opacity:1;-webkit-transform:translateZ(0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(53);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(51)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(33);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(55);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(40);
var IObject = __webpack_require__(38);
var toObject = __webpack_require__(20);
var toLength = __webpack_require__(36);
var asc = __webpack_require__(56);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(15);
var $find = __webpack_require__(57)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(29)(KEY);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(15);
var core = __webpack_require__(12);
var fails = __webpack_require__(7);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(20);
var $keys = __webpack_require__(11);

__webpack_require__(59)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(20);
var IE_PROTO = __webpack_require__(24)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(32);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(15);
var redefine = __webpack_require__(14);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(62);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(30);
var getKeys = __webpack_require__(11);
var redefine = __webpack_require__(14);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(21);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(22);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(28);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(31).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(18);
var getKeys = __webpack_require__(11);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(70);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(11);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(22);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(13)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(49);_this.state={initialized:false,sectionCount:0,slideCount:0};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){this.log('React Lifecycle: componentDidUpdate()');var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// NOTE: if fullpage props have changed we need to rebuild
if(this.props.sectionsColor!==prevProps.sectionsColor){this.log('rebuilding due to a change in fullpage.js props');this.destroy();this.init(this.buildOptions());return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.destroy();this.init(this.buildOptions());}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?_selectors__WEBPACK_IMPORTED_MODULE_9__[/* DEFAULT_SECTION */ "a"]:_this$props$sectionSe;var _document$querySelect=document.querySelectorAll(sectionSelector),length=_document$querySelect.length;return length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?_selectors__WEBPACK_IMPORTED_MODULE_9__[/* DEFAULT_SLIDE */ "b"]:_this$props$slideSele;var _document$querySelect2=document.querySelectorAll(slideSelector),length=_document$querySelect2.length;return length;}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage(_selectors__WEBPACK_IMPORTED_MODULE_9__[/* ID_SELECTOR */ "c"],opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props2;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props2=this.props)[lastEvent].apply(_this$props2,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_9__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(3);
var redefine = __webpack_require__(14);
var fails = __webpack_require__(7);
var defined = __webpack_require__(27);
var wks = __webpack_require__(0);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(76)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/js/components/Portfolio/scss/Portfolio.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("./node_modules/css-loader/index.js!./resources/assets/js/components/Portfolio/scss/common/base.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Hammersmith+One|Arbutus+Slab);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Luckiest+Guy);", ""]);

// module
exports.push([module.i, ".flex {\n  display: flex !important; }\n\n.none {\n  display: none !important; }\n\n.Pattern {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 100vh; }\n  .Pattern .technologies-container {\n    z-index: 100;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n    .Pattern .technologies-container .technologies {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center; }\n      .Pattern .technologies-container .technologies div {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center; }\n        .Pattern .technologies-container .technologies div div {\n          display: block;\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 100px;\n          height: 100px;\n          margin-left: 20px;\n          margin-right: 20px;\n          margin-top: 20px; }\n    .Pattern .technologies-container .description {\n      max-width: 600px;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      padding-left: 20px;\n      padding-right: 20px; }\n      @media (max-height: 400px) {\n        .Pattern .technologies-container .description {\n          margin-top: 10px !important;\n          margin-bottom: 10px !important; }\n          .Pattern .technologies-container .description p {\n            line-height: 22px !important; } }\n    .Pattern .technologies-container .rotate_button figure {\n      margin-bottom: 30px !important;\n      width: 200px;\n      height: 60px;\n      cursor: pointer;\n      perspective: 500px;\n      -webkit-perspective: 500px; }\n      @media (max-height: 400px) {\n        .Pattern .technologies-container .rotate_button figure {\n          margin-bottom: 10px !important; } }\n      .Pattern .technologies-container .rotate_button figure:hover div {\n        transform: rotateX(-90deg); }\n      .Pattern .technologies-container .rotate_button figure div {\n        height: 100%;\n        transform-style: preserve-3d;\n        -webkit-transform-style: preserve-3d;\n        transition: 0.25s;\n        -webkit-transition: 0.25s; }\n      .Pattern .technologies-container .rotate_button figure span {\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        box-sizing: border-box;\n        font-family: 'Source Sans Pro', sans-serif;\n        line-height: 50px;\n        font-size: 17pt;\n        text-align: center;\n        text-transform: uppercase; }\n      .Pattern .technologies-container .rotate_button figure span:nth-child(1) {\n        transform: translate3d(0, 0, 30px);\n        -webkit-transform: translate3d(0, 0, 30px); }\n      .Pattern .technologies-container .rotate_button figure span:nth-child(2) {\n        transform: rotateX(90deg) translate3d(0, 0, 30px);\n        -webkit-transform: rotateX(90deg) translate3d(0, 0, 30px); }\n  .Pattern .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .Pattern .logo-container img {\n      width: 300px; }\n      @media (max-height: 400px) {\n        .Pattern .logo-container img {\n          width: 120px !important; } }\n    .Pattern .logo-container .header-container {\n      text-align: center !important; }\n      .Pattern .logo-container .header-container .header {\n        display: block; }\n\n@media (max-width: 500px), (max-height: 400px) {\n  .Pattern .technologies-container .technologies {\n    margin-bottom: 10px !important; }\n    .Pattern .technologies-container .technologies div div {\n      background-size: 50px !important;\n      width: 50px !important;\n      height: 50px !important; }\n  .Pattern .technologies-container .description {\n    margin-top: 0px !important;\n    margin-bottom: 20px;\n    font-size: 16px !important;\n    line-height: 22px; }\n    .Pattern .technologies-container .description p {\n      margin-top: 15px !important;\n      margin-bottom: 5px !important;\n      font-size: 17px !important;\n      max-width: 300px !important; }\n  .Pattern .logo-container img {\n    width: 150px; }\n  .Pattern .logo-container .logoText {\n    font-size: 40px !important; }\n  .Pattern .logo-container .paragraph {\n    font-size: 17px !important;\n    max-width: 300px !important; }\n  .Pattern .logo-container .rotate_button figure {\n    margin-bottom: 15px !important; }\n  .Pattern .arrow {\n    background-size: 40px !important;\n    width: 40px !important;\n    height: 40px !important; } }\n\n@media (max-width: 1150px) {\n  .Pattern .technologies-container .technologies {\n    flex-direction: column;\n    margin-bottom: 50px; } }\n\n@media (max-height: 850px) {\n  .Pattern .technologies-container div {\n    justify-content: space-between !important; }\n  .Pattern .technologies-container .technologies {\n    flex-direction: column;\n    margin-bottom: 50px; }\n    .Pattern .technologies-container .technologies div div {\n      background-size: 50px !important;\n      width: 50px !important;\n      height: 50px !important; } }\n\n@media (max-height: 650px) and (orientation: landscape) {\n  .Pattern .technologies-container .description p {\n    display: none !important; }\n  .Pattern .logo-container .paragraph {\n    max-width: none !important; }\n  .Pattern .header {\n    margin-top: 0px !important; } }\n\n.toTopAnchor {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  display: block;\n  background-image: url(/imgs/totop.svg);\n  background-position: center;\n  background-size: 40px;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  cursor: pointer; }\n\n@media (max-height: 500px) {\n  .toTopAnchor {\n    display: none !important; } }\n\n@font-face {\n  font-family: \"YS Text\";\n  src: url(\"/fonts/yandex/YandexSansText-Light.eot\");\n  src: url(\"/fonts/yandex/YandexSansText-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/yandex/YandexSansText-Light.woff2\") format(\"woff2\"), url(\"/fonts/yandex/YandexSansText-Light.woff\") format(\"woff\"), url(\"/fonts/yandex/YandexSansText-Light.ttf\") format(\"truetype\"), url(\"/fonts/yandex/YandexSansText-Light.svg#YSText-Light\") format(\"svg\");\n  font-weight: 300;\n  font-style: normal;\n  font-display: swap; }\n\n.Yandex {\n  background: #ecf0f1; }\n  .Yandex p, .Yandex span {\n    font-family: \"YS Text\";\n    font-weight: 300;\n    font-style: normal;\n    font-stretch: normal; }\n  .Yandex .technologies-container .technologies {\n    width: 700px;\n    height: 100px;\n    background-image: url(/imgs/yandex/yandex-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .Yandex .technologies-container .description p {\n    font-size: 17px;\n    color: black;\n    text-align: center;\n    line-height: 30px; }\n    .Yandex .technologies-container .description p b {\n      color: #ED2025; }\n  .Yandex .technologies-container .rotate_button figure span {\n    border: 5px solid #ED2025; }\n  .Yandex .technologies-container .rotate_button figure span:nth-child(1) {\n    color: black; }\n  .Yandex .technologies-container .rotate_button figure span:nth-child(2) {\n    color: white;\n    background: #ED2025; }\n  .Yandex .logo-container img {\n    width: 300px; }\n  .Yandex .logo-container p {\n    font-size: 17px;\n    color: black;\n    letter-spacing: 0.62px;\n    line-height: 42px;\n    font-weight: 300;\n    text-align: center;\n    z-index: 100; }\n    .Yandex .logo-container p b {\n      color: #ED2025; }\n  .Yandex .arrow {\n    display: block;\n    background-image: url(/imgs/down-arrow-red.svg);\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer; }\n  .Yandex .show {\n    background-image: url(/imgs/down-arrow-red.svg); }\n  .Yandex .hide {\n    background-image: url(/imgs/cancel.svg); }\n  @media (max-width: 750px) {\n    .Yandex .technologies-container .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/yandex/yandex-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .Yandex .technologies-container .technologies {\n      width: 250px !important;\n      height: 140px !important;\n      background-image: url(/imgs/yandex/yandex-mobile.png) !important; } }\n\n.Smoke_Zone {\n  background: black; }\n  .Smoke_Zone .technologies-container .technologies div div {\n    background-size: contain !important; }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(1) div:nth-child(1) {\n    background-image: url(/imgs/smoke-zone/apache.png);\n    background-size: 150px;\n    width: 150px;\n    height: 150px; }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(1) div:nth-child(2) {\n    background-image: url(/imgs/smoke-zone/javascript.svg); }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(1) div:nth-child(3) {\n    background-image: url(/imgs/smoke-zone/jq.svg); }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(2) div:nth-child(1) {\n    background-image: url(/imgs/smoke-zone/mvc.svg); }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(2) div:nth-child(2) {\n    background-image: url(/imgs/smoke-zone/mysql.svg); }\n  .Smoke_Zone .technologies-container .technologies div:nth-child(2) div:nth-child(3) {\n    background-image: url(/imgs/smoke-zone/php.svg); }\n  .Smoke_Zone .technologies-container .description p {\n    font-family: 'Roboto';\n    max-width: 600px;\n    font-size: 18px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: #C80085;\n    text-align: center; }\n  .Smoke_Zone .technologies-container .rotate_button {\n    display: none; }\n  .Smoke_Zone .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .Smoke_Zone .logo-container img {\n      width: 300px;\n      -webkit-filter: drop-shadow(0px 0px 15px #9937AC);\n      filter: drop-shadow(0px 0px 15px #9937AC); }\n    .Smoke_Zone .logo-container .header {\n      font-family: 'OpenSans';\n      text-transform: uppercase;\n      color: white;\n      font-size: 50px;\n      font-weight: 600;\n      text-shadow: #9937ac 5px 5px 8px;\n      z-index: 100;\n      margin-bottom: 0px;\n      text-align: center; }\n      @media (max-height: 400px) {\n        .Smoke_Zone .logo-container .header {\n          font-size: 30px; } }\n    .Smoke_Zone .logo-container .paragraph {\n      font-family: 'Roboto';\n      font-size: 20px;\n      color: #C80085;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      z-index: 100;\n      margin-top: 0px;\n      text-align: center; }\n  .Smoke_Zone .arrow {\n    display: block;\n    background-image: url(/imgs/down-arrow_white.svg);\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0px 0px 15px #9937AC);\n    filter: drop-shadow(0px 0px 15px #9937AC); }\n  .Smoke_Zone .show {\n    background-image: url(/imgs/down-arrow_white.svg); }\n  .Smoke_Zone .hide {\n    background-image: url(/imgs/cancel_white.svg); }\n\n@media (max-width: 500px) {\n  .Smoke_Zone .logo-container img {\n    max-width: 200px; }\n  .Smoke_Zone .logo-container .header {\n    font-size: 36px !important;\n    text-align: center; }\n  .Smoke_Zone .technologies-container .description p span {\n    display: none; }\n  .Smoke_Zone .technologies-container .technologies {\n    flex-direction: column;\n    margin-bottom: 50px; }\n    .Smoke_Zone .technologies-container .technologies div div {\n      width: 50px !important;\n      height: 50px !important; }\n    .Smoke_Zone .technologies-container .technologies div:nth-child(1) div:nth-child(1) {\n      width: 100px !important;\n      height: 100px !important; } }\n\n.History24 {\n  background: black; }\n  .History24 .technologies-container .technologies {\n    width: 900px;\n    height: 100px;\n    background-image: url(/imgs/history/history-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .History24 .technologies-container .description {\n    max-width: 800px !important; }\n    .History24 .technologies-container .description p {\n      font-family: 'Luckiest Guy', cursive;\n      max-width: 800px;\n      font-size: 20px;\n      margin-top: 50px;\n      margin-bottom: 50px;\n      padding-left: 20px;\n      padding-right: 20px;\n      color: white;\n      text-align: center;\n      font-weight: 100;\n      line-height: 30px; }\n  .History24 .technologies-container .rotate_button {\n    display: none; }\n  .History24 .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .History24 .logo-container img {\n      width: 300px;\n      -webkit-filter: drop-shadow(0px 0px 15px black);\n      filter: drop-shadow(0px 0px 15px black); }\n    .History24 .logo-container .header {\n      font-family: 'Luckiest Guy', cursive;\n      text-transform: uppercase;\n      color: white;\n      font-size: 50px;\n      z-index: 100;\n      text-align: center; }\n      @media (max-height: 400px) {\n        .History24 .logo-container .header {\n          font-size: 30px; } }\n    .History24 .logo-container .paragraph {\n      font-family: 'Luckiest Guy', cursive;\n      font-size: 20px;\n      color: white;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      text-align: center;\n      z-index: 100; }\n  .History24 .arrow {\n    display: block;\n    background-image: url(/imgs/down-arrow_white.svg);\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0px 0px 15px black);\n    filter: drop-shadow(0px 0px 15px black); }\n  .History24 .show {\n    background-image: url(/imgs/down-arrow_white.svg); }\n  .History24 .hide {\n    background-image: url(/imgs/cancel_white.svg); }\n  @media (max-width: 850px) {\n    .History24 .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/history/history-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .History24 .logo-container img {\n      max-width: 200px; }\n    .History24 .logo-container .header {\n      font-size: 36px !important;\n      text-align: center; }\n    .History24 .technologies-container .description p span {\n      display: none; }\n    .History24 .technologies-container .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/history/history-mobile.png) !important; } }\n\n.WellHome {\n  background: white; }\n  .WellHome .technologies-container .technologies {\n    width: 700px;\n    height: 100px;\n    background-image: url(/imgs/welhome/welhome-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .WellHome .technologies-container .description p {\n    font-family: 'Roboto';\n    max-width: 600px;\n    font-size: 18px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: black;\n    text-align: center;\n    font-weight: 100; }\n  .WellHome .technologies-container .description a {\n    color: black;\n    text-decoration: none; }\n  .WellHome .technologies-container .rotate_button {\n    display: none; }\n  .WellHome .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n    .WellHome .logo-container img {\n      width: 400px; }\n    .WellHome .logo-container .header {\n      display: none !important; }\n    .WellHome .logo-container .paragraph {\n      font-family: 'Luckiest Guy', cursive;\n      font-size: 20px;\n      color: black;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      z-index: 100;\n      margin-top: 0px !important; }\n  .WellHome .arrow {\n    display: block;\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    position: relative; }\n  .WellHome .show {\n    background-image: url(/imgs/down-arrow.svg); }\n  .WellHome .hide {\n    background-image: url(/imgs/cancel.svg); }\n  @media (max-width: 850px) {\n    .WellHome .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/welhome/welhome-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .WellHome .logo-container .header {\n      font-size: 36px !important;\n      text-align: center; }\n    .WellHome .technologies-container .description p span {\n      display: none; }\n    .WellHome .technologies-container .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/welhome/welhome-mobile.png) !important; } }\n\n.C2Corner {\n  background: #3399FF; }\n  .C2Corner .technologies-container .technologies {\n    width: 900px;\n    height: 100px;\n    background-image: url(/imgs/c2corner/c2corner-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .C2Corner .technologies-container .description {\n    max-width: 900px; }\n    .C2Corner .technologies-container .description p {\n      color: #003399;\n      font-family: 'Alfa Slab One', cursive;\n      max-width: 900px;\n      font-size: 17px;\n      margin-top: 50px;\n      margin-bottom: 50px;\n      padding-left: 20px;\n      padding-right: 20px;\n      text-align: center; }\n  .C2Corner .technologies-container .rotate_button figure span {\n    border: 5px solid #003399; }\n  .C2Corner .technologies-container .rotate_button figure span:nth-child(1) {\n    color: #003399; }\n  .C2Corner .technologies-container .rotate_button figure span:nth-child(2) {\n    color: #003399;\n    background: transparent; }\n  .C2Corner .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .C2Corner .logo-container .logoText {\n      color: #003399;\n      text-shadow: #3366CC 4px 4px 0px;\n      font-family: 'Alfa Slab One', cursive;\n      z-index: 100;\n      font-size: 65px;\n      line-height: 0; }\n    .C2Corner .logo-container .header {\n      font-family: 'Open Sans', 'Condensed';\n      text-transform: uppercase;\n      color: white;\n      font-size: 50px;\n      font-weight: 600;\n      z-index: 100;\n      text-align: center; }\n    .C2Corner .logo-container .paragraph {\n      color: #003399;\n      font-family: 'Alfa Slab One', cursive;\n      font-size: 20px;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      text-align: center;\n      z-index: 100;\n      max-width: 700px; }\n  .C2Corner .arrow {\n    display: block;\n    background-image: url(/imgs/c2corner/arrow-down.svg);\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    margin-top: 30px;\n    cursor: pointer; }\n  .C2Corner .show {\n    background-image: url(/imgs/c2corner/arrow-down.svg); }\n  .C2Corner .hide {\n    background-image: url(/imgs/c2corner/arrow-up.svg); }\n  @media (max-width: 850px) {\n    .C2Corner .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/c2corner/c2corner-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .C2Corner .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/c2corner/c2corner-mobile.png) !important; } }\n\n.CherryPick {\n  background: #F00000;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #DC281E, #F00000);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #DC281E, #F00000);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .CherryPick .technologies-container .technologies div div {\n    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5)); }\n  .CherryPick .technologies-container .technologies div:nth-child(1) div:nth-child(1) {\n    background-image: url(/imgs/cheryPick/angular.png); }\n  .CherryPick .technologies-container .technologies div:nth-child(1) div:nth-child(2) {\n    background-image: url(/imgs/cheryPick/laravel.png); }\n  .CherryPick .technologies-container .technologies div:nth-child(1) div:nth-child(3) {\n    background-image: url(/imgs/cheryPick/mysql.png); }\n  .CherryPick .technologies-container .technologies div:nth-child(2) div:nth-child(1) {\n    background-image: url(/imgs/cheryPick/php.png); }\n  .CherryPick .technologies-container .technologies div:nth-child(2) div:nth-child(2) {\n    background-image: url(/imgs/cheryPick/js.png); }\n  .CherryPick .technologies-container .description p {\n    font-family: 'Hammersmith One', sans-serif;\n    max-width: 600px;\n    font-size: 18px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: black;\n    text-align: center; }\n  .CherryPick .technologies-container .description a {\n    color: black;\n    text-decoration: none; }\n  .CherryPick .technologies-container .rotate_button {\n    display: none; }\n  .CherryPick .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n    .CherryPick .logo-container img {\n      width: 200px; }\n    .CherryPick .logo-container .header {\n      font-family: 'Open Sans', 'Condensed';\n      text-transform: uppercase;\n      color: black;\n      font-size: 50px;\n      font-weight: 600;\n      z-index: 100;\n      text-shadow: rgba(0, 0, 0, 0.5) 5px 5px 8px; }\n    .CherryPick .logo-container .paragraph {\n      display: inline-block;\n      font-family: 'Hammersmith One', sans-serif;\n      font-size: 20px;\n      color: black;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      z-index: 100; }\n  .CherryPick .arrow {\n    display: block;\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    position: relative; }\n  .CherryPick .show {\n    background-image: url(/imgs/down-arrow.svg); }\n  .CherryPick .hide {\n    background-image: url(/imgs/cancel.svg); }\n\n@media (max-width: 500px) {\n  .Smoke_Zone .technologies-container .technologies {\n    flex-direction: column;\n    margin-bottom: 50px; }\n    .Smoke_Zone .technologies-container .technologies div div {\n      background-size: 50px !important;\n      width: 50px !important;\n      height: 50px !important; }\n    .Smoke_Zone .technologies-container .technologies div:nth-child(1) div:nth-child(1) {\n      background-size: 100px !important;\n      width: 100px !important;\n      height: 100px !important; } }\n\n.Houses {\n  background-image: url(/imgs/city.jpg);\n  background-size: cover; }\n  .Houses .technologies-container .technologies {\n    width: 700px;\n    height: 100px;\n    background-image: url(/imgs/houses/houses-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .Houses .technologies-container .description p {\n    font-family: 'Alfa Slab One', cursive;\n    max-width: 600px;\n    font-size: 20px;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: white;\n    text-align: center;\n    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5)); }\n  .Houses .technologies-container .rotate_button {\n    display: none; }\n  .Houses .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .Houses .logo-container .logoText {\n      color: white;\n      font-family: 'Alfa Slab One', cursive;\n      text-shadow: black 4px 4px 0px;\n      z-index: 100;\n      font-size: 65px;\n      line-height: 0; }\n    .Houses .logo-container .header {\n      font-family: 'Open Sans', 'Condensed';\n      text-transform: uppercase;\n      color: white;\n      font-size: 50px;\n      font-weight: 600;\n      z-index: 100;\n      text-align: center;\n      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5)); }\n    .Houses .logo-container .paragraph {\n      font-family: 'Alfa Slab One', cursive;\n      font-size: 20px;\n      color: white;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      text-align: center;\n      z-index: 100;\n      filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5)); }\n  .Houses .arrow {\n    display: block;\n    background-image: url(/imgs/down-arrow_white.svg);\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    -webkit-filter: drop-shadow(0px 0px 15px black);\n    filter: drop-shadow(0px 0px 15px black); }\n  .Houses .show {\n    background-image: url(/imgs/down-arrow_white.svg); }\n  .Houses .hide {\n    background-image: url(/imgs/cancel_white.svg); }\n  @media (max-width: 850px) {\n    .Houses .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/houses/houses-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .Houses .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/houses/houses-mobile.png) !important; } }\n\n.Arcbazar {\n  background: #9796f0;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #fbc7d4, #9796f0);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #fbc7d4, #9796f0);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .Arcbazar .technologies-container .technologies {\n    width: 700px;\n    height: 100px;\n    background-image: url(/imgs/arcbazar/arcbazar-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .Arcbazar .technologies-container .description {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column; }\n    .Arcbazar .technologies-container .description .first {\n      margin-top: 40px; }\n    .Arcbazar .technologies-container .description .last {\n      margin-bottom: 10px; }\n    .Arcbazar .technologies-container .description p {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      font-family: 'Hammersmith One', sans-serif;\n      line-height: 28px;\n      max-width: 600px;\n      font-size: 18px;\n      padding-left: 20px;\n      padding-right: 20px;\n      color: black;\n      text-align: center;\n      font-weight: normal;\n      width: fit-content;\n      margin-top: 0px;\n      margin-bottom: 0px; }\n    .Arcbazar .technologies-container .description a {\n      color: black;\n      text-decoration: none; }\n  .Arcbazar .technologies-container .rotate_button figure span {\n    border: 5px solid black; }\n  .Arcbazar .technologies-container .rotate_button figure span:nth-child(1) {\n    color: black; }\n  .Arcbazar .technologies-container .rotate_button figure span:nth-child(2) {\n    color: #a696c8;\n    background: black; }\n  .Arcbazar .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n    .Arcbazar .logo-container img {\n      width: 400px; }\n      @media (max-height: 400px) {\n        .Arcbazar .logo-container img {\n          width: 180px !important; } }\n    .Arcbazar .logo-container .header {\n      font-family: 'Open Sans', 'Condensed';\n      text-transform: uppercase;\n      color: black;\n      font-size: 50px;\n      font-weight: 600;\n      z-index: 100;\n      text-shadow: rgba(0, 0, 0, 0.5) 5px 5px 8px; }\n    .Arcbazar .logo-container .paragraph {\n      background: black;\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      font-family: 'Hammersmith One', sans-serif;\n      font-size: 20px;\n      color: #a696c8;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      z-index: 100; }\n  .Arcbazar .arrow {\n    display: block;\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    position: relative; }\n  .Arcbazar .show {\n    background-image: url(/imgs/down-arrow.svg); }\n  .Arcbazar .hide {\n    background-image: url(/imgs/cancel.svg); }\n  @media (max-width: 850px) {\n    .Arcbazar .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/arcbazar/arcbazar-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .Arcbazar .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/arcbazar/arcbazar-mobile.png) !important; }\n    .Arcbazar .technologies-container .description p {\n      margin-top: 0 !important;\n      margin-bottom: 0px !important; }\n    .Arcbazar .logo-container img {\n      width: 100%;\n      max-width: 300px; } }\n\n.Factoringvergelijken {\n  background-image: linear-gradient(to right top, #2F2541, #6E3C5F, #B0576A, #E38065, #FEB85F, #F9F871); }\n  .Factoringvergelijken .technologies-container .technologies {\n    width: 700px;\n    height: 100px;\n    background-image: url(/imgs/factoringvergelijken/factoringvergelijken-desktop.png);\n    display: block;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n  .Factoringvergelijken .technologies-container .description p {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    font-family: 'Hammersmith One', sans-serif;\n    line-height: 28px;\n    max-width: 600px;\n    font-size: 18px;\n    padding-left: 20px;\n    padding-right: 20px;\n    color: black;\n    text-align: center;\n    font-weight: normal;\n    margin-top: 40px;\n    margin-bottom: 10px; }\n  .Factoringvergelijken .technologies-container .description a {\n    color: black;\n    text-decoration: none; }\n  .Factoringvergelijken .technologies-container .rotate_button figure span {\n    border: 5px solid black; }\n  .Factoringvergelijken .technologies-container .rotate_button figure span:nth-child(1) {\n    color: #2F2541;\n    background: transparent; }\n  .Factoringvergelijken .technologies-container .rotate_button figure span:nth-child(2) {\n    color: #2F2541;\n    background: transparent; }\n  .Factoringvergelijken .logo-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center; }\n    .Factoringvergelijken .logo-container img {\n      width: 500px; }\n      @media (max-height: 400px) {\n        .Factoringvergelijken .logo-container img {\n          width: 220px !important; } }\n    .Factoringvergelijken .logo-container .header {\n      font-family: 'Open Sans', 'Condensed';\n      text-transform: uppercase;\n      color: black;\n      font-size: 50px;\n      font-weight: 600;\n      z-index: 100;\n      text-shadow: rgba(0, 0, 0, 0.5) 5px 5px 8px; }\n    .Factoringvergelijken .logo-container .paragraph {\n      padding-left: 20px;\n      padding-right: 20px;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      font-family: 'Hammersmith One', sans-serif;\n      font-size: 20px;\n      color: black;\n      letter-spacing: 0.62px;\n      line-height: 30px;\n      font-weight: 300;\n      z-index: 100; }\n  .Factoringvergelijken .arrow {\n    display: block;\n    background-position: center;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    margin: auto;\n    cursor: pointer;\n    position: relative; }\n  .Factoringvergelijken .show {\n    background-image: url(/imgs/down-arrow.svg); }\n  .Factoringvergelijken .hide {\n    background-image: url(/imgs/cancel.svg); }\n  @media (max-width: 850px) {\n    .Factoringvergelijken .technologies {\n      width: 350px !important;\n      height: 220px !important;\n      background-image: url(/imgs/factoringvergelijken/factoringvergelijken-mobile.png) !important; } }\n  @media (max-width: 500px) {\n    .Factoringvergelijken .technologies {\n      width: 250px !important;\n      height: 150px !important;\n      background-image: url(/imgs/factoringvergelijken/factoringvergelijken-mobile.png) !important; }\n    .Factoringvergelijken .logo-container img {\n      width: 100%;\n      max-width: 300px; } }\n\n.linkful {\n  background: #0b0812; }\n  .linkful a {\n    text-decoration: none;\n    color: inherit;\n    outline: none; }\n  .linkful .mt-50 {\n    margin-top: 50px !important; }\n  .linkful .linkful-container {\n    height: 100%;\n    width: 100%;\n    z-index: 10000;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .linkful .linkful-container .arrow {\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 50px;\n      height: 50px;\n      -webkit-filter: drop-shadow(0px 0px 15px #B9EDF8);\n      filter: drop-shadow(0px 0px 3px #B9EDF8);\n      cursor: pointer; }\n    .linkful .linkful-container .arrow-up {\n      background-image: url(/imgs/linkful/arrow-up.svg); }\n    .linkful .linkful-container .arrow-down {\n      background-image: url(/imgs/linkful/arrow-down.svg); }\n    .linkful .linkful-container .description {\n      font-family: Roboto,sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      color: #a3daff;\n      text-shadow: #B9EDF8 0px 0px 5px; }\n    .linkful .linkful-container .header {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .linkful .linkful-container .header .logo {\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        width: 200px;\n        height: 200px;\n        background-image: url(/imgs/linkful/logo-color.png);\n        -webkit-filter: drop-shadow(0px 0px 15px #B9EDF8);\n        filter: drop-shadow(0px 0px 3px #B9EDF8);\n        opacity: 0.9; }\n    .linkful .linkful-container .d-flex {\n      display: flex; }\n    .linkful .linkful-container .d-none {\n      display: none; }\n    .linkful .linkful-container .info-container {\n      width: 100%;\n      min-height: 200px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-family: Roboto,sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: justify;\n      color: #a3daff;\n      text-shadow: #B9EDF8 0px 0px 5px; }\n    .linkful .linkful-container .tzie-small {\n      font-size: 15px !important; }\n    .linkful .linkful-container .tech-container {\n      width: 100%;\n      min-height: 200px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .linkful .linkful-container .tech-container .row {\n        display: flex;\n        flex-direction: row;\n        width: 550px;\n        align-items: center;\n        justify-content: space-between; }\n        .linkful .linkful-container .tech-container .row div {\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 100%;\n          height: 200px;\n          background-image: url(/imgs/linkful/linkful.png); }\n\n@media (max-width: 650px) {\n  .linkful .info-container {\n    max-width: 300px !important; }\n  .linkful .description {\n    font-size: 16px !important;\n    max-width: 350px !important;\n    margin-top: 20px !important;\n    margin-bottom: 20px !important; }\n  .linkful .header .logo {\n    width: 150px !important;\n    height: 150px !important; }\n  .linkful .row {\n    width: 400px !important; } }\n\n@media (max-width: 530px) {\n  .linkful .row {\n    width: 300px !important; } }\n\n@media (max-width: 400px) {\n  .linkful .info-container {\n    max-width: 250px !important; }\n  .linkful .row {\n    width: 240px !important; } }\n\n.smsplaza {\n  background: #0b0812; }\n  .smsplaza .frame {\n    background: rgba(0, 0, 0, 0.5);\n    box-shadow: 0 0 100px black; }\n  .smsplaza a {\n    text-decoration: none;\n    color: inherit;\n    outline: none; }\n  .smsplaza .mt-50 {\n    margin-top: 50px !important; }\n  .smsplaza .smspalza-container {\n    width: 100%;\n    height: 100%;\n    z-index: 10000;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .smsplaza .smspalza-container .arrow {\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 50px;\n      height: 50px;\n      cursor: pointer; }\n    .smsplaza .smspalza-container .arrow-up {\n      background-image: url(/imgs/smsplaza/arrow-up.svg); }\n    .smsplaza .smspalza-container .arrow-down {\n      background-image: url(/imgs/smsplaza/arrow-down.svg); }\n    .smsplaza .smspalza-container .description {\n      font-family: Roboto, sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      color: #41B883; }\n    .smsplaza .smspalza-container .header {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .smsplaza .smspalza-container .header .logo {\n        color: #41B883;\n        text-shadow: #36495D 4px 4px 0px;\n        z-index: 100;\n        font-size: 65px;\n        font-family: 'Luckiest Guy', cursive;\n        line-height: 1; }\n    .smsplaza .smspalza-container .d-flex {\n      display: flex; }\n    .smsplaza .smspalza-container .d-none {\n      display: none; }\n    .smsplaza .smspalza-container .info-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-family: Roboto, sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: justify;\n      color: #41B883; }\n    .smsplaza .smspalza-container .tzie-small {\n      font-size: 18px !important; }\n    .smsplaza .smspalza-container .tech-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .smsplaza .smspalza-container .tech-container .row {\n        display: flex;\n        flex-direction: row;\n        width: 300px;\n        align-items: center;\n        justify-content: space-between; }\n        .smsplaza .smspalza-container .tech-container .row div {\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 100%;\n          height: 300px;\n          background-image: url(/imgs/smsplaza/smsplaza.png); }\n\n@media (max-width: 650px) {\n  .smsplaza .info-container {\n    max-width: 300px !important; }\n  .smsplaza .description {\n    font-size: 16px !important;\n    max-width: 350px !important;\n    margin-top: 20px !important;\n    margin-bottom: 20px !important; }\n  .smsplaza .row {\n    width: 200px !important; } }\n\n@media (max-width: 530px) {\n  .smsplaza .header .logo {\n    font-size: 45px !important; }\n  .smsplaza .row {\n    width: 150px !important; } }\n\n@media (max-width: 400px) {\n  .smsplaza .info-container {\n    max-width: 250px !important; }\n  .smsplaza .row {\n    width: 240px !important; } }\n\n.abirix {\n  background: black; }\n  .abirix a {\n    text-decoration: none;\n    color: inherit;\n    outline: none; }\n  .abirix .mt-50 {\n    margin-top: 50px !important; }\n  .abirix .abirix-container {\n    width: 100%;\n    height: 100%;\n    z-index: 10000;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .abirix .abirix-container .arrow {\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 50px;\n      height: 50px;\n      cursor: pointer; }\n    .abirix .abirix-container .arrow-up {\n      background-image: url(/imgs/abirix/arrow-up.svg); }\n    .abirix .abirix-container .arrow-down {\n      background-image: url(/imgs/abirix/arrow-down.svg); }\n    .abirix .abirix-container .description {\n      font-family: Roboto, sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      color: #f0ea42; }\n    .abirix .abirix-container .header {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .abirix .abirix-container .header .logo {\n        color: #f0ea42;\n        text-shadow: #ce8c32 4px 4px 0px;\n        z-index: 100;\n        font-size: 65px;\n        font-family: 'Alfa Slab One', cursive;\n        line-height: 1; }\n    .abirix .abirix-container .d-flex {\n      display: flex; }\n    .abirix .abirix-container .d-none {\n      display: none; }\n    .abirix .abirix-container .info-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-family: Roboto, sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: justify;\n      color: #f0ea42;\n      background: rgba(0, 0, 0, 0.5);\n      border-radius: 50%;\n      box-shadow: 0px 0px 100px black; }\n    .abirix .abirix-container .tzie-small {\n      font-size: 18px !important; }\n    .abirix .abirix-container .tech-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .abirix .abirix-container .tech-container .row {\n        display: flex;\n        flex-direction: row;\n        width: 300px;\n        align-items: center;\n        justify-content: space-between; }\n        .abirix .abirix-container .tech-container .row div {\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 100%;\n          height: 200px;\n          background-image: url(/imgs/abirix/abirix.png); }\n\n@media (max-width: 650px) {\n  .abirix .info-container {\n    max-width: 300px !important; }\n  .abirix .description {\n    font-size: 16px !important;\n    max-width: 350px !important;\n    margin-top: 20px !important;\n    margin-bottom: 20px !important; }\n  .abirix .row {\n    width: 200px !important; } }\n\n@media (max-width: 530px) {\n  .abirix .header .logo {\n    font-size: 45px !important; }\n  .abirix .row {\n    width: 150px !important; } }\n\n@media (max-width: 400px) {\n  .abirix .info-container {\n    max-width: 250px !important; }\n  .abirix .row {\n    width: 240px !important; } }\n\n/* Color schemes */\n.demo-1 {\n  --color-text: #fff;\n  --color-bg: #101010;\n  --color-link: #fff;\n  --color-link-hover: #fff473;\n  --color-nav: #fff;\n  --color-bg-slide-1: #4cabef;\n  --color-bg-slide-2: #0406e6;\n  --color-bg-slide-3: #272526;\n  --color-bg-slide-4: #b9b9b9;\n  --color-bg-slide-5: #5900ce;\n  --color-bg-slide-6: #1b1a1a;\n  --color-bg-slide-7: #bf2525;\n  --color-bg-slide-8: #d6d1d1;\n  --color-bg-slide-9: #000000; }\n\n.CompareIp {\n  /* Header */\n  /* Slideshow */\n  /* Word + SVG styles */ }\n  .CompareIp .content {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    min-height: 100vh; }\n  .CompareIp .content--fixed {\n    position: fixed;\n    z-index: 10000;\n    top: 0;\n    left: 0;\n    display: grid;\n    align-content: space-between;\n    width: 100%;\n    max-width: none;\n    min-height: 0;\n    height: 100vh;\n    padding: 1.5em;\n    pointer-events: none;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: auto auto 4em;\n    grid-template-areas: 'header header' '... ...' 'github demos'; }\n  .CompareIp .content--fixed a {\n    pointer-events: auto; }\n  .CompareIp .codrops-header {\n    position: relative;\n    z-index: 100;\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    align-items: center;\n    align-self: start;\n    grid-area: header;\n    justify-self: start; }\n  .CompareIp .codrops-header__title {\n    font-size: 1.15em;\n    font-weight: normal;\n    margin: 0 0 0 1em;\n    padding: 0.75em 0; }\n  .CompareIp .slideshow {\n    position: absolute !important;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n  .CompareIp .slide {\n    position: absolute !important;\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0 !important;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n    opacity: 0;\n    z-index: 1; }\n    .CompareIp .slide div {\n      width: 100%;\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .CompareIp .slide div div {\n        width: 100%;\n        height: 25vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between; }\n        .CompareIp .slide div div img {\n          width: 15%; }\n    .CompareIp .slide .description {\n      height: auto; }\n      .CompareIp .slide .description .img-container {\n        width: 300px;\n        display: block;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        background-image: url(/imgs/compareip/compare.png); }\n  .CompareIp .slide--current {\n    opacity: 1;\n    pointer-events: auto;\n    z-index: 100; }\n  .CompareIp .slide__bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n  .CompareIp .slide__bg--6 {\n    background: var(--color-bg-slide-6); }\n  .CompareIp .slidenav {\n    position: relative;\n    margin: 16em 0 0 0;\n    z-index: 200; }\n  .CompareIp .slidenav__item {\n    background: none;\n    border: none;\n    font-size: 1.5em;\n    color: var(--color-nav);\n    margin: 1em; }\n  .CompareIp .slidenav__item:focus {\n    outline: none; }\n  .CompareIp .slidenav__item:hover {\n    opacity: 0.6; }\n  .CompareIp .slidenav__item--next .icon {\n    transform: rotate(180deg); }\n  .CompareIp .word {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin: 0 0 0.25em 0;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    grid-area: title;\n    font-size: 10vw;\n    font-weight: 400; }\n  .CompareIp .word span {\n    display: block;\n    position: relative;\n    flex: none;\n    white-space: pre; }\n  .CompareIp .small-text {\n    font-size: 22px !important; }\n  .CompareIp .word--6 {\n    font-family: 'Hammersmith One', sans-serif; }\n  .CompareIp .word--6 .char1,\n  .CompareIp .word--6 .char8 {\n    color: #dc2e2e; }\n  .CompareIp .shapes {\n    position: fixed;\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    height: 200vh; }\n  @media screen and (max-width: 40em) {\n    .CompareIp .slide .word {\n      font-size: 2.7em; } }\n  .CompareIp .hide {\n    opacity: 0; }\n  .CompareIp .description {\n    font-size: 16px !important; }\n  .CompareIp .draw-border {\n    margin-top: 40px;\n    background: none;\n    border: none;\n    cursor: pointer;\n    line-height: 1.5;\n    font: 700 1.2rem 'Roboto Slab', sans-serif;\n    padding: 1em 2em;\n    letter-spacing: 0.05rem;\n    box-shadow: inset 0 0 0 4px #d6d1d1;\n    color: #d6d1d1;\n    transition: color 0.25s 0.08333s;\n    position: relative; }\n    .CompareIp .draw-border:focus {\n      outline: 2px dotted #dc2e2e; }\n    .CompareIp .draw-border::before, .CompareIp .draw-border::after {\n      border: 0 solid transparent;\n      box-sizing: border-box;\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 0;\n      height: 0;\n      bottom: 0;\n      right: 0; }\n    .CompareIp .draw-border::before {\n      border-bottom-width: 4px;\n      border-left-width: 4px; }\n    .CompareIp .draw-border::after {\n      border-top-width: 4px;\n      border-right-width: 4px; }\n    .CompareIp .draw-border:hover {\n      color: #dc2e2e; }\n      .CompareIp .draw-border:hover::before, .CompareIp .draw-border:hover::after {\n        border-color: #dc2e2e;\n        transition: border-color 0s, width 0.25s, height 0.25s;\n        width: 100%;\n        height: 100%; }\n      .CompareIp .draw-border:hover::before {\n        transition-delay: 0s, 0s, 0.25s; }\n      .CompareIp .draw-border:hover::after {\n        transition-delay: 0s, 0.25s, 0s; }\n\n@media (max-width: 500px) {\n  .CompareIp .img-container {\n    width: 220px !important; }\n  .CompareIp .word--6 {\n    max-width: 300px; }\n  .CompareIp .small-text {\n    font-size: 18px !important; } }\n\n.neocore {\n  background: black; }\n  .neocore a {\n    text-decoration: none;\n    color: inherit;\n    outline: none; }\n  .neocore .mt-50 {\n    margin-top: 50px !important; }\n  .neocore .neocore-container {\n    width: 100%;\n    height: 100%;\n    z-index: 10000;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n    .neocore .neocore-container .arrow {\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      width: 50px;\n      height: 50px;\n      cursor: pointer; }\n    .neocore .neocore-container .arrow-up {\n      background-image: url(/imgs/neocore/arrow-up.svg); }\n    .neocore .neocore-container .arrow-down {\n      background-image: url(/imgs/neocore/arrow-down.svg); }\n    .neocore .neocore-container .description {\n      max-width: 400px;\n      text-align: center;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      z-index: 100;\n      color: #eec60a;\n      text-shadow: black 4px 4px 0px;\n      font-size: 40px;\n      font-family: 'Luckiest Guy', cursive;\n      line-height: 1; }\n    .neocore .neocore-container .header {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .neocore .neocore-container .header .logo {\n        background-image: url(/imgs/neocore/logo.svg);\n        background-size: contain;\n        background-repeat: no-repeat;\n        width: 200px;\n        height: 200px; }\n    .neocore .neocore-container .d-flex {\n      display: flex; }\n    .neocore .neocore-container .d-none {\n      display: none; }\n    .neocore .neocore-container .info-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      font-family: Roboto, sans-serif;\n      font-size: 20px;\n      max-width: 400px;\n      text-align: justify;\n      color: #eec60a; }\n    .neocore .neocore-container .tzie-small {\n      font-size: 18px !important; }\n    .neocore .neocore-container .tech-container {\n      width: 100%;\n      min-height: 300px;\n      z-index: 10000;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center; }\n      .neocore .neocore-container .tech-container .row {\n        display: flex;\n        flex-direction: row;\n        width: 600px;\n        align-items: center;\n        justify-content: space-between; }\n        .neocore .neocore-container .tech-container .row div {\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 100%;\n          height: 200px;\n          background-image: url(/imgs/neocore/neocore_skills.png); }\n\n@media (max-width: 650px) {\n  .neocore .info-container {\n    max-width: 300px !important; }\n  .neocore .description {\n    font-size: 32px !important;\n    max-width: 350px !important;\n    margin-top: 20px !important;\n    margin-bottom: 20px !important; }\n  .neocore .row {\n    width: 400px !important; }\n  .neocore .logo {\n    width: 140px !important;\n    height: 140px !important; } }\n\n@media (max-width: 530px) {\n  .neocore .header .logo {\n    font-size: 45px !important; }\n  .neocore .row {\n    width: 30px !important; }\n    .neocore .row div {\n      background-image: url(/imgs/neocore/neocore_skills_sm.png) !important; } }\n\n@media (max-width: 400px) {\n  .neocore .info-container {\n    max-width: 250px !important; }\n  .neocore .row {\n    width: 200px !important; } }\n\n.neocore-bg {\n  background: #eec60a !important; }\n\n.linkful-bg {\n  background: #3c48fa !important; }\n\n.compareip-bg {\n  background: rgba(237, 32, 37, 0.7) !important; }\n\n.abirix-bg {\n  background: #f0ea42 !important; }\n\n.smsplaza-bg {\n  background: #41B883 !important; }\n\n.houses-bg {\n  background: white !important; }\n\n.welhome-bg {\n  background: #E6E6E6 !important; }\n\n.history24-bg {\n  background: #E6E6E6 !important; }\n\n.smoke-zone-bg {\n  background: #D40080 !important; }\n\n.yandex-bg {\n  background: #ED2025 !important; }\n\n.c2corner-bg {\n  background: #003399 !important; }\n\n.arcbazar-bg {\n  background: black !important; }\n\n.factoringvergelijken-bg {\n  background: black !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/assets/js/components/Portfolio/scss/common/base.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alfa+Slab+One|Luckiest+Guy&display=swap);", ""]);

// module
exports.push([module.i, "article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block;}audio,canvas,video{display:inline-block;}audio:not([controls]){display:none;height:0;}[hidden]{display:none;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}a:focus{outline:thin dotted;}a:active,a:hover{outline:0;}h1{font-size:2em;margin:0.67em 0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0;}mark{background:#ff0;color:#000;}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em;}pre{white-space:pre-wrap;}q{quotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:0;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;}button,input{line-height:normal;}button,select{text-transform:none;}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}input[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}textarea{overflow:auto;vertical-align:top;}table{border-collapse:collapse;border-spacing:0;}\r\n*,\r\n*::after,\r\n*::before {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.linkful {\r\n\tbackground: #000;\r\n\tfont-family: Didot, \"Didot LT STD\", \"Bodoni MT\", \"ltc-bodoni-175\", \"Hoefler Text\", Garamond, \"Times New Roman\", serif;\r\n\tmin-height: 100vh;\r\n\tcolor: #57585c;\r\n\tcolor: var(--color-text);\r\n\tbackground-color: #000;\r\n\toverflow: hidden;\r\n}\r\n\r\n/* Color schemes */\r\n.demo-1 {\r\n\t--color-text: #86eae7;\r\n\t--color-link: #fff;\r\n\t--color-link-hover: #86eae7;\r\n\t--color-title: #fff;\r\n}\r\n\r\n.demo-2 {\r\n\t--color-text: #ff53ff;\r\n\t--color-link: #3c48fa;\r\n\t--color-link-hover: #fff;\r\n\t--color-title: #fff;\r\n}\r\n\r\n.demo-3 {\r\n\t--color-text: #1ed97c;\r\n\t--color-link: #fff;\r\n\t--color-link-hover: #fff;\r\n\t--color-title: #fff;\r\n}\r\n\r\n.demo-4 {\r\n\t--color-text: #f0ea42;\r\n\t--color-link: #ce8c32;\r\n\t--color-link-hover: #fff;\r\n\t--color-title: #ce8c32;\r\n}\r\n\r\n.demo-5 {\r\n\t--color-text: #41B883;\r\n\t--color-link: #0ab5e4;\r\n\t--color-link-hover: #fff;\r\n\t--color-title: #0ab5e4;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: var(--color-link);\r\n\toutline: none;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n\tcolor: var(--color-link-hover);\r\n\toutline: none;\r\n}\r\n\r\n.frame {\r\n\t/*padding: 3rem 5vw;*/\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tz-index: 1000;\r\n}\r\n\r\n.frame__title {\r\n\tfont-size: 1rem;\r\n\tmargin: 0 0 1rem;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.frame__links {\r\n\tdisplay: inline;\r\n}\r\n\r\n.frame__github,\r\n.frame__links a:not(:last-child),\r\n.frame__demos a:not(:last-child) {\r\n\tmargin-right: 1rem;\r\n}\r\n\r\n.frame__demos {\r\n\tmargin: 1rem 0;\r\n}\r\n\r\n.frame__demo--current,\r\n.frame__demo--current:hover {\r\n\ttext-decoration: underline;\r\n\tcolor: var(--color-link);\r\n}\r\n\r\n.content {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tposition: relative;\r\n\tjustify-content: flex-start;\r\n\talign-items: center;\r\n}\r\n\r\n.content__title {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tmargin: -5.5vw 0 0 0;\r\n\tz-index: 100;\r\n\tfont-size: 10vw;\r\n\tcolor: var(--color-title);\r\n\tline-height: 1;\r\n}\r\n\r\n@media screen and (min-width: 53em) {\r\n\t.message {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.frame {\r\n\t\tposition: fixed;\r\n\t\ttext-align: left;\r\n\t\tz-index: 10000;\r\n\t\tleft: 0;\r\n\t\tdisplay: grid;\r\n\t\talign-content: space-between;\r\n\t\twidth: 100%;\r\n\t\tmax-width: none;\r\n\t\theight: 100vh;\r\n\t\tpadding: 2rem 2.25rem;\r\n\t\tpointer-events: none;\r\n\t\tgrid-template-columns: 25% 50% 25%;\r\n\t\tgrid-template-rows: auto auto auto;\r\n\t\tgrid-template-areas: 'title title ... '\r\n\t\t\t\t\t\t\t'... ... ...'\r\n\t\t\t\t\t\t\t'github demos links';\r\n\t}\r\n\t.frame__title-wrap {\r\n\t\tgrid-area: title;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t.frame__title {\r\n\t\tmargin: 0;\r\n\t}\r\n\t.frame__github {\r\n\t\tgrid-area: github;\r\n\t\tjustify-self: start;\r\n\t\tmargin: 0;\r\n\t}\r\n\t.frame__demos {\r\n\t\tmargin: 0;\r\n\t\tgrid-area: demos;\r\n\t\tjustify-self: center;\r\n\t}\r\n\t.frame__links {\r\n\t\tgrid-area: links;\r\n\t\tpadding: 0;\r\n\t\tjustify-self: end;\r\n\t}\r\n\t.frame a {\r\n\t\tpointer-events: auto;\r\n\t}\r\n\t.content {\r\n\t\theight: 100vh;\r\n\t\tjustify-content: center;\r\n\t}\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-parallax-mousemove/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__("./node_modules/react/index.js"));else if("function"===typeof define&&define.amd)define(["react"],t);else{var n=t("object"===typeof exports?require("react"):e.react);for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?y=d.concat(y):h=-1,y.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=y.length;t;){for(d=y,y=[];++h<t;)d&&d[h].run();h=-1,t=y.length}d=null,m=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var c,f,p=e.exports={};!function(){try{c="function"===typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],m=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new l(e,t)),1!==y.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"===typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u){var l=-a*(t-r),s=-i*n,c=l+s,f=n+c*e,p=t+f*e;return Math.abs(f)<u&&Math.abs(p-r)<u?(o[0]=r,o[1]=0,o):(o[0]=p,o[1]=f,o)}t.__esModule=!0,t.default=r;var o=[0,0];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){(function(t){for(var r=n(18),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],l=o["cancel"+i]||o["cancelRequest"+i],s=0;!u&&s<a.length;s++)u=o[a[s]+"Request"+i],l=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!u||!l){var c=0,f=0,p=[];u=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=l}}).call(t,n(17))},function(e,t,n){"use strict";function r(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"===typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r};e.exports=n(19)(o,!0)}else e.exports=n(22)()}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,a,i,u,l){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,u,l],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(9),o=r;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];a.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=n.n(i),l=n(15),s=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={isReady:!1},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0}),window.addEventListener("resize",this.adjustContainer,!1)}},{key:"render",value:function(){var e=this.props.children;return this.state.isReady?(this.props.fullHeight&&(this.props.containerStyle.height=window.innerHeight),u.a.createElement("div",{ref:"container",style:this.props.containerStyle}," ",e," ")):u.a.createElement("div",null,"Parallax hover is not yet ready.")}}]),t}(u.a.Component);c.Layer=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updatePosition=function(e){n.resizeTimeout||(n.resizeTimeout=setTimeout(function(){n.resizeTimeout=null;var t=n.config.xFactor,r=n.config.yFactor,o=r*(e.view.innerHeight/2-e.clientY),a=t*(e.view.innerWidth/2-e.clientX);n.setState({toStyle:{bottom:Object(l.spring)(o,n.config.springSettings),left:Object(l.spring)(a,n.config.springSettings)}})},75))},n.resizeTimeout=!1,n.config=n.props.config,n.state={toStyle:{bottom:0,left:0}},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousemove",this.updatePosition,!1)}},{key:"render",value:function(){var e=this,t=this.props.children;return u.a.createElement(l.Motion,{defaultStyle:this.props.layerStyle,style:this.state.toStyle},function(n){return u.a.createElement("div",{ref:"layer",style:Object.assign({},n,e.props.layerStyle)},t)})}}]),t}(u.a.Component);var f=function(){var e=this;this.adjustContainer=function(t){e.setState({height:Object(l.spring)(t.currentTarget.innerHeight)})}};t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=n(16);t.Motion=r(o);var a=n(23);t.StaggeredMotion=r(a);var i=n(24);t.TransitionMotion=r(i);var u=n(26);t.spring=r(u);var l=n(13);t.presets=r(l);var s=n(2);t.stripStyle=r(s);var c=n(27);t.reorderKeys=r(c)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),s=r(l),c=n(2),f=r(c),p=n(4),d=r(p),y=n(5),m=r(y),h=n(6),v=r(h),b=n(7),g=r(b),w=n(1),O=r(w),S=n(8),T=r(S),P=1e3/60,j=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,o=n.currentStyle,a=n.currentVelocity,u=n.lastIdealStyle,l=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"===typeof c&&(t||(t=!0,o=i({},o),a=i({},a),u=i({},u),l=i({},l)),o[s]=c,a[s]=0,u[s]=c,l[s]=0)}t&&r.setState({currentStyle:o,currentVelocity:a,lastIdealStyle:u,lastIdealVelocity:l})},this.startAnimationIfNecessary=function(){r.animationID=v.default(function(e){var t=r.props.style;if(g.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||m.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*P&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/P)*P)/P,i=Math.floor(r.accumulatedTime/P),u={},l={},s={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"===typeof p)s[f]=p,c[f]=0,u[f]=p,l[f]=0;else{for(var y=r.state.lastIdealStyle[f],h=r.state.lastIdealVelocity[f],v=0;v<i;v++){var b=d.default(P/1e3,y,h,p.val,p.stiffness,p.damping,p.precision);y=b[0],h=b[1]}var w=d.default(P/1e3,y,h,p.val,p.stiffness,p.damping,p.precision),O=w[0],S=w[1];s[f]=y+(O-y)*a,c[f]=h+(S-h)*a,u[f]=y,l[f]=h}}r.animationID=null,r.accumulatedTime-=i*P,r.setState({currentStyle:s,currentVelocity:c,lastIdealStyle:u,lastIdealVelocity:l}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),u(t,null,[{key:"propTypes",value:{defaultStyle:T.default.objectOf(T.default.number),style:T.default.objectOf(T.default.oneOfType([T.default.number,T.default.object])).isRequired,children:T.default.func.isRequired,onRest:T.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||f.default(n),o=s.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=m.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=m.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(v.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&O.default.Children.only(e)},t}(O.default.Component);t.default=j,e.exports=t.default},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,o,a,i,u;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n(),u=1e9*t.uptime(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(9),o=n(10),a=n(12),i=n(20),u=n(11),l=n(21);e.exports=function(e,n){function s(e){var t=e&&(_&&e[_]||e[k]);if("function"===typeof t)return t}function c(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){function r(r,s,c,p,d,y,m){if(p=p||x,y=y||c,m!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var h=p+":"+c;!i[h]&&l<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),i[h]=!0,l++)}return null==s[c]?r?new f(null===s[c]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,c,p,d,y)}if("production"!==t.env.NODE_ENV)var i={},l=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function d(e){function t(t,n,r,o,a,i){var u=t[n];if(T(u)!==e)return new f("Invalid "+o+" `"+a+"` of type `"+P(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function y(e){function t(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){return new f("Invalid "+o+" `"+a+"` of type `"+T(i)+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<i.length;l++){var s=e(i,l,r,o,a+"["+l+"]",u);if(s instanceof Error)return s}return null}return p(t)}function m(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||x;return new f("Invalid "+o+" `"+a+"` of type `"+I(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return p(t)}function h(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(c(i,e[u]))return null;return new f("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],l=T(i);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in i)if(i.hasOwnProperty(s)){var c=e(i,s,r,o,a+"."+s,u);if(c instanceof Error)return c}return null}return p(t)}function b(e){function n(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,u))return null}return new f("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var i=e[o];if("function"!==typeof i)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",j(i),o),r.thatReturnsNull}return p(n)}function g(e){function t(t,n,r,o,a){var i=t[n],l=T(i);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var p=c(i,s,r,o,a+"."+s,u);if(p)return p}}return null}return p(t)}function w(e){function t(t,n,r,o,a){var l=t[n],s=T(l);if("object"!==s)return new f("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var c=i({},t[n],e);for(var p in c){var d=e[p];if(!d)return new f("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(l,p,r,o,a+"."+p,u);if(y)return y}return null}return p(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!O(a[1]))return!1}return!0;default:return!1}}function S(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}function T(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":S(t,e)?"symbol":t}function P(e){if("undefined"===typeof e||null===e)return""+e;var t=T(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=P(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function I(e){return e.constructor&&e.constructor.name?e.constructor.name:x}var _="function"===typeof Symbol&&Symbol.iterator,k="@@iterator",x="<<anonymous>>",E={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return p(r.thatReturnsNull)}(),arrayOf:y,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new f("Invalid "+o+" `"+a+"` of type `"+T(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:m,node:function(){function e(e,t,n,r,o){return O(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:v,oneOf:h,oneOfType:b,shape:g,exact:w};return f.prototype=Error.prototype,E.checkPropTypes=l,E.PropTypes=E,E}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)a.call(n,c)&&(l[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,n){"use strict";(function(t){function r(e,n,r,l,s){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var f;try{o("function"===typeof e[c],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",l||"React class",r,c,typeof e[c]),f=e[c](n,c,l,r,null,i)}catch(e){f=e}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",r,c,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=s?s():"";a(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(10),a=n(12),i=n(11),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(9),o=n(10),a=n(11);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){for(var r=0;r<e.length;r++)if(!w.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),c=r(s),f=n(2),p=r(f),d=n(4),y=r(d),m=n(5),h=r(m),v=n(6),b=r(v),g=n(7),w=r(g),O=n(1),S=r(O),T=n(8),P=r(T),j=1e3/60,I=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,o=t.currentVelocities,a=t.lastIdealStyles,i=t.lastIdealVelocities,l=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"===typeof d&&(f||(f=!0,l=!0,n[s]=u({},n[s]),o[s]=u({},o[s]),a[s]=u({},a[s]),i[s]=u({},i[s])),n[s][p]=d,o[s][p]=0,a[s][p]=d,i[s][p]=0)}}l&&r.setState({currentStyles:n,currentVelocities:o,lastIdealStyles:a,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){r.animationID=b.default(function(e){var t=r.props.styles(r.state.lastIdealStyles);if(i(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||h.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*j&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/j)*j)/j,u=Math.floor(r.accumulatedTime/j),l=[],s=[],c=[],f=[],p=0;p<t.length;p++){var d=t[p],m={},v={},b={},g={};for(var w in d)if(Object.prototype.hasOwnProperty.call(d,w)){var O=d[w];if("number"===typeof O)m[w]=O,v[w]=0,b[w]=O,g[w]=0;else{for(var S=r.state.lastIdealStyles[p][w],T=r.state.lastIdealVelocities[p][w],P=0;P<u;P++){var I=y.default(j/1e3,S,T,O.val,O.stiffness,O.damping,O.precision);S=I[0],T=I[1]}var _=y.default(j/1e3,S,T,O.val,O.stiffness,O.damping,O.precision),k=_[0],x=_[1];m[w]=S+(k-S)*a,v[w]=T+(x-T)*a,b[w]=S,g[w]=T}}c[p]=m,f[p]=v,l[p]=b,s[p]=g}r.animationID=null,r.accumulatedTime-=u*j,r.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:l,lastIdealVelocities:s}),r.unreadPropStyles=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),l(t,null,[{key:"propTypes",value:{defaultStyles:P.default.arrayOf(P.default.objectOf(P.default.number)),styles:P.default.func.isRequired,children:P.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(p.default),o=r.map(function(e){return c.default(e)});return{currentStyles:r,currentVelocities:o,lastIdealStyles:r,lastIdealVelocities:o}},t.prototype.componentDidMount=function(){this.prevTime=h.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=h.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&S.default.Children.only(e)},t}(S.default.Component);t.default=I,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var o=0;o<r.length;o++)if(r[o].key===e.key)return{key:r[o].key,data:r[o].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function u(e,t,n,r){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(r[o].key!==t[o].key)return!1;for(var o=0;o<r.length;o++)if(!P.default(e[o],t[o].style,n[o]))return!1;return!0}function l(e,t,n,r,o,a,i,u,l){for(var s=b.default(r,o,function(e,r){var o=t(r);return null==o?(n({key:r.key,data:r.data}),null):P.default(a[e],o,i[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:o}}),c=[],f=[],d=[],y=[],m=0;m<s.length;m++){for(var h=s[m],v=null,g=0;g<r.length;g++)if(r[g].key===h.key){v=g;break}if(null==v){var w=e(h);c[m]=w,d[m]=w;var O=p.default(h.style);f[m]=O,y[m]=O}else c[m]=a[v],d[m]=u[v],f[m]=i[v],y[m]=l[v]}return[s,c,f,d,y]}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(3),p=r(f),d=n(2),y=r(d),m=n(4),h=r(m),v=n(25),b=r(v),g=n(5),w=r(g),O=n(6),S=r(O),T=n(7),P=r(T),j=n(1),I=r(j),_=n(8),k=r(_),x=1e3/60,E=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],o=t[1],a=t[2],i=t[3],u=t[4],c=0;c<e.length;c++){var f=e[c].style,p=!1;for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var y=f[d];"number"===typeof y&&(p||(p=!0,o[c]=s({},o[c]),a[c]=s({},a[c]),i[c]=s({},i[c]),u[c]=s({},u[c]),n[c]={key:n[c].key,data:n[c].data,style:s({},n[c].style)}),o[c][d]=y,a[c][d]=0,i[c][d]=y,u[c][d]=0,n[c].style[d]=y)}}r.setState({currentStyles:o,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=S.default(function(e){if(!r.unmounting){var t=r.props.styles,n="function"===typeof t?t(i(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(u(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var o=e||w.default(),a=o-r.prevTime;if(r.prevTime=o,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*x&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var s=(r.accumulatedTime-Math.floor(r.accumulatedTime/x)*x)/x,c=Math.floor(r.accumulatedTime/x),f=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),p=f[0],d=f[1],y=f[2],m=f[3],v=f[4],b=0;b<p.length;b++){var g=p[b].style,O={},S={},T={},P={};for(var j in g)if(Object.prototype.hasOwnProperty.call(g,j)){var I=g[j];if("number"===typeof I)O[j]=I,S[j]=0,T[j]=I,P[j]=0;else{for(var _=m[b][j],k=v[b][j],E=0;E<c;E++){var D=h.default(x/1e3,_,k,I.val,I.stiffness,I.damping,I.precision);_=D[0],k=D[1]}var N=h.default(x/1e3,_,k,I.val,I.stiffness,I.damping,I.precision),R=N[0],V=N[1];O[j]=_+(R-_)*s,S[j]=k+(V-k)*s,T[j]=_,P[j]=k}}m[b]=T,v[b]=P,d[b]=O,y[b]=S}r.animationID=null,r.accumulatedTime-=c*x,r.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:m,lastIdealVelocities:v,mergedPropsStyles:p}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return a(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.number).isRequired})),styles:k.default.oneOfType([k.default.func,k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.oneOfType([k.default.number,k.default.object])).isRequired}))]).isRequired,children:k.default.func.isRequired,willEnter:k.default.func,willLeave:k.default.func,didLeave:k.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return y.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,o=e.willLeave,a=e.didLeave,i="function"===typeof n?n(t):n,u=void 0;u=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var s=null==t?i.map(function(e){return y.default(e.style)}):t.map(function(e){return y.default(e.style)}),c=null==t?i.map(function(e){return p.default(e.style)}):t.map(function(e){return p.default(e.style)}),f=l(r,o,a,u,i,s,c,s,c),d=f[0];return{currentStyles:f[1],currentVelocities:f[2],lastIdealStyles:f[3],lastIdealVelocities:f[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=w.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"===typeof t?t(i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=w.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(S.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&I.default.Children.only(t)},t}(I.default.Component);t.default=E,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){for(var r={},o=0;o<e.length;o++)r[e[o].key]=o;for(var a={},o=0;o<t.length;o++)a[t[o].key]=o;for(var i=[],o=0;o<t.length;o++)i[o]=t[o];for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(a,e[o].key)){var u=n(o,e[o]);null!=u&&i.push(u)}return i.sort(function(e,n){var o=a[e.key],i=a[n.key],u=r[e.key],l=r[n.key];if(null!=o&&null!=i)return a[e.key]-a[n.key];if(null!=u&&null!=l)return r[e.key]-r[n.key];if(null!=o){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<a[c]&&l>r[c])return-1;if(o>a[c]&&l<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<a[c]&&u>r[c])return 1;if(i>a[c]&&u<r[c])return-1}}return-1})}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return o({},u,t,{val:e})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var a=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=o({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t,n){"use strict";(function(n){function r(){"development"===n.env.NODE_ENV&&(o||(o=!0,console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.")))}t.__esModule=!0,t.default=r;var o=!1;e.exports=t.default}).call(t,n(0))}])});

/***/ }),

/***/ "./node_modules/simplex-noise/simplex-noise.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return SimplexNoise;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // common js
  if (true) exports.SimplexNoise = SimplexNoise;
  // browser
  else if (typeof window !== 'undefined') window.SimplexNoise = SimplexNoise;
  // nodejs
  if (true) {
    module.exports = SimplexNoise;
  }

})();


/***/ }),

/***/ "./resources/assets/js/components/Portfolio/Portfolio.js":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _reactFullpage = __webpack_require__("./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");

var _reactFullpage2 = _interopRequireDefault(_reactFullpage);

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

__webpack_require__("./resources/assets/js/components/Portfolio/scss/Portfolio.scss");

var _redux = __webpack_require__("./node_modules/redux/es/redux.js");

var _page = __webpack_require__("./resources/assets/js/actions/page.js");

var _Factoringvergelijken = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js");

var _Linkful = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js");

var _Linkful2 = _interopRequireDefault(_Linkful);

var _CompareIp = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js");

var _CompareIp2 = _interopRequireDefault(_CompareIp);

var _Smsplaza = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js");

var _Smsplaza2 = _interopRequireDefault(_Smsplaza);

var _C2Corner = __webpack_require__("./resources/assets/js/components/Portfolio/sections/C2Corner.js");

var _C2Corner2 = _interopRequireDefault(_C2Corner);

var _Abirix = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js");

var _Abirix2 = _interopRequireDefault(_Abirix);

var _Arcbazar = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Arcbazar.js");

var _Arcbazar2 = _interopRequireDefault(_Arcbazar);

var _Yandex = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Yandex.js");

var _Houses = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Houses.js");

var _Houses2 = _interopRequireDefault(_Houses);

var _History = __webpack_require__("./resources/assets/js/components/Portfolio/sections/History24.js");

var _History2 = _interopRequireDefault(_History);

var _WellHome = __webpack_require__("./resources/assets/js/components/Portfolio/sections/WellHome.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Neocore = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js");

var _Neocore2 = _interopRequireDefault(_Neocore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sections = {};

sections[_urls.URLS.linkful] = _react2.default.createElement(_Linkful2.default, null);
sections[_urls.URLS.compareip] = _react2.default.createElement(_CompareIp2.default, null);
sections[_urls.URLS.smsplaza] = _react2.default.createElement(_Smsplaza2.default, null);
sections[_urls.URLS.factoringvergelijken] = _react2.default.createElement(_Factoringvergelijken.Factoringvergelijken, null);
sections[_urls.URLS.abirix] = _react2.default.createElement(_Abirix2.default, null);
sections[_urls.URLS.c2corner] = _react2.default.createElement(_C2Corner2.default, null);
sections[_urls.URLS.neocore] = _react2.default.createElement(_Neocore2.default, null);
sections[_urls.URLS.arcbazar] = _react2.default.createElement(_Arcbazar2.default, null);
sections[_urls.URLS.yandex] = _react2.default.createElement(_Yandex.Yandex, null);
sections[_urls.URLS.houses] = _react2.default.createElement(_Houses2.default, null);
sections[_urls.URLS.history24] = _react2.default.createElement(_History2.default, null);
sections[_urls.URLS.welhome] = _react2.default.createElement(_WellHome.WellHome, null);

var sectionUrls = Object.keys(sections);

var Portfolio = function (_Component) {
    _inherits(Portfolio, _Component);

    function Portfolio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Portfolio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call.apply(_ref, [this].concat(args))), _this), _this.setSlide = function (page) {
            _this.props.setPage(page);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Portfolio, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactFullpage2.default, {
                    navigation: true,
                    keyboardScrolling: true,
                    anchors: sectionUrls,
                    onLeave: function onLeave(origin, destination, direction) {
                        _this2.setSlide(destination.anchor);
                    },

                    render: function render(_ref2) {
                        var state = _ref2.state,
                            fullpageApi = _ref2.fullpageApi;

                        return _react2.default.createElement(
                            _reactFullpage2.default.Wrapper,
                            null,
                            Object.values(sections).map(function (section, key) {
                                return _react2.default.createElement(
                                    'div',
                                    { key: key,
                                        className: 'section' },
                                    section
                                );
                            })
                        );
                    }
                })
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

    return Portfolio;
}(_react.Component);

function mapStateToProps(state) {
    return {
        page: state.page,
        preloader: state.preloader
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ setPage: _page.setPage }, dispatch);
}

Portfolio.propTypes = {
    setPage: _propTypes2.default.func
};

var _default = (0, _reactRedux.connect)(mapStateToProps, matchDispatchToProps)(Portfolio);

var _default2 = _default;
exports.default = _default2;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(sections, 'sections', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(sectionUrls, 'sectionUrls', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(Portfolio, 'Portfolio', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(matchDispatchToProps, 'matchDispatchToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
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

    reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(matchDispatchToProps, 'matchDispatchToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(sections, 'sections', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(sectionUrls, 'sectionUrls', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(Portfolio, 'Portfolio', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/Portfolio.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/parts/Pattern.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pattern = function (_Component) {
  _inherits(Pattern, _Component);

  function Pattern(props) {
    _classCallCheck(this, Pattern);

    var _this = _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).call(this, props));

    _this.clickHandle = function () {
      _this.setState({
        activeSide: !_this.state.activeSide
      });
    };

    _this.clasess = {
      show: 'animated ' + _this.props.effectClassIn + ' flex',
      hide: 'animated ' + _this.props.effectClassOut + ' none'
    };
    _this.state = {
      activeSide: true
    };
    return _this;
  }

  _createClass(Pattern, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Pattern ' + this.props.classname },
        _react2.default.createElement(
          'div',
          {
            className: 'technologies-container ' + (this.state.activeSide ? this.clasess.hide : this.clasess.show) },
          this.props.technologies(),
          this.props.description(),
          _react2.default.createElement(
            'a',
            { href: this.props.url, target: 'blank', className: 'rotate_button' },
            _react2.default.createElement(
              'figure',
              null,
              this.props.figure()
            )
          ),
          _react2.default.createElement('div', { className: 'arrow hide', onClick: this.clickHandle })
        ),
        _react2.default.createElement(
          'div',
          { className: 'logo-container ' + (this.state.activeSide ? this.clasess.show : this.clasess.hide) },
          this.props.logo ? _react2.default.createElement('img', { src: this.props.logo, alt: this.props.classname }) : _react2.default.createElement(
            'p',
            { className: 'logoText' },
            '  ',
            this.props.logoText
          ),
          this.props.logoDescription(),
          _react2.default.createElement('div', { className: 'arrow show', onClick: this.clickHandle })
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

  return Pattern;
}(_react.Component);

Pattern.propTypes = {
  classname: _propTypes2.default.string,
  logo: _propTypes2.default.string,
  logoText: _propTypes2.default.string,
  url: _propTypes2.default.string,
  effectClassIn: _propTypes2.default.string,
  effectClassOut: _propTypes2.default.string,

  technologies: _propTypes2.default.func,
  description: _propTypes2.default.func,
  figure: _propTypes2.default.func,
  logoDescription: _propTypes2.default.func
};

var _default = Pattern;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Pattern, 'Pattern', '/var/www/portfolio/resources/assets/js/components/Portfolio/parts/Pattern.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/parts/Pattern.js');
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

  reactHotLoader.register(Pattern, 'Pattern', '/var/www/portfolio/resources/assets/js/components/Portfolio/parts/Pattern.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/parts/Pattern.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/scss/Portfolio.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./resources/assets/js/components/Portfolio/scss/Portfolio.scss");
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
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./Portfolio.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/sass-loader/lib/loader.js!./Portfolio.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js":
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

var _coalesce = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abirix = function (_Component) {
  _inherits(Abirix, _Component);

  function Abirix(props) {
    _classCallCheck(this, Abirix);

    var _this = _possibleConstructorReturn(this, (Abirix.__proto__ || Object.getPrototypeOf(Abirix)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        info: !_this.state.info
      });
    };

    _this.state = {
      info: false
    };
    return _this;
  }

  _createClass(Abirix, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.abirix) {
        (0, _coalesce.setup)();
        $('#fp-nav ul li a span').addClass('abirix-bg');
      } else {
        (0, _coalesce.remove)();
        $('#fp-nav ul li a span').removeClass('abirix-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-4 abirix' },
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement('div', { className: 'frame' }),
          _react2.default.createElement(
            'div',
            { className: 'content content--canvas-abirix' },
            _react2.default.createElement(
              'div',
              { className: 'abirix-container' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                  'div',
                  { className: 'logo' },
                  'ABIRIX CRM'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  'crm system for sales company'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'tech-container ' + (this.state.info ? 'd-none' : 'd-flex') },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement('div', { className: 'techs' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none') },
                'I have completed writing the crm system in a team as senior developer, designed and wrote the main system components, developed the database. Used Angular as the interface development tool and Laravel as the backend API; Complete test coverage; Development with strict flow based on Agile princes; Transfer data from legacy systems.'
              ),
              _react2.default.createElement('div', { className: 'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down'), onClick: this.toggle })
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

  return Abirix;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Abirix.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(Abirix);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Abirix, 'Abirix', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
  reactHotLoader.register(Abirix, 'Abirix', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/Abirix.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable no-unused-vars */


Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

exports.setup = setup;
exports.remove = remove;

var _util = __webpack_require__("./resources/assets/js/components/Portfolio/sections/common/util.js");

var _DetectBrowser = __webpack_require__("./resources/assets/js/services/DetectBrowser.js");

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var particleCount = 75;
var particlePropCount = 9;
var particlePropsLength = particleCount * particlePropCount;
var baseTTL = 100;
var rangeTTL = 500;
var baseSpeed = 0.1;
var rangeSpeed = 1;
var baseSize = 2;
var rangeSize = 10;
var baseHue = 10;
var rangeHue = 100;
var backgroundColor = 'hsla(60,50%,3%,1)';

var container = void 0;
var canvas = void 0;
var ctx = void 0;
var center = void 0;
var tick = void 0;
var particleProps = void 0;

function initParticles() {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);

    var i = void 0;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
    }
}

function initParticle(i) {
    var theta = void 0,
        x = void 0,
        y = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        speed = void 0,
        size = void 0,
        hue = void 0;

    x = (0, _util.rand)(canvas.a.width);
    y = (0, _util.rand)(canvas.a.height);
    theta = (0, _util.angle)(x, y, center[0], center[1]);
    vx = (0, _util.cos)(theta) * 6;
    vy = (0, _util.sin)(theta) * 6;
    life = 0;
    ttl = baseTTL + (0, _util.rand)(rangeTTL);
    speed = baseSpeed + (0, _util.rand)(rangeSpeed);
    size = baseSize + (0, _util.rand)(rangeSize);
    hue = baseHue + (0, _util.rand)(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, size, hue], i);
}

function drawParticles() {
    var i = void 0;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
    }
}

function updateParticle(i) {
    var i2 = 1 + i;
    var i3 = 2 + i;
    var i4 = 3 + i;
    var i5 = 4 + i;
    var i6 = 5 + i;
    var i7 = 6 + i;
    var i8 = 7 + i;
    var i9 = 8 + i;
    var x = void 0,
        y = void 0,
        theta = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        speed = void 0,
        x2 = void 0,
        y2 = void 0,
        size = void 0,
        hue = void 0;

    x = particleProps[i];
    y = particleProps[i2];
    theta = (0, _util.angle)(x, y, center[0], center[1]) + 0.75 * _util.HALF_PI;
    vx = (0, _util.lerp)(particleProps[i3], 2 * (0, _util.cos)(theta), 0.05);
    vy = (0, _util.lerp)(particleProps[i4], 2 * (0, _util.sin)(theta), 0.05);
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
    var xRel = x - 0.5 * size;
    var yRel = y - 0.5 * size;

    ctx.a.save();
    ctx.a.lineCap = 'round';
    ctx.a.lineWidth = 1;
    ctx.a.strokeStyle = 'hsla(' + hue + ',100%,60%,' + (0, _util.fadeInOut)(life, ttl) + ')';
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
    canvas.b.style = '\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t';
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d')
    };
    center = [];
}

function resize() {
    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;


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

    if (!_DetectBrowser.DetectBrowser.isFirefox()) {
        ctx.b.filter = 'blur(8px) brightness(200%)';
    }

    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();

    ctx.b.save();
    if (!_DetectBrowser.DetectBrowser.isFirefox()) {
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
        return;
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

function setup() {
    if (document.querySelector('.content--canvas-abirix canvas')) {
        return;
    }

    createCanvas();
    resize();
    initParticles();
    draw();
}

function remove() {
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

var _default = setup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(particleCount, 'particleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particlePropCount, 'particlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particlePropsLength, 'particlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseSize, 'baseSize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeSize, 'rangeSize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particleProps, 'particleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(initParticles, 'initParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(initParticle, 'initParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(drawParticles, 'drawParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(updateParticle, 'updateParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(drawParticle, 'drawParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(renderGlow, 'renderGlow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
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

    reactHotLoader.register(initParticles, 'initParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(initParticle, 'initParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(drawParticles, 'drawParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(updateParticle, 'updateParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(drawParticle, 'drawParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(renderGlow, 'renderGlow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particleCount, 'particleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particlePropCount, 'particlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particlePropsLength, 'particlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseSize, 'baseSize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeSize, 'rangeSize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(particleProps, 'particleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Abirix/lib/coalesce.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Arcbazar.js":
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

var _reactParallaxMousemove = __webpack_require__("./node_modules/react-parallax-mousemove/build/index.js");

var _reactParallaxMousemove2 = _interopRequireDefault(_reactParallaxMousemove);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  }
};

var Arcbazar = function (_Component) {
  _inherits(Arcbazar, _Component);

  function Arcbazar() {
    _classCallCheck(this, Arcbazar);

    return _possibleConstructorReturn(this, (Arcbazar.__proto__ || Object.getPrototypeOf(Arcbazar)).apply(this, arguments));
  }

  _createClass(Arcbazar, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.arcbazar) {
        $('#fp-nav ul li a span').addClass('arcbazar-bg');
      } else {
        $('#fp-nav ul li a span').removeClass('arcbazar-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactParallaxMousemove2.default,
        { containerStyle: style.outter },
        _react2.default.createElement(_Pattern2.default, {
          classname: 'Arcbazar',
          logo: '../imgs/arcbazar_logo.png',
          url: _constants2.default.arcbazr,
          effectClassIn: 'flipInY',
          effectClassOut: 'zoomOutUp',
          technologies: function technologies(_) {
            return _react2.default.createElement('div', { className: 'technologies' });
          },

          description: function description() {
            return _react2.default.createElement(
              'div',
              { className: 'description' },
              _react2.default.createElement(
                'p',
                { className: 'first' },
                'My team and I have developed new features;'
              ),
              _react2.default.createElement(
                'p',
                null,
                'writing backend with Yii, Elasticsearch and MySQL;'
              ),
              _react2.default.createElement(
                'p',
                { className: 'last' },
                'also working with frontend new features'
              )
            );
          },

          figure: function figure() {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                'View'
              ),
              _react2.default.createElement(
                'span',
                null,
                'Arcbazar'
              )
            );
          },

          logoDescription: function logoDescription() {
            return _react2.default.createElement(
              'p',
              { className: 'paragraph' },
              'Create unique interie and landscape design'
            );
          }

        })
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

  return Arcbazar;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Arcbazar.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(Arcbazar);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(Arcbazar, 'Arcbazar', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(Arcbazar, 'Arcbazar', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Arcbazar.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/C2Corner.js":
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

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C2Corner = function (_Component) {
  _inherits(C2Corner, _Component);

  function C2Corner() {
    _classCallCheck(this, C2Corner);

    return _possibleConstructorReturn(this, (C2Corner.__proto__ || Object.getPrototypeOf(C2Corner)).apply(this, arguments));
  }

  _createClass(C2Corner, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.c2corner) {
        $('#fp-nav ul li a span').addClass('c2corner-bg');
      } else {
        $('#fp-nav ul li a span').removeClass('c2corner-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Pattern2.default, {

        classname: 'C2Corner',
        logo: null,
        logoText: 'C2CORNER',
        url: _constants2.default.c2corner,
        effectClassIn: 'zoomIn',
        effectClassOut: 'zoomOut',
        technologies: function technologies(_) {
          return _react2.default.createElement('div', { className: 'technologies' });
        },

        description: function description(_) {
          return _react2.default.createElement(
            'div',
            { className: 'description' },
            _react2.default.createElement(
              'p',
              null,
              'My team and I developed this system. The backend is build with Laravel and frontend with AngularJs; a lot of components for API communication with marketplaces and payment operations; development and design of new features'
            )
          );
        },

        figure: function figure() {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              'View'
            ),
            _react2.default.createElement(
              'span',
              null,
              'C2Corner'
            )
          );
        },

        logoDescription: function logoDescription() {
          return _react2.default.createElement(
            'p',
            { className: 'paragraph' },
            'High load platform for wholesales on the largest marketplaces such as Amazon\xA0and\xA0Ebay'
          );
        }

      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return C2Corner;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}
C2Corner.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(C2Corner);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(C2Corner, 'C2Corner', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
  reactHotLoader.register(C2Corner, 'C2Corner', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/C2Corner.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js":
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

var _Slideshow = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js");

var _Slideshow2 = _interopRequireDefault(_Slideshow);

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

__webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompareIp = function (_Component) {
  _inherits(CompareIp, _Component);

  function CompareIp(props) {
    _classCallCheck(this, CompareIp);

    var _this = _possibleConstructorReturn(this, (CompareIp.__proto__ || Object.getPrototypeOf(CompareIp)).call(this, props));

    _this.state = {
      visible: 0,
      animateClass: 'hide',
      firstTime: true
    };
    _this.showDescription = function (_) {
      _this.setState({
        animateClass: 'animated fadeIn'
      });
    };
    return _this;
  }

  _createClass(CompareIp, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!this.props.preloader.preloader && prevProps.preloader.preloader && this.props.page.page === _urls.URLS.compareip && this.state.firstTime) {
        this.show();
      }
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.page.page !== _urls.URLS.compareip && nextProps.page.page === _urls.URLS.compareip && this.state.firstTime) {
        this.show();
      }

      if (this.props.page.page !== _urls.URLS.compareip && nextProps.page.page === _urls.URLS.compareip) {
        $('#fp-nav ul li a span').addClass('compareip-bg');
      } else {
        $('#fp-nav ul li a span').removeClass('compareip-bg');
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this.slideshow = new _Slideshow2.default(document.querySelector('.slideshow'), this.showDescription);
      this.setState({
        firstTime: false,
        visible: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'CompareIp' },
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'slideshow' },
            _react2.default.createElement(
              'div',
              { className: 'slide slide--current' },
              _react2.default.createElement('div', { className: 'slide__bg slide__bg--6' }),
              _react2.default.createElement(
                'h2',
                { style: { opacity: this.state.visible }, className: 'word word--6' },
                'CompareIp'
              ),
              _react2.default.createElement(
                'div',
                { className: 'description ' + this.state.animateClass },
                _react2.default.createElement(
                  'p',
                  { className: 'word--6 small-text' },
                  'Online service for patenting of inventions'
                ),
                _react2.default.createElement('div', { className: 'img-container' }),
                _react2.default.createElement(
                  'a',
                  { href: _constants2.default.compareIp, target: '_blank', rel: 'noopener noreferrer' },
                  _react2.default.createElement(
                    'button',
                    { className: 'draw-border' },
                    'Live'
                  )
                )
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

  return CompareIp;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

CompareIp.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(CompareIp);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CompareIp, 'CompareIp', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
  reactHotLoader.register(CompareIp, 'CompareIp', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/CompareIp.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js":
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

var _anime = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js");

var _anime2 = _interopRequireDefault(_anime);

var _wordFx = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var effects = [

// Effect 6
{
  options: {
    shapeColors: ['#fff', '#dedede', '#8c8c8c', '#545454', '#000', '#dc2e2e']
  },
  hide: {
    lettersAnimationOpts: {
      duration: 200,
      delay: function delay(t, i, total) {
        return (total - i - 1) * 20;
      },
      easing: 'easeOutExpo',
      opacity: {
        value: [1, 0],
        duration: 100,
        delay: function delay(t, i, total) {
          return (total - i - 1) * 20;
        },
        easing: 'linear'
      },
      scale: [1, 0]
    }
  },
  show: {
    lettersAnimationOpts: {
      duration: 400,
      delay: function delay(t, i) {
        return i * 60;
      },
      easing: 'easeInExpo',
      opacity: [0, 1],
      scale: [0, 1]
    },
    shapesAnimationOpts: {
      duration: 700,
      delay: function delay(t, i) {
        return i * 40;
      },
      easing: 'easeOutExpo',
      translateX: function translateX() {
        return [0, _anime2.default.random(-20, 20)];
      },
      translateY: function translateY() {
        return [0, _anime2.default.random(-400, 400)];
      },
      scale: function scale() {
        return [(0, _wordFx.randomBetween)(0.2, 0.6), (0, _wordFx.randomBetween)(0.2, 0.6)];
      },
      rotate: function rotate() {
        return [0, _anime2.default.random(-16, 16)];
      },
      opacity: [{ value: 1, duration: 1, easing: 'linear' }, { value: 0, duration: 700, easing: 'easeOutQuad' }]
    }
  }
}];

var Slideshow = function () {
  function Slideshow(el) {
    var _this = this;

    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    _classCallCheck(this, Slideshow);

    this.DOM = {};
    this.DOM.el = el;
    this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
    this.DOM.bgs = Array.from(this.DOM.el.querySelectorAll('.slide__bg'));
    this.DOM.words = Array.from(this.DOM.el.querySelectorAll('.word'));
    this.slidesTotal = this.DOM.slides.length;
    this.current = 0;
    this.words = [];
    this.DOM.words.forEach(function (word, pos) {
      _this.words.push(new Word(word, effects[pos].options));
    });
    this.isAnimating = true;
    this.words[this.current].show(effects[this.current].show).then(function () {
      return _this.isAnimating = false;
    }).then(function (_) {
      return callback();
    });
  }

  _createClass(Slideshow, [{
    key: 'show',
    value: function show(direction) {
      var _this2 = this;

      if (this.isAnimating) return;
      this.isAnimating = true;

      var newPos = void 0;
      var currentPos = this.current;
      if (direction === 'next') {
        newPos = currentPos < this.slidesTotal - 1 ? currentPos + 1 : 0;
      } else if (direction === 'prev') {
        newPos = currentPos > 0 ? currentPos - 1 : this.slidesTotal - 1;
      }

      this.DOM.slides[newPos].style.opacity = 1;
      this.DOM.bgs[newPos].style.transform = 'none';
      (0, _anime2.default)({
        targets: this.DOM.bgs[currentPos],
        duration: 600,
        easing: [0.2, 1, 0.3, 1],
        translateY: ['0%', direction === 'next' ? '-100%' : '100%'],
        complete: function complete() {
          _this2.DOM.slides[currentPos].classList.remove('slide--current');
          _this2.DOM.slides[currentPos].style.opacity = 0;
          _this2.DOM.slides[newPos].classList.add('slide--current');
          _this2.words[newPos].show(effects[newPos].show).then(function () {
            return _this2.isAnimating = false;
          });
        }
      });

      this.words[newPos].hide();
      this.words[this.current].hide(effects[currentPos].hide).then(function () {
        _this2.current = newPos;
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Slideshow;
}();

var _default = Slideshow;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(effects, 'effects', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
  reactHotLoader.register(Slideshow, 'Slideshow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
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

  reactHotLoader.register(effects, 'effects', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
  reactHotLoader.register(Slideshow, 'Slideshow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/Slideshow.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp = { scope: {} };$jscomp.defineProperty = typeof Object.defineProperties === 'function' ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError('ES3 does not support getters and setters.');e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};$jscomp.getGlobal = function (e) {
  return typeof window !== 'undefined' && window === e ? e : typeof global !== 'undefined' && global != null ? global : e;
};$jscomp.global = $jscomp.getGlobal(undefined);$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_';
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || '') + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator'));typeof Array.prototype[e] !== 'function' && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function value() {
      return $jscomp.arrayIterator(this);
    } });$jscomp.initSymbolIterator = function () {};
};$jscomp.arrayIterator = function (e) {
  var r = 0;return $jscomp.iteratorPrototype(function () {
    return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
  });
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };return e;
};$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();e instanceof String && (e += '');var p = 0;var m = { next: function next() {
      if (p < e.length) {
        var u = p++;return { value: r(u, e[u]), done: !1 };
      }m.next = function () {
        return { done: !0, value: void 0 };
      };return m.next();
    } };m[Symbol.iterator] = function () {
    return m;
  };return m;
};
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;e = e.split('.');for (m = 0; m < e.length - 1; m++) {
      var u = e[m];u in p || (p[u] = {});p = p[u];
    }e = e[e.length - 1];m = p[e];r = r(m);r != m && r != null && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
  }
};$jscomp.polyfill('Array.prototype.keys', function (e) {
  return e || function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, 'es6-impl', 'es3');var $jscomp$this = undefined;
(function (e, r) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports ? module.exports = r() : e.anime = r();
})(undefined, function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }function r(a, c) {
    for (var d = a.length, b = arguments.length >= 2 ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];c.call(b, k, n, a) && f.push(k);
      }
    }return f;
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }function C(a) {
    var c = {};var d;for (d in a) {
      c[d] = a[d];
    }return c;
  }function D(a, c) {
    var d = C(a);var b;for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }return d;
  }function z(a, c) {
    var d = C(a);var b;for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }return d;
  }function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);var d = parseInt(c[2], 16);var c = parseInt(c[3], 16);return 'rgba(' + a + ',' + d + ',' + c + ',1)';
  }function U(a) {
    function c(a, c, b) {
      b < 0 && (b += 1);b > 1 && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : b < 0.5 ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100;var f = parseInt(d[3]) / 100;var d = d[4] || 1;if (b == 0) f = b = a = f;else {
      var n = f < 0.5 ? f * (1 + b) : f + b - f * b;var k = 2 * f - n;var f = c(k, n, a + 1 / 3);var b = c(k, n, a);a = c(k, n, a - 1 / 3);
    }return 'rgba(' + 255 * f + ',' + 255 * b + ',' + 255 * a + ',' + d + ')';
  }function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }function V(a) {
    if (a.indexOf('translate') > -1 || a === 'perspective') return 'px';if (a.indexOf('rotate') > -1 || a.indexOf('skew') > -1) return 'deg';
  }function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) || '0';
  }function J(a, c) {
    if (h.dom(a) && u(W, c)) return 'transform';if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return 'attribute';if (h.dom(a) && c !== 'transform' && E(a, c)) return 'css';if (a[c] != null) return 'object';
  }function X(a, c) {
    var d = V(c);var d = c.indexOf('scale') > -1 ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }a = r(n, function (a, b) {
      return f[b] === c;
    });return a.length ? a[0] : d;
  }function K(a, c) {
    switch (J(a, c)) {case 'transform':
        return X(a, c);case 'css':
        return E(a, c);case 'attribute':
        return a.getAttribute(c);}return a[c] || 0;
  }function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ''));switch (d[0][0]) {case '+':
        return c + a + b;case '-':
        return c - a + b;case '*':
        return c * a + b;}
  }function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }function M(a) {
    a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);b > 0 && (c += F(d, f));d = f;
    }return c;
  }function N(a) {
    if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {
      case 'circle':
        return 2 * Math.PI * a.getAttribute('r');case 'rect':
        return 2 * a.getAttribute('width') + 2 * a.getAttribute('height');case 'line':
        return F({ x: a.getAttribute('x1'), y: a.getAttribute('y1') }, { x: a.getAttribute('x2'), y: a.getAttribute('y2') });case 'polyline':
        return M(a);case 'polygon':
        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));
    }
  }function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;return a.el.getPointAtLength(c + b >= 1 ? c + b : 0);
    }var b = d();var f = d(-1);var n = d(1);switch (a.property) {
      case 'x':
        return b.x;case 'y':
        return b.y;
      case 'angle':
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;
    }
  }function O(a, c) {
    var d = /-?\d*\.?\d+/g;var b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? 'rgba(' + f[1] + ',1)' : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += '';return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
  }function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }function Z(a) {
    var c = P(a);return c.map(function (a, b) {
      return { target: a, id: b, total: c.length };
    });
  }function aa(a, c) {
    var d = C(c);if (h.arr(a)) {
      var b = a.length;b !== 2 || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
    }return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
    }).map(function (a) {
      return z(a, d);
    });
  }function ba(a, c) {
    var d = {};var b;for (b in a) {
      var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), f.length === 1 && (f = f[0]));d[b] = f;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }function da(a, c) {
    var d;return a.tweens.map(function (b) {
      b = ba(b, c);var f = b.value;var e = K(c.target, a.name);var k = d ? d.to.original : e;var k = h.arr(f) ? f[0] : k;var w = L(h.arr(f) ? f[1] : f, k);var e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
    });
  }function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }function R(a, c, d, b) {
    var f = a === 'delay';return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }function fa(a) {
    var c = D(ga, a);var d = D(S, a);var b = Z(a.targets);var f = [];var e = z(c, d);var k;for (k in a) {
      e.hasOwnProperty(k) || k === 'targets' || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
    }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R('duration', a, c, d), delay: R('delay', a, c, d) });
  }function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }function d(a) {
      return g.reversed ? g.duration - a : a;
    }function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b];
        var k = e.animatable;var h = e.tweens;var n = h.length - 1;var l = h[n];n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0;var x = l.to.numbers[t];var q = l.from.numbers[t];var x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && t > 2 || (x = Math.round(x * p) / p));n.push(x);
        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + ' '));
        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
      }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, 'transform') ? 'transform' : '-webkit-transform'), g.animatables[d].target.style[H] = c[d].join(' ');
      }g.currentTime = a;g.progress = a / g.duration * 100;
    }function f(a) {
      if (g[a]) g[a](g);
    }function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }function k(a) {
      var k = g.duration;var n = g.offset;var w = n + g.delay;var r = g.currentTime;var x = g.reversed;var q = d(a);if (g.children.length) {
        var u = g.children;var v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }if (q >= w || !k) g.began || (g.began = !0, f('begin')), f('run');if (q > n && q < k) b(q);else if (q <= n && r !== 0 && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f('update');a >= k && (g.remaining ? (t = h, g.direction === 'alternate' && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f('complete'), 'Promise' in window && (p(), m = c()))), l = 0);
    }a = void 0 === a ? {} : a;var h;var t;var l = 0;var p = null;var m = c();var g = fa(a);g.reset = function () {
      var a = g.direction;var c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = a === 'reverse';g.remaining = a === 'alternate' && c === 1 ? 2 : c;b(0);for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };g.tick = function (a) {
      h = a;t || (t = h);k((l + h - t) * q.speed);
    };g.seek = function (a) {
      k(d(a));
    };g.pause = function () {
      var a = v.indexOf(g);a > -1 && v.splice(a, 1);g.paused = !0;
    };g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };g.reverse = function () {
      g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
    };g.restart = function () {
      g.pause();
      g.reset();g.play();
    };g.finished = m;g.reset();g.autoplay && g.play();return g;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: 'normal', autoplay: !0, offset: 0 };var S = { duration: 1E3, delay: 0, easing: 'easeOutElastic', elasticity: 500, round: 0 };var W = 'translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective'.split(' ');var H;var h = { arr: function arr(a) {
      return Array.isArray(a);
    },
    obj: function obj(a) {
      return Object.prototype.toString.call(a).indexOf('Object') > -1;
    },
    pth: function pth(a) {
      return h.obj(a) && a.hasOwnProperty('totalLength');
    },
    svg: function svg(a) {
      return a instanceof SVGElement;
    },
    dom: function dom(a) {
      return a.nodeType || h.svg(a);
    },
    str: function str(a) {
      return typeof a === 'string';
    },
    fnc: function fnc(a) {
      return typeof a === 'function';
    },
    und: function und(a) {
      return typeof a === 'undefined';
    },
    hex: function hex(a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    },
    rgb: function rgb(a) {
      return (/^rgb/.test(a)
      );
    },
    hsl: function hsl(a) {
      return (/^hsl/.test(a)
      );
    },
    col: function col(a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    } };var A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }return function (c, d, b, f) {
      if (c >= 0 && c <= 1 && b >= 0 && b <= 1) {
        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; k < 11; ++k) {
          e[k] = a(0.1 * k, c, b);
        }return function (k) {
          if (c === d && b === f) return k;if (k === 0) return 0;if (k === 1) return 1;for (var h = 0, l = 1; l !== 10 && e[l] <= k; ++l) {
            h += 0.1;
          }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * 0.1;var n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (n >= 0.001) {
            for (h = 0; h < 4; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (n === 0) break;var m = a(l, c, b) - k;var l = l - m / n;
            }k = l;
          } else if (n === 0) k = l;else {
            var l = h;var h = h + 0.1;var g = 0;do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, n > 0 ? h = m : l = m;
            } while (Math.abs(n) > 1e-7 && ++g < 10);k = m;
          }return a(k, d, f);
        };
      }
    };
  }();var Q = function () {
    function a(a, b) {
      return a === 0 || a === 1 ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var c = 'Quad Cubic Quart Quint Sine Expo Circ Back Elastic'.split(' ');var d = { In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], a],
      Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }],
      InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function (b, c) {
        return b < 0.5 ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] };var b = { linear: A(0.25, 0.25, 0.75, 0.75) };var f = {};var e;for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b['ease' + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = { type: f.type };
    }return b;
  }();var ha = { css: function css(a, c, d) {
      return a.style[c] = d;
    }, attribute: function attribute(a, c, d) {
      return a.setAttribute(c, d);
    }, object: function object(a, c, d) {
      return a[c] = d;
    }, transform: function transform(a, c, d, b, f) {
      b[f] || (b[f] = []);b[f].push(c + '(' + d + ')');
    } };var v = [];var B = 0;var ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }function c(c) {
      var b = v.length;if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }a();
      } else cancelAnimationFrame(B), B = 0;
    }return a;
  }();q.version = '2.2.0';q.speed = 1;q.running = v;q.remove = function (a) {
    a = P(a);for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };q.getValue = K;q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a;var b = c || 100;return function (a) {
      return { el: d, property: a, totalLength: N(d) * (b / 100) };
    };
  };q.setDashoffset = function (a) {
    var c = N(a);a.setAttribute('stroke-dasharray', c);return c;
  };q.bezier = A;q.easings = Q;q.timeline = function (a) {
    var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
      });c.seek(0);c.reset();c.autoplay && c.restart();return c;
    };return c;
  };q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };return q;
});
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register($jscomp, '$jscomp', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js');
  reactHotLoader.register($jscomp$this, '$jscomp$this', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js');
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

  reactHotLoader.register($jscomp, '$jscomp', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js');
  reactHotLoader.register($jscomp$this, '$jscomp$this', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/CompareIp/lib/charming.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e) {
   false ? this.charming = e : module.exports = e;
}(function (e, n) {
  'use strict';

  n = n || {};
  var t = n.tagName || 'span';var o = n.classPrefix != null ? n.classPrefix : 'char';var r = 1;var a = function a(e) {
    for (var n = e.parentNode, a = e.nodeValue, c = a.length, l = -1; ++l < c;) {
      var d = document.createElement(t);
      o && (d.className = o + r, r++), d.appendChild(document.createTextNode(a[l])), n.insertBefore(d, e);
    }
    n.removeChild(e);
  };
  return function c(e) {
    for (var n = [].slice.call(e.childNodes), t = n.length, o = -1; ++o < t;) {
      c(n[o]);
    }e.nodeType === Node.TEXT_NODE && a(e);
  }(e), e;
});

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomBetween = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * wordFx.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.codrops.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the MIT license.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.opensource.org/licenses/mit-license.php
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017, Codrops
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.codrops.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _charming = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/charming.min.js");

var _charming2 = _interopRequireDefault(_charming);

var _anime = __webpack_require__("./resources/assets/js/components/Portfolio/sections/CompareIp/lib/anime.min.js");

var _anime2 = _interopRequireDefault(_anime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// From https://davidwalsh.name/javascript-debounce-function.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// From http://snipplr.com/view/37687/random-number-float-generator/
function randomBetween(minValue, maxValue, precision) {
  if (typeof precision === 'undefined') {
    precision = 2;
  }
  return parseFloat(Math.min(minValue + Math.random() * (maxValue - minValue), maxValue).toFixed(precision));
}

var winsize = { width: window.innerWidth, height: window.innerHeight };

var Shape = function () {
  function Shape(type, letterRect, options) {
    _classCallCheck(this, Shape);

    this.DOM = {};
    this.options = {
      shapeTypes: ['circle', 'rect', 'polygon'],
      shapeColors: ['#e07272', '#0805b5', '#49c6ff', '#8bc34a', '#1e1e21', '#e24e81', '#e0cd24'],
      shapeFill: true,
      shapeStrokeWidth: 1
    };
    Object.assign(this.options, options);
    this.type = type || this.options.shapeTypes[0];
    if (this.type !== 'random' && !this.options.types.includes(this.type)) return;
    if (this.type === 'random') this.type = this.options.shapeTypes[randomBetween(0, this.options.shapeTypes.length - 1, 0)];
    this.letterRect = letterRect;
    this.init();
  }

  _createClass(Shape, [{
    key: 'init',
    value: function init() {
      this.DOM.el = document.createElementNS('http://www.w3.org/2000/svg', this.type);
      this.DOM.el.style.opacity = 0;
      this.configureShapeType();

      if (this.options.shapeFill) {
        this.DOM.el.setAttribute('fill', this.options.shapeColors[randomBetween(0, this.options.shapeColors.length - 1, 0)]);
      } else {
        this.DOM.el.setAttribute('fill', 'none');
        this.DOM.el.setAttribute('stroke-width', this.options.shapeStrokeWidth);
        this.DOM.el.setAttribute('stroke', this.options.shapeColors[randomBetween(0, this.options.shapeColors.length - 1, 0)]);
      }
    }
  }, {
    key: 'configureShapeType',
    value: function configureShapeType() {
      this.DOM.el.style.transformOrigin = this.letterRect.left + this.letterRect.width / 2 + 'px ' + (this.letterRect.top + this.letterRect.height / 2) + 'px';

      if (this.type === 'circle') {
        var r = 0.5 * this.letterRect.width;
        this.DOM.el.setAttribute('r', r);
        this.DOM.el.setAttribute('cx', this.letterRect.left + this.letterRect.width / 2);
        this.DOM.el.setAttribute('cy', this.letterRect.top + this.letterRect.height / 2);
      } else if (this.type === 'rect') {
        var w = randomBetween(0.05, 0.5, 3) * this.letterRect.width;
        var h = randomBetween(0.05, 0.5, 3) * this.letterRect.height;
        this.DOM.el.setAttribute('width', w);
        this.DOM.el.setAttribute('height', h);
        this.DOM.el.setAttribute('x', this.letterRect.left + (this.letterRect.width - w) / 2);
        this.DOM.el.setAttribute('y', this.letterRect.top + (this.letterRect.height - h) / 2);
      } else if (this.type === 'polygon') {
        this.DOM.el.setAttribute('points', this.letterRect.left + ' ' + (this.letterRect.top + this.letterRect.height) + ', ' + (this.letterRect.left + this.letterRect.width / 2) + ' ' + (this.letterRect.bottom - this.letterRect.width) + ', ' + (this.letterRect.left + this.letterRect.width) + ' ' + (this.letterRect.top + this.letterRect.height));
      }
    }
  }, {
    key: 'onResize',
    value: function onResize(letterRect) {
      this.letterRect = letterRect;
      this.configureShapeType();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Shape;
}();

;

var Letter = function () {
  function Letter(el, svg, options) {
    _classCallCheck(this, Letter);

    this.DOM = {};
    this.DOM.el = el;
    this.DOM.svg = svg;
    this.options = {
      totalShapes: 10
    };
    Object.assign(this.options, options);
    this.rect = this.DOM.el.getBoundingClientRect();
    this.totalShapes = this.options.totalShapes;
    this.init();
    this.initEvents();
  }

  _createClass(Letter, [{
    key: 'init',
    value: function init() {
      this.shapes = [];
      for (var i = 0; i <= this.totalShapes - 1; ++i) {
        var shape = new Shape('random', this.rect, this.options);
        this.shapes.push(shape);
        this.DOM.svg.appendChild(shape.DOM.el);
      }
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var _this = this;

      window.addEventListener('resize', debounce(function () {
        _this.rect = _this.DOM.el.getBoundingClientRect();
        for (var i = 0; i <= _this.totalShapes - 1; ++i) {
          var shape = _this.shapes[i];
          shape.onResize(_this.rect);
        }
      }, 20));
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Letter;
}();

;

var Word = function () {
  function Word(el, options) {
    _classCallCheck(this, Word);

    this.DOM = {};
    this.DOM.el = el;
    this.options = {
      shapesOnTop: false
    };
    Object.assign(this.options, options);
    this.init();
    this.initEvents();
  }

  _createClass(Word, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.createSVG();
      (0, _charming2.default)(this.DOM.el);
      this.letters = [];
      Array.from(this.DOM.el.querySelectorAll('span')).forEach(function (letter) {
        return _this2.letters.push(new Letter(letter, _this2.DOM.svg, _this2.options));
      });
    }
  }, {
    key: 'initEvents',
    value: function initEvents() {
      var _this3 = this;

      window.addEventListener('resize', debounce(function () {
        winsize = { width: window.innerWidth, height: window.innerHeight };
        _this3.DOM.svg.setAttribute('width', winsize.width + 'px');
        _this3.DOM.svg.setAttribute('height', winsize.width + 'px');
        _this3.DOM.svg.setAttribute('viewbox', '0 0 ' + winsize.width + ' ' + winsize.height);
      }, 20));
    }
  }, {
    key: 'createSVG',
    value: function createSVG() {
      this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.DOM.svg.setAttribute('class', 'shapes');
      this.DOM.svg.setAttribute('width', winsize.width + 'px');
      this.DOM.svg.setAttribute('height', winsize.width + 'px');
      this.DOM.svg.setAttribute('viewbox', '0 0 ' + winsize.width + ' ' + winsize.height);
      if (this.options.shapesOnTop) {
        this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el.nextSibling);
      } else {
        this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el);
      }
    }
  }, {
    key: 'show',
    value: function show(config) {
      return this.toggle('show', config);
    }
  }, {
    key: 'hide',
    value: function hide(config) {
      return this.toggle('hide', config);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var _this4 = this;

      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'show';
      var config = arguments[1];

      return new Promise(function (resolve, reject) {
        var toggleNow = function toggleNow() {
          for (var i = 0, len = _this4.letters.length; i <= len - 1; ++i) {
            _this4.letters[i].DOM.el.style.opacity = action === 'show' ? 1 : 0;
          }
          resolve();
        };

        if (config && Object.keys(config).length !== 0) {
          if (config.shapesAnimationOpts) {
            for (var i = 0, len = _this4.letters.length; i <= len - 1; ++i) {
              var letter = _this4.letters[i];
              setTimeout(function (letter) {
                return function () {
                  config.shapesAnimationOpts.targets = letter.shapes.map(function (shape) {
                    return shape.DOM.el;
                  });
                  _anime2.default.remove(config.shapesAnimationOpts.targets);
                  (0, _anime2.default)(config.shapesAnimationOpts);
                };
              }(letter), config.lettersAnimationOpts && config.lettersAnimationOpts.delay ? config.lettersAnimationOpts.delay(letter.DOM.el, i) : 0);
            }
          }
          if (config.lettersAnimationOpts) {
            config.lettersAnimationOpts.targets = _this4.letters.map(function (letter) {
              return letter.DOM.el;
            });
            config.lettersAnimationOpts.complete = function () {
              if (action === 'hide') {
                for (var _i = 0, _len = config.lettersAnimationOpts.targets.length; _i <= _len - 1; ++_i) {
                  config.lettersAnimationOpts.targets[_i].style.transform = 'none';
                }
              }
              resolve();
            };
            (0, _anime2.default)(config.lettersAnimationOpts);
          } else {
            toggleNow();
          }
        } else {
          toggleNow();
        }
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Word;
}();

;

window.Word = Word;

exports.randomBetween = randomBetween;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(debounce, 'debounce', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(randomBetween, 'randomBetween', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(winsize, 'winsize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Shape, 'Shape', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Letter, 'Letter', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Word, 'Word', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
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

  reactHotLoader.register(debounce, 'debounce', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(randomBetween, 'randomBetween', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(winsize, 'winsize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Shape, 'Shape', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Letter, 'Letter', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  reactHotLoader.register(Word, 'Word', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/CompareIp/lib/wordFx.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Factoringvergelijken = undefined;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    backgroundImage: 'url(../imgs/profil_city.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '0px'

  }
};

var Factoringvergelijken = exports.Factoringvergelijken = function Factoringvergelijken() {
  return _react2.default.createElement(
    'div',
    { style: style.outter },
    _react2.default.createElement('div', { style: style.bgLayerStyle }),
    _react2.default.createElement(_Pattern2.default, {

      classname: 'Factoringvergelijken',
      logo: '../imgs/logo_f.png',
      url: _constants2.default.factoringvergelijken,
      effectClassIn: 'slideInDown',
      effectClassOut: 'zoomOutUp',
      technologies: function technologies() {
        return _react2.default.createElement('div', { className: 'technologies' });
      },

      description: function description() {
        return _react2.default.createElement(
          'div',
          { className: 'description' },
          _react2.default.createElement(
            'p',
            null,
            'My team and I have developed the application build with Yii2. Also I have made and designed some parts of the interface; improvement of modules in the administration panel'
          )
        );
      },

      figure: function figure() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            null,
            'View'
          ),
          _react2.default.createElement(
            'span',
            null,
            'factoring'
          )
        );
      },

      logoDescription: function logoDescription() {
        return _react2.default.createElement(
          'p',
          { className: 'header-container' },
          _react2.default.createElement(
            'span',
            { className: 'paragraph' },
            'Online factoring services'
          )
        );
      }

    })
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js');
  reactHotLoader.register(Factoringvergelijken, 'Factoringvergelijken', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js');
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

  reactHotLoader.register(Factoringvergelijken, 'Factoringvergelijken', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js');
  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Factoringvergelijken.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/History24.js":
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

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  outter: {
    backgroundPosition: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    height: '100vh'
  },
  bgLayerStyle: {
    backgroundImage: 'url(../imgs/history.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '100vh',
    bottom: '0px'

  }
};

var History24 = function (_Component) {
  _inherits(History24, _Component);

  function History24() {
    _classCallCheck(this, History24);

    return _possibleConstructorReturn(this, (History24.__proto__ || Object.getPrototypeOf(History24)).apply(this, arguments));
  }

  _createClass(History24, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.history24) {
        $('#fp-nav ul li a span').addClass('history24-bg');
      } else {
        $('#fp-nav ul li a span').removeClass('history24-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: style.outter },
        _react2.default.createElement('div', { style: style.bgLayerStyle }),
        _react2.default.createElement(_Pattern2.default, {

          classname: 'History24',
          logo: '../imgs/pantheon2.svg',
          url: _constants2.default.history24,
          effectClassIn: 'zoomIn',
          effectClassOut: 'zoomOut',
          technologies: function technologies() {
            return _react2.default.createElement('div', { className: 'technologies' });
          },

          description: function description() {
            return _react2.default.createElement(
              'div',
              { className: 'description' },
              _react2.default.createElement(
                'p',
                null,
                'I have build the educational platform, based on the PHP framework - Laravel;',
                _react2.default.createElement(
                  'span',
                  null,
                  'designed the architecture of the system, wrote the frontend using Bootstrap, Gulp, Jquery and other libraries'
                )
              )
            );
          },

          figure: function figure() {
            return _react2.default.createElement('div', null);
          },

          logoDescription: function logoDescription() {
            return _react2.default.createElement(
              'p',
              { className: 'header-container' },
              _react2.default.createElement(
                'span',
                { className: 'header' },
                'HISTORY.RF'
              ),
              _react2.default.createElement(
                'span',
                { className: 'paragraph' },
                'Russian portal for online preparation for exams on history'
              )
            );
          }

        })
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

  return History24;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}
History24.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(History24);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(History24, 'History24', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(History24, 'History24', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/History24.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Houses.js":
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

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  outter: {
    backgroundPosition: 'center',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    height: '100vh'
  },
  bgLayerStyle: {

    width: '100vw',
    height: '100vh',
    position: 'absolute',
    overflow: 'hidden',
    background: 'rgba(0,0,0, 0.4)'
  }
};

var Houses = function (_Component) {
  _inherits(Houses, _Component);

  function Houses() {
    _classCallCheck(this, Houses);

    return _possibleConstructorReturn(this, (Houses.__proto__ || Object.getPrototypeOf(Houses)).apply(this, arguments));
  }

  _createClass(Houses, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.houses) {
        $('#fp-nav ul li a span').addClass('houses-bg');
      } else {
        $('#fp-nav ul li a span').removeClass('houses-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: style.outter },
        _react2.default.createElement('div', { style: style.bgLayerStyle }),
        _react2.default.createElement(_Pattern2.default, {

          classname: 'Houses',
          logo: null,
          logoText: 'HOOMES',
          url: '',
          effectClassIn: 'zoomIn',
          effectClassOut: 'zoomOut',
          technologies: function technologies(_) {
            return _react2.default.createElement('div', { className: 'technologies' });
          },

          description: function description() {
            return _react2.default.createElement(
              'div',
              { className: 'description' },
              _react2.default.createElement(
                'p',
                null,
                'I have developed the project, including the development of the backend part on Laravel, and the frontend on VueJs; design of architecture; code review of team members'
              )
            );
          },

          figure: function figure() {
            return _react2.default.createElement('div', null);
          },

          logoDescription: function logoDescription() {
            return _react2.default.createElement(
              'p',
              { className: 'paragraph' },
              'The system for design and buying a construction project of building'
            );
          }

        })
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

  return Houses;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Houses.propTypes = {
  page: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(Houses);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(Houses, 'Houses', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(Houses, 'Houses', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Houses.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js":
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

var _swirl = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js");

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Linkful = function (_Component) {
  _inherits(Linkful, _Component);

  function Linkful(props) {
    _classCallCheck(this, Linkful);

    var _this = _possibleConstructorReturn(this, (Linkful.__proto__ || Object.getPrototypeOf(Linkful)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        info: !_this.state.info
      });
    };

    _this.state = {
      info: false
    };
    return _this;
  }

  _createClass(Linkful, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.portfolio || nextProps.page.page === _urls.URLS.first_slide || nextProps.page.page === _urls.URLS.linkful) {
        (0, _swirl.setup)();
        $('#fp-nav ul li a span').addClass('linkful-bg');
      } else {
        (0, _swirl.remove)();
        $('#fp-nav ul li a span').removeClass('linkful-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-2 linkful' },
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement('div', { className: 'frame' }),
          _react2.default.createElement(
            'div',
            { className: 'content content--canvas-linkful' },
            _react2.default.createElement(
              'div',
              { className: 'linkful-container' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: _constants2.default.linksfulUrl
                  },
                  _react2.default.createElement('div', { className: 'logo' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: _constants2.default.linksfulUrl
                    },
                    'LINKFUL - A STUNNING WAY TO CREATE A\xA0PERFECT ABOUT\xA0ME PAGE!'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'tech-container ' + (this.state.info ? 'd-none' : 'd-flex') },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement('div', { className: 'techs' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none') },
                'I have created, designed and developed this project. I built the application using the most powerful and popular technologies. The frontend of the user dashboard was built using React and Redux, and also used Saga to manage the asynchronous actions. The administration panel is built with Nova, and separate components with Vue were also developed. The backend is based on Laravel, the Mysql and Mongo database for storing statistics. The system is fully tested. Infrastructure works on the basis of Docker and Continues Delivery.'
              ),
              _react2.default.createElement('div', { className: 'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down'),
                onClick: this.toggle }),
              _react2.default.createElement(
                'a',
                {
                  className: 'mt-50 description',
                  target: '_blank',
                  href: _constants2.default.linksfulUrl
                },
                'CHECK IT OUT'
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

  return Linkful;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Linkful.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(Linkful);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Linkful, 'Linkful', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
  reactHotLoader.register(Linkful, 'Linkful', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/Linkful.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

exports.remove = remove;
exports.setup = setup;

var _simplexNoise = __webpack_require__("./node_modules/simplex-noise/simplex-noise.js");

var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

var _util = __webpack_require__("./resources/assets/js/components/Portfolio/sections/common/util.js");

var _DetectBrowser = __webpack_require__("./resources/assets/js/services/DetectBrowser.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var particleCount = 400;
var particlePropCount = 9;
var particlePropsLength = particleCount * particlePropCount;
var rangeY = 100;
var baseTTL = 50;
var rangeTTL = 150;
var baseSpeed = 0.1;
var rangeSpeed = 2;
var baseRadius = 1;
var rangeRadius = 4;
var baseHue = 220;
var rangeHue = 100;
var noiseSteps = 8;
var xOff = 0.00125;
var yOff = 0.00125;
var zOff = 0.0005;
var backgroundColor = 'hsla(260,40%,5%,1)';

var container = void 0;
var canvas = void 0;
var ctx = void 0;
var center = void 0;
var tick = void 0;
var simplex = void 0;
var particleProps = void 0;

function initParticles() {
    tick = 0;
    simplex = new _simplexNoise2.default();
    particleProps = new Float32Array(particlePropsLength);

    var i = void 0;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
    }
}

function initParticle(i) {
    var x = void 0,
        y = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        speed = void 0,
        radius = void 0,
        hue = void 0;

    x = (0, _util.rand)(canvas.a.width);
    y = center[1] + (0, _util.randRange)(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + (0, _util.rand)(rangeTTL);
    speed = baseSpeed + (0, _util.rand)(rangeSpeed);
    radius = baseRadius + (0, _util.rand)(rangeRadius);
    hue = baseHue + (0, _util.rand)(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function drawParticles() {
    var i = void 0;

    for (i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
    }
}

function updateParticle(i) {
    var i2 = 1 + i;
    var i3 = 2 + i;
    var i4 = 3 + i;
    var i5 = 4 + i;
    var i6 = 5 + i;
    var i7 = 6 + i;
    var i8 = 7 + i;
    var i9 = 8 + i;
    var n = void 0,
        x = void 0,
        y = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        speed = void 0,
        x2 = void 0,
        y2 = void 0,
        radius = void 0,
        hue = void 0;

    x = particleProps[i];
    y = particleProps[i2];
    n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * _util.TAU;
    vx = (0, _util.lerp)(particleProps[i3], (0, _util.cos)(n), 0.5);
    vy = (0, _util.lerp)(particleProps[i4], (0, _util.sin)(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y) || life > ttl) && initParticle(i);
}

function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
    ctx.a.save();
    ctx.a.lineCap = 'round';
    ctx.a.lineWidth = radius;
    ctx.a.strokeStyle = 'hsla(' + hue + ',100%,60%,' + (0, _util.fadeInOut)(life, ttl) + ')';
    ctx.a.beginPath();
    ctx.a.moveTo(x, y);
    ctx.a.lineTo(x2, y2);
    ctx.a.stroke();
    ctx.a.closePath();
    ctx.a.restore();
}

function checkBounds(x, y) {
    return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0;
}

function createCanvas() {
    container = document.querySelector('.content--canvas-linkful');
    canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
    };
    canvas.b.style = '\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t';
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d')
    };
    center = [];
}

function resize() {
    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;


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
    if (!_DetectBrowser.DetectBrowser.isFirefox()) {
        ctx.b.filter = 'blur(8px) brightness(200%)';
    }
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();

    ctx.b.save();
    if (!_DetectBrowser.DetectBrowser.isFirefox()) {
        ctx.b.filter = 'blur(4px) brightness(200%)';
    }
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function renderToScreen() {
    ctx.b.save();
    ctx.b.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function draw() {

    if (!ctx) {
        return;
    }

    tick++;

    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);

    drawParticles();
    renderGlow();
    renderToScreen();

    window.requestAnimationFrame(draw);
}

function remove() {
    if (document.querySelector('.content--canvas-linkful canvas')) {
        document.querySelector('.content--canvas-linkful canvas').remove();
    }
    container = null;
    canvas = null;
    ctx = null;
    center = null;
    tick = null;
    simplex = null;
    particleProps = null;
}

function setup() {
    if (document.querySelector('.content--canvas-linkful canvas')) {
        return;
    }

    createCanvas();
    resize();
    initParticles();
    draw();
}

window.addEventListener('resize', resize);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(particleCount, 'particleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particlePropCount, 'particlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particlePropsLength, 'particlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeY, 'rangeY', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseRadius, 'baseRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeRadius, 'rangeRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(noiseSteps, 'noiseSteps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(xOff, 'xOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(yOff, 'yOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(zOff, 'zOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(simplex, 'simplex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particleProps, 'particleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(initParticles, 'initParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(initParticle, 'initParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(drawParticles, 'drawParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(updateParticle, 'updateParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(drawParticle, 'drawParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(renderGlow, 'renderGlow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(renderToScreen, 'renderToScreen', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
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

    reactHotLoader.register(initParticles, 'initParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(initParticle, 'initParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(drawParticles, 'drawParticles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(updateParticle, 'updateParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(drawParticle, 'drawParticle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(renderGlow, 'renderGlow', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(renderToScreen, 'renderToScreen', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particleCount, 'particleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particlePropCount, 'particlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particlePropsLength, 'particlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeY, 'rangeY', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseRadius, 'baseRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeRadius, 'rangeRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(noiseSteps, 'noiseSteps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(xOff, 'xOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(yOff, 'yOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(zOff, 'zOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(simplex, 'simplex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    reactHotLoader.register(particleProps, 'particleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Linkful/lib/swirl.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js":
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

var _shift = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js");

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Neocore = function (_Component) {
  _inherits(Neocore, _Component);

  function Neocore(props) {
    _classCallCheck(this, Neocore);

    var _this = _possibleConstructorReturn(this, (Neocore.__proto__ || Object.getPrototypeOf(Neocore)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        info: !_this.state.info
      });
    };

    _this.state = {
      info: false
    };
    return _this;
  }

  _createClass(Neocore, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.neocore) {
        (0, _shift.setup)();
        $('#fp-nav ul li a span').addClass('neocore-bg');
      } else {
        (0, _shift.remove)();
        $('#fp-nav ul li a span').removeClass('neocore-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-4 neocore' },
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement('div', { className: 'frame' }),
          _react2.default.createElement(
            'div',
            { className: 'content content--canvas-neocore' },
            _react2.default.createElement(
              'div',
              { className: 'neocore-container' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement('div', { className: 'logo' }),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  'online casino network'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'tech-container ' + (this.state.info ? 'd-none' : 'd-flex') },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement('div', { className: 'techs' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none') },
                'Developed GraphQL API for complex enterprise systems. Created a new various functionality, also covered with tests. Optimized queries to the MongoDB database, added indexes.'
              ),
              _react2.default.createElement('div', { className: 'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down'), onClick: this.toggle })
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

  return Neocore;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Neocore.propTypes = {
  page: _propTypes2.default.object,
  preloader: _propTypes2.default.object
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(Neocore);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Neocore, 'Neocore', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
  reactHotLoader.register(Neocore, 'Neocore', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/Neocore.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* eslint-disable no-unused-vars */



Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

exports.setup = setup;
exports.remove = remove;

var _util = __webpack_require__("./resources/assets/js/components/Portfolio/sections/common/util.js");

var _simplexNoise = __webpack_require__("./node_modules/simplex-noise/simplex-noise.js");

var _simplexNoise2 = _interopRequireDefault(_simplexNoise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var circleCount = 10;
var circlePropCount = 8;
var circlePropsLength = circleCount * circlePropCount;
var baseSpeed = 0.1;
var rangeSpeed = 1;
var baseTTL = 150;
var rangeTTL = 200;
var baseRadius = 100;
var rangeRadius = 200;
var rangeHue = 60;
var xOff = 0.0015;
var yOff = 0.0015;
var zOff = 0.0015;
var backgroundColor = 'hsla(0,0%,5%,1)';

var container = void 0;
var canvas = void 0;
var ctx = void 0;
var circles = void 0;
var circleProps = void 0;
var simplex = void 0;
var baseHue = void 0;

function initCircles() {
    circleProps = new Float32Array(circlePropsLength);
    simplex = new _simplexNoise2.default();
    baseHue = 220;

    var i = void 0;

    initCircle(0);
    for (i = 0; i < circlePropsLength; i += circlePropCount) {
        initCircle(i);
    }
}

function initCircle(i) {
    var x = void 0,
        y = void 0,
        n = void 0,
        t = void 0,
        speed = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        radius = void 0,
        hue = void 0;

    x = (0, _util.rand)(canvas.a.width);
    y = (0, _util.rand)(canvas.a.height);
    n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);
    t = (0, _util.rand)(_util.TAU);
    speed = baseSpeed + (0, _util.rand)(rangeSpeed);
    vx = speed * (0, _util.cos)(t);
    vy = speed * (0, _util.sin)(t);
    life = 0;
    ttl = baseTTL + (0, _util.rand)(rangeTTL);
    radius = baseRadius + (0, _util.rand)(rangeRadius);
    hue = baseHue + n * rangeHue;

    circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
}

function updateCircles() {
    var i = void 0;

    baseHue++;

    for (i = 0; i < circlePropsLength; i += circlePropCount) {
        updateCircle(i);
    }
}

function updateCircle(i) {
    var i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;
    var x = void 0,
        y = void 0,
        vx = void 0,
        vy = void 0,
        life = void 0,
        ttl = void 0,
        radius = void 0,
        hue = void 0;

    x = circleProps[i];
    y = circleProps[i2];
    vx = circleProps[i3];
    vy = circleProps[i4];
    life = circleProps[i5];
    ttl = circleProps[i6];
    radius = circleProps[i7];
    hue = circleProps[i8];

    drawCircle(x, y, life, ttl, radius, hue);

    life++;

    circleProps[i] = x + vx;
    circleProps[i2] = y + vy;
    circleProps[i5] = life;

    (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
}

function drawCircle(x, y, life, ttl, radius, hue) {
    ctx.a.save();
    ctx.a.fillStyle = 'hsla(' + hue + ',60%,30%,' + (0, _util.fadeInOut)(life, ttl) + ')';
    ctx.a.beginPath();
    ctx.a.arc(x, y, radius, 0, _util.TAU);
    ctx.a.fill();
    ctx.a.closePath();
    ctx.a.restore();
}

function checkBounds(x, y, radius) {
    return x < -radius || x > canvas.a.width + radius || y < -radius || y > canvas.a.height + radius;
}

function createCanvas() {
    container = document.querySelector('.content--canvas-neocore');
    canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas')
    };
    canvas.b.style = '\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t';
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d')
    };
}

function resize() {
    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;


    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;

    ctx.a.drawImage(canvas.b, 0, 0);

    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);
}

function render() {
    ctx.b.save();
    ctx.b.filter = 'blur(50px)';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}

function draw() {
    if (!ctx) {
        return;
    }
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
    updateCircles();
    render();
    window.requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);

function setup() {
    if (document.querySelector('.content--canvas-neocore canvas')) {
        return;
    }

    createCanvas();
    resize();
    initCircles();
    draw();
}

function remove() {
    if (document.querySelector('.content--canvas-neocore canvas')) {
        document.querySelector('.content--canvas-neocore canvas').remove();
    }
    container = null;
    canvas = null;
    ctx = null;
    circles = null;
    circleProps = null;
    simplex = null;
    baseHue = null;
}

var _default = setup;
var _default2 = _default;
exports.default = _default2;
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(circleCount, 'circleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circlePropCount, 'circlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circlePropsLength, 'circlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseRadius, 'baseRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeRadius, 'rangeRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(xOff, 'xOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(yOff, 'yOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(zOff, 'zOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circles, 'circles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circleProps, 'circleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(simplex, 'simplex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(initCircles, 'initCircles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(initCircle, 'initCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(updateCircles, 'updateCircles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(updateCircle, 'updateCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(drawCircle, 'drawCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
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

    reactHotLoader.register(initCircles, 'initCircles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(initCircle, 'initCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(updateCircles, 'updateCircles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(updateCircle, 'updateCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(drawCircle, 'drawCircle', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circleCount, 'circleCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circlePropCount, 'circlePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circlePropsLength, 'circlePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseRadius, 'baseRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeRadius, 'rangeRadius', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(xOff, 'xOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(yOff, 'yOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(zOff, 'zOff', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circles, 'circles', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(circleProps, 'circleProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(simplex, 'simplex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Neocore/lib/shift.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js":
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

var _pipeline = __webpack_require__("./resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js");

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _urls = __webpack_require__("./resources/assets/js/constants/urls.js");

var _connect = __webpack_require__("./node_modules/react-redux/es/connect/connect.js");

var _connect2 = _interopRequireDefault(_connect);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Smsplaza = function (_Component) {
  _inherits(Smsplaza, _Component);

  function Smsplaza(props) {
    _classCallCheck(this, Smsplaza);

    var _this = _possibleConstructorReturn(this, (Smsplaza.__proto__ || Object.getPrototypeOf(Smsplaza)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        info: !_this.state.info
      });
    };

    _this.state = {
      info: false
    };
    return _this;
  }

  _createClass(Smsplaza, [{
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps.page.page === _urls.URLS.smsplaza) {
        (0, _pipeline.setup)();
        $('#fp-nav ul li a span').addClass('smsplaza-bg');
      } else {
        (0, _pipeline.remove)();
        $('#fp-nav ul li a span').removeClass('smsplaza-bg');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-5 smsplaza' },
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement('div', { className: 'frame' }),
          _react2.default.createElement(
            'div',
            { className: 'content content--canvas--smsplaza' },
            _react2.default.createElement(
              'div',
              { className: 'smspalza-container' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement(
                  'a',
                  {
                    target: '_blank',
                    href: _constants2.default.smsplaza
                  },
                  _react2.default.createElement(
                    'div',
                    { className: 'logo' },
                    'SMSPLAZA'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'a',
                    {
                      target: '_blank',
                      href: _constants2.default.smsplaza
                    },
                    'Receive SMS Online | Verification Service'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'tech-container ' + (this.state.info ? 'd-none' : 'd-flex') },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement('div', { className: 'techs' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-container tzie-small ' + (this.state.info ? 'd-flex' : 'd-none') },
                'I have been doing development and teamleading of the application with external smsbank equipment, design architecture, development and code quality control as well. I used Nuxtjs as a frontend tool to build the interface. I also used Laravel as a backend framework for building the API, Laravel Nova for building administration panel; VueJs for building individual components. I have done complete coverage tests and developed the infrastructure.'
              ),
              _react2.default.createElement('div', { className: 'arrow ' + (this.state.info ? 'arrow-up' : 'arrow-down'), onClick: this.toggle }),
              _react2.default.createElement(
                'a',
                {
                  className: 'mt-50 description',
                  target: '_blank',
                  href: _constants2.default.smsplaza
                },
                'CHECK IT OUT'
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

  return Smsplaza;
}(_react.Component);

function mapStateToProps(state) {
  return {
    page: state.page,
    preloader: state.preloader
  };
}

Smsplaza.propTypes = {
  page: _propTypes2.default.object
};

var _default = (0, _connect2.default)(mapStateToProps, {})(Smsplaza);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Smsplaza, 'Smsplaza', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
  reactHotLoader.register(_default, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
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

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
  reactHotLoader.register(Smsplaza, 'Smsplaza', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
  reactHotLoader.register(_default2, 'default', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/Smsplaza.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

exports.setup = setup;
exports.remove = remove;

var _util = __webpack_require__("./resources/assets/js/components/Portfolio/sections/common/util.js");

var _DetectBrowser = __webpack_require__("./resources/assets/js/services/DetectBrowser.js");

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var pipeCount = 15;
var pipePropCount = 8;
var pipePropsLength = pipeCount * pipePropCount;
var turnCount = 8;
var turnAmount = 360 / turnCount * _util.TO_RAD;
var turnChanceRange = 58;
var baseSpeed = 0.5;
var rangeSpeed = 1;
var baseTTL = 100;
var rangeTTL = 300;
var baseWidth = 2;
var rangeWidth = 4;
var baseHue = 180;
var rangeHue = 60;
var backgroundColor = 'hsla(150,80%,1%,1)';

var container = void 0;
var canvas = void 0;
var ctx = void 0;
var center = void 0;
var tick = void 0;
var pipeProps = void 0;

function initPipes() {
  pipeProps = new Float32Array(pipePropsLength);

  var i = void 0;

  for (i = 0; i < pipePropsLength; i += pipePropCount) {
    initPipe(i);
  }
}

function initPipe(i) {
  var x = void 0,
      y = void 0,
      direction = void 0,
      speed = void 0,
      life = void 0,
      ttl = void 0,
      width = void 0,
      hue = void 0;

  x = (0, _util.rand)(canvas.a.width);
  y = center[1];
  direction = (0, _util.round)((0, _util.rand)(1)) ? _util.HALF_PI : _util.TAU - _util.HALF_PI;
  speed = baseSpeed + (0, _util.rand)(rangeSpeed);
  life = 0;
  ttl = baseTTL + (0, _util.rand)(rangeTTL);
  width = baseWidth + (0, _util.rand)(rangeWidth);
  hue = baseHue + (0, _util.rand)(rangeHue);

  pipeProps.set([x, y, direction, speed, life, ttl, width, hue], i);
}

function updatePipes() {

  if (!pipeProps) {
    return;
  }

  tick++;

  var i = void 0;

  for (i = 0; i < pipePropsLength; i += pipePropCount) {
    updatePipe(i);
  }
}

function updatePipe(i) {
  var i2 = 1 + i;
  var i3 = 2 + i;
  var i4 = 3 + i;
  var i5 = 4 + i;
  var i6 = 5 + i;
  var i7 = 6 + i;
  var i8 = 7 + i;
  var x = void 0,
      y = void 0,
      direction = void 0,
      speed = void 0,
      life = void 0,
      ttl = void 0,
      width = void 0,
      hue = void 0,
      turnChance = void 0,
      turnBias = void 0;

  x = pipeProps[i];
  y = pipeProps[i2];
  direction = pipeProps[i3];
  speed = pipeProps[i4];
  life = pipeProps[i5];
  ttl = pipeProps[i6];
  width = pipeProps[i7];
  hue = pipeProps[i8];

  drawPipe(x, y, life, ttl, width, hue);

  life++;
  x += (0, _util.cos)(direction) * speed;
  y += (0, _util.sin)(direction) * speed;
  turnChance = !(tick % (0, _util.round)((0, _util.rand)(turnChanceRange))) && (!((0, _util.round)(x) % 6) || !((0, _util.round)(y) % 6));
  turnBias = (0, _util.round)((0, _util.rand)(1)) ? -1 : 1;
  direction += turnChance ? turnAmount * turnBias : 0;

  pipeProps[i] = x;
  pipeProps[i2] = y;
  pipeProps[i3] = direction;
  pipeProps[i5] = life;

  checkBounds(x, y);
  life > ttl && initPipe(i);
}

function drawPipe(x, y, life, ttl, width, hue) {
  ctx.a.save();
  ctx.a.strokeStyle = 'hsla(' + hue + ',75%,50%,' + (0, _util.fadeInOut)(life, ttl) * 0.125 + ')';
  ctx.a.beginPath();
  ctx.a.arc(x, y, width, 0, _util.TAU);
  ctx.a.stroke();
  ctx.a.closePath();
  ctx.a.restore();
}

function checkBounds(x, y) {
  if (x > canvas.a.width) x = 0;
  if (x < 0) x = canvas.a.width;
  if (y > canvas.a.height) y = 0;
  if (y < 0) y = canvas.a.height;
}

function createCanvas() {
  container = document.querySelector('.content--canvas--smsplaza');
  canvas = {
    a: document.createElement('canvas'),
    b: document.createElement('canvas')
  };
  canvas.b.style = '\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t';
  container.appendChild(canvas.b);
  ctx = {
    a: canvas.a.getContext('2d'),
    b: canvas.b.getContext('2d')
  };
  center = [];
  tick = 0;
}

function resize() {
  var _window = window,
      innerWidth = _window.innerWidth,
      innerHeight = _window.innerHeight;


  canvas.a.width = innerWidth;
  canvas.a.height = innerHeight;

  ctx.a.drawImage(canvas.b, 0, 0);

  canvas.b.width = innerWidth;
  canvas.b.height = innerHeight;

  ctx.b.drawImage(canvas.a, 0, 0);

  center[0] = 0.5 * canvas.a.width;
  center[1] = 0.5 * canvas.a.height;
}

function render() {
  if (!ctx) {
    return;
  }
  ctx.b.save();
  ctx.b.fillStyle = backgroundColor;
  ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
  ctx.b.restore();

  ctx.b.save();
  if (!_DetectBrowser.DetectBrowser.isFirefox()) {
    ctx.b.filter = 'blur(12px)';
  }
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();

  ctx.b.save();
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function draw() {
  updatePipes();
  render();
  window.requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);

function setup() {
  if (document.querySelector('.content--canvas--smsplaza canvas')) {
    return;
  }

  createCanvas();
  resize();
  initPipes();
  draw();
}

function remove() {
  if (document.querySelector('.content--canvas--smsplaza canvas')) {
    document.querySelector('.content--canvas--smsplaza canvas').remove();
  }

  container = null;
  canvas = null;
  ctx = null;
  center = null;
  tick = null;
  pipeProps = null;
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pipeCount, 'pipeCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipePropCount, 'pipePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipePropsLength, 'pipePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnCount, 'turnCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnAmount, 'turnAmount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnChanceRange, 'turnChanceRange', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseWidth, 'baseWidth', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeWidth, 'rangeWidth', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipeProps, 'pipeProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(initPipes, 'initPipes', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(initPipe, 'initPipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(updatePipes, 'updatePipes', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(updatePipe, 'updatePipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(drawPipe, 'drawPipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
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

  reactHotLoader.register(initPipes, 'initPipes', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(initPipe, 'initPipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(updatePipes, 'updatePipes', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(updatePipe, 'updatePipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(drawPipe, 'drawPipe', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(checkBounds, 'checkBounds', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(createCanvas, 'createCanvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(resize, 'resize', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(render, 'render', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(draw, 'draw', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(setup, 'setup', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(remove, 'remove', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipeCount, 'pipeCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipePropCount, 'pipePropCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipePropsLength, 'pipePropsLength', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnCount, 'turnCount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnAmount, 'turnAmount', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(turnChanceRange, 'turnChanceRange', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseSpeed, 'baseSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeSpeed, 'rangeSpeed', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseTTL, 'baseTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeTTL, 'rangeTTL', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseWidth, 'baseWidth', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeWidth, 'rangeWidth', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(baseHue, 'baseHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(rangeHue, 'rangeHue', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(backgroundColor, 'backgroundColor', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(container, 'container', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(canvas, 'canvas', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(ctx, 'ctx', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(center, 'center', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(tick, 'tick', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  reactHotLoader.register(pipeProps, 'pipeProps', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Smsplaza/lib/pipeline.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/WellHome.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WellHome = undefined;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var style = {
  outter: {
    background: 'white',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  },
  bgLayerStyle: {
    backgroundImage: 'url(../imgs/Skyline.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '110%',
    position: 'absolute',
    overflow: 'hidden',
    minHeight: '40vh',
    bottom: '-50px'
  }
};

var WellHome = exports.WellHome = function WellHome() {
  return _react2.default.createElement(
    'div',
    { style: style.outter },
    _react2.default.createElement('div', { style: style.bgLayerStyle }),
    _react2.default.createElement(_Pattern2.default, {

      classname: 'WellHome',
      logo: '../imgs/wh.jpg',
      url: '',
      effectClassIn: 'lightSpeedIn',
      effectClassOut: 'lightSpeedOut',
      technologies: function technologies(_) {
        return _react2.default.createElement('div', { className: 'technologies' });
      },

      description: function description() {
        return _react2.default.createElement(
          'div',
          { className: 'description' },
          _react2.default.createElement(
            'p',
            null,
            'I have developed CRM system in order to automate business processes in the company engaged in the sale of real estate - ',
            _react2.default.createElement(
              'b',
              null,
              _react2.default.createElement(
                'a',
                { href: 'http://www.welhome.ru/',
                  target: 'blank' },
                'Welhome'
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              ', based on SugarCRM; designed the database and system architecture; integration with existing enterprise systems'
            )
          )
        );
      },

      figure: function figure() {
        return _react2.default.createElement('div', null);
      },

      logoDescription: function logoDescription() {
        return _react2.default.createElement(
          'p',
          { className: 'header-container' },
          _react2.default.createElement(
            'span',
            { className: 'paragraph' },
            'CRM system for real estate company'
          )
        );
      }

    })
  );
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/WellHome.js');
  reactHotLoader.register(WellHome, 'WellHome', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/WellHome.js');
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

  reactHotLoader.register(WellHome, 'WellHome', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/WellHome.js');
  reactHotLoader.register(style, 'style', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/WellHome.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/Yandex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Yandex = undefined;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__("./resources/assets/js/constants/constants.js");

var _constants2 = _interopRequireDefault(_constants);

var _Pattern = __webpack_require__("./resources/assets/js/components/Portfolio/parts/Pattern.js");

var _Pattern2 = _interopRequireDefault(_Pattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Yandex = exports.Yandex = function Yandex() {
  return _react2.default.createElement(_Pattern2.default, {
    classname: 'Yandex',
    logo: '../imgs/yandex/logo.png',
    url: _constants2.default.yandex,
    effectClassIn: 'bounceIn',
    effectClassOut: 'bounceOut',
    technologies: function technologies(_) {
      return _react2.default.createElement('div', { className: 'technologies' });
    },

    description: function description() {
      return _react2.default.createElement(
        'div',
        { className: 'description' },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'b',
            null,
            'I'
          ),
          ' have build the game. This is SPA on jquery and ',
          _react2.default.createElement(
            'b',
            null,
            'w'
          ),
          'ebpack',
          _react2.default.createElement('br', null),
          'with Ada',
          _react2.default.createElement(
            'b',
            null,
            'p'
          ),
          'tive ',
          _react2.default.createElement(
            'b',
            null,
            'I'
          ),
          'nterface',
          _react2.default.createElement('br', null),
          'and ',
          _react2.default.createElement(
            'b',
            null,
            'o'
          ),
          'ptimization of perform',
          _react2.default.createElement(
            'b',
            null,
            'a'
          ),
          'nce'
        )
      );
    },

    figure: function figure() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Check it'
        ),
        _react2.default.createElement(
          'span',
          null,
          'Check it'
        )
      );
    },

    logoDescription: function logoDescription() {
      return _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'S'
        ),
        'imple and relaxing game',
        _react2.default.createElement('br', null),
        'In honor of ',
        _react2.default.createElement(
          'b',
          null,
          'F'
        ),
        'ebruary 23',
        _react2.default.createElement('br', null),
        'For ',
        _react2.default.createElement(
          'b',
          null,
          'Y'
        ),
        'andex maps'
      );
    }

  });
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Yandex, 'Yandex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Yandex.js');
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

  reactHotLoader.register(Yandex, 'Yandex', '/var/www/portfolio/resources/assets/js/components/Portfolio/sections/Yandex.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/components/Portfolio/sections/common/util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var PI = Math.PI,
    cos = Math.cos,
    sin = Math.sin,
    abs = Math.abs,
    sqrt = Math.sqrt,
    pow = Math.pow,
    round = Math.round,
    random = Math.random,
    atan2 = Math.atan2;
exports.PI = PI;
exports.cos = cos;
exports.sin = sin;
exports.abs = abs;
exports.sqrt = sqrt;
exports.pow = pow;
exports.round = round;
exports.random = random;
exports.atan2 = atan2;
var HALF_PI = exports.HALF_PI = 0.5 * PI;
var TAU = exports.TAU = 2 * PI;
var TO_RAD = exports.TO_RAD = PI / 180;
var floor = exports.floor = function floor(n) {
  return n | 0;
};
var rand = exports.rand = function rand(n) {
  return n * random();
};
var randIn = exports.randIn = function randIn(min, max) {
  return rand(max - min) + min;
};
var randRange = exports.randRange = function randRange(n) {
  return n - rand(2 * n);
};
var fadeIn = exports.fadeIn = function fadeIn(t, m) {
  return t / m;
};
var fadeOut = exports.fadeOut = function fadeOut(t, m) {
  return (m - t) / m;
};
var fadeInOut = exports.fadeInOut = function fadeInOut(t, m) {
  var hm = 0.5 * m;
  return abs((t + hm) % m - hm) / hm;
};
var dist = exports.dist = function dist(x1, y1, x2, y2) {
  return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
};
var angle = exports.angle = function angle(x1, y1, x2, y2) {
  return atan2(y2 - y1, x2 - x1);
};
var lerp = exports.lerp = function lerp(n1, n2, speed) {
  return (1 - speed) * n1 + speed * n2;
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PI, "PI", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(cos, "cos", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(sin, "sin", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(abs, "abs", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(sqrt, "sqrt", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(pow, "pow", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(round, "round", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(random, "random", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(atan2, "atan2", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(HALF_PI, "HALF_PI", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(TAU, "TAU", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(TO_RAD, "TO_RAD", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(floor, "floor", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(rand, "rand", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(randIn, "randIn", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(randRange, "randRange", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeIn, "fadeIn", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeOut, "fadeOut", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeInOut, "fadeInOut", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(dist, "dist", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(angle, "angle", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(lerp, "lerp", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
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

  reactHotLoader.register(PI, "PI", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(cos, "cos", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(sin, "sin", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(abs, "abs", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(sqrt, "sqrt", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(pow, "pow", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(round, "round", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(random, "random", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(atan2, "atan2", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(HALF_PI, "HALF_PI", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(TAU, "TAU", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(TO_RAD, "TO_RAD", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(floor, "floor", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(rand, "rand", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(randIn, "randIn", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(randRange, "randRange", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeIn, "fadeIn", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeOut, "fadeOut", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(fadeInOut, "fadeInOut", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(dist, "dist", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(angle, "angle", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  reactHotLoader.register(lerp, "lerp", "/var/www/portfolio/resources/assets/js/components/Portfolio/sections/common/util.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/js/services/DetectBrowser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var DetectBrowser = exports.DetectBrowser = {
  isOpera: function isOpera() {
    return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  },

  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return (/constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification)
    );
  },

  // Internet Explorer 6-11
  isIE: function isIE() {
    return (/* @cc_on!@ */false || !!document.documentMode
    );
  },

  // Edge 20+
  isEdge: function isEdge() {
    return !isIE && !!window.StyleMedia;
  },

  // Chrome 1 - 71
  isChrome: function isChrome() {
    return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  },

  // Blink engine detection
  isBlink: function isBlink() {
    return (isChrome || isOpera) && !!window.CSS;
  }
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DetectBrowser, 'DetectBrowser', '/var/www/portfolio/resources/assets/js/services/DetectBrowser.js');
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

  reactHotLoader.register(DetectBrowser, 'DetectBrowser', '/var/www/portfolio/resources/assets/js/services/DetectBrowser.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

});