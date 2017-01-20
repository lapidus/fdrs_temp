import React from "react"
import { VictoryPie } from "victory"

class DonutChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: this.props.maxSize,
    }

    this.resizeChart = this.resizeChart.bind(this)
    this.getWrapperRef = this.getWrapperRef.bind(this)
  }

  componentDidMount() {
    this.resizeChart()
    window.addEventListener("resize", this.resizeChart)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeChart)
  }

  resizeChart() {
    const { wrapper } = this
    const { maxSize } = this.props
    this.setState({
      size: wrapper.clientWidth > maxSize ? maxSize : wrapper.clientWidth,
    })
  }

  getWrapperRef(wrapper) {
    this.wrapper = wrapper
  }

  render() {
    const dataset = this.props.dataset
      .map(d => ({ x: d.x, y: +d.y, fill: d.fill }))

    const { title, maxSize, caption } = this.props
    const { size } = this.state

    return (
      <div>
        { title && <h4 className="title strong">{title}</h4> }
        <div
          ref={ this.getWrapperRef }
          style={{
            margin: "0 auto",
            maxWidth: maxSize,
          }}
        >
          <VictoryPie
            width={ size }
            height={ size }
            padding={ size / 100 * 17.5 }
            innerRadius={ size / 100 * 20 }
            data={ dataset }
            style={{
              data: {
                strokeWidth: 1.5,
                fill: d => d.fill,
              },
              labels: {
                fontFamily: "inherit",
                fontSize: "13px",
              },
            }}
          />
        </div>
        { caption && <p className="small">{ caption }</p> }
      </div>
    )
  }
}

DonutChart.propTypes = {
  dataset: React.PropTypes.array.isRequired,
  maxSize: React.PropTypes.number,
  title: React.PropTypes.string,
  caption: React.PropTypes.string,
}

export default DonutChart
