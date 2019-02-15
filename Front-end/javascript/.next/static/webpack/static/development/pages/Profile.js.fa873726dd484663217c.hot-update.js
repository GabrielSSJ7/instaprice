webpackHotUpdate("static\\development\\pages\\Profile.js",{

/***/ "./pages/Profile.js":
/*!**************************!*\
  !*** ./pages/Profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
/* harmony import */ var _components_TopMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopMenu */ "./components/TopMenu.js");
/* harmony import */ var _components_BottomMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BottomMenu */ "./components/BottomMenu.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-responsive-modal */ "./node_modules/react-responsive-modal/lib/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../config/types */ "./config/types.js");
/* harmony import */ var _components_Util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Util */ "./components/Util.js");
/* harmony import */ var _components_ProfileTabs_UserProfile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ProfileTabs/UserProfile */ "./components/ProfileTabs/UserProfile.js");
/* harmony import */ var _components_ProfileTabs_AddressProfile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ProfileTabs/AddressProfile */ "./components/ProfileTabs/AddressProfile.js");
/* harmony import */ var _components_ProfileTabs_CardsProfile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/ProfileTabs/CardsProfile */ "./components/ProfileTabs/CardsProfile.js");

var _jsxFileName = "C:\\xampp\\htdocs\\instaprice\\Front-end\\javascript\\pages\\Profile.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var dateFormat = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faEdit"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faUser"]);








var profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(profile, _React$Component);

  _createClass(profile, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store, isServer, req, cookie, index, AuthToken, token, options, user, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer, req = _ref.req;
                cookie = req ? req.headers.cookie : "";

                if (!cookie) {
                  _context.next = 16;
                  break;
                }

                index = cookie.indexOf("bearer");
                AuthToken = cookie.substr(index);
                AuthToken = AuthToken.split("%20").join(" ");
                AuthToken = AuthToken.indexOf("; ");
                token = AuthToken.split("bearer ").join("");
                options = {
                  headers: {
                    Authorization: AuthToken
                  }
                };
                console.log("header Auth", cookie);
                _context.next = 12;
                return fetch("".concat(_config_types__WEBPACK_IMPORTED_MODULE_16__["URL"], "user/").concat(token), options);

              case 12:
                user = _context.sent;
                //const data = await user.json();
                console.log("user data", user);
                data = [];
                return _context.abrupt("return", {
                  user: data
                });

              case 16:
                return _context.abrupt("return", {});

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function profile(props) {
    var _this;

    _classCallCheck(this, profile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(profile).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpenModal", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseModal", function () {
      _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpenModalEditUser", function () {
      _this.setState({
        openEditUser: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseModalEditUser", function () {
      _this.setState({
        openEditUser: false
      });
    });

    _this.state = {
      open: false,
      openEditUser: false,
      file: null,
      image: null,
      startDate: new Date("2000-05-22"),
      foto: "",
      nome: null,
      cpf: "não informado",
      sexo: "não informado",
      msg: "",
      progress: "",
      email: "",
      data_de_nascimento: null,
      event: null,
      tab: null,
      enderecos: []
    };

    _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_components_Util__WEBPACK_IMPORTED_MODULE_17__["getAddress"])(this);

      if (!this.props.user) {
        this.getAllUserData();
      } else {
        this.setState({
          nome: this.props.user.nome,
          cpf: this.props.user.cpf,
          sexo: this.props.user.sexo,
          data_de_nascimento: this.props.user ? this.props.user.data_de_nascimento : null,
          foto: this.props.user.foto,
          email: this.props.user.email
        });
      }
    }
  }, {
    key: "getAllUserData",
    value: function getAllUserData() {
      var _this2 = this;

      var token = localStorage.getItem("authToken");
      var instance = axios__WEBPACK_IMPORTED_MODULE_8___default.a.create({
        headers: {
          Authorization: "bearer ".concat(token)
        }
      });
      instance.get("".concat(_config_types__WEBPACK_IMPORTED_MODULE_16__["URL"], "user/").concat(token)).then(function (res) {
        _this2.setState({
          startDate: res.data.data_de_nascimento,
          data_de_nascimento: res.data.data_de_nascimento ? res.data.data_de_nascimento : null,
          nome: res.data.nome,
          cpf: res.data.cpf ? res.data.cpf : null,
          sexo: res.data.sexo ? res.data.sexo : null,
          foto: res.data.foto,
          email: res.data.email
        });
      });
    }
  }, {
    key: "showPhoto",
    value: function showPhoto() {
      if (this.props.user || this.state.foto) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "rounded-circle img-fluid",
          src: this.state.foto,
          alt: "instaprice ".concat(this.props.user ? this.props.user.nome : this.state.nome),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          className: "rounded-circle img-fluid",
          src: "https://pbs.twimg.com/profile_images/573692360263004161/gOvizBEP.jpeg",
          alt: "instaprice ".concat(this.props.user ? this.props.user.nome : this.state.nome),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        });
      }
    }
  }, {
    key: "handleImage",
    value: function handleImage(event) {
      //const { event } = this.state;
      this.onOpenModal();
      this.setState({
        image: event.target.files[0]
      });

      if (event.target.files[0]) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        });
      }
    }
  }, {
    key: "_userEdit",
    value: function _userEdit() {
      var data = {
        nome: this.state.nome,
        sexo: this.state.sexo,
        data_de_nascimento: this.state.data_de_nascimento,
        cpf: this.state.cpf
      };
      Object(_components_Util__WEBPACK_IMPORTED_MODULE_17__["editUser"])(data, null, this);
    }
  }, {
    key: "_userEditFoto",
    value: function _userEditFoto() {
      var data = {};
      Object(_components_Util__WEBPACK_IMPORTED_MODULE_17__["editUser"])(data, this.state.image, this);
    }
  }, {
    key: "handleChange",
    value: function handleChange(date) {
      this.setState({
        data_de_nascimento: date
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab() {
      var _this3 = this;

      switch (this.state.tab) {
        case "profile":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProfileTabs_UserProfile__WEBPACK_IMPORTED_MODULE_18__["default"], {
            data: this.state,
            showPhoto: function showPhoto() {
              return _this3.showPhoto();
            },
            handleImage: this.handleImage.bind(this),
            onOpenModalEditUser: this.onOpenModalEditUser.bind(this),
            ctx: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          });

        case "address":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProfileTabs_AddressProfile__WEBPACK_IMPORTED_MODULE_19__["default"], {
            data: this.state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          });

        case "cards":
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProfileTabs_CardsProfile__WEBPACK_IMPORTED_MODULE_20__["default"], {
            data: this.state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProfileTabs_UserProfile__WEBPACK_IMPORTED_MODULE_18__["default"], {
            data: this.state,
            showPhoto: function showPhoto() {
              return _this3.showPhoto();
            },
            handleImage: this.handleImage.bind(this),
            onOpenModalEditUser: this.onOpenModalEditUser.bind(this),
            ctx: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          open = _this$state.open,
          openEditUser = _this$state.openEditUser;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "../static/css/profile.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TopMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: open,
        onClose: this.onCloseModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "45px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        style: {
          textAlign: "center",
          marginBottom: "25px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, "Voc\xEA escolheu esta imagem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "img-fluid",
        style: {
          width: "30%",
          display: "block",
          margin: "0 auto"
        },
        id: "photoForUpload",
        src: this.state.file,
        onChange: function onChange(e) {
          return _this4.setState({
            image: e
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, this.state.progress), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "45px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4._userEditFoto();
        },
        style: {
          float: "right"
        },
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Finalizar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4.onCloseModal();
        },
        className: "btn btn-danger",
        style: {
          float: "right",
          marginRight: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Cancelar")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        open: openEditUser,
        onClose: this.onCloseModalEditUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "45px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "nome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Nome"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "form-control",
        value: this.state.nome,
        onChange: function onChange(e) {
          return _this4.setState({
            nome: e.target.value
          });
        },
        type: "text",
        id: "nome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "sexo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Sexo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: "Ex: Masculino",
        className: "form-control",
        value: this.state.sexo,
        onChange: function onChange(e) {
          return _this4.setState({
            sexo: e.target.value
          });
        },
        type: "text",
        id: "sexo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "cpf",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "CPF"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        placeholder: "Digite apenas n\xFAmeros",
        className: "form-control",
        value: this.state.cpf,
        onChange: function onChange(e) {
          return _this4.setState({
            cpf: e.target.value
          });
        },
        type: "text",
        id: "cpf",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Data de Nascimento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
        selected: this.state.data_de_nascimento,
        onChange: function onChange(d) {
          return _this4.handleChange(d);
        },
        className: "form-control",
        dateFormat: "dd/MM/yyyy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: function onClick() {
          return _this4._userEdit();
        },
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Finalizar"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "nav nav-tabs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          cursor: "pointer"
        },
        className: "nav-link active",
        onClick: function onClick() {
          _this4.setState({
            tab: "profile"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          cursor: "pointer"
        },
        className: "nav-link",
        onClick: function onClick() {
          _this4.setState({
            tab: "address"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, "Adress")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        style: {
          cursor: "pointer"
        },
        className: "nav-link",
        onClick: function onClick() {
          _this4.setState({
            tab: "cards"
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Cart\xF5es")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link disabled",
        style: {
          cursor: "pointer"
        },
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, "Social")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link disabled",
        style: {
          cursor: "pointer"
        },
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "History"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, this.changeTab()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mt-0 pb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BottomMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }));
    }
  }]);

  return profile;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    produto: state.MainReducer.produto
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(profile));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Profile")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Profile.js.fa873726dd484663217c.hot-update.js.map