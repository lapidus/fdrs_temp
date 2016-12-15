
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Breadcrumbs from "../components/Breadcrumbs"
import Textfield from "../components/Textfield"
import Map from "../components/Data/Map"
import Select from "react-select"

import StickySidebar from "../components/StickySidebar"
import ReactIScroll from "react-iscroll"
var iScroll = require("iscroll")

import groupBy from "lodash/groupBy"

import {
  makeGetSocietyData
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
} from "../actions/appActions"

class Overview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndicator: this.props.timeSeriesMeta.filter(obj => obj.id === "KPI_noPeopleVolunteering")[0],
      currentYear: 2015,
      groupedTimeSeries: groupBy(this.props.data, "KPI_Year"),
      selectedSocieties: [],
      societiesBlacklist: [],
    }

    this.handleIndicatorSelect = this.handleIndicatorSelect.bind(this)
    this.handleNSSelect = this.handleNSSelect.bind(this)
    this.handleYearSelect = this.handleYearSelect.bind(this)
  }
  componentDidMount() {
  }
  handleIndicatorSelect(indicator, e) {
    e.preventDefault()
    this.setState({
      currentIndicator: this.props.timeSeriesMeta.filter(obj => obj.id === indicator)[0],
    })
  }
  handleNSSelect(a,b,c) {
    this.setState({
      selectedSocieties: a,
      societiesBlacklist: a.map(ns => ns.value),
    })
  }
  handleYearSelect(year, e) {
    this.setState({
      currentYear: year,
    })
  }
  render() {

    const { i18n } = this.context
    const { language } = i18n
    const pageData = i18n.store.data[language]["common"]

    return (
      <section>

        <Breadcrumbs links={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/" },
          { name: "IFRC Overview", path: undefined },
        ]}/>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/overview" className="block bg-white p1"><span className="xs-visible">{ "IFRC Global " }</span>{ "Overview" }</Link>
              </li>
              <li className="inline-block">
                <Link to="/societies" className="block p1"><span className="xs-visible">{ "National Society " }</span>{ "Profiles" }</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-8 sm-offset-3 px1 py1">
              <h1 className="color-primary strong m0 small">{ "IFRC" } <span className="color-primary">{ "at a glance" }</span></h1>
              <p className="display-1 md-display-2 m0 light">{ pageData.indicators[this.state.currentIndicator.id] }</p>
            </header>
          </div>

          <div className="clearfix mxn1">
            <aside className="col sm-3 pl1 md-pl0 md-2 md-offset-1 pr1 sm-visible">
              <StickySidebar>
                <div className="pb2">
                  <h1 className="title mt0">National Societies</h1>
                  {/* <Textfield placeholder="Select societies..." /> */}
                  <Select
                    searchable={ true }
                    clearable={ false }
                    multi={ true }
                    name="ns-selector"
                    value={this.state.selectedSocieties}
                    options={this.props.nationalSocieties.map(ns => {
                      return {
                        value: ns.KPI_DON_Code,
                        label: ns.NSO_DON_name,
                        slug: ns.slug,
                      }
                    })}
                    onChange={ this.handleNSSelect }
                  />
                </div>
                <div>
                  <h1 className="title my0">Indicators</h1>
                  <ReactIScroll iScroll={iScroll} options={{ mouseWheel: true, scrollbars: true, fadeScrollbars: false }} onScrollStart={this.onScrollStart}>
                    <div className="pr2 pb3">
                      <ul className="p0">
                        {
                          Object.keys(pageData.indicators).map((indicatorKey, i) => (
                            <li key={ i } className="block py05">
                              <a href="#" className={this.state.currentIndicator.id === indicatorKey ? "color-primary" : ""} onClick={(e) => this.handleIndicatorSelect(indicatorKey, e)}>{ pageData.indicators[indicatorKey] }</a>
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
                <Map indicator={this.state.currentIndicator}
                     data={this.props.data}
                     groupedTimeSeries={this.state.groupedTimeSeries}
                     currentYear={this.state.currentYear}
                     nationalSocieties={this.props.nationalSocieties}
                     societiesBlacklist={this.state.societiesBlacklist}
                     />
                <div className="absolute b0 base-12 text-center pb2">
                  {
                    Object.keys(this.state.groupedTimeSeries).map((year, i) => (
                      <button key={i} onClick={(e) => this.handleYearSelect(year, e)} className={this.state.currentYear == year ? "btn bg-primary mr1" : "btn bg-secondary mr1"}>{ year }</button>
                    ))
                  }
                </div>
              </div>

              <table className="base-12 text-left mb2">
                <tbody>
                  <tr className="shadow-2">
                    <th className="p1 sm-4">{ "National Society name" }</th>
                    <th className="p1 sm-4">{ "Trend" }</th>
                    <th className="p1 sm-4">{ "Data for" } { this.state.currentYear }</th>
                  </tr>
                </tbody>
              </table>

              {/* <table className="base-12 text-left">
                <tbody>
                  <tr className="shadow-2">
                    <td className="p1 sm-4">{ "IFRC (all National Societies)" }</td>
                    <td className="p1 sm-4">{ "Trendline" }</td>
                    <td className="p1 sm-4">{ "16,031,869" }</td>
                  </tr>
                </tbody>
              </table> */}

              {
                this.state.selectedSocieties.length > 0 ? (
                  <div className="clearfix relative my2">
                    <hr />
                    <div className="absolute t0 l0 y-center-self px1 bg-white color-primary small strong">
                      { "Selected National Societies" }
                    </div>
                  </div>
                ) : (
                  ""
                )
              }

              {
                this.state.selectedSocieties.length > 0 ? (
                  <table className="base-12 text-left shadow-2">
                    <tbody>
                      {
                        this.state.selectedSocieties.map((ns, i) => {
                          return (
                            <tr key={ i }>
                              <td className="p1 sm-4">
                                <Link to={`/societies/${ns.slug}`}>
                                  { ns.label }
                                </Link>
                              </td>
                              <td className="p1 sm-4">{ "Trendline" }</td>
                              <td className="p1 sm-4">
                                {(() => {
                                  var latestData = this.state.groupedTimeSeries[this.state.currentYear]
                                                       .filter(obj => obj.KPI_DON_Code === ns.value)
                                  var latestNumber = latestData.length > 0 ? latestData[0][this.state.currentIndicator.id] : "N/A"
                                  return <span>{ latestNumber }</span>
                                })()}
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                ) : (
                  ""
                )
              }

              {
                this.state.selectedSocieties.length > 0 ? (
                  <div className="clearfix relative my2">
                    <hr />
                    <div className="absolute t0 l0 y-center-self px1 bg-white color-primary small strong">
                      { "All National Societies" }
                    </div>
                  </div>
                ) : (
                  ""
                )
              }

              <table className="base-12 text-left shadow-2">
                <tbody>
                  <tr>
                    <td className="p1 sm-4">{ "IFRC (all National Societies)" }</td>
                    <td className="p1 sm-4">{ "Trendline" }</td>
                    <td className="p1 sm-4">{ "16,031,869" }</td>
                  </tr>
                  {
                    this.props.nationalSocieties.map((NS, i) => {
                      return this.state.societiesBlacklist.indexOf(NS.KPI_DON_Code) == -1 ? (
                        <tr key={i}>
                          <td className="p1 sm-4">
                            <Link to={`/societies/${NS.slug}`}>
                              { NS.NSO_DON_name }
                            </Link>
                          </td>
                          <td className="p1 sm-4">{ "Trendline" }</td>
                          <td className="p1 sm-4">{(() => {
                              var latestData = this.state.groupedTimeSeries[this.state.currentYear]
                                                   .filter(obj => obj.KPI_DON_Code === NS.KPI_DON_Code)
                              var latestNumber = latestData.length > 0 ? latestData[0][this.state.currentIndicator.id] : "N/A"
                              return <span>{ latestNumber }</span>
                            })()}
                          </td>
                        </tr>
                      ) : ( <tr key={i}></tr> )
                    })
                  }
                </tbody>
              </table>

            </div>

          </div>
        </div>

        <div className="bg-secondary px1">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              { "Last updated…" }
            </div>
          </div>
        </div>

        <div className="px1 py4 bg-beige">
          <div className="clearfix mxn1">
            <div className="col sm-4 sm-offset-6 px1">
              <p className="caps small strong">{ "Get to know the National Societies" }</p>
              <h2 className="headline sm-display-1 light mt0">{ "National Society Profiles" }</h2>
              <p className="lead">{ "Explore the dataset for each National Society, and download PDF profiles for further sharing." }</p>
              <Link to="/" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Explore National Society Profiles" }</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="px1 py4 bg-secondary">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              <h2 className="headline sm-display-1 light mt0">{ "For data collectors" }</h2>
              <p className="lead">{ "To get started with the data collection for your National Society, please log in." }</p>
              <Link to="/" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Login as data collector" }</span>
              </Link>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

Overview.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Overview.propTypes = {
  nationalSocieties: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
  data: React.PropTypes.array,
}
Overview.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties,
  timeSeriesMeta: state.appReducer.timeSeriesMeta,
  data: state.appReducer.timeSeries,
})

// const makeMapStateToProps = () => {
//   const getSocietyData = makeGetSocietyData()
//   return (state, props) => ({
//     data: getSocietyData(state, props),
//     timeSeriesMeta: state.appReducer.timeSeriesMeta,
//     nationalSocieties: state.appReducer.nationalSocieties,
//   })
// }

export default connect(mapStateToProps)(Overview)
