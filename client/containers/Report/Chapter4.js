import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import numberFormatter from "../../utils/numberFormatter"
import HeadlineDivider from "../../components/HeadlineDivider"
import LineChart from "../../components/charts/LineChart"
import { Tabs, TabPanel } from "../../components/Tabs"
import SideNavigation from "../../components/Report/SideNavigation"
import SimpleBarChart from "../../components/charts/SimpleBarChart"
import DonutChart from "../../components/charts/DonutChart"
import WorldMap from "../../components/charts/WorldMap"
import StackedBarChart from "../../components/charts/StackedBarChart"

class Chapter4 extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-strategic-aim-1"]
  }

  render() {
    const { t } = this.props
    const { i18n } = this.context
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

    return (
      <div>

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{ chapter.title }</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{ chapter.subtitle }</h2>
          </div>
        </div>

        <div className="clearfix bg-dark overflow-hidden" style={{
            backgroundImage:"url(/img/chapters/chapter-4.jpg)",
            backgroundSize: "cover",
            backgroundPosition:"center 50%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{t("report-strategic-aim-1:intro")}</p>
            <hr />
          </div>
        </div>

        <div className="px1 pt2 pb3">
          <div className="clearfix mxn1">
            {/* <aside>

            </aside> */}

            <div className="clearfix">
              {
                /*
                 * General
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p>{t("report-strategic-aim-1:general.0")}</p>
                <LineChart
                  title={t("report-strategic-aim-1:general.1.title")}
                  caption={t("report-strategic-aim-1:general.1.caption")}
                  height={300}
                  padding={{
                    top: 30,
                    bottom: 50,
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

              {
                /*
                 * Number of people reached by types of disasters
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  { chapter.title }
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  { section0.title }
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.0.blocks.0")}</p>
                <p>{ t("report-strategic-aim-1:sections.0.blocks.1") }</p>
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
              </div>

              {
                /*
                 * Magnitude of crises tackled by the Red Cross and Red Crescent
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.1.title")}
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.1.blocks.0")}</p>

                <div>
                  <h4 className="text-base sm-text-sm m0">{t("report-strategic-aim-1:sections.1.blocks.1.title")}</h4>
                  <table>
                    <thead className="bg-secondary">
                      <tr className="text-xs text-left">
                        {section1.blocks[1].headers.map((item, i) => (
                          <th key={ i } className="p05 lh-small">{item}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section1.blocks[1].dataset.map((item, i) => (
                        <tr key={ i }>
                          <td className="p05">{item.year}</td>
                          <td className="p05">{item.appealsLaunched}</td>
                          <td className="p05">{item.amount}</td>
                          <td className="p05">{item.beneficiaries}</td>
                          <td className="p05 text-xs">{item.crisis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs">{t("report-strategic-aim-1:sections.1.blocks.1.caption")}</p>
                </div>
              </div>

              {
                /*
                 * Highest and lowest funded appeals
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.2.title")}
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.2.blocks.0")}</p>
              </div>

              <div className="col sm-8 sm-offset-2 md-7 md-offset-3 px1">
                <div className="clearfix mxn1">
                  <div className="col sm-6 px1">
                    <p>{t("report-strategic-aim-1:sections.2.blocks.1")}</p>
                    <p>{t("report-strategic-aim-1:sections.2.blocks.2")}</p>
                  </div>
                  <div className="col sm-6 px1">
                    <h4 className="text-base sm-text-sm m0">{t("report-strategic-aim-1:sections.2.blocks.3.title")}</h4>
                    <Tabs active={0}>
                      <TabPanel title={t("report-strategic-aim-1:sections.2.blocks.3.tabs.0.name")}>
                        <table className="base-12">
                          <thead>
                            <tr>
                              {section2.blocks[3].tabs[0].headers.map((item, i) => {
                                return (<th className="text-xs" key={i}>{item}</th>)
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
                        <table className="base-12">
                          <thead>
                            <tr>
                              {section2.blocks[3].tabs[1].headers.map((item, i) => {
                                return (<th className="text-xs" key={i}>{item}</th>)
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

                    <p className="text-xs">{t("report-strategic-aim-1:sections.2.blocks.3.caption")}</p>
                  </div>
                </div>
              </div>

              {
                /*
                 * Our disaster management system
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.3.title")}
                </h3>
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


              {
                /*
                 * Global logistics service
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.4.title")}
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.4.blocks.2")}</p>
                <LineChart
                  title={t("report-strategic-aim-1:sections.4.blocks.1.title")}
                  caption={t("report-strategic-aim-1:sections.4.blocks.1.caption")}
                  height={480}
                  padding={{
                    top: 20,
                    bottom: 50,
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
                <p>{t("report-strategic-aim-1:sections.4.blocks.3")}</p>
              </div>

              {
                /*
                 * Shelter — more than four walls and a roof
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.5.title")}
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.5.blocks.0")}</p>
              </div>

              <div className="col sm-8 sm-offset-2 md-7 px1">
                <WorldMap
                  title={t("report-strategic-aim-1:sections.5.blocks.1.title")}
                  caption={t("report-strategic-aim-1:sections.5.blocks.1.caption")}
                  choroplethDataset={section5.blocks[1].dataset}
                  />
              </div>

              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p>{t("report-strategic-aim-1:sections.5.blocks.2")}</p>
              </div>

              <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2" style={{position: "relative",minHeight:"600px",backgroundImage:"url(/img/chapters/4/syria-crisis.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
                <div className="col xs-6 xs-offset-6">
                  <h4 className="text-base sm-text-sm m0">The Syria crisis</h4>
                  <p>40 Syrian Arab Red Crescent and 8 Palestinian Red Crescent Society staff and volunteers have lost their lives while providing support since the beginning of the crisis.</p>
                </div>
                <div className="col xs-6 xs-offset-6">
                  <p>2011</p>
                  <p className="display-1 color-primary strong">22.8M</p>
                  <p className="text-xs">total population</p>
                </div>
                <div className="col xs-6">
                  <div className="col xs-6 xs-offset-6 pr1">
                    <p className="display-1 color-primary strong">4.1M</p>
                    <p className="text-xs">people displaced in neighbouring countries</p>
                  </div>
                </div>
                <div className="col xs-6">
                  <p className="display-1 color-primary strong">7.6M</p>
                  <p className="text-xs">internally displaced people</p>
                </div>
              </div>

              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <hr />
              </div>

              <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2" style={{position: "relative",minHeight:"660px",backgroundImage:"url(/img/chapters/4/taiphoon.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
                <div className="col xs-6 pr2">
                  <h4 className="text-base sm-text-sm m0">Taiphoon Haiyan</h4>
                  <p>137 National Societies have supported the operation since the start of the crisis.</p>
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Shelter</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Houses built</div>
                    <div className="col xs-4 right-align">61,328</div>
                    <div className="col xs-8">Beneficiaries</div>
                    <div className="col xs-4 right-align">76,032</div>
                  </div>

                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Livelihood support</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Households supported with livelihood assistance</div>
                    <div className="col xs-4 right-align">58,454</div>
                  </div>

                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Healthcare</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Health facilities rehabilitated or constructed</div>
                    <div className="col xs-4 right-align">32</div>
                    <div className="col xs-8">Households reached</div>
                    <div className="col xs-4 right-align">33,685</div>
                  </div>

                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Water, sanitation and hygiene promotion</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Households participating in hygiene promotion</div>
                    <div className="col xs-4 right-align">34,032</div>
                  </div>
                </div>

                <div className="col xs-6 pr2">
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Education</strong></div>
                    <div className="col xs-4">&nbsp;</div>
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
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Instructors trained in disaster risk reduction</div>
                    <div className="col xs-4 right-align">95</div>
                  </div>
                </div>
              </div>

              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <hr />
              </div>

              <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2" style={{position: "relative",minHeight:"892px",backgroundImage:"url(/img/chapters/4/ebola.svg)",backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}>
                <div className="col xs-6 xs-offset-6">
                  <h4 className="text-base sm-text-sm m0">Ebola virus disease</h4>
                  <p>33 National Societies have supported the operation since the start of the crisis.</p>
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Social mobilisation and beneficiary communication</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">people reached</div>
                    <div className="col xs-4 right-align">7M</div>
                  </div>
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Tracing and monitoring contacts</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">People traced</div>
                    <div className="col xs-4 right-align">&gt97,000</div>
                  </div>
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Safe and dignified burials</strong></div>
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Bodies safely buried</div>
                    <div className="col xs-4 right-align">34,448</div>
                  </div>
                  <div className="clearfix pb1">
                    <div className="col xs-8"><strong>Psychosocial support</strong></div>
                    <div className="col xs-4">&nbsp;</div>
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
                    <div className="col xs-4">&nbsp;</div>
                    <div className="col xs-8">Admissions</div>
                    <div className="col xs-4 right-align">1,341</div>
                    <div className="col xs-8">Discharges</div>
                    <div className="col xs-4 right-align">774</div>
                  </div>
                </div>
              </div>

              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <hr />
              </div>

              {
                /*
                 * Staying safe
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 px1">
                <p className="text-sm color-primary m0">
                  {t("report-strategic-aim-1:title")}
                </p>
                <h3 className="text-md sm-text-lg mt0 light">
                  {t("report-strategic-aim-1:sections.6.title")}
                </h3>
                <HeadlineDivider />
                <p>{t("report-strategic-aim-1:sections.6.blocks.0")}</p>
                <p>{t("report-strategic-aim-1:sections.6.blocks.2")}</p>
                <h4 className="text-base sm-text-sm m0">{t("report-strategic-aim-1:sections.6.blocks.3.title")}</h4>
                <Tabs active={0}>
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
                <p className="text-xs">{t("report-strategic-aim-1:sections.6.blocks.3.caption")}</p>
                <p>{t("report-strategic-aim-1:sections.6.blocks.4")}</p>
              </div>

            </div>
          </div>
        </div>

        <NextChapter nextChapter={ chapter.nextChapter } />
      </div>
    )
  }
}

Chapter4.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-strategic-aim-1" ], { wait: true })(Chapter4)
