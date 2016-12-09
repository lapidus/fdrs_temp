import React from "react"

const CardOverlay = ({ children }) => <div>{ children }</div>

CardOverlay.propTypes = {
  children: React.PropTypes.node,
}

export default CardOverlay
