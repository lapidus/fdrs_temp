webpackJsonp([13,29],{

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(35);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isValid(value) {
  return Boolean(value || value === 0);
}

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      focused: false,
      isClean: isValid(!_this.props.defaultValue),
      hasValue: isValid(_this.props.defaultValue)
    };

    _this._focusHandler = _this._focusHandler.bind(_this);
    _this._blurHandler = _this._blurHandler.bind(_this);
    _this._changeHandler = _this._changeHandler.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: '_focusHandler',
    value: function _focusHandler() {
      this.setState({ focused: true });
    }
  }, {
    key: '_blurHandler',
    value: function _blurHandler() {
      this.setState({ focused: false });
    }
  }, {
    key: '_changeHandler',
    value: function _changeHandler(event) {
      this.setState({ hasValue: isValid(event.target.value), isClean: false });
    }
  }, {
    key: 'render',
    value: function render() {

      var labelClass = (0, _classnames2.default)('textfield', {
        'is-focused': this.state.focused,
        'is-clean': this.state.isClean,
        'is-highlighted': !this.state.hasValue && this.state.focused,
        'has-value': this.state.hasValue
      });

      return _react2.default.createElement(
        'div',
        { className: 'textfield-wrapper' },
        _react2.default.createElement(
          'label',
          { className: labelClass },
          _react2.default.createElement(
            'span',
            { className: 'textfield__label' },
            this.props.floatingLabelText
          ),
          _react2.default.createElement('input', { className: 'textfield__input', placeholder: this.props.hintText, onFocus: this._focusHandler, onBlur: this._blurHandler, onChange: this._changeHandler, defaultValue: this.props.defaultValue })
        )
      );
    }
  }]);

  return TextField;
}(_react2.default.Component);

var Forms = function (_React$Component2) {
  _inherits(Forms, _React$Component2);

  function Forms(props) {
    _classCallCheck(this, Forms);

    return _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, props));
  }

  _createClass(Forms, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'bg--primary clearfix' },
          _react2.default.createElement(
            'div',
            { className: 'col sm-10 sm-offset-1 md-8 md-offset-2 px1 pt3' },
            _react2.default.createElement(
              'h1',
              null,
              'Textfields'
            ),
            _react2.default.createElement(
              'p',
              { className: 'lead' },
              'Getting information from users'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'container is-narrow px1 md-px2' },
          _react2.default.createElement(
            'div',
            { className: 'clearfix mxn1 md-mxn2' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-6 px1 md-px2' },
              _react2.default.createElement(TextField, { hintText: 'e.g. John Smith', floatingLabelText: 'Enter Full Name' }),
              _react2.default.createElement(TextField, { hintText: 'e.g. Web Developer', floatingLabelText: 'What do you do?' }),
              _react2.default.createElement(TextField, { hintText: 'e.g. Awesome dude(tte)', floatingLabelText: 'What is your status?' }),
              _react2.default.createElement(TextField, { hintText: 'e.g. Switzerland', floatingLabelText: 'Where do you come from?', defaultValue: 'Switzerland' }),
              _react2.default.createElement(TextField, { hintText: '', floatingLabelText: 'Password' })
            )
          )
        )
      );
    }
  }]);

  return Forms;
}(_react2.default.Component);

// export default Forms;


module.exports = Forms;

/***/ }

});