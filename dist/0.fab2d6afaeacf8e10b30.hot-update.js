webpackHotUpdate(0,{145:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NewTaskForm = function (_React$Component) {\n  _inherits(NewTaskForm, _React$Component);\n\n  function NewTaskForm() {\n    _classCallCheck(this, NewTaskForm);\n\n    var _this = _possibleConstructorReturn(this, (NewTaskForm.__proto__ || Object.getPrototypeOf(NewTaskForm)).call(this));\n\n    _this.postTask = _this.postTask.bind(_this);\n    _this.onClick = _this.onClick.bind(_this);\n    _this.state = {\n      showNewTaskForm: false\n    };\n    return _this;\n  }\n\n  _createClass(NewTaskForm, [{\n    key: 'onClick',\n    value: function onClick() {\n      this.setState({ showNewTaskForm: !this.state.showNewTaskForm });\n    }\n  }, {\n    key: 'postTask',\n    value: function postTask() {\n      var that = this;\n      var author = document.getElementById('authorInput').value;\n      var name = document.getElementById('titleInput').value;\n      var assigned = document.getElementById('assignedInput').value;\n      var description = document.getElementById('descriptionInput').value;\n      var priority = document.getElementById('priorityInput').value;\n      if (priority === \"Priority\") {\n        priority = \"Low\";\n      }\n      _axios2.default.post('/tasks', {\n        name: name,\n        author: author,\n        description: description,\n        assigned: assigned,\n        priority: priority\n      }).then(function (response) {\n        console.log(response);\n        that.props.handler();\n      }).catch(function (error) {\n        console.log(error);\n      });\n      that.setState({ showNewTaskForm: !that.state.showNewTaskForm });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'newTaskFooter' },\n        _react2.default.createElement(\n          'div',\n          { className: 'taskDiv' },\n          _react2.default.createElement(\n            'h2',\n            { id: 'newTaskHeader', onClick: this.onClick },\n            'ADD NEW TASK'\n          )\n        ),\n        this.state.showNewTaskForm ? _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'select',\n            { className: 'assignButton', id: 'priorityInput', name: 'priority' },\n            _react2.default.createElement(\n              'option',\n              null,\n              'Priority'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'Low' },\n              'Low'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'Medium' },\n              'Medium'\n            ),\n            _react2.default.createElement(\n              'option',\n              { value: 'High' },\n              'High'\n            )\n          ),\n          _react2.default.createElement('input', { type: 'text', id: 'titleInput', name: 'title', placeholder: 'Task Title' }),\n          _react2.default.createElement('input', { type: 'text', id: 'authorInput', name: 'author', placeholder: 'Author' }),\n          _react2.default.createElement('input', { type: 'text', id: 'assignedInput', name: 'assigned', placeholder: 'Assign To' }),\n          _react2.default.createElement('input', { type: 'text', id: 'descriptionInput', name: 'description', placeholder: 'Task Description' }),\n          _react2.default.createElement(\n            'div',\n            { className: 'assignButton', id: 'newTaskButton', onClick: this.postTask },\n            'SUBMIT'\n          )\n        ) : null\n      );\n    }\n  }]);\n\n  return NewTaskForm;\n}(_react2.default.Component);\n\n;\n\nexports.default = NewTaskForm;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzLURhc2hCb2FyZC9OZXdUYXNrRm9ybS5qc3g/M2JjZiJdLCJuYW1lcyI6WyJOZXdUYXNrRm9ybSIsInBvc3RUYXNrIiwiYmluZCIsIm9uQ2xpY2siLCJzdGF0ZSIsInNob3dOZXdUYXNrRm9ybSIsInNldFN0YXRlIiwidGhhdCIsImF1dGhvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm5hbWUiLCJhc3NpZ25lZCIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJwb3N0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInByb3BzIiwiaGFuZGxlciIsImNhdGNoIiwiZXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhRCxJQUFiLE9BQWY7QUFDQSxVQUFLRSxLQUFMLEdBQWE7QUFDWEMsdUJBQWlCO0FBRE4sS0FBYjtBQUpZO0FBT2I7Ozs7OEJBRVE7QUFDUCxXQUFLQyxRQUFMLENBQWMsRUFBQ0QsaUJBQWlCLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxlQUE5QixFQUFkO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQUlFLE9BQU8sSUFBWDtBQUNBLFVBQU1DLFNBQVNDLFNBQVNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLEtBQXREO0FBQ0EsVUFBTUMsT0FBT0gsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsS0FBbkQ7QUFDQSxVQUFNRSxXQUFXSixTQUFTQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxLQUExRDtBQUNBLFVBQU1HLGNBQWNMLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDQyxLQUFoRTtBQUNBLFVBQUlJLFdBQVdOLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLEtBQXhEO0FBQ0EsVUFBR0ksYUFBYSxVQUFoQixFQUE0QjtBQUMxQkEsbUJBQVcsS0FBWDtBQUNEO0FBQ0Qsc0JBQU1DLElBQU4sQ0FBVyxRQUFYLEVBQXFCO0FBQ25CSixjQUFPQSxJQURZO0FBRW5CSixnQkFBT0EsTUFGWTtBQUduQk0scUJBQVlBLFdBSE87QUFJbkJELGtCQUFTQSxRQUpVO0FBS25CRSxrQkFBU0E7QUFMVSxPQUFyQixFQU9DRSxJQVBELENBT00sb0JBQVk7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVlDLFFBQVo7QUFDQWIsYUFBS2MsS0FBTCxDQUFXQyxPQUFYO0FBQ0QsT0FWRCxFQVdDQyxLQVhELENBV08saUJBQVM7QUFDZEwsZ0JBQVFDLEdBQVIsQ0FBWUssS0FBWjtBQUNELE9BYkQ7QUFjQWpCLFdBQUtELFFBQUwsQ0FBYyxFQUFDRCxpQkFBaUIsQ0FBQ0UsS0FBS0gsS0FBTCxDQUFXQyxlQUE5QixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssSUFBRyxlQUFSO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUksSUFBRyxlQUFQLEVBQXVCLFNBQVMsS0FBS0YsT0FBckM7QUFBQTtBQUFBO0FBREYsU0FERjtBQU1JLGFBQUtDLEtBQUwsQ0FBV0MsZUFBWCxHQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFRLFdBQVUsY0FBbEIsRUFBaUMsSUFBRyxlQUFwQyxFQUFvRCxNQUFLLFVBQXpEO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLE9BQU0sS0FBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBUSxPQUFNLFFBQWQ7QUFBQTtBQUFBLGFBSEY7QUFJRTtBQUFBO0FBQUEsZ0JBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQTtBQUpGLFdBREY7QUFPRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxZQUF0QixFQUFrQyxNQUFLLE9BQXZDLEVBQStDLGFBQVksWUFBM0QsR0FQRjtBQVFFLG1EQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLGFBQXRCLEVBQW1DLE1BQUssUUFBeEMsRUFBaUQsYUFBWSxRQUE3RCxHQVJGO0FBU0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsZUFBdEIsRUFBcUMsTUFBSyxVQUExQyxFQUFxRCxhQUFZLFdBQWpFLEdBVEY7QUFVRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxrQkFBdEIsRUFBeUMsTUFBSyxhQUE5QyxFQUE0RCxhQUFZLGtCQUF4RSxHQVZGO0FBV0U7QUFBQTtBQUFBLGNBQUssV0FBVSxjQUFmLEVBQThCLElBQUcsZUFBakMsRUFBaUQsU0FBUyxLQUFLSixRQUEvRDtBQUFBO0FBQUE7QUFYRixTQURBLEdBZ0JBO0FBdEJKLE9BREY7QUEyQkQ7Ozs7RUFyRXVCLGdCQUFNd0IsUzs7QUFzRS9COztrQkFFY3pCLFciLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi9jc3Mvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgTmV3VGFza0Zvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9zdFRhc2sgPSB0aGlzLnBvc3RUYXNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd05ld1Rhc2tGb3JtOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd05ld1Rhc2tGb3JtOiAhdGhpcy5zdGF0ZS5zaG93TmV3VGFza0Zvcm19KVxuICB9XG5cbiAgcG9zdFRhc2soKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3JJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGFzc2lnbmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fzc2lnbmVkSW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklucHV0JykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5SW5wdXQnKS52YWx1ZTtcbiAgICBpZihwcmlvcml0eSA9PT0gXCJQcmlvcml0eVwiKSB7XG4gICAgICBwcmlvcml0eSA9IFwiTG93XCJcbiAgICB9XG4gICAgYXhpb3MucG9zdCgnL3Rhc2tzJywge1xuICAgICAgbmFtZSA6IG5hbWUsXG4gICAgICBhdXRob3I6YXV0aG9yLFxuICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb24sXG4gICAgICBhc3NpZ25lZDphc3NpZ25lZCxcbiAgICAgIHByaW9yaXR5OnByaW9yaXR5XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB0aGF0LnByb3BzLmhhbmRsZXIoKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gICAgdGhhdC5zZXRTdGF0ZSh7c2hvd05ld1Rhc2tGb3JtOiAhdGhhdC5zdGF0ZS5zaG93TmV3VGFza0Zvcm19KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibmV3VGFza0Zvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhc2tEaXZcIj5cbiAgICAgICAgICA8aDIgaWQ9XCJuZXdUYXNrSGVhZGVyXCIgb25DbGljaz17dGhpcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIEFERCBORVcgVEFTSyBcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnNob3dOZXdUYXNrRm9ybSA/IFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImFzc2lnbkJ1dHRvblwiIGlkPSdwcmlvcml0eUlucHV0JyBuYW1lPSdwcmlvcml0eSc+XG4gICAgICAgICAgICAgIDxvcHRpb24+UHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J3RpdGxlSW5wdXQnbmFtZT0ndGl0bGUnIHBsYWNlaG9sZGVyPVwiVGFzayBUaXRsZVwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYXV0aG9ySW5wdXQnbmFtZT0nYXV0aG9yJyBwbGFjZWhvbGRlcj1cIkF1dGhvclwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nYXNzaWduZWRJbnB1dCduYW1lPSdhc3NpZ25lZCcgcGxhY2Vob2xkZXI9XCJBc3NpZ24gVG9cIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSdkZXNjcmlwdGlvbklucHV0JyBuYW1lPSdkZXNjcmlwdGlvbicgcGxhY2Vob2xkZXI9J1Rhc2sgRGVzY3JpcHRpb24nIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2lnbkJ1dHRvblwiIGlkPVwibmV3VGFza0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMucG9zdFRhc2t9PlxuICAgICAgICAgICAgICBTVUJNSVRcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2tGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMtRGFzaEJvYXJkL05ld1Rhc2tGb3JtLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=")}});