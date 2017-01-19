import React, { PropTypes } from "react"
import { translate } from "react-i18next"
import { connect } from "react-redux"

import Select from "react-select"

import LanguageLink  from "../../components/LanguageLink"
import { toggleNav } from "../../actions/appActions"
import Icon from "../../components/Icon"
import Loader from "../../components/Loader"
import Navigation from "../../components/Report/Navigation"
import ReadMore from "../../components/Report/ReadMore"
import Breadcrumbs from "../../components/Breadcrumbs"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"


class Report extends React.Component {
  componentDidMount() {
    console.log("Mounting app: ", this.props.location)

    // this.goToChapter = this.goToChapter.bind(this)
  }

  goToChapter(chapter) {
    const prefixedRoute = prefixLanguageToRoute(this.context.i18n.language, chapter.value)
    this.context.router.push(prefixedRoute)
  }

  render() {
    const { language } = this.context.i18n
    const { t, navOpen, toggleNav } = this.props
    const headerClassName = navOpen ?
                            "site-header clearfix level-5 is-extended" :
                            "site-header clearfix level-5"

    return (
      <div
        dir={ language === "ar" ? "rtl" : "ltr" }
        className={ language === "ar" ? "layout-rtl" : "" }
      >
        <Loader />
        {/* <header className={ headerClassName } style={{ top: "72px", zIndex: 10 }}>
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
                  { t("report-common:site-title") }
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
                  <span className="caps">{ t("report-common:download") }</span>
                </a>
              </div>
            </div>
            <Navigation navOpen={ navOpen } />
          </div>
        </header> */}

        {/* <div className="bg-secondary px1">
          <div className="clearfix mxn1">
            <div className="col sm-6 sm-offset-2 px1 py1"></div>
          </div>
        </div> */}

        {/* <Breadcrumbs links={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/" },
          { name: "Report", path: undefined },
          { name: "Introduction", path: undefined },
        ]}/> */}

        <div className="sm-visible">
          <div className="clearfix bg-light px1">
            <div className="col sm-8 sm-offset-0 md-offset-2">
              <ul className="m0 py05 px0 text-base">
                <li className="inline-block mr1">
                  <LanguageLink to="/fdrs">
                    {"Home"}
                  </LanguageLink>
                </li>
                <li className="inline-block mr1">
                  <LanguageLink to="/fdrs/services">
                    {"Services"}
                  </LanguageLink>
                </li>
                <li className="inline-block mr1">
                  <LanguageLink to="/fdrs/report">
                    {"Report"}
                  </LanguageLink>
                </li>
                <li className="inline-block align-middle mr1 select-no-underline select-no-scroll" style={{minWidth:300}}>
                  <Select
                    searchable={ false }
                    clearable={ false }
                    name="chapter-selector"
                    value={this.context.router.getCurrentLocation().pathname}
                    options={[
                      { value: prefixLanguageToRoute(language, "/fdrs/report"), label: "Introduction" },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/who-we-are"), label: t("report-common:chapters.chapter1.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/what-we-do"), label: t("report-common:chapters.chapter2.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/living-our-fundamental-principles"), label: t("report-common:chapters.chapter3.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/strategic-aim-1"), label: t("report-common:chapters.chapter4.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/strategic-aim-2"), label: t("report-common:chapters.chapter5.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/strategic-aim-3"), label: t("report-common:chapters.chapter6.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/enabling-action-1"), label: t("report-common:chapters.chapter7.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/enabling-action-2"), label: t("report-common:chapters.chapter8.title") },
                      { value: prefixLanguageToRoute(language, "/fdrs/report/enabling-action-3"), label: t("report-common:chapters.chapter9.title") },
                    ]}
                    onChange={ this.goToChapter.bind(this) }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={ navOpen ? "main-content-wrapper removed" : "main-content-wrapper" }>
          <div style={{minHeight:"100vh"}}>
            { this.props.children }
          </div>

          <ReadMore />

          {/* <footer className="site-footer bg-dark clearfix">
            <div className="clearfix py3">
              <div
                className="col xs-6 sm-5 sm-offset-2 md-3 px1"
                style={{ minHeight:"152px" }}
              >
                <ul className="clearfix">
                  <li>
                    <LanguageLink to={ prefixLanguageToRoute(language, "/acknowledgements") }>
                      <span>{ "Acknowledgements" }</span>
                    </LanguageLink>
                  </li>
                  <li>
                    <LanguageLink to={ prefixLanguageToRoute(language, "/data") }>
                      <span>{ "Data" }</span>
                    </LanguageLink>
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
          </footer> */}

        </div>
      </div>
    )
  }
}

Report.propTypes = {
  t: PropTypes.func.isRequired,
  children: PropTypes.element,
  location: PropTypes.object,
  navOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
}

Report.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  navOpen: state.appReducer.navOpen,
})

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
})

export default translate([ "report-common" ], { wait: true })(connect(mapStateToProps, mapDispatchToProps)(Report))
