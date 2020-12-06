webpackJsonp([3],{"4VkD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=[{label:"git",link:"https://github.com/ArturW1998"},{label:"linkedin",link:"https://www.linkedin.com/in/artur-voloshyn-4439b61a4/"},{label:"skype",link:"skype:live:32d04c9d781e2d24?chat"}]},HkUR:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'.ip-main{align-items:center;display:flex;flex-direction:column;height:100vh;justify-content:center;margin:0 auto;max-width:1100px;overflow:hidden;padding:160px 0 10em;width:90%}.ip-main h2{color:#be4856;font-size:4.25em;font-size:4vw;line-height:1;margin:0;padding:.5em 0 1em;text-align:center}@media screen and (max-width:45em){.ip-main h2{font-size:2.25em;font-size:10vw}}.Icons__icon_container{display:flex;flex-direction:row;justify-content:space-around;margin-top:100px;width:300px}.Icons__icon_container div{background-size:40px;height:40px;position:relative;width:40px}.Icons__icon_container a.linkedin div{background-image:url("/imgs/main_page/linkedin.png")}.Icons__icon_container a.git div{background-image:url("/imgs/main_page/git.png");max-height:256px;max-width:256px}.Icons__icon_container a.skype div{background-image:url("/imgs/main_page/skype.png")}.Icons__icon_container a{outline:none}@media (max-height:500px){.Icons__icon_container{margin-top:30px}}@media (max-width:500px){.Icons__icon_container{margin-top:30px}}.react-rotating-text-cursor{animation:blinking-cursor .8s cubic-bezier(.68,.01,.01,.99) 0s infinite}@keyframes blinking-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}.Preivew{color:#87ceeb;margin:0 auto;text-align:center;text-shadow:0 0 10px #87ceeb,0 0 15px #87ceeb}.Preivew div:first-child{color:#fff;font-family:Wire One,Helvetica,Arial,sans-serif;font-size:100px;text-shadow:0 0 10px #87ceeb,0 0 15px #87ceeb,0 0 30px #00bfff,0 0 30px #00bfff,0 0 30px #00bfff,0 0 40px #00bfff,0 0 50px #00bfff,0 0 60px #00bfff,0 0 70px #00bfff,0 0 80px #00bfff,0 0 90px #00bfff,0 0 100px #87ceeb}@media (max-width:800px){.Preivew div:first-child{text-shadow:0 0 10px #87ceeb,0 0 15px #87ceeb,0 0 30px #00bfff,0 0 100px #87ceeb}}.Preivew div:nth-child(2){font-size:30px}.Preivew div:nth-child(3){font-size:18px;white-space:nowrap}@media (max-width:500px){.Preivew div:first-child{font-size:80px}}@media (max-width:500px){.Preivew div:nth-child(2){font-size:20px}}@media (max-width:500px){.Preivew div:nth-child(3){font-size:14px}}',""])},bEtF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;r=!1,null===i&&(i=Function.prototype);var u=Object.getOwnPropertyDescriptor(i,o);if(void 0!==u){if("value"in u)return u.value;var c=u.get;if(void 0===c)return;return c.call(a)}var s=Object.getPrototypeOf(i);if(null===s)return;e=s,t=o,n=a,r=!0,u=s=void 0}};var a=n("GiK3"),u=n("KSGD"),c=n("uJ2x"),s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);var n=this.props,r=n.items,i=n.random;this.state={index:i?Math.floor(Math.random()*Math.floor(r.length)):0,output:"",substrLength:0},this.timeouts=[]}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map(function(e){return clearTimeout(e)})}},{key:"_loop",value:function(e,t){var n=setTimeout(e,t);this.timeouts.push(n);this.timeouts.length>100&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(e,t){var n=this.state.output,r=this.props.typingInterval,i=this._type.bind(this,e,t),o=c(e);this.setState({output:o.slice(0,c(n).length+1).join("")}),n.length<o.length?this._loop(i,r):("function"==typeof this.props.onTypingEnd&&this.props.onTypingEnd(),t())}},{key:"_erase",value:function(e){var t=this.state.output,n=this.props.deletingInterval,r=this._erase.bind(this,e),i=c(t);"function"==typeof this.props.onDeletingStart&&this.props.onDeletingStart(),this.setState({output:i.slice(0,i.length-1).join("")}),0!==i.length?this._loop(r,n):("function"==typeof this.props.onDeletingEnd&&this.props.onDeletingEnd(),e())}},{key:"_overwrite",value:function(e,t){var n=this.state,r=n.output,i=n.substrLength,o=this.props.deletingInterval,a=this._overwrite.bind(this,e,t),u=c(e),s=c(r);this.setState({output:u.slice(0,i).concat(s.slice(i)),substrLength:i+1}),u.length!==i?this._loop(a,o):(this.setState({output:e,substrLength:0}),t())}},{key:"_animate",value:function(){var e=this,t=this.state.index,n=this.props,r=n.items,i=n.pause,o=n.emptyPause,a=n.eraseMode,u=n.random,c=this._type,s=this._erase,f=this._overwrite,l=this._animate.bind(this),p=void 0;p=u?Math.floor(Math.random()*Math.floor(r.length)):t===r.length-1?0:t+1;var d=function(){e.setState({index:p}),e._loop(l,o)};"function"==typeof this.props.onTypingStart&&this.props.onTypingStart(),c.bind(this)(r[t],function(){"overwrite"===a?e._loop(f.bind(e,r[p],d),i):e._loop(s.bind(e,d),i)})}},{key:"render",value:function(){var e=this.props,t=e.color,n=e.cursor,i=(e.deletingInterval,e.emptyPause,e.items,e.pause,e.eraseMode,e.typingInterval,e.random,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]));return a.createElement("span",r({style:{color:t}},i),this.state.output,n?a.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),t}();s.propTypes={color:u.string,cursor:u.bool,deletingInterval:u.number,emptyPause:u.number,eraseMode:u.string,items:u.array,pause:u.number,typingInterval:u.number,random:u.bool,onTypingStart:u.func,onTypingEnd:u.func,onDeletingStart:u.func,onDeletingEnd:u.func},s.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},t.default=s,e.exports=t.default},tAEo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n("GiK3")),i=n("RH2O"),o=c(n("bEtF")),a=c(n("KSGD")),u=c(n("4VkD"));function c(e){return e&&e.__esModule?e:{default:e}}n("yGfZ");var s=function(e){var t=e.preloader.preloader;return r.default.createElement("div",{className:"ip-main for_fade"},r.default.createElement("div",{className:"Preivew"},r.default.createElement("div",{className:"Preivew__neon"},"ARTUR VOLOSHYN"),r.default.createElement("div",{className:"Preivew__info"},"< Software Engineer />"),r.default.createElement("div",{className:"Preivew__info Preivew__label_tech"},r.default.createElement("p",null,"Working with technologies such as ",t?"":r.default.createElement(o.default,{items:["React.js","Vue.js","Node.js"],typingInterval:100})))),r.default.createElement("div",{className:"Icons__icon_container"},u.default.map(function(e){var t=e.label,n=e.link;return r.default.createElement("a",{key:t,className:t,href:n,rel:"noopener noreferrer",target:"_blank"},r.default.createElement("div",null))})))};s.propTypes={preloader:a.default.shape({preloader:a.default.bool})},s.defaultProps={preloader:{preloader:!1}},t.default=(0,i.connect)(function(e){return{preloader:e.preloader}})(s)},uJ2x:function(e,t,n){(function(t){var n=9007199254740991,r="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",a="[object Map]",u="[object Set]",c="[object String]",s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l="[\\ud800-\\udfff]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",h="[^\\ud800-\\udfff]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",m="[\\ud800-\\udbff][\\udc00-\\udfff]",b="(?:"+p+"|"+d+")"+"?",g="[\\ufe0e\\ufe0f]?"+b+("(?:\\u200d(?:"+[h,v,m].join("|")+")[\\ufe0e\\ufe0f]?"+b+")*"),y="(?:"+[h+p+"?",p,v,m,l].join("|")+")",_=RegExp(d+"(?="+d+")|"+y+g,"g"),x=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),w="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,k=w||j||Function("return this")();function O(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}(t,function(t){return e[t]})}function P(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function E(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function S(e){return function(e){return x.test(e)}(e)?function(e){return e.match(_)||[]}(e):function(e){return e.split("")}(e)}var I,M,D,T=Function.prototype,z=Object.prototype,A=k["__core-js_shared__"],R=(I=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"",N=T.toString,F=z.hasOwnProperty,G=z.toString,V=RegExp("^"+N.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=k.Symbol,$=W?W.iterator:void 0,H=z.propertyIsEnumerable,L=(M=Object.keys,D=Object,function(e){return M(D(e))}),K=re(k,"DataView"),U=re(k,"Map"),C=re(k,"Promise"),J=re(k,"Set"),Z=re(k,"WeakMap"),B=ae(K),Y=ae(U),q=ae(C),Q=ae(J),X=ae(Z);function ee(e,t){var n=ue(e)||function(e){return function(e){return le(e)&&ce(e)}(e)&&F.call(e,"callee")&&(!H.call(e,"callee")||G.call(e)==r)}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],i=n.length,o=!!i;for(var a in e)!t&&!F.call(e,a)||o&&("length"==a||oe(a,i))||n.push(a);return n}function te(e){return!(!fe(e)||R&&R in e)&&(se(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?V:s).test(ae(e))}function ne(e){if(n=(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||z,t!==r)return L(e);var t,n,r,i=[];for(var o in Object(e))F.call(e,o)&&"constructor"!=o&&i.push(o);return i}function re(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return te(n)?n:void 0}var ie=function(e){return G.call(e)};function oe(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||f.test(e))&&e>-1&&e%1==0&&e<t}function ae(e){if(null!=e){try{return N.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(K&&"[object DataView]"!=ie(new K(new ArrayBuffer(1)))||U&&ie(new U)!=a||C&&"[object Promise]"!=ie(C.resolve())||J&&ie(new J)!=u||Z&&"[object WeakMap]"!=ie(new Z))&&(ie=function(e){var t=G.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?ae(n):void 0;if(r)switch(r){case B:return"[object DataView]";case Y:return a;case q:return"[object Promise]";case Q:return u;case X:return"[object WeakMap]"}return t});var ue=Array.isArray;function ce(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!se(e)}function se(e){var t=fe(e)?G.call(e):"";return t==i||t==o}function fe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function le(e){return!!e&&"object"==typeof e}function pe(e){return e?O(e,function(e){return ce(e)?ee(e):ne(e)}(e)):[]}e.exports=function(e){if(!e)return[];if(ce(e))return function(e){return"string"==typeof e||!ue(e)&&le(e)&&G.call(e)==c}(e)?S(e):function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(e);if($&&e[$])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[$]());var t=ie(e);return(t==a?P:t==u?E:pe)(e)}}).call(t,n("DuR2"))},yGfZ:function(e,t,n){var r=n("HkUR");"string"==typeof r&&(r=[[e.i,r,""]]);var i={transform:void 0};n("MTIv")(r,i);r.locals&&(e.exports=r.locals)}});