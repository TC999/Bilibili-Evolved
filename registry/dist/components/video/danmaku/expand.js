!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/danmaku/expand"]=o():e["video/danmaku/expand"]=o()}(self,(function(){return function(){"use strict";var e={d:function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}},o={};e.d(o,{component:function(){return a}});var t=coreApis.observer,n=coreApis.spinQuery,i=coreApis.utils,s=coreApis.utils.urls;const a={name:"expandDanmakuList",displayName:"展开弹幕列表",entry:async({settings:{options:e}})=>{(0,t.videoChange)((async()=>{if(s.mediaListUrls.some((e=>(0,i.matchUrlPattern)(e)))&&e.ignoreMediaList)return;const o=await(0,n.select)(".bui-collapse-wrap");if(o&&o.classList.contains("bui-collapse-wrap-folded")){(await(0,n.select)(".bui-collapse-header"))?.click()}}))},tags:[componentsTags.video],description:{"zh-CN":"每次加载视频时自动展开弹幕列表."},options:{ignoreMediaList:{defaultValue:!0,displayName:"合集类页面不自动展开"}},urlInclude:[...s.videoAndBangumiUrls,...s.mediaListUrls],commitHash:"332b4c325cced60a832e081f9119801ae152204b",coreVersion:"2.1.3"};return o=o.component}()}));