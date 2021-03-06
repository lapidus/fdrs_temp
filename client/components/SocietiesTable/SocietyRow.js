
import React from "react"
import { connect } from "react-redux"
import LanguageLink  from "../../components/LanguageLink"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter, Point } from "victory"
import { showTooltip, hideTooltip } from "../../actions/appActions"
import sortBy from "lodash/sortBy"

function recalculateDataPoints(allYears, nsData, currentIndicator) {

  allYears = ["2010", "2011", "2012", "2013", "2014", "2015"];

  return allYears.map(year => {
    const filtered = nsData.filter(obj => obj.KPI_Year === year)[0]

    return {
      x: new Date(year, 1, 1),
      y: filtered ? (filtered[currentIndicator.id] ? Number(filtered[currentIndicator.id]) : null) : null
    }
  })
}

class Trendline extends React.Component {
  constructor(props) {
    super(props)

    const {
      nationalSociety,
      groupedTimeSeries,
      groupedByCode,
      currentIndicator,
    } = props

    const allYears = Object.keys(groupedTimeSeries)
    const nsData = sortBy(groupedByCode[nationalSociety.KPI_DON_Code], "KPI_Year")

    this.state = {
      allYears: allYears,
      nsData: nsData,
      dataPoints: recalculateDataPoints(allYears, nsData, currentIndicator),
    }
  }
  // shouldComponentUpdate(nextProps) {
  //   const didIndicatorChange = nextProps.indicator && this.props.indicator ? nextProps.indicator.id !== this.props.indicator.id : false
  //   return didIndicatorChange
  // }
  componentWillReceiveProps(nextProps) {
    if(nextProps.currentIndicator.id !== this.props.currentIndicator.id) {
      this.setState({
        dataPoints: recalculateDataPoints(this.state.allYears, this.state.nsData, nextProps.currentIndicator)
      })
    }
  }
  render() {
    const { dataPoints } = this.state

    return (
      <div className="relative">
        <div className="absolute b0 l0 small">
          {/* { niceNum(dataPoints[0].y) } */}
        </div>
        <div className="absolute t0 r0 small">
          { niceNum(dataPoints[dataPoints.length - 1].y) }
        </div>
        <svg style={{ width:"100%" }} width="450" height="110" viewBox="0 0 450 110">
          <VictoryLine
            standalone={false}
            height={110}
            padding={{top: 40, bottom: 30, left: 5, right: 5}}
            domain={{
              x: [new Date(2010,1,1), new Date(2015,1,1)]
            }}
            data={ dataPoints }
            style={{
              data: { stroke: "#D0021B" }
            }}
          />
          <VictoryScatter
            standalone={false}
            height={110}
            padding={{top: 40, bottom: 30, left: 5, right: 5}}
            domain={{
              x: [new Date(2010,1,1), new Date(2015,1,1)]
            }}
            data={ dataPoints }
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
  // shouldComponentUpdate(nextProps) {
  //   const didIndicatorChange = nextProps.indicator && this.props.indicator ? nextProps.indicator.id !== this.props.indicator.id : false
  //   return didIndicatorChange || Boolean(this.props.forceUpdate)
  // }
  render() {

    const {
      nationalSociety,
      groupedTimeSeries,
      groupedByCode,
      currentIndicator,
      unselectSociety,
      nationalSocietyName,
    } = this.props

    return (
      <tr>
        <td className="px1 py05 base-4">
          <LanguageLink to={`/fdrs/societies/${nationalSociety.slug}`} className="color-primary">
            {/* { nationalSociety.NSO_DON_name } */}
            { nationalSocietyName }
          </LanguageLink>
        </td>
        <td className="py05 px1 base-4">
          <Trendline
            nationalSociety={nationalSociety}
            groupedTimeSeries={groupedTimeSeries}
            groupedByCode={groupedByCode}
            currentIndicator={currentIndicator}
          />
        </td>
        <td className="px1 py05 base-4">
          <div className="p1 relative">
            <span>{ niceNum(nationalSociety.value, 0, null, true) }</span>
            {
              unselectSociety ? (
                <button onClick={(e) => unselectSociety(nationalSociety.KPI_DON_Code)} style={{right:16}} className="btn absolute t50 y-center-self bg-primary">remove</button>
              ) : (
                null
              )
            }
          </div>
        </td>
      </tr>
    )
  }
}

export default SocietyRow
