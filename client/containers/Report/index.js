import React, { PropTypes } from "react"
import { Link } from "react-router"
import { translate } from "react-i18next"
import { connect } from "react-redux"

import Select from "react-select"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"
import { toggleNav } from "../../actions/appActions"
import Icon from "../../components/Icon"
import Loader from "../../components/Loader"
import Navigation from "../../components/Report/Navigation"
import ReadMore from "../../components/Report/ReadMore"
import Breadcrumbs from "../../components/Breadcrumbs"

class Report extends React.Component {
  componentDidMount() {
    console.log("Mounting app: ", this.props.location)

    this.goToChapter = this.goToChapter.bind(this)
  }

  goToChapter(chapter) {
    this.context.router.push(chapter.value)
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
          <div className="clearfix bg-secondary px1">
            <div className="col sm-8 sm-offset-0 md-offset-2">
              <ul className="m0 py1 px0 small strong">
                <li className="inline-block mr1">
                  <Link to="/">
                    {"Home"}
                  </Link>
                </li>
                <li className="inline-block mr1">
                  <Link to="/">
                    {"Services"}
                  </Link>
                </li>
                <li className="inline-block mr1">
                  <Link to="/report">
                    {"Report"}
                  </Link>
                </li>
                <li className="inline-block align-middle mr1 select-no-underline select-no-scroll" style={{width:160}}>
                  <Select
                    searchable={ false }
                    clearable={ false }
                    name="chapter-selector"
                    value={this.context.router.getCurrentLocation().pathname}
                    options={[
                      { value: "/report", label: "Introduction" },
                      { value: "/report/who-we-are", label: "Who we are" },
                      { value: "/report/what-we-do", label: "What we do" },
                      { value: "/report/living-our-fundamental-principles", label: "Living our fundamental principles" },
                      { value: "/report/strategic-aim-1", label: "Strategic aim 1" },
                      { value: "/report/strategic-aim-2", label: "Strategic aim 2" },
                      { value: "/report/strategic-aim-3", label: "Strategic aim 3" },
                      { value: "/report/enabling-action-1", label: "Enabling action 1" },
                      { value: "/report/enabling-action-2", label: "Enabling action 2" },
                      { value: "/report/enabling-action-3", label: "Enabling action 3" },
                    ]}
                    onChange={ this.goToChapter }
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
