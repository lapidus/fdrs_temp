import React, { PropTypes } from "react"
import { Link } from "react-router"
import Select from "react-select"
import { connect } from "react-redux"

import constructLanguageRoute from "../utils/constructLanguageRoute"
import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"
import { toggleNav } from "../actions/appActions"

import Icon from "./Icon"
import Navigation from "./Navigation"
import Loader from "./Loader"
import ReadMore from "./ReadMore"

require("../utils/d3GeoMinimal")

const languageOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  // { value: "ar", label: "Arabic" }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.goToLanguage = this.goToLanguage.bind(this)
  }
  getChildContext() {
    return {
      language: this.props.language,
    }
  }
  componentDidMount() {
    console.log("Mounting app: ", this.props.location)
  }
  goToLanguage(lang) {
    this.context.router.push(
      constructLanguageRoute(
        lang === "en" ? null : lang,
        this.props.location
      )
    )
  }
  render() {
    const { language, navOpen, toggleNav } = this.props
    const headerClassName = navOpen ?
                            "site-header clearfix level-5 is-extended" :
                            "site-header clearfix level-5"

    return (
      <div
        dir={ language === "ar" ? "rtl" : "ltr" }
        className={ language === "ar" ? "layout-rtl" : "" }
      >
        <Loader />
        <header className={ headerClassName }>
          <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
            <div
              className="clearfix bg-white"
              style={{ position: "relative", zIndex: 10000, height: "72px" }}
            >
              <div
                className="logo-wrapper"
                style={{ position: "relative", float: language === "ar" ? "right" : "left" }}
              >
                <button
                  onClick={ toggleNav }
                  className="btn no-focus"
                  style={{ padding: "20px 20px" }}
                >
                  {
                    navOpen ?
                      <Icon width="28px" height="28px" name="close" /> :
                      <Icon width="28px" height="28px" name="navigation" />
                  }
                </button>
                <Link to={ prefixLanguageToRoute(language, "/") }>
                  <img
                    src="/img/ifrc-logo.png"
                    height={ 60 }
                    style={{ verticalAlign: "middle" }}
                  />&nbsp;&nbsp;
                </Link>
                <span className="caps">
                  { this.props[language]["site-title"] }
                </span>
              </div>
              <div
                style={{ position: "relative", float: language === "ar" ? "left" : "right" }}
                className="pr2 md-visible"
              >
                <div style={{ float: language === "ar" ? "right" : "left", width:"200px" }}>
                  <Select
                    searchable={ false }
                    clearable={ false }
                    name="language-selector"
                    value={ language }
                    options={ languageOptions }
                    onChange={ this.goToLanguage }
                  />
                </div>
                <a
                  className="btn px1 py15"
                  href={ `/downloads/Everyone_counts_2013_${language.toUpperCase()}.pdf`}
                >
                  &nbsp;&nbsp;&nbsp;
                  <span className="caps">{ this.props[language].download}</span>
                </a>
                { /* <button className="btn px1 py15"><Icon name="download" height="20px" />&nbsp&nbsp&nbsp<span className="caps">{this.props[language].download}</span></button> */ }
                <button className="btn px1 py15">
                  <Icon name="share" height="20px" />
                  &nbsp;&nbsp;&nbsp;
                  <span className="caps">{this.props[language].share}</span>
                </button>
              </div>
            </div>
            <Navigation
              navOpen={ navOpen }
              toggleNav={ toggleNav }
              language={ language }
              navigationContent={{
                en: this.props.en,
                fr: this.props.fr,
                es: this.props.es,
                ar: this.props.ar,
              }}
            />
          </div>
        </header>

        <div className={ navOpen ? "main-content-wrapper removed" : "main-content-wrapper" }>
          <div style={{ paddingTop:"72px" }}>
            { this.props.children }
          </div>

          <ReadMore />

          <footer className="site-footer bg-dark clearfix">
            <div className="clearfix py3">
              <div
                className="col xs-6 sm-5 sm-offset-2 md-3 px1"
                style={{ minHeight:"152px" }}
              >
                <ul className="clearfix">
                  <li>
                    <Link to={ prefixLanguageToRoute(language, "/acknowledgements") }>
                      <span>{ "Acknowledgements" }</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={ prefixLanguageToRoute(language, "/data") }>
                      <span>{ "Data" }</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="col xs-6 sm-5 sm-offset-2 md-3 md-offset-0 px1"
                style={{ minHeight:"152px" }}
              >
                &nbsp;
              </div>
              <div className="col xs-6 sm-5 md-3 px1" style={{ minHeight: "152px" }}>
                { "International Federation of Red Cross and Red Crescent Societies "}<br />
                { "P.O. Box 303"}<br />
                { "CH-1211 Geneva 19"}<br />
                { "Switzerland"}<br />
                { "Telephone: + 41 22 730 4224"}<br />
                { "e-mail: fdrs@ifrc.org"}
              </div>
            </div>
            <div className="clearfix py2" style={{ background:"rgba(0,0,0,0.2)" }}>
              <div className="col sm-9 sm-offset-3 md-9 md-offset-2 px2" style={{ opacity:0.8 }}>
                <p className="small">
                  { "Website by:" }&nbsp;
                  <a
                    href="http://www.lapidus.se"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{ "Lapidus Interactive" }</span>
                  </a>
                </p>
                <p className="small">
                  &copy;
                  { " 2016 IFRC" }
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
  language: PropTypes.string,
  location: PropTypes.object,
  navOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
  en: PropTypes.object,
  fr: PropTypes.object,
  es: PropTypes.object,
  ar: PropTypes.object,
}

App.childContextTypes = {
  location: PropTypes.object,
  language: PropTypes.string,
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    navOpen: state.appReducer.navOpen,
    language: state.appReducer.language,
    en: state.appReducer.en,
    fr: state.appReducer.fr,
    es: state.appReducer.es,
    ar: state.appReducer.ar,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleNav: () => {
      dispatch(toggleNav())
    },
  }
}

// export default App
module.exports = connect(mapStateToProps, mapDispatchToProps)(App)
