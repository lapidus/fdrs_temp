import React from "react"

export class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: this.props.active,
    }
  }

  switchTab(i) {
    this.setState({ active: i })
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
                className={ active === i ? "tab-navigation__item active" : "tab-navigation__item"}
                key={ i }
                onClick={ this.switchTab.bind(this, i) }
              >
                { tab.props.title }
              </button>
            )
          }
        </div>
        <div>
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
  <div className={ active ? "tab-panel active" : "tab-panel" }>{children}</div>
