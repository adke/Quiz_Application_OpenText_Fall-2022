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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AddQ.module.css */ \"./styles/AddQ.module.css\");\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddQuestions() {\n    // add questions function\n    var addFields = function() {\n        console.log(\"test\");\n        var number = document.getElementById(\"questions\").value;\n        var form = document.getElementById(\"form\");\n        var addButton = document.getElementById(\"button\");\n        var subButton = document.getElementById(\"submit\");\n        while(form.hasChildNodes()){\n            form.removeChild(form.lastChild);\n        }\n        for(var i = 0; i < number; i++){\n            form.appendChild(document.createTextNode(\"Question \" + (i + 1) + \":    \"));\n            var input = document.createElement(\"input\");\n            input.type = \"text\";\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(input);\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(document.createTextNode(\"Answer \" + (i + 1) + \":    \"));\n            var input = document.createElement(\"input\");\n            input.type = \"text\";\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(input);\n            form.appendChild(document.createElement(\"br\"));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default().addq),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Number of Questions:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"noq\",\n                type: \"text\",\n                id: \"questions\",\n                name: \"questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"form\",\n                required: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        href: \"#\",\n                        id: \"addButton\",\n                        className: \"button-17\",\n                        onClick: addFields,\n                        children: \"Add Questions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        id: \"subButton\",\n                        className: \"button-17\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_c = AddQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestions);\nvar _c;\n$RefreshReg$(_c, \"AddQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7NEJBQVM7a0NBQ2hHLDhEQUFDOEIsTUFBSTs7Ozs0QkFBRztrQ0FDUiw4REFBQ0gsUUFBTTt3QkFBQ1QsSUFBSSxFQUFDLFFBQVE7d0JBQUNaLEtBQUssRUFBQyxRQUFRO3dCQUFDaUIsRUFBRSxFQUFDLFdBQVc7d0JBQUNILFNBQVMsRUFBQyxXQUFXO2tDQUFFLFFBQU07Ozs7OzRCQUFTOzs7Ozs7b0JBRXZGOzs7Ozs7WUFFTCxDQUNUO0FBQ0wsQ0FBQztBQWpEUXJCLEtBQUFBLFlBQVk7QUFtRHJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRRdWVzdGlvbnMuanM/YjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlc3Rpb25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FkZFEubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gQWRkUXVlc3Rpb25zKCl7XHJcbiAgICAvLyBhZGQgcXVlc3Rpb25zIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBhZGRGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgdmFyIG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xyXG4gICAgICAgIHZhciBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvblwiKTtcclxuICAgICAgICB2YXIgc3ViQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XHJcblxyXG4gICAgICAgIHdoaWxlIChmb3JtLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICBmb3JtLnJlbW92ZUNoaWxkKGZvcm0ubGFzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKyl7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJRdWVzdGlvbiBcIiArIChpKzEpICsgXCI6ICAgIFwiKSk7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkFuc3dlciBcIiArIChpKzEpICsgXCI6ICAgIFwiKSk7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG5cclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3F1ZXN0aW9uU3R5bGVzLmFkZHF9PlxyXG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIFF1ZXN0aW9uczo8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdub3EnIHR5cGU9J3RleHQnIGlkPSdxdWVzdGlvbnMnIG5hbWU9J3F1ZXN0aW9ucycgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGhyZWY9JyMnIGlkPSdhZGRCdXR0b24nIGNsYXNzTmFtZT1cImJ1dHRvbi0xN1wiIG9uQ2xpY2s9e2FkZEZpZWxkc30+QWRkIFF1ZXN0aW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0JyBpZD0nc3ViQnV0dG9uJyBjbGFzc05hbWU9XCJidXR0b24tMTdcIiA+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUXVlc3Rpb25zOyJdLCJuYW1lcyI6WyJxdWVzdGlvblN0eWxlcyIsIkFkZFF1ZXN0aW9ucyIsImFkZEZpZWxkcyIsImNvbnNvbGUiLCJsb2ciLCJudW1iZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJmb3JtIiwiYWRkQnV0dG9uIiwic3ViQnV0dG9uIiwiaGFzQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiaSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJpbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWRkcSIsImg0IiwiaWQiLCJuYW1lIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiIsImhyZWYiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddQuestions.js\n"));

/***/ })

});