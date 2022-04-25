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
    props.onAddMeetup(dnaData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL05ld0RuYUZvcm0uanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vcGFnZXMvbmV3LURuYS5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL05ld0RuYUZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk5ld0RuYUZvcm0iLCJwcm9wcyIsInBlbnlha2l0SW5wdXRSZWYiLCJ1c2VSZWYiLCJkbmFzZXF1ZW5jZUlucHV0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbnRlcmVkUGVueWFraXQiLCJjdXJyZW50IiwidmFsdWUiLCJlbnRlcmVkU2VxdWVuY2UiLCJkbmFEYXRhIiwicGVueWFraXQiLCJzZXF1ZW5jZSIsIm9uQWRkTWVldHVwIiwiY2xhc3NlcyIsIkNhcmQiLCJjaGlsZHJlbiIsIk5ld0RuYVBhZ2UiLCJhZGREbmFIYW5kbGVyIiwiZW50ZXJlZERuYURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN6QixRQUFNQyxnQkFBZ0IsR0FBR0MsNkNBQU0sRUFBL0I7QUFDQSxRQUFNQyxtQkFBbUIsR0FBR0QsNkNBQU0sRUFBbEM7O0FBRUEsV0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBLFVBQU1DLGVBQWUsR0FBR04sZ0JBQWdCLENBQUNPLE9BQWpCLENBQXlCQyxLQUFqRDtBQUNBLFVBQU1DLGVBQWUsR0FBR1AsbUJBQW1CLENBQUNLLE9BQXBCLENBQTRCQyxLQUFwRDtBQUVBLFVBQU1FLE9BQU8sR0FBRztBQUNkQyxjQUFRLEVBQUVMLGVBREk7QUFFZE0sY0FBUSxFQUFFSDtBQUZJLEtBQWhCO0FBS0FWLFNBQUssQ0FBQ2MsV0FBTixDQUFrQkgsT0FBbEI7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNFO0FBQU0sZUFBUyxFQUFFSSxvRUFBakI7QUFBK0IsY0FBUSxFQUFFWCxhQUF6QztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRVcsdUVBQWhCO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLE1BQTNCO0FBQTRCLFlBQUUsRUFBQyxVQUEvQjtBQUEwQyxhQUFHLEVBQUVkO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUVjLHVFQUFoQjtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxNQUEzQjtBQUE0QixZQUFFLEVBQUMsVUFBL0I7QUFBMEMsYUFBRyxFQUFFWjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFFWSx1RUFBaEI7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0FBRUQsK0RBQWVoQixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTs7QUFFQSxTQUFTaUIsSUFBVCxDQUFjaEIsS0FBZCxFQUFxQjtBQUNuQixzQkFBTztBQUFLLGFBQVMsRUFBRWUsOERBQWhCO0FBQUEsY0FBK0JmLEtBQUssQ0FBQ2lCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBR0EsU0FBU0UsVUFBVCxHQUFzQjtBQUNsQixXQUFTQyxhQUFULENBQXdCQyxjQUF4QixFQUF3QztBQUVwQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLGNBQVo7QUFDSDs7QUFFRCxzQkFBTyw4REFBQyxnRUFBRDtBQUFZLFlBQVEsRUFBSUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRUQsK0RBQWVELFVBQWYsRTs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvbmV3LURuYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL05ld0RuYUZvcm0ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBOZXdEbmFGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgcGVueWFraXRJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRuYXNlcXVlbmNlSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBlbnRlcmVkUGVueWFraXQgPSBwZW55YWtpdElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkU2VxdWVuY2UgPSBkbmFzZXF1ZW5jZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY29uc3QgZG5hRGF0YSA9IHtcclxuICAgICAgcGVueWFraXQ6IGVudGVyZWRQZW55YWtpdCxcclxuICAgICAgc2VxdWVuY2U6IGVudGVyZWRTZXF1ZW5jZSxcclxuICAgIH07XHJcblxyXG4gICAgcHJvcHMub25BZGRNZWV0dXAoZG5hRGF0YSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQ+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ncGVueWFraXQnPk5hbWEgUGVueWFraXQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlcXVpcmVkIGlkPSdwZW55YWtpdCcgcmVmPXtwZW55YWtpdElucHV0UmVmfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2RuYXNlcXVlbmNlJz5TZXF1ZW5jZSBETkE8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIHJlcXVpcmVkIGlkPSdzZXF1ZW5jZScgcmVmPXtkbmFzZXF1ZW5jZUlucHV0UmVmfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbj5BZGQgSW5wdXQgU2VxdWVuY2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0RuYUZvcm07XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IE5ld0RuYUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9kbmFzL05ld0RuYUZvcm0nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE5ld0RuYVBhZ2UoKSB7XHJcbiAgICBmdW5jdGlvbiBhZGREbmFIYW5kbGVyKCBlbnRlcmVkRG5hRGF0YSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbnRlcmVkRG5hRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxOZXdEbmFGb3JtIG9uQWRkRG5hID0ge2FkZERuYUhhbmRsZXJ9Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3RG5hUGFnZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiTmV3RG5hRm9ybV9mb3JtX18yeExnZ1wiLFxuXHRcImNvbnRyb2xcIjogXCJOZXdEbmFGb3JtX2NvbnRyb2xfX2RDb0xwXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk5ld0RuYUZvcm1fYWN0aW9uc19fMThBSkZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9