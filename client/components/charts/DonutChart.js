
import React from 'react';
import { VictoryPie } from 'victory';

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: this.props.maxSize
    };

    this.resizeChart = this.resizeChart.bind(this);
  }
  componentDidMount() {
    this.resizeChart();
    window.addEventListener('resize', this.resizeChart);
  }
  resizeChart() {
    console.log('Resizing donut chart');
    this.setState({
      size: this.refs.visualizationWrapper.clientWidth > this.props.maxSize ? this.props.maxSize : this.refs.visualizationWrapper.clientWidth
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeChart);
  }
  render() {
    return (
      <div>
        {this.props.title ? (<h4 className='title strong'>{this.props.title}</h4>) : ''}
        <div ref='visualizationWrapper' style={{margin:'0 auto',maxWidth:this.props.maxSize}}>
          <VictoryPie
            width={this.state.size}
            height={this.state.size}
            padding={this.state.size / 100 * 17.5}
            innerRadius={this.state.size / 100 * 20}
            data={this.props.dataset}
            style={{
              data: {
                strokeWidth:1.5
              },
              labels: {
                padding: this.state.size / 100 * 31,
                fontFamily:'inherit',
                fontSize:'13px'
            }}}
          />
        </div>
        {this.props.caption ? (<p className='small'>{this.props.caption}</p>) : ''}
      </div>
    );
  }
}

module.exports = DonutChart;
