import React from "react"
import { connect } from "react-redux"
import groupBy from "lodash/groupBy"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"

import Countries from "./Countries"

import {
  json,
  scaleLinear
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
      countries: null,
      loading: true,
      currentYearData: currentYearData,
      minData: min,
      maxData: max,
      scale: scaleLinear().domain([min, max]).range([4,40])
    }

    this.loadCountries = this.loadCountries.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    console.log("ADDING PROPS!")
    if(nextProps.indicator.id !== this.props.indicator.id) {
    }
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
  }
  projection() {
    return geoNaturalEarth()
            .scale(160)
            .translate([800 / 2, 480 / 2])
            // .rotate([this.props.center ? -this.props.center[1] : 0, this.props.center ? -this.props.center[0] : 0,0])
            .rotate([-10,0,0])
            .precision(.1)
  }
  loadCountries() {
    json("/api/report/world-topo.json", (err, world) => {
      if(err) console.log(err)
      console.log("Countries: ", topojson.feature(world, world.objects.countries).features.map(c => c.properties.name))
      this.setState({
        countries: topojson.feature(world, world.objects.countries).features,
        loading: false,
      })
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // return nextProps.selectedCountry !== this.props.selectedCountry || !this.state.countries
  //   return true
  // }
  componentDidMount() {
    var groups = groupBy(this.props.data, "year")
    this.loadCountries()
  }
  render() {
    const { data, indicator, nationalSocieties } = this.props

    return (
      <div className="" style={{ clear: "left", minHeight: '10rem' }}>
        {/* <h2>{ indicator.id } — { indicator.description }</h2> */}
        {
          this.state.loading ? (
            <div>
              <p className="text-center">{ "Loading map..." }</p>
            </div>
          ) : (
            ""
          )
        }
        <div style={{opacity: this.state.loading ? 0 : 1, transform: `translateY(${this.state.loading ? '30px' : '0'})`, transition: "all 0.75s"}}>
          {
            this.state.loading ? (
              ""
            ) : (
              <svg width={800} height={480} viewBox="0 0 800 480">
                <Countries countries={this.state.countries} projection={this.projection} />
                {
                  nationalSocieties.map((bubble, i) => {

                    const lat  = Number(bubble.lat)
                    const long = Number(bubble.long)
                    const coords = long && lat ? [long, lat] : undefined
                    const bubbleData = this.state.currentYearData.find((d) => d.KPI_DON_Code == bubble.KPI_DON_Code)

                    if(bubbleData && coords) {
                      return (
                        <circle key={i} cx={this.projection()(coords)[0]} cy={this.projection()(coords)[1]} r={this.state.scale(Number(bubbleData[this.props.indicator.id]))} style={{
                          fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.4)",
                          stroke: "#fff",
                          strokeWidth: "1.5px"
                        }} />
                      )
                    }

                  })
                }
              </svg>
            )
          }
        </div>
      </div>
    )
  }
}

Map.propTypes = {
  indicator: React.PropTypes.object.isRequired,
  data: React.PropTypes.array,
  nationalSocieties: React.PropTypes.array,
}

Map.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

const makeMapStateToProps = () => {
  const getIndicatorData = makeGetIndicatorData()
  return (state, props) => ({
    data: getIndicatorData(state, props),
  })
}

export default connect(makeMapStateToProps)(Map)
