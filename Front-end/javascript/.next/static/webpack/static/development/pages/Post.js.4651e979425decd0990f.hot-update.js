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
/* harmony import */ var _components_TopMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopMenu */ "./components/TopMenu.js");
/* harmony import */ var _components_BottomMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BottomMenu */ "./components/BottomMenu.js");
/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Template */ "./components/Template.js");
var _jsxFileName = "C:\\xampp\\htdocs\\instaprice\\Front-end\\javascript\\pages\\Post.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Post).call(this, props)); // var config = {
    //   apiKey: "AIzaSyBEDZLOIOmjgAIyy7PIdKbcKqajbE8sxaY",
    //   authDomain: "projeto-teste-d356c.firebaseapp.com",
    //   databaseURL: "https://projeto-teste-d356c.firebaseio.com",
    //   projectId: "projeto-teste-d356c",
    //   storageBucket: "projeto-teste-d356c.appspot.com",
    //   messagingSenderId: "605367050222"
    // };
    // firebase.initializeApp(config);
    // this.state = {
    //   image: "Selecione uma imagem",
    //   uploadImage: ""
    // };

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setTextArea", function (event) {
      console.log(event.target.value);
    });

    return _this;
  }

  _createClass(Post, [{
    key: "divulgar",
    value: function divulgar() {
      console.log("Divulgando...");
    }
  }, {
    key: "inserirProduto",
    value: function inserirProduto() {
      var storageRef = firebase.storage().ref();
      var metadata = {
        contentType: event.type
      };
      var uploadTask = storageRef.child("images/" + event.name + Date.now()).put(event, metadata); // Listen for state changes, errors, and completion of the upload.

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log("Upload is " + progress + "% done");
        dispatch({
          type: PROGRESS_BAR,
          payload: progress
        });

        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            // or 'paused'
            console.log("Upload is paused");
            break;

          case firebase.storage.TaskState.RUNNING:
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
          data = _objectSpread({}, data, {
            imagem: downloadURL
          });
          axios.post("".concat(globalUrl).concat(editOrInsert), data).then(function (res) {
            console.log("Respostas do adcionar artigo", res);

            if (res.status === 200) {
              dispatch({
                type: ADICIONA_ARTIGO_COM_SUCESSO,
                payload: res.data
              });
            } else {
              dispatch({
                type: ADICIONA_ARTIGO_ERRO,
                payload: res.data
              });
            }
          });
        }).catch(function (err) {
          console.log(err.response);
          dispatch({
            type: ADICIONA_ARTIGO_ERRO,
            payload: err.response.data
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: this.props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "nome",
        id: "nome",
        name: "nome",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "number",
        placeholder: "pre\xE7o",
        id: "preco",
        name: "preco",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4 col-xs-4 form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
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
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          cursor: "pointer"
        },
        htmlFor: "uploadImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
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
          lineNumber: 173
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-12 col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "form-control",
        onChange: this.setTextArea,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        style: {
          marginTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-xs-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.divulgar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Divulgar")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BottomMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
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
//# sourceMappingURL=Post.js.4651e979425decd0990f.hot-update.js.map