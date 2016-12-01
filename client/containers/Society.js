import React from "react"
import { connect } from "react-redux"
import Select from "react-select"
import maxBy from "lodash/fp/maxBy"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import uniqBy from "lodash/fp/uniqBy"

import {
  makeGetSociety,
  makeGetSocietyData,
  makeGetSocietyDocuments,
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchDocuments,
} from "../actions/appActions"

class Society extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      year: +maxBy(d => +d.year, props.documents).year,
    }

    this.handleYearChange = this.handleYearChange.bind(this)
  }

  handleYearChange(year) {
    this.setState({ year: year.value })
  }

  render() {
    const { year } = this.state
    const { society, data, documents } = this.props
    const yearOption = d => ({ value: +d.year, label: d.year })
    const yearOptions = uniqBy("value", map(yearOption, documents))
    const yearFilter = d => +d.year === +year
    const yearDocuments = filter(yearFilter, documents)

    return (
      <div className="py4 pl2">
        <h1>{ "National Society" }</h1>
        <div>{ `${society.NSO_DON_name} (${society.KPI_DON_Code}) joined ${society.admission_date}` }</div>
        <h2 style={{ float: "left" }}>{ "Documents" }</h2>
        <div style={{ float: "left", minWidth: "110px" }}>
          <Select
            searchable={ false }
            clearable={ false }
            name="year-selector"
            value={ year }
            options={ yearOptions }
            onChange={ this.handleYearChange }
          />
        </div>
        <pre style={{ clear: "left" }}>{ JSON.stringify(yearDocuments, null, 2) }</pre>
        <h2>{ "Data" } <small>{ `(${data.length} records)` }</small></h2>
        <pre>{ JSON.stringify(data, null, 2) }</pre>
      </div>
    )
  }
}

Society.propTypes = {
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  data: React.PropTypes.array,
  documents: React.PropTypes.array,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Society.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchDocuments ]

const makeMapStateToProps = () => {
  const getSociety = makeGetSociety()
  const getSocietyData = makeGetSocietyData()
  const getSocietyDocuments = makeGetSocietyDocuments()
  return (state, props) => ({
    society: getSociety(state, props),
    data: getSocietyData(state, props),
    documents: getSocietyDocuments(state, props),
  })
}

export default connect(makeMapStateToProps)(Society)
