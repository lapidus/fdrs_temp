
import React, { PropTypes } from "react"
import { connect } from "react-redux"
// import { showTooltip, hideTooltip } from "../actions/appActions"

class Tooltip extends React.Component {
  render() {

    const tooltipStyles = {
      display: this.props.tooltipVisible ? "block" : "none",
      top: this.props.tooltipPosition.top + 20,
      left: this.props.tooltipPosition.left + 20,
      zIndex: 9999,
      maxWidth: 240,
      lineHeight: 1.25,
    }

    const caretStyles = {
      display: "block",
      position: "absolute",
      top: "50%",
      right: "100%",
      background: "transparent",
      width: 0,
      height: 20,
      marginTop: -10,
      borderRight: "10px solid #FFF",
      borderTop: "10px solid transparent",
      borderBottom: "10px solid transparent",
    }

    return (
      <div className="fixed shadow-5 bg-white p1 y-center-self" style={tooltipStyles}>
        <div style={caretStyles}></div>
        <small>{ this.props.tooltipContent ? this.props.tooltipContent.text : "Empty tooltip" }</small>
      </div>
    )
  }
}

Tooltip.propTypes = {
  // t: PropTypes.func.isRequired,
  tooltipVisible: PropTypes.bool,
  tooltipContent: PropTypes.object,
  tooltipPosition: PropTypes.object,
  showTooltip: PropTypes.func,
  hideTooltip: PropTypes.func,
}

const mapStateToProps = state => ({
  tooltipVisible: state.appReducer.tooltipVisible,
  tooltipContent: state.appReducer.tooltipContent,
  tooltipPosition: state.appReducer.tooltipPosition,
})

// const mapDispatchToProps = dispatch => ({
//   showTooltip: (content) => dispatch(showTooltip(content)),
//   hideTooltip: (content) => dispatch(hideTooltip(content)),
// })

export default connect(mapStateToProps)(Tooltip)
