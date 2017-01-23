
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

class SimpleNavigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: [ false, false ]
    }

    this.goToLanguage = this.goToLanguage.bind(this)
  }
  componentDidMount() {
    // window.addEventListener("resize", () => {
    //   if(this.props.navOpen) this.props.closeNav()
    // })
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
          <a href="http://www.ifrc.org" target="_blank" className="inline-block align-middle link-no-underline">
            <img
              src="/img/ifrc-logo-2.png"
              height={ 72 }
              className="inline-block align-middle mx1"
            />
          </a>
          <h1 className='inline-block align-middle text-xs light m0 lh-small' style={{fontFamily: "Helvetica Neue, sans-serif"}}>
            <LanguageLink to="/" className='color-regular uppercase extended link-no-underline'>
              IFRC Data Initiatives
            </LanguageLink>
          </h1>
        </div>
        {/* <div className={`absolute t0 r0 sm-relative col base-10 sm-6 bg-white sm-text-right`}> */}
        <div className={`absolute t0 r0 sm-relative col base-auto sm-6 bg-white sm-text-right`}>
          <nav className="relative block sm-inline-block t0 r0">
            <ul className="m0 p0">
              <li className="block relative sm-inline-block">
                <Dropdown showDropdown={ this.state.showDropdown[0] }>
                  <div className="btn block py15 px1 text-left bg-white z-index-1" style={{minWidth:105}} onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
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
                        <button onClick={() => this.goToLanguage("en")} className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <span className="inline-block px05">
                            { this.renderFlag("en") }
                          </span>
                          <span className="inline-block px05">
                            { "EN" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("fr")} className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <span className="inline-block px05">
                            { this.renderFlag("fr") }
                          </span>
                          <span className="inline-block px05">
                            { "FR" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("es")} className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
                          <span className="inline-block px05">
                            { this.renderFlag("es") }
                          </span>
                          <span className="inline-block px05">
                            { "ES" }
                          </span>
                        </button>
                      </li>
                      <li>
                        <button onClick={() => this.goToLanguage("ar")} className="btn px1 py1 text-left base-12" onFocus={() => this.showDropdown(0)} onBlur={() => this.hideDropdown(0)}>
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
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

SimpleNavigation.propTypes = {
  t: React.PropTypes.func.isRequired,
  toggleNav: React.PropTypes.func,
  closeNav: React.PropTypes.func,
}

SimpleNavigation.contextTypes = {
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

export default translate()(connect(mapStateToProps, mapDispatchToProps)(SimpleNavigation))
