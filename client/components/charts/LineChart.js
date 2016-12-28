import React from "react"
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter } from "victory"

var lineColors = [
  "#EE3224",
  "#0F9EE3",
  "#D7006D",
]

class LineChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.width
    }

    this.resizeChart = this.resizeChart.bind(this)
  }
  componentDidMount() {
    this.resizeChart()
    window.addEventListener("resize", this.resizeChart)
  }
  resizeChart() {
    this.setState({
      width: this.refs.visualizationWrapper.clientWidth
    })
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeChart)
  }
  render() {
    return (
      <div ref="visualizationWrapper">
        {
          this.props.title ? (
            <h4 className="title strong">{this.props.title}</h4>
          ) : (
            ""
          )
        }
        {
          this.props.domain.y[1] === 0 ? (
            <p>{ "There is no data available for this indicator" }</p>
          ) : (
            <svg width={this.state.width} height={this.props.height}>
              {
                this.props.showAxes ? (
                  <VictoryAxis
                    dependentAxis
                    label={this.props.axisLabels ? (this.props.axisLabels.y || "") : ""}
                    padding={this.props.padding || {
                      top: 30,
                      bottom: 40,
                      left: 60,
                      right: 60
                    }}
                    domain={(() => {
                      console.log("Domain gets the number: ", this.props.domain.y)
                      return this.props.domain.y
                    })()}
                    standalone={false}
                    tickCount={this.props.tickCount || 3}
                    height={this.props.height}
                    width={this.state.width}
                    style={{
                      grid: {
                        stroke: "#E1E0DF",
                        strokeWidth: 1
                      },
                      axis: {
                        stroke: "transparent"
                      },
                      tickLabels: {
                        fontFamily: "inherit",
                        fontSize: 13
                      },
                      axisLabel: {
                        fontFamily: "inherit",
                        fontSize: 16
                      },
                      ticks: {stroke: "transparent"}
                    }}
                    orientation="left"
                    tickFormat={(y) => y >= 1000000 ? y/1000000 + "m" : (y >= 1000 ? y/1000 + "k" : y) }
                  />
                ) : (
                  ""
                )
              }
              {
                this.props.showAxes ? (
                  <VictoryAxis
                    label={this.props.axisLabels ? (this.props.axisLabels.x || "") : ""}
                    padding={this.props.padding || {
                      top: 30,
                      bottom: 40,
                      left: 60,
                      right: 60
                    }}
                    domain={(() => {
                      console.log("Domain gets the number: ", this.props.domain.x)
                      return this.props.domain.x
                    })()}
                    standalone={false}
                    tickCount={4}
                    height={this.props.height}
                    width={this.state.width}
                    scale="time"
                    tickFormat={(x) => x.getFullYear()}
                    style={{
                      axisLabel: {
                        fontFamily: "inherit",
                        fontSize: 16
                      },
                      tickLabels: {
                        fontFamily: "inherit",
                        fontSize: 13
                      },
                      axis: {
                        stroke: "#D1D0CF"
                      },
                      ticks: {
                        stroke: "#D1D0CF"
                      }
                    }}
                    orientation="bottom"
                  />
                ) : (
                  ""
                )
              }
              {
                this.props.dataset.map((line, i) => {
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
                        right: 60,
                      }}
                      key={i}
                      data={this.props.dataset[i]}
                      style={{
                        data: {
                          stroke: lineColors[i],
                          strokeWidth:3,
                        },
                        labels: {
                          fontFamily: "inherit",
                          fontSize: 13,
                        }}}
                      label={this.props.labels ? this.props.labels[i] : ""}/>
                  )
                })
              }
              {
                this.props.dataset.map((dot, i) => {
                  return (
                    <VictoryScatter
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
                          fill: (d) => {
                            return d.y ? lineColors[i] : "transparent"
                          },
                          stroke: "#FFFFFF",
                          strokeWidth: (d) => {
                            return d.y ? 3 : 0
                          }
                        },
                      }}
                      size={4}
                    />
                  )
                })
              }
            </svg>
          )
        }
        {
          this.props.caption ? (
            <p className="small mt0 pt1">{this.props.caption}</p>
          ) : (
            ""
          )
        }
      </div>
    )
  }
}

LineChart.defaultProps = {
  width: 860,
  height: 420,
  showAxes: true,
}

export default LineChart
