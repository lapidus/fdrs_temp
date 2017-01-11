
import React from "react"
// import Datamap from "datamaps"
import {
  // select,
  // selectAll,
  json
} from "d3"
import {
  geoPath,
  geoOrthographic
} from "d3-geo";
import topojson from "topojson-client"

class Globe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: null,
      loading: true,
    }

    this.loadCountries = this.loadCountries.bind(this)
  }
  projection() {
    return geoOrthographic()
            .scale(100)
            .translate([200 / 2, 200 / 2])
            .rotate([-this.props.center[1],-this.props.center[0],0])
            .precision(.1)
  }
  loadCountries() {
    return new Promise((resolve, reject) => {
      json("/api/report/world-topo.json", (err, world) => {
        if (err) console.log(err)
        this.setState({
          countries: topojson.feature(world, world.objects.countries).features,
          loading: false,
        })
        resolve()
      })
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.selectedCountry !== this.props.selectedCountry || !this.state.countries
  }
  componentDidMount() {
    this.loadCountries()
  }
  render() {
    return (
      <div className="relative ratio-1-1 overflow-hidden">
        {
          this.state.loading ? (
            <div className="absolute t0 l0 r0 b0 base-12 overflow-hidden">
              <p className="relative text-center t50">{ "Loading map..." }</p>
            </div>
          ) : null
        }
        <div className="absolute t0 l0 r0 b0 overflow-hidden" style={{opacity: this.state.loading ? 0 : 1, transform: this.state.loading ? "rotate(10deg)" : "rotate(0)", transition: "all 1s"}}>
        {
          !this.state.loading ? (
            <svg width={200} height={200} viewBox="0 0 200 200">
              {this.state.countries.map((country, i) => (
                <path key={ i } d={geoPath().projection(this.projection())(country)} style={{fill: "#EFEBE9"}} />
              ))}
              <circle cx={100} cy={100} r={8} style={{fill: "rgba(208,2,27,0.8)", stroke: "#fff", strokeWidth: "2px"}} />
            </svg>
          ) : null
        }
        </div>
      </div>
    )
  }
}

export default Globe
