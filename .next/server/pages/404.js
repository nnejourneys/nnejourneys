"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_PATH\": () => (/* binding */ BASE_PATH),\n/* harmony export */   \"CMS_NAME\": () => (/* binding */ CMS_NAME),\n/* harmony export */   \"HOME_OG_IMAGE_URL\": () => (/* binding */ HOME_OG_IMAGE_URL),\n/* harmony export */   \"baseURL\": () => (/* binding */ baseURL),\n/* harmony export */   \"imgblurDataURL\": () => (/* binding */ imgblurDataURL)\n/* harmony export */ });\nconst BASE_PATH = \"https://nnejourneys.com\";\nconst CMS_NAME = \"North by Northeast Journeys\";\nconst baseURL = \"/\";\nconst imgblurDataURL = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsqQcAAZ0BDTSBuAQAAAAASUVORK5CYII=\";\nconst HOME_OG_IMAGE_URL = \"https://nnejourneys.com/public/images/og-logo.png\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHLHlCQUF5QjtBQUMzQyxNQUFNQyxRQUFRLEdBQUcsNkJBQTZCO0FBQzlDLE1BQU1DLE9BQU8sR0FBQyxHQUFHO0FBQ2pCLE1BQU1DLGNBQWMsR0FBQyxvSEFBb0g7QUFDekksTUFBTUMsaUJBQWlCLEdBQUUsbURBQW1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2NvbnN0YW50cy5qcz8yOWYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1BBVEggPSAnaHR0cHM6Ly9ubmVqb3VybmV5cy5jb20nXG5leHBvcnQgY29uc3QgQ01TX05BTUUgPSAnTm9ydGggYnkgTm9ydGhlYXN0IEpvdXJuZXlzJ1xuZXhwb3J0IGNvbnN0IGJhc2VVUkw9Jy8nXG5leHBvcnQgY29uc3QgaW1nYmx1ckRhdGFVUkw9J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtUHNxUWNBQVowQkRUU0J1QVFBQUFBQVNVVk9SSzVDWUlJPSdcbmV4cG9ydCBjb25zdCBIT01FX09HX0lNQUdFX1VSTCA9J2h0dHBzOi8vbm5lam91cm5leXMuY29tL3B1YmxpYy9pbWFnZXMvb2ctbG9nby5wbmcnXG4iXSwibmFtZXMiOlsiQkFTRV9QQVRIIiwiQ01TX05BTUUiLCJiYXNlVVJMIiwiaW1nYmx1ckRhdGFVUkwiLCJIT01FX09HX0lNQUdFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constants.js\n");

/***/ }),

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Custom404)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Custom404() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setTimeout(()=>{\n            router.push(\"/\");\n        }, 3000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            \"Thank You | \",\n                            _lib_constants__WEBPACK_IMPORTED_MODULE_3__.CMS_NAME,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"noindex\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                className: \"my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"my-5 text-center\",\n                        children: \"Ooops... Page not found.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"primary\",\n                            onClick: ()=>router.push(\"/\"),\n                            children: \"Back to Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/404.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy80MDQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDdUI7QUFDUjtBQUNWO0FBQ007QUFFekIsU0FBU00sU0FBUyxHQUFHO0lBQ2xDLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUMxQkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RJLFVBQVUsQ0FBQyxJQUFNO1lBQ2ZELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQixFQUFFLElBQUksQ0FBQztLQUNULEVBQUMsRUFBRSxDQUFDO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDVCxrREFBSTs7a0NBQ0gsOERBQUNVLE9BQUs7OzRCQUFDLGNBQVk7NEJBQUNQLG9EQUFROzRCQUFDLEdBQUM7Ozs7Ozs0QkFBUTtrQ0FDdEMsOERBQUNRLE1BQUk7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDQyxPQUFPLEVBQUMsU0FBUzs7Ozs7NEJBQUU7Ozs7OztvQkFDbEM7MEJBQ1AsOERBQUNaLHNEQUFTO2dCQUFDYSxTQUFTLEVBQUMsTUFBTTs7a0NBQ3pCLDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsa0JBQWtCO2tDQUFDLDBCQUVqQzs7Ozs7NEJBQUs7a0NBQ0wsOERBQUNFLEtBQUc7d0JBQUNGLFNBQVMsRUFBQyxhQUFhO2tDQUMxQiw0RUFBQ1osbURBQU07NEJBQUNlLE9BQU8sRUFBQyxTQUFTOzRCQUFDQyxPQUFPLEVBQUUsSUFBTVgsTUFBTSxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO3NDQUFFLGNBRTNEOzs7OztnQ0FBUzs7Ozs7NEJBQ0w7Ozs7OztvQkFDSTs7b0JBQ1gsQ0FDSDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvNDA0LmpzPzNlZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gXCIuLi9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b200MDQoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH0sIDMwMDApXG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UaGFuayBZb3UgfCB7Q01TX05BTUV9IDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXktNVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXktNSB0ZXh0LWNlbnRlclwiPiBcbiAgICAgICAgICBPb29wcy4uLiBQYWdlIG5vdCBmb3VuZC5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PiBcbiAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJDb250YWluZXIiLCJCdXR0b24iLCJDTVNfTkFNRSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkN1c3RvbTQwNCIsInJvdXRlciIsInNldFRpbWVvdXQiLCJwdXNoIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJoNCIsImRpdiIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/404.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();