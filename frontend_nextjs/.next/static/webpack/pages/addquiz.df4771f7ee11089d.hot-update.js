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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AddQ.module.css */ \"./styles/AddQ.module.css\");\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddQuestions() {\n    var add = function add() {\n        var new_chq_no = parseInt($(\"#total_chq\").val()) + 1;\n        var new_input = \"<input type='text' id='new_\" + new_chq_no + \"'>\";\n        \"#new_chq\".append(new_input);\n        \"#total_chq\".val(new_chq_no);\n    };\n    var remove = function remove() {\n        var last_chq_no = $(\"#total_chq\").val();\n        if (last_chq_no > 1) {\n            (\"#new_\" + last_chq_no).remove();\n            \"#total_chq\".val(last_chq_no - 1);\n        }\n    };\n    // add questions function\n    // const addFields = () => {\n    //     console.log('test');\n    //     var number = document.getElementById(\"questions\").value;\n    //     var form = document.getElementById(\"form\");\n    //     var addButton = document.getElementById(\"button\");\n    //     var subButton = document.getElementById(\"submit\");\n    //     while (form.hasChildNodes()) {\n    //         form.removeChild(form.lastChild);\n    //     }\n    //     for (let i = 0; i < number; i++){\n    //         form.appendChild(document.createTextNode(\"Question: \" + (i+1) + \"    \"));\n    //         var input = document.createElement(\"input\");\n    //         input.type = \"text\";\n    //         form.appendChild(document.createElement(\"br\"));\n    //         form.appendChild(input);\n    //         form.appendChild(document.createElement(\"br\"));\n    //     }\n    // };\n    (\".add\").on(\"click\", add);\n    \".remove\".on(\"click\", remove);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default().addq),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Number of Questions:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"questions\",\n                name: \"questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"add\",\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"remove\",\n                children: \"remove\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"new_chq\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"hidden\",\n                value: \"1\",\n                id: \"total_chq\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_c = AddQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestions);\nvar _c;\n$RefreshReg$(_c, \"AddQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFF1ZXN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXNEO0FBRXRELFNBQVNDLFlBQVksR0FBRTtRQTJCVkMsR0FBRyxHQUFaLFNBQVNBLEdBQUcsR0FBRztRQUNmLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNwRCxJQUFJQyxTQUFTLEdBQUcsNkJBQTZCLEdBQUdKLFVBQVUsR0FBRyxJQUFJO1FBRWhFLFVBQVUsQ0FBRUssTUFBTSxDQUFDRCxTQUFTLENBQUMsQ0FBQztRQUU5QixZQUFZLENBQUVELEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztRQUVRTSxNQUFNLEdBQWYsU0FBU0EsTUFBTSxHQUFHO1FBQ2xCLElBQUlDLFdBQVcsR0FBR0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxHQUFHLEVBQUU7UUFFdkMsSUFBSUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQixDQUFDLE9BQU8sR0FBR0EsV0FBVyxDQUFDLENBQUNELE1BQU0sRUFBRSxDQUFDO1lBQ2hDLFlBQVksQ0FBRUgsR0FBRyxDQUFDSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNELENBQUM7SUExQ0QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFFM0IsK0RBQStEO0lBQy9ELGtEQUFrRDtJQUNsRCx5REFBeUQ7SUFDekQseURBQXlEO0lBRXpELHFDQUFxQztJQUNyQyw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxvRkFBb0Y7SUFDcEYsdURBQXVEO0lBQ3ZELCtCQUErQjtJQUMvQiwwREFBMEQ7SUFDMUQsbUNBQW1DO0lBQ25DLDBEQUEwRDtJQUMxRCxRQUFRO0lBRVIsS0FBSztJQUVMLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUVULEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLFNBQVMsQ0FBRVMsRUFBRSxDQUFDLE9BQU8sRUFBRUYsTUFBTSxDQUFDLENBQUM7SUFxQmhDLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRWIscUVBQW1COzswQkFDL0IsOERBQUNlLElBQUU7MEJBQUMsc0JBQW9COzs7OztvQkFBSzswQkFDN0IsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxFQUFFLEVBQUMsV0FBVztnQkFBQ0MsSUFBSSxFQUFDLFdBQVc7Ozs7O29CQUFHOzBCQVFyRCw4REFBQ0gsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Ozs7O29CQUFHOzBCQUNyQiw4REFBQ0csUUFBTTtnQkFBQ0MsS0FBSyxFQUFDLEtBQUs7MEJBQUMsS0FBRzs7Ozs7b0JBQVM7MEJBQ2hDLDhEQUFDRCxRQUFNO2dCQUFDQyxLQUFLLEVBQUMsUUFBUTswQkFBQyxRQUFNOzs7OztvQkFBUzswQkFDdEMsOERBQUNULEtBQUc7Z0JBQUNNLEVBQUUsRUFBQyxTQUFTOzs7OztvQkFBTzswQkFDeEIsOERBQUNGLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDSyxLQUFLLEVBQUMsR0FBRztnQkFBQ0osRUFBRSxFQUFDLFdBQVc7Ozs7O29CQUFTOzs7Ozs7WUFTcEQsQ0FDVDtBQUNMLENBQUM7QUF4RVFqQixLQUFBQSxZQUFZO0FBMEVyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkUXVlc3Rpb25zLmpzP2I4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXN0aW9uU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9BZGRRLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBBZGRRdWVzdGlvbnMoKXtcclxuICAgIC8vIGFkZCBxdWVzdGlvbnMgZnVuY3Rpb25cclxuICAgIC8vIGNvbnN0IGFkZEZpZWxkcyA9ICgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgIC8vICAgICB2YXIgbnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbnNcIikudmFsdWU7XHJcbiAgICAvLyAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XHJcbiAgICAvLyAgICAgdmFyIGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpO1xyXG4gICAgLy8gICAgIHZhciBzdWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcclxuXHJcbiAgICAvLyAgICAgd2hpbGUgKGZvcm0uaGFzQ2hpbGROb2RlcygpKSB7XHJcbiAgICAvLyAgICAgICAgIGZvcm0ucmVtb3ZlQ2hpbGQoZm9ybS5sYXN0Q2hpbGQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKXtcclxuICAgIC8vICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlF1ZXN0aW9uOiBcIiArIChpKzEpICsgXCIgICAgXCIpKTtcclxuICAgIC8vICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgLy8gICAgICAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAvLyAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgIC8vICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAvLyAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAoJy5hZGQnKS5vbignY2xpY2snLCBhZGQpO1xyXG4gICAgKCcucmVtb3ZlJykub24oJ2NsaWNrJywgcmVtb3ZlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoKSB7XHJcbiAgICB2YXIgbmV3X2NocV9ubyA9IHBhcnNlSW50KCQoJyN0b3RhbF9jaHEnKS52YWwoKSkgKyAxO1xyXG4gICAgdmFyIG5ld19pbnB1dCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdfXCIgKyBuZXdfY2hxX25vICsgXCInPlwiO1xyXG5cclxuICAgICgnI25ld19jaHEnKS5hcHBlbmQobmV3X2lucHV0KTtcclxuXHJcbiAgICAoJyN0b3RhbF9jaHEnKS52YWwobmV3X2NocV9ubyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgdmFyIGxhc3RfY2hxX25vID0gJCgnI3RvdGFsX2NocScpLnZhbCgpO1xyXG5cclxuICAgIGlmIChsYXN0X2NocV9ubyA+IDEpIHtcclxuICAgICAgICAoJyNuZXdfJyArIGxhc3RfY2hxX25vKS5yZW1vdmUoKTtcclxuICAgICAgICAoJyN0b3RhbF9jaHEnKS52YWwobGFzdF9jaHFfbm8gLSAxKTtcclxuICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtxdWVzdGlvblN0eWxlcy5hZGRxfT5cclxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiBRdWVzdGlvbnM6PC9oND5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdxdWVzdGlvbnMnIG5hbWU9J3F1ZXN0aW9ucycgLz5cclxuICAgICAgICAgICAgey8qIDxmb3JtIGlkPSdmb3JtJz5cclxuICAgICAgICAgICAgICAgIDxoND5RdWVzdGlvbiAxOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoND5BbnN3ZXIgMTogPC9oND5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT4gKi99XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5yZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5ld19jaHFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIjFcIiBpZD1cInRvdGFsX2NocVwiPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJmb3JtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPScjJyBpZD0nYWRkQnV0dG9uJyBjbGFzc05hbWU9XCJidXR0b24tMTdcIiBvbkNsaWNrPXthZGRGaWVsZHN9PkFkZCBRdWVzdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1N1Ym1pdCcgaWQ9J3N1YkJ1dHRvbicgY2xhc3NOYW1lPVwiYnV0dG9uLTE3XCIgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRRdWVzdGlvbnM7Il0sIm5hbWVzIjpbInF1ZXN0aW9uU3R5bGVzIiwiQWRkUXVlc3Rpb25zIiwiYWRkIiwibmV3X2NocV9ubyIsInBhcnNlSW50IiwiJCIsInZhbCIsIm5ld19pbnB1dCIsImFwcGVuZCIsInJlbW92ZSIsImxhc3RfY2hxX25vIiwib24iLCJkaXYiLCJjbGFzc05hbWUiLCJhZGRxIiwiaDQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJidXR0b24iLCJjbGFzcyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddQuestions.js\n"));

/***/ })

});