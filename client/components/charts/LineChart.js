
import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

// <VictoryAxis
//             dependentAxis
//             style={{
//               axis: {
//                 stroke: 'transparent'
//               },
//               ticks: {
//                 stroke: 'transparent'
//               },
//               tickLabels: {
//                 fill: 'transparent'
//               }}}/>
//           <VictoryAxis
//             scale='time'
//             tickFormat={(x) => x.getFullYear()} />

var lineColors = [
  '#EE3224',
  '#0F9EE3',
  '#D7006D'
];

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: this.props.width
    };

    this.resizeChart = this.resizeChart.bind(this);
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
  render() {
    return (
      <div ref='visualizationWrapper'>
        <h4 className='title strong'>{this.props.title}</h4>
        <svg width={this.state.width} height={this.props.height}>
          <VictoryAxis
            dependentAxis
            label={this.props.axisLabels ? (this.props.axisLabels.y || '') : ''}
            padding={this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            }}
            domain={this.props.domain.y}
            standalone={false}
            height={this.props.height}
            width={this.state.width}
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
            }}
            orientation='left'
          />
          <VictoryAxis
            label={this.props.axisLabels ? (this.props.axisLabels.x || '') : ''}
            padding={this.props.padding || {
              top: 30,
              bottom: 40,
              left: 60,
              right: 60
            }}
            domain={this.props.domain.x}
            standalone={false}
            height={this.props.height}
            width={this.state.width}
            scale='time'
            tickFormat={(x) => x.getFullYear()}
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
            }}
            orientation='bottom'
          />

          {this.props.dataset.map((line, i) => {
            return (
              <VictoryLine
                domain={this.props.domain}
                standalone={false}
                width={this.state.width}
                height={this.props.height}
                padding={this.props.padding || {
                  top: 30,
                  bottom: 40,
                  left: 60,
                  right: 60
                }}
                key={i}
                data={this.props.dataset[i]}
                style={{
                  data: {
                    stroke: lineColors[i],
                    strokeWidth:3
                  },
                  labels: {
                    fontFamily: 'inherit',
                    fontSize: 13
                  }}}
                label={this.props.labels ? this.props.labels[i] : ''}/>
            );
          })}
        </svg>
        <p className='small mt0 pt1'>{this.props.caption}</p>
      </div>
    );
  }
}

LineChart.defaultProps = {
  width: 860,
  height: 420
};

module.exports = LineChart;
