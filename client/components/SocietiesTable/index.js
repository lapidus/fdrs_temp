
import React from "react"
import SocietiesTableHeader from "./Header"
import SelectedSocieties from "./SelectedSocieties"
import AllSocieties from "./AllSocieties"

class SocietiesTable extends React.Component {
  render() {
    return (
      <div>
        <SocietiesTableHeader
          currentYear={this.props.currentYear}
        />
        <SelectedSocieties
          currentYear={this.props.currentYear}
          currentIndicator={this.props.currentIndicator}
          selectedSocieties={this.props.selectedSocieties}
          societiesBlacklist={this.props.societiesBlacklist}
          groupedTimeSeries={this.props.groupedTimeSeries}
          handleUnselectSociety={this.props.handleUnselectSociety}
        />
        <AllSocieties
          currentYear={this.props.currentYear}
          currentIndicator={this.props.currentIndicator}
          selectedSocieties={this.props.selectedSocieties}
          societiesBlacklist={this.props.societiesBlacklist}
          groupedTimeSeries={this.props.groupedTimeSeries}
        />
      </div>
    )
  }
}

SocietiesTable.propTypes = {
  currentYear: React.PropTypes.number,
  currentIndicator: React.PropTypes.object,
  selectedSocieties: React.PropTypes.array,
  societiesBlacklist: React.PropTypes.array,
  groupedTimeSeries: React.PropTypes.object,
  handleIndicatorSelect: React.PropTypes.func,
  handleUnselectSociety: React.PropTypes.func,
  handleNSSelect: React.PropTypes.func,
  handleYearSelect: React.PropTypes.func,
}

export default SocietiesTable
