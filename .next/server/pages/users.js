/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./pages/users/index.js":
/*!******************************!*\
  !*** ./pages/users/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/pc/Documentos/NextJS/pages/users/index.js\";\n\n\n\n\n\n\nconst Users = ({\n  users\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        className: \"jsx-3877993228\",\n        children: \"Landing page users\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"mi nombre es matias y estoy probando el componente Head que ofrece nextJS\",\n        className: \"jsx-3877993228\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_4__.default, {\n      children: \"Users Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3877993228\",\n      children: users.map((user, i) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n          href: \"/users/[id]\",\n          as: `/users/${user.id}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"jsx-3877993228\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              className: \"jsx-3877993228\",\n              children: user.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 20,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: \"jsx-3877993228\",\n              children: user.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: \"jsx-3877993228\",\n              children: user.email\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, undefined)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3877993228\",\n      children: \"div.jsx-3877993228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3877993228{width:15em;min-height:16em;max-height:16em;margin:0.5em;border:1px solid darkgray;border-radius:0.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3877993228:hover{border:1px solid darkblue;}a.jsx-3877993228 h4.jsx-3877993228,a.jsx-3877993228 h3.jsx-3877993228{margin:1em;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3VzZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCUyxBQUcwQixBQU9GLEFBY2UsQUFHZixXQWhCSyxBQWlCbEIsZUFIQSxDQWJrQixnQkFDSCxhQUNhLGtCQVZQLFFBV0Msb0JBQ1AseUNBWEUsaUNBWU8sd0JBWEMsc0RBWUEsNkNBWEosc0RBWUEsdUNBWHJCLHNEQVlvQixrQkFDRyxrREFDdkIiLCJmaWxlIjoiL2hvbWUvcGMvRG9jdW1lbnRvcy9OZXh0SlMvcGFnZXMvdXNlcnMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFVzZXJzID0gKHt1c2Vyc30pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+TGFuZGluZyBwYWdlIHVzZXJzPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJtaSBub21icmUgZXMgbWF0aWFzIHkgZXN0b3kgcHJvYmFuZG8gZWwgY29tcG9uZW50ZSBIZWFkIHF1ZSBvZnJlY2UgbmV4dEpTXCIvPlxuICAgIDwvSGVhZD5cbiAgICAgIDxUaXRsZT5Vc2VycyBQYWdlPC9UaXRsZT5cbiAgICAgIDxkaXY+XG4gICAgICB7dXNlcnMubWFwKCh1c2VyLGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1tpZF1cIiBhcz17YC91c2Vycy8ke3VzZXIuaWR9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+e3VzZXIudXNlcm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfTwvaDQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXtcbiAgICAgICAgICAgIHdpZHRoOiAxNWVtO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTZlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2ZW07XG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEgaDQsIGEgaDN7XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIHVzZXJzID0gZGF0YVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHVzZXJzXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdfQ== */\\n/*@ sourceURL=/home/pc/Documentos/NextJS/pages/users/index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async () => {\n  var users;\n  await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {\n    users = data;\n  });\n  return {\n    props: {\n      users\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy91c2Vycy9pbmRleC5qcz81YmQ4Il0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaSIsImlkIiwibmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBRXpCLHNCQUNFLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUMsMkVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUtFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBQTtBQUFBLGdCQUNDQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxDQUFDQyxJQUFELEVBQU1DLENBQU4sS0FBWTtBQUNyQiw0QkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLFlBQUUsRUFBRyxVQUFTRCxJQUFJLENBQUNFLEVBQUcsRUFBL0M7QUFBQSxpQ0FDRTtBQUFBO0FBQUEsb0NBQ0U7QUFBQTtBQUFBLHdCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQSx3QkFBS0gsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBO0FBQUEsd0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXVESixDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0QsT0FWQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzREQsQ0F4REQ7O0FBMERPLE1BQU1LLGtCQUFrQixHQUFHLFlBQVc7QUFDM0MsTUFBSVIsS0FBSjtBQUVBLFFBQU1TLEtBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0xDLElBREssQ0FDQUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEUCxFQUVMRixJQUZLLENBRUFHLElBQUksSUFBSTtBQUNaYixTQUFLLEdBQUdhLElBQVI7QUFDRCxHQUpLLENBQU47QUFNQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMZDtBQURLO0FBREYsR0FBUDtBQUtELENBZE07QUFnQlAsK0RBQWVELEtBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5MYW5kaW5nIHBhZ2UgdXNlcnM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm1pIG5vbWJyZSBlcyBtYXRpYXMgeSBlc3RveSBwcm9iYW5kbyBlbCBjb21wb25lbnRlIEhlYWQgcXVlIG9mcmVjZSBuZXh0SlNcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlVzZXJzIFBhZ2U8L1RpdGxlPlxuICAgICAgPGRpdj5cbiAgICAgIHt1c2Vycy5tYXAoKHVzZXIsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnMvW2lkXVwiIGFzPXtgL3VzZXJzLyR7dXNlci5pZH1gfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxoMz57dXNlci5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxoND57dXNlci51c2VybmFtZX08L2g0PlxuICAgICAgICAgICAgICA8aDQ+e3VzZXIuZW1haWx9PC9oND5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhe1xuICAgICAgICAgICAgd2lkdGg6IDE1ZW07XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTZlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMC41ZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSBoNCwgYSBoM3tcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoKSA9PiB7XG4gIHZhciB1c2Vyc1xuXG4gIGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/index.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js-components_title_js"], function() { return __webpack_exec__("./pages/users/index.js"); });
module.exports = __webpack_exports__;

})();