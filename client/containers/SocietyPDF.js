import React from "react"
import { connect } from "react-redux"
import LanguageLink  from "../components/LanguageLink"
import Select from "react-select"
import minBy from "lodash/minBy"
import maxBy from "lodash/maxBy"
import max from "lodash/max"
import map from "lodash/fp/map"
import filter from "lodash/fp/filter"
import uniqBy from "lodash/fp/uniqBy"
import sortBy from "lodash/sortBy"
import niceNum from "../utils/niceNum"
import Icon from "../components/Icon"

import { translate } from "react-i18next"

import LineChart from "../components/charts/LineChart"
import Card from "../components/cards/Card"
import CardView from "../components/cards/CardView"
import CardOverlay from "../components/cards/CardOverlay"
import GeneratedIntroText from "../components/GeneratedIntroText"

import {
  makeGetSociety,
  makeGetSocietyData,
  makeGroupTimeSeriesBySociety,
} from "../selectors"
import {
  fetchNationalSocieties,
  fetchTimeSeries,
  fetchTimeSeriesMeta,
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
      lastLanguage: this.context.i18n.language,
      currentLanguage: this.context.i18n.language,
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

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   const didYearChange = nextState.year !== this.state.year
  //   const didSocietyChange = nextProps.society.iso_2 !== this.props.society.iso_2
  //   return didYearChange || didSocietyChange || didLanguageChange
  // }

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

    // <script type="text/javascript" async src="https://platform.twitter.com/widgets.js"></script>

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

        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-8 sm-offset-3 px1 py1">
              <p className="color-primary strong m0 text-base">{ society.NSO_ZON_name }</p>
              <h1 className="text-md sm-text-lg md-text-xl light m0">
                { t("national-societies:" + society.KPI_DON_Code) }
              </h1>
            </header>
          </div>

          <div className="clearfix mxn1">

            <div className="col sm-9 md-8 px1">

              <div className="clearfix mxn1 pb2">
                <div className="col sm-8 px1 pb1">
                  <p className="text-base sm-text-sm">

                   <GeneratedIntroText
                      society={ society }
                      admissionDate={ society.admission_date.split(".")[2] }
                      latestData={ latestData }
                      earliestData={ earliestData }
                    />
                  </p>
                  <p className="text-base sm-text-sm">
                    { t("societies:fillerText")[0] }
                    { ` ${earliestData.KPI_Year} ` }
                    { t("societies:fillerText")[1] }
                  </p>

                </div>
                <div className="col base-8 base-offset-2 xs-6 xs-offset-3 sm-4 sm-offset-0 px1">

                </div>
              </div>

              {
                /*
                 * People volunteering
                 *
                 */
              }

              <div className="clearfix mxn1 pb2">
                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPeopleVolunteering">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        {/* <h1 className="text-base mt0 mb1">{ t("common:indicators.KPI_noPeopleVolunteering") }</h1> */}
                        <h1 className="text-base mt0 mb1">
                          { t("common:indicators.KPI_noPeopleVolunteering.name") }
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
                              datasetName: t("common:indicators.KPI_noPeopleVolunteering.name")
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.KPI_noPeopleVolunteering.definition") }</p>
                      <p>Source: { t("common:indicators.KPI_noPeopleVolunteering.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * Population
                   *
                   */
                }

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestPopulationData.Population, 2) !== "N/A"}>
                    <CardView viewIcon="plainNumber">
                      {
                        niceNum(this.state.latestPopulationData.Population, 2) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestPopulationData.Population) }</p>
                            <p className="m0">
                              { t("common:indicators.Population.name") + `, ${t(`countries:${society.iso_2}`)}, ${this.state.latestPopulationData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestPopulationData.Population) }</p>
                            <p className="m0">
                              { missingDataString("population", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
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
                            t("common:indicators.Population.definition") + "."
                          )
                        }
                      </p>
                      <p>Source: { t("common:indicators.Population.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * Local Units
                   *
                   */
                }

                <div className="col sm-12 lg-4 px1 pb2">
                  <Card indicator="KPI_noLocalUnits">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        {/* <h1 className="text-base mt0 mb1">
                         { t("common:indicators.KPI_noLocalUnits") }</h1> */}
                        <h1 className="text-base mt0 mb1">
                          { t("common:indicators.KPI_noLocalUnits.name") }
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
                              datasetName: t("common:indicators.KPI_noLocalUnits.name")
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.KPI_noLocalUnits.definition") }</p>
                      <p>Source: { t("common:indicators.KPI_noLocalUnits.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * Income + Expenditure
                   *
                   */
                }

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="text-base mt0 mb1">
                          { t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".name") + " and " + t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".name") }
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
                                    return Number(d["KPI_IncomeLC (CHF)"]) || 0
                                  })["KPI_IncomeLC (CHF)"])
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => {
                              return ({
                                x: new Date(d.KPI_Year, 1, 1),
                                y: Number(d["KPI_expenditureLC (CHF)"]) || null,
                                datasetName: t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".name")
                              })
                            }),
                            data.map(d => {
                              return ({
                                x: new Date(d.KPI_Year, 1, 1),
                                y: Number(d["KPI_IncomeLC (CHF)"]) || null,
                                datasetName: t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".name")
                              })
                            }),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".definition") }</p>
                      <p>{ t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".definition") }</p>

                      <p>Source: { t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".source") }</p>

                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * Paid staff
                   *
                   */
                }

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPaidStaff">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        {/* <h1 className="text-base mt0 mb1">
                         { t("common:indicators.KPI_noPaidStaff") }</h1> */}
                        <h1 className="text-base mt0 mb1">
                          { t("common:indicators.KPI_noPaidStaff.name") }
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
                              datasetName: t("common:indicators.KPI_noPaidStaff.name")
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.KPI_noPaidStaff.definition") }</p>
                      <p>Source: { t("common:indicators.KPI_noPaidStaff.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * Poverty
                   *
                   */
                }

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card initialView={ 0 } bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestPovertyData.Poverty) !== "N/A"}>
                    <CardView viewIcon="plainNumber">
                      {
                        niceNum(this.state.latestPovertyData.Poverty) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestPovertyData.Poverty) }%</p>
                            <p className="m0">
                              { t("common:indicators.Poverty.name") + `, ${t(`countries:${society.iso_2}`)}, ${this.state.latestPovertyData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestPovertyData.Poverty) }</p>
                            <p className="m0">
                              { missingDataString("poverty", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
                            </p>
                          </div>
                        )
                      }
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.Poverty.definition") }</p>
                      <p>Source: { t("common:indicators.Poverty.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * People reached
                   *
                   */
                }

                <div className="col sm-12 lg-8 px1 pb2">
                  <Card basicCard>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="text-base mt0 mb1 lh-small">
                          {/* { t("societies:peopleReached") } */}
                          { "Number of people reached: direct and indirect recipients and people covered by Federation services counted, disaggregated by service areas." }
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
                              new Date(earliestData.KPI_Year,1 , 1),
                              new Date(latestData.KPI_Year, 1, 1),
                            ],
                            y: [
                              0,
                              roundIt(
                                (() => {
                                  const highestValues = data.map(d => {
                                    const values = [
                                      Number(d.KPI_noPeopleReachedHealth),
                                      Number(d.KPI_noPeopleReachedDisaster),
                                      Number(d.KPI_noPeopleReachedServices),
                                      Number(d.KPI_noPeopleReachedDevelopment),
                                      // Number(d.KPI_noPeopleReachedAllServices),
                                      // Number(d.KPI_noPeopleCoveredPreparedness),
                                    ]
                                    return max(values)
                                  })
                                  return max(highestValues)
                                })()
                              ),
                            ],
                          }}
                          dataset={ [
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDisaster) || null,
                              datasetName: t("common:indicators.KPI_noPeopleReachedDisaster.name"),
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedServices) || null,
                              datasetName: t("common:indicators.KPI_noPeopleReachedServices.name"),
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedHealth) || null,
                              datasetName: t("common:indicators.KPI_noPeopleReachedHealth.name"),
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDevelopment) || null,
                              datasetName: t("common:indicators.KPI_noPeopleReachedDevelopment.name"),
                            })),
                            // data.map(d => ({
                            //   x: new Date(d.KPI_Year, 1, 1),
                            //   y: Number(d.KPI_noPeopleReachedAllServices) || null,
                            //   datasetName: "People reached by all services",
                            // })),
                            // data.map(d => ({
                            //   x: new Date(d.KPI_Year, 1, 1),
                            //   y: Number(d.KPI_noPeopleCoveredPreparedness) || null,
                            //   datasetName: "People covered by preparedness and risk reduction programmes",
                            // })),
                          ] }
                        />
                      </div>
                    </CardView>
                    {/* <CardView viewIcon="plainNumber">
                     { "View 1" }
                     </CardView> */}
                    <CardOverlay>

                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * People donating blood
                   *
                   */
                }

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card indicator="KPI_noPeopleDonatingBlood">
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        {/* <h1 className="text-base mt0 mb1">
                         { t("common:indicators.KPI_noPeopleDonatingBlood") }</h1> */}
                        <h1 className="text-base mt0 mb1">
                          { t("common:indicators.KPI_noPeopleDonatingBlood.name") }
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
                              datasetName: "People donating blood"
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData.KPI_noPeopleDonatingBlood) }</p>
                        <p className="m0">
                          {
                            t("common:indicators.KPI_noPeopleDonatingBlood.name") + `, ${society.NSO_DON_name} in ${latestData.KPI_Year}`
                          }
                        </p>
                      </div>
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.KPI_noPeopleDonatingBlood.definition") }</p>
                      <p>Source: { t("common:indicators.KPI_noPeopleDonatingBlood.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>

                {
                  /*
                   * GDP
                   *
                   */
                }

                <div className="col sm-6 lg-4 px1 pb2">
                  <Card bgColor="bg-beige" basicCard controlsVisible={niceNum(this.state.latestGDPData.GDP) !== "N/A"}>
                    <CardView>
                      {
                        niceNum(this.state.latestGDPData.GDP) !== "N/A" ? (
                          <div className="pt3 px1">
                            <p className="text-xs strong m0">
                              { niceNum(this.state.latestGDPData.GDP) === "N/A" ? "" : "USD" }
                            </p>
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestGDPData.GDP) }</p>
                            <p className="m0">
                              { t("common:indicators.GDP.name") + `, ${t(`countries:${society.iso_2}`)}, ${this.state.latestGDPData.KPI_Year}` }
                            </p>
                          </div>
                        ) : (
                          <div className="pt3 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(this.state.latestGDPData.GDP) }</p>
                            <p className="m0">
                              { missingDataString("gbp", t(`countries:${society.iso_2}`), latestData.KPI_Year) }
                            </p>
                          </div>
                        )
                      }
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.GDP.definition") }</p>
                      <p>Source: { t("common:indicators.GDP.source") }</p>
                    </CardOverlay>
                  </Card>
                </div>


                <div className="col sm-12 px1 pb2">
                  <hr />
                </div>

              </div>
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

Society.needs = [ fetchNationalSocieties, fetchTimeSeries, fetchTimeSeriesMeta ]

const makeMapStateToProps = () => {
  const getSociety = makeGetSociety()
  const getSocietyData = makeGetSocietyData()
  const groupTimeSeriesBySociety = makeGroupTimeSeriesBySociety()
  return (state, props) => ({
    grouping: groupTimeSeriesBySociety(state, props),
    society: getSociety(state, props),
    data: getSocietyData(state, props),
    nationalSocieties: state.appReducer.nationalSocieties,
    timeSeriesMeta: state.appReducer.timeSeriesMeta,
  })
}

export default translate([ "countries", "societies", "national-societies" ], { wait: true })(connect(makeMapStateToProps)(Society))

// export default connect(makeMapStateToProps)(Society)
