"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tours/[slug]",{

/***/ "./components/tours/tour-itin-overview.js":
/*!************************************************!*\
  !*** ./components/tours/tour-itin-overview.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TourOverview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n\n\n\nfunction TourOverview(param) {\n    var overview = param.overview;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"ps-0 m-1 text-center\",\n            children: overview.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"py-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"d-inline-block font-primary m-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                                    className: \"me-2 mb-1\",\n                                    icon: item.icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n                                    lineNumber: 11,\n                                    columnNumber: 15\n                                }, _this),\n                                item.label\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fw-bold text-dark float-end\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    item.data,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/tours/tour-itin-overview.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_c = TourOverview;\nvar _c;\n$RefreshReg$(_c, \"TourOverview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvdXJzL3RvdXItaXRpbi1vdmVydmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNZO0FBRXZCLFNBQVNFLFlBQVksQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUM3QyxxQkFDRTtrQkFDRSw0RUFBQ0MsSUFBRTtZQUFDQyxTQUFTLEVBQUMsc0JBQXNCO3NCQUNqQ0YsUUFBUSxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO3FDQUN4Qiw4REFBQ0MsSUFBRTtvQkFBQ0osU0FBUyxFQUFDLE9BQU87O3NDQUNuQiw4REFBQ0ssR0FBQzs0QkFBQ0wsU0FBUyxFQUFDLGlDQUFpQzs7OENBQzVDLDhEQUFDSixnREFBSTtvQ0FBQ0ksU0FBUyxFQUFDLFdBQVc7b0NBQUNNLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJOzs7Ozt5Q0FBSTtnQ0FDOUNKLElBQUksQ0FBQ0ssS0FBSzs7Ozs7O2lDQUNUO3NDQUNKLDhEQUFDQyxNQUFJOzRCQUFDUixTQUFTLEVBQUMsNkJBQTZCO3NDQUM3Qyw0RUFBQ0ssR0FBQzs7b0NBQUMsR0FBQztvQ0FBQ0gsSUFBSSxDQUFDTyxJQUFJO29DQUFDLEdBQUM7Ozs7OztxQ0FBSTs7Ozs7aUNBQ2I7O21CQVBrQk4sS0FBSzs7Ozt5QkFRM0I7YUFDTixDQUFDOzs7OztnQkFDQztxQkFDSixDQUNIO0NBQ0g7QUFsQnVCTixLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdG91cnMvdG91ci1pdGluLW92ZXJ2aWV3LmpzPzI5Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3VyT3ZlcnZpZXcoeyBvdmVydmlldyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwcy0wIG0tMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIHtvdmVydmlldy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHktMiBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgZm9udC1wcmltYXJ5IG0tMFwiPlxyXG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cIm1lLTIgbWItMVwiIGljb249e2l0ZW0uaWNvbn0gLz5cclxuICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdy1ib2xkIHRleHQtZGFyayBmbG9hdC1lbmRcIj5cclxuICAgICAgICAgICAgPHA+IHtpdGVtLmRhdGF9IDwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbiIsIlRvdXJPdmVydmlldyIsIm92ZXJ2aWV3IiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsInAiLCJpY29uIiwibGFiZWwiLCJzcGFuIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/tours/tour-itin-overview.js\n"));

/***/ })

});