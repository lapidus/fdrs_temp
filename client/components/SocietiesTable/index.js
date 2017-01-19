
import React from "react"
import { connect } from "react-redux"
import Select from "react-select"
import SocietiesTableHeader from "./Header"
import SelectedSocieties from "./SelectedSocieties"
import AllSocieties from "./AllSocieties"

import sortBy from "lodash/sortBy"

import {
  selectSociety,
  unselectSociety,
  clearSocieties,
} from "../../actions/appActions"

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

  shouldComponentUpdate(nextProps) {
    const didYearChange = nextProps.currentYear !== this.props.currentYear
    const didIndicatorChange = nextProps.currentIndicator.id !== this.props.currentIndicator.id
    const didSelectionChange = nextProps.selectedSocieties.length !== this.props.selectedSocieties.length

    return didYearChange || didIndicatorChange || didSelectionChange
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

    const placeholder = (
      <span>
        {/* <svg className="align-middle" style={{width:16,height:16,marginTop:-1}} width="16px" height="16px" viewBox="0 0 24 24">
          <g  transform="translate(0, 0)" style={{stroke:"currentColor"}}>
            <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4" strokeLinejoin="miter"/>
            <circle fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="10" cy="10" r="9" strokeLinejoin="miter"/>
          </g>
        </svg> */}
        {/* <span className="ml1">{ this.props.filterPlaceholder }</span> */}
        <span style={{paddingLeft:"0.5rem"}}>{ this.props.filterPlaceholder }</span>
      </span>
    )

    return (
      <div>

        <SocietiesTableHeader
          currentYear={this.props.currentYear}
          sortDataset={this.sortDataset}
          sortParams={this.state.sortParams}
        />

        <div className="mb2 px1">
          <Select
            searchable={ true }
            clearable={ false }
            placeholder={placeholder}
            multi={ false }
            name="ns-selector"
            options={this.props.nationalSocieties.map(ns => {
              return {
                value: ns.KPI_DON_Code,
                label: ns.NSO_DON_name,
                slug: ns.slug,
              }
            })}
            onChange={(society) => {
              const societyAlreadySelected = this.props.selectedSocieties.indexOf(society.value) !== -1
              if(societyAlreadySelected) return
              else this.props.selectSociety(society.value)
              // this.props.handleNSSelect
            }}
          />

        </div>

        <SelectedSocieties
          currentYear={this.props.currentYear}
          currentIndicator={this.props.currentIndicator}
          selectedSocieties={this.props.selectedSocieties}
          societiesBlacklist={this.props.societiesBlacklist}
          groupedTimeSeries={this.props.groupedTimeSeries}
          groupedByCode={this.props.groupedByCode}
          currentDataset={this.state.currentDataset}
          unselectSociety={this.props.unselectSociety}
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
  selectSociety: React.PropTypes.func,
  unselectSociety: React.PropTypes.func,
  clearSocieties: React.PropTypes.func,
}

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties,
  selectedSocieties: state.appReducer.selectedSocieties,
})

const mapDispatchToProps = dispatch => ({
  selectSociety: (societyID) => dispatch(selectSociety(societyID)),
  unselectSociety: (societyID) => dispatch(unselectSociety(societyID)),
  clearSocieties: () => dispatch(clearSocieties()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SocietiesTable)
