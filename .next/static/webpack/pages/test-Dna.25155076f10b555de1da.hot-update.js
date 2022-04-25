self["webpackHotUpdate_N_E"]("pages/test-Dna",{

/***/ "./components/dnas/DnaTestForm.js":
/*!****************************************!*\
  !*** ./components/dnas/DnaTestForm.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DnaTestForm.module.css */ "./components/dnas/DnaTestForm.module.css");
/* harmony import */ var _DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DnaTestForm_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\dnas\\DnaTestForm.js",
    _s = $RefreshSig$();





function DnaTest() {
  _s();

  var inputNamaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var inputSequenceRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var inputPrediksiPenyakitRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  function submitHandler(event) {
    event.preventDefault();
    var nama = inputNamaRef.current.value;
    var sequence = inputSequenceRef.current.value;
    var prediksiPenyakit = inputPrediksiPenyakitRef.current.value;
    var dnaData = {
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

_s(DnaTest, "bB66HkjPPMdpZbV4Vb1qUHYpDF0=");

_c = DnaTest;
/* harmony default export */ __webpack_exports__["default"] = (DnaTest);

var _c;

$RefreshReg$(_c, "DnaTest");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kbmFzL0RuYVRlc3RGb3JtLmpzIl0sIm5hbWVzIjpbIkRuYVRlc3QiLCJpbnB1dE5hbWFSZWYiLCJ1c2VSZWYiLCJpbnB1dFNlcXVlbmNlUmVmIiwiaW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1hIiwiY3VycmVudCIsInZhbHVlIiwic2VxdWVuY2UiLCJwcmVkaWtzaVBlbnlha2l0IiwiZG5hRGF0YSIsInByb3BzIiwib25BZGRNZWV0dXAiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQWtCO0FBQUE7O0FBQ2QsTUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxFQUEzQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCw2Q0FBTSxFQUEvQjtBQUNBLE1BQU1FLHdCQUF3QixHQUFHRiw2Q0FBTSxFQUF2Qzs7QUFFQSxXQUFTRyxhQUFULENBQXVCQyxLQUF2QixFQUE2QjtBQUN6QkEsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsSUFBSSxHQUFHUCxZQUFZLENBQUNRLE9BQWIsQ0FBcUJDLEtBQWxDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUixnQkFBZ0IsQ0FBQ00sT0FBakIsQ0FBeUJDLEtBQTFDO0FBQ0EsUUFBTUUsZ0JBQWdCLEdBQUdSLHdCQUF3QixDQUFDSyxPQUF6QixDQUFpQ0MsS0FBMUQ7QUFFQSxRQUFNRyxPQUFPLEdBQUc7QUFDWkwsVUFBSSxFQUFFQSxJQURNO0FBRVpHLGNBQVEsRUFBRUEsUUFGRTtBQUdaQyxzQkFBZ0IsRUFBRUE7QUFITixLQUFoQjtBQU1BRSxTQUFLLENBQUNDLFdBQU4sQ0FBa0JGLE9BQWxCO0FBQ0g7O0FBRUQsc0JBQ0ksOERBQUMsNkNBQUQ7QUFBQSwyQkFDQTtBQUFNLGVBQVMsRUFBRUcscUVBQWpCO0FBQStCLGNBQVEsRUFBRVgsYUFBekM7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVXLHdFQUFoQjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixrQkFBUSxNQUEzQjtBQUE0QixZQUFFLEVBQUMsTUFBL0I7QUFBc0MsYUFBRyxFQUFFZjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFFZSx3RUFBaEI7QUFBQSxnQ0FDSTtBQUFPLGlCQUFPLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLGtCQUFRLE1BQTNCO0FBQTRCLFlBQUUsRUFBQyxVQUEvQjtBQUEwQyxhQUFHLEVBQUViO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUVhLHdFQUFoQjtBQUFBLGdDQUNJO0FBQU8saUJBQU8sRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsa0JBQVEsTUFBM0I7QUFBNEIsWUFBRSxFQUFDLGtCQUEvQjtBQUFrRCxhQUFHLEVBQUVaO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFhSTtBQUFLLGlCQUFTLEVBQUVZLHdFQUFoQjtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7R0ExQ1FoQixPOztLQUFBQSxPO0FBNENULCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Rlc3QtRG5hLjI1MTU1MDc2ZjEwYjU1NWRlMWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vdWkvQ2FyZFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9EbmFUZXN0Rm9ybS5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBEbmFUZXN0KCl7XHJcbiAgICBjb25zdCBpbnB1dE5hbWFSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGlucHV0U2VxdWVuY2VSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGlucHV0UHJlZGlrc2lQZW55YWtpdFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWEgPSBpbnB1dE5hbWFSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IGlucHV0U2VxdWVuY2VSZWYuY3VycmVudC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmVkaWtzaVBlbnlha2l0ID0gaW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGRuYURhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWE6IG5hbWEsXHJcbiAgICAgICAgICAgIHNlcXVlbmNlOiBzZXF1ZW5jZSxcclxuICAgICAgICAgICAgcHJlZGlrc2lQZW55YWtpdDogcHJlZGlrc2lQZW55YWtpdFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb3BzLm9uQWRkTWVldHVwKGRuYURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbmFtYVBlbmdndW5hJz5OYW1hIFBlbmdndW5hPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBpZD0nbmFtYScgcmVmPXtpbnB1dE5hbWFSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdkbmFzZXF1ZW5jZVRlc3QnPlNlcXVlbmNlIEROQTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgcmVxdWlyZWQgaWQ9J3NlcXVlbmNlJyByZWY9e2lucHV0U2VxdWVuY2VSZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwcmVkaWtzaVBlbnlha2l0Jz5QcmVkaWtzaSBQZW55YWtpdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgaWQ9J3ByZWRpa3NpUGVueWFraXQnIHJlZj17aW5wdXRQcmVkaWtzaVBlbnlha2l0UmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG5hVGVzdDsiXSwic291cmNlUm9vdCI6IiJ9