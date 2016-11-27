webpackJsonp([0],{

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

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

/***/ 1031:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(68);

var _reactI18next = __webpack_require__(74);

var _i18n = __webpack_require__(151);

var _i18n2 = _interopRequireDefault(_i18n);

var _prefixLanguageToRoute = __webpack_require__(433);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

var _config = __webpack_require__(436);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(_ref) {
  var navOpen = _ref.navOpen,
      t = _ref.t;
  var language = _i18n2.default.language;

  var content = _i18n2.default.store.data[language]["report-common"];
  var langRoute = (0, _prefixLanguageToRoute2.default)(language);
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
                      _reactRouter.Link,
                      { to: langRoute + "/report/" + routes[chapter].slug },
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
                "10"
              ),
              _react2.default.createElement(
                "div",
                { className: "pl3" },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: langRoute + "/report/" + routes.data.slug },
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    t("report-common:chapters.data.pretitle")
                  ),
                  _react2.default.createElement("hr", { style: { marginBottom: "8px", marginTop: "4px" } })
                )
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: langRoute + "/report/" + routes.data.slug },
                  _react2.default.createElement("img", { src: "/img/data-view-preview.png" })
                )
              )
            ),
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
                  _reactRouter.Link,
                  { to: langRoute + "/report/" + routes.acknowledgements.slug },
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

exports.default = (0, _reactI18next.translate)([], { wait: true })(Navigation);

/***/ },

/***/ 1032:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(74);

var _HeadlineDivider = __webpack_require__(1030);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _Icon = __webpack_require__(432);

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
        "\xA0",
        _react2.default.createElement(_Icon2.default, { name: "goto" })
      )
    );
  });

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "clearfix bg-primary pb2" },
      _react2.default.createElement(
        "div",
        { className: "clearfix pt3 px1 sm-px0" },
        _react2.default.createElement(
          "div",
          { className: "col sm-3 sm-offset-2" },
          _react2.default.createElement(
            "p",
            { className: "small strong caps m0" },
            t("report-common:home.downloadReportSection.preTitle")
          ),
          _react2.default.createElement(
            "h2",
            { className: "display-1 mt0" },
            t("report-common:home.downloadReportSection.title")
          ),
          _react2.default.createElement(_HeadlineDivider2.default, null),
          _react2.default.createElement("br", null),
          _react2.default.createElement("br", null)
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "clearfix pb3 px1 sm-px0" },
        _react2.default.createElement(
          "div",
          { className: "col sm-4 sm-offset-2 pr2" },
          _react2.default.createElement("img", { src: "/img/cover.png", alt: "" })
        ),
        _react2.default.createElement(
          "div",
          { className: "col sm-4" },
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
    )
  );
};

ReadMore.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)()(ReadMore);

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(68);

var _reactI18next = __webpack_require__(74);

var _reactRedux = __webpack_require__(72);

var _i18n = __webpack_require__(151);

var _i18n2 = _interopRequireDefault(_i18n);

var _prefixLanguageToRoute = __webpack_require__(433);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

var _appActions = __webpack_require__(109);

var _Icon = __webpack_require__(432);

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = __webpack_require__(434);

var _Loader2 = _interopRequireDefault(_Loader);

var _Navigation = __webpack_require__(1031);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ReadMore = __webpack_require__(1032);

var _ReadMore2 = _interopRequireDefault(_ReadMore);

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
    key: "render",
    value: function render() {
      var language = _i18n2.default.language;
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
          "header",
          { className: headerClassName, style: { top: "72px", zIndex: 10 } },
          _react2.default.createElement(
            "div",
            { style: { maxWidth: "1440px", margin: "0 auto" } },
            _react2.default.createElement(
              "div",
              {
                className: "clearfix bg-white",
                style: { position: "relative", zIndex: 10000, height: "72px" }
              },
              _react2.default.createElement(
                "div",
                {
                  className: "logo-wrapper",
                  style: { position: "relative", float: language === "ar" ? "right" : "left" }
                },
                _react2.default.createElement(
                  "button",
                  {
                    onClick: toggleNav,
                    className: "btn no-focus",
                    style: { padding: "20px 20px" }
                  },
                  navOpen ? _react2.default.createElement(_Icon2.default, { width: "28px", height: "28px", name: "close" }) : _react2.default.createElement(_Icon2.default, { width: "28px", height: "28px", name: "navigation" })
                ),
                _react2.default.createElement(
                  "span",
                  { className: "caps" },
                  t("report-common:site-title")
                )
              ),
              _react2.default.createElement(
                "div",
                {
                  style: { position: "relative", float: language === "ar" ? "left" : "right" },
                  className: "pr2 md-visible"
                },
                _react2.default.createElement(
                  "a",
                  {
                    className: "btn px1 py15",
                    href: "/downloads/Everyone_counts_2013_" + language.toUpperCase() + ".pdf"
                  },
                  "\xA0\xA0\xA0",
                  _react2.default.createElement(
                    "span",
                    { className: "caps" },
                    t("report-common:download")
                  )
                )
              )
            ),
            _react2.default.createElement(_Navigation2.default, { navOpen: navOpen })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: navOpen ? "main-content-wrapper removed" : "main-content-wrapper" },
          _react2.default.createElement(
            "div",
            { style: { paddingTop: "72px" } },
            this.props.children
          ),
          _react2.default.createElement(_ReadMore2.default, null),
          _react2.default.createElement(
            "footer",
            { className: "site-footer bg-dark clearfix" },
            _react2.default.createElement(
              "div",
              { className: "clearfix py3" },
              _react2.default.createElement(
                "div",
                {
                  className: "col xs-6 sm-5 sm-offset-2 md-3 px1",
                  style: { minHeight: "152px" }
                },
                _react2.default.createElement(
                  "ul",
                  { className: "clearfix" },
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(language, "/acknowledgements") },
                      _react2.default.createElement(
                        "span",
                        null,
                        "Acknowledgements"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "li",
                    null,
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(language, "/data") },
                      _react2.default.createElement(
                        "span",
                        null,
                        "Data"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                {
                  className: "col xs-6 sm-5 sm-offset-2 md-3 md-offset-0 px1",
                  style: { minHeight: "152px" }
                },
                "\xA0"
              ),
              _react2.default.createElement(
                "div",
                { className: "col xs-6 sm-5 md-3 px1", style: { minHeight: "152px" } },
                "International Federation of Red Cross and Red Crescent Societies ",
                _react2.default.createElement("br", null),
                "P.O. Box 303",
                _react2.default.createElement("br", null),
                "CH-1211 Geneva 19",
                _react2.default.createElement("br", null),
                "Switzerland",
                _react2.default.createElement("br", null),
                "Telephone: + 41 22 730 4224",
                _react2.default.createElement("br", null),
                "e-mail: fdrs@ifrc.org"
              )
            )
          )
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

exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Report));

/***/ }

});