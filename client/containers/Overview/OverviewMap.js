
import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import groupBy from "lodash/groupBy"

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
} from "../../actions/appActions"

class OverviewMap extends React.Component {
  render() {
    return (
      <div className="px1">

        <div className="relative clearfix mxn1">
          <div className="col sm-9 sm-offset-2 px1 pt1">
            <div className="relative ratio-16-9">
              <div className="ratio-content">
                <Map indicator={{id: "KPI_noPeopleVolunteering"}}
                     data={this.props.data}
                     groupedTimeSeries={this.props.grouping}
                     currentYear={2015}
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

          <div className="absolute t50 l0 col sm-3 px1">
            <div className="clearfix mxn1">
              <div className="col sm-10 sm-offset-2 md-9 md-offset-3 bg-secondary py2 px1">
                <h2 className="subhead mt0 mb1">{ "sorted" }&nbsp;<span className="color-primary">{ "High to low" }</span></h2>
                <ul className="m0 p0 small">
                  <li className="block">{ "Indian Red Cross Society" }</li>
                  <li className="block">{ "Red Cross Society of China" }</li>
                  <li className="block">{ "Red Crescent Society of the Islamic Republic of Iran" }</li>
                  <li className="block">{ "Japanese Red Cross Society" }</li>
                  <li className="block">{ "Burundi Red Cross" }</li>
                  <li className="block">{ "Indonesia Red Cross Society" }</li>
                  <li className="block">{ "Nigerian Red Cross Society" }</li>
                  <li className="block">{ "Vietnam Red Cross Society" }</li>
                  <li className="block">{ "The Republic of Korea National Red Cross" }</li>
                  <li className="block">{ "German Red Cross" }</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix mxn1">
          <div className="col sm-8 sm-offset-3 px1 pt2 pb4">
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
}

OverviewMap.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const groupTimeSeriesByYear = makeGroupTimeSeriesByYear()
  return (state, props) => ({
    grouping: groupTimeSeriesByYear(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
    data: state.appReducer.timeSeries,
  })
}

const mapDispatchToProps = dispatch => ({
  showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  hideTooltip: () => dispatch(hideTooltip()),
})

export default translate("overview", { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(OverviewMap))
