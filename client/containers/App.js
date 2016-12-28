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
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
  { value: "es", label: "ES" },
  { value: "ar", label: "AR" }
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

        <header className='relative shadow-4 px1 z-index-1000 bg-white'>
          <div className='clearfix mxn1'>
            <div className='col sm-5'>
              <a href="http://www.ifrc.org" target="_blank"><img
                src="/img/ifrc-logo-2.png"
                height={ 68 }
                className="inline-block align-middle mx1"
              /></a>
              <h1 className='inline-block align-middle small light m0' style={{lineHeight:'1rem',letterSpacing:'1px',fontFamily: "Helvetica Neue"}}>
                <Link to="/" className='color-regular'><span className='color-primary'>FEDERATION-WIDE</span> DATABANK<br />
                AND REPORTING SYSTEM</Link>
              </h1>
            </div>
            <div className='col sm-7 text-right sm-visible'>
              <nav className='inline-block'>
                <ul className='m0 p0'>
                  <li className='inline-block'>
                    <Link to='/' className='btn'>
                      <span className='block py1 px05'>Services</span>
                    </Link>
                  </li>
                  {/* <li className='inline-block'>
                    <Link to='/overview' className='btn'>
                      <span className='block py1 px05'>Overview</span>
                    </Link>
                  </li>
                  <li className='inline-block'>
                    <Link to='/societies' className='btn'>
                      <span className='block py1 px05'>Societies</span>
                    </Link>
                  </li> */}
                  <li className='inline-block'>
                    <Link to='/' className='btn'>
                      <span className='block py1 px05'>About</span>
                    </Link>
                  </li>
                  <li className='inline-block'>
                    <Link to='/' className='btn'>
                      <span className='block py1 px05'>FAQ</span>
                    </Link>
                  </li>
                  <li className='inline-block align-middle text-left select-xl select-no-underline select-no-scroll bg-secondary' style={{ width: 68 }}>
                    <Select
                      searchable={ false }
                      clearable={ false }
                      name="language-selector"
                      value={ language }
                      options={ languageOptions }
                      onChange={ this.goToLanguage }
                    />
                    {/* <Link to='/' className='btn bg-secondary'>
                      <span className='block py1 px1'>EN</span>
                    </Link> */}
                  </li>
                  {/* <li className='inline-block'>
                    <Link to='/report' className='btn'>
                      <span className='block py1 px05'>Report</span>
                    </Link>
                  </li> */}
                  <li className='inline-block'>
                    <span className='inline-block'>
                      {/* <Select
                        searchable={ false }
                        clearable={ false }
                        name="language-selector"
                        value={ language }
                        options={ languageOptions }
                        onChange={ this.goToLanguage }
                      /> */}
                    </span>
                    {/* <button className='btn bg-secondary'>
                      <span className='block p1'>EN</span>
                    </button> */}
                  </li>
                  <li className='inline-block'>
                    <button className='btn bg-primary'>
                      <span className='block p1'>Login</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {/* <header className={ headerClassName }>
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
                  to={ prefixLanguageToRoute(language, "/data") }
                >
                  <span className="caps">{ t("report-common:chapters.data.pretitle") }</span>
                </Link>
                <Link
                  className="btn px1 py15"
                  to={ prefixLanguageToRoute(language, "/societies") }
                >
                  <span className="caps">{ t("report-common:societis") }</span>
                </Link>
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
        </header> */}

        <div className={ "main-content-wrapper light" }>
          <div>
            { this.props.children }
          </div>

          <footer className="site-footer bg-dark clearfix">
            <div className="clearfix py2" style={{ background:"rgba(0,0,0,0.2)" }}>

              <div className="col sm-3 sm-offset-1">
                <p className='inline-block align-middle small light m0' style={{lineHeight:'1rem',letterSpacing:'1px',fontFamily: "Helvetica Neue"}}>
                  <Link to="/" className='color-regular'><span className='color-primary'>FEDERATION-WIDE</span> DATABANK<br />
                  AND REPORTING SYSTEM</Link>
                </p>
                <p>website by Lapidus Interactive</p>
              </div>

              <div className="col sm-3">
                <p className="subhead strong">Services</p>
                <ul className="m0 p0">
                  <li className="block">
                    <Link to="/overview">The IFRC at a glance</Link>
                  </li>
                  <li className="block">
                    <Link to="/societies">National Society profiles</Link>
                  </li>
                  <li className="block">
                    <Link to="/report">“Everyone Counts” report</Link>
                  </li>
                </ul>

                <br />

                <ul className="m0 p0">
                  <li className="block">
                    <Link to="/about">Acknowledgements</Link>
                  </li>
                  <li className="block">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="block">
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col sm-3">
                <p className="subhead strong">Contact</p>
                <p>If you have feedback, questions and/or corrections, please write to the FDRS team.</p>
                <a href="#">fdrs@ifrc.org</a>
              </div>

              <div className="col base-10 base-offset-1 small">
                <p>&copy; { "2016 FDRS" }</p>
              </div>

            </div>
          </footer>
        </div>

        {/* <div style={{display: this.props.tooltipVisible ? "block" : "none" }}>{ "Tooltip" }</div> */}
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
  // tooltipVisible: state.appReducer.tooltipVisible,
})

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
})

// export default App
export default translate()(connect(mapStateToProps, mapDispatchToProps)(App))
