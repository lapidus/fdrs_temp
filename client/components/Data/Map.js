import React from "react"
import { connect } from "react-redux"
import groupBy from "lodash/groupBy"

import Countries from "./Countries"

import {
  json
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

    this.state = {
      countries: null,
      loading: true,
    }

    this.loadCountries = this.loadCountries.bind(this)
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
      <div className="" style={{ clear: "left" }}>
        {/* <h2>{ indicator.id } — { indicator.description }</h2> */}
        <div>
          {
            this.state.loading ? (
              <p className="text-center">{ "Loading map..." }</p>
            ) : (
              <svg width={800} height={480} viewBox="0 0 800 480">
                <Countries countries={this.state.countries} projection={this.projection} />
                {
                  nationalSocieties.map((bubble, i) => {
                    const lat  = Number(bubble.lat)
                    const long = Number(bubble.long)
                    const coords = long && lat ? [long, lat] : undefined
                    return coords ? <circle key={i} cx={this.projection()(coords)[0]} cy={this.projection()(coords)[1]} r={8} style={{
                      fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.4)",
                      stroke: "#fff",
                      strokeWidth: "2px"
                    }} /> : false
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
