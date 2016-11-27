webpackJsonp([19],{

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _datamaps = __webpack_require__(164);

var _datamaps2 = _interopRequireDefault(_datamaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import ReactDOM from 'react-dom';


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

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(25);

var _prefixLanguageToRoute = __webpack_require__(66);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumbs = function BreadCrumbs(_ref) {
  var language = _ref.language,
      chapter = _ref.chapter;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouter.Link,
      { to: (0, _prefixLanguageToRoute2.default)(language, "/") },
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

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadlineDivider = function HeadlineDivider() {
  return _react2.default.createElement(
    "div",
    { className: "headline-divider" },
    _react2.default.createElement(
      "svg",
      { viewBox: "0 0 30 20" },
      _react2.default.createElement("polyline", {
        points: "2 0 2 16 20 2 30 2",
        strokeWidth: "4",
        stroke: "#EE3224",
        fill: "transparent"
      })
    )
  );
};

exports.default = HeadlineDivider;

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(25);

var _Icon = __webpack_require__(64);

var _Icon2 = _interopRequireDefault(_Icon);

var _prefixLanguageToRoute = __webpack_require__(66);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextChapter = function NextChapter(_ref, _ref2) {
  var nextChapter = _ref.nextChapter;
  var language = _ref2.language;
  return _react2.default.createElement(
    "div",
    { className: "clearfix py2 bg-secondary" },
    _react2.default.createElement(
      "div",
      { className: "col sm-6 sm-offset-6 px1" },
      _react2.default.createElement(
        "p",
        null,
        nextChapter.heading
      ),
      _react2.default.createElement(
        "h2",
        { className: "display-1" },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: (0, _prefixLanguageToRoute2.default)(language, "/" + nextChapter.slug) },
          nextChapter.title,
          " ",
          _react2.default.createElement(_Icon2.default, { name: "goto", width: 30, height: 30 })
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

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(63);

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
        { className: 'side-navigation sm-7 sm-offset-3 md-3 md-offset-0 lg-2 px1 py2', ref: 'sticker', style: { position: this.state.isSticky ? 'fixed' : 'absolute', top: this.state.top, bottom: this.state.bottom } },
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

/***/ },

/***/ 470:
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

var _reactI18next = __webpack_require__(13);

var _NextChapter = __webpack_require__(35);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _Breadcrumbs = __webpack_require__(27);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _HeadlineDivider = __webpack_require__(29);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _SideNavigation = __webpack_require__(42);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

var _LineChart = __webpack_require__(86);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _WorldMap = __webpack_require__(169);

var _WorldMap2 = _interopRequireDefault(_WorldMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter8 = function (_React$Component) {
  _inherits(Chapter8, _React$Component);

  function Chapter8() {
    _classCallCheck(this, Chapter8);

    return _possibleConstructorReturn(this, (Chapter8.__proto__ || Object.getPrototypeOf(Chapter8)).apply(this, arguments));
  }

  _createClass(Chapter8, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted Enabling Action 2");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.i18n.language !== nextContext.i18n.language;
    }
  }, {
    key: "bubbleCallback",
    value: function bubbleCallback(response) {
      return [{
        name: "Peru",
        latitude: -9.189967,
        longitude: -75.015152,
        radius: 6,
        fillKey: "bubbleFill"
      }, {
        name: "Jamaica",
        latitude: 18.109581,
        longitude: -77.297508,
        radius: 6,
        fillKey: "bubbleFill"
      }, {
        name: "Austria",
        latitude: 47.516231,
        longitude: 14.550072,
        radius: 6,
        fillKey: "bubbleFill"
      }, {
        name: "Indonesia",
        latitude: -6.208763,
        longitude: 106.845599,
        radius: 6,
        fillKey: "bubbleFill"
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-enabling-action-2"];

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
          { className: "clearfix bg-primary-dark" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: language })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary pt1" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
            _react2.default.createElement(
              "h2",
              { className: "display-2" },
              chapter.title
            ),
            _react2.default.createElement(
              "p",
              { className: "title" },
              chapter.subtitle
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-8.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
            _react2.default.createElement(
              "p",
              { className: "lead" },
              chapter.intro
            ),
            _react2.default.createElement("hr", null)
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix body-text", style: { position: "relative" } },
          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section0", "scroll-target-section1", "scroll-target-section2", "scroll-target-section3"] }),
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
                "ul",
                null,
                section0.blocks[1].map(function (item, i) {
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
                section0.blocks[2]
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
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
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
            { className: "clearfix", id: "scroll-target-section2" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
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
              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
              _react2.default.createElement(_WorldMap2.default, {
                title: section2.blocks[1].title,
                caption: section2.blocks[1].caption,
                bubbleSource: false,
                bubbleCallback: this.bubbleCallback
              }),
              _react2.default.createElement(
                "div",
                { className: "clearfix" },
                section2.blocks[1].items.map(function (item, i) {
                  return _react2.default.createElement(
                    "div",
                    { key: i, className: "col md-6 lg-3 pr2" },
                    _react2.default.createElement(
                      "p",
                      { className: "subhead strong" },
                      item.country
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "small" },
                      item.text
                    )
                  );
                })
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
                section2.blocks[2]
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
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
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
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2" },
              _react2.default.createElement(_LineChart2.default, {
                title: section3.blocks[1].title,
                caption: section3.blocks[1].caption,
                height: 480,
                padding: {
                  top: 30,
                  bottom: 40,
                  left: 80,
                  right: 60
                },
                domain: {
                  x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
                  y: [0, 25000000]
                },
                axisLabels: section3.blocks[1].axisLabels,
                dataset: [[{ x: new Date(2010, 1, 1), y: 7444228 }, { x: new Date(2011, 1, 1), y: 8561015 }, { x: new Date(2012, 1, 1), y: 8590604 }, { x: new Date(2013, 1, 1), y: 9766893 }, { x: new Date(2014, 1, 1), y: 8884783 }], [{ x: new Date(2010, 1, 1), y: 1507782 }, { x: new Date(2011, 1, 1), y: 2422085 }, { x: new Date(2012, 1, 1), y: 2653814 }, { x: new Date(2013, 1, 1), y: 4020726 }, { x: new Date(2014, 1, 1), y: 2938558 }], [{ x: new Date(2013, 1, 1), y: 12998671 }, { x: new Date(2014, 1, 1), y: 23268122 }], [{ x: new Date(2013, 1, 1), y: 4779438 }, { x: new Date(2014, 1, 1), y: 11612597 }], [{ x: new Date(2010, 1, 1), y: 498454 }, { x: new Date(2011, 1, 1), y: 522033 }, { x: new Date(2012, 1, 1), y: 448753 }, { x: new Date(2013, 1, 1), y: 464628 }, { x: new Date(2014, 1, 1), y: 539588 }], [{ x: new Date(2013, 1, 1), y: 145000 }, { x: new Date(2014, 1, 1), y: 310000 }]],
                labels: section3.blocks[1].lineLabels
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2" },
              _react2.default.createElement(
                "p",
                null,
                section3.blocks[2]
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter8;
}(_react2.default.Component);

Chapter8.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-enabling-action-2"], { wait: true })(Chapter8);

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <VictoryAxis
//             dependentAxis
//             style={{
//               axis: {
//                 stroke: 'transparent'
//               },
//               ticks: {
//                 stroke: 'transparent'
//               },
//               tickLabels: {
//                 fill: 'transparent'
//               }}}/>
//           <VictoryAxis
//             scale='time'
//             tickFormat={(x) => x.getFullYear()} />

var lineColors = ['#EE3224', '#0F9EE3', '#D7006D'];

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: 'visualizationWrapper' },
        _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ),
        _react2.default.createElement(
          'svg',
          { width: this.state.width, height: this.props.height },
          _react2.default.createElement(_victory.VictoryAxis, {
            dependentAxis: true,
            label: this.props.axisLabels ? this.props.axisLabels.y || '' : '',
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: this.props.domain.y,
            standalone: false,
            height: this.props.height,
            width: this.state.width,
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
            },
            orientation: 'left'
          }),
          _react2.default.createElement(_victory.VictoryAxis, {
            label: this.props.axisLabels ? this.props.axisLabels.x || '' : '',
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: this.props.domain.x,
            standalone: false,
            height: this.props.height,
            width: this.state.width,
            scale: 'time',
            tickFormat: function tickFormat(x) {
              return x.getFullYear();
            },
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
            },
            orientation: 'bottom'
          }),
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
                  fontFamily: 'inherit',
                  fontSize: 13
                } },
              label: _this2.props.labels ? _this2.props.labels[i] : '' });
          })
        ),
        _react2.default.createElement(
          'p',
          { className: 'small mt0 pt1' },
          this.props.caption
        )
      );
    }
  }]);

  return LineChart;
}(_react2.default.Component);

LineChart.defaultProps = {
  width: 860,
  height: 420
};

module.exports = LineChart;

/***/ }

});