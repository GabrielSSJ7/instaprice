webpackHotUpdate("static\\development\\pages\\Post.js",{

/***/ "./pages/Post.js":
/*!***********************!*\
  !*** ./pages/Post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TopMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopMenu */ "./components/TopMenu.js");
/* harmony import */ var _components_BottomMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BottomMenu */ "./components/BottomMenu.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/types */ "./config/types.js");
var _jsxFileName = "C:\\xampp\\htdocs\\instaprice\\Front-end\\javascript\\pages\\Post.js";

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









var Post =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    var _this;

    _classCallCheck(this, Post);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleImage", function (event) {
      _this.setState({
        uploadImage: event.target.files[0]
      });

      var output = document.getElementById("imageArticle");

      if (event.target.files[0]) {
        if (event.target.files[0].name.length > 10) {
          _this.setState({
            image: event.target.files[0].name.substr(0, 16) + "..."
          });
        }

        output.src = URL.createObjectURL(event.target.files[0]);
      } else {
        output.src = "";

        _this.setState({
          image: "Selecione uma imagem"
        });
      }
    });

    var config = {
      apiKey: "AIzaSyBEDZLOIOmjgAIyy7PIdKbcKqajbE8sxaY",
      authDomain: "projeto-teste-d356c.firebaseapp.com",
      databaseURL: "https://projeto-teste-d356c.firebaseio.com",
      projectId: "projeto-teste-d356c",
      storageBucket: "projeto-teste-d356c.appspot.com",
      messagingSenderId: "605367050222"
    };

    if (!firebase__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
      firebase__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(config);
    }

    _this.state = {
      image: "Selecione uma imagem",
      uploadImage: "",
      nome: "",
      preco: "",
      desc: "",
      imagem: ""
    };
    return _this;
  }

  _createClass(Post, [{
    key: "inserirProduto",
    value: function inserirProduto(event, ctx) {
      if (event.name != null) {
        var storageRef = firebase__WEBPACK_IMPORTED_MODULE_1___default.a.storage().ref();
        var metadata = {
          contentType: event.type
        };
        var uploadTask = storageRef.child("images/" + event.name + Date.now()).put(event, metadata); // Listen for state changes, errors, and completion of the upload.

        uploadTask.on(firebase__WEBPACK_IMPORTED_MODULE_1___default.a.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          console.log("Upload is " + progress + "% done");
          ctx.setState({
            progress: "".concat(progress.toFixed(2), "%")
          });

          switch (snapshot.state) {
            case firebase__WEBPACK_IMPORTED_MODULE_1___default.a.storage.TaskState.PAUSED:
              // or 'paused'
              console.log("Upload is paused");
              break;

            case firebase__WEBPACK_IMPORTED_MODULE_1___default.a.storage.TaskState.RUNNING:
              // or 'running'
              console.log("Upload is running");
              break;
          }
        }, function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;

            case "storage/invalid-argument":
              break;
          }
        }, function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            var data = {
              nome: ctx.state.nome,
              preco: ctx.state.preco,
              desc: ctx.state.desc,
              imagem: downloadURL,
              token: localStorage.getItem("authToken")
            };
            var instance = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
              headers: {
                Authorization: "bearer ".concat(localStorage.getItem("authToken"))
              }
            });
            instance.post("".concat(_config_types__WEBPACK_IMPORTED_MODULE_6__["URL"], "insert"), data).then(function (res) {
              Router.push("/");
            }).catch(function (err) {
              ctx.setState({
                erro: err.response ? err.response.data : err
              });
            });
          }).catch(function (err) {
            console.log(err);
          });
        });
      } else if (ctx.state.nome == null || ctx.state.nome == "") {
        ctx.setState({
          erro: "É necessário que o item tenha nome"
        });
      } else if (ctx.state.preco == null || ctx.state.preco == "") {
        ctx.setState({
          erro: "É necessário que o item tenha preco"
        });
      } else {
        ctx.setState({
          erro: "É necessário ter uma imagem"
        });
      }
    }
  }, {
    key: "divulgar",
    value: function divulgar() {
      console.log(this.state.uploadImage);
      this.inserirProduto(this.state.uploadImage, this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "nome",
        id: "nome",
        name: "nome",
        onChange: function onChange(e) {
          _this2.setState({
            nome: e.target.value
          });
        },
        value: this.state.nome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        placeholder: "pre\xE7o",
        id: "preco",
        name: "preco",
        onChange: function onChange(e) {
          _this2.setState({
            preco: e.target.value
          });
        },
        value: this.state.preco,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "imageArticle",
        alt: "Imagem a ser upload",
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          cursor: "pointer"
        },
        htmlFor: "uploadImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, this.state.image)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        style: {
          display: "none"
        },
        className: "form-control",
        type: "file",
        id: "uploadImage",
        onChange: this.handleImage,
        name: "uploadImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Progresso do upload ", this.state.progress))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        onChange: function onChange(e) {
          _this2.setState({
            desc: e.target.value
          });
        },
        value: this.state.desc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          marginTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.divulgar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Divulgar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: {
          color: "red",
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, this.state.erro)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BottomMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      })));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Post);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=Post.js.2afcc48f843832ed715c.hot-update.js.map