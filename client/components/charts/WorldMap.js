import React from "react"
import { connect } from "react-redux"
import Countries from "../Data/Countries"
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

import {feature} from "topojson-client"

import {
  fetchCountries,
} from "../../actions/appActions"

import { actions } from "redux-tooltip"
const { show, hide } = actions

const reference = {
  4: "AFG",
  50: "BGD",
  140: "CAF",
  180: "COD",
  231: "ETH",
  368: "IRQ",
  466: "MLI",
  104: "MMR",
  586: "PAK",
  608: "PHL",
  706: "SOM",
  728: "SSD",
  760: "SYR",
  804: "UKR",
  887: "YEM",
}

class CountryMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countries: this.props.countryPaths ? feature(props.countryPaths, props.countryPaths.objects.countries).features : null,
      loading: !this.props.countryPaths ? true : false,
    }

    this.handleTooltipShow = this.handleTooltipShow.bind(this)
    this.handleTooltipHide = this.handleTooltipHide.bind(this)
  }
  projection() {
    return geoNaturalEarth()
            .scale(160)
            .translate([800 / 2, 480 / 2])
            .rotate([-10,0,0])
            .precision(.1)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.countryPaths !== this.props.countryPaths) {
      this.setState({
        countries: feature(nextProps.countryPaths, nextProps.countryPaths.objects.countries).features,
        loading: false,
      })
    }
  }
  componentDidMount() {
    if(!this.props.countryPaths) {
      this.props.fetchCountries()
    }
  }
  handleTooltipShow(e, d) {
    if(this.props.selectedCountries) {
      const country = this.props.selectedCountries[reference[d.id]]
      this.props.showTooltip({
        origin: e.target,
        content: country.name + " - " + niceNum(country.number, null, null, true)
      });
    }
  }
  handleTooltipHide() {
    this.props.hideTooltip()
  }
  render() {
    return (
      <div style={{ clear: "left", minHeight: '10rem' }}>
        {
          this.state.loading ? (
            <div className="absolute t25 base-12 text-center">
              <span className="inline-block bg-secondary p1">{ "Loading map..." }</span>
            </div>
          ) : (
            null
          )
        }
        <div style={{opacity: this.state.loading ? 0 : 1, transform: `translateY(${this.state.loading ? '30px' : '0'})`, transition: "all 0.75s"}}>
          {
            <svg style={{width:"100%"}} width={800} height={480} viewBox="0 0 800 480">
              {
                !this.state.loading ? (
                  <Countries
                    countries={this.state.countries}
                    projection={this.projection}
                    selectedCountries={this.props.selectedCountries}
                    handleTooltipShow={this.handleTooltipShow}
                    handleTooltipHide={this.handleTooltipHide}
                  />
                ) : (null)
              }
              {
                this.props.bubbles ? (
                  <g>
                    {
                      this.props.bubbles.map((bubble, i) => {
                        return <circle
                                  key={i}
                                  cx={this.projection()([bubble.longitude, bubble.latitude])[0]}
                                  cy={this.projection()([bubble.longitude, bubble.latitude])[1]}
                                  r={8}
                                  style={{
                                    fill: "#D0021B"
                                  }}
                                />
                      })
                    }
                  </g>
                ) : null
              }
            </svg>
          }
        </div>
      </div>
    )
  }
}

CountryMap.propTypes = {
  countryPaths: React.PropTypes.object,
  handleTooltipShow: React.PropTypes.func,
  handleTooltipHide: React.PropTypes.func,
}

CountryMap.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

const makeMapStateToProps = () => {
  return (state, props) => ({
    countryPaths: state.appReducer.countryPaths,
    fetchingCountries: state.appReducer.fetchingCountries,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchCountries: () => dispatch(fetchCountries()),
  showTooltip: (o) => dispatch(show(o)),
  hideTooltip: () => dispatch(hide()),
})

export default connect(makeMapStateToProps, mapDispatchToProps)(CountryMap)

// ==================================================================

// import React from 'react';
// import Datamap from 'datamaps';
//
// class WorldMap extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.renderMap = this.renderMap.bind(this);
//     this.resizeWorldMap = this.resizeWorldMap.bind(this);
//   }
//   componentDidMount() {
//     this.renderMap();
//   }
//   renderMap() {
//     var mapContainer = this.refs.mapContainer;
//
//     var width = mapContainer.offsetWidth;
//     var height = 600;
//
//     var mapOptions = {
//       element: mapContainer,
//       responsive: true,
//       height: height,
//       // projection: 'times',
//       setProjection: function(element) {
//         var projection = d3.geo.times()
//           .center([15, -2])
//           .scale(element.offsetWidth / 5)
//           // .rotate([0,0,0])
//           .translate([element.offsetWidth / 2, element.offsetHeight / 1.75]);
//         var path = d3.geo.path()
//           .projection(projection);
//         return { path: path, projection: projection };
//       },
//       fills: {
//         defaultFill: '#ddd',
//         darkerFill: '#ccc',
//         darkestFill: '#bbb',
//         bubbleFill: '#EE3224',
//         bubbleFillEmpty: '#EE3224',
//
//         regionalOffice: '#0F9EE3',
//         countryClusterOffice: '#82BC01',
//         countryOffice: '#EE3224',
//         others: '#918784'
//       },
//       geographyConfig: {
//         // popupOnHover: false,
//         popupOnHover: this.props.choroplethDataset ? true : false,
//         popupTemplate: this.props.choroplethDataset ? (geo, data) => {
//           return !data.popupContent ? '' : `
//             <div class='map-tooltip'>
//               <strong>${data.name}</strong>
//               <hr />
//               <div class='pt1'>
//                 ${data.popupContent}
//               </div>
//             </div>
//           `
//         } : false,
//         highlightOnHover: false,
//         borderWidth: 1,
//         borderColor: '#fff'
//       },
//       data: this.props.choroplethDataset || {},
//       done(datamap) {
//         console.log('Rendered map');
//       }
//     };
//
//     this.worldMap = new Datamap(mapOptions);
//
//     if (this.props.bubbleSource) {
//       d3.json(this.props.bubbleSource, response => {
//         this.worldMap.bubbles(this.props.bubbleCallback(response), {
//           popupTemplate: this.props.bubblePopupTemplate
//         });
//       });
//     }
//     else if(this.props.bubbleCallback) {
//       this.worldMap.bubbles(this.props.bubbleCallback(), {
//         popupTemplate: this.props.bubblePopupTemplate
//       });
//     }
//
//     window.addEventListener('resize', this.resizeWorldMap);
//
//   }
//   resizeWorldMap() {
//     this.worldMap.resize();
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.resizeWorldMap)
//   }
//   render() {
//     return (
//       <div>
//         <h4 className='title strong'>{this.props.title}</h4>
//         <div ref='mapContainer'></div>
//         <p className='small mt0'>{this.props.caption}</p>
//       </div>
//     );
//   }
// }
//
// module.exports = WorldMap;
