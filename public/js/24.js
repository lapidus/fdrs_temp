webpackJsonp([24,29],{

/***/ 1303:
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

var _Breadcrumbs = __webpack_require__(1316);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _reactI18next = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Download = function (_React$Component) {
  _inherits(Download, _React$Component);

  function Download() {
    _classCallCheck(this, Download);

    return _possibleConstructorReturn(this, (Download.__proto__ || Object.getPrototypeOf(Download)).apply(this, arguments));
  }

  _createClass(Download, [{
    key: "render",
    value: function render() {
      var t = this.props.t;
      var language = this.context.i18n.language;

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(_Breadcrumbs2.default, { links: [{ name: t("common:breadcrumbs." + "Home"), path: "/fdrs" }, { name: t("common:breadcrumbs." + "Data download"), path: undefined }] }),
        _react2.default.createElement(
          "div",
          { className: "px1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "header",
              { className: "col sm-6 sm-offset-3 px1 pt1" },
              _react2.default.createElement(
                "h1",
                { className: "text-md sm-text-lg md-text-xl light m0" },
                t("data-download:title"),
                " "
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1 pb4" },
            _react2.default.createElement(
              "div",
              { className: "col sm-6 sm-offset-3 px1 pt1" },
              _react2.default.createElement(
                "p",
                { className: "text-base sm-text-sm md-text-md" },
                t("data-download:intro")
              ),
              _react2.default.createElement(
                "a",
                { href: "/api/indicators/time_series.csv", className: "btn bg-primary link-no-underline px1" },
                _react2.default.createElement(
                  "span",
                  null,
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
                  )
                ),
                t("data-download:csv")
              )
            )
          )
        )
      );
    }
  }]);

  return Download;
}(_react2.default.Component);

Download.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

Download.contextTypes = {
  i18n: _react2.default.PropTypes.object
};

exports.default = (0, _reactI18next.translate)("data-download")(Download);

/***/ },

/***/ 1316:
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

/***/ }

});