webpackHotUpdate("static/development/pages/layouts/category.js",{

/***/ "./containers/portfolio/basic.js":
/*!***************************************!*\
  !*** ./containers/portfolio/basic.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pagination */ "./containers/common/pagination.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_common_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../containers/common/popup */ "./containers/common/popup.js");
/* harmony import */ var _constant_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constant/api */ "./constant/api.js");


var _this = undefined,
    _jsxFileName = "/home/addyson/Documents/masterlibrary/frontend/containers/portfolio/basic.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Basic = function Basic(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      fluid = _ref.fluid,
      categoryName = _ref.categoryName,
      getCategoryFullForm = _ref.getCategoryFullForm;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("1"),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tabUI = _useState2[0],
      setTabUI = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      rulesUI = _useState3[0],
      setRulesUI = _useState3[1];

  var rulesData;

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      getSubCategory = _useState4[0],
      setSubCategory = _useState4[1];

  var getSubCategories = function getSubCategories(event) {
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: "get",
      url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "getSubCategories/all",
      headers: {
        Authorization: "token " + "5b9c4e6df7a17166a9528cc673956ce0ab9476c3"
      }
    }).then(function (response) {
      if (response.data.status === 1) {
        document.getElementById("subCategoriesSelect").innerHTML = "<option value=0 selected>All</option>";

        for (var x in response.data.data) {
          document.getElementById("subCategoriesSelect").innerHTML += "<option value=" + response.data.data[x].id + " id=" + response.data.data[x].id + ">" + response.data.data[x].subCategory + "</option>";
        }

        if (JSON.parse(localStorage.getItem("userInfo")).plan === "TR") {
          document.getElementById("subCategoriesSelect").style.display = "none";
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error(response.data.status);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(getSubCategories, []);

  var fetchIssues = function fetchIssues() {
    if (localStorage.getItem("userInfo")) {
      if (JSON.parse(localStorage.getItem("userInfo")).plan !== "" && JSON.parse(localStorage.getItem("userInfo")).plan) {
        axios__WEBPACK_IMPORTED_MODULE_5___default()({
          method: "get",
          url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "issues_list/?category=" + categoryName + "&subCategory=" + document.getElementById("subCategoriesSelect").value + "&hoarTemplatetoken=" + localStorage.getItem("hoarTemplatetoken") + "&plan=" + JSON.parse(localStorage.getItem("userInfo")).plan
        }).then(function (response) {
          var _this2 = this;

          setTabUI([]);
          setRulesUI([]);

          var _loop = function _loop(i) {
            setTabUI(function (tabUI) {
              return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tabUI), [__jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
                className: "list-inline filter flex-column",
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }
              }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                id: "tab_" + response.data.issueList[i].id,
                name: "parentTab",
                className: activeTab == response.data.issueList[i].id.toString() ? "active" : "",
                onClick: function onClick() {
                  setActiveTab(response.data.issueList[i].id.toString());
                  var element = document.getElementsByName("parentTab");

                  for (var j = 0; j < element.length; j++) {
                    if (element[j].classList.value.includes("active")) {
                      element[j].classList.remove("active");
                    }
                  }

                  document.getElementById("tab_" + response.data.issueList[i].id).classList.add("active");
                },
                __self: _this2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }
              }, response.data.issueList[i].title))]);
            });
            fetchRules(response.data.issueList[i].id);
          };

          for (var i = 0; i < response.data.issueList.length; i++) {
            _loop(i);
          }

          axios__WEBPACK_IMPORTED_MODULE_5___default()({
            method: "get",
            url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "getSubCategories/" + categoryName,
            headers: {
              Authorization: "token " + "5b9c4e6df7a17166a9528cc673956ce0ab9476c3"
            }
          }).then(function (response) {
            if (response.data.status === 1) {
              var selectedSubCat = document.getElementById("subCategoriesSelect").value;
              document.getElementById("subCategoriesSelect").innerHTML = "<option value=0 selected>All</option>";

              for (var x in response.data.data) {
                document.getElementById("subCategoriesSelect").innerHTML += "<option value=" + response.data.data[x].id + " id=" + response.data.data[x].id + ">" + response.data.data[x].subCategory + "</option>";
              }

              if (selectedSubCat == "") {
                document.getElementById("subCategoriesSelect").value = 0;
              } else {
                document.getElementById("subCategoriesSelect").value = selectedSubCat;
              }

              if (JSON.parse(localStorage.getItem("userInfo")).plan === "TR") {
                document.getElementById("subCategoriesSelect").style.display = "none";
              }
            } else {
              react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error(response.data.status);
            }
          })["catch"](function (error) {
            console.log(error);
          });
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/layouts/pricing");
      }
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/layouts/login");
    }
  };

  var addCustomRule = function addCustomRule(id) {
    event.preventDefault();
    var formData = new FormData();
    formData.append("issue_id", id);
    formData.append("rule", document.getElementById("customRuleInput" + id).value);
    formData.append("hoarTemplatetoken", localStorage.getItem("hoarTemplatetoken"));
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: "post",
      url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "rules/",
      data: formData
    }).then(function (response) {
      if (response.data.status === 1) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success(response.data.message);
        setRulesUI([]);
        fetchIssues();
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var fetchRules = function fetchRules(id) {
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: "get",
      url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "rules/?issue_id=" + id + "&hoarTemplatetoken=" + localStorage.getItem("hoarTemplatetoken")
    }).then(function (response) {
      var _this3 = this;

      var ui = [];
      var flag = 0;
      rulesData = response;

      if (response.data.issueNote !== "") {
        ui.push(__jsx("div", {
          className: "d-flex flex-column mb-5",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }
        }, __jsx("h5", {
          className: "head-sub-text",
          style: {
            color: "white",
            textTransform: "none"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 15
          }
        }, response.data.issueNote)));
      }

      ui.push(__jsx("div", {
        className: "d-flex flex-column ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        className: "",
        type: "checkbox",
        id: "notApp_" + id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }), __jsx("label", {
        "for": "notApp_" + id,
        className: "head-sub-text",
        style: {
          fontSize: "20px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }
      }, "Not Applicable")));

      for (var i = 0; i < response.data.ruleList.length; i++) {
        if (response.data.ruleList[i].is_selected === 1) {
          flag = 1;
          ui.push(__jsx("div", {
            className: "d-flex flex-column",
            id: "ruleBox" + response.data.ruleList[i].id,
            style: {
              background: "#f2403a",
              borderRadius: 10,
              margin: "14px 0px"
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            type: "checkbox",
            className: "",
            name: "rule-" + response.data.ruleList[i].id,
            id: "rule-" + response.data.ruleList[i].id,
            onChange: function onChange() {
              return addRules(event, id);
            },
            defaultChecked: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 17
            }
          }), __jsx("label", {
            "for": "rule-" + response.data.ruleList[i].id,
            className: "head-sub-text",
            style: {
              textTransform: "none",
              fontSize: "20px"
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 17
            }
          }, response.data.ruleList[i].rule, response.data.ruleList[i].is_new == true ? __jsx("span", {
            className: "ml-2",
            style: {
              color: "white",
              background: "#ed6f64",
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 3,
              paddingBottom: 3,
              borderRadius: 10
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 21
            }
          }, "New") : null)));
        } else {
          ui.push(__jsx("div", {
            className: "d-flex flex-column ",
            id: "ruleBox" + response.data.ruleList[i].id,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }
          }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            className: "",
            name: "rule-" + response.data.ruleList[i].id,
            id: "rule-" + response.data.ruleList[i].id,
            onChange: function onChange() {
              return addRules(event, id);
            },
            type: "checkbox",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 17
            }
          }), __jsx("label", {
            "for": "rule-" + response.data.ruleList[i].id,
            className: "head-sub-text",
            style: {
              textTransform: "none",
              fontSize: "20px"
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 17
            }
          }, response.data.ruleList[i].rule, response.data.ruleList[i].is_new == true ? __jsx("span", {
            className: "ml-2",
            style: {
              color: "white",
              background: "#ed6f64",
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 3,
              paddingBottom: 3,
              borderRadius: 10
            },
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 21
            }
          }, "New") : null)));
        }
      }

      ui.push(__jsx("div", {
        className: "d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }
      }, __jsx("form", {
        onSubmit: function onSubmit() {
          return addCustomRule(id);
        },
        className: "d-flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        id: "customRuleInput" + id,
        className: "mt-2",
        type: "text",
        name: "rule" + id,
        placeholder: "Enter Rule",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 15
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        type: "submit",
        id: "submitCustom" + id,
        className: "d-none",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 15
        }
      }), __jsx("button", {
        type: "submit",
        style: {
          alignSelf: "center"
        },
        className: "btn btn-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 15
        }
      }, __jsx("img", {
        alt: "Add",
        className: "img-fluid",
        src: "/assets/images/add.png",
        style: {
          height: 20,
          width: 20,
          alignSelf: "center",
          marginLeft: 10
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 17
        }
      }))))); // ui.push(
      //   <div className="link-horizontal mt-5">
      //     <a
      //       className="btn btn-default btn-gradient text-white active"
      //       href="/layouts/savedRules"
      //     >
      //       View Saved Rules
      //     </a>
      //   </div>
      // );

      setRulesUI(function (rulesUI) {
        return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(rulesUI), [__jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
          tabId: id.toString(),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 11
          }
        }, ui)]);
      });

      if (flag === 1) {
        document.getElementById("notApp_" + id).checked = false;
      } else {
        document.getElementById("notApp_" + id).checked = true;
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var addRules = function addRules(event, id) {
    event.preventDefault();

    if (document.getElementById("notApp_" + id).checked) {
      document.getElementById("notApp_" + id).checked = false;
    }

    var formData = new FormData();
    formData.append("ruleId", event.target.id);
    formData.append("hoarTemplatetoken", localStorage.getItem("hoarTemplatetoken"));
    axios__WEBPACK_IMPORTED_MODULE_5___default()({
      method: "post",
      url: _constant_api__WEBPACK_IMPORTED_MODULE_10__["default"] + "user_selected/",
      data: formData
    }).then(function (response) {
      if (response.data.status === 1) {
        if (document.getElementById(event.target.id).checked) {
          document.getElementById(event.target.id).checked = false;
          document.getElementById("rule-" + response.data.data[k].id.toString()).style.background = none;
        } else {
          document.getElementById(event.target.id).checked = true;

          for (var k in response.data.data) {
            if (document.getElementById("rule-" + response.data.data[k].id.toString()).checked === true) {
              document.getElementById("ruleBox" + response.data.data[k].id.toString()).style.background = "red";
              document.getElementById("ruleBox" + event.target.id).style.background = "red";
            }
          }
        }
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].error(response.data.message);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(fetchIssues, [categoryName]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      fontSize: "65px",
      padding: "5px 38px",
      color: "white !important",
      lineHeight: "75px",
      marginBottom: "60px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 7
    }
  }, getCategoryFullForm), __jsx("section", {
    className: "scrollbar portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles schedule",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "filter-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "2",
    style: {
      paddingLeft: "40px",
      marginBottom: "50px",
      flex: "0 0 27%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 15
    }
  }, __jsx("span", {
    style: {
      position: "relative",
      top: "-10px",
      color: "#fff",
      fontSize: "35px",
      whiteSpace: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 17
    }
  }, "Categories:", " "), " ", __jsx("input", {
    type: "hidden",
    value: "",
    name: "category",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "select",
    name: "subCategory",
    id: "subCategoriesSelect",
    onChange: fetchIssues,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 17
    }
  }), __jsx("span", {
    style: {
      position: "relative",
      top: "55px",
      color: "#fff",
      fontSize: "35px",
      whiteSpace: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 17
    }
  }, "Rule Topics:", " "), " ")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mt-4",
    style: {
      flexWrap: "nowrap"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "4",
    xs: "12",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    tabs: true,
    className: "filter-container isotopeFilters d-flex align-items-start flex-column",
    style: {
      height: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 17
    }
  }, tabUI), __jsx(_containers_common_popup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 17
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "7",
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: fluid || "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    className: "isotopeContainer row",
    activeTab: activeTab,
    style: {
      height: "auto"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 19
    }
  }, rulesUI))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ })

})
//# sourceMappingURL=category.js.d91e6dcf8c753a2cd650.hot-update.js.map