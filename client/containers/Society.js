import React from "react"
import { connect } from "react-redux"

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
  render() {
    const { society, data, documents } = this.props

    return (
      <div className="py4 pl2">
        <h1>{ "National Society" }</h1>
        <div>{ `${society.NSO_DON_name} (${society.KPI_DON_Code}) joined ${society.admission_date}` }</div>
        <h2>{ "Documents" } <small>{ `(${documents.length} records)` }</small></h2>
        <pre>{ JSON.stringify(documents, null, 2) }</pre>
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
