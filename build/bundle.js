!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t,r){r(8),e.exports=r(9)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),c=r(0),u=r.n(c),i=r(5),l=r(6),a=r(1),f=function(){return u.a.createElement("div",null,u.a.createElement("span",null," Hello!I 'm content of this page!")," ",u.a.createElement("button",{onClick:function(){console.log("success!!!!")}}," "," ","ClickMe "," "," ")," ")},p=function(){return u.a.createElement("span",null,"無此頁面")},s=r(3),b=r.n(s),d=r(4),m=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(d.Link,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(d.Link,{to:"otherPage"},"Other page")))},O=function(e){var t=e.route;return u.a.createElement("div",null,u.a.createElement(m,null),Object(a.renderRoutes)(t.routes))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}O.propTypes={route:b.a.objectOf(b.a.any)},O.defaultProps={route:null};var g=[v(v({},{component:O}),{},{routes:[{component:f,path:"/",exact:!0},{component:p}]})],P=o()(),x=process.env.PORT||3001;P.use(o.a.static("dist")),P.get("*",(function(e,t){var r=function(e){var t=Object(i.renderToString)(u.a.createElement(l.StaticRouter,{location:e.path},u.a.createElement("div",null,Object(a.renderRoutes)(g))));return'\n    <html>\n      <body>\n        <div id="root">'.concat(t,'</div>\n        <script src="./bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e);t.send(r)})),P.listen(x,(function(){console.log("Listening on port: ".concat(x))}))}]);