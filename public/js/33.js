webpackJsonp([33,26],{

/***/ 1163:
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

var _Breadcrumbs = __webpack_require__(1172);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsibleHeader = function CollapsibleHeader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "span",
    null,
    children
  );
};
var CollapsibleBody = function CollapsibleBody(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    "span",
    null,
    children
  );
};

var Collapsible = function (_React$Component) {
  _inherits(Collapsible, _React$Component);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

    _this.state = { expanded: false };

    _this.toggleCollapsible = _this.toggleCollapsible.bind(_this);
    return _this;
  }

  _createClass(Collapsible, [{
    key: "toggleCollapsible",
    value: function toggleCollapsible() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "article",
        { className: "shadow-4 bg-white mb1" },
        _react2.default.createElement(
          "header",
          { className: "p1", style: { cursor: "pointer" }, onClick: this.toggleCollapsible },
          this.props.children[0]
        ),
        _react2.default.createElement(
          "div",
          { className: "p1 bg-secondary", style: { display: this.state.expanded ? "block" : "none" } },
          this.props.children[1]
        )
      );
    }
  }]);

  return Collapsible;
}(_react2.default.Component);

var FAQ = function (_React$Component2) {
  _inherits(FAQ, _React$Component2);

  function FAQ() {
    _classCallCheck(this, FAQ);

    return _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).apply(this, arguments));
  }

  _createClass(FAQ, [{
    key: "render",
    value: function render() {
      var i18n = this.context.i18n;
      var t = this.props.t;


      var questions = t("faq:questions");

      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(_Breadcrumbs2.default, { links: [{ name: "Home", path: "/fdrs" }, { name: "FAQ", path: "/fdrs/faq" }] }),
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
                { className: "display-1 md-display-2 m0 light" },
                "FAQ"
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
                { className: "lead" },
                "This text will be the introduction for the FAQ page. Below you will find the most frequently asked questions. If your question has not been answered below, please contact the IFRC secreatariat at: ",
                _react2.default.createElement(
                  "span",
                  { className: "color-primary" },
                  "fdrs@ifrc.org"
                )
              ),
              questions.map(function (questionItem, i) {
                var question = questionItem.question,
                    answer = questionItem.answer;


                return _react2.default.createElement(
                  Collapsible,
                  { key: i },
                  _react2.default.createElement(
                    CollapsibleHeader,
                    null,
                    _react2.default.createElement(
                      "h1",
                      { className: "headline m0" },
                      question
                    )
                  ),
                  _react2.default.createElement(
                    CollapsibleBody,
                    null,
                    answer.map(function (answerItem, j) {
                      if (typeof answerItem !== "string") {
                        return _react2.default.createElement(
                          "ul",
                          { key: j },
                          answerItem.map(function (listItem, k) {
                            return _react2.default.createElement(
                              "li",
                              { key: k },
                              listItem
                            );
                          })
                        );
                      } else {
                        return _react2.default.createElement(
                          "p",
                          { key: j },
                          answerItem
                        );
                      }
                    })
                  )
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "px1 py4 bg-secondary" },
          _react2.default.createElement(
            "div",
            { className: "clearfix mxn1" },
            _react2.default.createElement(
              "div",
              { className: "col sm-10 sm-offset-1 px1" },
              _react2.default.createElement(
                "h2",
                { className: "headline sm-display-1 light mt0" },
                "For data collectors"
              ),
              _react2.default.createElement(
                "p",
                { className: "lead" },
                "To get started with the data collection for your National Society, please log in."
              ),
              _react2.default.createElement(
                "a",
                { href: "https://fdrs.ifrc.org", target: "_blank", className: "btn btn--raised bg-primary" },
                _react2.default.createElement(
                  "span",
                  { className: "block py05 px1" },
                  "Login as data collector"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FAQ;
}(_react2.default.Component);

FAQ.contextTypes = {
  // router: React.PropTypes.object.isRequired,
  i18n: _react2.default.PropTypes.object.isRequired
};

FAQ.propTypes = {
  t: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactI18next.translate)("faq", { wait: true })(FAQ);

/***/ },

/***/ 1172:
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

      return _react2.default.createElement(
        "div",
        { className: "sm-visible" },
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-secondary px1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-8 sm-offset-0 md-offset-2" },
            _react2.default.createElement(
              "ul",
              { className: "m0 py1 px0 small strong" },
              this.props.links.map(function (item, i) {
                return _react2.default.createElement(
                  "li",
                  { className: "inline-block mr1", key: i },
                  item.path ? _react2.default.createElement(
                    _reactRouter.Link,
                    { to: item.path },
                    item.name
                  ) : _react2.default.createElement(
                    "span",
                    { className: i === _this2.props.links.length - 1 ? "color-primary" : "" },
                    item.name
                  )
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

exports.default = Breadcrumbs;

/***/ }

});