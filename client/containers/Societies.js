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
          { name: pageData.home, path: "/fdrs" },
          { name: pageData.navigation[0].name, path: "/fdrs" },
          { name: pageData.navigation[0].dropdownItems[1], path: undefined },
        ]}/>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/fdrs/overview/map" className="block p1">
                  <span>
                    <svg style={{width:16,height:16,marginTop:-1,marginRight:8}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)">
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M5.7,3C6.4,3.5,7,4.1,7.5,5C7.9,5.7,8.9,7.8,8,9c-1,1.3-4,1.8-4,3c0,0.9,1.3,2,2,3c1,1.5,0.6,3,0,4c-0.3,0.5-0.8,0.9-1.3,1.2" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M20.6,5.2C18.5,6.3,15.5,7,15,7c-1,0.1-1.2-0.8-2-2c-0.6-0.9-2-2.1-2-3c0-0.4,0-0.7,0.1-1" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <circle fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="12" r="11" strokeLinejoin="miter"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M19,12.9c0,3.1-4,6.9-6,6.1c-1.8-0.7-0.5-2.1-1-6.1c-0.2-1.6,1.6-3,3.5-3S19,11.2,19,12.9z" strokeLinejoin="miter" strokeLinecap="butt"/>
                      </g>
                    </svg>
                  </span>
                  <span className="xs-visible">
                    { t("societies:tabs")[0][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[0][1] }
                </Link>
              </li>
              <li className="inline-block">
                <Link to="/fdrs/societies" className="block bg-white p1">
                  <span>
                    <svg style={{width:16,height:16,marginTop:-3,marginRight:8}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g  transform="translate(0, 0)">
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M12,23c-2-1.6-2.1-6.8,1-8c1.6-0.6,2.2,2.9,5.4,2c0.6-0.2,2.1,0.7,1.6,2.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M6.3,4.8c0.6,0.5,1.1,1.1,1.6,1.8c0.4,0.7,1.3,2.6,0.5,3.6c-0.9,1.2-3.6,1.6-3.6,2.7c0,0.8,1.2,1.8,1.8,2.7c1,1.4,0.5,2.8,0,3.6c-0.3,0.5-0.7,0.8-1.2,1.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M20.2,7.3C21.3,8.9,22,10.9,22,13c0,5.5-4.5,10-10,10S2,18.5,2,13S6.5,3,12,3c0.5,0,1,0,1.5,0.1" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M21,5c0,2.5-4,6-4,6s-4-3.5-4-6c0-2.5,2.1-4,4-4S21,2.5,21,5z" strokeLinejoin="miter"/>
                      </g>
                    </svg>
                  </span>
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
                        <Link to={prefixLanguageToRoute(language, `/fdrs/societies/${society.slug}`)}>
                          { t("national-societies:" + society.KPI_DON_Code) }
                        </Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol,societiesPerCol*2).map((society, i) => (
                      <li className="block py05" key={society.KPI_DON_Code}>
                        <Link to={prefixLanguageToRoute(language, `/fdrs/societies/${society.slug}`)}>
                          { t("national-societies:" + society.KPI_DON_Code) }
                        </Link>
                      </li>
                    ))
                  }
                </div>
                <div className="col sm-4 px1">
                  {
                    this.props.nationalSocieties.slice(societiesPerCol*2,societiesPerCol*3).map((society, i) => (
                      <li className="block py05" key={society.KPI_DON_Code}>
                        <Link to={prefixLanguageToRoute(language, `/fdrs/societies/${society.slug}`)}>
                          { t("national-societies:" + society.KPI_DON_Code) }
                        </Link>
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

export default translate(["societies", "national-societies"], { wait: true })(connect(mapStateToProps)(Societies))
