webpackHotUpdate(0,{147:function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(183);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _SignIn = __webpack_require__(74);\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _App = __webpack_require__(142);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _redux = __webpack_require__(120);\n\nvar _reducers = __webpack_require__(148);\n\nvar reducers = _interopRequireWildcard(_reducers);\n\nvar _reactRedux = __webpack_require__(107);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)(reducers);\nvar store = (0, _redux.createStore)(reducer);\n\n// ReactDOM.render(\n//   <Provider store={store} >\n//     <Successo/>\n//   </Provider>,\n//   document.getElementById('root')\n// );  \n\n\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRouterDom.BrowserRouter,\n  null,\n  _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Switch,\n      null,\n      _react2.default.createElement(_reactRouterDom.Route, { component: _SignIn2.default, exact: true, path: '/' }),\n      _react2.default.createElement(_reactRouterDom.Route, { component: _SignUp2.default, path: '/signup' }),\n      _react2.default.createElement(_reactRouterDom.Route, { component: _App2.default, path: '/dashboard', store: store })\n    )\n  )\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lbnRyeS5qc3g/MGExMiJdLCJuYW1lcyI6WyJyZWR1Y2VycyIsInJlZHVjZXIiLCJzdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsUTs7QUFDWjs7Ozs7O0FBQ0EsSUFBTUMsVUFBVSw0QkFBZ0JELFFBQWhCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSx3QkFBWUQsT0FBWixDQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQVNFLE1BQVQsQ0FDSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSw2REFBTywyQkFBUCxFQUEwQixXQUExQixFQUFnQyxNQUFLLEdBQXJDLEdBREY7QUFFRSw2REFBTywyQkFBUCxFQUEwQixNQUFLLFNBQS9CLEdBRkY7QUFHRSw2REFBTyx3QkFBUCxFQUE0QixNQUFLLFlBQWpDLEVBQThDLE9BQU9ELEtBQXJEO0FBSEY7QUFERjtBQURGLENBREosRUFVQUUsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQVZBIiwiZmlsZSI6IjE0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgU2lnbkluIGZyb20gJy4vQ29tcG9uZW50cy1Mb2dpbi9TaWduSW4uanN4JztcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9Db21wb25lbnRzLUxvZ2luL1NpZ25VcC5qc3gnO1xuaW1wb3J0IFN1Y2Nlc3NvIGZyb20gJy4vQXBwLmpzeCc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycyk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9ID5cbi8vICAgICA8U3VjY2Vzc28vPlxuLy8gICA8L1Byb3ZpZGVyPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuLy8gKTsgIFxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QnJvd3NlclJvdXRlciA+XG4gICAgICA8ZGl2PlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1NpZ25Jbn0gZXhhY3QgcGF0aD1cIi9cIj48L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1NpZ25VcH0gcGF0aD1cIi9zaWdudXBcIj48L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1N1Y2Nlc3NvfSBwYXRoPVwiL2Rhc2hib2FyZFwiIHN0b3JlPXtzdG9yZX0+PC9Sb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L2Rpdj4gIFxuICAgIDwvQnJvd3NlclJvdXRlcj4sXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9lbnRyeS5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});