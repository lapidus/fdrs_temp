
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter, Point } from "victory"
import { showTooltip, hideTooltip } from "../../actions/appActions"

class Trendline extends React.Component {
  constructor(props) {
    super(props)
  }
  // shouldComponentUpdate(nextProps) {
  //   return this.props.nationalSociety.KPI_DON_Code !== nextProps.nationalSociety.KPI_DON_Code
  // }
  render() {
    const {
      nationalSociety,
      groupedTimeSeries,
      currentIndicator,
    } = this.props

    const yearValues = Object.keys(groupedTimeSeries).map((year, i) => {
      return groupedTimeSeries[year].filter(obj => obj.KPI_DON_Code === nationalSociety.KPI_DON_Code)[0]
    })

    const dataPoints = yearValues.map(yearSociety => {
      const yearValue = yearSociety ? yearSociety[currentIndicator.id] : null
      return yearValue ? Number(yearValue) : null
    })

    return (
      <div className="relative">
        <div className="absolute b0 l0 small">
          { niceNum(dataPoints[0]) }
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
    )
  }
}

class SocietyRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const {
      nationalSociety,
      groupedTimeSeries,
      currentIndicator,
    } = this.props

    return (
      <tr>
        <td className="p1 sm-4">
          <Link to={`/societies/${nationalSociety.slug}`}>
            { nationalSociety.NSO_DON_name }
          </Link>
        </td>
        <td className="py05 px1 sm-4">
          <Trendline
            nationalSociety={nationalSociety}
            groupedTimeSeries={groupedTimeSeries}
            currentIndicator={currentIndicator}
          />
        </td>
        <td className="p1 sm-4">
          <span>{ niceNum(nationalSociety.value, 0, null, true) }</span>
        </td>
      </tr>
    )
  }
}

export default SocietyRow
