
import React from "react"
import groupBy from "lodash/groupBy"
import { connect } from "react-redux"
import { translate } from "react-i18next"

import SocietiesTable from "../../components/SocietiesTable"

import {
  makeGetSocietyData,
  makeGroupTimeSeriesByYear,
} from "../../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
  showTooltip,
  hideTooltip,
  selectSociety,
  unselectSociety,
  clearSocieties,
} from "../../actions/appActions"

class OverviewTable extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   const didIndicatorChange = nextProps.currentIndicator !== this.props.currentIndicator
  //   return didIndicatorChange
  // }
  render() {

    const { t } = this.props
    const NSNames = this.context.i18n.store.data[this.context.i18n.language]["national-societies"]

    return (
      <div className="px1">
        <div className="relative clearfix mxn1">
          <div className="col sm-10 sm-offset-1 px1 pt1">
            <SocietiesTable
              filterPlaceholder={ t("overview:filterPlaceholder") }
              currentYear={ this.props.currentYear }
              currentIndicator={{ id: this.props.currentIndicator }}
              societiesBlacklist={ [] }
              groupedTimeSeries={ this.props.grouping }
              groupedByCode={ groupBy(this.props.data, "KPI_DON_Code") }
              handleIndicatorSelect={() => { console.log("Selected indicator") }}
              handleUnselectSociety={() => { console.log("Unselected NS") }}
              handleNSSelect={() => { console.log("Selected NS") }}
              handleYearSelect={() => { console.log("Selected Year") }}
              nationalSocietyNames={NSNames}
            />
          </div>
        </div>
      </div>
    )
  }
}

OverviewTable.contextTypes = {
  router: React.PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired,
}

OverviewTable.propTypes = {
  t: React.PropTypes.func.isRequired,
  nationalSocieties: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
  data: React.PropTypes.array,
  grouping: React.PropTypes.object,
  params: React.PropTypes.object.isRequired,
  showTooltip: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
  currentIndicator: React.PropTypes.string,
  selectSociety: React.PropTypes.func,
  unselectSociety: React.PropTypes.func,
  clearSocieties: React.PropTypes.func,
  currentYear: React.PropTypes.number,
}

OverviewTable.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const groupTimeSeriesByYear = makeGroupTimeSeriesByYear()
  return (state, props) => ({
    grouping: groupTimeSeriesByYear(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
    data: state.appReducer.timeSeries,
    currentIndicator: state.appReducer.currentIndicator,
    currentYear: state.appReducer.currentYear,
  })
}

const mapDispatchToProps = dispatch => ({
  showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  hideTooltip: () => dispatch(hideTooltip()),
  selectSociety: (societyID) => dispatch(selectSociety(societyId)),
  unselectSociety: (societyID) => dispatch(unselectSociety(societyId)),
  clearSocieties: () => dispatch(clearSocieties()),
})

export default translate(["overview", "national-societies"], { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(OverviewTable))
