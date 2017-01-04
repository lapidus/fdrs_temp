
import React from "react"
import { connect } from "react-redux"
import SocietiesTableHeader from "./Header"
import SelectedSocieties from "./SelectedSocieties"
import AllSocieties from "./AllSocieties"

import sortBy from "lodash/sortBy"

function sortDataset(timeSeries, currentYear, currentIndicator, nationalSocieties, reverse) {
  const currentDataset = timeSeries[currentYear]
                                   .map(o => {
                                     const societyMeta = nationalSocieties.filter(ns => {
                                       return ns.KPI_DON_Code === o.KPI_DON_Code
                                     })[0]

                                     return {
                                       slug: societyMeta.slug,
                                       NSO_DON_name: societyMeta.NSO_DON_name,
                                       KPI_DON_Code: o.KPI_DON_Code,
                                       value: Number(o[currentIndicator.id]),
                                     }
                                   })

  return reverse ? sortBy(currentDataset, o => o.value) : sortBy(currentDataset, o => o.value).reverse()
}

function recalculateTableState(nextProps, sortParams) {
  const { groupedTimeSeries, currentYear, currentIndicator, nationalSocieties } = nextProps

  const newCurrentDataset = sortDataset(groupedTimeSeries, currentYear, currentIndicator, nationalSocieties, sortParams.reverse)
  const newCurrentDatasetSum = newCurrentDataset.map(o => o.value).reduce((a, b) => a + b)
  const newCurrentYear = currentYear

  return {
    currentDataset: newCurrentDataset,
    currentDatasetSum: newCurrentDatasetSum,
    currentYear: newCurrentYear,
    sortParams: sortParams,
  }
}

class SocietiesTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = recalculateTableState(props, {
      sortBy: "indicator",
      reverse: false,
    })

    this.sortDataset = this.sortDataset.bind(this)
  }

  sortDataset(sortParams) {
    this.setState({
      currentDataset: sortDataset(this.props.groupedTimeSeries, this.props.currentYear, this.props.currentIndicator, this.props.nationalSocieties, sortParams.reverse),
      sortParams: sortParams,
    })
  }

  componentWillReceiveProps(nextProps) {

    const differentIndicator = nextProps.currentIndicator.id !== this.props.currentIndicator.id
    const differentYear = nextProps.currentYear !== this.props.currentYear

    if(differentIndicator) {
      this.setState(recalculateTableState(nextProps, this.state.sortParams))
    }
    else if(differentYear) {
      this.setState(recalculateTableState(nextProps, this.state.sortParams))
    }
  }

  render() {
    return (
      <div>
        <SocietiesTableHeader
          currentYear={this.props.currentYear}
          sortDataset={this.sortDataset}
          sortParams={this.state.sortParams}
        />
        <SelectedSocieties
          currentYear={this.props.currentYear}
          currentIndicator={this.props.currentIndicator}
          selectedSocieties={this.props.selectedSocieties}
          societiesBlacklist={this.props.societiesBlacklist}
          groupedTimeSeries={this.props.groupedTimeSeries}
          groupedByCode={this.props.groupedByCode}
          currentDataset={this.state.currentDataset}
          handleUnselectSociety={this.props.handleUnselectSociety}
        />
        <AllSocieties
          sum={this.state.currentDatasetSum}
          currentYear={this.props.currentYear}
          currentIndicator={this.props.currentIndicator}
          selectedSocieties={this.props.selectedSocieties}
          societiesBlacklist={this.props.societiesBlacklist}
          groupedTimeSeries={this.props.groupedTimeSeries}
          groupedByCode={this.props.groupedByCode}
          currentDataset={this.state.currentDataset}
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
  groupedByCode: React.PropTypes.object,
  handleIndicatorSelect: React.PropTypes.func,
  handleUnselectSociety: React.PropTypes.func,
  handleNSSelect: React.PropTypes.func,
  handleYearSelect: React.PropTypes.func,
  nationalSocieties: React.PropTypes.array,
}

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties
})

export default connect(mapStateToProps)(SocietiesTable)
