webpackJsonp([1,29],{

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

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debounce = __webpack_require__(1346);

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

/***/ }),

/***/ 1346:
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _Reveal = __webpack_require__(1338);

var _Reveal2 = _interopRequireDefault(_Reveal);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

var _HeadlineDivider = __webpack_require__(1314);

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
        _react2.default.createElement("br", null),
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
          backgroundImage: "url(" + this.props.backgroundImage + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }
      };
      var ratio = this.props.ratio.split(':');
      return _react2.default.createElement(
        "div",
        { className: "ratio-" + ratio[0] + "-" + ratio[1], style: styling.wrapper },
        _react2.default.createElement(
          "div",
          { className: "ratio-content " + (this.props.contentClass || ''), style: styling.content },
          _react2.default.createElement(
            "div",
            { className: "relative t50 y-center-self" },
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

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      var language = this.context.i18n.language;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "text-center overflow-hidden", style: { boxShadow: "inset 0 100px 100px #fff,inset 0 -100px 100px #fff", backgroundImage: "url(/img/ifrc-progress-report-2015-bg.jpg)", backgroundSize: 'cover' } },
          _react2.default.createElement(
            "h1",
            { style: { paddingTop: "96px" }, className: "bg-gradient--white m0 pb4" },
            _react2.default.createElement(
              "div",
              { className: "text-lg sm-text-xl md-text-xxl light" },
              t("report-common:home.title.0"),
              " ",
              _react2.default.createElement(
                "span",
                { className: "color-primary" },
                " ",
                t("report-common:home.title.1")
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "heading-xl sm-heading-xxl md-heading-xxxl color-primary lh-1" },
              t("report-common:home.title.2")
            ),
            _react2.default.createElement(
              "div",
              { className: "text-base sm-text-md md-text-lg" },
              t("report-common:reportType")
            ),
            _react2.default.createElement(
              "div",
              { className: "inline-block pt2", style: { width: '48px' } },
              _react2.default.createElement(_Icon2.default, { name: "down", width: "34px", height: "34px" })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix text-center px1 sm-px0" },
          _react2.default.createElement(
            "div",
            { className: "col xs-8 xs-offset-2 md-6 md-offset-3 pt2 pb3" },
            _react2.default.createElement(
              "p",
              { className: "text-base sm-text-sm" },
              t("report-common:home.intro.0")
            ),
            _react2.default.createElement(
              "p",
              { className: "text-base sm-text-sm" },
              t("report-common:home.intro.1")
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
        ),
        _react2.default.createElement(
          "div",
          { className: "bg-light py4" },
          _react2.default.createElement(
            "div",
            { className: "clearfix px1 sm-px0" },
            _react2.default.createElement(
              "div",
              { className: "col sm-3 sm-offset-2 pb3" },
              _react2.default.createElement(
                "p",
                { className: "text-sm color-primary m0" },
                t("report-common:home.sections.0.id")
              ),
              _react2.default.createElement(
                "h2",
                { className: "text-md sm-text-lg mt0 light" },
                t("report-common:home.sections.0.title")
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null)
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-1.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/who-we-are", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter1.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5 md-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-white overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "usergroup", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xl md-text-xxl m0" },
                      t("report-common:home.sections.0.statistic.number")
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "m0" },
                      t("report-common:home.sections.0.statistic.text")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-white overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      null,
                      t("report-common:home.sections.0.fact")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-2.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/what-we-do", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter2.title")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-3.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/living-our-fundamental-principles", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter3.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5 md-offset-0" },
              _react2.default.createElement(
                "div",
                { className: "relative md-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "md-absolute t0 l0 r0 b0 overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "md-absolute md-t50 l0 md-y-center-self" },
                    _react2.default.createElement(
                      Quote,
                      null,
                      t("report-common:home.sections.0.quote")
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "py4" },
          _react2.default.createElement(
            "div",
            { className: "clearfix px1 sm-px0" },
            _react2.default.createElement(
              "div",
              { className: "col sm-3 sm-offset-2 pb3" },
              _react2.default.createElement(
                "p",
                { className: "text-sm color-primary m0" },
                t("report-common:home.sections.1.id")
              ),
              _react2.default.createElement(
                "h2",
                { className: "text-md sm-text-lg mt0 light" },
                t("report-common:home.sections.1.title")
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null)
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-4.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/who-we-are", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter4.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5 md-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-light overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "usergroup", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xl md-text-xxl m0" },
                      t("report-common:home.sections.1.statistic.number")
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "m0" },
                      t("report-common:home.sections.1.statistic.text")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-light overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      null,
                      t("report-common:home.sections.1.fact")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-5.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/what-we-do", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter5.title")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-6.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/living-our-fundamental-principles", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter6.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5 md-offset-0" },
              _react2.default.createElement(
                "div",
                { className: "relative md-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "md-absolute t0 l0 r0 b0 overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "md-absolute md-t50 l0 md-y-center-self" },
                    _react2.default.createElement(
                      Quote,
                      null,
                      t("report-common:home.sections.1.quote")
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "bg-light py4" },
          _react2.default.createElement(
            "div",
            { className: "clearfix px1 sm-px0" },
            _react2.default.createElement(
              "div",
              { className: "col sm-3 sm-offset-2 pb3" },
              _react2.default.createElement(
                "p",
                { className: "text-sm color-primary m0" },
                t("report-common:home.sections.2.id")
              ),
              _react2.default.createElement(
                "h2",
                { className: "text-md sm-text-lg mt0 light" },
                t("report-common:home.sections.2.title")
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null)
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-7.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/enabling-action-1", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter7.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5 md-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-white overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "usergroup", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      { className: "text-xl md-text-xxl m0" },
                      t("report-common:home.sections.2.statistic.number")
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "m0" },
                      t("report-common:home.sections.2.statistic.text")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 bg-white overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1" },
                    _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
                    _react2.default.createElement(
                      "p",
                      null,
                      t("report-common:home.sections.2.fact")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-1-1 md-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-8.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/enabling-action-2", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter8.title")
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix px1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5" },
              _react2.default.createElement(
                "div",
                { className: "relative sm-ratio-10-6", style: {
                    backgroundImage: "url(/img/chapters/chapter-9.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted",
                    style: { background: "rgba(0,0,0,0.3)" }
                  },
                  _react2.default.createElement(
                    "div",
                    { className: "sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs/report/enabling-action-3", className: "text-md md-text-lg lh-small" },
                      t("report-common:chapters.chapter9.title")
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 md-5 md-offset-0" },
              _react2.default.createElement(
                "div",
                { className: "relative md-ratio-1-1" },
                _react2.default.createElement(
                  "div",
                  { className: "md-absolute t0 l0 r0 b0 overflow-hidden" },
                  _react2.default.createElement(
                    "div",
                    { className: "md-absolute md-t50 l0 md-y-center-self" },
                    _react2.default.createElement(
                      Quote,
                      null,
                      t("report-common:home.sections.2.quote")
                    )
                  )
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

Home.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

Home.contextTypes = {
  i18n: _react2.default.PropTypes.object
};

exports.default = (0, _reactI18next.translate)()(Home);

/***/ })

});