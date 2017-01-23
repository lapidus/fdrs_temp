import React from "react"

const CardView = ({ children }) => <div>{ children }</div>

CardView.defaultProps = {
  componentIdentifier: 'CardView',
}

CardView.propTypes = {
  children: React.PropTypes.node,
  componentIdentifier: React.PropTypes.string,
}

export default CardView
