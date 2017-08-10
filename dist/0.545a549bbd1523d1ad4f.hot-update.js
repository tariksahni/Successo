webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n\n      _axios2.default.post('/tasks/signup', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'form',\n          { className: 'form-signin' },\n          _react2.default.createElement(\n            'h2',\n            { className: 'form-signin-heading' },\n            'Please sign in'\n          ),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputEmail', className: 'sr-only' },\n            'Email address'\n          ),\n          _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputPassword', className: 'sr-only' },\n            'Password'\n          ),\n          _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n            'Sign in'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/signup' },\n            'Signup'\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLE9BQXpCO0FBQ0EsVUFBS0Usb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJGLElBQTFCLE9BQTVCO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFMaUI7QUFTbEI7Ozs7NkJBRU87O0FBRUosc0JBQU1DLElBQU4sQ0FBVyxlQUFYLEVBQTRCO0FBQzVCRixlQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FEVTtBQUU1QkMsa0JBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUZPLE9BQTVCLEVBSURFLElBSkMsQ0FJSSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0QsT0FOQyxFQU9ERyxLQVBDLENBT0ssVUFBVUMsS0FBVixFQUFpQjtBQUN0QkgsZ0JBQVFDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELE9BVEM7QUFVSDs7O3NDQUdpQkMsQyxFQUFFO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDVixPQUFNUyxFQUFFRSxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7O3lDQUNvQkgsQyxFQUFFO0FBQ3JCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDVCxVQUFTUSxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxxQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLE9BQUksWUFBWCxFQUF3QixXQUFVLFNBQWxDO0FBQUE7QUFBQSxXQUZGO0FBR0UsbURBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS2YsaUJBQW5DLEVBQXNELElBQUcsWUFBekQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixhQUFZLGVBQTNHLEVBQTJILGNBQTNILEdBSEY7QUFJRTtBQUFBO0FBQUEsY0FBTyxPQUFJLGVBQVgsRUFBMkIsV0FBVSxTQUFyQztBQUFBO0FBQUEsV0FKRjtBQUtFLG1EQUFPLE1BQUssVUFBWixFQUF1QixVQUFVLEtBQUtDLG9CQUF0QyxFQUE0RCxJQUFHLGVBQS9ELEVBQStFLFdBQVUsY0FBekYsRUFBd0csYUFBWSxVQUFwSCxFQUErSCxjQUEvSCxHQUxGO0FBT0U7QUFBQTtBQUFBLGNBQVEsV0FBVSxrQ0FBbEIsRUFBcUQsU0FBUyxLQUFLSCxNQUFuRSxFQUEyRSxNQUFLLFFBQWhGO0FBQUE7QUFBQTtBQVBGLFNBREY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxJQUFHLFNBQVQ7QUFBb0I7QUFBcEI7QUFERjtBQVZGLE9BREY7QUFpQkQ7Ozs7OztrQkFJVUYsTSIsImZpbGUiOiI3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnblVwIGZyb20gJy4vU2lnblVwLmpzeCcgO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFNpZ25JbiAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnNpZ25JbiA9IHRoaXMuc2lnbkluLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlID0gdGhpcy5oYW5kbGVFbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNpZ25Jbigpe1xuXG4gICAgICAgIGF4aW9zLnBvc3QoJy90YXNrcy9zaWdudXAnLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRW1haWxDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuICAgIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9IGlkPVwiaW5wdXRFbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIHJlcXVpcmVkICAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMuc2lnbklufSB0eXBlPVwiYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+eydTaWdudXAnfTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluIDtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});