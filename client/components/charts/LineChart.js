import React from "react"
import { connect } from 'react-redux';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryScatter } from "victory"
import niceNum from "../../utils/niceNum"

import { actions } from 'redux-tooltip';
// import { translate } from "react-i18next"

const { show, hide, toggle, place } = actions;

const lineColors = [
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

    const { language } = this.context.i18n

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
                      return this.props.domain.y
                    })()}
                    scale={this.props.scale ? this.props.scale.y || "linear" : "linear"}
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
                        fontSize: 16,
                        padding: 40
                      },
                      ticks: {
                        stroke: "transparent"
                      }
                    }}
                    orientation={ language === "ar" ? "right" : "left" }
                    tickFormat={ (y) => niceNum(y) }
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
                      // return language === "ar" ? this.props.domain.x.reverse() : this.props.domain.x
                      return this.props.domain.x
                    })()}
                    standalone={false}
                    tickCount={4}
                    height={this.props.height}
                    width={this.state.width}
                    scale={this.props.scale ? this.props.scale.x || "time" : "time"}
                    tickFormat={(x) => x.getFullYear()}
                    style={{
                      axisLabel: {
                        fontFamily: "inherit",
                        fontSize: 16,
                        padding: 30,
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
                      scale={this.props.scale || {x:"time", y:"linear"}}
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
                      scale={this.props.scale || {x:"time", y:"linear"}}
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
                      events={[
                        {
                          target: "data",
                          eventHandlers: {
                            onMouseEnter: (e, d) => {
                              if(d.datum.y) {
                                this.props.dispatch(show({
                                  origin: e.target,
                                  content:  d.datum.datasetName + ": " + niceNum(d.datum.y, null, null, true)
                                }))
                              }
                            },
                            onMouseLeave: () => {
                              this.props.dispatch(hide())
                            }
                          }
                        }
                      ]}
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

LineChart.contextTypes = {
  i18n: React.PropTypes.object.isRequired
}

LineChart.defaultProps = {
  width: 860,
  height: 420,
  showAxes: true,
}

export default connect()(LineChart)
