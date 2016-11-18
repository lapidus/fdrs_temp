import React, { PropTypes } from "react"
import { Link } from "react-router"
import Select from "react-select"
import { connect } from "react-redux"

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
        lang.value === "en" ? null : lang.value,
        this.props.location
      )
    )
  }
  render() {
    const { language, navOpen } = this.props
    const headerClassName = navOpen ?
                            "site-header clearfix level-5 is-extended" :
                            "site-header clearfix level-5"

    return (
      <div
        dir={ language === "ar" ? "rtl" : "ltr" }
        className={ language === "ar" ? "layout-rtl" : "" }
      >
        <Loader />

        <div className={ "main-content-wrapper" }>
          <div style={{ paddingTop:"72px" }}>
            { this.props.children }
          </div>
          
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
