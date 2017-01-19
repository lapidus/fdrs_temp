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

  shouldComponentUpdate(nextProps,nextState) {
    const didYearChange = nextState.year !== this.state.year
    const didSocietyChange = nextProps.society.iso_2 !== this.props.society.iso_2
    return didYearChange || didSocietyChange
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

        <Breadcrumbs links={[
          { name: pageData.home, path: "/fdrs/" },
          { name: pageData.navigation[0].name, path: "/fdrs/" },
          { name: pageData.navigation[0].dropdownItems[1], path: "/fdrs/societies" },
          { name: society.NSO_DON_Name, path: undefined }
        ]}/>

        <div className="clearfix bg-light px1">
          <div className="col sm-10 sm-offset-1 align-right">
            <ul className="p0 m0">
              <li className="inline-block">
                <LanguageLink to="/fdrs/overview/map" className="btn block p1 link-no-underline text-left">
                  <span className="inline-block">
                    <svg style={{width:16,height:16,marginTop:-1,marginRight:8}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)">
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M5.7,3C6.4,3.5,7,4.1,7.5,5C7.9,5.7,8.9,7.8,8,9c-1,1.3-4,1.8-4,3c0,0.9,1.3,2,2,3c1,1.5,0.6,3,0,4c-0.3,0.5-0.8,0.9-1.3,1.2" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M20.6,5.2C18.5,6.3,15.5,7,15,7c-1,0.1-1.2-0.8-2-2c-0.6-0.9-2-2.1-2-3c0-0.4,0-0.7,0.1-1" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <circle fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="12" cy="12" r="11" strokeLinejoin="miter"/>
                        <path fill="none" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" d="M19,12.9c0,3.1-4,6.9-6,6.1c-1.8-0.7-0.5-2.1-1-6.1c-0.2-1.6,1.6-3,3.5-3S19,11.2,19,12.9z" strokeLinejoin="miter" strokeLinecap="butt"/>
                      </g>
                    </svg>
                  </span>
                  <span className="inline-block xs-visible">
                    { t("societies:tabs")[0][0] }&nbsp;
                  </span>
                  { t("societies:tabs")[0][1] }
                </LanguageLink>
              </li>
              <li className="inline-block">
                <LanguageLink to="/fdrs/societies" className="btn block p1 link-no-underline bg-white text-left">
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
                </LanguageLink>
              </li>
            </ul>
          </div>
        </div>

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
            <aside className="col sm-3 px1 sm-visible">
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
                  <p className="text-base sm-text-sm">
                    <GeneratedIntroText
                      societyName={ society.NSO_DON_name }
                      admissionDate={ society.admission_date.split(".")[2] }
                      latestData={ latestData }
                      earliestData={ earliestData }
                      translationText={ t("societies:generatedText") }
                    />
                  </p>
                  <p className="text-base sm-text-sm">
                    { t("societies:fillerText")[0] }
                    { ` ${earliestData.KPI_Year} ` }
                    { t("societies:fillerText")[1] }
                  </p>

                  <div className="clearfix">
                    <div className="left shadow-3">
                      <a target="_blank" href={"/fdrs/societies/" + society.slug + ".pdf"} className="btn link-no-underline px1">
                        { "Download PDF" }
                      </a>
                    </div>
                    <div className="right shadow-3">
                      <a href="https://twitter.com/intent/tweet?text=Society Profile&hashtags=IFRC,FDRS">
                        <ShareBtn service="twitter" />
                      </a>
                      <ShareBtn service="facebook" />
                      <ShareBtn service="mail" />
                    </div>
                  </div>

                </div>
                <div className="col base-8 base-offset-2 xs-6 xs-offset-3 sm-4 sm-offset-0 px1">
                  <Globe
                    selectedCountryName={ t(`countries:${society.iso_2}`) }
                    selectedCountry={ society.iso_2 }
                    center={ [
                      this.getParsed(society.lat),
                      this.getParsed(society.long),
                    ] }
                  />
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
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData.KPI_noPeopleVolunteering) }</p>
                        <p className="m0">{ t("common:indicators.KPI_noPeopleVolunteering.name") + `, ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
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
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData.KPI_noLocalUnits) }</p>
                        <p className="m0">{ t("common:indicators.KPI_noLocalUnits.name") + `, ${society.NSO_DON_name},  ${latestData.KPI_Year}` }</p>
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
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <div className="clearfix mxn1">
                          <div className="col sm-6 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData["KPI_IncomeLC (CHF)"]) }</p>
                            <p className="m0">{ t("common:indicators." + 'KPI_IncomeLC (CHF)' + ".name") + `, ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                          </div>
                          <div className="col sm-6 px1">
                            <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData["KPI_expenditureLC (CHF)"]) }</p>
                            <p className="m0">{ t("common:indicators." + 'KPI_expenditureLC (CHF)' + ".name") + `, ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
                          </div>
                        </div>
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
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      <div className="p1">
                        <p className="text-md sm-text-lg md-text-xl strong m0">{ niceNum(latestData.KPI_noPaidStaff) }</p>
                        <p className="m0">{ t("common:indicators.KPI_noPaidStaff.definition") + `, ${society.NSO_DON_name} in ${latestData.KPI_Year}` }</p>
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
                  <Card>
                    <CardView viewIcon="lineChart">
                      <div className="p1">
                        <h1 className="text-base mt0 mb1">
                          { t("societies:peopleReached") }
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
                                      Number(d.KPI_noPeopleReachedAllServices),
                                      Number(d.KPI_noPeopleReachedDevelopment),
                                      Number(d.KPI_noPeopleCoveredPreparedness),
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
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedAllServices) || null,
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedHealth) || null,
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleReachedDevelopment) || null,
                            })),
                            data.map(d => ({
                              x: new Date(d.KPI_Year, 1, 1),
                              y: Number(d.KPI_noPeopleCoveredPreparedness) || null,
                            })),
                          ] }
                        />
                      </div>
                    </CardView>
                    <CardView viewIcon="plainNumber">
                      { "View 1" }
                    </CardView>
                    <CardOverlay>
                      <p>{ t("common:indicators.KPI_noPeopleReachedAllServices.definition") }</p>
                      <p>Source: { t("common:indicators.KPI_noPeopleReachedAllServices.source") }</p>
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

                {
                  /*
                   * Call to action
                   *
                  */
                }

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
                        <p className="m0">{ t("societies:callout")[2] }<br />{ "fdrs@ifrc.org" }</p>
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
                  /*
                   * Documents
                   *
                  */
                }

                {
                  this.state.filteredDocuments.length > 0 ? (
                    <div className="col sm-12 px1 pb2">
                      <div className="relative overflow-hidden shadow-2 pt1 px1 pb2">
                        <h2 className="text-base mt0">
                          { t("societies:documents") }
                          <span className="inline-block align-middle mx1 select-no-underline" style={{width:110}}>
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
                              <article className="col sm-4 px1 py05 text-center" key={ i }>
                                <div className="clearfix mxn1">
                                  <div className="inline-block align-top px1">
                                    <div style={{ width:48,height:48 }}>
                                      <svg width="48px" height="48px" viewBox="0 0 48 48">
                                        <g transform="translate(0, 0)">
                                          <polyline fill="none" stroke="#c6c6c6" strokeWidth="2" strokeMiterlimit="10" points="30,2 30,14 42,14 " strokeLinejoin="miter" strokeLinecap="butt"/>
                                          <polygon fill="none" stroke="#c6c6c6" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="30,2 6,2 6,46 42,46 42,14 " strokeLinejoin="miter"/>
                                          <line fill="none" stroke="#c6c6c6" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="14" y1="36" x2="34" y2="36" strokeLinejoin="miter"/>
                                          <line fill="none" stroke="#c6c6c6" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="14" y1="26" x2="34" y2="26" strokeLinejoin="miter"/>
                                          <line fill="none" stroke="#c6c6c6" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="14" y1="16" x2="22" y2="16" strokeLinejoin="miter"/>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="inline-block align-top sm-12 px1">
                                    <h1 className="text-base mt0 sm-my1">{ `${doc.document_type} - ${doc.year}` }</h1>
                                    <a href={ 'http://data.ifrc.org/public/' + doc.path } target="_blank" rel="noopener noreferrer" className="btn bg-light">
                                      <span>
                                        <svg style={{width:16,height:16,marginTop:-1,marginRight:8}} width="24px" height="24px" viewBox="0 0 24 24">
                                          <g transform="translate(0, 0)" style={{stroke:"currentcolor"}}>
                                            <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                                            <polyline fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                                            <path fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                                          </g>
                                        </svg>
                                      </span>
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

        {/* <div className="bg-light px1 py05">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
            </div>
          </div>
        </div> */}

        <div className="px1 bg-beige" style={{
            backgroundImage: "url(/img/overview-preview.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% auto",
            backgroundPosition: "center left",
          }}>
          <div className="clearfix mxn1 py6">
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
              <LanguageLink to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">
                  { pageData.overviewPreview.button }
                </span>
              </LanguageLink>
            </div>
          </div>
        </div>

        <div className="px1 bg-light" style={{
              backgroundImage:"url(/img/worldmap.jpeg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
         }}>
          <div className="clearfix mxn1 py6" style={{ background: "rgba(255,255,255,0.5)" }}>
            <div className="col sm-10 sm-offset-1 px1">
              <h2 className="headline sm-display-1 light mt0">
                { pageData.dataCollectors.title }
              </h2>
              <p className="lead">
                { pageData.dataCollectors.lead }
              </p>
              <LanguageLink to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">
                  { pageData.dataCollectors.button }
                </span>
              </LanguageLink>
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

export default translate([ "countries", "societies", "national-societies" ], { wait: true })(connect(makeMapStateToProps)(Society))

// export default connect(makeMapStateToProps)(Society)
