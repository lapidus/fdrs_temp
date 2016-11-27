webpackJsonp([15],{

/***/ 1036:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var principleReference = ["humanity", "impartiality", "neutrality", "independence", "voluntary-service", "unity", "universality"];

var Chapter3 = function (_React$Component) {
  _inherits(Chapter3, _React$Component);

  function Chapter3() {
    _classCallCheck(this, Chapter3);

    return _possibleConstructorReturn(this, (Chapter3.__proto__ || Object.getPrototypeOf(Chapter3)).apply(this, arguments));
  }

  _createClass(Chapter3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Mounted Living our fundamental principles");
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

      var chapter = i18n.store.data[language]["report-living-our-fundamental-principles"];

      var _chapter$sections = _slicedToArray(chapter.sections, 1),
          section0 = _chapter$sections[0];

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
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-3.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
          { className: "clearfix bg-secondary body-text py2" },
          _react2.default.createElement(
            "div",
            { className: "col sm-10 sm-offset-1 center" },
            chapter.general[0].map(function (principle, j) {
              return _react2.default.createElement(
                "span",
                { key: j, className: "px2 pt1 pb2", style: { display: "inline-block" } },
                _react2.default.createElement("img", { src: "/img/chapters/3/" + principleReference[j] + ".svg" }),
                _react2.default.createElement("br", null),
                principle
              );
            }),
            _react2.default.createElement(
              "p",
              null,
              chapter.general[1]
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix body-text", style: { position: "relative" } },
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[0]
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-5 sm-offset-1 md-5 md-offset-1 lg-4 lg-offset-2 pb2" },
              _react2.default.createElement(
                "div",
                { className: "pr2" },
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "svg",
                    { width: "100%", height: "480px", viewBox: "0 0 480 480", version: "1.1" },
                    _react2.default.createElement(
                      "g",
                      { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                      _react2.default.createElement(
                        "g",
                        null,
                        _react2.default.createElement("circle", { cx: "240", cy: "240", r: "210", fill: "none", stroke: "#F1F0EF", strokeWidth: "4" }),
                        _react2.default.createElement("circle", { cx: "240", cy: "240", r: "150", fill: "none", stroke: "#F1F0EF", strokeWidth: "4" }),
                        _react2.default.createElement(
                          "g",
                          { transform: "translate(0, 62)", fontSize: "20", fontFamily: "Roboto-Bold, Roboto", fill: "#786A65", fontWeight: "700" },
                          section0.blocks[1].items.map(function (item, i) {
                            var xReferences = [240, 360, 390, 340, 150, 90, 120];
                            var yReferences = [19, 106, 198, 290, 290, 198, 106];

                            return _react2.default.createElement(
                              "text",
                              { key: i },
                              item.split("\n").map(function (subItem, j) {
                                return _react2.default.createElement(
                                  "tspan",
                                  { key: j, x: xReferences[i], y: yReferences[i] + j * 22, textAnchor: "middle" },
                                  subItem
                                );
                              })
                            );
                          })
                        ),
                        _react2.default.createElement(
                          "text",
                          { fontFamily: "Roboto-Bold, Roboto", fontSize: "16", fontWeight: "700", letterSpacing: "1", fill: "#EE3224" },
                          section0.blocks[1].name.split("\n").map(function (item, i) {
                            return _react2.default.createElement(
                              "tspan",
                              { textAnchor: "middle", className: "caps", key: i, x: "240", y: 237 + i * 15 },
                              item
                            );
                          })
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  "p",
                  null,
                  section0.blocks[3]
                ),
                _react2.default.createElement(
                  "button",
                  { className: "btn bg-primary p1" },
                  section0.blocks[5]
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "col px1 sm-px0 sm-5 md-5 lg-4" },
              _react2.default.createElement(
                "p",
                null,
                section0.blocks[2]
              ),
              _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                  "svg",
                  { width: "100%", height: "480px", viewBox: "0 0 480 480", version: "1.1" },
                  _react2.default.createElement(
                    "g",
                    { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                    _react2.default.createElement(
                      "g",
                      null,
                      _react2.default.createElement("circle", { cx: "240", cy: "240", r: "210", fill: "none", stroke: "#F1F0EF", strokeWidth: "4" }),
                      _react2.default.createElement("circle", { cx: "240", cy: "240", r: "150", fill: "none", stroke: "#F1F0EF", strokeWidth: "4" }),
                      _react2.default.createElement(
                        "g",
                        { transform: "translate(0, 62)", fontSize: "20", fontFamily: "Roboto-Bold, Roboto", fill: "#786A65", fontWeight: "700" },
                        section0.blocks[4].items.map(function (item, i) {
                          var xReferences = [240, 360, 390, 340, 150, 90, 120];
                          var yReferences = [19, 106, 198, 290, 290, 198, 106];

                          return _react2.default.createElement(
                            "text",
                            { key: i },
                            item.split("\n").map(function (subItem, j) {
                              return _react2.default.createElement(
                                "tspan",
                                { key: j, x: xReferences[i], y: yReferences[i] + j * 22, textAnchor: "middle" },
                                subItem
                              );
                            })
                          );
                        })
                      ),
                      _react2.default.createElement(
                        "text",
                        { fontFamily: "Roboto-Bold, Roboto", fontSize: "16", fontWeight: "700", letterSpacing: "1", fill: "#EE3224" },
                        section0.blocks[4].name.split("\n").map(function (item, i) {
                          return _react2.default.createElement(
                            "tspan",
                            { textAnchor: "middle", className: "caps", key: i, x: "240", y: 237 + i * 15 },
                            item
                          );
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
      );
    }
  }]);

  return Chapter3;
}(_react2.default.Component);

Chapter3.contextTypes = {
  i18n: _react2.default.PropTypes.object.isRequired
};

exports.default = (0, _reactI18next.translate)(["report-living-our-fundamental-principles"], { wait: true })(Chapter3);

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

/***/ }

});