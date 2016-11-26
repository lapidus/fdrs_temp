
import React from 'react';
// import ReactDOM from 'react-dom';
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
