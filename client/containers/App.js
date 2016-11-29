import React, { PropTypes } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import Select from "react-select"

import constructLanguageRoute from "../utils/constructLanguageRoute"
import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"
import { toggleNav } from "../actions/appActions"
import Icon from "../components/Icon"
import Loader from "../components/Loader"

require("../utils/d3GeoMinimal")

const languageOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "ar", label: "Arabic" }
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.goToLanguage = this.goToLanguage.bind(this)
  }
  componentDidMount() {
    console.log("Mounting app: ", this.props.location)
  }
  goToLanguage(lang) {
    this.context.router.push(
      constructLanguageRoute(
        lang.value === "en" ? null : lang.value,
        this.props.location
      )
    )
  }
  render() {
    const { language } = this.context.i18n
    const { t, navOpen } = this.props
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
                className="logo-wrapper pl2"
                style={{ position: "relative", float: language === "ar" ? "right" : "left" }}
              >
                <Link to={ prefixLanguageToRoute(language, "/") }>
                  <img
                    src="/img/ifrc-logo.png"
                    height={ 60 }
                    style={{ verticalAlign: "middle" }}
                  />&nbsp;&nbsp;
                </Link>
                <span className="caps">
                  { "FDRS" }
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
                <Link
                  className="btn px1 py15"
                  to={ prefixLanguageToRoute(language, "/report") }
                >
                  <span className="caps">{ t("report-common:home.downloadReportSection.preTitle") }</span>
                </Link>
                <button className="btn px1 py15">
                  <Icon name="share" height="20px" />
                  &nbsp;&nbsp;&nbsp;
                  <span className="caps">{ t("report-common:share") }</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className={ "main-content-wrapper" }>
          <div style={{ paddingTop:"72px" }}>
            { this.props.children }
          </div>

          <footer className="site-footer bg-dark clearfix">
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
                  { " 2016 FDRS" }
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
  t: PropTypes.func.isRequired,
  children: PropTypes.element,
  location: PropTypes.object,
  navOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
}

App.childContextTypes = {
  location: PropTypes.object,
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  navOpen: state.appReducer.navOpen,
})

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
})

// export default App
export default translate()(connect(mapStateToProps, mapDispatchToProps)(App))
