webpackJsonp([18,29],{

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _reactI18next = __webpack_require__(41);

var _groupBy = __webpack_require__(530);

var _groupBy2 = _interopRequireDefault(_groupBy);

var _sortBy = __webpack_require__(309);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _rcSlider = __webpack_require__(467);

var _rcSlider2 = _interopRequireDefault(_rcSlider);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _Map = __webpack_require__(1335);

var _Map2 = _interopRequireDefault(_Map);

var _SocietiesRanking = __webpack_require__(1356);

var _SocietiesRanking2 = _interopRequireDefault(_SocietiesRanking);

var _reduxTooltip = __webpack_require__(130);

var _selectors = __webpack_require__(1320);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverviewMap = function (_React$Component) {
  _inherits(OverviewMap, _React$Component);

  function OverviewMap() {
    _classCallCheck(this, OverviewMap);

    return _possibleConstructorReturn(this, (OverviewMap.__proto__ || Object.getPrototypeOf(OverviewMap)).apply(this, arguments));
  }

  _createClass(OverviewMap, [{
    key: "render",

    // shouldComponentUpdate(nextProps) {
    //   const didSelectionChange = nextProps.selectedSocieties.length !== this.props.selectedSocieties.length
    //   const didIndicatorChange = nextProps.currentIndicator !== this.props.currentIndicator
    //   const didYearChange = nextProps.currentYear !== this.props.currentYear
    //   return didIndicatorChange || didSelectionChange || didYearChange
    // }
    value: function render() {
      var _this2 = this;

      var t = this.props.t;
      var i18n = this.context.i18n;


      var nationalSocietyNames = i18n.store.data[i18n.language]["national-societies"];

      return _react2.default.createElement(
        "div",
        { className: "px1 pb3" },
        _react2.default.createElement(
          "div",
          { className: "relative clearfix mxn1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-10 sm-offset-1 md-9 md-offset-3 px1 pt1" },
            _react2.default.createElement(
              "div",
              { className: "relative ratio-16-9" },
              _react2.default.createElement(
                "div",
                { className: "ratio-content bg-white" },
                _react2.default.createElement(_Map2.default, { indicator: { id: this.props.currentIndicator },
                  data: this.props.data,
                  groupedTimeSeries: this.props.grouping,
                  currentYear: this.props.currentYear,
                  nationalSocieties: this.props.nationalSocieties,
                  societiesBlacklist: this.props.selectedSocieties,
                  bubbleClick: function bubbleClick(e, bubble, indicator) {
                    _this2.props.selectSociety(bubble.KPI_DON_Code);
                  },
                  nationalSocietyNames: nationalSocietyNames
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "clearfix mxn1" },
              _react2.default.createElement(
                "div",
                { className: "col sm-8 sm-offset-2 md-9 md-offset-0 px1" },
                _react2.default.createElement(
                  "div",
                  { className: "block text-center pb3" },
                  _react2.default.createElement(
                    "div",
                    { className: "inline-block align-middle base-10 sm-6 md-4" },
                    _react2.default.createElement(_rcSlider2.default, {
                      min: 2010,
                      max: 2015,
                      marks: {
                        2010: "2010",
                        2011: "2011",
                        2012: "2012",
                        2013: "2013",
                        2014: "2014",
                        2015: "2015"
                      },
                      step: null,
                      onChange: function onChange(year) {
                        return _this2.props.switchYear(year);
                      },
                      onAfterChange: function onAfterChange(year) {
                        return _this2.props.switchYear(year);
                      },
                      defaultValue: 2015
                    })
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "pb3" },
                  _react2.default.createElement(
                    "p",
                    { className: "text-xs" },
                    "* The boundaries and the designations used on this map do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies and are used for illustrative purposes only."
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "relative md-absolute t0 " + (this.context.i18n.language === "ar" ? "r0" : "l0") + " b0 col sm-10 sm-offset-1 md-3 md-offset-0 px1 z-index-1" },
            _react2.default.createElement(
              "div",
              { className: "shadow-3" },
              _react2.default.createElement(
                "div",
                { className: "p1" },
                _react2.default.createElement(
                  "h2",
                  { className: "text-base m0" },
                  t("overview:sorted"),
                  " ",
                  _react2.default.createElement(
                    "span",
                    { className: "color-primary" },
                    t("overview:hightolow")
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "bg-white overflow-scroll", style: { height: "31.5rem" } },
                _react2.default.createElement(_SocietiesRanking2.default, {
                  societiesList: (0, _sortBy2.default)(this.props.grouping[this.props.currentYear], function (o) {
                    return Number(o[_this2.props.currentIndicator]);
                  }),
                  currentIndicator: this.props.currentIndicator
                })
              )
            )
          )
        )
      );
    }
  }]);

  return OverviewMap;
}(_react2.default.Component);

OverviewMap.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

OverviewMap.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  nationalSocieties: _react2.default.PropTypes.array,
  timeSeriesMeta: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.array,
  grouping: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object.isRequired,
  // showTooltip: React.PropTypes.func,
  // hideTooltip: React.PropTypes.func,
  currentIndicator: _react2.default.PropTypes.string,
  currentYear: _react2.default.PropTypes.number,
  switchYear: _react2.default.PropTypes.func,
  selectedSocieties: _react2.default.PropTypes.array,
  selectSociety: _react2.default.PropTypes.func
};

OverviewMap.needs = [_appActions.fetchNationalSocieties, _appActions.fetchTimeSeries, _appActions.fetchTimeSeriesMeta];

var makeMapStateToProps = function makeMapStateToProps() {
  var groupTimeSeriesByYear = (0, _selectors.makeGroupTimeSeriesByYear)();
  return function (state, props) {
    return {
      grouping: groupTimeSeriesByYear(state, props),
      nationalSocieties: state.appReducer.nationalSocieties,
      timeSeriesMeta: state.appReducer.timeSeriesMeta,
      data: state.appReducer.timeSeries,
      currentIndicator: state.appReducer.currentIndicator,
      currentYear: state.appReducer.currentYear,
      selectedSocieties: state.appReducer.selectedSocieties
    };
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
    // hideTooltip: () => dispatch(hideTooltip()),
    switchYear: function switchYear(year) {
      return dispatch((0, _appActions.switchYear)(year));
    },
    selectSociety: function selectSociety(societyID) {
      return dispatch((0, _appActions.selectSociety)(societyID));
    }
  };
};

exports.default = (0, _reactI18next.translate)(["overview", "national-societies"], { wait: true })((0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps)(OverviewMap));

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

/***/ 1317:
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(529),
    func = convert('filter', __webpack_require__(533));

func.placeholder = __webpack_require__(307);
module.exports = func;


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

/***/ 1334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _d3Geo = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countries = function (_React$Component) {
  _inherits(Countries, _React$Component);

  function Countries() {
    _classCallCheck(this, Countries);

    return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).apply(this, arguments));
  }

  _createClass(Countries, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false; // Prevent this component from updating at all...
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "g",
        null,
        this.props.countries.map(function (country, i) {
          return country.properties.name !== "Antarctica" ? _react2.default.createElement("path", { key: i, d: (0, _d3Geo.geoPath)().projection(_this2.props.projection())(country), style: { fill: "#EFEBE9" } }) : null;
        })
      );
    }
  }]);

  return Countries;
}(_react2.default.Component);

Countries.propTypes = {
  countries: _react2.default.PropTypes.array
};

exports.default = Countries;

/***/ }),

/***/ 1335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _groupBy = __webpack_require__(530);

var _groupBy2 = _interopRequireDefault(_groupBy);

var _minBy = __webpack_require__(1331);

var _minBy2 = _interopRequireDefault(_minBy);

var _maxBy = __webpack_require__(1330);

var _maxBy2 = _interopRequireDefault(_maxBy);

var _reduxTooltip = __webpack_require__(130);

var _Countries = __webpack_require__(1334);

var _Countries2 = _interopRequireDefault(_Countries);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _d = __webpack_require__(177);

var _d3Geo = __webpack_require__(2);

var _d3GeoProjection = __webpack_require__(316);

var _topojsonClient = __webpack_require__(313);

var _selectors = __webpack_require__(1320);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGOrigin = _reduxTooltip.Origin.wrapBy("g");

var Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    var _this$props = _this.props,
        groupedTimeSeries = _this$props.groupedTimeSeries,
        currentYear = _this$props.currentYear,
        indicator = _this$props.indicator;

    var currentYearData = groupedTimeSeries[currentYear];

    var maxArray = Object.keys(groupedTimeSeries).map(function (year) {
      var id = indicator.id;

      return Number((0, _maxBy2.default)(groupedTimeSeries[year], function (o) {
        return Number(o[id]);
      })[id]);
    });

    var min = 0;
    var max = Number((0, _maxBy2.default)(maxArray));

    _this.state = {
      countries: _this.props.countryPaths ? (0, _topojsonClient.feature)(props.countryPaths, props.countryPaths.objects.countries).features : null,
      loading: !_this.props.countryPaths ? true : false,
      currentYearData: currentYearData,
      minData: min,
      maxData: max,
      scale: (0, _d.scaleLinear)().domain([min, max]).range([2, 50])
    };
    return _this;
  }

  _createClass(Map, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if(nextProps.indicator.id !== this.props.indicator.id) {
      // }
      var groupedTimeSeries = nextProps.groupedTimeSeries,
          currentYear = nextProps.currentYear,
          indicator = nextProps.indicator;

      var currentYearData = groupedTimeSeries[currentYear];
      var maxArray = Object.keys(groupedTimeSeries).map(function (year) {
        var id = indicator.id;

        return Number((0, _maxBy2.default)(groupedTimeSeries[year], function (o) {
          return Number(o[id]);
        })[id]);
      });
      var min = 0;
      var max = (0, _maxBy2.default)(maxArray);

      this.setState({
        currentYearData: currentYearData,
        minData: min,
        maxData: max,
        scale: (0, _d.scaleLinear)().domain([min, max]).range([2, 50])
      });

      if (nextProps.countryPaths !== this.props.countryPaths) {
        this.setState({
          countries: (0, _topojsonClient.feature)(nextProps.countryPaths, nextProps.countryPaths.objects.countries).features,
          loading: false
        });
      }
    }
  }, {
    key: "projection",
    value: function projection() {
      return (0, _d3GeoProjection.geoNaturalEarth)().scale(160).translate([800 / 2, 480 / 2])
      // .rotate([this.props.center ? -this.props.center[1] : 0, this.props.center ? -this.props.center[0] : 0,0])
      .rotate([-10, 0, 0]).precision(.1);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var groups = (0, _groupBy2.default)(this.props.data, "year");
      if (!this.props.countryPaths) {
        this.props.fetchCountries();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          indicator = _props.indicator,
          nationalSocieties = _props.nationalSocieties;


      var tooltipContent = function tooltipContent(name, kpi, value) {
        return _react2.default.createElement(
          "div",
          { className: "text-center p1", style: { maxWidth: 240 } },
          _react2.default.createElement(
            "div",
            null,
            name
          ),
          _react2.default.createElement(
            "div",
            { className: "title my1" },
            _react2.default.createElement(
              "strong",
              null,
              (0, _niceNum2.default)(Math.round(value), null, null, true)
            )
          )
        );
      };

      var nationalSocietiesByID = _.keyBy(nationalSocieties, 'KPI_DON_Code');

      var currentYearData = _.sortBy(this.state.currentYearData, function (item) {
        return -Number(item[_this2.props.indicator.id]);
      });

      return _react2.default.createElement(
        "div",
        { className: "", style: { clear: "left", minHeight: '10rem' } },
        this.state.loading ? _react2.default.createElement(
          "div",
          { className: "absolute t25 base-12 text-center" },
          _react2.default.createElement(
            "span",
            { className: "inline-block bg-secondary p1" },
            "Loading map..."
          )
        ) : null,
        _react2.default.createElement(
          "div",
          { style: { opacity: this.state.loading ? 0 : 1, transform: "translateY(" + (this.state.loading ? '30px' : '0') + ")", transition: "all 0.75s" } },
          _react2.default.createElement(
            "svg",
            { style: { width: "100%" }, width: 800, height: 480, viewBox: "0 0 800 480" },
            !this.state.loading ? _react2.default.createElement(_Countries2.default, { countries: this.state.countries, projection: this.projection }) : null,
            !this.state.loading ? currentYearData.map(function (bubble, i) {

              var lat = Number(nationalSocietiesByID[bubble.KPI_DON_Code].lat);
              var long = Number(nationalSocietiesByID[bubble.KPI_DON_Code].long);
              var coords = long && lat ? [long, lat] : undefined;
              var bubbleData = bubble[_this2.props.indicator.id];

              if (bubbleData && coords) {
                return _react2.default.createElement(
                  SVGOrigin,
                  {
                    content: tooltipContent(_this2.props.nationalSocietyNames[bubble.KPI_DON_Code], _this2.props.indicator.id, bubbleData),
                    key: bubble.KPI_DON_Code },
                  _react2.default.createElement("circle", {
                    cx: _this2.projection()(coords)[0],
                    cy: _this2.projection()(coords)[1],
                    r: bubbleData ? _this2.state.scale(Number(bubbleData)) : 0,
                    style: {
                      fill: _this2.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || _this2.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.1)",
                      stroke: "#fff",
                      strokeWidth: "1.5px",
                      cursor: "pointer"
                    },
                    onClick: function onClick(e) {
                      return _this2.props.bubbleClick(e, bubble, bubbleData);
                    }
                  })
                );
              }
            }) : null
          )
        )
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

Map.defaultProps = {
  // bubbleMouseEnter: null,
  // bubbleMouseLeave: null,
  bubbleClick: null
};

Map.propTypes = {
  indicator: _react2.default.PropTypes.object.isRequired,
  data: _react2.default.PropTypes.array,
  nationalSocieties: _react2.default.PropTypes.array,
  countryPaths: _react2.default.PropTypes.object
};

Map.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

var makeMapStateToProps = function makeMapStateToProps() {
  var getIndicatorData = (0, _selectors.makeGetIndicatorData)();
  return function (state, props) {
    return {
      data: getIndicatorData(state, props),
      countryPaths: state.appReducer.countryPaths,
      fetchingCountries: state.appReducer.fetchingCountries
    };
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCountries: function fetchCountries() {
      return dispatch((0, _appActions.fetchCountries)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps)(Map);

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocietiesRanking = function (_React$Component) {
  _inherits(SocietiesRanking, _React$Component);

  function SocietiesRanking() {
    _classCallCheck(this, SocietiesRanking);

    return _possibleConstructorReturn(this, (SocietiesRanking.__proto__ || Object.getPrototypeOf(SocietiesRanking)).apply(this, arguments));
  }

  _createClass(SocietiesRanking, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var t = this.props.t;


      return _react2.default.createElement(
        "ul",
        { className: "m0 p0" },
        this.props.societiesList.reverse().map(function (society, i) {
          return _react2.default.createElement(
            "li",
            { className: "block", key: i, style: { background: i % 2 === 0 ? "rgba(0,0,0,0.05)" : "transparent" } },
            _react2.default.createElement(
              "button",
              { className: "relative block btn base-12 pl15 pr4 text-left overflow-hidden text-xs" },
              _react2.default.createElement(
                "div",
                { className: "overflow-hidden", style: { whiteSpace: "nowrap", textOverflow: "ellipsis" } },
                t("national-societies:" + society.KPI_DON_Code)
              ),
              _react2.default.createElement(
                "div",
                { className: "absolute t50 r0 y-center-self text-center color-secondary text-xs", style: { width: "4rem" } },
                (0, _niceNum2.default)(society[_this2.props.currentIndicator], null, null, false)
              )
            )
          );
        })
      );
    }
  }]);

  return SocietiesRanking;
}(_react2.default.Component);

SocietiesRanking.propTypes = {
  currentIndicator: _react2.default.PropTypes.string,
  societiesList: _react2.default.PropTypes.array,
  nationalSocieties: _react2.default.PropTypes.array,
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)(["national-societies"], { wait: true })(SocietiesRanking);

/***/ })

});