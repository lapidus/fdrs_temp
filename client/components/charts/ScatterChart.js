import React from "react"
import { VictoryScatter, VictoryLabel } from "victory"

import ChartTooltip from "../ChartTooltip"
import numberFormatter from "../../utils/numberFormatter"

const LegendItem = props => (
  <div className={ "legend-item " + (props.className || "") }>
    <div className="legend-item-dot" style={{ background: props.color }}></div>
    <span className="small">{ props.children }</span>
  </div>
)

class ScatterChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: this.props.width,
      height: this.props.height,
      padding: {
        top: this.props.padding.top,
        bottom: this.props.padding.bottom,
        left: this.props.padding.left,
        right: this.props.padding.right
      },
      tooltipContent: "Tooltip Content",
      tooltipVisible: false,
      tooltipPosition: [],
      tooltipParentPosition: []
    }

    this.resizeChart = this.resizeChart.bind(this)
  }
  componentDidMount() {
    this.resizeChart()
    window.addEventListener("resize", this.resizeChart)
  }
  resizeChart() {
    var width = this.refs.visualizationWrapper.clientWidth
    this.setState({
      width: width,
      height: width / 3 * 2
    })
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeChart)
  }
  render() {
    return (
      <div>
        <h4 className="title strong">{this.props.title}</h4>
        <div ref="visualizationWrapper" style={{position:"relative"}}>
          <svg width={this.state.width} height={this.state.height} style={{background:"#fff"}}>
            <rect x={this.state.padding.left} y={this.state.padding.top} width={(this.state.width - this.state.padding.left - this.state.padding.right) / 2} height={(this.state.height - this.state.padding.top - this.state.padding.bottom) / 2} fill="#EEEDEC" />
            <rect x={this.state.padding.left + ((this.state.width - this.state.padding.left - this.state.padding.right) / 2 )} y={this.state.padding.top} width={(this.state.width - this.state.padding.left - this.state.padding.right) / 2} height={(this.state.height - this.state.padding.top - this.state.padding.bottom) / 2} fill="#FBFAF9" />
            <rect x={this.state.padding.left} y={this.state.padding.top + ((this.state.height - this.state.padding.top - this.state.padding.bottom) / 2)} width={(this.state.width - this.state.padding.left - this.state.padding.right) / 2} height={(this.state.height - this.state.padding.top - this.state.padding.bottom) / 2} fill="#FBFAF9" />
            <rect x={this.state.padding.left + ((this.state.width - this.state.padding.left - this.state.padding.right) / 2 )} y={this.state.padding.top + ((this.state.height - this.state.padding.top - this.state.padding.bottom) / 2)} width={(this.state.width - this.state.padding.left - this.state.padding.right) / 2} height={(this.state.height - this.state.padding.top - this.state.padding.bottom) / 2} fill="#EEEDEC" />

            <VictoryLabel x={this.state.padding.left - 20} y={this.state.padding.top + (((this.state.height - this.state.padding.top - this.state.padding.bottom) / 4) * 3)}
              textAnchor="end"
              verticalAnchor="middle"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"Low"}
            </VictoryLabel>
            <VictoryLabel x={this.state.padding.left - 20} y={this.state.padding.top + ((this.state.height - this.state.padding.top - this.state.padding.bottom) / 4)}
              textAnchor="end"
              verticalAnchor="middle"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"High"}
            </VictoryLabel>

            <VictoryLabel x={this.state.padding.left + ((this.state.width - this.state.padding.left - this.state.padding.right) / 4)} y={this.state.height - this.state.padding.top - this.state.padding.bottom + 50}
              textAnchor="middle"
              verticalAnchor="start"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"Low"}
            </VictoryLabel>
            <VictoryLabel x={this.state.padding.left + (((this.state.width - this.state.padding.left - this.state.padding.right) / 4) * 3)} y={this.state.height - this.state.padding.top - this.state.padding.bottom + 50}
              textAnchor="middle"
              verticalAnchor="start"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"High"}
            </VictoryLabel>

            <VictoryLabel x={20} y={this.state.padding.top + ((this.state.height - this.state.padding.top - this.state.padding.bottom) / 2)}
              textAnchor="start"
              verticalAnchor="middle"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"OCAC\nscores"}
            </VictoryLabel>

            <VictoryLabel x={this.state.padding.left + (((this.state.width - this.state.padding.left - this.state.padding.right) / 2))} y={this.state.height - this.state.padding.top - this.state.padding.bottom + 90}
              textAnchor="middle"
              verticalAnchor="start"
              lineHeight={1.5}
              style={{fontSize:"13px"}}>
              {"Gross domestic product per capita (US dollar, log scale)"}
            </VictoryLabel>

            <VictoryScatter
              width={this.state.width}
              height={this.state.height}
              padding={{
                top: this.state.padding.top,
                bottom: this.state.padding.bottom,
                left: this.state.padding.left,
                right: this.state.padding.right
              }}
              standalone={false}
              scale={{x:"linear",y:"linear"}}
              domain={{y:[0,100],x:[2,5]}}
              size={4}
              style={{
                data: {
                  fill: "transparent",
                  strokeWidth: "3px"
                }
              }}
              data={this.props.dataset}
              events={ [ {
                target: "data",
                eventHandlers: {
                  onMouseEnter: (evt, props) => {
                    console.log("Entering item", evt, props)
                    this.setState({
                      // tooltipTitle: props.datum.name,
                      tooltipTitle: props.datum.region,
                      // tooltipContent: numberFormatter.addCommas(Math.round(props.datum.y)),
                      tooltipContent: `GDP/capita: $${numberFormatter.addCommas(Math.round(props.datum.x_regular_gdp))}\nOCAC score: ${props.datum.y}%`,
                      tooltipVisible: true,
                      // tooltipPosition: [props.position.x,props.position.y0 + ((props.position.y1 - props.position.y0) / 2)]
                      tooltipPosition: [props.position.y,props.position.x]
                    })
                  },
                  onMouseLeave: () => {
                    console.log("Leaving item")
                    this.setState({
                      tooltipVisible: false
                    })
                  },
                },
              } ] }
             />
          </svg>
          <ChartTooltip visible={this.state.tooltipVisible} position={this.state.tooltipPosition} parentPosition={this.state.tooltipParentPosition}>
            <strong className="small">{this.state.tooltipTitle}</strong>
            <br/>
            <span className="small">{this.state.tooltipContent}</span>
          </ChartTooltip>
        </div>
        <div className="clearfix">
          {this.props.legend.map((item, i) => {
            return (
              <LegendItem key={i} color={item.color} className="px1">{item.name}</LegendItem>
            )
          })}
        </div>
        <p className="small">{this.props.caption}</p>
      </div>
    )
  }
}

module.exports = ScatterChart
