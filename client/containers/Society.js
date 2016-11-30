import React from "react"
import { connect } from "react-redux"

import { fetchNationalSocieties } from "../actions/appActions"

class Society extends React.Component {
  render() {
    const society = this.props.nationalSocieties
      .find(s => s.slug === this.props.params.id)
    return (
      <div className="py4 pl2">
        <h1>{ "National Society" }</h1>
        <div>{ `${society.NSO_DON_name} (${society.KPI_DON_Code}) joined ${society.admission_date}` }</div>
      </div>
    )
  }
}

Society.propTypes = {
  params: React.PropTypes.object.isRequired,
  nationalSocieties: React.PropTypes.array,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Society.needs = [ fetchNationalSocieties ]

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties,
})

export default connect(mapStateToProps)(Society)
