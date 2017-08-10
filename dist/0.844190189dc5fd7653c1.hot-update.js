webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n        sessionStorage.setItem(\"LoggedIn\", true);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          { className: 'form-signin' },\n          _react2.default.createElement(\n            'h2',\n            { className: 'form-signin-heading' },\n            'Please sign in'\n          ),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputEmail', className: 'sr-only' },\n            'Email address'\n          ),\n          _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputPassword', className: 'sr-only' },\n            'Password'\n          ),\n          _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n            'Sign in'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/signup' },\n            'Signup'\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJjYXRjaCIsImVycm9yIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJpc0xvZ2dlZEluIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFDRixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZQyxJQUFaLE9BQWQ7QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsT0FBekI7QUFDQSxVQUFLRSxvQkFBTCxHQUE0QixNQUFLQSxvQkFBTCxDQUEwQkYsSUFBMUIsT0FBNUI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGdCQUFVO0FBRkMsS0FBYjtBQUxpQjtBQVNsQjs7Ozs2QkFFTzs7QUFFUixzQkFBTUMsSUFBTixDQUFXLGVBQVgsRUFBNEI7QUFDMUJGLGVBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQURRO0FBRTFCQyxrQkFBVSxLQUFLRixLQUFMLENBQVdFO0FBRkssT0FBNUIsRUFJR0UsSUFKSCxDQUlRLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJDLGdCQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDQUcsdUJBQWVDLE9BQWYsQ0FBdUIsVUFBdkIsRUFBa0MsSUFBbEM7QUFDRCxPQVBILEVBUUdDLEtBUkgsQ0FRUyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCTCxnQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0QsT0FWSDtBQVdDOzs7c0NBR2lCQyxDLEVBQUU7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNaLE9BQU1XLEVBQUVFLE1BQUYsQ0FBU0MsS0FBaEIsRUFBZDtBQUNEOzs7eUNBQ29CSCxDLEVBQUU7QUFDckIsV0FBS0MsUUFBTCxDQUFjLEVBQUNYLFVBQVNVLEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxhQUFhUixlQUFlUyxPQUFmLENBQXVCLFVBQXZCLENBQW5CO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxxQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLE9BQUksWUFBWCxFQUF3QixXQUFVLFNBQWxDO0FBQUE7QUFBQSxXQUZGO0FBR0UsbURBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS25CLGlCQUFuQyxFQUFzRCxJQUFHLFlBQXpELEVBQXNFLFdBQVUsY0FBaEYsRUFBK0YsYUFBWSxlQUEzRyxFQUEySCxjQUEzSCxHQUhGO0FBSUU7QUFBQTtBQUFBLGNBQU8sT0FBSSxlQUFYLEVBQTJCLFdBQVUsU0FBckM7QUFBQTtBQUFBLFdBSkY7QUFLRSxtREFBTyxNQUFLLFVBQVosRUFBdUIsVUFBVSxLQUFLQyxvQkFBdEMsRUFBNEQsSUFBRyxlQUEvRCxFQUErRSxXQUFVLGNBQXpGLEVBQXdHLGFBQVksVUFBcEgsRUFBK0gsY0FBL0gsR0FMRjtBQU9FO0FBQUE7QUFBQSxjQUFRLFdBQVUsa0NBQWxCLEVBQXFELFNBQVMsS0FBS0gsTUFBbkUsRUFBMkUsTUFBSyxRQUFoRjtBQUFBO0FBQUE7QUFQRixTQURGO0FBVUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sSUFBRyxTQUFUO0FBQW9CO0FBQXBCO0FBREY7QUFWRixPQURGO0FBaUJEOzs7Ozs7a0JBSVVGLE0iLCJmaWxlIjoiNzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ25VcC5qc3gnIDtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTaWduSW4gIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zaWduSW4gPSB0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBzaWduSW4oKXtcblxuICAgIGF4aW9zLnBvc3QoJy90YXNrcy9zaWduaW4nLCB7XG4gICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJMb2dnZWRJblwiLHRydWUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRW1haWxDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuICAgIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiTG9nZ2VkSW5cIik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tc2lnbmluXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPlBsZWFzZSBzaWduIGluPC9oMj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlfSBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiByZXF1aXJlZCAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZX0gaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLnNpZ25Jbn0gdHlwZT1cImJ1dHRvblwiPlNpZ24gaW48L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NpZ251cFwiPnsnU2lnbnVwJ308L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbiA7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy1Mb2dpbi9TaWduSW4uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==")}});