webpackJsonp([17,29],{

/***/ 1308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _groupBy = __webpack_require__(530);

var _groupBy2 = _interopRequireDefault(_groupBy);

var _reactRedux = __webpack_require__(27);

var _reactI18next = __webpack_require__(41);

var _SocietiesTable = __webpack_require__(1360);

var _SocietiesTable2 = _interopRequireDefault(_SocietiesTable);

var _selectors = __webpack_require__(1320);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverviewTable = function (_React$Component) {
  _inherits(OverviewTable, _React$Component);

  function OverviewTable() {
    _classCallCheck(this, OverviewTable);

    return _possibleConstructorReturn(this, (OverviewTable.__proto__ || Object.getPrototypeOf(OverviewTable)).apply(this, arguments));
  }

  _createClass(OverviewTable, [{
    key: "render",

    // shouldComponentUpdate(nextProps) {
    //   const didIndicatorChange = nextProps.currentIndicator !== this.props.currentIndicator
    //   return didIndicatorChange
    // }
    value: function render() {
      var t = this.props.t;


      return _react2.default.createElement(
        "div",
        { className: "px1" },
        _react2.default.createElement(
          "div",
          { className: "relative clearfix mxn1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-10 sm-offset-1 px1 pt1" },
            _react2.default.createElement(_SocietiesTable2.default, {
              filterPlaceholder: t("overview:filterPlaceholder"),
              currentYear: this.props.currentYear,
              currentIndicator: { id: this.props.currentIndicator },
              societiesBlacklist: [],
              groupedTimeSeries: this.props.grouping,
              groupedByCode: (0, _groupBy2.default)(this.props.data, "KPI_DON_Code"),
              handleIndicatorSelect: function handleIndicatorSelect() {
                console.log("Selected indicator");
              },
              handleUnselectSociety: function handleUnselectSociety() {
                console.log("Unselected NS");
              },
              handleNSSelect: function handleNSSelect() {
                console.log("Selected NS");
              },
              handleYearSelect: function handleYearSelect() {
                console.log("Selected Year");
              }
            })
          )
        )
      );
    }
  }]);

  return OverviewTable;
}(_react2.default.Component);

OverviewTable.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

OverviewTable.propTypes = {
  t: _react2.default.PropTypes.func.isRequired,
  nationalSocieties: _react2.default.PropTypes.array,
  timeSeriesMeta: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.array,
  grouping: _react2.default.PropTypes.object,
  params: _react2.default.PropTypes.object.isRequired,
  showTooltip: _react2.default.PropTypes.func,
  hideTooltip: _react2.default.PropTypes.func,
  currentIndicator: _react2.default.PropTypes.string,
  selectSociety: _react2.default.PropTypes.func,
  unselectSociety: _react2.default.PropTypes.func,
  clearSocieties: _react2.default.PropTypes.func,
  currentYear: _react2.default.PropTypes.number
};

OverviewTable.needs = [_appActions.fetchNationalSocieties, _appActions.fetchTimeSeries, _appActions.fetchTimeSeriesMeta];

var makeMapStateToProps = function makeMapStateToProps() {
  var groupTimeSeriesByYear = (0, _selectors.makeGroupTimeSeriesByYear)();
  return function (state, props) {
    return {
      grouping: groupTimeSeriesByYear(state, props),
      nationalSocieties: state.appReducer.nationalSocieties,
      timeSeriesMeta: state.appReducer.timeSeriesMeta,
      data: state.appReducer.timeSeries,
      currentIndicator: state.appReducer.currentIndicator,
      currentYear: state.appReducer.currentYear
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
    selectSociety: function selectSociety(societyID) {
      return dispatch((0, _appActions.selectSociety)(societyId));
    },
    unselectSociety: function unselectSociety(societyID) {
      return dispatch((0, _appActions.unselectSociety)(societyId));
    },
    clearSocieties: function clearSocieties() {
      return dispatch((0, _appActions.clearSocieties)());
    }
  };
};

exports.default = (0, _reactI18next.translate)("overview", { wait: true })((0, _reactRedux.connect)(makeMapStateToProps, mapDispatchToProps)(OverviewTable));

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

/***/ 1349:
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

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _victory = __webpack_require__(306);

var _appActions = __webpack_require__(69);

var _sortBy = __webpack_require__(309);

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function recalculateDataPoints(allYears, nsData, currentIndicator) {

  allYears = ["2010", "2011", "2012", "2013", "2014", "2015"];

  return allYears.map(function (year) {
    var filtered = nsData.filter(function (obj) {
      return obj.KPI_Year === year;
    })[0];

    return {
      x: new Date(year, 1, 1),
      y: filtered ? filtered[currentIndicator.id] ? Number(filtered[currentIndicator.id]) : null : null
    };
  });
}

var Trendline = function (_React$Component) {
  _inherits(Trendline, _React$Component);

  function Trendline(props) {
    _classCallCheck(this, Trendline);

    var _this = _possibleConstructorReturn(this, (Trendline.__proto__ || Object.getPrototypeOf(Trendline)).call(this, props));

    var nationalSociety = props.nationalSociety,
        groupedTimeSeries = props.groupedTimeSeries,
        groupedByCode = props.groupedByCode,
        currentIndicator = props.currentIndicator;


    var allYears = Object.keys(groupedTimeSeries);
    var nsData = (0, _sortBy2.default)(groupedByCode[nationalSociety.KPI_DON_Code], "KPI_Year");

    _this.state = {
      allYears: allYears,
      nsData: nsData,
      dataPoints: recalculateDataPoints(allYears, nsData, currentIndicator)
    };
    return _this;
  }
  // shouldComponentUpdate(nextProps) {
  //   const didIndicatorChange = nextProps.indicator && this.props.indicator ? nextProps.indicator.id !== this.props.indicator.id : false
  //   return didIndicatorChange
  // }


  _createClass(Trendline, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentIndicator.id !== this.props.currentIndicator.id) {
        this.setState({
          dataPoints: recalculateDataPoints(this.state.allYears, this.state.nsData, nextProps.currentIndicator)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var dataPoints = this.state.dataPoints;


      return _react2.default.createElement(
        "div",
        { className: "relative" },
        _react2.default.createElement("div", { className: "absolute b0 l0 small" }),
        _react2.default.createElement(
          "div",
          { className: "absolute t0 r0 small" },
          (0, _niceNum2.default)(dataPoints[dataPoints.length - 1].y)
        ),
        _react2.default.createElement(
          "svg",
          { style: { width: "100%" }, width: "450", height: "110", viewBox: "0 0 450 110" },
          _react2.default.createElement(_victory.VictoryLine, {
            standalone: false,
            height: 110,
            padding: { top: 40, bottom: 30, left: 5, right: 5 },
            domain: {
              x: [new Date(2010, 1, 1), new Date(2015, 1, 1)]
            },
            data: dataPoints,
            style: {
              data: { stroke: "#D0021B" }
            }
          }),
          _react2.default.createElement(_victory.VictoryScatter, {
            standalone: false,
            height: 110,
            padding: { top: 40, bottom: 30, left: 5, right: 5 },
            domain: {
              x: [new Date(2010, 1, 1), new Date(2015, 1, 1)]
            },
            data: dataPoints,
            size: 4,
            style: {
              data: {
                fill: function fill(d) {
                  return d.y || d.y === 0 ? "#D0021B" : "transparent";
                },
                stroke: "#FFF",
                strokeWidth: function strokeWidth(d) {
                  return d.y || d.y === 0 ? 2 : 0;
                }
              }
            }
          })
        )
      );
    }
  }]);

  return Trendline;
}(_react2.default.Component);

var SocietyRow = function (_React$Component2) {
  _inherits(SocietyRow, _React$Component2);

  function SocietyRow(props) {
    _classCallCheck(this, SocietyRow);

    return _possibleConstructorReturn(this, (SocietyRow.__proto__ || Object.getPrototypeOf(SocietyRow)).call(this, props));
  }
  // shouldComponentUpdate(nextProps) {
  //   const didIndicatorChange = nextProps.indicator && this.props.indicator ? nextProps.indicator.id !== this.props.indicator.id : false
  //   return didIndicatorChange || Boolean(this.props.forceUpdate)
  // }


  _createClass(SocietyRow, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          nationalSociety = _props.nationalSociety,
          groupedTimeSeries = _props.groupedTimeSeries,
          groupedByCode = _props.groupedByCode,
          currentIndicator = _props.currentIndicator,
          unselectSociety = _props.unselectSociety;


      return _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          { className: "px1 py05 base-4" },
          _react2.default.createElement(
            _LanguageLink2.default,
            { to: "/fdrs/societies/" + nationalSociety.slug, className: "color-primary" },
            nationalSociety.NSO_DON_name
          )
        ),
        _react2.default.createElement(
          "td",
          { className: "py05 px1 base-4" },
          _react2.default.createElement(Trendline, {
            nationalSociety: nationalSociety,
            groupedTimeSeries: groupedTimeSeries,
            groupedByCode: groupedByCode,
            currentIndicator: currentIndicator
          })
        ),
        _react2.default.createElement(
          "td",
          { className: "px1 py05 base-4" },
          _react2.default.createElement(
            "div",
            { className: "p1 relative" },
            _react2.default.createElement(
              "span",
              null,
              (0, _niceNum2.default)(nationalSociety.value, 0, null, true)
            ),
            unselectSociety ? _react2.default.createElement(
              "button",
              { onClick: function onClick(e) {
                  return unselectSociety(nationalSociety.KPI_DON_Code);
                }, style: { right: 16 }, className: "btn absolute t50 y-center-self bg-primary" },
              "remove"
            ) : null
          )
        )
      );
    }
  }]);

  return SocietyRow;
}(_react2.default.Component);

exports.default = SocietyRow;

/***/ }),

/***/ 1357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _victory = __webpack_require__(306);

var _SocietyRow = __webpack_require__(1349);

var _SocietyRow2 = _interopRequireDefault(_SocietyRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllSocieties = function (_React$Component) {
  _inherits(AllSocieties, _React$Component);

  function AllSocieties() {
    _classCallCheck(this, AllSocieties);

    return _possibleConstructorReturn(this, (AllSocieties.__proto__ || Object.getPrototypeOf(AllSocieties)).apply(this, arguments));
  }

  _createClass(AllSocieties, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          nationalSocieties = _props.nationalSocieties,
          selectedSocieties = _props.selectedSocieties,
          societiesBlacklist = _props.societiesBlacklist,
          groupedTimeSeries = _props.groupedTimeSeries,
          groupedByCode = _props.groupedByCode,
          currentIndicator = _props.currentIndicator,
          currentYear = _props.currentYear,
          currentDataset = _props.currentDataset,
          sum = _props.sum;


      return _react2.default.createElement(
        "div",
        null,
        selectedSocieties.length > 0 ? _react2.default.createElement(
          "div",
          { className: "clearfix relative my2" },
          _react2.default.createElement("hr", null),
          _react2.default.createElement(
            "div",
            { className: "absolute t0 l0 y-center-self px1 bg-white color-primary small strong" },
            "All National Societies"
          )
        ) : null,
        _react2.default.createElement(
          "table",
          { className: "base-12 text-left shadow-3" },
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "p1 base-4" },
                "IFRC (all National Societies)"
              ),
              _react2.default.createElement(
                "td",
                { className: "p1 base-4" },
                " "
              ),
              _react2.default.createElement(
                "td",
                { className: "p1 base-4" },
                (0, _niceNum2.default)(sum, 0, null, true)
              )
            ),
            currentDataset.map(function (NS, i) {
              return selectedSocieties.indexOf(NS.KPI_DON_Code) == -1 ? _react2.default.createElement(_SocietyRow2.default, {
                nationalSociety: NS,
                nationalSocieties: nationalSocieties,
                key: NS.KPI_DON_Code,
                rowKey: NS.KPI_DON_Code,
                groupedTimeSeries: groupedTimeSeries,
                groupedByCode: groupedByCode,
                currentDataset: currentDataset,
                currentIndicator: currentIndicator,
                currentYear: currentYear,
                societiesBlacklist: societiesBlacklist
              }) : null;
            })
          )
        )
      );
    }
  }]);

  return AllSocieties;
}(_react2.default.Component);

// <tr key={ i }></tr>

// const mapStateToProps = state => ({
//   nationalSocieties: state.appReducer.nationalSocieties
// })

// export default connect(mapStateToProps)(AllSocieties)


exports.default = AllSocieties;

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SocietiesTableHeader = function (_React$Component) {
  _inherits(SocietiesTableHeader, _React$Component);

  function SocietiesTableHeader() {
    _classCallCheck(this, SocietiesTableHeader);

    return _possibleConstructorReturn(this, (SocietiesTableHeader.__proto__ || Object.getPrototypeOf(SocietiesTableHeader)).apply(this, arguments));
  }

  _createClass(SocietiesTableHeader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          t = _props.t,
          currentYear = _props.currentYear,
          sortDataset = _props.sortDataset,
          sortParams = _props.sortParams,
          up = _props.up,
          down = _props.down;


      return _react2.default.createElement(
        "table",
        { className: "base-12 text-left bg-secondary mb2" },
        _react2.default.createElement(
          "tbody",
          { className: "shadow-3" },
          _react2.default.createElement(
            "tr",
            null,
            _react2.default.createElement(
              "th",
              { className: "p1 base-4 sm-4" },
              t("overview:tableHeaders")[0]
            ),
            _react2.default.createElement(
              "th",
              { className: "p1 base-4 sm-4" },
              t("overview:tableHeaders")[1]
            ),
            _react2.default.createElement(
              "th",
              { className: "p1 base-4 sm-4 relative" },
              t("overview:tableHeaders")[2],
              " ",
              currentYear
            )
          )
        )
      );
    }
  }]);

  return SocietiesTableHeader;
}(_react2.default.Component);

// const SocietiesTableHeader = ({ currentYear, sortDataset, sortParams, up, down }) => (
//   <table className="base-12 text-left mb2">
//     <tbody>
//       <tr className="shadow-2">
//         <th className="p1 base-4 sm-4">{ headers[0] }</th>
//         <th className="p1 base-4 sm-4">{ headers[1] }</th>
//         <th className="p1 base-4 sm-4 relative">
//           { headers[2] } { currentYear }
//           <button className="btn" onClick={ () => sortDataset({ sortBy: "indicator", reverse: !sortParams.reverse }) }>
//             <svg width="16px" height="16px" viewBox="0 0 28 28" style={{marginTop:-5}}>
//               <polyline  fill="none" stroke="#D0021B" strokeWidth="4" strokeLinecap="square" strokeMiterlimit="10" points={ sortParams.reverse ? up : down } transform="translate(0, 0)" strokeLinejoin="miter"/>
//             </svg>
//           </button>
//         </th>
//       </tr>
//     </tbody>
//   </table>
// )

SocietiesTableHeader.defaultProps = {
  up: "24,20 14,10 4,20",
  down: "24,10 14,20 4,10"
};

exports.default = (0, _reactI18next.translate)("overview", { wait: true })(SocietiesTableHeader);

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _niceNum = __webpack_require__(1313);

var _niceNum2 = _interopRequireDefault(_niceNum);

var _victory = __webpack_require__(306);

var _SocietyRow = __webpack_require__(1349);

var _SocietyRow2 = _interopRequireDefault(_SocietyRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedSocieties = function SelectedSocieties(_ref) {
  var selectedSocieties = _ref.selectedSocieties,
      societiesBlacklist = _ref.societiesBlacklist,
      groupedTimeSeries = _ref.groupedTimeSeries,
      groupedByCode = _ref.groupedByCode,
      currentIndicator = _ref.currentIndicator,
      currentYear = _ref.currentYear,
      currentDataset = _ref.currentDataset,
      nationalSocieties = _ref.nationalSocieties,
      unselectSociety = _ref.unselectSociety;
  return _react2.default.createElement(
    "div",
    null,
    selectedSocieties.length > 0 ? _react2.default.createElement(
      "table",
      { className: "base-12 text-left shadow-3" },
      _react2.default.createElement(
        "tbody",
        null,
        selectedSocieties.map(function (NS, i) {
          var nationalSociety = currentDataset.filter(function (o) {
            return o.KPI_DON_Code === NS;
          })[0];
          return _react2.default.createElement(_SocietyRow2.default, {
            forceUpdate: true,
            nationalSociety: nationalSociety,
            nationalSocieties: nationalSocieties,
            key: NS,
            rowKey: NS,
            groupedTimeSeries: groupedTimeSeries,
            groupedByCode: groupedByCode,
            currentDataset: currentDataset,
            currentIndicator: currentIndicator,
            currentYear: currentYear,
            societiesBlacklist: societiesBlacklist,
            unselectSociety: unselectSociety
          });
        })
      )
    ) : null
  );
};

exports.default = SelectedSocieties;

/***/ }),

/***/ 1360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _reactSelect = __webpack_require__(70);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Header = __webpack_require__(1358);

var _Header2 = _interopRequireDefault(_Header);

var _SelectedSocieties = __webpack_require__(1359);

var _SelectedSocieties2 = _interopRequireDefault(_SelectedSocieties);

var _AllSocieties = __webpack_require__(1357);

var _AllSocieties2 = _interopRequireDefault(_AllSocieties);

var _sortBy = __webpack_require__(309);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _appActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _sortDataset(timeSeries, currentYear, currentIndicator, nationalSocieties, reverse) {
  var currentDataset = timeSeries[currentYear].map(function (o) {
    var societyMeta = nationalSocieties.filter(function (ns) {
      return ns.KPI_DON_Code === o.KPI_DON_Code;
    })[0];

    return {
      slug: societyMeta.slug,
      NSO_DON_name: societyMeta.NSO_DON_name,
      KPI_DON_Code: o.KPI_DON_Code,
      value: Number(o[currentIndicator.id])
    };
  });

  return reverse ? (0, _sortBy2.default)(currentDataset, function (o) {
    return o.value;
  }) : (0, _sortBy2.default)(currentDataset, function (o) {
    return o.value;
  }).reverse();
}

function recalculateTableState(nextProps, sortParams) {
  var groupedTimeSeries = nextProps.groupedTimeSeries,
      currentYear = nextProps.currentYear,
      currentIndicator = nextProps.currentIndicator,
      nationalSocieties = nextProps.nationalSocieties;


  var newCurrentDataset = _sortDataset(groupedTimeSeries, currentYear, currentIndicator, nationalSocieties, sortParams.reverse);
  var newCurrentDatasetSum = newCurrentDataset.map(function (o) {
    return o.value;
  }).reduce(function (a, b) {
    return a + b;
  });
  var newCurrentYear = currentYear;

  return {
    currentDataset: newCurrentDataset,
    currentDatasetSum: newCurrentDatasetSum,
    currentYear: newCurrentYear,
    sortParams: sortParams
  };
}

var SocietiesTable = function (_React$Component) {
  _inherits(SocietiesTable, _React$Component);

  function SocietiesTable(props) {
    _classCallCheck(this, SocietiesTable);

    var _this = _possibleConstructorReturn(this, (SocietiesTable.__proto__ || Object.getPrototypeOf(SocietiesTable)).call(this, props));

    _this.state = recalculateTableState(props, {
      sortBy: "indicator",
      reverse: false
    });

    _this.sortDataset = _this.sortDataset.bind(_this);
    return _this;
  }

  _createClass(SocietiesTable, [{
    key: "sortDataset",
    value: function sortDataset(sortParams) {
      this.setState({
        currentDataset: _sortDataset(this.props.groupedTimeSeries, this.props.currentYear, this.props.currentIndicator, this.props.nationalSocieties, sortParams.reverse),
        sortParams: sortParams
      });
    }

    // shouldComponentUpdate(nextProps) {
    //   const didYearChange = nextProps.currentYear !== this.props.currentYear
    //   const didIndicatorChange = nextProps.currentIndicator.id !== this.props.currentIndicator.id
    //   const didSelectionChange = nextProps.selectedSocieties.length !== this.props.selectedSocieties.length
    //
    //   return didYearChange || didIndicatorChange || didSelectionChange
    // }

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {

      var differentIndicator = nextProps.currentIndicator.id !== this.props.currentIndicator.id;
      var differentYear = nextProps.currentYear !== this.props.currentYear;

      if (differentIndicator) {
        this.setState(recalculateTableState(nextProps, this.state.sortParams));
      } else if (differentYear) {
        this.setState(recalculateTableState(nextProps, this.state.sortParams));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var placeholder = _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          { style: { paddingLeft: "0.5rem" } },
          this.props.filterPlaceholder
        )
      );

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, {
          currentYear: this.props.currentYear,
          sortDataset: this.sortDataset,
          sortParams: this.state.sortParams
        }),
        _react2.default.createElement(
          "div",
          { className: "mb2 px1" },
          _react2.default.createElement(_reactSelect2.default, {
            searchable: true,
            clearable: false,
            placeholder: placeholder,
            multi: false,
            name: "ns-selector",
            options: this.props.nationalSocieties.map(function (ns) {
              return {
                value: ns.KPI_DON_Code,
                label: ns.NSO_DON_name,
                slug: ns.slug
              };
            }),
            onChange: function onChange(society) {
              var societyAlreadySelected = _this2.props.selectedSocieties.indexOf(society.value) !== -1;
              if (societyAlreadySelected) return;else _this2.props.selectSociety(society.value);
              // this.props.handleNSSelect
            }
          })
        ),
        _react2.default.createElement(_SelectedSocieties2.default, {
          currentYear: this.props.currentYear,
          currentIndicator: this.props.currentIndicator,
          selectedSocieties: this.props.selectedSocieties,
          societiesBlacklist: this.props.societiesBlacklist,
          groupedTimeSeries: this.props.groupedTimeSeries,
          groupedByCode: this.props.groupedByCode,
          currentDataset: this.state.currentDataset,
          unselectSociety: this.props.unselectSociety
        }),
        _react2.default.createElement(_AllSocieties2.default, {
          sum: this.state.currentDatasetSum,
          currentYear: this.props.currentYear,
          currentIndicator: this.props.currentIndicator,
          selectedSocieties: this.props.selectedSocieties,
          societiesBlacklist: this.props.societiesBlacklist,
          groupedTimeSeries: this.props.groupedTimeSeries,
          groupedByCode: this.props.groupedByCode,
          currentDataset: this.state.currentDataset
        })
      );
    }
  }]);

  return SocietiesTable;
}(_react2.default.Component);

SocietiesTable.propTypes = {
  currentYear: _react2.default.PropTypes.number,
  currentIndicator: _react2.default.PropTypes.object,
  selectedSocieties: _react2.default.PropTypes.array,
  societiesBlacklist: _react2.default.PropTypes.array,
  groupedTimeSeries: _react2.default.PropTypes.object,
  groupedByCode: _react2.default.PropTypes.object,
  handleIndicatorSelect: _react2.default.PropTypes.func,
  handleUnselectSociety: _react2.default.PropTypes.func,
  handleNSSelect: _react2.default.PropTypes.func,
  handleYearSelect: _react2.default.PropTypes.func,
  nationalSocieties: _react2.default.PropTypes.array,
  selectSociety: _react2.default.PropTypes.func,
  unselectSociety: _react2.default.PropTypes.func,
  clearSocieties: _react2.default.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    nationalSocieties: state.appReducer.nationalSocieties,
    selectedSocieties: state.appReducer.selectedSocieties
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    selectSociety: function selectSociety(societyID) {
      return dispatch((0, _appActions.selectSociety)(societyID));
    },
    unselectSociety: function unselectSociety(societyID) {
      return dispatch((0, _appActions.unselectSociety)(societyID));
    },
    clearSocieties: function clearSocieties() {
      return dispatch((0, _appActions.clearSocieties)());
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SocietiesTable);

/***/ })

});