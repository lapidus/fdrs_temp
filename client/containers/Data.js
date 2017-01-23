import React from "react"
import { connect } from "react-redux"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import find from "lodash/fp/find"

import Map from "../components/Data/Map"
import {
  fetchTimeSeries,
  fetchTimeSeriesMeta,
} from "../actions/appActions"

const keyIndicatorIds = [
  "KPI_noPeopleVolunteering",
  "KPI_noPaidStaff",
  "KPI_noPeopleDonatingBlood",
  "KPI_noLocalUnits",
  "KPI_noPeopleReachedServices",
]
const isKeyIndicator = i => keyIndicatorIds.indexOf(i.id) !== -1

class DataView extends React.Component {
  constructor(props, context) {
    super(props, context)

    const keyIndicators = filter(isKeyIndicator, props.meta)

    this.state = {
      indicator: keyIndicators[0].name,
      keyIndicators,
    }

    this.handleIndicatorChange = this.handleIndicatorChange.bind(this)
  }

  handleIndicatorChange(event) {
    event.preventDefault()

    const id = event.target.id
    const { keyIndicators } = this.state

    this.setState({
      indicator: find(i => i.id === id, keyIndicators),
    })
  }

  render() {
    const { indicator, keyIndicators } = this.state
    const indicatorItem = i => <li key={ i.id }>
      <a href id={ i.id } onClick={ this.handleIndicatorChange }>{ i.id }</a>
    </li>
    const indicatorItems = map(indicatorItem, keyIndicators)

    return (
      <div className="py4 clearfix container">
        <div className="col md-3">
          <h4>{ "Key indicator" }</h4>
          <ul className="p0 m0">
            { indicatorItems }
          </ul>
        </div>
        <div className="col md-9">
          <Map indicator={ indicator } />
        </div>
      </div>
    )
  }
}

DataView.propTypes = {
  params: React.PropTypes.object.isRequired,
  meta: React.PropTypes.array,
}

DataView.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

DataView.needs = [ fetchTimeSeries, fetchTimeSeriesMeta ]

const mapStateToProps = (state) => ({
  meta: state.appReducer.timeSeriesMeta,
})

export default connect(mapStateToProps)(DataView)
