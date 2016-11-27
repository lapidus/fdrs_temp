webpackJsonp([10],{

/***/ 1030:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeadlineDivider = function HeadlineDivider() {
  return _react2.default.createElement(
    "div",
    { className: "headline-divider" },
    _react2.default.createElement(
      "svg",
      { viewBox: "0 0 30 20" },
      _react2.default.createElement("polyline", {
        points: "2 0 2 16 20 2 30 2",
        strokeWidth: "4",
        stroke: "#EE3224",
        fill: "transparent"
      })
    )
  );
};

exports.default = HeadlineDivider;

/***/ },

/***/ 1042:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(74);

var _NextChapter = __webpack_require__(1049);

var _NextChapter2 = _interopRequireDefault(_NextChapter);

var _Breadcrumbs = __webpack_require__(1048);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _HeadlineDivider = __webpack_require__(1030);

var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

var _SideNavigation = __webpack_require__(1050);

var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

var _SimpleBarChart = __webpack_require__(1055);

var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

var _LineChart = __webpack_require__(1052);

var _LineChart2 = _interopRequireDefault(_LineChart);

var _DonutChart = __webpack_require__(1054);

var _DonutChart2 = _interopRequireDefault(_DonutChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chapter9 = function (_React$Component) {
  _inherits(Chapter9, _React$Component);

  function Chapter9() {
    _classCallCheck(this, Chapter9);

    return _possibleConstructorReturn(this, (Chapter9.__proto__ || Object.getPrototypeOf(Chapter9)).apply(this, arguments));
  }

  _createClass(Chapter9, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted Enabling Action 3");
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.i18n.language !== nextContext.i18n.language;
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var i18n = this.context.i18n;
      var language = i18n.language;

      var chapter = i18n.store.data[language]["report-enabling-action-3"];

      var _chapter$sections = _slicedToArray(chapter.sections, 7),
          section0 = _chapter$sections[0],
          section1 = _chapter$sections[1],
          section2 = _chapter$sections[2],
          section3 = _chapter$sections[3],
          section4 = _chapter$sections[4],
          section5 = _chapter$sections[5],
          section6 = _chapter$sections[6];

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary-dark" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: language })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary pt1" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
            _react2.default.createElement(
              "h2",
              { className: "display-2" },
              chapter.title
            ),
            _react2.default.createElement(
              "p",
              { className: "title" },
              chapter.subtitle
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-9.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center 50%", backgroundSize: "cover" } },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
            _react2.default.createElement(
              "p",
              { className: "lead" },
              chapter.intro
            ),
            _react2.default.createElement("hr", null)
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix body-text", style: { position: "relative" } },
          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section0", "scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4", "scroll-target-section5", "scroll-target-section6"] }),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section0" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[0]
              ),
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[1]
              ),
              _react2.default.createElement(_DonutChart2.default, {
                title: section0.blocks[2].title,
                caption: section0.blocks[2].caption,
                maxSize: 480,
                dataset: section0.blocks[2].dataset }),
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section1" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section1.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section1.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px2 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-2 pb2" },
              _react2.default.createElement("img", { src: "/img/chapters/9/accountability-wheel" + (this.context.language != "en" ? "-" + this.context.language : "") + ".jpg" }),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section1.blocks[1].caption
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-4 lg-offset-0 pb2" },
              _react2.default.createElement(
                "p",
                null,
                section1.blocks[2]
              ),
              _react2.default.createElement(
                "p",
                null,
                section1.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section2" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section2.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[0]
              ),
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[1]
              ),
              _react2.default.createElement(_SimpleBarChart2.default, {
                title: section2.blocks[2].title,
                caption: section2.blocks[2].caption,
                horizontal: true,
                height: 300,
                data: section2.blocks[2].dataset,
                labels: function labels(datum) {
                  return datum.xName + " (" + String(datum.y) + ")";
                }
              }),
              _react2.default.createElement(
                "p",
                null,
                section2.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section3" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section3.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section3.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
              _react2.default.createElement(
                "h4",
                { className: "title strong" },
                section3.blocks[1].title
              ),
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "thead",
                  null,
                  _react2.default.createElement(
                    "tr",
                    { className: "small" },
                    _react2.default.createElement(
                      "th",
                      null,
                      "Income level"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "%"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "Paid staff"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "%"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "-"
                    )
                  )
                ),
                _react2.default.createElement(
                  "tbody",
                  null,
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "Above CHF 1 million"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "87%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "Above 25"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "77%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "Below CHF 1 million"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "55%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "Below 25"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "47%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section3.blocks[1].caption
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
              _react2.default.createElement(
                "h4",
                { className: "title strong" },
                section3.blocks[2].title
              ),
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "thead",
                  null,
                  _react2.default.createElement(
                    "tr",
                    { className: "small" },
                    _react2.default.createElement(
                      "th",
                      null,
                      "Income level"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "%"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "Paid staff"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "%"
                    ),
                    _react2.default.createElement(
                      "th",
                      null,
                      "-"
                    )
                  )
                ),
                _react2.default.createElement(
                  "tbody",
                  null,
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "Above CHF 10 million"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "81%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "Above 250"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "64%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "Below CHF 10 million"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "42%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "Below 250"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "36%"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "-"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section3.blocks[2].caption
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section3.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section4" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section4.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section4.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2" },
              _react2.default.createElement(
                "div",
                { className: "bg-secondary p2" },
                _react2.default.createElement(
                  "h4",
                  { className: "title strong" },
                  section4.blocks[1]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section4.blocks[2]
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section4.blocks[3]
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section5" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section5.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2" },
              _react2.default.createElement(_SimpleBarChart2.default, {
                title: section5.blocks[1].title,
                caption: section5.blocks[1].caption,
                horizontal: true,
                height: 360,
                data: section5.blocks[1].dataset,
                labels: function labels(datum) {
                  return datum.xName + " " + String(datum.y);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2" },
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[2]
              ),
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[3]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[4]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-6 lg-offset-3 pb2" },
              _react2.default.createElement(
                "h4",
                { className: "title strong" },
                section5.blocks[5].title
              ),
              _react2.default.createElement(
                "table",
                null,
                _react2.default.createElement(
                  "thead",
                  null,
                  _react2.default.createElement(
                    "tr",
                    { className: "small" },
                    _react2.default.createElement(
                      "th",
                      { style: { width: "20%" } },
                      "Year"
                    ),
                    _react2.default.createElement(
                      "th",
                      { style: { width: "40%" } },
                      "No. of IMPACT courses"
                    ),
                    _react2.default.createElement(
                      "th",
                      { style: { width: "40%" } },
                      "No. of participants"
                    )
                  )
                ),
                _react2.default.createElement(
                  "tbody",
                  null,
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2009"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "15"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "420"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2010"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "15"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "460"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2011"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "21"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "525"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2012"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "25"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "625"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2013"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "20"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "500"
                    )
                  ),
                  _react2.default.createElement(
                    "tr",
                    null,
                    _react2.default.createElement(
                      "td",
                      null,
                      "2014"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "11"
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      "575"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "p",
                { className: "small" },
                section5.blocks[5].caption
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[7]
              ),
              _react2.default.createElement(_LineChart2.default, {
                title: section5.blocks[6].title,
                caption: section5.blocks[6].caption,
                height: 480,
                padding: {
                  top: 30,
                  bottom: 40,
                  left: 60,
                  right: 60
                },
                domain: {
                  x: [new Date(2008, 1, 1), new Date(2015, 1, 1)],
                  y: [0, 250000]
                },
                axisLabels: section5.blocks[6].axisLabels,
                dataset: [[{ x: new Date(2009, 1, 1), y: 1170 }, { x: new Date(2010, 1, 1), y: 9909 }, { x: new Date(2011, 1, 1), y: 25564 }, { x: new Date(2012, 1, 1), y: 52154 }, { x: new Date(2013, 1, 1), y: 115994 }, { x: new Date(2014, 1, 1), y: 222572 }], [{ x: new Date(2009, 1, 1), y: 311 }, { x: new Date(2010, 1, 1), y: 4511 }, { x: new Date(2011, 1, 1), y: 11370 }, { x: new Date(2012, 1, 1), y: 21949 }, { x: new Date(2013, 1, 1), y: 58657 }, { x: new Date(2014, 1, 1), y: 109930 }]],
                labels: section5.blocks[6].lineLabels
              }),
              _react2.default.createElement(
                "p",
                null,
                section5.blocks[8]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix", id: "scroll-target-section6" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                { className: "small strong color-primary caps" },
                chapter.title
              ),
              _react2.default.createElement(
                "h3",
                { className: "headline" },
                section6.title
              ),
              _react2.default.createElement(_HeadlineDivider2.default, null),
              _react2.default.createElement(
                "p",
                null,
                section6.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-8 md-offset-3 lg-offset-2 pb2" },
              section6.blocks[1].map(function (item, k) {
                return _react2.default.createElement(
                  "div",
                  { className: "col xs-6 sm-4 lg-3 py1 pr2", key: k },
                  _react2.default.createElement(
                    "div",
                    { style: { height: "200px", overflow: "hidden" } },
                    _react2.default.createElement(
                      "h4",
                      { className: "title strong" },
                      _react2.default.createElement(
                        "a",
                        { href: item.slug, target: "_blank" },
                        item.title
                      )
                    ),
                    _react2.default.createElement(
                      "p",
                      { className: "subhead" },
                      item.subtitle
                    )
                  ),
                  _react2.default.createElement("hr", null)
                );
              })
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter9;
}(_react2.default.Component);

Chapter9.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-enabling-action-3"], { wait: true })(Chapter9);

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

/***/ 1049:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(68);

var _Icon = __webpack_require__(432);

var _Icon2 = _interopRequireDefault(_Icon);

var _prefixLanguageToRoute = __webpack_require__(433);

var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextChapter = function NextChapter(_ref, _ref2) {
  var nextChapter = _ref.nextChapter;
  var language = _ref2.language;
  return _react2.default.createElement(
    "div",
    { className: "clearfix py2 bg-secondary" },
    _react2.default.createElement(
      "div",
      { className: "col sm-6 sm-offset-6 px1" },
      _react2.default.createElement(
        "p",
        null,
        nextChapter.heading
      ),
      _react2.default.createElement(
        "h2",
        { className: "display-1" },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: (0, _prefixLanguageToRoute2.default)(language, "/" + nextChapter.slug) },
          nextChapter.title,
          " ",
          _react2.default.createElement(_Icon2.default, { name: "goto", width: 30, height: 30 })
        )
      )
    )
  );
};

NextChapter.propTypes = {
  nextChapter: _react2.default.PropTypes.object
};

NextChapter.contextTypes = {
  language: _react2.default.PropTypes.string
};

exports.default = NextChapter;

/***/ },

/***/ 1050:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavigation = function (_React$Component) {
  _inherits(SideNavigation, _React$Component);

  function SideNavigation(props) {
    _classCallCheck(this, SideNavigation);

    var _this = _possibleConstructorReturn(this, (SideNavigation.__proto__ || Object.getPrototypeOf(SideNavigation)).call(this, props));

    _this.state = {
      isSticky: false,
      offset: 100,
      bottomLimit: 100,
      top: 0,
      bottom: 'initial',
      scrollSpyBreakpoints: [],
      scrollSpyCurrent: null
    };

    _this.stick = _this.stick.bind(_this);
    _this.unstick = _this.unstick.bind(_this);
    _this.resize = _this.resize.bind(_this);
    _this.scrollTo = _this.scrollTo.bind(_this);
    _this.updateScrollSpy = _this.updateScrollSpy.bind(_this);
    return _this;
  }

  _createClass(SideNavigation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Timeout is necessary because images change the height of the parent
      // element, resulting in jumping behaviour at the bottom of the page
      setTimeout(function () {
        var elem = _reactDom2.default.findDOMNode(_this2);
        var parent = elem.parentElement;

        var scrollSpyBreakpoints = _this2.props.sectionReferences.map(function (reference, i) {
          var referenceElement = document.getElementById(reference);
          // return referenceElement.offsetParent.offsetTop + referenceElement.offsetTop;
          return window.pageYOffset + referenceElement.getBoundingClientRect().top;
        });

        _this2.setState({
          offset: parent.offsetTop - 100,
          bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
          scrollSpyBreakpoints: scrollSpyBreakpoints
        });

        window.addEventListener('scroll', _this2.stick);
        window.addEventListener('scroll', _this2.updateScrollSpy);
        window.addEventListener('resize', _this2.resize);
      }, 10);
    }
  }, {
    key: 'resize',
    value: function resize() {
      var elem = _reactDom2.default.findDOMNode(this);
      var parent = elem.parentElement;

      var breakpoints = this.props.sectionReferences.map(function (reference, i) {
        var referenceElement = document.getElementById(reference);
        // return reference.offsetParent.offsetTop + reference.offsetTop;
        return window.pageYOffset + referenceElement.getBoundingClientRect().top;
      });

      var currentBreakpoint = this.state.scrollSpyCurrent;

      for (var i = 0; i < breakpoints.length; i++) {
        currentBreakpoint = window.pageYOffset >= breakpoints[i] - 72 ? i : window.pageYOffset < breakpoints[0] - 72 ? null : currentBreakpoint;
      }

      this.setState({
        offset: parent.offsetTop - 100,
        bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
        scrollSpyCurrent: currentBreakpoint,
        scrollSpyBreakpoints: breakpoints
      });
    }
  }, {
    key: 'stick',
    value: function stick() {
      if (window.pageYOffset > this.state.offset && window.pageYOffset < this.state.bottomLimit) {
        this.setState({
          isSticky: true,
          top: 100,
          bottom: 'initial'
        });
        window.removeEventListener('scroll', this.stick);
        window.addEventListener('scroll', this.unstick);
      }
    }
  }, {
    key: 'unstick',
    value: function unstick() {
      if (window.pageYOffset < this.state.offset) {
        this.setState({
          isSticky: false,
          top: 0,
          bottom: 'initial'
        });
        window.removeEventListener('scroll', this.unstick);
        window.addEventListener('scroll', this.stick);
      }
      if (window.pageYOffset > this.state.bottomLimit) {
        this.setState({
          isSticky: false,
          top: 'initial',
          bottom: 0
        });
        window.removeEventListener('scroll', this.unstick);
        window.addEventListener('scroll', this.stick);
      }
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(sectionTarget) {
      var targetSection = document.getElementById('scroll-target-section' + (sectionTarget + 1));
      window.scroll(0, targetSection.offsetParent.offsetTop + targetSection.offsetTop - 71);
    }
  }, {
    key: 'updateScrollSpy',
    value: function updateScrollSpy() {
      var breakpoints = this.state.scrollSpyBreakpoints;
      var currentBreakpoint = this.state.scrollSpyCurrent;

      for (var i = 0; i < breakpoints.length; i++) {
        currentBreakpoint = window.pageYOffset >= breakpoints[i] - 72 ? i : window.pageYOffset < breakpoints[0] - 72 ? null : currentBreakpoint;
      }

      if (currentBreakpoint !== this.state.scrollSpyCurrent) {
        this.setState({ scrollSpyCurrent: currentBreakpoint });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.stick);
      window.removeEventListener('scroll', this.unstick);
      window.removeEventListener('scroll', this.updateScrollSpy);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'side-navigation sm-7 sm-offset-3 md-3 md-offset-0 lg-2 px1 py2', ref: 'sticker', style: { position: this.state.isSticky ? 'fixed' : 'absolute', top: this.state.top, bottom: this.state.bottom } },
        _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ),
        _react2.default.createElement(
          'ul',
          { style: { fontSize: '1rem' } },
          this.props.sections.map(function (section, i) {
            return _react2.default.createElement(
              'li',
              { key: i, className: _this3.state.scrollSpyCurrent == i ? 'scroll-spy active' : 'scroll-spy', onClick: function onClick() {
                  _this3.scrollTo(i);
                } },
              section.title.length > 40 ? section.title.slice(0, 40) + '...' : section.title
            );
          })
        )
      );
    }
  }]);

  return SideNavigation;
}(_react2.default.Component);

module.exports = SideNavigation;

/***/ },

/***/ 1052:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(431);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// <VictoryAxis
//             dependentAxis
//             style={{
//               axis: {
//                 stroke: 'transparent'
//               },
//               ticks: {
//                 stroke: 'transparent'
//               },
//               tickLabels: {
//                 fill: 'transparent'
//               }}}/>
//           <VictoryAxis
//             scale='time'
//             tickFormat={(x) => x.getFullYear()} />

var lineColors = ['#EE3224', '#0F9EE3', '#D7006D'];

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'resizeChart',
    value: function resizeChart() {
      console.log('Resizing line chart');
      this.setState({
        width: this.refs.visualizationWrapper.clientWidth
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { ref: 'visualizationWrapper' },
        _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ),
        _react2.default.createElement(
          'svg',
          { width: this.state.width, height: this.props.height },
          _react2.default.createElement(_victory.VictoryAxis, {
            dependentAxis: true,
            label: this.props.axisLabels ? this.props.axisLabels.y || '' : '',
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: this.props.domain.y,
            standalone: false,
            height: this.props.height,
            width: this.state.width,
            style: {
              grid: {
                stroke: '#E1E0DF',
                strokeWidth: 1
              },
              axis: {
                stroke: 'transparent'
              },
              tickLabels: {
                fontFamily: 'inherit',
                fontSize: 13
              },
              axisLabel: {
                fontFamily: 'inherit',
                fontSize: 16
              },
              ticks: { stroke: 'transparent' }
            },
            orientation: 'left'
          }),
          _react2.default.createElement(_victory.VictoryAxis, {
            label: this.props.axisLabels ? this.props.axisLabels.x || '' : '',
            padding: this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            },
            domain: this.props.domain.x,
            standalone: false,
            height: this.props.height,
            width: this.state.width,
            scale: 'time',
            tickFormat: function tickFormat(x) {
              return x.getFullYear();
            },
            style: {
              axisLabel: {
                fontFamily: 'inherit',
                fontSize: 16
              },
              tickLabels: {
                fontFamily: 'inherit',
                fontSize: 13
              },
              axis: {
                stroke: '#D1D0CF'
              },
              ticks: {
                stroke: '#D1D0CF'
              }
            },
            orientation: 'bottom'
          }),
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
                  fontFamily: 'inherit',
                  fontSize: 13
                } },
              label: _this2.props.labels ? _this2.props.labels[i] : '' });
          })
        ),
        _react2.default.createElement(
          'p',
          { className: 'small mt0 pt1' },
          this.props.caption
        )
      );
    }
  }]);

  return LineChart;
}(_react2.default.Component);

LineChart.defaultProps = {
  width: 860,
  height: 420
};

module.exports = LineChart;

/***/ },

/***/ 1054:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(431);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonutChart = function (_React$Component) {
  _inherits(DonutChart, _React$Component);

  function DonutChart(props) {
    _classCallCheck(this, DonutChart);

    var _this = _possibleConstructorReturn(this, (DonutChart.__proto__ || Object.getPrototypeOf(DonutChart)).call(this, props));

    _this.state = {
      size: _this.props.maxSize
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    _this.getWrapperRef = _this.getWrapperRef.bind(_this);
    return _this;
  }

  _createClass(DonutChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener("resize", this.resizeChart);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeChart);
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      var wrapper = this.wrapper;
      var maxSize = this.props.maxSize;

      this.setState({
        size: wrapper.clientWidth > maxSize ? maxSize : wrapper.clientWidth
      });
    }
  }, {
    key: "getWrapperRef",
    value: function getWrapperRef(wrapper) {
      this.wrapper = wrapper;
    }
  }, {
    key: "render",
    value: function render() {
      var dataset = this.props.dataset.map(function (d) {
        return { x: d.x, y: +d.y, fill: d.fill };
      });

      var _props = this.props,
          title = _props.title,
          maxSize = _props.maxSize,
          caption = _props.caption;
      var size = this.state.size;


      return _react2.default.createElement(
        "div",
        null,
        title && _react2.default.createElement(
          "h4",
          { className: "title strong" },
          title
        ),
        _react2.default.createElement(
          "div",
          {
            ref: this.getWrapperRef,
            style: {
              margin: "0 auto",
              maxWidth: maxSize
            }
          },
          _react2.default.createElement(_victory.VictoryPie, {
            width: size,
            height: size,
            padding: size / 100 * 17.5,
            innerRadius: size / 100 * 20,
            data: dataset,
            style: {
              data: {
                strokeWidth: 1.5,
                fill: function fill(d) {
                  return d.fill;
                }
              },
              labels: {
                fontFamily: "inherit",
                fontSize: "13px"
              }
            }
          })
        ),
        caption && _react2.default.createElement(
          "p",
          { className: "small" },
          caption
        )
      );
    }
  }]);

  return DonutChart;
}(_react2.default.Component);

DonutChart.propTypes = {
  dataset: _react2.default.PropTypes.array.isRequired,
  maxSize: _react2.default.PropTypes.number,
  title: _react2.default.PropTypes.string,
  caption: _react2.default.PropTypes.string
};

exports.default = DonutChart;

/***/ },

/***/ 1055:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _victory = __webpack_require__(431);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LegendItem = function LegendItem(props) {
  return _react2.default.createElement(
    'div',
    { className: 'legend-item ' + (props.className || '') },
    _react2.default.createElement('div', { className: 'legend-item-dot', style: { background: props.color } }),
    _react2.default.createElement(
      'span',
      { className: 'small' },
      props.children
    )
  );
};

var SimpleBarChart = function (_React$Component) {
  _inherits(SimpleBarChart, _React$Component);

  function SimpleBarChart(props) {
    _classCallCheck(this, SimpleBarChart);

    var _this = _possibleConstructorReturn(this, (SimpleBarChart.__proto__ || Object.getPrototypeOf(SimpleBarChart)).call(this, props));

    _this.state = {
      width: _this.props.width
    };

    _this.resizeChart = _this.resizeChart.bind(_this);
    _this.renderHorizontalChart = _this.renderHorizontalChart.bind(_this);
    _this.renderVerticalChart = _this.renderVerticalChart.bind(_this);
    _this.renderNoAxisChart = _this.renderNoAxisChart.bind(_this);
    return _this;
  }

  _createClass(SimpleBarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeChart();
      window.addEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'resizeChart',
    value: function resizeChart() {
      console.log('Resizing line chart');
      this.setState({
        width: this.refs.visualizationWrapper.clientWidth
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeChart);
    }
  }, {
    key: 'renderNoAxisChart',
    value: function renderNoAxisChart() {
      return _react2.default.createElement(_victory.VictoryBar, {
        domain: this.props.domain,
        padding: this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        },
        width: this.state.width,
        height: this.props.height,
        style: {
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        },
        data: this.props.data,
        labels: this.props.labels
      });
    }
  }, {
    key: 'renderVerticalChart',
    value: function renderVerticalChart() {
      console.log('THIS IS THE AXIS LABEL: ', this.props.axisLabels);
      return _react2.default.createElement(
        _victory.VictoryChart,
        {
          width: this.state.width,
          height: this.props.height,
          padding: {
            top: 40,
            bottom: 40,
            left: 40,
            right: 60
          },
          scale: { x: 'time' },
          domainPadding: { x: 100 } },
        _react2.default.createElement(_victory.VictoryAxis, {
          label: this.props.axisLabels.x,
          tickValues: this.props.tickValues,
          tickFormat: this.props.tickFormat,
          orientation: 'bottom',
          style: {
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axis: {
              stroke: '#D1D0CF'
            },
            ticks: {
              stroke: '#D1D0CF'
            }
          } }),
        _react2.default.createElement(_victory.VictoryAxis, {
          dependentAxis: true,
          orientation: 'left',
          label: this.props.axisLabels.y,
          style: {
            grid: {
              stroke: '#E1E0DF',
              strokeWidth: 1
            },
            axis: {
              stroke: 'transparent'
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            ticks: { stroke: 'transparent' }
          } }),
        _react2.default.createElement(_victory.VictoryBar, {
          labels: this.props.labels,
          style: {
            data: {
              width: 15,
              fill: '#EE3224'
            },
            labels: {
              fontFamily: 'inherit',
              fontSize: 13
            }
          },
          data: this.props.data })
      );
    }
  }, {
    key: 'renderHorizontalChart',
    value: function renderHorizontalChart() {
      return _react2.default.createElement(_victory.VictoryBar, {
        horizontal: true,
        domain: this.props.domain,
        padding: this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        },
        width: this.state.width,
        height: this.props.height,
        style: {
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        },
        data: this.props.data,
        labels: this.props.labels
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'simple-bar-chart', ref: 'visualizationWrapper' },
        this.props.title ? _react2.default.createElement(
          'h4',
          { className: 'title strong' },
          this.props.title
        ) : '',
        this.props.horizontal ? this.renderHorizontalChart() : this.props.noAxisChart ? this.renderNoAxisChart() : this.renderVerticalChart(),
        this.props.legend ? _react2.default.createElement(
          'div',
          { className: 'clearfix pt1' },
          this.props.legend.map(function (item, i) {
            return _react2.default.createElement(
              LegendItem,
              { key: i, color: item.color, className: 'px1' },
              item.name
            );
          })
        ) : '',
        this.props.caption ? _react2.default.createElement(
          'p',
          { className: 'small mt0' },
          this.props.caption
        ) : ''
      );
    }
  }]);

  return SimpleBarChart;
}(_react2.default.Component);

module.exports = SimpleBarChart;

/***/ }

});