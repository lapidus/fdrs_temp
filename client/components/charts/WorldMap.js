// import React from "react"
// import { connect } from "react-redux"
// import groupBy from "lodash/groupBy"
// import minBy from "lodash/minBy"
// import maxBy from "lodash/maxBy"
// import { Origin } from "redux-tooltip"
//
// import Countries from "./Countries"
// import niceNum from "../../utils/niceNum"
//
// import {
//   json,
//   scaleLinear,
//   scalePow,
//   scaleLog,
// } from "d3"
// import {
//   geoPath,
//   geoOrthographic,
//   geoMercator
// } from "d3-geo";
// import {
//   geoWinkel3,
//   geoNaturalEarth,
//   geoRobinson,
//   geoTimes,
//   geoWagner6
// } from "d3-geo-projection"
// import topojson from "topojson-client"
//
// import {
//   makeGetIndicatorData,
// } from "../../selectors"
//
// import {
//   fetchCountries,
// } from "../../actions/appActions"
//
// const SVGOrigin = Origin.wrapBy("g")
//
// class WorldMap extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       countries: this.props.countryPaths ? topojson.feature(props.countryPaths, props.countryPaths.objects.countries).features : null,
//       loading: !this.props.countryPaths ? true : false,
//       currentYearData: currentYearData,
//       minData: min,
//       maxData: max,
//       scale: scaleLinear().domain([min, max]).range([4,40])
//     }
//   }
//   projection() {
//     return geoNaturalEarth()
//             .scale(160)
//             .translate([800 / 2, 480 / 2])
//             // .rotate([this.props.center ? -this.props.center[1] : 0, this.props.center ? -this.props.center[0] : 0,0])
//             .rotate([-10,0,0])
//             .precision(.1)
//   }
//   componentDidMount() {
//     if(!this.props.countryPaths) {
//       this.props.fetchCountries()
//     }
//   }
//   render() {
//     const { data, indicator, nationalSocieties } = this.props
//
//     const tooltipContent = (name, value) => (
//       <div className="text-center p1" style={{maxWidth:240}}>
//         <div>{ name }</div>
//         <div className="title my1"><strong>{ niceNum(value, null, null, true) }</strong></div>
//       </div>
//     )
//
//     return (
//       <div className="" style={{ clear: "left", minHeight: '10rem' }}>
//         {
//           this.state.loading ? (
//             <div>
//               <p className="text-center">{ "Loading map..." }</p>
//             </div>
//           ) : (
//             null
//           )
//         }
//         <div style={{opacity: this.state.loading ? 0 : 1, transform: `translateY(${this.state.loading ? '30px' : '0'})`, transition: "all 0.75s"}}>
//           {
//             <svg width={800} height={480} viewBox="0 0 800 480">
//               {
//                 !this.state.loading ? (
//                   <Countries countries={this.state.countries} projection={this.projection} />
//                 ) : (null)
//               }
//               { !this.state.loading ?
//                 nationalSocieties.map((bubble, i) => {
//
//                   const lat  = Number(bubble.lat)
//                   const long = Number(bubble.long)
//                   const coords = long && lat ? [long, lat] : undefined
//                   const bubbleData = this.state.currentYearData.find((d) => d.KPI_DON_Code == bubble.KPI_DON_Code)
//
//                   if(bubbleData && coords) {
//                     return (
//                       <SVGOrigin
//                         content={tooltipContent(this.props.nationalSocietyNames[bubble.KPI_DON_Code], bubbleData[this.props.indicator.id])}
//                         key={bubble.KPI_DON_Code}>
//                         <circle
//                           cx={this.projection()(coords)[0]}
//                           cy={this.projection()(coords)[1]}
//                           r={bubbleData[this.props.indicator.id] ? this.state.scale(Number(bubbleData[this.props.indicator.id])) : 0}
//                           style={{
//                             fill: this.props.societiesBlacklist.indexOf(bubble.KPI_DON_Code) !== -1 || this.props.societiesBlacklist.length == 0 ? "rgba(208,2,27,0.8)" : "rgba(208,2,27,0.1)",
//                             stroke: "#fff",
//                             strokeWidth: "1.5px",
//                             cursor: "pointer"
//                           }}
//                           onClick={ (e) => this.props.bubbleClick(e, bubble, bubbleData[this.props.indicator.id]) }
//                         />
//                       </SVGOrigin>
//                     )
//                   }
//
//                 }) : (null)
//               }
//             </svg>
//           }
//         </div>
//       </div>
//     )
//   }
// }
//
// WorldMap.defaultProps = {
//   bubbleMouseEnter: null,
//   bubbleMouseLeave: null,
//   bubbleClick: null,
// }
//
// WorldMap.propTypes = {
//   indicator: React.PropTypes.object.isRequired,
//   data: React.PropTypes.array,
//   nationalSocieties: React.PropTypes.array,
//   countryPaths: React.PropTypes.object,
// }
//
// WorldMap.contextTypes = {
//   i18n: React.PropTypes.object.isRequired,
// }
//
// const makeMapStateToProps = () => {
//   const getIndicatorData = makeGetIndicatorData()
//   return (state, props) => ({
//     data: getIndicatorData(state, props),
//     countryPaths: state.appReducer.countryPaths,
//     fetchingCountries: state.appReducer.fetchingCountries,
//   })
// }
//
// const mapDispatchToProps = dispatch => ({
//   fetchCountries: () => dispatch(fetchCountries()),
// })
//
// export default connect(makeMapStateToProps, mapDispatchToProps)(WorldMap)

import React from 'react';
import Datamap from 'datamaps';

class WorldMap extends React.Component {
  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
    this.resizeWorldMap = this.resizeWorldMap.bind(this);
  }
  componentDidMount() {
    this.renderMap();
  }
  renderMap() {
    var mapContainer = this.refs.mapContainer;

    var width = mapContainer.offsetWidth;
    var height = 600;

    var mapOptions = {
      element: mapContainer,
      responsive: true,
      height: height,
      // projection: 'times',
      setProjection: function(element) {
        var projection = d3.geo.times()
          .center([15, -2])
          .scale(element.offsetWidth / 5)
          // .rotate([0,0,0])
          .translate([element.offsetWidth / 2, element.offsetHeight / 1.75]);
        var path = d3.geo.path()
          .projection(projection);
        return { path: path, projection: projection };
      },
      fills: {
        defaultFill: '#ddd',
        darkerFill: '#ccc',
        darkestFill: '#bbb',
        bubbleFill: '#EE3224',
        bubbleFillEmpty: '#EE3224',

        regionalOffice: '#0F9EE3',
        countryClusterOffice: '#82BC01',
        countryOffice: '#EE3224',
        others: '#918784'
      },
      geographyConfig: {
        // popupOnHover: false,
        popupOnHover: this.props.choroplethDataset ? true : false,
        popupTemplate: this.props.choroplethDataset ? (geo, data) => {
          return !data.popupContent ? '' : `
            <div class='map-tooltip'>
              <strong>${data.name}</strong>
              <hr />
              <div class='pt1'>
                ${data.popupContent}
              </div>
            </div>
          `
        } : false,
        highlightOnHover: false,
        borderWidth: 1,
        borderColor: '#fff'
      },
      data: this.props.choroplethDataset || {},
      done(datamap) {
        console.log('Rendered map');
      }
    };

    this.worldMap = new Datamap(mapOptions);

    if (this.props.bubbleSource) {
      d3.json(this.props.bubbleSource, response => {
        this.worldMap.bubbles(this.props.bubbleCallback(response), {
          popupTemplate: this.props.bubblePopupTemplate
        });
      });
    }
    else if(this.props.bubbleCallback) {
      this.worldMap.bubbles(this.props.bubbleCallback(), {
        popupTemplate: this.props.bubblePopupTemplate
      });
    }

    window.addEventListener('resize', this.resizeWorldMap);

  }
  resizeWorldMap() {
    this.worldMap.resize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWorldMap)
  }
  render() {
    return (
      <div>
        <h4 className='title strong'>{this.props.title}</h4>
        <div ref='mapContainer'></div>
        <p className='small mt0'>{this.props.caption}</p>
      </div>
    );
  }
}

module.exports = WorldMap;
