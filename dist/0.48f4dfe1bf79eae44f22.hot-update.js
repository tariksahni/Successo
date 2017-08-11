webpackHotUpdate(0,{142:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ToDoBox = __webpack_require__(146);\n\nvar _ToDoBox2 = _interopRequireDefault(_ToDoBox);\n\nvar _DoingBox = __webpack_require__(143);\n\nvar _DoingBox2 = _interopRequireDefault(_DoingBox);\n\nvar _DoneBox = __webpack_require__(144);\n\nvar _DoneBox2 = _interopRequireDefault(_DoneBox);\n\nvar _NewTaskForm = __webpack_require__(145);\n\nvar _NewTaskForm2 = _interopRequireDefault(_NewTaskForm);\n\nvar _reactRedux = __webpack_require__(107);\n\nvar _immutable = __webpack_require__(81);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nvar _axios = __webpack_require__(68);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Successo = function (_React$Component) {\n  _inherits(Successo, _React$Component);\n\n  function Successo() {\n    _classCallCheck(this, Successo);\n\n    var _this = _possibleConstructorReturn(this, (Successo.__proto__ || Object.getPrototypeOf(Successo)).call(this));\n\n    _this.onMongoData = _this.onMongoData.bind(_this);\n    _this.updateHandler = _this.updateHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(Successo, [{\n    key: 'onMongoData',\n    value: function onMongoData(data) {\n      var formattedData = JSON.parse(data.currentTarget.response);\n      var parsedMongoData = JSON.parse(data.currentTarget.response);\n      var toDoData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"to-do\";\n      });\n      var doingData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"doing\";\n      });\n      var doneData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"done\";\n      });\n      var sendingObj = {\n        toDo: toDoData,\n        doing: doingData,\n        done: doneData\n      };\n      this.props.setItems(sendingObj);\n    }\n  }, {\n    key: 'loadDataFromMongo',\n    value: function loadDataFromMongo() {\n      var req = new XMLHttpRequest();\n      req.addEventListener('load', this.onMongoData);\n      req.open('GET', '/tasks');\n      req.send();\n      _axios2.default.get('/tasks', {}).then(function (response) {\n        console.log(response);\n        this.onMongoData();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }, {\n    key: 'updateHandler',\n    value: function updateHandler() {\n      this.loadDataFromMongo();\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.loadDataFromMongo();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'mainDiv' },\n        _react2.default.createElement(\n          'div',\n          { id: 'titleDiv' },\n          _react2.default.createElement(\n            'h1',\n            { id: 'dashboardheading' },\n            'Successo'\n          )\n        ),\n        _react2.default.createElement(_ToDoBox2.default, { data: this.props.toDo, handler: this.updateHandler }),\n        _react2.default.createElement(_DoingBox2.default, { data: this.props.doing, handler: this.updateHandler }),\n        _react2.default.createElement(_DoneBox2.default, { data: this.props.done, handler: this.updateHandler }),\n        _react2.default.createElement(_NewTaskForm2.default, { handler: this.updateHandler })\n      );\n    }\n  }]);\n\n  return Successo;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var stateData = state.successo_reducer.toJS();\n\n  return {\n    toDo: stateData.toDo,\n    doing: stateData.doing,\n    done: stateData.done\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\n  return {\n    setItems: function setItems(data) {\n      console.log(\"dispatch walla chala\", data);\n      dispatch({\n        type: 'SET_ITEMS',\n        data: data\n      });\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Successo);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAuanN4P2RhZGIiXSwibmFtZXMiOlsiU3VjY2Vzc28iLCJvbk1vbmdvRGF0YSIsImJpbmQiLCJ1cGRhdGVIYW5kbGVyIiwiZGF0YSIsImZvcm1hdHRlZERhdGEiLCJKU09OIiwicGFyc2UiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJwYXJzZWRNb25nb0RhdGEiLCJ0b0RvRGF0YSIsImZpbHRlciIsImVsIiwiaW5kZXgiLCJzdGF0dXMiLCJkb2luZ0RhdGEiLCJkb25lRGF0YSIsInNlbmRpbmdPYmoiLCJ0b0RvIiwiZG9pbmciLCJkb25lIiwicHJvcHMiLCJzZXRJdGVtcyIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW4iLCJzZW5kIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwibG9hZERhdGFGcm9tTW9uZ28iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic3RhdGVEYXRhIiwic3VjY2Vzc29fcmVkdWNlciIsInRvSlMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxROzs7QUFDSixzQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBSFk7QUFJYjs7OztnQ0FFV0UsSSxFQUFLO0FBQ2YsVUFBSUMsZ0JBQWdCQyxLQUFLQyxLQUFMLENBQVdILEtBQUtJLGFBQUwsQ0FBbUJDLFFBQTlCLENBQXBCO0FBQ0EsVUFB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LEdBQVA7QUFTRCxDQVhEOztrQkFjZSx5QkFDYmlDLGVBRGEsRUFFYk0sa0JBRmEsRUFHWjNDLFFBSFksQyIsImZpbGUiOiIxNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvRG9Cb3ggZnJvbSAnLi9Db21wb25lbnRzLURhc2hCb2FyZC9Ub0RvQm94LmpzeCc7XG5pbXBvcnQgRG9pbmdCb3ggZnJvbSAnLi9Db21wb25lbnRzLURhc2hCb2FyZC9Eb2luZ0JveC5qc3gnO1xuaW1wb3J0IERvbmVCb3ggZnJvbSAnLi9Db21wb25lbnRzLURhc2hCb2FyZC9Eb25lQm94LmpzeCc7XG5pbXBvcnQgTmV3VGFza0Zvcm0gZnJvbSAnLi9Db21wb25lbnRzLURhc2hCb2FyZC9OZXdUYXNrRm9ybS5qc3gnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTdWNjZXNzbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbk1vbmdvRGF0YSA9IHRoaXMub25Nb25nb0RhdGEuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uTW9uZ29EYXRhKGRhdGEpe1xuICAgIHZhciBmb3JtYXR0ZWREYXRhID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgIGNvbnN0IHBhcnNlZE1vbmdvRGF0YSA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcbiAgICBjb25zdCB0b0RvRGF0YSA9IHBhcnNlZE1vbmdvRGF0YS5maWx0ZXIoZnVuY3Rpb24oZWwsIGluZGV4KXtcbiAgICAgIHJldHVybiBwYXJzZWRNb25nb0RhdGFbaW5kZXhdLnN0YXR1cyA9PT0gXCJ0by1kb1wiXG4gICAgfSk7XG4gICAgY29uc3QgZG9pbmdEYXRhID0gcGFyc2VkTW9uZ29EYXRhLmZpbHRlcigoZWwsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VkTW9uZ29EYXRhW2luZGV4XS5zdGF0dXMgPT09IFwiZG9pbmdcIlxuICAgIH0pO1xuICAgIGNvbnN0IGRvbmVEYXRhID0gcGFyc2VkTW9uZ29EYXRhLmZpbHRlcigoZWwsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VkTW9uZ29EYXRhW2luZGV4XS5zdGF0dXMgPT09IFwiZG9uZVwiXG4gICAgfSk7XG4gICAgY29uc3Qgc2VuZGluZ09iaiA9IHtcbiAgICAgIHRvRG86IHRvRG9EYXRhLFxuICAgICAgZG9pbmc6IGRvaW5nRGF0YSxcbiAgICAgIGRvbmU6IGRvbmVEYXRhLFxuICAgIH1cbiAgICB0aGlzLnByb3BzLnNldEl0ZW1zKHNlbmRpbmdPYmopO1xuICB9XG5cbiAgbG9hZERhdGFGcm9tTW9uZ28oKXtcbiAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25Nb25nb0RhdGEpO1xuICAgIHJlcS5vcGVuKCdHRVQnLCAnL3Rhc2tzJyk7XG4gICAgcmVxLnNlbmQoKTtcbiAgICBheGlvcy5nZXQoJy90YXNrcycsIHt9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgdGhpcy5vbk1vbmdvRGF0YSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKCkge1xuICAgIHRoaXMubG9hZERhdGFGcm9tTW9uZ28oKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmxvYWREYXRhRnJvbU1vbmdvKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFpbkRpdlwiPlxuICAgICAgICA8ZGl2IGlkPVwidGl0bGVEaXZcIj48aDEgaWQ9XCJkYXNoYm9hcmRoZWFkaW5nXCI+U3VjY2Vzc288L2gxPjwvZGl2PlxuICAgICAgICA8VG9Eb0JveCBkYXRhPXt0aGlzLnByb3BzLnRvRG99ICBoYW5kbGVyPXt0aGlzLnVwZGF0ZUhhbmRsZXJ9Lz5cbiAgICAgICAgPERvaW5nQm94IGRhdGE9e3RoaXMucHJvcHMuZG9pbmd9ICBoYW5kbGVyPXt0aGlzLnVwZGF0ZUhhbmRsZXJ9Lz5cbiAgICAgICAgPERvbmVCb3ggZGF0YT17dGhpcy5wcm9wcy5kb25lfSBoYW5kbGVyPXt0aGlzLnVwZGF0ZUhhbmRsZXJ9Lz5cbiAgICAgICAgPE5ld1Rhc2tGb3JtIGhhbmRsZXI9e3RoaXMudXBkYXRlSGFuZGxlcn0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICB2YXIgc3RhdGVEYXRhID0gc3RhdGUuc3VjY2Vzc29fcmVkdWNlci50b0pTKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b0RvOiBzdGF0ZURhdGEudG9EbyxcbiAgICBkb2luZzogc3RhdGVEYXRhLmRvaW5nLFxuICAgIGRvbmU6IHN0YXRlRGF0YS5kb25lLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuIFxuICByZXR1cm4ge1xuICAgIHNldEl0ZW1zOiAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkaXNwYXRjaCB3YWxsYSBjaGFsYVwiLGRhdGEpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0lURU1TJyxcbiAgICAgICAgZGF0YVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcylcbiAgKFN1Y2Nlc3NvKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==")}});