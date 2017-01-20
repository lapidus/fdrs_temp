import React from "react"
import LanguageLink  from "../../components/LanguageLink"

const BreadCrumbs = ({ language, chapter }) =>
  <div>
    <LanguageLink to="/fdrs/report">
      <span>{ "Home" }</span>
    </LanguageLink>
    <span style={{ padding: "0 1em" }}>{ "›" }</span>
    { chapter.title }
  </div>

BreadCrumbs.propTypes = {
  language: React.PropTypes.string.isRequired,
  chapter: React.PropTypes.object.isRequired,
}

export default BreadCrumbs
