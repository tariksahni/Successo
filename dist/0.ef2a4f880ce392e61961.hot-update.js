webpackHotUpdate(0,{75:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _SignIn = __webpack_require__(74);\n\nvar _SignIn2 = _interopRequireDefault(_SignIn);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignUp = function (_Component) {\n  _inherits(SignUp, _Component);\n\n  function SignUp(props) {\n    _classCallCheck(this, SignUp);\n\n    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n    _this.signUp = _this.signUp.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.handleNameChange = _this.handleNameChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: '',\n      name: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: 'signUp',\n    value: function signUp() {\n\n      _axios2.default.post('/tasks/signup', {\n        email: this.state.email,\n        password: this.state.password,\n        name: this.state.name\n      }).then(function (response) {\n        console.log(response);\n        window.location.href = '/';\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'handleNameChange',\n    value: function handleNameChange(e) {\n      this.setState({ name: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'signup_box' },\n        _react2.default.createElement(\n          'form',\n          { className: 'form-signup' },\n          _react2.default.createElement(\n            'h2',\n            { className: 'form-signup-heading' },\n            'Please sign up'\n          ),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputName', className: 'sr-only-signup' },\n            'Name'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { type: 'name', onChange: this.handleNameChange, id: 'inputName', className: 'form-control-signup', required: true }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputEmail', className: 'sr-only-signup' },\n            'Email address'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control-signup', required: true }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'label',\n            { 'for': 'inputPassword', className: 'sr-only-signup' },\n            'Password'\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control-signup', required: true }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(\n            'button',\n            { className: 'btn btn-lg btn-primary btn-block button_signup', onClick: this.signUp, type: 'button' },\n            'Sign up'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/' },\n              'SignIn'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react.Component);\n\nexports.default = SignUp;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25VcC5qc3g/YjZiMSJdLCJuYW1lcyI6WyJTaWduVXAiLCJwcm9wcyIsInNpZ25VcCIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsIm5hbWUiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZXJyb3IiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUVGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRixJQUExQixPQUE1QjtBQUNBLFVBQUtHLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCSCxJQUF0QixPQUF4QjtBQUNBLFVBQUtJLEtBQUwsR0FBYTtBQUNYQyxhQUFNLEVBREs7QUFFWEMsZ0JBQVMsRUFGRTtBQUdYQyxZQUFLO0FBSE0sS0FBYjtBQU5pQjtBQVdsQjs7Ozs2QkFFTzs7QUFFTixzQkFBTUMsSUFBTixDQUFXLGVBQVgsRUFBNEI7QUFDMUJILGVBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQURRO0FBRTFCQyxrQkFBVSxLQUFLRixLQUFMLENBQVdFLFFBRks7QUFHMUJDLGNBQU0sS0FBS0gsS0FBTCxDQUFXRztBQUhTLE9BQTVCLEVBS0NFLElBTEQsQ0FLTSxVQUFVQyxRQUFWLEVBQW9CO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0FHLGVBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0QsT0FSRCxFQVNDQyxLQVRELENBU08sVUFBVUMsS0FBVixFQUFpQjtBQUN0Qk4sZ0JBQVFDLEdBQVIsQ0FBWUssS0FBWjtBQUNELE9BWEQ7QUFZRDs7O3NDQUVpQkMsQyxFQUFFO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDZCxPQUFNYSxFQUFFRSxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7O3lDQUVvQkgsQyxFQUFFO0FBQ3JCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDYixVQUFTWSxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7O3FDQUVnQkgsQyxFQUFFO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYyxFQUFDWixNQUFLVyxFQUFFRSxNQUFGLENBQVNDLEtBQWYsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksWUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBVSxxQkFBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFPLE9BQUksV0FBWCxFQUF1QixXQUFVLGdCQUFqQztBQUFBO0FBQUEsV0FGRjtBQUVnRSxtREFGaEU7QUFHRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLbEIsZ0JBQWxDLEVBQW9ELElBQUcsV0FBdkQsRUFBbUUsV0FBVSxxQkFBN0UsRUFBb0csY0FBcEcsR0FIRjtBQUdpSCxtREFIakg7QUFJRTtBQUFBO0FBQUEsY0FBTyxPQUFJLFlBQVgsRUFBd0IsV0FBVSxnQkFBbEM7QUFBQTtBQUFBLFdBSkY7QUFJMEUsbURBSjFFO0FBS0UsbURBQU8sTUFBSyxPQUFaLEVBQW9CLFVBQVUsS0FBS0YsaUJBQW5DLEVBQXNELElBQUcsWUFBekQsRUFBc0UsV0FBVSxxQkFBaEYsRUFBdUcsY0FBdkcsR0FMRjtBQUtvSCxtREFMcEg7QUFNRTtBQUFBO0FBQUEsY0FBTyxPQUFJLGVBQVgsRUFBMkIsV0FBVSxnQkFBckM7QUFBQTtBQUFBLFdBTkY7QUFNd0UsbURBTnhFO0FBT0UsbURBQU8sTUFBSyxVQUFaLEVBQXVCLFVBQVUsS0FBS0Msb0JBQXRDLEVBQTRELElBQUcsZUFBL0QsRUFBK0UsV0FBVSxxQkFBekYsRUFBK0csY0FBL0csR0FQRjtBQU80SCxtREFQNUg7QUFTRTtBQUFBO0FBQUEsY0FBUSxXQUFVLGdEQUFsQixFQUFtRSxTQUFTLEtBQUtILE1BQWpGLEVBQXlGLE1BQUssUUFBOUY7QUFBQTtBQUFBLFdBVEY7QUFVRztBQUFBO0FBQUE7QUFDRDtBQUFBO0FBQUEsZ0JBQU0sSUFBRyxHQUFUO0FBQWM7QUFBZDtBQURDO0FBVkg7QUFERixPQURGO0FBb0JEOzs7Ozs7a0JBR1VGLE0iLCJmaWxlIjoiNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9TaWduSW4uanN4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4vY3NzL3N0eWxlcy5jc3NcIjtcblxuY2xhc3MgU2lnblVwIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc2lnblVwID0gdGhpcy5zaWduVXAuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlRW1haWxDaGFuZ2UgPSB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBlbWFpbDonJyxcbiAgICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICAgIG5hbWU6JydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc2lnblVwKCl7XG5cbiAgICAgIGF4aW9zLnBvc3QoJy90YXNrcy9zaWdudXAnLCB7XG4gICAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVFbWFpbENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICBoYW5kbGVQYXNzd29yZENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICBoYW5kbGVOYW1lQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcInNpZ251cF9ib3hcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXNpZ251cFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvcm0tc2lnbnVwLWhlYWRpbmdcIj5QbGVhc2Ugc2lnbiB1cDwvaDI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXROYW1lXCIgY2xhc3NOYW1lPVwic3Itb25seS1zaWdudXBcIj5OYW1lPC9sYWJlbD48YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9IGlkPVwiaW5wdXROYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sLXNpZ251cFwiICByZXF1aXJlZCAvPjxicj48L2JyPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJzci1vbmx5LXNpZ251cFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlfSBpZD1cImlucHV0RW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtc2lnbnVwXCIgIHJlcXVpcmVkIC8+PGJyPjwvYnI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRQYXNzd29yZFwiIGNsYXNzTmFtZT1cInNyLW9ubHktc2lnbnVwXCI+UGFzc3dvcmQ8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wtc2lnbnVwXCIgcmVxdWlyZWQgLz48YnI+PC9icj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9jayBidXR0b25fc2lnbnVwXCIgb25DbGljaz17dGhpcy5zaWduVXB9IHR5cGU9XCJidXR0b25cIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPnsnU2lnbkluJ308L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcCA7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy1Mb2dpbi9TaWduVXAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==")}});