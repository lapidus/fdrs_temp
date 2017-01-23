webpackJsonp([22,29],{

/***/ 1310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactI18next = __webpack_require__(41);

var _Breadcrumbs = __webpack_require__(1316);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _appActions = __webpack_require__(69);

var _lodash = __webpack_require__(461);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Societies = function (_React$Component) {
  _inherits(Societies, _React$Component);

  function Societies() {
    _classCallCheck(this, Societies);

    return _possibleConstructorReturn(this, (Societies.__proto__ || Object.getPrototypeOf(Societies)).apply(this, arguments));
  }

  _createClass(Societies, [{
    key: "render",
    value: function render() {
      var i18n = this.context.i18n;
      var language = i18n.language;
      var t = this.props.t;

      var societiesPerCol = Math.ceil(this.props.nationalSocieties.length / 3);
      var pageData = i18n.store.data[language]["common"];

      var sortedNationalSocieties = _lodash2.default.sortBy(this.props.nationalSocieties, function (d) {
        return t("national-societies:" + d.KPI_DON_Code);
      });

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(_Breadcrumbs2.default, { links: [{ name: pageData.home, path: "/fdrs" },
          // { name: pageData.navigation[0].name, path: "/fdrs" },
          { name: pageData.navigation[0].dropdownItems[1], path: undefined }] }),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-light px1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-10 sm-offset-1 align-right" },
            _react2.default.createElement(
              "ul",
              { className: "p0 m0" },
              _react2.default.createElement(
                "li",
                { className: "inline-block" },
                _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/fdrs/overview/map", className: "btn block p1 link-no-underline text-left" },
                  _react2.default.createElement(
                    "span",
                    { className: "inline-block" },
                    _react2.default.createElement(
                      "svg",
                      { style: { width: 16, height: 16, marginTop: -1, marginRight: 8 }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                      _react2.default.createElement(
                        "g",
                        { transform: "translate(0, 0)" },
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M5.7,3C6.4,3.5,7,4.1,7.5,5C7.9,5.7,8.9,7.8,8,9c-1,1.3-4,1.8-4,3c0,0.9,1.3,2,2,3c1,1.5,0.6,3,0,4c-0.3,0.5-0.8,0.9-1.3,1.2", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M20.6,5.2C18.5,6.3,15.5,7,15,7c-1,0.1-1.2-0.8-2-2c-0.6-0.9-2-2.1-2-3c0-0.4,0-0.7,0.1-1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                        _react2.default.createElement("circle", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11", strokeLinejoin: "miter" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M19,12.9c0,3.1-4,6.9-6,6.1c-1.8-0.7-0.5-2.1-1-6.1c-0.2-1.6,1.6-3,3.5-3S19,11.2,19,12.9z", strokeLinejoin: "miter", strokeLinecap: "butt" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "inline-block xs-visible" },
                    t("societies:tabs")[0][0],
                    "\xA0"
                  ),
                  t("societies:tabs")[0][1]
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "inline-block" },
                _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/fdrs/societies", className: "btn block p1 bg-white link-no-underline text-left" },
                  _react2.default.createElement(
                    "span",
                    null,
                    _react2.default.createElement(
                      "svg",
                      { style: { width: 16, height: 16, marginTop: -3, marginRight: 8 }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                      _react2.default.createElement(
                        "g",
                        { transform: "translate(0, 0)" },
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M12,23c-2-1.6-2.1-6.8,1-8c1.6-0.6,2.2,2.9,5.4,2c0.6-0.2,2.1,0.7,1.6,2.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M6.3,4.8c0.6,0.5,1.1,1.1,1.6,1.8c0.4,0.7,1.3,2.6,0.5,3.6c-0.9,1.2-3.6,1.6-3.6,2.7c0,0.8,1.2,1.8,1.8,2.7c1,1.4,0.5,2.8,0,3.6c-0.3,0.5-0.7,0.8-1.2,1.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeMiterlimit: "10", d: "M20.2,7.3C21.3,8.9,22,10.9,22,13c0,5.5-4.5,10-10,10S2,18.5,2,13S6.5,3,12,3c0.5,0,1,0,1.5,0.1", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                        _react2.default.createElement("path", { fill: "none", stroke: "#343434", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", d: "M21,5c0,2.5-4,6-4,6s-4-3.5-4-6c0-2.5,2.1-4,4-4S21,2.5,21,5z", strokeLinejoin: "miter" })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "span",
                    { className: "xs-visible" },
                    t("societies:tabs")[1][0],
                    "\xA0"
                  ),
                  t("societies:tabs")[1][1]
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "header",
          { className: "px1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-8 sm-offset-2 px1 py1" },
              _react2.default.createElement(
                "h1",
                { className: "text-md sm-text-lg md-text-xl light m0" },
                t("societies:titleParts")[0],
                "\xA0",
                _react2.default.createElement(
                  "span",
                  { className: "color-primary" },
                  t("societies:titleParts")[1]
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-8 sm-offset-2 px1 pb3" },
              _react2.default.createElement(
                "ul",
                { className: "clearfix mxn1 p0" },
                _react2.default.createElement(
                  "div",
                  { className: "col sm-4 px1" },
                  sortedNationalSocieties.slice(0, societiesPerCol).map(function (society, i) {
                    return _react2.default.createElement(
                      "li",
                      { className: "block py05", key: society.KPI_DON_Code },
                      _react2.default.createElement(
                        _LanguageLink2.default,
                        { to: "/fdrs/societies/" + society.slug },
                        t("national-societies:" + society.KPI_DON_Code)
                      )
                    );
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-4 px1" },
                  sortedNationalSocieties.slice(societiesPerCol, societiesPerCol * 2).map(function (society, i) {
                    return _react2.default.createElement(
                      "li",
                      { className: "block py05", key: society.KPI_DON_Code },
                      _react2.default.createElement(
                        _LanguageLink2.default,
                        { to: "/fdrs/societies/" + society.slug },
                        t("national-societies:" + society.KPI_DON_Code)
                      )
                    );
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-4 px1" },
                  sortedNationalSocieties.slice(societiesPerCol * 2, societiesPerCol * 3).map(function (society, i) {
                    return _react2.default.createElement(
                      "li",
                      { className: "block py05", key: society.KPI_DON_Code },
                      _react2.default.createElement(
                        _LanguageLink2.default,
                        { to: "/fdrs/societies/" + society.slug },
                        t("national-societies:" + society.KPI_DON_Code)
                      )
                    );
                  })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1 bg-beige", style: {
              backgroundImage: "url(/img/overview-preview.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50% auto",
              backgroundPosition: this.context.i18n.language === "ar" ? "center right" : "center left"
            } },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1 py6" },
            _react2.default.createElement(
              "div",
              { className: "col sm-4 sm-offset-6 px1" },
              _react2.default.createElement(
                "p",
                { className: "caps small strong" },
                pageData.overviewPreview.subtitle
              ),
              _react2.default.createElement(
                "h2",
                { className: "headline sm-display-1 light mt0" },
                pageData.overviewPreview.title
              ),
              _react2.default.createElement(
                "p",
                { className: "lead" },
                pageData.overviewPreview.lead
              ),
              _react2.default.createElement(
                _LanguageLink2.default,
                { to: "/fdrs", className: "btn btn--raised bg-primary" },
                _react2.default.createElement(
                  "span",
                  { className: "block py05 px1" },
                  pageData.overviewPreview.button
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1 bg-light", style: {
              backgroundImage: "url(/img/worldmap.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            } },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1 py6", style: { background: "rgba(255,255,255,0.5)" } },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h2",
                { className: "headline sm-display-1 light mt0" },
                pageData.dataCollectors.title
              ),
              _react2.default.createElement(
                "p",
                { className: "lead" },
                pageData.dataCollectors.lead
              ),
              _react2.default.createElement(
                _LanguageLink2.default,
                { to: "/fdrs", className: "btn btn--raised bg-primary" },
                _react2.default.createElement(
                  "span",
                  { className: "block py05 px1" },
                  pageData.dataCollectors.button
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Societies;
}(_react2.default.Component);

Societies.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  nationalSocieties: _react2.default.PropTypes.array
};

Societies.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

Societies.needs = [_appActions.fetchNationalSocieties];

var mapStateToProps = function mapStateToProps(state) {
  return {
    nationalSocieties: state.appReducer.nationalSocieties
  };
};

exports.default = (0, _reactI18next.translate)(["societies", "national-societies"], { wait: true })((0, _reactRedux.connect)(mapStateToProps)(Societies));

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

/***/ })

});