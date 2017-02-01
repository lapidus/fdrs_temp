import React, { PropTypes } from "react"
import LanguageLink from "../components/LanguageLink"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import Select from "react-select"

import constructLanguageRoute from "../utils/constructLanguageRoute"
import { toggleNav } from "../actions/appActions"
import Icon from "../components/Icon"
import Loader from "../components/Loader"
import FDRSNavigation from "../components/FDRSNavigation"
import SimpleNavigation from "../components/SimpleNavigation"

import { Tooltip } from 'redux-tooltip';

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

// class BasicNavigation extends React.Component {
//   render() {
//   }
// }

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
    const { router } = this.context
    const { language } = this.context.i18n
    const { t, navOpen } = this.props
    const headerClassName = navOpen ?
                            "site-header clearfix level-5 is-extended" :
                            "site-header clearfix level-5"

    const prefixedRootRoute = `/${language}`

    return (
      <div
        dir={ language === "ar" ? "rtl" : "ltr" }
        className={ language === "ar" ? "relative layout-rtl" : "relative" }
      >
        <Loader />

        {
          router.location.pathname !== "/" && router.location.pathname !== prefixedRootRoute ? (
            <FDRSNavigation toggleNav={this.props.toggleNav} navOpen={this.props.navOpen}/>
          ) : (
            <SimpleNavigation toggleNav={this.props.toggleNav} navOpen={this.props.navOpen}/>
          )
        }

        <div className="main-content-wrapper light">
          <div>
            { this.props.children }
          </div>

          <footer className="site-footer bg-dark clearfix hidden-print">
            {
              router.location.pathname !== "/" && router.location.pathname !== prefixedRootRoute ? (
                <div className="clearfix py2">
                  <div className="col sm-3 sm-offset-1">
                    <p className='inline-block align-middle small light m0' style={{lineHeight:'1rem',letterSpacing:'1px',fontFamily: "Helvetica Neue, sans-serif"}}>
                      <LanguageLink to="/fdrs" className='color-inverted caps'>
                        {/* <span className='color-primary'>{ t("common:nameParts")[0] }</span>&nbsp;{ t("common:nameParts")[1] }<br />{ t("common:nameParts")[2] } */}
                        <span>{ t("common:name") }</span>
                      </LanguageLink>
                    </p>
                    <p>{ t("common:credit") } <strong><a href="http://www.lapidus.se" target="_blank">Lapidus Interactive</a></strong></p>
                                 </div>
                  <div className="col sm-3">
                    <p className="subhead strong">
                      { t("common:navigation")[0].name }
                    </p>
                    <ul className="m0 p0">
                      <li className="block">
                        <LanguageLink to="/fdrs/overview">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[0].dropdownItems[0] }
                          </span>
                        </LanguageLink>
                      </li>
                      <li className="block">
                        <LanguageLink to="/fdrs/societies">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[0].dropdownItems[1] }
                          </span>
                        </LanguageLink>
                      </li>
                      <li className="block">
                        <LanguageLink to="/fdrs/report">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[0].dropdownItems[2] }
                          </span>
                        </LanguageLink>
                      </li>
                      <li className="block">
                        <LanguageLink to="/fdrs/data-download">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[0].dropdownItems[3] }
                          </span>
                        </LanguageLink>
                      </li>
                    </ul>

                    <br />

                    <ul className="m0 p0">
                      <li className="block">
                        <LanguageLink to="/fdrs/faq">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[1].name }
                          </span>
                        </LanguageLink>
                      </li>
                      {/* <li className="block">
                        <LanguageLink to="/fdrs/about">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[2].name }
                          </span>
                        </LanguageLink>
                      </li> */}
                      {/* <li className="block">
                        <LanguageLink to="/fdrs/acknowledgements">
                          <svg style={{width:16,height:16,marginTop:-1}} className="stroke-current" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline  fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16" transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                          <span>
                            { t("common:navigation")[3].name }
                          </span>
                        </LanguageLink>
                      </li> */}
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
                  {/* <div className="col base-10 base-offset-1 small">
                    <p>
                      &copy;&nbsp;{ t("common:copyright") }
                    </p>
                  </div> */}
                </div>
              ) : null
            }
            <div className="clearfix bg-darker py2">

              <div className="col sm-3 sm-offset-1">
                { this.props.location.pathname !== "/" ?
                  <LanguageLink to="/">{ t("common:backToDataIFRCorg") }</LanguageLink> :
                  ""
                }
              </div>
              <div className="col sm-3">

              </div>
              <div className="col sm-3">
                <p>
                  {/* &copy;&nbsp; */}
                  { t("common:copyright") }
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
