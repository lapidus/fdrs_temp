webpackJsonp([2,29],{

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

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(306);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonutChart = function (_React$Component) {
  _inherits(DonutChart, _React$Component);

  function DonutChart(props) {
    _classCallCheck(this, DonutChart);

    var _this = _possibleConstructorReturn(this, (DonutChart.__proto__ || Object.getPrototypeOf(DonutChart)).call(this, props));

    _this.state = {
      size: _this.props.maxSize
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    _this.getWrapperRef = _this.getWrapperRef.bind(_this);
    return _this;
  }

  _createClass(DonutChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener("resize", this.resizeChart);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeChart);
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      var wrapper = this.wrapper;
      var maxSize = this.props.maxSize;

      this.setState({
        size: wrapper.clientWidth > maxSize ? maxSize : wrapper.clientWidth
      });
    }
  }, {
    key: "getWrapperRef",
    value: function getWrapperRef(wrapper) {
      this.wrapper = wrapper;
    }
  }, {
    key: "render",
    value: function render() {
      var dataset = this.props.dataset.map(function (d) {
        return { x: d.x, y: +d.y, fill: d.fill };
      });

      var _props = this.props,
          title = _props.title,
          maxSize = _props.maxSize,
          caption = _props.caption;
      var size = this.state.size;


      return _react2.default.createElement(
        "div",
        null,
        title && _react2.default.createElement(
          "h4",
          { className: "title strong" },
          title
        ),
        _react2.default.createElement(
          "div",
          {
            ref: this.getWrapperRef,
            style: {
              margin: "0 auto",
              maxWidth: maxSize
            }
          },
          _react2.default.createElement(_victory.VictoryPie, {
            width: size,
            height: size,
            padding: size / 100 * 17.5,
            innerRadius: size / 100 * 20,
            data: dataset,
            style: {
              data: {
                strokeWidth: 1.5,
                fill: function fill(d) {
                  return d.fill;
                }
              },
              labels: {
                fontFamily: "inherit",
                fontSize: "13px"
              }
            }
          })
        ),
        caption && _react2.default.createElement(
          "p",
          { className: "small" },
          caption
        )
      );
    }
  }]);

  return DonutChart;
}(_react2.default.Component);

DonutChart.propTypes = {
  dataset: _react2.default.PropTypes.array.isRequired,
  maxSize: _react2.default.PropTypes.number,
  title: _react2.default.PropTypes.string,
  caption: _react2.default.PropTypes.string
};

exports.default = DonutChart;

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

/***/ 1344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _datamaps = __webpack_require__(317);

var _datamaps2 = _interopRequireDefault(_datamaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React from "react"
// import { connect } from "react-redux"
// import groupBy from "lodash/groupBy"
// import minBy from "lodash/minBy"
// import maxBy from "lodash/maxBy"
// import { Origin } from "redux-tooltip"
//
// import Countries from "./Countries"
// import niceNum from "../../utils/niceNum"
//
// import {
//   json,
//   scaleLinear,
//   scalePow,
//   scaleLog,
// } from "d3"
// import {
//   geoPath,
//   geoOrthographic,
//   geoMercator
// } from "d3-geo";
// import {
//   geoWinkel3,
//   geoNaturalEarth,
//   geoRobinson,
//   geoTimes,
//   geoWagner6
// } from "d3-geo-projection"
// import topojson from "topojson-client"
//
// import {
//   makeGetIndicatorData,
// } from "../../selectors"
//
// import {
//   fetchCountries,
// } from "../../actions/appActions"
//
// const SVGOrigin = Origin.wrapBy("g")
//
// class WorldMap extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       countries: this.props.countryPaths ? topojson.feature(props.countryPaths, props.countryPaths.objects.countries).features : null,
//       loading: !this.props.countryPaths ? true : false,
//       currentYearData: currentYearData,
//       minData: min,
//       maxData: max,
//       scale: scaleLinear().domain([min, max]).range([4,40])
//     }
//   }
//   projection() {
//     return geoNaturalEarth()
//             .scale(160)
//             .translate([800 / 2, 480 / 2])
//             // .rotate([this.props.center ? -this.props.center[1] : 0, this.props.center ? -this.props.center[0] : 0,0])
//             .rotate([-10,0,0])
//             .precision(.1)
//   }
//   componentDidMount() {
//     if(!this.props.countryPaths) {
//       this.props.fetchCountries()
//     }
//   }
//   render() {
//     const { data, indicator, nationalSocieties } = this.props
//
//     const tooltipContent = (name, value) => (
//       <div className="text-center p1" style={{maxWidth:240}}>
//         <div>{ name }</div>
//         <div className="title my1"><strong>{ niceNum(value, null, null, true) }</strong></div>
//       </div>
//     )
//
//     return (
//       <div className="" style={{ clear: "left", minHeight: '10rem' }}>
//         {
//           this.state.loading ? (
//             <div>
//               <p className="text-center">{ "Loading map..." }</p>
//             </div>
//           ) : (
//             null
//           )
//         }
//         <div style={{opacity: this.state.loading ? 0 : 1, transform: `translateY(${this.state.loading ? '30px' : '0'})`, transition: "all 0.75s"}}>
//           {
//             <svg width={800} height={480} viewBox="0 0 800 480">
//               {
//                 !this.state.loading ? (
//                   <Countries countries={this.state.countries} projection={this.projection} />
//                 ) : (null)
//               }
//               { !this.state.loading ?
//                 nationalSocieties.map((bubble, i) => {
//
//                   const lat  = Number(bubble.lat)
//                   const long = Number(bubble.long)
//                   const coords = long && lat ? [long, lat] : undefined
//                   const bubbleData = this.state.currentYearData.find((d) => d.KPI_DON_Code == bubble.KPI_DON_Code)
//
//                   if(bubbleData && coords) {
//                     return (
//                       <SVGOrigin
//                         content={tooltipContent(this.props.nationalSocietyNames[bubble.KPI_DON_Code], bubbleData[this.props.indicator.id])}
//                         key={bubble.KPI_DON_Code}>
//                         <circle
//                           cx={this.projection()(coords)[0]}
//                           cy={this.projection()(coords)[1]}
//                           r={bubbleData[this.props.indicator.id] ? this.state.scale(Number(bubbleData[this.props.indicator.id])) : 0}
//                           style={{
//                             fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.1)",
//                             stroke: "#fff",
//                             strokeWidth: "1.5px",
//                             cursor: "pointer"
//                           }}
//                           onClick={ (e) => this.props.bubbleClick(e, bubble, bubbleData[this.props.indicator.id]) }
//                         />
//                       </SVGOrigin>
//                     )
//                   }
//
//                 }) : (null)
//               }
//             </svg>
//           }
//         </div>
//       </div>
//     )
//   }
// }
//
// WorldMap.defaultProps = {
//   bubbleMouseEnter: null,
//   bubbleMouseLeave: null,
//   bubbleClick: null,
// }
//
// WorldMap.propTypes = {
//   indicator: React.PropTypes.object.isRequired,
//   data: React.PropTypes.array,
//   nationalSocieties: React.PropTypes.array,
//   countryPaths: React.PropTypes.object,
// }
//
// WorldMap.contextTypes = {
//   i18n: React.PropTypes.object.isRequired,
// }
//
// const makeMapStateToProps = () => {
//   const getIndicatorData = makeGetIndicatorData()
//   return (state, props) => ({
//     data: getIndicatorData(state, props),
//     countryPaths: state.appReducer.countryPaths,
//     fetchingCountries: state.appReducer.fetchingCountries,
//   })
// }
//
// const mapDispatchToProps = dispatch => ({
//   fetchCountries: () => dispatch(fetchCountries()),
// })
//
// export default connect(makeMapStateToProps, mapDispatchToProps)(WorldMap)

var WorldMap = function (_React$Component) {
  _inherits(WorldMap, _React$Component);

  function WorldMap(props) {
    _classCallCheck(this, WorldMap);

    var _this = _possibleConstructorReturn(this, (WorldMap.__proto__ || Object.getPrototypeOf(WorldMap)).call(this, props));

    _this.renderMap = _this.renderMap.bind(_this);
    _this.resizeWorldMap = _this.resizeWorldMap.bind(_this);
    return _this;
  }

  _createClass(WorldMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderMap();
    }
  }, {
    key: 'renderMap',
    value: function renderMap() {
      var _this2 = this;

      var mapContainer = this.refs.mapContainer;

      var width = mapContainer.offsetWidth;
      var height = 600;

      var mapOptions = {
        element: mapContainer,
        responsive: true,
        height: height,
        // projection: 'times',
        setProjection: function setProjection(element) {
          var projection = d3.geo.times().center([15, -2]).scale(element.offsetWidth / 5)
          // .rotate([0,0,0])
          .translate([element.offsetWidth / 2, element.offsetHeight / 1.75]);
          var path = d3.geo.path().projection(projection);
          return { path: path, projection: projection };
        },
        fills: {
          defaultFill: '#ddd',
          darkerFill: '#ccc',
          darkestFill: '#bbb',
          bubbleFill: '#EE3224',
          bubbleFillEmpty: '#EE3224',

          regionalOffice: '#0F9EE3',
          countryClusterOffice: '#82BC01',
          countryOffice: '#EE3224',
          others: '#918784'
        },
        geographyConfig: {
          // popupOnHover: false,
          popupOnHover: this.props.choroplethDataset ? true : false,
          popupTemplate: this.props.choroplethDataset ? function (geo, data) {
            return !data.popupContent ? '' : '\n            <div class=\'map-tooltip\'>\n              <strong>' + data.name + '</strong>\n              <hr />\n              <div class=\'pt1\'>\n                ' + data.popupContent + '\n              </div>\n            </div>\n          ';
          } : false,
          highlightOnHover: false,
          borderWidth: 1,
          borderColor: '#fff'
        },
        data: this.props.choroplethDataset || {},
        done: function done(datamap) {
          console.log('Rendered map');
        }
      };

      this.worldMap = new _datamaps2.default(mapOptions);

      if (this.props.bubbleSource) {
        d3.json(this.props.bubbleSource, function (response) {
          _this2.worldMap.bubbles(_this2.props.bubbleCallback(response), {
            popupTemplate: _this2.props.bubblePopupTemplate
          });
        });
      } else if (this.props.bubbleCallback) {
        this.worldMap.bubbles(this.props.bubbleCallback(), {
          popupTemplate: this.props.bubblePopupTemplate
        });
      }

      window.addEventListener('resize', this.resizeWorldMap);
    }
  }, {
    key: 'resizeWorldMap',
    value: function resizeWorldMap() {
      this.worldMap.resize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeWorldMap);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ),
        _react2.default.createElement('div', { ref: 'mapContainer' }),
        _react2.default.createElement(
          'p',
          { className: 'small mt0' },
          this.props.caption
        )
      );
    }
  }]);

  return WorldMap;
}(_react2.default.Component);

module.exports = WorldMap;

/***/ }),

/***/ 545:
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

var _NextChapter = __webpack_require__(1315);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _numberFormatter = __webpack_require__(1326);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

var _HeadlineDivider = __webpack_require__(1314);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _LineChart = __webpack_require__(1319);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _Tabs = __webpack_require__(1332);

var _SideNavigation = __webpack_require__(1318);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

var _SimpleBarChart = __webpack_require__(1329);

var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

var _DonutChart = __webpack_require__(1328);

var _DonutChart2 = _interopRequireDefault(_DonutChart);

var _WorldMap = __webpack_require__(1344);

var _WorldMap2 = _interopRequireDefault(_WorldMap);

var _StackedBarChart = __webpack_require__(1333);

var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter4 = function (_React$Component) {
  _inherits(Chapter4, _React$Component);

  function Chapter4() {
    _classCallCheck(this, Chapter4);

    return _possibleConstructorReturn(this, (Chapter4.__proto__ || Object.getPrototypeOf(Chapter4)).apply(this, arguments));
  }

  _createClass(Chapter4, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var language = nextContext.i18n.language;

      return !!nextContext.i18n.store.data[language]["report-strategic-aim-1"];
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-strategic-aim-1"];

      var _chapter$sections = _slicedToArray(chapter.sections, 7),
          section0 = _chapter$sections[0],
          section1 = _chapter$sections[1],
          section2 = _chapter$sections[2],
          section3 = _chapter$sections[3],
          section4 = _chapter$sections[4],
          section5 = _chapter$sections[5],
          section6 = _chapter$sections[6];

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
              backgroundImage: "url(/img/chapters/chapter-4.jpg)",
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
              t("report-strategic-aim-1:intro")
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
                  null,
                  t("report-strategic-aim-1:general.0")
                ),
                _react2.default.createElement(_LineChart2.default, {
                  title: t("report-strategic-aim-1:general.1.title"),
                  caption: t("report-strategic-aim-1:general.1.caption"),
                  height: 300,
                  padding: {
                    top: 30,
                    bottom: 50,
                    left: 60,
                    right: 60
                  },
                  domain: {
                    x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
                    y: [200, 410]
                  },
                  axisLabels: t("report-strategic-aim-1:general.1.axisLabels"),
                  labels: t("report-strategic-aim-1:general.1.lineLabels"),
                  dataset: [chapter.general[1].dataset.map(function (item, i) {
                    return { x: new Date(+item.year, 1, 1), y: +item.disasters };
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
                  section0.title
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.0.blocks.0")
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.0.blocks.1")
                ),
                _react2.default.createElement(_StackedBarChart2.default, {
                  title: t("report-strategic-aim-1:sections.0.blocks.2.title"),
                  caption: t("report-strategic-aim-1:sections.0.blocks.2.caption"),
                  height: 360,
                  width: 480,
                  padding: {
                    top: 60,
                    bottom: 30,
                    left: 30,
                    right: 100
                  },
                  customFills: section0.blocks[2].customFills,
                  labels: section0.blocks[2].dataset.map(function (item, i) {
                    // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                    return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(+item.total)) };
                  }),
                  data: [section0.blocks[2].dataset.map(function (item, i) {
                    return { x: +item.index, y: +item.numbers[0], name: item.labels[0] };
                  }), section0.blocks[2].dataset.map(function (item, i) {
                    return { x: +item.index, y: +item.numbers[1], name: item.labels[1] };
                  }), section0.blocks[2].dataset.map(function (item, i) {
                    return { x: +item.index, y: +item.numbers[2], name: item.labels[2] };
                  }), section0.blocks[2].dataset.map(function (item, i) {
                    return { x: +item.index, y: +item.numbers[3], name: item.labels[3] };
                  })]
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.1.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.1.blocks.0")
                ),
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "h4",
                    { className: "text-base sm-text-sm m0" },
                    t("report-strategic-aim-1:sections.1.blocks.1.title")
                  ),
                  _react2.default.createElement(
                    "table",
                    null,
                    _react2.default.createElement(
                      "thead",
                      { className: "bg-secondary" },
                      _react2.default.createElement(
                        "tr",
                        { className: "text-xs text-left" },
                        section1.blocks[1].headers.map(function (item, i) {
                          return _react2.default.createElement(
                            "th",
                            { key: i, className: "p05 lh-small" },
                            item
                          );
                        })
                      )
                    ),
                    _react2.default.createElement(
                      "tbody",
                      null,
                      section1.blocks[1].dataset.map(function (item, i) {
                        return _react2.default.createElement(
                          "tr",
                          { key: i },
                          _react2.default.createElement(
                            "td",
                            { className: "p05" },
                            item.year
                          ),
                          _react2.default.createElement(
                            "td",
                            { className: "p05" },
                            item.appealsLaunched
                          ),
                          _react2.default.createElement(
                            "td",
                            { className: "p05" },
                            item.amount
                          ),
                          _react2.default.createElement(
                            "td",
                            { className: "p05" },
                            item.beneficiaries
                          ),
                          _react2.default.createElement(
                            "td",
                            { className: "p05 text-xs" },
                            item.crisis
                          )
                        );
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "text-xs" },
                    t("report-strategic-aim-1:sections.1.blocks.1.caption")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.2.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.2.blocks.0")
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
                      t("report-strategic-aim-1:sections.2.blocks.1")
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      t("report-strategic-aim-1:sections.2.blocks.2")
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col sm-6 px1" },
                    _react2.default.createElement(
                      "h4",
                      { className: "text-base sm-text-sm m0" },
                      t("report-strategic-aim-1:sections.2.blocks.3.title")
                    ),
                    _react2.default.createElement(
                      _Tabs.Tabs,
                      { active: 0 },
                      _react2.default.createElement(
                        _Tabs.TabPanel,
                        { title: t("report-strategic-aim-1:sections.2.blocks.3.tabs.0.name") },
                        _react2.default.createElement(
                          "table",
                          { className: "base-12" },
                          _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                              "tr",
                              null,
                              section2.blocks[3].tabs[0].headers.map(function (item, i) {
                                return _react2.default.createElement(
                                  "th",
                                  { className: "text-xs", key: i },
                                  item
                                );
                              })
                            )
                          ),
                          _react2.default.createElement(
                            "tbody",
                            null,
                            section2.blocks[3].tabs[0].dataset.map(function (item, i) {
                              return _react2.default.createElement(
                                "tr",
                                { key: i },
                                _react2.default.createElement(
                                  "td",
                                  null,
                                  item.country
                                ),
                                _react2.default.createElement(
                                  "td",
                                  null,
                                  item.percentage,
                                  "%"
                                )
                              );
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _Tabs.TabPanel,
                        { title: t("report-strategic-aim-1:sections.2.blocks.3.tabs.1.name") },
                        _react2.default.createElement(
                          "table",
                          { className: "base-12" },
                          _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                              "tr",
                              null,
                              section2.blocks[3].tabs[1].headers.map(function (item, i) {
                                return _react2.default.createElement(
                                  "th",
                                  { className: "text-xs", key: i },
                                  item
                                );
                              })
                            )
                          ),
                          _react2.default.createElement(
                            "tbody",
                            null,
                            section2.blocks[3].tabs[1].dataset.map(function (item, i) {
                              return _react2.default.createElement(
                                "tr",
                                { key: i },
                                _react2.default.createElement(
                                  "td",
                                  null,
                                  item.country
                                ),
                                _react2.default.createElement(
                                  "td",
                                  null,
                                  item.percentage,
                                  "%"
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
                      t("report-strategic-aim-1:sections.2.blocks.3.caption")
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.3.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.3.blocks.0")
                ),
                _react2.default.createElement(_DonutChart2.default, {
                  title: t("report-strategic-aim-1:sections.3.blocks.1.title"),
                  caption: t("report-strategic-aim-1:sections.3.blocks.1.caption"),
                  maxSize: 480,
                  dataset: section3.blocks[1].dataset
                }),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.3.blocks.2")
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.4.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.4.blocks.2")
                ),
                _react2.default.createElement(_LineChart2.default, {
                  title: t("report-strategic-aim-1:sections.4.blocks.1.title"),
                  caption: t("report-strategic-aim-1:sections.4.blocks.1.caption"),
                  height: 480,
                  padding: {
                    top: 20,
                    bottom: 50,
                    left: 60,
                    right: 60
                  },
                  domain: {
                    x: [new Date(2010, 1, 1), new Date(2015, 1, 1)],
                    y: [40, 160]
                  },
                  axisLabels: section4.blocks[1].axisLabels,
                  labels: section4.blocks[1].lineLabels,
                  dataset: [section4.blocks[1].dataset[0].map(function (item, i) {
                    return { x: new Date(item.year, 1, 1), y: +item.value };
                  }), section4.blocks[1].dataset[1].map(function (item, i) {
                    return { x: new Date(item.year, 1, 1), y: +item.value };
                  })]
                }),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.4.blocks.3")
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.5.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.5.blocks.0")
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-7 px1" },
                _react2.default.createElement(_WorldMap2.default, {
                  title: t("report-strategic-aim-1:sections.5.blocks.1.title"),
                  caption: t("report-strategic-aim-1:sections.5.blocks.1.caption"),
                  choroplethDataset: section5.blocks[1].dataset
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.5.blocks.2")
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2", style: { position: "relative", minHeight: "600px", backgroundImage: "url(/img/chapters/4/syria-crisis.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6 xs-offset-6" },
                  _react2.default.createElement(
                    "h4",
                    { className: "text-base sm-text-sm m0" },
                    "The Syria crisis"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "40 Syrian Arab Red Crescent and 8 Palestinian Red Crescent Society staff and volunteers have lost their lives while providing support since the beginning of the crisis."
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6 xs-offset-6" },
                  _react2.default.createElement(
                    "p",
                    null,
                    "2011"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 color-primary strong" },
                    "22.8M"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "text-xs" },
                    "total population"
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6" },
                  _react2.default.createElement(
                    "div",
                    { className: "col xs-6 xs-offset-6 pr1" },
                    _react2.default.createElement(
                      "p",
                      { className: "display-1 color-primary strong" },
                      "4.1M"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xs" },
                      "people displaced in neighbouring countries"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 color-primary strong" },
                    "7.6M"
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "text-xs" },
                    "internally displaced people"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement("hr", null)
              ),
              _react2.default.createElement(
                "div",
                { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2", style: { position: "relative", minHeight: "660px", backgroundImage: "url(/img/chapters/4/taiphoon.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6 pr2" },
                  _react2.default.createElement(
                    "h4",
                    { className: "text-base sm-text-sm m0" },
                    "Taiphoon Haiyan"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "137 National Societies have supported the operation since the start of the crisis."
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Shelter"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Houses built"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "61,328"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Beneficiaries"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "76,032"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Livelihood support"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Households supported with livelihood assistance"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "58,454"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Healthcare"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Health facilities rehabilitated or constructed"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "32"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Households reached"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "33,685"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Water, sanitation and hygiene promotion"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Households participating in hygiene promotion"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "34,032"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6 pr2" },
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Education"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Classrooms repaired and constructed"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "224"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Students covered by repaired and constructed classrooms"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "48,731"
                    )
                  ),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement("br", { className: "xs-visible" }),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Disaster risk reduction"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Instructors trained in disaster risk reduction"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "95"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement("hr", null)
              ),
              _react2.default.createElement(
                "div",
                { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2", style: { position: "relative", minHeight: "892px", backgroundImage: "url(/img/chapters/4/ebola.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6 xs-offset-6" },
                  _react2.default.createElement(
                    "h4",
                    { className: "text-base sm-text-sm m0" },
                    "Ebola virus disease"
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    "33 National Societies have supported the operation since the start of the crisis."
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Social mobilisation and beneficiary communication"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "people reached"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "7M"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Tracing and monitoring contacts"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "People traced"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "&gt97,000"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Safe and dignified burials"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Bodies safely buried"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "34,448"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Psychosocial support"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "People supported"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "&gt339,000"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col xs-6" },
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Volunteers trained in Ebola response"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "6,927"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Volunteers currently active"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "3,917"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6" },
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix pb1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      _react2.default.createElement(
                        "strong",
                        null,
                        "Clinical case management"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4" },
                      "&nbsp"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Admissions"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "1,341"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-8" },
                      "Discharges"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col xs-4 right-align" },
                      "774"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement("hr", null)
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1" },
                _react2.default.createElement(
                  "p",
                  { className: "text-sm color-primary m0" },
                  t("report-strategic-aim-1:title")
                ),
                _react2.default.createElement(
                  "h3",
                  { className: "text-md sm-text-lg mt0 light" },
                  t("report-strategic-aim-1:sections.6.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.6.blocks.0")
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.6.blocks.2")
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "text-base sm-text-sm m0" },
                  t("report-strategic-aim-1:sections.6.blocks.3.title")
                ),
                _react2.default.createElement(
                  _Tabs.Tabs,
                  { active: 0 },
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: t("report-strategic-aim-1:sections.6.blocks.3.tabs.0.name") },
                    _react2.default.createElement(_DonutChart2.default, {
                      maxSize: 480,
                      dataset: section6.blocks[3].tabs[0].dataset
                    })
                  ),
                  _react2.default.createElement(
                    _Tabs.TabPanel,
                    { title: t("report-strategic-aim-1:sections.6.blocks.3.tabs.1.name") },
                    _react2.default.createElement(_DonutChart2.default, {
                      maxSize: 480,
                      dataset: section6.blocks[3].tabs[1].dataset
                    })
                  )
                ),
                _react2.default.createElement(
                  "p",
                  { className: "text-xs" },
                  t("report-strategic-aim-1:sections.6.blocks.3.caption")
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("report-strategic-aim-1:sections.6.blocks.4")
                )
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter4;
}(_react2.default.Component);

Chapter4.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-strategic-aim-1"], { wait: true })(Chapter4);

/***/ })

});