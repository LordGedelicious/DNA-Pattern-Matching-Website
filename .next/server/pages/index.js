(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/dnas/DnaItem.js":
/*!************************************!*\
  !*** ./components/dnas/DnaItem.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DnaItem.module.css */ "./components/dnas/DnaItem.module.css");
/* harmony import */ var _DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\dnas\\DnaItem.js";



function DnaItem() {
  // const router = useRouter();
  // function showDetailHandler() {
  //   // adding a page into a stack of pages, almost the same function as link
  //   router.push('/' + props.id);
  // }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Website ini merupakan tugas matakuliah IF2210"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Terdapat beberapa fitur dari website ini, yaitu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_2___default().test),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Input File DNA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Mendeteksi Pattern Match DNA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DnaItem);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dnas_DnaItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dnas/DnaItem */ "./components/dnas/DnaItem.js");

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\pages\\index.js";


function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dnas_DnaItem__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./components/dnas/DnaItem.module.css":
/*!********************************************!*\
  !*** ./components/dnas/DnaItem.module.css ***!
  \********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"item": "DnaItem_item__1VBwI",
	"image": "DnaItem_image__aDQ2S",
	"content": "DnaItem_content__2rhTn",
	"actions": "DnaItem_actions__lUrgy",
	"test": "DnaItem_test__3FXmD"
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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL0RuYUl0ZW0uanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvZG5hcy9EbmFJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL2RuYS1wYXR0ZXJuLW1hdGNoaW5nLXdlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEbmFJdGVtIiwiY2xhc3NlcyIsIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUVDLGlFQUFmO0FBQUEsMkJBQ0UsOERBQUMsNkNBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVBLG9FQUFoQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFLDhEQUFDLDZDQUFEO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQSxpRUFBaEI7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDs7QUFFRCwrREFBZUQsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7O0FBRUEsU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLHNCQUFPO0FBQUssYUFBUyxFQUFFRiw4REFBaEI7QUFBQSxjQUErQkUsS0FBSyxDQUFDQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZUYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLFNBQVNHLFFBQVQsR0FBb0I7QUFDaEIsc0JBQU8sOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBRUQsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRG5hSXRlbS5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIERuYUl0ZW0oKSB7XHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gZnVuY3Rpb24gc2hvd0RldGFpbEhhbmRsZXIoKSB7XHJcbiAgLy8gICAvLyBhZGRpbmcgYSBwYWdlIGludG8gYSBzdGFjayBvZiBwYWdlcywgYWxtb3N0IHRoZSBzYW1lIGZ1bmN0aW9uIGFzIGxpbmtcclxuICAvLyAgIHJvdXRlci5wdXNoKCcvJyArIHByb3BzLmlkKTtcclxuICAvLyB9XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cclxuICAgICAgICAgIDxoMz5XZWJzaXRlIGluaSBtZXJ1cGFrYW4gdHVnYXMgbWF0YWt1bGlhaCBJRjIyMTA8L2gzPlxyXG4gICAgICAgICAgPGgzPlRlcmRhcGF0IGJlYmVyYXBhIGZpdHVyIGRhcmkgd2Vic2l0ZSBpbmksIHlhaXR1PC9oMz5cclxuICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXN0fT5cclxuICAgICAgICAgICAgICA8aDM+SW5wdXQgRmlsZSBETkE8L2gzPlxyXG4gICAgICAgICAgICAgIDxoMz5NZW5kZXRla3NpIFBhdHRlcm4gTWF0Y2ggRE5BPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG5hSXRlbTtcclxuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgRG5hSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL2RuYXMvRG5hSXRlbSc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgIHJldHVybiA8RG5hSXRlbSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1cIjogXCJEbmFJdGVtX2l0ZW1fXzFWQndJXCIsXG5cdFwiaW1hZ2VcIjogXCJEbmFJdGVtX2ltYWdlX19hRFEyU1wiLFxuXHRcImNvbnRlbnRcIjogXCJEbmFJdGVtX2NvbnRlbnRfXzJyaFRuXCIsXG5cdFwiYWN0aW9uc1wiOiBcIkRuYUl0ZW1fYWN0aW9uc19fbFVyZ3lcIixcblx0XCJ0ZXN0XCI6IFwiRG5hSXRlbV90ZXN0X18zRlhtRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0tTTE9cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==