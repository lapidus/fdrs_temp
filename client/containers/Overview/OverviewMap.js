
import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import groupBy from "lodash/groupBy"
import sortBy from "lodash/sortBy"


import Slider from "rc-slider"

import niceNum from "../../utils/niceNum"
import Map from "../../components/Data/Map"
import SocietiesRanking from "../../components/SocietiesRanking"

// import { Origin } from "redux-tooltip"
// import { actions } from "redux-tooltip"

import {
  makeGetSocietyData,
  makeGroupTimeSeriesByYear,
} from "../../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
  // showTooltip,
  // hideTooltip,
  switchYear,
  selectSociety,
  unselectSociety,
  clearSocieties,
} from "../../actions/appActions"

// const { show, hide } = actions

class OverviewMap extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   const didSelectionChange = nextProps.selectedSocieties.length !== this.props.selectedSocieties.length
  //   const didIndicatorChange = nextProps.currentIndicator !== this.props.currentIndicator
  //   const didYearChange = nextProps.currentYear !== this.props.currentYear
  //   return didIndicatorChange || didSelectionChange || didYearChange
  // }
  render() {

    const { t } = this.props
    const { i18n } = this.context

    const nationalSocietyNames = i18n.store.data[i18n.language]["national-societies"]

    return (
      <div className="px1 pb3">

        <div className="relative clearfix mxn1">
          <div className="col sm-10 sm-offset-1 md-9 md-offset-3 px1 pt1">
            <div className="relative ratio-16-9">
              <div className="ratio-content bg-white">
                <Map indicator={{id: this.props.currentIndicator}}
                     data={this.props.data}
                     groupedTimeSeries={this.props.grouping}
                     currentYear={this.props.currentYear}
                     nationalSocieties={this.props.nationalSocieties}
                     societiesBlacklist={this.props.selectedSocieties}
                     bubbleClick={ (e, bubble, indicator) => {
                       if(this.props.selectedSocieties.indexOf(bubble.KPI_DON_Code) === -1) {
                         this.props.selectSociety(bubble.KPI_DON_Code)
                       }
                       else {
                         this.props.unselectSociety(bubble.KPI_DON_Code)
                       }
                     }}
                     nationalSocietyNames={ nationalSocietyNames }
                    />
              </div>
            </div>
            <div className="clearfix mxn1">
              <div className="col sm-8 sm-offset-2 md-9 md-offset-0 px1">
                <div className="block text-center pb3">
                  <div className="inline-block align-middle base-10 sm-6 md-4">
                    <Slider
                      min={2010}
                      max={2015}
                      marks={{
                        2010:"2010",
                        2011:"2011",
                        2012:"2012",
                        2013:"2013",
                        2014:"2014",
                        2015:"2015"
                      }}
                      step={null}
                      onChange={(year) => this.props.switchYear(year)}
                      onAfterChange={(year) => this.props.switchYear(year)}
                      defaultValue={this.props.currentYear}
                      />
                  </div>
                </div>
                <div className="pb3">
                  <p className="text-xs">
                    {/* { "* The boundaries and the designations used on this map do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies and are used for illustrative purposes only." } */}
                    {"*"}&nbsp;{ t("overview:borderMessage")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={ `relative md-absolute t0 ${this.context.i18n.language === "ar" ? "r0" : "l0" } b0 col sm-10 sm-offset-1 md-3 md-offset-0 px1 z-index-1` }>
            <div className="shadow-3">
              <div className="p1 pl15">
                <h2 className="text-base m0">
                  <button onClick={ this.props.clearSocieties } className="btn p0 mr1" style={{
                    border:0,
                    marginTop:-2,
                    marginRight:"0.5rem",
                    color: this.props.selectedSocieties.length > 0 ? "currentcolor" : "rgba(0,0,0,0.1)"
                    }}>
                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="block">
                      <g>
                        <rect x="4" y="7" fill="currentcolor" width="8" height="2"></rect>
                        <path fill="currentcolor" d="M15,0H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z M14,14H2V2h12V14z"></path>
                      </g>
                    </svg>
                  </button>
                  { t("overview:sorted") } <span className="color-primary">{ t("overview:hightolow") }</span>
                </h2>
              </div>
              <div className="bg-white overflow-scroll" style={{height: "31.5rem"}}>
                <SocietiesRanking
                  societiesList={sortBy(this.props.grouping[this.props.currentYear], o => Number(o[this.props.currentIndicator]))}
                  currentIndicator={this.props.currentIndicator}
                  selectedSocieties={this.props.selectedSocieties}
                  onSocietyClick={(e, society, indicator) => {
                    if(this.props.selectedSocieties.indexOf(society.KPI_DON_Code) === -1) {
                      this.props.selectSociety(society.KPI_DON_Code)
                    }
                    else {
                      this.props.unselectSociety(society.KPI_DON_Code)
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

OverviewMap.contextTypes = {
  router: React.PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired,
}

OverviewMap.propTypes = {
  t: React.PropTypes.func.isRequired,
  nationalSocieties: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
  data: React.PropTypes.array,
  grouping: React.PropTypes.object,
  params: React.PropTypes.object.isRequired,
  // showTooltip: React.PropTypes.func,
  // hideTooltip: React.PropTypes.func,
  currentIndicator: React.PropTypes.string,
  currentYear: React.PropTypes.number,
  switchYear: React.PropTypes.func,
  selectedSocieties: React.PropTypes.array,
  selectSociety: React.PropTypes.func,
  clearSocieties: React.PropTypes.func,
}

OverviewMap.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const groupTimeSeriesByYear = makeGroupTimeSeriesByYear()
  return (state, props) => ({
    grouping: groupTimeSeriesByYear(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
    data: state.appReducer.timeSeries,
    currentIndicator: state.appReducer.currentIndicator,
    currentYear: state.appReducer.currentYear,
    selectedSocieties: state.appReducer.selectedSocieties,
  })
}

const mapDispatchToProps = dispatch => ({
  // showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  // hideTooltip: () => dispatch(hideTooltip()),
  switchYear: (year) => dispatch(switchYear(year)),
  selectSociety: (societyID) => dispatch(selectSociety(societyID)),
  unselectSociety: (societyID) => dispatch(unselectSociety(societyID)),
  clearSocieties: () => dispatch(clearSocieties()),
})


export default translate(["overview", "national-societies"], { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(OverviewMap))
