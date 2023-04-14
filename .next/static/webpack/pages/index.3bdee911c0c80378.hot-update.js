"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ \"./src/Header.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var _SpeakerData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData.js */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail.js */ \"./src/SpeakerDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Speaker = (param)=>{\n    let {} = param;\n    _s();\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakerList, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(speakersReducer, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App_js__WEBPACK_IMPORTED_MODULE_4__.ConfigContext);\n    // const [speakerList, setSpeakerList] = useState([]);\n    function speakersReducer(state, action) {\n        switch(action.type){\n            case \"setSpeakerList\":\n                {\n                    return action.data;\n                }\n            default:\n                return state;\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(()=>{\n            setIsLoading(false);\n            const speakerListServerFilter1 = _SpeakerData_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].filter((param)=>{\n                let { sat , sun  } = param;\n                return speakingSaturday && sat || speakingSunday && sun;\n            });\n        });\n        //setSpeakerList(SpeakerData);\n        dispatch({\n            type: \"setSpeakerList\",\n            data: speakerListServerFilter\n        });\n        return ()=>{\n            console.log(\"cleanup\");\n        };\n    }, []);\n    const handleChangeSaturday = ()=>{\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    const handleChangeSunday = ()=>{\n        setSpeakingSunday(!speakingSunday);\n    };\n    const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue)=>{\n        e.preventDefault();\n        const sessionId = parseInt(e.target.attributes[\"data-sessionid\"].value);\n        dispatch({\n            type: favoriteValue === true ? \"favorite\" : \"unfavorite\",\n            sessionId\n        });\n    }, []);\n    const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>speakerList.filter((param)=>{\n            let { sat , sun  } = param;\n            return speakingSaturday && sat || speakingSunday && sun;\n        }).sort(function(a, b) {\n            if (a.firstName < b.firstName) {\n                return -1;\n            }\n            if (a.firstName > b.firstName) {\n                return 1;\n            }\n            return 0;\n        }), [\n        speakingSaturday,\n        speakingSunday,\n        speakerList\n    ]);\n    const speakerListFiltered = isLoading ? [] : newSpa;\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 82,\n        columnNumber: 26\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_js__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu_js__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checkbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSunday,\n                                                checked: speakingSunday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"Sunday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map((param)=>{\n                                let { id , firstName , lastName , bio , favorite  } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio,\n                                    onHeartFavoriteHandler: heartFavoriteHandler\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 37\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                            lineNumber: 112,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Matt G\\\\Desktop\\\\Create with Code\\\\Coding Practice\\\\ps-practice\\\\setting-up-toolchain\\\\src\\\\Speakers.js\",\n        lineNumber: 85,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speaker, \"cBqAZLM45QFDhq0fRKSzMcDE538=\");\n_c = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c;\n$RefreshReg$(_c, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Q7d0JBQUlDLFdBQVU7a0NBQ1ZsQyxRQUFRbUMsdUJBQXVCLEtBQUssS0FBSyxHQUFHLElBQUksaUJBQ2pELDhEQUFDRjs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNYLDRFQUFDRTt3Q0FBTUYsV0FBVTs7MERBQ2IsOERBQUNHO2dEQUFNbEMsTUFBSztnREFBVytCLFdBQVU7Z0RBQzFCSSxVQUFVdkI7Z0RBQ1Z3QixTQUFTaEQ7Ozs7Ozs0Q0FDZDs7Ozs7Ozs7Ozs7OzhDQUdWLDhEQUFDMEM7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNFO3dDQUFNRixXQUFVOzswREFDYiw4REFBQ0c7Z0RBQU1sQyxNQUFLO2dEQUFXK0IsV0FBVTtnREFDMUJJLFVBQVV0QjtnREFDVnVCLFNBQVM5Qzs7Ozs7OzRDQUNkOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJYjs7Ozs7O2tDQUVMLDhEQUFDd0M7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNWSCxvQkFBb0JTLEdBQUcsQ0FDcEIsU0FBOEM7b0NBQTdDLEVBQUNDLEdBQUUsRUFBRVgsVUFBUyxFQUFFWSxTQUFRLEVBQUVDLElBQUcsRUFBRUMsU0FBUSxFQUFDO2dDQUNyQyxxQkFDSSw4REFBQ3ZELHlEQUFhQTtvQ0FBVW9ELElBQUlBO29DQUFJRyxVQUFVQTtvQ0FBVWQsV0FBV0E7b0NBQVdZLFVBQVVBO29DQUFVQyxLQUFLQTtvQ0FDbkdFLHdCQUF3QjVCO21DQURKd0I7Ozs7OzRCQUc1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUI7R0F0SE1uRDtLQUFBQTtBQXdITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnMuanM/MmZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlci5qc1wiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudS5qc1wiO1xyXG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAuanMnO1xyXG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGEuanNcIjtcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsLmpzJztcclxuXHJcbmNvbnN0IFNwZWFrZXIgPSAoe30pID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIFtdKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xyXG5cclxuICAgIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNwZWFrZXJzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2V0U3BlYWtlckxpc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vc2V0U3BlYWtlckxpc3QoU3BlYWtlckRhdGEpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJzZXRTcGVha2VyTGlzdFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBzcGVha2VyTGlzdFNlcnZlckZpbHRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gXCJmYXZvcml0ZVwiIDogXCJ1bmZhdm9yaXRlXCIsXHJcbiAgICAgICAgICAgIHNlc3Npb25JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbygoKSA9PiBzcGVha2VyTGlzdFxyXG4gICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICh7IHNhdCwgc3VuIH0pID0+IChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bilcclxuICAgICAgICApXHJcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KSwgW3NwZWFraW5nU2F0dXJkYXksIHNwZWFraW5nU3VuZGF5LCBzcGVha2VyTGlzdF0pXHJcblxyXG4gICAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZyA/IFtdIFxyXG4gICAgICAgIDogbmV3U3BhXHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hlY2tib3gtYmlnZ2VyJz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5saW5lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Zvcm0tY2hlY2stbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9J2Zvcm0tY2hlY2staW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+U3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1kZWNrJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbCBrZXk9e2lkfSBpZD17aWR9IGZhdm9yaXRlPXtmYXZvcml0ZX0gZmlyc3ROYW1lPXtmaXJzdE5hbWV9IGxhc3ROYW1lPXtsYXN0TmFtZX0gYmlvPXtiaW99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwiSGVhZGVyIiwiTWVudSIsIkNvbmZpZ0NvbnRleHQiLCJTcGVha2VyRGF0YSIsIlNwZWFrZXJEZXRhaWwiLCJTcGVha2VyIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5Iiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInNwZWFrZXJzUmVkdWNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRleHQiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiZmlsdGVyIiwic2F0Iiwic3VuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJuZXdTcGVha2VyTGlzdCIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJuZXdTcGEiLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJtYXAiLCJpZCIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});