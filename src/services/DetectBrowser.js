import REG_EXPS from '../constants/regExps';

const { userAgent } = navigator;
const { constructor: constructorRegExp } = REG_EXPS;

const DetectBrowser = {
  isOpera: () => !!window.opr?.addons || !!window.opera || userAgent.indexOf(' OPR/') >= 0,

  // Firefox 1.0+
  isFirefox: () => typeof InstallTrigger !== 'undefined',

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari: () =>
    constructorRegExp.test(window.HTMLElement) ||
    (p => p.toString() === '[object SafariRemoteNotification]')(
      !window.safari || (typeof safari !== 'undefined' && window.safari.pushNotification),
    ),

  // Internet Explorer 6-11
  isIE: () => /* @cc_on!@ */ !!document.documentMode,

  // Edge 20+
  isEdge: () => !window.isIE && !!window.StyleMedia,

  // Chrome 1 - 71
  isChrome: () => !!window.chrome && !!(window.chrome.webstore || window.chrome.chromeRuntime),

  // Blink engine detection
  isBlink: () => (window.isChrome || window.isOpera) && !!window.CSS,
};

export default DetectBrowser;
