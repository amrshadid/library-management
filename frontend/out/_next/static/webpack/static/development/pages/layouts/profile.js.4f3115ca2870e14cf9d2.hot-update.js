webpackHotUpdate("static\\development\\pages\\layouts\\profile.js",{

/***/ "./pages/layouts/profile.js":
/*!**********************************!*\
  !*** ./pages/layouts/profile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _sections_agency_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/agency/footer */ "./pages/layouts/sections/agency/footer.js");
/* harmony import */ var _sections_agency_subscribed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/agency/subscribed */ "./pages/layouts/sections/agency/subscribed.js");
/* harmony import */ var _sections_index_usersTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/index/usersTable */ "./pages/layouts/sections/index/usersTable.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sections_agency_pricing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/agency/pricing */ "./pages/layouts/sections/agency/pricing.js");
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constant/api */ "./constant/api.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_update__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/update */ "./utils/update.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Shadid\\Desktop\\hoa-frontend\\pages\\layouts\\profile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

 // import Custom Components















var ProfileScreen = function ProfileScreen() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();

  if (router.query.reauth === "1" && router.query.token) {
    var token = router.query.token;
    localStorage.setItem("hoarTemplatetoken", token);
    var URL = _constant_api__WEBPACK_IMPORTED_MODULE_14__["default"] + "userDetails/" + token;
    axios__WEBPACK_IMPORTED_MODULE_16___default()({
      method: "get",
      url: URL,
      headers: {
        Authorization: "Token " + token
      }
    }).then(function (response) {
      localStorage.setItem("userInfo", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(response.data));
      react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].success("Registration Successfull, Welcome!");

      if (JSON.parse(localStorage.getItem("userInfo")).plan === "") {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/layouts/pricing");
        return;
      }

      setUserTable(__jsx(_sections_index_usersTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 22
        }
      }));
    })["catch"](function (error) {
      console.log(error);
      react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].error("Some Error Occured");
    });
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      userTable = _useState[0],
      setUserTable = _useState[1];

  var getUserTable = function getUserTable() {
    if (localStorage.getItem("userInfo")) {
      if (JSON.parse(localStorage.getItem("userInfo")).plan == "") {
        setUserTable([]);
      } else {
        setUserTable(__jsx(_sections_index_usersTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 22
          }
        }));
      }
    } else {
      setUserTable([]);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var checkUserData;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            checkUserData = function _checkUserData() {
              var item = JSON.parse(localStorage.getItem("userInfo"));

              if (item) {
                setUserTable(item);
              } else {
                setUserTable(__jsx(_sections_index_usersTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 22
                  }
                }));
              }
            };

            window.addEventListener('storage', checkUserData);
            window.addEventListener('update', _utils_update__WEBPACK_IMPORTED_MODULE_17__["default"]);
            return _context.abrupt("return", function () {
              window.removeEventListener('storage', checkUserData);
              window.removeEventListener('update', _utils_update__WEBPACK_IMPORTED_MODULE_17__["default"]);
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return __jsx("div", {
    className: "theme-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Library Management "), __jsx("meta", {
    name: "Category Layout",
    content: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "agency",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx(_sections_agency_subscribed__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), userTable, __jsx(_sections_agency_pricing__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx(_sections_agency_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileScreen);

/***/ })

})
//# sourceMappingURL=profile.js.4f3115ca2870e14cf9d2.hot-update.js.map