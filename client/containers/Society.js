import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Select from "react-select"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import uniqBy from "lodash/fp/uniqBy"
import ReactIScroll from "react-iscroll"

import StickySidebar from "../components/StickySidebar"
import LineChart from "../components/charts/LineChart"
import Textfield from "../components/Textfield"
import ShareBtn from "../components/socialMedia/ShareBtn"
import Breadcrumbs from "../components/Breadcrumbs"
import Globe from "../components/Globe"
import Card from "../components/cards/Card"
import CardView from "../components/cards/CardView"
import CardOverlay from "../components/cards/CardOverlay"
import {
  makeGetSociety,
  makeGetSocietyData,
  makeGetSocietyDocuments,
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchDocuments,
} from "../actions/appActions"

const iScroll = require("iscroll")

function roundIt(n) {
  const factor = Math.pow(10, String(n).length - 1)
  return Math.ceil(n/factor) * factor
}

function getLatestYearDocuments(props) {
  const latestDocuments = maxBy(props.documents, d => +d.year)
  return latestDocuments ? +latestDocuments.year : undefined
}

class Society extends React.Component {
  constructor(props, context) {
    super(props, context)

    const selectedCountry = {}
    selectedCountry[props.society.iso_3] = { fillKey: "red" }

    this.state = {
      year: getLatestYearDocuments(props),
      filteredSocieties: props.nationalSocieties,
      filterValue: "",
    }

    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleSocietiesFiltering = this.handleSocietiesFiltering.bind(this)
    this.handleFilterReset = this.handleFilterReset.bind(this)
  }

  componentDidMount() {
    document.body.classList.add("html-ready")
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.society.iso_2 !== nextProps.society.iso_2) {
      this.setState({
        year: getLatestYearDocuments(nextProps),
      })
    }
  }

  handleYearChange(year) {
    this.setState({ year: year.value })
  }

  handleSocietiesFiltering(e) {
    e.preventDefault()
    const regex = new RegExp(e.target.value, "i")
    const filteredSocieties = this.props.nationalSocieties.filter((d) => {
      return (d.NSO_DON_name.search(regex) > -1)
    })
    this.setState({
      filteredSocieties: filteredSocieties,
      filterValue: e.target.value,
    })
  }

  handleFilterReset() {
    this.setState({
      filteredSocieties: this.props.nationalSocieties,
      filterValue: "",
    })
  }

  render() {

    const { year, filteredSocieties, filterValue } = this.state
    const { society, data, documents } = this.props
    const yearOption = d => ({ value: +d.year, label: d.year })
    const yearOptions = uniqBy("value", map(yearOption, documents))
    const yearFilter = d => +d.year === +year
    const yearDocuments = filter(yearFilter, documents)
    console.log("yyyyyy", year, yearDocuments, documents)

    const earliestData = minBy(data, (o) => o.KPI_Year)
    const latestData = maxBy(data, (o) => o.KPI_Year)

    const getParsed = v => {
      const m = v.match(/\d+/g)
      return !m ? 0 : v.search(m[0]) === 1 ? -m[0] : +m[0]
    }

    return (
      <section>

        <Breadcrumbs
          links={ [
            { name: "Home", path: "/" },
            { name: "Services", path: "/" },
            { name: "National Society Profiles", path: "/societies" },
            { name: society.NSO_DON_name, path: undefined },
          ] }
        />

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/overview" className="block p1"><span className="xs-visible">{ "IFRC Global " }</span>{ "Overview" }</Link>
              </li>
              <li className="inline-block">
                <Link to="/societies" className="block bg-white p1"><span className="xs-visible">{ "National Society " }</span>{ "Profiles" }</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-8 sm-offset-3 px1 py1">
              <p className="color-primary strong m0 small">{ society.NSO_ZON_name }</p>
              <h1 className="display-1 md-display-2 m0 light">{ society.NSO_DON_name }</h1>
            </header>
          </div>

          <div className="clearfix mxn1">
            <aside className="col sm-3 pl1 md-pl0 md-2 md-offset-1 pr1 sm-visible">
              <StickySidebar>
                <div className="pb1">
                  <h1 className="title mt0">{ "National Societies" }</h1>
                  <Textfield
                    placeholder="Search…"
                    onChange={ this.handleSocietiesFiltering }
                    value={ filterValue }
                  />
                </div>
                <ReactIScroll
                  iScroll={ iScroll }
                  options={{
                    mouseWheel: true,
                    scrollbars: true,
                    fadeScrollbars: false,
                  }}
                  onScrollStart={ this.onScrollStart }
                >
                  <div className="pr2 pb3">
                    { !filteredSocieties.length && "No societies found" }
                    <ul className="my1 mx0 p0">
                      {
                        filteredSocieties.map((ns, i) =>
                          <li className="block mb1" key={ i }>
                            <Link
                              to={ `/societies/${ ns.slug }` }
                              onClick={ this.handleFilterReset }
                            >
                              { ns.NSO_DON_name }
                            </Link>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </ReactIScroll>
              </StickySidebar>
            </aside>

            <div className="col sm-9 md-8 px1">

              <div className="clearfix mxn1 pb2">
                <div className="col sm-8 px1 pb1">
                  <p className="lead">
                    { `${society.NSO_DON_name} was admitted to the IFRC in ${society.admission_date}.` }
                    { latestData.KPI_noPeopleVolunteering ? ` In ${latestData.KPI_Year}, it counted ${latestData.KPI_noPeopleVolunteering} active volunteers` : "" }
                    { earliestData.KPI_noPeopleVolunteering ? ` (up from ${earliestData.KPI_noPeopleVolunteering} in ${earliestData.KPI_Year})` : "" }
                    { latestData.KPI_noPeopleVolunteeringM && latestData.KPI_noPeopleVolunteeringF ? `, of which ${Math.round(100 / latestData.KPI_noPeopleVolunteering * latestData.KPI_noPeopleVolunteeringM)}% were male and ${Math.round(100 / latestData.KPI_noPeopleVolunteering * latestData.KPI_noPeopleVolunteeringF)}% female` : "" }
                    { "." }
                  </p>
                  <p className="lead">
                    { `Key proxy indicators reported by the National Society since ${earliestData.KPI_Year} are available below, as well as copies of additional key documents.` }
                  </p>
                  <div>
                    <ShareBtn service="twitter" />
                    <ShareBtn service="facebook" />
                    <ShareBtn service="mail" />
                  </div>
                </div>
                <div className="col base-8 base-offset-2 xs-6 xs-offset-3 sm-4 sm-offset-0 px1">
                  <Globe
                    selectedCountry={ society.iso_2 }
                    center={ [
                      getParsed(society.lat),
                      getParsed(society.long),
                    ] }
                  />
                </div>
              </div>

              <div className="clearfix mxn1 pb2">
                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">
                          { "People volunteering their time" }
                        </h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year, 1, 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_noPeopleVolunteering || 0
                                ).KPI_noPeopleVolunteering
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleVolunteering),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ latestData.KPI_noPeopleVolunteering }</p>
                        <p className="m0">{ `people volunteering time for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard>
                    <CardView viewIcon="plainNumber">
                      <div className="pt3 px1">
                        <p className="display-2 strong mb0">{ latestData.Population }</p>
                        <p className="m0">{ `population of ${society.NSO_DON_name} in 2015` }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-4 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">{ "Local units" }</h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year, 1, 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_noLocalUnits || 0
                                ).KPI_noLocalUnits
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noLocalUnits),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ latestData.KPI_noLocalUnits }</p>
                        <p className="m0">{ `local units for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">
                          { "Income and Expenditure" }
                        </h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 50,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year, 1, 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_expenditureLC || 0
                                ).KPI_expenditureLC
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_expenditureLC),
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_IncomeLC),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">{ "View 1" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">{ "Paid staff" }</h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year,1 , 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_noPaidStaff || 0
                                ).KPI_noPaidStaff
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPaidStaff),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ latestData.KPI_noPaidStaff }</p>
                        <p className="m0">{ `paid staff for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card initialView={ 0 } bgColor="bg-beige" basicCard>
                    <CardView viewIcon="plainNumber">
                      <div className="pt3 px1">
                        <p className="display-2 strong mb0">{ latestData.Poverty }</p>
                        <p className="m0">{ `percentage of ${society.NSO_DON_name} population living below the poverty line in 2015` }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">{ "People Reached" }</h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year,1 , 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_noPeopleReachedDisaster || 0
                                ).KPI_noPeopleReachedDisaster
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDisaster),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">{ "View 1" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="subhead mt0 mb1">{ "People donating blood" }</h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year,1 , 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                maxBy(
                                  data,
                                  d => +d.KPI_noPeopleDonatingBlood || 0
                                ).KPI_noPeopleDonatingBlood
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleDonatingBlood),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ latestData.KPI_noPeopleDonatingBlood }</p>
                        <p className="m0">{ `people donating blood for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard>
                    <CardView>
                      <div className="pt3 px1">
                        <p className="small strong m0">{ "CHF" }</p>
                        <p className="display-1 strong m0">{ latestData.GDP }</p>
                        <p className="m0">{ `${society.NSO_DON_name} GDP in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView>{ "View 1" }</CardView>
                    <CardView>{" View 2" }</CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-primary" basicCard>
                    <CardView>
                      <div className="pt3 px2">
                        <p className="display-1 lh-1 strong mt0 mb1">{ "What would you like to see here?" }</p>
                        <p className="m0">{ "Help us improve data.ifrc.org" }</p>
                        <p className="m0">{ "Send your ideas to:" }<br />{ "ideas@ifrc.org" }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for Burundi. It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
                        { "The data comes from this source:" } <br />
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 px1 pb2">
                  <hr />
                </div>

                {
                  yearDocuments.length > 0 ? (
                    <div className="col sm-12 px1 pb2">
                      <div className="relative overflow-hidden shadow-2 pt1 px1 pb2">
                        <h2 className="subhead mt0">{ "Documents" }</h2>
                        <div className="clearfix">
                          <Select
                            searchable={ false }
                            clearable={ false }
                            name="year-selector"
                            value={ year }
                            options={ yearOptions }
                            onChange={ this.handleYearChange }
                          />
                        </div>
                        <div className="clearfix mxn1">
                          {
                            yearDocuments.map((doc, i) =>
                              <div className="col sm-4 px1" key={ i }>
                                { `${doc.document_type} - ${doc.year}` }<br />
                                <a
                                  href={ doc.url }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  { "Download" }
                                </a>
                              </div>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px1">{ "No documents" }</div>
                  )
                }
              </div>
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
              <h2 className="headline sm-display-1 light mt0">{ "The IFRC at a glance" }</h2>
              <p className="lead">{ "Get the big picture with the IFRC at a glance, and see how the largest humanitarian network looks." }</p>
              <Link to="/" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Explore the IFRC" }</span>
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

Society.propTypes = {
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  nationalSocieties: React.PropTypes.array,
  data: React.PropTypes.array,
  documents: React.PropTypes.array,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Society.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchDocuments ]

const makeMapStateToProps = () => {
  const getSociety = makeGetSociety()
  const getSocietyData = makeGetSocietyData()
  const getSocietyDocuments = makeGetSocietyDocuments()
  return (state, props) => ({
    society: getSociety(state, props),
    data: getSocietyData(state, props),
    documents: getSocietyDocuments(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
  })
}

export default connect(makeMapStateToProps)(Society)
