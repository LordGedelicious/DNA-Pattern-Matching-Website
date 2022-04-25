(function() {
var exports = {};
exports.id = "pages/new-Dna";
exports.ids = ["pages/new-Dna"];
exports.modules = {

/***/ "./components/dnas/NewDnaForm.js":
/*!***************************************!*\
  !*** ./components/dnas/NewDnaForm.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewDnaForm.module.css */ "./components/dnas/NewDnaForm.module.css");
/* harmony import */ var _NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\dnas\\NewDnaForm.js";




function NewDnaForm(props) {
  const penyakitInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const dnasequenceInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  function submitHandler(event) {
    event.preventDefault();
    const enteredPenyakit = penyakitInputRef.current.value;
    const enteredSequence = dnasequenceInputRef.current.value;
    const dnaData = {
      penyakit: enteredPenyakit,
      sequence: enteredSequence
    };
    props.onAddDna(dnaData);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "penyakit",
          children: "Nama Penyakit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          required: true,
          id: "penyakit",
          ref: penyakitInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "dnasequence",
          children: "Sequence DNA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          required: true,
          id: "sequence",
          ref: dnasequenceInputRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NewDnaForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Add Input Sequence"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewDnaForm);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./pages/new-Dna.js":
/*!**************************!*\
  !*** ./pages/new-Dna.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dnas_NewDnaForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dnas/NewDnaForm */ "./components/dnas/NewDnaForm.js");

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\pages\\new-Dna.js";


function NewDnaPage() {
  function addDnaHandler(enteredDnaData) {
    console.log(enteredDnaData);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dnas_NewDnaForm__WEBPACK_IMPORTED_MODULE_1__.default, {
    onAddDna: addDnaHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewDnaPage);

/***/ }),

/***/ "./components/dnas/NewDnaForm.module.css":
/*!***********************************************!*\
  !*** ./components/dnas/NewDnaForm.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"form": "NewDnaForm_form__2xLgg",
	"control": "NewDnaForm_control__dCoLp",
	"actions": "NewDnaForm_actions__18AJF"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/new-Dna.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL05ld0RuYUZvcm0uanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vcGFnZXMvbmV3LURuYS5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL05ld0RuYUZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5ld0RuYUZvcm0iLCJwcm9wcyIsInBlbnlha2l0SW5wdXRSZWYiLCJ1c2VSZWYiLCJkbmFzZXF1ZW5jZUlucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkUGVueWFraXQiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkU2VxdWVuY2UiLCJkbmFEYXRhIiwicGVueWFraXQiLCJzZXF1ZW5jZSIsIm9uQWRkRG5hIiwiY2xhc3NlcyIsIkNhcmQiLCJjaGlsZHJlbiIsIk5ld0RuYVBhZ2UiLCJhZGREbmFIYW5kbGVyIiwiZW50ZXJlZERuYURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixRQUFNQyxnQkFBZ0IsR0FBR0MsNkNBQU0sRUFBL0I7QUFDQSxRQUFNQyxtQkFBbUIsR0FBR0QsNkNBQU0sRUFBbEM7O0FBRUEsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFVBQU1DLGVBQWUsR0FBR04sZ0JBQWdCLENBQUNPLE9BQWpCLENBQXlCQyxLQUFqRDtBQUNBLFVBQU1DLGVBQWUsR0FBR1AsbUJBQW1CLENBQUNLLE9BQXBCLENBQTRCQyxLQUFwRDtBQUVBLFVBQU1FLE9BQU8sR0FBRztBQUNkQyxjQUFRLEVBQUVMLGVBREk7QUFFZE0sY0FBUSxFQUFFSDtBQUZJLEtBQWhCO0FBS0FWLFNBQUssQ0FBQ2MsUUFBTixDQUFlSCxPQUFmO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsNkNBQUQ7QUFBQSwyQkFDRTtBQUFNLGVBQVMsRUFBRUksb0VBQWpCO0FBQStCLGNBQVEsRUFBRVgsYUFBekM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVXLHVFQUFoQjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxNQUEzQjtBQUE0QixZQUFFLEVBQUMsVUFBL0I7QUFBMEMsYUFBRyxFQUFFZDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFFYyx1RUFBaEI7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsTUFBM0I7QUFBNEIsWUFBRSxFQUFDLFVBQS9CO0FBQTBDLGFBQUcsRUFBRVo7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVNFO0FBQUssaUJBQVMsRUFBRVksdUVBQWhCO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztBQUVELCtEQUFlaEIsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7O0FBRUEsU0FBU2lCLElBQVQsQ0FBY2hCLEtBQWQsRUFBcUI7QUFDbkIsc0JBQU87QUFBSyxhQUFTLEVBQUVlLDhEQUFoQjtBQUFBLGNBQStCZixLQUFLLENBQUNpQjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZUQsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUdBLFNBQVNFLFVBQVQsR0FBc0I7QUFDbEIsV0FBU0MsYUFBVCxDQUF3QkMsY0FBeEIsRUFBd0M7QUFFcENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFaO0FBQ0g7O0FBRUQsc0JBQU8sOERBQUMsZ0VBQUQ7QUFBWSxZQUFRLEVBQUlEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUVELCtEQUFlRCxVQUFmLEU7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL25ldy1EbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9OZXdEbmFGb3JtLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gTmV3RG5hRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHBlbnlha2l0SW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBkbmFzZXF1ZW5jZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZFBlbnlha2l0ID0gcGVueWFraXRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFNlcXVlbmNlID0gZG5hc2VxdWVuY2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGRuYURhdGEgPSB7XHJcbiAgICAgIHBlbnlha2l0OiBlbnRlcmVkUGVueWFraXQsXHJcbiAgICAgIHNlcXVlbmNlOiBlbnRlcmVkU2VxdWVuY2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHByb3BzLm9uQWRkRG5hKGRuYURhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Blbnlha2l0Jz5OYW1hIFBlbnlha2l0PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0ncGVueWFraXQnIHJlZj17cGVueWFraXRJbnB1dFJlZn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkbmFzZXF1ZW5jZSc+U2VxdWVuY2UgRE5BPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyByZXF1aXJlZCBpZD0nc2VxdWVuY2UnIHJlZj17ZG5hc2VxdWVuY2VJbnB1dFJlZn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgIDxidXR0b24+QWRkIElucHV0IFNlcXVlbmNlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdEbmFGb3JtO1xyXG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBOZXdEbmFGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvZG5hcy9OZXdEbmFGb3JtJztcclxuXHJcblxyXG5mdW5jdGlvbiBOZXdEbmFQYWdlKCkge1xyXG4gICAgZnVuY3Rpb24gYWRkRG5hSGFuZGxlciggZW50ZXJlZERuYURhdGEpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZW50ZXJlZERuYURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8TmV3RG5hRm9ybSBvbkFkZERuYSA9IHthZGREbmFIYW5kbGVyfS8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0RuYVBhZ2U7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcIk5ld0RuYUZvcm1fZm9ybV9fMnhMZ2dcIixcblx0XCJjb250cm9sXCI6IFwiTmV3RG5hRm9ybV9jb250cm9sX19kQ29McFwiLFxuXHRcImFjdGlvbnNcIjogXCJOZXdEbmFGb3JtX2FjdGlvbnNfXzE4QUpGXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX18zS1NMT1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==