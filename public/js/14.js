webpackJsonp([14,29],{

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
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

var _d = __webpack_require__(177);

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing(props) {
    _classCallCheck(this, Landing);

    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));

    _this.state = {
      items: []
    };

    !function (e, o, n) {
      window.HSCW = o, window.HS = n, n.beacon = n.beacon || {};var t = n.beacon;t.userConfig = {}, t.readyQueue = [], t.config = function (e) {
        this.userConfig = e;
      }, t.ready = function (e) {
        this.readyQueue.push(e);
      }, o.config = { docs: { enabled: !1, baseUrl: "" }, contact: { enabled: !0, formId: "df61f27b-dcce-11e6-8789-0a5fecc78a4d" } };var r = e.getElementsByTagName("script")[0],
          c = e.createElement("script");c.type = "text/javascript", c.async = !0, c.src = "https://djtflbt20bdde.cloudfront.net/", r.parentNode.insertBefore(c, r);
    }(document, window.HSCW || {}, window.HS || {});
    return _this;
  }

  _createClass(Landing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      d3.json("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmedia.ifrc.org%2Fifrc%2Ftheme%2Fdata%2Ffeed%2F", function (data) {

        console.log(data);

        /*
        *
        *
        *
        * */

        _this2.setState({
          items: data.items
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var t = this.props.t;


      var myRegex = /<img[^>]+src="(http:\/\/[^">]+)"/g;

      this.getImage = function (content) {
        var result = myRegex.exec(content);
        if (result) {
          return result[1];
        } else {
          return "";
        }
      };

      return _react2.default.createElement(
        "section",
        { style: {
            backgroundImage: "url(/img/landing-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto"
          },
          className: "py2"
        },
        _react2.default.createElement(
          "header",
          { className: "block relative px1 pt4 pb1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h1",
                { className: "text-lg sm-text-xl md-text-xxl lh-small light" },
                _react2.default.createElement(
                  "span",
                  { className: "color-primary" },
                  t("landing:titleParts")[0]
                ),
                "\xA0",
                t("landing:titleParts")[1]
              ),
              _react2.default.createElement(
                "p",
                { className: "text-sm md-text-md" },
                t("landing:lead")
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "block relative px1 pb1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h2",
                { className: "text-base color-secondary" },
                " ",
                t("landing:projects.featured")
              ),
              _react2.default.createElement(
                "article",
                { className: "shadow-4", style: {
                    backgroundImage: "url(img/worldmap.jpeg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center"
                  } },
                _react2.default.createElement(
                  "div",
                  { className: "p2", style: {
                      background: "rgba(255,255,255,0.6)"
                    } },
                  _react2.default.createElement(
                    "h1",
                    { className: "text-lg md-text-xl lh-small light m0" },
                    _react2.default.createElement(
                      _LanguageLink2.default,
                      { to: "/fdrs" },
                      t("landing:projects.fdrs.title")
                    )
                  ),
                  _react2.default.createElement(
                    "p",
                    null,
                    t("landing:projects.fdrs.text")
                  ),
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/", className: "btn btn--raised mt1 bg-primary px1" },
                    t("landing:projects.fdrs.navigate")
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "block relative px1 pb1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h2",
                { className: "text-base color-secondary" },
                t("landing:projects.news")
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-6 sm-offset-1 px1" },
              this.state.items.map(function (item, index) {
                return _react2.default.createElement(
                  "div",
                  { key: index, className: "shadow-4 mb2" },
                  _this3.getImage(item.content) !== "" ? _react2.default.createElement("img", { className: "base-12", src: _this3.getImage(item.content), alt: "" }) : "",
                  _react2.default.createElement(
                    "div",
                    { className: "px2 pt1 pb2" },
                    _react2.default.createElement(
                      "h1",
                      { className: "text-md md-text-lg light lh-small" },
                      _react2.default.createElement(
                        "a",
                        { target: "_blank", href: item.link },
                        item.title
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement(
                        "span",
                        null,
                        "By ",
                        item.author
                      ),
                      " | ",
                      _react2.default.createElement(
                        "span",
                        null,
                        item.pubDate.substring(0, item.pubDate.length - 9)
                      ),
                      item.categories ? item.categories.map(function (cat, index) {
                        return _react2.default.createElement(
                          "span",
                          { key: index },
                          " | ",
                          cat,
                          " "
                        );
                      }) : null
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      item.description
                    ),
                    _react2.default.createElement(
                      "a",
                      { target: "_blank", href: item.link, className: "btn btn--raised bg-primary px1" },
                      t("common:readMore")
                    )
                  )
                );
              })
            ),
            _react2.default.createElement(
              "aside",
              { className: "col sm-3 sm-offset-1 px1" },
              _react2.default.createElement(
                "div",
                { className: "relative bg-secondary shadow-4 p2" },
                _react2.default.createElement(
                  "h2",
                  { className: "text-base md-text-md light" },
                  t("landing:about.title")
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("landing:about.text")[0]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  t("landing:about.text")[1]
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Landing;
}(_react2.default.Component);

Landing.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

Landing.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)("landing", { wait: true })(Landing);

/***/ }

});