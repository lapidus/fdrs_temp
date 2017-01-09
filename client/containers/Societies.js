import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import { translate } from "react-i18next"
import Breadcrumbs from "../components/Breadcrumbs"

import prefixLanguageToRoute from "../utils/prefixLanguageToRoute"
import { fetchNationalSocieties } from "../actions/appActions"

class Societies extends React.Component {
  render() {
    const { i18n } = this.context
    const { language } = i18n
    const { t } = this.props
    const societiesPerCol = Math.ceil(this.props.nationalSocieties.length / 3)
    const pageData = i18n.store.data[language]["common"]

    return (
      <section>

        <Breadcrumbs links={[
          { name: pageData.home, path: "/" },
          { name: pageData.navigation[0].name, path: "/" },
          { name: pageData.navigation[0].dropdownItems[1], path: undefined },
        ]}/>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/overview" className="block p1">
                  <span className="xs-visible">
                    { t("societies:tabs")[0][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[0][1] }
                </Link>
              </li>
              <li className="inline-block">
                <Link to="/societies" className="block bg-white p1">
                  <span className="xs-visible">
                    { t("societies:tabs")[1][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[1][1] }
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <header className="px1">
          <div className="clearfix mxn1">
            <div className="col sm-8 sm-offset-2 px1 py1">
              <h1 className="display-1 md-display-2 m0 light">
                { t("societies:titleParts")[0] }&nbsp;<span className="color-primary">{ t("societies:titleParts")[1] }</span>
              </h1>
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
              <h2 className='headline sm-display-1 light mt0'>
                { t("common:overviewPreview.title") }
              </h2>
              <p className='lead'>
                { t("common:overviewPreview.leader") }
              </p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>
                  { t("common:overviewPreview.button") }
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className='px1 py4 bg-secondary'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>
                { t("common:dataCollectors.title") }
              </h2>
              <p className='lead'>
                { t("common:dataCollectors.lead") }
              </p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>
                  { t("common:dataCollectors.button") }
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Societies.propTypes = {
  t: React.PropTypes.func.isRequired,
  nationalSocieties: React.PropTypes.array,
}

Societies.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Societies.needs = [ fetchNationalSocieties ]

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties,
})

export default translate("societies", { wait: true })(connect(mapStateToProps)(Societies))
