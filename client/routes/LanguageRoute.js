import React from "react"

const LanguageRoute = (props) => (
  <div>{ props.children }</div>
)

LanguageRoute.propTypes = {
  children: React.PropTypes.element,
}

export default LanguageRoute
