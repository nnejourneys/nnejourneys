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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroSliderMain; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/next/node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/next/node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/constants */ \"./lib/constants.js\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _data_heroslider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/heroslider.json */ \"./data/heroslider.json\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _data_tourtypes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/tourtypes.json */ \"./data/tourtypes.json\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction HeroSliderMain() {\n    var _this = this;\n    var SampleNextArrow = function SampleNextArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n            className: \"nextArrow\",\n            initial: {\n                y: -30\n            },\n            whileTap: {\n                scale: 0.75,\n                opacity: 0.5\n            },\n            onClick: onClick,\n            \"aria-label\": \"next\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                icon: \"bi:arrow-right\",\n                width: \"30\",\n                height: \"30\"\n            }, void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this);\n    };\n    var SamplePrevArrow = function SamplePrevArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n            className: \"prevArrow\",\n            initial: {\n                y: -30\n            },\n            whileTap: {\n                scale: 0.75,\n                opacity: 0.5\n            },\n            onClick: onClick,\n            \"aria-label\": \"previous\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                icon: \"bi:arrow-left\",\n                width: \"30\",\n                height: \"30\"\n            }, void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this);\n    };\n    _s();\n    var ref = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)(), ref1 = ref.ref, inView = ref.inView, entry = ref.entry;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), currentSlide = ref2[0], setcurrentSlide = ref2[1];\n    var animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(currentSlide);\n        if (currentSlide) {\n            animation.start({\n                x: \"0\",\n                transition: {\n                    type: \"tween\",\n                    duration: 1.5\n                }\n            });\n        }\n        if (!currentSlide) {\n            animation.start({\n                x: \"-2vw\"\n            });\n        }\n    }, [\n        currentSlide\n    ]);\n    var settings = {\n        infinite: true,\n        fade: true,\n        dots: false,\n        arrows: true,\n        autoplay: true,\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 68,\n            columnNumber: 16\n        }, this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 69,\n            columnNumber: 16\n        }, this)\n    };\n    // const [selectedSlide, setSelectedSlide] = useState(index);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-slider position-relative\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, settings), {\n                ref: setcurrentSlide,\n                children: _data_heroslider_json__WEBPACK_IMPORTED_MODULE_6__.hero.slides.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-slider-item py-160\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: item.image,\n                                alt: \"North by Northeast Journeys\",\n                                layout: \"fill\",\n                                placeholder: \"blur\",\n                                blurDataURL: _lib_constants__WEBPACK_IMPORTED_MODULE_3__.imgblurDataURL,\n                                objectFit: \"cover\",\n                                objectPosition: \"center\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hero-content\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h3, {\n                                        animate: animation,\n                                        className: \"hero-title mb-1\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h1, {\n                                        className: \"hero-subtitle mb-3\",\n                                        children: item.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                                        className: \"hero-text text-uppercase mb-5\",\n                                        children: [\n                                            item.description,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                                href: _data_tourtypes_json__WEBPACK_IMPORTED_MODULE_7__.btnlink,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"btn btn-primary mt-2\",\n                                                    children: _data_tourtypes_json__WEBPACK_IMPORTED_MODULE_7__.btntext\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }), void 0, false, {\n                fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/stephanie/Documents/Web-Development/nnejourneys/components/hero-slider-main.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(HeroSliderMain, \"B+GI90L0ZMFBsu3QqkMT2YCUdyU=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_8__.useAnimation\n    ];\n});\n_c = HeroSliderMain;\nvar _c;\n$RefreshReg$(_c, \"HeroSliderMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztxQ0FDUDs7dUJBeEJ1QzJDLEtBQUs7Ozs7NkJBeUI5QztpQkFDUCxDQUFDOzs7OztvQkFDSzs7Ozs7Z0JBQ1A7cUJBQ0wsQ0FDSDtDQUNIO0dBakd1QjFDLGNBQWM7O1FBQ0xGLGtFQUFTO1FBRXRCRCx1REFBWTs7O0FBSFJHLEtBQUFBLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvLXNsaWRlci1tYWluLmpzPzQ1NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IGltZ2JsdXJEYXRhVVJMIH0gZnJvbSBcIi4uL2xpYi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgU2xpZGVzIGZyb20gXCIuLi9kYXRhL2hlcm9zbGlkZXIuanNvblwiOyBcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5pbXBvcnQgVG91cnR5cGVkYXRhIGZyb20gXCIuLi9kYXRhL3RvdXJ0eXBlcy5qc29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvU2xpZGVyTWFpbigpIHtcclxuICBjb25zdCB7IHJlZiwgaW5WaWV3LCBlbnRyeSB9ID0gdXNlSW5WaWV3KCk7XHJcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Y3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFNsaWRlKTtcclxuICAgIGlmKGN1cnJlbnRTbGlkZSl7XHJcbiAgICAgIGFuaW1hdGlvbi5zdGFydCh7IFxyXG4gICAgICAgIHg6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgIHR5cGU6ICd0d2VlbicsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMS41LCBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBpZighY3VycmVudFNsaWRlKXtcclxuICAgICAgICBhbmltYXRpb24uc3RhcnQoe3g6IFwiLTJ2d1wiLH0pXHJcbiAgICAgIH1cclxuICB9LCBbY3VycmVudFNsaWRlXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBTYW1wbGVOZXh0QXJyb3cocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bW90aW9uLmJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5leHRBcnJvd1wiXHJcbiAgICAgICAgaW5pdGlhbD17eyB5OiAtMzAgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC43NSwgb3BhY2l0eTogMC41IH19XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBhcmlhLWxhYmVsPVwibmV4dFwiXHJcbiAgICAgID4gXHJcbiAgICAgICAgPEljb24gaWNvbj1cImJpOmFycm93LXJpZ2h0XCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgLz5cclxuICAgICAgPC9tb3Rpb24uYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNhbXBsZVByZXZBcnJvdyhwcm9wcykge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHJldkFycm93XCJcclxuICAgICAgICBpbml0aWFsPXt7IHk6IC0zMCB9fVxyXG4gICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjc1LCBvcGFjaXR5OiAwLjUgfX1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJwcmV2aW91c1wiXHJcbiAgICAgID5cclxuICAgICAgICA8SWNvbiBpY29uPVwiYmk6YXJyb3ctbGVmdFwiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiLz5cclxuICAgICAgPC9tb3Rpb24uYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbiAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIG5leHRBcnJvdzogPFNhbXBsZU5leHRBcnJvdyAvPixcclxuICAgIHByZXZBcnJvdzogPFNhbXBsZVByZXZBcnJvdyAvPixcclxuICB9O1xyXG4gIC8vIGNvbnN0IFtzZWxlY3RlZFNsaWRlLCBzZXRTZWxlY3RlZFNsaWRlXSA9IHVzZVN0YXRlKGluZGV4KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNsaWRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPiBcclxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSByZWY9e3NldGN1cnJlbnRTbGlkZX0+XHJcbiAgICAgICAgICAgIHtTbGlkZXMuaGVyby5zbGlkZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImhlcm8tc2xpZGVyLWl0ZW0gcHktMTYwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiTm9ydGggYnkgTm9ydGhlYXN0IEpvdXJuZXlzXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgIGJsdXJEYXRhVVJMPXtpbWdibHVyRGF0YVVSTH1cclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50XCIgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uaDMgYW5pbWF0ZT17YW5pbWF0aW9ufSBjbGFzc05hbWU9XCJoZXJvLXRpdGxlIG1iLTFcIj57aXRlbS50aXRsZX08L21vdGlvbi5oMz5cclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5oMSBjbGFzc05hbWU9XCJoZXJvLXN1YnRpdGxlIG1iLTNcIj57aXRlbS5zdWJ0aXRsZX08L21vdGlvbi5oMT5cclxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5wIGNsYXNzTmFtZT1cImhlcm8tdGV4dCB0ZXh0LXVwcGVyY2FzZSBtYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17VG91cnR5cGVkYXRhLmJ0bmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTJcIj57VG91cnR5cGVkYXRhLmJ0bnRleHR9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpZGVyPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJpbWdibHVyRGF0YVVSTCIsIkljb24iLCJTbGlkZXIiLCJTbGlkZXMiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJUb3VydHlwZWRhdGEiLCJIZXJvU2xpZGVyTWFpbiIsIlNhbXBsZU5leHRBcnJvdyIsInByb3BzIiwib25DbGljayIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ5Iiwid2hpbGVUYXAiLCJzY2FsZSIsIm9wYWNpdHkiLCJhcmlhLWxhYmVsIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiU2FtcGxlUHJldkFycm93IiwicmVmIiwiaW5WaWV3IiwiZW50cnkiLCJjdXJyZW50U2xpZGUiLCJzZXRjdXJyZW50U2xpZGUiLCJhbmltYXRpb24iLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJ4IiwidHJhbnNpdGlvbiIsInR5cGUiLCJkdXJhdGlvbiIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJmYWRlIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5IiwibmV4dEFycm93IiwicHJldkFycm93IiwiZGl2IiwiaGVybyIsInNsaWRlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNyYyIsImltYWdlIiwiYWx0IiwibGF5b3V0IiwicGxhY2Vob2xkZXIiLCJibHVyRGF0YVVSTCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwicHJpb3JpdHkiLCJoMyIsImFuaW1hdGUiLCJ0aXRsZSIsImgxIiwic3VidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJMaW5rIiwiaHJlZiIsImJ0bmxpbmsiLCJhIiwiYnRudGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero-slider-main.js\n"));

/***/ }),

/***/ "./data/tourtypes.json":
/*!*****************************!*\
  !*** ./data/tourtypes.json ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"tourtypetitle":"Active, Interactive and Authentic Tours of Northeast India","btnlink":"/tours","btntext":"Explore all tours","tourtype":[{"title":"ACTIVE ADVENTURE","img":"/images/tour-type/adventure.jpg","text":"Our Active Adventure tours in northeast India are for the avid as well as novice, be it relaxed or a real test of determination and endurance."},{"title":"NATURE & CULTURE","img":"/images/tour-type/wildlife-culture.jpg","text":"These 8 states lying in the Indo-Burmese and the Himalayan Bio-diversity hotspots are also home to over 150 unique and distinct ethinic groups."},{"title":"LAIDBACK LEISURE","img":"/images/tour-type/leisure.jpg","text":"Holidays that take you away from the maddening crowds, kick off your shoes, destress and enjoy the serenity while we take care of the rest."}]}');

/***/ })

});