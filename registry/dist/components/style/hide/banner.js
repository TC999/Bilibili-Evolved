!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["style/hide/banner"]=e():n["style/hide/banner"]=e()}(self,(function(){return function(){var n,e,t={630:function(n,e,t){var r=t(645)((function(n){return n[1]}));r.push([n.id,"#banner_link,\n.z-top-container.has-banner > .header,\n.custom-navbar .blur-layer,\n.bili-header__banner {\n  display: none !important;\n}\n\n.bili-header {\n  padding-top: 50px !important;\n}\n\ndiv.blur-bg,\n.b-header-mask-wrp .b-header-mask-bg {\n  opacity: 0 !important;\n}\n\n.international-header .bili-banner,\n.international-home .bili-banner {\n  visibility: hidden !important;\n  height: 50px !important;\n  min-height: unset !important;\n}\n\n.nav-link .nav-link-ul .nav-link-item .link,\n.nav-user-center .user-con .item .name {\n  color: black !important;\n  text-shadow: none !important;\n}\nbody.dark .nav-link .nav-link-ul .nav-link-item .link,\nbody.dark .nav-user-center .user-con .item .name {\n  color: #eee !important;\n}",""]),n.exports=r},645:function(n){"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
e.i=function(n,t,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<n.length;u++){var c=[].concat(n[u]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},912:function(n,e,t){var r=t(630);r&&r.__esModule&&(r=r.default),n.exports="string"==typeof r?r:r.toString()}},r={};function o(n){var e=r[n];if(void 0!==e)return e.exports;var i=r[n]={id:n,exports:{}};return t[n](i,i.exports,o),i.exports}e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},o.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var i=Object.create(null);o.r(i);var a={};n=n||[null,e({}),e([]),e(e)];for(var u=2&r&&t;"object"==typeof u&&!~n.indexOf(u);u=e(u))Object.getOwnPropertyNames(u).forEach((function(n){a[n]=function(){return t[n]}}));return a.default=function(){return t},o.d(i,a),i},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};return function(){"use strict";o.d(i,{component:function(){return e}});var n=coreApis.utils.urls;const e={name:"hideBanner",entry:none,displayName:"隐藏顶部横幅",instantStyles:[{name:"hideBanner",style:()=>Promise.resolve().then(o.t.bind(o,912,23))}],tags:[componentsTags.style],description:{"zh-CN":"隐藏首页顶部横幅."},urlInclude:n.mainSiteUrls,commitHash:"332b4c325cced60a832e081f9119801ae152204b",coreVersion:"2.1.3"}}(),i=i.component}()}));