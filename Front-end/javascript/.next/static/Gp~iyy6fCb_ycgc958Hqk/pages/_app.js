(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(t,e,n){t.exports=n(290)},285:function(t,e,n){__NEXT_REGISTER_PAGE("/_app",function(){return t.exports=n(286),{page:t.exports.default}})},286:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n.n(r),i=n(0),u=n.n(i),a=n(26),c=n(149),f=n.n(c),l=n(84),p=n.n(l),s=n(60);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}e.default=p()(s.a)(function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,v(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,f.a),n=e,r=[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return u.a.createElement(c.Container,null,u.a.createElement(a.a,{store:r},u.a.createElement(e,n)))}}],i=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return t.t1=t.t0,t.abrupt("return",{pageProps:t.t1});case 10:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){y(i,r,o,u,a,"next",t)}function a(t){y(i,r,o,u,a,"throw",t)}u(void 0)})});return function(t){return e.apply(this,arguments)}}()}],r&&b(n.prototype,r),i&&b(n,i),e}())},290:function(t,e,n){"use strict";var r=n(43),o=n(15);Object.defineProperty(e,"__esModule",{value:!0}),e.createUrl=m,e.Container=e.default=void 0;var i=o(n(91)),u=o(n(92)),a=o(n(291)),c=o(n(20)),f=o(n(21)),l=o(n(37)),p=o(n(38)),s=o(n(39)),d=o(n(32)),y=r(n(0)),b=o(n(5)),h=n(48),v=n(71),w=function(t){function e(){return(0,c.default)(this,e),(0,l.default)(this,(0,p.default)(e).apply(this,arguments))}var n;return(0,s.default)(e,t),(0,f.default)(e,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=m(e);return y.default.createElement(O,null,y.default.createElement(n,(0,a.default)({},r,{url:o})))}}],[{key:"getInitialProps",value:(n=(0,u.default)(i.default.mark(function t(e){var n,r,o;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,e.router,r=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t,this)})),function(t){return n.apply(this,arguments)})}]),e}(y.Component);e.default=w,(0,d.default)(w,"childContextTypes",{headManager:b.default.object,router:b.default.object});var O=function(t){function e(){return(0,c.default)(this,e),(0,l.default)(this,(0,p.default)(e).apply(this,arguments))}return(0,s.default)(e,t),(0,f.default)(e,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var t=window.location.hash;if(t=!!t&&t.substring(1)){var e=document.getElementById(t);e&&setTimeout(function(){return e.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),e}(y.Component);e.Container=O;var g=(0,h.execOnce)(function(){0});function m(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return g(),r},get pathname(){return g(),e},get asPath(){return g(),n},back:function(){g(),t.back()},push:function(e,n){return g(),t.push(e,n)},pushTo:function(e,n){g();var r=n?e:null,o=n||e;return t.push(r,o)},replace:function(e,n){return g(),t.replace(e,n)},replaceTo:function(e,n){g();var r=n?e:null,o=n||e;return t.replace(r,o)}}}},291:function(t,e,n){var r=n(123);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},40:function(t,e,n){"use strict";var r=n(7).compose;e.__esModule=!0,e.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},60:function(t,e,n){"use strict";var r=n(7),o=n(40);function i(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}var u=i();u.withExtraArgument=i;var a=u,c=n(11);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={produto:[]},p=Object(r.combineReducers)({MainReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.a:return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}({},t,{produto:e.payload});default:return t}}});n.d(e,"a",function(){return d});var s=p,d=function(){return Object(r.createStore)(s,{},Object(o.composeWithDevTools)(Object(r.applyMiddleware)(a)))}},84:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,o=(r=n(17))&&r.__esModule?r:{default:r},i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(0));function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void n(t)}a.done?e(c):Promise.resolve(c).then(r,o)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){b(t,e,n[e])})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h="undefined"==typeof window,v=function(t){var e=t.makeStore,n=t.initialState,r=t.config,o=t.ctx,i=void 0===o?{}:o,u=r.storeKey,a=function(){return e(r.deserializeState(n),y({},i,r,{isServer:h}))};return h?a():(window[u]||(window[u]=a()),window[u])};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=y({storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},e),function(n){var r,u,y,w;return u=r=function(r){function o(n,r){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),i=p(this,s(o).call(this,n,r));var u=n.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",u),i.store=v({makeStore:t,initialState:u,config:e}),i}var u,a,y;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(o,i.Component),u=o,(a=[{key:"render",value:function(){var t=this.props,e=t.initialProps,r=(t.initialState,f(t,["initialProps","initialState"]));return i.default.createElement(n,c({},r,e,{store:this.store}))}}])&&l(u.prototype,a),y&&l(u,y),o}(),b(r,"displayName","withRedux(".concat(n.displayName||n.name||"App",")")),b(r,"getInitialProps",(y=o.default.mark(function r(i){var u,a;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(i){r.next=2;break}throw new Error("No app context");case 2:if(i.ctx){r.next=4;break}throw new Error("No page context");case 4:if(u=v({makeStore:t,config:e,ctx:i.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",u.getState()),i.ctx.store=u,i.ctx.isServer=h,a={},!("getInitialProps"in n)){r.next=13;break}return r.next=12,n.getInitialProps.call(n,i);case 12:a=r.sent;case 13:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",u.getState()),r.abrupt("return",{isServer:h,initialState:e.serializeState(u.getState()),initialProps:a});case 15:case"end":return r.stop()}},r,this)}),w=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=y.apply(t,e);function i(t){a(o,n,r,i,u,"next",t)}function u(t){a(o,n,r,i,u,"throw",t)}i(void 0)})},function(t){return w.apply(this,arguments)})),u}}}},[[285,1,0]]]);