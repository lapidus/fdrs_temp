webpackJsonp([4,29],{

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1314:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavigation = function (_React$Component) {
  _inherits(SideNavigation, _React$Component);

  function SideNavigation(props) {
    _classCallCheck(this, SideNavigation);

    var _this = _possibleConstructorReturn(this, (SideNavigation.__proto__ || Object.getPrototypeOf(SideNavigation)).call(this, props));

    _this.state = {
      isSticky: false,
      offset: 100,
      bottomLimit: 100,
      top: 0,
      bottom: 'initial',
      scrollSpyBreakpoints: [],
      scrollSpyCurrent: null
    };

    _this.stick = _this.stick.bind(_this);
    _this.unstick = _this.unstick.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.scrollTo = _this.scrollTo.bind(_this);
    _this.updateScrollSpy = _this.updateScrollSpy.bind(_this);
    return _this;
  }

  _createClass(SideNavigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Timeout is necessary because images change the height of the parent
      // element, resulting in jumping behaviour at the bottom of the page
      setTimeout(function () {
        var elem = _reactDom2.default.findDOMNode(_this2);
        var parent = elem.parentElement;

        var scrollSpyBreakpoints = _this2.props.sectionReferences.map(function (reference, i) {
          var referenceElement = document.getElementById(reference);
          // return referenceElement.offsetParent.offsetTop + referenceElement.offsetTop;
          return window.pageYOffset + referenceElement.getBoundingClientRect().top;
        });

        _this2.setState({
          offset: parent.offsetTop - 100,
          bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
          scrollSpyBreakpoints: scrollSpyBreakpoints
        });

        window.addEventListener('scroll', _this2.stick);
        window.addEventListener('scroll', _this2.updateScrollSpy);
        window.addEventListener('resize', _this2.resize);
      }, 10);
    }
  }, {
    key: 'resize',
    value: function resize() {
      var elem = _reactDom2.default.findDOMNode(this);
      var parent = elem.parentElement;

      var breakpoints = this.props.sectionReferences.map(function (reference, i) {
        var referenceElement = document.getElementById(reference);
        // return reference.offsetParent.offsetTop + reference.offsetTop;
        return window.pageYOffset + referenceElement.getBoundingClientRect().top;
      });

      var currentBreakpoint = this.state.scrollSpyCurrent;

      for (var i = 0; i < breakpoints.length; i++) {
        currentBreakpoint = window.pageYOffset >= breakpoints[i] - 72 ? i : window.pageYOffset < breakpoints[0] - 72 ? null : currentBreakpoint;
      }

      this.setState({
        offset: parent.offsetTop - 100,
        bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
        scrollSpyCurrent: currentBreakpoint,
        scrollSpyBreakpoints: breakpoints
      });
    }
  }, {
    key: 'stick',
    value: function stick() {
      if (window.pageYOffset > this.state.offset && window.pageYOffset < this.state.bottomLimit) {
        this.setState({
          isSticky: true,
          top: 100,
          bottom: 'initial'
        });
        window.removeEventListener('scroll', this.stick);
        window.addEventListener('scroll', this.unstick);
      }
    }
  }, {
    key: 'unstick',
    value: function unstick() {
      if (window.pageYOffset < this.state.offset) {
        this.setState({
          isSticky: false,
          top: 0,
          bottom: 'initial'
        });
        window.removeEventListener('scroll', this.unstick);
        window.addEventListener('scroll', this.stick);
      }
      if (window.pageYOffset > this.state.bottomLimit) {
        this.setState({
          isSticky: false,
          top: 'initial',
          bottom: 0
        });
        window.removeEventListener('scroll', this.unstick);
        window.addEventListener('scroll', this.stick);
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(sectionTarget) {
      var targetSection = document.getElementById('scroll-target-section' + (sectionTarget + 1));
      window.scroll(0, targetSection.offsetParent.offsetTop + targetSection.offsetTop - 71);
    }
  }, {
    key: 'updateScrollSpy',
    value: function updateScrollSpy() {
      var breakpoints = this.state.scrollSpyBreakpoints;
      var currentBreakpoint = this.state.scrollSpyCurrent;

      for (var i = 0; i < breakpoints.length; i++) {
        currentBreakpoint = window.pageYOffset >= breakpoints[i] - 72 ? i : window.pageYOffset < breakpoints[0] - 72 ? null : currentBreakpoint;
      }

      if (currentBreakpoint !== this.state.scrollSpyCurrent) {
        this.setState({ scrollSpyCurrent: currentBreakpoint });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.stick);
      window.removeEventListener('scroll', this.unstick);
      window.removeEventListener('scroll', this.updateScrollSpy);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'side-navigation sm-7 sm-offset-3 md-3 md-offset-0 lg-2 px1 py2 md-visible', ref: 'sticker', style: { position: this.state.isSticky ? 'fixed' : 'absolute', top: this.state.top, bottom: this.state.bottom } },
        _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ),
        _react2.default.createElement(
          'ul',
          { style: { fontSize: '1rem' } },
          this.props.sections.map(function (section, i) {
            return _react2.default.createElement(
              'li',
              { key: i, className: _this3.state.scrollSpyCurrent == i ? 'scroll-spy active' : 'scroll-spy', onClick: function onClick() {
                  _this3.scrollTo(i);
                } },
              section.title.length > 40 ? section.title.slice(0, 40) + '...' : section.title
            );
          })
        )
      );
    }
  }]);

  return SideNavigation;
}(_react2.default.Component);

module.exports = SideNavigation;

/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(306);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LegendItem = function LegendItem(props) {
  return _react2.default.createElement(
    'div',
    { className: 'legend-item ' + (props.className || '') },
    _react2.default.createElement('div', { className: 'legend-item-dot', style: { background: props.color } }),
    _react2.default.createElement(
      'span',
      { className: 'small' },
      props.children
    )
  );
};

var SimpleBarChart = function (_React$Component) {
  _inherits(SimpleBarChart, _React$Component);

  function SimpleBarChart(props) {
    _classCallCheck(this, SimpleBarChart);

    var _this = _possibleConstructorReturn(this, (SimpleBarChart.__proto__ || Object.getPrototypeOf(SimpleBarChart)).call(this, props));

    _this.state = {
      width: _this.props.width
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    _this.renderHorizontalChart = _this.renderHorizontalChart.bind(_this);
    _this.renderVerticalChart = _this.renderVerticalChart.bind(_this);
    _this.renderNoAxisChart = _this.renderNoAxisChart.bind(_this);
    return _this;
  }

  _createClass(SimpleBarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'resizeChart',
    value: function resizeChart() {
      console.log('Resizing line chart');
      this.setState({
        width: this.refs.visualizationWrapper.clientWidth
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'renderNoAxisChart',
    value: function renderNoAxisChart() {
      return _react2.default.createElement(_victory.VictoryBar, {
        domain: this.props.domain,
        padding: this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        },
        width: this.state.width,
        height: this.props.height,
        style: {
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        },
        data: this.props.data,
        labels: this.props.labels
      });
    }
  }, {
    key: 'renderVerticalChart',
    value: function renderVerticalChart() {
      return _react2.default.createElement(
        _victory.VictoryChart,
        {
          width: this.state.width,
          height: this.props.height,
          padding: {
            top: 40,
            bottom: 40,
            left: 40,
            right: 60
          },
          scale: { x: 'time' },
          domainPadding: { x: 100 } },
        _react2.default.createElement(_victory.VictoryAxis, {
          label: this.props.axisLabels.x,
          tickValues: this.props.tickValues,
          tickFormat: this.props.tickFormat,
          orientation: 'bottom',
          style: {
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axis: {
              stroke: '#D1D0CF'
            },
            ticks: {
              stroke: '#D1D0CF'
            }
          } }),
        _react2.default.createElement(_victory.VictoryAxis, {
          dependentAxis: true,
          orientation: 'left',
          label: this.props.axisLabels.y,
          style: {
            grid: {
              stroke: '#E1E0DF',
              strokeWidth: 1
            },
            axis: {
              stroke: 'transparent'
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            ticks: { stroke: 'transparent' }
          } }),
        _react2.default.createElement(_victory.VictoryBar, {
          labels: this.props.labels,
          style: {
            data: {
              width: 15,
              fill: '#EE3224'
            },
            labels: {
              fontFamily: 'inherit',
              fontSize: 13
            }
          },
          data: this.props.data })
      );
    }
  }, {
    key: 'renderHorizontalChart',
    value: function renderHorizontalChart() {
      return _react2.default.createElement(_victory.VictoryBar, {
        horizontal: true,
        domain: this.props.domain,
        padding: this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        },
        width: this.state.width,
        height: this.props.height,
        style: {
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        },
        data: this.props.data,
        labels: this.props.labels
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'simple-bar-chart', ref: 'visualizationWrapper' },
        this.props.title ? _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ) : '',
        this.props.horizontal ? this.renderHorizontalChart() : this.props.noAxisChart ? this.renderNoAxisChart() : this.renderVerticalChart(),
        this.props.legend ? _react2.default.createElement(
          'div',
          { className: 'clearfix pt1' },
          this.props.legend.map(function (item, i) {
            return _react2.default.createElement(
              LegendItem,
              { key: i, color: item.color, className: 'px1' },
              item.name
            );
          })
        ) : '',
        this.props.caption ? _react2.default.createElement(
          'p',
          { className: 'small mt0' },
          this.props.caption
        ) : ''
      );
    }
  }]);

  return SimpleBarChart;
}(_react2.default.Component);

module.exports = SimpleBarChart;

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _numberFormatter = __webpack_require__(1326);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

var _HeadlineDivider = __webpack_require__(1314);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _NextChapter = __webpack_require__(1315);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _SideNavigation = __webpack_require__(1318);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

var _SimpleBarChart = __webpack_require__(1329);

var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

var _StackedBarChart = __webpack_require__(1333);

var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

var _LineChart = __webpack_require__(1319);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _Tabs = __webpack_require__(1332);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter5 = function (_React$Component) {
  _inherits(Chapter5, _React$Component);

  function Chapter5() {
    _classCallCheck(this, Chapter5);

    return _possibleConstructorReturn(this, (Chapter5.__proto__ || Object.getPrototypeOf(Chapter5)).apply(this, arguments));
  }

  _createClass(Chapter5, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var language = nextContext.i18n.language;

      return !!nextContext.i18n.store.data[language]["report-strategic-aim-2"];
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-strategic-aim-2"];

      var _chapter$sections = _slicedToArray(chapter.sections, 6),
          section0 = _chapter$sections[0],
          section1 = _chapter$sections[1],
          section2 = _chapter$sections[2],
          section3 = _chapter$sections[3],
          section4 = _chapter$sections[4],
          section5 = _chapter$sections[5];

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
              chapter.title
            ),
            _react2.default.createElement(
              "h2",
              { className: "text-md sm-text-lg md-text-xl light m0 lh-small" },
              chapter.subtitle
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-dark overflow-hidden", style: {
              backgroundImage: "url(/img/chapters/chapter-5.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed"
            } },
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
                _react2.default.createElement(_SimpleBarChart2.default, {
                  title: section0.blocks[1].title,
                  caption: section0.blocks[1].caption,
                  horizontal: false,
                  height: 300,
                  data: [{ y: 160.7, x: new Date(2012, 1, 1) }, { y: 103.4, x: new Date(2013, 1, 1) }],
                  labels: ["160.7M", "103.4M"],
                  tickValues: [new Date(2012, 1, 1), new Date(2013, 1, 1)],
                  tickFormat: function tickFormat(x) {
                    return x.getFullYear();
                  },
                  axisLabels: section0.blocks[1].axisLabels
                }),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[2]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[3]
                ),
                _react2.default.createElement(_StackedBarChart2.default, {
                  title: section0.blocks[4].title,
                  caption: section0.blocks[4].caption,
                  height: 360,
                  padding: {
                    top: 60,
                    bottom: 30,
                    left: 30,
                    right: 100
                  },
                  labels: section0.blocks[4].dataset.map(function (item, i) {
                    // return `${item.name} (${item.first + item.second + item.rest})`
                    return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(Number(item.first) + Number(item.second) + Number(item.rest))) };
                  }),
                  data: [section0.blocks[4].dataset.map(function (item, i) {
                    return { x: item.index, y: Number(item.first), name: item.names[0] };
                  }), section0.blocks[4].dataset.map(function (item, i) {
                    return { x: item.index, y: Number(item.second), name: item.names[1] };
                  }), section0.blocks[4].dataset.map(function (item, i) {
                    return { x: item.index, y: Number(item.rest) };
                  })]
                }),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[5]
                ),
                _react2.default.createElement(_LineChart2.default, {
                  title: section0.blocks[6].title,
                  caption: section0.blocks[6].caption,
                  height: 300,
                  padding: {
                    top: 30,
                    bottom: 50,
                    left: 60,
                    right: 60
                  },
                  domain: {
                    x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
                    y: [0, 150]
                  },
                  axisLabels: section0.blocks[6].axisLabels,
                  labels: section0.blocks[6].lineLabels,
                  dataset: [section0.blocks[6].dataset[0].map(function (item, i) {
                    return { x: new Date(item.year, 1, 1), y: Number(item.value) };
                  }), section0.blocks[6].dataset[1].map(function (item, i) {
                    return { x: new Date(item.year, 1, 1), y: Number(item.value) };
                  })]
                })
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
              _react2.default.createElement("div", { className: "clearfix", style: {
                  width: "100%",
                  height: "0px",
                  paddingBottom: "50%",
                  overflow: "hidden",
                  backgroundImage: "url(/img/chapters/5/climate-change.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat"
                } }),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-xs" },
                  section1.blocks[1].caption
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section1.blocks[2]
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
                  section2.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section2.blocks[0]
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "text-base sm-text-sm m0" },
                  section2.blocks[1].title
                ),
                _react2.default.createElement(
                  _Tabs.Tabs,
                  { active: 0 },
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section2.blocks[1].tabs[0].name },
                    _react2.default.createElement(
                      "table",
                      null,
                      _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                          "tr",
                          { className: "text-xs" },
                          section2.blocks[1].tabs[0].headers.map(function (item, i) {
                            return _react2.default.createElement(
                              "th",
                              { key: i },
                              item
                            );
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "tbody",
                        null,
                        section2.blocks[1].tabs[0].dataset.map(function (item, i) {
                          return _react2.default.createElement(
                            "tr",
                            { key: i, className: item.region === "Global" ? "strong" : "" },
                            _react2.default.createElement(
                              "td",
                              null,
                              item.region
                            ),
                            _react2.default.createElement(
                              "td",
                              null,
                              item.percentage1,
                              "%"
                            ),
                            _react2.default.createElement(
                              "td",
                              null,
                              item.percentage2,
                              "%"
                            )
                          );
                        })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: section2.blocks[1].tabs[1].name },
                    _react2.default.createElement(
                      "table",
                      null,
                      _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                          "tr",
                          { className: "text-xs" },
                          section2.blocks[1].tabs[1].headers.map(function (item, i) {
                            return _react2.default.createElement(
                              "th",
                              { key: i },
                              item
                            );
                          })
                        )
                      ),
                      _react2.default.createElement(
                        "tbody",
                        null,
                        section2.blocks[1].tabs[1].dataset.map(function (item, i) {
                          return _react2.default.createElement(
                            "tr",
                            { key: i },
                            _react2.default.createElement(
                              "td",
                              null,
                              item.activity
                            ),
                            _react2.default.createElement(
                              "td",
                              null,
                              item.amount
                            )
                          );
                        })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "p",
                  { className: "text-xs" },
                  section2.blocks[1].caption
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
                  section3.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section3.blocks[0]
                ),
                _react2.default.createElement(
                  "ul",
                  null,
                  section3.blocks[1].map(function (item, i) {
                    return _react2.default.createElement(
                      "li",
                      { key: i },
                      item
                    );
                  })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section3.blocks[2]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section3.blocks[3]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section3.blocks[4]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section3.blocks[6]
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
                  section4.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section4.blocks[0]
                ),
                _react2.default.createElement(_StackedBarChart2.default, {
                  title: section4.blocks[1].title,
                  caption: section4.blocks[1].caption,
                  height: 360,
                  padding: {
                    top: 60,
                    bottom: 30,
                    left: 30,
                    right: 100
                  },
                  labels: section4.blocks[1].dataset.map(function (item, i) {
                    // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                    return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
                  }),
                  data: [section4.blocks[1].dataset.map(function (item, i) {
                    return { x: item.index, y: item.first, name: item.names[0] };
                  }), section4.blocks[1].dataset.map(function (item, i) {
                    return { x: item.index, y: item.second, name: item.names[1] };
                  }), section4.blocks[1].dataset.map(function (item, i) {
                    return { x: item.index, y: item.rest };
                  })]
                }),
                _react2.default.createElement(
                  "p",
                  null,
                  section4.blocks[2]
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
                  section5.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  section5.blocks[0]
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-7 px1" },
                _react2.default.createElement(
                  "svg",
                  { width: "100%", height: "540px", viewBox: "0 0 840 540" },
                  _react2.default.createElement(
                    "g",
                    { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "45", fontWeight: "bold", fill: "#0F9EE2" },
                      _react2.default.createElement(
                        "tspan",
                        { x: "600", y: "142" },
                        ">9M"
                      )
                    ),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
                      section5.blocks[1].translations[0].split("\n").map(function (item, i) {
                        return _react2.default.createElement(
                          "tspan",
                          { key: i, x: "600", y: 188 + i * 24 },
                          item
                        );
                      })
                    ),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "24", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
                      _react2.default.createElement(
                        "tspan",
                        { x: "122.460", y: "291" },
                        "2015"
                      )
                    ),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "24", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
                      section5.blocks[1].translations[1].split("\n").map(function (item, i) {
                        return _react2.default.createElement(
                          "tspan",
                          { key: i, x: "155", y: 420 + i * 30, textAnchor: "middle" },
                          item
                        );
                      })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(234, 7)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M24.464,63.703 C11.249,63.703 0.079,75.565 0.079,89.491 L0.079,153.975 C0.079,155.367 0.602,156.543 1.520,157.530 L9.955,165.925 L10.065,226.966 C10.065,229.741 12.277,231.904 15.003,231.904 L64.386,231.904 C67.122,231.904 69.324,229.741 69.324,226.966 L69.214,165.925 L77.639,157.530 C78.567,156.543 79.091,155.367 79.091,153.975 L79.091,89.491 C79.091,75.565 67.930,63.703 54.706,63.703 L24.464,63.703 Z" }),
                      _react2.default.createElement("path", { d: "M39.585,60.148 C55.920,60.148 69.214,46.913 69.214,30.518 C69.214,14.222 55.920,0.888 39.585,0.888 C23.249,0.888 9.955,14.222 9.955,30.518 C9.955,46.913 23.249,60.148 39.585,60.148" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(114, 97)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M12.232,31.851 C5.624,31.851 0.039,37.782 0.039,44.745 L0.039,76.987 C0.039,77.683 0.301,78.271 0.760,78.765 L4.977,82.962 L5.032,113.483 C5.032,114.870 6.138,115.952 7.501,115.952 L32.193,115.952 C33.561,115.952 34.662,114.870 34.662,113.483 L34.607,82.962 L38.819,78.765 C39.283,78.271 39.545,77.683 39.545,76.987 L39.545,44.745 C39.545,37.782 33.965,31.851 27.353,31.851 L12.232,31.851 Z" }),
                      _react2.default.createElement("path", { d: "M19.792,30.074 C27.960,30.074 34.607,23.456 34.607,15.259 C34.607,7.111 27.960,0.444 19.792,0.444 C11.624,0.444 4.977,7.111 4.977,15.259 C4.977,23.456 11.624,30.074 19.792,30.074" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(67, 97)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z" }),
                      _react2.default.createElement("path", { d: "M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(101, 114)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
                      _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(55, 95)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
                      _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(440, 95)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
                      _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(2, 109)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M6.116,15.925 C2.812,15.925 0.019,18.891 0.019,22.372 L0.019,38.493 C0.019,38.841 0.150,39.135 0.380,39.382 L2.488,41.481 L2.516,56.741 C2.516,57.435 3.069,57.976 3.750,57.976 L16.096,57.976 C16.780,57.976 17.331,57.435 17.331,56.741 L17.303,41.481 L19.409,39.382 C19.641,39.135 19.772,38.841 19.772,38.493 L19.772,22.372 C19.772,18.891 16.982,15.925 13.676,15.925 L6.116,15.925 Z" }),
                      _react2.default.createElement("path", { d: "M9.896,15.037 C13.980,15.037 17.303,11.728 17.303,7.629 C17.303,3.555 13.980,0.222 9.896,0.222 C5.812,0.222 2.488,3.555 2.488,7.629 C2.488,11.728 5.812,15.037 9.896,15.037" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(410, 106)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z" }),
                      _react2.default.createElement("path", { d: "M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(315, 19)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M89.310,166.624 L81.460,121.126 L81.460,81.044 C81.460,68.734 70.911,57.937 58.884,57.937 L31.785,57.937 C20.130,57.937 10.660,68.300 10.660,81.044 L10.660,120.684 L0.757,167.677 C0.474,169.005 0.810,170.332 1.651,171.394 C2.492,172.376 3.757,172.987 5.094,172.987 L19.510,172.987 L19.510,203.962 C19.510,206.449 21.493,208.387 23.935,208.387 L68.185,208.387 C70.637,208.387 72.610,206.449 72.610,203.962 L72.610,172.987 L85.151,172.987 L85.248,172.987 C87.717,173.076 89.753,171.049 89.753,168.562 C89.753,167.863 89.602,167.235 89.310,166.624" }),
                      _react2.default.createElement("path", { d: "M45.326,54.751 C59.973,54.751 71.876,42.892 71.876,28.201 C71.876,13.599 59.973,1.651 45.326,1.651 C30.688,1.651 18.776,13.599 18.776,28.201 C18.776,42.892 30.688,54.751 45.326,54.751" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(160, 46)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M69.463,129.596 L63.358,94.209 L63.358,63.034 C63.358,53.460 55.153,45.062 45.799,45.062 L24.722,45.062 C15.656,45.062 8.291,53.122 8.291,63.034 L8.291,93.865 L0.589,130.415 C0.369,131.448 0.630,132.480 1.284,133.306 C1.938,134.070 2.922,134.545 3.962,134.545 L15.175,134.545 L15.175,158.637 C15.175,160.571 16.716,162.079 18.616,162.079 L53.033,162.079 C54.940,162.079 56.475,160.571 56.475,158.637 L56.475,134.545 L66.228,134.545 L66.304,134.545 C68.224,134.614 69.808,133.038 69.808,131.104 C69.808,130.560 69.691,130.071 69.463,129.596" }),
                      _react2.default.createElement("path", { d: "M35.253,42.584 C46.645,42.584 55.903,33.360 55.903,21.934 C55.903,10.577 46.645,1.284 35.253,1.284 C23.868,1.284 14.603,10.577 14.603,21.934 C14.603,33.360 23.868,42.584 35.253,42.584" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(450, 104)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541" }),
                      _react2.default.createElement("path", { d: "M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250" })
                    ),
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(27, 104)", fill: "#D6D2D0" },
                      _react2.default.createElement("path", { d: "M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541" }),
                      _react2.default.createElement("path", { d: "M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250" })
                    ),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "72", fontWeight: "bold", fill: "#0F9EE2" },
                      _react2.default.createElement(
                        "tspan",
                        { x: "77", y: "372" },
                        "15M"
                      )
                    ),
                    _react2.default.createElement("path", { d: "M659.062,32.878 C661.687,37.097 663,41.679 663,46.625 C663,50.140 662.314,53.492 660.943,56.679 C659.572,59.867 657.732,62.615 655.423,64.923 C653.115,67.232 650.367,69.072 647.179,70.443 C643.992,71.814 640.640,72.5 637.125,72.5 C633.609,72.5 630.257,71.814 627.070,70.443 C623.882,69.072 621.134,67.232 618.826,64.923 C616.517,62.615 614.677,59.867 613.306,56.679 C611.935,53.492 611.25,50.140 611.25,46.625 C611.25,41.679 612.562,37.097 615.187,32.878 C616.429,30.886 618.790,27.945 622.271,24.054 C625.751,20.164 628.470,17.205 630.427,15.177 C632.384,13.150 633.949,11.550 635.121,10.378 L637.125,8.375 L639.128,10.378 C640.300,11.550 641.865,13.150 643.822,15.177 C645.779,17.205 648.498,20.164 651.978,24.054 C655.459,27.945 657.820,30.886 659.062,32.878 L659.062,32.878 Z M637.125,66.875 C639.867,66.875 642.486,66.341 644.982,65.275 C647.478,64.208 649.634,62.767 651.451,60.951 C653.267,59.134 654.708,56.978 655.775,54.482 C656.841,51.986 657.375,49.367 657.375,46.625 C657.375,42.734 656.343,39.148 654.281,35.867 C652.148,32.468 646.429,25.964 637.125,16.355 C627.820,25.964 622.101,32.468 619.968,35.867 C617.906,39.148 616.875,42.734 616.875,46.625 C616.875,49.367 617.408,51.986 618.474,54.482 C619.541,56.978 620.982,59.134 622.798,60.951 C624.615,62.767 626.771,64.208 629.267,65.275 C631.763,66.341 634.382,66.875 637.125,66.875 L637.125,66.875 Z M623.765,38.222 C625.195,35.949 628.968,31.531 635.085,24.968 L639.164,28.835 C633.421,34.953 629.882,39.078 628.546,41.210 C627.515,42.851 627,44.656 627,46.625 C627,49.484 628.031,51.910 630.093,53.902 L626.156,57.910 C622.968,54.839 621.375,51.078 621.375,46.625 C621.375,43.601 622.171,40.800 623.765,38.222 L623.765,38.222 Z", fill: "#0F9EE2" }),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "45", fontWeight: "bold", fill: "#0F9EE2" },
                      _react2.default.createElement(
                        "tspan",
                        { x: "600", y: "383" },
                        ">5M"
                      )
                    ),
                    _react2.default.createElement(
                      "text",
                      { fontFamily: "Roboto-Bold, Roboto", fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
                      section5.blocks[1].translations[2].split("\n").map(function (item, i) {
                        return _react2.default.createElement(
                          "tspan",
                          { key: i, x: "600", y: 429 + i * 24 },
                          item
                        );
                      })
                    ),
                    _react2.default.createElement("path", { d: "M659.062,273.878 C661.687,278.097 663,282.679 663,287.625 C663,291.140 662.314,294.492 660.943,297.679 C659.572,300.867 657.732,303.615 655.423,305.923 C653.115,308.232 650.367,310.072 647.179,311.443 C643.992,312.814 640.640,313.5 637.125,313.5 C633.609,313.5 630.257,312.814 627.070,311.443 C623.882,310.072 621.134,308.232 618.826,305.923 C616.517,303.615 614.677,300.867 613.306,297.679 C611.935,294.492 611.25,291.140 611.25,287.625 C611.25,282.679 612.562,278.097 615.187,273.878 C616.429,271.886 618.790,268.945 622.271,265.054 C625.751,261.164 628.470,258.205 630.427,256.177 C632.384,254.150 633.949,252.550 635.121,251.378 L637.125,249.375 L639.128,251.378 C640.300,252.550 641.865,254.150 643.822,256.177 C645.779,258.205 648.498,261.164 651.978,265.054 C655.459,268.945 657.820,271.886 659.062,273.878 L659.062,273.878 Z M637.125,307.875 C639.867,307.875 642.486,307.341 644.982,306.275 C647.478,305.208 649.634,303.767 651.451,301.951 C653.267,300.134 654.708,297.978 655.775,295.482 C656.841,292.986 657.375,290.367 657.375,287.625 C657.375,283.734 656.343,280.148 654.281,276.867 C652.148,273.468 646.429,266.964 637.125,257.355 C627.820,266.964 622.101,273.468 619.968,276.867 C617.906,280.148 616.875,283.734 616.875,287.625 C616.875,290.367 617.408,292.986 618.474,295.482 C619.541,297.978 620.982,300.134 622.798,301.951 C624.615,303.767 626.771,305.208 629.267,306.275 C631.763,307.341 634.382,307.875 637.125,307.875 L637.125,307.875 Z M623.765,279.222 C625.195,276.949 628.968,272.531 635.085,265.968 L639.164,269.835 C633.421,275.953 629.882,280.078 628.546,282.210 C627.515,283.851 627,285.656 627,287.625 C627,290.484 628.031,292.910 630.093,294.902 L626.156,298.910 C622.968,295.839 621.375,292.078 621.375,287.625 C621.375,284.601 622.171,281.800 623.765,279.222 L623.765,279.222 Z", fill: "#0F9EE2" })
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  section5.blocks[2]
                )
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter5;
}(_react2.default.Component);

Chapter5.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-strategic-aim-2"], { wait: true })(Chapter5);

/***/ })

});