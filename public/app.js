webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(166);

	var _reactRedux = __webpack_require__(221);

	var _reactI18next = __webpack_require__(249);

	var _routes = __webpack_require__(254);

	var _routes2 = _interopRequireDefault(_routes);

	var _configureStore = __webpack_require__(692);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _needsFetcher = __webpack_require__(699);

	var _needsFetcher2 = _interopRequireDefault(_needsFetcher);

	var _i18n = __webpack_require__(658);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _appActions = __webpack_require__(259);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _configureStore2.default)();
	window.store = store;
	var history = _reactRouter.browserHistory;
	var firstLoad = true;

	function beforeTransitionHandler(location, callback) {
	  console.log("Before transition");
	  // Check language
	  var urlArray = location.pathname.split("/");
	  var currentLanguage = store.getState().appReducer.language;
	  var newLanguage = urlArray[1];
	  var languageFetchingPromise = void 0;
	  console.log(urlArray);

	  if (_i18n2.default.language !== newLanguage) _i18n2.default.changeLanguage(newLanguage && newLanguage.length === 2 ? newLanguage : "en");

	  // Switch language if necessary
	  // newLanguage: /fr /es /ar    currentLanguage: en fr es ar
	  if (newLanguage.length === 2) {
	    if (newLanguage !== currentLanguage) {
	      languageFetchingPromise = store.dispatch((0, _appActions.fetchLanguage)(newLanguage));
	    } else {
	      languageFetchingPromise = null;
	    }
	  }
	  // newLanguage: /              currentLanguage: en
	  else if (currentLanguage === "en") {
	      languageFetchingPromise = firstLoad ? store.dispatch((0, _appActions.fetchLanguage)("en")) : null;
	    }
	    // newLanguage: /              currentLanguage: en fr es ar
	    else {
	        languageFetchingPromise = store.dispatch((0, _appActions.fetchLanguage)("en"));
	      }

	  // Load necessary data
	  if (languageFetchingPromise) {
	    languageFetchingPromise.then(function () {
	      (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
	        store.dispatch((0, _appActions.startMainLoad)());
	        var dataFetchingPromise = (0, _needsFetcher2.default)(store.dispatch, renderProps.components, renderProps.params, renderProps);
	        dataFetchingPromise.then(function () {
	          store.dispatch((0, _appActions.endMainLoad)());
	          setTimeout(function () {
	            window.scroll(0, 0);
	            callback();
	          }, 300);
	        }).catch(function (err) {
	          return console.log(err.statusCode);
	        });
	      });
	    }).catch(function (err) {
	      return console.log(err.statusCode);
	    });
	  } else {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
	      store.dispatch((0, _appActions.startMainLoad)());
	      var dataFetchingPromise = (0, _needsFetcher2.default)(store.dispatch, renderProps.components, renderProps.params, renderProps);
	      dataFetchingPromise.then(function () {
	        store.dispatch((0, _appActions.endMainLoad)());
	        setTimeout(function () {
	          window.scroll(0, 0);
	          callback();
	        }, 300);
	      }).catch(function (err) {
	        return console.log(err.statusCode);
	      });
	    });
	  }
	}

	history.listenBefore(beforeTransitionHandler);
	history.listen(function () {
	  return store.dispatch((0, _appActions.closeNav)());
	});

	document.addEventListener("DOMContentLoaded", function () {
	  // Check for data to be loaded on first load of the app...
	  beforeTransitionHandler(window.location, function () {
	    firstLoad = false;
	    console.log("Pre render");
	    _reactDom2.default.render(_react2.default.createElement(
	      _reactI18next.I18nextProvider,
	      { i18n: _i18n2.default },
	      _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
	      )
	    ), document.getElementById("app"));
	  });
	});

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _Home = __webpack_require__(255);

	var _Home2 = _interopRequireDefault(_Home);

	var _reportRoutes = __webpack_require__(256);

	var _reportRoutes2 = _interopRequireDefault(_reportRoutes);

	var _languageRoutes = __webpack_require__(687);

	var _languageRoutes2 = _interopRequireDefault(_languageRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: "/", component: __webpack_require__(689) },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  (0, _languageRoutes2.default)("fr"),
	  (0, _languageRoutes2.default)("es"),
	  (0, _reportRoutes2.default)()
	);

	exports.default = routes;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

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

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }

	  _createClass(Home, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "py4 pl2" },
	        "MAIN HOME PAGE"
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _Report = __webpack_require__(257);

	var _Report2 = _interopRequireDefault(_Report);

	var _DataView = __webpack_require__(272);

	var _DataView2 = _interopRequireDefault(_DataView);

	var _Acknowledgements = __webpack_require__(415);

	var _Acknowledgements2 = _interopRequireDefault(_Acknowledgements);

	var _Home = __webpack_require__(416);

	var _Home2 = _interopRequireDefault(_Home);

	var _Chapter = __webpack_require__(419);

	var _Chapter2 = _interopRequireDefault(_Chapter);

	var _Chapter3 = __webpack_require__(655);

	var _Chapter4 = _interopRequireDefault(_Chapter3);

	var _Chapter5 = __webpack_require__(656);

	var _Chapter6 = _interopRequireDefault(_Chapter5);

	var _Chapter7 = __webpack_require__(657);

	var _Chapter8 = _interopRequireDefault(_Chapter7);

	var _Chapter9 = __webpack_require__(681);

	var _Chapter10 = _interopRequireDefault(_Chapter9);

	var _Chapter11 = __webpack_require__(682);

	var _Chapter12 = _interopRequireDefault(_Chapter11);

	var _Chapter13 = __webpack_require__(683);

	var _Chapter14 = _interopRequireDefault(_Chapter13);

	var _Chapter15 = __webpack_require__(685);

	var _Chapter16 = _interopRequireDefault(_Chapter15);

	var _Chapter17 = __webpack_require__(686);

	var _Chapter18 = _interopRequireDefault(_Chapter17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReportRoutes = function ReportRoutes() {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { path: "report", component: _Report2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "data", component: _DataView2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "acknowledgements", component: _Acknowledgements2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "who-we-are", component: _Chapter2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "what-we-do", component: _Chapter4.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "living-our-fundamental-principles", component: _Chapter6.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "strategic-aim-1", component: _Chapter8.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "strategic-aim-2", component: _Chapter10.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "strategic-aim-3", component: _Chapter12.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "enabling-action-1", component: _Chapter14.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "enabling-action-2", component: _Chapter16.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: "enabling-action-3", component: _Chapter18.default })
	  );
	};

	exports.default = ReportRoutes;

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _reactRedux = __webpack_require__(221);

	var _prefixLanguageToRoute = __webpack_require__(258);

	var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

	var _appActions = __webpack_require__(259);

	var _Icon = __webpack_require__(267);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(268);

	var _Loader2 = _interopRequireDefault(_Loader);

	var _Navigation = __webpack_require__(269);

	var _Navigation2 = _interopRequireDefault(_Navigation);

	var _ReadMore = __webpack_require__(270);

	var _ReadMore2 = _interopRequireDefault(_ReadMore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Report = function (_React$Component) {
	  _inherits(Report, _React$Component);

	  function Report() {
	    _classCallCheck(this, Report);

	    return _possibleConstructorReturn(this, (Report.__proto__ || Object.getPrototypeOf(Report)).apply(this, arguments));
	  }

	  _createClass(Report, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounting app: ", this.props.location);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          language = _props.language,
	          navOpen = _props.navOpen,
	          toggleNav = _props.toggleNav;

	      var headerClassName = navOpen ? "site-header clearfix level-5 is-extended" : "site-header clearfix level-5";

	      return _react2.default.createElement(
	        "div",
	        {
	          dir: language === "ar" ? "rtl" : "ltr",
	          className: language === "ar" ? "layout-rtl" : ""
	        },
	        _react2.default.createElement(_Loader2.default, null),
	        _react2.default.createElement(
	          "header",
	          { className: headerClassName, style: { top: "72px", zIndex: 10 } },
	          _react2.default.createElement(
	            "div",
	            { style: { maxWidth: "1440px", margin: "0 auto" } },
	            _react2.default.createElement(
	              "div",
	              {
	                className: "clearfix bg-white",
	                style: { position: "relative", zIndex: 10000, height: "72px" }
	              },
	              _react2.default.createElement(
	                "div",
	                {
	                  className: "logo-wrapper",
	                  style: { position: "relative", float: language === "ar" ? "right" : "left" }
	                },
	                _react2.default.createElement(
	                  "button",
	                  {
	                    onClick: toggleNav,
	                    className: "btn no-focus",
	                    style: { padding: "20px 20px" }
	                  },
	                  navOpen ? _react2.default.createElement(_Icon2.default, { width: "28px", height: "28px", name: "close" }) : _react2.default.createElement(_Icon2.default, { width: "28px", height: "28px", name: "navigation" })
	                ),
	                _react2.default.createElement(
	                  "span",
	                  { className: "caps" },
	                  this.props[language]["site-title"]
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                {
	                  style: { position: "relative", float: language === "ar" ? "left" : "right" },
	                  className: "pr2 md-visible"
	                },
	                _react2.default.createElement(
	                  "a",
	                  {
	                    className: "btn px1 py15",
	                    href: "/downloads/Everyone_counts_2013_" + language.toUpperCase() + ".pdf"
	                  },
	                  "\xA0\xA0\xA0",
	                  _react2.default.createElement(
	                    "span",
	                    { className: "caps" },
	                    this.props[language].download
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(_Navigation2.default, {
	              navOpen: navOpen,
	              toggleNav: toggleNav,
	              language: language,
	              navigationContent: {
	                en: this.props.en,
	                fr: this.props.fr,
	                es: this.props.es,
	                ar: this.props.ar
	              }
	            })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: navOpen ? "main-content-wrapper removed" : "main-content-wrapper" },
	          _react2.default.createElement(
	            "div",
	            { style: { paddingTop: "72px" } },
	            this.props.children
	          ),
	          _react2.default.createElement(_ReadMore2.default, null),
	          _react2.default.createElement(
	            "footer",
	            { className: "site-footer bg-dark clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix py3" },
	              _react2.default.createElement(
	                "div",
	                {
	                  className: "col xs-6 sm-5 sm-offset-2 md-3 px1",
	                  style: { minHeight: "152px" }
	                },
	                _react2.default.createElement(
	                  "ul",
	                  { className: "clearfix" },
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(language, "/acknowledgements") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        "Acknowledgements"
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(language, "/data") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        "Data"
	                      )
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                {
	                  className: "col xs-6 sm-5 sm-offset-2 md-3 md-offset-0 px1",
	                  style: { minHeight: "152px" }
	                },
	                "\xA0"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 sm-5 md-3 px1", style: { minHeight: "152px" } },
	                "International Federation of Red Cross and Red Crescent Societies ",
	                _react2.default.createElement("br", null),
	                "P.O. Box 303",
	                _react2.default.createElement("br", null),
	                "CH-1211 Geneva 19",
	                _react2.default.createElement("br", null),
	                "Switzerland",
	                _react2.default.createElement("br", null),
	                "Telephone: + 41 22 730 4224",
	                _react2.default.createElement("br", null),
	                "e-mail: fdrs@ifrc.org"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Report;
	}(_react2.default.Component);

	Report.propTypes = {
	  children: _react.PropTypes.element,
	  language: _react.PropTypes.string,
	  location: _react.PropTypes.object,
	  navOpen: _react.PropTypes.bool,
	  toggleNav: _react.PropTypes.func,
	  en: _react.PropTypes.object,
	  fr: _react.PropTypes.object,
	  es: _react.PropTypes.object,
	  ar: _react.PropTypes.object
	};

	Report.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};

	function mapStateToProps(state) {
	  return {
	    navOpen: state.appReducer.navOpen,
	    language: state.appReducer.language,
	    en: state.appReducer.en,
	    fr: state.appReducer.fr,
	    es: state.appReducer.es,
	    ar: state.appReducer.ar
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    toggleNav: function toggleNav() {
	      dispatch((0, _appActions.toggleNav)());
	    }
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Report);

/***/ },

/***/ 258:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixLanguageToRoute;
	function prefixLanguageToRoute(lang, route) {
	  if (route === '/') {
	    return lang === 'en' ? route : '/' + lang;
	  } else {
	    return lang === 'en' ? route : '/' + lang + route;
	  }
	};

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RECEIVE_NATIONAL_SOCIETIES = exports.REQUEST_NATIONAL_SOCIETIES = exports.CLOSE_NAV = exports.TOGGLE_NAV = exports.RECEIVE_LANGUAGE = exports.REQUEST_LANGUAGE = exports.END_LOAD = exports.PROGRESS_LOAD = exports.START_LOAD = undefined;
	exports.startMainLoad = startMainLoad;
	exports.endMainLoad = endMainLoad;
	exports.toggleNav = toggleNav;
	exports.closeNav = closeNav;
	exports.fetchLanguage = fetchLanguage;
	exports.requestNationalSocieties = requestNationalSocieties;
	exports.receiveNationalSocieties = receiveNationalSocieties;
	exports.fetchNationalSocieties = fetchNationalSocieties;

	var _promisePolyfill = __webpack_require__(260);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	var _superagent = __webpack_require__(262);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var START_LOAD = exports.START_LOAD = 'START_LOAD';
	var PROGRESS_LOAD = exports.PROGRESS_LOAD = 'PROGRESS_LOAD';
	var END_LOAD = exports.END_LOAD = 'END_LOAD';
	// export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
	var REQUEST_LANGUAGE = exports.REQUEST_LANGUAGE = 'REQUEST_LANGUAGE';
	var RECEIVE_LANGUAGE = exports.RECEIVE_LANGUAGE = 'RECEIVE_LANGUAGE';

	var TOGGLE_NAV = exports.TOGGLE_NAV = 'TOGGLE_NAV';
	var CLOSE_NAV = exports.CLOSE_NAV = 'CLOSE_NAV';

	var REQUEST_NATIONAL_SOCIETIES = exports.REQUEST_NATIONAL_SOCIETIES = 'REQUEST_NATIONAL_SOCIETIES';
	var RECEIVE_NATIONAL_SOCIETIES = exports.RECEIVE_NATIONAL_SOCIETIES = 'RECEIVE_NATIONAL_SOCIETIES';

	var counter;

	function startLoad() {
	  return {
	    type: START_LOAD
	  };
	}

	function endLoad() {
	  return {
	    type: END_LOAD
	  };
	}

	function progressLoad(progress) {
	  return {
	    type: PROGRESS_LOAD,
	    progress: progress
	  };
	}

	function startMainLoad() {
	  return function (dispatch, getState) {
	    var store = getState();
	    var loaderState = store.appReducer.showLoader;

	    dispatch(startLoad());
	    dispatch(progressLoad(0));

	    counter = setInterval(function () {
	      // console.log('progress');
	      var store = getState();
	      var lastProgress = store.appReducer.loadProgress;
	      dispatch(progressLoad(lastProgress + (75 - lastProgress) / 4));
	    }, 300);
	  };
	}

	function endMainLoad() {
	  console.log('Ending main load');
	  return function (dispatch, getState) {
	    // console.log('clearInterval');
	    clearInterval(counter);
	    counter = undefined;
	    // console.log('progress 100');
	    dispatch(progressLoad(100));
	    setTimeout(function () {
	      // console.log('end load');
	      dispatch(endLoad());
	      dispatch(progressLoad(0));
	    }, 500);
	  };
	}

	function toggleNav() {
	  return {
	    type: TOGGLE_NAV
	  };
	}

	function closeNav() {
	  return {
	    type: CLOSE_NAV
	  };
	}

	// export function switchLanguage(lang) {
	//   return {
	//     type: SWITCH_LANGUAGE,
	//     lang: lang
	//   };
	// }

	function requestLanguage() {
	  return {
	    type: REQUEST_LANGUAGE
	  };
	}

	function receiveLanguage(lang, languageData) {
	  return {
	    type: RECEIVE_LANGUAGE,
	    lang: lang,
	    languageData: languageData
	  };
	}

	function fetchLanguage(lang) {
	  return function (dispatch, getState) {

	    dispatch(requestLanguage(lang));

	    var promise = new _promisePolyfill2.default(function (resolve, reject) {
	      (0, _superagent2.default)('/api/' + lang + '/application.json').end(function (err, res) {
	        if (err) {
	          // dispatch(invalidateRequest());
	          console.log('Failed at fetching language!');
	          reject(err);
	        } else {
	          console.log('Received language');
	          dispatch(receiveLanguage(lang, JSON.parse(res.text)));
	          resolve(lang);
	        }
	      });
	    });

	    return promise;
	  };
	}

	function requestNationalSocieties() {
	  return {
	    type: REQUEST_NATIONAL_SOCIETIES
	  };
	}

	function receiveNationalSocieties(nationalSocieties) {
	  return {
	    type: RECEIVE_NATIONAL_SOCIETIES,
	    nationalSocieties: nationalSocieties
	  };
	}

	function fetchNationalSocieties() {
	  console.log('FETCHING NATIONAL SOCIEITES');
	  return function (dispatch, getState) {
	    dispatch(requestNationalSocieties());

	    var promise = new _promisePolyfill2.default(function (resolve, reject) {
	      (0, _superagent2.default)('/api/data/national-societies.json').end(function (err, res) {
	        if (err) {
	          console.log('Failed at fetching national societies');
	          reject(err);
	        } else {
	          console.log('Received National Societies');
	          dispatch(receiveNationalSocieties(JSON.parse(res.text)));
	          resolve();
	        }
	      });
	    });

	    return promise;
	  };
	}

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var icons = {
	  twitter: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 512 512',
	    path: '<path d="M492,109.5c-17.4,7.7-36,12.9-55.6,15.3c20-12,35.4-31,42.6-53.6c-18.7,11.1-39.4,19.2-61.5,23.5  C399.8,75.8,374.6,64,346.8,64c-53.5,0-96.8,43.4-96.8,96.9c0,7.6,0.8,15,2.5,22.1C172,179,100.6,140.4,52.9,81.7  c-8.3,14.3-13.1,31-13.1,48.7c0,33.6,17.1,63.3,43.1,80.7C67,210.7,52,206.3,39,199c0,0.4,0,0.8,0,1.2c0,47,33.4,86.1,77.7,95  c-8.1,2.2-16.7,3.4-25.5,3.4c-6.2,0-12.3-0.6-18.2-1.8c12.3,38.5,48.1,66.5,90.5,67.3c-33.1,26-74.9,41.5-120.3,41.5  c-7.8,0-15.5-0.5-23.1-1.4C62.9,432,113.8,448,168.4,448C346.6,448,444,300.3,444,172.2c0-4.2-0.1-8.4-0.3-12.5  C462.6,146,479,128.9,492,109.5z"/>'
	  },
	  facebook: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 512 512',
	    path: '<path d="M288,192v-38.1c0-17.2,3.8-25.9,30.5-25.9H352V64h-55.9c-68.5,0-91.1,31.4-91.1,85.3V192h-45v64h45v192h83V256h56.4l7.6-64  H288z"/>'
	  },
	  navigation: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#263238"><rect x="4" y="6" width="16" height="2"></rect><rect x="4" y="16" width="16" height="2"></rect><rect x="4" y="11" width="16" height="2"></rect></g></g>'
	  },
	  close: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g fill="#263238"><rect transform="translate(12, 12) rotate(-45) translate(-12, -12) " x="4" y="11" width="16" height="2"></rect><rect transform="translate(12, 12) rotate(-315) translate(-12, -12) " x="4" y="11" width="16" height="2"></rect></g></g>'
	  },
	  usergroup: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M1.91611925,17.7337039 L1.79484588,19.3587671 L0,19.3587671 L0.12127337,17.5760485 C0.226377484,16.4199033 0.701360101,15.5245105 1.54623547,14.8898434 C2.39111084,14.2551762 3.53713273,13.9378474 4.98433552,13.9378474 C5.32390266,13.9378474 5.62304065,13.954017 5.88175846,13.9863567 C5.5098516,14.5280472 5.25113767,15.1505776 5.10560889,15.8539666 C5.09752396,15.8539666 5.07933314,15.8519454 5.05103588,15.847903 C5.02273862,15.8438605 5.00050539,15.8418393 4.98433552,15.8418393 C4.45881496,15.8418393 3.99798076,15.8943906 3.6018191,15.9994947 C3.20565744,16.1045988 2.90651945,16.2278922 2.70439616,16.3693785 C2.50227287,16.5108648 2.33855545,16.6806458 2.21323901,16.8787266 C2.08792257,17.0768075 2.00909566,17.2364825 1.97675594,17.3577564 C1.94441621,17.4790304 1.92420418,17.604345 1.91611925,17.7337039 L1.91611925,17.7337039 Z M23.8665993,17.5639212 L24,19.3587671 L22.1930268,19.3587671 L22.0717534,17.7215766 C22.0636685,17.5922176 22.0434565,17.4669031 22.0111167,17.3456291 C21.978777,17.2243551 21.8999501,17.0667013 21.7746337,16.872663 C21.6493172,16.6786246 21.4855998,16.5108648 21.2834765,16.3693785 C21.0813532,16.2278922 20.7822152,16.1045988 20.3860536,15.9994947 C19.9898919,15.8943906 19.5290577,15.8418393 19.0035371,15.8418393 C18.9954522,15.8418393 18.9772614,15.8438605 18.9489641,15.847903 C18.9206669,15.8519454 18.8984336,15.8539666 18.8822638,15.8539666 C18.7529049,15.1829173 18.4982333,14.5603869 18.1182415,13.9863567 C18.3688744,13.954017 18.66397,13.9378474 19.0035371,13.9378474 C20.442655,13.9378474 21.5866557,14.253155 22.4355735,14.8837797 C23.2844914,15.5144044 23.7614952,16.4077759 23.8665993,17.5639212 L23.8665993,17.5639212 Z M8.00404245,19.3587671 L6.19706923,19.3587671 L6.41536129,16.6058615 C6.53663527,15.3850368 7.08235998,14.4411352 8.05255179,13.7741283 C9.02274361,13.1071215 10.3365253,12.773623 11.9939363,12.773623 C13.6513473,12.773623 14.9651291,13.1071215 15.9353209,13.7741283 C16.9055127,14.4411352 17.4512374,15.3809944 17.5725114,16.5937342 L17.7908034,19.3587671 L15.9838302,19.3587671 L15.7655382,16.7271349 C15.7008587,16.0560856 15.345127,15.5467425 14.6983325,15.1990904 C14.0515379,14.8514384 13.1500816,14.677615 11.9939363,14.677615 C10.8377911,14.677615 9.93633471,14.8514384 9.28954017,15.1990904 C8.64274563,15.5467425 8.28701397,16.060128 8.22233451,16.7392623 L8.00404245,19.3587671 Z M4.62051541,13.1495705 C3.73117292,13.1495705 2.99141275,12.8120297 2.40121273,12.1369378 C1.81101271,11.461846 1.51591713,10.6190045 1.51591713,9.60838807 C1.51591713,8.72713051 1.80899151,7.99747636 2.39514907,7.41940374 C2.98130662,6.84133112 3.72308798,6.55229914 4.62051541,6.55229914 C5.51794284,6.55229914 6.2597242,6.84133112 6.84588176,7.41940374 C7.43203931,7.99747636 7.72511369,8.72713051 7.72511369,9.60838807 C7.72511369,10.6190045 7.43001811,11.461846 6.83981809,12.1369378 C6.24961807,12.8120297 5.50985791,13.1495705 4.62051541,13.1495705 L4.62051541,13.1495705 Z M4.62051541,8.41990904 C4.28094828,8.41990904 3.9919163,8.51692677 3.75341081,8.71096513 C3.51490533,8.9050035 3.39565437,9.20009908 3.39565437,9.59626074 C3.39565437,10.0813566 3.51086292,10.483576 3.74128348,10.8029308 C3.97170403,11.1222856 4.26477841,11.2819606 4.62051541,11.2819606 C4.97625241,11.2819606 5.26932679,11.1222856 5.49974735,10.8029308 C5.7301679,10.483576 5.84537645,10.0813566 5.84537645,9.59626074 C5.84537645,9.20009908 5.7261255,8.9050035 5.48762001,8.71096513 C5.24911452,8.51692677 4.96008255,8.41990904 4.62051541,8.41990904 L4.62051541,8.41990904 Z M16.7599798,12.1369378 C16.1697798,11.461846 15.8746842,10.6190045 15.8746842,9.60838807 C15.8746842,8.72713051 16.1677586,7.99747636 16.7539161,7.41940374 C17.3400737,6.84133112 18.081855,6.55229914 18.9792825,6.55229914 C19.86054,6.55229914 20.598279,6.84537352 21.1925215,7.43153108 C21.786764,8.01768863 22.0838807,8.74330037 22.0838807,9.60838807 C22.0838807,10.6190045 21.7887852,11.461846 21.1985851,12.1369378 C20.6083851,12.8120297 19.868625,13.1495705 18.9792825,13.1495705 C18.08994,13.1495705 17.3501798,12.8120297 16.7599798,12.1369378 Z M18.9671551,8.41990904 C18.627588,8.41990904 18.338556,8.51692677 18.1000505,8.71096513 C17.861545,8.9050035 17.7422941,9.20009908 17.7422941,9.59626074 C17.7422941,10.0813566 17.8575026,10.483576 18.0879232,10.8029308 C18.3183437,11.1222856 18.6114181,11.2819606 18.9671551,11.2819606 C19.3228921,11.2819606 19.6159665,11.1222856 19.8463871,10.8029308 C20.0768076,10.483576 20.1920162,10.0813566 20.1920162,9.59626074 C20.1920162,9.17584428 20.0747864,8.87468509 19.8403234,8.69277413 C19.6058604,8.51086316 19.3148072,8.41990904 18.9671551,8.41990904 L18.9671551,8.41990904 Z M9.44719555,10.9120768 C8.81657087,10.1965603 8.50126326,9.30520998 8.50126326,8.23799899 C8.50126326,7.3244017 8.81859208,6.5563447 9.45325922,5.93380495 C10.0879264,5.3112652 10.8701318,5 11.7998989,5 C12.7296661,5 13.5118715,5.3112652 14.1465387,5.93380495 C14.7812058,6.5563447 15.0985346,7.3244017 15.0985346,8.23799899 C15.0985346,9.30520998 14.783227,10.1965603 14.1526023,10.9120768 C13.5219776,11.6275933 12.737751,11.9853461 11.7998989,11.9853461 C10.8620469,11.9853461 10.0778202,11.6275933 9.44719555,10.9120768 Z M10.7812026,7.25568469 C10.5063149,7.51440251 10.3688732,7.83779493 10.3688732,8.22587165 C10.3688732,8.76756208 10.5042937,9.21829027 10.775139,9.57806973 C11.0459842,9.9378492 11.3875674,10.1177362 11.7998989,10.1177362 C12.2122305,10.1177362 12.5538137,9.9378492 12.8246589,9.57806973 C13.0955041,9.21829027 13.2309247,8.76756208 13.2309247,8.22587165 C13.2309247,7.83779493 13.0934829,7.51440251 12.8185953,7.25568469 C12.5437076,6.99696687 12.2041455,6.8676099 11.7998989,6.8676099 C11.3956523,6.8676099 11.0560903,6.99696687 10.7812026,7.25568469 Z"></path></g>'
	  },
	  info: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle stroke="#EE3224" stroke-width="2" fill-opacity="0" fill="#EE3224" cx="12" cy="12" r="9"></circle><rect fill="#EE3224" x="11" y="10" width="2" height="7"></rect><rect fill="#EE3224" x="11" y="7" width="2" height="2"></rect></g>'
	  },
	  quote: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M16.5517241,9.68965517 L23,9.68965517 L23,19.1724138 L13.137931,19.1724138 L13.137931,10.0689655 C13.137931,8.12499028 13.6713309,6.62751962 14.7381466,5.57650862 C15.8049622,4.52549762 17.2945307,4 19.2068966,4 L19.2068966,5.89655172 C17.7054523,5.89655172 16.6347015,6.2264694 15.9946121,6.88631466 C15.3545227,7.54615991 15.0344828,8.60703292 15.0344828,10.0689655 L15.0344828,17.2758621 L21.1034483,17.2758621 L21.1034483,11.5862069 L16.5517241,11.5862069 L16.5517241,9.68965517 Z M4.4137931,11.5862069 L4.4137931,9.68965517 L10.862069,9.68965517 L10.862069,19.1724138 L1,19.1724138 L1,10.0689655 C1,8.12499028 1.53339984,6.62751962 2.60021552,5.57650862 C3.6670312,4.52549762 5.15659963,4 7.06896552,4 L7.06896552,5.89655172 C5.56752123,5.89655172 4.49677044,6.2264694 3.85668103,6.88631466 C3.21659163,7.54615991 2.89655172,8.60703292 2.89655172,10.0689655 L2.89655172,17.2758621 L8.96551724,17.2758621 L8.96551724,11.5862069 L4.4137931,11.5862069 Z" fill="#786A65"></path></g>'
	  },
	  goto: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#fff" points="11.8669891 1 23 12.1330109 11.8669891 23.2660218 10.3506651 21.7629988 18.9165659 13.1970979 1 13.1970979 1 11.0689238 18.9165659 11.0689238 10.3506651 2.50302297"></polygon></g>'
	  },
	  down: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#263238" points="23.133 12 12 23.133 0.866 12 2.370 10.483 10.935 19.049 10.935 1.133 13.064 1.133 13.064 19.049 21.629 10.483"></polygon></g>'
	  },
	  tornado: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M7.02573529,8.52941176 C6.9889704,8.56617665 6.9558825,8.61397029 6.92647059,8.67279412 C6.85294081,8.80514772 6.84191151,8.93014647 6.89338235,9.04779412 C6.95220618,9.1875007 7.0955871,9.33088162 7.32352941,9.47794118 C7.55147173,9.62500074 7.8749979,9.77757274 8.29411765,9.93566176 C8.71323739,10.0937508 9.29779037,10.222426 10.0477941,10.3216912 C10.7977979,10.4209564 11.6470541,10.4705882 12.5955882,10.4705882 C15.3897199,10.4705882 17.4816107,9.93750533 18.8713235,8.87132353 C18.9080884,9.2463254 18.7371342,9.73345289 18.3584559,10.3327206 C17.9797775,10.9319883 17.4338271,11.3749986 16.7205882,11.6617647 C16.1838208,11.8750011 15.6029443,12.0238966 14.9779412,12.1084559 C14.3529381,12.1930151 13.5588283,12.2352941 12.5955882,12.2352941 C11.0955807,12.2352941 9.77941743,12.1066189 8.64705882,11.8492647 L8.58088235,11.8823529 C8.45588173,11.9411768 8.36764732,12.036764 8.31617647,12.1691176 C8.25735265,12.3014712 8.26102908,12.4338229 8.32720588,12.5661765 C8.45220651,12.8308837 8.89337857,13.0772047 9.65073529,13.3051471 C10.408092,13.5330894 11.4264642,13.6470588 12.7058824,13.6470588 C14.0000065,13.6470588 15.0698487,13.5238983 15.9154412,13.2775735 C16.7610336,13.0312488 17.3786745,12.7463251 17.7683824,12.4227941 C17.6213228,13.0919151 17.4080896,13.6102923 17.1286765,13.9779412 C16.8492633,14.3455901 16.5000021,14.6397048 16.0808824,14.8602941 C15.6838215,15.0661775 15.2352966,15.2095584 14.7352941,15.2904412 C14.2352916,15.3713239 13.5588278,15.4117647 12.7058824,15.4117647 C11.6691125,15.4117647 10.724269,15.3308832 9.87132353,15.1691176 C9.67279313,15.2500004 9.52389756,15.3805138 9.42463235,15.5606618 C9.32536715,15.7408097 9.32352893,15.9007346 9.41911765,16.0404412 C9.57353018,16.2536775 9.88786528,16.4374992 10.3621324,16.5919118 C10.8363994,16.7463243 11.4558785,16.8235294 12.2205882,16.8235294 C13.0808867,16.8235294 13.854776,16.751839 14.5422794,16.6084559 C15.2297828,16.4650728 15.7352925,16.2977951 16.0588235,16.1066176 C15.9191169,16.8566214 15.5330914,17.4577183 14.9007353,17.9099265 C14.2683792,18.3621346 13.3750058,18.5882353 12.2205882,18.5882353 C11.9852929,18.5882353 11.7610305,18.577206 11.5477941,18.5551471 C11.5330882,18.7904424 11.5900729,18.9816169 11.71875,19.1286765 C11.8474271,19.275736 12.1066157,19.470587 12.4963235,19.7132353 C12.658089,19.808824 12.7867642,19.8878673 12.8823529,19.9503676 C12.9779417,20.012868 13.1066168,20.1102935 13.2683824,20.2426471 C13.4301479,20.3750007 13.5606613,20.4999994 13.6599265,20.6176471 C13.7591917,20.7352947 13.8621318,20.8878667 13.96875,21.0753676 C14.0753682,21.2628686 14.1507351,21.4522049 14.1948529,21.6433824 C14.2389708,21.8345598 14.257353,22.0606605 14.25,22.3216912 C14.242647,22.5827219 14.2022062,22.8566162 14.1286765,23.1433824 L12.4301471,22.6911765 C12.5257358,22.3161746 12.5183829,22.0441185 12.4080882,21.875 C12.2977936,21.7058815 12.0183846,21.4852955 11.5698529,21.2132353 C11.3419106,21.0661757 11.1691182,20.9522063 11.0514706,20.8713235 C10.9338229,20.7904408 10.7720599,20.6525745 10.5661765,20.4577206 C10.3602931,20.2628667 10.2058829,20.0735303 10.1029412,19.8897059 C9.99999949,19.7058814 9.91360329,19.4687515 9.84375,19.1783088 C9.77389671,18.8878662 9.75735276,18.5772075 9.79411765,18.2463235 C8.95587816,17.9742633 8.35294301,17.5735321 7.98529412,17.0441176 C7.55146842,16.4117615 7.46691044,15.7536799 7.73161765,15.0698529 C7.79779445,14.9154404 7.89338173,14.742648 8.01838235,14.5514706 C7.42279114,14.2279396 7.00367768,13.8308847 6.76102941,13.3602941 C6.41543945,12.6470553 6.44117449,11.9375035 6.83823529,11.2316176 C6.05881963,10.8492628 5.54044246,10.3492678 5.28308824,9.73161765 C5.04043996,9.15808537 5.05146926,8.57720882 5.31617647,7.98897059 C3.7720511,7.35661449 3,6.53676974 3,5.52941176 C3,4.94852651 3.26286502,4.4264729 3.78860294,3.96323529 C4.31434086,3.49999768 5.01286329,3.12867787 5.88419118,2.84926471 C6.75551906,2.56985154 7.71323007,2.3584566 8.75735294,2.21507353 C9.80147581,2.07169046 10.8823474,2 12,2 C13.1176526,2 14.1985242,2.07169046 15.2426471,2.21507353 C16.2867699,2.3584566 17.2444809,2.56985154 18.1158088,2.84926471 C18.9871367,3.12867787 19.6856591,3.49999768 20.2113971,3.96323529 C20.737135,4.4264729 21,4.94852651 21,5.52941176 C21,6.11029702 20.737135,6.63235062 20.2113971,7.09558824 C19.6856591,7.55882585 18.9871367,7.93014566 18.1158088,8.20955882 C17.2444809,8.48897199 16.2867699,8.70036693 15.2426471,8.84375 C14.1985242,8.98713307 13.1176526,9.05882353 12,9.05882353 C10.1911674,9.05882353 8.53309577,8.88235471 7.02573529,8.52941176 L7.02573529,8.52941176 Z M4.76470588,5.52941176 C4.77205886,5.6176475 4.86580792,5.73161695 5.04595588,5.87132353 C5.22610384,6.01103011 5.51654211,6.16360211 5.91727941,6.32904412 C6.31801671,6.49448612 6.78860024,6.64889634 7.32904412,6.79227941 C7.869488,6.93566248 8.55146647,7.05514658 9.375,7.15073529 C10.1985335,7.24632401 11.0735248,7.29411765 12,7.29411765 C12.9264752,7.29411765 13.8014665,7.24632401 14.625,7.15073529 C15.4485335,7.05514658 16.130512,6.93566248 16.6709559,6.79227941 C17.2113998,6.64889634 17.6819833,6.49448612 18.0827206,6.32904412 C18.4834579,6.16360211 18.7738962,6.01103011 18.9540441,5.87132353 C19.1341921,5.73161695 19.2279411,5.6176475 19.2352941,5.52941176 C19.2279411,5.44117603 19.1341921,5.32720658 18.9540441,5.1875 C18.7738962,5.04779342 18.4834579,4.89522142 18.0827206,4.72977941 C17.6819833,4.56433741 17.2113998,4.40992719 16.6709559,4.26654412 C16.130512,4.12316105 15.4485335,4.00367695 14.625,3.90808824 C13.8014665,3.81249952 12.9264752,3.76470588 12,3.76470588 C11.0735248,3.76470588 10.1985335,3.81249952 9.375,3.90808824 C8.55146647,4.00367695 7.869488,4.12316105 7.32904412,4.26654412 C6.78860024,4.40992719 6.31801671,4.56433741 5.91727941,4.72977941 C5.51654211,4.89522142 5.22610384,5.04779342 5.04595588,5.1875 C4.86580792,5.32720658 4.77205886,5.44117603 4.76470588,5.52941176 L4.76470588,5.52941176 Z"></path></g>'
	  },
	  flag: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M22,4.81411263 L22,19.0665636 L21.2769608,19.262642 C21.195261,19.287152 21.1033502,19.3116615 21.0012255,19.3361715 C20.8991008,19.3606814 20.6764723,19.4035731 20.3333333,19.4648479 C19.9901944,19.5261227 19.6429756,19.5710569 19.2916667,19.5996518 C18.9403577,19.6282468 18.4991857,19.6405015 17.9681373,19.6364166 C17.4370888,19.6323316 16.9101333,19.5976097 16.3872549,19.5322499 C15.7581668,19.4505501 15.1290881,19.2932805 14.5,19.0604362 C13.8709119,18.8275919 13.417485,18.6335579 13.1397059,18.4783283 C12.8619267,18.3230988 12.4289245,18.0575786 11.8406863,17.6817597 C11.7344766,17.6163999 11.6527781,17.5673808 11.5955882,17.5347009 C10.5171515,16.8484229 9.63480735,16.4113358 8.94852941,16.2234264 C8.04983211,15.9864971 6.91013762,15.9415629 5.52941176,16.0886224 L5.52941176,14.1155832 C7.10621703,13.9766936 8.4133935,14.0502223 9.45098039,14.3361715 C9.85130919,14.4423811 10.2577594,14.5894385 10.6703431,14.7773479 C11.0829269,14.9652574 11.409721,15.1306969 11.6507353,15.2736715 C11.8917496,15.416646 12.2205862,15.6188499 12.6372549,15.8802891 C12.6781048,15.904799 12.7904403,15.9762852 12.9742647,16.0947499 C13.1580892,16.2132145 13.2785945,16.2887857 13.3357843,16.3214656 C13.3929741,16.3541455 13.5073521,16.4215468 13.6789216,16.5236715 C13.8504911,16.6257961 13.9730388,16.6972824 14.0465686,16.7381322 C14.1200984,16.7789821 14.2406037,16.840256 14.4080882,16.9219558 C14.5755727,17.0036555 14.7103753,17.0649294 14.8125,17.1057793 C14.9146247,17.1466292 15.0473848,17.1976908 15.2107843,17.2589656 C15.3741838,17.3202404 15.5253261,17.367217 15.6642157,17.3998969 C15.8031053,17.4325768 15.95629,17.4652563 16.1237745,17.4979362 C16.291259,17.5306161 16.4607835,17.5592105 16.6323529,17.5837205 C17.7107897,17.7226101 18.8463993,17.7062704 20.0392157,17.5347009 L20.0392157,7.30185773 C18.9035891,7.48159719 17.6903659,7.48976704 16.3995098,7.32636753 C15.7214018,7.24466778 15.0616862,7.09148304 14.4203431,6.86680871 C13.7790001,6.64213438 13.2826815,6.43380313 12.9313725,6.24180871 C12.5800636,6.04981429 12.1348066,5.78633653 11.5955882,5.45136753 C11.2115994,5.22260822 10.9215696,5.05104131 10.7254902,4.93666165 C10.5294108,4.82228199 10.2618481,4.68747942 9.92279412,4.53224989 C9.58374013,4.37702035 9.25898848,4.25855748 8.94852941,4.17685773 C7.72303309,3.85005871 6.06046801,3.8786532 3.96078431,4.26264204 L3.96078431,22.387642 L2,22.387642 L2,2.7185244 L2.73529412,2.53470087 C2.81699387,2.51019094 2.98039093,2.46934168 3.2254902,2.41215185 C3.47058946,2.35496202 3.84844516,2.28756073 4.35906863,2.20994597 C4.8696921,2.1323312 5.39052022,2.07309976 5.92156863,2.03224989 C6.45261703,1.99140001 7.04288891,1.98935755 7.69240196,2.02612244 C8.34191501,2.06288733 8.92810196,2.15071324 9.45098039,2.28960283 C10.3333377,2.52653212 11.3872488,3.02489315 12.6127451,3.78470087 C13.1192836,4.09515994 13.5175639,4.33004321 13.807598,4.48935773 C14.0976322,4.64867225 14.5020399,4.82023916 15.0208333,5.00406361 C15.5396268,5.18788806 16.0727097,5.31247832 16.620098,5.37783812 C18.1233735,5.56574756 19.487739,5.50038873 20.7132353,5.18175969 L22,4.81411263 Z"></path></g>'
	  },
	  earth: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#795548" d="M3,12.0087891 C3,16.9746094 7.02539062,21.0087891 12,21.0087891 C16.9746094,21.0087891 21,16.9746094 21,12.0087891 C21,7.03417969 16.9746094,3.00878906 12,3.00878906 C7.02539062,3.00878906 3,7.03417969 3,12.0087891 Z M14.8916016,6.21679688 C13.6083984,6.21679688 14.25,5.25878906 14.5751953,4.93359375 C14.6191406,4.88964844 14.6455078,4.828125 14.671875,4.77539062 C15.8496094,5.21484375 16.8955078,5.92675781 17.7304687,6.84960938 C16.8867187,6.45410156 16.0517578,8.15039062 15.2167969,8.15039062 C14.25,8.15039062 14.8916016,6.21679688 14.8916016,6.21679688 L14.8916016,6.21679688 Z M16.5,10.4003906 C16.5,8.40527344 18.5126953,8.43164062 18.3017578,7.5703125 C19.1894531,8.82714844 19.7167969,10.3476562 19.7167969,12.0087891 C19.7167969,12.6591797 19.6201172,13.2832031 19.4707031,13.8896484 C18.328125,13.3007812 16.5,12.0175781 16.5,10.4003906 L16.5,10.4003906 Z M9.42480469,10.7167969 C8.14160156,11.0419922 9.10839844,12.0087891 9.10839844,12.0087891 C10.3916016,12.6503906 9.75,12.9667969 9.75,12.9667969 C8.78320312,12.6503906 7.82519531,12.0087891 7.82519531,12.0087891 C7.82519531,12.0087891 6.53320312,11.0419922 6.85839844,10.4003906 C7.17480469,9.75878906 7.82519531,8.79199219 6.85839844,7.82519531 C6.55078125,7.52636719 6.26074219,7.32421875 5.98828125,7.18359375 C6.47167969,6.57714844 7.04296875,6.04101562 7.69335938,5.61035156 C8.15039062,6.41894531 9.42480469,7.18359375 9.42480469,7.18359375 C10.0751953,5.57519531 11.0332031,6.54199219 11.0332031,6.54199219 C11.3583984,5.90039062 12.6416016,6.21679688 12,6.85839844 C11.3583984,7.50878906 10.0751953,7.18359375 11.0332031,8.15039062 C12,9.10839844 11.3583984,7.50878906 12.6416016,7.50878906 C13.9248047,7.50878906 13.9248047,8.79199219 13.2832031,8.79199219 C12.6416016,8.79199219 12.9667969,9.10839844 11.6748047,9.75878906 C10.3916016,10.4003906 11.0332031,11.3583984 10.3916016,11.3583984 C9.75,11.3583984 10.3916016,10.4003906 9.42480469,10.7167969 L9.42480469,10.7167969 Z M12.6679688,19.0400391 C12.4042969,19.1894531 12.1933594,18.7236328 11.8945312,18.4160156 C11.5957031,18.1083984 11.296875,17.4931641 11.5957031,15.9462891 C11.5957031,15.9462891 10.3916016,15.6386719 10.3916016,13.7841797 C10.3916016,12.8613281 11.296875,12.2373047 12.7998047,12.8613281 C14.3027344,13.4765625 13.3974609,13.4765625 13.9951172,13.7841797 C14.6015625,14.0917969 14.9003906,15.0234375 13.9951172,15.9462891 C13.0986328,16.8779297 12.9404297,18.8818359 12.6679688,19.0400391 Z"></path></g>'
	  },
	  download: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#795548" d="M18.7375,9.04583333 C19.9291726,9.10694475 20.9374959,9.57291231 21.7625,10.44375 C22.5875041,11.3145877 23,12.361105 23,13.5833333 C23,14.8361174 22.5493101,15.9131899 21.6479167,16.8145833 C20.7465233,17.7159767 19.6694507,18.1666667 18.4166667,18.1666667 L6.5,18.1666667 C4.97221458,18.1666667 3.67361646,17.6319498 2.60416667,16.5625 C1.53471687,15.4930502 1,14.1944521 1,12.6666667 C1,11.2611041 1.47360638,10.0388941 2.42083333,9 C3.36806029,7.96110592 4.52915979,7.36527854 5.90416667,7.2125 C6.48472512,6.08193879 7.31735569,5.18055892 8.40208333,4.50833333 C9.48681098,3.83610775 10.6861045,3.5 12,3.5 C13.6500083,3.5 15.1013826,4.02707806 16.3541667,5.08125 C17.6069507,6.13542194 18.4013872,7.4569365 18.7375,9.04583333 L18.7375,9.04583333 Z M10.5333333,11.3833333 L7.41666667,11.3833333 L12,15.9666667 L16.5833333,11.3833333 L13.4666667,11.3833333 L13.4666667,7.9 L10.5333333,7.9 L10.5333333,11.3833333 Z"></path></g>'
	  },
	  share: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#786A65" d="M18,16.125 C18.8125041,16.125 19.4999972,16.4062472 20.0625,16.96875 C20.6250028,17.5312528 20.90625,18.2187459 20.90625,19.03125 C20.90625,19.8437541 20.6250028,20.5312472 20.0625,21.09375 C19.4999972,21.6562528 18.8125041,21.9375 18,21.9375 C17.1874959,21.9375 16.5000028,21.6562528 15.9375,21.09375 C15.3749972,20.5312472 15.09375,19.8437541 15.09375,19.03125 C15.09375,18.8437491 15.1249997,18.6250013 15.1875,18.375 L8.0625,14.25 C7.46874703,14.7812527 6.78125391,15.046875 6,15.046875 C5.18749594,15.046875 4.48437797,14.750003 3.890625,14.15625 C3.29687203,13.562497 3,12.8593791 3,12.046875 C3,11.2343709 3.28905961,10.531253 3.8671875,9.9375 C4.44531539,9.34374703 5.14062094,9.046875 5.953125,9.046875 C6.73437891,9.046875 7.42187203,9.31249734 8.015625,9.84375 L15.09375,5.765625 C15.0312497,5.45312344 15,5.21875078 15,5.0625 C15,4.24999594 15.296872,3.54687797 15.890625,2.953125 C16.484378,2.35937203 17.1874959,2.0625 18,2.0625 C18.8125041,2.0625 19.515622,2.35937203 20.109375,2.953125 C20.703128,3.54687797 21,4.24999594 21,5.0625 C21,5.87500406 20.703128,6.57812203 20.109375,7.171875 C19.515622,7.76562797 18.8125041,8.0625 18,8.0625 C17.2187461,8.0625 16.531253,7.79687766 15.9375,7.265625 L8.859375,11.34375 C8.92187531,11.6562516 8.953125,11.8906242 8.953125,12.046875 C8.953125,12.2031258 8.92187531,12.4374984 8.859375,12.75 L16.03125,16.875 C16.5312525,16.3749975 17.1874959,16.125 18,16.125 L18,16.125 Z"></path></g>'
	  },
	  drop: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M19.046,9.518 C19.848,10.807 20.25,12.207 20.25,13.718 C20.25,14.792 20.040,15.817 19.621,16.791 C19.202,17.764 18.640,18.604 17.935,19.310 C17.229,20.015 16.389,20.577 15.416,20.996 C14.442,21.415 13.417,21.625 12.343,21.625 C11.269,21.625 10.245,21.415 9.271,20.996 C8.297,20.577 7.457,20.015 6.752,19.310 C6.047,18.604 5.484,17.764 5.065,16.791 C4.646,15.817 4.437,14.792 4.437,13.718 C4.437,12.207 4.838,10.807 5.640,9.518 C6.020,8.909 6.741,8.011 7.805,6.822 C8.868,5.633 9.699,4.729 10.297,4.109 C10.895,3.490 11.373,3.001 11.731,2.643 L12.343,2.031 L12.956,2.643 C13.314,3.001 13.792,3.490 14.390,4.109 C14.988,4.729 15.818,5.633 16.882,6.822 C17.945,8.011 18.667,8.909 19.046,9.518 L19.046,9.518 L19.046,9.518 Z M12.343,19.906 C13.181,19.906 13.981,19.743 14.744,19.417 C15.507,19.091 16.166,18.651 16.721,18.096 C17.276,17.541 17.716,16.882 18.042,16.119 C18.368,15.356 18.531,14.556 18.531,13.718 C18.531,12.529 18.216,11.434 17.585,10.431 C16.934,9.393 15.186,7.405 12.343,4.469 C9.500,7.405 7.753,9.393 7.101,10.431 C6.471,11.434 6.156,12.529 6.156,13.718 C6.156,14.556 6.319,15.356 6.645,16.119 C6.970,16.882 7.411,17.541 7.966,18.096 C8.521,18.651 9.180,19.091 9.942,19.417 C10.705,19.743 11.505,19.906 12.343,19.906 L12.343,19.906 L12.343,19.906 Z M8.261,11.151 C8.698,10.456 9.851,9.106 11.720,7.101 L12.966,8.283 C11.212,10.152 10.130,11.412 9.722,12.064 C9.407,12.565 9.25,13.117 9.25,13.718 C9.25,14.592 9.565,15.333 10.195,15.942 L8.992,17.166 C8.018,16.228 7.531,15.079 7.531,13.718 C7.531,12.794 7.774,11.939 8.261,11.151 L8.261,11.151 L8.261,11.151 Z"></path></g>'
	  },
	  work: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M16.46875,7.21875 L21.28125,7.21875 L21.28125,19.9375 L2.71875,19.9375 L2.71875,7.21875 L7.53125,7.21875 L7.53125,4.984375 C7.53125,4.56184685 7.68342947,4.19840647 7.98779297,3.89404297 C8.29215647,3.58967947 8.65559685,3.4375 9.078125,3.4375 L14.921875,3.4375 C15.3444032,3.4375 15.7078435,3.58967947 16.012207,3.89404297 C16.3165705,4.19840647 16.46875,4.56184685 16.46875,4.984375 L16.46875,7.21875 L16.46875,7.21875 Z M19.5625,18.21875 L19.5625,8.9375 L10.625,8.9375 L10.625,7.21875 L14.75,7.21875 L14.75,5.15625 L9.25,5.15625 L9.25,8.9375 L4.4375,8.9375 L4.4375,18.21875 L19.5625,18.21875 L19.5625,18.21875 Z"></path></g>'
	  },
	  heart: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path fill="#EE3224" d="M20.5830078,9.28222656 C20.6904302,11.1227306 19.9778722,12.8414634 18.4453125,14.4384766 C17.843747,15.0615266 17.2332388,15.6953093 16.6137695,16.3398438 C15.9943003,16.9843782 15.4554059,17.5447567 14.9970703,18.0209961 C14.5387347,18.4972355 14.126955,18.9269187 13.7617188,19.3100586 C13.3964825,19.6931985 13.1171885,19.985025 12.9238281,20.1855469 L12.6230469,20.4970703 L12,21.1523438 L11.3769531,20.4970703 L11.0761719,20.1855469 C10.8828115,19.985025 10.6035175,19.6931985 10.2382813,19.3100586 C9.87304505,18.9269187 9.46305566,18.4972355 9.00830078,18.0209961 C8.5535459,17.5447567 8.01465155,16.9843782 7.39160156,16.3398438 C6.76855157,15.6953093 6.15625301,15.0615266 5.5546875,14.4384766 C4.02212775,12.8414634 3.30956978,11.1227306 3.41699219,9.28222656 C3.45996115,8.53743117 3.63899582,7.83740562 3.95410156,7.18212891 C4.2692073,6.52685219 4.68456773,5.99153854 5.20019531,5.57617188 C6.13835104,4.8170535 7.21613975,4.4375 8.43359375,4.4375 C10.001961,4.4375 11.1907512,4.99966886 12,6.12402344 C12.8092488,4.99966886 13.998039,4.4375 15.5664063,4.4375 C16.7838603,4.4375 17.861649,4.8170535 18.7998047,5.57617188 C19.3154323,5.99153854 19.7307927,6.52685219 20.0458984,7.18212891 C20.3610042,7.83740562 20.5400388,8.53743117 20.5830078,9.28222656 L20.5830078,9.28222656 Z M17.2099609,13.2460938 C18.4059305,12.0071553 18.9573572,10.7181057 18.8642578,9.37890625 C18.8356118,8.8346327 18.7102876,8.34586805 18.4882812,7.91259766 C18.2662749,7.47932726 18.008465,7.14811312 17.7148437,6.91894531 C17.1061167,6.41047923 16.3899781,6.15625 15.5664062,6.15625 C15.0221327,6.15625 14.5602233,6.25113837 14.1806641,6.44091797 C13.8011049,6.63069756 13.5236011,6.89029783 13.3481445,7.21972656 C13.1726879,7.54915529 13.0581057,7.79443279 13.0043945,7.95556641 C12.9506833,8.11670002 12.9059247,8.30826712 12.8701172,8.53027344 C12.8629557,8.55175792 12.859375,8.56608069 12.859375,8.57324219 C12.7734371,9.02441632 12.4977237,9.25 12.0322266,9.25 C11.7529283,9.25 11.539877,9.18196683 11.3930664,9.04589844 C11.2462558,8.90983005 11.1621095,8.74869885 11.140625,8.5625 C10.9687491,7.38085347 10.410161,6.62890786 9.46484375,6.30664062 C9.1568995,6.20637971 8.81315294,6.15625 8.43359375,6.15625 C7.61002192,6.15625 6.89388325,6.41047923 6.28515625,6.91894531 C5.99153499,7.14811312 5.73372507,7.47932726 5.51171875,7.91259766 C5.28971243,8.34586805 5.16438816,8.8346327 5.13574219,9.37890625 C5.04264276,10.7181057 5.59406954,12.0071553 6.79003906,13.2460938 C9.50424534,16.0605609 11.2408816,17.8652304 12,18.6601562 C12.7591184,17.8652304 14.4957547,16.0605609 17.2099609,13.2460938 L17.2099609,13.2460938 Z"></path></g>'
	  },
	  back: {
	    width: '24',
	    height: '24',
	    viewBox: '0 0 24 24',
	    path: '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon fill="#263238" points="12.1330109 23.2660218 1 12.1330109 12.1330109 1 13.6493349 2.50302297 5.0834341 11.0689238 23 11.0689238 23 13.1970979 5.0834341 13.1970979 13.6493349 21.7629988"></polygon></g>'
	  }
	};

	var Icon = function Icon(props) {
	  return _react2.default.createElement('svg', { className: 'icn', width: props.width || icons[props.name].width, height: props.height || icons[props.name].height, viewBox: props.viewBox || icons[props.name].viewBox, dangerouslySetInnerHTML: { __html: icons[props.name].path } });
	};

	exports.default = Icon;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loader = function (_React$Component) {
	  _inherits(Loader, _React$Component);

	  function Loader(props) {
	    _classCallCheck(this, Loader);

	    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this, props));
	  }

	  _createClass(Loader, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { opacity: '' + (this.props.showLoader && this.props.loadProgress > 0 ? '1' : '0'), position: 'fixed', top: 0, left: 0, width: '100%', height: '3px', zIndex: 10000 } },
	        _react2.default.createElement('div', { style: { height: '3px', background: '#EE3224', transition: 'all 0.3s', width: this.props.loadProgress + '%' } })
	      );
	    }
	  }]);

	  return Loader;
	}(_react2.default.Component);

	function mapStateToProps(state) {
	  return {
	    showLoader: state.appReducer.showLoader,
	    loadProgress: state.appReducer.loadProgress
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Loader);

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _prefixLanguageToRoute = __webpack_require__(258);

	var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navigation = function (_React$Component) {
	  _inherits(Navigation, _React$Component);

	  function Navigation() {
	    _classCallCheck(this, Navigation);

	    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	  }

	  _createClass(Navigation, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('NAVIGATION CONTENT: ', this.props.navigationContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'nav',
	        { className: this.props.navOpen ? 'site-nav is-open' : 'site-nav' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'col md-7 lg-5' },
	            this.props.navigationContent[this.props.language].home.sections.map(function (section, sectionKey) {
	              return sectionKey < 3 ? _react2.default.createElement(
	                'li',
	                { key: sectionKey, className: 'site-nav__section clearfix pb2' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'strong caps' },
	                  'Section ',
	                  sectionKey + 1,
	                  ' \u2014 ',
	                  section.title
	                ),
	                _react2.default.createElement(
	                  'ul',
	                  null,
	                  section.chapters.map(function (chapter, chapterKey) {
	                    return _react2.default.createElement(
	                      'li',
	                      { key: chapterKey, className: 'site-nav__chapter col md-12 lg-12' },
	                      _react2.default.createElement(
	                        'div',
	                        { style: { position: 'absolute', width: '2rem', top: 0, left: 0 }, className: 'display-2 center strong' },
	                        chapter.id
	                      ),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'pl2' },
	                        _react2.default.createElement(
	                          _reactRouter.Link,
	                          { to: (0, _prefixLanguageToRoute2.default)(_this2.props.language, '/report' + chapter.slug) },
	                          _react2.default.createElement(
	                            'div',
	                            { className: 'title' },
	                            chapter.title
	                          ),
	                          _react2.default.createElement('hr', { style: { marginBottom: '8px', marginTop: '4px' } }),
	                          _react2.default.createElement(
	                            'div',
	                            { style: { color: '#222' } },
	                            chapter.subtitle || ''
	                          )
	                        )
	                      )
	                    );
	                  })
	                )
	              ) : '';
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col md-5 lg-5 lg-offset-1' },
	            _react2.default.createElement(
	              'li',
	              { className: 'site-nav__section clearfix pb2' },
	              _react2.default.createElement(
	                'div',
	                { className: 'strong caps' },
	                this.props.navigationContent[this.props.language].home.sections[3].id,
	                ' \u2014\xA0',
	                this.props.navigationContent[this.props.language].home.sections[3].title
	              ),
	              _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                  'li',
	                  { className: 'site-nav__chapter col md-12' },
	                  _react2.default.createElement(
	                    'div',
	                    { style: { position: 'absolute', width: '2rem', top: 0, left: 0 }, className: 'display-2 center strong' },
	                    '10'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'pl3' },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.props.language, '/report/data') },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'title' },
	                        this.props.navigationContent[this.props.language].home.sections[3].chapters[0].preTitle
	                      ),
	                      _react2.default.createElement('hr', { style: { marginBottom: '8px', marginTop: '4px' } })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.props.language, '/report/data') },
	                      _react2.default.createElement('img', { src: '/img/data-view-preview.png' })
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  { className: 'site-nav__chapter col md-12' },
	                  _react2.default.createElement(
	                    'div',
	                    { style: { position: 'absolute', width: '2rem', top: 0, left: 0 }, className: 'display-2 center strong' },
	                    '11'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'pl3' },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.props.language, '/report/acknowledgements') },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'title' },
	                        this.props.navigationContent[this.props.language].home.sections[3].chapters[1].title
	                      ),
	                      _react2.default.createElement('hr', { style: { marginBottom: '8px', marginTop: '4px' } })
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Navigation;
	}(_react2.default.Component);

	Navigation.defaultProps = {
	  mainSections: [{
	    title: 'Overview',
	    chapters: [{
	      id: '1',
	      title: 'Who we are',
	      slug: '/who-we-are'
	    }, {
	      id: '2',
	      title: 'What we do',
	      slug: '/what-we-do'
	    }, {
	      id: '3',
	      title: 'Living our fundamental principles',
	      slug: '/living-our-fundamental-principles'
	    }]
	  }, {
	    title: 'Strategic aims',
	    chapters: [{
	      id: '4',
	      title: 'Strategic Aim 1',
	      slug: '/strategic-aim-1',
	      subtitle: 'Save lives, protect livelihoods and strengthen recovery from disasters and crises'
	    }, {
	      id: '5',
	      title: 'Strategic Aim 2',
	      slug: '/strategic-aim-2',
	      subtitle: 'Healthy and safe living'
	    }, {
	      id: '6',
	      title: 'Strategic Aim 3',
	      slug: '/strategic-aim-3',
	      subtitle: 'Social inclusion and a culture of non-violence and peace'
	    }]
	  }, {
	    title: 'Enabling actions',
	    chapters: [{
	      id: '7',
	      title: 'Enabling Action 1',
	      slug: '/enabling-action-1',
	      subtitle: 'Strong National Red Cross and Red Crescent Societies'
	    }, {
	      id: '8',
	      title: 'Enabling Action 2',
	      slug: '/enabling-action-2',
	      subtitle: 'Humanitarian diplomacy to prevent and reduce vulnerability in a globalised world'
	    }, {
	      id: '9',
	      title: 'Enabling Action 3',
	      slug: '/enabling-action-3',
	      subtitle: 'Function effectively as the IFRC'
	    }]
	  }]
	};

	exports.default = Navigation;

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _Icon = __webpack_require__(267);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReadMore = function (_React$Component) {
	  _inherits(ReadMore, _React$Component);

	  function ReadMore() {
	    _classCallCheck(this, ReadMore);

	    return _possibleConstructorReturn(this, (ReadMore.__proto__ || Object.getPrototypeOf(ReadMore)).apply(this, arguments));
	  }

	  _createClass(ReadMore, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return this.context.language !== nextContext.language;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'clearfix bg-primary pb2' },
	          _react2.default.createElement(
	            'div',
	            { className: 'clearfix pt3 px1 sm-px0' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col sm-3 sm-offset-2' },
	              _react2.default.createElement(
	                'p',
	                { className: 'small strong caps m0' },
	                this.props.content[this.context.language].home.downloadReportSection.preTitle
	              ),
	              _react2.default.createElement(
	                'h2',
	                { className: 'display-1 mt0' },
	                this.props.content[this.context.language].home.downloadReportSection.title
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null)
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'clearfix pb3 px1 sm-px0' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col sm-4 sm-offset-2 pr2' },
	              _react2.default.createElement('img', { src: '/img/cover.png', alt: '' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col sm-4' },
	              _react2.default.createElement(
	                'p',
	                { className: 'lead' },
	                this.props.content[this.context.language].home.downloadReportSection.body
	              ),
	              _react2.default.createElement(
	                'a',
	                { className: 'btn py1', href: '/downloads/Everyone_counts_2013_en.pdf', target: '_blank' },
	                this.props.content[this.context.language].home.downloadReportSection.buttons[0],
	                ' ',
	                _react2.default.createElement(_Icon2.default, { name: 'goto' })
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'a',
	                { className: 'btn py1', href: '/downloads/Everyone_counts_2013_fr.pdf', target: '_blank' },
	                this.props.content[this.context.language].home.downloadReportSection.buttons[1],
	                ' ',
	                _react2.default.createElement(_Icon2.default, { name: 'goto' })
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'a',
	                { className: 'btn py1', href: '/downloads/Everyone_counts_2013_es.pdf', target: '_blank' },
	                this.props.content[this.context.language].home.downloadReportSection.buttons[2],
	                ' ',
	                _react2.default.createElement(_Icon2.default, { name: 'goto' })
	              ),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement(
	                'a',
	                { className: 'btn py1', href: '/downloads/Everyone_counts_2013_ar.pdf', target: '_blank' },
	                this.props.content[this.context.language].home.downloadReportSection.buttons[3],
	                ' ',
	                _react2.default.createElement(_Icon2.default, { name: 'goto' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ReadMore;
	}(_react2.default.Component);

	ReadMore.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    language: state.appReducer.language,
	    content: {
	      en: state.appReducer.en,
	      fr: state.appReducer.fr,
	      es: state.appReducer.es,
	      ar: state.appReducer.ar
	    }
	  };
	}
	exports.default = (0, _reactRedux.connect)(mapStateToProps)(ReadMore);

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeadlineDivider = function (_React$Component) {
	  _inherits(HeadlineDivider, _React$Component);

	  function HeadlineDivider() {
	    _classCallCheck(this, HeadlineDivider);

	    return _possibleConstructorReturn(this, (HeadlineDivider.__proto__ || Object.getPrototypeOf(HeadlineDivider)).apply(this, arguments));
	  }

	  _createClass(HeadlineDivider, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'headline-divider' },
	        _react2.default.createElement(
	          'svg',
	          { viewBox: '0 0 30 20' },
	          _react2.default.createElement('polyline', { points: '2 0 2 16 20 2 30 2', strokeWidth: 4, stroke: '#EE3224', fill: 'transparent' })
	        )
	      );
	    }
	  }]);

	  return HeadlineDivider;
	}(_react2.default.Component);

	module.exports = HeadlineDivider;

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _datamaps = __webpack_require__(273);

	var _datamaps2 = _interopRequireDefault(_datamaps);

	var _isNumber = __webpack_require__(276);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _groupBy = __webpack_require__(277);

	var _groupBy2 = _interopRequireDefault(_groupBy);

	var _each = __webpack_require__(388);

	var _each2 = _interopRequireDefault(_each);

	var _find = __webpack_require__(392);

	var _find2 = _interopRequireDefault(_find);

	var _reactSelect = __webpack_require__(399);

	var _reactSelect2 = _interopRequireDefault(_reactSelect);

	var _appActions = __webpack_require__(259);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	var _niceNum = __webpack_require__(412);

	var _niceNum2 = _interopRequireDefault(_niceNum);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _Icon = __webpack_require__(267);

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

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(231),
	    isObjectLike = __webpack_require__(239);

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


/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(389);


/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(390),
	    baseEach = __webpack_require__(291),
	    castFunction = __webpack_require__(391),
	    isArray = __webpack_require__(300);

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

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(384);

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

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(393),
	    findIndex = __webpack_require__(394);

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

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(314),
	    isArrayLike = __webpack_require__(312),
	    keys = __webpack_require__(295);

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

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(395),
	    baseIteratee = __webpack_require__(314),
	    toInteger = __webpack_require__(396);

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

/***/ 411:
/***/ function(module, exports) {

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

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _d = __webpack_require__(413);

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

/***/ 414:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _prefixLanguageToRoute = __webpack_require__(258);

	var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BreadCrumbs = function (_React$Component) {
	  _inherits(BreadCrumbs, _React$Component);

	  function BreadCrumbs() {
	    _classCallCheck(this, BreadCrumbs);

	    return _possibleConstructorReturn(this, (BreadCrumbs.__proto__ || Object.getPrototypeOf(BreadCrumbs)).apply(this, arguments));
	  }

	  _createClass(BreadCrumbs, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: (0, _prefixLanguageToRoute2.default)(this.props.language, '/') },
	          _react2.default.createElement(
	            'span',
	            null,
	            'Home'
	          )
	        ),
	        '\xA0\xA0\xA0\u203A\xA0\xA0\xA0',
	        this.props.chapter.title
	      );
	    }
	  }]);

	  return BreadCrumbs;
	}(_react2.default.Component);

	module.exports = BreadCrumbs;

/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Breadcrumbs = __webpack_require__(414);

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
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: { title: "Acknowledgements" }, language: this.props.language })
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

	exports.default = Acknowledgements;

/***/ },

/***/ 416:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _reactI18next = __webpack_require__(249);

	var _reactRouter = __webpack_require__(166);

	var _prefixLanguageToRoute = __webpack_require__(258);

	var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

	var _Reveal = __webpack_require__(417);

	var _Reveal2 = _interopRequireDefault(_Reveal);

	var _Icon = __webpack_require__(267);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Quote = function (_React$Component) {
	  _inherits(Quote, _React$Component);

	  function Quote() {
	    _classCallCheck(this, Quote);

	    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
	  }

	  _createClass(Quote, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "blockquote",
	        { style: { marginTop: "72px", fontSize: "1.5rem" } },
	        _react2.default.createElement(_Icon2.default, { name: "quote", width: "72px", height: "72px" }),
	        this.props.children
	      );
	    }
	  }]);

	  return Quote;
	}(_react2.default.Component);

	var RatioCard = function (_React$Component2) {
	  _inherits(RatioCard, _React$Component2);

	  function RatioCard() {
	    _classCallCheck(this, RatioCard);

	    return _possibleConstructorReturn(this, (RatioCard.__proto__ || Object.getPrototypeOf(RatioCard)).apply(this, arguments));
	  }

	  _createClass(RatioCard, [{
	    key: "render",
	    value: function render() {

	      var styling = {
	        wrapper: {
	          position: "relative"
	        },
	        content: {
	          // position:"absolute",
	          // width:"100%",
	          // height:"100%",
	          backgroundImage: "url(" + this.props.backgroundImage + ")",
	          backgroundRepeat: "no-repeat",
	          backgroundSize: "cover"
	        }
	      };

	      return _react2.default.createElement(
	        "div",
	        { className: "ratio-card " + ("ratio-card--" + this.props.ratio) + (this.props.wrapperClass || ""), style: styling.wrapper },
	        _react2.default.createElement(
	          "div",
	          { className: this.props.gradient ? "ratio-card__content with-gradient--dark " + (this.props.contentClass || "") : "ratio-card__content " + (this.props.contentClass || ""), style: styling.content },
	          _react2.default.createElement(
	            "div",
	            { className: "vertical-center" },
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return RatioCard;
	}(_react2.default.Component);

	var Home = function (_React$Component3) {
	  _inherits(Home, _React$Component3);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    var _this3 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

	    _this3.state = {
	      loaded: 0,
	      parsedData: {},
	      showLoader: false
	    };
	    return _this3;
	  }

	  _createClass(Home, [{
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
	      return this.context.language !== nextContext.language;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this.props.t;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "center", style: { boxShadow: "inset 0 100px 100px #fff,inset 0 -100px 100px #fff", backgroundImage: "url(/img/ifrc-progress-report-2015-bg.jpg)", overflow: "hidden" } },
	          _react2.default.createElement(
	            "h1",
	            { style: { paddingTop: "100px", paddingBottom: "60px" }, className: "bg-gradient--white m0" },
	            _react2.default.createElement(
	              "div",
	              { className: "display-3" },
	              _react2.default.createElement(
	                "strong",
	                { className: "caps" },
	                t("common:home.title.0"),
	                " ",
	                _react2.default.createElement(
	                  "span",
	                  { className: "color-primary" },
	                  " ",
	                  t("common:home.title.1")
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "display-5 pb2 color-primary" },
	              t("common:home.title.2")
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "display-1" },
	              t("common:reportType")
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "pt3" },
	              _react2.default.createElement(_Icon2.default, { name: "down", width: "34px", height: "34px" })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix center px1 sm-px0" },
	          _react2.default.createElement(
	            "div",
	            { className: "col sm-6 sm-offset-3 pt2 pb3" },
	            _react2.default.createElement(
	              "p",
	              { className: "lead" },
	              t("common:home.intro.0")
	            ),
	            _react2.default.createElement(
	              _Reveal2.default,
	              { offset: 600 },
	              _react2.default.createElement(
	                "p",
	                { className: "body-text" },
	                t("common:home.intro.1")
	              )
	            ),
	            _react2.default.createElement(
	              _Reveal2.default,
	              { offset: 600 },
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 py2" },
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  _react2.default.createElement(
	                    "strong",
	                    null,
	                    t("common:home.signatures.0.name")
	                  ),
	                  _react2.default.createElement("br", null),
	                  t("common:home.signatures.0.title")
	                ),
	                _react2.default.createElement("img", { src: "/img/signature1.png", alt: "" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 py2" },
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  _react2.default.createElement(
	                    "strong",
	                    null,
	                    t("common:home.signatures.1.name")
	                  ),
	                  _react2.default.createElement("br", null),
	                  t("common:home.signatures.1.title")
	                ),
	                _react2.default.createElement("img", { src: "/img/signature2.png", alt: "" })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Reveal2.default,
	          { offset: 500 },
	          _react2.default.createElement(
	            "div",
	            { className: "bg-secondary py4", style: { paddingBottom: "120px" } },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-3 sm-offset-2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong caps color-primary m0" },
	                  t("common:home.sections.0.id")
	                ),
	                _react2.default.createElement(
	                  "h2",
	                  { className: "display-1 mt0" },
	                  t("common:home.sections.0.title")
	                ),
	                _react2.default.createElement(_HeadlineDivider2.default, null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null)
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-1.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "subhead color-primary m0 px2 pt2" },
	                    t("common:home.sections.0.title")
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "display-1 m0 px2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/who-we-are") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.0.chapters.0.title"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 md-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-white center" },
	                  _react2.default.createElement(_Icon2.default, { name: "usergroup", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-3 color-primary" },
	                    t("common:home.sections.0.statistic.number")
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "caps" },
	                    t("common:home.sections.0.statistic.text")
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-white center" },
	                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "px2" },
	                    t("common:home.sections.0.fact")
	                  ),
	                  _react2.default.createElement("p", { className: "caps" })
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-2.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "subhead color-primary m0 px2 pt2" },
	                    t("common:home.sections.0.title")
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "display-1 m0 px2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/what-we-do") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.0.chapters.1.title"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-3.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "subhead color-primary m0 px2 pt2" },
	                    t("common:home.sections.0.title")
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "display-1 m0 px2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/living-our-fundamental-principles") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.0.chapters.2.title"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
	                _react2.default.createElement(
	                  Quote,
	                  null,
	                  t("common:home.sections.0.quote")
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Reveal2.default,
	          { offset: 500 },
	          _react2.default.createElement(
	            "div",
	            { className: "bg-white py4", style: { paddingBottom: "120px" } },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-3 sm-offset-2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong caps color-primary m0" },
	                  t("common:home.sections.1.id")
	                ),
	                _react2.default.createElement(
	                  "h2",
	                  { className: "display-1 mt0" },
	                  t("common:home.sections.1.title")
	                ),
	                _react2.default.createElement(_HeadlineDivider2.default, null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null)
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-1.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-1") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.1.chapters.0.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.1.chapters.0.title")
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 md-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-secondary center" },
	                  _react2.default.createElement(_Icon2.default, { name: "tornado", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-3 color-primary" },
	                    t("common:home.sections.1.statistic.number")
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "caps" },
	                    t("common:home.sections.1.statistic.text")
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-secondary center" },
	                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "px2" },
	                    t("common:home.sections.1.fact")
	                  ),
	                  _react2.default.createElement("p", { className: "caps" })
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-2.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-2") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.1.chapters.1.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.1.chapters.1.title")
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-primary", backgroundImage: "/img/strategic-aim-3.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/strategic-aim-3") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.1.chapters.2.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.1.chapters.2.title")
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
	                _react2.default.createElement(
	                  Quote,
	                  null,
	                  t("common:home.sections.1.quote")
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Reveal2.default,
	          { offset: 500 },
	          _react2.default.createElement(
	            "div",
	            { className: "bg-secondary py4", style: { paddingBottom: "120px" } },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-3 sm-offset-2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong caps color-primary m0" },
	                  t("common:home.sections.2.id")
	                ),
	                _react2.default.createElement(
	                  "h2",
	                  { className: "display-1 mt0" },
	                  t("common:home.sections.2.title")
	                ),
	                _react2.default.createElement(_HeadlineDivider2.default, null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null)
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-7.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 color-primary m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-1") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.2.chapters.0.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.2.chapters.0.title")
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 md-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-white center" },
	                  _react2.default.createElement(_Icon2.default, { name: "flag", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-3 color-primary" },
	                    t("common:home.sections.2.statistic.number")
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "caps" },
	                    t("common:home.sections.2.statistic.text")
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1 md-3 md-offset-3" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "100", contentClass: "px1 bg-white center" },
	                  _react2.default.createElement(_Icon2.default, { name: "info", width: "56px", height: "56px" }),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "px2" },
	                    t("common:home.sections.2.fact")
	                  ),
	                  _react2.default.createElement("p", { className: "caps" })
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-8.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 color-primary m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-2") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.2.chapters.1.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.2.chapters.1.title")
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-5 sm-offset-1" },
	                _react2.default.createElement(
	                  RatioCard,
	                  { ratio: "60", contentClass: "bg-dark", gradient: true, backgroundImage: "/img/chapters/chapter-9.jpg" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 color-primary m0 px2 pt2" },
	                    _react2.default.createElement(
	                      _reactRouter.Link,
	                      { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/enabling-action-3") },
	                      _react2.default.createElement(
	                        "span",
	                        null,
	                        t("common:home.sections.2.chapters.2.pretitle"),
	                        " "
	                      ),
	                      _react2.default.createElement(_Icon2.default, { name: "goto", width: "28px", height: "28px" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "h3",
	                    { className: "subhead m0 px2", style: { maxWidth: "360px" } },
	                    t("common:home.sections.2.chapters.2.title")
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2" },
	                _react2.default.createElement(
	                  Quote,
	                  null,
	                  t("common:home.sections.2.quote")
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { style: { backgroundImage: "url(/img/dataViewPreview.jpg)", backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" } },
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix bg-data pb2", style: { background: "rgba(0,0,0,0.4)" } },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix pt3 px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-3 sm-offset-2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong caps color-primary m0" },
	                  t("common:home.sections.3.chapters.0.preTitle")
	                ),
	                _react2.default.createElement(
	                  "h2",
	                  { className: "display-1 mt0" },
	                  t("common:home.sections.3.chapters.0.title")
	                ),
	                _react2.default.createElement(_HeadlineDivider2.default, null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null)
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix pb3 px1 sm-px0" },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-6 sm-offset-2 pr2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "lead" },
	                  t("common:home.sections.3.chapters.0.body.0"),
	                  " ",
	                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "lead" },
	                  t("common:home.sections.3.chapters.0.body.1"),
	                  " ",
	                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
	                ),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement("br", null),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: (0, _prefixLanguageToRoute2.default)(this.context.language, "/data"), className: "btn bg-primary p1" },
	                  t("common:home.sections.3.chapters.0.button"),
	                  " ",
	                  _react2.default.createElement(_Icon2.default, { name: "goto", width: "24px", height: "24px" })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	Home.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    language: state.appReducer.language,
	    content: {
	      en: state.appReducer.en,
	      fr: state.appReducer.fr,
	      es: state.appReducer.es,
	      ar: state.appReducer.ar
	    }
	  };
	}

	// Home.defaultProps = {}

	exports.default = (0, _reactI18next.translate)()((0, _reactRedux.connect)(mapStateToProps)(Home));

/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _debounce = __webpack_require__(418);

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

/***/ 418:
/***/ function(module, exports) {

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

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _LineChart = __webpack_require__(422);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _Tabs = __webpack_require__(650);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _StackedBarChart = __webpack_require__(652);

	var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

	var _WorldMap = __webpack_require__(654);

	var _WorldMap2 = _interopRequireDefault(_WorldMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function makeArray(n) {
	  var arr = [];
	  for (var i = 0; i < n; i++) {
	    arr.push(i);
	  }
	  return arr;
	}

	var StaffCompositionChart = function (_React$Component) {
	  _inherits(StaffCompositionChart, _React$Component);

	  function StaffCompositionChart() {
	    _classCallCheck(this, StaffCompositionChart);

	    return _possibleConstructorReturn(this, (StaffCompositionChart.__proto__ || Object.getPrototypeOf(StaffCompositionChart)).apply(this, arguments));
	  }

	  _createClass(StaffCompositionChart, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h4",
	          { className: "title strong" },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          "svg",
	          { width: "100%", height: "560px", viewBox: "0 0 960 560" },
	          _react2.default.createElement(
	            "g",
	            { stroke: "none", strokeWidth: "1", fill: "none", "fill-rule": "evenodd" },
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	              _react2.default.createElement(
	                "tspan",
	                { x: "187", y: "509" },
	                "16,000,000"
	              )
	            ),
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "13", fontWeight: "normal", letterSpacing: "1", fill: "#786A65" },
	              this.props.translations.volunteers.split("\n").map(function (item, i) {
	                return _react2.default.createElement(
	                  "tspan",
	                  { x: "270", y: 455 + i * 16, key: i, className: "caps", textAnchor: "middle" },
	                  item
	                );
	              })
	            ),
	            _react2.default.createElement("rect", { fill: "#EE3224", x: "10", y: "423", width: "520", height: "4" }),
	            this.props.volunteers.verticals.map(function (vertical, i) {
	              return _react2.default.createElement(
	                "g",
	                { fill: "#D6D2D0", key: i, transform: "translate(0, " + (7 + i * 36) + ")" },
	                _this2.props.volunteers.humans.map(function (human, j) {
	                  return _react2.default.createElement(
	                    "g",
	                    { key: j, transform: "translate(" + (6 + 17 * j) + ",0)" },
	                    _react2.default.createElement("path", { d: "M7.05802469,10.962963 C5.40617284,10.962963 4.00987654,12.445679 4.00987654,14.1864198 L4.00987654,22.2469136 C4.00987654,22.4209877 4.07530864,22.5679012 4.19012346,22.691358 L5.24444444,23.7407407 L5.25815564,31.370753 C5.25815564,31.7176666 5.53469885,31.988037 5.87543959,31.988037 L12.0482791,31.988037 C12.3902544,31.988037 12.6655631,31.7176666 12.6655631,31.370753 L12.6518519,23.7407407 L13.7049383,22.691358 C13.8209877,22.5679012 13.8864198,22.4209877 13.8864198,22.2469136 L13.8864198,14.1864198 C13.8864198,12.445679 12.491358,10.962963 10.8382716,10.962963 L7.05802469,10.962963 Z M8.94814815,10.5185185 C10.9901235,10.5185185 12.6518519,8.86419753 12.6518519,6.81481481 C12.6518519,4.77777778 10.9901235,3.11111111 8.94814815,3.11111111 C6.90617284,3.11111111 5.24444444,4.77777778 5.24444444,6.81481481 C5.24444444,8.86419753 6.90617284,10.5185185 8.94814815,10.5185185 Z" })
	                  );
	                })
	              );
	            }),
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	              _react2.default.createElement(
	                "tspan",
	                { x: "608", y: "509" },
	                "451,952"
	              )
	            ),
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "13", fontWeight: "normal", letterSpacing: "0", fill: "#786A65" },
	              this.props.translations.paidStaff.split("\n").map(function (item, i) {
	                return _react2.default.createElement(
	                  "tspan",
	                  { x: "668", y: 455 + i * 16, key: i, className: "caps", textAnchor: "middle" },
	                  item
	                );
	              })
	            ),
	            _react2.default.createElement("rect", { fill: "#EE3224", x: "630", y: "423", width: "78", height: "4" }),
	            _react2.default.createElement(
	              "g",
	              { fill: "#D6D2D0" },
	              _react2.default.createElement("path", { d: "M684.058025,161.962963 C682.406173,161.962963 681.009877,163.445679 681.009877,165.18642 L681.009877,173.246914 C681.009877,173.420988 681.075309,173.567901 681.190123,173.691358 L682.244444,174.740741 L682.258156,182.370753 C682.258156,182.717667 682.534699,182.988037 682.87544,182.988037 L689.048279,182.988037 C689.390254,182.988037 689.665563,182.717667 689.665563,182.370753 L689.651852,174.740741 L690.704938,173.691358 C690.820988,173.567901 690.88642,173.420988 690.88642,173.246914 L690.88642,165.18642 C690.88642,163.445679 689.491358,161.962963 687.838272,161.962963 L684.058025,161.962963 Z M685.948148,161.518519 C687.990123,161.518519 689.651852,159.864198 689.651852,157.814815 C689.651852,155.777778 687.990123,154.111111 685.948148,154.111111 C683.906173,154.111111 682.244444,155.777778 682.244444,157.814815 C682.244444,159.864198 683.906173,161.518519 685.948148,161.518519 Z" }),
	              _react2.default.createElement("path", { d: "M667.058025,161.962963 C665.406173,161.962963 664.009877,163.445679 664.009877,165.18642 L664.009877,173.246914 C664.009877,173.420988 664.075309,173.567901 664.190123,173.691358 L665.244444,174.740741 L665.258156,182.370753 C665.258156,182.717667 665.534699,182.988037 665.87544,182.988037 L672.048279,182.988037 C672.390254,182.988037 672.665563,182.717667 672.665563,182.370753 L672.651852,174.740741 L673.704938,173.691358 C673.820988,173.567901 673.88642,173.420988 673.88642,173.246914 L673.88642,165.18642 C673.88642,163.445679 672.491358,161.962963 670.838272,161.962963 L667.058025,161.962963 Z M668.948148,161.518519 C670.990123,161.518519 672.651852,159.864198 672.651852,157.814815 C672.651852,155.777778 670.990123,154.111111 668.948148,154.111111 C666.906173,154.111111 665.244444,155.777778 665.244444,157.814815 C665.244444,159.864198 666.906173,161.518519 668.948148,161.518519 Z" }),
	              _react2.default.createElement("path", { d: "M701.058025,161.962963 C699.406173,161.962963 698.009877,163.445679 698.009877,165.18642 L698.009877,173.246914 C698.009877,173.420988 698.075309,173.567901 698.190123,173.691358 L699.244444,174.740741 L699.258156,182.370753 C699.258156,182.717667 699.534699,182.988037 699.87544,182.988037 L706.048279,182.988037 C706.390254,182.988037 706.665563,182.717667 706.665563,182.370753 L706.651852,174.740741 L707.704938,173.691358 C707.820988,173.567901 707.88642,173.420988 707.88642,173.246914 L707.88642,165.18642 C707.88642,163.445679 706.491358,161.962963 704.838272,161.962963 L701.058025,161.962963 Z M702.948148,161.518519 C704.990123,161.518519 706.651852,159.864198 706.651852,157.814815 C706.651852,155.777778 704.990123,154.111111 702.948148,154.111111 C700.906173,154.111111 699.244444,155.777778 699.244444,157.814815 C699.244444,159.864198 700.906173,161.518519 702.948148,161.518519 Z" }),
	              _react2.default.createElement("path", { d: "M633.058025,161.962963 C631.406173,161.962963 630.009877,163.445679 630.009877,165.18642 L630.009877,173.246914 C630.009877,173.420988 630.075309,173.567901 630.190123,173.691358 L631.244444,174.740741 L631.258156,182.370753 C631.258156,182.717667 631.534699,182.988037 631.87544,182.988037 L638.048279,182.988037 C638.390254,182.988037 638.665563,182.717667 638.665563,182.370753 L638.651852,174.740741 L639.704938,173.691358 C639.820988,173.567901 639.88642,173.420988 639.88642,173.246914 L639.88642,165.18642 C639.88642,163.445679 638.491358,161.962963 636.838272,161.962963 L633.058025,161.962963 Z M634.948148,161.518519 C636.990123,161.518519 638.651852,159.864198 638.651852,157.814815 C638.651852,155.777778 636.990123,154.111111 634.948148,154.111111 C632.906173,154.111111 631.244444,155.777778 631.244444,157.814815 C631.244444,159.864198 632.906173,161.518519 634.948148,161.518519 Z" }),
	              _react2.default.createElement("path", { d: "M650.058025,161.962963 C648.406173,161.962963 647.009877,163.445679 647.009877,165.18642 L647.009877,173.246914 C647.009877,173.420988 647.075309,173.567901 647.190123,173.691358 L648.244444,174.740741 L648.258156,182.370753 C648.258156,182.717667 648.534699,182.988037 648.87544,182.988037 L655.048279,182.988037 C655.390254,182.988037 655.665563,182.717667 655.665563,182.370753 L655.651852,174.740741 L656.704938,173.691358 C656.820988,173.567901 656.88642,173.420988 656.88642,173.246914 L656.88642,165.18642 C656.88642,163.445679 655.491358,161.962963 653.838272,161.962963 L650.058025,161.962963 Z M651.948148,161.518519 C653.990123,161.518519 655.651852,159.864198 655.651852,157.814815 C655.651852,155.777778 653.990123,154.111111 651.948148,154.111111 C649.906173,154.111111 648.244444,155.777778 648.244444,157.814815 C648.244444,159.864198 649.906173,161.518519 651.948148,161.518519 Z" }),
	              _react2.default.createElement("path", { d: "M650.058025,197.962963 C648.406173,197.962963 647.009877,199.445679 647.009877,201.18642 L647.009877,209.246914 C647.009877,209.420988 647.075309,209.567901 647.190123,209.691358 L648.244444,210.740741 L648.258156,218.370753 C648.258156,218.717667 648.534699,218.988037 648.87544,218.988037 L655.048279,218.988037 C655.390254,218.988037 655.665563,218.717667 655.665563,218.370753 L655.651852,210.740741 L656.704938,209.691358 C656.820988,209.567901 656.88642,209.420988 656.88642,209.246914 L656.88642,201.18642 C656.88642,199.445679 655.491358,197.962963 653.838272,197.962963 L650.058025,197.962963 Z M651.948148,197.518519 C653.990123,197.518519 655.651852,195.864198 655.651852,193.814815 C655.651852,191.777778 653.990123,190.111111 651.948148,190.111111 C649.906173,190.111111 648.244444,191.777778 648.244444,193.814815 C648.244444,195.864198 649.906173,197.518519 651.948148,197.518519 Z" }),
	              _react2.default.createElement("path", { d: "M667.058025,197.962963 C665.406173,197.962963 664.009877,199.445679 664.009877,201.18642 L664.009877,209.246914 C664.009877,209.420988 664.075309,209.567901 664.190123,209.691358 L665.244444,210.740741 L665.258156,218.370753 C665.258156,218.717667 665.534699,218.988037 665.87544,218.988037 L672.048279,218.988037 C672.390254,218.988037 672.665563,218.717667 672.665563,218.370753 L672.651852,210.740741 L673.704938,209.691358 C673.820988,209.567901 673.88642,209.420988 673.88642,209.246914 L673.88642,201.18642 C673.88642,199.445679 672.491358,197.962963 670.838272,197.962963 L667.058025,197.962963 Z M668.948148,197.518519 C670.990123,197.518519 672.651852,195.864198 672.651852,193.814815 C672.651852,191.777778 670.990123,190.111111 668.948148,190.111111 C666.906173,190.111111 665.244444,191.777778 665.244444,193.814815 C665.244444,195.864198 666.906173,197.518519 668.948148,197.518519 Z" }),
	              _react2.default.createElement("path", { d: "M633.058025,197.962963 C631.406173,197.962963 630.009877,199.445679 630.009877,201.18642 L630.009877,209.246914 C630.009877,209.420988 630.075309,209.567901 630.190123,209.691358 L631.244444,210.740741 L631.258156,218.370753 C631.258156,218.717667 631.534699,218.988037 631.87544,218.988037 L638.048279,218.988037 C638.390254,218.988037 638.665563,218.717667 638.665563,218.370753 L638.651852,210.740741 L639.704938,209.691358 C639.820988,209.567901 639.88642,209.420988 639.88642,209.246914 L639.88642,201.18642 C639.88642,199.445679 638.491358,197.962963 636.838272,197.962963 L633.058025,197.962963 Z M634.948148,197.518519 C636.990123,197.518519 638.651852,195.864198 638.651852,193.814815 C638.651852,191.777778 636.990123,190.111111 634.948148,190.111111 C632.906173,190.111111 631.244444,191.777778 631.244444,193.814815 C631.244444,195.864198 632.906173,197.518519 634.948148,197.518519 Z" }),
	              _react2.default.createElement("path", { d: "M701.058025,197.962963 C699.406173,197.962963 698.009877,199.445679 698.009877,201.18642 L698.009877,209.246914 C698.009877,209.420988 698.075309,209.567901 698.190123,209.691358 L699.244444,210.740741 L699.258156,218.370753 C699.258156,218.717667 699.534699,218.988037 699.87544,218.988037 L706.048279,218.988037 C706.390254,218.988037 706.665563,218.717667 706.665563,218.370753 L706.651852,210.740741 L707.704938,209.691358 C707.820988,209.567901 707.88642,209.420988 707.88642,209.246914 L707.88642,201.18642 C707.88642,199.445679 706.491358,197.962963 704.838272,197.962963 L701.058025,197.962963 Z M702.948148,197.518519 C704.990123,197.518519 706.651852,195.864198 706.651852,193.814815 C706.651852,191.777778 704.990123,190.111111 702.948148,190.111111 C700.906173,190.111111 699.244444,191.777778 699.244444,193.814815 C699.244444,195.864198 700.906173,197.518519 702.948148,197.518519 Z" }),
	              _react2.default.createElement("path", { d: "M684.058025,197.962963 C682.406173,197.962963 681.009877,199.445679 681.009877,201.18642 L681.009877,209.246914 C681.009877,209.420988 681.075309,209.567901 681.190123,209.691358 L682.244444,210.740741 L682.258156,218.370753 C682.258156,218.717667 682.534699,218.988037 682.87544,218.988037 L689.048279,218.988037 C689.390254,218.988037 689.665563,218.717667 689.665563,218.370753 L689.651852,210.740741 L690.704938,209.691358 C690.820988,209.567901 690.88642,209.420988 690.88642,209.246914 L690.88642,201.18642 C690.88642,199.445679 689.491358,197.962963 687.838272,197.962963 L684.058025,197.962963 Z M685.948148,197.518519 C687.990123,197.518519 689.651852,195.864198 689.651852,193.814815 C689.651852,191.777778 687.990123,190.111111 685.948148,190.111111 C683.906173,190.111111 682.244444,191.777778 682.244444,193.814815 C682.244444,195.864198 683.906173,197.518519 685.948148,197.518519 Z" })
	            ),
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	              _react2.default.createElement(
	                "tspan",
	                { x: "800", y: "509" },
	                "2,920"
	              )
	            ),
	            _react2.default.createElement(
	              "text",
	              { fontFamily: "Roboto-Regular, Roboto", fontSize: "13", fontWeight: "normal", letterSpacing: "0", fill: "#786A65" },
	              this.props.translations.secretariatStaff.split("\n").map(function (item, i) {
	                return _react2.default.createElement(
	                  "tspan",
	                  { x: "842", y: 455 + i * 16, key: i, className: "caps", textAnchor: "middle" },
	                  item
	                );
	              })
	            ),
	            _react2.default.createElement("rect", { fill: "#EE3224", x: "828", y: "423", width: "27", height: "4" }),
	            _react2.default.createElement(
	              "g",
	              { fill: "#D6D2D0" },
	              _react2.default.createElement("path", { d: "M831.058025,178.962963 C829.406173,178.962963 828.009877,180.445679 828.009877,182.18642 L828.009877,190.246914 C828.009877,190.420988 828.075309,190.567901 828.190123,190.691358 L829.244444,191.740741 L829.258156,199.370753 C829.258156,199.717667 829.534699,199.988037 829.87544,199.988037 L836.048279,199.988037 C836.390254,199.988037 836.665563,199.717667 836.665563,199.370753 L836.651852,191.740741 L837.704938,190.691358 C837.820988,190.567901 837.88642,190.420988 837.88642,190.246914 L837.88642,182.18642 C837.88642,180.445679 836.491358,178.962963 834.838272,178.962963 L831.058025,178.962963 Z M832.948148,178.518519 C834.990123,178.518519 836.651852,176.864198 836.651852,174.814815 C836.651852,172.777778 834.990123,171.111111 832.948148,171.111111 C830.906173,171.111111 829.244444,172.777778 829.244444,174.814815 C829.244444,176.864198 830.906173,178.518519 832.948148,178.518519 Z" }),
	              _react2.default.createElement("path", { d: "M848.058025,178.962963 C846.406173,178.962963 845.009877,180.445679 845.009877,182.18642 L845.009877,190.246914 C845.009877,190.420988 845.075309,190.567901 845.190123,190.691358 L846.244444,191.740741 L846.258156,199.370753 C846.258156,199.717667 846.534699,199.988037 846.87544,199.988037 L853.048279,199.988037 C853.390254,199.988037 853.665563,199.717667 853.665563,199.370753 L853.651852,191.740741 L854.704938,190.691358 C854.820988,190.567901 854.88642,190.420988 854.88642,190.246914 L854.88642,182.18642 C854.88642,180.445679 853.491358,178.962963 851.838272,178.962963 L848.058025,178.962963 Z M849.948148,178.518519 C851.990123,178.518519 853.651852,176.864198 853.651852,174.814815 C853.651852,172.777778 851.990123,171.111111 849.948148,171.111111 C847.906173,171.111111 846.244444,172.777778 846.244444,174.814815 C846.244444,176.864198 847.906173,178.518519 849.948148,178.518519 Z" })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return StaffCompositionChart;
	}(_react2.default.Component);

	StaffCompositionChart.defaultProps = {
	  volunteers: {
	    verticals: makeArray(11),
	    humans: makeArray(31)
	  }
	};

	var StaffGenderDistributionChart = function (_React$Component2) {
	  _inherits(StaffGenderDistributionChart, _React$Component2);

	  function StaffGenderDistributionChart() {
	    _classCallCheck(this, StaffGenderDistributionChart);

	    return _possibleConstructorReturn(this, (StaffGenderDistributionChart.__proto__ || Object.getPrototypeOf(StaffGenderDistributionChart)).apply(this, arguments));
	  }

	  _createClass(StaffGenderDistributionChart, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "svg",
	          { width: "100%", height: "274px", viewBox: "0 0 600 274" },
	          _react2.default.createElement(
	            "g",
	            { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", fontFamily: "Roboto-Regular, Roboto" },
	            _react2.default.createElement(
	              "text",
	              { fontSize: "13", fontWeight: "normal", letterSpacing: "1", fill: "#786A65" },
	              _react2.default.createElement(
	                "tspan",
	                { x: "36.7964313", y: "72" },
	                this.props.translations.male
	              )
	            ),
	            _react2.default.createElement(
	              "text",
	              { fontSize: "13", fontWeight: "normal", letterSpacing: "1", fill: "#786A65" },
	              _react2.default.createElement(
	                "tspan",
	                { x: "508.509322", y: "72" },
	                this.props.translations.female
	              )
	            ),
	            _react2.default.createElement("path", { d: "M48.1925926,122.851852 C41.5851852,122.851852 36,128.782716 36,135.745679 L36,167.987654 C36,168.683951 36.2617284,169.271605 36.7209877,169.765432 L40.9382716,173.962963 L40.9931164,204.483012 C40.9931164,205.870666 42.0992892,206.952148 43.4622522,206.952148 L68.1536102,206.952148 C69.5215115,206.952148 70.622746,205.870666 70.622746,204.483012 L70.5679012,173.962963 L74.7802469,169.765432 C75.2444444,169.271605 75.5061728,168.683951 75.5061728,167.987654 L75.5061728,135.745679 C75.5061728,128.782716 69.9259259,122.851852 63.3135802,122.851852 L48.1925926,122.851852 Z M55.7530864,121.074074 C63.9209877,121.074074 70.5679012,114.45679 70.5679012,106.259259 C70.5679012,98.1111111 63.9209877,91.4444444 55.7530864,91.4444444 C47.5851852,91.4444444 40.9382716,98.1111111 40.9382716,106.259259 C40.9382716,114.45679 47.5851852,121.074074 55.7530864,121.074074 Z", fill: "#D6D2D0" }),
	            _react2.default.createElement("path", { d: "M560.577577,183.569083 L556.216494,158.2925 L556.216494,136.024917 C556.216494,129.185833 550.355827,123.1875 543.674077,123.1875 L528.619244,123.1875 C522.143994,123.1875 516.88316,128.944917 516.88316,136.024917 L516.88316,158.046667 L511.38141,184.154167 C511.224077,184.891667 511.41091,185.629167 511.877994,186.219167 C512.345077,186.764917 513.04816,187.104167 513.790577,187.104167 L521.799827,187.104167 L521.799827,204.3125 C521.799827,205.694083 522.90116,206.770833 524.25816,206.770833 L548.841494,206.770833 C550.20341,206.770833 551.299827,205.694083 551.299827,204.3125 L551.299827,187.104167 L558.266744,187.104167 L558.320827,187.104167 C559.692577,187.153333 560.82341,186.027417 560.82341,184.645833 C560.82341,184.257417 560.739827,183.908333 560.577577,183.569083 Z M536.141744,121.4175 C544.278827,121.4175 550.891744,114.829167 550.891744,106.6675 C550.891744,98.555 544.278827,91.9175 536.141744,91.9175 C528.009577,91.9175 521.391744,98.555 521.391744,106.6675 C521.391744,114.829167 528.009577,121.4175 536.141744,121.4175 Z", fill: "#D6D2D0" }),
	            _react2.default.createElement(
	              "g",
	              { transform: "translate(143.960494, 90)" },
	              _react2.default.createElement(
	                "text",
	                { x: "150", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
	                this.props.translations.nationalSocietyStaff
	              ),
	              _react2.default.createElement("rect", { fill: "#786A65", x: "62", y: "9", width: "80", height: "10" }),
	              _react2.default.createElement("rect", { fill: "#EE3224", x: "162", y: "9", width: "119", height: "10" }),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "289", y: "21" },
	                  "59.7%"
	                )
	              ),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "0.396484375", y: "21" },
	                  "40.3%"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "g",
	              { transform: "translate(120.960494, 140)" },
	              _react2.default.createElement(
	                "text",
	                { x: "170", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
	                this.props.translations.nationalSocietyVolunteers
	              ),
	              _react2.default.createElement("rect", { fill: "#786A65", x: "185", y: "9", width: "96", height: "10" }),
	              _react2.default.createElement("rect", { fill: "#EE3224", x: "62", y: "9", width: "103", height: "10" }),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "289", y: "21" },
	                  "48.3%"
	                )
	              ),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "0.396484375", y: "21" },
	                  "51.7%"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "g",
	              { transform: "translate(99.960494, 190)" },
	              _react2.default.createElement(
	                "text",
	                { x: "190", y: "0", fontSize: "13", fontWeight: "normal", fill: "#786A65", textAnchor: "middle" },
	                this.props.translations.IFRCSecretariatStaff
	              ),
	              _react2.default.createElement("rect", { fill: "#EE3224", x: "62", y: "9", width: "124", height: "10" }),
	              _react2.default.createElement("rect", { fill: "#786A65", x: "206", y: "9", width: "76", height: "10" }),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "290", y: "21" },
	                  "38.1%"
	                )
	              ),
	              _react2.default.createElement(
	                "text",
	                { fontSize: "20", fontWeight: "normal", fill: "#786A65" },
	                _react2.default.createElement(
	                  "tspan",
	                  { x: "0.40625", y: "21" },
	                  "61.9%"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return StaffGenderDistributionChart;
	}(_react2.default.Component);

	var Chapter1 = function (_React$Component3) {
	  _inherits(Chapter1, _React$Component3);

	  function Chapter1(props) {
	    _classCallCheck(this, Chapter1);

	    return _possibleConstructorReturn(this, (Chapter1.__proto__ || Object.getPrototypeOf(Chapter1)).call(this, props));
	  }

	  _createClass(Chapter1, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Who we are");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["who-we-are"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["who-we-are"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "bubbleCallback",
	    value: function bubbleCallback(response) {
	      var officeReference = {};

	      officeReference["regionalOffice"] = { radius: 10, key: "regionalOffice" };
	      officeReference["countryClusterOffice"] = { radius: 6, key: "countryClusterOffice" };
	      officeReference["countryOffice"] = { radius: 4, key: "countryOffice" };
	      officeReference["subCountryOffice"] = { radius: 4, key: "others" };
	      officeReference["liaisonOffice"] = { radius: 4, key: "others" };
	      officeReference["EbolaTreatmentCentre"] = { radius: 4, key: "others" };
	      officeReference["globalLogisticsService"] = { radius: 4, key: "others" };

	      var headquarters = response.map(function (item, i) {
	        return {
	          name: (item.type || "} ${item.region || ") + "\n" + (item.city || "}${item.country ? ", " + item.country : "),
	          latitude: item.latitude,
	          longitude: item.longitude,
	          radius: officeReference[item.typeKey].radius,
	          fillKey: officeReference[item.typeKey].key
	        };
	      });

	      return headquarters;
	    }
	  }, {
	    key: "bubblePopupTemplate",
	    value: function bubblePopupTemplate(geo, data, a) {
	      console.log("sliced: ", data.name.split("\n"));
	      var sliced = data.name.split("\n");
	      return "\n      <div class=\"map-tooltip\">\n        <strong>" + (sliced[0][0].toUpperCase() + sliced[0].slice(1)) + "</strong>\n        <hr />\n        <div class=\"pt1\">\n          <span class=\"small\">" + sliced[1] + "</span>\n        </div>\n      </div>\n    ";
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["who-we-are"];
	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-1.jpg)", backgroundSize: "cover", backgroundPosition: "center 20%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2"] }),
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
	              _react2.default.createElement(_HeadlineDivider2.default, null)
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "ul",
	                null,
	                section1.blocks[1].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(_LineChart2.default, {
	                title: section1.blocks[2].title,
	                caption: section1.blocks[2].caption,
	                height: 240,
	                padding: {
	                  top: 30,
	                  bottom: 40,
	                  left: 60,
	                  right: 60
	                },
	                domain: {
	                  x: [new Date(1865, 1, 1), new Date(2020, 1, 1)],
	                  y: [0, 200]
	                },
	                axisLabels: {
	                  x: section1.blocks[2].axisLabels.x,
	                  y: section1.blocks[2].axisLabels.y
	                },
	                labels: section1.blocks[2].labels,
	                dataset: [section1.blocks[2].dataset.map(function (item, i) {
	                  return {
	                    x: new Date(item.year, 1, 1),
	                    y: item.members
	                  };
	                })]
	              })
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[3]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[4]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[5]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2" },
	              _react2.default.createElement(_WorldMap2.default, {
	                title: section1.blocks[6].title,
	                caption: section1.blocks[6].caption,
	                bubbleSource: section1.blocks[6].dataset,
	                bubbleCallback: this.bubbleCallback,
	                bubblePopupTemplate: this.bubblePopupTemplate
	              })
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
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pt2" },
	              _react2.default.createElement(StaffCompositionChart, { title: section2.blocks[1].title, translations: section2.blocks[1].translations })
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2" },
	              _react2.default.createElement("hr", null),
	              _react2.default.createElement(StaffGenderDistributionChart, { translations: section2.blocks[1].translations }),
	              _react2.default.createElement(
	                "p",
	                { className: "small", translations: section2.blocks[1].translations },
	                section2.blocks[1].caption
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section2.blocks[2]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 xs-6 sm-px0 sm-4 sm-offset-2 md-4 md-offset-3 lg-3 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section2.blocks[3]
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 xs-6 sm-px0 sm-4 md-4 lg-3" },
	              _react2.default.createElement(
	                "h4",
	                { className: "title strong mb0" },
	                section2.blocks[4].title
	              ),
	              _react2.default.createElement(
	                "svg",
	                { width: "100%", height: "360px", viewBox: "0 0 360 360" },
	                _react2.default.createElement(
	                  "g",
	                  { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
	                  _react2.default.createElement(
	                    "g",
	                    { fontFamily: "Roboto-Bold, Roboto" },
	                    _react2.default.createElement("path", { d: "M224.358336,83.2002487 C223.722933,83.2002487 223.132916,83.2002487 222.516424,83.1624271 L222.516424,79.4218696 C223.136698,79.4218696 223.730497,79.4596913 224.362118,79.4596913 C230.701021,79.4596913 241.42723,78.6654374 245.209391,76.2032504 L245.209391,79.3046226 C245.209391,80.7078045 236.998319,83.2002487 224.358336,83.2002487 Z M197.932376,86.9824099 C185.311304,86.9824099 177.777238,84.4899657 177.130489,83.2418525 L177.130489,81.3507719 C182.338525,82.7501715 189.176672,83.2002487 194.150214,83.2002487 L196.041295,83.2002487 L196.041295,83.2418525 C204.369614,83.2418525 214.12759,82.3719554 218.749391,79.5353345 L218.756955,83.0527444 C218.091295,84.4899657 210.561012,86.9824099 197.932376,86.9824099 Z M211.192633,90.6170669 C210.526973,92.0542882 202.99669,94.5467324 190.368053,94.5467324 C177.746981,94.5467324 170.212916,92.0542882 169.566166,90.806175 L169.566166,87.3265866 C174.80446,89.5542796 184.921741,90.7267496 193.567762,90.7267496 C193.75687,90.7267496 192.259134,90.7267496 192.259134,90.7267496 L192.259134,90.688928 C196.041295,90.7683533 195.82193,90.7683533 196.998182,90.7683533 C200.840858,90.7683533 206.264477,90.4998199 210.719863,89.705566 L211.192633,90.6170669 Z M173.348328,82.1412436 L173.348328,83.2418525 C173.348328,83.8053945 173.533654,84.3386792 173.805969,84.826578 C171.767384,84.3008576 170.311252,83.8053945 169.74771,83.4271784 C170.258302,83.0867839 171.370257,82.5988851 173.348328,82.1412436 Z M165.784005,61.1124271 C170.95422,63.5708319 180.254554,64.3310463 186.551852,64.3310463 C192.886973,64.3310463 202.251604,63.5367925 207.402907,61.0746055 L207.410472,64.0625129 C207.338611,64.1381561 207.270532,64.2516209 207.217581,64.3650858 C206.026201,65.7644854 198.677461,68.0753859 186.585892,68.0753859 C173.96482,68.0753859 166.430755,65.5791595 165.784005,64.3310463 L165.784005,61.1124271 Z M186.551852,52.9845626 C199.176707,52.9845626 206.70699,55.4770069 207.380214,56.6116552 C206.70699,58.014837 199.176707,60.5488851 186.551852,60.5488851 C174.085849,60.5488851 166.612298,58.0866981 165.784005,56.9520497 L165.784005,56.8423671 C166.612298,55.4013636 174.085849,52.9845626 186.551852,52.9845626 Z M224.373465,10 C236.998319,10 244.528602,12.4924443 245.201827,13.6270926 C244.528602,15.0302744 236.998319,17.5643225 224.373465,17.5643225 C211.907461,17.5643225 204.433911,15.1021355 203.605617,13.9674871 L203.605617,13.8578045 C204.433911,12.416801 211.907461,10 224.373465,10 Z M221.434726,75.5981046 C221.415815,73.9717753 220.77663,72.5723756 218.734262,71.4377273 L218.734262,68.0337822 L218.692659,68.0337822 C218.692659,67.9959605 218.67753,67.9581389 218.673748,67.9240995 C220.818233,68.0337822 222.853036,68.1132075 224.365901,68.1132075 C230.701021,68.1132075 241.42723,67.3189537 245.209391,64.8567667 L245.209391,71.5890137 C245.209391,71.6646569 245.19048,71.7062607 245.19048,71.7403002 C244.521038,73.143482 236.994537,75.67753 224.369683,75.67753 C223.738062,75.67753 223.136698,75.6359262 222.516424,75.6359262 L222.516424,75.5981046 L221.434726,75.5981046 Z M209.687333,67.2017067 C210.950575,67.3529931 212.523954,67.5042796 214.241055,67.6177444 C214.589014,67.8446741 214.812161,68.0337822 214.887804,68.0337822 C213.930918,69.4710034 206.457367,71.853765 194.116175,71.853765 C193.068516,71.853765 192.115412,71.7781218 191.135832,71.7403002 C198.106355,71.362084 206.37416,70.117753 209.687333,67.2017067 Z M210.950575,55.6661149 C215.451346,56.4603688 220.477839,56.7667238 224.369683,56.7667238 C230.701021,56.7667238 241.42723,55.97247 245.209391,53.510283 L245.209391,60.2803516 C245.209391,60.3181732 245.19048,60.359777 245.19048,60.3938165 C244.521038,61.7969983 236.994537,64.3310463 224.369683,64.3310463 C221.067856,64.3310463 215.012616,63.949048 211.16994,63.5708319 L211.16994,56.6872985 L211.124554,56.6872985 C211.11699,56.3469039 211.064039,56.0065094 210.950575,55.6661149 Z M224.369683,45.4202401 C230.701021,45.4202401 241.42723,44.6259863 245.209391,42.1637993 L245.209391,48.9338679 C245.209391,48.9716895 245.194262,49.0132933 245.194262,49.0473328 C244.52482,50.4505146 236.994537,52.9845626 224.373465,52.9845626 C211.843165,52.9845626 204.346921,50.484554 203.605617,49.2364408 L203.605617,42.2016209 C208.775832,44.6600257 218.072384,45.4202401 224.369683,45.4202401 Z M245.209391,37.6252058 C245.209391,37.6668096 245.198045,37.6668096 245.198045,37.7008491 C244.528602,39.1040309 236.998319,41.6380789 224.373465,41.6380789 C211.843165,41.6380789 204.346921,39.1380703 203.605617,37.8899571 L203.605617,30.8551372 C208.775832,33.313542 218.076166,34.0737564 224.373465,34.0737564 C230.704803,34.0737564 241.42723,33.2795026 245.209391,30.8173156 L245.209391,37.6252058 Z M245.209391,26.1706604 C245.209391,26.2122642 245.198045,26.2122642 245.198045,26.2463036 C244.528602,27.6494854 236.998319,30.1835334 224.373465,30.1835334 C211.843165,30.1835334 204.346921,27.6835249 203.605617,26.4354117 L203.605617,19.4005918 C208.775832,21.8589966 218.076166,22.619211 224.373465,22.619211 C230.704803,22.619211 241.42723,21.8249571 245.209391,19.3627702 L245.209391,26.1706604 Z M271.464374,44.3636364 C284.089228,44.3636364 291.619511,46.8560806 292.292736,47.990729 C291.619511,49.3939108 284.089228,51.9279588 271.464374,51.9279588 C258.99837,51.9279588 251.52482,49.4657719 250.696527,48.3311235 L250.696527,48.2214408 C251.52482,46.7804374 258.99837,44.3636364 271.464374,44.3636364 Z M271.460592,79.7838765 C277.79193,79.7838765 288.518139,78.9896226 292.3003,76.5274357 L292.3003,83.2975043 C292.3003,83.3353259 292.285172,83.3769297 292.285172,83.4109691 C291.615729,84.8141509 284.085446,87.348199 271.464374,87.348199 C258.934074,87.348199 251.43783,84.8481904 250.696527,83.6000772 L250.696527,76.5652573 C255.866741,79.0236621 265.163293,79.7838765 271.460592,79.7838765 Z M292.3003,71.9888422 C292.3003,72.030446 292.288954,72.030446 292.288954,72.0644854 C291.619511,73.4676672 284.089228,76.0017153 271.464374,76.0017153 C258.934074,76.0017153 251.43783,73.5017067 250.696527,72.2535935 L250.696527,65.2187736 C255.866741,67.6771784 265.167075,68.4373928 271.464374,68.4373928 C277.795712,68.4373928 288.518139,67.6431389 292.3003,65.180952 L292.3003,71.9888422 Z M292.3003,60.5342967 C292.3003,60.5759005 292.288954,60.5759005 292.288954,60.60994 C291.619511,62.0131218 284.089228,64.5471698 271.464374,64.5471698 C258.934074,64.5471698 251.43783,62.0471612 250.696527,60.799048 L250.696527,53.7642281 C255.866741,56.2226329 265.167075,56.9828473 271.464374,56.9828473 C277.795712,56.9828473 288.518139,56.1885935 292.3003,53.7264065 L292.3003,60.5342967 Z M173.348328,73.1056604 C178.518542,75.5981046 187.818877,75.6359262 194.116175,75.6359262 C200.451295,75.6359262 209.815926,74.8832762 214.96723,72.4210892 L214.974794,75.4846398 C214.309134,76.9256432 206.778851,79.4218696 194.150214,79.4218696 C181.529142,79.4218696 173.995077,76.9256432 173.348328,75.67753 L173.348328,73.1056604 Z", fill: "#F1F0EF" }),
	                    _react2.default.createElement(
	                      "text",
	                      { fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                      _react2.default.createElement(
	                        "tspan",
	                        { x: "10", y: "71.3532504" },
	                        section2.blocks[4].translations.nationalSocieties
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(10, 99.353250)" },
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "223", y: "32" },
	                          "30.8Bn"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "0", y: "14" },
	                          section2.blocks[4].translations.income
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "188", y: "32" },
	                          "CHF"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "213", y: "80" },
	                          "30.4Bn"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "0", y: "63" },
	                          section2.blocks[4].translations.expenses
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "178", y: "80" },
	                          "CHF"
	                        )
	                      ),
	                      _react2.default.createElement("rect", { fill: "#786A65", x: "0", y: "21", width: "180", height: "10" }),
	                      _react2.default.createElement("rect", { fill: "#786A65", opacity: "0.6", x: "0", y: "70", width: "170", height: "10" })
	                    ),
	                    _react2.default.createElement(
	                      "text",
	                      { fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                      _react2.default.createElement(
	                        "tspan",
	                        { x: "10", y: "224.35325" },
	                        section2.blocks[4].translations.ifrcSecretariat
	                      )
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(10, 252.353250)" },
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "183", y: "32" },
	                          "345.5M"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "0", y: "14" },
	                          section2.blocks[4].translations.income
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "148", y: "32" },
	                          "CHF"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "34", fontWeight: "normal", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "195", y: "80" },
	                          "365.3M"
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { fontSize: "13", fontWeight: "bold", letterSpacing: "1", fill: "#EE3224" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "0", y: "63" },
	                          section2.blocks[4].translations.expenses
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "text",
	                        { opacity: "0.5", fontSize: "16", fontWeight: "bold", fill: "#786A65" },
	                        _react2.default.createElement(
	                          "tspan",
	                          { x: "160", y: "80" },
	                          "CHF"
	                        )
	                      ),
	                      _react2.default.createElement("rect", { fill: "#786A65", x: "0", y: "21", width: "140", height: "10" }),
	                      _react2.default.createElement("rect", { fill: "#786A65", opacity: "0.6", x: "0", y: "70", width: "152", height: "10" })
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	            _react2.default.createElement(
	              "p",
	              null,
	              section2.blocks[5]
	            ),
	            _react2.default.createElement(
	              "h4",
	              { className: "title strong" },
	              section2.blocks[6].title
	            ),
	            _react2.default.createElement(
	              _Tabs.Tabs,
	              { activeTab: 0 },
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[6].tabs[0].name },
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(_StackedBarChart2.default, {
	                    caption: section2.blocks[6].tabs[0].caption,
	                    height: 360,
	                    width: 480,
	                    padding: {
	                      top: 60,
	                      bottom: 30,
	                      left: 30,
	                      right: 100
	                    },
	                    labels: section2.blocks[6].tabs[0].dataset.map(function (item, i) {
	                      // return `${item.name} — ${numberFormatter.addCommas(item.first + item.second + item.rest)}`
	                      return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                    }),
	                    data: [section2.blocks[6].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.first, name: item.names[0] };
	                    }), section2.blocks[6].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.second, name: item.names[1] };
	                    }), section2.blocks[6].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.rest };
	                    })]
	                  })
	                )
	              ),
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[6].tabs[1].name },
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(_StackedBarChart2.default, {
	                    caption: section2.blocks[6].tabs[1].caption,
	                    height: 360,
	                    width: 480,
	                    padding: {
	                      top: 60,
	                      bottom: 30,
	                      left: 30,
	                      right: 100
	                    },
	                    labels: section2.blocks[6].tabs[1].dataset.map(function (item, i) {
	                      // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
	                      return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                    }),
	                    data: [section2.blocks[6].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.first, name: item.names[0] };
	                    }), section2.blocks[6].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.second, name: item.names[1] };
	                    }), section2.blocks[6].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.rest };
	                    })]
	                  })
	                )
	              ),
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[6].tabs[2].name },
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(_StackedBarChart2.default, {
	                    caption: section2.blocks[6].tabs[2].caption,
	                    height: 360,
	                    width: 480,
	                    padding: {
	                      top: 60,
	                      bottom: 30,
	                      left: 30,
	                      right: 100
	                    },
	                    labels: section2.blocks[6].tabs[2].dataset.map(function (item, i) {
	                      // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
	                      return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                    }),
	                    data: [section2.blocks[6].tabs[2].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.first, name: item.names[0] };
	                    }), section2.blocks[6].tabs[2].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.second, name: item.names[1] };
	                    }), section2.blocks[6].tabs[2].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.rest };
	                    })]
	                  })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              section2.blocks[7]
	            ),
	            _react2.default.createElement(
	              "h4",
	              { className: "title strong" },
	              section2.blocks[8].title
	            ),
	            _react2.default.createElement(
	              _Tabs.Tabs,
	              { activeTab: 0 },
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[8].tabs[0].name },
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(_StackedBarChart2.default, {
	                    caption: section2.blocks[8].caption,
	                    height: 360,
	                    width: 480,
	                    padding: {
	                      top: 60,
	                      bottom: 30,
	                      left: 30,
	                      right: 120
	                    },
	                    labels: section2.blocks[8].tabs[0].dataset.map(function (item, i) {
	                      // return `${item.name} (${numberFormatter.addCommas(Math.round(item.first + item.second + item.rest))})`
	                      return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                    }),
	                    data: [section2.blocks[8].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.first, name: item.names[0] };
	                    }), section2.blocks[8].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.second, name: item.names[1] };
	                    }), section2.blocks[8].tabs[0].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.rest };
	                    })]
	                  })
	                )
	              ),
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[8].tabs[1].name },
	                _react2.default.createElement(
	                  "div",
	                  null,
	                  _react2.default.createElement(_StackedBarChart2.default, {
	                    caption: section2.blocks[8].caption,
	                    height: 360,
	                    width: 480,
	                    padding: {
	                      top: 60,
	                      bottom: 30,
	                      left: 30,
	                      right: 120
	                    },
	                    labels: section2.blocks[8].tabs[1].dataset.map(function (item, i) {
	                      // return `${item.name} (${numberFormatter.addCommas(Math.round(item.first + item.second + item.rest))})`
	                      return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                    }),
	                    data: [section2.blocks[8].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.first, name: item.names[0] };
	                    }), section2.blocks[8].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.second, name: item.names[1] };
	                    }), section2.blocks[8].tabs[1].dataset.map(function (item, i) {
	                      return { x: item.index, y: item.rest };
	                    })]
	                  })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              section2.blocks[9]
	            ),
	            _react2.default.createElement(
	              "p",
	              null,
	              section2.blocks[10]
	            ),
	            _react2.default.createElement(
	              "h4",
	              { className: "title strong" },
	              section2.blocks[11].title
	            ),
	            _react2.default.createElement(
	              _Tabs.Tabs,
	              { activeTab: 0 },
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[11].tabs[0].name },
	                _react2.default.createElement(
	                  "table",
	                  null,
	                  _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                      "tr",
	                      { className: "small" },
	                      section2.blocks[11].tabs[0].headers.map(function (item, i) {
	                        return _react2.default.createElement(
	                          "th",
	                          { key: i },
	                          item
	                        );
	                      })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "tbody",
	                    null,
	                    section2.blocks[11].tabs[0].dataset.map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tr",
	                        { key: i },
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.rank
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.donor
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.total
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.percent,
	                          "%"
	                        )
	                      );
	                    })
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  section2.blocks[11].tabs[0].caption
	                )
	              ),
	              _react2.default.createElement(
	                _Tabs.TabPanel,
	                { title: section2.blocks[11].tabs[1].name },
	                _react2.default.createElement(
	                  "table",
	                  null,
	                  _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                      "tr",
	                      { className: "small" },
	                      section2.blocks[11].tabs[1].headers.map(function (item, i) {
	                        return _react2.default.createElement(
	                          "th",
	                          { key: i },
	                          item
	                        );
	                      })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "tbody",
	                    null,
	                    section2.blocks[11].tabs[1].dataset.map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tr",
	                        { key: i },
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.rank
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.nationalSociety
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.total
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.percent,
	                          "%"
	                        )
	                      );
	                    })
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  section2.blocks[11].tabs[1].caption
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter1;
	}(_react2.default.Component);

	Chapter1.needs = [_chapterActions.fetchChapter];

	Chapter1.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter1);

/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.INVALIDATE_REQUEST = exports.RECEIVE_CHAPTER = exports.REQUEST_CHAPTER = undefined;
	exports.fetchChapter = fetchChapter;

	var _promisePolyfill = __webpack_require__(260);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	var _superagent = __webpack_require__(262);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_CHAPTER = exports.REQUEST_CHAPTER = 'REQUEST_CHAPTER';
	var RECEIVE_CHAPTER = exports.RECEIVE_CHAPTER = 'RECEIVE_CHAPTER';
	var INVALIDATE_REQUEST = exports.INVALIDATE_REQUEST = 'INVALIDATE_REQUEST';

	function invalidateRequest() {
	  return {
	    type: INVALIDATE_REQUEST
	  };
	}

	function requestChapter() {
	  return {
	    type: REQUEST_CHAPTER
	  };
	}

	function receiveChapter(chapter, language) {
	  return {
	    type: RECEIVE_CHAPTER,
	    chapter: chapter,
	    language: language
	  };
	}

	function fetchChapter(params, pathname) {

	  var pathnameArray = pathname.split('/');
	  var cleanedPathname = pathnameArray[pathnameArray.length - 1];

	  return function (dispatch, getState) {
	    var appState = getState();

	    if (shouldFetchChapter(appState, cleanedPathname)) {
	      dispatch(requestChapter());

	      var promise = new _promisePolyfill2.default(function (resolve, reject) {
	        var currentLanguage = appState.appReducer.language;
	        (0, _superagent2.default)('/api/' + currentLanguage + '/' + cleanedPathname + '.json').end(function (err, res) {
	          if (err) {
	            dispatch(invalidateRequest());
	            reject(err);
	          } else {
	            dispatch(receiveChapter(res.body, currentLanguage));
	            resolve(res);
	          }
	        });
	      });

	      return promise;
	    }
	  };
	}

	function shouldFetchChapter(state, cleanedPathname) {
	  var currentLanguage = state.appReducer.language;
	  var chapterKeys = Object.keys(state.chapterReducer[currentLanguage].chapters);
	  var chaptersLength = Object.keys(chapterKeys).length;
	  return state.chapterReducer.isFetching ? false : chaptersLength === 0 ? true : chapterKeys.indexOf(cleanedPathname) === -1;
	}

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _Icon = __webpack_require__(267);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _prefixLanguageToRoute = __webpack_require__(258);

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

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _victory = __webpack_require__(423);

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

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tabs = function (_React$Component) {
	  _inherits(Tabs, _React$Component);

	  function Tabs(props) {
	    _classCallCheck(this, Tabs);

	    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }

	  _createClass(Tabs, [{
	    key: 'switchTab',
	    value: function switchTab() {
	      this.setState({ activeTab: arguments[0] });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var tabs = this.props.children;

	      return _react2.default.createElement(
	        'div',
	        { className: 'tabs' },
	        _react2.default.createElement(
	          'div',
	          { className: 'tab-navigation' },
	          tabs.map(function (tab, i) {
	            return _react2.default.createElement(
	              'button',
	              { className: _this2.state.activeTab === i ? 'tab-navigation__item active' : 'tab-navigation__item', key: i, onClick: _this2.switchTab.bind(_this2, i) },
	              tab.props.title
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          tabs.map(function (tabpanel, j) {
	            return _react2.default.createElement(
	              TabPanel,
	              { key: j, activeTab: _this2.state.activeTab === j },
	              tabpanel.props.children
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Tabs;
	}(_react2.default.Component);

	var TabPanel = function (_React$Component2) {
	  _inherits(TabPanel, _React$Component2);

	  function TabPanel() {
	    _classCallCheck(this, TabPanel);

	    return _possibleConstructorReturn(this, (TabPanel.__proto__ || Object.getPrototypeOf(TabPanel)).apply(this, arguments));
	  }

	  _createClass(TabPanel, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.props.activeTab ? 'tab-panel active' : 'tab-panel' },
	        this.props.children
	      );
	    }
	  }]);

	  return TabPanel;
	}(_react2.default.Component);

	module.exports = {
	  Tabs: Tabs,
	  TabPanel: TabPanel
	};

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(28);

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

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _victory = __webpack_require__(423);

	var _ChartTooltip = __webpack_require__(653);

	var _ChartTooltip2 = _interopRequireDefault(_ChartTooltip);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StackedBarChart = function (_React$Component) {
	  _inherits(StackedBarChart, _React$Component);

	  function StackedBarChart(props) {
	    _classCallCheck(this, StackedBarChart);

	    var _this = _possibleConstructorReturn(this, (StackedBarChart.__proto__ || Object.getPrototypeOf(StackedBarChart)).call(this, props));

	    _this.state = {
	      width: _this.props.width,
	      tooltipTitle: "Tooltip Title",
	      tooltipContent: "Tooltip Content",
	      tooltipVisible: false,
	      tooltipPosition: [],
	      tooltipParentPosition: []
	    };

	    _this.resizeChart = _this.resizeChart.bind(_this);
	    return _this;
	  }

	  _createClass(StackedBarChart, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.setState({
	        tooltipParentPosition: [this.refs.visualizationWrapper.getBoundingClientRect().top, this.refs.visualizationWrapper.getBoundingClientRect().left]
	      });
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
	      console.log("Resizing line chart");
	      this.setState({
	        width: this.refs.visualizationWrapper.clientWidth
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          title = _props.title,
	          labels = _props.labels,
	          height = _props.height,
	          padding = _props.padding,
	          data = _props.data,
	          customFills = _props.customFills,
	          caption = _props.caption;
	      var _state = this.state,
	          tooltipVisible = _state.tooltipVisible,
	          tooltipPosition = _state.tooltipPosition,
	          tooltipParentPosition = _state.tooltipParentPosition,
	          tooltipTitle = _state.tooltipTitle,
	          tooltipContent = _state.tooltipContent;


	      var width = this.state.width || this.props.width;

	      return _react2.default.createElement(
	        "div",
	        { className: "simple-bar-chart" },
	        title && _react2.default.createElement(
	          "h4",
	          { className: "title strong" },
	          title
	        ),
	        _react2.default.createElement(
	          "div",
	          { ref: "visualizationWrapper", style: { position: "relative" } },
	          _react2.default.createElement(
	            "svg",
	            {
	              width: width,
	              height: height
	            },
	            labels.map(function (label, i) {
	              return _react2.default.createElement(
	                _victory.VictoryLabel,
	                {
	                  verticalAnchor: "end",
	                  textAnchor: "start",
	                  style: {
	                    fontFamily: "inherit",
	                    fontSize: "13px",
	                    fontWeight: "700"
	                  },
	                  x: 30,
	                  y: (height - 22) / 5 * (i + 1) - 30,
	                  key: i
	                },
	                label.text
	              );
	            }),
	            _react2.default.createElement(
	              _victory.VictoryStack,
	              {
	                horizontal: true,
	                standalone: false,
	                width: width,
	                height: height,
	                padding: padding,
	                style: {
	                  data: { width: 30 },
	                  labels: {
	                    fontFamily: "inherit",
	                    fontSize: "14px",
	                    lineHeight: "20px"
	                  }
	                },
	                labels: labels.map(function (label) {
	                  return label.number;
	                })
	              },
	              data.map(function (dataset, i) {
	                return _react2.default.createElement(_victory.VictoryBar, {
	                  key: i,
	                  style: { data: { fill: customFills[i] } },
	                  data: dataset,
	                  events: dataset[i].name ? [{
	                    target: "data",
	                    eventHandlers: {
	                      onMouseEnter: function onMouseEnter(evt, props) {
	                        _this2.setState({
	                          tooltipTitle: props.datum.name,
	                          tooltipContent: _numberFormatter2.default.addCommas(Math.round(props.datum.y)),
	                          tooltipVisible: true,
	                          tooltipPosition: [props.position.x, props.position.y0 + (props.position.y1 - props.position.y0) / 2]
	                        });
	                      },
	                      onMouseLeave: function onMouseLeave() {
	                        return _this2.setState({ tooltipVisible: false });
	                      }
	                    }
	                  }] : []
	                });
	              })
	            )
	          ),
	          _react2.default.createElement(
	            _ChartTooltip2.default,
	            {
	              visible: tooltipVisible,
	              position: tooltipPosition,
	              parentPosition: tooltipParentPosition
	            },
	            _react2.default.createElement(
	              "strong",
	              { className: "small" },
	              tooltipTitle
	            ),
	            _react2.default.createElement("br", null),
	            _react2.default.createElement(
	              "span",
	              { className: "small" },
	              tooltipContent
	            )
	          )
	        ),
	        caption && _react2.default.createElement(
	          "p",
	          { className: "small mt0" },
	          caption
	        )
	      );
	    }
	  }]);

	  return StackedBarChart;
	}(_react2.default.Component);

	StackedBarChart.propTypes = {
	  data: _react2.default.PropTypes.array,
	  width: _react2.default.PropTypes.number,
	  height: _react2.default.PropTypes.number,
	  title: _react2.default.PropTypes.string,
	  labels: _react2.default.PropTypes.array,
	  customFills: _react2.default.PropTypes.array,
	  padding: _react2.default.PropTypes.object,
	  caption: _react2.default.PropTypes.string
	};

	StackedBarChart.defaultProps = {
	  padding: { top: 40, bottom: 40, left: 40, right: 180 },
	  customFills: ["#EE3224", "#0F9EE3", "#D6D2D0"]
	};

	exports.default = StackedBarChart;

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChartTooltip = function ChartTooltip(_ref) {
	  var visible = _ref.visible,
	      position = _ref.position,
	      children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    {
	      className: "chart-tooltip",
	      style: {
	        display: visible ? "block" : "none",
	        top: position[0] - 8 || 0,
	        left: position[1] || 0
	      }
	    },
	    children
	  );
	};

	ChartTooltip.propTypes = {
	  visible: _react2.default.PropTypes.bool,
	  position: _react2.default.PropTypes.array,
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
	};

	exports.default = ChartTooltip;

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _datamaps = __webpack_require__(273);

	var _datamaps2 = _interopRequireDefault(_datamaps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import ReactDOM from 'react-dom';


	var WorldMap = function (_React$Component) {
	  _inherits(WorldMap, _React$Component);

	  function WorldMap(props) {
	    _classCallCheck(this, WorldMap);

	    var _this = _possibleConstructorReturn(this, (WorldMap.__proto__ || Object.getPrototypeOf(WorldMap)).call(this, props));

	    _this.renderMap = _this.renderMap.bind(_this);
	    _this.resizeWorldMap = _this.resizeWorldMap.bind(_this);
	    return _this;
	  }

	  _createClass(WorldMap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderMap();
	    }
	  }, {
	    key: 'renderMap',
	    value: function renderMap() {
	      var _this2 = this;

	      var mapContainer = this.refs.mapContainer;

	      var width = mapContainer.offsetWidth;
	      var height = 600;

	      var mapOptions = {
	        element: mapContainer,
	        responsive: true,
	        height: height,
	        // projection: 'times',
	        setProjection: function setProjection(element) {
	          var projection = d3.geo.times().center([15, -2]).scale(element.offsetWidth / 5)
	          // .rotate([0,0,0])
	          .translate([element.offsetWidth / 2, element.offsetHeight / 1.75]);
	          var path = d3.geo.path().projection(projection);
	          return { path: path, projection: projection };
	        },
	        fills: {
	          defaultFill: '#ddd',
	          darkerFill: '#ccc',
	          darkestFill: '#bbb',
	          bubbleFill: '#EE3224',
	          bubbleFillEmpty: '#EE3224',

	          regionalOffice: '#0F9EE3',
	          countryClusterOffice: '#82BC01',
	          countryOffice: '#EE3224',
	          others: '#918784'
	        },
	        geographyConfig: {
	          // popupOnHover: false,
	          popupOnHover: this.props.choroplethDataset ? true : false,
	          popupTemplate: this.props.choroplethDataset ? function (geo, data) {
	            return !data.popupContent ? '' : '\n            <div class=\'map-tooltip\'>\n              <strong>' + data.name + '</strong>\n              <hr />\n              <div class=\'pt1\'>\n                ' + data.popupContent + '\n              </div>\n            </div>\n          ';
	          } : false,
	          highlightOnHover: false,
	          borderWidth: 1,
	          borderColor: '#fff'
	        },
	        data: this.props.choroplethDataset || {},
	        done: function done(datamap) {
	          console.log('Rendered map');
	        }
	      };

	      this.worldMap = new _datamaps2.default(mapOptions);

	      if (this.props.bubbleSource) {
	        d3.json(this.props.bubbleSource, function (response) {
	          _this2.worldMap.bubbles(_this2.props.bubbleCallback(response), {
	            popupTemplate: _this2.props.bubblePopupTemplate
	          });
	        });
	      } else if (this.props.bubbleCallback) {
	        this.worldMap.bubbles(this.props.bubbleCallback(), {
	          popupTemplate: this.props.bubblePopupTemplate
	        });
	      }

	      window.addEventListener('resize', this.resizeWorldMap);
	    }
	  }, {
	    key: 'resizeWorldMap',
	    value: function resizeWorldMap() {
	      this.worldMap.resize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.resizeWorldMap);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h4',
	          { className: 'title strong' },
	          this.props.title
	        ),
	        _react2.default.createElement('div', { ref: 'mapContainer' }),
	        _react2.default.createElement(
	          'p',
	          { className: 'small mt0' },
	          this.props.caption
	        )
	      );
	    }
	  }]);

	  return WorldMap;
	}(_react2.default.Component);

	module.exports = WorldMap;

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter2 = function (_React$Component) {
	  _inherits(Chapter2, _React$Component);

	  function Chapter2(props) {
	    _classCallCheck(this, Chapter2);

	    return _possibleConstructorReturn(this, (Chapter2.__proto__ || Object.getPrototypeOf(Chapter2)).call(this, props));
	  }

	  _createClass(Chapter2, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted What we do");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["what-we-do"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["what-we-do"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["what-we-do"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-2.jpg)", backgroundSize: "cover", backgroundPosition: "center 40%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2"] }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section1" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  section1.blocks[0]
	                )
	              ),
	              _react2.default.createElement(
	                "ol",
	                null,
	                section1.blocks[1].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                _react2.default.createElement(
	                  "strong",
	                  null,
	                  section1.blocks[2]
	                )
	              ),
	              _react2.default.createElement(
	                "ol",
	                null,
	                section1.blocks[3].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[4]
	              ),
	              _react2.default.createElement(
	                "a",
	                { href: section1.blocks[5], target: "_blank" },
	                _react2.default.createElement(
	                  "button",
	                  { className: "btn bg-primary p1" },
	                  section1.blocks[6]
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", style: { position: "relative" }, id: "scroll-target-section2" },
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
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "center pb3", style: { position: "relative" } },
	          _react2.default.createElement("img", { src: "/img/chapters/2/flickr.jpg", style: { opacity: 0.3 } }),
	          _react2.default.createElement(
	            "div",
	            { className: "vertical-center", style: { position: "absolute", width: "100%" } },
	            _react2.default.createElement(
	              "a",
	              { className: "btn bg-primary p1", href: "https://www.flickr.com/photos/ifrc/albums", target: "_blank" },
	              section2.blocks[1]
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter2;
	}(_react2.default.Component);

	Chapter2.needs = [_chapterActions.fetchChapter];

	Chapter2.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter2);

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var principleReference = ["humanity", "impartiality", "neutrality", "independence", "voluntary-service", "unity", "universality"];

	var Chapter3 = function (_React$Component) {
	  _inherits(Chapter3, _React$Component);

	  function Chapter3(props) {
	    _classCallCheck(this, Chapter3);

	    return _possibleConstructorReturn(this, (Chapter3.__proto__ || Object.getPrototypeOf(Chapter3)).call(this, props));
	  }

	  _createClass(Chapter3, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Living our fundamental principles");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["living-our-fundamental-principles"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["living-our-fundamental-principles"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["living-our-fundamental-principles"];

	      var section1 = chapter.sections[0];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	                section1.blocks[0]
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
	                          section1.blocks[1].items.map(function (item, i) {
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
	                          section1.blocks[1].name.split("\n").map(function (item, i) {
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
	                  section1.blocks[3]
	                ),
	                _react2.default.createElement(
	                  "button",
	                  { className: "btn bg-primary p1" },
	                  section1.blocks[5]
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-5 md-5 lg-4" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[2]
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
	                        section1.blocks[4].items.map(function (item, i) {
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
	                        section1.blocks[4].name.split("\n").map(function (item, i) {
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

	Chapter3.needs = [_chapterActions.fetchChapter];

	Chapter3.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter3);

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _reactI18next = __webpack_require__(249);

	var _i18n = __webpack_require__(658);

	var _i18n2 = _interopRequireDefault(_i18n);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _LineChart = __webpack_require__(422);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _Tabs = __webpack_require__(650);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _SimpleBarChart = __webpack_require__(679);

	var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

	var _DonutChart = __webpack_require__(680);

	var _DonutChart2 = _interopRequireDefault(_DonutChart);

	var _WorldMap = __webpack_require__(654);

	var _WorldMap2 = _interopRequireDefault(_WorldMap);

	var _StackedBarChart = __webpack_require__(652);

	var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter4 = function (_React$Component) {
	  _inherits(Chapter4, _React$Component);

	  function Chapter4(props) {
	    _classCallCheck(this, Chapter4);

	    return _possibleConstructorReturn(this, (Chapter4.__proto__ || Object.getPrototypeOf(Chapter4)).call(this, props));
	  }

	  _createClass(Chapter4, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Strategic Aim 1");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["strategic-aim-1"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["strategic-aim-1"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      if (_i18n2.default.store.data[_i18n2.default.language]["strategic-aim-1"]) document.body.classList.add("html-ready");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var t = this.props.t;
	      var language = _i18n2.default.language;

	      var chapter = _i18n2.default.store.data[language]["strategic-aim-1"];

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
	              t("strategic-aim-1:title")
	            ),
	            _react2.default.createElement(
	              "p",
	              { className: "title" },
	              t("strategic-aim-1:subtitle")
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-4.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	            _react2.default.createElement(
	              "p",
	              { className: "lead" },
	              t("strategic-aim-1:intro")
	            ),
	            _react2.default.createElement("hr", null)
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix body-text", style: { position: "relative" } },
	          _react2.default.createElement(_SideNavigation2.default, {
	            title: t("strategic-aim-1:title"),
	            sections: chapter.sections,
	            sectionReferences: ["scroll-target-section0", "scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4", "scroll-target-section5", "scroll-target-section6"]
	          }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:general.0")
	              ),
	              _react2.default.createElement(_LineChart2.default, {
	                title: t("strategic-aim-1:general.1.title"),
	                caption: t("strategic-aim-1:general.1.caption"),
	                height: 300,
	                padding: {
	                  top: 30,
	                  bottom: 40,
	                  left: 60,
	                  right: 60
	                },
	                domain: {
	                  x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
	                  y: [200, 410]
	                },
	                axisLabels: t("strategic-aim-1:general.1.axisLabels"),
	                labels: t("strategic-aim-1:general.1.lineLabels"),
	                dataset: [chapter.general[1].dataset.map(function (item, i) {
	                  return { x: new Date(+item.year, 1, 1), y: +item.disasters };
	                })]
	              })
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section0" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                { className: "small strong color-primary caps" },
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.0.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.0.blocks.0")
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-3 md-offset-3 lg-3 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.0.blocks.1")
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3" },
	              _react2.default.createElement(_StackedBarChart2.default, {
	                title: t("strategic-aim-1:sections.0.blocks.2.title"),
	                caption: t("strategic-aim-1:sections.0.blocks.2.caption"),
	                height: 360,
	                width: 480,
	                padding: {
	                  top: 60,
	                  bottom: 30,
	                  left: 30,
	                  right: 100
	                },
	                customFills: section0.blocks[2].customFills,
	                labels: section0.blocks[2].dataset.map(function (item, i) {
	                  // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
	                  return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(+item.total)) };
	                }),
	                data: [section0.blocks[2].dataset.map(function (item, i) {
	                  return { x: +item.index, y: +item.numbers[0], name: item.labels[0] };
	                }), section0.blocks[2].dataset.map(function (item, i) {
	                  return { x: +item.index, y: +item.numbers[1], name: item.labels[1] };
	                }), section0.blocks[2].dataset.map(function (item, i) {
	                  return { x: +item.index, y: +item.numbers[2], name: item.labels[2] };
	                }), section0.blocks[2].dataset.map(function (item, i) {
	                  return { x: +item.index, y: +item.numbers[3], name: item.labels[3] };
	                })]
	              })
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.1.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.1.blocks.0")
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  t("strategic-aim-1:sections.1.blocks.1.title")
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
	                      section1.blocks[1].headers.map(function (item, i) {
	                        return _react2.default.createElement(
	                          "th",
	                          { key: i },
	                          item
	                        );
	                      })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "tbody",
	                    null,
	                    section1.blocks[1].dataset.map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tr",
	                        { key: i },
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.year
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.appealsLaunched
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.amount
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          null,
	                          item.beneficiaries
	                        ),
	                        _react2.default.createElement(
	                          "td",
	                          { className: "small" },
	                          item.crisis
	                        )
	                      );
	                    })
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  t("strategic-aim-1:sections.1.blocks.1.caption")
	                )
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.2.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.2.blocks.0")
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix" },
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-6 md-4 md-offset-3 lg-4 lg-offset-2" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col sm-8 sm-offset-4 md-11 md-offset-0 lg-9 lg-offset-3 sm-pr1" },
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    t("strategic-aim-1:sections.2.blocks.1")
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col sm-8 sm-offset-4 md-11 md-offset-0 lg-9 lg-offset-3 sm-pr1" },
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    t("strategic-aim-1:sections.2.blocks.2")
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4" },
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  t("strategic-aim-1:sections.2.blocks.3.title")
	                ),
	                _react2.default.createElement(
	                  _Tabs.Tabs,
	                  { activeTab: 0 },
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: t("strategic-aim-1:sections.2.blocks.3.tabs.0.name") },
	                    _react2.default.createElement(
	                      "table",
	                      null,
	                      _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(
	                          "tr",
	                          null,
	                          section2.blocks[3].tabs[0].headers.map(function (item, i) {
	                            return _react2.default.createElement(
	                              "th",
	                              { className: "small", key: i },
	                              item
	                            );
	                          })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "tbody",
	                        null,
	                        section2.blocks[3].tabs[0].dataset.map(function (item, i) {
	                          return _react2.default.createElement(
	                            "tr",
	                            { key: i },
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.country
	                            ),
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.percentage,
	                              "%"
	                            )
	                          );
	                        })
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: t("strategic-aim-1:sections.2.blocks.3.tabs.1.name") },
	                    _react2.default.createElement(
	                      "table",
	                      null,
	                      _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(
	                          "tr",
	                          null,
	                          section2.blocks[3].tabs[1].headers.map(function (item, i) {
	                            return _react2.default.createElement(
	                              "th",
	                              { className: "small", key: i },
	                              item
	                            );
	                          })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "tbody",
	                        null,
	                        section2.blocks[3].tabs[1].dataset.map(function (item, i) {
	                          return _react2.default.createElement(
	                            "tr",
	                            { key: i },
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.country
	                            ),
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.percentage,
	                              "%"
	                            )
	                          );
	                        })
	                      )
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  t("strategic-aim-1:sections.2.blocks.3.caption")
	                )
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.3.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.3.blocks.0")
	              ),
	              _react2.default.createElement(_DonutChart2.default, {
	                title: t("strategic-aim-1:sections.3.blocks.1.title"),
	                caption: t("strategic-aim-1:sections.3.blocks.1.caption"),
	                maxSize: 480,
	                dataset: section3.blocks[1].dataset.map(function (d) {
	                  return { x: d.x, y: +d.y, fill: d.fill };
	                }) }),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.3.blocks.2")
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.4.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.4.blocks.0")
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix" },
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-5 sm-offset-1 md-4 md-offset-3 lg-4 lg-offset-2" },
	                _react2.default.createElement(_LineChart2.default, {
	                  title: t("strategic-aim-1:sections.4.blocks.1.title"),
	                  caption: t("strategic-aim-1:sections.4.blocks.1.caption"),
	                  height: 480,
	                  padding: {
	                    top: 30,
	                    bottom: 40,
	                    left: 60,
	                    right: 60
	                  },
	                  domain: {
	                    x: [new Date(2010, 1, 1), new Date(2015, 1, 1)],
	                    y: [40, 160]
	                  },
	                  axisLabels: section4.blocks[1].axisLabels,
	                  labels: section4.blocks[1].lineLabels,
	                  dataset: [section4.blocks[1].dataset[0].map(function (item, i) {
	                    return { x: new Date(item.year, 1, 1), y: +item.value };
	                  }), section4.blocks[1].dataset[1].map(function (item, i) {
	                    return { x: new Date(item.year, 1, 1), y: +item.value };
	                  })]
	                })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4" },
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  t("strategic-aim-1:sections.4.blocks.2")
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  t("strategic-aim-1:sections.4.blocks.3")
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.5.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.5.blocks.0")
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
	              _react2.default.createElement(_WorldMap2.default, {
	                title: t("strategic-aim-1:sections.5.blocks.1.title"),
	                caption: t("strategic-aim-1:sections.5.blocks.1.caption"),
	                choroplethDataset: section5.blocks[1].dataset
	              })
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.5.blocks.2")
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2", style: { position: "relative", minHeight: "600px", backgroundImage: "url(/img/chapters/4/syria-crisis.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 xs-offset-6" },
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  "The Syria crisis"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "40 Syrian Arab Red Crescent and 8 Palestinian Red Crescent Society staff and volunteers have lost their lives while providing support since the beginning of the crisis."
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 xs-offset-6" },
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "2011"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "display-1 color-primary strong" },
	                  "22.8M"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  "total population"
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col xs-6 xs-offset-6 pr1" },
	                  _react2.default.createElement(
	                    "p",
	                    { className: "display-1 color-primary strong" },
	                    "4.1M"
	                  ),
	                  _react2.default.createElement(
	                    "p",
	                    { className: "small" },
	                    "people displaced in neighbouring countries"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "display-1 color-primary strong" },
	                  "7.6M"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  "internally displaced people"
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col sm-5 sm-offset-3 py1" },
	              _react2.default.createElement("hr", null)
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2", style: { position: "relative", minHeight: "660px", backgroundImage: "url(/img/chapters/4/taiphoon.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 pr2" },
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  "Taiphoon Haiyan"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "137 National Societies have supported the operation since the start of the crisis."
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Shelter"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Houses built"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "61,328"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Beneficiaries"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "76,032"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Livelihood support"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Households supported with livelihood assistance"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "58,454"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Healthcare"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Health facilities rehabilitated or constructed"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "32"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Households reached"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "33,685"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Water, sanitation and hygiene promotion"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Households participating in hygiene promotion"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "34,032"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 pr2" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Education"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Classrooms repaired and constructed"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "224"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Students covered by repaired and constructed classrooms"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "48,731"
	                  )
	                ),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement("br", { className: "xs-visible" }),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Disaster risk reduction"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Instructors trained in disaster risk reduction"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "95"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col sm-5 sm-offset-3 py1" },
	              _react2.default.createElement("hr", null)
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2", style: { position: "relative", minHeight: "892px", backgroundImage: "url(/img/chapters/4/ebola.svg)", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%" } },
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6 xs-offset-6" },
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  "Ebola virus disease"
	                ),
	                _react2.default.createElement(
	                  "p",
	                  null,
	                  "33 National Societies have supported the operation since the start of the crisis."
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Social mobilisation and beneficiary communication"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "people reached"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "7M"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Tracing and monitoring contacts"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "People traced"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "&gt97,000"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Safe and dignified burials"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Bodies safely buried"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "34,448"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Psychosocial support"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "People supported"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "&gt339,000"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col xs-6" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Volunteers trained in Ebola response"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "6,927"
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Volunteers currently active"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "3,917"
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-6" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    _react2.default.createElement(
	                      "strong",
	                      null,
	                      "Clinical case management"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4" },
	                    "&nbsp"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Admissions"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "1,341"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-8" },
	                    "Discharges"
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col xs-4 right-align" },
	                    "774"
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col sm-5 sm-offset-3 py1" },
	              _react2.default.createElement("hr", null)
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
	                t("strategic-aim-1:title")
	              ),
	              _react2.default.createElement(
	                "h3",
	                { className: "headline" },
	                t("strategic-aim-1:sections.6.title")
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.6.blocks.0")
	              ),
	              _react2.default.createElement(_SimpleBarChart2.default, {
	                title: t("strategic-aim-1:sections.6.blocks.1.title"),
	                caption: t("strategic-aim-1:sections.6.blocks.1.caption"),
	                horizontal: false,
	                height: 300,
	                data: section6.blocks[1].dataset.map(function (item, i) {
	                  return { y: +item.value, x: new Date(item.year, 1, 1) };
	                }),
	                labels: section6.blocks[1].barLabels,
	                tickValues: section6.blocks[1].dataset.map(function (item, i) {
	                  return new Date(item.year, 1, 1);
	                }),
	                tickFormat: function tickFormat(x) {
	                  return x.getFullYear();
	                },
	                axisLabels: section6.blocks[1].axisLabels
	              }),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.6.blocks.2")
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  t("strategic-aim-1:sections.6.blocks.3.title")
	                ),
	                _react2.default.createElement(
	                  _Tabs.Tabs,
	                  { activeTab: 0 },
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: t("strategic-aim-1:sections.6.blocks.3.tabs.0.name") },
	                    _react2.default.createElement(_DonutChart2.default, {
	                      maxSize: 480,
	                      dataset: section6.blocks[3].tabs[0].dataset
	                    })
	                  ),
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: t("strategic-aim-1:sections.6.blocks.3.tabs.1.name") },
	                    _react2.default.createElement(_DonutChart2.default, {
	                      maxSize: 480,
	                      dataset: section6.blocks[3].tabs[1].dataset
	                    })
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  t("strategic-aim-1:sections.6.blocks.3.caption")
	                )
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                t("strategic-aim-1:sections.6.blocks.4")
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter4;
	}(_react2.default.Component);

	Chapter4.needs = [_chapterActions.fetchChapter];

	Chapter4.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactI18next.translate)(["strategic-aim-1"], { wait: true })((0, _reactRedux.connect)(mapStateToProps)(Chapter4));

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18next = __webpack_require__(659);

	var _i18next2 = _interopRequireDefault(_i18next);

	var _i18nextXhrBackend = __webpack_require__(675);

	var _i18nextXhrBackend2 = _interopRequireDefault(_i18nextXhrBackend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_i18next2.default.use(_i18nextXhrBackend2.default).init({
	  fallbackLng: "en",
	  ns: ["common"],
	  defaultNS: "common",
	  debug: true,
	  returnObjects: true
	});

	exports.default = _i18next2.default;

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _victory = __webpack_require__(423);

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

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _victory = __webpack_require__(423);

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
	    return _this;
	  }

	  _createClass(DonutChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resizeChart();
	      window.addEventListener('resize', this.resizeChart);
	    }
	  }, {
	    key: 'resizeChart',
	    value: function resizeChart() {
	      console.log('Resizing donut chart');
	      this.setState({
	        size: this.refs.visualizationWrapper.clientWidth > this.props.maxSize ? this.props.maxSize : this.refs.visualizationWrapper.clientWidth
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
	      return _react2.default.createElement(
	        'div',
	        null,
	        this.props.title ? _react2.default.createElement(
	          'h4',
	          { className: 'title strong' },
	          this.props.title
	        ) : '',
	        _react2.default.createElement(
	          'div',
	          { ref: 'visualizationWrapper', style: { margin: '0 auto', maxWidth: this.props.maxSize } },
	          _react2.default.createElement(_victory.VictoryPie, {
	            width: this.state.size,
	            height: this.state.size,
	            padding: this.state.size / 100 * 17.5,
	            innerRadius: this.state.size / 100 * 20,
	            data: this.props.dataset,
	            style: {
	              data: {
	                strokeWidth: 1.5
	              },
	              labels: {
	                padding: this.state.size / 100 * 31,
	                fontFamily: 'inherit',
	                fontSize: '13px'
	              } }
	          })
	        ),
	        this.props.caption ? _react2.default.createElement(
	          'p',
	          { className: 'small' },
	          this.props.caption
	        ) : ''
	      );
	    }
	  }]);

	  return DonutChart;
	}(_react2.default.Component);

	module.exports = DonutChart;

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _chapterActions = __webpack_require__(420);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _SimpleBarChart = __webpack_require__(679);

	var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

	var _StackedBarChart = __webpack_require__(652);

	var _StackedBarChart2 = _interopRequireDefault(_StackedBarChart);

	var _LineChart = __webpack_require__(422);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _Tabs = __webpack_require__(650);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter5 = function (_React$Component) {
	  _inherits(Chapter5, _React$Component);

	  function Chapter5(props) {
	    _classCallCheck(this, Chapter5);

	    return _possibleConstructorReturn(this, (Chapter5.__proto__ || Object.getPrototypeOf(Chapter5)).call(this, props));
	  }

	  _createClass(Chapter5, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Strategic Aim 2");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["strategic-aim-2"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["strategic-aim-2"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["strategic-aim-2"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];
	      var section3 = chapter.sections[2];
	      var section4 = chapter.sections[3];
	      var section5 = chapter.sections[4];
	      var section6 = chapter.sections[5];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-5.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4", "scroll-target-section5", "scroll-target-section6"] }),
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
	              { className: "col px1 sm-px0 sm-4 sm-offset-2 md-offset-3 lg-3" },
	              _react2.default.createElement(_SimpleBarChart2.default, {
	                title: section1.blocks[1].title,
	                caption: section1.blocks[1].caption,
	                horizontal: false,
	                height: 300,
	                data: [{ y: 160.7, x: new Date(2012, 1, 1) }, { y: 103.4, x: new Date(2013, 1, 1) }],
	                labels: ["160.7M", "103.4M"],
	                tickValues: [new Date(2012, 1, 1), new Date(2013, 1, 1)],
	                tickFormat: function tickFormat(x) {
	                  return x.getFullYear();
	                },
	                axisLabels: section1.blocks[1].axisLabels
	              })
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-4 md-offset-0 lg-3" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[2]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[3]
	              ),
	              _react2.default.createElement(_StackedBarChart2.default, {
	                title: section1.blocks[4].title,
	                caption: section1.blocks[4].caption,
	                height: 360,
	                padding: {
	                  top: 60,
	                  bottom: 30,
	                  left: 30,
	                  right: 100
	                },
	                labels: section1.blocks[4].dataset.map(function (item, i) {
	                  // return `${item.name} (${item.first + item.second + item.rest})`
	                  return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                }),
	                data: [section1.blocks[4].dataset.map(function (item, i) {
	                  return { x: item.index, y: item.first, name: item.names[0] };
	                }), section1.blocks[4].dataset.map(function (item, i) {
	                  return { x: item.index, y: item.second, name: item.names[1] };
	                }), section1.blocks[4].dataset.map(function (item, i) {
	                  return { x: item.index, y: item.rest };
	                })]
	              }),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[5]
	              ),
	              _react2.default.createElement(_LineChart2.default, {
	                title: section1.blocks[6].title,
	                caption: section1.blocks[6].caption,
	                height: 300,
	                padding: {
	                  top: 30,
	                  bottom: 40,
	                  left: 60,
	                  right: 60
	                },
	                domain: {
	                  x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
	                  y: [0, 150]
	                },
	                axisLabels: section1.blocks[6].axisLabels,
	                labels: section1.blocks[6].lineLabels,
	                dataset: [section1.blocks[6].dataset[0].map(function (item, i) {
	                  return { x: new Date(item.year, 1, 1), y: item.value };
	                }), section1.blocks[6].dataset[1].map(function (item, i) {
	                  return { x: new Date(item.year, 1, 1), y: item.value };
	                })]
	              })
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
	              )
	            )
	          ),
	          _react2.default.createElement("div", { className: "clearfix", style: { width: "100%", height: "0px", paddingBottom: "50%", overflow: "hidden", backgroundImage: "url(/img/chapters/5/climate-change.jpg)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" } }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3" },
	              _react2.default.createElement(
	                "p",
	                { className: "small" },
	                section2.blocks[1].caption
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section2.blocks[2]
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
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  section3.blocks[1].title
	                ),
	                _react2.default.createElement(
	                  _Tabs.Tabs,
	                  { activeTab: 0 },
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: section3.blocks[1].tabs[0].name },
	                    _react2.default.createElement(
	                      "table",
	                      null,
	                      _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(
	                          "tr",
	                          { className: "small" },
	                          section3.blocks[1].tabs[0].headers.map(function (item, i) {
	                            return _react2.default.createElement(
	                              "th",
	                              { key: i },
	                              item
	                            );
	                          })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "tbody",
	                        null,
	                        section3.blocks[1].tabs[0].dataset.map(function (item, i) {
	                          return _react2.default.createElement(
	                            "tr",
	                            { key: i, className: item.region === "Global" ? "strong" : "" },
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.region
	                            ),
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.percentage1,
	                              "%"
	                            ),
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.percentage2,
	                              "%"
	                            )
	                          );
	                        })
	                      )
	                    )
	                  ),
	                  _react2.default.createElement(
	                    _Tabs.TabPanel,
	                    { title: section3.blocks[1].tabs[1].name },
	                    _react2.default.createElement(
	                      "table",
	                      null,
	                      _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(
	                          "tr",
	                          { className: "small" },
	                          section3.blocks[1].tabs[1].headers.map(function (item, i) {
	                            return _react2.default.createElement(
	                              "th",
	                              { key: i },
	                              item
	                            );
	                          })
	                        )
	                      ),
	                      _react2.default.createElement(
	                        "tbody",
	                        null,
	                        section3.blocks[1].tabs[1].dataset.map(function (item, i) {
	                          return _react2.default.createElement(
	                            "tr",
	                            { key: i },
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.activity
	                            ),
	                            _react2.default.createElement(
	                              "td",
	                              null,
	                              item.amount
	                            )
	                          );
	                        })
	                      )
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  section3.blocks[1].caption
	                )
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
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix" },
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-6 md-4 md-offset-3 lg-4 lg-offset-2" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col sm-10 sm-offset-2 md-12 md-offset-0 sm-pr1" },
	                  _react2.default.createElement(
	                    "ul",
	                    null,
	                    section4.blocks[1].map(function (item, i) {
	                      return _react2.default.createElement(
	                        "li",
	                        { key: i },
	                        item
	                      );
	                    })
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
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col sm-8 sm-offset-4 md-9 md-offset-3 sm-pr1" },
	                  _react2.default.createElement(
	                    "p",
	                    null,
	                    section4.blocks[4]
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4" },
	                _react2.default.createElement(_SimpleBarChart2.default, {
	                  title: section4.blocks[5].title,
	                  caption: section4.blocks[5].caption,
	                  horizontal: true,
	                  height: 960,
	                  domain: { y: [0, 100] },
	                  padding: {
	                    top: 40,
	                    bottom: 40,
	                    left: 30,
	                    right: 200
	                  },
	                  data: section4.blocks[5].dataset,
	                  labels: function labels(datum) {
	                    return datum.y !== 0 ? datum.xName + " [" + String(datum.y) + "%]" : datum.xName;
	                  }
	                })
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
	                  section4.blocks[6]
	                ),
	                _react2.default.createElement(_SimpleBarChart2.default, {
	                  noAxisChart: true,
	                  padding: {
	                    top: 40,
	                    bottom: 40,
	                    left: 40,
	                    right: 40
	                  },
	                  title: section4.blocks[7].title,
	                  caption: section4.blocks[7].caption,
	                  horizontal: false,
	                  height: 300,
	                  data: section4.blocks[7].dataset,
	                  labels: function labels(datum) {
	                    return String(datum.y);
	                  },
	                  legend: section4.blocks[7].dataset.map(function (item, i) {
	                    return { color: item.fill, name: item.x };
	                  })
	                })
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
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_StackedBarChart2.default, {
	                  title: section5.blocks[1].title,
	                  caption: section5.blocks[1].caption,
	                  height: 360,
	                  padding: {
	                    top: 60,
	                    bottom: 30,
	                    left: 30,
	                    right: 100
	                  },
	                  labels: section5.blocks[1].dataset.map(function (item, i) {
	                    // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
	                    return { text: item.name, number: _numberFormatter2.default.addCommas(Math.round(item.first + item.second + item.rest)) };
	                  }),
	                  data: [section5.blocks[1].dataset.map(function (item, i) {
	                    return { x: item.index, y: item.first, name: item.names[0] };
	                  }), section5.blocks[1].dataset.map(function (item, i) {
	                    return { x: item.index, y: item.second, name: item.names[1] };
	                  }), section5.blocks[1].dataset.map(function (item, i) {
	                    return { x: item.index, y: item.rest };
	                  })]
	                })
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[2]
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
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
	              _react2.default.createElement(
	                "svg",
	                { width: "100%", height: "540px", viewBox: "0 0 840 540" },
	                _react2.default.createElement(
	                  "g",
	                  { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "45", fontWeight: "bold", fill: "#0F9EE2" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "600", y: "142" },
	                      "&gt9M"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    section6.blocks[1].translations[0].split("\n").map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tspan",
	                        { x: "600", y: 188 + i * 24 },
	                        item
	                      );
	                    })
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "24", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "122.460", y: "291" },
	                      "2015"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "24", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    section6.blocks[1].translations[1].split("\n").map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tspan",
	                        { x: "155", y: 420 + i * 30, textAnchor: "middle" },
	                        item
	                      );
	                    })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(234, 7)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M24.464,63.703 C11.249,63.703 0.079,75.565 0.079,89.491 L0.079,153.975 C0.079,155.367 0.602,156.543 1.520,157.530 L9.955,165.925 L10.065,226.966 C10.065,229.741 12.277,231.904 15.003,231.904 L64.386,231.904 C67.122,231.904 69.324,229.741 69.324,226.966 L69.214,165.925 L77.639,157.530 C78.567,156.543 79.091,155.367 79.091,153.975 L79.091,89.491 C79.091,75.565 67.930,63.703 54.706,63.703 L24.464,63.703 Z" }),
	                    _react2.default.createElement("path", { d: "M39.585,60.148 C55.920,60.148 69.214,46.913 69.214,30.518 C69.214,14.222 55.920,0.888 39.585,0.888 C23.249,0.888 9.955,14.222 9.955,30.518 C9.955,46.913 23.249,60.148 39.585,60.148" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(114, 97)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M12.232,31.851 C5.624,31.851 0.039,37.782 0.039,44.745 L0.039,76.987 C0.039,77.683 0.301,78.271 0.760,78.765 L4.977,82.962 L5.032,113.483 C5.032,114.870 6.138,115.952 7.501,115.952 L32.193,115.952 C33.561,115.952 34.662,114.870 34.662,113.483 L34.607,82.962 L38.819,78.765 C39.283,78.271 39.545,77.683 39.545,76.987 L39.545,44.745 C39.545,37.782 33.965,31.851 27.353,31.851 L12.232,31.851 Z" }),
	                    _react2.default.createElement("path", { d: "M19.792,30.074 C27.960,30.074 34.607,23.456 34.607,15.259 C34.607,7.111 27.960,0.444 19.792,0.444 C11.624,0.444 4.977,7.111 4.977,15.259 C4.977,23.456 11.624,30.074 19.792,30.074" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(67, 97)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z" }),
	                    _react2.default.createElement("path", { d: "M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(101, 114)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
	                    _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(55, 95)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
	                    _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(440, 95)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z" }),
	                    _react2.default.createElement("path", { d: "M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(2, 109)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M6.116,15.925 C2.812,15.925 0.019,18.891 0.019,22.372 L0.019,38.493 C0.019,38.841 0.150,39.135 0.380,39.382 L2.488,41.481 L2.516,56.741 C2.516,57.435 3.069,57.976 3.750,57.976 L16.096,57.976 C16.780,57.976 17.331,57.435 17.331,56.741 L17.303,41.481 L19.409,39.382 C19.641,39.135 19.772,38.841 19.772,38.493 L19.772,22.372 C19.772,18.891 16.982,15.925 13.676,15.925 L6.116,15.925 Z" }),
	                    _react2.default.createElement("path", { d: "M9.896,15.037 C13.980,15.037 17.303,11.728 17.303,7.629 C17.303,3.555 13.980,0.222 9.896,0.222 C5.812,0.222 2.488,3.555 2.488,7.629 C2.488,11.728 5.812,15.037 9.896,15.037" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(410, 106)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z" }),
	                    _react2.default.createElement("path", { d: "M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(315, 19)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M89.310,166.624 L81.460,121.126 L81.460,81.044 C81.460,68.734 70.911,57.937 58.884,57.937 L31.785,57.937 C20.130,57.937 10.660,68.300 10.660,81.044 L10.660,120.684 L0.757,167.677 C0.474,169.005 0.810,170.332 1.651,171.394 C2.492,172.376 3.757,172.987 5.094,172.987 L19.510,172.987 L19.510,203.962 C19.510,206.449 21.493,208.387 23.935,208.387 L68.185,208.387 C70.637,208.387 72.610,206.449 72.610,203.962 L72.610,172.987 L85.151,172.987 L85.248,172.987 C87.717,173.076 89.753,171.049 89.753,168.562 C89.753,167.863 89.602,167.235 89.310,166.624" }),
	                    _react2.default.createElement("path", { d: "M45.326,54.751 C59.973,54.751 71.876,42.892 71.876,28.201 C71.876,13.599 59.973,1.651 45.326,1.651 C30.688,1.651 18.776,13.599 18.776,28.201 C18.776,42.892 30.688,54.751 45.326,54.751" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(160, 46)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M69.463,129.596 L63.358,94.209 L63.358,63.034 C63.358,53.460 55.153,45.062 45.799,45.062 L24.722,45.062 C15.656,45.062 8.291,53.122 8.291,63.034 L8.291,93.865 L0.589,130.415 C0.369,131.448 0.630,132.480 1.284,133.306 C1.938,134.070 2.922,134.545 3.962,134.545 L15.175,134.545 L15.175,158.637 C15.175,160.571 16.716,162.079 18.616,162.079 L53.033,162.079 C54.940,162.079 56.475,160.571 56.475,158.637 L56.475,134.545 L66.228,134.545 L66.304,134.545 C68.224,134.614 69.808,133.038 69.808,131.104 C69.808,130.560 69.691,130.071 69.463,129.596" }),
	                    _react2.default.createElement("path", { d: "M35.253,42.584 C46.645,42.584 55.903,33.360 55.903,21.934 C55.903,10.577 46.645,1.284 35.253,1.284 C23.868,1.284 14.603,10.577 14.603,21.934 C14.603,33.360 23.868,42.584 35.253,42.584" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(450, 104)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541" }),
	                    _react2.default.createElement("path", { d: "M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(27, 104)", fill: "#D6D2D0" },
	                    _react2.default.createElement("path", { d: "M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541" }),
	                    _react2.default.createElement("path", { d: "M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250" })
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "72", fontWeight: "bold", fill: "#0F9EE2" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "77", y: "372" },
	                      "15M"
	                    )
	                  ),
	                  _react2.default.createElement("path", { d: "M659.062,32.878 C661.687,37.097 663,41.679 663,46.625 C663,50.140 662.314,53.492 660.943,56.679 C659.572,59.867 657.732,62.615 655.423,64.923 C653.115,67.232 650.367,69.072 647.179,70.443 C643.992,71.814 640.640,72.5 637.125,72.5 C633.609,72.5 630.257,71.814 627.070,70.443 C623.882,69.072 621.134,67.232 618.826,64.923 C616.517,62.615 614.677,59.867 613.306,56.679 C611.935,53.492 611.25,50.140 611.25,46.625 C611.25,41.679 612.562,37.097 615.187,32.878 C616.429,30.886 618.790,27.945 622.271,24.054 C625.751,20.164 628.470,17.205 630.427,15.177 C632.384,13.150 633.949,11.550 635.121,10.378 L637.125,8.375 L639.128,10.378 C640.300,11.550 641.865,13.150 643.822,15.177 C645.779,17.205 648.498,20.164 651.978,24.054 C655.459,27.945 657.820,30.886 659.062,32.878 L659.062,32.878 Z M637.125,66.875 C639.867,66.875 642.486,66.341 644.982,65.275 C647.478,64.208 649.634,62.767 651.451,60.951 C653.267,59.134 654.708,56.978 655.775,54.482 C656.841,51.986 657.375,49.367 657.375,46.625 C657.375,42.734 656.343,39.148 654.281,35.867 C652.148,32.468 646.429,25.964 637.125,16.355 C627.820,25.964 622.101,32.468 619.968,35.867 C617.906,39.148 616.875,42.734 616.875,46.625 C616.875,49.367 617.408,51.986 618.474,54.482 C619.541,56.978 620.982,59.134 622.798,60.951 C624.615,62.767 626.771,64.208 629.267,65.275 C631.763,66.341 634.382,66.875 637.125,66.875 L637.125,66.875 Z M623.765,38.222 C625.195,35.949 628.968,31.531 635.085,24.968 L639.164,28.835 C633.421,34.953 629.882,39.078 628.546,41.210 C627.515,42.851 627,44.656 627,46.625 C627,49.484 628.031,51.910 630.093,53.902 L626.156,57.910 C622.968,54.839 621.375,51.078 621.375,46.625 C621.375,43.601 622.171,40.800 623.765,38.222 L623.765,38.222 Z", fill: "#0F9EE2" }),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "45", fontWeight: "bold", fill: "#0F9EE2" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "600", y: "383" },
	                      "&gt5M"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontFamily: "Roboto-Bold, Roboto", fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    section6.blocks[1].translations[2].split("\n").map(function (item, i) {
	                      return _react2.default.createElement(
	                        "tspan",
	                        { x: "600", y: 429 + i * 24 },
	                        item
	                      );
	                    })
	                  ),
	                  _react2.default.createElement("path", { d: "M659.062,273.878 C661.687,278.097 663,282.679 663,287.625 C663,291.140 662.314,294.492 660.943,297.679 C659.572,300.867 657.732,303.615 655.423,305.923 C653.115,308.232 650.367,310.072 647.179,311.443 C643.992,312.814 640.640,313.5 637.125,313.5 C633.609,313.5 630.257,312.814 627.070,311.443 C623.882,310.072 621.134,308.232 618.826,305.923 C616.517,303.615 614.677,300.867 613.306,297.679 C611.935,294.492 611.25,291.140 611.25,287.625 C611.25,282.679 612.562,278.097 615.187,273.878 C616.429,271.886 618.790,268.945 622.271,265.054 C625.751,261.164 628.470,258.205 630.427,256.177 C632.384,254.150 633.949,252.550 635.121,251.378 L637.125,249.375 L639.128,251.378 C640.300,252.550 641.865,254.150 643.822,256.177 C645.779,258.205 648.498,261.164 651.978,265.054 C655.459,268.945 657.820,271.886 659.062,273.878 L659.062,273.878 Z M637.125,307.875 C639.867,307.875 642.486,307.341 644.982,306.275 C647.478,305.208 649.634,303.767 651.451,301.951 C653.267,300.134 654.708,297.978 655.775,295.482 C656.841,292.986 657.375,290.367 657.375,287.625 C657.375,283.734 656.343,280.148 654.281,276.867 C652.148,273.468 646.429,266.964 637.125,257.355 C627.820,266.964 622.101,273.468 619.968,276.867 C617.906,280.148 616.875,283.734 616.875,287.625 C616.875,290.367 617.408,292.986 618.474,295.482 C619.541,297.978 620.982,300.134 622.798,301.951 C624.615,303.767 626.771,305.208 629.267,306.275 C631.763,307.341 634.382,307.875 637.125,307.875 L637.125,307.875 Z M623.765,279.222 C625.195,276.949 628.968,272.531 635.085,265.968 L639.164,269.835 C633.421,275.953 629.882,280.078 628.546,282.210 C627.515,283.851 627,285.656 627,287.625 C627,290.484 628.031,292.910 630.093,294.902 L626.156,298.910 C622.968,295.839 621.375,292.078 621.375,287.625 C621.375,284.601 622.171,281.800 623.765,279.222 L623.765,279.222 Z", fill: "#0F9EE2" })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section6.blocks[2]
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter5;
	}(_react2.default.Component);

	Chapter5.needs = [_chapterActions.fetchChapter];

	Chapter5.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter5);

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _DonutChart = __webpack_require__(680);

	var _DonutChart2 = _interopRequireDefault(_DonutChart);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter6 = function (_React$Component) {
	  _inherits(Chapter6, _React$Component);

	  function Chapter6(props) {
	    _classCallCheck(this, Chapter6);

	    return _possibleConstructorReturn(this, (Chapter6.__proto__ || Object.getPrototypeOf(Chapter6)).call(this, props));
	  }

	  _createClass(Chapter6, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Strategic Aim 3");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["strategic-aim-3"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["strategic-aim-3"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["strategic-aim-3"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];
	      var section3 = chapter.sections[2];
	      var section4 = chapter.sections[3];
	      var section5 = chapter.sections[4];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-6.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4", "scroll-target-section5"] }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section1" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[0]
	              ),
	              _react2.default.createElement(
	                "ul",
	                null,
	                section1.blocks[1].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
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
	                section1.blocks[2].title
	              ),
	              _react2.default.createElement(
	                "svg",
	                { width: "100%", height: "560px", viewBox: "0 0 1000 560" },
	                _react2.default.createElement(
	                  "g",
	                  { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", fontFamily: "Roboto" },
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(820, 10)" },
	                    _react2.default.createElement("path", { d: "M60,120 C93.137,120 120,93.137 120,60 C120,26.862 93.137,0 60,0 C26.862,0 0,26.862 0,60 C0,93.137 26.862,120 60,120 Z", fill: "#D8D8D8" }),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(41.116, 75.580) rotate(-345) translate(-41.116, -75.580) translate(32.616, 72.080)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M14.005,2.833 L8.672,2.833 C8.488,2.833 8.338,2.686 8.338,2.5 C8.338,2.32 8.488,2.166 8.672,2.166 L14.005,2.166 C14.19,2.166 14.338,2.32 14.338,2.5 C14.338,2.686 14.19,2.833 14.005,2.833 L14.005,2.833 Z M7.338,6.166 L2.672,6.166 C1.569,6.166 0.672,5.273 0.672,4.166 L0.672,3.5 C0.672,2.400 1.569,1.5 2.672,1.5 L7.338,1.5 L7.338,6.166 L7.338,6.166 Z M13.338,0.833 L2.672,0.833 C1.202,0.833 0.005,2.033 0.005,3.5 L0.005,4.166 C0.005,5.64 1.202,6.833 2.672,6.833 L13.338,6.833 C14.809,6.833 16.005,5.64 16.005,4.166 L16.005,3.5 C16.005,2.033 14.809,0.833 13.338,0.833 L13.338,0.833 Z" })
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(52.5, 84.5) rotate(-30) translate(-52.5, -84.5) translate(44, 81)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M14.005,2.833 L8.672,2.833 C8.488,2.833 8.338,2.686 8.338,2.5 C8.338,2.32 8.488,2.166 8.672,2.166 L14.005,2.166 C14.19,2.166 14.338,2.32 14.338,2.5 C14.338,2.686 14.19,2.833 14.005,2.833 L14.005,2.833 Z M7.338,6.166 L2.672,6.166 C1.569,6.166 0.672,5.273 0.672,4.166 L0.672,3.5 C0.672,2.400 1.569,1.5 2.672,1.5 L7.338,1.5 L7.338,6.166 L7.338,6.166 Z M13.338,0.833 L2.672,0.833 C1.202,0.833 0.005,2.033 0.005,3.5 L0.005,4.166 C0.005,5.64 1.202,6.833 2.672,6.833 L13.338,6.833 C14.809,6.833 16.005,5.64 16.005,4.166 L16.005,3.5 C16.005,2.033 14.809,0.833 13.338,0.833 L13.338,0.833 Z" })
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(41.5, 45) rotate(-15) translate(-41.5, -45) translate(23, 36)" },
	                      _react2.default.createElement("path", { d: "M35.016,17.5 L1.016,17.5 C0.464,17.5 0.016,17.062 0.016,16.5 L0.016,10.5 C0.016,9.962 0.464,9.5 1.016,9.5 L35.016,9.5 C35.57,9.5 36.016,9.962 36.016,10.5 L36.016,16.5 C36.016,17.062 35.57,17.5 35.016,17.5 L35.016,17.5 Z M2.931,2.102 C2.659,1.613 2.824,0.995 3.299,0.731 C3.781,0.444 4.392,0.607 4.665,1.097 C5.392,2.346 4.587,3.890 3.876,5.252 C3.591,5.799 3.109,6.724 3.135,7.021 C3.414,7.489 3.231,8.061 2.750,8.348 C2.525,8.472 2.264,8.487 2.024,8.423 C1.758,8.352 1.515,8.183 1.368,7.935 C0.770,6.886 1.415,5.651 2.103,4.321 C2.400,3.761 3.109,2.398 2.931,2.102 L2.931,2.102 Z M6.931,2.102 C6.659,1.613 6.824,0.995 7.299,0.731 C7.781,0.444 8.392,0.607 8.665,1.097 C9.392,2.346 8.587,3.890 7.876,5.252 C7.591,5.799 7.109,6.724 7.135,7.021 C7.414,7.489 7.231,8.061 6.750,8.348 C6.525,8.472 6.264,8.487 6.024,8.423 C5.758,8.352 5.515,8.183 5.368,7.935 C4.770,6.886 5.415,5.651 6.103,4.321 C6.400,3.761 7.109,2.398 6.931,2.102 L6.931,2.102 Z", fill: "#786A65" }),
	                      _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "2.016 11.5 26.016 11.5 26.016 15.5 2.016 15.5" }),
	                      _react2.default.createElement("polygon", { fill: "#786A65", points: "28.016 11.5 34.016 11.5 34.016 15.5 28.016 15.5" })
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(70, 27)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M19.412,60.35 L2.12,60.35 C1.432,60.35 0.872,59.8 0.87,59.125 L0.78,26 C0.775,24.525 1.372,23.052 2.42,22.025 C3.47,20.975 4.92,20.35 6.4,20.35 L7.017,20.35 L7.017,7.85 L5.767,7.85 C5.075,7.85 4.517,7.3 4.517,6.6 L4.517,1.6 C4.517,0.925 5.075,0.35 5.767,0.35 L15.767,0.35 C16.457,0.35 17.017,0.925 17.017,1.6 L17.017,6.6 C17.017,7.3 16.457,7.85 15.767,7.85 L14.517,7.85 L14.517,20.35 L15.135,20.35 C16.615,20.35 18.065,20.975 19.112,22.025 C20.162,23.052 20.76,24.525 20.755,26 L20.662,59.125 C20.66,59.8 20.102,60.35 19.412,60.35" })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(660, 10)" },
	                    _react2.default.createElement("path", { d: "M60,120 C93.137,120 120,93.137 120,60 C120,26.862 93.137,0 60,0 C26.862,0 0,26.862 0,60 C0,93.137 26.862,120 60,120 Z", fill: "#D8D8D8" }),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(35, 11)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M11.024,34.5 C4.958,34.5 0.024,29.56 0.024,23.5 C0.024,17.52 4.832,12.64 10.79,12.522 C12.97,5.42 19.53,0.522 27.026,0.522 C36.398,0.522 44.024,8.14 44.024,17.52 C44.024,17.702 44.016,17.88 44.006,18.06 C46.5,19.72 48.024,22.52 48.024,25.5 C48.024,30.46 43.986,34.5 39.024,34.5 L11.024,34.5 Z" })
	                    ),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(51, 59)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M9.016,14.538 C12.876,14.538 16.016,11.396 16.016,7.538 C16.016,3.678 12.876,0.538 9.016,0.538 C5.156,0.538 2.016,3.678 2.016,7.538 C2.016,11.396 5.156,14.538 9.016,14.538" }),
	                      _react2.default.createElement("path", { d: "M13.996,16.506 L4.04,16.506 C1.82,16.506 0.016,18.24 0.02,20.446 L2.088,48.506 L8.016,48.506 L8.016,36.506 C8.016,35.954 8.464,35.506 9.016,35.506 C9.57,35.506 10.016,35.954 10.016,36.506 L10.016,48.506 L15.946,48.506 L18.016,20.374 C18.016,18.24 16.212,16.506 13.996,16.506" })
	                    ),
	                    _react2.default.createElement("path", { d: "M41.552,59 L41.552,61.990 C41.552,62.548 41.111,63 40.559,63 L39.878,63 C39.330,63 39.131,62.630 39.438,62.171 L41.552,59 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M40.552,51 L40.552,53.990 C40.552,54.548 40.111,55 39.559,55 L38.878,55 C38.330,55 38.131,54.630 38.438,54.171 L40.552,51 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M49.552,48 L49.552,50.990 C49.552,51.548 49.111,52 48.559,52 L47.878,52 C47.330,52 47.131,51.630 47.438,51.171 L49.552,48 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M53.552,54 L53.552,56.990 C53.552,57.548 53.111,58 52.559,58 L51.878,58 C51.330,58 51.131,57.630 51.438,57.171 L53.552,54 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M59.552,49 L59.552,51.990 C59.552,52.548 59.111,53 58.559,53 L57.878,53 C57.330,53 57.131,52.630 57.438,52.171 L59.552,49 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M73.552,49 L73.552,51.990 C73.552,52.548 73.111,53 72.559,53 L71.878,53 C71.330,53 71.131,52.630 71.438,52.171 L73.552,49 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M65.552,53 L65.552,55.990 C65.552,56.548 65.111,57 64.559,57 L63.878,57 C63.330,57 63.131,56.630 63.438,56.171 L65.552,53 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M75.552,62 L75.552,64.990 C75.552,65.548 75.111,66 74.559,66 L73.878,66 C73.330,66 73.131,65.630 73.438,65.171 L75.552,62 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M76.552,71 L76.552,73.990 C76.552,74.548 76.111,75 75.559,75 L74.878,75 C74.330,75 74.131,74.630 74.438,74.171 L76.552,71 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M71.552,57 L71.552,59.990 C71.552,60.548 71.111,61 70.559,61 L69.878,61 C69.330,61 69.131,60.630 69.438,60.171 L71.552,57 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M78.552,52 L78.552,54.990 C78.552,55.548 78.111,56 77.559,56 L76.878,56 C76.330,56 76.131,55.630 76.438,55.171 L78.552,52 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M47.552,65 L47.552,67.990 C47.552,68.548 47.111,69 46.559,69 L45.878,69 C45.330,69 45.131,68.630 45.438,68.171 L47.552,65 Z", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M40.552,70 L40.552,72.990 C40.552,73.548 40.111,74 39.559,74 L38.878,74 C38.330,74 38.131,73.630 38.438,73.171 L40.552,70 Z", fill: "#786A65" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(20, 10)" },
	                    _react2.default.createElement("circle", { fill: "#D8D8D8", cx: "60", cy: "60", r: "60" }),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(28, 27)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M12.021,19.050 C17.168,19.050 21.354,14.861 21.354,9.717 C21.354,4.570 17.168,0.384 12.021,0.384 C6.874,0.384 2.688,4.570 2.688,9.717 C2.688,14.861 6.874,19.050 12.021,19.050" }),
	                      _react2.default.createElement("path", { d: "M18.661,21.674 L5.386,21.674 C2.426,21.674 0.021,23.986 0.026,26.928 L2.784,64.341 L10.688,64.341 L10.688,48.341 C10.688,47.605 11.285,47.008 12.021,47.008 C12.76,47.008 13.354,47.605 13.354,48.341 L13.354,64.341 L21.261,64.341 L24.021,26.832 C24.021,23.986 21.616,21.674 18.661,21.674" })
	                    ),
	                    _react2.default.createElement("polygon", { fill: "#786A65", points: "77.014 56.050 85.012 41.343 95.120 41.343 82.698 62.496 95.442 84 85.217 84 77.014 69.058 68.811 84 58.586 84 71.331 62.496 58.909 41.343 69.016 41.343" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(180, 10)" },
	                    _react2.default.createElement("circle", { fill: "#D8D8D8", cx: "60", cy: "60", r: "60" }),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(39, 11)", fill: "#786A65" },
	                      _react2.default.createElement("path", { d: "M18.032,28.076 C25.752,28.076 32.032,21.792 32.032,14.076 C32.032,6.356 25.752,0.076 18.032,0.076 C10.312,0.076 4.032,6.356 4.032,14.076 C4.032,21.792 10.312,28.076 18.032,28.076" }),
	                      _react2.default.createElement("path", { d: "M27.992,32.012 L8.08,32.012 C3.64,32.012 0.032,35.48 0.04,39.892 L4.176,96.012 L16.032,96.012 L16.032,72.012 C16.032,70.908 16.928,70.012 18.032,70.012 C19.14,70.012 20.032,70.908 20.032,72.012 L20.032,96.012 L31.892,96.012 L36.032,39.748 C36.032,35.48 32.424,32.012 27.992,32.012" })
	                    ),
	                    _react2.default.createElement("rect", { fill: "#786A65", x: "77", y: "51", width: "4", height: "56" }),
	                    _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "59 85 75 82 75 84 59 87" }),
	                    _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "59 90 75 87 75 89 59 92" }),
	                    _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "59 95 75 92 75 94 59 97" }),
	                    _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "59 100 75 97 75 99 59 102" }),
	                    _react2.default.createElement("polygon", { fill: "#D8D8D8", points: "59 105 75 102 75 104 59 107" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(340, 10)" },
	                    _react2.default.createElement("circle", { fill: "#D8D8D8", cx: "60", cy: "60", r: "60" }),
	                    _react2.default.createElement(
	                      "g",
	                      { transform: "translate(39, 13)" },
	                      _react2.default.createElement("path", { d: "M40.58,75.124 L37.032,54.56 L37.032,36.444 C37.032,30.88 32.264,26 26.828,26 L14.58,26 C9.312,26 5.032,30.684 5.032,36.444 L5.032,54.36 L0.556,75.6 C0.428,76.2 0.58,76.8 0.96,77.28 C1.34,77.724 1.912,78 2.516,78 L9.032,78 L9.032,92 C9.032,93.124 9.928,94 11.032,94 L31.032,94 C32.14,94 33.032,93.124 33.032,92 L33.032,78 L38.7,78 L38.744,78 C39.86,78.04 40.78,77.124 40.78,76 C40.78,75.684 40.712,75.4 40.58,75.124", fill: "#786A65" }),
	                      _react2.default.createElement("path", { d: "M20.7,24.56 C27.32,24.56 32.7,19.2 32.7,12.56 C32.7,5.96 27.32,0.56 20.7,0.56 C14.084,0.56 8.7,5.96 8.7,12.56 C8.7,19.2 14.084,24.56 20.7,24.56", fill: "#786A65" }),
	                      _react2.default.createElement("path", { d: "M20.7,74.56 C27.32,74.56 32.7,69.2 32.7,62.56 C32.7,55.96 27.32,50.56 20.7,50.56 C14.084,50.56 8.7,55.96 8.7,62.56 C8.7,69.2 14.084,74.56 20.7,74.56", fill: "#D8D8D8" })
	                    ),
	                    _react2.default.createElement("circle", { fill: "#786A65", cx: "65", cy: "71", r: "3" }),
	                    _react2.default.createElement("path", { d: "M57.591,69.813 C58.066,69.536 58.692,69.682 59.001,70.155 L61.170,73.474 L65.085,74.855 C66.125,75.221 66.607,76.346 66.166,77.354 L63.855,82.646 C63.412,83.660 62.164,84.482 61.054,84.482 L61.207,84.482 C59.550,84.482 57.522,83.318 56.683,81.893 L55.600,80.054 L52.826,82.075 C52.376,82.403 51.731,82.320 51.384,81.889 L51.028,81.447 C50.682,81.017 50.726,80.365 51.135,79.984 L54.866,76.510 C55.272,76.133 55.923,76.133 56.332,76.520 L58.972,79.019 L59.793,79.019 L61.170,76.438 L58.689,74.679 L56.926,71.367 C56.664,70.875 56.837,70.252 57.311,69.976 L57.591,69.813 Z", fill: "#786A65" })
	                  ),
	                  _react2.default.createElement(
	                    "g",
	                    { transform: "translate(500, 10)" },
	                    _react2.default.createElement("circle", { fill: "#D8D8D8", cx: "60", cy: "60", r: "60" }),
	                    _react2.default.createElement("path", { d: "M59.837,21.867 C52.749,21.867 49.180,24.867 49.180,24.867 L43,39.183 C43,39.183 46.948,32.286 59.802,32.308 C72.655,32.331 76.913,39.183 76.913,39.183 L70.760,24.867 C70.760,24.867 66.060,21.867 59.837,21.867 Z", stroke: "#D8D8D8", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M80.937,87.804 L74.945,98.132 C74.945,98.132 47.756,54.460 43,39.155 L49.154,24.867 C53.034,42.160 80.937,87.804 80.937,87.804 L80.937,87.804 Z", stroke: "#D8D8D8", fill: "#786A65" }),
	                    _react2.default.createElement("path", { d: "M39,87.804 L44.992,98.132 C44.992,98.132 72.181,54.460 76.937,39.155 L70.783,24.867 C66.903,42.160 39,87.804 39,87.804 Z", stroke: "#D8D8D8", fill: "#786A65" })
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "62.943", y: "158" },
	                      section1.blocks[2].dataset.consequences[0]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "197.073", y: "158" },
	                      section1.blocks[2].dataset.consequences[1]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "399", y: "158", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[2][0]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "399", y: "173", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[2][1]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "399", y: "188", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[2][2]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "550", y: "158", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[3][0]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "550", y: "173", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[3][1]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "550", y: "188", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[3][2]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "550", y: "203", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[3][3]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "720", y: "158", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[4][0]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "720", y: "173", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[4][1]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "720", y: "188", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[4][2]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "13", fontWeight: "bold", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "880", y: "158", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[5][0]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "880", y: "173", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[5][1]
	                    ),
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "880", y: "188", textAnchor: "middle" },
	                      section1.blocks[2].dataset.consequences[5][2]
	                    )
	                  ),
	                  _react2.default.createElement("polyline", { stroke: "#F1F0EF", strokeWidth: "4", points: "834 266 834 246 484 246 484 266" }),
	                  _react2.default.createElement("polyline", { stroke: "#F1F0EF", strokeWidth: "4", points: "475 266 475 246 180 246 180 226" }),
	                  _react2.default.createElement("polyline", { stroke: "#F1F0EF", strokeWidth: "4", points: "940 226 940 246 844 246 844 266" }),
	                  _react2.default.createElement("polyline", { stroke: "#F1F0EF", strokeWidth: "4", points: "20 226 20 246 115 246 115 266" }),
	                  _react2.default.createElement("polyline", { stroke: "#F1F0EF", strokeWidth: "4", points: "140 226 140 246 125 246 125 266" }),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "45", fontWeight: "bold", fill: "#EE3224" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "67.935", y: "488" },
	                      section1.blocks[2].dataset.summaries[0].number
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "49.521", y: "534" },
	                      section1.blocks[2].dataset.summaries[0].text
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "45", fontWeight: "bold", fill: "#0F9EE3" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "434.483", y: "488" },
	                      section1.blocks[2].dataset.summaries[1].number
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "367.788", y: "534" },
	                      section1.blocks[2].dataset.summaries[1].text
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "45", fontWeight: "bold", textAnchor: "middle", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "860.330", y: "488" },
	                      section1.blocks[2].dataset.summaries[2].number
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "120", fontWeight: "bold", fill: "#F1F0EF" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "810.146", y: "407" },
	                      "?"
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "text",
	                    { fontSize: "20", fontWeight: "bold", fillOpacity: "0.5", fill: "#786A65" },
	                    _react2.default.createElement(
	                      "tspan",
	                      { x: "806.445", y: "534" },
	                      section1.blocks[2].dataset.summaries[2].text
	                    )
	                  ),
	                  _react2.default.createElement("rect", { fill: "#0F9EE3", x: "470", y: "316", width: "20", height: "120" }),
	                  _react2.default.createElement("rect", { fill: "#EE3224", x: "110", y: "426", width: "20", height: "10" })
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement("hr", null),
	              _react2.default.createElement(_DonutChart2.default, {
	                title: section1.blocks[3].title,
	                caption: section1.blocks[3].caption,
	                maxSize: 480,
	                dataset: section1.blocks[3].dataset })
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
	                "h4",
	                { className: "title strong" },
	                section2.blocks[1].title
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "clearfix" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col xs-6" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement("img", { src: section2.blocks[1].items[0].img })
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 strong color-primary m0" },
	                      section2.blocks[1].items[0].number
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "title strong m0" },
	                      section2.blocks[1].items[0].text[0]
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section2.blocks[1].items[0].text[1]
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col xs-6" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement("img", { src: section2.blocks[1].items[1].img })
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 strong color-primary m0" },
	                      section2.blocks[1].items[1].number
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "title strong m0" },
	                      section2.blocks[1].items[1].text[0]
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section2.blocks[1].items[1].text[1]
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "clearfix" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "col xs-6" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement("img", { src: section2.blocks[1].items[2].img })
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 strong color-primary m0" },
	                      section2.blocks[1].items[2].number
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "title strong m0" },
	                      section2.blocks[1].items[2].text[0]
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section2.blocks[1].items[2].text[1]
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "col xs-6" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement("img", { src: section2.blocks[1].items[3].img })
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6" },
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 strong color-primary m0" },
	                      section2.blocks[1].items[3].number
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "title strong m0" },
	                      section2.blocks[1].items[3].text[0]
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section2.blocks[1].items[3].text[1]
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "ul",
	                null,
	                section2.blocks[2].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3" },
	              _react2.default.createElement(
	                "div",
	                { className: "bg-secondary p2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong color-primary caps mb0" },
	                  "Case Study"
	                ),
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong mt0" },
	                  section2.blocks[3].title
	                ),
	                _react2.default.createElement(
	                  "svg",
	                  { width: "140px", height: "109px", viewBox: "0 0 140 109", style: { margin: "0 auto", display: "block" } },
	                  _react2.default.createElement(
	                    "g",
	                    { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
	                    _react2.default.createElement("polygon", { fill: "#A8A09C", points: "90.737 12.380 97.665 12.380 97.665 10 102.774 10 101.889 12.824 101.334 16.642 102.438 25.096 109.358 30.788 110.455 34.384 109.303 37.943 111.101 37.943 111.643 47.404 108.061 49.465 105.896 48.527 102.474 48.923 102.487 51.858 100.279 53.795 101.445 55.343 106.880 55.843 112.876 63.784 117.915 66.276 123.780 79.442 128.757 80.380 128.818 84.857 130.373 87.446 127.326 87.446 126.369 85.085 123.940 84.038 115.028 87.369 105.838 96.489 102.507 96.489 100.646 95.330 92.345 97.815 88.292 96.289 84.856 97.233 81.483 96.289 78.548 98.961 68.198 90.846 67.699 88.596 64.492 87.042 62.256 90.013 57.099 88.632 53.553 90.957 46.619 87.904 41.379 79.978 41.545 78.005 39.935 75.569 33.404 72.467 33.890 71.086 31.794 69.149 33.009 66.824 29.857 64.388 29.413 62.743 22.369 59.585 20.655 56.829 21.918 55.683 20.932 53.746 18.995 53.247 16.837 50.922 11.985 49.922 10 48.554 11.047 45.861 10.166 44.535 14.087 42.994 16.024 38.066 17.281 36.351 17.170 34.304 19.266 31.923 20.100 29.000 27.934 27.668 35.743 37.322 40.948 35.892 48.547 36.336 50.373 39.154 58.416 39.425 57.764 38.377 64.641 34.886 65.994 31.839 69.700 30.013 77.460 35.157 82.235 35.107 89.376 26.300 94.276 21.359 93.067 19.700 93.512 16.118" })
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { style: { fontSize: "16px" } },
	                  section2.blocks[3].content
	                )
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[1]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[2]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[3]
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3" },
	              _react2.default.createElement(
	                "div",
	                { className: "bg-secondary p2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong color-primary caps mb0" },
	                  "Case Study"
	                ),
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong mt0" },
	                  section3.blocks[4].title
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { style: { fontSize: "16px" } },
	                  section3.blocks[4].content
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section4" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2" },
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
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[1]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[2]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[3]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[4]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section5.blocks[5]
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-3 md-offset-0 lg-3" },
	              _react2.default.createElement(
	                "h4",
	                { className: "title strong mt0" },
	                section5.blocks[6].title
	              ),
	              _react2.default.createElement(
	                "p",
	                { style: { fontSize: "16px" } },
	                section5.blocks[6].caption
	              ),
	              section5.blocks[6].items.map(function (item, k) {
	                return _react2.default.createElement(
	                  "div",
	                  { className: "clearfix pb1", key: k },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-4 center display-1" },
	                    _react2.default.createElement(
	                      "div",
	                      { className: "bg-primary", style: { borderRadius: "50%", width: "60px", height: "60px", margin: "0 auto", lineHeight: "60px" } },
	                      k + 1
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-8" },
	                    item
	                  )
	                );
	              })
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter6;
	}(_react2.default.Component);

	Chapter6.needs = [_chapterActions.fetchChapter];

	Chapter6.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter6);

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _chapterActions = __webpack_require__(420);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _SimpleBarChart = __webpack_require__(679);

	var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

	var _DonutChart = __webpack_require__(680);

	var _DonutChart2 = _interopRequireDefault(_DonutChart);

	var _ScatterChart = __webpack_require__(684);

	var _ScatterChart2 = _interopRequireDefault(_ScatterChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter7 = function (_React$Component) {
	  _inherits(Chapter7, _React$Component);

	  function Chapter7(props) {
	    _classCallCheck(this, Chapter7);

	    return _possibleConstructorReturn(this, (Chapter7.__proto__ || Object.getPrototypeOf(Chapter7)).call(this, props));
	  }

	  _createClass(Chapter7, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Enabling Action 1");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["enabling-action-1"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["enabling-action-1"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["enabling-action-1"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];
	      var section3 = chapter.sections[2];
	      var section4 = chapter.sections[3];

	      var scatterDimensions = this.props.scatterChartDimensions;

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-7.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4"] }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section1" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[0]
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  section1.blocks[1].title
	                ),
	                _react2.default.createElement("img", { src: section1.blocks[1].src }),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  section1.blocks[1].caption
	                )
	              ),
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
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-6 lg-offset-2" },
	              _react2.default.createElement(
	                "h4",
	                { className: "title strong" },
	                section1.blocks[4].title
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
	                      { style: { width: "16%" } },
	                      "&nbsp"
	                    ),
	                    _react2.default.createElement(
	                      "th",
	                      { style: { width: "42%" } },
	                      section1.blocks[4].headings[0]
	                    ),
	                    _react2.default.createElement(
	                      "th",
	                      { style: { width: "42%" } },
	                      section1.blocks[4].headings[1]
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "tbody",
	                  null,
	                  section1.blocks[4].dataset.map(function (item, i) {
	                    return item.length === 1 ? _react2.default.createElement(
	                      "tr",
	                      null,
	                      _react2.default.createElement(
	                        "td",
	                        { className: "p0" },
	                        "&nbsp"
	                      ),
	                      _react2.default.createElement(
	                        "td",
	                        { colSpan: "2", className: "center p0 py1" },
	                        _react2.default.createElement("hr", null),
	                        _react2.default.createElement(
	                          "div",
	                          { className: "py1" },
	                          item[0]
	                        ),
	                        _react2.default.createElement("hr", null)
	                      )
	                    ) : _react2.default.createElement(
	                      "tr",
	                      { key: i },
	                      _react2.default.createElement(
	                        "td",
	                        null,
	                        item[0]
	                      ),
	                      _react2.default.createElement(
	                        "td",
	                        null,
	                        item[1]
	                      ),
	                      _react2.default.createElement(
	                        "td",
	                        null,
	                        item[2]
	                      )
	                    );
	                  }),
	                  _react2.default.createElement(
	                    "tr",
	                    null,
	                    _react2.default.createElement(
	                      "td",
	                      { colSpan: "3" },
	                      "&nbsp"
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "p",
	                { className: "small" },
	                section1.blocks[4].caption
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
	                section1.blocks[5]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
	              _react2.default.createElement(_ScatterChart2.default, {
	                title: section1.blocks[6].title,
	                caption: section1.blocks[6].caption,
	                width: this.props.scatterChartDimensions.width,
	                height: this.props.scatterChartDimensions.height,
	                padding: this.props.scatterChartDimensions.padding,
	                dataset: section1.blocks[6].dataset,
	                legend: section1.blocks[6].legend
	              })
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
	                section1.blocks[7]
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
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section2.blocks[1]
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0" },
	              _react2.default.createElement("img", { src: "/img/chapters/7/bridging-the-technical-divide.jpg", width: "100%", height: "auto" }),
	              _react2.default.createElement(
	                "p",
	                { className: "small" },
	                section2.blocks[2].caption
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[1]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[2]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[3]
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3" },
	              _react2.default.createElement(
	                "div",
	                { className: "bg-secondary p2" },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small strong color-primary caps mb0" },
	                  "Case Study"
	                ),
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong mt0" },
	                  section3.blocks[4].title
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { style: { fontSize: "16px" } },
	                  section3.blocks[4].content
	                )
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  section4.blocks[1].title
	                ),
	                _react2.default.createElement(
	                  "div",
	                  { className: "clearfix" },
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6 center px1" },
	                    _react2.default.createElement(_DonutChart2.default, {
	                      maxSize: 300,
	                      dataset: section4.blocks[1].dataset[0] }),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 color-primary" },
	                      "50%"
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section4.blocks[1].captions[0]
	                    )
	                  ),
	                  _react2.default.createElement(
	                    "div",
	                    { className: "col sm-6 center px1" },
	                    _react2.default.createElement(_DonutChart2.default, {
	                      maxSize: 300,
	                      dataset: section4.blocks[1].dataset[1] }),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "display-1 color-primary" },
	                      "18%"
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      section4.blocks[1].captions[1]
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section4.blocks[2]
	              ),
	              _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(_SimpleBarChart2.default, {
	                  title: section4.blocks[3].title,
	                  caption: section4.blocks[3].caption,
	                  horizontal: true,
	                  height: 420,
	                  padding: {
	                    top: 40,
	                    bottom: 40,
	                    left: 30,
	                    right: 120
	                  },
	                  data: [{ y: 0, x: section4.blocks[3].dataset[0].name }, { y: 116, x: String(section4.blocks[3].dataset[0].number) }, { y: 0, x: section4.blocks[3].dataset[1].name }, { y: 89, x: String(section4.blocks[3].dataset[1].number) }, { y: 0, x: section4.blocks[3].dataset[2].name }, { y: 69, x: String(section4.blocks[3].dataset[2].number) }, { y: 0, x: section4.blocks[3].dataset[3].name }, { y: 108, x: String(section4.blocks[3].dataset[3].number) }, { y: 0, x: section4.blocks[3].dataset[4].name }, { y: 76, x: String(section4.blocks[3].dataset[4].number) }, { y: 0, x: section4.blocks[3].dataset[5].name }, { y: 110, x: String(section4.blocks[3].dataset[5].number) }, { y: 0, x: section4.blocks[3].dataset[6].name }, { y: 92, x: String(section4.blocks[3].dataset[6].number) }],
	                  labels: function labels(datum) {
	                    return datum.xName;
	                  }
	                })
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section4.blocks[4]
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter7;
	}(_react2.default.Component);

	Chapter7.needs = [_chapterActions.fetchChapter];

	Chapter7.defaultProps = {
	  scatterChartDimensions: {
	    width: 840,
	    height: 560,
	    padding: {
	      top: 30,
	      bottom: 100,
	      left: 120,
	      right: 30
	    }
	  }
	};

	Chapter7.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter7);

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _victory = __webpack_require__(423);

	var _ChartTooltip = __webpack_require__(653);

	var _ChartTooltip2 = _interopRequireDefault(_ChartTooltip);

	var _numberFormatter = __webpack_require__(411);

	var _numberFormatter2 = _interopRequireDefault(_numberFormatter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//
	// viewBox={`0 0 ${this.state.width} ${this.state.height}`}
	//

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

	var ScatterChart = function (_React$Component) {
	  _inherits(ScatterChart, _React$Component);

	  function ScatterChart(props) {
	    _classCallCheck(this, ScatterChart);

	    var _this = _possibleConstructorReturn(this, (ScatterChart.__proto__ || Object.getPrototypeOf(ScatterChart)).call(this, props));

	    _this.state = {
	      width: _this.props.width,
	      height: _this.props.height,
	      padding: {
	        top: _this.props.padding.top,
	        bottom: _this.props.padding.bottom,
	        left: _this.props.padding.left,
	        right: _this.props.padding.right
	      },
	      tooltipContent: 'Tooltip Content',
	      tooltipVisible: false,
	      tooltipPosition: [],
	      tooltipParentPosition: []
	    };

	    _this.resizeChart = _this.resizeChart.bind(_this);
	    return _this;
	  }

	  _createClass(ScatterChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.resizeChart();
	      window.addEventListener('resize', this.resizeChart);
	    }
	  }, {
	    key: 'resizeChart',
	    value: function resizeChart() {
	      var width = this.refs.visualizationWrapper.clientWidth;
	      this.setState({
	        width: width,
	        height: width / 3 * 2
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
	        null,
	        _react2.default.createElement(
	          'h4',
	          { className: 'title strong' },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'div',
	          { ref: 'visualizationWrapper', style: { position: 'relative' } },
	          _react2.default.createElement(
	            'svg',
	            { width: this.state.width, height: this.state.height, style: { background: '#fff' } },
	            _react2.default.createElement('rect', { x: this.state.padding.left, y: this.state.padding.top, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: '#EEEDEC' }),
	            _react2.default.createElement('rect', { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.padding.top, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: '#FBFAF9' }),
	            _react2.default.createElement('rect', { x: this.state.padding.left, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: '#FBFAF9' }),
	            _react2.default.createElement('rect', { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, width: (this.state.width - this.state.padding.left - this.state.padding.right) / 2, height: (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2, fill: '#EEEDEC' }),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: this.state.padding.left - 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 4 * 3,
	                textAnchor: 'end',
	                verticalAnchor: 'middle',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'Low'
	            ),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: this.state.padding.left - 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 4,
	                textAnchor: 'end',
	                verticalAnchor: 'middle',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'High'
	            ),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 4, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 50,
	                textAnchor: 'middle',
	                verticalAnchor: 'start',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'Low'
	            ),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 4 * 3, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 50,
	                textAnchor: 'middle',
	                verticalAnchor: 'start',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'High'
	            ),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: 20, y: this.state.padding.top + (this.state.height - this.state.padding.top - this.state.padding.bottom) / 2,
	                textAnchor: 'start',
	                verticalAnchor: 'middle',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'OCAC\nscores'
	            ),
	            _react2.default.createElement(
	              _victory.VictoryLabel,
	              { x: this.state.padding.left + (this.state.width - this.state.padding.left - this.state.padding.right) / 2, y: this.state.height - this.state.padding.top - this.state.padding.bottom + 90,
	                textAnchor: 'middle',
	                verticalAnchor: 'start',
	                lineHeight: 1.5,
	                style: { fontSize: '13px' } },
	              'Gross domestic product per capita (US dollar, log scale)'
	            ),
	            _react2.default.createElement(_victory.VictoryScatter, {
	              width: this.state.width,
	              height: this.state.height,
	              padding: {
	                top: this.state.padding.top,
	                bottom: this.state.padding.bottom,
	                left: this.state.padding.left,
	                right: this.state.padding.right
	              },
	              standalone: false,
	              scale: { x: 'linear', y: 'linear' },
	              domain: { y: [0, 100], x: [2, 5] },
	              size: 4,
	              style: {
	                data: {
	                  fill: 'transparent',
	                  strokeWidth: '3px'
	                }
	              },
	              data: this.props.dataset,
	              events: {
	                data: {
	                  onMouseEnter: function onMouseEnter(evt, props) {
	                    console.log('Entering item', evt, props);
	                    _this2.setState({
	                      // tooltipTitle: props.datum.name,
	                      tooltipTitle: props.datum.region,
	                      // tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
	                      tooltipContent: 'GDP/capita: $' + _numberFormatter2.default.addCommas(Math.round(props.datum.x_regular_gdp)) + '\nOCAC score: ' + props.datum.y + '%',
	                      tooltipVisible: true,
	                      // tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
	                      tooltipPosition: [props.position.y, props.position.x]
	                    });
	                  },
	                  onMouseLeave: function onMouseLeave() {
	                    console.log('Leaving item');
	                    _this2.setState({
	                      tooltipVisible: false
	                    });
	                  }
	                }
	              }
	            })
	          ),
	          _react2.default.createElement(
	            _ChartTooltip2.default,
	            { visible: this.state.tooltipVisible, position: this.state.tooltipPosition, parentPosition: this.state.tooltipParentPosition },
	            _react2.default.createElement(
	              'strong',
	              { className: 'small' },
	              this.state.tooltipTitle
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'span',
	              { className: 'small' },
	              this.state.tooltipContent
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'clearfix' },
	          this.props.legend.map(function (item, i) {
	            return _react2.default.createElement(
	              LegendItem,
	              { key: i, color: item.color, className: 'px1' },
	              item.name
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'p',
	          { className: 'small' },
	          this.props.caption
	        )
	      );
	    }
	  }]);

	  return ScatterChart;
	}(_react2.default.Component);

	module.exports = ScatterChart;

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _chapterActions = __webpack_require__(420);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _LineChart = __webpack_require__(422);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _WorldMap = __webpack_require__(654);

	var _WorldMap2 = _interopRequireDefault(_WorldMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter8 = function (_React$Component) {
	  _inherits(Chapter8, _React$Component);

	  function Chapter8(props) {
	    _classCallCheck(this, Chapter8);

	    return _possibleConstructorReturn(this, (Chapter8.__proto__ || Object.getPrototypeOf(Chapter8)).call(this, props));
	  }

	  _createClass(Chapter8, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Enabling Action 2");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["enabling-action-2"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["enabling-action-2"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "bubbleCallback",
	    value: function bubbleCallback(response) {
	      return [{
	        name: "Peru",
	        latitude: -9.189967,
	        longitude: -75.015152,
	        radius: 6,
	        fillKey: "bubbleFill"
	      }, {
	        name: "Jamaica",
	        latitude: 18.109581,
	        longitude: -77.297508,
	        radius: 6,
	        fillKey: "bubbleFill"
	      }, {
	        name: "Austria",
	        latitude: 47.516231,
	        longitude: 14.550072,
	        radius: 6,
	        fillKey: "bubbleFill"
	      }, {
	        name: "Indonesia",
	        latitude: -6.208763,
	        longitude: 106.845599,
	        radius: 6,
	        fillKey: "bubbleFill"
	      }];
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["enabling-action-2"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];
	      var section3 = chapter.sections[2];
	      var section4 = chapter.sections[3];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          { className: "clearfix bg-dark chapter-banner", style: { backgroundImage: "url(/img/chapters/chapter-8.jpg)", backgroundSize: "cover", backgroundPosition: "center 50%", backgroundRepeat: "no-repeat" } },
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4"] }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section1" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[0]
	              ),
	              _react2.default.createElement(
	                "ul",
	                null,
	                section1.blocks[1].map(function (item, i) {
	                  return _react2.default.createElement(
	                    "li",
	                    { key: i },
	                    item
	                  );
	                })
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[2]
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
	              _react2.default.createElement(_WorldMap2.default, {
	                title: section3.blocks[1].title,
	                caption: section3.blocks[1].caption,
	                bubbleSource: false,
	                bubbleCallback: this.bubbleCallback
	              }),
	              _react2.default.createElement(
	                "div",
	                { className: "clearfix" },
	                section3.blocks[1].items.map(function (item, i) {
	                  return _react2.default.createElement(
	                    "div",
	                    { key: i, className: "col md-6 lg-3 pr2" },
	                    _react2.default.createElement(
	                      "p",
	                      { className: "subhead strong" },
	                      item.country
	                    ),
	                    _react2.default.createElement(
	                      "p",
	                      { className: "small" },
	                      item.text
	                    )
	                  );
	                })
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
	                section3.blocks[2]
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2" },
	              _react2.default.createElement(_LineChart2.default, {
	                title: section4.blocks[1].title,
	                caption: section4.blocks[1].caption,
	                height: 480,
	                padding: {
	                  top: 30,
	                  bottom: 40,
	                  left: 80,
	                  right: 60
	                },
	                domain: {
	                  x: [new Date(2009, 1, 1), new Date(2015, 1, 1)],
	                  y: [0, 25000000]
	                },
	                axisLabels: section4.blocks[1].axisLabels,
	                dataset: [[{ x: new Date(2010, 1, 1), y: 7444228 }, { x: new Date(2011, 1, 1), y: 8561015 }, { x: new Date(2012, 1, 1), y: 8590604 }, { x: new Date(2013, 1, 1), y: 9766893 }, { x: new Date(2014, 1, 1), y: 8884783 }], [{ x: new Date(2010, 1, 1), y: 1507782 }, { x: new Date(2011, 1, 1), y: 2422085 }, { x: new Date(2012, 1, 1), y: 2653814 }, { x: new Date(2013, 1, 1), y: 4020726 }, { x: new Date(2014, 1, 1), y: 2938558 }], [{ x: new Date(2013, 1, 1), y: 12998671 }, { x: new Date(2014, 1, 1), y: 23268122 }], [{ x: new Date(2013, 1, 1), y: 4779438 }, { x: new Date(2014, 1, 1), y: 11612597 }], [{ x: new Date(2010, 1, 1), y: 498454 }, { x: new Date(2011, 1, 1), y: 522033 }, { x: new Date(2012, 1, 1), y: 448753 }, { x: new Date(2013, 1, 1), y: 464628 }, { x: new Date(2014, 1, 1), y: 539588 }], [{ x: new Date(2013, 1, 1), y: 145000 }, { x: new Date(2014, 1, 1), y: 310000 }]],
	                labels: section4.blocks[1].lineLabels
	              })
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section4.blocks[2]
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_NextChapter2.default, { nextChapter: chapter.nextChapter })
	      );
	    }
	  }]);

	  return Chapter8;
	}(_react2.default.Component);

	Chapter8.needs = [_chapterActions.fetchChapter];

	Chapter8.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter8);

/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(221);

	var _victory = __webpack_require__(423);

	var _chapterActions = __webpack_require__(420);

	var _NextChapter = __webpack_require__(421);

	var _NextChapter2 = _interopRequireDefault(_NextChapter);

	var _Breadcrumbs = __webpack_require__(414);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _HeadlineDivider = __webpack_require__(271);

	var _HeadlineDivider2 = _interopRequireDefault(_HeadlineDivider);

	var _SideNavigation = __webpack_require__(651);

	var _SideNavigation2 = _interopRequireDefault(_SideNavigation);

	var _SimpleBarChart = __webpack_require__(679);

	var _SimpleBarChart2 = _interopRequireDefault(_SimpleBarChart);

	var _LineChart = __webpack_require__(422);

	var _LineChart2 = _interopRequireDefault(_LineChart);

	var _DonutChart = __webpack_require__(680);

	var _DonutChart2 = _interopRequireDefault(_DonutChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chapter9 = function (_React$Component) {
	  _inherits(Chapter9, _React$Component);

	  function Chapter9(props) {
	    _classCallCheck(this, Chapter9);

	    return _possibleConstructorReturn(this, (Chapter9.__proto__ || Object.getPrototypeOf(Chapter9)).call(this, props));
	  }

	  _createClass(Chapter9, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounted Enabling Action 3");
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(newProps, newState, newContext) {
	      var newDataAvailable = newProps.content[newContext.language].chapters["enabling-action-3"] !== undefined;
	      var sameData = this.props.content[this.context.language].chapters["enabling-action-3"] === newProps.content[newContext.language].chapters["who-we-are"];
	      return newDataAvailable && !sameData;
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      var chapter = this.props.content[this.context.language].chapters["enabling-action-3"];

	      var section1 = chapter.sections[0];
	      var section2 = chapter.sections[1];
	      var section3 = chapter.sections[2];
	      var section4 = chapter.sections[3];
	      var section5 = chapter.sections[4];
	      var section6 = chapter.sections[5];
	      var section7 = chapter.sections[6];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "clearfix bg-primary-dark" },
	          _react2.default.createElement(
	            "div",
	            { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1" },
	            _react2.default.createElement(_Breadcrumbs2.default, { chapter: chapter, language: this.context.language })
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
	          _react2.default.createElement(_SideNavigation2.default, { title: chapter.title, sections: chapter.sections, sectionReferences: ["scroll-target-section1", "scroll-target-section2", "scroll-target-section3", "scroll-target-section4", "scroll-target-section5", "scroll-target-section6", "scroll-target-section7"] }),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section1" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[0]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section1.blocks[1]
	              ),
	              _react2.default.createElement(_DonutChart2.default, {
	                title: section1.blocks[2].title,
	                caption: section1.blocks[2].caption,
	                maxSize: 480,
	                dataset: section1.blocks[2].dataset }),
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
	                section2.blocks[1].caption
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-4 lg-offset-0 pb2" },
	              _react2.default.createElement(
	                "p",
	                null,
	                section2.blocks[2]
	              ),
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
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section3.blocks[1]
	              ),
	              _react2.default.createElement(_SimpleBarChart2.default, {
	                title: section3.blocks[2].title,
	                caption: section3.blocks[2].caption,
	                horizontal: true,
	                height: 300,
	                data: section3.blocks[2].dataset,
	                labels: function labels(datum) {
	                  return datum.xName + " (" + String(datum.y) + ")";
	                }
	              }),
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
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
	              _react2.default.createElement(
	                "h4",
	                { className: "title strong" },
	                section4.blocks[1].title
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
	                section4.blocks[1].caption
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" },
	              _react2.default.createElement(
	                "h4",
	                { className: "title strong" },
	                section4.blocks[2].title
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
	                section4.blocks[2].caption
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
	                section4.blocks[3]
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2" },
	              _react2.default.createElement(
	                "div",
	                { className: "bg-secondary p2" },
	                _react2.default.createElement(
	                  "h4",
	                  { className: "title strong" },
	                  section5.blocks[1]
	                ),
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
	              { className: "col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2" },
	              _react2.default.createElement(_SimpleBarChart2.default, {
	                title: section6.blocks[1].title,
	                caption: section6.blocks[1].caption,
	                horizontal: true,
	                height: 360,
	                data: section6.blocks[1].dataset,
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
	                section6.blocks[2]
	              ),
	              _react2.default.createElement(
	                "p",
	                null,
	                section6.blocks[3]
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
	                section6.blocks[4]
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
	                section6.blocks[5].title
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
	                section6.blocks[5].caption
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
	                section6.blocks[7]
	              ),
	              _react2.default.createElement(_LineChart2.default, {
	                title: section6.blocks[6].title,
	                caption: section6.blocks[6].caption,
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
	                axisLabels: section6.blocks[6].axisLabels,
	                dataset: [[{ x: new Date(2009, 1, 1), y: 1170 }, { x: new Date(2010, 1, 1), y: 9909 }, { x: new Date(2011, 1, 1), y: 25564 }, { x: new Date(2012, 1, 1), y: 52154 }, { x: new Date(2013, 1, 1), y: 115994 }, { x: new Date(2014, 1, 1), y: 222572 }], [{ x: new Date(2009, 1, 1), y: 311 }, { x: new Date(2010, 1, 1), y: 4511 }, { x: new Date(2011, 1, 1), y: 11370 }, { x: new Date(2012, 1, 1), y: 21949 }, { x: new Date(2013, 1, 1), y: 58657 }, { x: new Date(2014, 1, 1), y: 109930 }]],
	                labels: section6.blocks[6].lineLabels
	              }),
	              _react2.default.createElement(
	                "p",
	                null,
	                section6.blocks[8]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix", id: "scroll-target-section7" },
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
	                section7.title
	              ),
	              _react2.default.createElement(_HeadlineDivider2.default, null),
	              _react2.default.createElement(
	                "p",
	                null,
	                section7.blocks[0]
	              )
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "col px1 sm-px0 sm-10 sm-offset-1 md-8 md-offset-3 lg-offset-2 pb2" },
	              section7.blocks[1].map(function (item, k) {
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

	Chapter9.needs = [_chapterActions.fetchChapter];

	Chapter9.contextTypes = {
	  language: _react2.default.PropTypes.string
	};

	function mapStateToProps(state) {
	  return {
	    // language: state.appReducer.language,
	    content: {
	      en: state.chapterReducer.en,
	      fr: state.chapterReducer.fr,
	      es: state.chapterReducer.es,
	      ar: state.chapterReducer.ar
	    }
	  };
	}

	// function mapDispatchToProps(dispatch) {
	//   return {
	//     changeDataset: (id) => {
	//       dispatch(changeDataset(id))
	//     }
	//   }
	// }

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chapter9);

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _Home = __webpack_require__(255);

	var _Home2 = _interopRequireDefault(_Home);

	var _reportRoutes = __webpack_require__(256);

	var _reportRoutes2 = _interopRequireDefault(_reportRoutes);

	var _LanguageRoute = __webpack_require__(688);

	var _LanguageRoute2 = _interopRequireDefault(_LanguageRoute);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LanguageRoutes = function LanguageRoutes(lang) {
	  return _react2.default.createElement(
	    _reactRouter.Route,
	    { path: lang, component: _LanguageRoute2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	    (0, _reportRoutes2.default)()
	  );
	};

	exports.default = LanguageRoutes;

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LanguageRoute = function LanguageRoute(props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    props.children
	  );
	};

	LanguageRoute.propTypes = {
	  children: _react2.default.PropTypes.element
	};

	exports.default = LanguageRoute;

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(166);

	var _reactSelect = __webpack_require__(399);

	var _reactSelect2 = _interopRequireDefault(_reactSelect);

	var _reactRedux = __webpack_require__(221);

	var _constructLanguageRoute = __webpack_require__(690);

	var _constructLanguageRoute2 = _interopRequireDefault(_constructLanguageRoute);

	var _prefixLanguageToRoute = __webpack_require__(258);

	var _prefixLanguageToRoute2 = _interopRequireDefault(_prefixLanguageToRoute);

	var _appActions = __webpack_require__(259);

	var _Icon = __webpack_require__(267);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(268);

	var _Loader2 = _interopRequireDefault(_Loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(691);

	var languageOptions = [{ value: "en", label: "English" }, { value: "fr", label: "French" }, { value: "es", label: "Spanish" }];

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.goToLanguage = _this.goToLanguage.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: "getChildContext",
	    value: function getChildContext() {
	      return {
	        language: this.props.language
	      };
	    }
	  }, {
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      console.log("Mounting app: ", this.props.location);
	    }
	  }, {
	    key: "goToLanguage",
	    value: function goToLanguage(lang) {
	      this.context.router.push((0, _constructLanguageRoute2.default)(lang.value === "en" ? null : lang.value, this.props.location));
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          language = _props.language,
	          navOpen = _props.navOpen;

	      var headerClassName = navOpen ? "site-header clearfix level-5 is-extended" : "site-header clearfix level-5";

	      return _react2.default.createElement(
	        "div",
	        {
	          dir: language === "ar" ? "rtl" : "ltr",
	          className: language === "ar" ? "layout-rtl" : ""
	        },
	        _react2.default.createElement(_Loader2.default, null),
	        _react2.default.createElement(
	          "header",
	          { className: headerClassName },
	          _react2.default.createElement(
	            "div",
	            { style: { maxWidth: "1440px", margin: "0 auto" } },
	            _react2.default.createElement(
	              "div",
	              {
	                className: "clearfix bg-white",
	                style: { position: "relative", zIndex: 10000, height: "72px" }
	              },
	              _react2.default.createElement(
	                "div",
	                {
	                  className: "logo-wrapper pl2",
	                  style: { position: "relative", float: language === "ar" ? "right" : "left" }
	                },
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { to: (0, _prefixLanguageToRoute2.default)(language, "/") },
	                  _react2.default.createElement("img", {
	                    src: "/img/ifrc-logo.png",
	                    height: 60,
	                    style: { verticalAlign: "middle" }
	                  }),
	                  "\xA0\xA0"
	                ),
	                _react2.default.createElement(
	                  "span",
	                  { className: "caps" },
	                  "FDRS"
	                )
	              ),
	              _react2.default.createElement(
	                "div",
	                {
	                  style: { position: "relative", float: language === "ar" ? "left" : "right" },
	                  className: "pr2 md-visible"
	                },
	                _react2.default.createElement(
	                  "div",
	                  { style: { float: language === "ar" ? "right" : "left", width: "200px" } },
	                  _react2.default.createElement(_reactSelect2.default, {
	                    searchable: false,
	                    clearable: false,
	                    name: "language-selector",
	                    value: language,
	                    options: languageOptions,
	                    onChange: this.goToLanguage
	                  })
	                ),
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  {
	                    className: "btn px1 py15",
	                    to: (0, _prefixLanguageToRoute2.default)(this.props.language, "/report")
	                  },
	                  _react2.default.createElement(
	                    "span",
	                    { className: "caps" },
	                    this.props[language].home.downloadReportSection.preTitle
	                  )
	                ),
	                _react2.default.createElement(
	                  "button",
	                  { className: "btn px1 py15" },
	                  _react2.default.createElement(_Icon2.default, { name: "share", height: "20px" }),
	                  "\xA0\xA0\xA0",
	                  _react2.default.createElement(
	                    "span",
	                    { className: "caps" },
	                    this.props[language].share
	                  )
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "main-content-wrapper" },
	          _react2.default.createElement(
	            "div",
	            { style: { paddingTop: "72px" } },
	            this.props.children
	          ),
	          _react2.default.createElement(
	            "footer",
	            { className: "site-footer bg-dark clearfix" },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix py2", style: { background: "rgba(0,0,0,0.2)" } },
	              _react2.default.createElement(
	                "div",
	                { className: "col sm-9 sm-offset-3 md-9 md-offset-2 px2", style: { opacity: 0.8 } },
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  "Website by:",
	                  "\xA0",
	                  _react2.default.createElement(
	                    "a",
	                    {
	                      href: "http://www.lapidus.se",
	                      target: "_blank",
	                      rel: "noopener noreferrer"
	                    },
	                    _react2.default.createElement(
	                      "span",
	                      null,
	                      "Lapidus Interactive"
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  "p",
	                  { className: "small" },
	                  "\xA9",
	                  " 2016 FDRS"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	App.propTypes = {
	  children: _react.PropTypes.element,
	  language: _react.PropTypes.string,
	  location: _react.PropTypes.object,
	  navOpen: _react.PropTypes.bool,
	  toggleNav: _react.PropTypes.func,
	  en: _react.PropTypes.object,
	  fr: _react.PropTypes.object,
	  es: _react.PropTypes.object,
	  ar: _react.PropTypes.object
	};

	App.childContextTypes = {
	  location: _react.PropTypes.object,
	  language: _react.PropTypes.string
	};

	App.contextTypes = {
	  router: _react.PropTypes.object.isRequired
	};

	function mapStateToProps(state) {
	  return {
	    navOpen: state.appReducer.navOpen,
	    language: state.appReducer.language,
	    en: state.appReducer.en,
	    fr: state.appReducer.fr,
	    es: state.appReducer.es,
	    ar: state.appReducer.ar
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    toggleNav: function toggleNav() {
	      dispatch((0, _appActions.toggleNav)());
	    }
	  };
	}

	// export default App
	module.exports = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },

/***/ 690:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = constructLanguageRoute;
	function constructLanguageRoute(lang, location) {
	  if (location.pathname === '/') {
	    return lang ? location.pathname + lang : location.pathname;
	  }
	  var urlArray = location.pathname.split('/');
	  if (urlArray[1].length === 2) {
	    return lang ? '/' + lang + location.pathname.slice(3) : location.pathname.slice(3);
	  }
	  return lang ? '/' + lang + location.pathname : location.pathname;
	};

/***/ },

/***/ 691:
/***/ function(module, exports) {

	"use strict";

	(function () {
	  d3.geo.project = function (object, projection) {
	    var stream = projection.stream;
	    if (!stream) throw new Error("not yet supported");
	    return (object && d3_geo_projectObjectType.hasOwnProperty(object.type) ? d3_geo_projectObjectType[object.type] : d3_geo_projectGeometry)(object, stream);
	  };
	  function d3_geo_projectFeature(object, stream) {
	    return {
	      type: "Feature",
	      id: object.id,
	      properties: object.properties,
	      geometry: d3_geo_projectGeometry(object.geometry, stream)
	    };
	  }
	  function d3_geo_projectGeometry(geometry, stream) {
	    if (!geometry) return null;
	    if (geometry.type === "GeometryCollection") return {
	      type: "GeometryCollection",
	      geometries: object.geometries.map(function (geometry) {
	        return d3_geo_projectGeometry(geometry, stream);
	      })
	    };
	    if (!d3_geo_projectGeometryType.hasOwnProperty(geometry.type)) return null;
	    var sink = d3_geo_projectGeometryType[geometry.type];
	    d3.geo.stream(geometry, stream(sink));
	    return sink.result();
	  }
	  var d3_geo_projectObjectType = {
	    Feature: d3_geo_projectFeature,
	    FeatureCollection: function FeatureCollection(object, stream) {
	      return {
	        type: "FeatureCollection",
	        features: object.features.map(function (feature) {
	          return d3_geo_projectFeature(feature, stream);
	        })
	      };
	    }
	  };
	  var d3_geo_projectPoints = [],
	      d3_geo_projectLines = [];
	  var d3_geo_projectPoint = {
	    point: function point(x, y) {
	      d3_geo_projectPoints.push([x, y]);
	    },
	    result: function result() {
	      var result = !d3_geo_projectPoints.length ? null : d3_geo_projectPoints.length < 2 ? {
	        type: "Point",
	        coordinates: d3_geo_projectPoints[0]
	      } : {
	        type: "MultiPoint",
	        coordinates: d3_geo_projectPoints
	      };
	      d3_geo_projectPoints = [];
	      return result;
	    }
	  };
	  var d3_geo_projectLine = {
	    lineStart: d3_geo_projectNoop,
	    point: function point(x, y) {
	      d3_geo_projectPoints.push([x, y]);
	    },
	    lineEnd: function lineEnd() {
	      if (d3_geo_projectPoints.length) d3_geo_projectLines.push(d3_geo_projectPoints), d3_geo_projectPoints = [];
	    },
	    result: function result() {
	      var result = !d3_geo_projectLines.length ? null : d3_geo_projectLines.length < 2 ? {
	        type: "LineString",
	        coordinates: d3_geo_projectLines[0]
	      } : {
	        type: "MultiLineString",
	        coordinates: d3_geo_projectLines
	      };
	      d3_geo_projectLines = [];
	      return result;
	    }
	  };
	  var d3_geo_projectPolygon = {
	    polygonStart: d3_geo_projectNoop,
	    lineStart: d3_geo_projectNoop,
	    point: function point(x, y) {
	      d3_geo_projectPoints.push([x, y]);
	    },
	    lineEnd: function lineEnd() {
	      var n = d3_geo_projectPoints.length;
	      if (n) {
	        do {
	          d3_geo_projectPoints.push(d3_geo_projectPoints[0].slice());
	        } while (++n < 4);
	        d3_geo_projectLines.push(d3_geo_projectPoints), d3_geo_projectPoints = [];
	      }
	    },
	    polygonEnd: d3_geo_projectNoop,
	    result: function result() {
	      if (!d3_geo_projectLines.length) return null;
	      var polygons = [],
	          holes = [];
	      d3_geo_projectLines.forEach(function (ring) {
	        if (d3_geo_projectClockwise(ring)) polygons.push([ring]);else holes.push(ring);
	      });
	      holes.forEach(function (hole) {
	        var point = hole[0];
	        polygons.some(function (polygon) {
	          if (d3_geo_projectContains(polygon[0], point)) {
	            polygon.push(hole);
	            return true;
	          }
	        }) || polygons.push([hole]);
	      });
	      d3_geo_projectLines = [];
	      return !polygons.length ? null : polygons.length > 1 ? {
	        type: "MultiPolygon",
	        coordinates: polygons
	      } : {
	        type: "Polygon",
	        coordinates: polygons[0]
	      };
	    }
	  };
	  var d3_geo_projectGeometryType = {
	    Point: d3_geo_projectPoint,
	    MultiPoint: d3_geo_projectPoint,
	    LineString: d3_geo_projectLine,
	    MultiLineString: d3_geo_projectLine,
	    Polygon: d3_geo_projectPolygon,
	    MultiPolygon: d3_geo_projectPolygon,
	    Sphere: d3_geo_projectPolygon
	  };
	  function d3_geo_projectNoop() {}
	  function d3_geo_projectClockwise(ring) {
	    if ((n = ring.length) < 4) return false;
	    var i = 0,
	        n,
	        area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
	    while (++i < n) {
	      area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
	    }return area <= 0;
	  }
	  function d3_geo_projectContains(ring, point) {
	    var x = point[0],
	        y = point[1],
	        contains = false;
	    for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
	      var pi = ring[i],
	          xi = pi[0],
	          yi = pi[1],
	          pj = ring[j],
	          xj = pj[0],
	          yj = pj[1];
	      if (yi > y ^ yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = !contains;
	    }
	    return contains;
	  }
	  var ε = 1e-6,
	      ε2 = ε * ε,
	      π = Math.PI,
	      halfπ = π / 2,
	      sqrtπ = Math.sqrt(π),
	      radians = π / 180,
	      degrees = 180 / π;
	  function sinci(x) {
	    return x ? x / Math.sin(x) : 1;
	  }
	  function sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function asqrt(x) {
	    return x > 0 ? Math.sqrt(x) : 0;
	  }
	  var projection = d3.geo.projection,
	      projectionMutator = d3.geo.projectionMutator;
	  d3.geo.interrupt = function (project) {
	    var lobes = [[[[-π, 0], [0, halfπ], [π, 0]]], [[[-π, 0], [0, -halfπ], [π, 0]]]];
	    var bounds;
	    function forward(λ, φ) {
	      var sign = φ < 0 ? -1 : +1,
	          hemilobes = lobes[+(φ < 0)];
	      for (var i = 0, n = hemilobes.length - 1; i < n && λ > hemilobes[i][2][0]; ++i) {}
	      var coordinates = project(λ - hemilobes[i][1][0], φ);
	      coordinates[0] += project(hemilobes[i][1][0], sign * φ > sign * hemilobes[i][0][1] ? hemilobes[i][0][1] : φ)[0];
	      return coordinates;
	    }
	    function reset() {
	      bounds = lobes.map(function (hemilobes) {
	        return hemilobes.map(function (lobe) {
	          var x0 = project(lobe[0][0], lobe[0][1])[0],
	              x1 = project(lobe[2][0], lobe[2][1])[0],
	              y0 = project(lobe[1][0], lobe[0][1])[1],
	              y1 = project(lobe[1][0], lobe[1][1])[1],
	              t;
	          if (y0 > y1) t = y0, y0 = y1, y1 = t;
	          return [[x0, y0], [x1, y1]];
	        });
	      });
	    }
	    if (project.invert) forward.invert = function (x, y) {
	      var hemibounds = bounds[+(y < 0)],
	          hemilobes = lobes[+(y < 0)];
	      for (var i = 0, n = hemibounds.length; i < n; ++i) {
	        var b = hemibounds[i];
	        if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
	          var coordinates = project.invert(x - project(hemilobes[i][1][0], 0)[0], y);
	          coordinates[0] += hemilobes[i][1][0];
	          return pointEqual(forward(coordinates[0], coordinates[1]), [x, y]) ? coordinates : null;
	        }
	      }
	    };
	    var projection = d3.geo.projection(forward),
	        stream_ = projection.stream;
	    projection.stream = function (stream) {
	      var rotate = projection.rotate(),
	          rotateStream = stream_(stream),
	          sphereStream = (projection.rotate([0, 0]), stream_(stream));
	      projection.rotate(rotate);
	      rotateStream.sphere = function () {
	        d3.geo.stream(sphere(), sphereStream);
	      };
	      return rotateStream;
	    };
	    projection.lobes = function (_) {
	      if (!arguments.length) return lobes.map(function (lobes) {
	        return lobes.map(function (lobe) {
	          return [[lobe[0][0] * 180 / π, lobe[0][1] * 180 / π], [lobe[1][0] * 180 / π, lobe[1][1] * 180 / π], [lobe[2][0] * 180 / π, lobe[2][1] * 180 / π]];
	        });
	      });
	      lobes = _.map(function (lobes) {
	        return lobes.map(function (lobe) {
	          return [[lobe[0][0] * π / 180, lobe[0][1] * π / 180], [lobe[1][0] * π / 180, lobe[1][1] * π / 180], [lobe[2][0] * π / 180, lobe[2][1] * π / 180]];
	        });
	      });
	      reset();
	      return projection;
	    };
	    function sphere() {
	      var ε = 1e-6,
	          coordinates = [];
	      for (var i = 0, n = lobes[0].length; i < n; ++i) {
	        var lobe = lobes[0][i],
	            λ0 = lobe[0][0] * 180 / π,
	            φ0 = lobe[0][1] * 180 / π,
	            φ1 = lobe[1][1] * 180 / π,
	            λ2 = lobe[2][0] * 180 / π,
	            φ2 = lobe[2][1] * 180 / π;
	        coordinates.push(resample([[λ0 + ε, φ0 + ε], [λ0 + ε, φ1 - ε], [λ2 - ε, φ1 - ε], [λ2 - ε, φ2 + ε]], 30));
	      }
	      for (var i = lobes[1].length - 1; i >= 0; --i) {
	        var lobe = lobes[1][i],
	            λ0 = lobe[0][0] * 180 / π,
	            φ0 = lobe[0][1] * 180 / π,
	            φ1 = lobe[1][1] * 180 / π,
	            λ2 = lobe[2][0] * 180 / π,
	            φ2 = lobe[2][1] * 180 / π;
	        coordinates.push(resample([[λ2 - ε, φ2 - ε], [λ2 - ε, φ1 + ε], [λ0 + ε, φ1 + ε], [λ0 + ε, φ0 - ε]], 30));
	      }
	      return {
	        type: "Polygon",
	        coordinates: [d3.merge(coordinates)]
	      };
	    }
	    function resample(coordinates, m) {
	      var i = -1,
	          n = coordinates.length,
	          p0 = coordinates[0],
	          p1,
	          dx,
	          dy,
	          resampled = [];
	      while (++i < n) {
	        p1 = coordinates[i];
	        dx = (p1[0] - p0[0]) / m;
	        dy = (p1[1] - p0[1]) / m;
	        for (var j = 0; j < m; ++j) {
	          resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
	        }p0 = p1;
	      }
	      resampled.push(p1);
	      return resampled;
	    }
	    function pointEqual(a, b) {
	      return Math.abs(a[0] - b[0]) < ε && Math.abs(a[1] - b[1]) < ε;
	    }
	    return projection;
	  };
	  function times(λ, φ) {
	    var t = Math.tan(φ / 2),
	        s = Math.sin(π / 4 * t);
	    return [λ * (.74482 - .34588 * s * s), 1.70711 * t];
	  }
	  times.invert = function (x, y) {
	    var t = y / 1.70711,
	        s = Math.sin(π / 4 * t);
	    return [x / (.74482 - .34588 * s * s), 2 * Math.atan(t)];
	  };
	  (d3.geo.times = function () {
	    return projection(times);
	  }).raw = times;
	})();

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(228);

	var _reducers = __webpack_require__(693);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxThunk = __webpack_require__(698);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var logger = function logger(store) {
	  return function (next) {
	    return function (action) {
	      if (console.group) console.group(action.type);else console.log('\n\n' + action.type + '\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014');

	      console.log('%c prev state', 'color: grey', store.getState());
	      console.log('%c action', 'color: blue', action);
	      var returnValue = next(action);
	      console.log('%c next state', 'color: green', store.getState());

	      if (console.group) console.groupEnd(action.type);else console.log('\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n\n');

	      return returnValue;
	    };
	  };
	};

	function configureStore(initialState) {
	  // If there is an initialState derived from the window.__INITIAL_STATE__ object
	  // merge it in with the reducers
	  // return createStore(combineReducers(reducers), initialState);

	  // If there is middleware to be considered, use this function to apply the middleware
	  // to the redux store.
	  // const store = applyMiddleware(:middlewarename)(createStore)(combineReducers(reducers), initialState);

	  // Simplest configuration
	  // return createStore(combineReducers(reducers));
	  // return applyMiddleware(thunk)(createStore)(combineReducers(reducers));
	  return (0, _redux.createStore)((0, _redux.combineReducers)(_reducers2.default), (0, _redux.applyMiddleware)(logger, _reduxThunk2.default));
	}

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _storyReducer = __webpack_require__(694);

	var _storyReducer2 = _interopRequireDefault(_storyReducer);

	var _appReducer = __webpack_require__(696);

	var _appReducer2 = _interopRequireDefault(_appReducer);

	var _chapterReducer = __webpack_require__(697);

	var _chapterReducer2 = _interopRequireDefault(_chapterReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  appReducer: _appReducer2.default,
	  chapterReducer: _chapterReducer2.default,
	  storyReducer: _storyReducer2.default
	};

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = storyReducer;

	var _assign = __webpack_require__(480);

	var _assign2 = _interopRequireDefault(_assign);

	var _storyActions = __webpack_require__(695);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function storyReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    currentDataset: 0,
	    isFetching: false,
	    datasets: []
	  };
	  var action = arguments[1];

	  switch (action.type) {
	    case _storyActions.CHANGE_DATASET:
	      return (0, _assign2.default)({}, state, {
	        currentDataset: action.newDataset
	      });
	    case _storyActions.REQUEST_DATASETS:
	      return (0, _assign2.default)({}, state, {
	        isFetching: true
	      });
	    case _storyActions.RECEIVE_DATASETS:
	      return (0, _assign2.default)({}, state, {
	        isFetching: false,
	        datasets: action.datasets
	      });
	    case _storyActions.INVALIDATE_REQUEST:
	      return (0, _assign2.default)({}, state, {
	        isFetching: false
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.INVALIDATE_REQUEST = exports.RECEIVE_DATASETS = exports.REQUEST_DATASETS = exports.CHANGE_DATASET = undefined;
	exports.changeDataset = changeDataset;
	exports.fetchDatasets = fetchDatasets;

	var _promisePolyfill = __webpack_require__(260);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	var _superagent = __webpack_require__(262);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CHANGE_DATASET = exports.CHANGE_DATASET = 'CHANGE_DATASET';
	var REQUEST_DATASETS = exports.REQUEST_DATASETS = 'REQUEST_DATASETS';
	var RECEIVE_DATASETS = exports.RECEIVE_DATASETS = 'RECEIVE_DATASETS';
	var INVALIDATE_REQUEST = exports.INVALIDATE_REQUEST = 'INVALIDATE_REQUEST';

	function changeDataset(id) {
	  return {
	    type: CHANGE_DATASET,
	    newDataset: id
	  };
	}

	function requestDatasets() {
	  return {
	    type: REQUEST_DATASETS
	  };
	}

	function receiveDatasets(datasets) {
	  return {
	    type: RECEIVE_DATASETS,
	    datasets: datasets
	  };
	}

	function invalidateRequest() {
	  return {
	    type: INVALIDATE_REQUEST
	  };
	}

	function fetchDatasets(params) {
	  return function (dispatch, getState) {
	    if (shouldFetchDatasets(getState())) {
	      dispatch(requestDatasets());
	      console.log('Sending request');
	      var promise = new _promisePolyfill2.default(function (resolve, reject) {
	        _superagent2.default.get('http://localhost:3000/api/en/chapter-1.json').end(function (err, res) {
	          console.log('Finished request');
	          if (err) {
	            dispatch(invalidateRequest());
	            reject(err);
	          } else {
	            console.log('Got data', res);
	            dispatch(receiveDatasets(res));
	            resolve(res);
	          }
	        });
	      });

	      return promise;
	    }
	  };
	}

	function shouldFetchDatasets(state) {
	  return state.storyReducer.isFetching ? false : state.storyReducer.datasets.length === 0;
	}

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = storyReducer;

	var _assign = __webpack_require__(480);

	var _assign2 = _interopRequireDefault(_assign);

	var _appActions = __webpack_require__(259);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function storyReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    showLoader: false,
	    loadProgress: 0,
	    language: 'en',
	    fetchingLanguage: false,
	    navOpen: false,
	    nationalSocieties: [],
	    fetchingNationalSocieties: false,
	    en: {},
	    fr: {},
	    es: {},
	    ar: {}
	  };
	  var action = arguments[1];

	  switch (action.type) {
	    case _appActions.START_LOAD:
	      return (0, _assign2.default)({}, state, {
	        showLoader: true
	      });
	    case _appActions.PROGRESS_LOAD:
	      return (0, _assign2.default)({}, state, {
	        loadProgress: action.progress
	      });
	    case _appActions.END_LOAD:
	      return (0, _assign2.default)({}, state, {
	        showLoader: false
	      });
	    case _appActions.TOGGLE_NAV:
	      document.getElementsByTagName('body')[0].style.overflow = !state.navOpen ? 'hidden' : 'auto';
	      return (0, _assign2.default)({}, state, {
	        navOpen: !state.navOpen
	      });
	    case _appActions.CLOSE_NAV:
	      document.getElementsByTagName('body')[0].style.overflow = 'auto';
	      return (0, _assign2.default)({}, state, {
	        navOpen: false
	      });
	    case _appActions.REQUEST_LANGUAGE:
	      return (0, _assign2.default)({}, state, {
	        fetchingLanguage: true
	      });
	    case _appActions.RECEIVE_LANGUAGE:
	      console.log('The language data received is: ', action.languageData);
	      var changes = {
	        fetchingLanguage: false,
	        language: String(action.lang)
	      };
	      console.log('Adding changes ', action.languageData);
	      changes[action.lang] = action.languageData;
	      console.log('The changed item looks like this: ', changes);
	      return (0, _assign2.default)({}, state, changes);
	    case _appActions.REQUEST_NATIONAL_SOCIETIES:
	      return (0, _assign2.default)({}, state, {
	        fetchingNationalSocieties: true
	      });
	    case _appActions.RECEIVE_NATIONAL_SOCIETIES:
	      return (0, _assign2.default)({}, state, {
	        nationalSocieties: action.nationalSocieties,
	        fetchingNationalSocieties: false
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = storyReducer;

	var _assign = __webpack_require__(480);

	var _assign2 = _interopRequireDefault(_assign);

	var _chapterActions = __webpack_require__(420);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function storyReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    isFetching: false,
	    en: {
	      chapters: {}
	    },
	    fr: {
	      chapters: {}
	    },
	    es: {
	      chapters: {}
	    },
	    ar: {
	      chapters: {}
	    }
	  };
	  var action = arguments[1];

	  switch (action.type) {
	    case _chapterActions.REQUEST_CHAPTER:
	      return (0, _assign2.default)({}, state, {
	        isFetching: true
	      });
	    case _chapterActions.RECEIVE_CHAPTER:
	      var changes = {};
	      changes.isFetching = false;
	      var chapterAddition = {};
	      chapterAddition[action.chapter.slug] = action.chapter;
	      changes[action.language] = {
	        chapters: (0, _assign2.default)({}, state[action.language].chapters, chapterAddition)
	      };
	      return (0, _assign2.default)({}, state, changes);
	    case _chapterActions.INVALIDATE_REQUEST:
	      return (0, _assign2.default)({}, state, {
	        isFetching: false
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = fetchNeededData;

	var _promisePolyfill = __webpack_require__(260);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fetchNeededData(dispatch, components, params, renderProps) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.needs || []).
	    // Not sure this is necessary anymore, or perhaps this depends on how the routes
	    // are set up. This seems to lead to redundant needs...
	    // .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
	    concat(prev);
	  }, []);
	  var promises = needs.map(function (need) {
	    return dispatch(need(params, renderProps.location.pathname));
	  });
	  console.log(promises);

	  return _promisePolyfill2.default.all(promises);
	}

/***/ }

});