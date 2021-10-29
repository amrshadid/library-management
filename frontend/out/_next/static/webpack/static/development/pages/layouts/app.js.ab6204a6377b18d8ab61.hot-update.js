webpackHotUpdate("static\\development\\pages\\layouts\\app.js",{

/***/ "./pages/layouts/app.js":
/*!******************************!*\
  !*** ./pages/layouts/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_scss_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/scss/app.css */ "./public/assets/scss/app.css");
/* harmony import */ var _public_assets_scss_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _containers_common_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../containers/common/header */ "./containers/common/header.js");
/* harmony import */ var _sections_agency_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/agency/footer */ "./pages/layouts/sections/agency/footer.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constant/api */ "./constant/api.js");




var _this = undefined,
    _jsxFileName = "C:\\Users\\Shadid\\Desktop\\hoa-frontend\\pages\\layouts\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







 // import Custom Components






 // const stripePromise = loadStripe(
//   "pk_live_51Ihg5PKaeSTNPk3vvmtW6Vj8og85NTlDnywQSuuB9UP3OFMHDr4pIdOcrV8lWO6yAn9YVSr7ZYRrrtReTEcEfn4c003f9Chyxn"
// );

var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_13__["loadStripe"])("pk_test_51Ihg5PKaeSTNPk3vq2GCVZ9hjkjGTlYRyGY0pVCWFJWcQ1AIBhMA1d5dK3Vp3dGdFs89SIbPkY0s6cuDWmx4yH0b00fXvu7XbF");

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      userInfo = _useState3[0],
      setUserinfo = _useState3[1];

  var planSelected = "CU";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.scrollBy(0, -1000);

    function checkUserData() {
      var item = JSON.parse(localStorage.getItem("userInfo"));

      if (item) {
        setUserData(item);
      }
    }

    window.addEventListener('storage', checkUserData);
    return function () {
      window.removeEventListener('storage', checkUserData);
    };
  }, []); // Handle real-time validation errors from the card Element.

  var handleChange = function handleChange(event) {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  var elements = "";
  var stripe = "";

  var MyCom = function MyCom() {
    stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useStripe"])();
    elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useElements"])();
    return __jsx("form", {
      onSubmit: handleSubmit,
      className: "stripe-form",
      style: {
        width: "auto"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "form-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx("label", {
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, "Email Address"), __jsx("input", {
      className: "form-input",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "jenny.rosen@example.com",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "form-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx("label", {
      htmlFor: "card-element",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, "Credit or debit card"), __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"], {
      id: "card-element",
      onChange: handleChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "card-errors",
      role: "alert",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, error)), __jsx("div", {
      className: "form-row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, __jsx("label", {
      htmlFor: "Coupn Code",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Discount Coupon"), __jsx("input", {
      className: "form-input",
      id: "couponCode",
      name: "couponCode",
      type: "text",
      placeholder: "XXXXXXXXXXX",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, userInfo.pervious_plan === localStorage.getItem("requestedPlan") ? __jsx("input", {
      type: "submit",
      className: "btn btn-default primary-btn event-btn m-0-auto",
      value: "Renewal payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }) : __jsx("input", {
      type: "submit",
      className: "btn btn-default primary-btn event-btn m-0-auto",
      value: "Submit Payment",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    })));
  }; // Handle form submission.


  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var card, _yield$stripe$createP, paymentMethod, errorPayment, formData;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              card = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"]);
              _context.next = 4;
              return stripe.createPaymentMethod({
                type: "card",
                card: card
              });

            case 4:
              _yield$stripe$createP = _context.sent;
              paymentMethod = _yield$stripe$createP.paymentMethod;
              errorPayment = _yield$stripe$createP.errorPayment;
              formData = new FormData(event.target);

              if (localStorage.getItem("requestedPlan") != null) {
                planSelected = localStorage.getItem("requestedPlan");
              }

              formData.append("payment_method_id", paymentMethod.id);
              formData.append("token", localStorage.getItem("hoarTemplatetoken"));
              formData.append("plan", planSelected);
              console.log(paymentMethod.id);

              if (errorPayment) {
                setError(error.response.data);
              } else {
                axios__WEBPACK_IMPORTED_MODULE_6___default()({
                  method: "post",
                  url: _constant_api__WEBPACK_IMPORTED_MODULE_16__["default"] + "payment/save_stripe_info/",
                  data: formData
                }).then(function (response) {
                  if (response.data.status === 1) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].success(response.data.message);
                    var x = JSON.parse(localStorage.getItem("userInfo"));
                    x["plan"] = localStorage.getItem("requestedPlan");

                    if (localStorage.getItem("requestedPlan") === "CU") {
                      x["is_aou"] = true;
                    }

                    localStorage.setItem("userInfo", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(x));
                    localStorage.setItem("requestedPlan", "");
                    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/");
                  } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error(response.data.message);
                  }
                })["catch"](function (error) {
                  console.log(error);
                });
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var createOptions = function createOptions(fontSize, padding) {
    return {
      style: {
        base: {
          width: 100
        }
      }
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "Library Management "), __jsx("meta", {
    name: "Category Layout",
    content: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  })), __jsx(_containers_common_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "agency",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), __jsx("section", {
    className: "agency pricing price-bg",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    md: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-container shadows",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "price-feature-container mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }, __jsx("h3", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 25
    }
  }, "Billing Details"), __jsx("hr", {
    className: "set-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 23
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, "Association Name :", " ", true ? JSON.parse(localStorage.getItem("userInfo")).association_name : undefined)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 27
    }
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }, "Email :", " ", true ? JSON.parse(localStorage.getItem("userInfo")).email : undefined)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 27
    }
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 29
    }
  }, "Contact No. :", " ", true ? JSON.parse(localStorage.getItem("userInfo")).contact_no : undefined)), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 27
    }
  }), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 27
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 29
    }
  }, "Requested Plan :", " ", true ? localStorage.getItem("requestedPlan") : undefined)))), __jsx("div", {
    className: "price-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, true ? localStorage.getItem("requestedPlan") === "SU" ? __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 29
    }
  }, "$", __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 32
    }
  }, JSON.parse(localStorage.getItem("userInfo")).pervious_plan === localStorage.getItem("requestedPlan") ? '79' : '319'), "/1st Year") : __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 29
    }
  }, "$", __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 32
    }
  }, JSON.parse(localStorage.getItem("userInfo")).pervious_plan === localStorage.getItem("requestedPlan") ? '99' : '349'), "/1st Year") : undefined), __jsx("button", {
    className: "btn btn-default btn-white",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/layouts/pricing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, "Change Plan")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
    sm: "12",
    md: "8",
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-container shadows",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "price-feature-container mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["Elements"], {
    stripe: stripePromise,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }, __jsx(MyCom, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }))))))))), __jsx(_sections_agency_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.js.ab6204a6377b18d8ab61.hot-update.js.map