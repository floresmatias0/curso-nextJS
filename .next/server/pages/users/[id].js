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
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n\nvar _jsxFileName = \"/home/pc/Documentos/NextJS/pages/users/[id].js\";\n\n\n\n\n\n\nconst User = ({\n  users\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        className: \"jsx-1168988973\",\n        children: [\"User #\", users.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"mi nombre es matias y estoy probando el componente Head que ofrece nextJS\",\n        className: \"jsx-1168988973\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: \"User Details\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-1168988973\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"jsx-1168988973\",\n        children: users.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"jsx-1168988973\",\n        children: users.company.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"jsx-1168988973\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1168988973\",\n          children: users.phone\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1168988973\",\n          children: users.email\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1168988973\",\n          children: users.website\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"1168988973\",\n      children: \"div.jsx-1168988973{width:20em;-webkit-text-decoration:none;text-decoration:none;border:1px solid darkgray;border-radius:1em;text-align:center;}div.jsx-1168988973:hover{border:1px solid darkblue;}div.jsx-1168988973 ul.jsx-1168988973{padding:0;text-align:center;list-style:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3VzZXJzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJPLEFBR3NCLEFBT2UsQUFHaEIsVUFDUSxDQVZHLGVBT3ZCLEVBSWtCLGdCQUNsQixpQkFYNEIsMEJBQ1Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3VzZXJzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XG5cbmNvbnN0IFVzZXIgPSAoe3VzZXJzfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlVzZXIgI3t1c2Vycy5pZH08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm1pIG5vbWJyZSBlcyBtYXRpYXMgeSBlc3RveSBwcm9iYW5kbyBlbCBjb21wb25lbnRlIEhlYWQgcXVlIG9mcmVjZSBuZXh0SlNcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlVzZXIgRGV0YWlsczwvVGl0bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+e3VzZXJzLm5hbWV9PC9oMj5cbiAgICAgICAgPGgzPnt1c2Vycy5jb21wYW55Lm5hbWV9PC9oMz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT57dXNlcnMucGhvbmV9PC9saT5cbiAgICAgICAgICA8bGk+e3VzZXJzLmVtYWlsfTwvbGk+XG4gICAgICAgICAgPGxpPnt1c2Vycy53ZWJzaXRlfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBkaXZ7XG4gICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZGl2OmhvdmVye1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtibHVlO1xuICAgICAgICB9XG4gICAgICAgIGRpdiB1bHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIHZhciB1c2Vyc1xuXG4gIGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgY29uc3QgcGF0aHMgPSB1c2Vycy5tYXAodXNlciA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogYCR7dXNlci5pZH1gXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyh7cGFyYW1zfSkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICB1c2VycyA9IGRhdGFcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1c2Vyc1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdfQ== */\\n/*@ sourceURL=/home/pc/Documentos/NextJS/pages/users/[id].js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getStaticPaths = async () => {\n  var users;\n  await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {\n    users = data;\n  });\n  const paths = users.map(user => {\n    return {\n      params: {\n        id: `${user.id}`\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: true\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  var users;\n  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => res.json()).then(data => {\n    users = data;\n  });\n  return {\n    props: {\n      users\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy91c2Vycy9baWRdLmpzPzJjZWIiXSwibmFtZXMiOlsiVXNlciIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsImlkIiwibmFtZSIsImNvbXBhbnkiLCJwaG9uZSIsImVtYWlsIiwid2Vic2l0ZSIsImdldFN0YXRpY1BhdGhzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJwYXRocyIsIm1hcCIsInVzZXIiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFhO0FBRXhCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBR0QsTUFBTSxDQUFDRSxVQUFWLEVBQXFCO0FBQ25CLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDQSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQSw2QkFBY0gsS0FBSyxDQUFDSSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQywyRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBS0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFBO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLGtCQUFLSixLQUFLLENBQUNLO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQSxrQkFBS0wsS0FBSyxDQUFDTSxPQUFOLENBQWNEO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLG9CQUFLTCxLQUFLLENBQUNPO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQSxvQkFBS1AsS0FBSyxDQUFDUTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBO0FBQUEsb0JBQUtSLEtBQUssQ0FBQ1M7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFzQ0QsQ0E5Q0Q7O0FBK0NPLE1BQU1DLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLE1BQUlWLEtBQUo7QUFFQSxRQUFNVyxLQUFLLENBQUMsNENBQUQsQ0FBTCxDQUNMQyxJQURLLENBQ0FDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRFAsRUFFTEYsSUFGSyxDQUVBRyxJQUFJLElBQUk7QUFDWmYsU0FBSyxHQUFHZSxJQUFSO0FBQ0QsR0FKSyxDQUFOO0FBTUEsUUFBTUMsS0FBSyxHQUFHaEIsS0FBSyxDQUFDaUIsR0FBTixDQUFVQyxJQUFJLElBQUk7QUFDOUIsV0FBTztBQUNMQyxZQUFNLEVBQUU7QUFDTmYsVUFBRSxFQUFHLEdBQUVjLElBQUksQ0FBQ2QsRUFBRztBQURUO0FBREgsS0FBUDtBQUtELEdBTmEsQ0FBZDtBQVFBLFNBQU87QUFDTFksU0FESztBQUVMSSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FyQk07QUF1QkEsTUFBTUMsY0FBYyxHQUFHLE9BQU07QUFBQ0Y7QUFBRCxDQUFOLEtBQW1CO0FBQy9DLE1BQUluQixLQUFKO0FBRUEsUUFBTVcsS0FBSyxDQUFFLDhDQUE2Q1EsTUFBTSxDQUFDZixFQUFHLEVBQXpELENBQUwsQ0FDTFEsSUFESyxDQUNBQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURQLEVBRUxGLElBRkssQ0FFQUcsSUFBSSxJQUFJO0FBQ1pmLFNBQUssR0FBR2UsSUFBUjtBQUNELEdBSkssQ0FBTjtBQU1BLFNBQU87QUFDTE8sU0FBSyxFQUFFO0FBQ0x0QjtBQURLO0FBREYsR0FBUDtBQUtELENBZE07QUFnQlAsK0RBQWVELElBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuXG5jb25zdCBVc2VyID0gKHt1c2Vyc30pID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZihyb3V0ZXIuaXNGYWxsYmFjayl7XG4gICAgcmV0dXJuIDxkaXY+Q2FyZ2FuZG8uLi48L2Rpdj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Vc2VyICN7dXNlcnMuaWR9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJtaSBub21icmUgZXMgbWF0aWFzIHkgZXN0b3kgcHJvYmFuZG8gZWwgY29tcG9uZW50ZSBIZWFkIHF1ZSBvZnJlY2UgbmV4dEpTXCIvPlxuICAgIDwvSGVhZD5cbiAgICAgIDxUaXRsZT5Vc2VyIERldGFpbHM8L1RpdGxlPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt1c2Vycy5uYW1lfTwvaDI+XG4gICAgICAgIDxoMz57dXNlcnMuY29tcGFueS5uYW1lfTwvaDM+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+e3VzZXJzLnBob25lfTwvbGk+XG4gICAgICAgICAgPGxpPnt1c2Vycy5lbWFpbH08L2xpPlxuICAgICAgICAgIDxsaT57dXNlcnMud2Vic2l0ZX08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgICAgZGl2e1xuICAgICAgICAgIHdpZHRoOiAyMGVtO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGRpdjpob3ZlcntcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXYgdWx7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIHVzZXJzID0gZGF0YVxuICB9KVxuXG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKHVzZXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGAke3VzZXIuaWR9YFxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoe3BhcmFtc30pID0+IHtcbiAgdmFyIHVzZXJzXG5cbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layout_js-components_title_js"], function() { return __webpack_exec__("./pages/users/[id].js"); });
module.exports = __webpack_exports__;

})();