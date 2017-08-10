webpackHotUpdate(0,{142:function(module,exports,__webpack_require__){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _ToDoBox = __webpack_require__(146);\n\nvar _ToDoBox2 = _interopRequireDefault(_ToDoBox);\n\nvar _DoingBox = __webpack_require__(143);\n\nvar _DoingBox2 = _interopRequireDefault(_DoingBox);\n\nvar _DoneBox = __webpack_require__(144);\n\nvar _DoneBox2 = _interopRequireDefault(_DoneBox);\n\nvar _NewTaskForm = __webpack_require__(145);\n\nvar _NewTaskForm2 = _interopRequireDefault(_NewTaskForm);\n\nvar _reactRedux = __webpack_require__(107);\n\nvar _immutable = __webpack_require__(81);\n\nvar _immutable2 = _interopRequireDefault(_immutable);\n\nvar _styles = __webpack_require__(18);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Successo = function (_React$Component) {\n  _inherits(Successo, _React$Component);\n\n  function Successo() {\n    _classCallCheck(this, Successo);\n\n    var _this = _possibleConstructorReturn(this, (Successo.__proto__ || Object.getPrototypeOf(Successo)).call(this));\n\n    _this.onMongoData = _this.onMongoData.bind(_this);\n    _this.updateHandler = _this.updateHandler.bind(_this);\n\n    return _this;\n  }\n\n  _createClass(Successo, [{\n    key: 'onMongoData',\n    value: function onMongoData(data) {\n      var formattedData = JSON.parse(data.currentTarget.response);\n      var parsedMongoData = JSON.parse(data.currentTarget.response);\n\n      var toDoData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"to-do\";\n      });\n\n      var doingData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"doing\";\n      });\n\n      var doneData = parsedMongoData.filter(function (el, index) {\n        return parsedMongoData[index].status === \"done\";\n      });\n\n      var sendingObj = {\n        toDo: toDoData,\n        doing: doingData,\n        done: doneData\n      };\n\n      this.props.setItems(sendingObj);\n    }\n  }, {\n    key: 'loadDataFromMongo',\n    value: function loadDataFromMongo() {\n\n      var req = new XMLHttpRequest();\n      req.addEventListener('load', this.onMongoData);\n      req.open('GET', '/tasks');\n      req.send();\n    }\n  }, {\n    key: 'updateHandler',\n    value: function updateHandler() {\n      this.loadDataFromMongo();\n    }\n  }, {\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.loadDataFromMongo();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'mainDiv' },\n        _react2.default.createElement(\n          'div',\n          { id: 'titleDiv' },\n          _react2.default.createElement(\n            'h1',\n            { id: 'dashboardheading' },\n            'Successo'\n          )\n        ),\n        _react2.default.createElement(_ToDoBox2.default, { data: this.props.toDo, handler: this.updateHandler }),\n        _react2.default.createElement(_DoingBox2.default, { data: this.props.doing, handler: this.updateHandler }),\n        _react2.default.createElement(_DoneBox2.default, { data: this.props.done, handler: this.updateHandler }),\n        _react2.default.createElement(_NewTaskForm2.default, { handler: this.updateHandler })\n      );\n    }\n  }]);\n\n  return Successo;\n}(_react2.default.Component);\n\n;\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var stateData = state.successo_reducer.toJS();\n\n  return {\n    toDo: stateData.toDo,\n    doing: stateData.doing,\n    done: stateData.done\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n\n  return {\n    setItems: function setItems(data) {\n      console.log(\"dispatch walla chala\", data);\n      dispatch({\n        type: 'SET_ITEMS',\n        data: data\n      });\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Successo);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAuanN4P2RhZGIiXSwibmFtZXMiOlsiU3VjY2Vzc28iLCJvbk1vbmdvRGF0YSIsImJpbmQiLCJ1cGRhdGVIYW5kbGVyIiwiZGF0YSIsImZvcm1hdHRlZERhdGEiLCJKU09OIiwicGFyc2UiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJwYXJzZWRNb25nb0RhdGEiLCJ0b0RvRGF0YSIsImZpbHRlciIsImVsIiwiaW5kZXgiLCJzdGF0dXMiLCJkb2luZ0RhdGEiLCJkb25lRGF0YSIsInNlbmRpbmdPYmoiLCJ0b0RvIiwiZG9pbmciLCJkb25lIiwicHJvcHMiLCJzZXRJdGVtcyIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW4iLCJzZW5kIiwibG9hZERhdGFGcm9tTW9uZ28iLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm93blByb3BzIiwic3RhdGVEYXRhIiwic3VjY2Vzc29fcmVkdWNlciIsInRvSlMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7O0FBSFk7QUFLYjs7OztnQ0FFV0UsSSxFQUFLO0FBQ2YsVUFBSUMsZ0JBQWdCQyxLQUFLQyxLQUFMLENBQVdILEtBQUtJLGFBQUwsQ0FBbUJDLFFBQTlCLENBQXBCO0FBQ0EsVUFBTUMsa0JBQWtCSixLQUFLQyxLQUFMLENBQVdILEtBQUtJLGFBQUwsQ0FBbUJDLFFBQTlCLENBQXhCOztBQUVBLFVBQU1FLFdBQVdELGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBU0MsRUFBVCxFQUFhQyxLQUFiLEVBQW1CO0FBQ3pELGVBQU9KLGdCQUFnQkksS0FBaEIsRUFBdUJDLE1BQXZCLEtBQWtDLE9BQXpDO0FBQ0QsT0FGZ0IsQ0FBakI7O0FBSUEsVUFBTUMsWUFBWU4sZ0JBQWdCRSxNQUFoQixDQUF1QixVQUFDQyxFQUFELEVBQUtDLEtBQUwsRUFBZTtBQUN0RCxlQUFPSixnQkFBZ0JJLEtBQWhCLEVBQXVCQyxNQUF2QixLQUFrQyxPQUF6QztBQUNELE9BRmlCLENBQWxCOztBQUlBLFVBQU1FLFdBQVdQLGdCQUFnQkUsTUFBaEIsQ0FBdUIsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDckQsZUFBT0osZ0JBQWdCSSxLQUFoQixFQUF1QkMsTUFBdkIsS0FBa0MsTUFBekM7QUFDRCxPQUZnQixDQUFqQjs7QUFJQSxVQUFNRyxhQUFhO0FBQ2pCQyxjQUFNUixRQURXO0FBRWpCUyxlQUFPSixTQUZVO0FBR2pCSyxjQUFNSjtBQUhXLE9BQW5COztBQU1BLFdBQUtLLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkwsVUFBcEI7QUFDRDs7O3dDQUVrQjs7QUFFakIsVUFBTU0sTUFBTSxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsVUFBSUUsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsS0FBS3pCLFdBQWxDO0FBQ0F1QixVQUFJRyxJQUFKLENBQVMsS0FBVCxFQUFnQixRQUFoQjtBQUNBSCxVQUFJSSxJQUFKO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtDLGlCQUFMO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsV0FBS0EsaUJBQUw7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFHLFNBQVI7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFVBQVI7QUFBbUI7QUFBQTtBQUFBLGNBQUksSUFBRyxrQkFBUDtBQUFBO0FBQUE7QUFBbkIsU0FERjtBQUVFLDJEQUFTLE1BQU0sS0FBS1AsS0FBTCxDQUFXSCxJQUExQixFQUFpQyxTQUFTLEtBQUtoQixhQUEvQyxHQUZGO0FBR0UsNERBQVUsTUFBTSxLQUFLbUIsS0FBTCxDQUFXRixLQUEzQixFQUFtQyxTQUFTLEtBQUtqQixhQUFqRCxHQUhGO0FBSUUsMkRBQVMsTUFBTSxLQUFLbUIsS0FBTCxDQUFXRCxJQUExQixFQUFnQyxTQUFTLEtBQUtsQixhQUE5QyxHQUpGO0FBS0UsK0RBQWEsU0FBUyxLQUFLQSxhQUEzQjtBQUxGLE9BREY7QUFTRDs7OztFQTNEb0IsZ0JBQU0yQixTOztBQTRENUI7O0FBR0QsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDM0MsTUFBSUMsWUFBWUYsTUFBTUcsZ0JBQU4sQ0FBdUJDLElBQXZCLEVBQWhCOztBQUVBLFNBQU87QUFDTGpCLFVBQU1lLFVBQVVmLElBRFg7QUFFTEMsV0FBT2MsVUFBVWQsS0FGWjtBQUdMQyxVQUFNYSxVQUFVYjtBQUhYLEdBQVA7QUFLRCxDQVJEOztBQVVBLElBQU1nQixxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7O0FBRXZDLFNBQU87QUFDTGYsY0FBVSxrQkFBQ25CLElBQUQsRUFBVTtBQUNsQm1DLGNBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFtQ3BDLElBQW5DO0FBQ0FrQyxlQUFTO0FBQ1BHLGNBQU0sV0FEQztBQUVQckM7QUFGTyxPQUFUO0FBSUQ7QUFQSSxHQUFQO0FBU0QsQ0FYRDs7a0JBY2UseUJBQ2IyQixlQURhLEVBRWJNLGtCQUZhLEVBR1pyQyxRQUhZLEMiLCJmaWxlIjoiMTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb0RvQm94IGZyb20gJy4vQ29tcG9uZW50cy1EYXNoQm9hcmQvVG9Eb0JveC5qc3gnO1xuaW1wb3J0IERvaW5nQm94IGZyb20gJy4vQ29tcG9uZW50cy1EYXNoQm9hcmQvRG9pbmdCb3guanN4JztcbmltcG9ydCBEb25lQm94IGZyb20gJy4vQ29tcG9uZW50cy1EYXNoQm9hcmQvRG9uZUJveC5qc3gnO1xuaW1wb3J0IE5ld1Rhc2tGb3JtIGZyb20gJy4vQ29tcG9uZW50cy1EYXNoQm9hcmQvTmV3VGFza0Zvcm0uanN4JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEltbXV0YWJsZSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2Nzcy9zdHlsZXMuY3NzXCI7XG5cbmNsYXNzIFN1Y2Nlc3NvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uTW9uZ29EYXRhID0gdGhpcy5vbk1vbmdvRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xuICBcbiAgfVxuXG4gIG9uTW9uZ29EYXRhKGRhdGEpe1xuICAgIHZhciBmb3JtYXR0ZWREYXRhID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgIGNvbnN0IHBhcnNlZE1vbmdvRGF0YSA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcblxuICAgIGNvbnN0IHRvRG9EYXRhID0gcGFyc2VkTW9uZ29EYXRhLmZpbHRlcihmdW5jdGlvbihlbCwgaW5kZXgpe1xuICAgICAgcmV0dXJuIHBhcnNlZE1vbmdvRGF0YVtpbmRleF0uc3RhdHVzID09PSBcInRvLWRvXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvaW5nRGF0YSA9IHBhcnNlZE1vbmdvRGF0YS5maWx0ZXIoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlZE1vbmdvRGF0YVtpbmRleF0uc3RhdHVzID09PSBcImRvaW5nXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvbmVEYXRhID0gcGFyc2VkTW9uZ29EYXRhLmZpbHRlcigoZWwsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gcGFyc2VkTW9uZ29EYXRhW2luZGV4XS5zdGF0dXMgPT09IFwiZG9uZVwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBzZW5kaW5nT2JqID0ge1xuICAgICAgdG9EbzogdG9Eb0RhdGEsXG4gICAgICBkb2luZzogZG9pbmdEYXRhLFxuICAgICAgZG9uZTogZG9uZURhdGEsXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5zZXRJdGVtcyhzZW5kaW5nT2JqKTtcbiAgfVxuXG4gIGxvYWREYXRhRnJvbU1vbmdvKCl7XG5cbiAgICBjb25zdCByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMub25Nb25nb0RhdGEpO1xuICAgIHJlcS5vcGVuKCdHRVQnLCAnL3Rhc2tzJyk7XG4gICAgcmVxLnNlbmQoKTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5sb2FkRGF0YUZyb21Nb25nbygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMubG9hZERhdGFGcm9tTW9uZ28oKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJtYWluRGl2XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0aXRsZURpdlwiPjxoMSBpZD1cImRhc2hib2FyZGhlYWRpbmdcIj5TdWNjZXNzbzwvaDE+PC9kaXY+XG4gICAgICAgIDxUb0RvQm94IGRhdGE9e3RoaXMucHJvcHMudG9Eb30gIGhhbmRsZXI9e3RoaXMudXBkYXRlSGFuZGxlcn0vPlxuICAgICAgICA8RG9pbmdCb3ggZGF0YT17dGhpcy5wcm9wcy5kb2luZ30gIGhhbmRsZXI9e3RoaXMudXBkYXRlSGFuZGxlcn0vPlxuICAgICAgICA8RG9uZUJveCBkYXRhPXt0aGlzLnByb3BzLmRvbmV9IGhhbmRsZXI9e3RoaXMudXBkYXRlSGFuZGxlcn0vPlxuICAgICAgICA8TmV3VGFza0Zvcm0gaGFuZGxlcj17dGhpcy51cGRhdGVIYW5kbGVyfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIHZhciBzdGF0ZURhdGEgPSBzdGF0ZS5zdWNjZXNzb19yZWR1Y2VyLnRvSlMoKTtcblxuICByZXR1cm4ge1xuICAgIHRvRG86IHN0YXRlRGF0YS50b0RvLFxuICAgIGRvaW5nOiBzdGF0ZURhdGEuZG9pbmcsXG4gICAgZG9uZTogc3RhdGVEYXRhLmRvbmUsXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gXG4gIHJldHVybiB7XG4gICAgc2V0SXRlbXM6IChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImRpc3BhdGNoIHdhbGxhIGNoYWxhXCIsZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfSVRFTVMnLFxuICAgICAgICBkYXRhXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzKVxuICAoU3VjY2Vzc28pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC5qc3giXSwic291cmNlUm9vdCI6IiJ9")}});