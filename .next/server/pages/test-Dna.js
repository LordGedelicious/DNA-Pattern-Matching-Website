(function() {
var exports = {};
exports.id = "pages/test-Dna";
exports.ids = ["pages/test-Dna"];
exports.modules = {

/***/ "./components/dnas/DnaTestForm.js":
/*!****************************************!*\
  !*** ./components/dnas/DnaTestForm.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DnaTestForm.module.css */ "./components/dnas/DnaTestForm.module.css");
/* harmony import */ var _DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\dnas\\DnaTestForm.js";




function DnaTest() {
  const inputNamaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const inputSequenceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const inputPrediksiPenyakitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  function submitHandler(event) {
    event.preventDefault();
    const nama = inputNamaRef.current.value;
    const sequence = inputSequenceRef.current.value;
    const prediksiPenyakit = inputPrediksiPenyakitRef.current.value;
    const dnaData = {
      nama: nama,
      sequence: sequence,
      prediksiPenyakit: prediksiPenyakit
    };
    props.onAddMeetup(dnaData);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "namaPengguna",
          children: "Nama Pengguna"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          required: true,
          id: "nama",
          ref: inputNamaRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "dnasequenceTest",
          children: "Sequence DNA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          required: true,
          id: "sequence",
          ref: inputSequenceRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "prediksiPenyakit",
          children: "Prediksi Penyakit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          required: true,
          id: "prediksiPenyakit",
          ref: inputPrediksiPenyakitRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DnaTest);

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

/***/ "./pages/test-Dna.js":
/*!***************************!*\
  !*** ./pages/test-Dna.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dnas_DnaTestForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dnas/DnaTestForm */ "./components/dnas/DnaTestForm.js");

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\pages\\test-Dna.js";


function DnaTestPage() {
  function addDnaHandler(enteredDnaData) {
    console.log(enteredDnaData);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dnas_DnaTestForm__WEBPACK_IMPORTED_MODULE_1__.default, {
    onAddDna: addDnaHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DnaTestPage);

/***/ }),

/***/ "./components/dnas/DnaTestForm.module.css":
/*!************************************************!*\
  !*** ./components/dnas/DnaTestForm.module.css ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"form": "DnaTestForm_form__27Ogt",
	"control": "DnaTestForm_control__2MNuE",
	"actions": "DnaTestForm_actions__fAYZu"
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
var __webpack_exports__ = (__webpack_exec__("./pages/test-Dna.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL0RuYVRlc3RGb3JtLmpzIiwid2VicGFjazovL2RuYS1wYXR0ZXJuLW1hdGNoaW5nLXdlYnNpdGUvLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL3BhZ2VzL3Rlc3QtRG5hLmpzIiwid2VicGFjazovL2RuYS1wYXR0ZXJuLW1hdGNoaW5nLXdlYnNpdGUvLi9jb21wb25lbnRzL2RuYXMvRG5hVGVzdEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkRuYVRlc3QiLCJpbnB1dE5hbWFSZWYiLCJ1c2VSZWYiLCJpbnB1dFNlcXVlbmNlUmVmIiwiaW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1hIiwiY3VycmVudCIsInZhbHVlIiwic2VxdWVuY2UiLCJwcmVkaWtzaVBlbnlha2l0IiwiZG5hRGF0YSIsInByb3BzIiwib25BZGRNZWV0dXAiLCJjbGFzc2VzIiwiQ2FyZCIsImNoaWxkcmVuIiwiRG5hVGVzdFBhZ2UiLCJhZGREbmFIYW5kbGVyIiwiZW50ZXJlZERuYURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQWtCO0FBQ2QsUUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxFQUEzQjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHRCw2Q0FBTSxFQUEvQjtBQUNBLFFBQU1FLHdCQUF3QixHQUFHRiw2Q0FBTSxFQUF2Qzs7QUFFQSxXQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUN6QkEsU0FBSyxDQUFDQyxjQUFOO0FBRUEsVUFBTUMsSUFBSSxHQUFHUCxZQUFZLENBQUNRLE9BQWIsQ0FBcUJDLEtBQWxDO0FBQ0EsVUFBTUMsUUFBUSxHQUFHUixnQkFBZ0IsQ0FBQ00sT0FBakIsQ0FBeUJDLEtBQTFDO0FBQ0EsVUFBTUUsZ0JBQWdCLEdBQUdSLHdCQUF3QixDQUFDSyxPQUF6QixDQUFpQ0MsS0FBMUQ7QUFFQSxVQUFNRyxPQUFPLEdBQUc7QUFDWkwsVUFBSSxFQUFFQSxJQURNO0FBRVpHLGNBQVEsRUFBRUEsUUFGRTtBQUdaQyxzQkFBZ0IsRUFBRUE7QUFITixLQUFoQjtBQU1BRSxTQUFLLENBQUNDLFdBQU4sQ0FBa0JGLE9BQWxCO0FBQ0g7O0FBRUQsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSwyQkFDQTtBQUFNLGVBQVMsRUFBRUcscUVBQWpCO0FBQStCLGNBQVEsRUFBRVgsYUFBekM7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVXLHdFQUFoQjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxNQUEzQjtBQUE0QixZQUFFLEVBQUMsTUFBL0I7QUFBc0MsYUFBRyxFQUFFZjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFFZSx3RUFBaEI7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLE1BQTNCO0FBQTRCLFlBQUUsRUFBQyxVQUEvQjtBQUEwQyxhQUFHLEVBQUViO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUVhLHdFQUFoQjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsTUFBM0I7QUFBNEIsWUFBRSxFQUFDLGtCQUEvQjtBQUFrRCxhQUFHLEVBQUVaO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFhSTtBQUFLLGlCQUFTLEVBQUVZLHdFQUFoQjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7QUFFRCwrREFBZWhCLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBOztBQUVBLFNBQVNpQixJQUFULENBQWNILEtBQWQsRUFBcUI7QUFDbkIsc0JBQU87QUFBSyxhQUFTLEVBQUVFLDhEQUFoQjtBQUFBLGNBQStCRixLQUFLLENBQUNJO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELCtEQUFlRCxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUEsU0FBU0UsV0FBVCxHQUF1QjtBQUNuQixXQUFTQyxhQUFULENBQXdCQyxjQUF4QixFQUF3QztBQUVwQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLGNBQVo7QUFDSDs7QUFFRCxzQkFBTyw4REFBQyxpRUFBRDtBQUFhLFlBQVEsRUFBSUQ7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRUQsK0RBQWVELFdBQWYsRTs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdGVzdC1EbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EbmFUZXN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBEbmFUZXN0KCl7XHJcbiAgICBjb25zdCBpbnB1dE5hbWFSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGlucHV0U2VxdWVuY2VSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGlucHV0UHJlZGlrc2lQZW55YWtpdFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWEgPSBpbnB1dE5hbWFSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IGlucHV0U2VxdWVuY2VSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmVkaWtzaVBlbnlha2l0ID0gaW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRuYURhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWE6IG5hbWEsXHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICAgICAgICAgICAgcHJlZGlrc2lQZW55YWtpdDogcHJlZGlrc2lQZW55YWtpdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb3BzLm9uQWRkTWVldHVwKGRuYURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtYVBlbmdndW5hJz5OYW1hIFBlbmdndW5hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtYScgcmVmPXtpbnB1dE5hbWFSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkbmFzZXF1ZW5jZVRlc3QnPlNlcXVlbmNlIEROQTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgcmVxdWlyZWQgaWQ9J3NlcXVlbmNlJyByZWY9e2lucHV0U2VxdWVuY2VSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcmVkaWtzaVBlbnlha2l0Jz5QcmVkaWtzaSBQZW55YWtpdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgaWQ9J3ByZWRpa3NpUGVueWFraXQnIHJlZj17aW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG5hVGVzdDsiLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsImltcG9ydCBEbmFUZXN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2RuYXMvRG5hVGVzdEZvcm0nO1xyXG5cclxuZnVuY3Rpb24gRG5hVGVzdFBhZ2UoKSB7XHJcbiAgICBmdW5jdGlvbiBhZGREbmFIYW5kbGVyKCBlbnRlcmVkRG5hRGF0YSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlbnRlcmVkRG5hRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxEbmFUZXN0Rm9ybSBvbkFkZERuYSA9IHthZGREbmFIYW5kbGVyfS8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERuYVRlc3RQYWdlOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJEbmFUZXN0Rm9ybV9mb3JtX18yN09ndFwiLFxuXHRcImNvbnRyb2xcIjogXCJEbmFUZXN0Rm9ybV9jb250cm9sX18yTU51RVwiLFxuXHRcImFjdGlvbnNcIjogXCJEbmFUZXN0Rm9ybV9hY3Rpb25zX19mQVladVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=