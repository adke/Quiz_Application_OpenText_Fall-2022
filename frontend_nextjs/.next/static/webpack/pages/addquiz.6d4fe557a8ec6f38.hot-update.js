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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/AddQ.module.css */ \"./styles/AddQ.module.css\");\n/* harmony import */ var _styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AddQuestions() {\n    var add = function add() {\n        var new_chq_no = parseInt($(\"#total_chq\").val()) + 1;\n        var new_input = \"<input type='text' id='new_\" + new_chq_no + \"'>\";\n        \"#new_chq\".append(new_input);\n        \"#total_chq\".val(new_chq_no);\n    };\n    var remove = function remove() {\n        var last_chq_no = $(\"#total_chq\").val();\n        if (last_chq_no > 1) {\n            (\"#new_\" + last_chq_no).remove();\n            \"#total_chq\".val(last_chq_no - 1);\n        }\n    };\n    // add questions function\n    // const addFields = () => {\n    //     console.log('test');\n    //     var number = document.getElementById(\"questions\").value;\n    //     var form = document.getElementById(\"form\");\n    //     var addButton = document.getElementById(\"button\");\n    //     var subButton = document.getElementById(\"submit\");\n    //     while (form.hasChildNodes()) {\n    //         form.removeChild(form.lastChild);\n    //     }\n    //     for (let i = 0; i < number; i++){\n    //         form.appendChild(document.createTextNode(\"Question: \" + (i+1) + \"    \"));\n    //         var input = document.createElement(\"input\");\n    //         input.type = \"text\";\n    //         form.appendChild(document.createElement(\"br\"));\n    //         form.appendChild(input);\n    //         form.appendChild(document.createElement(\"br\"));\n    //     }\n    // };\n    (\".add\").on(\"click\", add);\n    \".remove\".on(\"click\", remove);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddQ_module_css__WEBPACK_IMPORTED_MODULE_1___default().addq),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Number of Questions:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"questions\",\n                name: \"questions\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"add\",\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"remove\",\n                children: \"remove\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"new_chq\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"hidden\",\n                value: \"1\",\n                id: \"total_chq\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gdiniz\\\\Desktop\\\\Code\\\\Quiz_Application_OpenText_Fall-2022\\\\frontend_nextjs\\\\components\\\\AddQuestions.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_c = AddQuestions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddQuestions);\nvar _c;\n$RefreshReg$(_c, \"AddQuestions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZFF1ZXN0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQXNEO0FBRXRELFNBQVNDLFlBQVksR0FBRTtRQTJCVkMsR0FBRyxHQUFaLFNBQVNBLEdBQUcsR0FBRztRQUNmLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNwRCxJQUFJQyxTQUFTLEdBQUcsNkJBQTZCLEdBQUdKLFVBQVUsR0FBRyxJQUFJO1FBRWhFLFVBQVUsQ0FBRUssTUFBTSxDQUFDRCxTQUFTLENBQUMsQ0FBQztRQUU5QixZQUFZLENBQUVELEdBQUcsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztRQUVRTSxNQUFNLEdBQWYsU0FBU0EsTUFBTSxHQUFHO1FBQ2xCLElBQUlDLFdBQVcsR0FBR0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDQyxHQUFHLEVBQUU7UUFFdkMsSUFBSUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQixDQUFDLE9BQU8sR0FBR0EsV0FBVyxDQUFDLENBQUNELE1BQU0sRUFBRSxDQUFDO1lBQ2hDLFlBQVksQ0FBRUgsR0FBRyxDQUFDSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNELENBQUM7SUExQ0QseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFFM0IsK0RBQStEO0lBQy9ELGtEQUFrRDtJQUNsRCx5REFBeUQ7SUFDekQseURBQXlEO0lBRXpELHFDQUFxQztJQUNyQyw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxvRkFBb0Y7SUFDcEYsdURBQXVEO0lBQ3ZELCtCQUErQjtJQUMvQiwwREFBMEQ7SUFDMUQsbUNBQW1DO0lBQ25DLDBEQUEwRDtJQUMxRCxRQUFRO0lBRVIsS0FBSztJQUVMLENBQUMsTUFBTSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUVULEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLFNBQVMsQ0FBRVMsRUFBRSxDQUFDLE9BQU8sRUFBRUYsTUFBTSxDQUFDLENBQUM7SUFxQmhDLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBRWIscUVBQW1COzswQkFDL0IsOERBQUNlLElBQUU7MEJBQUMsc0JBQW9COzs7OztvQkFBSzswQkFDN0IsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxFQUFFLEVBQUMsV0FBVztnQkFBQ0MsSUFBSSxFQUFDLFdBQVc7Ozs7O29CQUFHOzBCQU9yRCw4REFBQ0MsUUFBTTtnQkFBQ0MsR0FBRyxFQUFDLGtFQUFrRTs7Ozs7b0JBQVU7MEJBRXhGLDhEQUFDTCxPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTs7Ozs7b0JBQUc7MEJBQ3JCLDhEQUFDSyxRQUFNO2dCQUFDQyxLQUFLLEVBQUMsS0FBSzswQkFBQyxLQUFHOzs7OztvQkFBUzswQkFDaEMsOERBQUNELFFBQU07Z0JBQUNDLEtBQUssRUFBQyxRQUFROzBCQUFDLFFBQU07Ozs7O29CQUFTOzBCQUN0Qyw4REFBQ1gsS0FBRztnQkFBQ00sRUFBRSxFQUFDLFNBQVM7Ozs7O29CQUFPOzBCQUN4Qiw4REFBQ0YsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUNPLEtBQUssRUFBQyxHQUFHO2dCQUFDTixFQUFFLEVBQUMsV0FBVzs7Ozs7b0JBQVM7Ozs7OztZQVNwRCxDQUNUO0FBQ0wsQ0FBQztBQXpFUWpCLEtBQUFBLFlBQVk7QUEyRXJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRRdWVzdGlvbnMuanM/YjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVlc3Rpb25TdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FkZFEubW9kdWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIEFkZFF1ZXN0aW9ucygpe1xyXG4gICAgLy8gYWRkIHF1ZXN0aW9ucyBmdW5jdGlvblxyXG4gICAgLy8gY29uc3QgYWRkRmllbGRzID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcblxyXG4gICAgLy8gICAgIHZhciBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uc1wiKS52YWx1ZTtcclxuICAgIC8vICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuICAgIC8vICAgICB2YXIgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b25cIik7XHJcbiAgICAvLyAgICAgdmFyIHN1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xyXG5cclxuICAgIC8vICAgICB3aGlsZSAoZm9ybS5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgIC8vICAgICAgICAgZm9ybS5yZW1vdmVDaGlsZChmb3JtLmxhc3RDaGlsZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspe1xyXG4gICAgLy8gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUXVlc3Rpb246IFwiICsgKGkrMSkgKyBcIiAgICBcIikpO1xyXG4gICAgLy8gICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAvLyAgICAgICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIC8vICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgLy8gICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIC8vICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyB9O1xyXG5cclxuICAgICgnLmFkZCcpLm9uKCdjbGljaycsIGFkZCk7XHJcbiAgICAoJy5yZW1vdmUnKS5vbignY2xpY2snLCByZW1vdmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZCgpIHtcclxuICAgIHZhciBuZXdfY2hxX25vID0gcGFyc2VJbnQoJCgnI3RvdGFsX2NocScpLnZhbCgpKSArIDE7XHJcbiAgICB2YXIgbmV3X2lucHV0ID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld19cIiArIG5ld19jaHFfbm8gKyBcIic+XCI7XHJcblxyXG4gICAgKCcjbmV3X2NocScpLmFwcGVuZChuZXdfaW5wdXQpO1xyXG5cclxuICAgICgnI3RvdGFsX2NocScpLnZhbChuZXdfY2hxX25vKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICB2YXIgbGFzdF9jaHFfbm8gPSAkKCcjdG90YWxfY2hxJykudmFsKCk7XHJcblxyXG4gICAgaWYgKGxhc3RfY2hxX25vID4gMSkge1xyXG4gICAgICAgICgnI25ld18nICsgbGFzdF9jaHFfbm8pLnJlbW92ZSgpO1xyXG4gICAgICAgICgnI3RvdGFsX2NocScpLnZhbChsYXN0X2NocV9ubyAtIDEpO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3F1ZXN0aW9uU3R5bGVzLmFkZHF9PlxyXG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIFF1ZXN0aW9uczo8L2g0PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3F1ZXN0aW9ucycgbmFtZT0ncXVlc3Rpb25zJyAvPlxyXG4gICAgICAgICAgICB7LyogPGZvcm0gaWQ9J2Zvcm0nPlxyXG4gICAgICAgICAgICAgICAgPGg0PlF1ZXN0aW9uIDE6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg0PkFuc3dlciAxOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPiAqL31cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8yLjEuMS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5yZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIm5ld19jaHFcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIjFcIiBpZD1cInRvdGFsX2NocVwiPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICB7LyogPGZvcm0gaWQ9XCJmb3JtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBocmVmPScjJyBpZD0nYWRkQnV0dG9uJyBjbGFzc05hbWU9XCJidXR0b24tMTdcIiBvbkNsaWNrPXthZGRGaWVsZHN9PkFkZCBRdWVzdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1N1Ym1pdCcgaWQ9J3N1YkJ1dHRvbicgY2xhc3NOYW1lPVwiYnV0dG9uLTE3XCIgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRRdWVzdGlvbnM7Il0sIm5hbWVzIjpbInF1ZXN0aW9uU3R5bGVzIiwiQWRkUXVlc3Rpb25zIiwiYWRkIiwibmV3X2NocV9ubyIsInBhcnNlSW50IiwiJCIsInZhbCIsIm5ld19pbnB1dCIsImFwcGVuZCIsInJlbW92ZSIsImxhc3RfY2hxX25vIiwib24iLCJkaXYiLCJjbGFzc05hbWUiLCJhZGRxIiwiaDQiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJzY3JpcHQiLCJzcmMiLCJidXR0b24iLCJjbGFzcyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AddQuestions.js\n"));

/***/ })

});