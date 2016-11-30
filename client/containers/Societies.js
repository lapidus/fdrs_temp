import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"
import { fetchNationalSocieties } from "../actions/appActions"

class Societies extends React.Component {
  render() {
    const { language } = this.context.i18n
    const societies = this.props.nationalSocieties.map(s =>
      <li key={ s.KPI_DON_Code }>
        <Link to={ prefixLanguageToRoute(language, `/societies/${s.slug}`) }>
          { s.NSO_DON_name }
        </Link>
      </li>
    )
    return (
      <div className="py4 pl2">
        <h1>{ "National Societis" }</h1>
        <ul>
          { societies }
        </ul>
      </div>
    )
  }
}

Societies.propTypes = {
  nationalSocieties: React.PropTypes.array,
}

Societies.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Societies.needs = [ fetchNationalSocieties ]

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties,
})

export default connect(mapStateToProps)(Societies)
