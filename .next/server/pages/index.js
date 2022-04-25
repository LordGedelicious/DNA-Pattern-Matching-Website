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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DnaItem.module.css */ "./components/dnas/DnaItem.module.css");
/* harmony import */ var _DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\sasga\\Documents\\DNA-Pattern-Matching-Website\\components\\dnas\\DnaItem.js";




function DnaItem() {
  // const router = useRouter();
  // function showDetailHandler() {
  //   // adding a page into a stack of pages, almost the same function as link
  //   router.push('/' + props.id);
  // }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "About Us"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Website ini merupakan tugas matakuliah IF2210"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Terdapat beberapa fitur dari website ini, yaitu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_DnaItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().test),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Input File DNA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Mendeteksi Pattern Match DNA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vY29tcG9uZW50cy9kbmFzL0RuYUl0ZW0uanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5qcyIsIndlYnBhY2s6Ly9kbmEtcGF0dGVybi1tYXRjaGluZy13ZWJzaXRlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvZG5hcy9EbmFJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZG5hLXBhdHRlcm4tbWF0Y2hpbmctd2Vic2l0ZS8uL2NvbXBvbmVudHMvdWkvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL2RuYS1wYXR0ZXJuLW1hdGNoaW5nLXdlYnNpdGUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2RuYS1wYXR0ZXJuLW1hdGNoaW5nLXdlYnNpdGUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEbmFJdGVtIiwiY2xhc3NlcyIsIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUNFO0FBQUksYUFBUyxFQUFFQyxpRUFBZjtBQUFBLDJCQUNFLDhEQUFDLDZDQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxvRUFBaEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSw4REFBQyw2Q0FBRDtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsaUVBQWhCO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0FBRUQsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOztBQUVBLFNBQVNFLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNuQixzQkFBTztBQUFLLGFBQVMsRUFBRUYsOERBQWhCO0FBQUEsY0FBK0JFLEtBQUssQ0FBQ0M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVGLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQSxTQUFTRyxRQUFULEdBQW9CO0FBQ2hCLHNCQUFPLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNIOztBQUVELCtEQUFlQSxRQUFmLEU7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL3VpL0NhcmQnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0RuYUl0ZW0ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBEbmFJdGVtKCkge1xyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGZ1bmN0aW9uIHNob3dEZXRhaWxIYW5kbGVyKCkge1xyXG4gIC8vICAgLy8gYWRkaW5nIGEgcGFnZSBpbnRvIGEgc3RhY2sgb2YgcGFnZXMsIGFsbW9zdCB0aGUgc2FtZSBmdW5jdGlvbiBhcyBsaW5rXHJcbiAgLy8gICByb3V0ZXIucHVzaCgnLycgKyBwcm9wcy5pZCk7XHJcbiAgLy8gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc2VzLml0ZW19PlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxoMT5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICA8aDM+V2Vic2l0ZSBpbmkgbWVydXBha2FuIHR1Z2FzIG1hdGFrdWxpYWggSUYyMjEwPC9oMz5cclxuICAgICAgICAgIDxoMz5UZXJkYXBhdCBiZWJlcmFwYSBmaXR1ciBkYXJpIHdlYnNpdGUgaW5pLCB5YWl0dTwvaDM+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGVzdH0+XHJcbiAgICAgICAgICAgICAgPGgzPklucHV0IEZpbGUgRE5BPC9oMz5cclxuICAgICAgICAgICAgICA8aDM+TWVuZGV0ZWtzaSBQYXR0ZXJuIE1hdGNoIEROQTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERuYUl0ZW07XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIiwiaW1wb3J0IERuYUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9kbmFzL0RuYUl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gPERuYUl0ZW0gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiRG5hSXRlbV9pdGVtX18xVkJ3SVwiLFxuXHRcImltYWdlXCI6IFwiRG5hSXRlbV9pbWFnZV9fYURRMlNcIixcblx0XCJjb250ZW50XCI6IFwiRG5hSXRlbV9jb250ZW50X18ycmhUblwiLFxuXHRcImFjdGlvbnNcIjogXCJEbmFJdGVtX2FjdGlvbnNfX2xVcmd5XCIsXG5cdFwidGVzdFwiOiBcIkRuYUl0ZW1fdGVzdF9fM0ZYbURcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9