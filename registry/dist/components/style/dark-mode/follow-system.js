!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/dark-mode/follow-system"]=t():e["style/dark-mode/follow-system"]=t()}(self,(function(){return function(){"use strict";var e,t,o={407:function(e){e.exports=coreApis.settings}},i={};function n(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return o[e](r,r.exports,n),r.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"==typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"==typeof o.then)return o}var r=Object.create(null);n.r(r);var c={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){c[e]=function(){return o[e]}}));return c.default=function(){return o},n.d(r,c),r},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){n.d(r,{component:function(){return t}});var e=coreApis.lifeCycle;const t={name:"darkModeFollowSystem",displayName:"夜间模式跟随系统",entry:()=>{unsafeWindow.addEventListener(e.LifeCycleEventTypes.End,(async()=>{const{getComponentSettings:e}=await Promise.resolve().then(n.t.bind(n,407,23)),t=e("darkMode"),o=matchMedia("(prefers-color-scheme: dark)"),i=e=>{e!==t.enabled&&(t.enabled=e)};i(o.matches),o.addEventListener("change",(e=>{i(e.matches)}))}))},urlExclude:["//member.bilibili.com/v2","//member.bilibili.com/video/upload.html","//member.bilibili.com/article-text/home","//www.bilibili.com/audio/submit/","//member.bilibili.com/studio/bs-editor/projects","//www.bilibili.com/s/video/","//member.bilibili.com/platform","//live.bilibili.com/p/html/live-lottery/anchor-join.html","//account.bilibili.com/subtitle/edit/#/editor","/york/allowance-charge","//cm.bilibili.com/quests/#/task"],tags:[componentsTags.style,componentsTags.general],description:{"zh-CN":"\n使夜间模式同步系统设置的亮 / 暗主题, 请勿和 `夜间模式计划时段` 一同使用.\n\n> 注：在某些浏览器 (如 `Microsoft Edge`) 中，夜间模式仅会同步浏览器的亮 / 暗主题.\n    ".trim()},commitHash:"332b4c325cced60a832e081f9119801ae152204b",coreVersion:"2.1.3"}}(),r=r.component}()}));