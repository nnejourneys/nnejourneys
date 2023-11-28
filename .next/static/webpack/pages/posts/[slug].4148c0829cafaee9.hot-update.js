"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/cover-image.js":
/*!*****************************************!*\
  !*** ./components/posts/cover-image.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CoverImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n// import cn from 'classnames'\n\n\nfunction CoverImage(param) {\n    var title = param.title, src = param.src, slug = param.slug, height = param.height, width = param.width;\n    var image = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: src,\n        alt: \"Cover Image for \".concat(title),\n        placeholder: \"blur\",\n        blurDataURL: \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPsqQcAAZ0BDTSBuAQAAAAASUVORK5CYII=\",\n        layout: \"responsive\",\n        objectFit: \"cover\",\n        width: width,\n        height: height\n    }, void 0, false, {\n        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/cover-image.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sm:mx-0\",\n        children: slug ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/posts/\".concat(slug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                \"aria-label\": title,\n                children: image\n            }, void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/cover-image.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/cover-image.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this) : image\n    }, void 0, false, {\n        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/cover-image.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_c = CoverImage;\nvar _c;\n$RefreshReg$(_c, \"CoverImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL2NvdmVyLWltYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQURBLDhCQUE4QjtBQUNGO0FBQ0U7QUFFZixTQUFTRSxVQUFVLENBQUMsS0FBbUMsRUFBRTtRQUFuQ0MsS0FBSyxHQUFQLEtBQW1DLENBQWpDQSxLQUFLLEVBQUVDLEdBQUcsR0FBWixLQUFtQyxDQUExQkEsR0FBRyxFQUFFQyxJQUFJLEdBQWxCLEtBQW1DLENBQXJCQSxJQUFJLEVBQUVDLE1BQU0sR0FBMUIsS0FBbUMsQ0FBZkEsTUFBTSxFQUFFQyxLQUFLLEdBQWpDLEtBQW1DLENBQVBBLEtBQUs7SUFDbEUsSUFBTUMsS0FBSyxpQkFDVCw4REFBQ1AsbURBQUs7UUFDSkcsR0FBRyxFQUFFQSxHQUFHO1FBQ1JLLEdBQUcsRUFBRSxrQkFBaUIsQ0FBUSxPQUFOTixLQUFLLENBQUU7UUFDL0JPLFdBQVcsRUFBQyxNQUFNO1FBQ2xCQyxXQUFXLEVBQUMsb0hBQW9IO1FBQ2hJQyxNQUFNLEVBQUMsWUFBWTtRQUNuQkMsU0FBUyxFQUFDLE9BQU87UUFDakJOLEtBQUssRUFBRUEsS0FBSztRQUNaRCxNQUFNLEVBQUVBLE1BQU07Ozs7O1lBQ2Q7SUFFSixxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsU0FBUztrQkFDckJWLElBQUksaUJBQ0gsOERBQUNMLGtEQUFJO1lBQUNnQixJQUFJLEVBQUUsU0FBUSxDQUFPLE9BQUxYLElBQUksQ0FBRTtzQkFDMUIsNEVBQUNZLEdBQUM7Z0JBQUNDLFlBQVUsRUFBRWYsS0FBSzswQkFBR0ssS0FBSzs7Ozs7b0JBQUs7Ozs7O2dCQUM1QixHQUVQQSxLQUFLOzs7OztZQUVILENBQ1A7Q0FDRjtBQXhCdUJOLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0cy9jb3Zlci1pbWFnZS5qcz8wZmMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdmVySW1hZ2UoeyB0aXRsZSwgc3JjLCBzbHVnLCBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgY29uc3QgaW1hZ2UgPSAoXG4gICAgPEltYWdlXG4gICAgICBzcmM9e3NyY31cbiAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgYmx1ckRhdGFVUkw9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjQybVBzcVFjQUFaMEJEVFNCdUFRQUFBQUFTVVZPUks1Q1lJST1cIlxuICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAvPlxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpteC0wXCI+XG4gICAgICB7c2x1ZyA/IChcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3NsdWd9YH0+XG4gICAgICAgICAgPGEgYXJpYS1sYWJlbD17dGl0bGV9PntpbWFnZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICkgOiAoXG4gICAgICAgIGltYWdlXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiQ292ZXJJbWFnZSIsInRpdGxlIiwic3JjIiwic2x1ZyIsImhlaWdodCIsIndpZHRoIiwiaW1hZ2UiLCJhbHQiLCJwbGFjZWhvbGRlciIsImJsdXJEYXRhVVJMIiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/posts/cover-image.js\n"));

/***/ }),

/***/ "./components/posts/post-body.js":
/*!***************************************!*\
  !*** ./components/posts/post-body.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostBody; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction PostBody(param) {\n    var content = param.content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"post-body\",\n            dangerouslySetInnerHTML: {\n                __html: content\n            }\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/post-body.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/posts/post-body.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n};\n_c = PostBody;\nvar _c;\n$RefreshReg$(_c, \"PostBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtYm9keS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFlLFNBQVNBLFFBQVEsQ0FBQyxLQUFXLEVBQUU7UUFBYixPQUFTLEdBQVQsS0FBVyxDQUFUQyxPQUFPO0lBQ3hDLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxTQUFTO2tCQUN0Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVztZQUN4QkMsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRUosT0FBTzthQUFFOzs7OztnQkFDNUM7Ozs7O1lBQ0UsQ0FDUDtDQUNGO0FBUnVCRCxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1ib2R5LmpzPzQ3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Qm9keSh7IGNvbnRlbnQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWJvZHlcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbnRlbnQgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJQb3N0Qm9keSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/post-body.js\n"));

/***/ }),

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_posts_post_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/posts/post-body */ \"./components/posts/post-body.js\");\n/* harmony import */ var _components_posts_post_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/posts/post-header */ \"./components/posts/post-header.js\");\n/* harmony import */ var _components_posts_post_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/posts/post-title */ \"./components/posts/post-title.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Post(param) {\n    var post = param.post, morePosts = param.morePosts, preview = param.preview;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.Container, {\n        children: router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_post_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            children: \"Loading…\"\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n            lineNumber: 20,\n            columnNumber: 11\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"mb-32 post-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: [\n                                post.title,\n                                \" | \",\n                                _lib_constants__WEBPACK_IMPORTED_MODULE_7__.CMS_NAME\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n                        lineNumber: 24,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_post_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        title: post.title,\n                        coverImage: post.coverImage,\n                        date: post.date,\n                        author: post.author\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_posts_post_body__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        content: post.content\n                    }, void 0, false, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/pages/posts/[slug].js\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDTDtBQUNVO0FBQ1c7QUFDSTtBQUVGO0FBQzdCO0FBQ2tCOzs7QUFHL0IsU0FBU1EsSUFBSSxDQUFDLEtBQTRCLEVBQUU7UUFBNUJDLElBQUksR0FBTixLQUE0QixDQUExQkEsSUFBSSxFQUFFQyxTQUFTLEdBQWpCLEtBQTRCLENBQXBCQSxTQUFTLEVBQUVDLE9BQU8sR0FBMUIsS0FBNEIsQ0FBVEEsT0FBTzs7SUFDckQsSUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUFFO0lBQzFCLElBQUksQ0FBQ1ksTUFBTSxDQUFDQyxVQUFVLElBQUksQ0FBQ0osQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVLLElBQUksR0FBRTtRQUNyQyxxQkFBTyw4REFBQ2IsbURBQVM7WUFBQ2MsVUFBVSxFQUFFLEdBQUc7Ozs7O2dCQUFJO0tBQ3RDO0lBQ0QscUJBQ0ksOERBQUNiLHNEQUFTO2tCQUNQVSxNQUFNLENBQUNDLFVBQVUsaUJBQ2hCLDhEQUFDUixvRUFBUztzQkFBQyxVQUFROzs7OztnQkFBWSxpQkFFL0I7c0JBQ0UsNEVBQUNXLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7O2tDQUN2Qyw4REFBQ1gsa0RBQUk7a0NBQ0gsNEVBQUNZLE9BQUs7O2dDQUNIVCxJQUFJLENBQUNTLEtBQUs7Z0NBQUMsS0FBRztnQ0FBQ1gsb0RBQVE7Ozs7OztnQ0FDbEI7Ozs7OzRCQUVIO2tDQUNQLDhEQUFDSCxxRUFBVTt3QkFDVGMsS0FBSyxFQUFFVCxJQUFJLENBQUNTLEtBQUs7d0JBQ2pCQyxVQUFVLEVBQUVWLElBQUksQ0FBQ1UsVUFBVTt3QkFDM0JDLElBQUksRUFBRVgsSUFBSSxDQUFDVyxJQUFJO3dCQUNmQyxNQUFNLEVBQUVaLElBQUksQ0FBQ1ksTUFBTTs7Ozs7NEJBQ25CO2tDQUNGLDhEQUFDbEIsbUVBQVE7d0JBQUNtQixPQUFPLEVBQUViLElBQUksQ0FBQ2EsT0FBTzs7Ozs7NEJBQUk7Ozs7OztvQkFDM0I7eUJBQ1Q7Ozs7O1lBRUssQ0FDZjtDQUNGO0dBOUJ1QmQsSUFBSTs7UUFDWFIsa0RBQVM7OztBQURGUSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL1tzbHVnXS5qcz82OTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEVycm9yUGFnZSBmcm9tICduZXh0L2Vycm9yJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IFBvc3RCb2R5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1ib2R5JyBcbmltcG9ydCBQb3N0SGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1oZWFkZXInIFxuaW1wb3J0IHsgZ2V0UG9zdEJ5U2x1ZywgZ2V0QWxsUG9zdHMgfSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IFBvc3RUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtdGl0bGUnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDTVNfTkFNRSB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgbWFya2Rvd25Ub0h0bWwgZnJvbSAnLi4vLi4vbGliL21hcmtkb3duVG9IdG1sJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCwgbW9yZVBvc3RzLCBwcmV2aWV3IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuICByZXR1cm4gKCBcbiAgICAgIDxDb250YWluZXI+IFxuICAgICAgICB7cm91dGVyLmlzRmFsbGJhY2sgPyAoXG4gICAgICAgICAgPFBvc3RUaXRsZT5Mb2FkaW5n4oCmPC9Qb3N0VGl0bGU+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1iLTMyIHBvc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfSB8IHtDTVNfTkFNRX1cbiAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cG9zdC5vZ0ltYWdlLnVybH0gLz4gKi99XG4gICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgPFBvc3RIZWFkZXJcbiAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICBjb3ZlckltYWdlPXtwb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgZGF0ZT17cG9zdC5kYXRlfVxuICAgICAgICAgICAgICAgIGF1dGhvcj17cG9zdC5hdXRob3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxQb3N0Qm9keSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj4gXG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gICAgJ2F1dGhvcicsXG4gICAgJ2NvbnRlbnQnLFxuICAgICdvZ0ltYWdlJyxcbiAgICAnY292ZXJJbWFnZScsXG4gIF0pXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBtYXJrZG93blRvSHRtbChwb3N0LmNvbnRlbnQgfHwgJycpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdDoge1xuICAgICAgICAuLi5wb3N0LFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbJ3NsdWcnXSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJFcnJvclBhZ2UiLCJDb250YWluZXIiLCJQb3N0Qm9keSIsIlBvc3RIZWFkZXIiLCJQb3N0VGl0bGUiLCJIZWFkIiwiQ01TX05BTUUiLCJQb3N0IiwicG9zdCIsIm1vcmVQb3N0cyIsInByZXZpZXciLCJyb3V0ZXIiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInN0YXR1c0NvZGUiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJjb3ZlckltYWdlIiwiZGF0ZSIsImF1dGhvciIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});