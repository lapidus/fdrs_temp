
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter, Point } from "victory"
import { showTooltip, hideTooltip } from "../../actions/appActions"

class SocietyRow extends React.Component {
  constructor(props) {
    super(props)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Wants to update")
  //   if(nextProps.societiesBlacklist.length != this.props.societiesBlacklist || nextProps.currentIndicator.id != this.props.currentIndicator.id || nextProps.currentYear != this.props.currentYear) {
  //     console.log("Is updating")
  //     return true
  //   }
  // }
  render() {

    const { nationalSociety, rowKey, groupedTimeSeries, currentIndicator, currentYear } = this.props

    const yearValues = Object.keys(groupedTimeSeries).map((year, i) => {
      return groupedTimeSeries[year].filter(obj => obj.KPI_DON_Code === nationalSociety.KPI_DON_Code)[0]
    })

    const dataPoints = yearValues.map(yearSociety => {
      const yearValue = yearSociety ? yearSociety[currentIndicator.id] : null
      return yearValue ? Number(yearValue) : null
    })

    const latestData = groupedTimeSeries[currentYear]
                         .filter(obj => obj.KPI_DON_Code === nationalSociety.KPI_DON_Code)
    const latestNumber = latestData.length > 0 ? latestData[0][currentIndicator.id] : "N/A"

    return (
      <tr className={rowKey % 2 == 0 ? "bg-lighter" : ""}>
        <td className="p1 sm-4">
          <Link to={`/societies/${nationalSociety.slug}`}>
            { nationalSociety.NSO_DON_name }
          </Link>
        </td>
        <td className="py05 px1 sm-4">
          <div className="relative">
            <div className="absolute b0 l0 small">
              { dataPoints[0] }
            </div>
            <div className="absolute t0 r0 small">
              { niceNum(dataPoints[dataPoints.length - 1]) }
            </div>
            <svg width="450" height="110" viewBox="0 0 450 110">
              <VictoryLine
                standalone={false}
                height={110}
                padding={{top: 40, bottom: 30, left: 5, right: 5}}
                data={
                  dataPoints.map((point, i) => {
                    return { x: i, y: point }
                  })
                }
                style={{
                  data: { stroke: "#D0021B" }
                }}
              />
              <VictoryScatter
                standalone={false}
                height={110}
                padding={{top: 40, bottom: 30, left: 5, right: 5}}
                data={
                  dataPoints.map((point, i) => {
                    return { x: i, y: point }
                  })
                }
                size={4}
                style={{
                  data: {
                    fill: (d) => {
                      return (d.y || d.y === 0) ? "#D0021B" : "transparent"
                    },
                    stroke: "#FFF",
                    strokeWidth: (d) => {
                      return (d.y || d.y === 0) ? 2 : 0
                    }
                  }
                }}
              />
            </svg>
          </div>
        </td>
        <td className="p1 sm-4">
          <span>{ niceNum(latestNumber, 0, null, true) }</span>
        </td>
      </tr>
    )
  }
}

// const mapStateToProps = state => ({
//   tooltipVisible: state.appReducer.tooltipVisible
// })
//
// const mapDispatchToProps = dispatch => ({
//   showTooltip: () => dispatch(showTooltip()),
//   hideTooltip: () => dispatch(hideTooltip()),
// })

export default SocietyRow
