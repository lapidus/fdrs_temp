
import React from "react"
import { Link } from "react-router"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"

const BreadCrumbs = ({ language, chapter }) =>
  <div>
    <Link to={ prefixLanguageToRoute(language, "/") }>
      <span>{ "Home" }</span>
    </Link>
    <span style={{ padding: "0 1em" }}>{ "›" }</span>
    { chapter.title }
  </div>

BreadCrumbs.propTypes = {
  language: React.PropTypes.string.isRequired,
  chapter: React.PropTypes.object.isRequired,
}

export default BreadCrumbs
