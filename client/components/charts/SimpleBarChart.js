
import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

var LegendItem = (props) => (
  <div className={'legend-item ' + (props.className || '')}>
    <div className='legend-item-dot' style={{background:props.color}}></div>
    <span className='small'>{props.children}</span>
  </div>
);

class SimpleBarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.width
    };

    this.resizeChart = this.resizeChart.bind(this);
    this.renderHorizontalChart = this.renderHorizontalChart.bind(this);
    this.renderVerticalChart = this.renderVerticalChart.bind(this);
    this.renderNoAxisChart = this.renderNoAxisChart.bind(this);
  }
  componentDidMount() {
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

  renderNoAxisChart() {
    return (
      <VictoryBar
        domain={this.props.domain}
        padding={this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        }}
        width={this.state.width}
        height={this.props.height}
        style={{
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        }}
        data={this.props.data}
        labels={this.props.labels}
        />
      );
  }

  renderVerticalChart() {
    return (
      <VictoryChart
        width={this.state.width}
        height={this.props.height}
        padding={{
          top: 40,
          bottom: 40,
          left: 40,
          right: 60
        }}
        scale={{x:'time'}}
        domainPadding={{x: 100}}>
        <VictoryAxis
          label={this.props.axisLabels.x}
          tickValues={this.props.tickValues}
          tickFormat={this.props.tickFormat}
          orientation='bottom'
          style={{
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axis: {
              stroke: '#D1D0CF'
            },
            ticks: {
              stroke: '#D1D0CF'
            }
          }}/>
        <VictoryAxis
          dependentAxis
          orientation='left'
          label={this.props.axisLabels.y}
          style={{
            grid: {
              stroke: '#E1E0DF',
              strokeWidth: 1
            },
            axis: {
              stroke: 'transparent'
            },
            tickLabels: {
              fontFamily: 'inherit',
              fontSize: 13
            },
            axisLabel: {
              fontFamily: 'inherit',
              fontSize: 16
            },
            ticks: {stroke: 'transparent'}
          }}/>
        <VictoryBar
          labels={this.props.labels}
          style={{
            data: {
              width: 15,
              fill: '#EE3224'
            },
            labels: {
              fontFamily: 'inherit',
              fontSize: 13
            }
          }}
          data={this.props.data}/>
      </VictoryChart>
    );
  }
  renderHorizontalChart() {
    return (
      <VictoryBar
        horizontal
        domain={this.props.domain}
        padding={this.props.padding || {
          top: 40,
          bottom: 40,
          left: 30,
          right: 100
        }}
        width={this.state.width}
        height={this.props.height}
        style={{
          data: {
            width: 15,
            fill: '#EE3224'
          },
          labels: {
            fontFamily: 'inherit',
            fontSize: 13
          }
        }}
        data={this.props.data}
        labels={this.props.labels}
        />
    );
  }
  render() {
    return (
      <div className='simple-bar-chart' ref='visualizationWrapper'>
        {this.props.title ? <h4 className='title strong'>{this.props.title}</h4> : ''}
        {this.props.horizontal ? this.renderHorizontalChart() : this.props.noAxisChart ? this.renderNoAxisChart() : this.renderVerticalChart()}
        {this.props.legend ? (
          <div className='clearfix pt1'>
            {this.props.legend.map((item, i) => (
              <LegendItem key={i} color={item.color} className='px1'>{item.name}</LegendItem>
            ))}
          </div>
        ):''}
        {this.props.caption ? <p className='small mt0'>{this.props.caption}</p> : ''}
      </div>
    );
  }
}

module.exports = SimpleBarChart;
