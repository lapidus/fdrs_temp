import React from "react"
import max from "lodash/max"

export class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
      height: 0,
    }

    this.computeHeights = this.computeHeights.bind(this)
  }

  switchTab(i) {
    this.setState({ active: i })
  }

  computeHeights() {
    var els = []
    for (var i = 0, len = this.tabPanelWrapper.childElementCount; i < len; i++) {
      els[i] = this.tabPanelWrapper.children[i]
    }
    const heights = els.map(function(item) {
      return Number(window.getComputedStyle(item).height.split("px")[0])
    })
    this.setState({height: max(heights)})
  }

  componentDidMount() {
    this.computeHeights()
  }

  render() {
    const tabs = this.props.children
    const { active } = this.state

    return (
      <div className="tabs">
        <div className="tab-navigation">
          {
            tabs.map((tab, i) =>
              <button
                className={ active === i ? "btn bg-secondary" : "btn"}
                key={ i }
                onClick={ this.switchTab.bind(this, i) }
              >
                { tab.props.title }
              </button>
            )
          }
        </div>
        <hr />
        <div ref={tabPanelWrapper => this.tabPanelWrapper = tabPanelWrapper} style={{position:"relative",height: this.state.height}}>
          {
            tabs.map((tabpanel, j) =>
              <TabPanel
                key={ j }
                active={ this.state.active === j }
              >
                { tabpanel.props.children }
              </TabPanel>
            )
          }
        </div>
      </div>
    )
  }
}

export const TabPanel = ({ active, children }) =>
  <div className={ active ? "absolute t0 l0 base-12 opacity-1" : "absolute t0 l0 base-12 opacity-0" }>{children}</div>
