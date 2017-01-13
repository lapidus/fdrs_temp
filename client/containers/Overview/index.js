
import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import { Link } from "react-router"
import Select from "react-select"

import Breadcrumbs from "../../components/Breadcrumbs"
import {
  makeGetSocietyData,
  makeGroupTimeSeriesByYear,
} from "../../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
  showTooltip,
  hideTooltip,
  setIndicator,
} from "../../actions/appActions"

class Overview extends React.Component {
  render() {

    const { i18n, router } = this.context
    const { t } = this.props

    const pageData = i18n.store.data[i18n.language]["common"]

    return (
      <section>
        <Breadcrumbs links={[
          { name: pageData.home, path: "/fdrs" },
          { name: pageData.navigation[0].name, path: "/fdrs" },
          { name: pageData.navigation[0].dropdownItems[0], path: undefined },
        ]}/>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/fdrs/overview" className="block bg-white p1">
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
                    { t("overview:tabs")[0][0] }&nbsp;
                  </span>
                  { t("overview:tabs")[0][1] }
                </Link>
              </li>
              <li className="inline-block">
                <Link to="/fdrs/societies" className="block p1">
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
                    { t("overview:tabs")[1][0] }&nbsp;
                  </span>
                  { t("overview:tabs")[1][1] }
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-9 sm-offset-2 px1 pt1">
              <h1 className="color-primary strong m0 small">
                { t("overview:title") }
              </h1>
              <div className="relative">
                {/* <span className="display-1 md-display-2 m0 light">{ pageData.indicators[this.props.currentIndicator] }</span> */}
                <div className="sm-6 select-xl select-no-underline select-no-scroll">
                  <Select
                    searchable={ false }
                    clearable={ false }
                    value={this.props.currentIndicator}
                    placeholder={"Whaddup"}
                    multi={ false }
                    name="ns-selector"
                    options={Object.keys(pageData.indicators).map(indicatorKey => {
                      return {
                        value: indicatorKey,
                        label: pageData.indicators[indicatorKey],
                      }
                    })}
                    onChange={(indicator) => this.props.setIndicator(indicator.value)}
                  />
                </div>
                <div className="absolute t50 r0 y-center-self">
                  <Link to="/fdrs/overview/map" className="relative btn">
                    <span className="small strong caps color-primary">{ "Map" }</span>
                    <span className="absolute b0 l0 base-12 bg-primary" style={{height:4}}></span>
                  </Link>
                  <Link to="/fdrs/overview/table" className="relative btn">
                    <span className="small strong caps">{ "Table" }</span>
                    <span className="absolute b0 l0 base-12 bg-secondary" style={{height:4}}></span>
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>

        { this.props.children }

        <div className="bg-secondary px1">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              { pageData.updateText }
            </div>
          </div>
        </div>

        <div className="px1 py4 bg-beige">
          <div className="clearfix mxn1">
            <div className="col sm-4 sm-offset-6 px1">
              <p className="caps small strong">
                { pageData.nationalSocietiesPreview.subtitle }
              </p>
              <h2 className="headline sm-display-1 light mt0">
                { pageData.nationalSocietiesPreview.title }
              </h2>
              <p className="lead">
                { pageData.nationalSocietiesPreview.lead }
              </p>
              <Link to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">
                  { pageData.nationalSocietiesPreview.button }
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="px1 py4 bg-secondary">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              <h2 className="headline sm-display-1 light mt0">
                { pageData.dataCollectors.title }
              </h2>
              <p className="lead">
                { pageData.dataCollectors.lead }
              </p>
              <Link to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">
                  { pageData.dataCollectors.button }
                </span>
              </Link>
            </div>
          </div>
        </div>


      </section>
    )
  }
}

Overview.contextTypes = {
  router: React.PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired,
}

Overview.propTypes = {
  t: React.PropTypes.func.isRequired,
  nationalSocieties: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
  data: React.PropTypes.array,
  grouping: React.PropTypes.object,
  params: React.PropTypes.object.isRequired,
  currentIndicator: React.PropTypes.string,
  showTooltip: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
  setIndicator: React.PropTypes.func,
}

Overview.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const groupTimeSeriesByYear = makeGroupTimeSeriesByYear()
  return (state, props) => ({
    grouping: groupTimeSeriesByYear(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
    data: state.appReducer.timeSeries,
    currentIndicator: state.appReducer.currentIndicator,
  })
}

const mapDispatchToProps = dispatch => ({
  showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  hideTooltip: () => dispatch(hideTooltip()),
  setIndicator: (indicator) => dispatch(setIndicator(indicator)),
})

export default translate("overview", { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(Overview))
