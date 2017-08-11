webpackHotUpdate(0,{42:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TaskFormatter = function (_React$Component) {\n  _inherits(TaskFormatter, _React$Component);\n\n  function TaskFormatter() {\n    _classCallCheck(this, TaskFormatter);\n\n    var _this = _possibleConstructorReturn(this, (TaskFormatter.__proto__ || Object.getPrototypeOf(TaskFormatter)).call(this));\n\n    _this.doingStatus = _this.doingStatus.bind(_this);\n    _this.doneStatus = _this.doneStatus.bind(_this);\n    _this.toDoStatus = _this.toDoStatus.bind(_this);\n    _this.deleteTask = _this.deleteTask.bind(_this);\n    return _this;\n  }\n\n  _createClass(TaskFormatter, [{\n    key: 'doingStatus',\n    value: function doingStatus() {\n      var that = this;\n      _axios2.default.put('/tasks/' + this.props.uniqueID, {\n        name: '' + this.props.name,\n        author: '' + this.props.author,\n        description: '' + this.props.description,\n        assigned: '' + this.props.assigned,\n        priority: '' + this.props.priority,\n        status: 'doing'\n      }).then(function (response) {\n        console.log(response);\n        that.props.handler();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'doneStatus',\n    value: function doneStatus() {\n      var that = this;\n      _axios2.default.put('/tasks/' + this.props.uniqueID, {\n        name: '' + this.props.name,\n        author: '' + this.props.author,\n        description: '' + this.props.description,\n        assigned: '' + this.props.assigned,\n        priority: '' + this.props.priority,\n        status: 'done'\n      }).then(function (response) {\n        console.log(response);\n        that.props.handler();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'toDoStatus',\n    value: function toDoStatus() {\n      var that = this;\n      _axios2.default.put('/tasks/' + this.props.uniqueID, {\n        name: '' + this.props.name,\n        author: '' + this.props.author,\n        description: '' + this.props.description,\n        assigned: '' + this.props.assigned,\n        priority: '' + this.props.priority,\n        status: 'to-do'\n      }).then(function (response) {\n        console.log(response);\n        that.props.handler();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'deleteTask',\n    value: function deleteTask() {\n      var that = this;\n      _axios2.default.delete('/tasks/' + this.props.uniqueID).then(function (response) {\n        console.log(response);\n        that.props.handler();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'taskItem' },\n        _react2.default.createElement(\n          'div',\n          { className: 'taskItemName' },\n          _react2.default.createElement(\n            'div',\n            { className: 'taskItemNameText' },\n            this.props.name,\n            ' ',\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(\n              'span',\n              { className: 'createdByLabel' },\n              'Created By:'\n            ),\n            ' ',\n            _react2.default.createElement(\n              'span',\n              { className: 'createdByName' },\n              this.props.author\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: this.deleteTask, className: 'deleteButton' },\n          ' X '\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'taskItemBody' },\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              { className: 'fieldLabels' },\n              'Assigned To:'\n            ),\n            ' ',\n            this.props.assigned\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            _react2.default.createElement(\n              'span',\n              { className: 'fieldLabels' },\n              'Priority Level:'\n            ),\n            ' ',\n            this.props.priority\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            this.props.description\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'assignButtonContainer' },\n            _react2.default.createElement(\n              'div',\n              { className: 'assignButton toDoButton', onClick: this.toDoStatus },\n              'TO DO'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'assignButton doingButton', onClick: this.doingStatus },\n              'DOING'\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'assignButton doneButton', onClick: this.doneStatus },\n              'DONE'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return TaskFormatter;\n}(_react2.default.Component);\n\n;\n\nexports.default = TaskFormatter;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLURhc2hCb2FyZC9UYXNrRm9ybWF0dGVyLmpzeD9hOWU5Il0sIm5hbWVzIjpbIlRhc2tGb3JtYXR0ZXIiLCJkb2luZ1N0YXR1cyIsImJpbmQiLCJkb25lU3RhdHVzIiwidG9Eb1N0YXR1cyIsImRlbGV0ZVRhc2siLCJ0aGF0IiwicHV0IiwicHJvcHMiLCJ1bmlxdWVJRCIsIm5hbWUiLCJhdXRob3IiLCJkZXNjcmlwdGlvbiIsImFzc2lnbmVkIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiaGFuZGxlciIsImNhdGNoIiwiZXJyb3IiLCJkZWxldGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDTUEsYTs7O0FBQ0osMkJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRCxJQUFoQixPQUFsQjtBQUNBLFVBQUtFLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkYsSUFBaEIsT0FBbEI7QUFDQSxVQUFLRyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JILElBQWhCLE9BQWxCO0FBTFk7QUFNYjs7OztrQ0FFYztBQUNiLFVBQUlJLE9BQU8sSUFBWDtBQUNBLHNCQUFNQyxHQUFOLGFBQW9CLEtBQUtDLEtBQUwsQ0FBV0MsUUFBL0IsRUFBMkM7QUFDekNDLG1CQUFVLEtBQUtGLEtBQUwsQ0FBV0UsSUFEb0I7QUFFekNDLHFCQUFVLEtBQUtILEtBQUwsQ0FBV0csTUFGb0I7QUFHekNDLDBCQUFlLEtBQUtKLEtBQUwsQ0FBV0ksV0FIZTtBQUl6Q0MsdUJBQVksS0FBS0wsS0FBTCxDQUFXSyxRQUprQjtBQUt6Q0MsdUJBQVksS0FBS04sS0FBTCxDQUFXTSxRQUxrQjtBQU16Q0MsZ0JBQVE7QUFOaUMsT0FBM0MsRUFRQ0MsSUFSRCxDQVFNLG9CQUFZO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZQyxRQUFaO0FBQ0FiLGFBQUtFLEtBQUwsQ0FBV1ksT0FBWDtBQUNELE9BWEQsRUFZQ0MsS0FaRCxDQVlPLGlCQUFTO0FBQ2RKLGdCQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDRCxPQWREO0FBZ0JEOzs7aUNBRWE7QUFDWixVQUFJaEIsT0FBTyxJQUFYO0FBQ0Usc0JBQU1DLEdBQU4sYUFBb0IsS0FBS0MsS0FBTCxDQUFXQyxRQUEvQixFQUEyQztBQUMzQ0MsbUJBQVUsS0FBS0YsS0FBTCxDQUFXRSxJQURzQjtBQUUzQ0MscUJBQVUsS0FBS0gsS0FBTCxDQUFXRyxNQUZzQjtBQUczQ0MsMEJBQWUsS0FBS0osS0FBTCxDQUFXSSxXQUhpQjtBQUkzQ0MsdUJBQVksS0FBS0wsS0FBTCxDQUFXSyxRQUpvQjtBQUszQ0MsdUJBQVksS0FBS04sS0FBTCxDQUFXTSxRQUxvQjtBQU0zQ0MsZ0JBQVE7QUFObUMsT0FBM0MsRUFRREMsSUFSQyxDQVFJLG9CQUFZO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZQyxRQUFaO0FBQ0FiLGFBQUtFLEtBQUwsQ0FBV1ksT0FBWDtBQUNELE9BWEMsRUFZREMsS0FaQyxDQVlLLGlCQUFTO0FBQ2RKLGdCQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDRCxPQWRDO0FBZUg7OztpQ0FFYTtBQUNaLFVBQUloQixPQUFPLElBQVg7QUFDQSxzQkFBTUMsR0FBTixhQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLEVBQTJDO0FBQ3pDQyxtQkFBVSxLQUFLRixLQUFMLENBQVdFLElBRG9CO0FBRXpDQyxxQkFBVSxLQUFLSCxLQUFMLENBQVdHLE1BRm9CO0FBR3pDQywwQkFBZSxLQUFLSixLQUFMLENBQVdJLFdBSGU7QUFJekNDLHVCQUFZLEtBQUtMLEtBQUwsQ0FBV0ssUUFKa0I7QUFLekNDLHVCQUFZLEtBQUtOLEtBQUwsQ0FBV00sUUFMa0I7QUFNekNDLGdCQUFRO0FBTmlDLE9BQTNDLEVBUUNDLElBUkQsQ0FRTSxvQkFBWTtBQUNoQkMsZ0JBQVFDLEdBQVIsQ0FBWUMsUUFBWjtBQUNBYixhQUFLRSxLQUFMLENBQVdZLE9BQVg7QUFDRCxPQVhELEVBWUNDLEtBWkQsQ0FZTyxpQkFBUztBQUNkSixnQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0QsT0FkRDtBQWVEOzs7aUNBRWE7QUFDWixVQUFJaEIsT0FBTyxJQUFYO0FBQ0Esc0JBQU1pQixNQUFOLGFBQXVCLEtBQUtmLEtBQUwsQ0FBV0MsUUFBbEMsRUFDQ08sSUFERCxDQUNNLG9CQUFZO0FBQ2hCQyxnQkFBUUMsR0FBUixDQUFZQyxRQUFaO0FBQ0FiLGFBQUtFLEtBQUwsQ0FBV1ksT0FBWDtBQUNELE9BSkQsRUFLQ0MsS0FMRCxDQUtPLGlCQUFTO0FBQ2RKLGdCQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDRCxPQVBEO0FBUUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNHLGlCQUFLZCxLQUFMLENBQVdFLElBRGQ7QUFBQTtBQUNvQixxREFEcEI7QUFFRTtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxnQkFBaEI7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUVzRDtBQUFBO0FBQUEsZ0JBQU0sV0FBVSxlQUFoQjtBQUFpQyxtQkFBS0YsS0FBTCxDQUFXRztBQUE1QztBQUZ0RDtBQURGLFNBREY7QUFPRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtOLFVBQXRCLEVBQWtDLFdBQVUsY0FBNUM7QUFBQTtBQUFBLFNBUEY7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUEsZ0JBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQUEsYUFBSDtBQUFBO0FBQXNELGlCQUFLRyxLQUFMLENBQVdLO0FBQWpFLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUEsZ0JBQU0sV0FBVSxhQUFoQjtBQUFBO0FBQUEsYUFBSDtBQUFBO0FBQXlELGlCQUFLTCxLQUFMLENBQVdNO0FBQXBFLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSSxpQkFBS04sS0FBTCxDQUFXSTtBQUFmLFdBSEY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUseUJBQWYsRUFBeUMsU0FBUyxLQUFLUixVQUF2RDtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmLEVBQTBDLFNBQVMsS0FBS0gsV0FBeEQ7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx5QkFBZixFQUF5QyxTQUFTLEtBQUtFLFVBQXZEO0FBQUE7QUFBQTtBQUhGO0FBSkY7QUFSRixPQURGO0FBcUJEOzs7O0VBckd5QixnQkFBTXFCLFM7O0FBc0dqQzs7a0JBRWN4QixhIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNsYXNzIFRhc2tGb3JtYXR0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZG9pbmdTdGF0dXMgPSB0aGlzLmRvaW5nU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kb25lU3RhdHVzID0gdGhpcy5kb25lU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b0RvU3RhdHVzID0gdGhpcy50b0RvU3RhdHVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWxldGVUYXNrID0gdGhpcy5kZWxldGVUYXNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBkb2luZ1N0YXR1cyAoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGF4aW9zLnB1dChgL3Rhc2tzLyR7dGhpcy5wcm9wcy51bmlxdWVJRH1gLCB7XG4gICAgICBuYW1lIDogYCR7dGhpcy5wcm9wcy5uYW1lfWAsXG4gICAgICBhdXRob3I6YCR7dGhpcy5wcm9wcy5hdXRob3J9YCxcbiAgICAgIGRlc2NyaXB0aW9uOmAke3RoaXMucHJvcHMuZGVzY3JpcHRpb259YCxcbiAgICAgIGFzc2lnbmVkOmAke3RoaXMucHJvcHMuYXNzaWduZWR9YCxcbiAgICAgIHByaW9yaXR5OmAke3RoaXMucHJvcHMucHJpb3JpdHl9YCxcbiAgICAgIHN0YXR1czogJ2RvaW5nJ1xuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgdGhhdC5wcm9wcy5oYW5kbGVyKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG4gIGRvbmVTdGF0dXMgKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIGF4aW9zLnB1dChgL3Rhc2tzLyR7dGhpcy5wcm9wcy51bmlxdWVJRH1gLCB7XG4gICAgICBuYW1lIDogYCR7dGhpcy5wcm9wcy5uYW1lfWAsXG4gICAgICBhdXRob3I6YCR7dGhpcy5wcm9wcy5hdXRob3J9YCxcbiAgICAgIGRlc2NyaXB0aW9uOmAke3RoaXMucHJvcHMuZGVzY3JpcHRpb259YCxcbiAgICAgIGFzc2lnbmVkOmAke3RoaXMucHJvcHMuYXNzaWduZWR9YCxcbiAgICAgIHByaW9yaXR5OmAke3RoaXMucHJvcHMucHJpb3JpdHl9YCxcbiAgICAgIHN0YXR1czogJ2RvbmUnXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB0aGF0LnByb3BzLmhhbmRsZXIoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICB0b0RvU3RhdHVzICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgYXhpb3MucHV0KGAvdGFza3MvJHt0aGlzLnByb3BzLnVuaXF1ZUlEfWAsIHtcbiAgICAgIG5hbWUgOiBgJHt0aGlzLnByb3BzLm5hbWV9YCxcbiAgICAgIGF1dGhvcjpgJHt0aGlzLnByb3BzLmF1dGhvcn1gLFxuICAgICAgZGVzY3JpcHRpb246YCR7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1gLFxuICAgICAgYXNzaWduZWQ6YCR7dGhpcy5wcm9wcy5hc3NpZ25lZH1gLFxuICAgICAgcHJpb3JpdHk6YCR7dGhpcy5wcm9wcy5wcmlvcml0eX1gLFxuICAgICAgc3RhdHVzOiAndG8tZG8nXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB0aGF0LnByb3BzLmhhbmRsZXIoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVUYXNrICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgYXhpb3MuZGVsZXRlKGAvdGFza3MvJHt0aGlzLnByb3BzLnVuaXF1ZUlEfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgdGhhdC5wcm9wcy5oYW5kbGVyKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFza0l0ZW0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tJdGVtTmFtZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFza0l0ZW1OYW1lVGV4dFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX0gPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVkQnlMYWJlbFwiPkNyZWF0ZWQgQnk6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjcmVhdGVkQnlOYW1lXCI+e3RoaXMucHJvcHMuYXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5kZWxldGVUYXNrfSBjbGFzc05hbWU9XCJkZWxldGVCdXR0b25cIj4gWCA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXNrSXRlbUJvZHlcIj5cbiAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJmaWVsZExhYmVsc1wiPkFzc2lnbmVkIFRvOjwvc3Bhbj4ge3RoaXMucHJvcHMuYXNzaWduZWR9PC9wPlxuICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImZpZWxkTGFiZWxzXCI+UHJpb3JpdHkgTGV2ZWw6PC9zcGFuPiB7dGhpcy5wcm9wcy5wcmlvcml0eX08L3A+XG4gICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzaWduQnV0dG9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2lnbkJ1dHRvbiB0b0RvQnV0dG9uXCIgb25DbGljaz17dGhpcy50b0RvU3RhdHVzfT5UTyBETzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NpZ25CdXR0b24gZG9pbmdCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmRvaW5nU3RhdHVzfT5ET0lORzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NpZ25CdXR0b24gZG9uZUJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZG9uZVN0YXR1c30+RE9ORTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrRm9ybWF0dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMtRGFzaEJvYXJkL1Rhc2tGb3JtYXR0ZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==")}});