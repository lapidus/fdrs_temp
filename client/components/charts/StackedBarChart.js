import React from "react"
import { VictoryStack, VictoryBar, VictoryLabel } from "victory"

import ChartTooltip from "../ChartTooltip"
import numberFormatter from "../../utils/numberFormatter"

class StackedBarChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.width,
      tooltipTitle: "Tooltip Title",
      tooltipContent: "Tooltip Content",
      tooltipVisible: false,
      tooltipPosition: [],
      tooltipParentPosition: [],
    }

    this.resizeChart = this.resizeChart.bind(this)
  }

  componentDidMount() {
    this.setState({
      tooltipParentPosition: [
        this.refs.visualizationWrapper.getBoundingClientRect().top,
        this.refs.visualizationWrapper.getBoundingClientRect().left,
      ],
    })
    this.resizeChart()
    window.addEventListener("resize", this.resizeChart)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeChart)
  }

  resizeChart() {
    console.log("Resizing line chart")
    this.setState({
      width: this.refs.visualizationWrapper.clientWidth,
    })
  }

  render() {
    const {
      title,
      labels,
      height,
      padding,
      data,
      customFills,
      caption,
    } = this.props

    const {
      tooltipVisible,
      tooltipPosition,
      tooltipParentPosition,
      tooltipTitle,
      tooltipContent,
    } = this.state

    const width = this.state.width || this.props.width

    return (
      <div className="simple-bar-chart">
        { title && <h4 className="title strong">{ title }</h4> }
        <div ref="visualizationWrapper" style={{ position:"relative" }}>
          <svg
            width={ width }
            height={ height }
          >
            {
              labels.map((label, i) =>
                <VictoryLabel
                  verticalAnchor="end"
                  textAnchor="start"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "13px",
                    fontWeight:"700",
                  }}
                  x={ 30 }
                  y={ (((height - 22) / 5) * (i + 1)) - 30 }
                  key={ i }
                >
                  { label.text }
                </VictoryLabel>
              )
            }
            <VictoryStack
              horizontal
              standalone={ false }
              width={ width }
              height={ height }
              padding={ padding }
              style={{
                data: { width: 30 },
                labels: {
                  fontFamily: "inherit",
                  fontSize: "14px",
                  lineHeight:"20px",
                },
              }}
              labels={ labels.map((label) => label.number) }
            >
              {
                data.map((dataset, i) =>
                  <VictoryBar
                    key={ i }
                    style={{ data: { fill: customFills[i] } }}
                    data={ dataset }
                    events={
                      dataset[i].name ? [ {
                        target: "data",
                        eventHandlers: {
                          onMouseEnter: (evt, props) => {
                            this.setState({
                              tooltipTitle: props.datum.name,
                              tooltipContent: numberFormatter.addCommas(
                                Math.round(props.datum.y)
                              ),
                              tooltipVisible: true,
                              tooltipPosition: [
                                props.position.x,
                                props.position.y0 + ((props.position.y1 - props.position.y0) / 2),
                              ],
                            })
                          },
                          onMouseLeave: () =>
                            this.setState({ tooltipVisible: false }),
                        },
                      } ] : []
                    }
                  />
                )
              }
            </VictoryStack>
          </svg>
          <ChartTooltip
            visible={ tooltipVisible }
            position={ tooltipPosition }
            parentPosition={ tooltipParentPosition }
          >
            <strong className="small">{tooltipTitle}</strong>
            <br />
            <span className="small">{tooltipContent}</span>
          </ChartTooltip>
        </div>
        { caption && <p className="small mt0">{ caption }</p> }
      </div>
    )
  }
}

StackedBarChart.propTypes = {
  data: React.PropTypes.array,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  title: React.PropTypes.string,
  labels: React.PropTypes.array,
  customFills: React.PropTypes.array,
  padding: React.PropTypes.object,
  caption: React.PropTypes.string,
}

StackedBarChart.defaultProps = {
  padding: { top: 40, bottom: 40, left: 40, right: 180 },
  customFills: [ "#EE3224", "#0F9EE3", "#D6D2D0" ],
}

export default StackedBarChart
