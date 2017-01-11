import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import Select from "react-select"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import uniqBy from "lodash/fp/uniqBy"
import niceNum from "../utils/niceNum"

import { translate } from "react-i18next"

import LineChart from "../components/charts/LineChart"
import ShareBtn from "../components/socialMedia/ShareBtn"
import Breadcrumbs from "../components/Breadcrumbs"
import Globe from "../components/Globe"
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

class Society extends React.Component {
  constructor(props, context) {
    super(props, context)

    const selectedCountry = {}
    selectedCountry[props.society.iso_3] = { fillKey: "red" }

    this.state = {
      year: getLatestYearDocuments(props),
      earliestData: minBy(props.data, (o) => o.KPI_Year),
      latestData: maxBy(props.data, (o) => o.KPI_Year),
      filteredDocuments: filter(d => +d.year === +getLatestYearDocuments(props), props.documents),
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
        filteredDocuments: filter(d => +d.year === +getLatestYearDocuments(nextProps), nextProps.documents),
        latestPopulationData: maxBy(nextProps.data, (o) => o.Population ? o.KPI_Year : 0),
        latestGDPData: maxBy(nextProps.data, (o) => o.GDP ? o.KPI_Year : 0),
        latestPovertyData: maxBy(nextProps.data, (o) => o.Poverty ? o.KPI_Year : 0),
      })
    }
  }

  handleYearChange(year) {
    this.setState({
      year: year.value,
      filteredDocuments: filter(d => +d.year === +year.value, this.props.documents),
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
      <section>

        <Breadcrumbs links={[
          { name: pageData.home, path: "/fdrs/" },
          { name: pageData.navigation[0].name, path: "/fdrs/" },
          { name: pageData.navigation[0].dropdownItems[1], path: "/fdrs/societies" },
          { name: society.NSO_DON_Name, path: undefined }
        ]}/>

        <div className="clearfix bg-secondary px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <Link to="/fdrs/overview" className="block p1">
                  <span className="xs-visible">
                    { t("societies:tabs")[0][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[0][1] }
                </Link>
              </li>
              <li className="inline-block">
                <Link to="/fdrs/societies" className="block bg-white p1">
                  <span className="xs-visible">
                    { t("societies:tabs")[1][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[1][1] }
                </Link>
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
              <FilteredSocietiesSidebar
                nationalSocieties={ this.props.nationalSocieties }
                title={ t("societies:nationalSocieties") }
                filterPlaceholder={ t("societies:searchPlaceholder") }
                noSocietiesText={ t("societies:noSocieties") }
              />
            </aside>

            <div className="col sm-9 md-8 px1">

              <div className="clearfix mxn1 pb2">
                <div className="col sm-8 px1 pb1">
                  <p className="lead">
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
                    { ` ${earliestData.KPI_Year} ` }
                    { t("societies:fillerText")[1] }
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
                      this.getParsed(society.lat),
                      this.getParsed(society.long),
                    ] }
                  />
                </div>
              </div>

              <div className="clearfix mxn1 pb2">
                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPeopleVolunteering">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
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
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ niceNum(latestData.KPI_noPeopleVolunteering) }</p>
                        <p className="m0">{ `people volunteering time for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>{ timeSeriesMeta.filter(obj => obj.id === "KPI_noPeopleVolunteering")[0].description }</p>
                      <p><a href="#">{ "source of the data" }</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestPopulationData.Population, 2) !== "N/A"}>
                    <CardView viewIcon="plainNumber">
                      {
                        niceNum(this.state.latestPopulationData.Population, 2) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="display-2 strong m0">{ niceNum(this.state.latestPopulationData.Population) }</p>
                            <p className="m0">
                              { `The population of ${t(`countries:${society.iso_2}`)} in ${this.state.latestPopulationData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="display-2 strong mb0">{ niceNum(this.state.latestPopulationData.Population) }</p>
                            <p className="m0">
                              { missingDataString("poverty", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
                            </p>
                          </div>
                        )
                      }
                    </CardView>
                    <CardOverlay>
                      <p>
                        {
                          niceNum(latestData.Population, 2) == "N/A" ? (
                            missingDataString("population", t(`countries:${society.iso_2}`), latestData.KPI_Year)
                          ) : (
                            "This card shows the population statistics for " + t(`countries:${society.iso_2}`) + ". It is possible to view the aggregated numbers, as well as gender specific statistics."
                          )
                        }
                      </p>
                      <p><a href="#">{ "source of the data" }</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 lg-4 px1 pb2">
                  <Card indicator="KPI_noLocalUnits">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
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
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ niceNum(latestData.KPI_noLocalUnits) }</p>
                        <p className="m0">{ `local units for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ timeSeriesMeta.filter(obj => obj.id === "KPI_noLocalUnits")[0].description }</p>
                      <p><a href="#">{ "source of the data" }</a></p>
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
                        {
                          // (() => {
                          //   console.group("Data about income and expenditure: ")
                          //   console.log("Data: ", data)
                          //   const max = Number(maxBy(data, d => Number(d["KPI_expenditureLC (CHF)"]))["KPI_expenditureLC (CHF)"])
                          //
                          //   console.log("MAX: ", maxBy(data, d => Number(d["KPI_expenditureLC (CHF)"])))
                          //   console.log("MAX: ", max)
                          //   console.log("Rounded: ", roundIt(max))
                          //
                          //   data.map(dataItem => {
                          //     console.log("Income: ", dataItem["KPI_IncomeLC (CHF)"])
                          //     console.log("Expenditure: ", dataItem["KPI_expenditureLC (CHF)"])
                          //   })
                          //   console.groupEnd("Data about income and expenditure: ")
                          // })()
                        }
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
                                y: Number(d["KPI_expenditureLC (CHF)"]) || null,
                              })
                            }),
                            data.map(d => {
                              return ({
                                x: new Date(d.KPI_Year, 1, 1),
                                y: Number(d["KPI_IncomeLC (CHF)"]) || null,
                              })
                            }),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">{ "View 1" }</CardView>
                    <CardOverlay>
                      <p>
                        { timeSeriesMeta.filter(obj => obj.id === "KPI_IncomeLC (CHF)")[0].description }
                      </p>
                      <p>
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPaidStaff">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
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
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ niceNum(latestData.KPI_noPaidStaff) }</p>
                        <p className="m0">{ `paid staff for ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>
                        { timeSeriesMeta.filter(obj => obj.id === "KPI_noPaidStaff")[0].description }
                      </p>
                      <p>
                        <a href="#">{ "source of the data" }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card initialView={ 0 } bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestPovertyData.Poverty) !== "N/A"}>
                    <CardView viewIcon="plainNumber">
                      {
                        niceNum(this.state.latestPovertyData.Poverty) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="display-2 strong mb0">{ niceNum(this.state.latestPovertyData.Poverty) }%</p>
                            <p className="m0">
                              { `percentage of population of ${t(`countries:${society.iso_2}`)} living below the poverty line in ${this.state.latestPovertyData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="display-2 strong mb0">{ niceNum(this.state.latestPovertyData.Poverty) }</p>
                            <p className="m0">
                              { missingDataString("poverty", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
                            </p>
                          </div>
                        )
                      }
                    </CardView>
                    <CardOverlay>
                      <p>
                        { "This card shows the population statistics for " + t(`countries:${society.iso_2}`) + ". It is possible to view the aggregated numbers, as well as gender specific statistics." }
                      </p>
                      <p>
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
                    <CardView viewIcon="plainNumber">
                      { "View 1" }
                    </CardView>
                    <CardOverlay>
                      <p>
                        { timeSeriesMeta.filter(obj => obj.id === "KPI_noPeopleReachedDisaster")[0].description }
                      </p>
                      <p>
                        <a href="#">{ t("societies:source") }</a>
                      </p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPeopleDonatingBlood">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
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
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="display-1 strong m0">{ niceNum(latestData.KPI_noPeopleDonatingBlood) }</p>
                        <p className="m0">
                          {
                            `people donating blood for ${society.NSO_DON_name} in ${latestData.KPI_Year}`
                          }
                        </p>
                      </div>
                    </CardView>
                    <CardView viewIcon="genderChart">{ "View 2" }</CardView>
                    <CardOverlay>
                      <p>{ timeSeriesMeta.filter(obj => obj.id === "KPI_noPeopleDonatingBlood")[0].description }</p>
                      <p><a href="#">{ "source of the data" }</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestGDPData.GDP) !== "N/A"}>
                    <CardView>
                      {
                        niceNum(this.state.latestGDPData.GDP) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="small strong m0">
                              { niceNum(this.state.latestGDPData.GDP) === "N/A" ? "" : "CHF" }
                            </p>
                            <p className="display-1 strong m0">{ niceNum(this.state.latestGDPData.GDP) }</p>
                            <p className="m0">
                              { `GDP of ${t(`countries:${society.iso_2}`)} in ${this.state.latestGDPData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="display-2 strong mb0">{ niceNum(this.state.latestGDPData.GDP) }</p>
                            <p className="m0">
                              { missingDataString("poverty", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
                            </p>
                          </div>
                        )
                      }
                    </CardView>
                    <CardOverlay>
                      <p>{ "This card shows the population statistics for " + t(`countries:${society.iso_2}`) + ". It is possible to view the aggregated numbers, as well as gender specific statistics." }</p>
                      <p><a href="#">{ "source of the data" }</a></p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-primary" basicCard controlsVisible={false}>
                    <CardView>
                      <div className="pt3 px2">
                        <p className="display-1 lh-1 strong mt0 mb1">
                          { t("societies:callout")[0] }
                        </p>
                        <p className="m0">
                          { t("societies:callout")[1] }
                        </p>
                        <p className="m0">{ t("societies:callout")[2] }<br />{ "ideas@ifrc.org" }</p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ "" }</p>
                    </CardOverlay>
                  </Card>
                </div>

                <div className="col sm-12 px1 pb2">
                  <hr />
                </div>

                {
                  this.state.filteredDocuments.length > 0 ? (
                    <div className="col sm-12 px1 pb2">
                      <div className="relative overflow-hidden shadow-2 pt1 px1 pb2">
                        <h2 className="subhead mt0">
                          { t("societies:documents") }
                          <span className="inline-block align-middle mx1" style={{width:80}}>
                            <Select
                              searchable={ false }
                              clearable={ false }
                              name="year-selector"
                              value={ year }
                              options={ this.yearOptions() }
                              onChange={ this.handleYearChange }
                            />
                          </span>
                        </h2>
                        <div className="clearfix mxn1">
                          {
                            this.state.filteredDocuments.map((doc, i) =>
                              <article className="col sm-4 px1 py05" key={ i }>
                                <div className="clearfix mxn1">
                                  <div className="inline-block align-top sm-12 px1">
                                    <div className="bg-secondary" style={{ width:60,height:60 }}></div>
                                  </div>
                                  <div className="inline-block align-top sm-12 px1">
                                    <h1 className="strong subhead mt0 sm-my1">{ `${doc.document_type} - ${doc.year}` }</h1>
                                    <a href={ 'http://data-staging.ifrc.org/downloads/' + doc.path } target="_blank" rel="noopener noreferrer" className="btn bg-primary">
                                      { t("common:download") }
                                    </a>
                                  </div>
                                </div>
                              </article>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px1">{ t("societies:noDocuments") }</div>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary px1">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              { t("common:updateText") }
            </div>
          </div>
        </div>

        <div className="px1 py4 bg-beige">
          <div className="clearfix mxn1">
            <div className="col sm-4 sm-offset-6 px1">
              <p className="caps small strong">
                { pageData.overviewPreview.subtitle }
              </p>
              <h2 className="headline sm-display-1 light mt0">
                { pageData.overviewPreview.title }
              </h2>
              <p className="lead">
                { pageData.overviewPreview.lead }
              </p>
              <Link to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">
                  { pageData.overviewPreview.button }
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

Society.propTypes = {
  t: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
  society: React.PropTypes.object,
  nationalSocieties: React.PropTypes.array,
  data: React.PropTypes.array,
  documents: React.PropTypes.array,
  timeSeriesMeta: React.PropTypes.array,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Society.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchDocuments, fetchTimeSeriesMeta ]

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

export default translate([ "countries", "societies" ], { wait: true })(connect(makeMapStateToProps)(Society))

// export default connect(makeMapStateToProps)(Society)
