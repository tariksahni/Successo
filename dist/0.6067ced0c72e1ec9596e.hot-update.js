webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: '',\n      login: 'false'\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n      var _this2 = this;\n\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n\n        sessionStorage.setItem(\"LoggedIn\", true);\n        _this2.setState({ login: 'true' });\n        // console.log(isLoggedIn);\n      }).catch(function (error) {\n        console.log(error);\n        alert(\"Username or password is invalid !!!\");\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // const isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      var isLoggedIn = this.state.login;\n      console.log(isLoggedIn);\n      console.log(isLoggedIn);\n      return _react2.default.createElement(\n        'div',\n        null,\n        isLoggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/dashboard' } }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'form',\n            { className: 'form-signin' },\n            _react2.default.createElement(\n              'h2',\n              { className: 'form-signin-heading' },\n              'Please sign in'\n            ),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputEmail', className: 'sr-only' },\n              'Email address'\n            ),\n            _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputPassword', className: 'sr-only' },\n              'Password'\n            ),\n            _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n              'Sign in'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              'Signup'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJwb3N0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnJvciIsImFsZXJ0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXNMb2dnZWRJbiIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRixJQUExQixPQUE1QjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxhQUFPO0FBSEksS0FBYjtBQUxpQjtBQVVsQjs7Ozs2QkFFTztBQUFBOztBQUVSLHNCQUFNQyxJQUFOLENBQVcsZUFBWCxFQUE0QjtBQUMxQkgsZUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBRFE7QUFFMUJDLGtCQUFVLEtBQUtGLEtBQUwsQ0FBV0U7QUFGSyxPQUE1QixFQUlHRyxJQUpILENBSVEsb0JBQVk7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVlDLFFBQVo7O0FBRUFDLHVCQUFlQyxPQUFmLENBQXVCLFVBQXZCLEVBQWtDLElBQWxDO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEVBQUNSLE9BQU0sTUFBUCxFQUFkO0FBQ0E7QUFDRCxPQVZILEVBV0dTLEtBWEgsQ0FXUyxpQkFBUztBQUNkTixnQkFBUUMsR0FBUixDQUFZTSxLQUFaO0FBQ0FDLGNBQU0scUNBQU47QUFDRCxPQWRIO0FBZUM7OztzQ0FHaUJDLEMsRUFBRTtBQUNsQixXQUFLSixRQUFMLENBQWMsRUFBQ1YsT0FBTWMsRUFBRUMsTUFBRixDQUFTQyxLQUFoQixFQUFkO0FBQ0Q7Ozt5Q0FDb0JGLEMsRUFBRTtBQUNyQixXQUFLSixRQUFMLENBQWMsRUFBQ1QsVUFBU2EsRUFBRUMsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQO0FBQ0EsVUFBTUMsYUFBYSxLQUFLbEIsS0FBTCxDQUFXRyxLQUE5QjtBQUNBRyxjQUFRQyxHQUFSLENBQVlXLFVBQVo7QUFDQVosY0FBUUMsR0FBUixDQUFZVyxVQUFaO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDR0EscUJBQWEsMERBQVcsSUFBSSxFQUFDQyxVQUFVLFlBQVgsRUFBZixHQUFiLEdBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxhQUFoQjtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLHFCQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFPLE9BQUksWUFBWCxFQUF3QixXQUFVLFNBQWxDO0FBQUE7QUFBQSxhQUZGO0FBR0UscURBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS3JCLGlCQUFuQyxFQUFzRCxJQUFHLFlBQXpELEVBQXNFLFdBQVUsY0FBaEYsRUFBK0YsYUFBWSxlQUEzRyxFQUEySCxjQUEzSCxHQUhGO0FBSUU7QUFBQTtBQUFBLGdCQUFPLE9BQUksZUFBWCxFQUEyQixXQUFVLFNBQXJDO0FBQUE7QUFBQSxhQUpGO0FBS0UscURBQU8sTUFBSyxVQUFaLEVBQXVCLFVBQVUsS0FBS0Msb0JBQXRDLEVBQTRELElBQUcsZUFBL0QsRUFBK0UsV0FBVSxjQUF6RixFQUF3RyxhQUFZLFVBQXBILEVBQStILGNBQS9ILEdBTEY7QUFPRTtBQUFBO0FBQUEsZ0JBQVEsV0FBVSxrQ0FBbEIsRUFBcUQsU0FBUyxLQUFLSCxNQUFuRSxFQUEyRSxNQUFLLFFBQWhGO0FBQUE7QUFBQTtBQVBGLFdBREY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxTQUFUO0FBQW9CO0FBQXBCO0FBREY7QUFWRjtBQUZKLE9BREY7QUFvQkQ7Ozs7OztrQkFJVUYsTSIsImZpbGUiOiI3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwLmpzeCcgO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rLCBSZWRpcmVjdH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTaWduSW4gIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zaWduSW4gPSB0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgbG9naW46ICdmYWxzZSdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2lnbkluKCl7XG5cbiAgICBheGlvcy5wb3N0KCcvdGFza3Mvc2lnbmluJywge1xuICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiTG9nZ2VkSW5cIix0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9naW46J3RydWUnfSkgO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpc0xvZ2dlZEluKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgb3IgcGFzc3dvcmQgaXMgaW52YWxpZCAhISFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG5cbiAgICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG4gICAgaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgLy8gY29uc3QgaXNMb2dnZWRJbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJMb2dnZWRJblwiKTtcbiAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSB0aGlzLnN0YXRlLmxvZ2luO1xuICAgICAgY29uc29sZS5sb2coaXNMb2dnZWRJbik7XG4gICAgICBjb25zb2xlLmxvZyhpc0xvZ2dlZEluKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8IFJlZGlyZWN0IHRvPXt7cGF0aG5hbWU6ICcvZGFzaGJvYXJkJ319Lz46IChcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXNpZ25pblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0gaWQ9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZX0gaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMuc2lnbklufSB0eXBlPVwiYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+eydTaWdudXAnfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbiA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});