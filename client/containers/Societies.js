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

    const societiesPerCol = Math.ceil(this.props.nationalSocieties.length / 3)

    return (
      <section>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-8 sm-offset-2">
            <ul className="m0 py1 px0 small strong">
              <li className="inline-block caps mr1">
                <Link to="/">{ "Home" }</Link>
              </li>
              <li className="inline-block caps mr1">
                <Link to="/">{ "Services" }</Link>
              </li>
              <li className="inline-block caps mr1">
                <Link to="/societies">{ "National Society Profiles" }</Link>
              </li>
            </ul>
          </div>
        </div>

        <header className="px1">
          <div className="clearfix mxn1">
            <div className="col sm-8 sm-offset-2 px1 py1">
              <h1 className="display-2 m0 thin">{ "National Societies" }</h1>
            </div>
          </div>
        </header>

        <div className="px1">
          <div className="clearfix mxn1">
            <div className="col sm-8 sm-offset-2 px1">
              <ul className="clearfix mxn1 p0">
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(0,societiesPerCol).map((society, i) => (
                      <li className="block py05" key={i}>
                        <Link to={`/societies/${society.slug}`}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol,societiesPerCol*2).map((society, i) => (
                      <li className="block py05" key={i}>
                        <Link to={`/societies/${society.slug}`}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol*2,societiesPerCol*3).map((society, i) => (
                      <li className="block py05" key={i}>
                        <Link to={`/societies/${society.slug}`}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>

        { /* <ul>
          {
            this.props.nationalSocieties.map((society, i) => {

            })
          }
        </ul> */ }
      </section>
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
