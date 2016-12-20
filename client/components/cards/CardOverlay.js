import React from "react"

const CardOverlay = ({ children }) => <div>{ children }</div>

CardOverlay.defaultProps = {
  componentIdentifier: 'CardOverlay',
}

CardOverlay.propTypes = {
  children: React.PropTypes.node,
  componentIdentifier: React.PropTypes.string,
}

export default CardOverlay
