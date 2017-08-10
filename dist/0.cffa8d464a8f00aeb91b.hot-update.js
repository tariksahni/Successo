webpackHotUpdate(0,{74:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SignUp = __webpack_require__(75);\n\nvar _SignUp2 = _interopRequireDefault(_SignUp);\n\nvar _reactRouterDom = __webpack_require__(62);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _styles = __webpack_require__(25);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SignIn = function (_Component) {\n  _inherits(SignIn, _Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.signIn = _this.signIn.bind(_this);\n    _this.handleEmailChange = _this.handleEmailChange.bind(_this);\n    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);\n    _this.state = {\n      email: '',\n      password: ''\n    };\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'signIn',\n    value: function signIn() {\n      var that = this;\n      _axios2.default.post('/tasks/signin', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(function (response) {\n        console.log(response);\n\n        sessionStorage.setItem(\"LoggedIn\", true);\n        that.setState();\n        // console.log(isLoggedIn);\n      }).catch(function (error) {\n        console.log(error);\n        alert(\"Username or password is invalid !!!\");\n      });\n    }\n  }, {\n    key: 'handleEmailChange',\n    value: function handleEmailChange(e) {\n      this.setState({ email: e.target.value });\n    }\n  }, {\n    key: 'handlePasswordChange',\n    value: function handlePasswordChange(e) {\n      this.setState({ password: e.target.value });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var isLoggedIn = sessionStorage.getItem(\"LoggedIn\");\n      return _react2.default.createElement(\n        'div',\n        null,\n        isLoggedIn ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/dashboard' } }) : _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h1',\n            { className: 'heading-main' },\n            'SUCCESSO'\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'form',\n              { className: 'form-signin' },\n              _react2.default.createElement(\n                'h2',\n                { className: 'form-signin-heading' },\n                'Please sign in'\n              ),\n              _react2.default.createElement(\n                'label',\n                { 'for': 'inputEmail', className: 'userlogin' },\n                'Email address'\n              ),\n              _react2.default.createElement('br', null),\n              _react2.default.createElement('input', { type: 'email', onChange: this.handleEmailChange, id: 'inputEmail', className: 'form-control', placeholder: 'Email address', required: true }),\n              _react2.default.createElement('br', null),\n              _react2.default.createElement(\n                'label',\n                { 'for': 'inputPassword', className: 'userlogin' },\n                'Password'\n              ),\n              _react2.default.createElement('br', null),\n              _react2.default.createElement('input', { type: 'password', onChange: this.handlePasswordChange, id: 'inputPassword', className: 'form-control', placeholder: 'Password', required: true }),\n              _react2.default.createElement('br', null),\n              _react2.default.createElement(\n                'button',\n                { className: 'btn btn-lg btn-primary btn-block', onClick: this.signIn, type: 'button' },\n                'Sign in'\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/signup' },\n                'Signup'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react.Component);\n\nexports.default = SignIn;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3g/NTAxOCJdLCJuYW1lcyI6WyJTaWduSW4iLCJwcm9wcyIsInNpZ25JbiIsImJpbmQiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwic3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwidGhhdCIsInBvc3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0U3RhdGUiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpc0xvZ2dlZEluIiwiZ2V0SXRlbSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTUEsTTs7O0FBQ0Ysa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJELElBQXZCLE9BQXpCO0FBQ0EsVUFBS0Usb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJGLElBQTFCLE9BQTVCO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFMaUI7QUFTbEI7Ozs7NkJBRU87QUFDUixVQUFJQyxPQUFPLElBQVg7QUFDQSxzQkFBTUMsSUFBTixDQUFXLGVBQVgsRUFBNEI7QUFDMUJILGVBQU8sS0FBS0QsS0FBTCxDQUFXQyxLQURRO0FBRTFCQyxrQkFBVSxLQUFLRixLQUFMLENBQVdFO0FBRkssT0FBNUIsRUFJR0csSUFKSCxDQUlRLG9CQUFZO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZQyxRQUFaOztBQUVBQyx1QkFBZUMsT0FBZixDQUF1QixVQUF2QixFQUFrQyxJQUFsQztBQUNBUCxhQUFLUSxRQUFMO0FBQ0E7QUFDRCxPQVZILEVBV0dDLEtBWEgsQ0FXUyxpQkFBUztBQUNkTixnQkFBUUMsR0FBUixDQUFZTSxLQUFaO0FBQ0FDLGNBQU0scUNBQU47QUFDRCxPQWRIO0FBZUM7OztzQ0FHaUJDLEMsRUFBRTtBQUNsQixXQUFLSixRQUFMLENBQWMsRUFBQ1YsT0FBTWMsRUFBRUMsTUFBRixDQUFTQyxLQUFoQixFQUFkO0FBQ0Q7Ozt5Q0FDb0JGLEMsRUFBRTtBQUNyQixXQUFLSixRQUFMLENBQWMsRUFBQ1QsVUFBU2EsRUFBRUMsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQU1DLGFBQWFULGVBQWVVLE9BQWYsQ0FBdUIsVUFBdkIsQ0FBbkI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNHRCxxQkFBYSwwREFBVyxJQUFJLEVBQUNFLFVBQVUsWUFBWCxFQUFmLEdBQWIsR0FDQztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFZLGNBQWhCO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGdCQUFNLFdBQVUsYUFBaEI7QUFDRTtBQUFBO0FBQUEsa0JBQUksV0FBVSxxQkFBZDtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQUE7QUFBQSxrQkFBTyxPQUFJLFlBQVgsRUFBd0IsV0FBVSxXQUFsQztBQUFBO0FBQUEsZUFGRjtBQUVxRSx1REFGckU7QUFHRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsVUFBVSxLQUFLdEIsaUJBQW5DLEVBQXNELElBQUcsWUFBekQsRUFBc0UsV0FBVSxjQUFoRixFQUErRixhQUFZLGVBQTNHLEVBQTJILGNBQTNILEdBSEY7QUFHeUksdURBSHpJO0FBSUU7QUFBQTtBQUFBLGtCQUFPLE9BQUksZUFBWCxFQUEyQixXQUFVLFdBQXJDO0FBQUE7QUFBQSxlQUpGO0FBSW1FLHVEQUpuRTtBQUtFLHVEQUFPLE1BQUssVUFBWixFQUF1QixVQUFVLEtBQUtDLG9CQUF0QyxFQUE0RCxJQUFHLGVBQS9ELEVBQStFLFdBQVUsY0FBekYsRUFBd0csYUFBWSxVQUFwSCxFQUErSCxjQUEvSCxHQUxGO0FBSzRJLHVEQUw1STtBQU9FO0FBQUE7QUFBQSxrQkFBUSxXQUFVLGtDQUFsQixFQUFxRCxTQUFTLEtBQUtILE1BQW5FLEVBQTJFLE1BQUssUUFBaEY7QUFBQTtBQUFBO0FBUEYsYUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBTSxJQUFHLFNBQVQ7QUFBb0I7QUFBcEI7QUFERjtBQVZBO0FBRkY7QUFGSixPQURGO0FBdUJEOzs7Ozs7a0JBSVVGLE0iLCJmaWxlIjoiNzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25VcCBmcm9tICcuL1NpZ25VcC5qc3gnIDtcbmltcG9ydCB7QnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgTGluaywgUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi9jc3Mvc3R5bGVzLmNzc1wiO1xuXG5cbmNsYXNzIFNpZ25JbiAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnNpZ25JbiA9IHRoaXMuc2lnbkluLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUVtYWlsQ2hhbmdlID0gdGhpcy5oYW5kbGVFbWFpbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVQYXNzd29yZENoYW5nZSA9IHRoaXMuaGFuZGxlUGFzc3dvcmRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB9O1xuICAgIH1cblxuICAgIHNpZ25Jbigpe1xuICAgIHZhciB0aGF0ID0gdGhpcyA7XG4gICAgYXhpb3MucG9zdCgnL3Rhc2tzL3NpZ25pbicsIHtcbiAgICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIkxvZ2dlZEluXCIsdHJ1ZSk7XG4gICAgICAgIHRoYXQuc2V0U3RhdGUoKSA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzTG9nZ2VkSW4pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgYWxlcnQoXCJVc2VybmFtZSBvciBwYXNzd29yZCBpcyBpbnZhbGlkICEhIVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcblxuICAgIGhhbmRsZUVtYWlsQ2hhbmdlKGUpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZS50YXJnZXQudmFsdWV9KVxuICAgIH1cbiAgICBoYW5kbGVQYXNzd29yZENoYW5nZShlKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOmUudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBpc0xvZ2dlZEluID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIkxvZ2dlZEluXCIpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7aXNMb2dnZWRJbiA/IDwgUmVkaXJlY3QgdG89e3twYXRobmFtZTogJy9kYXNoYm9hcmQnfX0vPjogKFxuICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSBcImhlYWRpbmctbWFpblwiPlNVQ0NFU1NPPC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1zaWduaW5cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9ybS1zaWduaW4taGVhZGluZ1wiPlBsZWFzZSBzaWduIGluPC9oMj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbFwiIGNsYXNzTmFtZT1cInVzZXJsb2dpblwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVFbWFpbENoYW5nZX0gaWQ9XCJpbnB1dEVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgcmVxdWlyZWQgIC8+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ1c2VybG9naW5cIj5QYXNzd29yZDwvbGFiZWw+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkQ2hhbmdlfSBpZD1cImlucHV0UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz48YnI+PC9icj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgb25DbGljaz17dGhpcy5zaWduSW59IHR5cGU9XCJidXR0b25cIj5TaWduIGluPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zaWdudXBcIj57J1NpZ251cCd9PC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25JbiA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzLUxvZ2luL1NpZ25Jbi5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});