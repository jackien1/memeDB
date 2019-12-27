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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/card/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/card/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/icon/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/icon/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/upload/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/upload/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style/css */ "./node_modules/antd/lib/input/style/css.js");
/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style/css */ "./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/upload/style/css */ "./node_modules/antd/lib/upload/style/css.js");
/* harmony import */ var antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/upload */ "antd/lib/upload");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_14__);











var _jsxFileName = "/Users/jackieni/dev/personal/meme-database/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


let ml5;
let featureExtractor;
let regressor;
const Dragger = antd_lib_upload__WEBPACK_IMPORTED_MODULE_10___default.a.Dragger;



if (false) {}

class App extends react__WEBPACK_IMPORTED_MODULE_11__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "state", {
      text: "",
      targetUri: "",
      image: {},
      targetImage: {},
      memeTypes: [],
      images: [],
      memeCount: [],
      response: "",
      prediction: "",
      loading: true,
      loss: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleTrain", async () => {
      await regressor.train(lossValue => {
        if (lossValue) {
          let loss = lossValue;
          this.setState({
            loss
          });
        } else {
          this.setState({
            loss: 0
          });
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleUpload", async () => {
      this.setState({
        response: "",
        prediction: ""
      });
      const e = this.state.targetImage;
      var formData = new FormData();
      formData.append("image", e);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_12___default()({
        method: "post",
        url: "https://api.imgur.com/3/image",
        data: formData,
        headers: {
          authorization: "Client-ID 7e4e554040292df"
        }
      });
      this.setState({
        targetUri: data.data.link
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleIdentify", () => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = async () => {
        const {
          value
        } = await regressor.predict(img);
        this.setState({
          response: value,
          prediction: this.state.memeTypes[Math.round(value) > this.state.memeTypes.length - 1 ? this.state.memeTypes.length - 1 : Math.round(value)]
        });
      };

      img.src = this.state.targetUri;
      img.width = 250;
      img.height = 250;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "handleAdd", async event => {
      const e = this.state.image;
      const newData = this.state.images;
      var formData = new FormData();
      formData.append("image", e);
      formData.append("name", this.state.title);
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_12___default()({
        method: "post",
        url: "https://api.imgur.com/3/image",
        data: formData,
        headers: {
          authorization: "Client-ID 8d1d1c33ea509f6"
        }
      });
      let memeTypes = this.state.memeTypes;
      let index = memeTypes.indexOf(this.state.text);

      if (index == -1) {
        memeTypes.push(this.state.text);
      }

      index = memeTypes.indexOf(this.state.text);
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = async () => {
        await regressor.addImage(img, index);
      };

      img.src = data.data.link;
      img.width = 250;
      img.height = 250;
      newData.push({
        name: this.state.text,
        uri: data.data.link
      });
      await firebase__WEBPACK_IMPORTED_MODULE_13___default.a.database().ref().set({
        data: newData,
        types: memeTypes
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "onTextChange", event => {
      this.setState({
        text: event.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "renderCards", () => {
      return this.state.memeTypes.map((meme, index) => {
        return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a, {
          hoverable: true,
          key: meme,
          style: {
            width: "12vw",
            borderColor: meme == this.state.prediction ? "#00e676" : null
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, __jsx("div", {
          style: {
            color: "black",
            fontSize: "0.8vw",
            fontWeight: "bold"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, meme), __jsx("div", {
          style: {
            color: "black",
            fontSize: "0.8vw"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, `${this.state.memeCount[index] ? this.state.memeCount[index] : 0} Images`));
      });
    });
  }

  static async getInitialProps({
    store,
    query,
    isServer,
    test
  }) {
    const config = {
      apiKey: "AIzaSyBR_703qf8fY0ZkR34XBHtXznDRRDgR98o",
      authDomain: "meme-classifier-b95a0.firebaseapp.com",
      databaseURL: "https://meme-classifier-b95a0.firebaseio.com",
      projectId: "meme-classifier-b95a0",
      storageBucket: "meme-classifier-b95a0.appspot.com",
      messagingSenderId: "299615601073"
    };
    return {
      config
    };
  }

  async componentDidMount() {
    if (!firebase__WEBPACK_IMPORTED_MODULE_13___default.a.apps.length) {
      await firebase__WEBPACK_IMPORTED_MODULE_13___default.a.initializeApp(this.props.config);
    }

    const snapshot = await firebase__WEBPACK_IMPORTED_MODULE_13___default.a.database().ref().once("value");
    const result = await snapshot.val();
    const memeTypes = result.types;
    let counter = 0;
    this.setState({
      images: result.data,
      memeTypes
    });
    result.data.map(image => {
      const index = memeTypes.indexOf(image.name);
      const newMemeCount = this.state.memeCount;

      if (newMemeCount[index]) {
        newMemeCount[index]++;
      } else {
        newMemeCount[index] = 1;
      }

      this.setState({
        memeCount: newMemeCount
      });
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = async () => {
        await regressor.addImage(img, index);
        counter++;

        if (counter == result.data.length - 1) {
          this.setState({
            loading: false
          });
        }
      };

      img.src = image.uri;
      img.width = 250;
      img.height = 250;
    });
  }

  render() {
    return __jsx("div", {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundColor: "black",
        postition: "absolute",
        top: 0,
        width: "100vw",
        height: "50vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }), __jsx("div", {
      style: {
        position: "absolute",
        top: 0,
        width: "60%",
        marginTop: "1vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        alignItems: "row"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "area-chart",
      style: {
        fontSize: "2vw",
        display: "flex",
        alignItems: "center",
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }), __jsx("div", {
      style: {
        fontSize: "2vw",
        fontWeight: "bold",
        color: "white",
        marginLeft: "0.5vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "MemeDB")), __jsx("div", {
      style: {
        color: "white",
        display: "flex",
        alignItems: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, `Memes Known: ${this.state.memeTypes.length}`)), __jsx("div", {
      style: {
        fontSize: "6vw",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, "Meme Classifier")), !this.state.loading ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: "2vh",
        marginBottom: "2vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontWeight: "bold",
        fontSize: "3vw",
        color: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, "Training Data"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onTextChange,
      value: this.state.text,
      placeholder: "Meme name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327
      },
      __self: this
    }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginTop: "2vh",
        backgroundColor: "black",
        color: "white"
      },
      onClick: this.handleAdd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    }), "Add Image")), __jsx("div", {
      style: {
        width: "30%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, __jsx(Dragger, {
      showUploadList: false,
      onChange: event => {
        this.setState({
          image: event.fileList[event.fileList.length - 1].originFileObj
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, __jsx("p", {
      className: "ant-upload-drag-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "inbox",
      style: {
        color: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357
      },
      __self: this
    })), __jsx("p", {
      className: "ant-upload-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, "Click or drag file to this area to upload"), __jsx("p", {
      className: "ant-upload-hint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362
      },
      __self: this
    }, "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files")))), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        justifyContent: "space-evenly"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369
      },
      __self: this
    }, this.renderCards()), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        marginTop: "2vh",
        marginBottom: "2vh",
        justifyContent: "space-evenly",
        width: "100vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontWeight: "bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397
      },
      __self: this
    }, "Loss"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398
      },
      __self: this
    }, this.state.loss)), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        backgroundColor: "black"
      },
      onClick: this.handleTrain,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: this
    }, __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "sliders",
      style: {
        color: "white",
        marginRight: "0.5vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }), __jsx("div", {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422
      },
      __self: this
    }, "Train")))), __jsx("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginBottom: "2vh"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426
      },
      __self: this
    }, __jsx("div", {
      style: {
        width: "30%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, __jsx(Dragger, {
      showUploadList: false,
      onChange: event => {
        this.setState({
          targetImage: event.fileList[event.fileList.length - 1].originFileObj
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, __jsx("p", {
      className: "ant-upload-drag-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "inbox",
      style: {
        color: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      },
      __self: this
    })), __jsx("p", {
      className: "ant-upload-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448
      },
      __self: this
    }, "Click or drag file to this area to upload"), __jsx("p", {
      className: "ant-upload-hint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451
      },
      __self: this
    }, "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, __jsx("div", {
      style: {
        fontWeight: "bold",
        fontSize: "3vw",
        color: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, "Target Data"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469
      },
      __self: this
    }, `Regression: ${this.state.response}`, " "), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470
      },
      __self: this
    }, `Prediction: ${this.state.prediction}`), __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "space-evenly"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginTop: "2vh",
        backgroundColor: "black",
        color: "white"
      },
      onClick: this.handleUpload,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 475
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483
      },
      __self: this
    }), "Add Image"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginTop: "2vh",
        color: "black"
      },
      onClick: this.handleIdentify,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 486
      },
      __self: this
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_5___default.a, {
      type: "eye",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: this
    }), "Predict"))))) : __jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        weight: "100vw",
        flexDirection: "column"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501
      },
      __self: this
    }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_14__["ClimbingBoxLoader"], {
      style: {
        width: "20vw"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511
      },
      __self: this
    }), __jsx("div", {
      style: {
        fontSize: "1.2vw",
        fontWeight: "bold"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512
      },
      __self: this
    }, "Loading")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jackieni/dev/personal/meme-database/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/upload":
/*!**********************************!*\
  !*** external "antd/lib/upload" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map