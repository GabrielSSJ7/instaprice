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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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
/* 6 */,
/* 7 */,
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
/* 9 */,
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var URL = "http://localhost:4000/";

var Cadastro =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cadastro, _React$Component);

  function Cadastro(props) {
    var _this;

    _classCallCheck(this, Cadastro);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cadastro).call(this, props));
    _this.state = {
      nome: "",
      email: "",
      password: "",
      error: ""
    };
    return _this;
  }

  _createClass(Cadastro, [{
    key: "cadastrar",
    value: function () {
      var _cadastrar = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = {
                  nome: this.state.nome,
                  email: this.state.email,
                  password: this.state.password
                };
                console.log(data);
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("".concat(URL, "signin"), data).then(function (res) {
                  console.log(res); //localStorage.setItem("authToken", res.data.token);

                  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/Login");
                }).catch(function (err) {
                  console.log(err);

                  _this2.setState({
                    error: err.response.data
                  });
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function cadastrar() {
        return _cadastrar.apply(this, arguments);
      }

      return cadastrar;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "limiter"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-login100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wrap-login100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "login100-form validate-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "login100-form-title p-b-43"
      }, "Instaprice.me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Insira seu nome"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input100",
        type: "text",
        name: "nome",
        onChange: function onChange(e) {
          return _this3.setState({
            nome: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "focus-input100"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "label-input100"
      }, "Nome Completo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Insira um email v\xE1lido: exemplo@dominio.com"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input100",
        type: "text",
        name: "email",
        onChange: function onChange(e) {
          return _this3.setState({
            email: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "focus-input100"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "label-input100"
      }, "Email")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Insira uma senha"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input100",
        type: "password",
        name: "pass",
        onChange: function onChange(e) {
          return _this3.setState({
            password: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "focus-input100"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "label-input100"
      }, "Senha")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-login100-form-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.cadastrar();
        },
        className: "login100-form-btn"
      }, "Cadastrar")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          textAlign: "center",
          color: "red"
        }
      }, this.state.error), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-center p-t-46 p-b-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "txt2"
      }, "Acesse usando")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "login100-form-social flex-c-m"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "login100-form-social-item flex-c-m bg1 m-r-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-facebook-f",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        className: "login100-form-social-item flex-c-m bg2 m-r-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-twitter",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "login100-more",
        style: {
          backgroundImage: "url('../static/images/bg-01.jpg')"
        }
      })))));
    }
  }]);

  return Cadastro;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cadastro);

/***/ })
/******/ ]);