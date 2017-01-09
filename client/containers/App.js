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

import Tooltip from "../components/Tooltip"

require("../utils/d3GeoMinimal")

const languageOptions = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
  { value: "es", label: "ES" },
  { value: "ar", label: "AR" }
]


class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: false
    }

    this.showDropdown = this.showDropdown.bind(this)
    this.hideDropdown = this.hideDropdown.bind(this)
  }
  showDropdown() {
    this.setState({ showDropdown: true })
  }
  hideDropdown() {
    this.setState({ showDropdown: false })
  }
  render() {

    const dropdownStyles = {
      opacity: this.state.showDropdown || this.props.navOpen ? 1 : 0,
      pointerEvents: this.state.showDropdown || this.props.navOpen ? "all" : "none",
    }

    return (
      <span onMouseEnter={ this.showDropdown } onMouseLeave={ this.hideDropdown } onClick={ this.hideDropdown }>
        { this.props.children[0] }
        <span style={ dropdownStyles }>
          { this.props.children[1] }
        </span>
      </span>
    )
  }
}

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

        <header className='relative shadow-4 px1 z-index-1000 bg-white hidden-print'>
          <div className='clearfix mxn1'>
            <div className='col sm-5'>
              <a href="http://www.ifrc.org" target="_blank"><img
                src="/img/ifrc-logo-2.png"
                height={ 68 }
                className="inline-block align-middle mx1"
              /></a>
              <h1 className='inline-block align-middle small light m0' style={{lineHeight:'1rem',letterSpacing:'1px',fontFamily: "Helvetica Neue"}}>
                <Link to="/" className='color-regular caps'>
                  <span className='color-primary'>{ t("common:nameParts")[0] }</span>&nbsp;{ t("common:nameParts")[1] }<br />{ t("common:nameParts")[2] }
                </Link>
              </h1>
            </div>
            <div className="absolute t0 r0 z-index-1000 sm-hidden">
              <button className='btn bg-secondary' onClick={this.props.toggleNav}>
                <span className='block p1' >
                  <svg className="block" width="20px" height="20px" viewBox="0 0 24 24">
                    <g transform="translate(0, 0)">
                      <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="1" y1="12" x2="23" y2="12" strokeLinejoin="miter"/>
                      <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="1" y1="5" x2="23" y2="5" strokeLinejoin="miter"/>
                      <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="1" y1="19" x2="23" y2="19" strokeLinejoin="miter"/>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <div className={`base-12 sm-7 ${navOpen ? "nav-drawer nav-drawer--open" : "nav-drawer"}`}>
              <nav className="inline-block">
                <ul className='m0 p0'>
                  <li className='block sm-inline-block relative'>
                    <Dropdown navOpen={navOpen}>
                      <Link to='/' className='btn bg-white z-index-1'>
                        <span className='block py1 px05'>
                          <svg style={{width:16,height:16,marginTop:-1}} className="mr1" width="20px" height="20px" viewBox="0 0 24 24">
                            <g transform="translate(0, 0)" className="stroke-current">
                              <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="4" x2="22" y2="4" strokeLinejoin="miter"/>
                              <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="12" x2="22" y2="12" strokeLinejoin="miter"/>
                              <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="20" x2="22" y2="20" strokeLinejoin="miter"/>
                              <rect x="2" y="2" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                              <rect x="2" y="10" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                              <rect x="2" y="18" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                            </g>
                          </svg>
                          { t("common:navigation")[0].name }
                        </span>
                      </Link>
                      <ul className={navOpen ? "m0 p0" : "absolute t100 l0 bg-white m0 py1 px0 shadow-4"} style={{ minWidth:280 }}>
                        <li className="block text-left">
                          <Link to="/overview" className="block btn sm-text-left" style={{width: "100%"}}>
                            <span className="block px1 py05">
                              { t("common:navigation")[0].dropdownItems[0] }
                            </span>
                          </Link>
                        </li>
                        <li className="block text-left">
                          <Link to="/societies" className="block btn sm-text-left" style={{width: "100%"}}>
                            <span className="block px1 py05">
                              { t("common:navigation")[0].dropdownItems[1] }
                            </span>
                          </Link>
                        </li>
                        <li className="block text-left">
                          <Link to="/report" className="block btn sm-text-left" style={{width: "100%"}}>
                            <span className="block px1 py05">
                              { t("common:navigation")[0].dropdownItems[2] }
                            </span>
                          </Link>
                        </li>
                        <li className="block text-left">
                          <Link to="/data-download" className="block btn sm-text-left" style={{width: "100%"}}>
                            <span className="block px1 py05">
                              { t("common:navigation")[0].dropdownItems[3] }
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </Dropdown>
                  </li>
                  <li className='block sm-inline-block'>
                    <Link to='/faq' className='btn'>
                      <span className='block py1 px05'>
                        { t("common:navigation")[1].name }
                      </span>
                    </Link>
                  </li>
                  <li className='block sm-inline-block align-middle text-left select-xl select-no-underline select-no-scroll bg-secondary' style={{ width: 68 }}>
                    <Select
                      searchable={ false }
                      clearable={ false }
                      name="language-selector"
                      value={language}
                      options={ languageOptions }
                      onChange={ this.goToLanguage }
                    />
                  </li>
                  <li className='block sm-inline-block'>
                    <button className='btn bg-primary'>
                      <div className="block p1">
                        <svg style={{width:20,height:20}} width="20px" height="20px" viewBox="0 0 32 32">
                          <g  transform="translate(0, 0)">
                            <path fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M19,9.5
                        c0,2.485,2.015,5.5,4.5,5.5S28,11.985,28,9.5S25.985,5,23.5,5S19,7.015,19,9.5z" strokeLinejoin="miter"/>
                            <path fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M24,25h7v-2.162
                        c0-1.223-0.735-2.329-1.871-2.781C27.829,19.539,25.9,19,23.5,19s-4.329,0.539-5.629,1.057c-0.536,0.214-0.98,0.57-1.303,1.018" strokeLinejoin="miter" strokeLinecap="butt"/>
                            <path fill="none" stroke="#fff" strokeWidth="2" strokeMiterlimit="10" d="M20,28H1v-2.815c0-1.526,0.861-2.923,2.233-3.591
                        C4.834,20.814,7.277,20,10.5,20s5.666,0.814,7.267,1.594C19.139,22.262,20,23.659,20,25.185V28z" strokeLinejoin="miter" strokeLinecap="square"/>
                            <path fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M16,9.5
                        c0,3.038-2.462,6.5-5.5,6.5S5,12.538,5,9.5S7.462,4,10.5,4S16,6.462,16,9.5z" strokeLinejoin="miter"/>
                          </g>
                        </svg>
                        <span className="ml1">{ "Login" }</span>
                      </div>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div className={ "main-content-wrapper light" }>
          <div>
            { this.props.children }
          </div>

          <footer className="site-footer bg-dark clearfix">
            <div className="clearfix py2" style={{ background:"rgba(0,0,0,0.2)" }}>

              <div className="col sm-3 sm-offset-1">
                <p className='inline-block align-middle small light m0' style={{lineHeight:'1rem',letterSpacing:'1px',fontFamily: "Helvetica Neue"}}>
                  <Link to="/" className='color-inverted caps'>
                    <span className='color-primary'>{ t("common:nameParts")[0] }</span>&nbsp;{ t("common:nameParts")[1] }<br />{ t("common:nameParts")[2] }
                  </Link>
                </p>
                <p>{ t("common:credit") }</p>
              </div>

              <div className="col sm-3">
                <p className="subhead strong">
                  { t("common:navigation")[0].name }
                </p>
                <ul className="m0 p0">
                  <li className="block">
                    <Link to="/overview">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[0].dropdownItems[0] }
                      </span>
                    </Link>
                  </li>
                  <li className="block">
                    <Link to="/societies">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[0].dropdownItems[1] }
                      </span>
                    </Link>
                  </li>
                  <li className="block">
                    <Link to="/report">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[0].dropdownItems[2] }
                      </span>
                    </Link>
                  </li>
                  <li className="block">
                    <Link to="/data-download">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[0].dropdownItems[3] }
                      </span>
                    </Link>
                  </li>
                </ul>

                <br />

                <ul className="m0 p0">
                  <li className="block">
                    <Link to="/faq">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[1].name }
                      </span>
                    </Link>
                  </li>
                  <li className="block">
                    <Link to="/about">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[2].name }
                      </span>
                    </Link>
                  </li>
                  <li className="block">
                    <Link to="/acknowledgements">
                      <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                        <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                      </svg>
                      <span>
                        { t("common:navigation")[3].name }
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col sm-3">
                <p className="subhead strong">
                  { t("common:contact.title") }
                </p>
                <p>
                  { t("common:contact.lead") }
                </p>
                <a href="#">
                  { t("common:contact.email") }
                </a>
              </div>

              <div className="col base-10 base-offset-1 small">
                <p>
                  &copy;&nbsp;{ t("common:copyright") }
                </p>
              </div>

            </div>
          </footer>
        </div>

        {/* <div style={{display: this.props.tooltipVisible ? "block" : "none" }}>{ "Tooltip" }</div> */}

        <Tooltip />
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
