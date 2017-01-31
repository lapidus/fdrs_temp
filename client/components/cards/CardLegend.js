import React from "react"

const CardLegend = ({ children }) => <div>{ children }</div>

CardLegend.defaultProps = {
  componentIdentifier: 'CardLegend',
}

CardLegend.propTypes = {
  children: React.PropTypes.node,
  componentIdentifier: React.PropTypes.string,
}

export default CardLegend
