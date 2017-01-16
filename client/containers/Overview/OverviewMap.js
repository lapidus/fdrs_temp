
import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import groupBy from "lodash/groupBy"
import sortBy from "lodash/sortBy"

import Slider from "rc-slider"

import niceNum from "../../utils/niceNum"
import Map from "../../components/Data/Map"

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
  switchYear,
} from "../../actions/appActions"

class SocietiesRanking extends React.Component {
  render() {
    return (
      <div>
        <h2 className="subhead mt0 mb1 px1">
          { "sorted" }&nbsp;<span className="color-primary">{ "High to low" }</span>
        </h2>
        <ul className="m0 p0 small">
          {
            this.props.societiesList.reverse().map((society, i) => {
              return (
                <li key={ i } className="block px1" style={
                  {
                    paddingTop:"0.25rem",
                    paddingBottom:"0.25rem",
                    background: i % 2 === 0 ? `rgb(246, 244, 242)` : "transparent"
                  }
                }>{ society.NSO_DON_name } - { society[this.props.currentIndicator] }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class OverviewMap extends React.Component {
  render() {

    console.log('THE GROUPING: ', this.props.grouping)

    return (
      <div className="px1">

        <div className="relative clearfix mxn1">
          <div className="col sm-9 sm-offset-2 px1 pt1">
            <div className="relative ratio-16-9">
              <div className="ratio-content">
                <Map indicator={{id: this.props.currentIndicator}}
                     data={this.props.data}
                     groupedTimeSeries={this.props.grouping}
                     currentYear={this.props.currentYear}
                     nationalSocieties={this.props.nationalSocieties}
                     societiesBlacklist={[]}
                     bubbleMouseEnter={ (e, bubble, indicator) => this.props.showTooltip({
                         text: `${bubble.NSO_DON_name} - ${niceNum(indicator, null, null, true)}`
                       }, e)
                     }
                     bubbleMouseLeave={ () => this.props.hideTooltip() }
                     bubbleClick={ (e, bubble, indicator) => {
                       console.log("Clicked a bubble!")
                     }}
                    />
              </div>
            </div>
          </div>

          <div className="absolute l0 col sm-3 px1" style={{top:"25%",height:"75%",overflow:"scroll"}}>
            <div className="clearfix mxn1">
              <div className="col sm-10 sm-offset-2 md-9 md-offset-3 py2">
                <SocietiesRanking
                  societiesList={sortBy(this.props.grouping[2015], o => Number(o[this.props.currentIndicator]))}
                  currentIndicator={this.props.currentIndicator}
                  />
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix mxn1">
          <div className="col sm-8 sm-offset-3 px1 pt2 pb4">
            <div className="block text-center mb3">
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
            <p className="small">{ "* The boundaries and the designations used on this map do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies and are used for illustrative purposes only." }</p>
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
  showTooltip: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
  currentIndicator: React.PropTypes.string,
  currentYear: React.PropTypes.number,
  switchYear: React.PropTypes.func,
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
  })
}

const mapDispatchToProps = dispatch => ({
  showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  hideTooltip: () => dispatch(hideTooltip()),
  switchYear: (year) => dispatch(switchYear(year)),
})

export default translate("overview", { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(OverviewMap))
