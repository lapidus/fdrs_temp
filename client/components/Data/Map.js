import React from "react"
import { connect } from "react-redux"
import groupBy from "lodash/groupBy"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"
import { Origin } from "redux-tooltip"

import Countries from "./Countries"
import niceNum from "../../utils/niceNum"

import {
  json,
  scaleLinear,
  scalePow,
  scaleLog,
} from "d3"
import {
  geoPath,
  geoOrthographic,
  geoMercator
} from "d3-geo";
import {
  geoWinkel3,
  geoNaturalEarth,
  geoRobinson,
  geoTimes,
  geoWagner6
} from "d3-geo-projection"
import topojson from "topojson-client"

import {
  makeGetIndicatorData,
} from "../../selectors"

import {
  fetchCountries,
} from "../../actions/appActions"

const SVGOrigin = Origin.wrapBy("g")

class Map extends React.Component {
  constructor(props) {
    super(props)

    const { groupedTimeSeries, currentYear, indicator } = this.props
    const currentYearData = groupedTimeSeries[currentYear]

    const maxArray = Object.keys(groupedTimeSeries).map(year => {
      const { id } = indicator
      return Number(maxBy(groupedTimeSeries[year], o => Number(o[id]))[id])
    })

    const min = 0
    const max = Number(maxBy(maxArray))

    this.state = {
      countries: this.props.countryPaths ? topojson.feature(props.countryPaths, props.countryPaths.objects.countries).features : null,
      loading: !this.props.countryPaths ? true : false,
      currentYearData: currentYearData,
      minData: min,
      maxData: max,
      scale: scaleLinear().domain([min, max]).range([4,40])
    }
  }
  componentWillReceiveProps(nextProps) {
    // if(nextProps.indicator.id !== this.props.indicator.id) {
    // }
    const { groupedTimeSeries, currentYear, indicator } = nextProps
    const currentYearData = groupedTimeSeries[currentYear]
    const maxArray = Object.keys(groupedTimeSeries).map(year => {
      const { id } = indicator
      return Number(maxBy(groupedTimeSeries[year], o => Number(o[id]))[id])
    })
    const min = 0
    const max = maxBy(maxArray)

    this.setState({
      currentYearData: currentYearData,
      minData: min,
      maxData: max,
      scale: scaleLinear().domain([min, max]).range([4,40])
    })

    if(nextProps.countryPaths !== this.props.countryPaths) {
      this.setState({
        countries: topojson.feature(nextProps.countryPaths, nextProps.countryPaths.objects.countries).features,
        loading: false,
      })
    }
  }
  projection() {
    return geoNaturalEarth()
            .scale(160)
            .translate([800 / 2, 480 / 2])
            // .rotate([this.props.center ? -this.props.center[1] : 0, this.props.center ? -this.props.center[0] : 0,0])
            .rotate([-10,0,0])
            .precision(.1)
  }
  componentDidMount() {
    var groups = groupBy(this.props.data, "year")
    if(!this.props.countryPaths) {
      this.props.fetchCountries()
    }
  }
  render() {
    const { data, indicator, nationalSocieties } = this.props

    const tooltipContent = (name, value) => (
      <div className="text-center p1" style={{maxWidth:240}}>
        <div>{ name }</div>
        <div className="title my1"><strong>{ niceNum(value, null, null, true) }</strong></div>
      </div>
    )

    return (
      <div className="" style={{ clear: "left", minHeight: '10rem' }}>
        {/* <h2>{ indicator.id } — { indicator.description }</h2> */}
        {
          this.state.loading ? (
            <div>
              <p className="text-center">{ "Loading map..." }</p>
            </div>
          ) : (
            null
          )
        }
        <div style={{opacity: this.state.loading ? 0 : 1, transform: `translateY(${this.state.loading ? '30px' : '0'})`, transition: "all 0.75s"}}>
          {
            <svg width={800} height={480} viewBox="0 0 800 480">
              {
                !this.state.loading ? (
                  <Countries countries={this.state.countries} projection={this.projection} />
                ) : (null)
              }
              { !this.state.loading ?
                nationalSocieties.map((bubble, i) => {

                  const lat  = Number(bubble.lat)
                  const long = Number(bubble.long)
                  const coords = long && lat ? [long, lat] : undefined
                  const bubbleData = this.state.currentYearData.find((d) => d.KPI_DON_Code == bubble.KPI_DON_Code)

                  if(bubbleData && coords) {
                    return (
                      <SVGOrigin
                        content={tooltipContent(this.props.nationalSocietyNames[bubble.KPI_DON_Code], bubbleData[this.props.indicator.id])}
                        key={bubble.KPI_DON_Code}>
                        {/* <circle
                          key={bubble.KPI_DON_Code}
                          cx={this.projection()(coords)[0]}
                          cy={this.projection()(coords)[1]}
                          r={bubbleData[this.props.indicator.id] ? this.state.scale(Number(bubbleData[this.props.indicator.id])) : 0}
                          style={{
                            fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.4)",
                            stroke: "#fff",
                            strokeWidth: "1.5px",
                            cursor: "pointer"
                          }}
                          onMouseEnter={ (e) => this.props.bubbleMouseEnter(e, bubble, bubbleData[this.props.indicator.id]) }
                          onMouseLeave={ () => this.props.bubbleMouseLeave() }
                          onClick={ (e) => this.props.bubbleClick(e, bubble, bubbleData[this.props.indicator.id]) }
                        /> */}
                        <circle
                          cx={this.projection()(coords)[0]}
                          cy={this.projection()(coords)[1]}
                          r={bubbleData[this.props.indicator.id] ? this.state.scale(Number(bubbleData[this.props.indicator.id])) : 0}
                          style={{
                            fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.1)",
                            stroke: "#fff",
                            strokeWidth: "1.5px",
                            cursor: "pointer"
                          }}
                          onClick={ (e) => this.props.bubbleClick(e, bubble, bubbleData[this.props.indicator.id]) }
                        />
                      </SVGOrigin>
                    )
                  }

                }) : (null)
              }
            </svg>
          }
        </div>
      </div>
    )
  }
}

Map.defaultProps = {
  bubbleMouseEnter: null,
  bubbleMouseLeave: null,
  bubbleClick: null,
}

Map.propTypes = {
  indicator: React.PropTypes.object.isRequired,
  data: React.PropTypes.array,
  nationalSocieties: React.PropTypes.array,
  countryPaths: React.PropTypes.object,
}

Map.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

const makeMapStateToProps = () => {
  const getIndicatorData = makeGetIndicatorData()
  return (state, props) => ({
    data: getIndicatorData(state, props),
    countryPaths: state.appReducer.countryPaths,
    fetchingCountries: state.appReducer.fetchingCountries,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
})

export default connect(makeMapStateToProps, mapDispatchToProps)(Map)
