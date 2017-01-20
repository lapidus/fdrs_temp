
import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import groupBy from "lodash/groupBy"
import sortBy from "lodash/sortBy"

import Slider from "rc-slider"

import niceNum from "../../utils/niceNum"
import Map from "../../components/Data/Map"
import SocietiesRanking from "../../components/SocietiesRanking"

import { Origin } from "redux-tooltip"

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
} from "../../actions/appActions"

class SocietiesRankingBackup extends React.Component {
  render() {
    return (
      <ul className="m0 p0">
        {
          this.props.societiesList.reverse().map((society, i) => {
            return (
              <li className="block" key={i} style={{background: i % 2 === 0 ? "rgba(0,0,0,0.05)" : "transparent"}}>
                <button className="relative block btn base-12 pl15 pr4 text-left overflow-hidden text-xs">
                  <div className="overflow-hidden" style={{whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                    { society.NSO_DON_name }
                  </div>
                  <div className="absolute t50 r0 y-center-self text-center color-secondary text-xs" style={{width:"4rem"}}>
                    { niceNum(society[this.props.currentIndicator], null, null, false) }
                  </div>
                </button>
              </li>
            )
          })
        }
        {/* <h2 className="subhead mt0 mb1">
          { "Sorted" }&nbsp;<span className="color-primary">{ "High to Low" }</span>
        </h2>

        <table style={{height:"600px",overflowY:"scroll", display: "block"}}>

          {
            this.props.societiesList.reverse().map((society, i) => {
              return (
                <tr key={ i } style={
              {
                  paddingTop:"0.2rem",
                  paddingBottom:"0.2rem",
                  fontSize:"0.9rem",
                  background: i % 2 === 0 ? `rgb(246, 244, 242)` : "transparent"
              }
            }>
                <td>

                </td>
                <td>{ society.NSO_DON_name } </td><td>{ niceNum(society[this.props.currentIndicator], null, null, false) }</td>
              </tr>
              )

            })
          }
        </table> */}
      </ul>
    )
  }
}

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
                       this.props.selectSociety(bubble.KPI_DON_Code)
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
                      defaultValue={2015}
                      />
                  </div>
                </div>
                <div className="pb3">
                  <p className="text-xs">
                    { "* The boundaries and the designations used on this map do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies and are used for illustrative purposes only." }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md-absolute t0 l0 b0 col sm-10 sm-offset-1 md-3 md-offset-0 px1 z-index-1">
            <div className="shadow-3">
              <div className="p1">
                <h2 className="text-base m0">
                  Sorted <span className="color-primary">High to low</span>
                </h2>
              </div>
              <div className="bg-white overflow-scroll" style={{height: "31.5rem"}}>
                <SocietiesRanking
                  societiesList={sortBy(this.props.grouping[this.props.currentYear], o => Number(o[this.props.currentIndicator]))}
                  currentIndicator={this.props.currentIndicator}
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
})

export default translate(["overview", "national-societies"], { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(OverviewMap))
