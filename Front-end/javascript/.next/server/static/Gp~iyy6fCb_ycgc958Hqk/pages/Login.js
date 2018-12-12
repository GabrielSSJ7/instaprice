module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_MAIN_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL; });
var GET_MAIN_DATA = "getmaindata";
var URL = "http://localhost:4000/";

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStroopwafel"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHome"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFire"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlusSquare"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faComment"]);

var Template = function Template(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Instaprice"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/cerulean/bootstrap.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "../static/teste.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    rel: "stylesheet",
    integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
    crossorigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "../static/images/icons/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/bootstrap/css/bootstrap.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/animate/animate.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/css-hamburgers/hamburgers.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/animsition/css/animsition.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/select2/select2.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/vendor/daterangepicker/daterangepicker.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/css/util.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "../static/css/main.css"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/jquery/jquery-3.2.1.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/animsition/js/animsition.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/bootstrap/js/popper.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/bootstrap/js/bootstrap.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/select2/select2.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/daterangepicker/moment.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/daterangepicker/daterangepicker.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/vendor/countdowntime/countdowntime.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "../static/js/main.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Template);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStroopwafel"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFire"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusSquare"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faComment"]);

var TopMenu = function TopMenu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-light",
    style: {
      backgroundColor: "#f8f9fa!important",
      marginBottom: "15px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/images/LOGO_CONCEITO_V1.png",
    width: "30",
    height: "30",
    className: "d-inline-block align-top",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "5px"
    }
  }, "Instaprice"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Profile?produto=" + props.produto,
    as: "/profile/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "user",
    size: "2x"
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (TopMenu);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStroopwafel"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFire"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusSquare"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faComment"]);

var BottomMenu = function BottomMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar fixed-bottom navbar-light bg-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "home",
    size: "2x"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "trend.php"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "fire",
    size: "2x"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "plus-square",
    size: "2x"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-brand",
    href: "messages.php"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "comment",
    size: "2x"
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (BottomMenu);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateToken; });
/* unused harmony export curtirProduto */
/* unused harmony export comentar */
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var URL = "http://localhost:4000/";
var validateToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(URL, "validateToken"), {
              token: token
            }).then(function (res) {
              console.log(res.data);

              if (!res.data) {
                localStorage.removeItem("authToken");
                next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/Login");
              } else {
                next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
              }

              return res.data;
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validateToken(_x) {
    return _ref.apply(this, arguments);
  };
}();
var curtirProduto = function curtirProduto(prodId, cb) {
  var token = localStorage.getItem("authToken");
  var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    headers: {
      Authorization: "bearer ".concat(token)
    }
  });
  instance.post("".concat(URL, "like"), {
    produtoId: prodId,
    token: token
  }).then(function (res) {
    console.log(prodId);
    cb("bearer ".concat(token));
  });
};
var comentar = function comentar(prodId, comentario) {
  var token = localStorage.getItem("authToken");
  var instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    headers: {
      Authorization: "bearer ".concat(token)
    }
  });
  instance.post("".concat(URL, "comment"), {
    produtoId: prodId,
    token: token,
    comentario: comentario
  }).then(function (res) {
    _pages_index__WEBPACK_IMPORTED_MODULE_3__["default"].refresh(res.data);
  });
};

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(13);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(14);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./config/types.js
var types = __webpack_require__(7);

// CONCATENATED MODULE: ./config/reducers/MainReducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var INITIAL_STATE = {
  produto: []
};
/* harmony default export */ var MainReducer = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types["a" /* GET_MAIN_DATA */]:
      return _objectSpread({}, state, {
        produto: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./config/reducers/index.js


/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  MainReducer: MainReducer
}));
// CONCATENATED MODULE: ./config/store.js
/* unused harmony export actionTypes */
/* unused harmony export reducer */
/* unused harmony export serverRenderClock */
/* unused harmony export startClock */
/* unused harmony export addCount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store_initStore; });




var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};
var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK' // REDUCERS

};
var reducer = reducers; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: Date.now()
    });
  };
};
var startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({
        type: actionTypes.TICK,
        light: true,
        ts: Date.now()
      });
    }, 1000);
  };
};
var addCount = function addCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD
    });
  };
};
var store_initStore = function initStore() {
  return Object(external_redux_["createStore"])(reducer, {}, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__(22);
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(9);

// EXTERNAL MODULE: ./components/Util.js
var Util = __webpack_require__(17);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(1);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(2);

// EXTERNAL MODULE: ./config/types.js
var types = __webpack_require__(7);

// CONCATENATED MODULE: ./config/actions/MainAction.js


var MainAction_getMainData = function getMainData(token) {
  return function (dispatch) {
    var instance = external_axios_default.a.create({
      headers: {
        Authorization: token
      }
    });
    instance.get("".concat(types["b" /* URL */], "main")).then(function (res) {
      dispatch(MainAction_dispatchGetMainData(res));
    }).catch(function (err) {});
  };
};

var MainAction_dispatchGetMainData = function dispatchGetMainData(res) {
  return {
    type: types["a" /* GET_MAIN_DATA */],
    payload: res.data
  };
};
// CONCATENATED MODULE: ./components/RenderProd.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faCommentDollar"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faDollarSign"]);
fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faHeartbeat"]);

var RenderProd_RenderProd =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RenderProd, _React$Component);

  function RenderProd(props) {
    var _this;

    _classCallCheck(this, RenderProd);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RenderProd).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "curtirProduto", function (prodId) {
      var token = localStorage.getItem("authToken");
      var instance = external_axios_default.a.create({
        headers: {
          Authorization: "bearer ".concat(token)
        }
      });
      instance.post("".concat(types["b" /* URL */], "like"), {
        produtoId: prodId,
        token: token
      }).then(function (res) {
        console.log(prodId);

        _this.props.getMainData("bearer ".concat(token));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "comentar", function (prodId, comentario) {
      var token = localStorage.getItem("authToken");
      var instance = external_axios_default.a.create({
        headers: {
          Authorization: "bearer ".concat(token)
        }
      });
      instance.post("".concat(types["b" /* URL */], "comment"), {
        produtoId: prodId,
        token: token,
        comentario: comentario
      }).then(function (res) {
        _this.setState({
          comentario: ""
        });

        _this.props.getMainData("bearer ".concat(token));
      });
    });

    _this.state = {
      comentario: ""
    };
    return _this;
  }

  _createClass(RenderProd, [{
    key: "renderizarProdutos",
    value: function renderizarProdutos() {
      var _this2 = this;

      var produtos = [];
      var like = [];
      var youLiked = external_react_default.a.createElement("span", null);
      console.log(this.props);

      var _loop = function _loop(x) {
        var comentarios = [];

        if (_this2.props.produto[x].comentarios) {
          for (var y = 0; y < _this2.props.produto[x].comentarios.length; y++) {
            comentarios.push(external_react_default.a.createElement("div", {
              className: "container",
              style: {
                marginBottom: "10px"
              }
            }, external_react_default.a.createElement("div", {
              className: "row"
            }, external_react_default.a.createElement("div", {
              className: "col-xs-2 col-md-2"
            }, external_react_default.a.createElement("div", {
              style: {
                width: "40px",
                height: "40px",
                backgroundImage: "url(".concat(_this2.props.produto[x].comentarios[y].foto, ")"),
                borderRadius: "100%",
                backgroundSize: "cover"
              }
            })), external_react_default.a.createElement("div", {
              className: "col-xs-10 col-md-10",
              style: {
                margin: "auto 0",
                padding: "0"
              }
            }, external_react_default.a.createElement("p", {
              key: y
            }, external_react_default.a.createElement("span", {
              style: {
                fontWeight: "bold",
                paddingRight: "5px"
              }
            }, _this2.props.produto[x].comentarios[y].nome), external_react_default.a.createElement("span", null, _this2.props.produto[x].comentarios[y].comentario))))));
          }
        }

        if (_this2.props.produto[x].liked) {
          like.push(external_react_default.a.createElement("a", {
            className: "",
            onClick: function onClick() {
              return _this2.curtirProduto(_this2.props.produto[x].id);
            },
            key: x
          }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
            icon: "heartbeat",
            size: "2x",
            className: "prod-icons",
            color: "pink"
          })));
          youLiked = external_react_default.a.createElement("span", {
            style: {
              fontWeight: "bold"
            }
          }, "Voc\xEA j\xE1 curtiu, ");
        } else {
          like.push(external_react_default.a.createElement("button", {
            className: "",
            key: x
          }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
            icon: "heartbeat",
            size: "2x",
            className: "prod-icons",
            onClick: function onClick() {
              return _this2.curtirProduto(_this2.props.produto[x].id);
            }
          })));
        }

        produtos.push(external_react_default.a.createElement("div", {
          key: x,
          className: "row top-buffer rounded"
        }, external_react_default.a.createElement("div", {
          className: "col-sm-2"
        }), external_react_default.a.createElement("div", {
          className: "col-sm-8 col-md-8 col-xs-12"
        }, external_react_default.a.createElement("div", {
          className: "card"
        }, external_react_default.a.createElement("div", {
          className: "container"
        }, external_react_default.a.createElement("div", {
          className: "row",
          style: {
            padding: "10px"
          }
        }, external_react_default.a.createElement("div", {
          className: "col-md-2",
          style: {
            paddingRight: "0"
          }
        }, external_react_default.a.createElement("div", {
          style: {
            width: "60px",
            height: "60px",
            backgroundImage: "url(".concat(_this2.props.produto[x].foto, ")"),
            borderRadius: "100%",
            backgroundSize: "cover"
          }
        })), external_react_default.a.createElement("div", {
          style: {
            margin: "auto 0"
          },
          className: "col-md-8"
        }, external_react_default.a.createElement("p", null, _this2.props.produto[x].nome_usuario)))), external_react_default.a.createElement("div", {
          className: "border"
        }, external_react_default.a.createElement("img", {
          className: "card-img-top img-thumbnail",
          src: _this2.props.produto[x].imagem,
          alt: ""
        })), external_react_default.a.createElement("div", {
          className: "card-body"
        }, external_react_default.a.createElement("div", {
          className: "col-sm-8 col-md-12 col-xs-12 mt-0 mb-2"
        }, external_react_default.a.createElement("h5", {
          className: "card-title"
        }, _this2.props.produto[x].nome, external_react_default.a.createElement("p", {
          style: {
            float: "right"
          }
        }, "Pre\xE7o: ", _this2.props.produto[x].preco))), external_react_default.a.createElement("div", {
          className: "border mt-0 mb-2"
        }), external_react_default.a.createElement("p", {
          className: "card-text"
        }, _this2.props.produto[x].desc), external_react_default.a.createElement("div", {
          className: "top-buffer"
        }, external_react_default.a.createElement("div", {
          className: "border mt-0 mb-2"
        }), external_react_default.a.createElement("div", {
          className: "col-sm-8 col-md-12 col-xs-12 mt-0 mb-2"
        }, external_react_default.a.createElement("a", {
          href: "#",
          className: ""
        }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
          icon: "comment-dollar",
          size: "2x",
          className: "prod-icons"
        })), external_react_default.a.createElement("a", {
          href: "#",
          className: ""
        }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
          icon: "dollar-sign",
          size: "2x",
          className: "prod-icons"
        })), like, external_react_default.a.createElement("p", {
          style: {
            float: "right"
          }
        }, youLiked, _this2.props.produto[x].likes, " likes")), external_react_default.a.createElement("div", {
          className: "border mt-0 mb-2"
        }), external_react_default.a.createElement("div", null, comentarios, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
          className: "form-row align-items-center"
        }, external_react_default.a.createElement("div", {
          className: "col-sm-4 col-md-10 col-xs-12",
          style: {
            width: "70%"
          }
        }, external_react_default.a.createElement("label", {
          className: "sr-only",
          htmlFor: "inlineFormInput"
        }, "Name"), external_react_default.a.createElement("input", {
          value: _this2.state.comentario,
          type: "text",
          className: "form-control mb-2",
          id: "inlineFormInput",
          placeholder: "Envie sua pergunta ao vendedor",
          onChange: function onChange(e) {
            return _this2.setState({
              comentario: e.target.value
            });
          }
        })), external_react_default.a.createElement("div", {
          className: "col-auto"
        }, external_react_default.a.createElement("button", {
          className: "btn btn-primary mb-2",
          onClick: function onClick() {
            return _this2.comentar(_this2.props.produto[x].id, _this2.state.comentario);
          }
        }, "Send"))))))), external_react_default.a.createElement("div", {
          className: "col-sm-2"
        })))));
        like = [];
        youLiked = external_react_default.a.createElement("span", null);
      };

      for (var x = 0; x < this.props.produto.length; x++) {
        _loop(x);
      }

      return produtos;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("span", null, this.renderizarProdutos());
    }
  }]);

  return RenderProd;
}(external_react_default.a.Component);

var RenderProd_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMainData: Object(external_redux_["bindActionCreators"])(MainAction_getMainData, dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  console.log("state.main", state);
  return {
    produto: state.MainReducer.produto
  };
};

/* harmony default export */ var components_RenderProd = (Object(external_react_redux_["connect"])(mapStateToProps, RenderProd_mapDispatchToProps)(RenderProd_RenderProd));
// EXTERNAL MODULE: ./components/Template.js
var Template = __webpack_require__(8);

// EXTERNAL MODULE: ./components/TopMenu.js
var TopMenu = __webpack_require__(15);

// EXTERNAL MODULE: ./components/BottomMenu.js
var BottomMenu = __webpack_require__(16);

// EXTERNAL MODULE: ./config/store.js + 2 modules
var config_store = __webpack_require__(19);

// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }












var socketUrl = "http://192.168.15.14:4000";

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  pages_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    pages_classCallCheck(this, Index);

    _this = pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).call(this, props));
    var socket = external_socket_io_client_default()(socketUrl);
    socket.on("connect", function () {
      console.log("connected on Socket.Io", socket.id);
    });
    return _this;
  }

  pages_createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(Util["a" /* validateToken */])(localStorage.getItem("authToken"));

      if (this.props.produto.length === 0) {
        this.props.getMainData("bearer ".concat(localStorage.getItem("authToken")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Template["a" /* default */], null, external_react_default.a.createElement(TopMenu["a" /* default */], {
        props: this.props
      }), external_react_default.a.createElement(components_RenderProd, {
        produto: this.props.produto
      }), external_react_default.a.createElement(BottomMenu["a" /* default */], null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          isServer = _ref.isServer,
          req = _ref.req;
      var cookie = req ? req.headers.cookie : "";

      if (cookie) {
        var index = cookie.indexOf("bearer");
        var AuthToken = cookie.substr(index);
        AuthToken = AuthToken.split("%20").join(" ");

        try {
          store.dispatch(MainAction_getMainData(AuthToken));
          return {};
        } catch (e) {
          return {
            produto: []
          };
        }
      }

      return {};
    }
  }]);

  return Index;
}(external_react_default.a.Component);

var pages_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMainData: Object(external_redux_["bindActionCreators"])(MainAction_getMainData, dispatch)
  };
};

var pages_mapStateToProps = function mapStateToProps(state) {
  console.log("state.main", state);
  return {
    produto: state.MainReducer.produto
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(pages_mapStateToProps, pages_mapDispatchToProps)(pages_Index));

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var URL = "http://localhost:4000/";

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      funcionando: false,
      email: "",
      password: "",
      error: ""
    };
    return _this;
  }

  _createClass(Login, [{
    key: "redirectIfLogged",
    value: function redirectIfLogged() {
      if (localStorage.getItem("authToken")) {
        Object(_components_Util__WEBPACK_IMPORTED_MODULE_6__[/* validateToken */ "a"])(localStorage.getItem("authToken"));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.redirectIfLogged();
    }
  }, {
    key: "logar",
    value: function logar() {
      var _this2 = this;

      var data = {
        email: this.state.email,
        password: this.state.password
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(URL, "login"), data).then(function (res) {
        localStorage.setItem("authToken", res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set('Authorization', "bearer ".concat(res.data.token), {
          expires: 1
        });
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'] = "bearer ".concat(res.data.token); // for all requests

        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
      }).catch(function (err) {
        console.log(err);

        _this2.setState({
          error: err.response.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: "#666666"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "limiter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-login100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap-login100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login100-form validate-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "login100-form-title p-b-43"
      }, "Instaprice.me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Insira um email v\xE1lido: exemplo@dominio.com"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input100",
        type: "text",
        name: "email",
        onChange: function onChange(e) {
          return _this3.setState({
            email: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "focus-input100"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label-input100"
      }, "Email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Password is required"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input100",
        type: "password",
        name: "pass",
        onChange: function onChange(e) {
          return _this3.setState({
            password: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "focus-input100"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "label-input100"
      }, "Senha")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-sb-m w-full p-t-3 p-b-32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact100-form-checkbox"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "input-checkbox100",
        id: "ckb1",
        type: "checkbox",
        name: "remember-me"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label-checkbox100",
        htmlFor: "ckb1"
      }, "Lembrar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "txt1"
      }, "Esqueceu a senha?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-login100-form-btn"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.logar();
        },
        className: "login100-form-btn"
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "txt2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/Cadastro"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Cadastre-se agora")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        style: {
          textAlign: "center",
          color: "red"
        }
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center p-t-46 p-b-20"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "txt2"
      }, "Acesse usando")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login100-form-social flex-c-m"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "login100-form-social-item flex-c-m bg1 m-r-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-facebook-f",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "login100-form-social-item flex-c-m bg2 m-r-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-twitter",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login100-more",
        style: {
          backgroundImage: "url('../static/images/bg-01.jpg')"
        }
      }))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })
/******/ ]);