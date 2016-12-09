import React from "react"

const CardView = ({ children }) => <div>{ children }</div>

CardView.propTypes = {
  children: React.PropTypes.node,
}

export default CardView
