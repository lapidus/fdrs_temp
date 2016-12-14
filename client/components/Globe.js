
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
    json("/api/report/world-topo.json", (err, world) => {
      if(err) console.log(err)
      this.setState({
        countries: topojson.feature(world, world.objects.countries).features,
        loading: false,
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
      <div>
        {
          this.state.loading ? (
            <p className="text-center">{ "Loading map..." }</p>
          ) : (
            <svg width={200} height={200} viewBox="0 0 200 200">
              {this.state.countries.map((country, i) => (
                <path key={ i } d={geoPath().projection(this.projection())(country)} className="fill-beige" />
              ))}
              <circle cx={100} cy={100} r={8} style={{fill: "rgba(208,2,27,0.8)", stroke: "#fff", strokeWidth: "2px"}} />
            </svg>
          )
        }
      </div>
    )
  }
}

// class Globe extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.renderMap = this.renderMap.bind(this)
//     this.resizeWorldMap = this.resizeWorldMap.bind(this)
//   }
//   componentDidMount() {
//     this.renderMap(this.props)
//   }
//   renderMap(props) {
//     var mapContainer = this.mapContainer
//
//     mapContainer.innerHTML = ""
//
//     var width = 200
//     var height = 200
//
//     var mapOptions = {
//       element: mapContainer,
//       responsive: true,
//       height: height,
//       aspectRatio: 1,
//       height: height,
//       setProjection: (element) => {
//         var projection = d3.geo.orthographic()
//           .scale(100)
//           .translate([element.offsetWidth / 2, element.offsetHeight / 2])
//           .rotate([-props.center[1],-props.center[0],0])
//           .clipAngle(90)
//           .precision(.1)
//
//         var path = d3.geo.path()
//           .projection(projection)
//
//         return {path: path, projection: projection}
//       },
//       fills: {
//         defaultFill: "#ddd",
//         darkerFill: "#ccc",
//         darkestFill: "#bbb",
//         bubbleFill: "#EE3224",
//         bubbleFillEmpty: "#EE3224",
//
//         red: "#D0021B",
//         regionalOffice: "#0F9EE3",
//         countryClusterOffice: "#82BC01",
//         countryOffice: "#EE3224",
//         others: "#918784",
//       },
//       geographyConfig: {
//         popupOnHover: false,
//         // popupOnHover: props.choroplethDataset ? true : false,
//         // popupTemplate: props.choroplethDataset ? (geo, data) => {
//         //   return !data.popupContent ? '' : `
//         //     <div class='map-tooltip'>
//         //       <strong>${data.name}</strong>
//         //       <hr />
//         //       <div class='pt1'>
//         //         ${data.popupContent}
//         //       </div>
//         //     </div>
//         //   `
//         // } : false,
//         highlightOnHover: false,
//         borderWidth: 1,
//         borderColor: '#fff'
//       },
//       data: props.choroplethDataset || {},
//       done(datamap) {
//         console.log('Rendered map');
//       }
//     }
//
//     this.worldMap = new Datamap(mapOptions)
//
//     if (props.bubbleSource) {
//       d3.json(props.bubbleSource, response => {
//         this.worldMap.bubbles(props.bubbleCallback(response), {
//           popupOnHover: false,
//           // popupTemplate: props.bubblePopupTemplate
//         })
//       })
//     }
//     else if(props.bubbleCallback) {
//       this.worldMap.bubbles(props.bubbleCallback(), {
//         popupOnHover: false,
//         // popupTemplate: props.bubblePopupTemplate
//       })
//     }
//
//     window.addEventListener('resize', this.resizeWorldMap)
//
//   }
//   resizeWorldMap() {
//     this.worldMap.resize()
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log("Changing props of globe!", nextProps, this.props)
//     if(Object.keys(this.props.choroplethDataset)[0] !== Object.keys(nextProps.choroplethDataset)[0]) {
//       this.renderMap(nextProps)
//     }
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.resizeWorldMap)
//   }
//   render() {
//     return (
//       <div ref={(mapContainer) => { this.mapContainer = mapContainer }}></div>
//     )
//   }
// }

export default Globe
