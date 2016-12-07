import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"
import { fetchNationalSocieties } from "../actions/appActions"

class Societies extends React.Component {
  render() {
    const { language } = this.context.i18n
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

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/overview" className="block p1">{ "IFRC Global Overview" }</Link>
              </li>
              <li className="inline-block">
                <Link to="/societies" className="block bg-white p1">{ "National Society profiles" }</Link>
              </li>
            </ul>
          </div>
        </div>

        <header className="px1">
          <div className="clearfix mxn1">
            <div className="col sm-8 sm-offset-2 px1 py1">
              <h1 className="display-2 m0 thin">{ "National Society" } <span className="color-primary">{ "profiles" }</span></h1>
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
                      <li className="block py05" key={society.KPI_DON_Code}>
                        <Link to={prefixLanguageToRoute(language, `/societies/${society.slug}`)}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol,societiesPerCol*2).map((society, i) => (
                      <li className="block py05" key={society.KPI_DON_Code}>
                        <Link to={prefixLanguageToRoute(language, `/societies/${society.slug}`)}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol*2,societiesPerCol*3).map((society, i) => (
                      <li className="block py05" key={society.KPI_DON_Code}>
                        <Link to={prefixLanguageToRoute(language, `/societies/${society.slug}`)}>{ society.NSO_DON_name }</Link>
                      </li>
                    ))
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className='px1 py4 bg-beige'>
          <div className='clearfix mxn1'>
            <div className='col sm-4 sm-offset-6 px1'>
              <h2 className='headline sm-display-1 light mt0'>{ "The IFRC at a glance" }</h2>
              <p className='lead'>{ "Get the big picture with the IFRC at a glance, and see how the largest humanitarian network looks." }</p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>{ "Explore the IFRC" }</span>
              </Link>
            </div>
          </div>
        </div>

        <div className='px1 py4 bg-secondary'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>{ "For data collectors" }</h2>
              <p className='lead'>{ "To get started with the data collection for your National Society, please log in." }</p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>{ "Login as data collector" }</span>
              </Link>
            </div>
          </div>
        </div>
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
