"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addquiz",{

/***/ "./components/AddQuestions.js":
/*!************************************!*\
  !*** ./components/AddQuestions.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AddQ.module.css */ \"./styles/AddQ.module.css\");\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddQuestions() {\n    // add questions function\n    var addFields = function() {\n        console.log(\"test\");\n        var number = document.getElementById(\"questions\").value;\n        var form = document.getElementById(\"form\");\n        var addButton = document.getElementById(\"button\");\n        var subButton = document.getElementById(\"submit\");\n        while(form.hasChildNodes()){\n            form.removeChild(form.lastChild);\n        }\n        for(var i = 0; i < number; i++){\n            form.appendChild(document.createTextNode(\"Question \" + (i + 1) + \":    \"));\n            var input = document.createElement(\"input\");\n            input.type = \"text\";\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(input);\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(document.createTextNode(\"Answer \" + (i + 1) + \":    \"));\n            var input = document.createElement(\"input\");\n            input.type = \"text\";\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(input);\n            form.appendChild(document.createElement(\"br\"));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default().addq),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Number of Questions:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"noq\",\n                type: \"text\",\n                id: \"questions\",\n                name: \"questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"form\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                href: \"#\",\n                id: \"addButton\",\n                className: \"button-17\",\n                onClick: addFields,\n                children: \"Add Questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                value: \"Submit\",\n                id: \"subButton\",\n                className: \"button-17\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_c = AddQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestions);\nvar _c;\n$RefreshReg$(_c, \"AddQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsZUFBYTs7Ozs7b0JBQVM7MEJBQ2hHLDhEQUFDOEIsTUFBSTs7OztvQkFBRzswQkFDUiw4REFBQ0gsUUFBTTtnQkFBQ1QsSUFBSSxFQUFDLFFBQVE7Z0JBQUNaLEtBQUssRUFBQyxRQUFRO2dCQUFDaUIsRUFBRSxFQUFDLFdBQVc7Z0JBQUNILFNBQVMsRUFBQyxXQUFXOzBCQUFFLFFBQU07Ozs7O29CQUFTOzs7Ozs7WUFDNUYsQ0FDVDtBQUNMLENBQUM7QUFqRFFyQixLQUFBQSxZQUFZO0FBbURyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkUXVlc3Rpb25zLmpzP2I4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXN0aW9uU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BZGRRLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFkZFF1ZXN0aW9ucygpe1xyXG4gICAgLy8gYWRkIHF1ZXN0aW9ucyBmdW5jdGlvblxyXG4gICAgY29uc3QgYWRkRmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG4gICAgICAgIHZhciBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uc1wiKS52YWx1ZTtcclxuICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgICAgICB2YXIgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdmFyIHN1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xyXG5cclxuICAgICAgICB3aGlsZSAoZm9ybS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspe1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUXVlc3Rpb24gXCIgKyAoaSsxKSArIFwiOiAgICBcIikpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJBbnN3ZXIgXCIgKyAoaSsxKSArIFwiOiAgICBcIikpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxdWVzdGlvblN0eWxlcy5hZGRxfT5cclxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiBRdWVzdGlvbnM6PC9oND5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbm9xJyB0eXBlPSd0ZXh0JyBpZD0ncXVlc3Rpb25zJyBuYW1lPSdxdWVzdGlvbnMnIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9JyMnIGlkPSdhZGRCdXR0b24nIGNsYXNzTmFtZT1cImJ1dHRvbi0xN1wiIG9uQ2xpY2s9e2FkZEZpZWxkc30+QWRkIFF1ZXN0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0JyBpZD0nc3ViQnV0dG9uJyBjbGFzc05hbWU9XCJidXR0b24tMTdcIiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFF1ZXN0aW9uczsiXSwibmFtZXMiOlsicXVlc3Rpb25TdHlsZXMiLCJBZGRRdWVzdGlvbnMiLCJhZGRGaWVsZHMiLCJjb25zb2xlIiwibG9nIiwibnVtYmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZm9ybSIsImFkZEJ1dHRvbiIsInN1YkJ1dHRvbiIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImFkZHEiLCJoNCIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwiYnIiLCJidXR0b24iLCJocmVmIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddQuestions.js\n"));

/***/ })

});