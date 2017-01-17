import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Select from "react-select"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import uniqBy from "lodash/fp/uniqBy"
import sortBy from "lodash/sortBy"
import niceNum from "../utils/niceNum"

import { translate } from "react-i18next"

import LineChart from "../components/charts/LineChart"
import ShareBtn from "../components/socialMedia/ShareBtn"
import Breadcrumbs from "../components/Breadcrumbs"
import Card from "../components/cards/Card"
import CardView from "../components/cards/CardView"
import CardOverlay from "../components/cards/CardOverlay"
import GeneratedIntroText from "../components/GeneratedIntroText"
import FilteredSocietiesSidebar from "../components/FilteredSocietiesSidebar"

import {
  makeGetSociety,
  makeGetSocietyData,
  makeGetSocietyDocuments,
  makeGroupTimeSeriesBySociety,
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
  fetchDocuments,
} from "../actions/appActions"

function roundIt(n) {
  const sansDecimal = Math.round(Number(n))
  const factor = Math.pow(10, String(sansDecimal).length - 1)
  return Math.ceil(n/factor) * factor
}

function getLatestYearDocuments(props) {
  const latestDocuments = maxBy(props.documents, d => +d.year)
  return latestDocuments ? +latestDocuments.year : undefined
}

function missingDataString(dataType, countryName, year) {
  return `There is no ${dataType} data available for ${countryName} for ${year}`
}

class SocietyPDF extends React.Component {
  constructor(props, context) {
    super(props, context)

    const selectedCountry = {}
    selectedCountry[props.society.iso_3] = { fillKey: "red" }

    this.state = {
      year: getLatestYearDocuments(props),
      earliestData: minBy(props.data, (o) => o.KPI_Year),
      latestData: maxBy(props.data, (o) => o.KPI_Year),
      filteredDocuments: sortBy(filter(d => +d.year === +getLatestYearDocuments(props), props.documents), (o) => Number(o.year)),
      latestPopulationData: maxBy(props.data, (o) => o.Population ? o.KPI_Year : 0),
      latestGDPData: maxBy(props.data, (o) => o.GDP ? o.KPI_Year : 0),
      latestPovertyData: maxBy(props.data, (o) => o.Poverty ? o.KPI_Year : 0),
    }

    this.handleYearChange = this.handleYearChange.bind(this)
    this.getParsed = this.getParsed.bind(this)
    this.yearFilter = this.yearFilter.bind(this)
    this.yearOption = this.yearOption.bind(this)
    this.yearOptions = this.yearOptions.bind(this)
  }

  componentDidMount() {
    document.body.classList.add("html-ready")
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.society.iso_2 !== nextProps.society.iso_2) {
      this.setState({
        year: getLatestYearDocuments(nextProps),
        earliestData: minBy(nextProps.data, (o) => o.KPI_Year),
        latestData: maxBy(nextProps.data, (o) => o.KPI_Year),
        // filteredDocuments: filter(d => +d.year === +getLatestYearDocuments(nextProps), nextProps.documents),
        filteredDocuments: sortBy(filter(d => +d.year === +getLatestYearDocuments(nextProps), nextProps.documents), (o) => Number(o.year)),
        latestPopulationData: maxBy(nextProps.data, (o) => o.Population ? o.KPI_Year : 0),
        latestGDPData: maxBy(nextProps.data, (o) => o.GDP ? o.KPI_Year : 0),
        latestPovertyData: maxBy(nextProps.data, (o) => o.Poverty ? o.KPI_Year : 0),
      })
    }
  }

  handleYearChange(year) {
    this.setState({
      year: year.value,
      // filteredDocuments: filter(d => +d.year === +year.value, this.props.documents),
      filteredDocuments: sortBy(filter(d => +d.year === +year.value, this.props.documents), (o) => Number(o.year)),
    })
  }

  getParsed(v) {
    const m = v.match(/\d+/g)
    return !m ? 0 : v.search(m[0]) === 1 ? -m[0] : +m[0]
  }

  yearFilter(year) {
    return d => +d.year === +year
  }

  yearOption(d) {
    return { value: +d.year, label: d.year }
  }

  yearOptions() {
    return uniqBy("value", map(this.yearOption, this.props.documents))
  }

  render() {

    const {
      year,
      earliestData,
      latestData
    } = this.state

    const { society, data, timeSeriesMeta, t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const pageData = i18n.store.data[language]["common"]

    return (
      <section className="PDF" style={{zoom:'0.5'}}>

        <div className="px1">
          <div className="clearfix">
            <header className="col base-8 px1 py1">
              <p className="color-primary strong m0 small">NATIONAL SOCIETY PROFILE</p>
              <h1 className="display-2 m0 light">{ society.NSO_DON_name }</h1>
            </header>
          </div>

          <div className="clearfix">


            <div className="col px1">

              <div className="clearfix mxn1">
                <div className="col base-8 px1 pb1">
                  <p className="">
                    <GeneratedIntroText
                      societyName={ society.NSO_DON_name }
                      admissionDate={ society.admission_date.split(".")[2] }
                      latestData={ latestData }
                      earliestData={ earliestData }
                      translationText={ t("societies:generatedText") }
                    />
                  </p>
                  <p className="lead">
                    { t("societies:fillerText")[0] }
                    { ` ${earliestData.KPI_Year}:` }
                  </p>

                </div>

              </div>

              <div className="clearfix pb2">
                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="pb1">
                        <h1 className="subhead mt0 mb1">
                          { t("common:indicators.KPI_noPeopleVolunteering") }
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
                              y: Number(d.KPI_noPeopleVolunteering) || null,
                            })),
                          ] }
                        />
                      </div>
                    </CardView>

                </div>

                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="pb1">
                        <h1 className="subhead mt0 mb1">
                          { t("common:indicators.KPI_noLocalUnits") }
                        </h1>
                        <LineChart
                          height={ 150 }
                          padding={{
                            top: 10,
                            bottom: 30,
                            left: 40,
                            right: 16,
                          }}
                          tickCount={(() => {
                            const domainValue = roundIt(
                              maxBy(
                                data,
                                d => +d.KPI_noLocalUnits || 0
                              ).KPI_noLocalUnits
                            )
                            return domainValue === 1 ? 2 : 3
                          })()}
                          domain={{
                            x: [
                              new Date(earliestData.KPI_Year, 1, 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              (() => {
                                const domainValue = roundIt(
                                  maxBy(
                                    data,
                                    d => +d.KPI_noLocalUnits || 0
                                  ).KPI_noLocalUnits
                                )
                                return domainValue === 1 ? 2 : domainValue
                              })(),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: (() => {
                                return d.KPI_noLocalUnits ? Number(d.KPI_noLocalUnits) : null
                              })(),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                </div>

                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="pb1">
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
                                Number(maxBy(
                                  data,
                                  d => {
                                    return Number(d["KPI_expenditureLC (CHF)"]) || 0
                                  })["KPI_expenditureLC (CHF)"])
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => {
                              return ({
                                x: new Date(d.KPI_Year, 1, 1),
                                y: Number(d["KPI_expenditureLC (CHF)"]) || null
                              })
                            }),
                            data.map(d => {
                              return ({
                                x: new Date(d.KPI_Year, 1, 1),
                                y: Number(d["KPI_IncomeLC (CHF)"]) || null
                              })
                            }),
                          ] }
                        />
                      </div>
                    </CardView>
                </div>

                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="pb1">
                        <h1 className="subhead mt0 mb1">
                          { t("common:indicators.KPI_noPaidStaff") }
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
                              y: (() => {
                                return d.KPI_noPaidStaff ? Number(d.KPI_noPaidStaff) : null
                              })(),
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                </div>

                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="">
                        <h1 className="subhead mt0 mb1">
                          { t("societies:peopleReached") }
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
                              y: Number(d.KPI_noPeopleReachedDisaster) || null,
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                </div>

                <div className="col base-6">
                    <CardView viewIcon="lineChart">
                      <div className="">
                        <h1 className="subhead mt0 mb1">
                          { t("common:indicators.KPI_noPeopleDonatingBlood") }
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
                              y: Number(d.KPI_noPeopleDonatingBlood) || null,
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

SocietyPDF.propTypes = {
  t: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  nationalSocieties: React.PropTypes.array,
  data: React.PropTypes.array,
  documents: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
}

SocietyPDF.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

SocietyPDF.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchDocuments, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const getSociety = makeGetSociety()
  const getSocietyData = makeGetSocietyData()
  const getSocietyDocuments = makeGetSocietyDocuments()
  const groupTimeSeriesBySociety = makeGroupTimeSeriesBySociety()
  return (state, props) => ({
    grouping: groupTimeSeriesBySociety(state, props),
    society: getSociety(state, props),
    data: getSocietyData(state, props),
    documents: getSocietyDocuments(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
  })
}

export default translate([ "countries", "societies" ], { wait: true })(connect(makeMapStateToProps)(SocietyPDF))

// export default connect(makeMapStateToProps)(Society)
