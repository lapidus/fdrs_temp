
import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    }
  }
  switchTab() {
    this.setState({activeTab: arguments[0]});
  }
  render() {

    var tabs = this.props.children;

    return (
      <div className='tabs'>
        <div className='tab-navigation'>
          {tabs.map((tab, i) => {
            return <button className={this.state.activeTab === i ? 'tab-navigation__item active' : 'tab-navigation__item'} key={i} onClick={this.switchTab.bind(this, i)}>{tab.props.title}</button>
          })}
        </div>
        <div>
          {tabs.map((tabpanel, j) => {
            return <TabPanel key={j} activeTab={this.state.activeTab === j}>{tabpanel.props.children}</TabPanel>
          })}
        </div>
      </div>
    );
  }
}

class TabPanel extends React.Component {
  render() {
    return (<div className={this.props.activeTab ? 'tab-panel active' : 'tab-panel'}>{this.props.children}</div>);
  }
}

module.exports = {
  Tabs: Tabs,
  TabPanel: TabPanel
};
