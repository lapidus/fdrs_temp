webpackJsonp([3,29],{

/***/ 1313:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(177);

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Nicely formatted numbers
 * @param  {Number} input
 * @param  {Number} precision
 * @return {String}
 */
var niceNum = function niceNum(input, precision, format, fullNumber) {

  if (input === "N/A" || input === "#N/A" || input === "" || input === null) return "N/A";

  input = Number(input);
  if (!isNumeric(input)) return "…";
  // if (input === "N/A" || input === "#N/A" || input === "") return input
  // Set the best precision
  if (isNumeric(input) && !isNumeric(precision)) {
    if (input < 0.001) precision = 4;else if (input < 0.01) precision = 3;else if (input < 0.1) precision = 2;else if (input < 10 || input > 1000000) precision = 1;else precision = 0;
  }

  // if (Math.abs(input) < 1000) return input.toFixed(precision)
  if (Math.abs(input) < 1000) return input.toFixed();

  if (fullNumber) {
    return String(input).split("").reverse().join("").match(/.{1,3}/g).join(",").split("").reverse().join("");
  }

  var prefixes = format === "long" ? { k: " thousand", M: " million", G: " billion", T: " trillion" } : { k: "k", M: "m", G: "bn", T: "tr" };
  var formatted = (0, _d.formatPrefix)("k", input)(input);
  var scaled = +formatted.slice(0, -1);
  var symbol = formatted.slice(-1);
  return "" + scaled.toFixed(precision) + prefixes[symbol];
};

exports.default = niceNum;

/***/ },

/***/ 1314:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var stroke = "#EE3224"

var HeadlineDivider = function HeadlineDivider() {
  return _react2.default.createElement(
    "div",
    { className: "headline-divider" },
    _react2.default.createElement(
      "svg",
      { viewBox: "0 0 30 20", className: "block" },
      _react2.default.createElement("polyline", {
        className: "stroke-primary",
        points: "2 0 2 16 20 2 30 2",
        strokeWidth: "4",
        fill: "transparent"
      })
    )
  );
};

exports.default = HeadlineDivider;

/***/ },

/***/ 1315:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextChapter = function NextChapter(_ref, _ref2) {
  var nextChapter = _ref.nextChapter;
  var language = _ref2.language;
  return _react2.default.createElement(
    "div",
    { className: "clearfix py2 bg-light" },
    _react2.default.createElement(
      "div",
      { className: "col sm-6 sm-offset-6 px1" },
      _react2.default.createElement(
        "p",
        { className: "text-sm color-primary m0" },
        nextChapter.heading
      ),
      _react2.default.createElement(
        "h2",
        { className: "text-md sm-text-lg mt0 light" },
        _react2.default.createElement(
          _LanguageLink2.default,
          { to: "/fdrs/report/" + nextChapter.slug },
          nextChapter.title
        )
      )
    )
  );
};

NextChapter.propTypes = {
  nextChapter: _react2.default.PropTypes.object
};

NextChapter.contextTypes = {
  language: _react2.default.PropTypes.string
};

exports.default = NextChapter;

/***/ },

/***/ 1319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(306);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lineColors = ["#EE3224", "#0F9EE3", "#D7006D"];

var LineChart = function (_React$Component) {
  _inherits(LineChart, _React$Component);

  function LineChart(props) {
    _classCallCheck(this, LineChart);

    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));

    _this.state = {
      width: _this.props.width
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    return _this;
  }

  _createClass(LineChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener("resize", this.resizeChart);
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      this.setState({
        width: this.refs.visualizationWrapper.clientWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeChart);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { ref: "visualizationWrapper" },
        this.props.title ? _react2.default.createElement(
          "h4",
          { className: "title strong" },
          this.props.title
        ) : "",
        this.props.domain.y[1] === 0 ? _react2.default.createElement(
          "p",
          null,
          "There is no data available for this indicator"
        ) : _react2.default.createElement(
          "svg",
          { width: this.state.width, height: this.props.height },
          this.props.showAxes ? _react2.default.createElement(_victory.VictoryAxis, {
            dependentAxis: true,
            label: this.props.axisLabels ? this.props.axisLabels.y || "" : "",
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: function () {
              return _this2.props.domain.y;
            }(),
            standalone: false,
            tickCount: this.props.tickCount || 3,
            height: this.props.height,
            width: this.state.width,
            style: {
              grid: {
                stroke: "#E1E0DF",
                strokeWidth: 1
              },
              axis: {
                stroke: "transparent"
              },
              tickLabels: {
                fontFamily: "inherit",
                fontSize: 13
              },
              axisLabel: {
                fontFamily: "inherit",
                fontSize: 16,
                padding: 40
              },
              ticks: {
                stroke: "transparent"
              }
            },
            orientation: "left",
            tickFormat: function tickFormat(y) {
              return (0, _niceNum2.default)(y);
            }
          }) : "",
          this.props.showAxes ? _react2.default.createElement(_victory.VictoryAxis, {
            label: this.props.axisLabels ? this.props.axisLabels.x || "" : "",
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: function () {
              return _this2.props.domain.x;
            }(),
            standalone: false,
            tickCount: 4,
            height: this.props.height,
            width: this.state.width,
            scale: "time",
            tickFormat: function tickFormat(x) {
              return x.getFullYear();
            },
            style: {
              axisLabel: {
                fontFamily: "inherit",
                fontSize: 16,
                padding: 30
              },
              tickLabels: {
                fontFamily: "inherit",
                fontSize: 13
              },
              axis: {
                stroke: "#D1D0CF"
              },
              ticks: {
                stroke: "#D1D0CF"
              }
            },
            orientation: "bottom"
          }) : "",
          this.props.dataset.map(function (line, i) {
            return _react2.default.createElement(_victory.VictoryLine, {
              domain: _this2.props.domain,
              standalone: false,
              width: _this2.state.width,
              height: _this2.props.height,
              padding: _this2.props.padding || {
                top: 30,
                bottom: 40,
                left: 60,
                right: 60
              },
              key: i,
              data: _this2.props.dataset[i],
              style: {
                data: {
                  stroke: lineColors[i],
                  strokeWidth: 3
                },
                labels: {
                  fontFamily: "inherit",
                  fontSize: 13
                } },
              label: _this2.props.labels ? _this2.props.labels[i] : "" });
          }),
          this.props.dataset.map(function (dot, i) {
            return _react2.default.createElement(_victory.VictoryScatter, {
              domain: _this2.props.domain,
              standalone: false,
              width: _this2.state.width,
              height: _this2.props.height,
              padding: _this2.props.padding || {
                top: 30,
                bottom: 40,
                left: 60,
                right: 60
              },
              key: i,
              data: _this2.props.dataset[i],
              style: {
                data: {
                  fill: function fill(d) {
                    return d.y ? lineColors[i] : "transparent";
                  },
                  stroke: "#FFFFFF",
                  strokeWidth: function strokeWidth(d) {
                    return d.y ? 3 : 0;
                  }
                }
              },
              size: 4
            });
          })
        ),
        this.props.caption ? _react2.default.createElement(
          "p",
          { className: "small mt0 pt1" },
          this.props.caption
        ) : ""
      );
    }
  }]);

  return LineChart;
}(_react2.default.Component);

LineChart.defaultProps = {
  width: 860,
  height: 420,
  showAxes: true
};

exports.default = LineChart;

/***/ },

/***/ 1326:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addCommas = function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};

exports.default = {
  addCommas: addCommas
};

/***/ },

/***/ 1327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartTooltip = function ChartTooltip(_ref) {
  var visible = _ref.visible,
      position = _ref.position,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    {
      className: "chart-tooltip",
      style: {
        display: visible ? "block" : "none",
        top: position[0] - 8 || 0,
        left: position[1] || 0
      }
    },
    children
  );
};

ChartTooltip.propTypes = {
  visible: _react2.default.PropTypes.bool,
  position: _react2.default.PropTypes.array,
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
};

exports.default = ChartTooltip;

/***/ },

/***/ 1332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _max = __webpack_require__(534);

var _max2 = _interopRequireDefault(_max);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = exports.Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      active: _this.props.active,
      height: 0
    };

    _this.computeHeights = _this.computeHeights.bind(_this);
    return _this;
  }

  _createClass(Tabs, [{
    key: "switchTab",
    value: function switchTab(i) {
      this.setState({ active: i });
    }
  }, {
    key: "computeHeights",
    value: function computeHeights() {
      var els = [];
      for (var i = 0, len = this.tabPanelWrapper.childElementCount; i < len; i++) {
        els[i] = this.tabPanelWrapper.children[i];
      }
      var heights = els.map(function (item) {
        return Number(window.getComputedStyle(item).height.split("px")[0]);
      });
      this.setState({ height: (0, _max2.default)(heights) });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.computeHeights();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabs = this.props.children;
      var active = this.state.active;


      return _react2.default.createElement(
        "div",
        { className: "tabs" },
        _react2.default.createElement(
          "div",
          { className: "tab-navigation" },
          tabs.map(function (tab, i) {
            return _react2.default.createElement(
              "button",
              {
                className: active === i ? "btn bg-light px1" : "btn px1",
                key: i,
                onClick: _this2.switchTab.bind(_this2, i)
              },
              tab.props.title
            );
          })
        ),
        _react2.default.createElement("hr", null),
        _react2.default.createElement(
          "div",
          { ref: function ref(tabPanelWrapper) {
              return _this2.tabPanelWrapper = tabPanelWrapper;
            }, style: { position: "relative", height: this.state.height } },
          tabs.map(function (tabpanel, j) {
            return _react2.default.createElement(
              TabPanel,
              {
                key: j,
                active: _this2.state.active === j
              },
              tabpanel.props.children
            );
          })
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

var TabPanel = exports.TabPanel = function TabPanel(_ref) {
  var active = _ref.active,
      children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: active ? "absolute t0 l0 base-12 opacity-1" : "absolute t0 l0 base-12 opacity-0" },
    children
  );
};

/***/ },

/***/ 1333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(306);

var _ChartTooltip = __webpack_require__(1327);

var _ChartTooltip2 = _interopRequireDefault(_ChartTooltip);

var _numberFormatter = __webpack_require__(1326);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedBarChart = function (_React$Component) {
  _inherits(StackedBarChart, _React$Component);

  function StackedBarChart(props) {
    _classCallCheck(this, StackedBarChart);

    var _this = _possibleConstructorReturn(this, (StackedBarChart.__proto__ || Object.getPrototypeOf(StackedBarChart)).call(this, props));

    _this.state = {
      width: _this.props.width,
      tooltipTitle: "Tooltip Title",
      tooltipContent: "Tooltip Content",
      tooltipVisible: false,
      tooltipPosition: [],
      tooltipParentPosition: []
    };

    _this.resize = _this.resize.bind(_this);
    _this.getWrapperRef = _this.getWrapperRef.bind(_this);
    return _this;
  }

  _createClass(StackedBarChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        tooltipParentPosition: [this.wrapper.getBoundingClientRect().top, this.wrapper.getBoundingClientRect().left]
      });
      this.resize();
      window.addEventListener("resize", this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resize);
    }
  }, {
    key: "getWrapperRef",
    value: function getWrapperRef(wrapper) {
      this.wrapper = wrapper;
    }
  }, {
    key: "resize",
    value: function resize() {
      console.log("Resizing line chart");
      this.setState({
        width: this.wrapper.clientWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          labels = _props.labels,
          height = _props.height,
          padding = _props.padding,
          data = _props.data,
          customFills = _props.customFills,
          caption = _props.caption;
      var _state = this.state,
          tooltipVisible = _state.tooltipVisible,
          tooltipPosition = _state.tooltipPosition,
          tooltipParentPosition = _state.tooltipParentPosition,
          tooltipTitle = _state.tooltipTitle,
          tooltipContent = _state.tooltipContent;


      var width = this.state.width || this.props.width;

      return _react2.default.createElement(
        "div",
        { className: "simple-bar-chart" },
        title && _react2.default.createElement(
          "h4",
          { className: "title strong" },
          title
        ),
        _react2.default.createElement(
          "div",
          { ref: this.getWrapperRef, style: { position: "relative" } },
          _react2.default.createElement(
            "svg",
            {
              width: width,
              height: height
            },
            labels.map(function (label, i) {
              return _react2.default.createElement(_victory.VictoryLabel, {
                verticalAnchor: "end",
                textAnchor: "start",
                style: {
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: "700"
                },
                x: 30,
                y: height + 15 - (height - 22) / labels.length * (i + 1),
                key: i,
                text: label.text
              });
            }),
            _react2.default.createElement(
              _victory.VictoryStack,
              {
                horizontal: true,
                standalone: false,
                width: width,
                height: height,
                padding: padding,
                style: {
                  data: { width: 30 },
                  labels: {
                    fontFamily: "inherit",
                    fontSize: "14px",
                    lineHeight: "20px"
                  }
                },
                labels: labels.map(function (label) {
                  return label.number;
                })
              },
              data.map(function (dataset, i) {
                return _react2.default.createElement(_victory.VictoryBar, {
                  key: i,
                  style: { data: { fill: customFills[i] } },
                  data: dataset,
                  events: dataset[i].name ? [{
                    target: "data",
                    eventHandlers: {
                      onMouseEnter: function onMouseEnter(evt, _ref) {
                        var datum = _ref.datum,
                            position = _ref.position;

                        _this2.setState({
                          tooltipTitle: datum.name,
                          tooltipContent: _numberFormatter2.default.addCommas(Math.round(datum.y)),
                          tooltipVisible: true,
                          tooltipPosition: [position.x, position.y0 + (position.y1 - position.y0) / 2]
                        });
                      },
                      onMouseLeave: function onMouseLeave() {
                        return _this2.setState({ tooltipVisible: false });
                      }
                    }
                  }] : []
                });
              })
            )
          ),
          _react2.default.createElement(
            _ChartTooltip2.default,
            {
              visible: tooltipVisible,
              position: tooltipPosition,
              parentPosition: tooltipParentPosition
            },
            _react2.default.createElement(
              "strong",
              { className: "small" },
              tooltipTitle
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "span",
              { className: "small" },
              tooltipContent
            )
          )
        ),
        caption && _react2.default.createElement(
          "p",
          { className: "small mt0" },
          caption
        )
      );
    }
  }]);

  return StackedBarChart;
}(_react2.default.Component);

StackedBarChart.propTypes = {
  data: _react2.default.PropTypes.array,
  width: _react2.default.PropTypes.number,
  height: _react2.default.PropTypes.number,
  title: _react2.default.PropTypes.string,
  labels: _react2.default.PropTypes.array,
  customFills: _react2.default.PropTypes.array,
  padding: _react2.default.PropTypes.object,
  caption: _react2.default.PropTypes.string
};

StackedBarChart.defaultProps = {
  padding: { top: 40, bottom: 40, left: 40, right: 180 },
  customFills: ["#EE3224", "#0F9EE3", "#D6D2D0"]
};

exports.default = StackedBarChart;

/***/ },

/***/ 1353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _range = __webpack_require__(179);

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StaffCompositionChart = function StaffCompositionChart(_ref) {
  var title = _ref.title,
      translations = _ref.translations,
      volunteers = _ref.volunteers;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h4",
      { className: "title strong" },
      title
    ),
    _react2.default.createElement(
      "svg",
      { width: "100%", height: "560px", viewBox: "0 0 960 560" },
      _react2.default.createElement(
        "g",
        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "34",
            fontWeight: "normal",
            fill: "#786A65"
          },
          _react2.default.createElement(
            "tspan",
            { x: "187", y: "509" },
            "16,000,000"
          )
        ),
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "13",
            fontWeight: "normal",
            letterSpacing: "1",
            fill: "#786A65"
          },
          translations.volunteers.split("\n").map(function (item, i) {
            return _react2.default.createElement(
              "tspan",
              {
                x: "270",
                y: 455 + i * 16,
                key: i,
                className: "caps",
                textAnchor: "middle"
              },
              item
            );
          })
        ),
        _react2.default.createElement("rect", { fill: "#EE3224", x: "10", y: "423", width: "520", height: "4" }),
        volunteers.verticals.map(function (vertical, i) {
          return _react2.default.createElement(
            "g",
            { fill: "#D6D2D0", key: i, transform: "translate(0, " + (7 + i * 36) + ")" },
            volunteers.humans.map(function (human, j) {
              return _react2.default.createElement(
                "g",
                { key: j, transform: "translate(" + (6 + 17 * j) + ",0)" },
                _react2.default.createElement("path", { d: "M7.05802469,10.962963 C5.40617284,10.962963 4.00987654,12.445679 4.00987654,14.1864198 L4.00987654,22.2469136 C4.00987654,22.4209877 4.07530864,22.5679012 4.19012346,22.691358 L5.24444444,23.7407407 L5.25815564,31.370753 C5.25815564,31.7176666 5.53469885,31.988037 5.87543959,31.988037 L12.0482791,31.988037 C12.3902544,31.988037 12.6655631,31.7176666 12.6655631,31.370753 L12.6518519,23.7407407 L13.7049383,22.691358 C13.8209877,22.5679012 13.8864198,22.4209877 13.8864198,22.2469136 L13.8864198,14.1864198 C13.8864198,12.445679 12.491358,10.962963 10.8382716,10.962963 L7.05802469,10.962963 Z M8.94814815,10.5185185 C10.9901235,10.5185185 12.6518519,8.86419753 12.6518519,6.81481481 C12.6518519,4.77777778 10.9901235,3.11111111 8.94814815,3.11111111 C6.90617284,3.11111111 5.24444444,4.77777778 5.24444444,6.81481481 C5.24444444,8.86419753 6.90617284,10.5185185 8.94814815,10.5185185 Z" })
              );
            })
          );
        }),
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "34",
            fontWeight: "normal",
            fill: "#786A65"
          },
          _react2.default.createElement(
            "tspan",
            { x: "608", y: "509" },
            "451,952"
          )
        ),
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "13",
            fontWeight: "normal",
            letterSpacing: "0",
            fill: "#786A65"
          },
          translations.paidStaff.split("\n").map(function (item, i) {
            return _react2.default.createElement(
              "tspan",
              {
                x: "668",
                y: 455 + i * 16,
                key: i,
                className: "caps",
                textAnchor: "middle"
              },
              item
            );
          })
        ),
        _react2.default.createElement("rect", { fill: "#EE3224", x: "630", y: "423", width: "78", height: "4" }),
        _react2.default.createElement(
          "g",
          { fill: "#D6D2D0" },
          _react2.default.createElement("path", { d: "M684.058025,161.962963 C682.406173,161.962963 681.009877,163.445679 681.009877,165.18642 L681.009877,173.246914 C681.009877,173.420988 681.075309,173.567901 681.190123,173.691358 L682.244444,174.740741 L682.258156,182.370753 C682.258156,182.717667 682.534699,182.988037 682.87544,182.988037 L689.048279,182.988037 C689.390254,182.988037 689.665563,182.717667 689.665563,182.370753 L689.651852,174.740741 L690.704938,173.691358 C690.820988,173.567901 690.88642,173.420988 690.88642,173.246914 L690.88642,165.18642 C690.88642,163.445679 689.491358,161.962963 687.838272,161.962963 L684.058025,161.962963 Z M685.948148,161.518519 C687.990123,161.518519 689.651852,159.864198 689.651852,157.814815 C689.651852,155.777778 687.990123,154.111111 685.948148,154.111111 C683.906173,154.111111 682.244444,155.777778 682.244444,157.814815 C682.244444,159.864198 683.906173,161.518519 685.948148,161.518519 Z" }),
          _react2.default.createElement("path", { d: "M667.058025,161.962963 C665.406173,161.962963 664.009877,163.445679 664.009877,165.18642 L664.009877,173.246914 C664.009877,173.420988 664.075309,173.567901 664.190123,173.691358 L665.244444,174.740741 L665.258156,182.370753 C665.258156,182.717667 665.534699,182.988037 665.87544,182.988037 L672.048279,182.988037 C672.390254,182.988037 672.665563,182.717667 672.665563,182.370753 L672.651852,174.740741 L673.704938,173.691358 C673.820988,173.567901 673.88642,173.420988 673.88642,173.246914 L673.88642,165.18642 C673.88642,163.445679 672.491358,161.962963 670.838272,161.962963 L667.058025,161.962963 Z M668.948148,161.518519 C670.990123,161.518519 672.651852,159.864198 672.651852,157.814815 C672.651852,155.777778 670.990123,154.111111 668.948148,154.111111 C666.906173,154.111111 665.244444,155.777778 665.244444,157.814815 C665.244444,159.864198 666.906173,161.518519 668.948148,161.518519 Z" }),
          _react2.default.createElement("path", { d: "M701.058025,161.962963 C699.406173,161.962963 698.009877,163.445679 698.009877,165.18642 L698.009877,173.246914 C698.009877,173.420988 698.075309,173.567901 698.190123,173.691358 L699.244444,174.740741 L699.258156,182.370753 C699.258156,182.717667 699.534699,182.988037 699.87544,182.988037 L706.048279,182.988037 C706.390254,182.988037 706.665563,182.717667 706.665563,182.370753 L706.651852,174.740741 L707.704938,173.691358 C707.820988,173.567901 707.88642,173.420988 707.88642,173.246914 L707.88642,165.18642 C707.88642,163.445679 706.491358,161.962963 704.838272,161.962963 L701.058025,161.962963 Z M702.948148,161.518519 C704.990123,161.518519 706.651852,159.864198 706.651852,157.814815 C706.651852,155.777778 704.990123,154.111111 702.948148,154.111111 C700.906173,154.111111 699.244444,155.777778 699.244444,157.814815 C699.244444,159.864198 700.906173,161.518519 702.948148,161.518519 Z" }),
          _react2.default.createElement("path", { d: "M633.058025,161.962963 C631.406173,161.962963 630.009877,163.445679 630.009877,165.18642 L630.009877,173.246914 C630.009877,173.420988 630.075309,173.567901 630.190123,173.691358 L631.244444,174.740741 L631.258156,182.370753 C631.258156,182.717667 631.534699,182.988037 631.87544,182.988037 L638.048279,182.988037 C638.390254,182.988037 638.665563,182.717667 638.665563,182.370753 L638.651852,174.740741 L639.704938,173.691358 C639.820988,173.567901 639.88642,173.420988 639.88642,173.246914 L639.88642,165.18642 C639.88642,163.445679 638.491358,161.962963 636.838272,161.962963 L633.058025,161.962963 Z M634.948148,161.518519 C636.990123,161.518519 638.651852,159.864198 638.651852,157.814815 C638.651852,155.777778 636.990123,154.111111 634.948148,154.111111 C632.906173,154.111111 631.244444,155.777778 631.244444,157.814815 C631.244444,159.864198 632.906173,161.518519 634.948148,161.518519 Z" }),
          _react2.default.createElement("path", { d: "M650.058025,161.962963 C648.406173,161.962963 647.009877,163.445679 647.009877,165.18642 L647.009877,173.246914 C647.009877,173.420988 647.075309,173.567901 647.190123,173.691358 L648.244444,174.740741 L648.258156,182.370753 C648.258156,182.717667 648.534699,182.988037 648.87544,182.988037 L655.048279,182.988037 C655.390254,182.988037 655.665563,182.717667 655.665563,182.370753 L655.651852,174.740741 L656.704938,173.691358 C656.820988,173.567901 656.88642,173.420988 656.88642,173.246914 L656.88642,165.18642 C656.88642,163.445679 655.491358,161.962963 653.838272,161.962963 L650.058025,161.962963 Z M651.948148,161.518519 C653.990123,161.518519 655.651852,159.864198 655.651852,157.814815 C655.651852,155.777778 653.990123,154.111111 651.948148,154.111111 C649.906173,154.111111 648.244444,155.777778 648.244444,157.814815 C648.244444,159.864198 649.906173,161.518519 651.948148,161.518519 Z" }),
          _react2.default.createElement("path", { d: "M650.058025,197.962963 C648.406173,197.962963 647.009877,199.445679 647.009877,201.18642 L647.009877,209.246914 C647.009877,209.420988 647.075309,209.567901 647.190123,209.691358 L648.244444,210.740741 L648.258156,218.370753 C648.258156,218.717667 648.534699,218.988037 648.87544,218.988037 L655.048279,218.988037 C655.390254,218.988037 655.665563,218.717667 655.665563,218.370753 L655.651852,210.740741 L656.704938,209.691358 C656.820988,209.567901 656.88642,209.420988 656.88642,209.246914 L656.88642,201.18642 C656.88642,199.445679 655.491358,197.962963 653.838272,197.962963 L650.058025,197.962963 Z M651.948148,197.518519 C653.990123,197.518519 655.651852,195.864198 655.651852,193.814815 C655.651852,191.777778 653.990123,190.111111 651.948148,190.111111 C649.906173,190.111111 648.244444,191.777778 648.244444,193.814815 C648.244444,195.864198 649.906173,197.518519 651.948148,197.518519 Z" }),
          _react2.default.createElement("path", { d: "M667.058025,197.962963 C665.406173,197.962963 664.009877,199.445679 664.009877,201.18642 L664.009877,209.246914 C664.009877,209.420988 664.075309,209.567901 664.190123,209.691358 L665.244444,210.740741 L665.258156,218.370753 C665.258156,218.717667 665.534699,218.988037 665.87544,218.988037 L672.048279,218.988037 C672.390254,218.988037 672.665563,218.717667 672.665563,218.370753 L672.651852,210.740741 L673.704938,209.691358 C673.820988,209.567901 673.88642,209.420988 673.88642,209.246914 L673.88642,201.18642 C673.88642,199.445679 672.491358,197.962963 670.838272,197.962963 L667.058025,197.962963 Z M668.948148,197.518519 C670.990123,197.518519 672.651852,195.864198 672.651852,193.814815 C672.651852,191.777778 670.990123,190.111111 668.948148,190.111111 C666.906173,190.111111 665.244444,191.777778 665.244444,193.814815 C665.244444,195.864198 666.906173,197.518519 668.948148,197.518519 Z" }),
          _react2.default.createElement("path", { d: "M633.058025,197.962963 C631.406173,197.962963 630.009877,199.445679 630.009877,201.18642 L630.009877,209.246914 C630.009877,209.420988 630.075309,209.567901 630.190123,209.691358 L631.244444,210.740741 L631.258156,218.370753 C631.258156,218.717667 631.534699,218.988037 631.87544,218.988037 L638.048279,218.988037 C638.390254,218.988037 638.665563,218.717667 638.665563,218.370753 L638.651852,210.740741 L639.704938,209.691358 C639.820988,209.567901 639.88642,209.420988 639.88642,209.246914 L639.88642,201.18642 C639.88642,199.445679 638.491358,197.962963 636.838272,197.962963 L633.058025,197.962963 Z M634.948148,197.518519 C636.990123,197.518519 638.651852,195.864198 638.651852,193.814815 C638.651852,191.777778 636.990123,190.111111 634.948148,190.111111 C632.906173,190.111111 631.244444,191.777778 631.244444,193.814815 C631.244444,195.864198 632.906173,197.518519 634.948148,197.518519 Z" }),
          _react2.default.createElement("path", { d: "M701.058025,197.962963 C699.406173,197.962963 698.009877,199.445679 698.009877,201.18642 L698.009877,209.246914 C698.009877,209.420988 698.075309,209.567901 698.190123,209.691358 L699.244444,210.740741 L699.258156,218.370753 C699.258156,218.717667 699.534699,218.988037 699.87544,218.988037 L706.048279,218.988037 C706.390254,218.988037 706.665563,218.717667 706.665563,218.370753 L706.651852,210.740741 L707.704938,209.691358 C707.820988,209.567901 707.88642,209.420988 707.88642,209.246914 L707.88642,201.18642 C707.88642,199.445679 706.491358,197.962963 704.838272,197.962963 L701.058025,197.962963 Z M702.948148,197.518519 C704.990123,197.518519 706.651852,195.864198 706.651852,193.814815 C706.651852,191.777778 704.990123,190.111111 702.948148,190.111111 C700.906173,190.111111 699.244444,191.777778 699.244444,193.814815 C699.244444,195.864198 700.906173,197.518519 702.948148,197.518519 Z" }),
          _react2.default.createElement("path", { d: "M684.058025,197.962963 C682.406173,197.962963 681.009877,199.445679 681.009877,201.18642 L681.009877,209.246914 C681.009877,209.420988 681.075309,209.567901 681.190123,209.691358 L682.244444,210.740741 L682.258156,218.370753 C682.258156,218.717667 682.534699,218.988037 682.87544,218.988037 L689.048279,218.988037 C689.390254,218.988037 689.665563,218.717667 689.665563,218.370753 L689.651852,210.740741 L690.704938,209.691358 C690.820988,209.567901 690.88642,209.420988 690.88642,209.246914 L690.88642,201.18642 C690.88642,199.445679 689.491358,197.962963 687.838272,197.962963 L684.058025,197.962963 Z M685.948148,197.518519 C687.990123,197.518519 689.651852,195.864198 689.651852,193.814815 C689.651852,191.777778 687.990123,190.111111 685.948148,190.111111 C683.906173,190.111111 682.244444,191.777778 682.244444,193.814815 C682.244444,195.864198 683.906173,197.518519 685.948148,197.518519 Z" })
        ),
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "34",
            fontWeight: "normal",
            fill: "#786A65"
          },
          _react2.default.createElement(
            "tspan",
            { x: "800", y: "509" },
            "2,920"
          )
        ),
        _react2.default.createElement(
          "text",
          {
            fontFamily: "Roboto-Regular, Roboto",
            fontSize: "13",
            fontWeight: "normal",
            letterSpacing: "0",
            fill: "#786A65"
          },
          translations.secretariatStaff.split("\n").map(function (item, i) {
            return _react2.default.createElement(
              "tspan",
              {
                x: "842",
                y: 455 + i * 16,
                key: i,
                className: "caps",
                textAnchor: "middle"
              },
              item
            );
          })
        ),
        _react2.default.createElement("rect", { fill: "#EE3224", x: "828", y: "423", width: "27", height: "4" }),
        _react2.default.createElement(
          "g",
          { fill: "#D6D2D0" },
          _react2.default.createElement("path", { d: "M831.058025,178.962963 C829.406173,178.962963 828.009877,180.445679 828.009877,182.18642 L828.009877,190.246914 C828.009877,190.420988 828.075309,190.567901 828.190123,190.691358 L829.244444,191.740741 L829.258156,199.370753 C829.258156,199.717667 829.534699,199.988037 829.87544,199.988037 L836.048279,199.988037 C836.390254,199.988037 836.665563,199.717667 836.665563,199.370753 L836.651852,191.740741 L837.704938,190.691358 C837.820988,190.567901 837.88642,190.420988 837.88642,190.246914 L837.88642,182.18642 C837.88642,180.445679 836.491358,178.962963 834.838272,178.962963 L831.058025,178.962963 Z M832.948148,178.518519 C834.990123,178.518519 836.651852,176.864198 836.651852,174.814815 C836.651852,172.777778 834.990123,171.111111 832.948148,171.111111 C830.906173,171.111111 829.244444,172.777778 829.244444,174.814815 C829.244444,176.864198 830.906173,178.518519 832.948148,178.518519 Z" }),
          _react2.default.createElement("path", { d: "M848.058025,178.962963 C846.406173,178.962963 845.009877,180.445679 845.009877,182.18642 L845.009877,190.246914 C845.009877,190.420988 845.075309,190.567901 845.190123,190.691358 L846.244444,191.740741 L846.258156,199.370753 C846.258156,199.717667 846.534699,199.988037 846.87544,199.988037 L853.048279,199.988037 C853.390254,199.988037 853.665563,199.717667 853.665563,199.370753 L853.651852,191.740741 L854.704938,190.691358 C854.820988,190.567901 854.88642,190.420988 854.88642,190.246914 L854.88642,182.18642 C854.88642,180.445679 853.491358,178.962963 851.838272,178.962963 L848.058025,178.962963 Z M849.948148,178.518519 C851.990123,178.518519 853.651852,176.864198 853.651852,174.814815 C853.651852,172.777778 851.990123,171.111111 849.948148,171.111111 C847.906173,171.111111 846.244444,172.777778 846.244444,174.814815 C846.244444,176.864198 847.906173,178.518519 849.948148,178.518519 Z" })
        )
      )
    )
  );
};

StaffCompositionChart.propTypes = {
  title: _react2.default.PropTypes.string,
  translations: _react2.default.PropTypes.object,
  volunteers: _react2.default.PropTypes.object
};

StaffCompositionChart.defaultProps = {
  volunteers: {
    verticals: (0, _range2.default)(11),
    humans: (0, _range2.default)(31)
  }
};

exports.default = StaffCompositionChart;

/***/ },

/***/ 1354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StaffGenderDistribution = function StaffGenderDistribution(_ref) {
  var translations = _ref.translations;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "svg",
      { width: "100%", height: "274px", viewBox: "0 0 600 274" },
      _react2.default.createElement(
        "g",
        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", fontFamily: "Roboto-Regular, Roboto" },
        _react2.default.createElement(
          "text",
          { fontSize: "13", fontWeight: "normal", letterSpacing: "1", fill: "#786A65" },
          _react2.default.createElement(
            "tspan",
            { x: "36.7964313", y: "72" },
            translations.male
          )
        ),
        _react2.default.createElement(
          "text",
          { fontSize: "13", fontWeight: "normal", letterSpacing: "1", fill: "#786A65" },
          _react2.default.createElement(
            "tspan",
            { x: "508.509322", y: "72" },
            translations.female
          )
        ),
        _react2.default.createElement("path", { d: "M48.1925926,122.851852 C41.5851852,122.851852 36,128.782716 36,135.745679 L36,167.987654 C36,168.683951 36.2617284,169.271605 36.7209877,169.765432 L40.9382716,173.962963 L40.9931164,204.483012 C40.9931164,205.870666 42.0992892,206.952148 43.4622522,206.952148 L68.1536102,206.952148 C69.5215115,206.952148 70.622746,205.870666 70.622746,204.483012 L70.5679012,173.962963 L74.7802469,169.765432 C75.2444444,169.271605 75.5061728,168.683951 75.5061728,167.987654 L75.5061728,135.745679 C75.5061728,128.782716 69.9259259,122.851852 63.3135802,122.851852 L48.1925926,122.851852 Z M55.7530864,121.074074 C63.9209877,121.074074 70.5679012,114.45679 70.5679012,106.259259 C70.5679012,98.1111111 63.9209877,91.4444444 55.7530864,91.4444444 C47.5851852,91.4444444 40.9382716,98.1111111 40.9382716,106.259259 C40.9382716,114.45679 47.5851852,121.074074 55.7530864,121.074074 Z", fill: "#D6D2D0" }),
        _react2.default.createElement("path", { d: "M560.577577,183.569083 L556.216494,158.2925 L556.216494,136.024917 C556.216494,129.185833 550.355827,123.1875 543.674077,123.1875 L528.619244,123.1875 C522.143994,123.1875 516.88316,128.944917 516.88316,136.024917 L516.88316,158.046667 L511.38141,184.154167 C511.224077,184.891667 511.41091,185.629167 511.877994,186.219167 C512.345077,186.764917 513.04816,187.104167 513.790577,187.104167 L521.799827,187.104167 L521.799827,204.3125 C521.799827,205.694083 522.90116,206.770833 524.25816,206.770833 L548.841494,206.770833 C550.20341,206.770833 551.299827,205.694083 551.299827,204.3125 L551.299827,187.104167 L558.266744,187.104167 L558.320827,187.104167 C559.692577,187.153333 560.82341,186.027417 560.82341,184.645833 C560.82341,184.257417 560.739827,183.908333 560.577577,183.569083 Z M536.141744,121.4175 C544.278827,121.4175 550.891744,114.829167 550.891744,106.6675 C550.891744,98.555 544.278827,91.9175 536.141744,91.9175 C528.009577,91.9175 521.391744,98.555 521.391744,106.6675 C521.391744,114.829167 528.009577,121.4175 536.141744,121.4175 Z", fill: "#D6D2D0" }),
        _react2.default.createElement(
          "g",
          { transform: "translate(143.960494, 90)" },
          _react2.default.createElement(
            "text",
            { x: "150", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
            translations.nationalSocietyStaff
          ),
          _react2.default.createElement("rect", { fill: "#786A65", x: "62", y: "9", width: "80", height: "10" }),
          _react2.default.createElement("rect", { fill: "#EE3224", x: "162", y: "9", width: "119", height: "10" }),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "289", y: "21" },
              "59.7%"
            )
          ),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "0.396484375", y: "21" },
              "40.3%"
            )
          )
        ),
        _react2.default.createElement(
          "g",
          { transform: "translate(120.960494, 140)" },
          _react2.default.createElement(
            "text",
            { x: "170", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
            translations.nationalSocietyVolunteers
          ),
          _react2.default.createElement("rect", { fill: "#786A65", x: "185", y: "9", width: "96", height: "10" }),
          _react2.default.createElement("rect", { fill: "#EE3224", x: "62", y: "9", width: "103", height: "10" }),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "289", y: "21" },
              "48.3%"
            )
          ),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "0.396484375", y: "21" },
              "51.7%"
            )
          )
        ),
        _react2.default.createElement(
          "g",
          { transform: "translate(99.960494, 190)" },
          _react2.default.createElement(
            "text",
            { x: "190", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
            translations.IFRCSecretariatStaff
          ),
          _react2.default.createElement("rect", { fill: "#EE3224", x: "62", y: "9", width: "124", height: "10" }),
          _react2.default.createElement("rect", { fill: "#786A65", x: "206", y: "9", width: "76", height: "10" }),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "290", y: "21" },
              "38.1%"
            )
          ),
          _react2.default.createElement(
            "text",
            { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
            _react2.default.createElement(
              "tspan",
              { x: "0.40625", y: "21" },
              "61.9%"
            )
          )
        )
      )
    )
  );
};

StaffGenderDistribution.propTypes = {
  translations: _react2.default.PropTypes.object
};

exports.default = StaffGenderDistribution;

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _NextChapter = __webpack_require__(1315);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _numberFormatter = __webpack_require__(1326);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

var _HeadlineDivider = __webpack_require__(1314);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _LineChart = __webpack_require__(1319);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _Tabs = __webpack_require__(1332);

var _StaffComposition = __webpack_require__(1353);

var _StaffComposition2 = _interopRequireDefault(_StaffComposition);

var _StaffGenderDistribution = __webpack_require__(1354);

var _StaffGenderDistribution2 = _interopRequireDefault(_StaffGenderDistribution);

var _StackedBarChart = __webpack_require__(1333);

var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SideNavigation from "../../components/Report/SideNavigation"
// import StickySidebar from "../../components/StickySidebar"
// import WorldMap from "../../components/charts/WorldMap"


var Chapter1 = function (_React$Component) {
  _inherits(Chapter1, _React$Component);

  function Chapter1() {
    _classCallCheck(this, Chapter1);

    return _possibleConstructorReturn(this, (Chapter1.__proto__ || Object.getPrototypeOf(Chapter1)).apply(this, arguments));
  }

  _createClass(Chapter1, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var language = nextContext.i18n.language;

      return !!nextContext.i18n.store.data[language]["report-who-we-are"];
    }
  }, {
    key: "bubbleCallback",
    value: function bubbleCallback(response) {
      var officeReference = {
        regionalOffice: { radius: 10, key: "regionalOffice" },
        countryClusterOffice: { radius: 6, key: "countryClusterOffice" },
        countryOffice: { radius: 4, key: "countryOffice" },
        subCountryOffice: { radius: 4, key: "others" },
        liaisonOffice: { radius: 4, key: "others" },
        EbolaTreatmentCentre: { radius: 4, key: "others" },
        globalLogisticsService: { radius: 4, key: "others" }
      };
      return response.map(function (item) {
        return {
          name: (item.type || "") + " " + (item.region || "") + "\n" + (item.city || "") + (item.country ? ", " + item.country : ""),
          latitude: item.latitude,
          longitude: item.longitude,
          radius: officeReference[item.typeKey].radius,
          fillKey: officeReference[item.typeKey].key
        };
      });
    }
  }, {
    key: "bubblePopupTemplate",
    value: function bubblePopupTemplate(geo, data) {
      var sliced = data.name.split("\n");
      return "\n      <div class=\"map-tooltip\">\n        <strong>" + (sliced[0][0].toUpperCase() + sliced[0].slice(1)) + "</strong>\n        <hr />\n        <div class=\"pt1\">\n          <span class=\"text-xs\">" + sliced[1] + "</span>\n        </div>\n      </div>\n    ";
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-who-we-are"];

      var _chapter$sections = _slicedToArray(chapter.sections, 2),
          section0 = _chapter$sections[0],
          section1 = _chapter$sections[1];

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
            _react2.default.createElement(
              "p",
              { className: "text-base m0" },
              "Everyone counts"
            ),
            _react2.default.createElement(
              "h2",
              { className: "text-md sm-text-lg md-text-xl light m0 lh-small" },
              chapter.title
            )
          )
        ),
        _react2.default.createElement(
          "div",
          {
            className: "clearfix bg-dark overflow-hidden",
            style: {
              backgroundImage: "url(/img/chapters/chapter-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed"
            }
          },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6" },
            _react2.default.createElement(
              "p",
              { className: "text-base sm-text-sm md-text-md" },
              chapter.intro
            ),
            _react2.default.createElement("hr", null)
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1 pt2 pb3" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "clearfix" },
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  chapter.title
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  section0.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[0]
                ),
                _react2.default.createElement(
                  "ul",
                  { className: "py05" },
                  section0.blocks[1].map(function (item, i) {
                    return _react2.default.createElement(
                      "li",
                      { key: i, className: "pl1 py05" },
                      item
                    );
                  })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(_LineChart2.default, {
                  title: section0.blocks[2].title,
                  caption: section0.blocks[2].caption,
                  height: 240,
                  padding: {
                    top: 30,
                    bottom: 50,
                    left: 60,
                    right: 60
                  },
                  domain: {
                    x: [new Date(1865, 1, 1), new Date(2020, 1, 1)],
                    y: [0, 200]
                  },
                  axisLabels: {
                    x: section0.blocks[2].axisLabels.x,
                    y: section0.blocks[2].axisLabels.y
                  },
                  labels: section0.blocks[2].labels,
                  dataset: [section0.blocks[2].dataset.map(function (item, i) {
                    return {
                      x: new Date(item.year, 1, 1),
                      y: Number(item.members)
                    };
                  })]
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[3]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[4]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[5]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  chapter.title
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  section1.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[0]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-7 md-offset-2 px1" },
                _react2.default.createElement(_StaffComposition2.default, { title: section1.blocks[1].title, translations: section1.blocks[1].translations })
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                ">",
                _react2.default.createElement("hr", null),
                _react2.default.createElement(_StaffGenderDistribution2.default, { translations: section1.blocks[1].translations })
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[2]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-7 md-offset-3 px1" },
                _react2.default.createElement(
                  "div",
                  { className: "clearfix mxn1" },
                  _react2.default.createElement(
                    "div",
                    { className: "col sm-6 px1" },
                    _react2.default.createElement(
                      "p",
                      null,
                      section1.blocks[3]
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col sm-6 px1" },
                    _react2.default.createElement(
                      "h4",
                      { className: "text-base sm-text-sm m0" },
                      section1.blocks[4].title
                    ),
                    _react2.default.createElement(
                      "svg",
                      { width: "100%", height: "360px", viewBox: "0 0 360 360" },
                      _react2.default.createElement(
                        "g",
                        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        _react2.default.createElement(
                          "g",
                          { fontFamily: "Roboto-Bold, Roboto" },
                          _react2.default.createElement("path", { d: "M224.358336,83.2002487 C223.722933,83.2002487 223.132916,83.2002487 222.516424,83.1624271 L222.516424,79.4218696 C223.136698,79.4218696 223.730497,79.4596913 224.362118,79.4596913 C230.701021,79.4596913 241.42723,78.6654374 245.209391,76.2032504 L245.209391,79.3046226 C245.209391,80.7078045 236.998319,83.2002487 224.358336,83.2002487 Z M197.932376,86.9824099 C185.311304,86.9824099 177.777238,84.4899657 177.130489,83.2418525 L177.130489,81.3507719 C182.338525,82.7501715 189.176672,83.2002487 194.150214,83.2002487 L196.041295,83.2002487 L196.041295,83.2418525 C204.369614,83.2418525 214.12759,82.3719554 218.749391,79.5353345 L218.756955,83.0527444 C218.091295,84.4899657 210.561012,86.9824099 197.932376,86.9824099 Z M211.192633,90.6170669 C210.526973,92.0542882 202.99669,94.5467324 190.368053,94.5467324 C177.746981,94.5467324 170.212916,92.0542882 169.566166,90.806175 L169.566166,87.3265866 C174.80446,89.5542796 184.921741,90.7267496 193.567762,90.7267496 C193.75687,90.7267496 192.259134,90.7267496 192.259134,90.7267496 L192.259134,90.688928 C196.041295,90.7683533 195.82193,90.7683533 196.998182,90.7683533 C200.840858,90.7683533 206.264477,90.4998199 210.719863,89.705566 L211.192633,90.6170669 Z M173.348328,82.1412436 L173.348328,83.2418525 C173.348328,83.8053945 173.533654,84.3386792 173.805969,84.826578 C171.767384,84.3008576 170.311252,83.8053945 169.74771,83.4271784 C170.258302,83.0867839 171.370257,82.5988851 173.348328,82.1412436 Z M165.784005,61.1124271 C170.95422,63.5708319 180.254554,64.3310463 186.551852,64.3310463 C192.886973,64.3310463 202.251604,63.5367925 207.402907,61.0746055 L207.410472,64.0625129 C207.338611,64.1381561 207.270532,64.2516209 207.217581,64.3650858 C206.026201,65.7644854 198.677461,68.0753859 186.585892,68.0753859 C173.96482,68.0753859 166.430755,65.5791595 165.784005,64.3310463 L165.784005,61.1124271 Z M186.551852,52.9845626 C199.176707,52.9845626 206.70699,55.4770069 207.380214,56.6116552 C206.70699,58.014837 199.176707,60.5488851 186.551852,60.5488851 C174.085849,60.5488851 166.612298,58.0866981 165.784005,56.9520497 L165.784005,56.8423671 C166.612298,55.4013636 174.085849,52.9845626 186.551852,52.9845626 Z M224.373465,10 C236.998319,10 244.528602,12.4924443 245.201827,13.6270926 C244.528602,15.0302744 236.998319,17.5643225 224.373465,17.5643225 C211.907461,17.5643225 204.433911,15.1021355 203.605617,13.9674871 L203.605617,13.8578045 C204.433911,12.416801 211.907461,10 224.373465,10 Z M221.434726,75.5981046 C221.415815,73.9717753 220.77663,72.5723756 218.734262,71.4377273 L218.734262,68.0337822 L218.692659,68.0337822 C218.692659,67.9959605 218.67753,67.9581389 218.673748,67.9240995 C220.818233,68.0337822 222.853036,68.1132075 224.365901,68.1132075 C230.701021,68.1132075 241.42723,67.3189537 245.209391,64.8567667 L245.209391,71.5890137 C245.209391,71.6646569 245.19048,71.7062607 245.19048,71.7403002 C244.521038,73.143482 236.994537,75.67753 224.369683,75.67753 C223.738062,75.67753 223.136698,75.6359262 222.516424,75.6359262 L222.516424,75.5981046 L221.434726,75.5981046 Z M209.687333,67.2017067 C210.950575,67.3529931 212.523954,67.5042796 214.241055,67.6177444 C214.589014,67.8446741 214.812161,68.0337822 214.887804,68.0337822 C213.930918,69.4710034 206.457367,71.853765 194.116175,71.853765 C193.068516,71.853765 192.115412,71.7781218 191.135832,71.7403002 C198.106355,71.362084 206.37416,70.117753 209.687333,67.2017067 Z M210.950575,55.6661149 C215.451346,56.4603688 220.477839,56.7667238 224.369683,56.7667238 C230.701021,56.7667238 241.42723,55.97247 245.209391,53.510283 L245.209391,60.2803516 C245.209391,60.3181732 245.19048,60.359777 245.19048,60.3938165 C244.521038,61.7969983 236.994537,64.3310463 224.369683,64.3310463 C221.067856,64.3310463 215.012616,63.949048 211.16994,63.5708319 L211.16994,56.6872985 L211.124554,56.6872985 C211.11699,56.3469039 211.064039,56.0065094 210.950575,55.6661149 Z M224.369683,45.4202401 C230.701021,45.4202401 241.42723,44.6259863 245.209391,42.1637993 L245.209391,48.9338679 C245.209391,48.9716895 245.194262,49.0132933 245.194262,49.0473328 C244.52482,50.4505146 236.994537,52.9845626 224.373465,52.9845626 C211.843165,52.9845626 204.346921,50.484554 203.605617,49.2364408 L203.605617,42.2016209 C208.775832,44.6600257 218.072384,45.4202401 224.369683,45.4202401 Z M245.209391,37.6252058 C245.209391,37.6668096 245.198045,37.6668096 245.198045,37.7008491 C244.528602,39.1040309 236.998319,41.6380789 224.373465,41.6380789 C211.843165,41.6380789 204.346921,39.1380703 203.605617,37.8899571 L203.605617,30.8551372 C208.775832,33.313542 218.076166,34.0737564 224.373465,34.0737564 C230.704803,34.0737564 241.42723,33.2795026 245.209391,30.8173156 L245.209391,37.6252058 Z M245.209391,26.1706604 C245.209391,26.2122642 245.198045,26.2122642 245.198045,26.2463036 C244.528602,27.6494854 236.998319,30.1835334 224.373465,30.1835334 C211.843165,30.1835334 204.346921,27.6835249 203.605617,26.4354117 L203.605617,19.4005918 C208.775832,21.8589966 218.076166,22.619211 224.373465,22.619211 C230.704803,22.619211 241.42723,21.8249571 245.209391,19.3627702 L245.209391,26.1706604 Z M271.464374,44.3636364 C284.089228,44.3636364 291.619511,46.8560806 292.292736,47.990729 C291.619511,49.3939108 284.089228,51.9279588 271.464374,51.9279588 C258.99837,51.9279588 251.52482,49.4657719 250.696527,48.3311235 L250.696527,48.2214408 C251.52482,46.7804374 258.99837,44.3636364 271.464374,44.3636364 Z M271.460592,79.7838765 C277.79193,79.7838765 288.518139,78.9896226 292.3003,76.5274357 L292.3003,83.2975043 C292.3003,83.3353259 292.285172,83.3769297 292.285172,83.4109691 C291.615729,84.8141509 284.085446,87.348199 271.464374,87.348199 C258.934074,87.348199 251.43783,84.8481904 250.696527,83.6000772 L250.696527,76.5652573 C255.866741,79.0236621 265.163293,79.7838765 271.460592,79.7838765 Z M292.3003,71.9888422 C292.3003,72.030446 292.288954,72.030446 292.288954,72.0644854 C291.619511,73.4676672 284.089228,76.0017153 271.464374,76.0017153 C258.934074,76.0017153 251.43783,73.5017067 250.696527,72.2535935 L250.696527,65.2187736 C255.866741,67.6771784 265.167075,68.4373928 271.464374,68.4373928 C277.795712,68.4373928 288.518139,67.6431389 292.3003,65.180952 L292.3003,71.9888422 Z M292.3003,60.5342967 C292.3003,60.5759005 292.288954,60.5759005 292.288954,60.60994 C291.619511,62.0131218 284.089228,64.5471698 271.464374,64.5471698 C258.934074,64.5471698 251.43783,62.0471612 250.696527,60.799048 L250.696527,53.7642281 C255.866741,56.2226329 265.167075,56.9828473 271.464374,56.9828473 C277.795712,56.9828473 288.518139,56.1885935 292.3003,53.7264065 L292.3003,60.5342967 Z M173.348328,73.1056604 C178.518542,75.5981046 187.818877,75.6359262 194.116175,75.6359262 C200.451295,75.6359262 209.815926,74.8832762 214.96723,72.4210892 L214.974794,75.4846398 C214.309134,76.9256432 206.778851,79.4218696 194.150214,79.4218696 C181.529142,79.4218696 173.995077,76.9256432 173.348328,75.67753 L173.348328,73.1056604 Z", fill: "#F1F0EF" }),
                          _react2.default.createElement(
                            "text",
                            { fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                            _react2.default.createElement(
                              "tspan",
                              { x: "10", y: "71.3532504" },
                              section1.blocks[4].translations.nationalSocieties
                            )
                          ),
                          _react2.default.createElement(
                            "g",
                            { transform: "translate(10, 99.353250)" },
                            _react2.default.createElement(
                              "text",
                              { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "223", y: "32" },
                                "30.8Bn"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "0", y: "14" },
                                section1.blocks[4].translations.income
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "188", y: "32" },
                                "CHF"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "213", y: "80" },
                                "30.4Bn"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "0", y: "63" },
                                section1.blocks[4].translations.expenses
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "178", y: "80" },
                                "CHF"
                              )
                            ),
                            _react2.default.createElement("rect", { fill: "#786A65", x: "0", y: "21", width: "180", height: "10" }),
                            _react2.default.createElement("rect", { fill: "#786A65", opacity: "0.6", x: "0", y: "70", width: "170", height: "10" })
                          ),
                          _react2.default.createElement(
                            "text",
                            { fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                            _react2.default.createElement(
                              "tspan",
                              { x: "10", y: "224.35325" },
                              section1.blocks[4].translations.ifrcSecretariat
                            )
                          ),
                          _react2.default.createElement(
                            "g",
                            { transform: "translate(10, 252.353250)" },
                            _react2.default.createElement(
                              "text",
                              { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "183", y: "32" },
                                "345.5M"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "0", y: "14" },
                                section1.blocks[4].translations.income
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "148", y: "32" },
                                "CHF"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "195", y: "80" },
                                "365.3M"
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "0", y: "63" },
                                section1.blocks[4].translations.expenses
                              )
                            ),
                            _react2.default.createElement(
                              "text",
                              { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
                              _react2.default.createElement(
                                "tspan",
                                { x: "160", y: "80" },
                                "CHF"
                              )
                            ),
                            _react2.default.createElement("rect", { fill: "#786A65", x: "0", y: "21", width: "140", height: "10" }),
                            _react2.default.createElement("rect", { fill: "#786A65", opacity: "0.6", x: "0", y: "70", width: "152", height: "10" })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[5]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "h4",
                  { className: "text-base sm-text-sm" },
                  section1.blocks[6].title
                ),
                _react2.default.createElement(
                  _Tabs.Tabs,
                  { active: 0 },
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section1.blocks[6].tabs[0].name },
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement(_StackedBarChart2.default, {
                        caption: section1.blocks[6].tabs[0].caption,
                        height: 360,
                        width: 480,
                        padding: {
                          top: 60,
                          bottom: 30,
                          left: 30,
                          right: 100
                        },
                        labels: section1.blocks[6].tabs[0].dataset.map(function (item, i) {
                          // return `${item.name} — ${numberFormatter.addCommas(item.first + item.second + item.rest)}`
                          var sum = Number(item.first) + Number(item.second) + Number(item.rest);
                          return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(sum)) };
                        }),
                        data: [section1.blocks[6].tabs[0].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.first), name: item.names[0] };
                        }), section1.blocks[6].tabs[0].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.second), name: item.names[1] };
                        }), section1.blocks[6].tabs[0].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.rest) };
                        })]
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section1.blocks[6].tabs[1].name },
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement(_StackedBarChart2.default, {
                        caption: section1.blocks[6].tabs[1].caption,
                        height: 360,
                        width: 480,
                        padding: {
                          top: 60,
                          bottom: 30,
                          left: 30,
                          right: 100
                        },
                        labels: section1.blocks[6].tabs[1].dataset.map(function (item, i) {
                          // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                          var sum = Number(item.first) + Number(item.second) + Number(item.rest);
                          return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(sum)) };
                        }),
                        data: [section1.blocks[6].tabs[1].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.first), name: item.names[0] };
                        }), section1.blocks[6].tabs[1].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.second), name: item.names[1] };
                        }), section1.blocks[6].tabs[1].dataset.map(function (item, i) {
                          return { x: item.index, y: Number(item.rest) };
                        })]
                      })
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section1.blocks[6].tabs[2].name },
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement(_StackedBarChart2.default, {
                        caption: section1.blocks[6].tabs[2].caption,
                        height: 360,
                        width: 480,
                        padding: {
                          top: 60,
                          bottom: 30,
                          left: 30,
                          right: 100
                        },
                        labels: section1.blocks[6].tabs[2].dataset.map(function (item, i) {
                          return {
                            text: item.name,
                            number: _numberFormatter2.default.addCommas(Math.round(Number(item.first) + Number(item.second) + Number(item.rest)))
                          };
                        }),
                        data: [section1.blocks[6].tabs[2].dataset.map(function (item, i) {
                          return {
                            x: item.index,
                            y: Number(item.first), name: item.names[0]
                          };
                        }), section1.blocks[6].tabs[2].dataset.map(function (item, i) {
                          return {
                            x: item.index,
                            y: Number(item.second), name: item.names[1]
                          };
                        }), section1.blocks[6].tabs[2].dataset.map(function (item, i) {
                          return {
                            x: item.index,
                            y: Number(item.rest)
                          };
                        })]
                      })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[7]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[9]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[10]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "h4",
                  { className: "text-base sm-text-sm" },
                  section1.blocks[11].title
                ),
                _react2.default.createElement(
                  _Tabs.Tabs,
                  { active: 0 },
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section1.blocks[11].tabs[0].name },
                    _react2.default.createElement(
                      "table",
                      { className: "base-12" },
                      _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                          "tr",
                          { className: "text-xs bg-dark" },
                          section1.blocks[11].tabs[0].headers.map(function (item, i) {
                            return _react2.default.createElement(
                              "th",
                              { key: i, className: "p05" },
                              item
                            );
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "tbody",
                        null,
                        section1.blocks[11].tabs[0].dataset.map(function (item, i) {
                          return _react2.default.createElement(
                            "tr",
                            { key: i },
                            _react2.default.createElement(
                              "td",
                              { className: "p05 text-center" },
                              item.rank
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05" },
                              item.donor
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05" },
                              item.total
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05 text-center" },
                              item.percent,
                              "%"
                            )
                          );
                        })
                      )
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xs" },
                      section1.blocks[11].tabs[0].caption
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section1.blocks[11].tabs[1].name },
                    _react2.default.createElement(
                      "table",
                      { className: "base-12" },
                      _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                          "tr",
                          { className: "text-xs bg-dark" },
                          section1.blocks[11].tabs[1].headers.map(function (item, i) {
                            return _react2.default.createElement(
                              "th",
                              { key: i, className: "p05" },
                              item
                            );
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "tbody",
                        null,
                        section1.blocks[11].tabs[1].dataset.map(function (item, i) {
                          return _react2.default.createElement(
                            "tr",
                            { key: i },
                            _react2.default.createElement(
                              "td",
                              { className: "p05 text-center" },
                              item.rank
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05" },
                              item.nationalSociety
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05" },
                              item.total
                            ),
                            _react2.default.createElement(
                              "td",
                              { className: "p05 text-center" },
                              item.percent,
                              "%"
                            )
                          );
                        })
                      )
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xs" },
                      section1.blocks[11].tabs[1].caption
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter1;
}(_react2.default.Component);

Chapter1.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-who-we-are"], { wait: true })(Chapter1);

/***/ }

});