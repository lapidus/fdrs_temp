import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"

import i18n from "../../../i18n"
import { fetchChapter } from "../../../actions/chapterActions"
import NextChapter from "../../../utils/NextChapter"
import numberFormatter from "../../../utils/numberFormatter"
import BreadCrumbs from "../../../components/Breadcrumbs"
import HeadlineDivider from "../../../components/HeadlineDivider"
import LineChart from "../../../components/charts/LineChart"
import { Tabs, TabPanel } from "../../../components/Tabs"
import SideNavigation from "../../../components/Report/SideNavigation"
import SimpleBarChart from "../../../components/charts/SimpleBarChart"
import DonutChart from "../../../components/charts/DonutChart"
import WorldMap from "../../../components/charts/WorldMap"
import StackedBarChart from "../../../components/charts/StackedBarChart"

class Chapter4 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("Mounted Strategic Aim 1")
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    const newDataAvailable = newProps.content[newContext.language].chapters["strategic-aim-1"] !== undefined
    const sameData = this.props.content[this.context.language].chapters["strategic-aim-1"] === newProps.content[newContext.language].chapters["who-we-are"]
    return newDataAvailable && !sameData
  }
  componentDidUpdate() {
    if (i18n.store.data[i18n.language]["strategic-aim-1"])
      document.body.classList.add("html-ready")
  }
  render() {
    const { t } = this.props
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-strategic-aim-1"]
    const [
      section0,
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
    ] = chapter.sections

    console.log("wwwww", section5.blocks[1].dataset)

    return (
      <div>
        <div className="clearfix bg-primary-dark">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1">
            <BreadCrumbs chapter={chapter} language={language}/>
          </div>
        </div>

        <div className="clearfix bg-primary pt1">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <h2 className="display-2">{t("report-strategic-aim-1:title")}</h2>
            <p className="title">{t("report-strategic-aim-1:subtitle")}</p>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-4.jpg)",backgroundSize: "cover",backgroundPosition:"center 50%",backgroundRepeat:"no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p className="lead">{t("report-strategic-aim-1:intro")}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          <SideNavigation
            title={t("report-strategic-aim-1:title")}
            sections={chapter.sections}
            sectionReferences={[
              "scroll-target-section0",
              "scroll-target-section1",
              "scroll-target-section2",
              "scroll-target-section3",
              "scroll-target-section4",
              "scroll-target-section5",
              "scroll-target-section6"
            ]}
          />

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{t("report-strategic-aim-1:general.0")}</p>

              <LineChart
                title={t("report-strategic-aim-1:general.1.title")}
                caption={t("report-strategic-aim-1:general.1.caption")}
                height={300}
                padding={{
                  top: 30,
                  bottom: 40,
                  left: 60,
                  right: 60
                }}
                domain={{
                  x: [new Date(2009,1,1), new Date(2015,1,1)],
                  y: [200,410]
                }}
                axisLabels={t("report-strategic-aim-1:general.1.axisLabels")}
                labels={t("report-strategic-aim-1:general.1.lineLabels")}
                dataset={[
                  chapter.general[1].dataset.map((item, i) => {
                    return {x: new Date(+item.year,1,1), y: +item.disasters}
                  })
                ]}
              />
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.0.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.0.blocks.0")}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-3 md-offset-3 lg-3 lg-offset-3 sm-pr1">
              <p>{t("report-strategic-aim-1:sections.0.blocks.1")}</p>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3">

              <StackedBarChart
                title={t("report-strategic-aim-1:sections.0.blocks.2.title")}
                caption={t("report-strategic-aim-1:sections.0.blocks.2.caption")}
                height={360}
                width={480}
                padding={{
                  top: 60,
                  bottom: 30,
                  left: 30,
                  right: 100
                }}
                customFills={section0.blocks[2].customFills}
                labels={
                  section0.blocks[2].dataset.map((item, i) => {
                    // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                    return { text: item.name, number: numberFormatter.addCommas(Math.round(+item.total)) }
                  })
                }
                data={[
                  section0.blocks[2].dataset.map((item, i) => {
                    return { x: +item.index, y: +item.numbers[0], name: item.labels[0] }
                  }),
                  section0.blocks[2].dataset.map((item, i) => {
                    return { x: +item.index, y: +item.numbers[1], name: item.labels[1] }
                  }),
                  section0.blocks[2].dataset.map((item, i) => {
                    return { x: +item.index, y: +item.numbers[2], name: item.labels[2] }
                  }),
                  section0.blocks[2].dataset.map((item, i) => {
                    return { x: +item.index, y: +item.numbers[3], name: item.labels[3] }
                  })
                ]}
                />



              { /* <SimpleBarChart
                title={t("report-strategic-aim-1:sections.0.blocks.2.title")}
                caption={t("report-strategic-aim-1:sections.0.blocks.2.caption")}
                horizontal={true}
                height={240}
                padding={{
                  top: 40,
                  bottom: 40,
                  left: 40,
                  right: 210
                }}
                data={t("report-strategic-aim-1:sections.0.blocks.2.dataset")}
                labels={
                  section0.blocks[2].dataset.map((item, i) => {
                    return `${item.x} (${numberFormatter.addCommas(item.y)})`
                  })
                }
                /> */ }
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.1.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.1.blocks.0")}</p>
              <div>
                <h4 className="title strong">{t("report-strategic-aim-1:sections.1.blocks.1.title")}</h4>
                <table>
                  <thead>
                    <tr className="small">
                      {section1.blocks[1].headers.map((item, i) => {
                        return (<th key={ i }>{item}</th>)
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {section1.blocks[1].dataset.map((item, i) => {
                      return (
                        <tr key={ i }>
                          <td>{item.year}</td>
                          <td>{item.appealsLaunched}</td>
                          <td>{item.amount}</td>
                          <td>{item.beneficiaries}</td>
                          <td className="small">{item.crisis}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <p className="small">{t("report-strategic-aim-1:sections.1.blocks.1.caption")}</p>
              </div>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section2">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.2.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.2.blocks.0")}</p>
            </div>

            <div className="clearfix">
              <div className="col px1 sm-px0 sm-6 md-4 md-offset-3 lg-4 lg-offset-2">
                <div className="col sm-8 sm-offset-4 md-11 md-offset-0 lg-9 lg-offset-3 sm-pr1">
                  <p>{t("report-strategic-aim-1:sections.2.blocks.1")}</p>
                </div>
                <div className="col sm-8 sm-offset-4 md-11 md-offset-0 lg-9 lg-offset-3 sm-pr1">
                  <p>{t("report-strategic-aim-1:sections.2.blocks.2")}</p>
                </div>
              </div>
              <div className="col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4">
                <h4 className="title strong">{t("report-strategic-aim-1:sections.2.blocks.3.title")}</h4>

                <Tabs activeTab={0}>
                  <TabPanel title={t("report-strategic-aim-1:sections.2.blocks.3.tabs.0.name")}>
                    <table>
                      <thead>
                        <tr>
                          {section2.blocks[3].tabs[0].headers.map((item, i) => {
                            return (<th className="small" key={i}>{item}</th>)
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {section2.blocks[3].tabs[0].dataset.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.country}</td>
                              <td>{item.percentage}%</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                  <TabPanel title={t("report-strategic-aim-1:sections.2.blocks.3.tabs.1.name")}>
                    <table>
                      <thead>
                        <tr>
                          {section2.blocks[3].tabs[1].headers.map((item, i) => {
                            return (<th className="small" key={i}>{item}</th>)
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {section2.blocks[3].tabs[1].dataset.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.country}</td>
                              <td>{item.percentage}%</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                </Tabs>

                <p className="small">{t("report-strategic-aim-1:sections.2.blocks.3.caption")}</p>
              </div>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section3">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.3.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.3.blocks.0")}</p>
              <DonutChart
                title={ t("report-strategic-aim-1:sections.3.blocks.1.title") }
                caption={ t("report-strategic-aim-1:sections.3.blocks.1.caption") }
                maxSize={ 480 }
                dataset={ section3.blocks[1].dataset }
              />
              <p>{t("report-strategic-aim-1:sections.3.blocks.2")}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section4">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.4.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.4.blocks.0")}</p>
            </div>

            <div className="clearfix">
              <div className="col px1 sm-px0 sm-5 sm-offset-1 md-4 md-offset-3 lg-4 lg-offset-2">
                <LineChart
                  title={t("report-strategic-aim-1:sections.4.blocks.1.title")}
                  caption={t("report-strategic-aim-1:sections.4.blocks.1.caption")}
                  height={480}
                  padding={{
                    top: 30,
                    bottom: 40,
                    left: 60,
                    right: 60
                  }}
                  domain={{
                    x: [new Date(2010,1,1), new Date(2015,1,1)],
                    y: [40,160]
                  }}
                  axisLabels={section4.blocks[1].axisLabels}
                  labels={section4.blocks[1].lineLabels}
                  dataset={[
                    section4.blocks[1].dataset[0].map((item, i) => {
                      return { x: new Date(item.year,1,1), y: +item.value }
                    }),
                    section4.blocks[1].dataset[1].map((item, i) => {
                      return { x: new Date(item.year,1,1), y: +item.value }
                    }),
                  ]}
                />
              </div>
              <div className="col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4">
                <p>{t("report-strategic-aim-1:sections.4.blocks.2")}</p>
                <p>{t("report-strategic-aim-1:sections.4.blocks.3")}</p>
              </div>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section5">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.5.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.5.blocks.0")}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2">
              <WorldMap
                title={t("report-strategic-aim-1:sections.5.blocks.1.title")}
                caption={t("report-strategic-aim-1:sections.5.blocks.1.caption")}
                choroplethDataset={section5.blocks[1].dataset}
                />
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p>{t("report-strategic-aim-1:sections.5.blocks.2")}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" style={{position: "relative",minHeight:"600px",backgroundImage:"url(/img/chapters/4/syria-crisis.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
              <div className="col xs-6 xs-offset-6">
                <h4 className="title strong">The Syria crisis</h4>
                <p>40 Syrian Arab Red Crescent and 8 Palestinian Red Crescent Society staff and volunteers have lost their lives while providing support since the beginning of the crisis.</p>
              </div>
              <div className="col xs-6 xs-offset-6">
                <p>2011</p>
                <p className="display-1 color-primary strong">22.8M</p>
                <p className="small">total population</p>
              </div>
              <div className="col xs-6">
                <div className="col xs-6 xs-offset-6 pr1">
                  <p className="display-1 color-primary strong">4.1M</p>
                  <p className="small">people displaced in neighbouring countries</p>
                </div>
              </div>
              <div className="col xs-6">
                <p className="display-1 color-primary strong">7.6M</p>
                <p className="small">internally displaced people</p>
              </div>
            </div>
          </div>

          <div className="clearfix"><div className="col sm-5 sm-offset-3 py1"><hr /></div></div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2" style={{position: "relative",minHeight:"660px",backgroundImage:"url(/img/chapters/4/taiphoon.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
              <div className="col xs-6 pr2">
                <h4 className="title strong">Taiphoon Haiyan</h4>
                <p>137 National Societies have supported the operation since the start of the crisis.</p>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Shelter</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Houses built</div>
                  <div className="col xs-4 right-align">61,328</div>
                  <div className="col xs-8">Beneficiaries</div>
                  <div className="col xs-4 right-align">76,032</div>
                </div>

                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Livelihood support</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Households supported with livelihood assistance</div>
                  <div className="col xs-4 right-align">58,454</div>
                </div>

                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Healthcare</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Health facilities rehabilitated or constructed</div>
                  <div className="col xs-4 right-align">32</div>
                  <div className="col xs-8">Households reached</div>
                  <div className="col xs-4 right-align">33,685</div>
                </div>

                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Water, sanitation and hygiene promotion</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Households participating in hygiene promotion</div>
                  <div className="col xs-4 right-align">34,032</div>
                </div>
              </div>

              <div className="col xs-6 pr2">
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Education</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Classrooms repaired and constructed</div>
                  <div className="col xs-4 right-align">224</div>
                  <div className="col xs-8">Students covered by repaired and constructed classrooms</div>
                  <div className="col xs-4 right-align">48,731</div>
                </div>

                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>
                <br className="xs-visible"/>

                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Disaster risk reduction</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Instructors trained in disaster risk reduction</div>
                  <div className="col xs-4 right-align">95</div>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"><div className="col sm-5 sm-offset-3 py1"><hr /></div></div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2" style={{position: "relative",minHeight:"892px",backgroundImage:"url(/img/chapters/4/ebola.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
              <div className="col xs-6 xs-offset-6">
                <h4 className="title strong">Ebola virus disease</h4>
                <p>33 National Societies have supported the operation since the start of the crisis.</p>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Social mobilisation and beneficiary communication</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">people reached</div>
                  <div className="col xs-4 right-align">7M</div>
                </div>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Tracing and monitoring contacts</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">People traced</div>
                  <div className="col xs-4 right-align">&gt97,000</div>
                </div>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Safe and dignified burials</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Bodies safely buried</div>
                  <div className="col xs-4 right-align">34,448</div>
                </div>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Psychosocial support</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">People supported</div>
                  <div className="col xs-4 right-align">&gt339,000</div>
                </div>
              </div>
              <div className="col xs-6">
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Volunteers trained in Ebola response</strong></div>
                  <div className="col xs-4">6,927</div>
                </div>
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Volunteers currently active</strong></div>
                  <div className="col xs-4">3,917</div>
                </div>
              </div>
              <div className="col sm-6">
                <div className="clearfix pb1">
                  <div className="col xs-8"><strong>Clinical case management</strong></div>
                  <div className="col xs-4">&nbsp</div>
                  <div className="col xs-8">Admissions</div>
                  <div className="col xs-4 right-align">1,341</div>
                  <div className="col xs-8">Discharges</div>
                  <div className="col xs-4 right-align">774</div>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"><div className="col sm-5 sm-offset-3 py1"><hr /></div></div>

          <div className="clearfix" id="scroll-target-section6">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{t("report-strategic-aim-1:title")}</p>
              <h3 className="headline">{t("report-strategic-aim-1:sections.6.title")}</h3>
              <HeadlineDivider />
              <p>{t("report-strategic-aim-1:sections.6.blocks.0")}</p>
              <SimpleBarChart
                title={t("report-strategic-aim-1:sections.6.blocks.1.title")}
                caption={t("report-strategic-aim-1:sections.6.blocks.1.caption")}
                horizontal={false}
                height={300}
                data={section6.blocks[1].dataset.map((item, i) => {
                  return { y: +item.value, x: new Date(item.year,1,1) }
                })}
                labels={section6.blocks[1].barLabels}
                tickValues={section6.blocks[1].dataset.map((item, i) => {
                  return new Date(item.year,1,1)
                })}
                tickFormat={(x) => x.getFullYear()}
                axisLabels={section6.blocks[1].axisLabels}
                />
              <p>{t("report-strategic-aim-1:sections.6.blocks.2")}</p>
              <div>
                <h4 className="title strong">{t("report-strategic-aim-1:sections.6.blocks.3.title")}</h4>
                <Tabs activeTab={0}>
                  <TabPanel title={t("report-strategic-aim-1:sections.6.blocks.3.tabs.0.name")}>
                    <DonutChart
                      maxSize={480}
                      dataset={section6.blocks[3].tabs[0].dataset}
                    />
                  </TabPanel>
                  <TabPanel title={t("report-strategic-aim-1:sections.6.blocks.3.tabs.1.name")}>
                    <DonutChart
                      maxSize={480}
                      dataset={section6.blocks[3].tabs[1].dataset}
                    />
                  </TabPanel>
                </Tabs>
                <p className="small">{t("report-strategic-aim-1:sections.6.blocks.3.caption")}</p>
              </div>
              <p>{t("report-strategic-aim-1:sections.6.blocks.4")}</p>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter4.needs = [ fetchChapter ]

Chapter4.contextTypes = {
  language: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    // language: state.appReducer.language,
    content: {
      en: state.chapterReducer.en,
      fr: state.chapterReducer.fr,
      es: state.chapterReducer.es,
      ar: state.chapterReducer.ar
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     changeDataset: (id) => {
//       dispatch(changeDataset(id))
//     }
//   }
// }

export default translate(["report-strategic-aim-1"], {wait: true})(connect(mapStateToProps)(Chapter4))
