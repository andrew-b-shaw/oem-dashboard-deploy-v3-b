/*! For license information please see 2878.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2878],{2878:(t,e,n)=>{function o(t){return s(t)}function f(t){return u(t,"offsetTop")}function r(t){return u(t,"offsetLeft")}function i(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function s(t){for(let e=t;e;e=i(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=i(t);e;e=i(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}function u(t,e){let n=t[e],o=s(t);const f=function(t){const e=new Set;let n=t.getRootNode();for(;n;)e.add(n),n=n.parentNode?n.parentNode.getRootNode():null;return e}(t);for(;o&&!f.has(o.getRootNode());)n-=o[e],o=s(o);return n}n.r(e),n.d(e,{offsetLeft:()=>r,offsetParent:()=>o,offsetTop:()=>f})}}]);