webpackJsonp([14],{

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

/***/ 1045:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(72);

var _reactI18next = __webpack_require__(74);

var _reactRouter = __webpack_require__(68);

var _prefixLanguageToRoute = __webpack_require__(433);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

var _Reveal = __webpack_require__(1061);

var _Reveal2 = _interopRequireDefault(_Reveal);

var _Icon = __webpack_require__(432);

var _Icon2 = _interopRequireDefault(_Icon);

var _HeadlineDivider = __webpack_require__(1030);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quote = function (_React$Component) {
  _inherits(Quote, _React$Component);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "blockquote",
        { style: { marginTop: "72px", fontSize: "1.5rem" } },
        _react2.default.createElement(_Icon2.default, { name: "quote", width: "72px", height: "72px" }),
        this.props.children
      );
    }
  }]);

  return Quote;
}(_react2.default.Component);

var RatioCard = function (_React$Component2) {
  _inherits(RatioCard, _React$Component2);

  function RatioCard() {
    _classCallCheck(this, RatioCard);

    return _possibleConstructorReturn(this, (RatioCard.__proto__ || Object.getPrototypeOf(RatioCard)).apply(this, arguments));
  }

  _createClass(RatioCard, [{
    key: "render",
    value: function render() {

      var styling = {
        wrapper: {
          position: "relative"
        },
        content: {
          // position:"absolute",
          // width:"100%",
          // height:"100%",
          backgroundImage: "url(" + this.props.backgroundImage + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      };

      return _react2.default.createElement(
        "div",
        { className: "ratio-card " + ("ratio-card--" + this.props.ratio) + (this.props.wrapperClass || ""), style: styling.wrapper },
        _react2.default.createElement(
          "div",
          { className: this.props.gradient ? "ratio-card__content with-gradient--dark " + (this.props.contentClass || "") : "ratio-card__content " + (this.props.contentClass || ""), style: styling.content },
          _react2.default.createElement(
            "div",
            { className: "vertical-center" },
            this.props.children
          )
        )
      );
    }
  }]);

  return RatioCard;
}(_react2.default.Component);

var Home = function (_React$Component3) {
  _inherits(Home, _React$Component3);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this3 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this3.state = {
      loaded: 0,
      parsedData: {},
      showLoader: false
    };
    return _this3;
  }

  _createClass(Home, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.language !== nextContext.language;
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "center", style: { boxShadow: "inset 0 100px 100px #fff,inset 0 -100px 100px #fff", backgroundImage: "url(/img/ifrc-progress-report-2015-bg.jpg)", overflow: "hidden" } },
          _react2.default.createElement(
            "h1",
            { style: { paddingTop: "100px", paddingBottom: "60px" }, className: "bg-gradient--white m0" },
            _react2.default.createElement(
              "div",
              { className: "display-3" },
              _react2.default.createElement(
                "strong",
                { className: "caps" },
                t("report-common:home.title.0"),
                " ",
                _react2.default.createElement(
                  "span",
                  { className: "color-primary" },
                  " ",
                  t("report-common:home.title.1")
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "display-5 pb2 color-primary" },
              t("report-common:home.title.2")
            ),
            _react2.default.createElement(
              "div",
              { className: "display-1" },
              t("report-common:reportType")
            ),
            _react2.default.createElement(
              "div",
              { className: "pt3" },
              _react2.default.createElement(_Icon2.default, { name: "down", width: "34px", height: "34px" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix center px1 sm-px0" },
          _react2.default.createElement(
            "div",
            { className: "col sm-6 sm-offset-3 pt2 pb3" },
            _react2.default.createElement(
              "p",
              { className: "lead" },
              t("report-common:home.intro.0")
            ),
            _react2.default.createElement(
              _Reveal2.default,
              { offset: 600 },
              _react2.default.createElement(
                "p",
                { className: "body-text" },
                t("report-common:home.intro.1")
              )
            ),
            _react2.default.createElement(
              _Reveal2.default,
              { offset: 600 },
              _react2.default.createElement(
                "div",
                { className: "col xs-6 py2" },
                _react2.default.createElement(
                  "p",
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    t("report-common:home.signatures.0.name")
                  ),
                  _react2.default.createElement("br", null),
                  t("report-common:home.signatures.0.title")
                ),
                _react2.default.createElement("img", { src: "/img/signature1.png", alt: "" })
              ),
              _react2.default.createElement(
                "div",
                { className: "col xs-6 py2" },
                _react2.default.createElement(
                  "p",
                  null,
                  _react2.default.createElement(
                    "strong",
                    null,
                    t("report-common:home.signatures.1.name")
                  ),
                  _react2.default.createElement("br", null),
                  t("report-common:home.signatures.1.title")
                ),
                _react2.default.createElement("img", { src: "/img/signature2.png", alt: "" })
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 500 },
          _react2.default.createElement(
            "div",
            { className: "bg-secondary py4", style: { paddingBottom: "120px" } },
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-2" },
                _react2.default.createElement(
                  "p",
                  { className: "small strong caps color-primary m0" },
                  t("report-common:home.sections.0.id")
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "display-1 mt0" },
                  t("report-common:home.sections.0.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null)
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-1.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "subhead color-primary m0 px2 pt2" },
                    t("report-common:home.sections.0.title")
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "display-1 m0 px2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/who-we-are") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter1.title"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5 md-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-white center" },
                  _react2.default.createElement(_Icon2.default, { name: "usergroup", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "display-3 color-primary" },
                    t("report-common:home.sections.0.statistic.number")
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "caps" },
                    t("report-common:home.sections.0.statistic.text")
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-white center" },
                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "px2" },
                    t("report-common:home.sections.0.fact")
                  ),
                  _react2.default.createElement("p", { className: "caps" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-2.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "subhead color-primary m0 px2 pt2" },
                    t("report-common:home.sections.0.title")
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "display-1 m0 px2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/what-we-do") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter2.title"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-3.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "subhead color-primary m0 px2 pt2" },
                    t("report-common:home.sections.0.title")
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "display-1 m0 px2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/living-our-fundamental-principles") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter3.title"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
                _react2.default.createElement(
                  Quote,
                  null,
                  t("report-common:home.sections.0.quote")
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 500 },
          _react2.default.createElement(
            "div",
            { className: "bg-white py4", style: { paddingBottom: "120px" } },
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-2" },
                _react2.default.createElement(
                  "p",
                  { className: "small strong caps color-primary m0" },
                  t("report-common:home.sections.1.id")
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "display-1 mt0" },
                  t("report-common:home.sections.1.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null)
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-1.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-1") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter4.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter4.title")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5 md-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-secondary center" },
                  _react2.default.createElement(_Icon2.default, { name: "tornado", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "display-3 color-primary" },
                    t("report-common:home.sections.1.statistic.number")
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "caps" },
                    t("report-common:home.sections.1.statistic.text")
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-secondary center" },
                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "px2" },
                    t("report-common:home.sections.1.fact")
                  ),
                  _react2.default.createElement("p", { className: "caps" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-2.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-2") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter5.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter5.title")
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-3.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-3") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter6.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter6.title")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
                _react2.default.createElement(
                  Quote,
                  null,
                  t("report-common:home.sections.1.quote")
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 500 },
          _react2.default.createElement(
            "div",
            { className: "bg-secondary py4", style: { paddingBottom: "120px" } },
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-2" },
                _react2.default.createElement(
                  "p",
                  { className: "small strong caps color-primary m0" },
                  t("report-common:home.sections.2.id")
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "display-1 mt0" },
                  t("report-common:home.sections.2.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null)
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-7.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 color-primary m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-1") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter7.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter7.title")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5 md-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-white center" },
                  _react2.default.createElement(_Icon2.default, { name: "flag", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "display-3 color-primary" },
                    t("report-common:home.sections.2.statistic.number")
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "caps" },
                    t("report-common:home.sections.2.statistic.text")
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "100", contentClass: "px1 bg-white center" },
                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                  _react2.default.createElement(
                    "p",
                    { className: "px2" },
                    t("report-common:home.sections.2.fact")
                  ),
                  _react2.default.createElement("p", { className: "caps" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-5" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-8.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 color-primary m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-2") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter8.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter8.title")
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-5 sm-offset-1" },
                _react2.default.createElement(
                  RatioCard,
                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-9.jpg" },
                  _react2.default.createElement(
                    "p",
                    { className: "display-1 color-primary m0 px2 pt2" },
                    _react2.default.createElement(
                      _reactRouter.Link,
                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-3") },
                      _react2.default.createElement(
                        "span",
                        null,
                        t("report-common:chapters.chapter9.pretitle"),
                        " "
                      ),
                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
                    )
                  ),
                  _react2.default.createElement(
                    "h3",
                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
                    t("report-common:chapters.chapter9.title")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
                _react2.default.createElement(
                  Quote,
                  null,
                  t("report-common:home.sections.2.quote")
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { style: { backgroundImage: "url(/img/dataViewPreview.jpg)", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" } },
          _react2.default.createElement(
            "div",
            { className: "clearfix bg-data pb2", style: { background: "rgba(0,0,0,0.4)" } },
            _react2.default.createElement(
              "div",
              { className: "clearfix pt3 px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-3 sm-offset-2" },
                _react2.default.createElement(
                  "p",
                  { className: "small strong caps color-primary m0" },
                  t("report-common:chapters.data.preTitle")
                ),
                _react2.default.createElement(
                  "h2",
                  { className: "display-1 mt0" },
                  t("report-common:chapters.data.title")
                ),
                _react2.default.createElement(_HeadlineDivider2.default, null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null)
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix pb3 px1 sm-px0" },
              _react2.default.createElement(
                "div",
                { className: "col sm-6 sm-offset-2 pr2" },
                _react2.default.createElement(
                  "p",
                  { className: "lead" },
                  t("report-common:chapters.data.body.0"),
                  " ",
                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
                ),
                _react2.default.createElement(
                  "p",
                  { className: "lead" },
                  t("report-common:chapters.data.body.1"),
                  " ",
                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement("br", null),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/data"), className: "btn bg-primary p1" },
                  t("report-common:chapters.data.button"),
                  " ",
                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

Home.contextTypes = {
  language: _react2.default.PropTypes.string
};

function mapStateToProps(state) {
  return {
    language: state.appReducer.language,
    content: {
      en: state.appReducer.en,
      fr: state.appReducer.fr,
      es: state.appReducer.es,
      ar: state.appReducer.ar
    }
  };
}

// Home.defaultProps = {}

exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps)(Home));

/***/ },

/***/ 1061:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debounce = __webpack_require__(1063);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reveal = function (_React$Component) {
  _inherits(Reveal, _React$Component);

  function Reveal(props) {
    _classCallCheck(this, Reveal);

    var _this = _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).call(this, props));

    _this.displayName = 'Reveal';

    _this.state = {
      revealed: false,
      triggerOffset: undefined
    };

    _this.reveal = _this.reveal.bind(_this);
    _this.unreveal = _this.unreveal.bind(_this);
    _this.resize = _this.resize.bind(_this);
    return _this;
  }

  _createClass(Reveal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var offset = window.innerHeight * 0.8;

      var bodyOffset = document.body.getBoundingClientRect().top;
      var initialTriggerOffset = _reactDom2.default.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
      var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

      this.setState({
        triggerOffset: initialTriggerOffset,
        revealed: initiallyRevealed ? true : false
      });

      window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      if (window.pageYOffset > this.state.triggerOffset) {
        this.setState({ revealed: true });
        window.removeEventListener('scroll', this.reveal);
        window.addEventListener('scroll', this.unreveal);
      }
    }
  }, {
    key: 'unreveal',
    value: function unreveal() {
      if (window.pageYOffset < this.state.triggerOffset) {
        this.setState({ revealed: false });
        window.removeEventListener('scroll', this.unreveal);
        window.addEventListener('scroll', this.reveal);
      }
    }
  }, {
    key: 'resize',
    value: function resize() {

      var offset = window.innerHeight * 0.8;

      var bodyOffset = document.body.getBoundingClientRect().top;
      var initialTriggerOffset = _reactDom2.default.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
      var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

      this.setState({
        triggerOffset: initialTriggerOffset,
        revealed: initiallyRevealed ? true : false
      });

      window.removeEventListener('scroll', !initiallyRevealed ? this.unreveal : this.reveal);
      window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.reveal);
      window.removeEventListener('scroll', this.unreveal);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {

      var revealItemClass = this.props.customClassName || 'reveal-item',
          revealItemActiveClass = this.props.customClassNameActive || 'is-revealed';

      return _react2.default.createElement(
        'div',
        { className: this.state.revealed ? revealItemClass + ' ' + revealItemActiveClass : '' + revealItemClass },
        this.props.children
      );
    }
  }]);

  return Reveal;
}(_react2.default.Component);

Reveal.defaultProps = {
  offset: 0
};

exports.default = Reveal;

/***/ },

/***/ 1063:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(fn, threshold, isAsap) {
  var timeout, result;
  function debounced() {
    var args = arguments,
        context = this;
    function delayed() {
      if (!isAsap) {
        result = fn.apply(context, args);
      }
      timeout = null;
    }
    if (timeout) {
      clearTimeout(timeout);
    } else if (isAsap) {
      result = fn.apply(context, args);
    }
    timeout = setTimeout(delayed, threshold);
    return result;
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ }

});