import React from "react"

const ChartTooltip = ({ visible, position, children }) =>
  <div
    className="chart-tooltip"
    style={{
      display: visible ? "block" : "none",
      top: position[0] - 8 || 0,
      left: position[1] || 0,
    }}
  >
    { children }
  </div>

ChartTooltip.propTypes = {
  visible: React.PropTypes.bool,
  position: React.PropTypes.array,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
}

export default ChartTooltip
