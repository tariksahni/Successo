webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n\n        sessionStorage.setItem(\"LoggedIn\", true);\n        that.setState({});\n        // console.log(isLoggedIn);\n      }).catch(function (error) {\n        console.log(error);\n        alert(\"Username or password is invalid !!!\");\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      console.log(isLoggedIn);\n      return _react2.default.createElement(\n        'div',\n        null,\n        isLoggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/dashboard' } }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'form',\n            { className: 'form-signin' },\n            _react2.default.createElement(\n              'h2',\n              { className: 'form-signin-heading' },\n              'Please sign in'\n            ),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputEmail', className: 'sr-only' },\n              'Email address'\n            ),\n            _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n            _react2.default.createElement(\n              'label',\n              { 'for': 'inputPassword', className: 'sr-only' },\n              'Password'\n            ),\n            _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n            _react2.default.createElement(\n              'button',\n              { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n              'Sign in'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              'Signup'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJ0aGF0Iiwic2V0U3RhdGUiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpc0xvZ2dlZEluIiwiZ2V0SXRlbSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE07OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRCxJQUF2QixPQUF6QjtBQUNBLFVBQUtFLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCRixJQUExQixPQUE1QjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBTGlCO0FBU2xCOzs7OzZCQUVPOztBQUVSLHNCQUFNQyxJQUFOLENBQVcsZUFBWCxFQUE0QjtBQUMxQkYsZUFBTyxLQUFLRCxLQUFMLENBQVdDLEtBRFE7QUFFMUJDLGtCQUFVLEtBQUtGLEtBQUwsQ0FBV0U7QUFGSyxPQUE1QixFQUlHRSxJQUpILENBSVEsVUFBVUMsUUFBVixFQUFvQjtBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWUYsUUFBWjs7QUFFQUcsdUJBQWVDLE9BQWYsQ0FBdUIsVUFBdkIsRUFBa0MsSUFBbEM7QUFDQUMsYUFBS0MsUUFBTCxDQUFjLEVBQWQ7QUFDQTtBQUNELE9BVkgsRUFXR0MsS0FYSCxDQVdTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJQLGdCQUFRQyxHQUFSLENBQVlNLEtBQVo7QUFDQUMsY0FBTSxxQ0FBTjtBQUNELE9BZEg7QUFlQzs7O3NDQUdpQkMsQyxFQUFFO0FBQ2xCLFdBQUtKLFFBQUwsQ0FBYyxFQUFDVixPQUFNYyxFQUFFQyxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7O3lDQUNvQkYsQyxFQUFFO0FBQ3JCLFdBQUtKLFFBQUwsQ0FBYyxFQUFDVCxVQUFTYSxFQUFFQyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBTUMsYUFBYVYsZUFBZVcsT0FBZixDQUF1QixVQUF2QixDQUFuQjtBQUNBYixjQUFRQyxHQUFSLENBQVlXLFVBQVo7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNHQSxxQkFBYSwwREFBVyxJQUFJLEVBQUNFLFVBQVUsWUFBWCxFQUFmLEdBQWIsR0FDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGFBQWhCO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUscUJBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxZQUFYLEVBQXdCLFdBQVUsU0FBbEM7QUFBQTtBQUFBLGFBRkY7QUFHRSxxREFBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxLQUFLdEIsaUJBQW5DLEVBQXNELElBQUcsWUFBekQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixhQUFZLGVBQTNHLEVBQTJILGNBQTNILEdBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQU8sT0FBSSxlQUFYLEVBQTJCLFdBQVUsU0FBckM7QUFBQTtBQUFBLGFBSkY7QUFLRSxxREFBTyxNQUFLLFVBQVosRUFBdUIsVUFBVSxLQUFLQyxvQkFBdEMsRUFBNEQsSUFBRyxlQUEvRCxFQUErRSxXQUFVLGNBQXpGLEVBQXdHLGFBQVksVUFBcEgsRUFBK0gsY0FBL0gsR0FMRjtBQU9FO0FBQUE7QUFBQSxnQkFBUSxXQUFVLGtDQUFsQixFQUFxRCxTQUFTLEtBQUtILE1BQW5FLEVBQTJFLE1BQUssUUFBaEY7QUFBQTtBQUFBO0FBUEYsV0FERjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTSxJQUFHLFNBQVQ7QUFBb0I7QUFBcEI7QUFERjtBQVZGO0FBRkosT0FERjtBQW9CRDs7Ozs7O2tCQUlVRixNIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9TaWduVXAuanN4JyA7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIExpbmssIFJlZGlyZWN0fSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFNpZ25JbiAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnNpZ25JbiA9IHRoaXMuc2lnbkluLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlID0gdGhpcy5oYW5kbGVFbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNpZ25Jbigpe1xuXG4gICAgYXhpb3MucG9zdCgnL3Rhc2tzL3NpZ25pbicsIHtcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiTG9nZ2VkSW5cIix0cnVlKTtcbiAgICAgICAgdGhhdC5zZXRTdGF0ZSh7fSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBhbGVydChcIlVzZXJuYW1lIG9yIHBhc3N3b3JkIGlzIGludmFsaWQgISEhXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRW1haWxDaGFuZ2UoZSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDplLnRhcmdldC52YWx1ZX0pXG4gICAgfVxuICAgIGhhbmRsZVBhc3N3b3JkQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiTG9nZ2VkSW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhpc0xvZ2dlZEluKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2lzTG9nZ2VkSW4gPyA8IFJlZGlyZWN0IHRvPXt7cGF0aG5hbWU6ICcvZGFzaGJvYXJkJ319Lz46IChcbiAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLXNpZ25pblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb3JtLXNpZ25pbi1oZWFkaW5nXCI+UGxlYXNlIHNpZ24gaW48L2gyPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwic3Itb25seVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0gaWQ9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZX0gaWQ9XCJpbnB1dFBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMuc2lnbklufSB0eXBlPVwiYnV0dG9uXCI+U2lnbiBpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCI+eydTaWdudXAnfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbiA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});