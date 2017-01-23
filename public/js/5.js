webpackJsonp([5,29],{

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

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumbs = function BreadCrumbs(_ref) {
  var language = _ref.language,
      chapter = _ref.chapter;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _LanguageLink2.default,
      { to: "/fdrs/report" },
      _react2.default.createElement(
        "span",
        null,
        "Home"
      )
    ),
    _react2.default.createElement(
      "span",
      { style: { padding: "0 1em" } },
      "›"
    ),
    chapter.title
  );
};

BreadCrumbs.propTypes = {
  language: _react2.default.PropTypes.string.isRequired,
  chapter: _react2.default.PropTypes.object.isRequired
};

exports.default = BreadCrumbs;

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

/***/ 1361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var LegendItem = function LegendItem(props) {
  return _react2.default.createElement(
    "div",
    { className: "legend-item " + (props.className || "") },
    _react2.default.createElement("div", { className: "legend-item-dot", style: { background: props.color } }),
    _react2.default.createElement(
      "span",
      { className: "small" },
      props.children
    )
  );
};

var ScatterChart = function (_React$Component) {
  _inherits(ScatterChart, _React$Component);

  function ScatterChart(props) {
    _classCallCheck(this, ScatterChart);

    var _this = _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).call(this, props));

    _this.state = {
      width: _this.props.width,
      height: _this.props.height,
      padding: {
        top: _this.props.padding.top,
        bottom: _this.props.padding.bottom,
        left: _this.props.padding.left,
        right: _this.props.padding.right
      },
      tooltipContent: "Tooltip Content",
      tooltipVisible: false,
      tooltipPosition: [],
      tooltipParentPosition: []
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    return _this;
  }

  _createClass(ScatterChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener("resize", this.resizeChart);
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      var width = this.refs.visualizationWrapper.clientWidth;
      this.setState({
        width: width,
        height: width / 3 * 2
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
        null,
        _react2.default.createElement(
          "h4",
          { className: "title strong" },
          this.props.title
        ),
        _react2.default.createElement(
          "div",
          { ref: "visualizationWrapper", style: { position: "relative" } },
          _react2.default.createElement(
            "svg",
            { width: this.state.width, height: this.state.height, style: { background: "#fff" } },
            _react2.default.createElement("rect", { x: this.state.padding.left, y: this.state.padding.top, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: "#EEEDEC" }),
            _react2.default.createElement("rect", { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.padding.top, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: "#FBFAF9" }),
            _react2.default.createElement("rect", { x: this.state.padding.left, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: "#FBFAF9" }),
            _react2.default.createElement("rect", { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: "#EEEDEC" }),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: this.state.padding.left - 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 4 * 3,
                textAnchor: "end",
                verticalAnchor: "middle",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "Low"
            ),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: this.state.padding.left - 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 4,
                textAnchor: "end",
                verticalAnchor: "middle",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "High"
            ),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 4, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 50,
                textAnchor: "middle",
                verticalAnchor: "start",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "Low"
            ),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 4 * 3, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 50,
                textAnchor: "middle",
                verticalAnchor: "start",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "High"
            ),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2,
                textAnchor: "start",
                verticalAnchor: "middle",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "OCAC\nscores"
            ),
            _react2.default.createElement(
              _victory.VictoryLabel,
              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 90,
                textAnchor: "middle",
                verticalAnchor: "start",
                lineHeight: 1.5,
                style: { fontSize: "13px" } },
              "Gross domestic product per capita (US dollar, log scale)"
            ),
            _react2.default.createElement(_victory.VictoryScatter, {
              width: this.state.width,
              height: this.state.height,
              padding: {
                top: this.state.padding.top,
                bottom: this.state.padding.bottom,
                left: this.state.padding.left,
                right: this.state.padding.right
              },
              standalone: false,
              scale: { x: "linear", y: "linear" },
              domain: { y: [0, 100], x: [2, 5] },
              size: 4,
              style: {
                data: {
                  fill: "transparent",
                  strokeWidth: "3px"
                }
              },
              data: this.props.dataset,
              events: [{
                target: "data",
                eventHandlers: {
                  onMouseEnter: function onMouseEnter(evt, props) {
                    console.log("Entering item", evt, props);
                    _this2.setState({
                      // tooltipTitle: props.datum.name,
                      tooltipTitle: props.datum.region,
                      // tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
                      tooltipContent: "GDP/capita: $" + _numberFormatter2.default.addCommas(Math.round(props.datum.x_regular_gdp)) + "\nOCAC score: " + props.datum.y + "%",
                      tooltipVisible: true,
                      // tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
                      tooltipPosition: [props.position.y, props.position.x]
                    });
                  },
                  onMouseLeave: function onMouseLeave() {
                    console.log("Leaving item");
                    _this2.setState({
                      tooltipVisible: false
                    });
                  }
                }
              }]
            })
          ),
          _react2.default.createElement(
            _ChartTooltip2.default,
            { visible: this.state.tooltipVisible, position: this.state.tooltipPosition, parentPosition: this.state.tooltipParentPosition },
            _react2.default.createElement(
              "strong",
              { className: "small" },
              this.state.tooltipTitle
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "span",
              { className: "small" },
              this.state.tooltipContent
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix" },
          this.props.legend.map(function (item, i) {
            return _react2.default.createElement(
              LegendItem,
              { key: i, color: item.color, className: "px1" },
              item.name
            );
          })
        ),
        _react2.default.createElement(
          "p",
          { className: "small" },
          this.props.caption
        )
      );
    }
  }]);

  return ScatterChart;
}(_react2.default.Component);

module.exports = ScatterChart;

/***/ }),

/***/ 548:
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

var _Breadcrumbs = __webpack_require__(1322);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _HeadlineDivider = __webpack_require__(1314);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _SideNavigation = __webpack_require__(1318);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

var _SimpleBarChart = __webpack_require__(1329);

var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

var _DonutChart = __webpack_require__(1328);

var _DonutChart2 = _interopRequireDefault(_DonutChart);

var _ScatterChart = __webpack_require__(1361);

var _ScatterChart2 = _interopRequireDefault(_ScatterChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter7 = function (_React$Component) {
  _inherits(Chapter7, _React$Component);

  function Chapter7() {
    _classCallCheck(this, Chapter7);

    return _possibleConstructorReturn(this, (Chapter7.__proto__ || Object.getPrototypeOf(Chapter7)).apply(this, arguments));
  }

  _createClass(Chapter7, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted Enabling Action 1");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var language = nextContext.i18n.language;

      return !!nextContext.i18n.store.data[language]["report-enabling-action-1"];
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          t = _props.t,
          scatterChartDimensions = _props.scatterChartDimensions;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-enabling-action-1"];

      var _chapter$sections = _slicedToArray(chapter.sections, 4),
          section0 = _chapter$sections[0],
          section1 = _chapter$sections[1],
          section2 = _chapter$sections[2],
          section3 = _chapter$sections[3];

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
          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-7.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
          { className: "relative clearfix body-text" },
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section0" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[0]
              ),
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[2]
              ),
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-7" },
              _react2.default.createElement(
                "h4",
                { className: "title strong" },
                section0.blocks[4].title
              ),
              _react2.default.createElement(
                "table",
                { className: "base-12" },
                _react2.default.createElement(
                  "thead",
                  null,
                  _react2.default.createElement(
                    "tr",
                    { className: "small" },
                    _react2.default.createElement(
                      "th",
                      { style: { width: "16%" } },
                      "\xA0"
                    ),
                    _react2.default.createElement(
                      "th",
                      { style: { width: "42%" } },
                      section0.blocks[4].headings[0]
                    ),
                    _react2.default.createElement(
                      "th",
                      { style: { width: "42%" } },
                      section0.blocks[4].headings[1]
                    )
                  )
                ),
                _react2.default.createElement(
                  "tbody",
                  null,
                  section0.blocks[4].dataset.map(function (item, i) {
                    return item.length === 1 ? _react2.default.createElement(
                      "tr",
                      { key: i },
                      _react2.default.createElement(
                        "td",
                        { className: "p0" },
                        "\xA0"
                      ),
                      _react2.default.createElement(
                        "td",
                        { colSpan: "2", className: "center p0 py1" },
                        _react2.default.createElement("hr", null),
                        _react2.default.createElement(
                          "div",
                          { className: "py1" },
                          item[0]
                        ),
                        _react2.default.createElement("hr", null)
                      )
                    ) : _react2.default.createElement(
                      "tr",
                      { key: i },
                      _react2.default.createElement(
                        "td",
                        null,
                        item[0]
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        item[1]
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        item[2]
                      )
                    );
                  }),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      { colSpan: "3" },
                      "\xA0"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section0.blocks[4].caption
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[5]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[7]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section1" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
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
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 sm-pr1" },
              _react2.default.createElement(
                "p",
                null,
                section1.blocks[1]
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0" },
              _react2.default.createElement("img", { src: "/img/chapters/7/bridging-the-technical-divide.jpg", width: "100%", height: "auto" }),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section1.blocks[2].caption
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section2" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
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
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1" },
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[1]
              ),
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[2]
              ),
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[3]
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3" },
              _react2.default.createElement(
                "div",
                { className: "bg-secondary p2" },
                _react2.default.createElement(
                  "p",
                  { className: "small strong color-primary caps mb0" },
                  "Case Study"
                ),
                _react2.default.createElement(
                  "h4",
                  { className: "title strong mt0" },
                  section2.blocks[4].title
                ),
                _react2.default.createElement(
                  "p",
                  { style: { fontSize: "16px" } },
                  section2.blocks[4].content
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section3" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
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
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "h4",
                  { className: "title strong" },
                  section3.blocks[1].title
                ),
                _react2.default.createElement(
                  "div",
                  { className: "clearfix" },
                  _react2.default.createElement(
                    "div",
                    { className: "col sm-6 center px1" },
                    _react2.default.createElement(_DonutChart2.default, {
                      maxSize: 300,
                      dataset: section3.blocks[1].dataset[0] }),
                    _react2.default.createElement(
                      "p",
                      { className: "display-1 color-primary" },
                      "50%"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "small" },
                      section3.blocks[1].captions[0]
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col sm-6 center px1" },
                    _react2.default.createElement(_DonutChart2.default, {
                      maxSize: 300,
                      dataset: section3.blocks[1].dataset[1] }),
                    _react2.default.createElement(
                      "p",
                      { className: "display-1 color-primary" },
                      "18%"
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "small" },
                      section3.blocks[1].captions[1]
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                null,
                section3.blocks[2]
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_SimpleBarChart2.default, {
                  title: section3.blocks[3].title,
                  caption: section3.blocks[3].caption,
                  horizontal: true,
                  height: 420,
                  padding: {
                    top: 40,
                    bottom: 40,
                    left: 30,
                    right: 120
                  },
                  data: [{ y: 0, x: section3.blocks[3].dataset[0].name }, { y: 116, x: String(section3.blocks[3].dataset[0].number) }, { y: 0, x: section3.blocks[3].dataset[1].name }, { y: 89, x: String(section3.blocks[3].dataset[1].number) }, { y: 0, x: section3.blocks[3].dataset[2].name }, { y: 69, x: String(section3.blocks[3].dataset[2].number) }, { y: 0, x: section3.blocks[3].dataset[3].name }, { y: 108, x: String(section3.blocks[3].dataset[3].number) }, { y: 0, x: section3.blocks[3].dataset[4].name }, { y: 76, x: String(section3.blocks[3].dataset[4].number) }, { y: 0, x: section3.blocks[3].dataset[5].name }, { y: 110, x: String(section3.blocks[3].dataset[5].number) }, { y: 0, x: section3.blocks[3].dataset[6].name }, { y: 92, x: String(section3.blocks[3].dataset[6].number) }],
                  labels: function labels(datum) {
                    return datum.xName;
                  }
                })
              ),
              _react2.default.createElement(
                "p",
                null,
                section3.blocks[4]
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter7;
}(_react2.default.Component);

Chapter7.defaultProps = {
  scatterChartDimensions: {
    width: 840,
    height: 560,
    padding: {
      top: 30,
      bottom: 100,
      left: 120,
      right: 30
    }
  }
};

Chapter7.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-enabling-action-1"], { wait: true })(Chapter7);

/***/ })

});