import REG_EXPS from '../constants/regExps';

const { userAgent } = navigator;
const { webstore: chromeWebstore, runtime: chromeRuntime } = window.chrome;
const { constructor: constructorRegExp } = REG_EXPS;

const DetectBrowser = {
  isOpera: () => !!(window.opr && opr.addons) || !!window.opera || userAgent.indexOf(' OPR/') >= 0,

  // Firefox 1.0+
  isFirefox: () => typeof InstallTrigger !== 'undefined',

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isSafari: () =>
    constructorRegExp.test(window.HTMLElement) ||
    (p => p.toString() === '[object SafariRemoteNotification]')(
      !window.safari || (typeof safari !== 'undefined' && safari.pushNotification),
    ),

  // Internet Explorer 6-11
  isIE: () => /* @cc_on!@ */ !!document.documentMode,

  // Edge 20+
  isEdge: () => !isIE && !!window.StyleMedia,

  // Chrome 1 - 71
  isChrome: () => !!window.chrome && !!(chromeWebstore || chromeRuntime),

  // Blink engine detection
  isBlink: () => (isChrome || isOpera) && !!window.CSS,
};

export default DetectBrowser;
