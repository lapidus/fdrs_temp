webpackJsonp([9,29],{

/***/ 1328:
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

/***/ 1329:
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

var _Icon = __webpack_require__(533);

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

/***/ 1332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

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

/***/ },

/***/ 547:
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

var _NextChapter = __webpack_require__(1329);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _HeadlineDivider = __webpack_require__(1328);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _SideNavigation = __webpack_require__(1332);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter2 = function (_React$Component) {
  _inherits(Chapter2, _React$Component);

  function Chapter2() {
    _classCallCheck(this, Chapter2);

    return _possibleConstructorReturn(this, (Chapter2.__proto__ || Object.getPrototypeOf(Chapter2)).apply(this, arguments));
  }

  _createClass(Chapter2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      var language = nextContext.i18n.language;

      return !!nextContext.i18n.store.data[language]["report-what-we-do"];
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-what-we-do"];

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
          { className: "clearfix bg-dark overflow-hidden", style: {
              backgroundImage: "url(/img/chapters/chapter-2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
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
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    section0.blocks[0]
                  )
                ),
                _react2.default.createElement(
                  "ol",
                  null,
                  section0.blocks[1].map(function (item, i) {
                    return _react2.default.createElement(
                      "li",
                      { key: i, className: "py05" },
                      item
                    );
                  })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    section0.blocks[2]
                  )
                ),
                _react2.default.createElement(
                  "ol",
                  null,
                  section0.blocks[3].map(function (item, i) {
                    return _react2.default.createElement(
                      "li",
                      { key: i, className: "py05" },
                      item
                    );
                  })
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[4]
                ),
                _react2.default.createElement(
                  "a",
                  { href: section0.blocks[5], target: "_blank", className: "btn btn--raised bg-primary px1" },
                  _react2.default.createElement(
                    "svg",
                    { style: { width: 16, height: 16, marginTop: -1, marginRight: 16 }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                    _react2.default.createElement(
                      "g",
                      { transform: "translate(0, 0)", style: { stroke: "currentcolor" } },
                      _react2.default.createElement("line", { fill: "none", strokeWidth: "2", strokeMiterlimit: "10", x1: "12", y1: "9", x2: "12", y2: "22", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                      _react2.default.createElement("polyline", { fill: "none", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "15,19 12,22 9,19 ", strokeLinejoin: "miter" }),
                      _react2.default.createElement("path", { fill: "none", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", d: "M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2", strokeLinejoin: "miter" })
                    )
                  ),
                  section0.blocks[6]
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
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "relative clearfix" },
            _react2.default.createElement("img", { src: "/img/chapters/2/flickr.jpg", style: { opacity: 0.3, width: "100%" } }),
            _react2.default.createElement(
              "div",
              { className: "absolute base-12 t50 y-venter-self text-center" },
              _react2.default.createElement(
                "a",
                { className: "btn btn--raised bg-primary", href: "https://www.flickr.com/photos/ifrc/albums", target: "_blank" },
                _react2.default.createElement(
                  "div",
                  { className: "p1" },
                  section1.blocks[1]
                )
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter2;
}(_react2.default.Component);

Chapter2.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-what-we-do"], { wait: true })(Chapter2);

/***/ }

});