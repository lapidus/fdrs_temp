webpackJsonp([0,29],{

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

/***/ 1316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactI18next = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = function (_React$Component) {
  _inherits(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);

    return _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
  }

  _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;

      return _react2.default.createElement(
        "div",
        { className: "sm-visible" },
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-light px1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-8 sm-offset-0 md-offset-2" },
            _react2.default.createElement(
              "ul",
              { className: "m0 py05 px0 text-base" },
              this.props.links.map(function (item, i) {
                return _react2.default.createElement(
                  "li",
                  { className: "inline-block", key: i },
                  item.path ? _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: item.path },
                    item.name
                  ) : _react2.default.createElement(
                    "span",
                    { className: i === _this2.props.links.length - 1 ? "color-primary" : "" },
                    item.name
                  ),
                  i < _this2.props.links.length - 1 ? _react2.default.createElement(
                    "div",
                    { className: "inline-block px05" },
                    _react2.default.createElement(
                      "svg",
                      { width: "24px", height: "24px", viewBox: "0 0 24 24", style: { width: "1rem", stroke: "currentcolor", marginTop: -1 } },
                      _react2.default.createElement("polyline", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "10,8 14,12 10,16 ", transform: "translate(0, 0)", strokeLinejoin: "miter" })
                    )
                  ) : null
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Breadcrumbs;
}(_react2.default.Component);

exports.default = (0, _reactI18next.translate)([], { wait: true })(Breadcrumbs);

/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactI18next = __webpack_require__(41);

var _config = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(_ref, _ref2) {
  var navOpen = _ref.navOpen,
      t = _ref.t;
  var i18n = _ref2.i18n;
  var language = i18n.language;

  var content = i18n.store.data[language]["report-common"];
  var routes = _config.report.routes;


  var chaptersBySection = [["chapter1", "chapter2", "chapter3"], ["chapter4", "chapter5", "chapter6"], ["chapter7", "chapter8", "chapter9"]];

  return _react2.default.createElement(
    "nav",
    { className: navOpen ? "site-nav is-open" : "site-nav" },
    _react2.default.createElement(
      "ul",
      null,
      _react2.default.createElement(
        "div",
        { className: "col md-7 lg-5" },
        content.home.sections.map(function (section, sectionKey) {
          return sectionKey < 3 && _react2.default.createElement(
            "li",
            { key: sectionKey, className: "site-nav__section clearfix pb2" },
            _react2.default.createElement(
              "div",
              { className: "strong caps" },
              "Section " + (sectionKey + 1) + " \u2014 " + section.title
            ),
            _react2.default.createElement(
              "ul",
              null,
              chaptersBySection[sectionKey].map(function (chapter) {
                return _react2.default.createElement(
                  "li",
                  { key: chapter, className: "site-nav__chapter col md-12 lg-12" },
                  _react2.default.createElement(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        width: "2rem",
                        top: 0,
                        left: 0
                      },
                      className: "display-2 center strong"
                    },
                    chapter.id
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "pl2" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/" + routes[chapter].slug },
                      _react2.default.createElement(
                        "div",
                        { className: "title" },
                        t("report-common:chapters." + chapter + ".title")
                      ),
                      _react2.default.createElement("hr", { style: { marginBottom: "8px", marginTop: "4px" } })
                    )
                  )
                );
              })
            )
          );
        })
      ),
      _react2.default.createElement(
        "div",
        { className: "col md-5 lg-5 lg-offset-1" },
        _react2.default.createElement(
          "li",
          { className: "site-nav__section clearfix pb2" },
          _react2.default.createElement(
            "div",
            { className: "strong caps" },
            t("report-common:home.sections.3.id") + " \u2014 " + t("report-common:home.sections.3.title")
          ),
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              { className: "site-nav__chapter col md-12" },
              _react2.default.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    width: "2rem",
                    top: 0,
                    left: 0
                  },
                  className: "display-2 center strong"
                },
                "11"
              ),
              _react2.default.createElement(
                "div",
                { className: "pl3" },
                _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/fdrs/report/" + routes.acknowledgements.slug },
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    t("report-common:chapters.acknowledgements.title")
                  ),
                  _react2.default.createElement("hr", { style: { marginBottom: "8px", marginTop: "4px" } })
                )
              )
            )
          )
        )
      )
    )
  );
};

Navigation.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  navOpen: _react2.default.PropTypes.bool
};

Navigation.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)([], { wait: true })(Navigation);

/***/ }),

/***/ 1352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _HeadlineDivider = __webpack_require__(1314);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReadMore = function ReadMore(_ref) {
  var t = _ref.t;

  var downloadLinks = ["en", "fr", "es", "ar"].map(function (lang, i) {
    return _react2.default.createElement(
      "li",
      { key: lang },
      _react2.default.createElement(
        "a",
        {
          className: "btn py1",
          href: "/downloads/Everyone_counts_2013_" + lang + ".pdf",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        t("report-common:home.downloadReportSection.buttons." + i),
        "\xA0"
      )
    );
  });

  return _react2.default.createElement(
    "div",
    { className: "bg-primary pb2 px1" },
    _react2.default.createElement(
      "div",
      { className: "clearfix pt3 px1 sm-px0" },
      _react2.default.createElement(
        "div",
        { className: "col sm-3 sm-offset-2" },
        _react2.default.createElement(
          "p",
          { className: "text-sm m0" },
          t("report-common:home.downloadReportSection.preTitle")
        ),
        _react2.default.createElement(
          "h2",
          { className: "text-md sm-text-lg mt0 light" },
          t("report-common:home.downloadReportSection.title")
        ),
        _react2.default.createElement(_HeadlineDivider2.default, null),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null)
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "clearfix pb3 mxn1 text-center sm-text-left" },
      _react2.default.createElement(
        "div",
        { className: "col sm-5 sm-offset-1 md-4 md-offset-2 px1 mb2" },
        _react2.default.createElement("img", { src: "/img/cover.png", alt: "report-cover", style: { width: "100%" } })
      ),
      _react2.default.createElement(
        "div",
        { className: "col sm-5 md-4 px1" },
        _react2.default.createElement(
          "p",
          { className: "lead" },
          t("report-common:home.downloadReportSection.body")
        ),
        _react2.default.createElement(
          "ul",
          null,
          downloadLinks
        )
      )
    )
  );
};

ReadMore.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)()(ReadMore);

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _reactRedux = __webpack_require__(27);

var _reactSelect = __webpack_require__(70);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _appActions = __webpack_require__(69);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = __webpack_require__(539);

var _Loader2 = _interopRequireDefault(_Loader);

var _Navigation = __webpack_require__(1351);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ReadMore = __webpack_require__(1352);

var _ReadMore2 = _interopRequireDefault(_ReadMore);

var _Breadcrumbs = __webpack_require__(1316);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _prefixLanguageToRoute = __webpack_require__(554);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Report = function (_React$Component) {
  _inherits(Report, _React$Component);

  function Report() {
    _classCallCheck(this, Report);

    return _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).apply(this, arguments));
  }

  _createClass(Report, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounting app: ", this.props.location);
    }
  }, {
    key: "goToChapter",
    value: function goToChapter(chapter) {
      var prefixedRoute = (0, _prefixLanguageToRoute2.default)(this.context.i18n.language, chapter.value);
      this.context.router.push(prefixedRoute);
    }
  }, {
    key: "render",
    value: function render() {
      var language = this.context.i18n.language;
      var _props = this.props,
          t = _props.t,
          navOpen = _props.navOpen,
          toggleNav = _props.toggleNav;

      var headerClassName = navOpen ? "site-header clearfix level-5 is-extended" : "site-header clearfix level-5";

      return _react2.default.createElement(
        "div",
        {
          dir: language === "ar" ? "rtl" : "ltr",
          className: language === "ar" ? "layout-rtl" : ""
        },
        _react2.default.createElement(_Loader2.default, null),
        _react2.default.createElement(
          "div",
          { className: "sm-visible" },
          _react2.default.createElement(
            "div",
            { className: "clearfix bg-light px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-8 sm-offset-0 md-offset-2" },
              _react2.default.createElement(
                "ul",
                { className: "m0 py05 px0 text-base" },
                _react2.default.createElement(
                  "li",
                  { className: "inline-block mr1" },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs" },
                    "Home"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "inline-block mr1" },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/services" },
                    "Services"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "inline-block mr1" },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/report" },
                    "Report"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  { className: "inline-block align-middle mr1 select-no-underline select-no-scroll", style: { minWidth: 300 } },
                  _react2.default.createElement(_reactSelect2.default, {
                    searchable: false,
                    clearable: false,
                    name: "chapter-selector",
                    value: this.context.router.getCurrentLocation().pathname,
                    options: [{ value: "/fdrs/report", label: "Introduction" }, { value: "/fdrs/report/who-we-are", label: t("report-common:chapters.chapter1.title") }, { value: "/fdrs/report/what-we-do", label: t("report-common:chapters.chapter2.title") }, { value: "/fdrs/report/living-our-fundamental-principles", label: t("report-common:chapters.chapter3.title") }, { value: "/fdrs/report/strategic-aim-1", label: t("report-common:chapters.chapter4.title") }, { value: "/fdrs/report/strategic-aim-2", label: t("report-common:chapters.chapter5.title") }, { value: "/fdrs/report/strategic-aim-3", label: t("report-common:chapters.chapter6.title") }, { value: "/fdrs/report/enabling-action-1", label: t("report-common:chapters.chapter7.title") }, { value: "/fdrs/report/enabling-action-2", label: t("report-common:chapters.chapter8.title") }, { value: "/fdrs/report/enabling-action-3", label: t("report-common:chapters.chapter9.title") }],
                    onChange: this.goToChapter.bind(this)
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: navOpen ? "main-content-wrapper removed" : "main-content-wrapper" },
          _react2.default.createElement(
            "div",
            { style: { minHeight: "100vh" } },
            this.props.children
          ),
          _react2.default.createElement(_ReadMore2.default, null)
        )
      );
    }
  }]);

  return Report;
}(_react2.default.Component);

Report.propTypes = {
  t: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.element,
  location: _react.PropTypes.object,
  navOpen: _react.PropTypes.bool,
  toggleNav: _react.PropTypes.func
};

Report.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired,
  router: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    navOpen: state.appReducer.navOpen
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav() {
      return dispatch((0, _appActions.toggleNav)());
    }
  };
};

exports.default = (0, _reactI18next.translate)(["report-common"], { wait: true })((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Report));

/***/ })

});