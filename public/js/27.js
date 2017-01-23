webpackJsonp([27,26],{

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(75);

var _reactI18next = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Landing = function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing() {
    _classCallCheck(this, Landing);

    return _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).apply(this, arguments));
  }

  _createClass(Landing, [{
    key: "render",
    value: function render() {
      var t = this.props.t;


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
          { className: "block relative px1 py4" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h1",
                { className: "display-1 sm-display-2 md-display-3 light m0" },
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
                { className: "lead" },
                t("landing:lead")
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "block relative px1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "div",
                { className: "clearfix mxn1" },
                _react2.default.createElement(
                  "div",
                  { className: "col sm-8 px1" },
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix mxn1" },
                    _react2.default.createElement(
                      "div",
                      { className: "col sm-12 md-6 px1 pb2" },
                      _react2.default.createElement(
                        "div",
                        { className: "relative ratio-3-2" },
                        _react2.default.createElement(
                          "article",
                          { className: "ratio-content shadow-4 p2" },
                          _react2.default.createElement(
                            "h1",
                            { className: "headline m0" },
                            _react2.default.createElement(
                              _reactRouter.Link,
                              { to: "/fdrs" },
                              t("landing:projects.fdrs.title")
                            )
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            t("landing:projects.fdrs.text")
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col sm-12 md-6 px1 pb2" },
                      _react2.default.createElement(
                        "div",
                        { className: "relative ratio-3-2" },
                        _react2.default.createElement(
                          "article",
                          { className: "ratio-content shadow-4 p2" },
                          _react2.default.createElement(
                            "h1",
                            { className: "headline m0" },
                            t("landing:projects.go.title")
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            t("landing:projects.go.text")
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col sm-12 md-6 px1 pb2" },
                      _react2.default.createElement(
                        "div",
                        { className: "relative ratio-3-2" },
                        _react2.default.createElement(
                          "article",
                          { className: "ratio-content shadow-4 p2" },
                          _react2.default.createElement(
                            "h1",
                            { className: "headline m0" },
                            t("landing:projects.literacy.title")
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            t("landing:projects.literacy.text")
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col sm-12 md-6 px1 pb2" },
                      _react2.default.createElement(
                        "div",
                        { className: "relative ratio-3-2" },
                        _react2.default.createElement(
                          "article",
                          { className: "ratio-content shadow-4 p2" },
                          _react2.default.createElement(
                            "h1",
                            { className: "headline m0" },
                            t("landing:projects.dref.title")
                          ),
                          _react2.default.createElement(
                            "p",
                            null,
                            t("landing:projects.dref.text")
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-4 px1" },
                  _react2.default.createElement(
                    "div",
                    { className: "relative ratio-1-1" },
                    _react2.default.createElement(
                      "article",
                      { className: "ratio-content shadow-4 bg-beige p2" },
                      _react2.default.createElement(
                        "h1",
                        { className: "headline m0" },
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