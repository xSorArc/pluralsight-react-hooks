"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageToggleOnScroll = (param)=>{\n    let { primaryImg , secondaryImg  } = param;\n    _s();\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [inView, setInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const isInView = ()=>{\n        const rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(false);\n        setInView(isInView());\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>{\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    const scrollHandler = ()=>{\n        setInView(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: inView ? secondaryImg : primaryImg,\n        alt: \"\",\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ImageToggleOnScroll, \"ZXGxYM2/GoMqCdxtGlrQhtEYGrw=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLHNCQUFzQixTQUFnQztRQUEvQixFQUFDQyxXQUFVLEVBQUVDLGFBQVksRUFBQzs7SUFDbkQsTUFBTUMsV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUM1QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUMvQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNUyxXQUFXLElBQU07UUFDbkIsTUFBTUMsT0FBT04sU0FBU08sT0FBTyxDQUFDQyxxQkFBcUI7UUFDbkQsT0FBT0YsS0FBS0csR0FBRyxJQUFJLEtBQUtILEtBQUtJLE1BQU0sSUFBSUMsT0FBT0MsV0FBVztJQUM3RDtJQUVBbEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaUSxhQUFhLEtBQUs7UUFDbEJFLFVBQVVDO1FBQ1ZNLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU8sSUFBTTtZQUNUSCxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVRDtRQUN6QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1BLGdCQUFnQixJQUFNO1FBQ3hCVixVQUFVQztJQUNkO0lBRUEscUJBQ0ksOERBQUNXO1FBQUlDLEtBQUtkLFNBQVNKLGVBQWVELFVBQVU7UUFBRW9CLEtBQUk7UUFBR0MsS0FBS25COzs7Ozs7QUFFbEU7R0F6Qk1IO0tBQUFBO0FBMkJOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/Y2M3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHtwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWd9KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgXHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZyBzcmM9e2luVmlldyA/IHNlY29uZGFyeUltZyA6IHByaW1hcnlJbWd9IGFsdD1cIlwiIHJlZj17aW1hZ2VSZWZ9IC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpblZpZXciLCJzZXRJblZpZXciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n"));

/***/ })

});