webpackJsonp([20,29],{

/***/ 1323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _reactI18next = __webpack_require__(41);

var _LanguageLink = __webpack_require__(176);

var _LanguageLink2 = _interopRequireDefault(_LanguageLink);

var _reactSelect = __webpack_require__(70);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reduxTooltip = __webpack_require__(130);

var _Breadcrumbs = __webpack_require__(1330);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _selectors = __webpack_require__(1334);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overview = function (_React$Component) {
  _inherits(Overview, _React$Component);

  function Overview() {
    _classCallCheck(this, Overview);

    return _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
  }

  _createClass(Overview, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _context = this.context,
          i18n = _context.i18n,
          router = _context.router;
      var t = this.props.t;


      var pageData = i18n.store.data[i18n.language]["common"];

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(_Breadcrumbs2.default, { links: [{ name: pageData.home, path: "/fdrs" },
          // { name: "Home", path: "/fdrs" },
          { name: pageData.navigation[0].dropdownItems[0], path: undefined }] }),
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
                  { to: "/fdrs/overview/map", className: "btn block p1 bg-white link-no-underline text-left" },
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
                    t("overview:tabs")[0][0],
                    "\xA0"
                  ),
                  t("overview:tabs")[0][1]
                )
              ),
              _react2.default.createElement(
                "li",
                { className: "inline-block" },
                _react2.default.createElement(
                  _LanguageLink2.default,
                  { to: "/fdrs/societies", className: "btn block p1 link-no-underline text-left" },
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
                    t("overview:tabs")[1][0],
                    "\xA0"
                  ),
                  t("overview:tabs")[1][1]
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
              "header",
              { className: "col sm-10 sm-offset-1 md-8 md-offset-3 px1 py1" },
              _react2.default.createElement(
                "h1",
                { className: "color-primary strong m0 text-base" },
                t("overview:title")
              ),
              _react2.default.createElement(
                "div",
                { className: "relative" },
                _react2.default.createElement(
                  "div",
                  { className: "sm-9 select-xl select-no-underline select-no-scroll mxn3" },
                  _react2.default.createElement(_reactSelect2.default, {
                    searchable: false,
                    clearable: false,
                    value: this.props.currentIndicator,
                    placeholder: "Whaddup",
                    multi: false,
                    name: "ns-selector",
                    valueRenderer: function valueRenderer(option) {
                      return _react2.default.createElement(
                        "span",
                        { className: "text-md sm-text-lg md-text-xl light" },
                        pageData.indicators[option.value].name
                      );
                    },
                    options: Object.keys(pageData.indicators).map(function (indicatorKey) {
                      return {
                        value: indicatorKey,
                        label: pageData.indicators[indicatorKey].name
                      };
                    }),
                    optionRenderer: function optionRenderer(option) {
                      return _react2.default.createElement(
                        "span",
                        { className: "text-base" },
                        pageData.indicators[option.value].name
                      );
                    },
                    onChange: function onChange(indicator) {
                      return _this2.props.setIndicator(indicator.value);
                    }
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "absolute t50 " + (this.context.i18n.language === "ar" ? "l0" : "r0") + " y-center-self" },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/overview/map", className: "relative btn" },
                    _react2.default.createElement(
                      "span",
                      { className: "small strong caps" },
                      t("overview:map")
                    ),
                    _react2.default.createElement("span", { className: "absolute b0 l0 base-12  " + (this.props.location.pathname == "/fdrs/overview/map" ? 'bg-primary' : 'bg-secondary'), style: { height: 4 } })
                  ),
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/overview/table", className: "relative btn" },
                    _react2.default.createElement(
                      "span",
                      { className: "small strong caps" },
                      t("overview:table")
                    ),
                    _react2.default.createElement("span", { className: "absolute b0 l0 base-12  " + (this.props.location.pathname == "/fdrs/overview/table" ? 'bg-primary' : 'bg-secondary'), style: { height: 4 } })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement("hr", { className: "mb2" }),
        this.props.children,
        _react2.default.createElement(
          "div",
          { className: "bg-light px1 py05" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement("div", { className: "col sm-10 sm-offset-1 px1" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1 bg-beige", style: {
              backgroundImage: "url(/img/profiles-preview.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50% auto",
              backgroundPosition: this.context.i18n.language === "ar" ? "center right" : "center left"
            } },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1 py4" },
            _react2.default.createElement(
              "div",
              { className: "col sm-4 sm-offset-6 px1" },
              _react2.default.createElement(
                "p",
                { className: "caps small strong" },
                pageData.nationalSocietiesPreview.subtitle
              ),
              _react2.default.createElement(
                "h2",
                { className: "headline sm-display-1 light mt0" },
                pageData.nationalSocietiesPreview.title
              ),
              _react2.default.createElement(
                "p",
                { className: "lead" },
                pageData.nationalSocietiesPreview.lead
              ),
              _react2.default.createElement(
                _LanguageLink2.default,
                { to: "/fdrs", className: "btn btn--raised bg-primary" },
                _react2.default.createElement(
                  "span",
                  { className: "block py05 px1" },
                  pageData.nationalSocietiesPreview.button
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

  return Overview;
}(_react2.default.Component);

Overview.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

Overview.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  nationalSocieties: _react2.default.PropTypes.array,
  timeSeriesMeta: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.array,
  grouping: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object.isRequired,
  currentIndicator: _react2.default.PropTypes.string,
  showTooltip: _react2.default.PropTypes.func,
  hideTooltip: _react2.default.PropTypes.func,
  setIndicator: _react2.default.PropTypes.func,
  switchIndicator: _react2.default.PropTypes.func
};

Overview.needs = [_appActions.fetchNationalSocieties, _appActions.fetchTimeSeries, _appActions.fetchTimeSeriesMeta];

var makeMapStateToProps = function makeMapStateToProps() {
  var groupTimeSeriesByYear = (0, _selectors.makeGroupTimeSeriesByYear)();
  return function (state, props) {
    return {
      grouping: groupTimeSeriesByYear(state, props),
      nationalSocieties: state.appReducer.nationalSocieties,
      timeSeriesMeta: state.appReducer.timeSeriesMeta,
      data: state.appReducer.timeSeries,
      currentIndicator: state.appReducer.currentIndicator
    };
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showTooltip: function showTooltip(content, evt) {
      return dispatch((0, _appActions.showTooltip)(content, evt));
    },
    hideTooltip: function hideTooltip() {
      return dispatch((0, _appActions.hideTooltip)());
    },
    setIndicator: function setIndicator(indicator) {
      return dispatch((0, _appActions.setIndicator)(indicator));
    },
    switchYear: function switchYear(year) {
      return dispatch((0, _appActions.switchYear)(year));
    }
  };
};

exports.default = (0, _reactI18next.translate)("overview", { wait: true })((0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps)(Overview));

/***/ },

/***/ 1330:
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

/***/ },

/***/ 1331:
/***/ function(module, exports, __webpack_require__) {

var convert = __webpack_require__(532),
    func = convert('filter', __webpack_require__(537));

func.placeholder = __webpack_require__(308);
module.exports = func;


/***/ },

/***/ 1334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGroupTimeSeriesBySociety = exports.makeGroupTimeSeriesByYear = exports.makeGetIndicatorData = exports.makeGetSocietyDocuments = exports.makeGetSocietyData = exports.makeGetSociety = undefined;

var _reselect = __webpack_require__(311);

var _filter = __webpack_require__(1331);

var _filter2 = _interopRequireDefault(_filter);

var _find = __webpack_require__(1335);

var _find2 = _interopRequireDefault(_find);

var _map = __webpack_require__(535);

var _map2 = _interopRequireDefault(_map);

var _groupBy = __webpack_require__(534);

var _groupBy2 = _interopRequireDefault(_groupBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nsIdProp = "KPI_DON_Code";
var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var emptyFilter = function emptyFilter(id, data) {
  return (0, _filter2.default)(function (d) {
    return isNumeric(d[id]);
  }, data);
};

// selectors
var getSociety = function getSociety(state, props) {
  return (0, _find2.default)(function (s) {
    return s.slug === props.params.id;
  }, state.appReducer.nationalSocieties);
};

var getDocuments = function getDocuments(state) {
  return state.appReducer.documents;
};

var getData = function getData(state) {
  return state.appReducer.timeSeries;
};

var getIndicatorData = function getIndicatorData(state, _ref) {
  var indicator = _ref.indicator;
  return (0, _map2.default)(function (d) {
    var _ref2;

    return _ref2 = {}, _defineProperty(_ref2, nsIdProp, d[nsIdProp]), _defineProperty(_ref2, "value", +d[indicator.id]), _defineProperty(_ref2, "year", +d.KPI_Year), _ref2;
  }, emptyFilter(indicator.id, state.appReducer.timeSeries));
};

var groupTimeSeriesByYear = function groupTimeSeriesByYear(state) {
  return (0, _groupBy2.default)(state.appReducer.timeSeries, "KPI_Year");
};
var groupTimeSeriesBySociety = function groupTimeSeriesBySociety(state) {
  return (0, _groupBy2.default)(state.appReducer.timeSeries, "KPI_DON_Code");
};

// exported selector generators, so they can use props
// and still utilise memoization
var makeGetSociety = exports.makeGetSociety = function makeGetSociety() {
  return (0, _reselect.createSelector)(getSociety, function (society) {
    return society;
  });
};

var makeGetSocietyData = exports.makeGetSocietyData = function makeGetSocietyData() {
  return (0, _reselect.createSelector)([getData, getSociety], function (data, society) {
    return (0, _filter2.default)(function (d) {
      return d[nsIdProp] === society[nsIdProp];
    }, data);
  });
};

var makeGetSocietyDocuments = exports.makeGetSocietyDocuments = function makeGetSocietyDocuments() {
  return (0, _reselect.createSelector)([getDocuments, getSociety], function (documents, society) {

    // const ns = society.iso_2 !== "#N/A" ? (find(d => d.code === society.iso_2, documents) || {}) : {}
    // return ns.documents || []

    // I think we tried to solve the same thing here... ;) See above
    if ((0, _find2.default)(function (d) {
      return d.code === society.iso_2;
    }, documents) == undefined || society.iso_2 == "#N/A") {
      return [];
    }
    return (0, _find2.default)(function (d) {
      return d.code === society.iso_2;
    }, documents).documents;
  });
};

var makeGetIndicatorData = exports.makeGetIndicatorData = function makeGetIndicatorData() {
  return (0, _reselect.createSelector)(getIndicatorData, function (data) {
    return data;
  });
};

var makeGroupTimeSeriesByYear = exports.makeGroupTimeSeriesByYear = function makeGroupTimeSeriesByYear() {
  return (0, _reselect.createSelector)(groupTimeSeriesByYear, function (data) {
    return data;
  });
};

var makeGroupTimeSeriesBySociety = exports.makeGroupTimeSeriesBySociety = function makeGroupTimeSeriesBySociety() {
  return (0, _reselect.createSelector)(groupTimeSeriesBySociety, function (data) {
    return data;
  });
};

/***/ },

/***/ 1335:
/***/ function(module, exports, __webpack_require__) {

var convert = __webpack_require__(532),
    func = convert('find', __webpack_require__(1338));

func.placeholder = __webpack_require__(308);
module.exports = func;


/***/ },

/***/ 1337:
/***/ function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(87),
    isArrayLike = __webpack_require__(33),
    keys = __webpack_require__(42);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ },

/***/ 1338:
/***/ function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(1337),
    findIndex = __webpack_require__(1339);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ },

/***/ 1339:
/***/ function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(536),
    baseIteratee = __webpack_require__(87),
    toInteger = __webpack_require__(178);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }

});