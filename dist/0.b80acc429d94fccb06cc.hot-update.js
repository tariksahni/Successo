webpackHotUpdate(0,{147:function(module,exports,__webpack_require__){eval("'use strict';\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(183);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _SignIn = __webpack_require__(74);\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _App = __webpack_require__(142);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _redux = __webpack_require__(120);\n\nvar _reducers = __webpack_require__(148);\n\nvar reducers = _interopRequireWildcard(_reducers);\n\nvar _reactRedux = __webpack_require__(107);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)(reducers);\nvar store = (0, _redux.createStore)(reducer);\n\n// ReactDOM.render(\n//   <Provider store={store} >\n//     <Successo/>\n//   </Provider>,\n//   document.getElementById('root')\n// );  \n\n\n_reactDom2.default.render(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(\n      'div',\n      { style: 'background-image: url(\\'http://wallpapercave.com/wp/AFMsKE5.jpg\\'); background-repeat:no-repeat;background-size:cover' },\n      _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { component: _SignIn2.default, exact: true, path: '/' }),\n        _react2.default.createElement(_reactRouterDom.Route, { component: _SignUp2.default, path: '/signup' }),\n        _react2.default.createElement(_reactRouterDom.Route, { component: _App2.default, path: '/dashboard' })\n      )\n    )\n  )\n), document.getElementById('root'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lbnRyeS5qc3g/MGExMiJdLCJuYW1lcyI6WyJyZWR1Y2VycyIsInJlZHVjZXIiLCJzdG9yZSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsUTs7QUFDWjs7Ozs7O0FBQ0EsSUFBTUMsVUFBVSw0QkFBZ0JELFFBQWhCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSx3QkFBWUQsT0FBWixDQUFkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQVNFLE1BQVQsQ0FDRTtBQUFBO0FBQUEsSUFBVSxPQUFPRCxLQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLE9BQU0sdUhBQVg7QUFDRTtBQUFBO0FBQUE7QUFDRSwrREFBTywyQkFBUCxFQUEwQixXQUExQixFQUFnQyxNQUFLLEdBQXJDLEdBREY7QUFFRSwrREFBTywyQkFBUCxFQUEwQixNQUFLLFNBQS9CLEdBRkY7QUFHRSwrREFBTyx3QkFBUCxFQUE0QixNQUFLLFlBQWpDO0FBSEY7QUFERjtBQURGO0FBREYsQ0FERixFQVlBRSxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBWkEiLCJmaWxlIjoiMTQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3gnO1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL0NvbXBvbmVudHMtTG9naW4vU2lnblVwLmpzeCc7XG5pbXBvcnQgU3VjY2Vzc28gZnJvbSAnLi9BcHAuanN4JztcbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gPlxuLy8gICAgIDxTdWNjZXNzby8+XG4vLyAgIDwvUHJvdmlkZXI+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4vLyApOyAgXG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfSA+XG4gICAgPEJyb3dzZXJSb3V0ZXIgPlxuICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3dhbGxwYXBlcmNhdmUuY29tL3dwL0FGTXNLRTUuanBnJyk7IGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6Y292ZXJcIj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTaWduSW59IGV4YWN0IHBhdGg9XCIvXCI+PC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTaWduVXB9IHBhdGg9XCIvc2lnbnVwXCI+PC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTdWNjZXNzb30gcGF0aD1cIi9kYXNoYm9hcmRcIj48L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPiAgLFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZW50cnkuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==")}});