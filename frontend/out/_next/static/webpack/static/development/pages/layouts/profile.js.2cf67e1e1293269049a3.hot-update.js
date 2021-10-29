webpackHotUpdate("static\\development\\pages\\layouts\\profile.js",{

/***/ "./containers/common/header.js":
/*!*************************************!*\
  !*** ./containers/common/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ "./containers/common/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subaouController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subaouController */ "./containers/common/subaouController.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_userType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/userType */ "./utils/userType.js");
/* harmony import */ var _utils_isLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/isLogin */ "./utils/isLogin.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Shadid\\Desktop\\hoa-frontend\\containers\\common\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoggedIn = _useState[0],
      setLoginStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _getUserType = Object(_utils_userType__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      fname = _getUserType.fname,
      email = _getUserType.email,
      icon = _getUserType.icon,
      name = _getUserType.name,
      userType = _getUserType.userType;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mobileDropdown = _useState3[0],
      setMobileDropdown = _useState3[1];

  var toggleModal = function toggleModal() {
    setIsModalOpen(!isModalOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setLoginStatus(Object(_utils_isLogin__WEBPACK_IMPORTED_MODULE_5__["default"])());
  }, []);

  var navigateTo = function navigateTo(path) {
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(path);
  };

  var logout = function logout() {
    localStorage.removeItem("hoarTemplatetoken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("requestedPlan");
    setLoginStatus(false);
    navigateTo("/");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "site_header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "site_header_logo",
    onClick: function onClick() {
      return navigateTo("/");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/logo/3.png",
    alt: "Logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "site_header_items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "contact",
    className: "contact_icon dropdown_hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "menu_dropdown contact_dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "up_arr_account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "dropdown_item",
    onClick: function onClick() {
      return navigateTo("/layouts/contact");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "hover_scale",
    style: {
      fontSize: "17px",
      whiteSpace: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "Technical"))), __jsx("div", {
    className: "dropdown_item",
    onClick: function onClick() {
      return navigateTo("/layouts/contact#queryQuestion");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      display: "flex"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("p", {
    style: {
      fontSize: "17px",
      whiteSpace: "nowrap"
    },
    className: "hover_scale",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "Get in Touch")))), __jsx("div", {
    style: {
      width: "40px",
      height: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("img", {
    style: {
      width: "100%",
      height: "100%"
    },
    src: "/assets/images/question.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }))), isLoggedIn && userType !== "Please choose a Plan!" && __jsx("div", {
    key: "rules",
    className: "rules_icon",
    onClick: function onClick() {
      return navigateTo("/layouts/category");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/book.png",
    style: {
      width: "25px",
      height: "25px",
      position: "relative",
      top: "-1px",
      left: "-5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, "Create Rules!")), isLoggedIn && userType === "Community Administrator" && __jsx("div", {
    key: "subaou",
    className: "subaou_modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("a", {
    title: "Add Additional Users",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, " ", __jsx("div", {
    onClick: toggleModal,
    style: {
      width: "40px",
      height: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("img", {
    style: {
      width: "100%",
      height: "100%"
    },
    src: "/assets/images/add-user.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  })))), !isLoggedIn && __jsx("div", {
    key: "pricing",
    className: "pricing_icon rules_icon",
    style: {
      paddingRight: "20px"
    },
    onClick: function onClick() {
      return navigateTo("/layouts/pricing");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/tag.png",
    style: {
      width: "25px",
      height: "25px",
      position: "relative",
      top: "-1px",
      left: "-5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, "Pricing")), isLoggedIn && __jsx("div", {
    key: "account",
    className: "account_icon dropdown_hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "menu_dropdown account_dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "up_arr_account",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "dropdown_item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      height: "40px",
      width: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: "100%",
      width: "100%"
    },
    src: "/assets/images/user.png",
    alt: "IC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      marginBottom: "1px",
      color: "black",
      fontSize: "17px",
      whiteSpace: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, "Welcome! " + name), __jsx("p", {
    style: {
      fontSize: "13px",
      whiteSpace: "nowrap",
      color: "rgba(0,0,0,0.6)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, userType))), __jsx("div", {
    className: "dropdown_item",
    onClick: function onClick() {
      return navigateTo("/layouts/profile");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      height: "40px",
      width: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: "50%",
      width: "50%"
    },
    src: "/assets/images/account.png",
    alt: "IC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      fontSize: "17px"
    },
    className: "hover_scale",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  }, "Account"))), __jsx("div", {
    className: "dropdown_item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      height: "40px",
      width: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, __jsx("img", {
    style: {
      height: "50%",
      width: "50%"
    },
    src: "/assets/images/logout.png",
    alt: "IC",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  })), __jsx("div", {
    onClick: logout,
    style: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx("p", {
    style: {
      fontSize: "17px"
    },
    className: "hover_scale",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, "Logout")))), __jsx("div", {
    className: "account_details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "user_name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, fname), __jsx("p", {
    className: "user_email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, email)), __jsx("div", {
    className: "account_avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, icon)), !isLoggedIn && __jsx("div", {
    className: "login_icon",
    key: "login",
    onClick: function onClick() {
      return navigateTo("/layouts/login");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/assets/images/login.png",
    style: {
      width: "30px",
      height: "30px",
      position: "relative",
      top: "-5px",
      left: "-5px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 15
    }
  }, "Login")))), __jsx("div", {
    className: "site_header_mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "site_header_mobile_logo",
    onClick: function onClick() {
      return navigateTo("/");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/logo/3.png",
    alt: "Logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 11
    }
  })), __jsx("div", {
    tabIndex: "0",
    className: "site_header_mobile_dropdown",
    onFocus: function onFocus() {
      setMobileDropdown(true);
    },
    onBlur: function onBlur(e) {
      if (!e.relatedTarget || e.relatedTarget.className !== "mb_href") {
        setMobileDropdown(false);
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 9
    }
  }, __jsx("img", {
    style: {
      height: "2rem",
      width: "2rem"
    },
    src: "/assets/images/bars-solid.svg",
    alt: "ic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  })), mobileDropdown && __jsx("div", {
    className: "site_header_mobile_content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, isLoggedIn && __jsx("p", {
    onClick: function onClick() {
      return navigateTo("/layouts/profile");
    },
    tabIndex: "0",
    className: "mb_href",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 15
    }
  }, "Account"), !isLoggedIn && __jsx("p", {
    onClick: function onClick() {
      return navigateTo("/layouts/login");
    },
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 15
    }
  }, "Login"), isLoggedIn && userType !== "Please choose a Plan!" && __jsx("p", {
    onClick: function onClick() {
      return navigateTo("/layouts/category");
    },
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 15
    }
  }, "Create Rules!"), !isLoggedIn && __jsx("p", {
    onClick: function onClick() {
      return navigateTo("/layouts/pricing");
    },
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }, "Pricing"), __jsx("p", {
    onClick: function onClick() {
      return navigateTo("/layouts/contact");
    },
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 13
    }
  }, "Contact Us"), isLoggedIn && userType === "Community Administrator" && __jsx("p", {
    onClick: toggleModal,
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }, "Add Additional Users"), isLoggedIn && __jsx("p", {
    onClick: logout,
    className: "mb_href",
    tabIndex: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 15
    }
  }, "Logout"))), __jsx(_subaouController__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isModalOpen: isModalOpen,
    toggleModal: toggleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=profile.js.2cf67e1e1293269049a3.hot-update.js.map