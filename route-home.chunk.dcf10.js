(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+1Jk":function(e,t,n){"use strict";function r(e,t){p.f.__h&&p.f.__h(d,e,h||t),h=0;var n=d.__H||(d.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function a(e){return h=1,function(e,t,n){var a=r(f++,2);return a.t=e,a.__c||(a.__=[n?n(t):u(void 0,t),function(e){var t=a.t(a.__[0],e);a.__[0]!==t&&(a.__=[t,a.__[1]],a.__c.setState({}))}],a.__c=d),a.__}(u,e)}function c(){for(var e;e=b.shift();)if(e.__P)try{e.__H.__h.forEach(i),e.__H.__h.forEach(o),e.__H.__h=[]}catch(t){e.__H.__h=[],p.f.__e(t,e.__v)}}function i(e){var t=d,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),d=t}function o(e){var t=d;e.__c=e.__(),d=t}function _(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function u(e,t){return"function"==typeof t?t(e):t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,c=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var f,d,m,p=n("hosL"),h=0,b=[],v=p.f.__b,y=p.f.__r,O=p.f.diffed,g=p.f.__c,j=p.f.unmount;p.f.__b=function(e){d=null,v&&v(e)},p.f.__r=function(e){y&&y(e),f=0;var t=(d=e.__c).__H;t&&(t.__h.forEach(i),t.__h.forEach(o),t.__h=[])},p.f.diffed=function(e){O&&O(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==b.push(t)&&m===p.f.requestAnimationFrame||((m=p.f.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),N&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);N&&(t=requestAnimationFrame(n))})(c)),d=null},p.f.__c=function(e,t){t.some((function(e){try{e.__h.forEach(i),e.__h=e.__h.filter((function(e){return!e.__||o(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],p.f.__e(n,e.__v)}})),g&&g(e,t)},p.f.unmount=function(e){j&&j(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{i(e)}catch(e){t=e}})),t&&p.f.__e(t,n.__v))};var N="function"==typeof requestAnimationFrame;t.default=function(){var e,t,n,c=l(a(""),2),i=c[0],o=c[1],u=l(a(0),2),s=u[0],m=u[1],h=l(a(0),2),b=h[0],v=h[1];e=function(){if(""!=i){if(i>100){console.log(i);var e=.015*(i-100),t=i+e;console.log(e),m(t),v(e)}else m(i),v(0);console.log("checking"),console.log("customer amount",i)}},t=[i],n=r(f++,3),!p.f.__s&&_(n.__H,t)&&(n.__=e,n.__H=t,d.__H.__h.push(n));return Object(p.d)("main",{className:"mainContainer"},Object(p.d)("div",{className:"gridContainer"},Object(p.d)("div",{className:"gridItem gridItemFull"},Object(p.d)("div",{className:"inputGroup centerFlex"},Object(p.d)("span",{className:"displayText"},"E-LEVY CALCULATOR"))),Object(p.d)("div",{className:"gridItem"},Object(p.d)("div",{className:"inputGroup"},Object(p.d)("label",{for:"amount",className:"labelText"},"You want to send:"),Object(p.d)("div",null,Object(p.d)("input",{type:"number",name:"amount",value:i,onInput:function(e){o(parseInt(e.target.value))},className:"inputField",id:"amount"}),Object(p.d)("span",{className:"currency"},"GHS")))),Object(p.d)("div",{className:"gridItem"},Object(p.d)("div",{className:"inputGroup"},Object(p.d)("label",{for:"transferAmount",className:"labelText"},"You will pay:"),Object(p.d)("div",null,Object(p.d)("input",{type:"text",value:"".concat(s.toFixed(2)),readOnly:!0,name:"transferAmount",className:"inputField inputFieldEmphasis",id:"transferAmount"}),Object(p.d)("span",{className:"currency"},"GHS")))),Object(p.d)("div",{className:"gridItem gridItemFull"},Object(p.d)("div",{className:"inputGroup centerFlex"},Object(p.d)("span",{className:"labelText"},"You will be charged as E-Levy:"),Object(p.d)("span",{className:"displayText charge"},"+ GHS ","".concat(b.toFixed(2))," "),Object(p.d)("span",{className:"labelText"},"Rate: 1.5%, first 100GHS exempt"))),Object(p.d)("div",{className:"gridItem gridItemFull"},Object(p.d)("div",{className:"inputGroup centerFlex"},Object(p.d)("span",{className:"disclaimer"},"Disclaimer: Please Note while we did our best to provide accurate results, we cannot be held responsible for differences in real-world charges.")))))}}}]);
//# sourceMappingURL=route-home.chunk.dcf10.js.map