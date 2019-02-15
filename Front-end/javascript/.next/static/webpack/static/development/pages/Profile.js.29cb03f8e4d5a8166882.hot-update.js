webpackHotUpdate("static\\development\\pages\\Profile.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Util */ "./components/Util.js");
/* harmony import */ var _components_RenderProd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/RenderProd */ "./components/RenderProd.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
/* harmony import */ var _components_TopMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TopMenu */ "./components/TopMenu.js");
/* harmony import */ var _components_BottomMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BottomMenu */ "./components/BottomMenu.js");
/* harmony import */ var _config_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/store */ "./config/store.js");
/* harmony import */ var _config_actions_MainAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/actions/MainAction */ "./config/actions/MainAction.js");
var _jsxFileName = "C:\\xampp\\htdocs\\instaprice\\Front-end\\javascript\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var socketUrl = "http://localhost:4000";
var socket = null;

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));
  }

  _createClass(Index, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(socketUrl);
      socket.emit('desconectar', {
        reason: 'porque eu quis'
      });
      socket.on("connect", function () {//console.log("connected on Socket.Io", socket.id);
      });
      Object(_components_Util__WEBPACK_IMPORTED_MODULE_4__["validateToken"])(localStorage.getItem("authToken"));
      socket.on("usuarioSaiu", function (data) {
        //socket.emit("usuarioSaiu",{ token: localStorage.getItem("authToken")})
        console.log("usuario saiu", data);
      });

      if (this.props.produto.length === 0) {
        this.props.getMainData("bearer ".concat(localStorage.getItem("authToken")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RenderProd__WEBPACK_IMPORTED_MODULE_5__["default"], {
        produto: this.props.produto,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BottomMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }));
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
          store.dispatch(Object(_config_actions_MainAction__WEBPACK_IMPORTED_MODULE_10__["getMainData"])(AuthToken));
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMainData: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_config_actions_MainAction__WEBPACK_IMPORTED_MODULE_10__["getMainData"], dispatch)
  };
};

var mapStateToProps = function mapStateToProps(state) {
  //console.log("state.main", state)
  return {
    produto: state.MainReducer.produto
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Profile.js.29cb03f8e4d5a8166882.hot-update.js.map