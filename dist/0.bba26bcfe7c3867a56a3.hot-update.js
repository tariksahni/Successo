webpackHotUpdate(0,{75:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _SignIn = __webpack_require__(74);\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignUp = function (_Component) {\n  _inherits(SignUp, _Component);\n\n  function SignUp(props) {\n    _classCallCheck(this, SignUp);\n\n    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n    _this.signUp = _this.signUp.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.handleNameChange = _this.handleNameChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: '',\n      name: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: 'signUp',\n    value: function signUp() {\n\n      _axios2.default.post('/tasks/signup', {\n        email: this.state.email,\n        password: this.state.password,\n        name: this.state.name\n      }).then(function (response) {\n        console.log(response);\n        window.location.href = '/';\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'handleNameChange',\n    value: function handleNameChange(e) {\n      this.setState({ name: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'signup_box' },\n        _react2.default.createElement(\n          'form',\n          { className: 'form-signup' },\n          _react2.default.createElement(\n            'h2',\n            { className: 'form-signup-heading' },\n            'Please sign up'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputName', className: 'sr-only-signup' },\n              'Name'\n            ),\n            _react2.default.createElement('input', { type: 'name', onChange: this.handleNameChange, id: 'inputName', className: 'form-control-signup', required: true })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputEmail', className: 'sr-only-signup' },\n              'Email address'\n            ),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control-signup', required: true })\n          ),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputPassword', className: 'sr-only-signup' },\n            'Password'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control-signup', required: true }),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-lg btn-primary btn-block button_signup', onClick: this.signUp, type: 'button' },\n            'Sign up'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/' },\n              'SignIn'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react.Component);\n\nexports.default = SignUp;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25VcC5qc3g/YjZiMSJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsInNpZ25VcCIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUVGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRixJQUExQixPQUE1QjtBQUNBLFVBQUtHLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCSCxJQUF0QixPQUF4QjtBQUNBLFVBQUtJLEtBQUwsR0FBYTtBQUNYQyxhQUFNLEVBREs7QUFFWEMsZ0JBQVMsRUFGRTtBQUdYQyxZQUFLO0FBSE0sS0FBYjtBQU5pQjtBQVdsQjs7Ozs2QkFFTzs7QUFFTixzQkFBTUMsSUFBTixDQUFXLGVBQVgsRUFBNEI7QUFDMUJILGVBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQURRO0FBRTFCQyxrQkFBVSxLQUFLRixLQUFMLENBQVdFLFFBRks7QUFHMUJDLGNBQU0sS0FBS0gsS0FBTCxDQUFXRztBQUhTLE9BQTVCLEVBS0NFLElBTEQsQ0FLTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0FHLGVBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0QsT0FSRCxFQVNDQyxLQVRELENBU08sVUFBVUMsS0FBVixFQUFpQjtBQUN0Qk4sZ0JBQVFDLEdBQVIsQ0FBWUssS0FBWjtBQUNELE9BWEQ7QUFZRDs7O3NDQUVpQkMsQyxFQUFFO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDZCxPQUFNYSxFQUFFRSxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7O3lDQUVvQkgsQyxFQUFFO0FBQ3JCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDYixVQUFTWSxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7O3FDQUVnQkgsQyxFQUFFO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDWixNQUFLVyxFQUFFRSxNQUFGLENBQVNDLEtBQWYsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxxQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQkFBTyxPQUFJLFdBQVgsRUFBdUIsV0FBVSxnQkFBakM7QUFBQTtBQUFBLGFBREE7QUFFQSxxREFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLbEIsZ0JBQWxDLEVBQW9ELElBQUcsV0FBdkQsRUFBbUUsV0FBVSxxQkFBN0UsRUFBb0csY0FBcEc7QUFGQSxXQUZGO0FBTUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGdCQUFPLE9BQUksWUFBWCxFQUF3QixXQUFVLGdCQUFsQztBQUFBO0FBQUEsYUFEQTtBQUN3RSxxREFEeEU7QUFFQSxxREFBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxLQUFLRixpQkFBbkMsRUFBc0QsSUFBRyxZQUF6RCxFQUFzRSxXQUFVLHFCQUFoRixFQUF1RyxjQUF2RztBQUZBLFdBTkY7QUFVRTtBQUFBO0FBQUEsY0FBTyxPQUFJLGVBQVgsRUFBMkIsV0FBVSxnQkFBckM7QUFBQTtBQUFBLFdBVkY7QUFVd0UsbURBVnhFO0FBV0UsbURBQU8sTUFBSyxVQUFaLEVBQXVCLFVBQVUsS0FBS0Msb0JBQXRDLEVBQTRELElBQUcsZUFBL0QsRUFBK0UsV0FBVSxxQkFBekYsRUFBK0csY0FBL0csR0FYRjtBQWFFO0FBQUE7QUFBQSxjQUFRLFdBQVUsZ0RBQWxCLEVBQW1FLFNBQVMsS0FBS0gsTUFBakYsRUFBeUYsTUFBSyxRQUE5RjtBQUFBO0FBQUEsV0FiRjtBQWNHO0FBQUE7QUFBQTtBQUNEO0FBQUE7QUFBQSxnQkFBTSxJQUFHLEdBQVQ7QUFBYztBQUFkO0FBREM7QUFkSDtBQURGLE9BREY7QUF3QkQ7Ozs7OztrQkFHVUYsTSIsImZpbGUiOiI3NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuL1NpZ25Jbi5qc3gnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi9jc3Mvc3R5bGVzLmNzc1wiO1xuXG5jbGFzcyBTaWduVXAgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zaWduVXAgPSB0aGlzLnNpZ25VcC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVFbWFpbENoYW5nZSA9IHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDonJyxcbiAgICAgICAgbmFtZTonJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBzaWduVXAoKXtcblxuICAgICAgYXhpb3MucG9zdCgnL3Rhc2tzL3NpZ251cCcsIHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxuICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWVcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUVtYWlsQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIGhhbmRsZU5hbWVDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtuYW1lOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic2lnbnVwX2JveFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tc2lnbnVwXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybS1zaWdudXAtaGVhZGluZ1wiPlBsZWFzZSBzaWduIHVwPC9oMj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXROYW1lXCIgY2xhc3NOYW1lPVwic3Itb25seS1zaWdudXBcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9IGlkPVwiaW5wdXROYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXNpZ251cFwiICByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5LXNpZ251cFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlfSBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtc2lnbnVwXCIgIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwic3Itb25seS1zaWdudXBcIj5QYXNzd29yZDwvbGFiZWw+PGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2V9IGlkPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbC1zaWdudXBcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrIGJ1dHRvbl9zaWdudXBcIiBvbkNsaWNrPXt0aGlzLnNpZ25VcH0gdHlwZT1cImJ1dHRvblwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+eydTaWduSW4nfTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwIDtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzLUxvZ2luL1NpZ25VcC5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});