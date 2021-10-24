webpackHotUpdate("static/development/pages/layouts/contact.js",{

/***/ "./pages/layouts/sections/agency/basicQuestion.js":
/*!********************************************************!*\
  !*** ./pages/layouts/sections/agency/basicQuestion.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constant/api */ "./constant/api.js");





var _this = undefined,
    _jsxFileName = "/home/addyson/Documents/masterlibrary/frontend/pages/layouts/sections/agency/basicQuestion.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _babel_runtime_corejs2_core_js_symbol__WEBPACK_IMPORTED_MODULE_2___default.a !== "undefined" && o[_babel_runtime_corejs2_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default.a] || o["@@iterator"]; if (!it) { if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default()(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var BasicQuestion = function BasicQuestion() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      modal = _useState[0],
      setModal = _useState[1];

  var toggle = function toggle() {
    setModal(!modal);
  };

  var sendQuery = function sendQuery(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    formData.append("hoarTemplatetoken", localStorage.getItem("hoarTemplatetoken"));

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pair = _step.value;
        console.log(pair[0] + ", " + pair[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    axios__WEBPACK_IMPORTED_MODULE_6___default()({
      method: "post",
      url: _constant_api__WEBPACK_IMPORTED_MODULE_9__["default"] + "sendQuery/",
      data: formData
    }).then(function (response) {
      if (response.data.status === 1) {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success(response.data.message);
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(response.data.message);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return __jsx("section", {
    className: "format basic",
    id: "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "title title2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    md: "8",
    className: " offset-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "font-primary borders main-text",
    id: "queryQuestion",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "Let's Start a Conversation"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: sendQuery,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "form-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "relTo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Related To")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "form-control",
    id: "relTo",
    placeholder: "relTo",
    name: "relTo",
    required: true,
    type: "select",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("option", {
    selected: true,
    value: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Please select your query type"), __jsx("option", {
    value: "Sales Question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "Sales Question"), __jsx("option", {
    value: "Technical Question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "Technical Question"), __jsx("option", {
    value: "Billing Question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "Billing Question"), __jsx("option", {
    value: "Other",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Other"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "inputName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Name")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "form-control",
    id: "inputName",
    placeholder: "Name",
    name: "name",
    required: true,
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "inputEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "Email")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "form-control",
    id: "inputEmail",
    placeholder: "Email",
    type: "email",
    name: "email",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "inputIAm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "I am")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "A Current Client",
    type: "checkbox",
    name: "userType",
    value: "A Current Client",
    style: {
      width: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }), __jsx("label", {
    "for": "A Current Client",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "A Current Client")), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "A Potential Client",
    type: "checkbox",
    name: "userType",
    value: "A Potential Client",
    style: {
      width: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), __jsx("label", {
    "for": "A Potential Client",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "A Potential Client"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "inputIAm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "I am also a:")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "Association Board Member",
    type: "checkbox",
    name: "userType",
    value: "Association Board Member",
    style: {
      width: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), __jsx("label", {
    "for": "Association Board Member",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, "Association Board Member")), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "Community Association Manager",
    type: "checkbox",
    name: "userType",
    value: "Community Association Manager",
    style: {
      width: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }), __jsx("label", {
    "for": "Community Association Manager",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "Community Association Manager")), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "Other",
    type: "checkbox",
    name: "userType",
    value: "Other",
    style: {
      width: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }), __jsx("label", {
    "for": "Other",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, "Other"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    "for": "inputEmail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, "Message")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    className: "col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "textarea",
    name: "query",
    id: "exampleText",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "btn primary-btn btn-default ",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "Submit")))));
};

/* harmony default export */ __webpack_exports__["default"] = (BasicQuestion);

/***/ })

})
//# sourceMappingURL=contact.js.b2217288ea3f0f1d120d.hot-update.js.map