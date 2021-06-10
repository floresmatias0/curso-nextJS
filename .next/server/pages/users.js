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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/pc/Documentos/NextJS/pages/users/index.js\";\n\n// import React from 'react'\n\n\n\n\nconst Users = ({\n  users\n}) => {\n  // CLIENT SIDE SERVER\n  // const [users,setUsers] = React.useState([]);\n  //\n  // React.useEffect(() => {\n  //   const fecthUsers = async() => {\n  //     return await fetch('https://jsonplaceholder.typicode.com/users')\n  //     .then(res => res.json())\n  //     .then(data => {\n  //       console.log(data)\n  //       setUsers(data)\n  //     })\n  //   }\n  //\n  //   fecthUsers();\n  // },[])\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: \"Users Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3877993228\",\n      children: users.map((user, i) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"/users/[id]\",\n          as: `/users/${user.id}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"jsx-3877993228\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              className: \"jsx-3877993228\",\n              children: user.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: \"jsx-3877993228\",\n              children: user.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: \"jsx-3877993228\",\n              children: user.email\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, undefined)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3877993228\",\n      children: \"div.jsx-3877993228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3877993228{width:15em;min-height:16em;max-height:16em;margin:0.5em;border:1px solid darkgray;border-radius:0.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3877993228:hover{border:1px solid darkblue;}a.jsx-3877993228 h4.jsx-3877993228,a.jsx-3877993228 h3.jsx-3877993228{margin:1em;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3VzZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDUyxBQUcwQixBQU9GLEFBY2UsQUFHZixXQWhCSyxBQWlCbEIsZUFIQSxDQWJrQixnQkFDSCxhQUNhLGtCQVZQLFFBV0Msb0JBQ1AseUNBWEUsaUNBWU8sd0JBWEMsc0RBWUEsNkNBWEosc0RBWUEsdUNBWHJCLHNEQVlvQixrQkFDRyxrREFDdkIiLCJmaWxlIjoiL2hvbWUvcGMvRG9jdW1lbnRvcy9OZXh0SlMvcGFnZXMvdXNlcnMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xuICAvLyBDTElFTlQgU0lERSBTRVJWRVJcbiAgLy8gY29uc3QgW3VzZXJzLHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy9cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBmZWN0aFVzZXJzID0gYXN5bmMoKSA9PiB7XG4gIC8vICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyAgICAgICBzZXRVc2VycyhkYXRhKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgZmVjdGhVc2VycygpO1xuICAvLyB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZT5Vc2VycyBQYWdlPC9UaXRsZT5cbiAgICAgIDxkaXY+XG4gICAgICB7dXNlcnMubWFwKCh1c2VyLGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1tpZF1cIiBhcz17YC91c2Vycy8ke3VzZXIuaWR9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+e3VzZXIudXNlcm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfTwvaDQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXtcbiAgICAgICAgICAgIHdpZHRoOiAxNWVtO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTZlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2ZW07XG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEgaDQsIGEgaDN7XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdfQ== */\\n/*@ sourceURL=/home/pc/Documentos/NextJS/pages/users/index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async () => {\n  var users;\n  await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {\n    console.log(data);\n    users = data;\n  });\n  return {\n    props: {\n      users\n    } // will be passed to the page component as props\n\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy91c2Vycy9pbmRleC5qcz81YmQ4Il0sIm5hbWVzIjpbIlVzZXJzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiaSIsImlkIiwibmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQSxnQkFDQ0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQ0MsSUFBRCxFQUFNQyxDQUFOLEtBQVk7QUFDckIsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixZQUFFLEVBQUcsVUFBU0QsSUFBSSxDQUFDRSxFQUFHLEVBQS9DO0FBQUEsaUNBQ0U7QUFBQTtBQUFBLG9DQUNFO0FBQUE7QUFBQSx3QkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFBO0FBQUEsd0JBQUtILElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBQTtBQUFBLHdCQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUF1REosQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVNELE9BVkE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0RELENBbkVEOztBQXFFTyxNQUFNSyxrQkFBa0IsR0FBRyxZQUFXO0FBQzNDLE1BQUlSLEtBQUo7QUFFQSxRQUFNUyxLQUFLLENBQUMsNENBQUQsQ0FBTCxDQUNMQyxJQURLLENBQ0FDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRFAsRUFFTEYsSUFGSyxDQUVBRyxJQUFJLElBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQWIsU0FBSyxHQUFHYSxJQUFSO0FBQ0QsR0FMSyxDQUFOO0FBT0EsU0FBTztBQUNMRyxTQUFLLEVBQUU7QUFDTGhCO0FBREssS0FERixDQUdGOztBQUhFLEdBQVA7QUFLRCxDQWZNO0FBaUJQLCtEQUFlRCxLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT4ge1xuICAvLyBDTElFTlQgU0lERSBTRVJWRVJcbiAgLy8gY29uc3QgW3VzZXJzLHNldFVzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgLy9cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBmZWN0aFVzZXJzID0gYXN5bmMoKSA9PiB7XG4gIC8vICAgICByZXR1cm4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAvLyAgICAgICBzZXRVc2VycyhkYXRhKVxuICAvLyAgICAgfSlcbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgZmVjdGhVc2VycygpO1xuICAvLyB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUaXRsZT5Vc2VycyBQYWdlPC9UaXRsZT5cbiAgICAgIDxkaXY+XG4gICAgICB7dXNlcnMubWFwKCh1c2VyLGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzL1tpZF1cIiBhcz17YC91c2Vycy8ke3VzZXIuaWR9YH0ga2V5PXtpfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8aDM+e3VzZXIubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+e3VzZXIudXNlcm5hbWV9PC9oND5cbiAgICAgICAgICAgICAgPGg0Pnt1c2VyLmVtYWlsfTwvaDQ+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXtcbiAgICAgICAgICAgIHdpZHRoOiAxNWVtO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTZlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE2ZW07XG4gICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2JsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEgaDQsIGEgaDN7XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKCkgPT4ge1xuICB2YXIgdXNlcnNcblxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGRhdGEgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgdXNlcnMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgdXNlcnNcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/index.js\n");

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