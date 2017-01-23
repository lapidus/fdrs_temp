webpackJsonp([10,29],{

/***/ 1338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debounce = __webpack_require__(1346);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reveal = function (_React$Component) {
  _inherits(Reveal, _React$Component);

  function Reveal(props) {
    _classCallCheck(this, Reveal);

    var _this = _possibleConstructorReturn(this, (Reveal.__proto__ || Object.getPrototypeOf(Reveal)).call(this, props));

    _this.displayName = 'Reveal';

    _this.state = {
      revealed: false,
      triggerOffset: undefined
    };

    _this.reveal = _this.reveal.bind(_this);
    _this.unreveal = _this.unreveal.bind(_this);
    _this.resize = _this.resize.bind(_this);
    return _this;
  }

  _createClass(Reveal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      var offset = window.innerHeight * 0.8;

      var bodyOffset = document.body.getBoundingClientRect().top;
      var initialTriggerOffset = _reactDom2.default.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
      var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

      this.setState({
        triggerOffset: initialTriggerOffset,
        revealed: initiallyRevealed ? true : false
      });

      window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      if (window.pageYOffset > this.state.triggerOffset) {
        this.setState({ revealed: true });
        window.removeEventListener('scroll', this.reveal);
        window.addEventListener('scroll', this.unreveal);
      }
    }
  }, {
    key: 'unreveal',
    value: function unreveal() {
      if (window.pageYOffset < this.state.triggerOffset) {
        this.setState({ revealed: false });
        window.removeEventListener('scroll', this.unreveal);
        window.addEventListener('scroll', this.reveal);
      }
    }
  }, {
    key: 'resize',
    value: function resize() {

      var offset = window.innerHeight * 0.8;

      var bodyOffset = document.body.getBoundingClientRect().top;
      var initialTriggerOffset = _reactDom2.default.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
      var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

      this.setState({
        triggerOffset: initialTriggerOffset,
        revealed: initiallyRevealed ? true : false
      });

      window.removeEventListener('scroll', !initiallyRevealed ? this.unreveal : this.reveal);
      window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.reveal);
      window.removeEventListener('scroll', this.unreveal);
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: 'render',
    value: function render() {

      var revealItemClass = this.props.customClassName || 'reveal-item',
          revealItemActiveClass = this.props.customClassNameActive || 'is-revealed';

      return _react2.default.createElement(
        'div',
        { className: this.state.revealed ? revealItemClass + ' ' + revealItemActiveClass : '' + revealItemClass },
        this.props.children
      );
    }
  }]);

  return Reveal;
}(_react2.default.Component);

Reveal.defaultProps = {
  offset: 0
};

exports.default = Reveal;

/***/ },

/***/ 1346:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(fn, threshold, isAsap) {
  var timeout, result;
  function debounced() {
    var args = arguments,
        context = this;
    function delayed() {
      if (!isAsap) {
        result = fn.apply(context, args);
      }
      timeout = null;
    }
    if (timeout) {
      clearTimeout(timeout);
    } else if (isAsap) {
      result = fn.apply(context, args);
    }
    timeout = setTimeout(delayed, threshold);
    return result;
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return debounced;
}

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(27);

var _victory = __webpack_require__(306);

var _Reveal = __webpack_require__(1338);

var _Reveal2 = _interopRequireDefault(_Reveal);

var _storyActions = __webpack_require__(538);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Story = function (_React$Component) {
  _inherits(Story, _React$Component);

  function Story(props) {
    _classCallCheck(this, Story);

    var _this = _possibleConstructorReturn(this, (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props));

    _this.state = { chartWidth: 400 };

    _this.changeDataset = _this.changeDataset.bind(_this);
    _this.updateChartDimensions = _this.updateChartDimensions.bind(_this);
    return _this;
  }

  _createClass(Story, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        chartWidth: this.refs.chartContainer.clientWidth - 32
      });
      window.addEventListener('resize', this.updateChartDimensions);
    }
  }, {
    key: 'updateChartDimensions',
    value: function updateChartDimensions() {
      this.setState({ chartWidth: this.refs.chartContainer.clientWidth - 32 });
    }
  }, {
    key: 'changeDataset',
    value: function changeDataset() {
      var newDataset = this.props.currentDataset === 1 ? 0 : 1;
      this.props.changeDataset(newDataset);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateChartDimensions);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'body-text' },
        _react2.default.createElement(
          'div',
          { className: 'bg--primary clearfix' },
          _react2.default.createElement(
            'div',
            { className: 'col sm-10 sm-offset-1 md-8 md-offset-2 px1 pt3' },
            _react2.default.createElement(
              'h1',
              null,
              'Data Story'
            ),
            _react2.default.createElement(
              'p',
              { className: 'lead' },
              'A First Look At A Story Concept'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'clearfix' },
          _react2.default.createElement(
            'div',
            { className: 'col sm-10 sm-offset-1 md-8 md-offset-2' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-12 px1 pt2 pb1' },
              _react2.default.createElement(
                'p',
                { className: 'lead' },
                'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col sm-6 px1' },
              _react2.default.createElement(
                'h3',
                null,
                'A Smaller Heading for this Section'
              ),
              _react2.default.createElement(
                'p',
                null,
                'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col sm-6 px1', ref: 'chartContainer' },
              _react2.default.createElement(
                _victory.VictoryChart,
                { width: this.state.chartWidth, domainPadding: { x: 120, y: 20 }, animate: { velocity: 0.02 } },
                _react2.default.createElement(_victory.VictoryBar, { data: this.props.dataset }),
                _react2.default.createElement(_victory.VictoryAxis, { dependentAxis: true, domain: [0, 4000], style: { axis: { stroke: 'transparent' }, ticks: { stroke: 'transparent' }, tickLabels: { fill: 'transparent' } } }),
                _react2.default.createElement(_victory.VictoryAxis, { style: { axis: { stroke: '#dCdFe1' }, ticks: { stroke: 'transparent' }, tickLabels: { fill: '#607D8B' } } })
              ),
              _react2.default.createElement(
                'div',
                { style: { textAlign: 'center' } },
                _react2.default.createElement(
                  'button',
                  { onClick: this.changeDataset, className: 'btn is-raised bg--primary' },
                  'Change Data'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'small',
                    null,
                    'The above chart shows the GDP of three countries in Western Africa. Click the button to see the changes between 2011 and 2012.'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 600 },
          _react2.default.createElement(
            'div',
            { className: 'clearfix' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-10 sm-offset-1 md-8 md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'col sm-6 px1' },
                _react2.default.createElement(
                  _victory.VictoryChart,
                  { width: this.state.chartWidth, domainPadding: { x: 120, y: 20 }, animate: { velocity: 0.02 } },
                  _react2.default.createElement(_victory.VictoryAxis, { dependentAxis: true, domain: [0, 4000], style: { axis: { stroke: 'transparent' }, ticks: { stroke: 'transparent' }, tickLabels: { fill: 'transparent' } } }),
                  _react2.default.createElement(_victory.VictoryScatter, { data: this.props.dataset })
                ),
                _react2.default.createElement(
                  'div',
                  { style: { textAlign: 'center' } },
                  _react2.default.createElement(
                    'button',
                    { onClick: this.changeDataset, className: 'btn' },
                    'Change Data'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'small',
                      null,
                      'The above chart shows the GDP of three countries in Western Africa. Click the button to see the changes between 2011 and 2012.'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col sm-6 px1' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. Here is an example of what a data story could look like.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly. Here is an example of what a data story could look like.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 600 },
          _react2.default.createElement(
            'div',
            { className: 'clearfix' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-10 sm-offset-1 md-8 md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'col sm-9 px1' },
                _react2.default.createElement(
                  'blockquote',
                  null,
                  'The traditional mathematician recognizes and appreciates mathematical elegance when he sees it. I propose to go one step further, and to consider elegance an essential ingredient of mathematics: if it is clumsy, it is not mathematics.',
                  _react2.default.createElement(
                    'footer',
                    null,
                    _react2.default.createElement(
                      'cite',
                      null,
                      _react2.default.createElement(
                        'a',
                        { href: 'http://www.brainyquote.com/quotes/authors/e/edsger_dijkstra.html' },
                        'Edsger W. Dijkstra'
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 600 },
          _react2.default.createElement(
            'div',
            { className: 'clearfix' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-10 sm-offset-1 md-8 md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'col sm-6 px1' },
                _react2.default.createElement(
                  'p',
                  null,
                  'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _Reveal2.default,
          { offset: 600 },
          _react2.default.createElement(
            'div',
            { className: 'clearfix' },
            _react2.default.createElement(
              'div',
              { className: 'col sm-10 sm-offset-1 md-8 md-offset-2' },
              _react2.default.createElement(
                'div',
                { className: 'col sm-6 px1' },
                _react2.default.createElement(
                  'p',
                  null,
                  'With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col sm-6 px1' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly. Here is an example of what a data story could look like.'
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    'Lists are useful'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'They look fairly ok'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'If thought out properly, they scale well'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Story;
}(_react2.default.Component);

Story.needs = [_storyActions.fetchDatasets];

function mapStateToProps(state) {
  return {
    currentDataset: state.storyReducer.currentDataset,
    dataset: state.storyReducer.datasets[state.storyReducer.currentDataset]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeDataset: function changeDataset(id) {
      dispatch((0, _storyActions.changeDataset)(id));
    }
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(Story);
module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Story);

/***/ }

});