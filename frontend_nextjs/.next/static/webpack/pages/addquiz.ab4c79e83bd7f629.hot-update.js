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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AddQ.module.css */ \"./styles/AddQ.module.css\");\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddQuestions() {\n    var addFields = function() {\n        console.log(\"test\");\n        var number = document.getElementById(\"questions\").value;\n        var container = document.getElementById(\"container\");\n        while(form.hasChildNodes()){\n            form.removeChild(form.lastChild);\n        }\n        for(var i = 0; i < number; i++){\n            form.appendChild(document.createTextNode(\"Question: \" + (i + 1) + \"    \"));\n            var input = document.createElement(\"input\");\n            input.type = \"text\";\n            form.appendChild(document.createElement(\"br\"));\n            form.appendChild(input);\n            form.appendChild(document.createElement(\"br\"));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default().addq),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Number of Questions:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"questions\",\n                name: \"questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"form\",\n                required: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        href: \"#\",\n                        id: \"button\",\n                        className: \"button-17\",\n                        onClick: addFields,\n                        children: \"Add Questions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        value: \"Submit\",\n                        id: \"submit\",\n                        className: \"button-17\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = AddQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestions);\nvar _c;\n$RefreshReg$(_c, \"AddQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFF1ZXN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXNEO0FBRXRELFNBQVNDLFlBQVksR0FBRTtJQUNuQixJQUFNQyxTQUFTLEdBQUcsV0FBTTtRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEIsSUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsS0FBSztRQUN2RCxJQUFJQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUNwRCxNQUFPRyxJQUFJLENBQUNDLGFBQWEsRUFBRSxDQUFFO1lBQ3pCRCxJQUFJLENBQUNFLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdULE1BQU0sRUFBRVMsQ0FBQyxFQUFFLENBQUM7WUFDNUJKLElBQUksQ0FBQ0ssV0FBVyxDQUFDVCxRQUFRLENBQUNVLGNBQWMsQ0FBQyxZQUFZLEdBQUcsQ0FBQ0YsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSUcsS0FBSyxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDM0NELEtBQUssQ0FBQ0UsSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNwQlQsSUFBSSxDQUFDSyxXQUFXLENBQUNULFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDL0NSLElBQUksQ0FBQ0ssV0FBVyxDQUFDRSxLQUFLLENBQUMsQ0FBQztZQUN4QlAsSUFBSSxDQUFDSyxXQUFXLENBQUNULFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztJQUVMLENBQUM7SUFDRCxxQkFDSSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUVyQixxRUFBbUI7OzBCQUMvQiw4REFBQ3VCLElBQUU7MEJBQUMsc0JBQW9COzs7OztvQkFBSzswQkFDN0IsOERBQUNOLE9BQUs7Z0JBQUNFLElBQUksRUFBQyxNQUFNO2dCQUFDSyxFQUFFLEVBQUMsV0FBVztnQkFBQ0MsSUFBSSxFQUFDLFdBQVc7Ozs7O29CQUFHOzBCQU9yRCw4REFBQ2YsTUFBSTtnQkFBQ2MsRUFBRSxFQUFDLE1BQU07Z0JBQUNFLFFBQVE7O2tDQUVwQiw4REFBQ0MsSUFBRTs7Ozs0QkFBRztrQ0FDTiw4REFBQ0MsUUFBTTt3QkFBQ0MsSUFBSSxFQUFDLEdBQUc7d0JBQUNMLEVBQUUsRUFBQyxRQUFRO3dCQUFDSCxTQUFTLEVBQUMsV0FBVzt3QkFBQ1MsT0FBTyxFQUFFNUIsU0FBUztrQ0FBRSxlQUFhOzs7Ozs0QkFBUztrQ0FDN0YsOERBQUM2QixNQUFJOzs7OzRCQUFHO2tDQUNSLDhEQUFDSCxRQUFNO3dCQUFDVCxJQUFJLEVBQUMsUUFBUTt3QkFBQ1gsS0FBSyxFQUFDLFFBQVE7d0JBQUNnQixFQUFFLEVBQUMsUUFBUTt3QkFBQ0gsU0FBUyxFQUFDLFdBQVc7a0NBQUUsUUFBTTs7Ozs7NEJBQVM7Ozs7OztvQkFDcEY7Ozs7OztZQUNMLENBQ1Q7QUFDTCxDQUFDO0FBdENRcEIsS0FBQUEsWUFBWTtBQXdDckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FkZFF1ZXN0aW9ucy5qcz9iOGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVzdGlvblN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQWRkUS5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gQWRkUXVlc3Rpb25zKCl7XHJcbiAgICBjb25zdCBhZGRGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuXHJcbiAgICAgICAgdmFyIG51bWJlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zXCIpLnZhbHVlO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcclxuICAgICAgICB3aGlsZSAoZm9ybS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspe1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUXVlc3Rpb246IFwiICsgKGkrMSkgKyBcIiAgICBcIikpO1xyXG4gICAgICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH07XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3F1ZXN0aW9uU3R5bGVzLmFkZHF9PlxyXG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIFF1ZXN0aW9uczo8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3F1ZXN0aW9ucycgbmFtZT0ncXVlc3Rpb25zJyAvPlxyXG4gICAgICAgICAgICB7LyogPGZvcm0gaWQ9J2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgPGg0PlF1ZXN0aW9uIDE6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg0PkFuc3dlciAxOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPiAqL31cclxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJmb3JtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPScjJyBpZD0nYnV0dG9uJyBjbGFzc05hbWU9XCJidXR0b24tMTdcIiBvbkNsaWNrPXthZGRGaWVsZHN9PkFkZCBRdWVzdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1N1Ym1pdCcgaWQ9J3N1Ym1pdCcgY2xhc3NOYW1lPVwiYnV0dG9uLTE3XCIgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFF1ZXN0aW9uczsiXSwibmFtZXMiOlsicXVlc3Rpb25TdHlsZXMiLCJBZGRRdWVzdGlvbnMiLCJhZGRGaWVsZHMiLCJjb25zb2xlIiwibG9nIiwibnVtYmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiY29udGFpbmVyIiwiZm9ybSIsImhhc0NoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaW5wdXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImFkZHEiLCJoNCIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwiYnIiLCJidXR0b24iLCJocmVmIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AddQuestions.js\n"));

/***/ })

});