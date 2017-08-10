webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: '',\n      login: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n\n        sessionStorage.setItem(\"LoggedIn\", true);\n\n        // console.log(isLoggedIn);\n      }).catch(function (error) {\n        console.log(error);\n        alert(\"Username or password is invalid !!!\");\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      console.log(isLoggedIn);\n      return _react2.default.createElement(\n        'div',\n        null,\n        isLoggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/dashboard' } }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'form',\n            { className: 'form-signin' },\n            _react2.default.createElement(\n              'h2',\n              { className: 'form-signin-heading' },\n              'Please sign in'\n            ),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputEmail', className: 'sr-only' },\n              'Email address'\n            ),\n            _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputPassword', className: 'sr-only' },\n              'Password'\n            ),\n            _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n              'Sign in'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              'Signup'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJwb3N0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaXNMb2dnZWRJbiIsImdldEl0ZW0iLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsT0FBekI7QUFDQSxVQUFLRSxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkYsSUFBMUIsT0FBNUI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsYUFBTztBQUhJLEtBQWI7QUFMaUI7QUFVbEI7Ozs7NkJBRU87O0FBRVIsc0JBQU1DLElBQU4sQ0FBVyxlQUFYLEVBQTRCO0FBQzFCSCxlQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FEUTtBQUUxQkMsa0JBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUZLLE9BQTVCLEVBSUdHLElBSkgsQ0FJUSxvQkFBWTtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWUMsUUFBWjs7QUFFQUMsdUJBQWVDLE9BQWYsQ0FBdUIsVUFBdkIsRUFBa0MsSUFBbEM7O0FBRUE7QUFDRCxPQVZILEVBV0dDLEtBWEgsQ0FXUyxpQkFBUztBQUNkTCxnQkFBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0FDLGNBQU0scUNBQU47QUFDRCxPQWRIO0FBZUM7OztzQ0FHaUJDLEMsRUFBRTtBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ2QsT0FBTWEsRUFBRUUsTUFBRixDQUFTQyxLQUFoQixFQUFkO0FBQ0Q7Ozt5Q0FDb0JILEMsRUFBRTtBQUNyQixXQUFLQyxRQUFMLENBQWMsRUFBQ2IsVUFBU1ksRUFBRUUsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLGFBQWFULGVBQWVVLE9BQWYsQ0FBdUIsVUFBdkIsQ0FBbkI7QUFDQWIsY0FBUUMsR0FBUixDQUFZVyxVQUFaO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDR0EscUJBQWEsMERBQVcsSUFBSSxFQUFDRSxVQUFVLFlBQVgsRUFBZixHQUFiLEdBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxhQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLHFCQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFPLE9BQUksWUFBWCxFQUF3QixXQUFVLFNBQWxDO0FBQUE7QUFBQSxhQUZGO0FBR0UscURBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS3RCLGlCQUFuQyxFQUFzRCxJQUFHLFlBQXpELEVBQXNFLFdBQVUsY0FBaEYsRUFBK0YsYUFBWSxlQUEzRyxFQUEySCxjQUEzSCxHQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFPLE9BQUksZUFBWCxFQUEyQixXQUFVLFNBQXJDO0FBQUE7QUFBQSxhQUpGO0FBS0UscURBQU8sTUFBSyxVQUFaLEVBQXVCLFVBQVUsS0FBS0Msb0JBQXRDLEVBQTRELElBQUcsZUFBL0QsRUFBK0UsV0FBVSxjQUF6RixFQUF3RyxhQUFZLFVBQXBILEVBQStILGNBQS9ILEdBTEY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxrQ0FBbEIsRUFBcUQsU0FBUyxLQUFLSCxNQUFuRSxFQUEyRSxNQUFLLFFBQWhGO0FBQUE7QUFBQTtBQVBGLFdBREY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxTQUFUO0FBQW9CO0FBQXBCO0FBREY7QUFWRjtBQUZKLE9BREY7QUFvQkQ7Ozs7OztrQkFJVUYsTSIsImZpbGUiOiI3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwLmpzeCcgO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTaWduSW4gIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zaWduSW4gPSB0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgbG9naW46ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNpZ25Jbigpe1xuXG4gICAgYXhpb3MucG9zdCgnL3Rhc2tzL3NpZ25pbicsIHtcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIkxvZ2dlZEluXCIsdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0xvZ2dlZEluKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW52YWxpZCAhISFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG5cbiAgICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG4gICAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJMb2dnZWRJblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IDwgUmVkaXJlY3QgdG89e3twYXRobmFtZTogJy9kYXNoYm9hcmQnfX0vPjogKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj5QbGVhc2Ugc2lnbiBpbjwvaDI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlfSBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5zaWduSW59IHR5cGU9XCJidXR0b25cIj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj57J1NpZ251cCd9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluIDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMtTG9naW4vU2lnbkluLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=")}});