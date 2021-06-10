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
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/title */ \"./components/title.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/pc/Documentos/NextJS/pages/posts/index.js\";\n\n\n\n\n\nconst Posts = ({\n  posts\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        className: \"jsx-3808901451\",\n        children: \"Landing page posts\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"mi nombre es matias y estoy probando el componente Head que ofrece nextJS\",\n        className: \"jsx-3808901451\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_title__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: \"Posts Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"jsx-3808901451\",\n      children: posts.map((post, i) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"/posts/[id]\",\n          as: `/posts/${post.id}`,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: \"jsx-3808901451\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n              className: \"jsx-3808901451\",\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"jsx-3808901451\",\n              children: post.body\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 19,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, undefined)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"3808901451\",\n      children: \"div.jsx-3808901451{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-3808901451{width:15em;min-height:16em;max-height:16em;margin:0.5em;border:1px solid darkgray;border-radius:0.5em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-text-decoration:none;text-decoration:none;}a.jsx-3808901451:hover{border:1px solid darkblue;}a.jsx-3808901451 p.jsx-3808901451,a.jsx-3808901451 h3.jsx-3808901451{margin:1em;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BjL0RvY3VtZW50b3MvTmV4dEpTL3BhZ2VzL3Bvc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCUyxBQUcwQixBQU9GLEFBY2UsQUFHZixXQWhCSyxBQWlCbEIsZUFIQSxDQWJrQixnQkFDSCxhQUNhLGtCQVZQLFFBV0Msb0JBQ1AseUNBWEUsaUNBWU8sd0JBWEMsc0RBWUEsNkNBWEosc0RBWUEsdUNBWHJCLHNEQVlvQixrQkFDRyxrREFDdkIiLCJmaWxlIjoiL2hvbWUvcGMvRG9jdW1lbnRvcy9OZXh0SlMvcGFnZXMvcG9zdHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBQb3N0cyA9ICh7cG9zdHN9KSA9PiB7XG4gIHJldHVybihcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkxhbmRpbmcgcGFnZSBwb3N0czwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwibWkgbm9tYnJlIGVzIG1hdGlhcyB5IGVzdG95IHByb2JhbmRvIGVsIGNvbXBvbmVudGUgSGVhZCBxdWUgb2ZyZWNlIG5leHRKU1wiLz5cbiAgICA8L0hlYWQ+XG4gICAgICA8VGl0bGU+UG9zdHMgUGFnZTwvVGl0bGU+XG4gICAgICA8ZGl2PlxuICAgICAge3Bvc3RzLm1hcCgocG9zdCxpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtwb3N0LmlkfWB9IGtleT17aX0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgIDxwPntwb3N0LmJvZHl9PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGF7XG4gICAgICAgICAgICB3aWR0aDogMTVlbTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2ZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlcntcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtibHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHAsIGEgaDN7XG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYygpID0+IHtcbiAgdmFyIHBvc3RzXG5cbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBwb3N0cyA9IGRhdGFcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0c1xuICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl19 */\\n/*@ sourceURL=/home/pc/Documentos/NextJS/pages/posts/index.js */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true);\n};\n\nconst getServerSideProps = async () => {\n  var posts;\n  await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => {\n    posts = data;\n  });\n  return {\n    props: {\n      posts\n    } // will be passed to the page component as props\n\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXh0SlMvLi9wYWdlcy9wb3N0cy9pbmRleC5qcz84Mjc1Il0sIm5hbWVzIjpbIlBvc3RzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaSIsImlkIiwidGl0bGUiLCJib2R5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWE7QUFDekIsc0JBQ0U7QUFBQSw0QkFDQSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQywyRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBS0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFBO0FBQUEsZ0JBQ0NBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLENBQUNDLElBQUQsRUFBTUMsQ0FBTixLQUFZO0FBQ3JCLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBeUIsWUFBRSxFQUFHLFVBQVNELElBQUksQ0FBQ0UsRUFBRyxFQUEvQztBQUFBLGlDQUNFO0FBQUE7QUFBQSxvQ0FDRTtBQUFBO0FBQUEsd0JBQUtGLElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBLHdCQUFJSCxJQUFJLENBQUNJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUF1REgsQ0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVFELE9BVEE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFvREQsQ0FyREQ7O0FBdURPLE1BQU1JLGtCQUFrQixHQUFHLFlBQVc7QUFDM0MsTUFBSVAsS0FBSjtBQUVBLFFBQU1RLEtBQUssQ0FBQyw0Q0FBRCxDQUFMLENBQ0xDLElBREssQ0FDQUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEUCxFQUVMRixJQUZLLENBRUFHLElBQUksSUFBSTtBQUNaWixTQUFLLEdBQUdZLElBQVI7QUFDRCxHQUpLLENBQU47QUFNQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMYjtBQURLLEtBREYsQ0FHRjs7QUFIRSxHQUFQO0FBS0QsQ0FkTTtBQWdCUCwrREFBZUQsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RpdGxlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgUG9zdHMgPSAoe3Bvc3RzfSkgPT4ge1xuICByZXR1cm4oXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5MYW5kaW5nIHBhZ2UgcG9zdHM8L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIm1pIG5vbWJyZSBlcyBtYXRpYXMgeSBlc3RveSBwcm9iYW5kbyBlbCBjb21wb25lbnRlIEhlYWQgcXVlIG9mcmVjZSBuZXh0SlNcIi8+XG4gICAgPC9IZWFkPlxuICAgICAgPFRpdGxlPlBvc3RzIFBhZ2U8L1RpdGxlPlxuICAgICAgPGRpdj5cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7cG9zdC5pZH1gfSBrZXk9e2l9PlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhe1xuICAgICAgICAgICAgd2lkdGg6IDE1ZW07XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNmVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTZlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMC41ZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXJ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSBwLCBhIGgze1xuICAgICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMoKSA9PiB7XG4gIHZhciBwb3N0c1xuXG4gIGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgcG9zdHMgPSBkYXRhXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHNcbiAgICB9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n");

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js","components_title_js"], function() { return __webpack_exec__("./pages/posts/index.js"); });
module.exports = __webpack_exports__;

})();