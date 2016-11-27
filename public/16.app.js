webpackJsonp([16],{

/***/ 1033:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(74);

var _i18n = __webpack_require__(151);

var _i18n2 = _interopRequireDefault(_i18n);

var _Breadcrumbs = __webpack_require__(1048);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Acknowledgements = function (_React$Component) {
  _inherits(Acknowledgements, _React$Component);

  function Acknowledgements() {
    _classCallCheck(this, Acknowledgements);

    return _possibleConstructorReturn(this, (Acknowledgements.__proto__ || Object.getPrototypeOf(Acknowledgements)).apply(this, arguments));
  }

  _createClass(Acknowledgements, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      document.body.classList.add("html-ready");
    }
  }, {
    key: "render",
    value: function render() {
      var language = _i18n2.default.language;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-primary-dark" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
            _react2.default.createElement(_Breadcrumbs2.default, { chapter: { title: "Acknowledgements" }, language: language })
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
              "Acknowledgements"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "clearfix bg-dark" },
          _react2.default.createElement(
            "div",
            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
            _react2.default.createElement(
              "p",
              { className: "lead" },
              "This is a Federation-wide report made possible by the valued contributions of all 190 National Red Cross and Red Crescent Societies to the Federation-wide Databank and Reporting System under the framework of Strategy 2020. The additional programming information and analysis provided by the departments and regions of the IFRC secretariat and Red Cross and Red Crescent reference centres were also much appreciated."
            ),
            _react2.default.createElement("hr", null)
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
              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Managing editor and chief data officer:"
                ),
                " ",
                _react2.default.createElement(
                  "a",
                  { href: "mailto:mukulbhola@hotmail.com" },
                  "Mukul Bhola"
                )
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Lead author and chief adviser:"
                ),
                " Mukesh Kapila"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Contributions and reviews:"
                ),
                " Maarten van Aalst, Rania Alerksoussi, Gemina Archer-Davies, Lusine Aslanyan, William Babumba, Carina Bachofen, Ombretta Baggio, Matt Baillie Smith, Inigo Barrena, Elise Baudot, Katrien Beeckman, Arvind Bhardwaj, Aditi Bhola, Tiziana Bonzon, Roger Bracke, Sune Bulow, Olivier van Bunnen, Sebastien Calmus, Terry Carney, Xavier Castellanos, Jagan Chapagain, Michael Chippendale, Chang Hun Choe, Un Yong Choe, Imon Choudhury, Diogo Costa, Walter Cotte, Rebecca Dodd, Aradhna Duggal, Angela Eaton, Simon Eccleshall, Roger Fischli, David Fisher, Julian Fleet, Kate Forbes, Malcolm Fung, Elias Ghanem, Josse Gillijns, Jean-Franc\u0327ois Goulay, Paul Grierson, Sayed Hashem, Birte Hald, Shaun Hazeldine, Olivia House, Umed Ibodulloev, Maria Jain, Ulrich Jaspers, Marwan Jilani, Leif Jonsson, Karl Julisson, Denise Kappel, Drina Karahasanovic, Robert Kaufman, Ariel Kestens, Tessa Kelly, Pierre Kremer, Geri Lau, Helena Loh, Tiffany Loh, Bayarmaa Luntan, Francisco Maldonado, Eszter Matyeka, Pankaj Mishra, Grant Mitchell, Frank Mohrhauer, Fleur Monasso, Alberto Monguzzi, Jeremy Mortimer, Mohammed Mukhier, Birgitte Olsen, Stephen Omollo, Lisa Pattison, Gabriel Pictet, Mariagiovanna Pietropaolo Bob Pond, Andrew Rizk, Pierre De Rochefort, Graham Saunders, Maya Schaerer, Matthias Schmale, Alasan Senghore, Gurvinder Singh, Veronique Souchet, Elizabeth Soulie, Marcel Stefanik, Sophie Sutrich, Lars Tangen, Joelle Tanguy, Carla Taylor, Robert Tickner, Charlotte Tocchio, Bhupinder Tomar, Miki Tsukamoto, Anitta  Underlin, Natig Veliev, Stephen Wainwright, Monika Wild, Rosaini Yusoff, Giovanni Zambello, Frederic Zanetta"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Data collection and quality assurance:"
                ),
                " Karen Badalyan, Kathleen Chiappetta, Esther Elhaddad, Priscila Gonzalez, Nadine Haddad, Sanae Karmass, Chenhao Liu, Jessie Lucien, Nekruz Mamadalizoda, Imre Nagy, Robert Ondrusek, Camila Perera, Giulia Sorbi, Zheng Wang"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Copyediting:"
                ),
                " Alison Freebairn"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Print design and layout:"
                ),
                " Yann le Floc\u2019h"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Printing:"
                ),
                " Deux-Ponts, Manufactures d\u2019Histoires"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "FDRS frontend visualisation (",
                  _react2.default.createElement(
                    "a",
                    { href: "http://www.ifrc.org/data", target: "_blank" },
                    "www.ifrc.org/data"
                  ),
                  "):"
                ),
                " Andy Channelle, Sorin Constantinescu, Daniel Lapidus"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "FDRS backend maintenance (fdrs.ifrc.org):"
                ),
                " Alvaro Alvarez, Edward Happ, Eric Harfield, Vincent Michaud, Charles Mohun"
              ),
              _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                  "strong",
                  null,
                  "Website by: "
                ),
                _react2.default.createElement(
                  "a",
                  { href: "http://www.lapidus.se", target: "_blank" },
                  "Lapidus Interactive"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Acknowledgements;
}(_react2.default.Component);

exports.default = (0, _reactI18next.translate)()(Acknowledgements);

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

/***/ }

});