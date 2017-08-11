webpackHotUpdate(0,{144:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _TaskFormatter = __webpack_require__(42);\n\nvar _TaskFormatter2 = _interopRequireDefault(_TaskFormatter);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DoneBox = function (_React$Component) {\n  _inherits(DoneBox, _React$Component);\n\n  function DoneBox() {\n    _classCallCheck(this, DoneBox);\n\n    return _possibleConstructorReturn(this, (DoneBox.__proto__ || Object.getPrototypeOf(DoneBox)).apply(this, arguments));\n  }\n\n  _createClass(DoneBox, [{\n    key: 'render',\n    value: function render() {\n      var that = this;\n      var taskListNode = this.props.data.map(function (taskDataItem, index) {\n        return _react2.default.createElement(_TaskFormatter2.default, {\n          uniqueID: taskDataItem._id,\n          name: taskDataItem.name, author: taskDataItem.author,\n          description: taskDataItem.description,\n          assigned: taskDataItem.assigned,\n          priority: taskDataItem.priority,\n          status: taskDataItem.status,\n          handler: that.props.handler\n        });\n      });\n      return _react2.default.createElement(\n        'div',\n        { id: 'colThree' },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'span',\n            { className: 'colHeader' },\n            'Done Tasks'\n          ),\n          taskListNode\n        )\n      );\n    }\n  }]);\n\n  return DoneBox;\n}(_react2.default.Component);\n\nexports.default = DoneBox;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLURhc2hCb2FyZC9Eb25lQm94LmpzeD8wYzQ2Il0sIm5hbWVzIjpbIkRvbmVCb3giLCJ0aGF0IiwidGFza0xpc3ROb2RlIiwicHJvcHMiLCJkYXRhIiwibWFwIiwidGFza0RhdGFJdGVtIiwiaW5kZXgiLCJfaWQiLCJuYW1lIiwiYXV0aG9yIiwiZGVzY3JpcHRpb24iLCJhc3NpZ25lZCIsInByaW9yaXR5Iiwic3RhdHVzIiwiaGFuZGxlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxlQUFlLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBU0MsWUFBVCxFQUF1QkMsS0FBdkIsRUFBNkI7QUFDbEUsZUFDRTtBQUNBLG9CQUFVRCxhQUFhRSxHQUR2QjtBQUVBLGdCQUFNRixhQUFhRyxJQUZuQixFQUV5QixRQUFRSCxhQUFhSSxNQUY5QztBQUdBLHVCQUFhSixhQUFhSyxXQUgxQjtBQUlBLG9CQUFVTCxhQUFhTSxRQUp2QjtBQUtBLG9CQUFVTixhQUFhTyxRQUx2QjtBQU1BLGtCQUFRUCxhQUFhUSxNQU5yQjtBQU9BLG1CQUFTYixLQUFLRSxLQUFMLENBQVdZO0FBUHBCLFVBREY7QUFXRCxPQVprQixDQUFuQjtBQWFBLGFBQ0U7QUFBQTtBQUFBLFVBQUssSUFBRyxVQUFSO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxXQUFoQjtBQUFBO0FBQUEsV0FERjtBQUlHYjtBQUpIO0FBREYsT0FERjtBQVVEOzs7O0VBMUJtQixnQkFBTWMsUzs7a0JBNkJiaEIsTyIsImZpbGUiOiIxNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhc2tGb3JtYXR0ZXIgZnJvbSAnLi9UYXNrRm9ybWF0dGVyLmpzeCc7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4vY3NzL3N0eWxlcy5jc3NcIjtcblxuY2xhc3MgRG9uZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHRhc2tMaXN0Tm9kZSA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24odGFza0RhdGFJdGVtLCBpbmRleCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGFza0Zvcm1hdHRlciBcbiAgICAgICAgdW5pcXVlSUQ9e3Rhc2tEYXRhSXRlbS5faWR9XG4gICAgICAgIG5hbWU9e3Rhc2tEYXRhSXRlbS5uYW1lfSBhdXRob3I9e3Rhc2tEYXRhSXRlbS5hdXRob3J9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0YXNrRGF0YUl0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgIGFzc2lnbmVkPXt0YXNrRGF0YUl0ZW0uYXNzaWduZWR9XG4gICAgICAgIHByaW9yaXR5PXt0YXNrRGF0YUl0ZW0ucHJpb3JpdHl9XG4gICAgICAgIHN0YXR1cz17dGFza0RhdGFJdGVtLnN0YXR1c31cbiAgICAgICAgaGFuZGxlcj17dGhhdC5wcm9wcy5oYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiY29sVGhyZWVcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xIZWFkZXJcIj5cbiAgICAgICAgICAgIERvbmUgVGFza3NcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3Rhc2tMaXN0Tm9kZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvbmVCb3g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy1EYXNoQm9hcmQvRG9uZUJveC5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});