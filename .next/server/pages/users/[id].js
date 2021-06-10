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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n\n\nvar _jsxFileName = \"/home/pc/Documentos/NextJS/pages/users/[id].js\";\n\n\n\n\n\n\nconst User = ({\n  users\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  if (router.isFallback) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"Cargando...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        className: \"jsx-1668526786\",\n        children: [\"User #\", users.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"mi nombre es matias y estoy probando el componente Head que ofrece nextJS\",\n        className: \"jsx-1668526786\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_5__.default, {\n      children: \"User Details\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-1668526786\" + \" \" + \"card\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"jsx-1668526786\",\n        children: users.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1668526786\" + \" \" + \"imagen\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          src: `/images/${users.id}.jpg`,\n          alt: \"perfil\",\n          width: 400,\n          height: 600,\n          objectFit: \"cover\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"jsx-1668526786\",\n        children: users.company.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"jsx-1668526786\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1668526786\",\n          children: users.phone\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1668526786\",\n          children: users.email\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n          className: \"jsx-1668526786\",\n          children: users.website\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"1668526786\",\n      children: \".imagen.jsx-1668526786{padding:1em;border:none;}.card.jsx-1668526786{width:20em;-webkit-text-decoration:none;text-decoration:none;border:1px solid darkgray;border-radius:1em;text-align:center;}.card.jsx-1668526786:hover{border:1px solid darkblue;}.card.jsx-1668526786 ul.jsx-1668526786{padding:0;text-align:center;list-style:none;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3VzZXJzL1tpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NPLEFBR3NCLEFBSUEsQUFPZSxBQUdoQixVQUNRLENBVkcsQ0FKVixZQUNiLEVBVUEsRUFJa0IsZ0JBQ2xCLGlCQVg0QiwwQkFDUixrQkFDQSxrQkFDcEIiLCJmaWxlIjoiL2hvbWUvcGMvRG9jdW1lbnRvcy9OZXh0SlMvcGFnZXMvdXNlcnMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XG5cbmNvbnN0IFVzZXIgPSAoe3VzZXJzfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlVzZXIgI3t1c2Vycy5pZH08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm1pIG5vbWJyZSBlcyBtYXRpYXMgeSBlc3RveSBwcm9iYW5kbyBlbCBjb21wb25lbnRlIEhlYWQgcXVlIG9mcmVjZSBuZXh0SlNcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlVzZXIgRGV0YWlsczwvVGl0bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGgyPnt1c2Vycy5uYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VuXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHt1c2Vycy5pZH0uanBnYH1cbiAgICAgICAgICBhbHQ9XCJwZXJmaWxcIlxuICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3VzZXJzLmNvbXBhbnkubmFtZX08L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPnt1c2Vycy5waG9uZX08L2xpPlxuICAgICAgICAgIDxsaT57dXNlcnMuZW1haWx9PC9saT5cbiAgICAgICAgICA8bGk+e3VzZXJzLndlYnNpdGV9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWFnZW57XG4gICAgICAgICAgcGFkZGluZzoxZW07XG4gICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXJ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgdWx7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIHVzZXJzID0gZGF0YVxuICB9KVxuXG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKHVzZXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGAke3VzZXIuaWR9YFxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoe3BhcmFtc30pID0+IHtcbiAgdmFyIHVzZXJzXG5cbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXX0= */\\n/*@ sourceURL=/home/pc/Documentos/NextJS/pages/users/[id].js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true);\n};\n\nconst getStaticPaths = async () => {\n  var users;\n  await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {\n    users = data;\n  });\n  const paths = users.map(user => {\n    return {\n      params: {\n        id: `${user.id}`\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: true\n  };\n};\nconst getStaticProps = async ({\n  params\n}) => {\n  var users;\n  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => res.json()).then(data => {\n    users = data;\n  });\n  return {\n    props: {\n      users\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy91c2Vycy9baWRdLmpzPzJjZWIiXSwibmFtZXMiOlsiVXNlciIsInVzZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNGYWxsYmFjayIsImlkIiwibmFtZSIsImNvbXBhbnkiLCJwaG9uZSIsImVtYWlsIiwid2Vic2l0ZSIsImdldFN0YXRpY1BhdGhzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJwYXRocyIsIm1hcCIsInVzZXIiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFFeEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFHRCxNQUFNLENBQUNFLFVBQVYsRUFBcUI7QUFDbkIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLDZCQUFjSCxLQUFLLENBQUNJLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDLDJFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFLRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQUEsMENBQWUsTUFBZjtBQUFBLDhCQUNFO0FBQUE7QUFBQSxrQkFBS0osS0FBSyxDQUFDSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLDRDQUFlLFFBQWY7QUFBQSwrQkFDQSw4REFBQyxtREFBRDtBQUNFLGFBQUcsRUFBRyxXQUFVTCxLQUFLLENBQUNJLEVBQUcsTUFEM0I7QUFFRSxhQUFHLEVBQUMsUUFGTjtBQUdFLGVBQUssRUFBRSxHQUhUO0FBSUUsZ0JBQU0sRUFBRSxHQUpWO0FBS0UsbUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBVUU7QUFBQTtBQUFBLGtCQUFLSixLQUFLLENBQUNNLE9BQU4sQ0FBY0Q7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQVdFO0FBQUE7QUFBQSxnQ0FDRTtBQUFBO0FBQUEsb0JBQUtMLEtBQUssQ0FBQ087QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBLG9CQUFLUCxLQUFLLENBQUNRO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUE7QUFBQSxvQkFBS1IsS0FBSyxDQUFDUztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBa0RELENBMUREOztBQTJETyxNQUFNQyxjQUFjLEdBQUcsWUFBWTtBQUN4QyxNQUFJVixLQUFKO0FBRUEsUUFBTVcsS0FBSyxDQUFDLDRDQUFELENBQUwsQ0FDTEMsSUFESyxDQUNBQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURQLEVBRUxGLElBRkssQ0FFQUcsSUFBSSxJQUFJO0FBQ1pmLFNBQUssR0FBR2UsSUFBUjtBQUNELEdBSkssQ0FBTjtBQU1BLFFBQU1DLEtBQUssR0FBR2hCLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVUMsSUFBSSxJQUFJO0FBQzlCLFdBQU87QUFDTEMsWUFBTSxFQUFFO0FBQ05mLFVBQUUsRUFBRyxHQUFFYyxJQUFJLENBQUNkLEVBQUc7QUFEVDtBQURILEtBQVA7QUFLRCxHQU5hLENBQWQ7QUFRQSxTQUFPO0FBQ0xZLFNBREs7QUFFTEksWUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlELENBckJNO0FBdUJBLE1BQU1DLGNBQWMsR0FBRyxPQUFNO0FBQUNGO0FBQUQsQ0FBTixLQUFtQjtBQUMvQyxNQUFJbkIsS0FBSjtBQUVBLFFBQU1XLEtBQUssQ0FBRSw4Q0FBNkNRLE1BQU0sQ0FBQ2YsRUFBRyxFQUF6RCxDQUFMLENBQ0xRLElBREssQ0FDQUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEUCxFQUVMRixJQUZLLENBRUFHLElBQUksSUFBSTtBQUNaZixTQUFLLEdBQUdlLElBQVI7QUFDRCxHQUpLLENBQU47QUFNQSxTQUFPO0FBQ0xPLFNBQUssRUFBRTtBQUNMdEI7QUFESztBQURGLEdBQVA7QUFLRCxDQWRNO0FBZ0JQLCtEQUFlRCxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlcnMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy90aXRsZSc7XG5cbmNvbnN0IFVzZXIgPSAoe3VzZXJzfSkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcbiAgICByZXR1cm4gPGRpdj5DYXJnYW5kby4uLjwvZGl2PlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlVzZXIgI3t1c2Vycy5pZH08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm1pIG5vbWJyZSBlcyBtYXRpYXMgeSBlc3RveSBwcm9iYW5kbyBlbCBjb21wb25lbnRlIEhlYWQgcXVlIG9mcmVjZSBuZXh0SlNcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlVzZXIgRGV0YWlsczwvVGl0bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGgyPnt1c2Vycy5uYW1lfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VuXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHt1c2Vycy5pZH0uanBnYH1cbiAgICAgICAgICBhbHQ9XCJwZXJmaWxcIlxuICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgaGVpZ2h0PXs2MDB9XG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIi8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+e3VzZXJzLmNvbXBhbnkubmFtZX08L2gzPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPnt1c2Vycy5waG9uZX08L2xpPlxuICAgICAgICAgIDxsaT57dXNlcnMuZW1haWx9PC9saT5cbiAgICAgICAgICA8bGk+e3VzZXJzLndlYnNpdGV9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIC5pbWFnZW57XG4gICAgICAgICAgcGFkZGluZzoxZW07XG4gICAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgd2lkdGg6IDIwZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQ6aG92ZXJ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQgdWx7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIHVzZXJzID0gZGF0YVxuICB9KVxuXG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKHVzZXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGAke3VzZXIuaWR9YFxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoe3BhcmFtc30pID0+IHtcbiAgdmFyIHVzZXJzXG5cbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_image_js","components_title_js"], function() { return __webpack_exec__("./pages/users/[id].js"); });
module.exports = __webpack_exports__;

})();