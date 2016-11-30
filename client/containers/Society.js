import React from "react"
import { connect } from "react-redux"
import assign from "lodash/assign"

import {
  dataByNS,
} from "../utils/dataHelpers"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
} from "../actions/appActions"

class Society extends React.Component {
  render() {
    const { society, data } = this.props

    return (
      <div className="py4 pl2">
        <h1>{ "National Society" }</h1>
        <div>{ `${society.NSO_DON_name} (${society.KPI_DON_Code}) joined ${society.admission_date}` }</div>
        <h2>{ "Data" }</h2>
        <pre>
          { JSON.stringify(data, null, 2) }
        </pre>
      </div>
    )
  }
}

Society.propTypes = {
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  data: React.PropTypes.array,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Society.needs = [ fetchNationalSocieties, fetchTimeSeries ]

const mapStateToProps = ({ appReducer }, { params: { id } }) => ({
  society: appReducer.nationalSocieties.find(s => s.slug === id),
  timeSeries: appReducer.timeSeries,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return assign({}, ownProps, {
    society: stateProps.society,
    data: dataByNS(stateProps.society.KPI_DON_Code, stateProps.timeSeries),
  })
}

export default connect(
  mapStateToProps,
  undefined,
  mergeProps,
)(Society)
