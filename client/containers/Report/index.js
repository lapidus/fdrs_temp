import React, { PropTypes } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"
import { toggleNav } from "../../actions/appActions"
import Icon from "../../components/Icon"
import Loader from "../../components/Loader"
import Navigation from "../../components/Report/Navigation"
import ReadMore from "../../components/Report/ReadMore"

class Report extends React.Component {
  componentDidMount() {
    console.log("Mounting app: ", this.props.location)
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
        <header className={ headerClassName } style={{ top: "72px", zIndex: 10 }}>
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
                <span className="caps">
                  { this.props[language]["site-title"] }
                </span>
              </div>
              <div
                style={{ position: "relative", float: language === "ar" ? "left" : "right" }}
                className="pr2 md-visible"
              >
                <a
                  className="btn px1 py15"
                  href={ `/downloads/Everyone_counts_2013_${language.toUpperCase()}.pdf` }
                >
                  &nbsp;&nbsp;&nbsp;
                  <span className="caps">{ this.props[language].download}</span>
                </a>
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
          </footer>
        </div>
      </div>
    )
  }
}

Report.propTypes = {
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

Report.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Report)