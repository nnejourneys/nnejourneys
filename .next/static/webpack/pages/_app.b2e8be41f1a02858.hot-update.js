"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/hero-slider-main.js":
/*!****************************************!*\
  !*** ./components/hero-slider-main.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroSliderMain; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/next/node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/next/node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _data_heroslider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/heroslider.json */ \"./data/heroslider.json\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _data_tourtypes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/tourtypes.json */ \"./data/tourtypes.json\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeroSliderMain() {\n    var _this = this;\n    var SampleNextArrow = function SampleNextArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n            className: \"nextArrow\",\n            initial: {\n                y: -30\n            },\n            whileTap: {\n                scale: 0.75,\n                opacity: 0.5\n            },\n            onClick: onClick,\n            \"aria-label\": \"next\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                icon: \"bi:arrow-right\",\n                width: \"30\",\n                height: \"30\"\n            }, void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this);\n    };\n    var SamplePrevArrow = function SamplePrevArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n            className: \"prevArrow\",\n            initial: {\n                y: -30\n            },\n            whileTap: {\n                scale: 0.75,\n                opacity: 0.5\n            },\n            onClick: onClick,\n            \"aria-label\": \"previous\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                icon: \"bi:arrow-left\",\n                width: \"30\",\n                height: \"30\"\n            }, void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this);\n    };\n    _s();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)(), ref1 = ref.ref, inView = ref.inView, entry = ref.entry;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentSlide = ref2[0], setcurrentSlide = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        if (currentSlide) {\n            animation.start({\n                x: \"0\",\n                transition: {\n                    type: \"tween\",\n                    duration: 1.5\n                }\n            });\n        }\n        if (!currentSlide) {\n            animation.start({\n                x: \"-2vw\"\n            });\n        }\n    }, [\n        currentSlide\n    ]);\n    var settings = {\n        infinite: true,\n        fade: true,\n        dots: false,\n        arrows: true,\n        autoplay: true,\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 72,\n            columnNumber: 16\n        }, this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 73,\n            columnNumber: 16\n        }, this)\n    };\n    // const [selectedSlide, setSelectedSlide] = useState(index);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-slider position-relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, settings), {\n                ref: setcurrentSlide,\n                children: _data_heroslider_json__WEBPACK_IMPORTED_MODULE_6__.hero.slides.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-slider-item py-160\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.image,\n                                alt: \"North by Northeast Journeys\",\n                                layout: \"fill\",\n                                placeholder: \"blur\",\n                                blurDataURL: _lib_constants__WEBPACK_IMPORTED_MODULE_3__.imgblurDataURL,\n                                objectFit: \"cover\",\n                                objectPosition: \"center\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hero-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h3, {\n                                        animate: animation,\n                                        className: \"hero-title mb-1\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h1, {\n                                        className: \"hero-subtitle mb-3\",\n                                        children: item.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                                        className: \"hero-text text-uppercase mb-5\",\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"btn btn-primary\",\n                                        children: _data_tourtypes_json__WEBPACK_IMPORTED_MODULE_7__.btntext\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                        lineNumber: 81,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }), void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HeroSliderMain, \"B+GI90L0ZMFBsu3QqkMT2YCUdyU=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useAnimation\n    ];\n});\n_c = HeroSliderMain;\nvar _c;\n$RefreshReg$(_c, \"HeroSliderMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2dCQUNQO3FCQUNMLENBQ0g7Q0FDSDtHQTlGdUIxQyxjQUFjOztRQUNMRixrRUFBUztRQUV0QkQsdURBQVk7OztBQUhSRyxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby1zbGlkZXItbWFpbi5qcz80NTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBpbWdibHVyRGF0YVVSTCB9IGZyb20gXCIuLi9saWIvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGljb25pZnkvcmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFNsaWRlcyBmcm9tIFwiLi4vZGF0YS9oZXJvc2xpZGVyLmpzb25cIjsgXHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcblxyXG5pbXBvcnQgVG91cnR5cGVkYXRhIGZyb20gXCIuLi9kYXRhL3RvdXJ0eXBlcy5qc29uXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm9TbGlkZXJNYWluKCkge1xyXG4gIGNvbnN0IHsgcmVmLCBpblZpZXcsIGVudHJ5IH0gPSB1c2VJblZpZXcoKTtcclxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRjdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBhbmltYXRpb24gPSB1c2VBbmltYXRpb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U2xpZGUpO1xyXG4gICAgaWYoY3VycmVudFNsaWRlKXtcclxuICAgICAgYW5pbWF0aW9uLnN0YXJ0KHsgXHJcbiAgICAgICAgeDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgdHlwZTogJ3R3ZWVuJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsIFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgIGlmKCFjdXJyZW50U2xpZGUpe1xyXG4gICAgICAgIGFuaW1hdGlvbi5zdGFydCh7eDogXCItMnZ3XCIsfSlcclxuICAgICAgfVxyXG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIFNhbXBsZU5leHRBcnJvdyhwcm9wcykge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibmV4dEFycm93XCJcclxuICAgICAgICBpbml0aWFsPXt7IHk6IC0zMCB9fVxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjc1LCBvcGFjaXR5OiAwLjUgfX1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJuZXh0XCJcclxuICAgICAgPiBcclxuICAgICAgICA8SWNvbiBpY29uPVwiYmk6YXJyb3ctcmlnaHRcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiAvPlxyXG4gICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2FtcGxlUHJldkFycm93KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG1vdGlvbi5idXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2QXJyb3dcIlxyXG4gICAgICAgIGluaXRpYWw9e3sgeTogLTMwIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuNzUsIG9wYWNpdHk6IDAuNSB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJY29uIGljb249XCJiaTphcnJvdy1sZWZ0XCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIvPlxyXG4gICAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgbmV4dEFycm93OiA8U2FtcGxlTmV4dEFycm93IC8+LFxyXG4gICAgcHJldkFycm93OiA8U2FtcGxlUHJldkFycm93IC8+LFxyXG4gIH07XHJcbiAgLy8gY29uc3QgW3NlbGVjdGVkU2xpZGUsIHNldFNlbGVjdGVkU2xpZGVdID0gdXNlU3RhdGUoaW5kZXgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+IFxyXG4gICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IHJlZj17c2V0Y3VycmVudFNsaWRlfT5cclxuICAgICAgICAgICAge1NsaWRlcy5oZXJvLnNsaWRlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiaGVyby1zbGlkZXItaXRlbSBweS0xNjBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJOb3J0aCBieSBOb3J0aGVhc3QgSm91cm5leXNcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9e2ltZ2JsdXJEYXRhVVJMfVxyXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMyBhbmltYXRlPXthbmltYXRpb259IGNsYXNzTmFtZT1cImhlcm8tdGl0bGUgbWItMVwiPntpdGVtLnRpdGxlfTwvbW90aW9uLmgzPlxyXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmgxIGNsYXNzTmFtZT1cImhlcm8tc3VidGl0bGUgbWItM1wiPntpdGVtLnN1YnRpdGxlfTwvbW90aW9uLmgxPlxyXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnAgY2xhc3NOYW1lPVwiaGVyby10ZXh0IHRleHQtdXBwZXJjYXNlIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntUb3VydHlwZWRhdGEuYnRudGV4dH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWRlcj4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiaW1nYmx1ckRhdGFVUkwiLCJJY29uIiwiU2xpZGVyIiwiU2xpZGVzIiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwiVG91cnR5cGVkYXRhIiwiSGVyb1NsaWRlck1haW4iLCJTYW1wbGVOZXh0QXJyb3ciLCJwcm9wcyIsIm9uQ2xpY2siLCJidXR0b24iLCJjbGFzc05hbWUiLCJpbml0aWFsIiwieSIsIndoaWxlVGFwIiwic2NhbGUiLCJvcGFjaXR5IiwiYXJpYS1sYWJlbCIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsIlNhbXBsZVByZXZBcnJvdyIsInJlZiIsImluVmlldyIsImVudHJ5IiwiY3VycmVudFNsaWRlIiwic2V0Y3VycmVudFNsaWRlIiwiYW5pbWF0aW9uIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwieCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJzZXR0aW5ncyIsImluZmluaXRlIiwiZmFkZSIsImRvdHMiLCJhcnJvd3MiLCJhdXRvcGxheSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsImRpdiIsImhlcm8iLCJzbGlkZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzcmMiLCJpbWFnZSIsImFsdCIsImxheW91dCIsInBsYWNlaG9sZGVyIiwiYmx1ckRhdGFVUkwiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsInByaW9yaXR5IiwiaDMiLCJhbmltYXRlIiwidGl0bGUiLCJoMSIsInN1YnRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYSIsImJ0bnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero-slider-main.js\n"));

/***/ }),

/***/ "./data/tourtypes.json":
/*!*****************************!*\
  !*** ./data/tourtypes.json ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"tourtypetitle":"Active, Interactive and Authentic Tours of Northeast India","btnlink":"/tours","btntext":"Explore all tours","tourtype":[{"title":"ACTIVE ADVENTURE","img":"/images/tour-type/adventure.jpg","text":"Our Active Adventure tours in northeast India are for the avid as well as novice, be it relaxed or a real test of determination and endurance."},{"title":"NATURE & CULTURE","img":"/images/tour-type/wildlife-culture.jpg","text":"These 8 states lying in the Indo-Burmese and the Himalayan Bio-diversity hotspots are also home to over 150 unique and distinct ethinic groups."},{"title":"LAIDBACK LEISURE","img":"/images/tour-type/leisure.jpg","text":"Holidays that take you away from the maddening crowds, kick off your shoes, destress and enjoy the serenity while we take care of the rest."}]}');

/***/ })

});