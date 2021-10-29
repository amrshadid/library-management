webpackHotUpdate("static\\development\\pages\\layouts\\pricing.js",{

/***/ "./pages/layouts/sections/agency/pricing.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/agency/pricing.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../constant/api */ "./constant/api.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Shadid\\Desktop\\hoa-frontend\\pages\\layouts\\sections\\agency\\pricing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

var Pricing = function Pricing() {
  var startFreePlan = function startFreePlan() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan !== "") {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/category");
        } else {
          var formData = new FormData();
          formData.append("token", localStorage.getItem("hoarTemplatetoken"));
          formData.append("plan", "TR");
          axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "post",
            url: _constant_api__WEBPACK_IMPORTED_MODULE_8__["default"] + "payment/save_stripe_info/",
            data: formData
          }).then(function (response) {
            if (response.data.status === 1) {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success(response.data.message);
              var x = JSON.parse(localStorage.getItem("userInfo"));
              x["plan"] = "TR";
              localStorage.setItem("userInfo", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(x));
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/category");
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(response.data.message);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  var PlanThree = function PlanThree() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan !== "") {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/category");
        } else {
          var formData = new FormData();
          formData.append("token", localStorage.getItem("hoarTemplatetoken"));
          formData.append("plan", "TH");
          axios__WEBPACK_IMPORTED_MODULE_4___default()({
            method: "post",
            url: _constant_api__WEBPACK_IMPORTED_MODULE_8__["default"] + "payment/save_stripe_info/",
            data: formData
          }).then(function (response) {
            if (response.data.status === 1) {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success(response.data.message);
              var x = JSON.parse(localStorage.getItem("userInfo"));
              x["plan"] = "TH";
              localStorage.setItem("userInfo", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(x));
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/category");
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(response.data.message);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  var planSu = function planSu() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan) {
          if (JSON.parse(localStorage.getItem("userInfo")).plan != "TR") {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("You already have an active plan.");
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
          } else {
            localStorage.setItem("requestedPlan", "SU");
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/app");
          }
        } else {
          localStorage.setItem("requestedPlan", "SU");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/app");
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  var planCu = function planCu() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan) {
          if (JSON.parse(localStorage.getItem("userInfo")).plan != "TR") {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("You already have an active plan.");
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
          } else {
            localStorage.setItem("requestedPlan", "CU");
            next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/app");
          }
        } else {
          localStorage.setItem("requestedPlan", "CU");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/app");
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  var planSuInvoice = function planSuInvoice() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan === "SU") {
          react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("You already have an active Single User plan.");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
        } else {
          localStorage.setItem("requestedInvoicePlan", "SU");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/paymentPage");
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  var planCuInvoice = function planCuInvoice() {
    if (localStorage.getItem("hoarTemplatetoken") != "" && localStorage.getItem("hoarTemplatetoken") != null) {
      if (localStorage.getItem("userInfo")) {
        if (JSON.parse(localStorage.getItem("userInfo")).plan === "CU") {
          react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("You already have an active plan.");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
        } else {
          localStorage.setItem("requestedInvoicePlan", "CU");
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/paymentPage");
        }
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/layouts/signUp");
    }
  };

  return __jsx("section", {
    className: "agency pricing price-bg",
    id: "plan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      flexWrap: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    md: "4",
    className: "mt-1 pricing_crr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "price-container",
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-feature-container mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "flaticon-rocket-ship feature-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 23
    }
  }, "FREE"), __jsx("hr", {
    className: "set-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 23
    }
  }, "Take Us For A Test Spin!"), __jsx("h4", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, "Create Your Own 4-Rule Document With Two Architectural Guidelines & Standards and Two Rules & Regulations From Our Master Library and See Just How Quick and Easy It Can Be!!")), __jsx("div", {
    className: "price-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      position: "relative",
      top: "-25px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, "$"), __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, "0"), "/month")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }), __jsx("button", {
    className: "btn btn-default btn-white",
    onClick: startFreePlan,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }, "Try for Free")), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    md: "4",
    className: "mt-1 pricing_crr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 11
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "price-container",
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-feature-container mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "flaticon-rocket-ship feature-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 23
    }
  }, "THREE DAYS"), __jsx("hr", {
    className: "set-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 23
    }
  }, "Take Us For A DEMO Spin!"), __jsx("h4", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, "A DEMO PLAN Can Create, Modify, and Amend Your Architectural Guidelines & Standards and Your Rules & Regulations Keeping Them Updated and Current For the Next Twelve Months!")), __jsx("div", {
    className: "price-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      position: "relative",
      top: "-25px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, "$"), __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  }, "3"), "/month"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 23
    }
  }, "* Renewals are just $1.00 for other three days")), __jsx("button", {
    className: "btn btn-default btn-white",
    onClick: PlanThree,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  }, "Try for Free"), __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 23
    }
  }, "(", __jsx("a", {
    style: {
      marginTop: 20,
      fontSize: 15,
      color: "#203475"
    },
    onClick: planSuInvoice,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 25
    }
  }, "Invoice"), " ", "My Association)"))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 19
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    md: "4",
    className: "mt-1 pricing_crr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "price-container",
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-feature-container mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "flaticon-rocket-ship feature-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "SINGLE USER"), __jsx("hr", {
    className: "set-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 23
    }
  }, "Annual Membership", " "), __jsx("h4", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 23
    }
  }, "A Single User Can Create, Modify, and Amend Your Architectural Guidelines & Standards and Your Rules & Regulations Keeping Them Updated and Current For the Next Twelve Months!")), __jsx("div", {
    className: "price-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      position: "relative",
      top: "-25px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }, "$"), __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 25
    }
  }, "319"), "/First Year"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 23
    }
  }, "* Renewals are just $79.00 per year")), __jsx("button", {
    className: "btn btn-default btn-white",
    onClick: planSu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 21
    }
  }, "purchase"), __jsx("div", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }, "(", __jsx("a", {
    style: {
      marginTop: 20,
      fontSize: 15,
      color: "#203475"
    },
    onClick: planSuInvoice,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 25
    }
  }, "Invoice"), " ", "My Association)")))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: "12",
    md: "4",
    className: "mt-1 pricing_crr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 9
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "owl-carousel owl-theme pricing-slider price-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "price-container",
    style: {
      textAlign: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "price-feature-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "flaticon-rocket-ship feature-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 23
    }
  }), __jsx("h3", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 23
    }
  }, "COMMITTEE"), __jsx("hr", {
    className: "set-border",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 23
    }
  }, "Up To Six Users"), __jsx("h4", {
    className: "price-feature",
    style: {
      paddingLeft: 15,
      paddingRight: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 23
    }
  }, "Up To Six Users Can Create, Modify, and Amend Your Architectural Guidelines & Standards and Your Rules & Regulations Keeping Them Current For The Next Twelve", " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 25
    }
  }), "Months!!!")), __jsx("div", {
    className: "price-value",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 21
    }
  }, __jsx("h6", {
    className: "price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      position: "relative",
      top: "-25px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 25
    }
  }, "$"), __jsx("span", {
    className: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 25
    }
  }, "349"), "/First Year"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 23
    }
  }), __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 23
    }
  }, "* Renewals are just $99.00 per year")), __jsx("button", {
    className: "btn btn-default btn-white",
    onClick: planCu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "purchase"), __jsx("div", {
    className: "mt-2 mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 21
    }
  }, __jsx("p", {
    style: {
      fontSize: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 23
    }
  }, "(", __jsx("a", {
    style: {
      marginTop: 20,
      fontSize: 15,
      color: "#203475"
    },
    onClick: planCuInvoice,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 25
    }
  }, "Invoice"), " ", "My Association)"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ })

})
//# sourceMappingURL=pricing.js.8c761f761572d0bdb046.hot-update.js.map