webpackJsonp([7],{

/***/ 1043:
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

var _datamaps = __webpack_require__(429);

var _datamaps2 = _interopRequireDefault(_datamaps);

var _isNumber = __webpack_require__(1071);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _groupBy = __webpack_require__(832);

var _groupBy2 = _interopRequireDefault(_groupBy);

var _each = __webpack_require__(1067);

var _each2 = _interopRequireDefault(_each);

var _find = __webpack_require__(1068);

var _find2 = _interopRequireDefault(_find);

var _reactSelect = __webpack_require__(73);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _appActions = __webpack_require__(109);

var _numberFormatter = __webpack_require__(1051);

var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

var _niceNum = __webpack_require__(1064);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _Breadcrumbs = __webpack_require__(1048);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Icon = __webpack_require__(432);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataView = function (_React$Component) {
  _inherits(DataView, _React$Component);

  function DataView(props) {
    _classCallCheck(this, DataView);

    var _this = _possibleConstructorReturn(this, (DataView.__proto__ || Object.getPrototypeOf(DataView)).call(this, props));

    _this.state = {
      society: "World",
      indicators: [{ icon: "heart", key: "KPI_Number_of_People_Volunteering" }, { icon: "work", key: "KPI_Number_of_PaidStaff" }, { icon: "drop", key: "KPI_Total_Number_of_People_Donating_Blood" }, { icon: "flag", key: "KPI_Number_of_Local_Units" }, { icon: "usergroup", key: "KPI_Number_of_People_Reached_AllServices" }, { icon: "back", key: "Total_Expenditure_CHF", currency: "CHF" }, { icon: "goto", key: "Total_Income_CHF", currency: "CHF" }],
      indicator: undefined,
      societies: {},
      years: [],
      currentYear: undefined,
      year: undefined
    };

    _this.logChange = _this.logChange.bind(_this);
    // this.handleClick = this.handleClick.bind(this)
    _this.setSociety = _this.setSociety.bind(_this);
    _this.changeYear = _this.changeYear.bind(_this);
    _this.updateBubbles = _this.updateBubbles.bind(_this);
    _this.setIndicator = _this.setIndicator.bind(_this);
    _this.setDomain = _this.setDomain.bind(_this);
    _this.getDatum = _this.getDatum.bind(_this);
    _this.getRadius = _this.getRadius.bind(_this);
    _this.setupIndicators = _this.setupIndicators.bind(_this);
    _this.loadKPIData = _this.loadKPIData.bind(_this);

    _this.niceNum = _niceNum2.default;
    _this.t = _this.props.content[_this.props.language].data;
    _this.name = "data";

    _this.setupIndicators(undefined);
    return _this;
  }

  _createClass(DataView, [{
    key: "logChange",
    value: function logChange(val) {
      console.log("Selected: " + val);
      this.setSociety(val);
    }
  }, {
    key: "loadKPIData",
    value: function loadKPIData() {
      var _this2 = this;

      // Map data
      d3.json("/api/data/data.json", function (response) {

        _this2.data = response;

        var addYearTotal = function addYearTotal(data) {
          (0, _each2.default)(data, function (yearData, key) {
            var yearTotal = {
              "country_name": "World",
              "society_name": "World",
              "iso3": "World",
              "KPI_Year": key,
              "KPI_Number_of_People_Volunteering": 0,
              "KPI_Number_of_PaidStaff": 0,
              "KPI_Total_Number_of_People_Donating_Blood": 0,
              "KPI_Number_of_Local_Units": 0,
              "KPI_Number_of_People_Reached_AllServices": 0,
              "Total_Expenditure_CHF": 0,
              "Total_Income_CHF": 0
            };
            _this2.state.indicators.forEach(function (indicator) {
              yearTotal[indicator.key] = d3.sum(yearData, function (d) {
                return d[indicator.key];
              });
            });
            yearData.push(yearTotal);
          });
          return data;
        };

        var societiesByYear = addYearTotal((0, _groupBy2.default)(response, "KPI_Year"));
        var years = Object.keys(societiesByYear);
        var currentYear = years[years.length - 1];

        d3.json("/api/data/centroids.json", function (response) {
          _this2.centroids = response;
          _this2.setState({
            years: years,
            year: currentYear,
            society: societiesByYear[currentYear].find(function (d) {
              return d.iso3 === "World";
            }),
            societies: societiesByYear
          }, function () {
            console.log("Pre set domain");
            _this2.setDomain();
            _this2.setSociety("World");
            _this2.updateBubbles();
          });
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {

      var self = this;

      this.width = this.refs.mapContainer.offsetWidth;
      this.height = window.innerHeight - 215;

      var mapOptions = {
        element: this.refs.mapContainer,
        responsive: true,
        height: this.height,
        setProjection: function setProjection(element) {
          var projection = d3.geo.times().center([15, -2]).scale(element.offsetWidth / 5).translate([element.offsetWidth / 2, element.offsetHeight / 1.75]);
          var path = d3.geo.path().projection(projection);
          return { path: path, projection: projection };
        },
        fills: {
          defaultFill: "#ddd",
          bubbleFill: "#EE3224",
          bubbleFillEmpty: "#aaa"
        },
        geographyConfig: {
          popupOnHover: false,
          highlightOnHover: false,
          borderWidth: 1,
          borderColor: "#fff"
        },
        done: function done(datamap) {
          var mouseDownPosition = void 0;

          self.zoom = d3.behavior.zoom().on("zoom", self.zoomed.bind(self));

          datamap.svg.style({ "cursor": "move" });

          datamap.svg.call(self.zoom).on("wheel.zoom", null).on("dblclick.zoom", null);

          d3.selectAll(".zoom-button").on("click", function () {

            var direction = 1,
                factor = 0.3,
                targetZoom = 1,
                center = [self.width / 2, self.height / 2],
                extent = self.zoom.scaleExtent(),
                translate = self.zoom.translate(),
                translate0 = [],
                l = [],
                view = { x: translate[0], y: translate[1], k: self.zoom.scale() };

            event.preventDefault();
            direction = this.id === "zoom-in" ? 1 : -1;
            targetZoom = self.zoom.scale() * (1 + factor * direction);

            if (targetZoom < extent[0] || targetZoom > extent[1]) return false;

            translate0 = [(center[0] - view.x) / view.k, (center[1] - view.y) / view.k];
            view.k = targetZoom;
            l = [translate0[0] * view.k + view.x, translate0[1] * view.k + view.y];

            view.x += center[0] - l[0];
            view.y += center[1] - l[1];

            self.interpolateZoom.call(self, [view.x, view.y], view.k);
          });

          // Add mouse interactions for the countries
          datamap.svg.selectAll(".datamaps-subunit").on("mousedown", function (d) {
            mouseDownPosition = d3.mouse(datamap.svg.node());
          }).on("mouseup", function (d) {
            var mouseUpPosition;

            // If it was a drag, then do nothing
            mouseUpPosition = d3.mouse(datamap.svg.node());
            if (Math.abs(mouseDownPosition[0] - mouseUpPosition[0]) > 3 || Math.abs(mouseDownPosition[1] - mouseUpPosition[1]) > 3) return;
          });

          datamap.svg.on("click", function (d) {
            var target = d3.select(d3.event.target);
            if (target.classed("datamaps-bubble")) {
              self.setSociety(JSON.parse(target.attr("data-info")).iso3, true);
            }
          });

          self.loadKPIData();
        }
      };

      this.map = new _datamaps2.default(mapOptions);
    }
  }, {
    key: "setSociety",
    value: function setSociety(iso3) {
      var _this3 = this;

      console.log("iso3", iso3, this.state.societies[this.state.year].find(function (d) {
        return d.iso3 === iso3;
      }));
      this.setState({
        society: this.state.societies[this.state.year].find(function (d) {
          return d.iso3 === iso3;
        })
      }, function () {
        console.log("society", _this3.state.society);
        _this3.updateBubbles();
      });
    }
  }, {
    key: "changeYear",
    value: function changeYear(year) {
      var _this4 = this;

      this.setState({
        year: year
      }, function () {
        _this4.setSociety(_this4.state.society.iso3);
      });
    }
  }, {
    key: "updateBubbles",
    value: function updateBubbles() {
      var _this5 = this;

      if (!this.centroids || !this.data) return;

      var bubbles = [];
      this.map.svg.selectAll(".datamaps-subunit").each(function (geography) {
        var datum = _this5.getDatum(geography.id, _this5.state.year);

        if (datum) {
          var value = datum[_this5.state.indicator.key];
          var centroid = _this5.centroids.find(function (c) {
            return c.iso2 === datum.iso2;
          });
          bubbles.push({
            customClass: _this5.state.society.iso3 == "World" ? false : _this5.state.society.iso3 === geography.id ? "is-focused" : false,
            value: (0, _niceNum2.default)(value),
            name: datum.society_name,
            icon: _this5.state.indicator.icon,
            indicator: _this5.t.indicators[_this5.state.indicator.key],
            fillKey: (0, _isNumber2.default)(value) ? "bubbleFill" : "bubbleFillEmpty",
            iso3: geography.id,
            latitude: centroid.lat,
            longitude: centroid.long,
            fillOpacity: _this5.state.society.iso3 == "World" ? 0.9 : _this5.state.society.iso3 === geography.id ? 0.9 : 0.3,
            borderOpacity: _this5.state.society.iso3 == "World" ? 0.9 : _this5.state.society.iso3 === geography.id ? 0.9 : 0.3,
            borderColor: _this5.state.society && _this5.state.society.iso3 === geography.id ? "#fff" : "#fff",
            borderWidth: _this5.state.society && _this5.state.society.iso3 === geography.id ? 2 : 1,
            radius: _this5.getRadius(value)
          });
        }
      });

      bubbles.sort(function (a, b) {
        return b.radius - a.radius;
      });

      var self = this;

      this.map.bubbles(bubbles, {
        highlightOnHover: false,
        key: function key(d, i) {
          return d.iso3;
        },
        popupTemplate: function popupTemplate(geo, data) {
          var nationalSociety = (0, _find2.default)(self.props.nationalSocieties, { iso_3: data.iso3 });

          return "\n          <div class=\"map-tooltip\">\n            <strong>" + nationalSociety[self.props.language] + "</strong>\n            <div class=\"map-tooltip-content m-t-05\">\n              <span class=\"m-r-05\">\n                <span class=\"map-tooltip-label\">\n                  " + data.indicator + "\n                </span>\n              </span>\n              <strong>" + data.value + "</strong>\n            </div>\n          </div>\n        ";
        }
      });
    }
  }, {
    key: "setIndicator",
    value: function setIndicator(indicator) {
      console.log("setIndicator", indicator);
      this.setState({
        indicator: indicator
      }, function () {
        this.setDomain();
        this.updateBubbles();
      });
    }
  }, {
    key: "setDomain",
    value: function setDomain() {
      var _this6 = this;

      this.domain = d3.extent(this.data, function (d) {
        return d[_this6.state.indicator.key];
      });
    }
  }, {
    key: "getDatum",
    value: function getDatum(id, year) {
      // return this.dataByYear[year].find((d) => d.iso3 === id)
      return this.state.societies[year].find(function (d) {
        return d.iso3 === id;
      });
    }
  }, {
    key: "getRadius",
    value: function getRadius(value) {
      var radius = d3.scale.sqrt().domain(this.domain).range([4, 30]);
      return radius(value);
    }
  }, {
    key: "setupIndicators",
    value: function setupIndicators(slug) {
      this.state.indicators = [{ icon: "heart", slug: "volunteers", key: "KPI_Number_of_People_Volunteering" }, { icon: "work", slug: "paid-staff", key: "KPI_Number_of_PaidStaff" }, { icon: "drop", slug: "blood-donors", key: "KPI_Total_Number_of_People_Donating_Blood" }, { icon: "flag", slug: "local-units", key: "KPI_Number_of_Local_Units" }, { icon: "usergroup", slug: "people-reached", key: "KPI_Number_of_People_Reached_AllServices" }, { icon: "back", slug: "expenditure", key: "Total_Expenditure_CHF", currency: "CHF" }, { icon: "goto", slug: "income", key: "Total_Income_CHF", currency: "CHF" }].map(function (i) {
        i.translateKey = "data.indicators." + i.key;
        return i;
      });

      if (slug) this.state.indicator = this.state.indicators.find(function (i) {
        return i.slug === slug;
      });
      if (!this.state.indicator) this.state.indicator = this.state.indicators[0];
    }
  }, {
    key: "zoomed",
    value: function zoomed() {
      this.map.svg.selectAll("g").attr("transform", "translate(" + this.zoom.translate() + ")scale(" + this.zoom.scale() + ")");
    }
  }, {
    key: "interpolateZoom",
    value: function interpolateZoom(translate, scale) {
      var _this7 = this;

      return d3.transition().duration(350).tween("zoom", function () {
        var iTranslate = d3.interpolate(_this7.zoom.translate(), translate),
            iScale = d3.interpolate(_this7.zoom.scale(), scale);
        return function (t) {
          _this7.zoom.scale(iScale(t)).translate(iTranslate(t));
          _this7.zoomed.call(_this7);
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary-dark" },
          _react2.default.createElement(
            "div",
            { className: "col sm-6 sm-offset-3 py1" },
            _react2.default.createElement(_Breadcrumbs2.default, { chapter: { title: "Data" }, language: this.props.language })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary pt1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-6 sm-offset-3" },
            _react2.default.createElement(
              "h2",
              { className: "display-2" },
              this.props.content[this.props.language].data.title
            ),
            _react2.default.createElement(
              "p",
              { className: "title" },
              this.props.content[this.props.language].data.subtitle
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix", style: { overflow: "hidden", position: "relative" } },
          _react2.default.createElement(
            "div",
            { className: "col sm-9 sm-offset-3" },
            _react2.default.createElement(
              "div",
              { className: "col col-md-9" },
              _react2.default.createElement(
                "div",
                { id: "map-container", className: "map-container", ref: "mapContainer" },
                _react2.default.createElement(
                  "div",
                  { id: "map-zoom-buttons", className: "map-zoom-buttons" },
                  _react2.default.createElement(
                    "div",
                    { id: "zoom-in", className: "btn bg-secondary zoom-button" },
                    _react2.default.createElement(
                      "span",
                      { className: "headline" },
                      "+"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { id: "zoom-out", className: "btn bg-secondary zoom-button" },
                    _react2.default.createElement(
                      "span",
                      { className: "headline" },
                      "\u2013"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "center pb2", style: { position: "absolute", bottom: 0, width: "100%", zIndex: 99 } },
                  _react2.default.createElement(
                    "button",
                    { className: this.state.year == 2012 ? "btn bg-primary p1 is-focused" : "btn bg-primary p1", onClick: function onClick() {
                        return _this8.changeYear(2012);
                      } },
                    "2012"
                  ),
                  _react2.default.createElement(
                    "button",
                    { className: this.state.year == 2013 ? "btn bg-primary p1 is-focused" : "btn bg-primary p1", onClick: function onClick() {
                        return _this8.changeYear(2013);
                      } },
                    "2013"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "col sm-3 data-sidebar bg-data-sidebar" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "div",
                { className: "clearfix" },
                _react2.default.createElement(
                  "div",
                  { className: "data-select px1 py1" },
                  _react2.default.createElement(_reactSelect2.default, {
                    className: "",
                    name: "form-field-name",
                    value: this.state.society.iso3,
                    clearable: false,
                    valueKey: "iso3",
                    labelKey: "society_name",
                    options: this.state.societies[this.state.year],
                    onChange: this.logChange.bind(this)
                  })
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "px2" },
                this.props.content[this.props.language].data.guide,
                ":"
              ),
              _react2.default.createElement(
                "ul",
                { className: "indicator-list pt0 pb3" },
                this.state.indicators.map(function (item, i) {
                  return _react2.default.createElement(
                    "li",
                    { key: i, onClick: function onClick() {
                        return _this8.setIndicator(item);
                      }, className: item.key == _this8.state.indicator.key ? "indicator is-active clearfix px2" : "indicator clearfix px2" },
                    _react2.default.createElement(
                      "div",
                      { className: "col md-8 indicator-label" },
                      _react2.default.createElement(_Icon2.default, { name: item.icon, height: "20px" }),
                      "&nbsp",
                      _this8.props.content[_this8.props.language].data.indicators[item.key]
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "col md-4 indicator-value" },
                      _numberFormatter2.default.addCommas(_this8.niceNum(_this8.state.society[item.key])),
                      " ",
                      item.currency
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return DataView;
}(_react2.default.Component);

DataView.needs = [_appActions.fetchNationalSocieties];

function mapStateToProps(state) {
  return {
    language: state.appReducer.language,
    translations: state.appReducer.data,
    content: {
      en: state.appReducer.en,
      fr: state.appReducer.fr,
      es: state.appReducer.es,
      ar: state.appReducer.ar
    },
    nationalSocieties: state.appReducer.nationalSocieties
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(DataView);

/***/ },

/***/ 1048:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(68);

var _prefixLanguageToRoute = __webpack_require__(433);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadCrumbs = function BreadCrumbs(_ref) {
  var language = _ref.language,
      chapter = _ref.chapter;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactRouter.Link,
      { to: (0, _prefixLanguageToRoute2.default)(language, "/") },
      _react2.default.createElement(
        "span",
        null,
        "Home"
      )
    ),
    _react2.default.createElement(
      "span",
      { style: { padding: "0 1em" } },
      "›"
    ),
    chapter.title
  );
};

BreadCrumbs.propTypes = {
  language: _react2.default.PropTypes.string.isRequired,
  chapter: _react2.default.PropTypes.object.isRequired
};

exports.default = BreadCrumbs;

/***/ },

/***/ 1051:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addCommas = function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};

exports.default = {
  addCommas: addCommas
};

/***/ },

/***/ 1064:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(428);

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Nicely formatted numbers
 * @param  {Number} input
 * @param  {Number} precision
 * @return {String}
 */
var niceNum = function niceNum(input, precision, format) {
  if (!isNumeric(input)) return "…";
  if (input === "N/A") return input;

  // Set the best precision
  if (isNumeric(input) && !isNumeric(precision)) {
    if (input < 0.001) precision = 4;else if (input < 0.01) precision = 3;else if (input < 0.1) precision = 2;else if (input < 10) precision = 1;else precision = 0;
  }

  if (Math.abs(input) < 10000) return input.toFixed(precision);

  var prefixes = format === "long" ? { k: " thousand", M: " million", G: " billion", T: " trillion" } : { k: "k", M: "m", G: "bn", T: "tr" };
  var formatted = (0, _d.formatPrefix)("k", input)(input);
  var scaled = +formatted.slice(0, -1);
  var symbol = formatted.slice(-1);
  return "" + scaled.toFixed(precision) + prefixes[symbol];
};

exports.default = niceNum;

/***/ },

/***/ 1065:
/***/ function(module, exports, __webpack_require__) {

var identity = __webpack_require__(23);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ },

/***/ 1066:
/***/ function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(194),
    isArrayLike = __webpack_require__(32),
    keys = __webpack_require__(39);

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

/***/ 1067:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1070);


/***/ },

/***/ 1068:
/***/ function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(1066),
    findIndex = __webpack_require__(1069);

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

/***/ 1069:
/***/ function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(722),
    baseIteratee = __webpack_require__(194),
    toInteger = __webpack_require__(373);

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


/***/ },

/***/ 1070:
/***/ function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(328),
    baseEach = __webpack_require__(192),
    castFunction = __webpack_require__(1065),
    isArray = __webpack_require__(14);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ },

/***/ 1071:
/***/ function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }

});