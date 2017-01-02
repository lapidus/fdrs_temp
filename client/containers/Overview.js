
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
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
            <header className="col sm-8 sm-offset-3 px1 pt1">
              <h1 className="color-primary strong m0 small">{ "IFRC" } <span className="color-primary">{ "at a glance" }</span></h1>
              <p className="display-1 md-display-2 m0 light">{ pageData.indicators[this.state.currentIndicator.id] }</p>
            </header>
          </div>

          <div className="clearfix mxn1">
            <aside className="col sm-3 pl1 md-pl0 md-2 md-offset-1 pr1 sm-visible">
              <StickySidebar>
                <div className="pb2">
                  <h1 className="title mt0">National Societies</h1>
                  <Select
                    searchable={ true }
                    clearable={ false }
                    placeholder="Select a NS..."
                    multi={ false }
                    name="ns-selector"
                    options={this.props.nationalSocieties.map(ns => {
                      return {
                        value: ns.KPI_DON_Code,
                        label: ns.NSO_DON_name,
                        slug: ns.slug,
                      }
                    })}
                    onChange={ this.handleNSSelect }
                  />
                  <ul className="mt1 mb0 p0">
                    {
                      this.state.selectedSocieties.map((society, i) => {
                        return (
                          <li key={ i } className="block relative bg-secondary overflow-hidden py05 px1" style={{marginBottom: "0.5rem", textAlign: "left"}}>
                            <span className="block overflow-hidden pr1" style={{whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                              { society.NSO_DON_name }
                            </span>
                            <div onClick={ (e) => this.handleUnselectSociety(society, e) } className="btn absolute t0 b0 r0 bg-primary p05">x</div>
                          </li>
                        )
                      })
                    }
                  </ul>
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
                {/* <Select
                  searchable={ true }
                  clearable={ false }
                  placeholder="Select a NS..."
                  multi={ false }
                  name="ns-selector"
                  options={this.props.nationalSocieties.map(ns => {
                    return {
                      value: ns.KPI_DON_Code,
                      label: ns.NSO_DON_name,
                      slug: ns.slug,
                    }
                  })}
                  onChange={ this.handleNSSelect }
                /> */}

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

                <Map indicator={this.state.currentIndicator}
                     data={this.props.data}
                     groupedTimeSeries={this.state.groupedTimeSeries}
                     currentYear={this.state.currentYear}
                     nationalSocieties={this.props.nationalSocieties}
                     societiesBlacklist={this.state.societiesBlacklist}
                     />
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
                currentYear={ this.state.currentYear }
                currentIndicator={ this.state.currentIndicator }
                selectedSocieties={ this.state.selectedSocieties }
                societiesBlacklist={ this.state.societiesBlacklist }
                groupedTimeSeries={ this.state.groupedTimeSeries }
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
  grouping: React.PropTypes.object,
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

export default connect(makeMapStateToProps)(Overview)
