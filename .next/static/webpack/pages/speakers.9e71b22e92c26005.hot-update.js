"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SignMeUp = (param)=>{\n    let { signupCallback  } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);\n    return context.SignMeUp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        placeholder: \"Enter Email\",\n                        type: \"email\",\n                        name: \"email\",\n                        value: email,\n                        onChange: (e)=>{\n                            setEmail(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\SignMeUp.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, undefined),\n                    \"\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: !email.includes(\"@\"),\n                        onClick: ()=>{\n                            signupCallback(email);\n                            setEmail(\"\");\n                            alert(\"signup confirmed\");\n                        },\n                        className: \"btn\",\n                        type: \"submit\",\n                        children: \"Get Updates\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\SignMeUp.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\SignMeUp.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\SignMeUp.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\SignMeUp.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, undefined));\n};\n_s(SignMeUp, \"8Fha8tsDLLztypRZhD9xBFHbEc8=\");\n_c = SignMeUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignMeUp);\nvar _c;\n$RefreshReg$(_c, \"SignMeUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2lnbk1lVXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0Q7QUFDZDtBQUV0QyxNQUFNSSxXQUFXLFNBQXdCO1FBQXZCLEVBQUVDLGVBQWMsRUFBRTs7SUFDaEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1PLFVBQVVOLGlEQUFVQSxDQUFDQywrQ0FBYUE7SUFFeEMsT0FBT0ssUUFBUUosUUFBUSxlQUNuQiw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7c0JBQ0csNEVBQUNBO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQU1DLGFBQVk7d0JBQWNDLE1BQUs7d0JBQVFDLE1BQUs7d0JBQVFDLE9BQU9UO3dCQUM5RFUsVUFBVSxDQUFDQyxJQUFNOzRCQUNiVixTQUFTVSxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzNCOzs7Ozs7b0JBQ0Y7a0NBRUYsOERBQUNJO3dCQUNHQyxVQUFVLENBQUNkLE1BQU1lLFFBQVEsQ0FBQzt3QkFDMUJDLFNBQVMsSUFBTTs0QkFDWGpCLGVBQWVDOzRCQUNmQyxTQUFTOzRCQUNUZ0IsTUFBTTt3QkFDVjt3QkFDQWIsV0FBVTt3QkFBTUcsTUFBSztrQ0FDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0E3Qk1UO0tBQUFBO0FBK0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TaWduTWVVcC5qcz83OTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5jb25zdCBTaWduTWVVcCA9ICh7IHNpZ251cENhbGxiYWNrIH0pID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gY29udGV4dC5TaWduTWVVcChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIiB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoXCJAXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFbWFpbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic2lnbnVwIGNvbmZpcm1lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCIgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHZXQgVXBkYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkNvbmZpZ0NvbnRleHQiLCJTaWduTWVVcCIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJzZXRFbWFpbCIsImNvbnRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwiaW5jbHVkZXMiLCJvbkNsaWNrIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SignMeUp.js\n"));

/***/ })

});