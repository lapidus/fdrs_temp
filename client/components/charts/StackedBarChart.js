
import React from 'react';

import { VictoryStack, VictoryBar, VictoryLabel } from 'victory';
import numberFormatter from '../../utils/numberFormatter';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='chart-tooltip' style={{
        display: this.props.visible ? 'block' : 'none',
        top: this.props.position[0] - 8 || 0,
        left: this.props.position[1] || 0
      }}>
        {this.props.children}
      </div>
    );
  }
}

class StackedBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.width,
      tooltipTitle: 'Tooltip Title',
      tooltipContent: 'Tooltip Content',
      tooltipVisible: false,
      tooltipPosition: [],
      tooltipParentPosition: []
    };

    this.resizeChart = this.resizeChart.bind(this);
  }
  componentDidMount() {
    this.setState({
      tooltipParentPosition: [this.refs.visualizationWrapper.getBoundingClientRect().top, this.refs.visualizationWrapper.getBoundingClientRect().left]
    });
    this.resizeChart();
    window.addEventListener('resize', this.resizeChart);
  }
  resizeChart() {
    console.log('Resizing line chart');
    this.setState({
      width: this.refs.visualizationWrapper.clientWidth
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeChart);
  }
  render() {
    return (
      <div className='simple-bar-chart'>
        {this.props.title ? (<h4 className='title strong'>{this.props.title}</h4>) : ''}
        <div ref='visualizationWrapper' style={{position:'relative'}}>
          <svg width={this.state.width || this.props.width} height={this.props.height}>
          {this.props.labels.map((label, i) => {
            return (
              <VictoryLabel
                verticalAnchor='end'
                textAnchor='start'
                style={{fontFamily:'inherit',fontSize:'13px',fontWeight:'700'}}
                x={30}
                y={(((this.props.height - 22) / 5) * (i + 1)) - 30}
                key={i}>
                  {label.text}
              </VictoryLabel>
            );
          })}
          <VictoryStack
            horizontal
            standalone={false}
            width={this.state.width || this.props.width}
            height={this.props.height}
            padding={this.props.padding || {
              top: 40,
              bottom: 40,
              left: 40,
              right: 180
            }}
            style={{
              data: {width: 30},
              labels: {fontFamily:'inherit',fontSize:'14px',lineHeight:'20px'}
            }}
            labels={this.props.labels.map((label, i) => { return label.number })}>

            {this.props.data.map((dataset, i) => {

              var fills = this.props.customFills || ['#EE3224', '#0F9EE3', '#D6D2D0'];

              return (
                <VictoryBar
                  key={i}
                  style={{data: {fill: fills[i]}}}
                  data={dataset}
                  events={dataset[i].name ? {
                    data: {
                      onMouseEnter: (evt, props) => {
                        this.setState({
                          tooltipTitle: props.datum.name,
                          tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
                          tooltipVisible: true,
                          tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
                        });
                      },
                      onMouseLeave: () => {
                        this.setState({
                          tooltipVisible: false
                        });
                      }
                    }
                  } : {}}
                />
              );
            })}
            { /* <VictoryBar
              style={{data: {fill: '#0F9EE3'}}}
              data={this.props.data[0]}
              events={{
                data: {
                  onMouseEnter: (evt, props) => {
                    this.setState({
                      tooltipTitle: props.datum.name,
                      tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
                      tooltipVisible: true,
                      tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
                    });
                  },
                  onMouseLeave: () => {
                    this.setState({
                      tooltipVisible: false
                    });
                  }
                }
              }}
            />
            <VictoryBar
              style={{data: {fill: '#EE3224'}}}
              data={this.props.data[1]}
              events={{
                data: {
                  onMouseEnter: (evt, props) => {
                    this.setState({
                      tooltipTitle: props.datum.name,
                      tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
                      tooltipVisible: true,
                      tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
                    });
                  },
                  onMouseLeave: () => {
                    this.setState({
                      tooltipVisible: false
                    });
                  }
                }
              }}
            />
            <VictoryBar
              style={{data: {fill: '#D6D2D0'}}}
              data={this.props.data[2]}/> */ }
          </VictoryStack>
          </svg>
          <Tooltip visible={this.state.tooltipVisible} position={this.state.tooltipPosition} parentPosition={this.state.tooltipParentPosition}>
            <strong className='small'>{this.state.tooltipTitle}</strong>
            <br/>
            <span className='small'>{this.state.tooltipContent}</span>
          </Tooltip>
        </div>
        {this.props.caption ? (<p className='small mt0'>{this.props.caption}</p>) : ''}
      </div>
    );
  }
}

module.exports = StackedBarChart;
