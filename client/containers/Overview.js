
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import { translate } from "react-i18next"
import Breadcrumbs from "../components/Breadcrumbs"
import Textfield from "../components/Textfield"
import Map from "../components/Data/Map"
import Select from "react-select"
import remove from "lodash/remove"
import max from "lodash/max"
import { VictoryLine, VictoryScatter, VictoryChart } from "victory"
import niceNum from "../utils/niceNum"
import SocietiesTable from "../components/SocietiesTable"

import StickySidebar from "../components/StickySidebar"
import ReactIScroll from "react-iscroll"
var iScroll = require("iscroll")

import groupBy from "lodash/groupBy"

import {
  makeGetSocietyData,
  makeGroupTimeSeriesByYear,
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
  showTooltip,
  hideTooltip,
} from "../actions/appActions"

class Overview extends React.Component {
  constructor(props) {
    super(props)

    const initialIndicator = props.location.query.currentIndicator || "KPI_noPeopleVolunteering"

    this.state = {
      currentIndicator: this.props.timeSeriesMeta.filter(obj => obj.id === initialIndicator)[0],
      currentYear: 2015,
      groupedTimeSeries: groupBy(this.props.data, "KPI_Year"),
      groupedByCode: groupBy(this.props.data, "KPI_DON_Code"),
      selectedSocieties: [],
      societiesBlacklist: [],
    }

    this.handleIndicatorSelect = this.handleIndicatorSelect.bind(this)
    this.handleNSSelect = this.handleNSSelect.bind(this)
    this.handleYearSelect = this.handleYearSelect.bind(this)
    this.handleUnselectSociety = this.handleUnselectSociety.bind(this)
  }
  // componentDidMount() {
  //   console.log("Grouping: ", this.props.grouping)
  // }
  handleIndicatorSelect(indicator, e) {
    e.preventDefault()
    this.setState({
      currentIndicator: this.props.timeSeriesMeta.filter(obj => obj.id === indicator)[0],
    })
  }
  handleNSSelect(selectedSociety) {
    let newSelectedSocieties = []
    let newSelectedSocietiesBlacklist = []
    this.setState({
      selectedSocieties: newSelectedSocieties.concat(this.state.selectedSocieties, [{
        KPI_DON_Code: selectedSociety.value,
        NSO_DON_name: selectedSociety.label,
        slug: selectedSociety.slug,
      }]),
      societiesBlacklist: newSelectedSocietiesBlacklist.concat(this.state.societiesBlacklist, [selectedSociety.value])
    })
  }
  handleYearSelect(year, e) {
    this.setState({
      currentYear: Number(year),
    })
  }
  handleUnselectSociety(society, e) {
    const newSelectedSocieties = remove(this.state.selectedSocieties, (n) => {
      return n.KPI_DON_Code !== society.KPI_DON_Code
      // return n.KPI_DON_Code !== society.value
    })
    this.setState({
      selectedSocieties: newSelectedSocieties,
      societiesBlacklist: newSelectedSocieties.map(o => o.KPI_DON_Code)
    })
  }
  render() {

    const { i18n } = this.context
    const { language } = i18n
    const { t } = this.props
    const pageData = i18n.store.data[language]["common"]
    // const commonTranslations = i18n.store.data[language]["common"]
    // const overviewTranslations = i18n.store.data[language]["overview"]

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
            <header className="col sm-8 sm-offset-3 px1 pt1">
              <h1 className="color-primary strong m0 small">
                { t("overview:title") }
              </h1>
              <p className="display-1 md-display-2 m0 light">
                { pageData.indicators[this.state.currentIndicator.id] }
              </p>
            </header>
          </div>

          <div className="clearfix mxn1">
            <aside className="col sm-3 pl1 md-pl0 md-2 md-offset-1 pr1 sm-visible">
              <StickySidebar>
                <div>
                  <h1 className="title my0">{ pageData.indicatorsTitle }</h1>
                  <ReactIScroll iScroll={iScroll} options={{ mouseWheel: true, scrollbars: true, fadeScrollbars: false }} onScrollStart={this.onScrollStart}>
                    <div className="pr2 pb3">
                      <ul className="p0">
                        {
                          Object.keys(pageData.indicators).map((indicatorKey, i) => (
                            <li key={ i } className="block" onMouseEnter={ (e) => this.props.showTooltip({ text: this.props.timeSeriesMeta.filter(obj => obj.id === indicatorKey)[0].description }, e) } onMouseLeave={ () => this.props.hideTooltip() }>
                              <a href="#" className={this.state.currentIndicator.id === indicatorKey ? "block btn color-primary" : "block btn"} onClick={(e) => this.handleIndicatorSelect(indicatorKey, e)}>
                                <div className="text-left" style={{whiteSpace:"normal"}}>{ pageData.indicators[indicatorKey] }</div>
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </ReactIScroll>
                </div>
              </StickySidebar>
            </aside>

            <div className="col sm-9 md-8 px1 pb3">
              <div className="relative">

                {/* <div className="Select Select--single is-focused is-open is-searchable">
                  <div className="Select-control">
                    <span className="Select-multi-value-wrapper">
                      <div className="Select-placeholder">Select a society...</div>
                      <div className="Select-input">
                        <input />
                      </div>
                    </span>
                    <span className="Select-arrow-zone">
                      <span className="Select-arrow"></span>
                    </span>
                  </div>
                  <div className="Select-menu-outer">
                    <div className="Select-menu">
                      <div className="Select-option">Andorra</div>
                      <div className="Select-option">Afghanistan</div>
                      <div className="Select-option">Azerbaijan</div>
                      <div className="Select-option">Andorra</div>
                      <div className="Select-option">Afghanistan</div>
                      <div className="Select-option">Azerbaijan</div>
                    </div>
                  </div>
                </div> */}

                {(() => {
                  const router = this.context.router
                  return (
                    <Map indicator={this.state.currentIndicator}
                         data={this.props.data}
                         groupedTimeSeries={this.state.groupedTimeSeries}
                         currentYear={this.state.currentYear}
                         nationalSocieties={this.props.nationalSocieties}
                         societiesBlacklist={this.state.societiesBlacklist}
                         bubbleMouseEnter={ (e, bubble, indicator) => this.props.showTooltip({
                             text: `${bubble.NSO_DON_name} - ${niceNum(indicator, null, null, true)}`
                           }, e)
                         }
                         bubbleMouseLeave={ () => this.props.hideTooltip() }
                         bubbleClick={ (e, bubble, indicator) => {
                           router.push(`/fdrs/societies/${bubble.slug}`)
                         }}
                        />
                  )
                })()}

                <div className="absolute b0 text-center pb4 l50 x-center-self">
                  <div className="year-slider">
                    {
                      Object.keys(this.state.groupedTimeSeries).map((year, i) => (
                        <div key={i} onClick={(e) => this.handleYearSelect(year, e)} className={this.state.currentYear == year ? "year-slider__year year-slider__year--active" : "year-slider__year"}>
                          { year }
                        </div>
                      ))
                    }
                  </div>
                </div>

              </div>

              <SocietiesTable
                filterPlaceholder={ t("overview:filterPlaceholder") }
                currentYear={ this.state.currentYear }
                currentIndicator={ this.state.currentIndicator }
                selectedSocieties={ this.state.selectedSocieties }
                societiesBlacklist={ this.state.societiesBlacklist }
                groupedTimeSeries={ this.state.groupedTimeSeries }
                groupedByCode={this.state.groupedByCode}
                handleIndicatorSelect={ this.handleIndicatorSelect }
                handleUnselectSociety={ this.handleUnselectSociety }
                handleNSSelect={ this.handleNSSelect }
                handleYearSelect={ this.handleYearSelect }
              />

            </div>

          </div>
        </div>

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
  showTooltip: React.PropTypes.func,
  hideTooltip: React.PropTypes.func,
}

Overview.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const groupTimeSeriesByYear = makeGroupTimeSeriesByYear()
  return (state, props) => ({
    grouping: groupTimeSeriesByYear(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
    data: state.appReducer.timeSeries,
  })
}

const mapDispatchToProps = dispatch => ({
  showTooltip: (content, evt) => dispatch(showTooltip(content, evt)),
  hideTooltip: () => dispatch(hideTooltip()),
})

export default translate("overview", { wait: true })(connect(makeMapStateToProps, mapDispatchToProps)(Overview))
