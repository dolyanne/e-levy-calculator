(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(t,n,e){"use strict";function o(t,n){p.options.__h&&p.options.__h(s,t,m||n),m=0;var e=s.__H||(s.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function r(t){return m=1,function(t,n,e){var r=o(f++,2);return r.t=t,r.__c||(r.__=[e?e(n):u(void 0,n),function(t){var n=r.t(r.__[0],t);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=s),r.__}(u,t)}function _(){for(var t;t=v.shift();)if(t.__P)try{t.__H.__h.forEach(i),t.__H.__h.forEach(c),t.__H.__h=[]}catch(n){t.__H.__h=[],p.options.__e(n,t.__v)}}function i(t){var n=s,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),s=n}function c(t){var n=s;t.__c=t.__(),s=n}function u(t,n){return"function"==typeof n?n(t):n}function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,_=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(o=e.next()).done)&&(_.push(o.value),!n||_.length!==n);i=!0);}catch(t){c=!0,r=t}finally{try{i||null==e.return||e.return()}finally{if(c)throw r}}return _}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}e.r(n);var f,s,h,p=e("hosL"),m=0,v=[],y=p.options.__b,b=p.options.__r,d=p.options.diffed,g=p.options.__c,j=p.options.unmount;p.options.__b=function(t){s=null,y&&y(t)},p.options.__r=function(t){b&&b(t),f=0;var n=(s=t.__c).__H;n&&(n.__h.forEach(i),n.__h.forEach(c),n.__h=[])},p.options.diffed=function(t){d&&d(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==v.push(n)&&h===p.options.requestAnimationFrame||((h=p.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(o),O&&cancelAnimationFrame(n),setTimeout(t)},o=setTimeout(e,100);O&&(n=requestAnimationFrame(e))})(_)),s=null},p.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(i),t.__h=t.__h.filter((function(t){return!t.__||c(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],p.options.__e(e,t.__v)}})),g&&g(t,n)},p.options.unmount=function(t){j&&j(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{i(t)}catch(t){n=t}})),n&&p.options.__e(n,e.__v))};var O="function"==typeof requestAnimationFrame,H="home__uRcqa",A="flexMain__o6LYc",w="flexRow__IKjnU",x="flexItem__PodkT";n.default=function(){var t=a(r(0),2),n=t[0],e=t[1],o=a(r(0),2),_=o[0],i=o[1],c=a(r(0),2),u=c[0],l=c[1];return Object(p.h)("div",{class:H},Object(p.h)("div",{class:A},Object(p.h)("form",{onSubmit:function(t){if(t.preventDefault(),n>100){console.log(n);var e=.015*(n-100),o=n+e;console.log(e),i(o),l(e)}else i(n),l(0);console.log("checking"),console.log("customer amount",n)},method:"POST"},Object(p.h)("div",{class:w},Object(p.h)("div",{class:x},Object(p.h)("label",null,"Amount (GHS):"," ",Object(p.h)("input",{type:"number",name:"amount",value:n,onChange:function(t){e(parseInt(t.target.value))}}))),Object(p.h)("div",{class:x},Object(p.h)("label",null,"Total due (GHS):",Object(p.h)("input",{type:"text",value:"".concat(_.toFixed(2)),readOnly:!0,name:"transferAmount"})))),Object(p.h)("div",{style:{justifyContent:"center",alignContent:"center",display:"flex",margin:"10px"}},"E-Levy (GHS): ","".concat(u.toFixed(2))),Object(p.h)("div",{style:{justifyContent:"center",alignContent:"center",display:"flex",margin:"10px"}},Object(p.h)("button",{type:"submit"},"Check E-Levy")))))}}}]);
//# sourceMappingURL=route-home.chunk.fb39b.js.map