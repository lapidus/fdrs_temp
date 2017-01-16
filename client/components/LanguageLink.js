
import React from "react"
import { Link } from "react-router"
import { translate } from "react-i18next"

import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"

class LanguageLink extends React.Component {
  render() {

    const { language } = this.context.i18n

    return (
      <Link to={prefixLanguageToRoute(language, this.props.to)} className={this.props.className}>
        { this.props.children }
      </Link>
    )
  }
}

LanguageLink.contextTypes = {
  i18n: React.PropTypes.object,
}

export default translate()(LanguageLink)
