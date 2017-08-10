webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n        sessionStorage.setItem(\"LoggedIn\", true);\n        this.setState();\n      }).catch(function (error) {\n        console.log(error);\n        alert(\"Username or password is invalid !!!\");\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      return _react2.default.createElement(\n        'div',\n        null,\n        isAlreadyAuthenticated ? _react2.default.createElement(Redirect, { to: { pathname: '/search' } }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'form',\n            { className: 'form-signin' },\n            _react2.default.createElement(\n              'h2',\n              { className: 'form-signin-heading' },\n              'Please sign in'\n            ),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputEmail', className: 'sr-only' },\n              'Email address'\n            ),\n            _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputPassword', className: 'sr-only' },\n              'Password'\n            ),\n            _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n              'Sign in'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              'Signup'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRTdGF0ZSIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzTG9nZ2VkSW4iLCJnZXRJdGVtIiwiaXNBbHJlYWR5QXV0aGVudGljYXRlZCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRixJQUExQixPQUE1QjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBTGlCO0FBU2xCOzs7OzZCQUVPOztBQUVSLHNCQUFNQyxJQUFOLENBQVcsZUFBWCxFQUE0QjtBQUMxQkYsZUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBRFE7QUFFMUJDLGtCQUFVLEtBQUtGLEtBQUwsQ0FBV0U7QUFGSyxPQUE1QixFQUlHRSxJQUpILENBSVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBRyx1QkFBZUMsT0FBZixDQUF1QixVQUF2QixFQUFrQyxJQUFsQztBQUNBLGFBQUtDLFFBQUw7QUFDRCxPQVJILEVBU0dDLEtBVEgsQ0FTUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTixnQkFBUUMsR0FBUixDQUFZSyxLQUFaO0FBQ0FDLGNBQU0scUNBQU47QUFDRCxPQVpIO0FBYUM7OztzQ0FHaUJDLEMsRUFBRTtBQUNsQixXQUFLSixRQUFMLENBQWMsRUFBQ1QsT0FBTWEsRUFBRUMsTUFBRixDQUFTQyxLQUFoQixFQUFkO0FBQ0Q7Ozt5Q0FDb0JGLEMsRUFBRTtBQUNyQixXQUFLSixRQUFMLENBQWMsRUFBQ1IsVUFBU1ksRUFBRUMsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLGFBQWFULGVBQWVVLE9BQWYsQ0FBdUIsVUFBdkIsQ0FBbkI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNHQyxpQ0FBeUIsOEJBQUMsUUFBRCxJQUFVLElBQUksRUFBQ0MsVUFBVSxTQUFYLEVBQWQsR0FBekIsR0FDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUscUJBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxZQUFYLEVBQXdCLFdBQVUsU0FBbEM7QUFBQTtBQUFBLGFBRkY7QUFHRSxxREFBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxLQUFLdEIsaUJBQW5DLEVBQXNELElBQUcsWUFBekQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixhQUFZLGVBQTNHLEVBQTJILGNBQTNILEdBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxlQUFYLEVBQTJCLFdBQVUsU0FBckM7QUFBQTtBQUFBLGFBSkY7QUFLRSxxREFBTyxNQUFLLFVBQVosRUFBdUIsVUFBVSxLQUFLQyxvQkFBdEMsRUFBNEQsSUFBRyxlQUEvRCxFQUErRSxXQUFVLGNBQXpGLEVBQXdHLGFBQVksVUFBcEgsRUFBK0gsY0FBL0gsR0FMRjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxXQUFVLGtDQUFsQixFQUFxRCxTQUFTLEtBQUtILE1BQW5FLEVBQTJFLE1BQUssUUFBaEY7QUFBQTtBQUFBO0FBUEYsV0FERjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTSxJQUFHLFNBQVQ7QUFBb0I7QUFBcEI7QUFERjtBQVZGO0FBRkosT0FERjtBQW9CRDs7Ozs7O2tCQUlVRixNIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAuanN4JyA7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgU2lnbkluICBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc2lnbkluID0gdGhpcy5zaWduSW4uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2lnbkluKCl7XG5cbiAgICBheGlvcy5wb3N0KCcvdGFza3Mvc2lnbmluJywge1xuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiTG9nZ2VkSW5cIix0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBhbGVydChcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGludmFsaWQgISEhXCIpXG4gICAgICB9KTtcbiAgICB9XG4gICAgXG5cbiAgICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG4gICAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgaXNMb2dnZWRJbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJMb2dnZWRJblwiKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2lzQWxyZWFkeUF1dGhlbnRpY2F0ZWQgPyA8UmVkaXJlY3QgdG89e3twYXRobmFtZTogJy9zZWFyY2gnfX0vPjogKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tc2lnbmluXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvcm0tc2lnbmluLWhlYWRpbmdcIj5QbGVhc2Ugc2lnbiBpbjwvaDI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlfSBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5zaWduSW59IHR5cGU9XCJidXR0b25cIj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj57J1NpZ251cCd9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluIDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMtTG9naW4vU2lnbkluLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=")}});