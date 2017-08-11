webpackHotUpdate(0,{146:function(module,exports,__webpack_require__){eval("'use strict';Object.defineProperty(exports, \"__esModule\", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);\nvar _Task = __webpack_require__(43);var _Task2 = _interopRequireDefault(_Task);\nvar _styles = __webpack_require__(18);var _styles2 = _interopRequireDefault(_styles);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== \"function\" && superClass !== null) {throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var\n\nToDoBox = function (_React$Component) {_inherits(ToDoBox, _React$Component);function ToDoBox() {_classCallCheck(this, ToDoBox);return _possibleConstructorReturn(this, (ToDoBox.__proto__ || Object.getPrototypeOf(ToDoBox)).apply(this, arguments));}_createClass(ToDoBox, [{ key: 'postTask', value: function postTask()\n    {\n\n    } }, { key: 'render', value: function render()\n    {\n      var that = this;\n      var taskListNode = this.props.data.map(function (taskDataItem, index) {\n        return (\n          _react2.default.createElement(_Task2.default, {\n            name: taskDataItem.name,\n            author: taskDataItem.author, key: taskDataItem._id,\n            uniqueID: taskDataItem._id,\n            description: taskDataItem.description,\n            assigned: taskDataItem.assigned,\n            priority: taskDataItem.priority,\n            status: taskDataItem.status,\n            handler: that.props.handler }));\n\n\n      });\n      return (\n        _react2.default.createElement('div', { id: 'colOne' },\n          _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'colHeader' }, 'To Do Tasks'),\n            taskListNode)));\n\n\n\n    } }]);return ToDoBox;}(_react2.default.Component);\n;exports.default =\n\nToDoBox;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLURhc2hCb2FyZC9Ub0RvQm94LmpzeD8yM2Q2Il0sIm5hbWVzIjpbIlRvRG9Cb3giLCJ0aGF0IiwidGFza0xpc3ROb2RlIiwicHJvcHMiLCJkYXRhIiwibWFwIiwidGFza0RhdGFJdGVtIiwiaW5kZXgiLCJuYW1lIiwiYXV0aG9yIiwiX2lkIiwiZGVzY3JpcHRpb24iLCJhc3NpZ25lZCIsInByaW9yaXR5Iiwic3RhdHVzIiwiaGFuZGxlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6ImduQkFBQSxvQztBQUNBLG9DO0FBQ0Esc0M7O0FBRU1BLE87QUFDUTs7QUFFWCxLO0FBQ1E7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJQyxlQUFlLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBU0MsWUFBVCxFQUF1QkMsS0FBdkIsRUFBNkI7QUFDbEU7QUFDRTtBQUNBLGtCQUFNRCxhQUFhRSxJQURuQjtBQUVBLG9CQUFRRixhQUFhRyxNQUZyQixFQUU2QixLQUFLSCxhQUFhSSxHQUYvQztBQUdBLHNCQUFVSixhQUFhSSxHQUh2QjtBQUlBLHlCQUFhSixhQUFhSyxXQUoxQjtBQUtBLHNCQUFVTCxhQUFhTSxRQUx2QjtBQU1BLHNCQUFVTixhQUFhTyxRQU52QjtBQU9BLG9CQUFRUCxhQUFhUSxNQVByQjtBQVFBLHFCQUFTYixLQUFLRSxLQUFMLENBQVdZLE9BUnBCLEdBREY7OztBQVlELE9BYmtCLENBQW5CO0FBY0Y7QUFDRSwrQ0FBSyxJQUFHLFFBQVI7QUFDRSxxREFBSyx3Q0FBTSxXQUFVLFdBQWhCLGtCQUFMO0FBQ0liLHdCQURKLENBREYsQ0FERjs7OztBQU9DLEssc0JBM0JtQixnQkFBTWMsUztBQTRCM0IsQzs7QUFFY2hCLE8iLCJmaWxlIjoiMTQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qc3gnO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uL2Nzcy9zdHlsZXMuY3NzXCI7XG5cbmNsYXNzIFRvRG9Cb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBwb3N0VGFzayAoKSB7XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciB0YXNrTGlzdE5vZGUgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKHRhc2tEYXRhSXRlbSwgaW5kZXgpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhc2tcbiAgICAgICAgbmFtZT17dGFza0RhdGFJdGVtLm5hbWV9XG4gICAgICAgIGF1dGhvcj17dGFza0RhdGFJdGVtLmF1dGhvcn0ga2V5PXt0YXNrRGF0YUl0ZW0uX2lkfVxuICAgICAgICB1bmlxdWVJRD17dGFza0RhdGFJdGVtLl9pZH1cbiAgICAgICAgZGVzY3JpcHRpb249e3Rhc2tEYXRhSXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgYXNzaWduZWQ9e3Rhc2tEYXRhSXRlbS5hc3NpZ25lZH1cbiAgICAgICAgcHJpb3JpdHk9e3Rhc2tEYXRhSXRlbS5wcmlvcml0eX1cbiAgICAgICAgc3RhdHVzPXt0YXNrRGF0YUl0ZW0uc3RhdHVzfVxuICAgICAgICBoYW5kbGVyPXt0aGF0LnByb3BzLmhhbmRsZXJ9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImNvbE9uZVwiPlxuICAgICAgPGRpdj48c3BhbiBjbGFzc05hbWU9XCJjb2xIZWFkZXJcIj5UbyBEbyBUYXNrczwvc3Bhbj5cbiAgICAgICAgeyB0YXNrTGlzdE5vZGUgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9Cb3g7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy1EYXNoQm9hcmQvVG9Eb0JveC5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});