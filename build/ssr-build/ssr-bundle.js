module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/e-levy-calculator-gh/",n(n.s="QfWi")}({HteQ:function(t,e){t.exports=require("preact")},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,a=t.match(i),u={};if(a&&a[1])for(var c=a[1].split("&"),s=0;s<c.length;s++){var p=c[s].split("=");u[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=l(t.replace(i,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),h=0;h<f;h++)if(e[h]&&":"===e[h].charAt(0)){var _=e[h].replace(/(^:|[+*?]+$)/g,""),d=(e[h].match(/[+*?]+$/)||o)[0]||"",m=~d.indexOf("+"),v=~d.indexOf("*"),y=t[h]||"";if(!y&&!v&&(d.indexOf("?")<0||m)){r=!1;break}if(u[_]=decodeURIComponent(y),m||v){u[_]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(!0===n.default||!1!==r)&&u}function u(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(s).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var p=null,f=[],h=[],_={};function d(){var t;return""+((t=p&&p.location?p.location:p&&p.getCurrentLocation?p.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function m(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=f.length;e--;)if(f[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),p&&p[e]?p[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<f.length;n++)!0===f[n].routeTo(t)&&(e=!0);for(var r=h.length;r--;)h[r](t);return e}function y(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(e)}}function b(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return y(t.currentTarget||t.target||this),g(t)}function g(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function O(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(y(e))return g(t)}}while(e=e.parentNode)}}var j=!1;var x=function(t){function e(e){t.call(this,e),e.history&&(p=e.history),this.state={url:e.url||d()},j||("function"==typeof addEventListener&&(p||addEventListener("popstate",(function(){v(d())})),addEventListener("click",O)),j=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){f.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;p&&(this.unlisten=p.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),f.splice(f.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(u).map((function(t){var o=a(e,t.props.path,t.props);if(o){if(!1!==n){var u={url:e,matches:o};return i(u,o),delete u.ref,delete u.key,Object(r.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),u=a[0]||null,c=this.previousUrl;return i!==c&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:c,active:a,current:u})),u},e}(r.Component);x.subscribers=h,x.getCurrentUrl=d,x.route=m,x.Router=x,x.Route=function(t){return Object(r.createElement)(t.component,t)},x.Link=function(t){return Object(r.createElement)("a",i({onClick:b},t))},x.exec=a;var A,N,S,C=0,H=[],I=r.options.__b,F=r.options.__r,T=r.options.diffed,U=r.options.__c,E=r.options.unmount;function L(t,e){r.options.__h&&r.options.__h(N,t,C||e),C=0;var n=N.__H||(N.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function k(t){return C=1,function(t,e,n){var r=L(A++,2);return r.t=t,r.__c||(r.__=[n?n(e):K(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=N),r.__}(K,t)}function w(t,e){var n=L(A++,7);return D(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function M(){for(var t;t=H.shift();)if(t.__P)try{t.__H.__h.forEach(R),t.__H.__h.forEach(G),t.__H.__h=[]}catch(e){t.__H.__h=[],r.options.__e(e,t.__v)}}r.options.__b=function(t){N=null,I&&I(t)},r.options.__r=function(t){F&&F(t),A=0;var e=(N=t.__c).__H;e&&(e.__h.forEach(R),e.__h.forEach(G),e.__h=[])},r.options.diffed=function(t){T&&T(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==H.push(e)&&S===r.options.requestAnimationFrame||((S=r.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),P&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);P&&(e=requestAnimationFrame(n))})(M)),N=null},r.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(R),t.__h=t.__h.filter((function(t){return!t.__||G(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],r.options.__e(n,t.__v)}})),U&&U(t,e)},r.options.unmount=function(t){E&&E(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{R(t)}catch(t){e=t}})),e&&r.options.__e(e,n.__v))};var P="function"==typeof requestAnimationFrame;function R(t){var e=N,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),N=e}function G(t){var e=N;t.__c=t.__(),N=e}function D(t,e){return!t||t.length!==e.length||e.some((function(e,n){return e!==t[n]}))}function K(t,e){return"function"==typeof e?e(t):e}function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=function(){var t,e,n,o,i=q(k(""),2),a=i[0],u=i[1],c=q(k(0),2),l=c[0],s=c[1],p=q(k(0),2),f=p[0],h=p[1],_=(t=null,C=5,w((function(){return{current:t}}),[]));e=function(){if(""==a)s(0),h(0);else if(a>100){var t=.015*(a-100);s(a+t),h(t)}else s(a),h(0)},n=[a],o=L(A++,3),!r.options.__s&&D(o.__H,n)&&(o.__=e,o.__H=n,N.__H.__h.push(o));return Object(r.h)("main",{className:"mainContainer"},Object(r.h)("form",{className:"gridContainer",ref:_,method:"POST"},Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("h1",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(r.h)("div",{className:"gridItem"},Object(r.h)("div",{className:"inputGroup"},Object(r.h)("label",{for:"amount",className:"labelText"},"You want to send:"),Object(r.h)("div",null,Object(r.h)("input",{type:"text",name:"amount",pattern:"[0-9,.]",required:!0,value:a.toLocaleString("en-US"),onInput:function(t){var e=parseInt(t.target.value.replaceAll(",",""),10);isNaN(e)?(_.current.reportValidity(),u("")):u(e)},className:"inputField",id:"amount"}),Object(r.h)("span",{className:"currency"},"GHS")))),Object(r.h)("div",{className:"gridItem"},Object(r.h)("div",{className:"inputGroup"},Object(r.h)("label",{for:"transferAmount",className:"labelText"},"You will pay:"),Object(r.h)("div",null,Object(r.h)("input",{type:"text",value:"".concat(l.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2})),readOnly:!0,name:"transferAmount",className:"inputField inputFieldEmphasis",id:"transferAmount"}),Object(r.h)("span",{className:"currency"},"GHS")))),Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("span",{className:"labelText"},"E-Levy Charge:"),Object(r.h)("span",{className:"displayText charge"},"+ GHS"," ","".concat(f.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}))),Object(r.h)("span",{className:"labelText"},"Rate: 1.5%, first 100GHS exempt"))),Object(r.h)("div",{className:"gridItem gridItemFull"},Object(r.h)("div",{className:"inputGroup centerFlex"},Object(r.h)("span",{className:"disclaimer"},"Disclaimer: While we did our best to provide accurate results, we cannot be held responsible for differences in your real-world experience.")))))},Q=function(){return Object(r.h)("div",{id:"app"},Object(r.h)(x,null,Object(r.h)($,{path:"".concat("/e-levy-calculator-gh","/")})))};e.default=Q}});
//# sourceMappingURL=ssr-bundle.js.map