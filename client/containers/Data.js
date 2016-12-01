import React from "react"
import Select from "react-select"
import map from "lodash/fp/map"

import Map from "../components/Data/Map"
import {
  fetchTimeSeries,
} from "../actions/appActions"

const keyIndicatorIds = [
  "KPI_noPeopleVolunteering",
  "KPI_noPaidStaff",
  "KPI_noPeopleDonatingBlood",
  "KPI_noLocalUnits",
  "KPI_noPeopleReachedServices",
]

class DataView extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      indicator: keyIndicatorIds[0],
    }

    this.handleIndicatorChange = this.handleIndicatorChange.bind(this)
  }

  handleIndicatorChange(indicator) {
    this.setState({ indicator: indicator.value })
  }

  render() {
    const { indicator } = this.state
    const indicatorOption = d => ({ value: d, label: d })
    const indicatorOptions = map(indicatorOption, keyIndicatorIds)

    return (
      <div className="py4 pl2">
        <h2 style={{ float: "left" }}>{ "Indicator" }</h2>
        <div style={{ float: "left", minWidth: "300px" }}>
          <Select
            searchable={ false }
            clearable={ false }
            name="indicator-selector"
            value={ indicator }
            options={ indicatorOptions }
            onChange={ this.handleIndicatorChange }
          />
        </div>
        <Map indicator={ indicator } />
      </div>
    )
  }
}

DataView.propTypes = {
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  data: React.PropTypes.array,
  documents: React.PropTypes.array,
}

DataView.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

DataView.needs = [ fetchTimeSeries ]

export default DataView
