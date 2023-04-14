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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ \"./src/Header.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var _SpeakerData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData.js */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail.js */ \"./src/SpeakerDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Speaker = (param)=>{\n    let {} = param;\n    _s();\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakerList, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(speakersReducer, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App_js__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);\n    // const [speakerList, setSpeakerList] = useState([]);\n    function speakersReducer(state, action) {\n        switch(action.type){\n            case \"setSpeakerList\":\n                {\n                    return action.data;\n                }\n            default:\n                return state;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(()=>{\n            setIsLoading(false);\n            const speakerListServerFilter = _SpeakerData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].filter((param)=>{\n                let { sat , sun  } = param;\n                return speakingSaturday && sat || speakingSunday && sun;\n            });\n            dispatch({\n                type: \"setSpeakerList\",\n                data: speakerListServerFilter\n            });\n        });\n        return ()=>{\n            console.log(\"cleanup\");\n        };\n    }, []);\n    const handleChangeSaturday = ()=>{\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    const handleChangeSunday = ()=>{\n        setSpeakingSunday(!speakingSunday);\n    };\n    const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue)=>{\n        e.preventDefault();\n        const sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favoriteValue === true ? \"favorite\" : \"unfavorite\",\n            sessionId\n        });\n    }, []);\n    const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>speakerList.filter((param)=>{\n            let { sat , sun  } = param;\n            return speakingSaturday && sat || speakingSunday && sun;\n        }).sort(function(a, b) {\n            if (a.firstName < b.firstName) {\n                return -1;\n            }\n            if (a.firstName > b.firstName) {\n                return 1;\n            }\n            return 0;\n        }), [\n        speakingSaturday,\n        speakingSunday,\n        speakerList\n    ]);\n    const speakerListFiltered = isLoading ? [] : newSpeakerList;\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 82,\n        columnNumber: 26\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_js__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu_js__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checkbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSunday,\n                                                checked: speakingSunday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Sunday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map((param)=>{\n                                let { id , firstName , lastName , bio , favorite  } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    onHeartFavoriteHandler: heartFavoriteHandler,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 37\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speaker, \"cBqAZLM45QFDhq0fRKSzMcDE538=\");\n_c = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTtrQ0FDVmpDLFFBQVFrQyx1QkFBdUIsS0FBSyxLQUFLLEdBQUcsSUFBSSxpQkFDakQsOERBQUNGOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNFO3dDQUFNRixXQUFVOzswREFDYiw4REFBQ0c7Z0RBQU1qQyxNQUFLO2dEQUFXOEIsV0FBVTtnREFDMUJJLFVBQVV0QjtnREFDVnVCLFNBQVMvQzs7Ozs7OzRDQUNkOzs7Ozs7Ozs7Ozs7OENBR1YsOERBQUN5QztvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ0U7d0NBQU1GLFdBQVU7OzBEQUNiLDhEQUFDRztnREFBTWpDLE1BQUs7Z0RBQVc4QixXQUFVO2dEQUMxQkksVUFBVXJCO2dEQUNWc0IsU0FBUzdDOzs7Ozs7NENBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUliOzs7Ozs7a0NBRUwsOERBQUN1Qzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1ZGLG9CQUFvQlEsR0FBRyxDQUNwQixTQUE4QztvQ0FBN0MsRUFBQ0MsR0FBRSxFQUFFVixVQUFTLEVBQUVXLFNBQVEsRUFBRUMsSUFBRyxFQUFFQyxTQUFRLEVBQUM7Z0NBQ3JDLHFCQUNJLDhEQUFDdEQseURBQWFBO29DQUVkbUQsSUFBSUE7b0NBQ0pHLFVBQVVBO29DQUNWQyx3QkFBd0IzQjtvQ0FDeEJhLFdBQVdBO29DQUNYVyxVQUFVQTtvQ0FDVkMsS0FBS0E7bUNBTklGOzs7Ozs0QkFTakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBN0hNbEQ7S0FBQUE7QUErSE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXIuanNcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL01lbnUuanNcIjtcclxuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwLmpzJztcclxuaW1wb3J0IFNwZWFrZXJEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhLmpzXCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbC5qcyc7XHJcblxyXG5jb25zdCBTcGVha2VyID0gKHt9KSA9PiB7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlcnNSZWR1Y2VyLCBbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxuXHJcbiAgICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzcGVha2Vyc1JlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNldFNwZWFrZXJMaXN0XCI6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyBcImZhdm9yaXRlXCIgOiBcInVuZmF2b3JpdGVcIixcclxuICAgICAgICAgICAgc2Vzc2lvbklkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbmV3U3BlYWtlckxpc3QgPSB1c2VNZW1vKCgpID0+IHNwZWFrZXJMaXN0XHJcbiAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pLCBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XSk7XHJcblxyXG4gICAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIFxyXG4gICAgICAgIDogbmV3U3BlYWtlckxpc3Q7XHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyJz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+U3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1kZWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsIkhlYWRlciIsIk1lbnUiLCJDb25maWdDb250ZXh0IiwiU3BlYWtlckRhdGEiLCJTcGVha2VyRGV0YWlsIiwiU3BlYWtlciIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJzcGVha2Vyc1JlZHVjZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJjb250ZXh0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzcGVha2VyTGlzdFNlcnZlckZpbHRlciIsImZpbHRlciIsInNhdCIsInN1biIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwibmV3U3BlYWtlckxpc3QiLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwibWFwIiwiaWQiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});