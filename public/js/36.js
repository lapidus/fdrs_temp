webpackJsonp([36,26],{

/***/ 1221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

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
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "px1" },
        _react2.default.createElement(
          "div",
          { className: "relative clearfix mxn1" },
          _react2.default.createElement(
            "div",
            { className: "col sm-9 sm-offset-2 px1 pt1" },
            _react2.default.createElement(
              "div",
              { className: "relative ratio-16-9" },
              _react2.default.createElement(
                "div",
                { className: "ratio-content bg-beige" },
                "Table"
              )
            )
          )
        )
      );
    }
  }]);

  return OverviewTable;
}(_react2.default.Component);

exports.default = OverviewTable;

/***/ }

});