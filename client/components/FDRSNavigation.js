
import React from "react"
import { translate } from "react-i18next"
import LanguageLink from "./LanguageLink"
import { connect } from "react-redux"
import constructLanguageRoute from "../utils/constructLanguageRoute"
import Dropdown from "./Dropdown"

import {
  toggleNav,
  closeNav
} from "../actions/appActions"

class FDRSNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: [ false, false ]
    }

    this.goToLanguage = this.goToLanguage.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      if(this.props.navOpen) this.props.closeNav()
    })
  }
  showDropdown(n) {
    this.setState({
      showDropdown: this.state.showDropdown.map((item, i) => {
        if(i === n) return true
        else return item
      })
    })
  }
  hideDropdown(n) {
    this.setState({
      showDropdown: this.state.showDropdown.map((item, i) => {
        if(i === n) return false
        else return item
      })
    })
  }
  goToLanguage(lang) {
    this.context.router.push(
      constructLanguageRoute(
        lang === "en" ? null : lang,
        this.context.router.location
      )
    )
  }

  renderFlag(language) {
    const flags = {
      en: (
        <svg style={{width:"1rem",height:"1rem",marginTop:-1}} className="inline-block" width="48px" height="48px" viewBox="0 0 48 48">
          <g>
            <path fill="#002781" d="M46,6H2C0.896,6,0,6.896,0,8v32c0,1.104,0.896,2,2,2h44c1.104,0,2-0.896,2-2V8C48,6.896,47.104,6,46,6z"/>
            <path fill="#E6E6E6" d="M48,8c0-1.104-0.896-2-2-2h-5.161L28,15.876V6h-8v9.876L7.161,6H2C0.896,6,0,6.896,0,8v2.586L12.239,20H0v8h12.239L0,37.415V40c0,1.104,0.896,2,2,2h5.161L20,32.124V42h8v-9.876L40.839,42H46c1.104,0,2-0.896,2-2v-2.585L35.761,28H48v-8H35.761L48,10.586V8z"/>
            <polygon fill="#D10D24" points="48,22 26,22 26,6 22,6 22,22 0,22 0,26 22,26 22,42 26,42 26,26 48,26 "/>
            <path fill="#D10D24" d="M47.001,6.307L29.2,20h3.28L48,8.062V8C48,7.268,47.587,6.656,47.001,6.307z"/>
            <path fill="#D10D24" d="M32.48,28H29.2l17.801,13.693C47.587,41.344,48,40.732,48,40v-0.062L32.48,28z"/>
            <path fill="#D10D24" d="M15.52,28L0,39.938V40c0,0.732,0.413,1.344,0.999,1.693L18.8,28H15.52z"/>
            <path fill="#D10D24" d="M15.52,20h3.28L0.999,6.307C0.413,6.656,0,7.268,0,8v0.062L15.52,20z"/>
          </g>
        </svg>
      ),
      fr: (
        <svg style={{width:"1rem",height:"1rem",marginTop:-1}} className="inline-block" width="48px" height="48px" viewBox="0 0 48 48">
          <g >
            <path fill="#01209F" d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"/>
            <path fill="#EF4234" d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"/>
            <rect x="16" y="6" fill="#E6E6E6" width="16" height="36"/>
          </g>
        </svg>
      ),
      es: (
        <svg style={{width:"1rem",height:"1rem",marginTop:-1}} className="inline-block" width="48px" height="48px" viewBox="0 0 48 48">
          <g >
            <path fill="#C60B1E" d="M48,16H0V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V16z"/>
            <rect y="16" fill="#FFC300" width="48" height="16"/>
            <path fill="#C60B1E" d="M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2v-8h48V40z"/>
            <polygon fill="#91443A" points="14,20 14,18 6,18 6,20 8,20 8,22 6,22 6,27.332 10,30 14,27.332 14,22 12,22 12,20 "/>
          </g>
        </svg>
      ),
      ar: (
        <svg style={{width:"1rem",height:"1rem",marginTop:-1}} className="inline-block" width="48px" height="48px" viewBox="0 0 48 48">
          <g >
            <path fill="#0B6B37" d="M48,40c0,1.105-0.895,2-2,2H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h44c1.105,0,2,0.895,2,2V40z"/>
            <path fill="#FFFFFF" d="M38,14v2h-6v2h6v2h-6v2h6v2h-6v2h6v2h-8v-4v-2v-2h-2v2h-2v2h2v4h-4V18h-2v10h-2V18h-2v10h-2v-4v-2h-2h-4v-2h6v-2h-6v-4H8v4v2v2v2v4v2h2h4h2h22h2v-2V18v-2v-2H38z M10,28v-4h4v4H10z"/>
            <rect x="12" y="14" fill="#FFFFFF" width="2" height="2"/>
            <rect x="18" y="14" fill="#FFFFFF" width="6" height="2"/>
            <rect x="26" y="16" fill="#FFFFFF" width="4" height="2"/>
            <rect x="8" y="34" fill="#FFFFFF" width="32" height="2"/>
          </g>
        </svg>
      )
    }

    return flags[language]
  }

  render() {

    const { t } = this.props
    const { language } = this.context.i18n

    return (
      <header className="relative clearfix shadow-4 bg-white z-index-max print-hidden">
        <div className="col sm-6">
          {/* <div class="relative t0 l0" style="height:68px">Logo</div> */}
          <a href="http://www.ifrc.org" target="_blank" className="inline-block align-middle link-no-underline">
            <img
              src="/img/ifrc-logo-2.png"
              height={ 72 }
              className="inline-block align-middle mx1"
            />
          </a>
          <h1 className='inline-block align-middle text-xs light m0 lh-small' style={{fontFamily: "Helvetica Neue, sans-serif"}}>
            <LanguageLink to="/fdrs" className='color-regular uppercase extended link-no-underline'>
              <span className='color-primary'>{ t("common:nameParts")[0] }</span>&nbsp;{ t("common:nameParts")[1] }<br />{ t("common:nameParts")[2] }
            </LanguageLink>
          </h1>
        </div>
        <div className="absolute t0 r0 z-index-1 sm-hidden">
          <button className='btn bg-light p15' onClick={ this.props.toggleNav }>
            <span className='block'>
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
        <div className={`absolute t0 r0 sm-relative col base-10 sm-6 bg-white sm-text-right nav ${this.props.navOpen ? "nav-open" : ""}`}>
          <nav className="relative block sm-inline-block t0 r0">
            <ul className="m0 p0">
              <li className="block relative sm-inline-block">
                <Dropdown showDropdown={ this.state.showDropdown[0] }>
                  <LanguageLink to="/fdrs" className="btn block py15 text-left bg-white z-index-1" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                    <span className="inline-block px05">
                      <svg style={{width:"1rem",height:"1rem",marginTop:-1}} width="20px" height="20px" viewBox="0 0 24 24">
                        <g transform="translate(0, 0)" className="stroke-current">
                          <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="4" x2="22" y2="4" strokeLinejoin="miter"/>
                          <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="12" x2="22" y2="12" strokeLinejoin="miter"/>
                          <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="20" x2="22" y2="20" strokeLinejoin="miter"/>
                          <rect x="2" y="2" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                          <rect x="2" y="10" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                          <rect x="2" y="18" fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="4" height="4" strokeLinejoin="miter"/>
                        </g>
                      </svg>
                    </span>
                    <span className="inline-block px05">
                      { "Services" }
                    </span>
                  </LanguageLink>
                  <div className="relative sm-absolute t100 l0 bg-white text-left shadow-4" style={{width:"200%"}}>
                    <ul className="m0 p0 base-12">
                      <li>
                        <LanguageLink to="/fdrs/overview/map" className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <svg style={{width:"1rem",height:"1rem",marginTop:-1,marginRight:"1rem"}} width="24px" height="24px" viewBox="0 0 24 24">
                            <g transform="translate(0, 0)" className="stroke-current">
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M5.7,3C6.4,3.5,7,4.1,7.5,5C7.9,5.7,8.9,7.8,8,9c-1,1.3-4,1.8-4,3c0,0.9,1.3,2,2,3c1,1.5,0.6,3,0,4c-0.3,0.5-0.8,0.9-1.3,1.2" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M20.6,5.2C18.5,6.3,15.5,7,15,7c-1,0.1-1.2-0.8-2-2c-0.6-0.9-2-2.1-2-3c0-0.4,0-0.7,0.1-1" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <circle fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="12" r="11" strokeLinejoin="miter"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M19,12.9c0,3.1-4,6.9-6,6.1c-1.8-0.7-0.5-2.1-1-6.1c-0.2-1.6,1.6-3,3.5-3S19,11.2,19,12.9z" strokeLinejoin="miter" strokeLinecap="butt"/>
                            </g>
                          </svg>
                          { "IFRC at a glance" }
                        </LanguageLink>
                      </li>
                      <li>
                        <LanguageLink to="/fdrs/societies" className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <svg style={{width:"1rem",height:"1rem",marginTop:-3,marginRight:"1rem"}} width="24px" height="24px" viewBox="0 0 24 24">
                            <g  transform="translate(0, 0)" className="stroke-current">
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M12,23c-2-1.6-2.1-6.8,1-8c1.6-0.6,2.2,2.9,5.4,2c0.6-0.2,2.1,0.7,1.6,2.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M6.3,4.8c0.6,0.5,1.1,1.1,1.6,1.8c0.4,0.7,1.3,2.6,0.5,3.6c-0.9,1.2-3.6,1.6-3.6,2.7c0,0.8,1.2,1.8,1.8,2.7c1,1.4,0.5,2.8,0,3.6c-0.3,0.5-0.7,0.8-1.2,1.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M20.2,7.3C21.3,8.9,22,10.9,22,13c0,5.5-4.5,10-10,10S2,18.5,2,13S6.5,3,12,3c0.5,0,1,0,1.5,0.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M21,5c0,2.5-4,6-4,6s-4-3.5-4-6c0-2.5,2.1-4,4-4S21,2.5,21,5z" strokeLinejoin="miter"/>
                            </g>
                          </svg>
                          { "NS society profiles" }
                        </LanguageLink>
                      </li>
                      <li>
                        <LanguageLink to="/fdrs/report" className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <svg style={{width:"1rem",height:"1rem",marginTop:-3,marginRight:"1rem"}} width="24px" height="24px" viewBox="0 0 24 24">
                            <g transform="translate(0, 0)" className="stroke-current">
                              <rect x="2" y="1" fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="20" height="22" strokeLinejoin="miter"/>
                              <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="12" y1="8" x2="12" y2="16" strokeLinejoin="miter"/>
                              <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="8" y1="14" x2="8" y2="16" strokeLinejoin="miter"/>
                              <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="16" y1="11" x2="16" y2="16" strokeLinejoin="miter"/>
                            </g>
                          </svg>
                          { "Everyone counts report" }
                        </LanguageLink>
                      </li>
                      <li>
                        <LanguageLink to="/fdrs/data-download" className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <svg style={{width:"1rem",height:"1rem",marginTop:-1,marginRight:"1rem"}} width="24px" height="24px" viewBox="0 0 24 24">
                            <g transform="translate(0, 0)" className="stroke-current">
                              <line fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                              <polyline fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                              <path fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                            </g>
                          </svg>
                          { "Data download" }
                        </LanguageLink>
                      </li>
                    </ul>
                  </div>
                </Dropdown>
              </li>
              <li className="block relative sm-inline-block">
                <LanguageLink to="/fdrs/faq" className="btn block py15">
                  <span className="inline-block px05">
                    {/* <svg style={{width:"1rem",height:"1rem",marginTop:-1}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)" className="stroke-current">
                        <rect x="1" y="1" fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" width="22" height="22" strokeLinejoin="miter"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M12,14v-1c1.6,0,3-1.4,3-3s-1.4-3-3-3c-1.2,0-2.3,0.9-2.8,1.9" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="12" y1="17" x2="12" y2="18" strokeLinejoin="miter"/>
                      </g>
                    </svg> */}
                    <svg style={{width:"1.25rem",height:"1.25rem",marginTop:-2}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)" className="stroke-current">
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="1" y1="12" x2="3" y2="12" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="4.2" y1="4.2" x2="5.6" y2="5.6" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="12" y1="1" x2="12" y2="3" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="19.8" y1="4.2" x2="18.4" y2="5.6" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="23" y1="12" x2="21" y2="12" strokeLinejoin="miter"/>
                        <path fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" d="M18,12c0-3.3-2.7-6-6-6s-6,2.7-6,6c0,2.6,1.7,4.8,4,5.7V20h4v-2.3C16.3,16.8,18,14.6,18,12z" strokeLinejoin="miter"/>
                        <line fill="none" stroke="#343434" strokeWidth="1.8" strokeLinecap="square" strokeMiterlimit="10" x1="10" y1="23" x2="14" y2="23" strokeLinejoin="miter"/>
                      </g>
                    </svg>
                  </span>
                  <span className="inline-block px05">{ "FAQ" }</span>
                </LanguageLink>
              </li>
              <li className="block relative sm-inline-block">
                <Dropdown showDropdown={ this.state.showDropdown[1] }>
                  <div className="btn block py15 text-left bg-white z-index-1 sm-visible sm-block" style={{minWidth:94}} onFocus={() => this.showDropdown(1)} onBlur={() => this.hideDropdown(1)}>
                    <span className="inline-block px05">
                      { this.renderFlag(language) }
                    </span>
                    <span className="inline-block px05 uppercase">
                      { language }
                    </span>
                  </div>
                  <div className="relative sm-absolute t100 l0 bg-white text-left shadow-4" style={{width:"100%"}}>
                    <ul>
                      <li>
                        <button onClick={() => this.goToLanguage("en")} className="btn px05 py1 text-left base-12" onFocus={() => this.showDropdown(1)} onBlur={() => this.hideDropdown(1)}>
                          <span className="inline-block px05">
                            { this.renderFlag("en") }
                          </span>
                          <span className="inline-block px05">
                            { "EN" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("fr")} className="btn px05 py1 text-left base-12" onFocus={() => this.showDropdown(1)} onBlur={() => this.hideDropdown(1)}>
                          <span className="inline-block px05">
                            { this.renderFlag("fr") }
                          </span>
                          <span className="inline-block px05">
                            { "FR" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("es")} className="btn px05 py1 text-left base-12" onFocus={() => this.showDropdown(1)} onBlur={() => this.hideDropdown(1)}>
                          <span className="inline-block px05">
                            { this.renderFlag("es") }
                          </span>
                          <span className="inline-block px05">
                            { "ES" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("ar")} className="btn px05 py1 text-left base-12" onFocus={() => this.showDropdown(1)} onBlur={() => this.hideDropdown(1)}>
                          <span className="inline-block px05">
                            { this.renderFlag("ar") }
                          </span>
                          <span className="inline-block px05">
                            { "AR" }
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </Dropdown>
                {/* <a href="#" className="btn block p15 bg-light">{ "EN" }</a> */}
              </li>
              <li className="block relative sm-inline-block">
                <a href="http://fdrs.ifrc.org" target="_blank" className="btn block p15 bg-primary color-inverted">{ "Login" }</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

FDRSNavigation.propTypes = {
  t: React.PropTypes.func.isRequired,
  toggleNav: React.PropTypes.func,
  closeNav: React.PropTypes.func,
}

FDRSNavigation.contextTypes = {
  router: React.PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  navOpen: state.appReducer.navOpen,
})

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav()),
  closeNav: () => dispatch(closeNav()),
})

export default translate()(connect(mapStateToProps, mapDispatchToProps)(FDRSNavigation))
