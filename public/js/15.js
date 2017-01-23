webpackJsonp([15,29],{

/***/ 1311:
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

var _reactSelect = __webpack_require__(70);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _minBy = __webpack_require__(1331);

var _minBy2 = _interopRequireDefault(_minBy);

var _maxBy = __webpack_require__(1330);

var _maxBy2 = _interopRequireDefault(_maxBy);

var _max = __webpack_require__(534);

var _max2 = _interopRequireDefault(_max);

var _map = __webpack_require__(531);

var _map2 = _interopRequireDefault(_map);

var _filter = __webpack_require__(1317);

var _filter2 = _interopRequireDefault(_filter);

var _uniqBy = __webpack_require__(1347);

var _uniqBy2 = _interopRequireDefault(_uniqBy);

var _sortBy = __webpack_require__(309);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _Icon = __webpack_require__(528);

var _Icon2 = _interopRequireDefault(_Icon);

var _reactI18next = __webpack_require__(41);

var _LineChart = __webpack_require__(1319);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _ShareBtn = __webpack_require__(1345);

var _ShareBtn2 = _interopRequireDefault(_ShareBtn);

var _Breadcrumbs = __webpack_require__(1316);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Globe = __webpack_require__(1350);

var _Globe2 = _interopRequireDefault(_Globe);

var _Card = __webpack_require__(1341);

var _Card2 = _interopRequireDefault(_Card);

var _CardView = __webpack_require__(1343);

var _CardView2 = _interopRequireDefault(_CardView);

var _CardOverlay = __webpack_require__(1342);

var _CardOverlay2 = _interopRequireDefault(_CardOverlay);

var _GeneratedIntroText = __webpack_require__(1337);

var _GeneratedIntroText2 = _interopRequireDefault(_GeneratedIntroText);

var _FilteredSocietiesSidebar = __webpack_require__(1336);

var _FilteredSocietiesSidebar2 = _interopRequireDefault(_FilteredSocietiesSidebar);

var _selectors = __webpack_require__(1320);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function roundIt(n) {
  var sansDecimal = Math.round(Number(n));
  var factor = Math.pow(10, String(sansDecimal).length - 1);
  return Math.ceil(n / factor) * factor;
}

function getLatestYearDocuments(props) {
  var latestDocuments = (0, _maxBy2.default)(props.documents, function (d) {
    return +d.year;
  });
  return latestDocuments ? +latestDocuments.year : undefined;
}

function missingDataString(dataType, countryName, year) {
  return "There is no " + dataType + " data available for " + countryName + " for " + year;
}

var Society = function (_React$Component) {
  _inherits(Society, _React$Component);

  function Society(props, context) {
    _classCallCheck(this, Society);

    var _this = _possibleConstructorReturn(this, (Society.__proto__ || Object.getPrototypeOf(Society)).call(this, props, context));

    var selectedCountry = {};
    selectedCountry[props.society.iso_3] = { fillKey: "red" };

    _this.state = {
      lastLanguage: _this.context.i18n.language,
      currentLanguage: _this.context.i18n.language,
      year: getLatestYearDocuments(props),
      earliestData: (0, _minBy2.default)(props.data, function (o) {
        return o.KPI_Year;
      }),
      latestData: (0, _maxBy2.default)(props.data, function (o) {
        return o.KPI_Year;
      }),
      filteredDocuments: (0, _sortBy2.default)((0, _filter2.default)(function (d) {
        return +d.year === +getLatestYearDocuments(props);
      }, props.documents), function (o) {
        return Number(o.year);
      }),
      latestPopulationData: (0, _maxBy2.default)(props.data, function (o) {
        return o.Population ? o.KPI_Year : 0;
      }),
      latestGDPData: (0, _maxBy2.default)(props.data, function (o) {
        return o.GDP ? o.KPI_Year : 0;
      }),
      latestPovertyData: (0, _maxBy2.default)(props.data, function (o) {
        return o.Poverty ? o.KPI_Year : 0;
      })
    };

    _this.handleYearChange = _this.handleYearChange.bind(_this);
    _this.getParsed = _this.getParsed.bind(_this);
    _this.yearFilter = _this.yearFilter.bind(_this);
    _this.yearOption = _this.yearOption.bind(_this);
    _this.yearOptions = _this.yearOptions.bind(_this);
    return _this;
  }

  _createClass(Society, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.classList.add("html-ready");
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //   const didYearChange = nextState.year !== this.state.year
    //   const didSocietyChange = nextProps.society.iso_2 !== this.props.society.iso_2
    //   return didYearChange || didSocietyChange || didLanguageChange
    // }

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.society.iso_2 !== nextProps.society.iso_2) {
        this.setState({
          year: getLatestYearDocuments(nextProps),
          earliestData: (0, _minBy2.default)(nextProps.data, function (o) {
            return o.KPI_Year;
          }),
          latestData: (0, _maxBy2.default)(nextProps.data, function (o) {
            return o.KPI_Year;
          }),
          // filteredDocuments: filter(d => +d.year === +getLatestYearDocuments(nextProps), nextProps.documents),
          filteredDocuments: (0, _sortBy2.default)((0, _filter2.default)(function (d) {
            return +d.year === +getLatestYearDocuments(nextProps);
          }, nextProps.documents), function (o) {
            return Number(o.year);
          }),
          latestPopulationData: (0, _maxBy2.default)(nextProps.data, function (o) {
            return o.Population ? o.KPI_Year : 0;
          }),
          latestGDPData: (0, _maxBy2.default)(nextProps.data, function (o) {
            return o.GDP ? o.KPI_Year : 0;
          }),
          latestPovertyData: (0, _maxBy2.default)(nextProps.data, function (o) {
            return o.Poverty ? o.KPI_Year : 0;
          })
        });
      }
    }
  }, {
    key: "handleYearChange",
    value: function handleYearChange(year) {
      this.setState({
        year: year.value,
        // filteredDocuments: filter(d => +d.year === +year.value, this.props.documents),
        filteredDocuments: (0, _sortBy2.default)((0, _filter2.default)(function (d) {
          return +d.year === +year.value;
        }, this.props.documents), function (o) {
          return Number(o.year);
        })
      });
    }
  }, {
    key: "getParsed",
    value: function getParsed(v) {
      var m = v.match(/\d+/g);
      return !m ? 0 : v.search(m[0]) === 1 ? -m[0] : +m[0];
    }
  }, {
    key: "yearFilter",
    value: function yearFilter(year) {
      return function (d) {
        return +d.year === +year;
      };
    }
  }, {
    key: "yearOption",
    value: function yearOption(d) {
      return { value: +d.year, label: d.year };
    }
  }, {
    key: "yearOptions",
    value: function yearOptions() {
      return (0, _uniqBy2.default)("value", (0, _map2.default)(this.yearOption, this.props.documents));
    }
  }, {
    key: "render",
    value: function render() {

      // <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>

      var _state = this.state,
          year = _state.year,
          earliestData = _state.earliestData,
          latestData = _state.latestData;
      var _props = this.props,
          society = _props.society,
          data = _props.data,
          timeSeriesMeta = _props.timeSeriesMeta,
          t = _props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var pageData = i18n.store.data[language]["common"];

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(_Breadcrumbs2.default, { links: [{ name: pageData.breadcrumbs["Home"], path: "/fdrs/" }, { name: pageData.navigation[0].dropdownItems[1], path: "/fdrs/societies" }, { name: t("national-societies:" + society.KPI_DON_Code), path: undefined }] }),
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
                  { to: "/fdrs/societies", className: "btn block p1 link-no-underline bg-white text-left" },
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
          "div",
          { className: "px1" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "header",
              { className: "col sm-8 sm-offset-3 px1 py1" },
              _react2.default.createElement(
                "p",
                { className: "color-primary strong m0 text-base" },
                society.NSO_ZON_name
              ),
              _react2.default.createElement(
                "h1",
                { className: "text-md sm-text-lg md-text-xl light m0" },
                t("national-societies:" + society.KPI_DON_Code)
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "aside",
              { className: "col sm-3 px1 sm-visible" },
              _react2.default.createElement(_FilteredSocietiesSidebar2.default, {
                nationalSocieties: this.props.nationalSocieties,
                title: t("societies:nationalSocieties"),
                filterPlaceholder: t("societies:searchPlaceholder"),
                noSocietiesText: t("societies:noSocieties")
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col sm-9 md-8 px1" },
              _react2.default.createElement(
                "div",
                { className: "clearfix mxn1 pb2" },
                _react2.default.createElement(
                  "div",
                  { className: "col sm-8 px1 pb1" },
                  _react2.default.createElement(
                    "p",
                    { className: "text-base sm-text-sm" },
                    _react2.default.createElement(_GeneratedIntroText2.default, {
                      society: society,
                      admissionDate: society.admission_date.split(".")[2],
                      latestData: latestData,
                      earliestData: earliestData,
                      translationText: t("societies:generatedText")
                    })
                  ),
                  _react2.default.createElement(
                    "p",
                    { className: "text-base sm-text-sm" },
                    t("societies:fillerText")[0],
                    " " + earliestData.KPI_Year + " ",
                    t("societies:fillerText")[1]
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "clearfix" },
                    _react2.default.createElement(
                      "div",
                      { className: "left shadow-3" },
                      _react2.default.createElement(
                        "a",
                        { target: "_blank", href: "/fdrs/societies/" + society.slug + ".pdf", className: "btn link-no-underline px1" },
                        "Download PDF"
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "right shadow-3" },
                      _react2.default.createElement(
                        "a",
                        { href: "https://twitter.com/intent/tweet?text=Society Profile&hashtags=IFRC,FDRS" },
                        _react2.default.createElement(_ShareBtn2.default, { service: "twitter" })
                      ),
                      _react2.default.createElement(_ShareBtn2.default, { service: "facebook" }),
                      _react2.default.createElement(_ShareBtn2.default, { service: "mail" })
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col base-8 base-offset-2 xs-6 xs-offset-3 sm-4 sm-offset-0 px1" },
                  _react2.default.createElement(_Globe2.default, {
                    selectedCountryName: t("countries:" + society.iso_2),
                    selectedCountry: society.iso_2,
                    center: [this.getParsed(society.lat), this.getParsed(society.long)]
                  })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "clearfix mxn1 pb2" },
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { indicator: "KPI_noPeopleVolunteering" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("common:indicators.KPI_noPeopleVolunteering.name")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16
                          },
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, roundIt((0, _maxBy2.default)(data, function (d) {
                              return +d.KPI_noPeopleVolunteering || 0;
                            }).KPI_noPeopleVolunteering)]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleVolunteering) || null
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(latestData.KPI_noPeopleVolunteering)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.KPI_noPeopleVolunteering.name") + (", " + society.NSO_DON_name + " in " + latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.KPI_noPeopleVolunteering.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.KPI_noPeopleVolunteering.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { bgColor: "bg-beige", basicCard: true, controlsVisible: (0, _niceNum2.default)(this.state.latestPopulationData.Population, 2) !== "N/A" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      (0, _niceNum2.default)(this.state.latestPopulationData.Population, 2) !== "N/A" ? _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestPopulationData.Population)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.Population.name") + (", " + t("countries:" + society.iso_2) + ", " + this.state.latestPopulationData.KPI_Year)
                        )
                      ) : _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestPopulationData.Population)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          missingDataString("population", t("countries:" + society.iso_2), latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        (0, _niceNum2.default)(latestData.Population, 2) == "N/A" ? missingDataString("population", t("countries:" + society.iso_2), latestData.KPI_Year) : t("common:indicators.Population.definition") + "."
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.Population.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-12 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { indicator: "KPI_noLocalUnits" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("common:indicators.KPI_noLocalUnits.name")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16
                          },
                          tickCount: function () {
                            var domainValue = roundIt((0, _maxBy2.default)(data, function (d) {
                              return +d.KPI_noLocalUnits || 0;
                            }).KPI_noLocalUnits);
                            return domainValue === 1 ? 2 : 3;
                          }(),
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, function () {
                              var domainValue = roundIt((0, _maxBy2.default)(data, function (d) {
                                return +d.KPI_noLocalUnits || 0;
                              }).KPI_noLocalUnits);
                              return domainValue === 1 ? 2 : domainValue;
                            }()]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: function () {
                                return d.KPI_noLocalUnits ? Number(d.KPI_noLocalUnits) : null;
                              }()
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(latestData.KPI_noLocalUnits)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.KPI_noLocalUnits.name") + (", " + society.NSO_DON_name + ",  " + latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.KPI_noLocalUnits.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.KPI_noLocalUnits.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-12 lg-8 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    null,
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".name") + " and " + t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".name")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 50,
                            right: 16
                          },
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, roundIt(Number((0, _maxBy2.default)(data, function (d) {
                              return Number(d["KPI_IncomeLC (CHF)"]) || 0;
                            })["KPI_IncomeLC (CHF)"]))]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d["KPI_expenditureLC (CHF)"]) || null
                            };
                          }), data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d["KPI_IncomeLC (CHF)"]) || null
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "div",
                          { className: "clearfix mxn1" },
                          _react2.default.createElement(
                            "div",
                            { className: "col sm-6 px1" },
                            _react2.default.createElement(
                              "p",
                              { className: "text-md sm-text-lg md-text-xl strong m0" },
                              (0, _niceNum2.default)(latestData["KPI_IncomeLC (CHF)"])
                            ),
                            _react2.default.createElement(
                              "p",
                              { className: "m0" },
                              t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".name") + (", " + society.NSO_DON_name + " in " + latestData.KPI_Year)
                            )
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "col sm-6 px1" },
                            _react2.default.createElement(
                              "p",
                              { className: "text-md sm-text-lg md-text-xl strong m0" },
                              (0, _niceNum2.default)(latestData["KPI_expenditureLC (CHF)"])
                            ),
                            _react2.default.createElement(
                              "p",
                              { className: "m0" },
                              t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".name") + (", " + society.NSO_DON_name + " in " + latestData.KPI_Year)
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { indicator: "KPI_noPaidStaff" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("common:indicators.KPI_noPaidStaff.name")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16
                          },
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, roundIt((0, _maxBy2.default)(data, function (d) {
                              return +d.KPI_noPaidStaff || 0;
                            }).KPI_noPaidStaff)]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: function () {
                                return d.KPI_noPaidStaff ? Number(d.KPI_noPaidStaff) : null;
                              }()
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(latestData.KPI_noPaidStaff)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.KPI_noPaidStaff.definition") + (", " + society.NSO_DON_name + " in " + latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.KPI_noPaidStaff.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.KPI_noPaidStaff.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { initialView: 0, bgColor: "bg-beige", basicCard: true, controlsVisible: (0, _niceNum2.default)(this.state.latestPovertyData.Poverty) !== "N/A" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      (0, _niceNum2.default)(this.state.latestPovertyData.Poverty) !== "N/A" ? _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestPovertyData.Poverty),
                          "%"
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.Poverty.name") + (", " + t("countries:" + society.iso_2) + ", " + this.state.latestPovertyData.KPI_Year)
                        )
                      ) : _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestPovertyData.Poverty)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          missingDataString("poverty", t("countries:" + society.iso_2), latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.Poverty.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.Poverty.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-12 lg-8 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    null,
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("societies:peopleReached")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 50,
                            right: 16
                          },
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, roundIt(function () {
                              var highestValues = data.map(function (d) {
                                var values = [Number(d.KPI_noPeopleReachedHealth), Number(d.KPI_noPeopleReachedDisaster), Number(d.KPI_noPeopleReachedAllServices), Number(d.KPI_noPeopleReachedDevelopment), Number(d.KPI_noPeopleCoveredPreparedness)];
                                return (0, _max2.default)(values);
                              });
                              return (0, _max2.default)(highestValues);
                            }())]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDisaster) || null
                            };
                          }), data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedAllServices) || null
                            };
                          }), data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedHealth) || null
                            };
                          }), data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDevelopment) || null
                            };
                          }), data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleCoveredPreparedness) || null
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      "View 1"
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.KPI_noPeopleReachedAllServices.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.KPI_noPeopleReachedAllServices.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { indicator: "KPI_noPeopleDonatingBlood" },
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "lineChart" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "h1",
                          { className: "text-base mt0 mb1" },
                          t("common:indicators.KPI_noPeopleDonatingBlood.name")
                        ),
                        _react2.default.createElement(_LineChart2.default, {
                          height: 150,
                          padding: {
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16
                          },
                          domain: {
                            x: [new Date(earliestData.KPI_Year, 1, 1), new Date(latestData.KPI_Year, 1, 1)],
                            y: [0, roundIt((0, _maxBy2.default)(data, function (d) {
                              return +d.KPI_noPeopleDonatingBlood || 0;
                            }).KPI_noPeopleDonatingBlood)]
                          },
                          dataset: [data.map(function (d) {
                            return {
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleDonatingBlood) || null
                            };
                          })]
                        })
                      )
                    ),
                    _react2.default.createElement(
                      _CardView2.default,
                      { viewIcon: "plainNumber" },
                      _react2.default.createElement(
                        "div",
                        { className: "p1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(latestData.KPI_noPeopleDonatingBlood)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.KPI_noPeopleDonatingBlood.name") + (", " + society.NSO_DON_name + " in " + latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.KPI_noPeopleDonatingBlood.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.KPI_noPeopleDonatingBlood.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { bgColor: "bg-beige", basicCard: true, controlsVisible: (0, _niceNum2.default)(this.state.latestGDPData.GDP) !== "N/A" },
                    _react2.default.createElement(
                      _CardView2.default,
                      null,
                      (0, _niceNum2.default)(this.state.latestGDPData.GDP) !== "N/A" ? _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-xs strong m0" },
                          (0, _niceNum2.default)(this.state.latestGDPData.GDP) === "N/A" ? "" : "USD"
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestGDPData.GDP)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("common:indicators.GDP.name") + (", " + t("countries:" + society.iso_2) + ", " + this.state.latestGDPData.KPI_Year)
                        )
                      ) : _react2.default.createElement(
                        "div",
                        { className: "pt3 px1" },
                        _react2.default.createElement(
                          "p",
                          { className: "text-md sm-text-lg md-text-xl strong m0" },
                          (0, _niceNum2.default)(this.state.latestGDPData.GDP)
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          missingDataString("gbp", t("countries:" + society.iso_2), latestData.KPI_Year)
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        t("common:indicators.GDP.definition")
                      ),
                      _react2.default.createElement(
                        "p",
                        null,
                        "Source: ",
                        t("common:indicators.GDP.source")
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-6 lg-4 px1 pb2" },
                  _react2.default.createElement(
                    _Card2.default,
                    { bgColor: "bg-primary", basicCard: true, controlsVisible: false },
                    _react2.default.createElement(
                      _CardView2.default,
                      null,
                      _react2.default.createElement(
                        "div",
                        { className: "pt3 px2" },
                        _react2.default.createElement(
                          "p",
                          { className: "display-1 lh-1 strong mt0 mb1" },
                          t("societies:callout")[0]
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("societies:callout")[1]
                        ),
                        _react2.default.createElement(
                          "p",
                          { className: "m0" },
                          t("societies:callout")[2],
                          _react2.default.createElement("br", null),
                          "fdrs@ifrc.org"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _CardOverlay2.default,
                      null,
                      _react2.default.createElement(
                        "p",
                        null,
                        ""
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col sm-12 px1 pb2" },
                  _react2.default.createElement("hr", null)
                ),
                this.state.filteredDocuments.length > 0 ? _react2.default.createElement(
                  "div",
                  { className: "col sm-12 px1 pb2" },
                  _react2.default.createElement(
                    "div",
                    { className: "relative overflow-hidden shadow-2 pt1 px1 pb2" },
                    _react2.default.createElement(
                      "h2",
                      { className: "text-base mt0" },
                      t("societies:documents"),
                      _react2.default.createElement(
                        "span",
                        { className: "inline-block align-middle mx1 select-no-underline", style: { width: 110 } },
                        _react2.default.createElement(_reactSelect2.default, {
                          searchable: false,
                          clearable: false,
                          name: "year-selector",
                          value: year,
                          options: this.yearOptions(),
                          onChange: this.handleYearChange
                        })
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "clearfix mxn1" },
                      this.state.filteredDocuments.map(function (doc, i) {
                        return _react2.default.createElement(
                          "article",
                          { className: "col sm-4 px1 py05 text-center", key: i },
                          _react2.default.createElement(
                            "div",
                            { className: "clearfix mxn1" },
                            _react2.default.createElement(
                              "div",
                              { className: "inline-block align-top px1" },
                              _react2.default.createElement(
                                "div",
                                { style: { width: 48, height: 48 } },
                                _react2.default.createElement(
                                  "svg",
                                  { width: "48px", height: "48px", viewBox: "0 0 48 48" },
                                  _react2.default.createElement(
                                    "g",
                                    { transform: "translate(0, 0)" },
                                    _react2.default.createElement("polyline", { fill: "none", stroke: "#c6c6c6", strokeWidth: "2", strokeMiterlimit: "10", points: "30,2 30,14 42,14 ", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                                    _react2.default.createElement("polygon", { fill: "none", stroke: "#c6c6c6", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "30,2 6,2 6,46 42,46 42,14 ", strokeLinejoin: "miter" }),
                                    _react2.default.createElement("line", { fill: "none", stroke: "#c6c6c6", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "14", y1: "36", x2: "34", y2: "36", strokeLinejoin: "miter" }),
                                    _react2.default.createElement("line", { fill: "none", stroke: "#c6c6c6", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "14", y1: "26", x2: "34", y2: "26", strokeLinejoin: "miter" }),
                                    _react2.default.createElement("line", { fill: "none", stroke: "#c6c6c6", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "14", y1: "16", x2: "22", y2: "16", strokeLinejoin: "miter" })
                                  )
                                )
                              )
                            ),
                            _react2.default.createElement(
                              "div",
                              { className: "inline-block align-top sm-12 px1" },
                              _react2.default.createElement(
                                "h1",
                                { className: "text-base mt0 sm-my1" },
                                doc.document_type + " - " + doc.year
                              ),
                              _react2.default.createElement(
                                "a",
                                { href: 'http://data.ifrc.org/public/' + doc.path, target: "_blank", rel: "noopener noreferrer", className: "btn bg-light" },
                                _react2.default.createElement(
                                  "span",
                                  null,
                                  _react2.default.createElement(
                                    "svg",
                                    { style: { width: 16, height: 16, marginTop: -1, marginRight: 8 }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                                    _react2.default.createElement(
                                      "g",
                                      { transform: "translate(0, 0)", style: { stroke: "currentcolor" } },
                                      _react2.default.createElement("line", { fill: "none", strokeWidth: "2", strokeMiterlimit: "10", x1: "12", y1: "9", x2: "12", y2: "22", strokeLinejoin: "miter", strokeLinecap: "butt" }),
                                      _react2.default.createElement("polyline", { fill: "none", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", points: "15,19 12,22 9,19 ", strokeLinejoin: "miter" }),
                                      _react2.default.createElement("path", { fill: "none", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", d: "M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2", strokeLinejoin: "miter" })
                                    )
                                  )
                                ),
                                t("common:download")
                              )
                            )
                          )
                        );
                      })
                    )
                  )
                ) : _react2.default.createElement(
                  "div",
                  { className: "px1" },
                  t("societies:noDocuments")
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

  return Society;
}(_react2.default.Component);

Society.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  params: _react2.default.PropTypes.object.isRequired,
  society: _react2.default.PropTypes.object,
  nationalSocieties: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.array,
  documents: _react2.default.PropTypes.array,
  timeSeriesMeta: _react2.default.PropTypes.array
};

Society.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

Society.needs = [_appActions.fetchNationalSocieties, _appActions.fetchTimeSeries, _appActions.fetchDocuments, _appActions.fetchTimeSeriesMeta];

var makeMapStateToProps = function makeMapStateToProps() {
  var getSociety = (0, _selectors.makeGetSociety)();
  var getSocietyData = (0, _selectors.makeGetSocietyData)();
  var getSocietyDocuments = (0, _selectors.makeGetSocietyDocuments)();
  var groupTimeSeriesBySociety = (0, _selectors.makeGroupTimeSeriesBySociety)();
  return function (state, props) {
    return {
      grouping: groupTimeSeriesBySociety(state, props),
      society: getSociety(state, props),
      data: getSocietyData(state, props),
      documents: getSocietyDocuments(state, props),
      nationalSocieties: state.appReducer.nationalSocieties,
      timeSeriesMeta: state.appReducer.timeSeriesMeta
    };
  };
};

exports.default = (0, _reactI18next.translate)(["countries", "societies", "national-societies"], { wait: true })((0, _reactRedux.connect)(makeMapStateToProps)(Society));

// export default connect(makeMapStateToProps)(Society)

/***/ }),

/***/ 1313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(177);

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Nicely formatted numbers
 * @param  {Number} input
 * @param  {Number} precision
 * @return {String}
 */
var niceNum = function niceNum(input, precision, format, fullNumber) {

  if (input === "N/A" || input === "#N/A" || input === "" || input === null) return "N/A";

  input = Number(input);
  if (!isNumeric(input)) return "…";
  // if (input === "N/A" || input === "#N/A" || input === "") return input
  // Set the best precision
  if (isNumeric(input) && !isNumeric(precision)) {
    if (input < 0.001) precision = 4;else if (input < 0.01) precision = 3;else if (input < 0.1) precision = 2;else if (input < 10 || input > 1000000) precision = 1;else precision = 0;
  }

  // if (Math.abs(input) < 1000) return input.toFixed(precision)
  if (Math.abs(input) < 1000) return input.toFixed();

  if (fullNumber) {
    return String(input).split("").reverse().join("").match(/.{1,3}/g).join(",").split("").reverse().join("");
  }

  var prefixes = format === "long" ? { k: " thousand", M: " million", G: " billion", T: " trillion" } : { k: "k", M: "m", G: "bn", T: "tr" };
  var formatted = (0, _d.formatPrefix)("k", input)(input);
  var scaled = +formatted.slice(0, -1);
  var symbol = formatted.slice(-1);
  return "" + scaled.toFixed(precision) + prefixes[symbol];
};

exports.default = niceNum;

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

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(529),
    func = convert('filter', __webpack_require__(533));

func.placeholder = __webpack_require__(307);
module.exports = func;


/***/ }),

/***/ 1319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(306);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lineColors = ["#EE3224", "#0F9EE3", "#D7006D"];

var LineChart = function (_React$Component) {
  _inherits(LineChart, _React$Component);

  function LineChart(props) {
    _classCallCheck(this, LineChart);

    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));

    _this.state = {
      width: _this.props.width
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    return _this;
  }

  _createClass(LineChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener("resize", this.resizeChart);
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      this.setState({
        width: this.refs.visualizationWrapper.clientWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeChart);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { ref: "visualizationWrapper" },
        this.props.title ? _react2.default.createElement(
          "h4",
          { className: "title strong" },
          this.props.title
        ) : "",
        this.props.domain.y[1] === 0 ? _react2.default.createElement(
          "p",
          null,
          "There is no data available for this indicator"
        ) : _react2.default.createElement(
          "svg",
          { width: this.state.width, height: this.props.height },
          this.props.showAxes ? _react2.default.createElement(_victory.VictoryAxis, {
            dependentAxis: true,
            label: this.props.axisLabels ? this.props.axisLabels.y || "" : "",
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: function () {
              return _this2.props.domain.y;
            }(),
            standalone: false,
            tickCount: this.props.tickCount || 3,
            height: this.props.height,
            width: this.state.width,
            style: {
              grid: {
                stroke: "#E1E0DF",
                strokeWidth: 1
              },
              axis: {
                stroke: "transparent"
              },
              tickLabels: {
                fontFamily: "inherit",
                fontSize: 13
              },
              axisLabel: {
                fontFamily: "inherit",
                fontSize: 16,
                padding: 40
              },
              ticks: {
                stroke: "transparent"
              }
            },
            orientation: "left",
            tickFormat: function tickFormat(y) {
              return (0, _niceNum2.default)(y);
            }
          }) : "",
          this.props.showAxes ? _react2.default.createElement(_victory.VictoryAxis, {
            label: this.props.axisLabels ? this.props.axisLabels.x || "" : "",
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: function () {
              return _this2.props.domain.x;
            }(),
            standalone: false,
            tickCount: 4,
            height: this.props.height,
            width: this.state.width,
            scale: "time",
            tickFormat: function tickFormat(x) {
              return x.getFullYear();
            },
            style: {
              axisLabel: {
                fontFamily: "inherit",
                fontSize: 16,
                padding: 30
              },
              tickLabels: {
                fontFamily: "inherit",
                fontSize: 13
              },
              axis: {
                stroke: "#D1D0CF"
              },
              ticks: {
                stroke: "#D1D0CF"
              }
            },
            orientation: "bottom"
          }) : "",
          this.props.dataset.map(function (line, i) {
            return _react2.default.createElement(_victory.VictoryLine, {
              domain: _this2.props.domain,
              standalone: false,
              width: _this2.state.width,
              height: _this2.props.height,
              padding: _this2.props.padding || {
                top: 30,
                bottom: 40,
                left: 60,
                right: 60
              },
              key: i,
              data: _this2.props.dataset[i],
              style: {
                data: {
                  stroke: lineColors[i],
                  strokeWidth: 3
                },
                labels: {
                  fontFamily: "inherit",
                  fontSize: 13
                } },
              label: _this2.props.labels ? _this2.props.labels[i] : "" });
          }),
          this.props.dataset.map(function (dot, i) {
            return _react2.default.createElement(_victory.VictoryScatter, {
              domain: _this2.props.domain,
              standalone: false,
              width: _this2.state.width,
              height: _this2.props.height,
              padding: _this2.props.padding || {
                top: 30,
                bottom: 40,
                left: 60,
                right: 60
              },
              key: i,
              data: _this2.props.dataset[i],
              style: {
                data: {
                  fill: function fill(d) {
                    return d.y ? lineColors[i] : "transparent";
                  },
                  stroke: "#FFFFFF",
                  strokeWidth: function strokeWidth(d) {
                    return d.y ? 3 : 0;
                  }
                }
              },
              size: 4
            });
          })
        ),
        this.props.caption ? _react2.default.createElement(
          "p",
          { className: "small mt0 pt1" },
          this.props.caption
        ) : ""
      );
    }
  }]);

  return LineChart;
}(_react2.default.Component);

LineChart.defaultProps = {
  width: 860,
  height: 420,
  showAxes: true
};

exports.default = LineChart;

/***/ }),

/***/ 1320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGroupTimeSeriesBySociety = exports.makeGroupTimeSeriesByYear = exports.makeGetIndicatorData = exports.makeGetSocietyDocuments = exports.makeGetSocietyData = exports.makeGetSociety = undefined;

var _reselect = __webpack_require__(310);

var _filter = __webpack_require__(1317);

var _filter2 = _interopRequireDefault(_filter);

var _find = __webpack_require__(1321);

var _find2 = _interopRequireDefault(_find);

var _map = __webpack_require__(531);

var _map2 = _interopRequireDefault(_map);

var _groupBy = __webpack_require__(530);

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

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(529),
    func = convert('find', __webpack_require__(1324));

func.placeholder = __webpack_require__(307);
module.exports = func;


/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(1323),
    findIndex = __webpack_require__(1325);

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


/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(532),
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


/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(308),
    baseGt = __webpack_require__(535),
    baseIteratee = __webpack_require__(87);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ }),

/***/ 1331:
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(308),
    baseIteratee = __webpack_require__(87),
    baseLt = __webpack_require__(536);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),

/***/ 1336:
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

var _reactIscroll = __webpack_require__(312);

var _reactIscroll2 = _interopRequireDefault(_reactIscroll);

var _StickySidebar = __webpack_require__(1339);

var _StickySidebar2 = _interopRequireDefault(_StickySidebar);

var _Textfield = __webpack_require__(1340);

var _Textfield2 = _interopRequireDefault(_Textfield);

var _reactI18next = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iScroll = __webpack_require__(311);

var FilteredSocietiesSidebar = function (_React$Component) {
  _inherits(FilteredSocietiesSidebar, _React$Component);

  function FilteredSocietiesSidebar(props) {
    _classCallCheck(this, FilteredSocietiesSidebar);

    var _this = _possibleConstructorReturn(this, (FilteredSocietiesSidebar.__proto__ || Object.getPrototypeOf(FilteredSocietiesSidebar)).call(this, props));

    _this.state = {
      filteredSocieties: props.nationalSocieties,
      filterValue: ""
    };
    _this.handleSocietiesFiltering = _this.handleSocietiesFiltering.bind(_this);
    _this.handleFilterReset = _this.handleFilterReset.bind(_this);
    return _this;
  }

  _createClass(FilteredSocietiesSidebar, [{
    key: "handleSocietiesFiltering",
    value: function handleSocietiesFiltering(e) {
      e.preventDefault();
      var regex = new RegExp(e.target.value, "i");
      var filteredSocieties = this.props.nationalSocieties.filter(function (d) {
        return d.NSO_DON_name.search(regex) > -1;
      });
      this.setState({
        filteredSocieties: filteredSocieties,
        filterValue: e.target.value
      });
    }
  }, {
    key: "handleFilterReset",
    value: function handleFilterReset() {
      this.setState({
        filteredSocieties: this.props.nationalSocieties,
        filterValue: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          filterPlaceholder = _props.filterPlaceholder,
          noSocietiesText = _props.noSocietiesText,
          t = _props.t;
      var _state = this.state,
          filteredSocieties = _state.filteredSocieties,
          filterValue = _state.filterValue;


      var sortedFilteredSocieties = _.sortBy(filteredSocieties, function (d) {
        return t("national-societies:" + d.KPI_DON_Code);
      });

      return _react2.default.createElement(
        _StickySidebar2.default,
        null,
        _react2.default.createElement(
          "div",
          { className: "pb1 px1 overflow-hidden" },
          _react2.default.createElement(
            "h1",
            { className: "text-base md-text-sm mt0 mb1", style: { marginTop: "1.5em" } },
            title
          ),
          _react2.default.createElement(_Textfield2.default, {
            placeholder: filterPlaceholder,
            onChange: this.handleSocietiesFiltering,
            value: filterValue
          })
        ),
        _react2.default.createElement(
          _reactIscroll2.default,
          {
            iScroll: iScroll,
            options: {
              mouseWheel: true,
              scrollbars: true,
              fadeScrollbars: false
            },
            onScrollStart: this.onScrollStart
          },
          _react2.default.createElement(
            "div",
            { className: "pb3" },
            !filteredSocieties.length && noSocietiesText,
            _react2.default.createElement(
              "ul",
              { className: "my1 mx0 p0" },
              sortedFilteredSocieties.map(function (ns, i) {
                return _react2.default.createElement(
                  "li",
                  { className: "block", key: i },
                  _react2.default.createElement(
                    _LanguageLink2.default,
                    { to: "/fdrs/societies/" + ns.slug, onClick: _this2.handleFilterReset, className: "block btn px1" },
                    _react2.default.createElement(
                      "div",
                      { className: "text-left", style: { whiteSpace: "normal" } },
                      t("national-societies:" + ns.KPI_DON_Code)
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return FilteredSocietiesSidebar;
}(_react2.default.Component);

FilteredSocietiesSidebar.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

FilteredSocietiesSidebar.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)(["national-societies"], { wait: true })(FilteredSocietiesSidebar);

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactI18next = __webpack_require__(41);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeneratedIntroText = function (_React$Component) {
  _inherits(GeneratedIntroText, _React$Component);

  function GeneratedIntroText() {
    _classCallCheck(this, GeneratedIntroText);

    return _possibleConstructorReturn(this, (GeneratedIntroText.__proto__ || Object.getPrototypeOf(GeneratedIntroText)).apply(this, arguments));
  }

  _createClass(GeneratedIntroText, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          society = _props.society,
          admissionDate = _props.admissionDate,
          latestData = _props.latestData,
          earliestData = _props.earliestData,
          translationText = _props.translationText,
          t = _props.t;


      var latestTotal = latestData.KPI_noPeopleVolunteering;
      var earliestTotal = earliestData.KPI_noPeopleVolunteering;

      var latestMale = latestData.KPI_noPeopleVolunteeringM;
      var latestFemale = latestData.KPI_noPeopleVolunteeringF;

      var latestYear = latestData.KPI_Year;
      var earliestYear = earliestData.KPI_Year;

      var admissionString = t("national-societies:" + society.KPI_DON_Code) + (" " + translationText[0] + " " + admissionDate + ".");
      var volunteerString = latestTotal ? translationText[1] + " " + latestYear + translationText[2] + " " + (0, _niceNum2.default)(latestTotal, 0, null, true) + " " + translationText[3] : "";
      var comparisonString = earliestTotal ? " (" + translationText[4] + " " + (0, _niceNum2.default)(earliestTotal, 0, null, true) + " " + translationText[5] + " " + earliestYear + ")" : "";
      var genderString = latestMale && latestFemale ? translationText[6] + " " + Math.round(100 / latestTotal * latestMale) + "% " + translationText[7] + " " + Math.round(100 / latestTotal * latestFemale) + "% " + translationText[8] : "";

      var part2 = volunteerString ? " " + volunteerString + comparisonString + genderString + "." : "";

      return _react2.default.createElement(
        "span",
        null,
        admissionString,
        part2
      );
    }
  }]);

  return GeneratedIntroText;
}(_react2.default.Component);

exports.default = (0, _reactI18next.translate)(["national-societies"], { wait: true })(GeneratedIntroText);

/***/ }),

/***/ 1339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIscroll = __webpack_require__(312);

var _reactIscroll2 = _interopRequireDefault(_reactIscroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iScroll = __webpack_require__(311);

var StickySidebar = function (_React$Component) {
  _inherits(StickySidebar, _React$Component);

  function StickySidebar(props) {
    _classCallCheck(this, StickySidebar);

    var _this = _possibleConstructorReturn(this, (StickySidebar.__proto__ || Object.getPrototypeOf(StickySidebar)).call(this, props));

    _this.state = {
      stickyTrigger: 0,
      isSticky: false,
      bottomStick: false,
      width: 0,
      height: 0,
      left: 0,
      wrapperHeight: 0
    };

    _this.affixSidebar = _this.affixSidebar.bind(_this);
    _this.defixSidebar = _this.defixSidebar.bind(_this);
    _this.setDimensions = _this.setDimensions.bind(_this);
    _this.resizeHandler = _this.resizeHandler.bind(_this);
    return _this;
  }

  _createClass(StickySidebar, [{
    key: 'affixSidebar',
    value: function affixSidebar() {
      var _this2 = this;

      if (this.state.bottomStick) {
        if (this.state.wrapperHeight + this.state.stickyTrigger - window.pageYOffset - window.innerHeight - 48 > 0) {
          this.setState({ isSticky: true, bottomStick: false }, function () {
            window.removeEventListener('scroll', _this2.affixSidebar);
            window.addEventListener('scroll', _this2.defixSidebar);
          });
        }
      } else if (this.state.stickyTrigger <= window.pageYOffset) {
        this.setState({ isSticky: true }, function () {
          window.removeEventListener('scroll', _this2.affixSidebar);
          window.addEventListener('scroll', _this2.defixSidebar);
        });
      }
    }
  }, {
    key: 'defixSidebar',
    value: function defixSidebar() {
      var _this3 = this;

      if (this.state.wrapperHeight + this.state.stickyTrigger - window.pageYOffset - window.innerHeight - 48 < 0) {
        this.setState({ isSticky: false, bottomStick: true }, function () {
          window.removeEventListener('scroll', _this3.defixSidebar);
          window.addEventListener('scroll', _this3.affixSidebar);
        });
      }
      if (this.state.stickyTrigger >= window.pageYOffset) {
        this.setState({ isSticky: false, bottomStick: false }, function () {
          window.removeEventListener('scroll', _this3.defixSidebar);
          window.addEventListener('scroll', _this3.affixSidebar);
        });
      }
    }
  }, {
    key: 'setDimensions',
    value: function setDimensions() {
      var height = window.innerHeight - 32;
      var wrapperHeight = this.stickyElementWrapper.parentElement.nextElementSibling.offsetHeight;

      this.setState({
        stickyTrigger: this.stickyElementWrapper.getBoundingClientRect().top + window.pageYOffset,
        width: this.stickyElementWrapper.offsetWidth,
        height: height,
        wrapperHeight: wrapperHeight,
        left: this.stickyElementWrapper.getBoundingClientRect().left
      });
    }
  }, {
    key: 'resizeHandler',
    value: function resizeHandler() {
      this.setDimensions();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setDimensions();
      window.addEventListener('scroll', this.affixSidebar);
      window.addEventListener('resize', this.resizeHandler);
    }
  }, {
    key: 'onScrollStart',
    value: function onScrollStart() {
      // console.log("iScroll starts scrolling")
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.affixSidebar);
      window.removeEventListener('scroll', this.defixSidebar);
      window.removeEventListener('resize', this.resizeHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var wrapperStyles = {
        position: 'relative',
        height: this.state.wrapperHeight - 64
      };

      var stickyStyles = {
        position: this.state.isSticky ? 'fixed' : this.state.bottomStick ? 'absolute' : 'relative',
        left: this.state.isSticky ? this.state.left : 0,
        width: this.state.width,
        height: this.state.height,
        overflow: 'hidden'
      };

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(stickyElementWrapper) {
            _this4.stickyElementWrapper = stickyElementWrapper;
          },
          style: wrapperStyles
        },
        _react2.default.createElement(
          'div',
          {
            ref: function ref(stickyElement) {
              _this4.stickyElement = stickyElement;
            },
            className: this.props.className + ' ' + (this.state.bottomStick ? "pb2 b0 shadow-3" : "pb2 t0 shadow-3"),
            style: stickyStyles
          },
          this.props.children
        )
      );
    }
  }]);

  return StickySidebar;
}(_react2.default.Component);

exports.default = StickySidebar;

/***/ }),

/***/ 1340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textfield = function (_React$Component) {
  _inherits(Textfield, _React$Component);

  function Textfield(props) {
    _classCallCheck(this, Textfield);

    var _this = _possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).call(this, props));

    _this.state = {
      isFocused: false,
      placeholder: _this.props.placeholder
    };

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(Textfield, [{
    key: "handleFocus",
    value: function handleFocus() {
      this.setState({ isFocused: true, placeholder: "e.g. Swedish Red Cross" });
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      this.setState({ isFocused: false, placeholder: this.props.placeholder });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "relative" },
        _react2.default.createElement(
          "div",
          { className: "absolute t50 y-center-self", style: { left: 6 } },
          _react2.default.createElement(
            "svg",
            { className: "align-middle", style: { width: 16, height: 16, marginTop: -1 }, width: "16px", height: "16px", viewBox: "0 0 24 24" },
            _react2.default.createElement(
              "g",
              { transform: "translate(0, 0)", style: { stroke: "currentColor" } },
              _react2.default.createElement("line", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", x1: "22", y1: "22", x2: "16.4", y2: "16.4", strokeLinejoin: "miter" }),
              _react2.default.createElement("circle", { fill: "none", stroke: "inherit", strokeWidth: "2", strokeLinecap: "square", strokeMiterlimit: "10", cx: "10", cy: "10", r: "9", strokeLinejoin: "miter" })
            )
          )
        ),
        _react2.default.createElement("input", { type: "text",
          className: this.state.isFocused ? "textfield textfield--focused px0 py05 pl2" : "textfield px0 py05 pl2",
          placeholder: this.state.placeholder,
          onChange: this.props.onChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          value: this.props.value
        })
      );
    }
  }]);

  return Textfield;
}(_react2.default.Component);

exports.default = Textfield;

/***/ }),

/***/ 1341:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this.state = {
      cardView: props.initialView,
      overlay: false
    };

    _this.switchView = _this.switchView.bind(_this);
    _this.handleOverlayToggle = _this.handleOverlayToggle.bind(_this);
    return _this;
  }

  _createClass(Card, [{
    key: "switchView",
    value: function switchView(viewIndex) {
      this.setState({ cardView: viewIndex });
    }
  }, {
    key: "handleOverlayToggle",
    value: function handleOverlayToggle() {
      this.setState({ overlay: !this.state.overlay });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var lineChartIcon = _react2.default.createElement(
        "svg",
        {
          width: "16px",
          height: "16px",
          viewBox: "0 0 16 16",
          className: "block",
          style: { width: 20, height: 20 }
        },
        _react2.default.createElement(
          "g",
          { stroke: "#4A4A4A", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("path", { d: "M2,12 L14,12" }),
          _react2.default.createElement("polyline", { points: "3 9 5.85714286 6.2 8 8.5 13 3.4" }),
          _react2.default.createElement("polyline", { points: "11 3 13.4 3 13.4 5.4" })
        )
      );

      var genderChartIcon = _react2.default.createElement(
        "svg",
        {
          width: "16px",
          height: "16px",
          viewBox: "0 0 16 16",
          className: "block",
          style: { width: 20, height: 20 }
        },
        _react2.default.createElement(
          "g",
          { stroke: "#4A4A4A", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("ellipse", { cx: "5.27272727", cy: "6.90909091", rx: "3.27272727", ry: "3.27272727" }),
          _react2.default.createElement("path", { d: "M5,10 L5,13.5" }),
          _react2.default.createElement("path", { d: "M3.67999268,12 L6.36000061,12" }),
          _react2.default.createElement("path", { d: "M11.3818182,4.61818182 L14,2" }),
          _react2.default.createElement("ellipse", { cx: "9.09090909", cy: "6.90909091", rx: "3.27272727", ry: "3.27272727" }),
          _react2.default.createElement("polyline", { points: "11.8181818 2 14 2 14 4.18181818" })
        )
      );

      var plainNumber = _react2.default.createElement(
        "svg",
        {
          width: "16px",
          height: "16px",
          viewBox: "0 0 16 16",
          className: "block",
          style: { width: 20, height: 20 }
        },
        _react2.default.createElement(
          "g",
          { stroke: "#4A4A4A", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
          _react2.default.createElement("path", { d: "M4,7.68181818 L7.27272727,7.68181818 L7.27272727,11.7727273 L4,11.7727273 L4,7.68181818 C4,5.75568318 4.71590909,4.54971591 6.04545455,4" }),
          _react2.default.createElement("path", { d: "M9.72727273,7.68181818 L13,7.68181818 L13,11.7727273 L9.72727273,11.7727273 L9.72727273,7.68181818 C9.72727273,5.75568318 10.4431818,4.54971591 11.7727273,4" })
        )
      );

      var viewIcons = {
        lineChart: lineChartIcon,
        genderChart: genderChartIcon,
        plainNumber: plainNumber
      };

      var _props = this.props,
          children = _props.children,
          bgColor = _props.bgColor,
          basicCard = _props.basicCard;
      var _state = this.state,
          cardView = _state.cardView,
          overlay = _state.overlay;


      return _react2.default.createElement(
        "article",
        { className: "relative overflow-hidden shadow-2 " + bgColor },
        _react2.default.createElement(
          "div",
          null,
          children.map(function (child, i) {
            return child.props.componentIdentifier === "CardView" && cardView === i && _react2.default.createElement(
              "div",
              { style: { height: 240 }, key: i },
              child.props.children
            );
          })
        ),
        _react2.default.createElement(
          "footer",
          { className: "relative pt2 pb05 px1", style: { opacity: this.props.controlsVisible ? 1 : 0, pointerEvents: this.props.controlsVisible ? "all" : "none" } },
          !basicCard && _react2.default.createElement(
            "div",
            { className: "t0 l1 y-center-self absolute btn-group btn-group--raised" },
            children.map(function (child, i) {
              return child.props.componentIdentifier === "CardView" && _react2.default.createElement(
                "button",
                {
                  key: i,
                  onClick: function onClick() {
                    return _this2.switchView(i);
                  },
                  className: cardView === i ? "btn bg-primary stroke-white" : "btn bg-white"
                },
                child.props.viewIcon ? viewIcons[child.props.viewIcon] : _react2.default.createElement(
                  "span",
                  { className: "px05" },
                  i
                )
              );
            })
          ),
          _react2.default.createElement(_LanguageLink2.default, { to: "/fdrs/overview/map?currentIndicator=" + this.props.indicator, className: this.props.indicator ? "btn" : "btn opacity-0" }),
          _react2.default.createElement(
            "button",
            {
              className: "btn btn--raised btn--circle bg-white absolute t0 r1 y-center-self",
              style: { width: 48, height: 48 },
              onClick: this.handleOverlayToggle
            },
            _react2.default.createElement(
              "svg",
              { width: "2rem", height: "2rem", viewBox: "0 0 36 36" },
              _react2.default.createElement(
                "g",
                { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                _react2.default.createElement(
                  "g",
                  null,
                  _react2.default.createElement(
                    "g",
                    { transform: "translate(8, 9)", stroke: "#343434" },
                    _react2.default.createElement("path", { d: "M9.09090909,0.909090909 L20,0.909090909" }),
                    _react2.default.createElement("path", { d: "M9.09090909,6.36363636 L20,6.36363636" }),
                    _react2.default.createElement("path", { d: "M0,11.8181818 L20,11.8181818" }),
                    _react2.default.createElement("path", { d: "M0,17.2727273 L20,17.2727273" })
                  ),
                  _react2.default.createElement("path", { d: "M11.1271973,15.6171875 L13.0187988,15.6171875 L13.0187988,17.4516602 L11.1271973,17.4516602 L11.1271973,15.6171875 Z M10.0734863,8.48242188 C10.5728378,8.16080568 11.1864384,8 11.9143066,8 C12.8706916,8 13.6651987,8.22851334 14.2978516,8.68554688 C14.9305045,9.14258041 15.2468262,9.81965697 15.2468262,10.7167969 C15.2468262,11.2669298 15.109295,11.7303041 14.8342285,12.1069336 C14.6734204,12.3354504 14.3645042,12.6274396 13.9074707,12.9829102 L13.4567871,13.3320312 C13.2113432,13.5224619 13.0484216,13.7446276 12.9680176,13.9985352 C12.9172361,14.1593433 12.8897298,14.4090152 12.885498,14.7475586 L11.1716309,14.7475586 C11.1970216,14.0323857 11.2647293,13.5383314 11.3747559,13.2653809 C11.4847825,12.9924303 11.7683083,12.6782244 12.2253418,12.3227539 L12.6887207,11.9609375 C12.8410652,11.8466791 12.9637853,11.7218431 13.0568848,11.5864258 C13.2261564,11.3536772 13.310791,11.0976576 13.310791,10.8183594 C13.310791,10.4967432 13.2166351,10.203696 13.0283203,9.93920898 C12.8400056,9.67472198 12.4961776,9.54248047 11.9968262,9.54248047 C11.5059383,9.54248047 11.1578786,9.70540202 10.9526367,10.03125 C10.7473948,10.357098 10.6447754,10.6956363 10.6447754,11.046875 L8.81030273,11.046875 C8.86108424,9.84081428 9.28214123,8.98600512 10.0734863,8.48242188 L10.0734863,8.48242188 Z", fill: "#D90212" })
                )
              )
            )
          )
        ),
        children.map(function (child, i) {
          return child.props.componentIdentifier == "CardOverlay" && _react2.default.createElement(
            "div",
            {
              key: i,
              className: "card__overlay bg-white color-regular " + (overlay && "card__overlay--active")
            },
            _react2.default.createElement(
              "div",
              { className: "pt2" },
              child.props.children
            ),
            _react2.default.createElement(
              "button",
              {
                onClick: _this2.handleOverlayToggle,
                className: "absolute btn",
                style: { top: "1rem", right: "1rem" },
                tabIndex: overlay ? "0" : "-1"
              },
              _react2.default.createElement(
                "svg",
                { style: { width: 16, stroke: "currentcolor" }, width: "24px", height: "24px", viewBox: "0 0 24 24" },
                _react2.default.createElement(
                  "g",
                  { transform: "translate(0, 0)" },
                  _react2.default.createElement("line", { fill: "none", strokeWidth: "3", strokeLinecap: "square", strokeMiterlimit: "10", x1: "19", y1: "5", x2: "5", y2: "19", strokeLinejoin: "miter" }),
                  _react2.default.createElement("line", { fill: "none", strokeWidth: "3", strokeLinecap: "square", strokeMiterlimit: "10", x1: "19", y1: "19", x2: "5", y2: "5", strokeLinejoin: "miter" })
                )
              )
            )
          );
        })
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {
  children: _react2.default.PropTypes.node,
  initialView: _react2.default.PropTypes.number,
  bgColor: _react2.default.PropTypes.string,
  basicCard: _react2.default.PropTypes.bool,
  controlsVisible: _react2.default.PropTypes.bool,
  indicator: _react2.default.PropTypes.string
};

Card.defaultProps = {
  initialView: 0,
  bgColor: "",
  basicCard: false,
  controlsVisible: true
};

exports.default = Card;

/***/ }),

/***/ 1342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardOverlay = function CardOverlay(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    null,
    children
  );
};

CardOverlay.defaultProps = {
  componentIdentifier: 'CardOverlay'
};

CardOverlay.propTypes = {
  children: _react2.default.PropTypes.node,
  componentIdentifier: _react2.default.PropTypes.string
};

exports.default = CardOverlay;

/***/ }),

/***/ 1343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardView = function CardView(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    null,
    children
  );
};

CardView.defaultProps = {
  componentIdentifier: 'CardView'
};

CardView.propTypes = {
  children: _react2.default.PropTypes.node,
  componentIdentifier: _react2.default.PropTypes.string
};

exports.default = CardView;

/***/ }),

/***/ 1345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrandColors = {
    twitter: "#1da1f2",
    facebook: "#3b5998",
    mail: "#F6F4F2"
};

var ShareBtn = function (_React$Component) {
    _inherits(ShareBtn, _React$Component);

    function ShareBtn() {
        _classCallCheck(this, ShareBtn);

        return _possibleConstructorReturn(this, (ShareBtn.__proto__ || Object.getPrototypeOf(ShareBtn)).apply(this, arguments));
    }

    _createClass(ShareBtn, [{
        key: "render",
        value: function render() {

            var icons = {
                twitter: _react2.default.createElement(
                    "svg",
                    { className: "block", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                    _react2.default.createElement(
                        "g",
                        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        _react2.default.createElement(
                            "g",
                            { fill: "#ffffff" },
                            _react2.default.createElement("path", { d: "M18.3671875,8.734375 L18.3671875,9.1640625 C18.3671875,9.89323281 18.2747405,10.6262984 18.0898438,11.3632812 C17.904947,12.1002641 17.6393246,12.8164028 17.2929688,13.5117188 C16.9466129,14.2070347 16.5026069,14.8567678 15.9609375,15.4609375 C15.4192681,16.0651072 14.8125034,16.5924457 14.140625,17.0429688 C13.4687466,17.4934918 12.6940148,17.848957 11.8164062,18.109375 C10.9387977,18.369793 10.0130257,18.5 9.0390625,18.5 C7.0650943,18.5 5.38542359,18.054692 4,17.1640625 C4.23958453,17.200521 4.49999859,17.21875 4.78125,17.21875 C5.51042031,17.21875 6.22395484,17.0781264 6.921875,16.796875 C7.61979516,16.5156236 8.26301789,16.1380232 8.8515625,15.6640625 C8.14843398,15.6588541 7.51432574,15.4414084 6.94921875,15.0117188 C6.38411176,14.5820291 6.00000102,14.0390658 5.796875,13.3828125 C6.01562609,13.4244794 6.21874906,13.4453125 6.40625,13.4453125 C6.70833484,13.4453125 6.99999859,13.4062504 7.28125,13.328125 C6.52603789,13.1770826 5.89844,12.8007843 5.3984375,12.1992188 C4.898435,11.5976532 4.6484375,10.9010456 4.6484375,10.109375 L4.6484375,10.0703125 C5.11718984,10.3255221 5.61197656,10.4609374 6.1328125,10.4765625 C5.67968523,10.1744777 5.3216159,9.78385656 5.05859375,9.3046875 C4.7955716,8.82551844 4.6640625,8.30989859 4.6640625,7.7578125 C4.6640625,7.22135148 4.81249852,6.6901068 5.109375,6.1640625 C5.93229578,7.1640675 6.9270775,7.95702832 8.09375,8.54296875 C9.2604225,9.12890918 10.5182224,9.45833297 11.8671875,9.53125 C11.8203123,9.32812398 11.796875,9.07552234 11.796875,8.7734375 C11.796875,7.86718297 12.1158822,7.09505527 12.7539062,6.45703125 C13.3919303,5.81900723 14.164058,5.5 15.0703125,5.5 C16.0026088,5.5 16.8072883,5.84374656 17.484375,6.53125 C18.2291704,6.38020758 18.9192677,6.11458523 19.5546875,5.734375 C19.3046862,6.52604563 18.8229202,7.13281039 18.109375,7.5546875 C18.7604199,7.48177047 19.390622,7.30729305 20,7.03125 C19.5624978,7.69271164 19.0182324,8.2604143 18.3671875,8.734375 Z" })
                        )
                    )
                ),
                facebook: _react2.default.createElement(
                    "svg",
                    { className: "block", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                    _react2.default.createElement(
                        "g",
                        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        _react2.default.createElement(
                            "g",
                            { fill: "#ffffff" },
                            _react2.default.createElement("path", { d: "M20,5 L20,19 C20,19.2708347 19.9010427,19.5052073 19.703125,19.703125 C19.5052073,19.9010427 19.2708347,20 19,20 L15,20 L15,13.78125 L17,13.78125 L17.3359375,11.4765625 L15,11.4765625 L15,9.6640625 C15,9.3307275 15.0846346,9.07552172 15.2539062,8.8984375 C15.4231779,8.72135328 15.6718734,8.6328125 16,8.6328125 L17.5,8.6328125 L17.5,6.5546875 C17.0520811,6.48177047 16.5052116,6.4453125 15.859375,6.4453125 C14.786453,6.4453125 13.9674507,6.7174452 13.4023438,7.26171875 C12.8372368,7.8059923 12.5546875,8.54687031 12.5546875,9.484375 L12.5546875,11.4765625 L10.5546875,11.4765625 L10.5546875,13.78125 L12.5546875,13.78125 L12.5546875,20 L5,20 C4.72916531,20 4.49479266,19.9010427 4.296875,19.703125 C4.09895734,19.5052073 4,19.2708347 4,19 L4,5 C4,4.72916531 4.09895734,4.49479266 4.296875,4.296875 C4.49479266,4.09895734 4.72916531,4 5,4 L19,4 C19.2708347,4 19.5052073,4.09895734 19.703125,4.296875 C19.9010427,4.49479266 20,4.72916531 20,5 L20,5 Z" })
                        )
                    )
                ),
                mail: _react2.default.createElement(
                    "svg",
                    { className: "block", width: "20px", height: "20px", viewBox: "0 0 24 24" },
                    _react2.default.createElement(
                        "g",
                        { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        _react2.default.createElement(
                            "g",
                            { strokeWidth: "2", stroke: "#343434" },
                            _react2.default.createElement(
                                "g",
                                { transform: "translate(3, 5)" },
                                _react2.default.createElement("polyline", { points: "0 4.091 0 14 18 14 18 4.091" }),
                                _react2.default.createElement("polygon", { points: "18 4.091 18 0 0 0 0 4.091 9 9" })
                            )
                        )
                    )
                )
            };

            return _react2.default.createElement(
                "button",
                { className: "btn", style: { background: BrandColors[this.props.service] } },
                icons[this.props.service]
            );
        }
    }]);

    return ShareBtn;
}(_react2.default.Component);

exports.default = ShareBtn;

/***/ }),

/***/ 1347:
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(529),
    func = convert('uniqBy', __webpack_require__(1348));

func.placeholder = __webpack_require__(307);
module.exports = func;


/***/ }),

/***/ 1348:
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(87),
    baseUniq = __webpack_require__(537);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxTooltip = __webpack_require__(130);

var _d = __webpack_require__(177);

var _d3Geo = __webpack_require__(2);

var _topojsonClient = __webpack_require__(313);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Datamap from "datamaps"


var SVGOrigin = _reduxTooltip.Origin.wrapBy("g");

var Globe = function (_React$Component) {
  _inherits(Globe, _React$Component);

  function Globe(props) {
    _classCallCheck(this, Globe);

    var _this = _possibleConstructorReturn(this, (Globe.__proto__ || Object.getPrototypeOf(Globe)).call(this, props));

    _this.state = {
      countries: null,
      loading: true
    };

    _this.loadCountries = _this.loadCountries.bind(_this);
    return _this;
  }

  _createClass(Globe, [{
    key: "projection",
    value: function projection() {
      return (0, _d3Geo.geoOrthographic)().scale(100).translate([200 / 2, 200 / 2]).rotate([-this.props.center[1], -this.props.center[0], 0]).precision(.1);
    }
  }, {
    key: "loadCountries",
    value: function loadCountries() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        (0, _d.json)("/api/report/world-topo.json", function (err, world) {
          if (err) console.log(err);
          _this2.setState({
            countries: (0, _topojsonClient.feature)(world, world.objects.countries).features,
            loading: false
          });
          resolve();
        });
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextProps.selectedCountry !== this.props.selectedCountry || !this.state.countries;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadCountries();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        { className: "relative ratio-1-1 overflow-hidden" },
        this.state.loading ? _react2.default.createElement(
          "div",
          { className: "absolute t0 l0 r0 b0 base-12 overflow-hidden" },
          _react2.default.createElement(
            "div",
            { className: "relative text-center t33" },
            _react2.default.createElement(
              "div",
              { className: "inline-block bg-secondary p1" },
              "Loading globe..."
            )
          )
        ) : null,
        _react2.default.createElement(
          "div",
          { className: "absolute t0 l0 r0 b0 overflow-hidden", style: { opacity: this.state.loading ? 0 : 1, transform: this.state.loading ? "rotate(10deg)" : "rotate(0)", transition: "all 1s" } },
          !this.state.loading ? _react2.default.createElement(
            "svg",
            { style: { width: "100%" }, width: 200, height: 200, viewBox: "0 0 200 200" },
            this.state.countries.map(function (country, i) {
              return _react2.default.createElement("path", { key: i, d: (0, _d3Geo.geoPath)().projection(_this3.projection())(country), style: { fill: "#EFEBE9" } });
            }),
            _react2.default.createElement(
              SVGOrigin,
              { content: this.props.selectedCountryName },
              _react2.default.createElement("circle", { cx: 100, cy: 100, r: 8, style: { fill: "rgba(208,2,27,0.8)", stroke: "#fff", strokeWidth: "2px" } })
            )
          ) : null
        )
      );
    }
  }]);

  return Globe;
}(_react2.default.Component);

exports.default = Globe;

/***/ })

});